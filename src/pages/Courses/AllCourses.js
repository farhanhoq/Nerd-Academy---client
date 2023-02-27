import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useCourseAPI from "../../Hooks/useCourseAPI";
import Loader from "../../Loader/Loader";

const AllCourses = () => {
  const { user, loading } = useContext(AuthContext);

  const { courses } = useCourseAPI();

  const handleAddToWishlist = (course) => {
    const wishlist = {
      name: user?.displayName,
      email: user?.email,
      course,
    };

    fetch("https://nerd-academy-server.vercel.app/wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishlist),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged === true) {
          toast.success("Added to wishlist successfully");
        } else {
          toast.error(result.message);
        }
      });
  };

  const handleAddToCart = (data) => {
    const coursecart = {
      courseId: data?._id,
      category: data?.category,
      email: user?.email,
      name: user?.displayName,
      title: data?.title,
      picture: data?.picture,
      price: data?.price,
      tutor: data?.tutor,
      lectures: data?.content.length,
      hours: data?.hours,
      date: data?.postingDate,
      description: data?.description,
      instructorEmail: data?.email,
    };

    fetch("https://nerd-academy-server.vercel.app/userscart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coursecart),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged === true) {
          toast.success("Added to cart successfully");
        }
      });
  };

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="py-12 px-6">
      <h1 className="text-center text-primary text-xl lg:text-3xl font-semibold mt-12 capitalize">
        We have {courses.length} well-designed courses by our expert instructor <br />
        from all over the world{" "}
      </h1>

      <div className="my-12 mx-24">
        <h2 className="text-3xl font-medium mb-2 text-secondary">
          Web Development
        </h2>
        <hr />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-10">
          {courses.map(
            (course) =>
              course.category === "Web Development" && (
                <div key={course._id}>
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
                            onClick={() => handleAddToWishlist(course)}
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
                      className="dropdown-content card card-compact w-[320px] p-1 shadow bg-white border text-primary-content rounded-lg text-justify"
                    >
                      <div className="card-body text-black text-left">
                        <h3 className="card-title font-bold text-sm">
                          {course?.title}
                        </h3>
                        <p className="text-xs mt-[-10px] text-primary font-bold mb-2">
                          Published: {course?.postingDate}
                        </p>
                        <p className="text-xs mb-3">
                          {course?.description.slice(0, 150)}...
                        </p>
                        {/* {
                                                course?.learning?.map(item => <p className='text-xs'>{item}</p>)
                                            } */}
                        <button
                          onClick={() => handleAddToCart(course)}
                          className="btn btn-wide bg-gradient-to-r from-primary to-secondary border-none rounded btn-sm mx-auto text-white"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      <div className="my-12 mx-24">
        <h2 className="text-3xl font-medium text-secondary mb-2">
          Programming
        </h2>
        <hr />

        <div className="grid grid-cols-4 gap-2 my-10">
          {courses.map(
            (course) =>
              course.category === "Programming" && (
                <>
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
                            onClick={() => handleAddToWishlist(course)}
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
                      className="dropdown-content card card-compact w-[320px] p-1 shadow bg-white border text-primary-content rounded-lg text-justify"
                    >
                      <div className="card-body text-black text-left">
                        <h3 className="card-title font-bold text-sm">
                          {course?.title}
                        </h3>
                        <p className="text-xs mt-[-10px] text-primary font-bold mb-2">
                          Published: {course?.postingDate}
                        </p>
                        <p className="text-xs mb-3">
                          {course?.description.slice(0, 150)}...
                        </p>
                        {/* {
                                                course?.learning?.map(item => <p className='text-xs'>{item}</p>)
                                            } */}
                        <button
                          onClick={() => handleAddToCart(course)}
                          className="btn btn-wide bg-gradient-to-r from-primary to-secondary border-none rounded btn-sm mx-auto text-white"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )
          )}
        </div>
      </div>

      <div className="my-12 mx-24">
        <h2 className="text-3xl font-medium text-secondary mb-2">
          Computer Science
        </h2>
        <hr />

        <div className="grid grid-cols-4 gap-2 my-10">
          {courses.map(
            (course) =>
              course.category === "Computer Science" && (
                <>
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
                            onClick={() => handleAddToWishlist(course)}
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
                      className="dropdown-content card card-compact w-[320px] p-1 shadow bg-white border text-primary-content rounded-lg text-justify"
                    >
                      <div className="card-body text-black text-left">
                        <h3 className="card-title font-bold text-sm">
                          {course?.title}
                        </h3>
                        <p className="text-xs mt-[-10px] text-primary font-bold mb-2">
                          Published: {course?.postingDate}
                        </p>
                        <p className="text-xs mb-3">
                          {course?.description.slice(0, 150)}...
                        </p>
                        {/* {
                                                course?.learning?.map(item => <p className='text-xs'>{item}</p>)
                                            } */}
                        <button
                          onClick={() => handleAddToCart(course)}
                          className="btn btn-wide bg-gradient-to-r from-primary to-secondary border-none rounded btn-sm mx-auto text-white"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )
          )}
        </div>
      </div>

      <div className="my-12 mx-24">
        <h2 className="text-3xl font-medium text-secondary mb-2">
          Artificial Intelligence
        </h2>
        <hr />

        <div className="grid grid-cols-4 gap-2 my-10">
          {courses.map(
            (course) =>
              course.category === "Artificial Intelligence" && (
                <>
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
                            onClick={() => handleAddToWishlist(course)}
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
                      className="dropdown-content card card-compact w-[320px] p-1 shadow bg-white border text-primary-content rounded-lg text-justify"
                    >
                      <div className="card-body text-black text-left">
                        <h3 className="card-title font-bold text-sm">
                          {course?.title}
                        </h3>
                        <p className="text-xs mt-[-10px] text-primary font-bold mb-2">
                          Published: {course?.postingDate}
                        </p>
                        <p className="text-xs mb-3">
                          {course?.description.slice(0, 150)}...
                        </p>
                        {/* {
                                                course?.learning?.map(item => <p className='text-xs'>{item}</p>)
                                            } */}
                        <button
                          onClick={() => handleAddToCart(course)}
                          className="btn btn-wide bg-gradient-to-r from-primary to-secondary border-none rounded btn-sm mx-auto text-white"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )
          )}
        </div>
      </div>

      <div className="my-12 mx-24">
        <h2 className="text-3xl font-medium text-secondary mb-2">
          App Development
        </h2>
        <hr />

        <div className="grid grid-cols-4 gap-2 my-10">
          {courses.map(
            (course) =>
              course.category === "App Development" && (
                <>
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
                            onClick={() => handleAddToWishlist(course)}
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
                      className="dropdown-content card card-compact w-[320px] p-1 shadow bg-white border text-primary-content rounded-lg text-justify"
                    >
                      <div className="card-body text-black text-left">
                        <h3 className="card-title font-bold text-sm">
                          {course?.title}
                        </h3>
                        <p className="text-xs mt-[-10px] text-primary font-bold mb-2">
                          Published: {course?.postingDate}
                        </p>
                        <p className="text-xs mb-3">
                          {course?.description.slice(0, 150)}...
                        </p>
                        {/* {
                                                course?.learning?.map(item => <p className='text-xs'>{item}</p>)
                                            } */}
                        <button
                          onClick={() => handleAddToCart(course)}
                          className="btn btn-wide bg-gradient-to-r from-primary to-secondary border-none rounded btn-sm mx-auto text-white"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
