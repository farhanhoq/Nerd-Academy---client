import React, { useEffect, useState } from 'react';
import FaqDetails from './FaqDetails';
// import FaqDetails from './FaqDetails';

const Faq = () => {
    const [faq, setFaq] = useState([]);

    useEffect(() => {
        fetch('https://nerd-academy-server.vercel.app/faq')
            .then(res => res.json())
            .then(data => setFaq(data))
    }, [])

    return (

        <section className="bg-cyan-50 py-16 dark:bg-black dark:text-white">
            <div className="container px-5 mt-16 mx-auto">
                <div className="mt-10">

                    <h1 className="sm:text-3xl text-2xl font-semibold text-center text-gray-900">
                        Frequently Asked Question
                    </h1>

                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mt-8 text-center">
                        The most common questions about how our business works and what
                        can do for you.
                    </p>
                </div>

                <div className="flex lg:w-4/5 mx-auto mb-2 flex-col lg:flex-row-reverse items-center justify-around gap-6">
                    <div className="lg:w-full w-11/12 lg:mr-40 mt-16 ml-6">
                        <img className='hue-rotate-0 w-full justify-center rounded-md shadow-gray-400 mb-6' src="https://img.freepik.com/free-vector/organic-flat-people-business-training_23-2148896824.jpg?w=740&t=st=1673904517~exp=1673905117~hmac=0c55fb2d4a5b1324d41bc752c767b2f92b970f1b81548a9c6c5394dfb74d088f" alt="" srcset="" />
                    </div>

                    <div className="w-full px-2 dark:text-black">
                        {
                            faq.map(qa => <FaqDetails
                                key={qa.id}
                                qa={qa}
                            ></FaqDetails>)
                        }
                    </div>
                </div>



            </div>
        </section>
    );


};

export default Faq;

