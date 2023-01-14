import React from 'react';
import { Link } from 'react-router-dom';
// import nerd from '../../Assets/logo.jpg';

const Navbar = () => {

  const menuItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/">Services</Link></li>
    <li><Link to="/">Page</Link></li>
    <li><Link to="/">Courses</Link></li>
    <li><Link to="/">News</Link></li>
    <li><Link to="/">About</Link></li>
    <li><Link to="/">Contact</Link></li>
  </>

  return (
    <div>
      <div className="navbar bg-base-100 w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}</ul>
          </div>
          {/* <img src={nerd} alt="" /> */}
          <Link href="/" className="font-bold"><span className="italic text-3xl">Nerd</span><span className="text-cyan-500 text-2xl"> ACADEMY</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal gap-x-3">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">Get started</a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
