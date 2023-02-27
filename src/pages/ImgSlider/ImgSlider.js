import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "./ImgSlider.css";
import "swiper/css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../../Loader/Loader";
import minusb from "../../Assets/minusb.png";
import useCourseAPI from "../../Hooks/useCourseAPI";

const ImgSlider = () => {
  const { loading } = useContext(AuthContext);

  const { courses } = useCourseAPI();

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
            modules={[Autoplay]}
            className="mySlider"
            breakpoints={{
              0:{
                slidesPerView: 1,
                spaceBetween: 2
              },
              768:{
                slidesPerView: 2,
                spaceBetween: 10
              },
              1024:{
                slidesPerView: 3,
                spaceBetween: 2
              }
            }}
            >
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
                    <div className="px-5 lg:px-5 lg:py-1">
                      <h2 className="font-bold text-xl dark:text-white">
                        {course?.title}
                      </h2>
                      <p className="badge badge-ghost font-thin rounded mt-4text-black dark:text-black">
                        {course?.tutor}
                      </p>
                      {/* <p className="ml-1 pt-1">{course?.description.length > 100 ? <>{course?.description.slice(0, 60) + "..."}</> : course?.description}</p> */}

                      <p className="text-secondary text-sm font-bold my-4 dark:text-white">*{course?.bought}+ people have already purchased this course</p>
                      <div className="flex justify-between mt-6">
                        <p className="ml-1 text-lg text-primary font-bold mt-1 dark:text-white">${course?.price}</p>
                        <span className="badge bg-gradient-to-r from-primary to-secondary px-6 py-4 mr-2 rounded-full border-none text-white">
                          Trending
                        </span>
                      </div>
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
