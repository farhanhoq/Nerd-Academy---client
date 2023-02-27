import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { HiChevronDoubleRight } from "react-icons/hi";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import useRole from "../../Hooks/useRole";
import "./Navbar.css";
import useCourseAPI from "../../Hooks/useCourseAPI";
// import logo from "../../Assets/nerd.jpg"

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const { user, logOut } = useContext(AuthContext);
  const [isRole] = useRole(user?.email);
  const [theme, setTheme] = useState("light");
  // eslint-disable-next-line
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();

  const { courses } = useCourseAPI();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const ai = courses.filter((course) => course.category === "Artificial Intelligence")
  const programming = courses.filter((course) => course.category === "Programming")
  const webDevelopment = courses.filter((course) => course.category === "Web Development")
  const computerScience = courses.filter((course) => course.category === "Computer Science")
  const appDevelopment = courses.filter((course) => course.category === "App Development")

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Sign Out Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const changeBg = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  const getColor = (current) => {
    if (window.location.pathname === current) {
      return "#fff";
    } else {
      return "#111";
    }
  };

  const menuItems = (
    <>
      <span className="dropdown dropdown-right dropdown-hover">
        <li className="">
          <Link className="flex justify-between items-center">
            <span>Web Development</span>
            <HiChevronDoubleRight />
          </Link>
          {
            webDevelopment.length > 0 &&
            <ul className="dropdown-content menu bg-base-100 pl-0 pr-3 py-5 ">
              {
                webDevelopment?.map(item => <Link to={`/details/${item?._id}`} className="ml-4 my-2">
                  <li>{item?.title}</li>
                </Link>)
              }
            </ul>
          }

        </li>
      </span>

      <span className="dropdown dropdown-right dropdown-hover">
        <li>
          <Link className="flex justify-between items-center">
            <span>Programming</span>
            <HiChevronDoubleRight />
          </Link>
          {
            programming.length > 0 &&
            <ul className="dropdown-content menu bg-base-100  pl-0 pr-3 py-5 ">
              {
                programming?.map(item => <Link to={`/details/${item?._id}`} className="ml-4 my-2">
                  <li>{item?.title}</li>
                </Link>)
              }
            </ul>
          }

        </li>
      </span>

      <span className="dropdown dropdown-right dropdown-hover">
        <li className="">
          <Link className="flex justify-between items-center">
            <span>Computer Science</span>
            <HiChevronDoubleRight />
          </Link>
          {
            computerScience.length > 0 &&
            <ul className="dropdown-content menu bg-base-100  pl-0 pr-3 py-5 ">
              {
                computerScience?.map(item => <Link to={`/details/${item?._id}`} className="ml-4 my-2">
                  <li>{item?.title}</li>
                </Link>)
              }
            </ul>
          }

        </li>
      </span>

      <span className="dropdown dropdown-right dropdown-hover">
        <li>
          <Link className="flex justify-between items-center">
            <span>Artificial Intelligence</span>
            <HiChevronDoubleRight />
          </Link>
          {
            ai.length > 0 &&
            <ul className="dropdown-content menu bg-base-100  pl-0 pr-3 py-5 ">
              {
                ai?.map(item => <Link to={`/details/${item?._id}`} className="ml-4 my-2">
                  <li>{item?.title}</li>
                </Link>)
              }
            </ul>
          }

        </li>
      </span>

      <span className="dropdown dropdown-right dropdown-hover">
        <li>
          <Link className="flex justify-between items-center">
            <span>Mobile App Development</span>
            <HiChevronDoubleRight />
          </Link>
          {
            appDevelopment.length > 0 &&
            <ul className="dropdown-content menu bg-base-100 w-full pl-0 pr-3 py-5 ">
              {
                appDevelopment?.map(item => <Link to={`/details/${item?._id}`} className="ml-4 my-2">
                  <li>{item?.title}</li>
                </Link>)
              }
            </ul>
          }

        </li>
      </span>
    </>
  );

  const handleFilter = (e) => {
    const searchedWord = e.target.value;
    const newFilter = courses.filter((value) => {
      return value.title.toLowerCase().includes(searchedWord.toLowerCase());
    });

    if (searchedWord === "") {
      setFilteredData("");
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <nav
      className={
        navbar
          ? "navbar active flex justify-between w-full mx-auto fixed z-50 md:px-16"
          : "navbar flex justify-between w-full mx-auto fixed z-[999] md:px-16"
      }>
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden item" style={{ color: getColor("/") }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          {menuItems}
        </ul>
      </div>

      <div className="hidden lg:block w-[17%]">
        <div className="w-[210px]">
          <Link
            to="/"
            className="font-bold text-2xl navbar-logo"
            style={{ color: getColor("/") }}>
            {" "}
            Nerd
            <span> Academy</span>
          </Link>
         <Link to="/">
         {/* <img src="https://i.ibb.co/30WJNvR/nerd-logo-01.png" alt="" /> */}
         </Link>
        </div>
      </div>

      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal">
          <li>
            <span className="rounded item font-semibold dark:text-white" style={{ color: getColor("/") }}>
              Categories
            </span>
            <ul className="bg-base-100 rounded">{menuItems}</ul>
          </li>

          <li>
            <Link to="/roadmap">
              <span className="rounded item font-semibold" style={{ color: getColor("/") }}>
                Roadmap
              </span>
            </Link>
          </li>

          <li>
            <Link to="/blogs">
              <span className="rounded item font-semibold" style={{ color: getColor("/") }}>
                Blogs
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="hidden lg:block w-[45%] ">
        <ul className="menu menu-horizontal w-full">
          <li tabIndex={0} className="w-full">
            <Link className="bg-transparent w-full">
              <div className="flex absolute inset-y-0 left-4 items-center pl-3
             pointer-events-none item" style={{ color: getColor("/") }}>
                <FaSearch />
              </div>
              <input
                type="text"
                placeholder="Search courses here"
                className="input input-bordered rounded-lg w-full px-10 bg-transparent
                text-black search item" style={{ borderColor: getColor("/") }}
                onChange={handleFilter}
              />
            </Link>
            {filteredData.length !== 0 && (
              <ul className="dataResult w-11/12 mx-auto rounded-md bg-white border z-20 border-primary ml-5">
                {filteredData?.slice(0, 5).map((value, key) => {
                  return (
                    <Link
                      key={key}
                      className="w-full h-[50px] flex items-center pl-4 hover:bg-primary hover:text-white"
                      to={`/details/${value?._id}`}
                    >
                      <li>{value?.title}</li>
                    </Link>
                  );
                })}
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div>
        <div className="text-xl hover:text-primary cursor-pointer mx-5">
          <Link to="/cart" className="item" style={{ color: getColor("/") }}>
            <FaShoppingCart />
          </Link>
        </div>

        <div>
          <div className="switch-checkbox">
            <label className="switch">
              <input
                type="checkbox"
                onChange={() => handleThemeSwitch(!darkMode)}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        {user?.uid ?
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ring ring-white ring-offset-base-100 ">
                  <img src={user.photoURL} alt="" />
                </div>
              </label>

              <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content 
              bg-base-100 rounded-box w-32 dark:bg-accent">

                {
                  isRole === "student" &&
                  <li><Link to="student-dashboard" className="dark:text-white">Dashboard</Link></li>
                }
                {
                  isRole === "teacher" &&
                  <li><Link to="dashboard" className="dark:text-white">Dashboard</Link></li>
                }
                {
                  isRole === "admin" &&
                  <li><Link to="admin-dashboard" className="dark:text-white">Dashboard</Link></li>
                }
                <li><Link to='/wishlist' className="dark:text-white">Wishlist</Link></li>
                <li><Link to='/' onClick={handleLogOut} className="dark:text-white">Log Out</Link></li>
              </ul>

            </div>
          </>
          :
          <>
            <div>
              <Link to="/login" className="btn list item" style={{ color: getColor("/") }}>Login</Link>
            </div>
            <Link to="/register" className="btn hover:btn-primary
                list item" style={{ color: getColor("/") }}>Join</Link>
          </>
        }


        <div className="ml-2">
          {(location.pathname === "/admin-dashboard" ||
            location.pathname.startsWith("/admin-dashboard/")) && (
              <div className="drawer-content block lg:hidden">
                <label
                  htmlFor="admin-dashboard-drawer"
                  className="btn btn-primary drawer-button"
                >
                  <MdOutlineDashboardCustomize className="text-xl text-white" />
                </label>
              </div>
            )}
          {(location.pathname === "/student-dashboard" ||
            location.pathname.startsWith("/student-dashboard")) && (
              <div className="drawer-content block lg:hidden">
                <label
                  htmlFor="student-dashboard-drawer"
                  className="btn btn-primary drawer-button"
                >
                  <MdOutlineDashboardCustomize className="text-xl text-white" />
                </label>
              </div>
            )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
