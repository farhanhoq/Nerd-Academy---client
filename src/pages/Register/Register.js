import React from "react";
import Lottie from "lottie-react";
import eduAnimation from "../../../src/Assets/edu-animation.json";
import { Link } from "react-router-dom";

const Register = () => {
  return (
      <div className="flex flex-col md:flex-row items-center h-screen container mx-auto justify-between px-32">
        <div className="md:mr-5">
          <Lottie loop={true} animationData={eduAnimation} />
        </div>

        <div>
          <div>
            <h1 className="text-3xl text-primary text-center mb-4 font-bold">
              Registration
            </h1>
          </div>
          <div className="card shadow-2xl bg-base-100 border border-primary mt-[50px] md:mt-0">
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
