import React from 'react';
import Banner from '../home/Banner/Banner'
import Courses from '../Courses/Courses'
import Counter from '../Counter/Counter';
import OurCourses from './OurCourses/OurCourses';
import Instructor from './Instructor/Instructor';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Faq from '../../Faq/Faq';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Courses/>
            <About/>
            <OurCourses/>
            <Counter/>
            <Contact/>
            <Faq/>
            <Instructor/>
        </div>
    );
};

export default Home;