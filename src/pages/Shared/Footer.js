import React from "react";
import { FaLinkedinIn, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <hr />
      <footer className="footer p-10 lg:grid-cols-4 my-8">
        <div className="w-full">
          <h2 className="text-2xl text-primary mb-4 uppercase font-semibold">About us</h2>
          <div>
            <p className="text-slate-400 text-xl">
              We are experts in helping organizations leverage coaching to drive
              engagement,{" "}
            </p>
            <p className="my-3 text-primary text-2xl">001 5555 6666</p>
            <p className="text-xl">nerdacademy@gmail.com</p>
          </div>
        </div>

        <div className="justify-self-center">
          <h2 className="text-xl text-primary mb-4 uppercase font-semibold">Navigation</h2>
          <ul>
            <Link to='/construction'><li className="my-2">Home</li></Link>
            <Link to='/construction'><li className="my-2">Courses</li></Link>
            <Link to='/construction'><li className="my-2">News</li></Link>
            <Link to='/construction'><li className="my-2">About</li></Link>
            <Link to='/construction'><li className="my-2">Contact</li></Link>
            
          </ul>
        </div>
        <div className="justify-self-center">
          <h2 className="text-xl text-primary mb-4 uppercase font-semibold">Serivces</h2>

          <ul>
            <Link to='/construction'><li className="my-2">Services</li></Link>
            <Link to='/construction'><li className="my-2">Courses</li></Link>
            <Link to='/construction'><li className="my-2">Courses</li></Link>
          </ul>
        </div>
        <div className="">
          <span className="text-2xl text-primary uppercase font-semibold">Find Us</span>
          <ul className="flex gap-x-4">
            <li c to="#" className="cursor-pointer hover:text-primary text-xl transition duration-150 ease-in-out">
              <FaLinkedinIn />
            </li>
            <li c to="#" className="cursor-pointer hover:text-primary text-xl transition duration-150 ease-in-out">
              <FaFacebookF />
            </li>
            <li c to="#" className="cursor-pointer hover:text-primary text-xl transition duration-150 ease-in-out">
              <FaGoogle />
            </li>
            <li c to="#" className="cursor-pointer hover:text-primary text-xl transition duration-150 ease-in-out">
              <FaTwitter />
            </li>
          </ul>
        </div>
      </footer>
      <footer className="footer items-center p-4 bg-primary text-center">
        <div className="items-center text-white text-center mx-auto">
          <p>Copyright © 2023 - All right reserved by Nerd Academy</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
