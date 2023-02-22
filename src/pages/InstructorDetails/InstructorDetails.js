import React from 'react';
import bg from '../../Assets/instructorDetailsBg.png'
import userImage from '../../Assets/userImg.jpg'

const InstructorDetails = () => {
    return (
        <div className=''>
            <div className="py-[50px]" style={{ backgroundImage: `url(${bg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content mx-auto relative py-16">

                    <div className="text-left mx-auto w-7/12 mx-auto">
                    <h1 className="mt-20 text-5xl font-bold ">Meredith Hanson</h1>
                    <p className="pt-3 text-lg">lead instructor at the London App Brewery</p>
                    </div>
                </div>
            </div>

            <div className='absolute top-[170px] left-24'>
               <img className='w-[250px] w-[250px] rounded-full ' src={userImage} />
            </div>
             
             <div className='my-20 w-10/12 mx-auto'>

                <h1 className='text-5xl'>About me</h1>

             </div>
            
        </div>
    );
};

export default InstructorDetails;