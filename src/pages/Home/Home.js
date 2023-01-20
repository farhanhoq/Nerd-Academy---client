<<<<<<< HEAD
import React, { useContext } from 'react';
=======
import React from 'react';
>>>>>>> 3e39ac6d23af99dfcd42ce9bf76eff906a1fc5e2
import Banner from '../Home/Banner/Banner'
import Counter from '../Counter/Counter';
import OurCourses from './OurCourses/OurCourses';
import Instructor from './Instructor/Instructor';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Faq from '../../Faq/Faq';
import { AuthContext } from '../../Context/AuthProvider';


const Home = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <Banner></Banner>
            <OurCourses></OurCourses>
            <Counter></Counter>
            <About></About>
            {
                user?.uid ?
                    <Contact></Contact>
                    :
                    <>
                    </>
            }

            <Faq></Faq>
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