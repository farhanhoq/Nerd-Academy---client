import React from 'react';
import Courses from '../Courses/Courses';
import OurCourses from './OurCourses/OurCourses';

const Home = () => {
    return (
        <div>
            <OurCourses></OurCourses>
            <Courses></Courses>
        </div>
    );
};

export default Home;