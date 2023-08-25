import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
// import DarkLightMood from "../DarkTheme/DarkLightMood";
import { Tooltip } from "@mui/material";
import { FaThLarge } from "react-icons/fa";
import logo from "../../assets/slider-image/logo.png"



const Navbar = () => {
  // const [role,setRole] = useState({})
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation()
  const pathName = location.pathname
  console.log(location)
  const [colorChange, setColorchange] = useState(true);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(false);
    } else {
      setColorchange(true);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  // fixed  mt-5 pt-2 mx-auto pr-40 pl-56 w-full z-20 -top-5
  return (
    <nav className={pathName == "/" && colorChange? "fixed bg-transparent  mt-5 pt-2 mx-auto pr-40 pl-48 w-full z-20 -top-5": "fixed bg-slate-900  mt-5 pt-2 mx-auto pr-40 pl-44 w-full z-20 -top-5"}>
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" className="flex items-center">
        <img src={logo} className="h-16 mr-3 hover:scale-125 transition duration-200 cursor-pointer" alt="Flowbite Logo" />
      </a>
      <div className="flex md:order-2">
      { user ?
      <div className="flex items-center mt-2 gap-x-10">
         <li className="list-none transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:mx-1 pb-2 [&.active]:text-black/90 [&.active]:text-neutral-200 text-white [&.active]:border-b-2 [&.active]:border-[#F99F24] hover:border-b-[3px] hover:border-[#F99F24]">
        <Link className="flex items-center justify-center gap-2" to="/dashboard"><FaThLarge/> Dashboard</Link>
        </li>
           <Tooltip title={user.displayName}>
       <li className="list-none" ><img className=" rounded-full h-9 " src={user.photoURL} alt="" /></li></Tooltip>
       <button
          onClick={handleLogOut}
          type="button"
          className="text-white font-[700] text-xl h-10 w-28 bg-[#F99F24] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 pb-1 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Log Out
        </button></div>: <Link to="/login"><button
          type="button"
          className="text-white font-[700] text-xl h-10 w-24 pb-1 bg-[#F99F24] hover:bg-blue-800   text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button></Link>}
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-lg text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul className="flex  text-white flex-col pl-4 pr-0 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-5 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <Link to="/">
          <li className=" pl-0 lg:my-0 " data-te-nav-item-ref>
            <a
              className="transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:mx-1 pb-2 [&.active]:text-black/90 [&.active]:text-neutral-200 [&.active]:border-b-2 [&.active]:border-[#F99F24] hover:border-b-[3px] hover:border-[#F99F24]"
              aria-current="page"
              href="#"
              data-te-nav-link-ref
            >
              Home
            </a>
          </li>
          </Link>
          <Link to="/instructors">
          <li className=" pl-3 lg:my-0 " data-te-nav-item-ref>
            <a
              className=" transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:mx-1 pb-2 [&.active]:text-black/90 [&.active]:text-neutral-200 [&.active]:border-b-2 [&.active]:border-[#F99F24] hover:border-b-[3px] hover:border-[#F99F24]"
              aria-current="page"
              href="#"
              data-te-nav-link-ref
            >
             Instructors
            </a>
          </li>
          </Link>
          <Link to="/classes">
          <li className=" pl-3 lg:my-0 " data-te-nav-item-ref>
            <a
              className=" transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:mx-1 pb-2 [&.active]:text-black/90 [&.active]:text-neutral-200 [&.active]:border-b-2 [&.active]:border-[#F99F24] hover:border-b-[3px] hover:border-[#F99F24]"
              aria-current="page"
              href="#"
              data-te-nav-link-ref
            >
              Classes
            </a>
          </li>
          </Link>
          <li className=" pl-3 lg:my-0 " data-te-nav-item-ref>
            <a
              className=" transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:mx-1 pb-2 [&.active]:text-black/90 [&.active]:text-neutral-200 [&.active]:border-b-2 [&.active]:border-[#F99F24] hover:border-b-[3px] hover:border-[#F99F24]"
              aria-current="page"
              href="#"
              data-te-nav-link-ref
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
