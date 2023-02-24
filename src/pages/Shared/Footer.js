import React from "react";
import { FaLinkedinIn, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <div>
      <footer className="footer p-10 lg:grid-cols-3 md:justify-items-center my-8 dark:text-white mt-16">
        <div className="w-full">
          <h2 className="text-xl md:text-2xl text-primary mb-3 uppercase font-semibold">Office Address</h2>
          <div>
            <p className="text-lg md:text-lg">
              Level-4, 34, Awal Centre, Banani, Dhaka
            </p>
            <p className="my-2 text-lg md:text-lg">Support: web@nerdacademy.com</p>
            <p className="mb-2 text-lg md:text-lg">Helpline:+8801601321808</p>
            <p className="text-lg md:text-lg">(Available: Sat - Thu, 10:00 AM To 7:00 PM)</p>
          </div>
        </div>

        <div className="md:justify-self-center">
          <h2 className="text-xl md:text-2xl text-primary uppercase font-semibold">Useful Links</h2>
          <ul>
            <Link className="text-lg md:text-lg" to='/'><li className="my-2">Home</li></Link>
            <Link className="text-lg md:text-lg" to='/about'><li className="my-2">About Us</li></Link>
            <Link className="text-lg md:text-lg" to='/blog'><li className="my-2">Blogs</li></Link>
            <Link className="text-lg md:text-lg" to='/contact'><li className="my-2">Contact Us</li></Link>

          </ul>
        </div>

        <div className="md:justify-self-center">
          <h2 className="text-xl md:text-2xl text-primary uppercase font-semibold">Rules & Regulations</h2>
          <ul>
            <Link className="text-lg md:text-lg" to='/privacy-policy'><li className="my-2">Privacy Policy</li></Link>
            <Link className="text-lg md:text-lg" to='/terms-conditions'><li className="my-2">Terms & Conditions</li></Link>
            <Link className="text-lg md:text-lg" to='/license'><li className="my-2">Licensing</li></Link>
            <Link className="text-lg md:text-lg" to='/cookie-policy'><li className="my-2">Cookie Policy</li></Link>

          </ul>
        </div>


        <div>
          <span className="text-xl md:text-2xl mb-2 text-primary uppercase font-semibold">Follow Us</span>
          <ul className="flex gap-x-6">
            <li to="#" className="cursor-pointer hover:text-primary text-xl transition duration-150 ease-in-out">
              <FaLinkedinIn />
            </li>
            <li to="#" className="cursor-pointer hover:text-primary text-xl transition duration-150 ease-in-out">
              <FaFacebookF />
            </li>
            <li to="#" className="cursor-pointer hover:text-primary text-xl transition duration-150 ease-in-out">
              <FaGoogle />
            </li>
            <li to="#" className="cursor-pointer hover:text-primary text-xl transition duration-150 ease-in-out">
              <FaTwitter />
            </li>
          </ul>
        </div>
      </footer>
      <footer className="footer items-center p-4 bg-primary text-center">
        <div className="items-center text-white text-center mx-auto">
          <p>© Nerd Academy 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
