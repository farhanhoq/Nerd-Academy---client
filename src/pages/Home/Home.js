import React from 'react';
import Counter from '../Counter/Counter';
import Courses from '../Courses/Courses';
import OurCourses from './OurCourses/OurCourses';
import Banner from "./Banner/Banner"
import Instructor from './Instructor/Instructor';
import Contact from '../Contact/Contact';
import About from '../About/About';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurCourses></OurCourses>
            <Courses></Courses>
            <Counter></Counter>
            <About></About>
            <Contact></Contact>
            <Instructor></Instructor>
        </div>
    );
};

export default Home;