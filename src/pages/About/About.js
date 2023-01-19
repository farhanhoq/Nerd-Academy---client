import React from "react";
// import bookb from '../../Assets/bookb.png'
import online from "../../Assets/online.png";
import certificate from "../../Assets/certificate.png";
import analyst from "../../Assets/analyst.png";

const About = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 justify-between mt-40 px-16" id="about">
      <div className="text-center lg:text-left mr-2">
        <img
          className="w-12/12"
          src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?w=826&t=st=1673785797~exp=1673786397~hmac=4f562a9fef374abca0ef74f9b6a82c284cb16fde0eb63b823e8c5e5617ab3418"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-center lg:text-left text-2xl font-bold">
          Benefits About Online Learning Expertise{" "}
        </h2>

        <div className="card md:card-side shadow-md mt-8 text-black w-full cursor-pointer">
          <figure>
            <img className="h-20 w-24 ml-6" src={online} alt="Movie" />
          </figure>
          <div className="w-full p-8">
            <h2 className="card-title">Online Course </h2>
            <p className="text-slate-500 text-base">
              Google IT Automation with Python Professional Certificate{" "}
              From Art Alison has thousands
            </p>
          </div>
        </div>

        <div className="card md:card-side shadow-md mt-2 text-black w-full cursor-pointer">
          <figure>
            <img className="h-20 w-24 ml-6" src={certificate} alt="Movie" />
          </figure>
          <div className="w-full p-8">
            <h2 className="card-title">Online Course </h2>
            <p className="text-slate-500 text-base">
              Google IT Automation with Python Professional Certificate{" "}
              From Art Alison has thousands
            </p>
          </div>
        </div>

        <div className="card md:card-side shadow-md mt-2 text-black w-full cursor-pointer">
          <figure>
            <img className="h-20 w-24 ml-6" src={analyst} alt="Movie" />
          </figure>
          <div className="w-full p-8">
            <h2 className="card-title">Online Course </h2>
            <p className="text-slate-500 text-base">
              Google IT Automation with Python Professional Certificate{" "}
              From Art Alison has thousands
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
