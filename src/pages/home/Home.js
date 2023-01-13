import React from 'react';
import Courses from '../Courses/Courses';
import OurCourses from './OurCourses/OurCourses';
import Banner from "./Banner/Banner"


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurCourses></OurCourses>
            <Courses></Courses>
        </div>
    );
};

export default Home;