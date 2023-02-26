import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { GoSignOut } from "react-icons/go";
import { AiOutlineHome } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { RiMenuUnfoldFill } from "react-icons/ri";
import useProfileAPI from "../../Hooks/useProfileAPI"

const DashboardLayout = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(true);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const url = "https://nerd-academy-server.vercel.app/users"
  const query = user?.email
  const queryName = "email"

  const { datas, refetch } = useProfileAPI(url, queryName, query)

  refetch();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Sign Out Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="mx-auto dark:bg-accent">
      <div className="mx-2 mt-2">
        <button
          onClick={toggleDrawer}
          className="btn text-2xl text-white bg-gradient-to-r from-primary to-secondary border-none 
          btn-sm"
        >
          <RiMenuUnfoldFill />
        </button>
      </div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content px-5 md:pl-[7rem] ml-0 md:ml-72 dark:bg-accent">
          <Outlet />
        </div>
        <>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="left"
            enableOverlay={false}
            style={{ width: "320px" }}
          >
            <div className="drawer-side border dark:bg-accent h-screen">
              <div className="mx-2 flex justify-start">
                <button
                  onClick={toggleDrawer}
                  className="btn text-2xl text-white btn-sm  bg-gradient-to-r from-primary 
                  to-secondary border-none mt-2"
                >
                  <RiMenuUnfoldFill />
                </button>
              </div>

              <label
                htmlFor="dashboard-drawer"
                className="drawer-overlay"
              ></label>
              {/* Logo here in this div */}

              <div className="mt-12 text-center">
                <img
                  className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
                  src={datas?.body?.picture}
                  alt=""
                  srcset=""
                />
                <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 dark:text-white lg:block uppercase">
                  {datas?.name}
                </h5>
                <span className="hidden text-gray-400 dark:text-white lg:block capitalize font-bold">
                  {datas?.role}
                </span>
              </div>

              <ul className="mt-2 menu p-4 w-80 lg:bg-opacity-0 text-white">
                <div>
                  <ul className="space-y-2 tracking-wide text-white ">
                    <li>
                      <Link
                        to="/dashboard"
                        aria-label="dashboard"
                        className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-primary to-secondary"
                      >
                        <svg
                          className="-ml-1 h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                            className="fill-current text-cyan-400 dark:fill-slate-600"
                          ></path>
                          <path
                            d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                            className="fill-current text-cyan-200 group-hover:text-cyan-300"
                          ></path>
                          <path
                            d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                            className="fill-current group-hover:text-sky-300"
                          ></path>
                        </svg>
                        <span className="-mr-1 font-medium text-white dark:text-white">
                          Dashboard
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dashboard/myCourse"
                        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 dark:text-white group"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            className="fill-current text-gray-300dark:text-white  group-hover:text-primary"
                            fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                            clip-rule="evenodd"
                          />
                          <path
                            className="fill-current text-gray-600 dark:text-white group-hover:text-secondary"
                            d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                          />
                        </svg>
                        <span className="group-hover:text-gray-700 dark:text-white text-black">
                          My Courses
                        </span>
                        {/* <Link to="/dashboard/myCourse"><span className="group-hover:text-gray-700">My Courses</span></Link> */}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dashboard/add-course"
                        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 dark:text-white group"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            className="fill-current text-gray-300 dark:text-white group-hover:text-primary"
                            fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                            clip-rule="evenodd"
                          />
                          <path
                            className="fill-current text-gray-600 dark:text-white group-hover:text-secondary"
                            d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                          />
                        </svg>
                        <span className="group-hover:text-gray-700 text-black dark:text-white">
                          Add Course
                        </span>
                        {/* <Link to="/dashboard/myCourse"><span className="group-hover:text-gray-700">My Courses</span></Link> */}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dashboard/DasboardReview"
                        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                      >
                        <img
                          className="h-5 w-5"
                          src="https://cdn-icons-png.flaticon.com/512/9474/9474993.png"
                          alt=""
                          srcset=""
                        />
                        <span className="group-hover:text-gray-700 text-black dark:text-white">
                          Review
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/dashboard/order"
                        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                      >
                        <img
                          className="h-5 w-5"
                          src="https://cdn-icons-png.flaticon.com/512/3500/3500833.png"
                          alt=""
                          srcset=""
                        />
                        <span className="group-hover:text-gray-700 text-black dark:text-white">
                          Order History
                        </span>
                        {/* <Link to="/dashboard/profile"><span className="group-hover:text-gray-700">Profile</span></Link> */}
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/dashboard/my-profile"
                        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                      >
                        <img
                          className="h-5 w-5"
                          src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                          alt=""
                          srcset=""
                        />
                        <span className="group-hover:text-gray-700 text-black dark:text-white">
                          My Profile
                        </span>
                        {/* <Link to="/dashboard/settings"><span className="group-hover:text-gray-700">Settings</span></Link> */}
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/dashboard/students"
                        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 dark:text-white group"
                      >
                        <span className="h-5 w-5">
                          <ImProfile></ImProfile>
                        </span>
                        <span className="group-hover:text-gray-700 text-black dark:text-white">
                          My Students
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/"
                        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 dark:text-white group"
                      >
                        <span className="h-5 w-5">
                          <AiOutlineHome></AiOutlineHome>
                        </span>
                        <span className="group-hover:text-gray-700 text-black dark:text-white">
                          Home
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={handleLogOut}
                        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600  group"
                      >
                        <GoSignOut></GoSignOut>
                        <span className="group-hover:text-gray-700 text-black dark:text-white">
                          Log Out
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </ul>

              <div className="space-y-2 pt-2">
                <Link
                  to=""
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
                ></Link>
              </div>
            </div>
          </Drawer>
        </>
      </div>
    </div>
  );
};

