import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Contact from "../pages/Contact/Contact";
import CourseDetails from "../pages/Courses/CourseDetails";
import Review from "../pages/Courses/Review";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UnderConstruction from "../pages/UnderConstruction/UnderConstruction";
import Blog from "../pages/Blog/Blog";
import BlogDetails from "../pages/Blog/BlogDetails";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Settings from "../pages/Dashboard/Instructor/Settings";
import MyCourse from "../pages/Dashboard/Instructor/MyCourse";
import DasboardReview from "../pages/Dashboard/Instructor/DasboardReview";
import Order from "../pages/Dashboard/Instructor/Order";
import AdminDashboardLayout from "../Layout/AdminDashboardLayout";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";
import User from "../pages/Dashboard/AdminDashboard/User";
import AllInstructor from "../pages/Dashboard/AdminDashboard/AllInstructor";
import Customer from "../pages/Dashboard/AdminDashboard/Customer";
import StudentDashboardLayout from '../Layout/StudentDashboardLayout';
import StudentDashboard from "../pages/StudentDashboard/StudentDashboard";
import StudentAnnouncement from '../pages/StudentDashboard/Student/StudentAnnouncement';
import StudentSettings from '../pages/StudentDashboard/Student/StudentSettings';
import StudentProfile from "../pages/StudentDashboard/Student/StudentProfile";
import MyCourses from "../pages/StudentDashboard/Student/MyCourses";
import StudentOrderHistory from "../pages/StudentDashboard/Student/StudentOrderHistory";
import StudentAssignment from "../pages/StudentDashboard/Student/StudentAssignment";
import Home from "../pages/Home/Home/Home";
import AddCourse from "../pages/Dashboard/Instructor/AddCourse";
import Profile from "../pages/Dashboard/Instructor/Profile";
import Courses from "../pages/Dashboard/AdminDashboard/Courses";
import MyProfile from "../pages/Dashboard/Instructor/MyProfile";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            }
            ,
            {
                path: '/details/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://nerd-academy-server.vercel.app/courses/${params.id}`)
            }
            ,
            {
                path: '/Review',
                element: <Review></Review>
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
                element: <PrivateRoutes><Cart></Cart></PrivateRoutes>
            }
            ,
            {
                path: '/checkout',
                element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>
            }
            ,
            {
                path: '/construction',
                element: <UnderConstruction></UnderConstruction>
            }
            ,
            {
                path: '/blog',
                element: <Blog></Blog>
            }
            ,
            {
                path: '/blog/:id',
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`https://nerd-academy-server.vercel.app/blog/${params.id}`)
            }
            ,
            {
                path: '*',
                element: <Error></Error>
            }

        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
            },
            {
                path: '/dashboard/profile',
                element: <Profile></Profile>,
            },
            {
                path: '/dashboard/settings',
                element: <Settings></Settings>,
            },
            {
                path: '/dashboard/my-profile',
                element: <MyProfile></MyProfile>,
            },

            {
                path: '/dashboard/myCourse',
                element: <MyCourse></MyCourse>,
            },
            {
                path: '/dashboard/add-course',
                element: <AddCourse></AddCourse>,
            },
            {
                path: '/dashboard/DasboardReview',
                element: <DasboardReview></DasboardReview>,
            },
            {
                path: '/dashboard/order',
                element: <Order></Order>,
            },

        ]
    },
    {
        path: '/admin-dashboard',
        element: <PrivateRoutes><AdminDashboardLayout></AdminDashboardLayout></PrivateRoutes>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/admin-dashboard',
                element: <AdminDashboard></AdminDashboard>,
            },

            {
                path: '/admin-dashboard/users',
                element: <User></User>,
            },
            {
                path: '/admin-dashboard/all-instructor',
                element: <AllInstructor></AllInstructor>,
            },
            {
                path: '/admin-dashboard/customer',
                element: <Customer></Customer>,
            },
            {
                path: '/admin-dashboard/courses',
                element: <Courses></Courses>,
            },
        ]
    },
    {
        path: '/student-dashboard',
        element: <StudentDashboardLayout></StudentDashboardLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/student-dashboard',
                element: <StudentDashboard></StudentDashboard>,
            },
            {
                path: '/student-dashboard/student-announcement',
                element: <StudentAnnouncement></StudentAnnouncement>
            },
            {
                path: '/student-dashboard/student-settings',
                element: <StudentSettings></StudentSettings>,
            },
            {
                path: '/student-dashboard/student-profile',
                element: <StudentProfile></StudentProfile>,
            },
            {
                path: '/student-dashboard/student-courses',
                element: <MyCourses></MyCourses>,
            },
            {
                path: '/student-dashboard/student-order',
                element: <StudentOrderHistory></StudentOrderHistory>
            },
            {
                path: '/student-dashboard/student-assignment',
                element: <StudentAssignment></StudentAssignment>,
            },
        ]
    },
])