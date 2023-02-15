import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { HiChevronDoubleRight } from "react-icons/hi";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import useRole from "../../Hooks/useRole";
import "./Navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const { user, logOut } = useContext(AuthContext);
  const [isRole] = useRole(user?.email)
  const [theme, setTheme] = useState("light");
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();

  // console.log(user)

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

  const {
    data: coursesData = [],


  } = useQuery({
    queryKey: ["coursesData"],
    queryFn: () =>
      fetch("https://nerd-academy-server.vercel.app/courses").then((res) =>
        res.json()
      ),
  });

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
          <a href="/" className="flex justify-between items-center"><span>Web Development</span><HiChevronDoubleRight /></a>
          <ul className="dropdown-content menu bg-base-100 w-full pl-0 " >
            <Link to='/details/63c8b8924cad87fef2c00434'><li><a>React</a></li></Link>
            <Link to='/details/63c8b8924cad87fef2c00435'><li><a>Java Script</a></li></Link>
          </ul>
        </li>
      </span>

      <span className="dropdown dropdown-right dropdown-hover">
        <li>
          <a href="/" className="flex justify-between items-center"><span>Programming</span><HiChevronDoubleRight /></a>
          <ul className="dropdown-content menu bg-base-100 w-full pl-0 " >
            <Link to='/details/63c8b8924cad87fef2c00437'><li><a>JAVA Programming</a></li></Link>
            <Link to='/details/63e531492ddfa35f8cb8fe85'><li><a>C Programming</a></li></Link>
          </ul>
        </li>
      </span>

      <span className="dropdown dropdown-right dropdown-hover">
        <li className="" >
          <a href="/" className="flex justify-between items-center"><span>Computer Science</span><HiChevronDoubleRight /></a>
          <ul className="dropdown-content menu bg-base-100 w-full pl-0 " >
            <Link to='/details/63e52fce2ddfa35f8cb8fe84'><li><a>Python Programming</a></li></Link>
          </ul>
        </li>
      </span>

      <span className="dropdown dropdown-right dropdown-hover">
        <li>
          <a href="/" className="flex justify-between items-center"><span>Artificial Intelligence</span><HiChevronDoubleRight /></a>
          <ul className="dropdown-content menu bg-base-100 w-full pl-0 " >
            <Link to='/details/63c8b8924cad87fef2c00438'><li><a>Artificial Intelligence</a></li></Link>
            <Link to='/details/63c8b8924cad87fef2c00439'><li><a>Machine Learning</a></li></Link>
          </ul>
        </li>
      </span>

      <span className="dropdown dropdown-right dropdown-hover">
        <li>
          <a href="/" className="flex justify-between items-center"><span>Mobile App Development</span><HiChevronDoubleRight /></a>
          <ul className="dropdown-content menu bg-base-100 w-full pl-0 " >
            <Link to='/details/63c8b8924cad87fef2c0043a'><li><a>Swift</a></li></Link>
            <Link to='/details/63e327d29a6a2de3bd454da8'><li><a>Socket IO</a></li></Link>
          </ul>
        </li>
      </span>

    </>
  );

  const handleFilter = (e) => {
    const searchedWord = e.target.value;
    const newFilter = coursesData.filter((value) => {
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
          ? "navbar active flex justify-between w-full mx-auto fixed z-10 px-16"
          : "navbar flex justify-between w-full mx-auto fixed z-10 px-16"
      }
    >
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
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
              d="M4 6h16M4 12h8m-8 6h16"/>
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          {menuItems}
        </ul>
      </div>

      <div className="hidden lg:block w-[17%]">
        {/* <img src={nerd} alt="" /> */}
        <div className="w-[210px]">
          <Link
            to="/"
            className="font-bold text-2xl navbar-logo"
            style={{ color: getColor("/") }}>
            {" "}
            Nerd
            <span> Academy</span>
          </Link>
        </div>
      </div>

      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal">
          <li>
            <span className="rounded item" style={{ color: getColor("/") }}>
              Categories
            </span>
            <ul className="bg-base-100 rounded">{menuItems}</ul>
          </li>

          <li>
            <Link to="/blogs">
              <span className="rounded item" style={{ color: getColor("/") }}>
                Blogs
              </span>
            </Link>
          </li>

        </ul>
      </div>

      <div className="hidden lg:block w-[45%] ">
        <ul className="menu menu-horizontal w-full">
          <li tabIndex={0} className="w-full">
            <a className="bg-transparent w-full">
            <div className="flex absolute inset-y-0 left-4 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
              <input
                type="text"
                placeholder="Search courses here"
                className="input input-bordered input-primary rounded-lg w-full px-10"
                onChange={handleFilter}
              />
            </a>
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
        <div className="text-2xl hover:text-primary cursor-pointer mx-5">
          <Link to="/cart" className="item" style={{ color: getColor("/") }}>
            <FaShoppingCart />
          </Link>
        </div>

        <div>
          <div className="switch-checkbox">
            <label className="switch">
              <input
                type="checkbox"
                onChange={() => handleThemeSwitch(!darkMode)} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        {
          user?.uid ?
            <>
              <div className="dropdown dropdown-end">

                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full ring ring-black ring-offset-base-100 ">
                    <img src={user.photoURL} alt="" />
                  </div>
                </label>

                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-32">

                  {
                    isRole === "student" &&
                    <li><Link to="student-dashboard">Dashboard</Link></li>
                  }
                  {
                    isRole === "teacher" &&
                    <li><Link to="dashboard">Dashboard</Link></li>
                  }
                  {
                    isRole === "admin" &&
                    <li><Link to="admin-dashboard">Dashboard</Link></li>
                  }
                  <li><Link to='/wishlist'>Wishlist</Link></li>
                  <li><Link to='/' onClick={handleLogOut}>Log Out</Link></li>
                </ul>

              </div>
            </>
            :
            <>
              <Link to="/login" className="btn text-white hover:text-white list">Login</Link>
              <Link to="/register" className="btn text-white hover:btn-primary hover:text-white list">Register</Link>
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
