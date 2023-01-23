// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaDotCircle } from "react-icons/fa";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import ScrollToTop from "../ScrollToTop";
import DetailsPage from "./DetailsPage";
import Review from "./Review";

const CourseDetails = () => {
  const [overview, setOverview] = useState([]);
  const { user } = useContext(AuthContext);

  const course = useLoaderData();

  const {id, title, picture, img, price, rating, review, tutor, lectures, hours, date, description} = course[0];

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

  // const [rotate, setRotate] = useState(false);
  // const [count, setCount] = useState(0);

  // const addCount = () => {
  //     setCount((prev) => prev + 1);
  // };

    return (
      <div className="py-24">
         <div className=" bg-gradient-to-r from-slate-500 to-slate-400">
          <div className=" text-white w-11/12 mx-auto p-16">
            <h1 className="text-5xl font-bold">{title}</h1>
            <h1 className="text-xl mt-5 w-8/12">{description}</h1>
            <p className="mt-7"><span className="badge rounded px-1">{tutor}</span></p>
            <p className="mt-1"><span className="text-orange-400">{rating} </span> ratings</p>
            <p><span className="text-orange-400">{review}+</span> reviews</p>
            <p>Publish date: {date}/07/23</p>
          </div>
        </div>



        <div className="flex w-11/12 mx-auto mt-20">
          
          <div className="w-7/12 mx-auto border p-5">
            <h1 className="text-2xl font-bold p-5">What you'll learn</h1>
            <div className="flex">
               <div>
                <p className="p-2 w-11/12">Have an intermediate skill level of Python programming.</p>
                <p className="p-2 w-11/12">Use the numpy library to create and manipulate arrays.</p>
                <p className="p-2 w-11/12">Learn how to work with various data formats within python, including: JSON,HTML, and MS Excel Worksheets.</p>
                <p className="p-2 w-11/12">Have a portfolio of various data analysis projects.</p>
              </div>
              <div>
                <p className="p-2 w-11/12">Use the Jupyter Notebook Environment.</p>
                <p className="p-2 w-11/12">Use the pandas module with Python to create and structure data.</p>
                <p className="p-2 w-11/12">Create data visualizations using matplotlib and the seaborn modules with python.</p>
              </div>
            </div>
             
          </div>

          <div className="w-4/12 mx-auto">
              <img src={Image} alt="" />
              <h1>{price}</h1>
              <button className="btn">Add to cart</button>
              <button className="btn">Buy now</button>

              <h5>This course includes:</h5>
              <p>{hours} hours on-demand video</p>
              <p>3 articles</p>
              <p>4 downloadable resources</p>
              <p>Full lifetime access</p>
              <p>Access on mobile and TV</p>
              <p>Certificate of completion</p>
          </div>
        </div>

      </div>
       
  );
};

export default CourseDetails;
