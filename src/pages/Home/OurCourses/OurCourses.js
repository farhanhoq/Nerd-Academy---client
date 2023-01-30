import minusb from "../../../Assets/minusb.png";
import book from "../../../Assets/book.png";
import { useQuery } from "@tanstack/react-query";
import "./OurCourses.css";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import Loader from "../../../Loader/Loader";

const OurCourses = () => {
  const [coursedata, setCourseData] = useState([]);

  const { loading } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://nerd-academy-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourseData(data);
      });
  }, []);

  //   const {
  //     data: singleCourses = [],
  //     isLoading,
  //     refetch,
  //   } = useQuery({
  //     queryKey: ["singleCourses"],
  //     queryFn: () =>
  //       fetch("https://nerd-academy-server.vercel.app/courses").then((res) =>
  //         res.json()
  //       ),
  //   });

  const filterResult = (catItem) => {
    const result = coursedata.filter((currentCourseData) => {
      return currentCourseData.category === catItem;
    });
    setCourseData(result);

    // window.location.reload(true)
  };

  if (loading) {
    return <Loader></Loader>
  }

  return (
    <div className="py-32 bg-cyan-50 dark:bg-black dark:text-white" id="courses">
      <div className="w-11/12 mx-auto">
        <h1 className="text-5xl text-center font-bold capitalize">
          Courses we offer
        </h1>
        <div className="grid justify-center">
          <img className="h-full w-12" src={minusb} alt="" />
          <img className="h-full w-12" src={book} alt="" />
        </div>

        <div className="mx-auto rounded-lg">
          <div className="flex flex-col md:flex-row gap-0 md:gap-6 justify-center my-10">
            <button
              onClick={() => filterResult("Web Development")}
              className="bg-transparent border-2 border-sky-400 p-2 rounded-lg mt-6"
            >
              Web Development
            </button>
            <button
              onClick={() => filterResult("Apps Development")}
              className="bg-transparent border-2 border-sky-400 p-2 rounded-lg mt-6"
            >
              App Development
            </button>
            <button
              onClick={() => filterResult("Programming")}
              className="bg-transparent border-2 border-sky-400 p-2 rounded-lg mt-6"
            >
              Programming
            </button>
            <button
              onClick={() => filterResult("Computer Science")}
              className="bg-transparent border-2 border-sky-400 p-2 rounded-lg mt-6"
            >
              Computer Science
            </button>
            <button
              onClick={() => filterResult("Artificial Intelligence")}
              className="bg-transparent border-2 border-sky-400 p-2 rounded-lg mt-6"
            >
              Artificial Intelligence
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 text-center">
            {coursedata?.map((course) => (
              <div
                key={course?._id}
                className="cursor-pointer rounded-xl bg-white p-2 shadow-lg hover:shadow-xl h-96 border"
              >
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <img
                    className="w-full h-40"
                    src={course?.picture}
                    alt="wallpaper"
                  />

                  <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <span className="ml-1 text-sm text-slate-400">
                      {course?.rating}
                    </span>
                  </div>
                </div>

                <div className="mt-1 p-2">
                  <h2 className="text-slate-700 text-lg font-bold mt-3">
                    {course?.title}
                  </h2>
                  <p className="mt-1 text-[2px] text-slate-400">
                    {course?.description.slice(0, 60)}
                  </p>
                  {/* <p>{course?.tutor}</p> */}

                  <div className="mt-3 flex items-center justify-between">
                    <p>
                      <span className="text-base font-bold text-primary">
                        $ {course?.price}
                      </span>
                      <span className="text-sm font-semibold text-slate-400 mx-3">
                        {course?.category}
                      </span>
                    </p>

                    <div className="group inline-flex rounded-xl bg-indigo-100 p-2 hover:bg-indigo-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-orange-400 group-hover:text-orange-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center relative  border-b border-cyan-500 py-1"></div>
                  <div className="flex items-center relative my-2">
                    <img
                      src="https://placeimg.com/400/225/arch"
                      className="w-10 h-10 rounded-full bg-gray-100 "
                      alt=""
                    />
                    <div className="ml-3">
                      <p className="font-medium text-gray-800">
                        {course?.tutor}
                      </p>
                      <p className="text-md text-gray-600"></p>
                    </div>

                    <div className="flex items-center space-x-1.5 rounded-lg px-4 py-1.5 border-primary border transition ease-in-out  duration-300 hover:text-white duration-100 hover:bg-cyan-500 mx-8">
                      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                </svg> */}

                      <Link to={`/details/${course._id}`} className="text-sm">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
