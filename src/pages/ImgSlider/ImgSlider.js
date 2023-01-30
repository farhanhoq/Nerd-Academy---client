import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "./ImgSlider.css";
import "swiper/css";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../../Loader/Loader";

const ImgSlider = () => {

  const { loading } = useContext(AuthContext);



  const {
    data: courses = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: () => fetch("trendingCourses.json").then((res) => res.json()),
  });

if(loading){
  return <Loader></Loader>
}

  return (
    <div className=" flex items-center justify-center">
      <div className="max-w-5xl">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          loop={true}
          centerslides={true}
          speed={800}
          autoplay={{
            delay: 1000,
          }}
          modules={[Autoplay]}
        >
          {courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <Link to={`/details/${course?._id}`} className="h-96 flex">
                <div className={`mycard card-active`}>
                <figure><img className='w-full h-44 rounded-t-lg' src={course?.picture} alt="" /></figure>
                <div className="p-5">
                <h2 className="font-bold text-xl text-primary">{course?.name}</h2>
                <p className="badge badge-ghost font-thin rounded mt-4">{course?.author}</p>
                <p className="ml-1 pt-1">{course?.reviews} reviews</p>
                <p className="ml-1 text-2xl font-bold mt-1">${course?.price}</p>
                <p className="text-right"><span className="badge badge-warning p-2 py-3 mr-2 rounded text-white">{course?.trend}</span></p>
                </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImgSlider;
