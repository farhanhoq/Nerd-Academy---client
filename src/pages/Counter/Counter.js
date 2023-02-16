import React, { useEffect, useState } from 'react';

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
        <div className="p-1 bg-gradient-to-r from-[#7b35fd] to-[#ad35e9]">
            <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-8 my-20 w-12/12 mx-24'>
                {
                    counters.map(counter => <div key={counter.id} counter={counter} className="w-full max-w-sm rounded-md shadow-md border py-6">
                        <div className="flex flex-col items-center p-6 text-white">
                            {/* <img className="w-24 h-24 mb-3 rounded-full shadow-lg border border-zinc-50 my-4" src={counter.img} alt='' /> */}
                            <h5 className="dark:text-gray-400 text-3xl font-semibold">{counter.digit}</h5>
                            <span className="mb-1 text-md font-bold dark:text-white capitalize">{counter.title}</span>
                        </div>
                    </div>)
                }
            </div>
        </div>



    );
};

export default Counter;