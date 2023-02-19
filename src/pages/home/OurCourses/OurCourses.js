import minusb from "../../../Assets/minusb.png";
import "./OurCourses.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import Loader from "../../../Loader/Loader";
import { toast } from "react-hot-toast";
import ScrollCarousel from "scroll-carousel";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const OurCourses = () => {
  const [coursedata, setCourseData] = useState([]);
  const [courseFilterData, setCourseFilterData] = useState([]);
  const { user, loading } = useContext(AuthContext);

  new ScrollCarousel(".my-carousel", {
    direction: "ltr",
  });

  useEffect(() => {
    fetch("https://nerd-academy-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourseData(data);
      });
  }, []);

  const courses = coursedata.sort(() => Math.random() - Math.random()).slice(0, 9)

  const filterResult = (catItem) => {
    const result = coursedata.filter((currentCourseData) => {
      return currentCourseData.category === catItem;

    });
    setCourseFilterData(result);
    console.log(result)
  };

  const handleAddToWishlist = (course) => {
    const wishlist = {
      name: user?.displayName,
      email: user?.email,
      course
    }

    fetch("https://nerd-academy-server.vercel.app/wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishlist),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        if (result.acknowledged === true) {
          toast.success('Added to wishlist successfully')
        } else {
          toast.error(result.message)
        }
      })
  }

  if (loading) {
    return <Loader></Loader>
  }

  return (
    <div className="pt-32 dark:bg-black dark:text-white" id="courses">
      <div className="w-11/12 mx-auto">
        <h1 className="text-3xl md:text-5xl text-center font-bold capitalize">
          Courses we offer
        </h1>

        <div className="grid justify-center">
          <img className="h-full w-12" src={minusb} alt="" />
        </div>

        <div className="mx-auto rounded-lg">
          <div className="flex flex-col md:flex-row gap-0 md:gap-6 justify-center my-10">
            <button
              onClick={() => filterResult("Web Development")}
              className="bg-transparent border-2 border-primary p-2 rounded-lg mt-6 hover:bg-gradient-to-r hover:from-[#7B33FD]
                hover:to-primary hover:text-white transition-colors ease-linear duration-500"
            >
              Web Development
            </button>
            <button
              onClick={() => filterResult("Apps Development")}
              className="bg-transparent border-2 border-primary p-2 rounded-lg mt-6 hover:bg-gradient-to-r hover:from-[#7B33FD]
              hover:to-primary hover:text-white transition-colors ease-linear duration-300"
            >
              App Development
            </button>
            <button
              onClick={() => filterResult("Programming")}
              className="bg-transparent border-2 border-primary p-2 rounded-lg mt-6 hover:bg-gradient-to-r hover:from-[#7B33FD]
              hover:to-primary hover:text-white transition-colors ease-linear duration-300"
            >
              Programming
            </button>
            <button
              onClick={() => filterResult("Computer Science")}
              className="bg-transparent border-2 border-primary p-2 rounded-lg mt-6 hover:bg-gradient-to-r hover:from-[#7B33FD]
              hover:to-primary hover:text-white transition-colors ease-linear duration-300"
            >
              Computer Science
            </button>
            <button
              onClick={() => filterResult("Artificial Intelligence")}
              className="bg-transparent border-2 border-primary p-2 rounded-lg mt-6 hover:bg-gradient-to-r hover:from-[#7B33FD]
              hover:to-primary hover:text-white transition-colors ease-linear duration-150"
            >
              Artificial Intelligence
            </button>
          </div>

          <div className="flex items-center justify-center my-32">
            <div className="w-full px-32">
              <Swiper
                spaceBetween={50}
                slidesPerView={3}
                // onSlideChange={() => console.log("slide change")}
                loop={true}
                centerslides={true}
                speed={800}
                autoplay={{
                  delay: 5000,
                }}
                modules={[Autoplay]}
              >
                {courseFilterData.length === 0 ? 
                  <>
                    {courses?.map(
                      (course) =>
                        course.publish === true && (
                          <SwiperSlide key={course?._id}>
                            <div className="cursor-pointer rounded-xl p-2 shadow-lg hover:shadow-xl h-min- w-full border dropdown dropdown-hover dropdown-top">
                              <div tabIndex={0}>
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

                                    <div
                                      className="group inline-flex rounded-xl bg-indigo-100 p-2 hover:bg-indigo-200"
                                      onClick={() =>
                                        handleAddToWishlist(course)
                                      }
                                    >
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

                                  <div className="flex items-center relative border-b border-primary py-1"></div>
                                  <div className="flex items-center relative my-2 justify-between">
                                    <div className="ml-3 flex gap-4 items-center">
                                      <img
                                        src="https://placeimg.com/400/225/arch"
                                        className="w-10 h-10 rounded-full bg-gray-100 "
                                        alt=""
                                      />
                                      <p className="font-medium text-gray-800">
                                        {course?.tutor}
                                      </p>
                                      <p className="text-md text-gray-600"></p>
                                    </div>

                                    <div
                                      className="flex items-center space-x-1.5 rounded-lg px-4 py-1.5 
                              border-primary border transition ease-in-out duration-300
                              hover:text-white hover:bg-gradient-to-r hover:from-primary
                              hover:to-secondary mx-3"
                                    >
                                      <Link
                                        to={`/details/${course._id}`}
                                        className="text-sm "
                                      >
                                        View More
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                tabIndex={0}
                                className="dropdown-content card card-compact w-64 p-2 shadow bg-white border text-primary-content rounded text-justify"
                              >
                                <div className="card-body">
                                  <h3 className="card-title">
                                    {course?.title}
                                  </h3>
                                  <p>{course?.description}</p>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        )
                    )}
                  </>
                  : 
                  <>
                    {courseFilterData?.map(
                      (course) =>
                        course.publish === true && (
                          <SwiperSlide key={course?._id}>
                            <div className="cursor-pointer rounded-xl p-2 shadow-lg hover:shadow-xl h-min- w-full border dropdown dropdown-hover dropdown-top">
                              <div tabIndex={0}>
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

                                    <div
                                      className="group inline-flex rounded-xl bg-indigo-100 p-2 hover:bg-indigo-200"
                                      onClick={() =>
                                        handleAddToWishlist(course)
                                      }
                                    >
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

                                  <div className="flex items-center relative border-b border-primary py-1"></div>
                                  <div className="flex items-center relative my-2 justify-between">
                                    <div className="ml-3 flex gap-4 items-center">
                                      <img
                                        src="https://placeimg.com/400/225/arch"
                                        className="w-10 h-10 rounded-full bg-gray-100 "
                                        alt=""
                                      />
                                      <p className="font-medium text-gray-800">
                                        {course?.tutor}
                                      </p>
                                      <p className="text-md text-gray-600"></p>
                                    </div>

                                    <div
                                      className="flex items-center space-x-1.5 rounded-lg px-4 py-1.5 
                              border-primary border transition ease-in-out duration-300
                              hover:text-white hover:bg-gradient-to-r hover:from-primary
                              hover:to-secondary mx-3"
                                    >
                                      <Link
                                        to={`/details/${course._id}`}
                                        className="text-sm "
                                      >
                                        View More
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                tabIndex={0}
                                className="dropdown-content card card-compact w-64 p-2 shadow bg-white border text-primary-content rounded text-justify"
                              >
                                <div className="card-body">
                                  <h3 className="card-title">
                                    {course?.title}
                                  </h3>
                                  <p>{course?.description}</p>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        )
                    )}
                  </>
                }
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
