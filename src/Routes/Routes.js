import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
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
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Instructor/Dashboard";
import MyCourse from "../pages/Dashboard/Instructor/MyCourse";
import DasboardReview from "../pages/Dashboard/Instructor/DasboardReview";
import Order from "../pages/Dashboard/Instructor/Order";
import AdminDashboardLayout from "../Layout/AdminDashboardLayout/AdminDashboardLayout";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";
import User from "../pages/Dashboard/AdminDashboard/User";
import AllInstructor from "../pages/Dashboard/AdminDashboard/AllInstructor";
import Customer from "../pages/Dashboard/AdminDashboard/Customer";
import StudentDashboardLayout from '../Layout/StudentDashboardLayout/StudentDashboardLayout';
import StudentDashboard from "../pages/StudentDashboard/Student/StudentDashboard";
import StudentAnnouncement from '../pages/StudentDashboard/Student/StudentAnnouncement';
import MyCourses from "../pages/StudentDashboard/Student/MyCourses";
import StudentOrderHistory from "../pages/StudentDashboard/Student/StudentOrderHistory";
import StudentAssignment from "../pages/StudentDashboard/Student/StudentAssignment";
import Home from "../pages/Home/Home/Home";
import AddCourse from "../pages/Dashboard/Instructor/AddCourse";
import Courses from "../pages/Dashboard/AdminDashboard/Courses";
import MyProfile from "../pages/Dashboard/Instructor/MyProfile";
import MyProfileEdit from "../pages/Dashboard/Instructor/MyProfileEdit";
import Pending from "../pages/Dashboard/Instructor/Pending";
import Publish from "../pages/Dashboard/Instructor/Publish";
import MyProfileEditStudent from "../pages/StudentDashboard/Student/MyProfileEditStudent";
import MyProfileStudent from "../pages/StudentDashboard/Student/MyProfileStudent";
import Wishlist from "../pages/Wishlist/Wishlist";
import MyReviews from "../pages/StudentDashboard/Student/MyReviews";
import Module from "../pages/StudentDashboard/Student/Module";
import Menu from "../pages/Dashboard/AdminDashboard/Menu";
import PrivacyPolicyAdd from "../pages/Dashboard/AdminDashboard/PrivacyPolicyAdd";
import PrivacyPolicy from "../pages/Dashboard/AdminDashboard/PrivacyPolicy";
import TermsConditionsAdd from "../pages/Dashboard/AdminDashboard/TermsConditions/TermsConditionsAdd";
import TermsConditions from "../pages/Dashboard/AdminDashboard/TermsConditions/TermsConditions";
import LicensingAdd from "../pages/Dashboard/AdminDashboard/Licensing/LicensingAdd";
import Licensing from "../pages/Dashboard/AdminDashboard/Licensing/Licensing";
import CookiePolicyAdd from "../pages/Dashboard/AdminDashboard/CookiePolicy/CookiePolicyAdd";
import CookiePolicy from "../pages/Dashboard/AdminDashboard/CookiePolicy/CookiePolicy";
import AdminBlogs from "../Layout/AdminBlogs/AdminBlogs";
import AllCourses from "../pages/Courses/AllCourses";
import TeacherPrerequisites from "../pages/TeacherPrerequisites/TeacherPrerequisites";
import Students from "../pages/Dashboard/Instructor/Students";
import AdminProfile from "../pages/Dashboard/AdminDashboard/AdminProfile";
import AdminProfileEdit from "../pages/Dashboard/AdminDashboard/AdminProfileEdit";
import PrivacyContent from "../pages/Dashboard/AdminDashboard/PrivacyContent";
import TermContent from "../pages/Dashboard/AdminDashboard/TermContent";
import LicenceContent from "../pages/Dashboard/AdminDashboard/LicenceContent";
import CookieContent from "../pages/Dashboard/AdminDashboard/CookieContent";
import EditPendingCourse from "../pages/Dashboard/Instructor/EditPendingCourse";
import InstructorDetails from "../pages/InstructorDetails/InstructorDetails";

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
                path: '/instructor-details/:id',
                element: <InstructorDetails></InstructorDetails>,
                loader: ({ params }) => fetch(`https://nerd-academy-server.vercel.app/users/${params.id}`)
            },
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
                path: '/all-courses',
                element: <AllCourses></AllCourses>
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
                path: '/wishlist',
                element: <PrivateRoutes><Wishlist></Wishlist></PrivateRoutes>
            }
            ,
            {
                path: '/construction',
                element: <UnderConstruction></UnderConstruction>
            }
            ,
            {
                path: '/blogs',
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
                path: '/module/:id',
                element: <Module></Module>,
                loader: ({ params }) => fetch(`https://nerd-academy-server.vercel.app/courses/${params.id}`)
            }
            , {
                path: '/privacy-policy',
                element: <PrivacyPolicy></PrivacyPolicy>
            },
            {
                path: '/privacy-add',
                element: <PrivacyPolicyAdd></PrivacyPolicyAdd>
            },
            {
                path: '/terms-add',
                element: <TermsConditionsAdd></TermsConditionsAdd>
            },
            {
                path: '/terms-conditions',
                element: <TermsConditions></TermsConditions>
            },
            {
                path: '/license-add',
                element: <LicensingAdd></LicensingAdd>
            },
            {
                path: '/license',
                element: <Licensing></Licensing>
            },
            {
                path: '/cookie-add',
                element: <CookiePolicyAdd></CookiePolicyAdd>
            },
            {
                path: '/cookie-policy',
                element: <CookiePolicy></CookiePolicy>
            },
            {
                path: '/teacher-prerequisites',
                element: <TeacherPrerequisites></TeacherPrerequisites>
            },
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
                path: '/dashboard/my-profile',
                element: <MyProfile></MyProfile>,
            },

            {
                path: '/dashboard/my-profile-edit',
                element: <MyProfileEdit></MyProfileEdit>,
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
                path: '/dashboard/pending',
                element: <Pending></Pending>,
            },
            {
                path: '/dashboard/edit-pending-course/:id',
                element: <EditPendingCourse></EditPendingCourse>,
                loader: ({ params }) => fetch(`https://nerd-academy-server.vercel.app/edit-pending-course/${params.id}`)
            },
            {
                path: '/dashboard/publish',
                element: <Publish></Publish>,
            },
            {
                path: '/dashboard/order',
                element: <Order></Order>,
            },
            {
                path: '/dashboard/students',
                element: <Students></Students>,
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
            {
                path: '/admin-dashboard/profile',
                element: <AdminProfile></AdminProfile>,
            },
            {
                path: '/admin-dashboard/profile-edit',
                element: <AdminProfileEdit></AdminProfileEdit>,
            },
            {
                path: '/admin-dashboard/menus',
                element: <Menu></Menu>,
            },
            {
                path: '/admin-dashboard/menus/privacy-edit',
                element: <PrivacyContent></PrivacyContent>,
            },
            {
                path: '/admin-dashboard/menus/term-edit',
                element: <TermContent></TermContent>,
            },
            {
                path: '/admin-dashboard/menus/licence-edit',
                element: <LicenceContent></LicenceContent>,
            },
            {
                path: '/admin-dashboard/menus/cookie-edit',
                element: <CookieContent></CookieContent>,
            },

            {
                path: '/admin-dashboard/blogs',
                element: <AdminBlogs></AdminBlogs>,
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
                path: '/student-dashboard/student-courses',
                element: <MyCourses></MyCourses>,
            },
            {
                path: '/student-dashboard/my-reviews',
                element: <MyReviews></MyReviews>,
            },
            {
                path: '/student-dashboard/student-order',
                element: <StudentOrderHistory></StudentOrderHistory>
            },
            {
                path: '/student-dashboard/student-assignment',
                element: <StudentAssignment></StudentAssignment>,
            },
            {
                path: '/student-dashboard/my-profile',
                element: <MyProfileStudent></MyProfileStudent>,
            },

            {
                path: '/student-dashboard/my-profile-edit',
                element: <MyProfileEditStudent></MyProfileEditStudent>,
            },
        ]
    },
])