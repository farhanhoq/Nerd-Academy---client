import React from "react";
// import bookb from '../../Assets/bookb.png'
import online from "../../Assets/online.png";
import certificate from "../../Assets/certificate.png";
import analyst from "../../Assets/analyst.png";

const About = () => {
  return (
    <section
      className="grid justify-between px-4 items-center dark:text-white w-3/5 mt-[-10%]"
      id="about">
        <div className="grid grid-cols-3 gap-4">

        <div className="card flex-col shadow-md mt-8 text-black w-full cursor-pointer items-center">
          <figure>
            <img className="h-20 w-24 ml-6" src={online} alt="Movie" />
          </figure>
          <div className="w-full p-4">
            <h2 className="card-title">Flexibility </h2>
            <p className="text-slate-500 text-base mt-2">
              Online courses can be accessed from anywhere, at any time, making
              it convenient for people with busy schedules.
            </p>
          </div>
        </div>

        <div className="card flex-col shadow-md mt-2 text-black w-full cursor-pointer">
          <figure>
            <img className="h-20 w-24 ml-6" src={certificate} alt="Movie" />
          </figure>
          <div className="w-full p-8">
            <h2 className="card-title">Cost effective</h2>
            <p className="text-slate-500 text-base mt-2">
              Online courses and programs are often less expensive than
              traditional on-campus options.
            </p>
          </div>
        </div>

        <div className="card flex-col shadow-md mt-2 text-black w-full cursor-pointer">
          <figure>
            <img className="h-20 w-24 ml-6" src={analyst} alt="Movie" />
          </figure>
          <div className="w-full p-8">
            <h2 className="card-title">Networking</h2>
            <p className="text-slate-500 text-base mt-2">
              Online learning allows for students to connect with a diverse
              group of people from around the world.
            </p>
          </div>
        </div>
        </div>

    </section>
  );
};

export default About;
