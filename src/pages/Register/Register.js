import React from "react";
import Lottie from "lottie-react";
import eduAnimation from "../../../src/Assets/edu-animation.json";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex flex-col gap-6 lg:gap-32 md:flex-row items-center lg:h-screen container mx-auto justify-between">
      <div className="w-10/12 lg:w-10/12 mt-16 lg:mt-0">
        <Lottie loop={true} animationData={eduAnimation} />
      </div>

      <div className="w-10/12 lg:w-1/2 md:mt-16 mb-16 lg:mb-0">
        <div>
          <h1 className="text-5xl text-primary text-center mb-4 font-bold">
            Registration
          </h1>
        </div>
        <div className="card shadow-2xl bg-base-100 border border-primary">
          <div className="card-body ">
            <div className="">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered border-primary rounded-full w-full"
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered border-primary rounded-full w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered border-primary rounded-full w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Account Type</span>
              </label>
              <div className="input-group">
                <select className="select select-bordered border-primary rounded">
                  <option value="buyer">Student</option>
                  <option value="seller">Teacher</option>
                </select>
              </div>

              <label className="label">
                <Link to="/login">
                  <span className="label-text-alt ">
                    Have an account?{" "}
                    <span className="link link-primary">Login</span>
                  </span>
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary mb-2 text-white">
                Sign up
              </button>
              <button className="btn btn-outline hover:bg-primary border-gray-300 hover:border-primary">
                Sign up with Google<span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
