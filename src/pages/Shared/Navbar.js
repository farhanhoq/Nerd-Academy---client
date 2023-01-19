import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)

  const changeBg = () => {
    if (window.scrollY >= 20) {
      setNavbar(true)
    }
    else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBg)
  const menuItems = (
    <>
      <li>
        <a href="/#home">Home</a>
      </li>
      <li>
        <a href="/#about">About</a>
      </li>
      <li>
        <a href="/#courses">Courses</a>
      </li>
      <li>
        <a href="/#news">News</a>
      </li>
      <li>
        <a href="/#contact">Contact</a>
      </li>
      <li className="block lg:hidden">
        <a href="/login">Login</a>
      </li>
      <li className="block lg:hidden">
        <a href="/register">Register</a>
      </li>
    </>
  );

  return (
    <nav className={navbar ? "navbar active flex justify-between w-full mx-auto fixed z-10 px-16" : "navbar flex justify-between w-full mx-auto fixed z-10 px-16"}>
      <div className="">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        {/* <img src={nerd} alt="" /> */}
        <div className="w-[210px]">
          <Link to="/" className="font-bold text-white text-2xl">
            {" "}
            Nerd
            <span className=""> Academy</span>
          </Link>
        </div>
      </div>

      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal">
          <li>
            <span className="rounded text-white">Categories</span>
            <ul className="bg-base-100 p-2 rounded">{menuItems}</ul>
          </li>
          <li>
            <a href="/#courses" className="text-white">Courses</a>
          </li>
        </ul>
      </div>

      <div class="hidden lg:block w-[30%]">
        <input
          type="text"
          placeholder="Search courses here"
          className="input input-bordered input-primary rounded-full w-full"
        />
      </div>
      <div className='text-3xl hover:text-primary cursor-pointer mx-5'>
        <Link to='/cart'><FaOpencart /></Link>
      </div>


      <div>
        <Link
          to="/login"
          className="btn border-primary hover:border-primary hover:text-white bg-white hover:bg-primary text-black 
            rounded mr-1 hidden md:block pt-4"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="btn border-primary bg-primary text-white text-center rounded hidden md:block pt-4"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
