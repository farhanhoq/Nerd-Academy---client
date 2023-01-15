import React from 'react';
// import bookb from '../../Assets/bookb.png'
import online from '../../Assets/online.png'
import certificate from '../../Assets/certificate.png'
import analyst from '../../Assets/analyst.png'
const About = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mx-8">

            <div className="text-center lg:text-left">
                <img className='w-12/12' src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?w=826&t=st=1673785797~exp=1673786397~hmac=4f562a9fef374abca0ef74f9b6a82c284cb16fde0eb63b823e8c5e5617ab3418" alt="" />
            </div>

            <div className='flex flex-col'>
                <h2 className='text-center lg:text-left text-2xl font-bold'> Benefits About Online Learning Expertise </h2>



                <div className='card md:card-side shadow-md mt-6 text-black w-5/4 h-28' >
                    <figure><img className='h-20 w-24 ml-6' src={online} alt="Movie" /></figure>
                    <div className="w-full mt-4 ml-6">
                        <h2 className="card-title">Online Course </h2>
                        <p>Google IT Automation with Python Professional Certificate <br></br>From Art Alison has thousands of online courses</p>

                    </div>
                </div >
                <div className='card md:card-side shadow-md mt-2 text-black w-5/4 h-28' >
                    <figure><img className='h-20 w-24 ml-6' src={certificate} alt="Movie" /></figure>
                    <div className="w-full mt-4 ml-6">
                        <h2 className="card-title">Gain Certificate</h2>
                        <p>To gain accreditation for something by passing a test or exam <br /> Best FREE Online Certification Course Providers</p>

                    </div>
                </div >
                <div className='card md:card-side shadow-md mt-2 text-black w-5/4 h-28' >
                    <figure><img className='h-20 w-24 ml-6' src={analyst} alt="Movie" /></figure>
                    <div className="w-full mt-4 ml-6">
                        <h2 className="card-title">Learn with Expert</h2>
                        <p>Block Slacks Contribution To Building A Better Collae You can learn <br /> almost anything for free, but it's also easy to spend hours</p>

                    </div>
                </div >







            </div>


        </div>
    );
};

export default About;