import React from "react";
import {  FaUserTie, FaGraduationCap, FaRocket } from "react-icons/fa";

const About = () => {
  return (
    <section className="grid justify-between px-4 items-center dark:bg-dark dark:text-white w-full 
    md:w-3/5 md:mt-[-10%] mb-20" id="about">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center">

        <div className="card flex-col md:border-r border-slate-300 rounded md:rounded-none mt-2
         text-black dark:text-white w-full cursor-pointer py-6">
          <div className="px-8">
           <span className="bg-red text-2xl"> <FaGraduationCap className="text-[3rem] text-primary"/></span>
          </div>
          <div className="w-full p-8">
            <h2 className="card-title">Certificate</h2>
            <p className="text-slate-500 dark:text-white text-base mt-2">
            A Google Docs scam that appears to be widespread began landing in Wednesday in what seemed to be a phishing attack.
            </p>
          </div>
        </div>

        <div className="card flex-col md:border-r border-slate-300 rounded md:rounded-none mt-2
         text-black dark:text-white w-full cursor-pointer py-6">
          <div className="px-8">
           <span className="bg-red text-2xl"> <FaUserTie className="text-[3rem] text-primary"/></span>
          </div>
          <div className="w-full p-8">
            <h2 className="card-title">Expert Instructors</h2>
            <p className="text-slate-500 dark:text-white text-base mt-2">
            A Google Docs scam that appears to be widespread began landing in Wednesday in what seemed to be a phishing attack.
            </p>
          </div>
        </div>

        <div className="card flex-col md:border-r border-slate-300 rounded md:rounded-none mt-2
         text-black dark:text-white w-full cursor-pointer py-6">
          <div className="px-8">
           <span className="bg-red text-2xl"> <FaRocket className="text-[3rem] text-primary"/></span>
          </div>
          <div className="w-full p-8">
            <h2 className="card-title">Learn from anywhere</h2>
            <p className="text-slate-500 dark:text-white text-base mt-2">
            A Google Docs scam that appears to be widespread began landing in Wednesday in what seemed to be a phishing attack.
            </p>
          </div>
        </div>
        </div>

    </section>
  );
};

export default About;
