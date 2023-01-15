import React from 'react';
import { Link } from 'react-router-dom';
import { FaOpencart } from 'react-icons/fa';

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/page">Page</Link>
      </li>
      <li>
        <Link to="/course">Courses</Link>
      </li>
      <li>
        <Link to="/news">News</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div className='w-11/12 mx-auto'>
      <div className="navbar flex justify-between mt-3 mb-[-5px]">
        <div className="">  
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          {/* <img src={nerd} alt="" /> */}
          <div className='w-[210px]'>
            <Link href="/" className="font-bold">
            <span className="text-2xl">Nerd</span>
            <span className="text-cyan-500 text-2xl"> Academy</span>
          </Link>
          </div>
        </div>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal bg-white hover:bg-white">
            <li>
              <span className="hover:text-primary rounded">Categories</span>
              <ul className="bg-base-100 p-2 rounded">{menuItems}</ul>
            </li>
          </ul>
        </div>
        
        <div class="input w-full">
          <input
            type="text"
            placeholder="Search for anything"
            className="input input-bordered input-primary rounded-full w-full"/>
        </div>
      <div className='text-3xl hover:text-primary cursor-pointer mx-5'>
        <FaOpencart />
      </div>
      
        <div className="">
            <button className='btn border-primary hover:border-primary hover:text-white bg-white hover:bg-primary text-black rounded-none mr-1 '><Link to='/login'>Log in</Link></button>
            <button className='btn border-primary bg-primary text-white text rounded-none'><Link to='/register'>Sign up</Link></button>
            
        </div>
      </div>
    </div>
  );
};

export default Navbar;
