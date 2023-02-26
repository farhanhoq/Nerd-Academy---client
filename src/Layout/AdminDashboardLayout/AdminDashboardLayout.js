import React, { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaUsers } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { GrMenu } from "react-icons/gr";
import { FaBlog } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { AuthContext } from "../../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { RiMenuUnfoldFill } from "react-icons/ri";
import useProfileAPI from "../../Hooks/useProfileAPI"

const AdminDashboardLayout = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(true);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const url = "https://nerd-academy-server.vercel.app/users";
  const query = user?.email;
  const queryName = "email"

  const { datas } = useProfileAPI(url, queryName, query)

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
    <div className="mx-auto dark:bg-accent dark:text-white">
      <div className="mx-2 mt-2">
        <button
          onClick={toggleDrawer}
          className="btn text-2xl text-white btn-sm bg-gradient-to-r from-primary 
          to-secondary border-none"
        >
          <RiMenuUnfoldFill />
        </button>
      </div>
      <div className="drawer drawer-mobile dark:bg-accent">
        <input
          id="admin-dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content px-5 md:pl-[7rem] ml-0 md:ml-72">
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
            <div className="drawer-side border dark:bg-accent">
              <div className="m-2">
                <button
                  onClick={toggleDrawer}
                  className="btn text-2xl text-white btn-sm mt-2 bg-gradient-to-r from-primary 
                  to-secondary border-none"
                >
                  <RiMenuUnfoldFill />
                </button>
              </div>
              <label
                htmlFor="admin-dashboard-drawer"
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
                <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block uppercase dark:text-white">
                  {datas?.name}
                </h5>
                <span className="hidden text-gray-400 lg:block capitalize font-bold dark:text-white">
                  {datas?.role}
                </span>
              </div>

              <ul className="mt-2 lg:mt-2 menu p-4 w-80 lg:bg-opacity-0 text-white dark:text-white">
                <div>
                  <ul className="space-y-2 tracking-wide ">
                    <li>
                      <Link
                        to="/admin-dashboard"
                        aria-label="dashboard"
                        className="relative px-4 py-3 flex items-center space-x-4 rounded-xl 
                        bg-gradient-to-r from-primary to-secondary"
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
                        <span className="-mr-1 font-medium dark:text-white">
                          Dashboard
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/admin-dashboard/all-instructor"
                        className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2
                         hover:bg-gray-100 hover:dark:bg-secondary group"
                      >
                        <svg
                          className="w-6 h-6 text-gray-500 dark:text-white hover:dark:text-white flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="ml-3 flex-1 whitespace-nowrap lg:text-black dark:text-white">
                          Instructor
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/admin-dashboard/customer"
                        className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2
                         hover:bg-gray-100  hover:dark:bg-secondary group"
                      >
                        <FaUsers className="text-xl text-grey dark:text-white"></FaUsers>
                        <span className="ml-3 flex-1 whitespace-nowrap  lg:text-black dark:text-white">
                          Students
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/admin-dashboard/courses"
                        className="text-base text-gray-900 font-normal hover:dark:bg-secondary rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                      >
                        <RiAdminLine className="text-xl text-grey dark:text-white "></RiAdminLine>
                        <span className="ml-3 flex-1 whitespace-nowrap lg:text-black dark:text-white">
                          Courses
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin-dashboard/profile"
                        className="text-base text-gray-900 font-normal hover:dark:bg-secondary rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                      >
                        <img
                          className="h-5 w-5 text-xl text-grey dark:text-white"
                          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                          alt=""
                          srcset=""
                        />
                        <span className="ml-3 flex-1 whitespace-nowrap lg:text-black dark:text-white">
                          My Profile
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/admin-dashboard/menus"
                        className="text-base text-gray-900 font-normal hover:dark:bg-secondary rounded-lg flex items-center 
                        p-2 hover:bg-gray-100 group"
                      >
                        <GrMenu className="text-xl text-grey dark:text-white"></GrMenu>
                        <span className="ml-3 flex-1 whitespace-nowrap lg:text-black dark:text-white">
                          Menu
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/admin-dashboard/blogs"
                        className="text-base text-gray-900 font-normal hover:dark:bg-secondary rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                      >
                        <FaBlog className="text-xl text-grey dark:text-white"></FaBlog>
                        <span className="ml-3 flex-1 whitespace-nowrap dark:text-white">
                          Blogs
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/"
                        className="text-base text-gray-900 font-normal hover:dark:bg-secondary rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                      >
                        <AiOutlineHome className="text-xl text-grey dark:text-white"></AiOutlineHome>
                        <span className="ml-3 flex-1 whitespace-nowrap dark:text-white">
                          Home
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={handleLogOut}
                        className="text-base text-gray-900 font-normal hover:dark:bg-secondary rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                      >
                        <GoSignOut className="dark:text-white"></GoSignOut>
                        <span className="ml-3 flex-1 whitespace-nowrap dark:text-white">
                          Log Out
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </Drawer>
        </>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
