import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import Loader from "../../../Loader/Loader";
import StudentFeedback from "./StudentFeedback";
import TeacherFeedback from "./TeacherFeedback";

const MyCourses = () => {
  const { user, loading } = useContext(AuthContext);

  const { data: purchasedCourse = [] } = useQuery({
    queryKey: ["purchasedCourse"],
    queryFn: () =>
      fetch(
        `https://nerd-academy-server.vercel.app/perchased-courses/${user?.email}`
      ).then((res) => res.json()),
  });

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="my-20">
      <h2 className="text-4xl font-bold dark:text-white">My Courses</h2>
      <hr className="my-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-8 my-10 text-center">
        {purchasedCourse?.map((course) => (
          <div className="card lg:card-side bg-base-100 shadow-xl p-2 dark:bg-accent dark:border  dark:border-secondary">
            <figure>
              <img className="w-96 lg:h-72 md:h-auto object-cover" src={course.picture} alt="Album" />
            </figure>
            <div className="text-left text-black p-3">
              <h2 className="card-title mt-5 dark:text-white">{course.title}</h2>
              <p className="mt-2 dark:text-white">By {course.tutor}</p>
              <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 card-actions mt-12 gap-5 lg:absolute bottom-3">
                <Link
                  to={`/module/${course.courseId}`}
                  className="rounded btn text-xs capitalize border-primary bg-transparent text-black border transition
                  ease-in-out duration-300 hover:text-white hover:bg-gradient-to-r 
                  hover:from-primary hover:to-secondary dark:text-white">
                  Continue course
                </Link>
                <div className="flex items-center justify-between gap-3">
                  <label
                    htmlFor="teacher-modal"
                    className="rounded btn text-xs capitalize border-primary bg-transparent text-black border transition
                    ease-in-out duration-300 hover:text-white hover:bg-gradient-to-r 
                    hover:from-primary hover:to-secondary dark:text-white">
                    Add teacher review
                  </label>
                  <label
                    htmlFor="my-modal"
                    className="rounded btn text-xs capitalize border-primary bg-transparent text-black border transition
                    ease-in-out duration-300 hover:text-white hover:bg-gradient-to-r 
                    hover:from-primary hover:to-secondary dark:text-white">
                    Add course review
                  </label>
                </div>
              </div>
            </div>
            <StudentFeedback course={course}></StudentFeedback>
            <TeacherFeedback course={course}></TeacherFeedback>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
