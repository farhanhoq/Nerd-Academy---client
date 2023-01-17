import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Checkout from "../pages/Checkout/Checkout";
import Contact from "../pages/Contact/Contact";
import CourseDetails from "../pages/Courses/CourseDetails";
import Courses from "../pages/Courses/Courses";
import Home from "../pages/home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

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
                path: '/courses',
                element: <Courses></Courses>
            }
            ,
            {
                path: '/details',
                element: <CourseDetails></CourseDetails>
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
                path: '/checkout',
                element: <Checkout></Checkout>
            }
        ]
    }
])