import React from 'react';
import Lottie from "lottie-react";
import roadmapAnimation from '../../Assets/roadmap.json'


const Roadmap = () => {
    return (
        <div className="w-10/12 mx-auto">
            <div className='w-5/12 mx-auto '>
                <Lottie  loop={true} animationData={roadmapAnimation} />
            </div>
        </div>
    );
};

export default Roadmap;