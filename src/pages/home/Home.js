import React from 'react';
import Courses from '../Courses/Courses';
import OurCourses from './OurCourses/OurCourses';
import Banner from "./Banner/Banner"
import Instructor from './Instructor/Instructor';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurCourses></OurCourses>
            <Courses></Courses>
            <Instructor></Instructor>
        </div>
    );
};

export default Home;