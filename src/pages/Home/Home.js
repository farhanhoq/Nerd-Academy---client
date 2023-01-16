import React from 'react';
import Counter from '../Counter/Counter';
import Courses from '../Courses/Courses';
import OurCourses from './OurCourses/OurCourses';
import Banner from "./Banner/Banner"
import Instructor from './Instructor/Instructor';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Faq from '../../Faq/Faq';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <OurCourses></OurCourses>
            <Counter></Counter>
            <Contact></Contact>
            <Faq></Faq>
            <Instructor></Instructor>
        </div>
    );
};

export default Home;