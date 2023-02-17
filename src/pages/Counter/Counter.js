import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faPersonChalkboard, faGraduationCap, faBook } from '@fortawesome/free-solid-svg-icons'

const Counter = () => {
    const [users, setUsers] = useState([]);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://nerd-academy-server.vercel.app/all-users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, []);

    useEffect(() => {
        fetch('https://nerd-academy-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => {
                setCourses(data)
            })
    }, []);

    const instructors = users.filter((user) => user.role === "teacher")
    const learners = users.filter((user) => user.role === "student")

    return (
        <div className="p-1 bg-gradient-to-r from-[#7b35fd] to-[#ad35e9]">
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 my-20 w-12/12 mx-24'>
                <div className="w-full max-w-sm rounded-md shadow-md border py-6">
                        <div className="flex flex-col items-center p-6 text-white">
                            <FontAwesomeIcon icon={ faUsers} className="text-5xl mb-4"/>
                            <h5 className="dark:text-gray-400 text-3xl font-semibold">{users.length}</h5>
                            <span className="mb-1 text-md font-bold dark:text-white capitalize">USERS</span>
                        </div>
                </div>
                <div className="w-full max-w-sm rounded-md shadow-md border py-6">
                    <div className="flex flex-col items-center p-6 text-white">
                            <FontAwesomeIcon icon={ faPersonChalkboard} className="text-5xl mb-4"/>
                            <h5 className="dark:text-gray-400 text-3xl font-semibold">{instructors.length}</h5>
                            <span className="mb-1 text-md font-bold dark:text-white capitalize">INSTRUCTORS</span>
                        </div>
                </div>
                <div className="w-full max-w-sm rounded-md shadow-md border py-6">
                        <div className="flex flex-col items-center p-6 text-white">
                            <FontAwesomeIcon icon={ faGraduationCap} className="text-5xl mb-4"/>
                            <h5 className="dark:text-gray-400 text-3xl font-semibold">{learners.length}</h5>
                            <span className="mb-1 text-md font-bold dark:text-white capitalize">LEARNERS</span>
                        </div>
                </div>
                <div className="w-full max-w-sm rounded-md shadow-md border py-6">
                        <div className="flex flex-col items-center p-6 text-white">
                            <FontAwesomeIcon icon={ faBook} className="text-5xl mb-4"/>
                            <h5 className="dark:text-gray-400 text-3xl font-semibold">{courses.length}</h5>
                            <span className="mb-1 text-md font-bold dark:text-white capitalize">COURSES</span>
                        </div>
                </div>
            </div>
        </div>



    );
};

export default Counter;