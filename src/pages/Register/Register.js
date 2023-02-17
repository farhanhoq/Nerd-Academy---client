import React, { useContext } from 'react';
import Lottie from "lottie-react";
import eduAnimation from "../../../src/Assets/edu-animation.json";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { GoogleAuthProvider } from '@firebase/auth';
import ScrollToTop from "../ScrollToTop";

const googleProvider = new GoogleAuthProvider();

const Register = () => {

  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        // toast.success("Successfully User Created");

        const userInfo = {
          displayName: data.name,
        }

        updateUser(userInfo)
          .then(() => {
            savedUsertoDb(data.name, data.email, data.account);
          })
          .catch(error => {
            console.log(error.message);
          })
      })
      .catch(error => {
        toast.error(error.message);
      });
  }

  const savedUsertoDb = (name, email, account) => {
    const user = {
      name,
      email,
      role: account
    }

    fetch('https://nerd-academy-server.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success("Successfully User Created");
          reset()
          navigate('/');
        }
      })

  }

  const handleSignInGoogle = () => {
    googleSignIn(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user)
        toast.success("successfully logged in");
        navigate('/');
      })
      .catch(error => {
        toast.error(error.message);
      })
  }

  //   const handleSignInGoogle = () => {
  //     signInWithGoogle(googleProvider)
  //         .then(res => {
  //             fetch(`https://nerd-academy-server.vercel.app/jwt?email=${res.user.email}`)
  //                 .then(res => res.json())
  //                 .then(token => {
  //                     localStorage.setItem('accessToken', token.accessToken);
  //                     const user = {
  //                         name: res.user.displayName,
  //                         email: res.user.email,
  //                         role: 'buyer',
  //                     };
  //                     fetch('https://nerd-academy-server.vercel.app/users', {
  //                         method: 'POST',
  //                         headers: {
  //                             'content-type': 'application/json'
  //                         },
  //                         body: JSON.stringify(user)
  //                     })
  //                         .then(res => res.json())
  //                         .then(data => {
  //                             toast.success('Register successfully')
  //                             navigate('/dashboard')

  //                         })
  //                 });


  //         })
  //         .catch(err => toast.error(err))
  // }


  return (
    <div className="flex flex-col gap-6 lg:gap-24 md:flex-row items-center container mx-auto justify-between md:px-32">
      <ScrollToTop/>
      <div className="w-10/12 lg:w-1/2 mt-16 lg:mt-0">
        <Lottie loop={true} animationData={eduAnimation} />
      </div>

      <div className="w-10/12 lg:w-4/12 md:my-32 lg:mt-22 mb-22">
        <div>
          <h1 className="text-5xl text-primary text-center mb-4 font-bold">
            Register
          </h1>
        </div>
        <div className="card card-body shadow-2xl bg-base-100 border border-primary">
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: "Please provided your name",
                })}
                type="text"
                placeholder="Your name"
                className="input input-bordered border-primary rounded-full w-full"
              />
              {errors.name && <span className='text-error'>{errors.name.message}</span>}
            </div>
            <div className="mt-2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: "email address is required"
                })}
                type="email"
                placeholder="Your email"
                className="input input-bordered border-primary rounded-full w-full"
              />
              {errors.email && <span className='text-error'>{errors.email.message}</span>}
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: "password is required",
                  pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/, message: "Password should be minimum six characters, at least one uppercase, one lowercase and one number" },
                  minLength: { value: 6, message: "password should be at least 6 characters or long" },
                })}
                type="password"
                placeholder="password"
                className="input input-bordered border-primary rounded-full w-full"
              />
              {errors.password && <span className='text-error'>{errors.password.message}</span>}
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text">Account Type</span>
              </label>
              <div className="input-group">
                <select
                  {...register("account")}
                  className="select select-bordered border-primary rounded">
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                </select>
              </div>

              <label className="label mt-2">
                <Link to="/login">
                  <span className="label-text-alt ">
                    Have an account?{" "}
                    <span className="link link-primary font-bold">Login</span>
                  </span>
                </Link>
              </label>
            </div>
            <input className='btn bg-gradient-to-r from-primary to-secondary text-white border-primary hover:border-primary
              my-4 w-full hover:bg-gradient-to-r hover:from-white hover:text-black hover:to-white'
              type="submit" value="Sign up" />
          </form>

          <button onClick={handleSignInGoogle} className="btn btn-outline hover:bg-gradient-to-r 
             hover:from-primary hover:to-secondary border-primary hover:border-primary">
            Sign up with Google<span></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
