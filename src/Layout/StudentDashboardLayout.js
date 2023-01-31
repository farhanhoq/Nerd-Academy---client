import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Navbar from '../pages/Shared/Navbar';
import graduated from '../Assets/graduated.png';

const StudentDashboardLayout = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('Sign Out Successfully');
        navigate('/');
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <div className="mx-auto">
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content px-5 md:px-14 my-16">
          <Outlet />
        </div>
        <div className="drawer-side border">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          {/* Logo here in this div */}
          <div class="">
            <Link to="#" title="home">
              <img className="w-32" src="" alt="" srcset="" />
            </Link>
          </div>

          <div class="mt-16 text-center">
            <img
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
              src={graduated}
              alt=""
              srcset=""
            />
            <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              Jerge Chamas
            </h5>
            <span class="hidden text-gray-400 lg:block">Student</span>
          </div>

          <ul className="menu p-4 w-80 lg:bg-opacity-0 text-white">
            <div>
              <ul class="space-y-2 tracking-wide text-white ">
                <li>
                  <Link
                    to="/student-dashboard"
                    aria-label="dashboard"
                    class="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                  >
                    <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                        class="fill-current text-cyan-400 dark:fill-slate-600"
                      ></path>
                      <path
                        d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                        class="fill-current text-cyan-200 group-hover:text-cyan-300"
                      ></path>
                      <path
                        d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                        class="fill-current group-hover:text-sky-300"
                      ></path>
                    </svg>
                    <span class="-mr-1 font-medium">Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/student-dashboard/student-courses"
                    class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        class="fill-current text-gray-300 group-hover:text-cyan-300"
                        fill-rule="evenodd"
                        d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                        clip-rule="evenodd"
                      />
                      <path
                        class="fill-current text-gray-600 group-hover:text-cyan-600"
                        d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                      />
                    </svg>
                    <span class="group-hover:text-gray-700">My Courses</span>
                    {/* <Link to="/dashboard/myCourse"><span class="group-hover:text-gray-700">My Courses</span></Link> */}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/student-dashboard/student-announcement"
                    class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        class="fill-current text-gray-600 group-hover:text-cyan-600"
                        fill-rule="evenodd"
                        d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                        clip-rule="evenodd"
                      />
                      <path
                        class="fill-current text-gray-300 group-hover:text-cyan-300"
                        d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                      />
                    </svg>
                    <span class="group-hover:text-gray-700">Announcements</span>
                    {/* <Link to="/dashboard/announcement"><span class="group-hover:text-gray-700">Announcement</span></Link> */}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/student-dashboard/student-assignment"
                    class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                  >
                    <img
                      className="h-5 w-5"
                      src="https://cdn-icons-png.flaticon.com/512/5847/5847220.png"
                      alt=""
                      srcset=""
                    />
                    <span class="group-hover:text-gray-700">
                      My Assignments
                    </span>
                    {/* <Link to="/dashboard/announcement"><span class="group-hover:text-gray-700">Announcement</span></Link> */}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/student-dashboard/student-profile"
                    class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                    <span class="group-hover:text-gray-700">My Profile</span>
                    {/* <Link to="/dashboard/profile"><span class="group-hover:text-gray-700">Profile</span></Link> */}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/student-dashboard/student-order"
                    class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                  >
                    <img
                      className="h-5 w-5"
                      src="https://cdn-icons-png.flaticon.com/512/3500/3500833.png"
                      alt=""
                      srcset=""
                    />
                    <span class="group-hover:text-gray-700">Order History</span>
                    {/* <Link to="/dashboard/profile"><span class="group-hover:text-gray-700">Profile</span></Link> */}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/student-dashboard/student-settings"
                    class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <span class="group-hover:text-gray-700">Settings</span>
                    {/* <Link to="/dashboard/settings"><span class="group-hover:text-gray-700">Settings</span></Link> */}
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                  >
                    <svg
                      className="text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    <span
                      onClick={handleLogOut}
                      class="group-hover:text-gray-700"
                    >
                      Logout
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardLayout;
