import React from 'react';
import Courses from '../Courses/Courses'
import Counter from '../Counter/Counter';
import OurCourses from './OurCourses/OurCourses';
import Instructor from './Instructor/Instructor';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Faq from '../../Faq/Faq';
import Banner from '../Home/Banner/Banner'


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