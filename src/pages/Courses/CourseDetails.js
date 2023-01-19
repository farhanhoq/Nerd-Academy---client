import React, { useEffect, useState } from "react";
import DetailsPage from "./DetailsPage";
import New from "./New";
import SummaryReview from "./SummaryRoute.js/SummaryReview";

const CourseDetails = () => {
    const [overview, setOverview] = useState([]);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('overview.json')
            .then(res => res.json())
            .then(data => setOverview(data))
    }, [])


    useEffect(() => {
        fetch('coursedetails.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    console.log(services)

    // const [rotate, setRotate] = useState(false);
    // const [count, setCount] = useState(0);

    // const addCount = () => {
    //     setCount((prev) => prev + 1);
    // };

    // const minusCount = () => {
    //     if (count > 0) {
    //         setCount((prev) => prev - 1);
    //     }
    // };

    return (
        <div>
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
                <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
                    {/* <!-- Description Div --> */}

                    <div className="sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                        {
                            services?.map(service => <New key={service._id} service={service}
                            ></New>)
                        }
                    </div>

                    {/* <!-- Preview Images Div For larger Screen--> */}

                    <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">

                        <div className=" w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6 ml-6">
                            <div className="bg-gray-100 flex justify-center items-center py-4">
                                <img src="https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?w=740&t=st=1673953591~exp=1673954191~hmac=92581bef9d0fa8d091c1aa152b3a23689250c30a63544cf28487d86276e138c8" alt="Wooden chair - preview 1" />
                            </div>
                            <div className="bg-gray-100 flex justify-center items-center py-4">
                                <img src="https://img.freepik.com/free-photo/asian-businesswoman-sitting-desk-office-studying-graphs-large-computer-screen_1098-20500.jpg?t=st=1673953591~exp=1673954191~hmac=a8d36508295f290b1a069a572a9699a1d52e76339e3c6c07a1f10cf0bca68f9e" alt="Wooden chair - preview 2" />
                            </div>
                            <div className="bg-gray-100 flex justify-center items-center py-4">
                                <img src="https://img.freepik.com/premium-photo/ui-ux-concept_416743-17.jpg?w=740" alt="Wooden chair- preview 3" />
                            </div>
                        </div>


                        <div class="w-64 p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800 ml-16">
                            <p class="mb-4 text-xl font-medium text-gray-800 dark:text-gray-50">
                                Entreprise
                            </p>
                            <p class="text-3xl font-bold text-gray-900 dark:text-white">
                                $500
                                <span class="text-sm text-gray-300">
                                    / month
                                </span>
                            </p>
                            <p class="mt-4 text-xs text-gray-600 dark:text-gray-100">
                                For most businesses that want to optimize web queries.
                            </p>
                            <ul class="w-full mt-6 mb-6 text-sm text-gray-600 dark:text-gray-100">
                                <li class="mb-3 flex items-center ">
                                    <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Duration
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Lessons
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Quizs
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Language
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Maximum Students
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Skill Level
                                </li>
                                <li class="mb-3 flex items-center ">
                                    <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Certificate
                                </li>


                            </ul>
                            <button type="button" class="py-2 px-4  bg-cyan-600 hover:bg-cyan-700 border border-black text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Choose plan
                            </button>
                        </div>


                    </div>
                </div>


                <div className="flex  justify-center items-center w-full">
                    <div className="w-full sm:w-96 md:w-8/12 lg:w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-28 sm:gap-x-6 sm:gap-y-12 gap-y-12 sm:mt-14 mt-10">
                        {
                            overview.map(ov => <DetailsPage
                                key={ov.id}
                                ov={ov}
                            ></DetailsPage>)
                        }

                    </div>
                </div>
            </div>
            <SummaryReview></SummaryReview>
        </div>


    );
};

export default CourseDetails;
