import React from 'react';
import Lottie from 'lottie-react';
import eduAnimation from '../../../src/Assets/edu-animation.json';
import google from '../../Assets/google.png'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row items-center h-screen mt-[50px] md:mt-[-100px]  w-9/12 mx-auto'>
                <div className='md:mr-5'>
                    <Lottie loop={true} animationData={eduAnimation} />
                </div>

                <div>
                <div className="card shadow-2xl bg-base-100 border border-primary mt-[50px] md:mt-0">
      <div className="card-body ">
        <div className="">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Your email" className="input input-bordered border-primary rounded-full" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered border-primary rounded-full" />
          <label className="label">
            <Link to='/register'><span className="label-text-alt ">New to this site? Please <span className='link link-primary'>Register</span></span></Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary mb-2 text-white">Log in</button>
          <button className="btn btn-outline hover:bg-primary border-gray-300 hover:border-primary">Sign up with Google<span></span></button>
        </div>
      </div>
    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;