import { useQuery } from "@tanstack/react-query";
import React from "react";
import useCourseAPI from "../../../Hooks/useCourseAPI";

const AdminDashboard = () => {

  const { courses } = useCourseAPI();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(
        `https://nerd-academy-server.vercel.app/all-users`
      );
      const data = await res.json();
      return data;
    },
  });
  // console.log(users.length);

  const { data: perchasedCourse = [] } = useQuery({
    queryKey: ["perchasedCourse"],
    queryFn: async () => {
      const res = await fetch(
        `https://nerd-academy-server.vercel.app/perchased-course`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(perchasedCourse);

  const { data: countAPI = [] } = useQuery({
    queryKey: ["countAPI"],
    queryFn: async () => {
      const res = await fetch(
        `https://api.countapi.xyz/update/neasher/neasher1/?amount=1`
      );
      const data = await res.json();
      return data;
    },
  });

  refetch();

  return (
    <div className="mx-auto">
      <h2 className="mt-12 mb-6 text-4xl font-bold text-primary text-center dark:text-secondary">
        Welcome to Admin Dashboard
      </h2>

      <div className="card bg-base-100 dark:bg-accent shadow-xl pt-12">
        <div
          className="bg-gray-900 opacity-50 hidden dark:bg-accent "
          id="sidebarBackdrop"
        ></div>
        <div
          id="main-content"
          className="h-full w-full bg-gray-50 relative overflow-y-auto dark:bg-accent dark:border dark:border-secondary"
        >
          <main>
            <div className="pt-6 px-4">
              <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4"></div>
              <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                <div className="bg-white shadow rounded-lg p-4 sm:p-4 xl:p-8 dark:bg-accent border dark:border-secondary dark:text-white">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900 dark:text-white">
                        {courses?.length}
                      </span>
                      <h3 className="text-base font-normal text-gray-500 dark:text-white">
                        Total Courses
                      </h3>
                    </div>
                    {/* <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                                            14.6%
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div> */}
                  </div>
                </div>

                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 dark:bg-accent border dark:border-secondary dark:text-white">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900 dark:text-white">
                        {countAPI.value}
                      </span>
                      <h3 className="text-base font-normal text-gray-500 dark:text-white">
                        Total Visitors
                      </h3>
                    </div>
                    {/* <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                                            32.9%
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div> */}
                  </div>
                </div>

                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 dark:bg-accent border dark:border-secondary dark:text-white">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900 dark:text-white">
                        {users?.length}
                      </span>
                      <h3 className="text-base font-normal text-gray-500 dark:text-white">
                        User SignUps
                      </h3>
                    </div>
                    {/* <div className="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
                                            -2.7%
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div> */}
                  </div>
                </div>

              </div>
              <div className="w-full my-4">
                <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full dark:bg-accent border dark:border-secondary dark:text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                      Latest Customers
                    </h3>
                    <hr />
                    {/* <a href="/" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2">
                                            View all
                                        </a> */}
                  </div>
                  <div className="flow-root">
                    <ul className="divide-y divide-gray-200">
                      {perchasedCourse.map((customer) => (
                        <li key={customer?._id} className="py-3 sm:py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <img
                                className="h-8 w-8 rounded-full"
                                src={customer?.picture}
                                alt="customer"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                {customer?.userName}
                              </p>
                              <p className="text-sm text-gray-500 truncate dark:text-white">
                                {customer?.userEmail}
                              </p>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                {customer?.date}
                              </p>
                              <p className="text-sm text-gray-500 truncate dark:text-white">
                                {customer?.title}
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              ${customer?.price}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <script async defer src="https://buttons.github.io/buttons.js"></script>
      <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
    </div>
  );
};

export default AdminDashboard;
