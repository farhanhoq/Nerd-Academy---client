import React, { useEffect, useState } from 'react';
import users from '../../Assets/users.png'
import instructorf from '../../Assets/instructorf.png'
import learner from '../../Assets/learner.png'
import course from '../../Assets/course.png'
import cover2 from '../../Assets/cover2.jpg'
import './Counter.css'

const Counter = () => {
    const [counters, setCounters] = useState([]);

    useEffect(() => {
        fetch('https://nerd-academy-server.vercel.app/counter')
            .then(res => res.json())
            .then(data => {
                setCounters(data)
            })
    }, []);
    return (


        // <div style={{
        //     background: ` url(${cover2})`,
        //     backgroundPosition: "center",
        //     backgroundRepeat: "no-repeat",
        //     backgroundSize: "cover",
        //     height: "400px",
        //     padding: "1px",
        // }}
        // >
        <div style={{ backgroundImage: `url(${cover2})` }} className="lg:h-96 p-1 bg-cover bg-no-repeat	bg-center">
            <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-8 my-20 w-12/12 mx-24'>
                {
                    counters.map(counter => <div key={counter.id} counter={counter} className="w-full max-w-sm  rounded-md shadow-md border border-cyan-500">
                        <div className="flex justify-end px-4 pt-4">
                        </div>
                        <div className="left-content flex flex-col items-center pb-10">
                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg border border-zinc-50 my-4" src={counter.img} alt='' />
                            <h5 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">{counter.title}</h5>
                            <span className="text-black-500 dark:text-gray-400 text-md font-semibold">{counter.digit}</span>

                        </div>
                    </div>)
                }
            </div>
        </div>



    );
};

export default Counter;