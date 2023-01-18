import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";

import Contact from "../pages/Contact/Contact";
import CourseDetails from "../pages/Courses/CourseDetails";
import Courses from "../pages/Courses/Courses";
import SummaryReview from "../pages/Courses/SummaryRoute.js/SummaryReview";
import Home from "../pages/home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UnderConstruction from "../pages/UnderConstruction/UnderConstruction";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
            ,
            {
                path: '/details',
                element: <CourseDetails></CourseDetails>
            }
            ,
            {
                path: '/SummaryReview',
                element: <SummaryReview></SummaryReview>
            }
            ,
            {
                path: '/about',
                element: <About></About>
            }
            ,
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
            ,
            {
                path: '/cart',
                element: <Cart></Cart>
            }
            ,
            {
                path: '/checkout',
                element: <Checkout></Checkout>
            }
            ,
            {
                path: '/construction',
                element: <UnderConstruction></UnderConstruction>
            }
            
        ]
    }
])