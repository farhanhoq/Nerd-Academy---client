import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router-dom';
import anime from '../../Assets/error-animation.json'

const Error = () => {
    return (
        <div className="dark:bg-accent">
            <div className='grid grid-cols-1 md:grid-cols-2 py-32 items-center dark:bg-accent'>
                <div className='w-10/12 mx-auto'>
                <Lottie loop={true} animationData={anime} />
                </div>
                <div className='text-center'>
                    <h1 className='text-5xl lg:text-8xl font-extrabold text-primary'>404</h1>
                    <h2 className='text-3xl font-bold'>Page Not Found</h2>
                    <p className='font-bold mt-5 text-xl opacity-60 mb-5'>We are sorry, the page you requested could not be found. <br /> Please go back to the homepage</p>
                    <Link to='/' className='btn text-white bg-primary rounded-full px-8 text-lg border-none'>GO HOME</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;