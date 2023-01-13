import React from 'react';
import { FaLinkedin , FaFacebookSquare , FaGooglePlusSquare , FaTwitterSquare} from 'react-icons/fa';

const TopNav = () => {
  return (
    <div className="p-5">
      <div className ="flex justify-between items-center w-11/12 mx-auto">
        <div className="flex gap-x-3">
           <p className= "cursor-pointer text-slate-400 hover:text-teal-500 text-2xl" ><FaLinkedin /></p>
           <p className= "cursor-pointer text-slate-400 hover:text-teal-500 text-2xl" ><FaFacebookSquare /></p>
           <p className= "cursor-pointer text-slate-400 hover:text-teal-500 text-2xl" ><FaGooglePlusSquare /></p>
           <p className= "cursor-pointer text-slate-400 hover:text-teal-500 text-2xl" ><FaTwitterSquare /></p>
        </div>
{/* ------------------------------- */}

        <div>
            <ul className=" grid grid-cols-2 gap-x-4">
                <li><a className="p-2 hover:border-b-2 border-teal-500">Register</a></li>
                <li><a className="p-2 hover:border-b-2 border-teal-500">Login</a></li>
            </ul>
        </div>

    </div>
    </div>
  );
};

export default TopNav;
