import { FaAngleRight, FaBullseye, FaCertificate, FaDotCircle, FaEnvelopeOpenText, FaFileDownload, FaGlobe, FaMobileAlt, FaPlayCircle, FaRocketchat, FaStar, FaUserClock, FaUserPlus, FaVideo } from "react-icons/fa";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import StudentAlsoBought from "../StudentAlsoBought/StudentAlsoBought";
import Review from "./Review";
import ScrollToTop from "../ScrollToTop";
import Loader from "../../Loader/Loader";
import { useForm } from "react-hook-form";


const CourseDetails = () => {
  let newDate = new Date();
  let date1 = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  // const [overview, setOverview] = useState([]);
  // const [contentData, setContentData] = useState([]);
  const { user, loading } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  // console.log(contentData);

  const course = useLoaderData();

  const { _id, title, picture, img, price, rating, review, tutor, lectures, hours, date, description , instructorEmail, content , learning } = course[0];
  console.log(content);
  console.log(learning);


  // useEffect(() => {
  //   fetch('https://nerd-academy-server.vercel.app/courseContent')
  //     .then((res) => res.json())
  //     .then((data) => setContentData(data));
  // }, []);

  // const { data: contentData = [], refetch } = useQuery({
  //   queryKey: ["contentData", user?.email],
  //   queryFn: async () => {
  //     const res = await fetch("https://nerd-academy-server.vercel.app/courseContent");
  //     const data = await res.json();
  //   }
  // });
  // console.log(contentData);

  // useEffect(() => {
  //   fetch("https://nerd-academy-server.vercel.app/overview")
  //     .then((res) => res.json())
  //     .then((data) => setOverview(data));
  // }, []);

  const handleAddToCart = () => {
    const coursecart = {
      courseId: _id,
      email: user?.email,
      name: user?.displayName,
      title,
      picture,
      img,
      price,
      rating,
      tutor,
      lectures,
      hours,
      date,
      description,
      instructorEmail
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

  // const handleReview = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const review = form.review.value;
  //   const picture = form.picture.value;

  //   const reviewData = {
  //     name: user?.displayName,
  //     review,
  //     picture,
  //     date: `${date1}.${month}.${year}`
  //   }
  // }

  const handleReview = (data, event) => {
    // const form = event.target;
    // const review = form.review.value;
    // const image = form.picture.value;

    console.log(data);
    const image = data.image[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=218ccec0a78d63b33e00278172e1c053`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const reviewData = {
            name: user?.displayName,
            review: data.review,
            picture: imgData.data.url,
            date: `${date1}.${month}.${year}`
          }
          // console.log(reviewData);

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
            });
        }
      });
  };

  if (loading) {
    return <Loader></Loader>
  }

  return (
    <div className="py-24">
      <ScrollToTop />
      <div className=" bg-gradient-to-r from-black to-slate-500">

        <div className=" text-white w-11/12 mx-auto p-16">
          <div className="text-lg breadcrumbs mb-9">
            <ul>
              <li>
                <Link to='/'>
                  Home
                </Link>
              </li>
              <FaAngleRight className="mx-3 text-2xl" />
              <li>
                <Link>
                  Programming Languages
                </Link>
              </li>
              <FaAngleRight className="mx-3 text-2xl" />
              <li>
                Add to cart
              </li>
            </ul>
          </div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <h1 className="text-lg mt-5 w-8/12">{description}</h1>

          <p className="mt-7">Created by <span className="badge rounded px-1">{tutor}</span></p>
          <p className="mt-2 mb-1 items-center"><span className=""><FaStar className="inline mr-1" /> </span>{rating} ratings</p>
          <p className="mb-1"><span><FaRocketchat className="inline mr-2" /></span>{review}+ reviews</p>
          <p className="mb-1"><span><FaGlobe className="inline mr-2" /></span>English, Spanish</p>
          <p className="mb-1"><span><FaUserPlus className="inline mr-2" /></span>15,435+ students</p>
          <p>Publish date: {date}/07/23</p>


        </div>
      </div>

      <div className="flex w-11/12 mx-auto mt-32">
        <div className="w-7/12 mx-auto ">
          <h1 className="text-3xl font-bold  pb-4">What you'll learn</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 border p-5">
              {
                learning?.map(learn => <p className="p-2 w-11/12"><FaBullseye className="inline mr-1 w-[10px]" />{learn}</p>)
              }
          </div>
          {/* course content */}
          <div className="mt-20">
            <h1 className="text-3xl font-bold mb-7">Course content</h1>

            {
              content?.map(data => <div className="collapse collapse-arrow border border-base-300 bg-base-100">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-base-200 text-black-content peer-checked:bg-base-200 peer-checked:text-black-content font-bold flex justify-between"><p>{data?.chp_name}</p><p>{data?.lecture_num} lecture / {data?.chp_duration}</p>

                </div>
                {/* <div className="collapse-content bg-base-200 text-black-content peer-checked:bg-white peer-checked:text-black-content pt-2">
                  {
                    data?.section.map(singleData => <p className="py-2"><FaPlayCircle className="inline mr-1" />{singleData}</p>)
                  }

                </div> */}
              </div>)
            }

          </div>

          {/* student also bought */}

          <div className="mt-32">
            <h1 className="text-3xl font-bold  pb-4">Student also bought</h1>
            <StudentAlsoBought></StudentAlsoBought>
          </div>

          {/* instructor */}

          <div className="my-32">
            <h1 className="text-3xl font-bold  pb-4">Instructor</h1>
            <div>
              <h2 className="font-bold text-xl underline ">{tutor}</h2>
              <p className="font-thin mb-2 ">Head of Data Science at Pierian Training</p>
              <div className="flex">
                <div className="avatar mr-3">
                  <div className="w-28 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
                <div className="">
                  <p className="mt-2 mb-1 items-center"><FaStar className="inline mr-1" />{rating} ratings</p>
                  <p className="mb-1"><FaRocketchat className="inline mr-2" />{review}+ reviews</p>
                  <p className="mb-1"><FaUserPlus className="inline mr-2" />15,435+ students</p>
                  <p className="mb-1"><FaPlayCircle className="inline mr-2" />58 Courses</p>
                </div>
              </div>
              <p className="mt-5">Jose Marcial Portilla has a BS and MS in Mechanical Engineering from Santa Clara University and years of experience as a professional instructor and trainer for Data Science, Machine Learning and Python Programming. He has publications and patents in various fields such as microfluidics, materials science, and data science. Over the course of his career he has developed a skill set in analyzing data and he hopes to use his experience in teaching and data science to help other people learn the power of programming, the ability to analyze data, and the skills needed to present the data in clear and beautiful visualizations. </p>

            </div>
          </div>

          <div className="my-32">
            <h1 className="text-3xl font-bold  pb-4 flex items-center">
              <div className="inline rating rating-lg mr-1"><input type="radio" name="rating-8" className="mask mask-star bg-yellow-500" checked /></div>
              {rating} course rating * {review}K ratings</h1>

            <div>
              <h2 className="text-2xl mb-2">Write a review for this {title} course</h2>
              <form onSubmit={handleSubmit(handleReview)} className="card card-side bg-base-100 shadow-xl">
                <figure>
                  <input
                    {...register("image")}
                    type="file"
                    className="file-input file-input-bordered w-3/5"
                    placeholder="Upload a Image"
                  />
                  {errors.img && (
                    <span className="text-error">{errors.img.message}</span>
                  )}
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Write your opinion</h2>
                  <textarea
                    {...register("review")}
                    name="review"
                    placeholder="review" className="textarea textarea-bordered textarea-sm w-full max-w-xs" ></textarea>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </form>
            </div>

            <Review></Review>
          </div>


        </div>
        <div className="w-3/12 mx-auto ">
          <div className="border">
            <img src={picture} alt="" />
            <div className="w-10/12 mx-auto my-8">
              <h1 className="text-5xl font-bold">${price}</h1>
              <button onClick={handleAddToCart} className="btn text-white w-full rounded-none btn-primary mb-2 mt-7">Add to cart</button>
              <h5 className="font-bold mt-7">This course includes:</h5>

              <p className="mt-3"><FaVideo className="inline mr-1" /> {hours} hours on-demand video</p>
              <p className="mt-1"><FaEnvelopeOpenText className="inline mr-1" /> 3 articles</p>
              <p className="mt-1"><FaFileDownload className="inline mr-1" />4 downloadable resources</p>
              <p className="mt-1"><FaUserClock className="inline mr-1" /> Full lifetime access</p>
              <p className="mt-1"><FaMobileAlt className="inline mr-1" /> Access on mobile and TV</p>
              <p className="mt-1 pb-5"><FaCertificate className="inline mr-1" /> Certificate of completion</p>
            </div>
          </div>

        </div>
      </div>

    </div>



  );
};

export default CourseDetails;
