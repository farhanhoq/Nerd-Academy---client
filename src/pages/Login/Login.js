import React, { useContext } from "react";
import Lottie from "lottie-react";
import eduAnimation from "../../../src/Assets/edu-animation.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { GoogleAuthProvider } from "@firebase/auth";
import ScrollToTop from "../ScrollToTop";

const googleProvider = new GoogleAuthProvider();

const Login = () => {

  const { signIn, googleSignIn } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data, event) => {
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully logged in");
        event.target.reset();
        navigate(from, { replace: true });
      })
      .catch(error => {
        toast.error(error.message);
      })
  }

  const handleSignInGoogle = () => {
    googleSignIn(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
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
    <div>
      <ScrollToTop />
      <div className="flex flex-col gap-6 lg:gap-24 md:flex-row items-center lg:h-screen container mx-auto justify-between md:px-32">
        <div className="w-10/12 lg:w-1/2 mt-16 lg:mt-0">
          <Lottie loop={true} animationData={eduAnimation} />
        </div>

        <div className="w-10/12 lg:w-4/12 md:mt-16 mb-16 lg:mb-0 dark:bg-accent">
          <div>
            <h1 className="text-5xl text-primary text-center mb-4 font-bold uppercase dark:text-secondary">
              Login
            </h1>
          </div>
          <div className="card card-body shadow-2xl bg-base-100 dark:bg-accent border border-primary
           mt-[50px] md:mt-0 dark:border-secondary">
            <form onSubmit={handleSubmit(handleLogin)}>
              <div>
                <label className="label">
                  <span className="label-text dark:text-white">Email</span>
                </label>
                <input
                  {...register("email", {
                    required: "email address is required",
                  })}
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered border-primary rounded-full w-full dark:bg-accent
                   dark:text-white dark:border-secondary"
                />
                {errors.email && <p className="text-error">{errors.email?.message}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-textdark dark:text-white">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: "password is required",
                    minLength: { value: 6, message: "password must be 6 characters or longer" }
                  })}
                  type="password"
                  placeholder="Your Password"
                  className="input input-bordered border-primary rounded-full w-full  dark:bg-accent
                   dark:text-white dark:border-secondary"
                />
                {errors.password && <p className="text-error">{errors.password?.message}</p>}
                <label className="label">
                  <Link to="/register">
                    <span className="label-text-alt dark:text-white">
                      New to this site? Please
                      <span className="link link-primary font-bold dark:text-secondary"> Register</span>
                    </span>
                  </Link>
                </label>
              </div>
              <input className='btn bg-gradient-to-r from-primary to-secondary text-white border-primary dark:border-secondary hover:border-primary
              my-4 w-full hover:bg-gradient-to-r hover:from-white hover:text-black hover:to-white' type="submit" value="Login" />
            </form>
            <button onClick={handleSignInGoogle} className="btn btn-outline hover:bg-gradient-to-r 
             hover:from-primary hover:to-secondary border-primary hover:border-primary dark:text-white dark:border-secondary">
              Sign up with Google<span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
