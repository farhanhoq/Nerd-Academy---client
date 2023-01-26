import { FaAngleRight, FaBullseye, FaCertificate, FaDotCircle, FaEnvelopeOpenText, FaFileDownload, FaGlobe, FaMobileAlt, FaPlayCircle, FaRocketchat, FaStar, FaUserClock, FaUserPlus, FaVideo } from "react-icons/fa";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import StudentAlsoBought from "../StudentAlsoBought/StudentAlsoBought";


const CourseDetails = () => {
  const [overview, setOverview] = useState([]);
  const { user } = useContext(AuthContext);
  // console.log(user.uid);

  const course = useLoaderData();

  const { id, title, picture, img, price, rating, review, tutor, lectures, hours, date, description } = course[0];

  useEffect(() => {
    fetch("https://nerd-academy-server.vercel.app/overview")
      .then((res) => res.json())
      .then((data) => setOverview(data));
  }, []);

  const handleAddToCart = () => {
    const coursecart = {
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

  return (
    <div className="py-24">
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



      <div className="flex w-11/12 mx-auto mt-10">

        <div className="w-7/12 mx-auto ">
          <h1 className="text-2xl font-bold  pb-4">What you'll learn</h1>
          <div className="flex border p-5">
            <div>
              <p className="p-2 w-11/12"><FaBullseye className="inline mr-1 w-[10px]" /> Have an intermediate skill level of Python programming.</p>
              <p className="p-2 w-11/12"><FaBullseye className="inline mr-1 w-[10px]" /> Use the numpy library to create and manipulate arrays.</p>
              <p className="p-2 w-11/12"><FaBullseye className="inline mr-1 w-[10px]" /> Learn how to work with various data formats within python, including: JSON,HTML, and MS Excel Worksheets.</p>
              <p className="p-2 w-11/12"><FaBullseye className="inline mr-1 w-[10px]" /> Have a portfolio of various data analysis projects.</p>
            </div>
            <div>
              <p className="p-2 w-11/12"><FaBullseye className="inline mr-1 w-[10px]" /> Use the Jupyter Notebook Environment.</p>
              <p className="p-2 w-11/12"><FaBullseye className="inline mr-1 w-[10px]" /> Use the pandas module with Python to create and structure data.</p>
              <p className="p-2 w-11/12"><FaBullseye className="inline mr-1 w-[10px]" /> Create data visualizations using matplotlib and the seaborn modules with python.</p>
            </div>
          </div>

          <div className="mt-20">
            <h1 className="text-3xl font-bold mb-7">Course content</h1>

            <div className="collapse collapse-arrow border border-base-300 bg-base-100">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-black-content">
                Intro to Course and Python
              </div>
              <div className="collapse-content bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-black-content">
                <p className="py-1"><FaPlayCircle className="inline mr-1" />Course Intro</p>
                <p className="py-1"><FaPlayCircle className="inline mr-1" />Course FAQs</p>
              </div>
            </div>
            <div className="collapse collapse-arrow border border-base-300 bg-base-100">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-black-content">
                Setup
              </div>
              <div className="collapse-content bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-black-content">
                <p className="py-1"><FaPlayCircle className="inline mr-1" />Installation Setup and Overview</p>
                <p className="py-1"><FaPlayCircle className="inline mr-1" />IDEs and Course Resources</p>
                <p className="py-1"><FaPlayCircle className="inline mr-1" />iPython/Jupyter Notebook Overview
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow border border-base-300 bg-base-100">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-black-content">
                Learning Numpy
              </div>
              <div className="collapse-content bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-black-content">
                <p className="py-1"><FaPlayCircle className="inline mr-1" />Intro to numpy</p>
                <p className="py-1"><FaPlayCircle className="inline mr-1" />Using arrays and scalars</p>
                <p className="py-1"><FaPlayCircle className="inline mr-1" />Array Transposition</p>
                <p className="py-1"><FaPlayCircle className="inline mr-1" />Universal Array Function</p>
                <p className="py-1"><FaPlayCircle className="inline mr-1" />Array Processing</p>
                <p className="py-1"><FaPlayCircle className="inline mr-1" />Array Input and Output</p>
              </div>
            </div>
            <div className="collapse collapse-arrow border border-base-300 bg-base-100">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-black-content">
                Click me to show/hide content
              </div>
              <div className="collapse-content bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-black-content">
                <p className="py-1"><FaPlayCircle className="inline mr-1" />Series</p>
                <p className="py-1"><FaPlayCircle className="inline mr-1" />DataFrames</p>
                <p className="py-1"><FaPlayCircle className="inline mr-1" />Reindex</p>
                <p className="py-1"><FaPlayCircle className="inline mr-1" />Drop Entry</p>
                <p className="py-1"><FaPlayCircle className="inline mr-1" />Selecting Entries</p>
              </div>
            </div>
            <div className="collapse collapse-arrow border border-base-300 bg-base-100">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-black-content">
                Working with Data:Part 1
              </div>
              <div className="collapse-content bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-black-content">
                <p className="py-1"><FaPlayCircle className="inline mr-1" /> hello</p>
                <p className="py-1"><FaPlayCircle className="inline mr-1" /> hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow border border-base-300 bg-base-100">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-black-content">
                Working with Data:Part 2
              </div>
              <div className="collapse-content bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-black-content">
                <p className="py-1"><FaPlayCircle className="inline mr-1" /> hello</p>
                <p className="py-1"><FaPlayCircle className="inline mr-1" /> hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow border border-base-300 bg-base-100">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-black-content">
                Working with Data:Part 3
              </div>
              <div className="collapse-content bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-black-content">
                <p className="py-1"><FaPlayCircle className="inline mr-1" /> hello</p>
                <p className="py-1"><FaPlayCircle className="inline mr-1" /> hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow border border-base-300 bg-base-100">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-black-content">
                Data Visualization
              </div>
              <div className="collapse-content bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-black-content">
                <p className="py-1"><FaPlayCircle className="inline mr-1" /> hello</p>
                <p className="py-1"><FaPlayCircle className="inline mr-1" /> hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow border border-base-300 bg-base-100">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-black-content">
                Example Projects.
              </div>
              <div className="collapse-content bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-black-content">
                <p className="py-1"><FaPlayCircle className="inline mr-1" /> hello</p>
                <p className="py-1"><FaPlayCircle className="inline mr-1" /> hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow border border-base-300 bg-base-100">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-black-content">
                Machine Learning
              </div>
              <div className="collapse-content bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-black-content">
                <p className="py-1"><FaPlayCircle className="inline mr-1" /> hello</p>
                <p className="py-1"><FaPlayCircle className="inline mr-1" /> hello</p>
              </div>
            </div>

          </div>

          <div className="mt-32">
            <h1 className="text-2xl font-bold  pb-4">Student also bought</h1>
            <StudentAlsoBought></StudentAlsoBought>
          </div>


          <div className="my-32">
            <h1 className="text-2xl font-bold  pb-4">Instructor</h1>
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

          <div className="w-3/12 mx-auto border">
              <img src={picture} alt="" />
              <div className="w-10/12 mx-auto mt-8">
                <h1 className="text-5xl font-bold">${price}</h1>
              <button onClick={handleAddToCart} className="btn text-white w-full rounded-none btn-primary mb-2 mt-7">Add to cart</button>
              {/* <button className="btn text-black hover:text-white w-full rounded-none bg-white mb-2 ">Buy now</button> */}

              <h5 className="font-bold mt-7">This course includes:</h5>
              
              <p className="mt-3"><FaVideo className="inline mr-1"/> {hours} hours on-demand video</p>
              <p className="mt-1"><FaEnvelopeOpenText className="inline mr-1" /> 3 articles</p>
              <p className="mt-1"><FaFileDownload  className="inline mr-1"/>4 downloadable resources</p>
              <p className="mt-1"><FaUserClock className="inline mr-1"/> Full lifetime access</p>
              <p className="mt-1"><FaMobileAlt  className="inline mr-1" /> Access on mobile and TV</p>
              <p className="mt-1 pb-5"><FaCertificate  className="inline mr-1" /> Certificate of completion</p>
              
              
              </div>
              
          </div>
        </div>

        <div className="w-3/12 mx-auto border">
          <img src={picture} alt="" />
          <div className="w-10/12 mx-auto mt-8">
            <h1 className="text-5xl font-bold">${price}</h1>
            {
              user
                ?
                <>
                  <button className="btn text-white w-full rounded-none btn-primary mb-2 mt-7">Add to cart</button>
                  <button className="btn text-black hover:text-white w-full rounded-none bg-white mb-2 ">Buy now</button>
                </>
                :
                <Link className="btn text-white w-full rounded-none btn-primary mt-3" to="/login"><button>Please Login to Buy</button></Link>
            }

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

  );
};

export default CourseDetails;
