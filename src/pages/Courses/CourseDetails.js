import {
  FaAngleRight,
  FaBullseye,
  FaCertificate,
  FaEnvelopeOpenText,
  FaFileDownload,
  FaGlobe,
  FaMobileAlt,
  FaPlayCircle,
  FaRocketchat,
  FaStar,
  FaUserClock,
  FaUserPlus,
  FaVideo,
} from "react-icons/fa";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import StudentAlsoBought from "../StudentAlsoBought/StudentAlsoBought";
import Review from "./Review";
import ScrollToTop from "../ScrollToTop";
import Loader from "../../Loader/Loader";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";

const CourseDetails = () => {
  let newDate = new Date();
  let date1 = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  const { user, loading } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [purchasedCourses, setPurchasedCourses] = useState([]);

  const course = useLoaderData();
  console.log(course);

  const {
    _id,
    title,
    picture,
    email,
    price,
    tutor,
    hours,
    postingDate,
    description,
    content,
    learning,
    category
  } = course[0];
  // console.log(lectures, rating, review, hours);



// This API is created for Instructor details
  const [instructorData, setInstructorData] = useState();
  // console.log(instructorData);
  useEffect(() => {
    fetch(`https://nerd-academy-server.vercel.app/users/${email}`)
      .then(res => res.json())
      .then(data => setInstructorData(data));
  }, [email]);


  useEffect(() => {
    fetch(
        `https://nerd-academy-server.vercel.app/perchased-courses-teacher?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
            setPurchasedCourses(data);
        });
}, [email])

const students = [...new Set(purchasedCourses.map((course) => course.buyerEmail))]




  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(
        `https://nerd-academy-server.vercel.app/users/?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  refetch();

  const handleAddToCart = () => {
    const coursecart = {
      courseId: _id,
      email: user?.email,
      name: user?.displayName,
      title,
      picture,
      price,
      tutor,
      hours,
      postingDate,
      description,
      instructorEmail: email,
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

  const handleReview = (data, event) => {
    const reviewData = {
      userName: users?.name,
      review: data.review,
      picture: users?.body?.picture,
      date: `${date1}.${month}.${year}`,
      instructorMail: email,
      courseId: _id,
      title,
      tutor,
      userEmail: users.email,
    };
    console.log(reviewData);

    fetch("https://nerd-academy-server.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Review has been added");
        event.target.reset();
        refetch();
      });
  };

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="py-24">
      <ScrollToTop />
      <div className=" bg-gradient-to-r from-primary to-secondary">
        <div className=" text-white w-11/12 mx-auto py-12 md:p-16">
          <div className="text-lg breadcrumbs mb-9">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <FaAngleRight className="mx-3 text-2xl" />
              <li>
                <Link to='/all-courses'>Programming Languages</Link>
              </li>
              <FaAngleRight className="mx-3 text-2xl" />
              <li>{title}</li>
            </ul>
          </div>
          <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
          <h1 className="text-md md:text-lg mt-5 md:w-8/12">{description}</h1>

          <p className="mt-7">
            Created by <span className="badge rounded px-1">{tutor}</span>
          </p>
         
          
          
          
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:w-11/12 mx-auto mt-12 lg:mt-32">
        <div className=" md:px-0 w-[85%] mx-auto ">
          <h1 className="text-3xl font-bold pb-4 dark:text-white">
            What you'll learn
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 border p-5">
            {learning?.map((learn) => (
              <p className="p-2 w-11/12 dark:text-white">
                <FaBullseye className="inline mr-1 w-[10px]" />
                {learn}
              </p>
            ))}
          </div>
          {/* course content */}
          <div className="mt-20">
            <h1 className="text-3xl font-bold mb-7 dark:text-white">
              Course content
            </h1>
            {content?.map((data) => (
              <div
                className="collapse collapse-arrow border border-base-300 
              bg-base-100 dark:bg-accent"
              >
                <input type="checkbox" className="peer" />
                <div
                  className="collapse-title bg-base-200 dark:bg-accent dark:text-white text-black-content peer-checked:bg-base-200 
                peer-checked:text-black-content font-bold flex flex-col md:flex-row justify-between"
                >
                  <p>{data?.chp_name}</p>
                  <p>
                    {data?.lecture_num} lecture / {data?.chp_duration}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* student also bought */}

          <div className="mt-32">
            <h1 className="text-3xl font-bold pb-4 dark:text-white">
              Student also bought
            </h1>
            <StudentAlsoBought category={category}></StudentAlsoBought>
          </div>

          {/* instructor */}

          <div className="my-32">
            <h1 className="text-3xl font-bold pb-4 dark:text-white">
              Instructor
            </h1>
            <div>
              <Link to={`/instructor-details/${email}`} className="font-bold text-xl underline ">{tutor}</Link>
              <p className="mb-2">{instructorData?.body?.skill}</p>
              <div className="flex">
                <div className="avatar mr-3">
                  <div className="w-28 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
                <div className="">
                  {/* <p className="mt-2 dark:text-white mb-1 items-center">
                    <FaStar className="inline mr-1" />
                     ratings
                  </p> */}
                  <p className="mb-1 dark:text-white">
                    <FaRocketchat className="inline mr-2" />
                    {instructorData?.review_qty}+ reviews
                  </p>
                  <p className="mb-1 dark:text-white">
                    <FaUserPlus className="inline mr-2" />
                    {students.length}+ students
                  </p>
                  <p className="mb-1 dark:text-white">
                    <FaPlayCircle className="inline mr-2" />
                    {instructorData?.course_qty} Courses
                  </p>
                </div>
              </div>
              <p className="mt-5 dark:text-white">{instructorData?.body?.about}</p>
            </div>
          </div>

          <div className="my-32">
            <h1 className="text-2xl md:text-3xl font-bold pb-4 flex items-center dark:text-white">
              <div className="inline rating rating-lg mr-1">
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star bg-yellow-500"
                  checked
                />
              </div>
              {} Course rating * {}K ratings
            </h1>

            {user?.uid && (
              <div>
                <form
                  onSubmit={handleSubmit(handleReview)}
                  className="card card-side bg-base-100 shadow-xl"
                >
                  <div className="card-body dark:bg-accent">
                    <h2 className="md:text-xl mb-2 dark:text-white">
                      Write a review for {title} course
                    </h2>
                    <textarea
                      {...register("review")}
                      name="review"
                      placeholder="Write your review here"
                      className="textarea textarea-bordered textarea-primary
                       textarea-sm w-full h-60 dark:bg-accent"
                    ></textarea>
                    <div className="card-actions">
                      <button
                        className="btn bg-gradient-to-r from-primary to-secondary
                       text-white border-none"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}

            <Review email={email} courseId={_id}></Review>
          </div>
        </div>
        <div className="w-11/12 md:w-3/12 mx-auto ">
          <div className="border">
            <img src={picture} alt="" />
            <div className="w-10/12 mx-auto my-8">
              <h1 className="text-5xl font-bold dark:text-white">${price}</h1>
              <button
                onClick={handleAddToCart}
                className="btn text-white w-full rounded
               bg-gradient-to-r from-primary to-secondary mb-2 mt-7 border-none dark:text-white"
              >
                Add to cart
              </button>
              <h5 className="font-bold mt-7 dark:text-white">
                This course includes:
              </h5>

              <p className="mt-3 dark:text-white">
                <FaVideo className="inline mr-1" /> {hours} hours on-demand
                video
              </p>
              <p className="mt-1 dark:text-white">
                <FaEnvelopeOpenText className="inline mr-1" /> 3 articles
              </p>
              <p className="mt-1 dark:text-white">
                <FaFileDownload className="inline mr-1" />4 downloadable
                resources
              </p>
              <p className="mt-1 dark:text-white">
                <FaUserClock className="inline mr-1" /> Full lifetime access
              </p>
              <p className="mt-1 dark:text-white">
                <FaMobileAlt className="inline mr-1" /> Access on mobile and TV
              </p>
              <p className="mt-1 dark:text-white pb-5">
                <FaCertificate className="inline mr-1" /> Certificate of
                completion
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
