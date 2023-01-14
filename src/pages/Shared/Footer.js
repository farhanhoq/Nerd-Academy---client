import React from "react";
import { FaLinkedinIn, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
            <div className="container mx-auto">
        <hr/>
      <div className="grid sm:grid-cols-2 md:grid-cols-5 my-16">
        <div className="col-span-2">
          <h2 className="text-2xl text-primary mb-4 uppercase font-semibold">About us</h2>
          <div className="w-3/4">
            <p className="text-slate-400">
              We are experts in helping organisations leverage coaching to drive
              engagement,{" "}
            </p>
            <p className="my-3 text-primary text-2xl">001 5555 6666</p>
            <p>nerdacademy@gmail.com</p>
          </div>
        </div>

        <div className="justify-self-center">
          <h2 className="text-xl text-primary mb-4 uppercase font-semibold">Navigation</h2>
          <ul>
            <li className="my-2">Home</li>
            <li className="my-2">Courses</li>
            <li className="my-2">News</li>
            <li className="my-2">About</li>
            <li className="my-2">Contact</li>
          </ul>
        </div>
        <div className="justify-self-center">
          <h2 className="text-xl text-primary mb-4 uppercase font-semibold">Serivces</h2>

          <ul>
            <li className="my-2">Services</li>
            <li className="my-2">Courses</li>
            <li className="my-2">Courses</li>
          </ul>
        </div>

        <div className="justify-self-center">
          <ul className="flex gap-x-4">
            <li className="cursor-pointer hover:text-primary text-xl transition duration-150 ease-in-out">
              <FaLinkedinIn />
            </li>
            <li className="cursor-pointer hover:text-primary text-xl transition duration-150 ease-in-out">
              <FaFacebookF />
            </li>
            <li className="cursor-pointer hover:text-primary text-xl transition duration-150 ease-in-out">
              <FaGoogle />
            </li>
            <li className="cursor-pointer hover:text-primary text-xl transition duration-150 ease-in-out">
              <FaTwitter />
            </li>
          </ul>
        </div>
      </div>
      <div>
      </div>
    </div>
            <footer className="footer items-center p-4 bg-primary text-center">
            <div className="items-center text-white text-center mx-auto">
              <p>Copyright © 2023 - All right reserved by Nerd Academy</p>
            </div>
          </footer>
    </div>
  );
};

export default Footer;
