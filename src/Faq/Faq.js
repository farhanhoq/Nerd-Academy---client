import React from 'react';

const Faq = () => {
    return (
        <div>
            {/* <section className="relative pt-24 pb-28 bg-blueGray-50">
                <img className="absolute bottom-0 left-1/2 transform -translate-x-1/2" src="" alt="" srcset="" />
                <div className="relative z-10 container px-4 mx-auto">
                    <div className="md:max-w-4xl mx-auto">
                        <p className="mb-7 text-sm text-indigo-600 text-center font-semibold uppercase tracking-px">Have any questions?</p>
                        <h2 className="mb-16 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">Frequently Asked Questions</h2>
                        <div className="mb-11 flex flex-wrap -m-1">
                            <div className="w-full p-1">
                                <a href="#">
                                    <div className="py-7 px-8 bg-white bg-opacity-60 border-2 border-indigo-600 rounded-2xl shadow-10xl">
                                        <div className="flex flex-wrap justify-between -m-2">
                                            <div className="flex-1 p-2">
                                                <h3 className="mb-4 text-lg font-semibold leading-normal">Do you provide any free plan?</h3>
                                                <p className="text-gray-600 font-medium">Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condi mentum vitae vel purus.</p>
                                            </div>
                                            <div className="w-auto p-2">
                                                <svg className="relative top-1" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.16732 12.5L10.0007 6.66667L15.834 12.5" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="w-full p-1">
                                <a href="#">
                                    <div className="py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-10xl">
                                        <div className="flex flex-wrap justify-between">
                                            <div className="flex-1 p-2">
                                                <h3 className="text-lg font-semibold leading-normal">How to claim your 25% discount offer?</h3>
                                            </div>
                                            <div className="w-auto p-2">
                                                <svg className="relative top-1" width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.25 6.75L9 12L3.75 6.75" stroke="#18181B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="w-full p-1">
                                <a href="#">
                                    <div className="py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-10xl">
                                        <div className="flex flex-wrap justify-between -m-2">
                                            <div className="flex-1 p-2">
                                                <h3 className="text-lg font-semibold leading-normal">What&rsquo;s your refund policy?</h3>
                                            </div>
                                            <div className="w-auto p-2">
                                                <svg className="relative top-1" width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.25 6.75L9 12L3.75 6.75" stroke="#18181B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="w-full p-1">
                                <a href="#">
                                    <div className="py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-10xl">
                                        <div className="flex flex-wrap justify-between -m-2">
                                            <div className="flex-1 p-2">
                                                <h3 className="text-lg font-semibold leading-normal">How to get support for the product?</h3>
                                            </div>
                                            <div className="w-auto p-2">
                                                <svg className="relative top-1" width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.25 6.75L9 12L3.75 6.75" stroke="#18181B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <p className="text-gray-600 text-center font-medium">
                            <span>Still have any questions?</span>
                            <a className="font-semibold text-indigo-600 hover:text-indigo-700" href="#">Contact us</a>
                        </p>
                    </div>
                </div>
            </section> */}

            <div>
                <section class="text-gray-700">
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

                        <div class="flex flex-col-2 lg:w-4/5 sm:mx-auto sm:mb-2 justify-between items-center">
                            <div class=" flex flex-col w-full mr-40">
                                <img className='h-auto w-12/12 justify-center' src="https://img.freepik.com/free-vector/questions-concept-illustration_114360-1523.jpg?w=740&t=st=1673848976~exp=1673849576~hmac=11485a24bd712cdbfca1070232f3de145196150934a2ede7450bede7229f9923" alt="" srcset="" />
                            </div>
                            <div class="w-full px-2 py-8">
                                <details class="mb-4 cursor-pointer">
                                    <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                        How Long is this site live?
                                    </summary>

                                    <p className="py-6 px-2 border-2 rounded-lg">
                                        Laboris qui labore cillum culpa in sunt quis sint veniam.
                                        Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                                        minim velit nostrud pariatur culpa magna in aute.
                                    </p>
                                </details>
                                <details class="mb-4 cursor-pointer">
                                    <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                                        Can I install/upload anything I want on there?
                                    </summary>

                                    <p className="py-6 px-2 border-2 rounded-lg">
                                        Laboris qui labore cillum culpa in sunt quis sint veniam.
                                        Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                                        minim velit nostrud pariatur culpa magna in aute.
                                    </p>
                                </details>
                                <details class="mb-4 cursor-pointer">
                                    <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                        How can I migrate to another site?
                                    </summary>

                                    <p className="py-6 px-2 border-2 rounded-lg">
                                        Laboris qui labore cillum culpa in sunt quis sint veniam.
                                        Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                                        minim velit nostrud pariatur culpa magna in aute.
                                    </p>
                                </details>
                                <details class="mb-4 cursor-pointer">
                                    <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                        How can I migrate to another site?
                                    </summary>

                                    <p className="py-6 px-2 border-2 rounded-lg">
                                        Laboris qui labore cillum culpa in sunt quis sint veniam.
                                        Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                                        minim velit nostrud pariatur culpa magna in aute.
                                    </p>
                                </details>
                                <details class="mb-4 cursor-pointer">
                                    <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                        How can I migrate to another site?
                                    </summary>

                                    <p className="py-6 px-2 border-2 rounded-lg">
                                        Laboris qui labore cillum culpa in sunt quis sint veniam.
                                        Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                                        minim velit nostrud pariatur culpa magna in aute.
                                    </p>
                                </details>

                            </div>


                        </div>

                    </div>
                </section>
            </div>

        </div>

    );
};

export default Faq;