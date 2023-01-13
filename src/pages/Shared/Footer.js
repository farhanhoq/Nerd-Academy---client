import React from 'react';
import { FaLinkedinIn , FaFacebookF , FaGoogle , FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto grid sm:grid-cols-2 md:grid-cols-4 my-16'>
                <div className=''>
                    <h1 className='text-3xl text-primary mb-4'>ABOUT US</h1>
                    <div className='w-10/12'>
                        <p>We are experts in helping organisations leverage coaching to drive engagement, </p>
                        <p className='my-3 text-primary text-2xl'>001 5555 6666</p>
                        <p>rubayed@gmail.com</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl text-primary mb-4'>NAVIGATION</h1>
                    <div>
                        <p>HOME</p>
                        <p>COURSES</p>
                        <p>NEWS</p>
                        <p>ABOUT</p>
                        <p>CONTACT</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl text-primary mb-4'>SERVICES</h1>
                    
                        <p>SERVICES</p>
                        <p>COURSES</p>
                        <p>OUR COURSES</p>

                    
                </div>
                <div>
                <ul className="flex gap-x-4">
                    <li className= "cursor-pointer hover:text-primary text-xl transition duration-150 ease-in-out" ><FaLinkedinIn /></li>
                    <li className= "cursor-pointer hover:text-primary text-xl transition duration-150 ease-in-out" ><FaFacebookF /></li>
                    <li className= "cursor-pointer hover:text-primary text-xl transition duration-150 ease-in-out" ><FaGoogle /></li>
                    <li className= "cursor-pointer hover:text-primary text-xl transition duration-150 ease-in-out" ><FaTwitter /></li>
                </ul>
                </div>
            </div>
            <div>
            <footer className="footer items-center p-4 bg-primary text-center">
  <div className="items-center text-white text-center mx-auto">
    
    <p>Copyright © 2023 - All right reserved by Nerd Academy</p>
  </div> 
  
</footer>
            </div>
        </div>
    );
};

export default Footer;