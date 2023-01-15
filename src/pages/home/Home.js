import React from 'react';
import Counter from '../Counter/Counter';
import Courses from '../Courses/Courses';
import OurCourses from './OurCourses/OurCourses';
import Banner from "./Banner/Banner"
import Instructor from './Instructor/Instructor';
import Contact from '../Contact/Contact';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurCourses></OurCourses>
            <Courses></Courses>
            <Counter></Counter>
            <Contact></Contact>
            <Instructor></Instructor>
        </div>
    );
};

export default Home;