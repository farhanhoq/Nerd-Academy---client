import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import video from '../../../Assets/react.mp4';
import banner from '../../../Assets/videoBanner.png';
import 'react-html5video/dist/styles.css';

const Module = () => {
    return (
        <div className='grid grid-cols-3 gap-4 w-11/12 mx-auto py-32'>
            <div className='col-span-3 md:col-span-2 lg:col-span-2'>
                <Video autoPlay loop muted
                 controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                 poster={banner}
                 >
                <source src={video} type="video/webm" />
                </Video>
            </div>
            <div className='col-span-3 md:col-span-1 lg:col-span-1 '>
                <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-base-200 text-black-content peer-checked:bg-base-200 peer-checked:text-black-content font-bold flex justify-between"><p> Today I will design the course module page</p>

                    </div>
                    <div className="collapse-content bg-base-200 text-black-content peer-checked:bg-white peer-checked:text-black-content pt-2">
                        <p className="py-2"> Today I will design the course module page.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-base-200 text-black-content peer-checked:bg-base-200 peer-checked:text-black-content font-bold flex justify-between"><p> Today I will design the course module page</p>

                    </div>
                    <div className="collapse-content bg-base-200 text-black-content peer-checked:bg-white peer-checked:text-black-content pt-2">
                        <p className="py-2"> Today I will design the course module page.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-base-200 text-black-content peer-checked:bg-base-200 peer-checked:text-black-content font-bold flex justify-between"><p> Today I will design the course module page</p>

                    </div>
                    <div className="collapse-content bg-base-200 text-black-content peer-checked:bg-white peer-checked:text-black-content pt-2">
                        <p className="py-2"> Today I will design the course module page.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-base-200 text-black-content peer-checked:bg-base-200 peer-checked:text-black-content font-bold flex justify-between"><p> Today I will design the course module page</p>

                    </div>
                    <div className="collapse-content bg-base-200 text-black-content peer-checked:bg-white peer-checked:text-black-content pt-2">
                        <p className="py-2"> Today I will design the course module page.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-base-200 text-black-content peer-checked:bg-base-200 peer-checked:text-black-content font-bold flex justify-between"><p> Today I will design the course module page</p>

                    </div>
                    <div className="collapse-content bg-base-200 text-black-content peer-checked:bg-white peer-checked:text-black-content pt-2">
                        <p className="py-2"> Today I will design the course module page.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-base-200 text-black-content peer-checked:bg-base-200 peer-checked:text-black-content font-bold flex justify-between"><p> Today I will design the course module page</p>

                    </div>
                    <div className="collapse-content bg-base-200 text-black-content peer-checked:bg-white peer-checked:text-black-content pt-2">
                        <p className="py-2"> Today I will design the course module page.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Module;