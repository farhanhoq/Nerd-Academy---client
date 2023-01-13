import React from 'react';
import { FaLinkedinIn , FaFacebookF , FaGoogle , FaTwitter} from 'react-icons/fa';

const TopNav = () => {
  return (
    <div className="p-5">
      <div className ="flex justify-between items-center w-11/12 mx-auto">
        <div className="flex gap-x-3">
           <p className= "cursor-pointer hover:text-primary text-lg" ><FaLinkedinIn /></p>
           <p className= "cursor-pointer hover:text-primary text-lg" ><FaFacebookF /></p>
           <p className= "cursor-pointer hover:text-primary text-lg" ><FaGoogle /></p>
           <p className= "cursor-pointer hover:text-primary text-lg" ><FaTwitter /></p>
        </div>

<div>
<input type="text" placeholder="Search" className="input input-md rounded-full" />
</div>

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
