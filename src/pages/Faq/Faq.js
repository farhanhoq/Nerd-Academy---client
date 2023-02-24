import React, { useEffect, useState } from 'react';
import FaqDetails from './FaqDetails';
import FaqImg from "../../Assets/faq.svg"

const Faq = () => {
    const [faq, setFaq] = useState([]);

    useEffect(() => {
        fetch('https://nerd-academy-server.vercel.app/faq')
            .then(res => res.json())
            .then(data => setFaq(data))
    }, [])

    return (
        <section className="py-16 my-16 dark:text-white">
            <div className="container px-5 mt-16 mx-auto">
                <div className="mt-10">
                    <h1 className="sm:text-3xl text-2xl font-semibold text-center text-gray-900 dark:text-white">
                        Frequently Asked Question
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mt-8 text-center">
                        The most common questions about how our business works and what
                        can do for you.
                    </p>
                </div>

                <div className="flex lg:w-4/5 mx-auto mb-2 flex-col lg:flex-row-reverse items-center justify-around gap-6">
                    <div className="lg:w-full w-11/12 lg:mr-40 mt-16 ml-6">
                        <img className='hue-rotate-0 w-full justify-center rounded-md shadow-gray-400 mb-6' src={FaqImg} alt="" srcset="" />
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

