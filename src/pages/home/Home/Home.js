import React, { useContext } from 'react';
import Banner from '../Banner/Banner'
import Counter from '../../Counter/Counter';
import OurCourses from '../OurCourses/OurCourses';
import Instructor from '../Instructor/Instructor';
import Contact from '../../Contact/Contact';
import About from '../../About/About';
import Faq from '../../Faq/Faq';
import { AuthContext } from '../../../Context/AuthProvider';
import Blog from '../../Blog/Blog';
import Loader from '../../../Loader/Loader';

const Home = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <Banner></Banner>
            <About></About>
            <OurCourses></OurCourses>
            <Counter></Counter>
            <Faq></Faq>
            {
                loading ?
                    <Loader></Loader>
                    :
                    <Blog></Blog>
            }
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