import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loader from "../../../Loader/Loader";
import CoursesTable from "./CoursesTable";
import SuggestEditModal from "./SuggestEditModal";

const Courses = () => {
  const [course, setCourse] = useState(null);

  const {
    data: myCourse = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["myCourse"],
    queryFn: async () => {
      const res = await fetch(
        `https://nerd-academy-server.vercel.app/pending`,
        {}
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    <Loader></Loader>;
  }

  return (
    <div className="min-w-screen text-gray-600 w-full my-6 dark:text-white">
      <div className="flex flex-col justify-center h-full">
        <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200 p-4 dark:bg-accent dark:border-secondary">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800 dark:text-white">
              Courses Approved / Delete
            </h2>
          </header>
          <div className="bg-white shadow-md rounded my-6 dark:bg-accent">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr
                  className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal
                dark:text-white dark:bg-accent">
                  <th className="py-3 text-left">Category</th>
                  <th className="py-3 text-left">Instructor</th>
                  <th className="py-3 text-left">Email</th>
                  <th className="py-3 text-left">Details</th>
                  <th className="py-3 text-left">Status</th>
                  <th className="py-3 text-left">Actions</th>
                </tr>
              </thead>
              {myCourse.map((course) => (
                <CoursesTable
                  key={course._id}
                  course={course}
                  setCourse={setCourse}
                  refetch={refetch}
                ></CoursesTable>
              ))}
              {course && <SuggestEditModal course={course} refetch={refetch} />}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
