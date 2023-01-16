import React from 'react';
import Counter from '../Counter/Counter';
import Courses from '../Courses/Courses';
import OurCourses from './OurCourses/OurCourses';
import Banner from "./Banner/Banner"
import Instructor from './Instructor/Instructor';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Carousel from './Banner/Carousel';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Carousel></Carousel>
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