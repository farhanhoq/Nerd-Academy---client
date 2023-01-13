import React from 'react';
import Counter from '../Counter/Counter';
import Courses from '../Courses/Courses';
import OurCourses from './OurCourses/OurCourses';

const Home = () => {
    return (
        <div>
            <OurCourses></OurCourses>
            <Courses></Courses>
            <Counter></Counter>
        </div>
    );
};

export default Home;