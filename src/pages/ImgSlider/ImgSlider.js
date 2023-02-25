import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "./ImgSlider.css";
import "swiper/css";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../../Loader/Loader";
import minusb from "../../Assets/minusb.png";

const ImgSlider = () => {
  const { loading } = useContext(AuthContext);

  const {
    data: courses = []
  } = useQuery({
    queryKey: ["courses"],
    queryFn: () =>
      fetch("https://nerd-academy-server.vercel.app/courses").then((res) =>
        res.json()
      ),
  });

  const sortedCourses = [...courses].sort((a, b) => b.bought - a.bought);
  const trending = sortedCourses.slice(0, 9)

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="my-20">
      <h1 className="text-3xl md:text-5xl text-center dark:text-white font-bold capitalize my-8">
        Our trending courses
      </h1>
      <div className="grid justify-center">
        <img className="h-full w-12" src={minusb} alt="" />
      </div>

      <div className=" flex items-center justify-center my-32 flex-col gap-6">
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
            modules={[Autoplay]}>
            {trending?.map((course, i) => (
              <SwiperSlide key={i}>
                <Link to={`/details/${course?._id}`} className="h-96 flex shadow-lg">
                  <div className={`mycard card-active`}>
                    <figure>
                      <img
                        className="w-full h-44 rounded-t-lg object-cover"
                        src={course?.picture}
                        alt=""
                      />
                    </figure>
                    <div className="p-5">
                      <h2 className="font-bold text-xl dark:text-white">
                        {course?.title}
                      </h2>
                      <p className="badge badge-ghost font-thin rounded mt-4text-black dark:text-black">
                        {course?.tutor}
                      </p>
                      {/* <p className="ml-1 pt-1">{course?.description.length > 100 ? <>{course?.description.slice(0, 60) + "..."}</> : course?.description}</p> */}

                      <div className="flex justify-between mt-6">
                        <p className="ml-1 text-lg text-primary font-bold mt-1 dark:text-white">${course?.price}</p>
                          <span className="badge bg-gradient-to-r from-primary to-secondary px-6 py-4 mr-2 rounded-full border-none text-white">
                          Trending
                          </span>
                      </div>
                          <p className="text-primary text-sm font-bold my-2 dark:text-white">{course?.bought}+ people have already purchased this course</p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ImgSlider;
