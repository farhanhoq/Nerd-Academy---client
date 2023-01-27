import React, { useContext } from 'react';
import Banner from '../Home/Banner/Banner'
import Counter from '../Counter/Counter';
import OurCourses from './OurCourses/OurCourses';
import Instructor from './Instructor/Instructor';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Faq from '../../Faq/Faq';
import { AuthContext } from '../../Context/AuthProvider';
import Blog from '../Blog/Blog';

const Home = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <Banner></Banner>
            <About></About>
            <OurCourses></OurCourses>
            <Counter></Counter>
            <Faq></Faq>
            <Blog></Blog>
            {
                user?.uid ?
                    <Contact></Contact>
                    :
                    <>
                    </>
            }
            {
                user?.uid ?
                    <>

                    </>
                    :
                    <Instructor></Instructor>

            }

        </div>
    );
};

export default Home;