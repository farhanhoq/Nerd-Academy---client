import React from 'react';
import Banner from './Banner/Banner';
import OurCourses from './OurCourses/OurCourses';
import TopNav from './TopNav/TopNav';

const Home = () => {
    return (
        <div>
            <TopNav></TopNav>
            <Banner></Banner>
            <OurCourses></OurCourses>
        </div>
    );
};

export default Home;