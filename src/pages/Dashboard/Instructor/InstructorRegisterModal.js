import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { GoogleAuthProvider } from '@firebase/auth';


const googleProvider = new GoogleAuthProvider();

const InstructorRegisterModal = () => {

    const { createUser, updateUser, googleSignIn, verifyEmail } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
  
    const handleSignUp = (data) => {
      createUser(data.email, data.password)
        .then(result => {
          const user = result.user;
          console.log(user);
          verifyEmail()
  
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
  
  
    const handleSignInGoogle = () => {
      googleSignIn(googleProvider)
        .then(result => {
          const user = result.user;
        //   console.log(user)
          savedUsertoDb(user.displayName, user.email, 'teacher');
          toast.success("successfully logged in");
        //   navigate('/dashboard');
        })
        .catch(error => {
          toast.error(error.message);
        })
    }



    const savedUsertoDb = (name, email, account) => {
        const user = {
          name,
          email,
          role: account
        }
        console.log(user);
    
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
              reset()
              navigate('/dashboard');
            }
          })
      }
  



    return (
        <div>
        <input type="checkbox" id="instructor-register-modal" className="modal-toggle" />
        <label htmlFor="instructor-register-modal" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="">
            <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="">
              <label className="label">
                <span className="label-text dark:text-white">Name</span>
              </label>
              <input
                {...register("name", {
                  required: "Please provided your name",
                })}
                type="text"
                placeholder="Your name"
                className="input input-bordered border-primary rounded-full w-full dark:bg-accent 
                dark:text-white dark:border-secondary"
              />
              {errors.name && <span className='text-error'>{errors.name.message}</span>}
            </div>
            <div className="mt-2">
              <label className="label">
                <span className="label-text dark:text-white">Email</span>
              </label>
              <input
                {...register("email", {
                  required: "email address is required"
                })}
                type="email"
                placeholder="Your email"
                className="input input-bordered border-primary rounded-full w-full dark:bg-accent
                 dark:text-white dark:border-secondary"
              />
              {errors.email && <span className='text-error'>{errors.email.message}</span>}
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text dark:text-white">Password</span>
              </label>
              <input
                {...register("password", {
                  required: "password is required",
                  pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/, message: "Password should be minimum six characters, at least one uppercase, one lowercase and one number" },
                  minLength: { value: 6, message: "password should be at least 6 characters or long" },
                })}
                type="password"
                placeholder="password"
                className="input input-bordered border-primary rounded-full w-full dark:bg-accent
                 dark:text-white dark:border-secondary"
              />
              {errors.password && <span className='text-error'>{errors.password.message}</span>}
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text dark:text-white">Account Type</span>
              </label>
              <div className="input-group dark:text-white dark:bg-accent">
                <select
                  {...register("account")}
                  className="select select-bordered border-primary rounded dark:bg-accent dark:text-white dark:border-secondary">
                  <option selected value="teacher">Teacher</option>
                </select>
              </div>

              <label className="label mt-2">
                <Link to="/login">
                  <span className="label-text-alt dark:text-white">
                    Have an account?{" "}
                    <span className="link link-primary font-bold dark:text-white">Login</span>
                  </span>
                </Link>
              </label>
            </div>
            <input className='btn bg-gradient-to-r from-primary to-secondary text-white border-primary hover:border-primary
              my-4 w-full hover:bg-gradient-to-r hover:from-white hover:text-black hover:to-white
               dark:text-white dark:border-secondary'
              type="submit" value="Sign up" />
          </form>

          <button onClick={handleSignInGoogle} className="btn btn-outline hover:bg-gradient-to-r 
             hover:from-primary hover:to-secondary border-primary hover:border-primary dark:text-white ">
            Sign up with Google<span></span>
          </button>
            </label>
        </label>
    </div>
    );
};

export default InstructorRegisterModal;