import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import "./Navbar.css";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const { user, logOut } = useContext(AuthContext);
  const [color, changeColor] = useState("#111");

  const navigate = useNavigate();
  const location = useLocation();


  const {
    data: coursesData = [],
    isLoading,
    refetch,
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
  const menuItems = (
    <>
      <li>
        <a href="#">Web Development</a>
      </li>
      <li>
        <a href="#">Programming</a>
      </li>
      <li>
        <a href="#">Computer Science</a>
      </li>
      <li>
        <a href="#">Artificial Intelligence</a>
      </li>
      <li>
        <a href="#">Mobile App Development</a>
      </li>
      {/* <li>
        <a href="/details">Courses Details</a>
      </li>
      <Link to="/construction">
        <li>
          <a href="/#news">Blog</a>
        </li>
      </Link>
      <li>
        <a href="/#contact">Contact</a>
      </li>
      <li className="block lg:hidden">
        <a href="/login">Login</a>
      </li>
      <li className="block lg:hidden">
        <a href="/register">Register</a>
      </li> */}
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

      <div class="hidden lg:block w-[30%]">
        {/* <img src={nerd} alt="" /> */}
        <div className="w-[210px]">
          <Link to="/" className="font-bold text-2xl navbar-logo">
            {" "}
            Nerd
            <span className=""> Academy</span>
          </Link>
        </div>
      </div>

      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal">
          <li>
            <span className="rounded item">Categories</span>
            <ul className="bg-base-100 p-2 rounded">{menuItems}</ul>
          </li>
          <li>
            <a href="/#courses" className="item">
              Courses
            </a>
          </li>
        </ul>
      </div>

      <div class="hidden lg:block w-[30%]">
        <input
          type="text"
          placeholder="Search courses here"
          className="input input-bordered input-primary rounded-full w-full"
          onChange={handleFilter}
        />
        {filteredData.length !== 0 && (
          <div className="dataResult mt-[5px] w-11/12 mx-auto rounded-md bg-white border z-20 border-primary">
            {filteredData?.slice(0, 5).map((value, key) => {
              return (
                <Link
                  key={key}
                  className="w-full h-[50px] flex items-center pl-4 hover:bg-primary hover:text-white"
                  to={`/details/${value?._id}`}
                >
                  <p>{value?.title}</p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
      <div className="text-3xl hover:text-primary cursor-pointer mx-5">
        <Link to="/cart" className="item">
          <FaOpencart />
        </Link>
      </div>

      <div>
        {user?.uid ? (
          <Link
            onClick={handleLogOut}
            className="btn border-primary hover:border-primary hover:text-white bg-white hover:bg-primary text-black 
            rounded mr-1 hidden md:block pt-4"
          >
            Sign Out
          </Link>
        ) : (
          <>
            <Link
              to="/login"
              className="btn border-primary hover:border-primary hover:text-white bg-white hover:bg-primary text-black 
            rounded mr-1 hidden md:block pt-4"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn border-primary bg-primary text-white text-center rounded hidden md:block pt-4"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
      
    </nav>
  );
};

export default Navbar;
