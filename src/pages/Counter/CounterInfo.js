import React, { useEffect, useState } from 'react';
// import Counter from './Counter';
// import users from '../../Assets/users.png'
// import instructor from '../../Assets/instructor.png'
// import learner from '../../Assets/learner.png'
// import course from '../../Assets/course.png'
// import { useQuery } from '@tanstack/react-query';

const CounterInfo = () => {
    const [counter, setCounter] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => {
                setCounter(data)
                console.log(data);
            })
    }, []);

    return (

        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 my-24 w-11/12 mx-auto'>

        </div>

    );
};

export default CounterInfo;