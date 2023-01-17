import React from 'react';
import Counter from '../Counter/Counter';
import OurCourses from './OurCourses/OurCourses';
import Instructor from './Instructor/Instructor';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Faq from '../../Faq/Faq';
import Banner from '../Home/Banner/Banner'
import Courses from '../Courses/Courses'


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Courses></Courses>
            <OurCourses></OurCourses>
            <Counter></Counter>
            <About></About>
            <Contact></Contact>
            <Faq></Faq>
            <Instructor></Instructor>

        </div>
    );
};

export default Home;