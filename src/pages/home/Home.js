import React from 'react';
import Counter from '../Counter/Counter';
import Courses from '../Courses/Courses';
import OurCourses from './OurCourses/OurCourses';
import Banner from "./Banner/Banner"
import Instructor from './Instructor/Instructor';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <OurCourses></OurCourses>
            <Counter></Counter>
            <Instructor></Instructor>
        </div>
    );
};

export default Home;