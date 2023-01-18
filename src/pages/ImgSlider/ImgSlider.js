import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "./ImgSlider.css";
import "swiper/css";
import { useQuery } from "@tanstack/react-query";

const ImgSlider = () => {
  const {
    data: courses = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: () => fetch("trendingCourses.json").then((res) => res.json()),
  });

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
              <div className="h-96 flex">
                <div className={`mycard card-active`}>
                <figure><img className='w-full h-44 rounded-t-lg' src={course?.picture} alt="" /></figure>
                <div className="p-5">
                <h2 className="font-bold text-xl text-primary">{course?.name}</h2>
                  <p className='text-sm text-gray-600'>{course?.about.slice(0, 120)}</p>
                </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImgSlider;
