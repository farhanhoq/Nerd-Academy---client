import React from 'react';
import { FaLinkedinIn , FaFacebookF , FaGoogle , FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto grid sm:grid-cols-2 md:grid-cols-4 my-16'>
                <div className=''>
                    <h1 className='text-2xl text-primary mb-4'>ABOUT US</h1>
                    <div className='w-10/12'>
                        <p>We are experts in helping organisations leverage coaching to drive engagement, </p>
                        <p className='my-3 text-primary text-2xl'>001 5555 6666</p>
                        <p>nerdacademy@gmail.com</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl text-primary mb-4'>NAVIGATION</h1>
                    <ul>
                        <li className='my-2'>HOME</li>
                        <li className='my-2'>COURSES</li>
                        <li className='my-2'>NEWS</li>
                        <li className='my-2'>ABOUT</li>
                        <li className='my-2'>CONTACT</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-xl text-primary mb-4'>SERVICES</h1>
                    
                    <ul>
                    <p className='my-2'>SERVICES</p>
                        <p className='my-2'>COURSES</p>
                        <p className='my-2'>OUR COURSES</p>
                    </ul>

                    
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