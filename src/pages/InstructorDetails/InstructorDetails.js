import React from 'react';
import bg from '../../Assets/instructorDetailsBg.png'
import userImage from '../../Assets/userImg.jpg'
import StudentAlsoBought from '../StudentAlsoBought/StudentAlsoBought';

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
             
             <div className='my-24 w-10/12 mx-auto'>

                

                <div className='grid grid-cols-1 md:grid-cols-2 '>
                    <div>
                        <h1 className='text-5xl border-b-2 w-5/12 border-purple-800 pb-3'>About me</h1>
                        <p className='text-lg pt-5 text-justify'>I'm Angela, I'm a developer with a passion for teaching. I'm the lead instructor at the London App Brewery, London's leading Programming Bootcamp. I've helped hundreds of thousands of students learn to code and change their lives by becoming a developer. I've been invited by companies such as Twitter, Facebook and Google to teach their employees. My first foray into programming was when I was just 12 years old, wanting to build my own Space Invader game. Since then, I've made hundred of websites, apps and games. But most importantly, I realised that my greatest passion is teaching. I spend most of my time researching how to make learning to code fun and make hard concepts easy to understand. I apply everything I discover into my bootcamp courses. In my courses, you'll find lots of geeky humour but also lots of explanations and animations to make sure everything is easy to understand. <br /> I'll be there for you every step of the way.</p>
                    </div>
                    <div className='md:ml-7'>
                    <h1 className='text-5xl border-b-2 mb-5 border-purple-800 pb-3'>My Courses</h1>
                        <StudentAlsoBought></StudentAlsoBought>
                    </div>
                </div>

             </div>
            
        </div>
    );
};

export default InstructorDetails;