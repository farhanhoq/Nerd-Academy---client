import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
  const [darkMode, setDarkMode] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
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
      <li>
        <a href="/">Web Development</a>
      </li>
      <li>
        <a href="/">Programming</a>
      </li>
      <li>
        <a href="/">Computer Science</a>
      </li>
      <li>
        <a href="/">Artificial Intelligence</a>
      </li>
      <li>
        <a href="/">Mobile App Development</a>
      </li>
      <li>
        <a href="/dashboard"> Instructo Dashboard</a>
      </li>
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
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
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
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          {menuItems}
        </ul>
      </div>

      <div class="hidden lg:block w-[17%]">
        {/* <img src={nerd} alt="" /> */}
        <div className="w-[210px]">
          <Link
            to="/"
            className="font-bold text-2xl navbar-logo"
            style={{ color: getColor("/") }}
          >
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
            <ul className="bg-base-100 p-2 rounded">{menuItems}</ul>
          </li>
        </ul>
      </div>

      <div class="hidden lg:block w-[45%] ">
        <ul className="menu menu-horizontal w-full">
          <li tabIndex={0} className="w-full">
            <a className="bg-transparent w-full" href="/">
              <input
                type="text"
                placeholder="Search courses here"
                className="input input-bordered input-primary rounded-full w-full"
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
      <div className="text-3xl hover:text-primary cursor-pointer mx-5">
        <Link to="/cart" className="item" style={{ color: getColor("/") }}>
          <FaShoppingCart />
        </Link>
      </div>

      <div className="gap-6">
        {user?.uid ? (
          <Link
            onClick={handleLogOut}
            style={{ color: getColor("/") }}
            className="hover:text-white custom-border transition duration-300 text-black hidden md:block
             border-transparent dark:hover:text-gray-200 hover:border-cyan-50 mx-1.5 item">
            Sign Out
          </Link>
        ) : (
          <>
            <Link
              to="/login"
              style={{ color: getColor("/") }}
              className="hover:text-white custom-border transition duration-300 text-black hidden md:block
              border-transparent dark:hover:text-gray-200 hover:border-cyan-50 mx-1.5 item"
            >
              Login
            </Link>
            <Link
              to="/register"
              style={{ color: getColor("/") }}
              className="hover:text-white custom-border transition duration-300 text-black hidden md:block
              border-transparent dark:hover:text-gray-200 hover:border-cyan-50 mx-1.5 item"
            >
              Register
            </Link>
          </>
        )}
      </div>
      {/* <>
        <button onClick={handleThemeSwitch}>
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </> */}

      {/* Code by rubayed */}
      <div>
        <div className="switch-checkbox">
          <label className="switch">
            <input
              type="checkbox"
              onClick={handleThemeSwitch}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      {/* ========================= */}

    </nav>
  );
};

export default Navbar;
