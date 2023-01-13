import React from 'react';
import Courses from '../Courses/Courses';
import Banner from './Banner/Banner';
import OurCourses from './OurCourses/OurCourses';
import TopNav from './TopNav/TopNav';

const Home = () => {
    return (
        <div>
            <TopNav></TopNav>
            <Banner></Banner>
            <OurCourses></OurCourses>
            <Courses></Courses>
        </div>
    );
};

export default Home;