import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import useCourseAPI from "../../Hooks/useCourseAPI";

const Counter = () => {
    const [users, setUsers] = useState([]);
    const [countOn, setCountOn] = useState(false);

    const { courses } = useCourseAPI();

    useEffect(() => {
        fetch("https://nerd-academy-server.vercel.app/all-users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            });
    }, []);


    const instructors = users.filter((user) => user.role === "teacher");
    const learners = users.filter((user) => user.role === "student");

    return (
        <div className="p-1 bg-gradient-to-r from-primary to-secondary">
            <div
                className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1
            gap-8 my-8 w-12/12 mx-24">
                <div className="w-full max-w-sm rounded-md flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center text-white dark:text-white">
                        <ScrollTrigger
                            onEnter={() => setCountOn(true)}
                            onExit={() => setCountOn(false)}>
                            <div>
                                <h1 className="dark:text-white text-[4rem] font-bold text-center">
                                    {countOn && (
                                        <CountUp
                                            start={0}
                                            end={users?.length}
                                            duration={1.3}
                                            delay={0}
                                        ></CountUp>
                                    )}
                                </h1>
                                <span className="mb-1 text-lg text-center block dark:text-white capitalize">
                                    users
                                </span>
                            </div>
                        </ScrollTrigger>
                    </div>
                </div>
                <div className="w-full max-w-sm rounded-md flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center text-white dark:text-white">
                        <ScrollTrigger
                            onEnter={() => setCountOn(true)}
                            onExit={() => setCountOn(false)}>
                            <div>
                                <h1 className="dark:text-white text-[4rem] font-bold text-center">
                                    {countOn && (
                                        <CountUp
                                            start={0}
                                            end={instructors.length}
                                            duration={1.3}
                                            delay={0}
                                        ></CountUp>
                                    )}
                                    +
                                </h1>
                                <span className="mb-1 text-lg text-center block dark:text-white capitalize">
                                    Instructors
                                </span>
                            </div>
                        </ScrollTrigger>
                    </div>
                </div>
                <div className="w-full max-w-sm rounded-md flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center text-white dark:text-white">
                        <ScrollTrigger
                            onEnter={() => setCountOn(true)}
                            onExit={() => setCountOn(false)}>
                            <div>
                                <h1 className="dark:text-white text-[4rem] font-bold text-center">
                                    {countOn && (
                                        <CountUp
                                            start={0}
                                            end={learners.length}
                                            duration={1.3}
                                            delay={0}
                                        ></CountUp>
                                    )}
                                </h1>
                                <span className="mb-1 text-lg text-center block dark:text-white capitalize">
                                    learners
                                </span>
                            </div>
                        </ScrollTrigger>
                    </div>
                </div>
                <div className="w-full max-w-sm rounded-md flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center text-white dark:text-white">
                        <ScrollTrigger
                            onEnter={() => setCountOn(true)}
                            onExit={() => setCountOn(false)}>
                            <div>
                                <h1 className="dark:text-white text-[4rem] font-bold text-center">
                                    {countOn && (
                                        <CountUp
                                            start={0}
                                            end={courses.length}
                                            duration={1.3}
                                            delay={0}></CountUp>
                                    )}
                                </h1>
                                <span className="mb-1 text-lg text-center block dark:text-white capitalize">
                                    courses
                                </span>
                            </div>
                        </ScrollTrigger>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
