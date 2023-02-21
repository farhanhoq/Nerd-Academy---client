import React from 'react';
import Publish from './Publish';

const MyCourse = () => {

    return (
        <div className="card my-6 shadow-xl h-full">
            <div className="card-body">
                <div className="drawer drawer-mobile">
                    <Publish></Publish>
                </div>
            </div>
        </div>
    );
};

export default MyCourse;