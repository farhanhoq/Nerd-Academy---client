import React from 'react';
// import nerd from '../../Assets/logo.jpg';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 w-11/12 mx-auto">
                
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a className="p-2 hover:border-b-2 border-teal-500 cursor-pointer">Home</a></li>
                    <li><a className="p-2 hover:border-b-2 border-teal-500 cursor-pointer">Services</a></li>
                    <li><a className="p-2 hover:border-b-2 border-teal-500 cursor-pointer">Page</a></li>
                    <li><a className="p-2 hover:border-b-2 border-teal-500 cursor-pointer">Courses</a></li>
                    <li><a className="p-2 hover:border-b-2 border-teal-500 cursor-pointer">News</a></li>
                    <li><a className="p-2 hover:border-b-2 border-teal-500 cursor-pointer">About</a></li>
                    <li><a className="p-2 hover:border-b-2 border-teal-500 cursor-pointer">Contact</a></li>
                    </ul>
                    </div>
                    {/* <img src={nerd} alt="" /> */}
                    <a href="" className="font-bold"><span className="italic text-3xl">Nerd</span><span className="text-cyan-500 text-2xl"> ACADEMY</span></a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal gap-x-3">
                    <li><a className="p-2 hover:border-b-2 border-teal-500 cursor-pointer">Home</a></li>
                    <li><a className="p-2 hover:border-b-2 border-teal-500 cursor-pointer">Services</a></li>
                    <li><a className="p-2 hover:border-b-2 border-teal-500 cursor-pointer">Page</a></li>
                    <li><a className="p-2 hover:border-b-2 border-teal-500 cursor-pointer">Courses</a></li>
                    <li><a className="p-2 hover:border-b-2 border-teal-500 cursor-pointer">News</a></li>
                    <li><a className="p-2 hover:border-b-2 border-teal-500 cursor-pointer">About</a></li>
                    <li><a className="p-2 hover:border-b-2 border-teal-500 cursor-pointer">Contact</a></li>
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