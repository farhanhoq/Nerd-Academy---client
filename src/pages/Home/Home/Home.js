import React, { useContext } from 'react';
import Banner from '../Banner/Banner'
import Counter from '../../Counter/Counter';
import OurCourses from '../OurCourses/OurCourses';
import Instructor from '../Instructor/Instructor';
import Contact from '../../Contact/Contact';
import About from '../../About/About';
import Faq from '../../Faq/Faq';
import { AuthContext } from '../../../Context/AuthProvider';
import Loader from '../../../Loader/Loader';
import ImgSlider from '../../ImgSlider/ImgSlider';

const Home = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <Banner></Banner>
            <About></About>
            <ImgSlider/>
            <Counter></Counter>
            <OurCourses></OurCourses>
            <Faq></Faq>
            {/* {
                loading ?
                    <Loader></Loader>
                    :
                    <Blog></Blog>
            } */}
            {
                user?.uid ?
                    <>

                    </>
                    :
                    <Instructor></Instructor>

            }
            <Contact></Contact>

        </div>
    );
};

export default Home;