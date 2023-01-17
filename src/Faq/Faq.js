import React, { useEffect, useState } from 'react';
import FaqDetails from './FaqDetails';
// import FaqDetails from './FaqDetails';

const Faq = () => {
    const [faq, setFaq] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFaq(data))
    }, [])

    return (

        <section class="bg-cyan-50">
            <div class="container px-5 py-24 mx-auto">
                <div class="text-center mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                        Frequently Asked Question
                    </h1>
                    <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        The most common questions about how our business works and what
                        can do for you.
                    </p>
                </div>

                <div class="flex lg:w-4/5 sm:mx-auto sm:mb-2 ">
                    <div class=" flex flex-col w-full mr-40">
                        <img className='hue-rotate-0 w-full justify-center rounded-md shadow-gray-400' src="https://img.freepik.com/free-vector/organic-flat-people-business-training_23-2148896824.jpg?w=740&t=st=1673904517~exp=1673905117~hmac=0c55fb2d4a5b1324d41bc752c767b2f92b970f1b81548a9c6c5394dfb74d088f" alt="" srcset="" />
                    </div>

                    <div class="w-full px-2 py-">
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