export default DashboardLayout;

// return (
// <div className="mx-auto">
//   <div className="drawer drawer-mobile">
//     <input
//       id="dashboard-drawer"
//       type="checkbox"
//       className="drawer-toggle"
//     />
//     <div className="drawer-content px-5 md:px-14 dark:bg-accent">
//       <Outlet />
//     </div>
//     <div className="drawer-side border dark:border-primary dark:bg-accent">
//       <label
//         htmlFor="dashboard-drawer"
//         className="drawer-overlay"
//       ></label>
//       {/* Logo here in this div */}

//       <div className="mt-12 text-center">
//         <img
//           className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28 dark:text-white"
//           src={profile?.body?.picture}
//           alt=""
//           srcset=""
//         />
//         <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block uppercase dark:text-white">
//           {profile?.name}
//         </h5>
//         <span className="hidden text-gray-400 lg:block capitalize font-bold dark:text-white">
//           {profile?.role}
//         </span>
//       </div>

//       <ul className="mt-2 menu p-4 w-80 lg:bg-opacity-0 text-white">
//         <div>
//           <ul className="space-y-2 tracking-wide text-white ">
//             <li>
//               <Link
//                 to="/dashboard"
//                 aria-label="dashboard"
//                 className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-primary to-secondary"
//               >
//                 <svg
//                   className="-ml-1 h-6 w-6"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                 >
//                   <path
//                     d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
//                     className="fill-current text-cyan-400 dark:fill-slate-600"
//                   ></path>
//                   <path
//                     d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
//                     className="fill-current text-cyan-200 group-hover:text-cyan-300"
//                   ></path>
//                   <path
//                     d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
//                     className="fill-current group-hover:text-sky-300"
//                   ></path>
//                 </svg>
//                 <span className="-mr-1 font-medium text-white dark:text-white">
//                   Dashboard
//                 </span>
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/dashboard/myCourse"
//                 className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     className="fill-current text-gray-300 group-hover:text-primary"
//                     fill-rule="evenodd"
//                     d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
//                     clip-rule="evenodd"
//                   />
//                   <path
//                     className="fill-current text-gray-600 group-hover:text-secondary"
//                     d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
//                   />
//                 </svg>
//                 <span className="group-hover:text-gray-700 text-black dark:text-white">
//                   My Courses
//                 </span>
//                 {/* <Link to="/dashboard/myCourse"><span className="group-hover:text-gray-700">My Courses</span></Link> */}
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/dashboard/add-course"
//                 className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     className="fill-current text-gray-300 group-hover:text-primary"
//                     fill-rule="evenodd"
//                     d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
//                     clip-rule="evenodd"
//                   />
//                   <path
//                     className="fill-current text-gray-600 group-hover:text-secondary"
//                     d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
//                   />
//                 </svg>
//                 <span className="group-hover:text-gray-700 text-black dark:text-white">
//                   Add Course
//                 </span>
//                 {/* <Link to="/dashboard/myCourse"><span className="group-hover:text-gray-700">My Courses</span></Link> */}
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/dashboard/DasboardReview"
//                 className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
//               >
//                 <img
//                   className="h-5 w-5"
//                   src="https://cdn-icons-png.flaticon.com/512/9474/9474993.png"
//                   alt=""
//                   srcset=""
//                 />
//                 <span className="group-hover:text-gray-700 text-black dark:text-white">
//                   Review
//                 </span>
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/dashboard/order"
//                 className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
//               >
//                 <img
//                   className="h-5 w-5"
//                   src="https://cdn-icons-png.flaticon.com/512/3500/3500833.png"
//                   alt=""
//                   srcset=""
//                 />
//                 <span className="group-hover:text-gray-700 text-black dark:text-white">
//                   Order History
//                 </span>
//                 {/* <Link to="/dashboard/profile"><span className="group-hover:text-gray-700">Profile</span></Link> */}
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/dashboard/my-profile"
//                 className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
//               >
//                 <img
//                   className="h-5 w-5"
//                   src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
//                   alt=""
//                   srcset=""
//                 />
//                 <span className="group-hover:text-gray-700 text-black dark:text-white">
//                   My Profile
//                 </span>
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/dashboard/students"
//                 className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
//               >
//                 <span className="h-5 w-5">
//                   <ImProfile></ImProfile>
//                 </span>
//                 <span className="group-hover:text-gray-700 text-black dark:text-white">
//                   My Students
//                 </span>
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/"
//                 className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
//               >
//                 <span className="h-5 w-5">
//                   <AiOutlineHome></AiOutlineHome>
//                 </span>
//                 <span className="group-hover:text-gray-700 text-black dark:text-white">
//                   Home
//                 </span>
//               </Link>
//             </li>

//             <li>
//               <Link
//                 onClick={handleLogOut}
//                 className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
//               >
//                 <GoSignOut></GoSignOut>
//                 <span className="group-hover:text-gray-700 text-black dark:text-white">
//                   Log Out
//                 </span>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </ul>

//       <div className="space-y-2 pt-2">
//         <Link
//           to=""
//           className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 dark:text-white
//          group transition duration-75 flex items-center p-2"
//         ></Link>
//       </div>
//     </div>
//   </div>
// </div>
