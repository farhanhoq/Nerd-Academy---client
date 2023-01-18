import React from 'react';
import Banner from '../home/Banner/Banner'
import Counter from '../Counter/Counter';
import OurCourses from './OurCourses/OurCourses';
import Instructor from './Instructor/Instructor';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Faq from '../../Faq/Faq';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
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