import React from 'react';
import bg from '../../Assets/instructorBg.jpg'
import firstClass from '../../Assets/first-class.svg'
import grow from '../../Assets/grow.svg'
import earning from '../../Assets/earning.svg'
import teach from '../../Assets/teach.jpg'
import inspire from '../../Assets/inspire.jpg'
import cup from '../../Assets/cup.jpg'
import educationBg1 from '../../Assets/instructorDetailsBg.png'
import ScrollToTop from '../ScrollToTop';
import { Link } from 'react-router-dom';
import InstructorRegisterModal from '../Dashboard/Instructor/InstructorRegisterModal';

const TeacherPrerequisites = () => {
    return (
        <div className='pt-24'>
            <ScrollToTop />

            {/* banner */}

            <div className="bg-primary py-36" style={{ backgroundImage: `url("${bg}")` }}>
                    <div className="w-7/12 mx-auto text-white">
                        <h1 className="mb-5 text-5xl font-bold">Inspire Creativity in Others.</h1>
                        <p className="mb-5 text-lg">Teach on Nerd Academy and share your passion with members around the world.</p>
                    </div>
            </div>

            {/* banner */}

            {/* Why Teach on Nerd Academy? */}

            <div className='text-center w-9/12 mx-auto my-24'>
                <h1 className='text-5xl text-primary font-bold mb-10'>Why Teach on Nerd Academy?</h1>
                <p className='text-lg'>When you help others along their creative journey, it’s rewarding in more ways than one. By teaching on Nerd Academy, you can grow your online following, give back, and earn money. Top earning teachers make $100,000+ each year.</p>
                <br />
                <p className='text-lg'>Nerd Academy teachers are real working creatives and experts eager to share their expertise. If you’re an experienced creative pro with tips, techniques and skills to demonstrate, we offer an extensive suite of resources and responsive support to help you create classes that inspire.</p>
            </div>

            {/* Why Teach on Nerd Academy? */}

            {/* How Teaching Works */}

            <div className='w-9/12 mx-auto my-24'>
                <h1 className='text-5xl text-primary font-bold mb-14'>How Teaching Works</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='w-10/12'>
                        <img className='w-[150px]' src={firstClass} alt="" />
                        <h5 className='mt-8 text-xl font-bold text-primary'>Create Your First Class</h5>
                        <p className='mt-3'>Film your Skillshare class and publish it with our easy class upload tool. We provide help every step of the way.</p>
                    </div>
                    <div className='w-10/12'>
                        <img className='w-[150px]' src={grow} alt="" />
                        <h5 className='mt-8 text-xl font-bold text-primary'>Grow Your Following</h5>
                        <p className='mt-3'>There are millions of members learning on Skillshare. We’ll show you how to build your presence in the Skillshare community and beyond.</p>
                    </div>
                    <div className='w-10/12'>
                        <img className='w-[150px]' src={earning} alt="" />
                        <h5 className='mt-8 text-xl font-bold text-primary'>Start Earning</h5>
                        <p className='mt-3'>You’ll be paid monthly for every member who watches your classes, forever. Top earning teachers make $100,000+ a year.</p>
                    </div>
                </div>
            </div>

            {/* How Teaching Works */}

            {/* So many reasons to start */}

            <div className='w-9/12 mx-auto my-24'>
                <h1 className='text-5xl text-primary font-bold mb-14 text-center'>So many reasons to start</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='w-10/12'>
                        <img className='w-[150px] mx-auto' src={teach} alt="" />
                        <h5 className='mt-8 text-xl font-bold text-primary'>Teach your way</h5>
                        <p className='mt-3'>Publish the course you want, in the way you want, and always have control of your own content.</p>
                    </div>
                    <div className='w-10/12'>
                        <img className='w-[150px] mx-auto' src={inspire} alt="" />
                        <h5 className='mt-8 text-xl font-bold text-primary'>Inspire learners</h5>
                        <p className='mt-3'>Teach what you know and help learners explore their interests, gain new skills, and advance their careers.</p>
                    </div>
                    <div className='w-10/12'>
                        <img className='w-[150px] mx-auto' src={cup} alt="" />
                        <h5 className='mt-8 text-xl font-bold text-primary'>Get rewarded</h5>
                        <p className='mt-3'>Expand your professional network, build your expertise, and earn money on each paid enrollment.</p>
                    </div>
                </div>
            </div>

            {/* So many reasons to start */}

            {/* New Teacher Support */}

            <div className="bg-primary py-36" style={{ backgroundImage: `url("${educationBg1}")` }}>
                    <div className="w-7/12 mx-auto text-white text-center w-6/12 mx-auto">
                        <h1 className="mb-5 text-5xl font-bold pb-5">New Teacher Support</h1>
                        <p className="mb-5 text-xl">Our Instructor Support Team is here to answer your questions and review your test video, while our Teaching Center gives you plenty of resources to help you through the process. Plus, get the support of experienced instructors in our online community.</p>
                    </div>
            </div>

            {/* New Teacher Support */}

            <div className='py-36'>
                <h1 className='mb-5 text-5xl font-bold pb-5 text-primary text-center'>Our Agreements</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto gap-5'>
                    <p className='p-5 rounded-2xl text-xl'>We are each responsible as individuals for communicating what we need to do our best work with our managers, peers, and squads.</p>
                    <p className='p-5 rounded-2xl text-xl'>
                    We choose rapid, open, and two-way communication to make the best, most well-informed decisions.
                    </p>
                    <p className='p-5 rounded-2xl text-xl'>We choose rapid, open, and two-way communication to make the best, most well-informed decisions.</p>
                    <p className='p-5 rounded-2xl text-xl'>We expect people to take bets, learning from both successes and those decisions that don’t work out.</p>
                    <p className='p-5 rounded-2xl text-xl'>We respect ideas, not status. We take the best ideas from each other to raise the quality of our collective decision making.</p>
                    <p className='p-5 rounded-2xl text-xl'>We seek to build our platform to a level of quality that people can trust with their livelihoods, while still moving quickly to innovate.</p>
                </div>
            </div>

            {/* New Teacher Support */}

            <div className='py-32 bg-slate-100 text-center'>
                <h1 className='mb-5 text-5xl font-bold text-primary'>Become an instructor today</h1>
                <p className='font-bold text-2xl'>Join one of the world’s largest online learning marketplaces.</p>
                <label
                    htmlFor="instructor-register-modal"
                    className="rounded btn text-xs capitalize border-primary bg-transparent text-black border transition
                    ease-in-out duration-300 hover:text-white hover:bg-gradient-to-r 
                    hover:from-primary hover:to-secondary dark:text-white">
                    Start Teaching Today
                  </label>
            </div>
            <InstructorRegisterModal></InstructorRegisterModal>
        </div>
    );
};

export default TeacherPrerequisites;