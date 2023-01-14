import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import Navbar from '../pages/Shared/Navbar';
import TopNav from "../pages/home/TopNav/TopNav"

const Main = () => {
    return (
        <div>
            <div>
                <TopNav></TopNav>
            </div>
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Main;