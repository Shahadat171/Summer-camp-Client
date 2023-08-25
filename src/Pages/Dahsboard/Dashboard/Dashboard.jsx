import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../../../Hook/UseAdmin";
import "./Dashboard.css"
import UseInstructor from "../../../Hook/UseInstructor";
import { FaBookOpen, FaClipboard } from "react-icons/fa6";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/slider-image/logo.png"


import {
  FaAddressCard,
  FaAngleDown,
  FaAngleUp,
  FaAngular,
  FaArtstation,
  FaBars,
  FaBook,
  FaBriefcase,
  FaCheck,
  FaCog,
  FaCompactDisc,
  FaDollarSign,
  FaExternalLinkAlt,
  FaGem,
  FaGlobe,
  FaLink,
  FaLock,
  FaMedrt,
  FaPodcast,
  FaQrcode,
  FaRebel,
  FaRegClone,
  FaShoppingCart,
  FaUndoAlt,
  FaVimeoSquare,
  FaWindowRestore,
  FaYarn,
} from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProviders";

const Dashboard = () => {
 
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = UseAdmin();
  // const isInstructor = true
  const [isInstructor] = UseInstructor()
  // console.log(isAdmin,isInstructor)
  return (
    // <div>
    //   <div className="h-52 bg-slate-500 flex items-center justify-center">
    //     <h2 className=" text-5xl text-slate-50 font-semibold p-12">Dashboard</h2>
    //     <h2 className=" text-5xl text-slate-50 font-semibold p-12">English Center</h2>
    //   </div>
    //   <div className="drawer lg:drawer-open">
    //     <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    //     <div className="drawer-content flex flex-col items-center justify-center">
    //       {/* Page content here */}
    //       <Outlet></Outlet>
    //       <label
    //         htmlFor="my-drawer-2"
    //         className="btn btn-primary drawer-button lg:hidden"
    //       >
    //         Open drawer
    //       </label>
    //     </div>
    //     <div className="drawer-side">
    //       <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
    //       <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
    //         {/* Sidebar content here */}
    //         {isAdmin ? (
    //           <>
    //             <li>
    //               <NavLink to="/dashboard/manageClass">Manage Class</NavLink>
    //             </li>
    //             <li>
    //               <NavLink to="/dashboard/manageUsers">Manage Users</NavLink>
    //             </li>
    //             <li>
    //               <NavLink to="/">Home</NavLink>
    //             </li>
    //             <li>
    //               <NavLink to="/classes">Classes</NavLink>
    //             </li>
    //             <li>
    //               <NavLink to="/instructors">Instrucors</NavLink>
    //             </li>
    //           </>
    //         ) :
    //          isInstructor ? (
    //           <>
    //             <li>
    //               <NavLink to="/dashboard/myClass">My Class</NavLink>
    //             </li>
    //             <li>
    //               <NavLink to="/dashboard/addClass">Add a Class</NavLink>
    //             </li>
    //             <li>
    //               <NavLink to="/">Home</NavLink>
    //               <li>
    //               <NavLink to="/classes">Classes</NavLink>
    //             </li>
    //             <li>
    //               <NavLink to="/instructors">Instrucors</NavLink>
    //             </li>
    //             </li>
    //           </>
    //         ) : (
    //           <>
    //             <li>
    //               <NavLink to="/dashboard/selectedClass">
    //                 Selected Class
    //               </NavLink>
    //             </li>
    //             <li>
    //               <NavLink to="/dashboard/enrolledClass">
    //                 Enrolled Class
    //               </NavLink>
    //             </li>
    //             <li>
    //               <NavLink to="/dashboard/history">
    //                 Payment history
    //               </NavLink>
    //             </li>
    //             <li>
    //               <NavLink to="/">Home</NavLink>
    //             </li>
    //             <li>
    //               <NavLink to="/classes">Classes</NavLink>
    //             </li>
    //             <li>
    //               <NavLink to="/instructors">Instrucors</NavLink>
    //             </li>
    //           </>
    //         )}
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <div>
    <div>
      <div className="h-20 bg-[#367599] fixed shadow-2xl flex w-full items-center justify-center gap-x-60">
        <FaBars className="h-8 text-white"></FaBars>
        <h2 className=" drop-shadow-sm flex items-center justify-center gap-3 text-2xl text-slate-50 font-semibold p-12">
         <FaBookOpen className="text-slate-200"/> English Center
        </h2>
        <FaCog className="h-12 w-8 text-white"></FaCog>
      </div>
      <div className="drawer lg:drawer-open relative divide-x-2 ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            className="drawer-overlay bg-slate-50"
          ></label>
          <ul className="menu p-4 w-80 h-[100vh] flex flex-col space-y-7 overflow-y-scroll bg-[#125E8A] text-white">
            {/* Sidebar content here */}

            <li className="ml-2 text-3xl font-semibold  -mt-2 justify-start">
            <a href="https://flowbite.com/" className="flex items-center">
        <img src={logo} className="h-14  hover:scale-125 transition duration-200 cursor-pointer" alt="Flowbite Logo" />
      </a>
            </li>
            <li className="">
              <div className="flex flex-row bg-gray-400">
                {/* <img className="w-4 h-4" src={dashboard} alt="" /> */}
                <FaQrcode></FaQrcode>
                <Link className=" w-full rounded-none m-0" to="/dashboard">
                  Dashboard
                </Link>
              </div>
            </li> 
            <li className="">
              <div className="flex flex-row hover:bg-gray-400">
                <FaDollarSign className="border rounded-full"></FaDollarSign>
                <Link className=" w-full rounded-none m-0" to="/dashboard/selectedClass">
                  Selected Class
                </Link>
              </div>
            </li>
            <li className="">
              <div className="flex flex-row hover:bg-gray-400">
                <FaArtstation></FaArtstation>
                <Link className=" w-full rounded-none m-0" to="/dashboard/enrolledClass">
                  Enrolled Class
                </Link>
              </div>
            </li>
            <li className="">
              <div className="flex flex-row hover:bg-gray-400">
                <FaAddressCard></FaAddressCard>
                <Link className=" w-full rounded-none m-0" to="/dashboard/history">
                  Payment History
                </Link>
              </div>
            </li>
            <li className="">
              <div className="flex flex-row hover:bg-gray-400">
                <FaBriefcase></FaBriefcase>
                <Link to="/" className=" w-full rounded-none m-0">
                  Home
                </Link>
              </div>
            </li>
            <li className="">
                <div className="flex flex-row hover:bg-gray-400">
                  <FaLock></FaLock>
                  <Link className=" w-full rounded-none m-0">
                    Security
                  </Link>
                </div>
              </li>
            <li className="">
              <div className="flex flex-row hover:bg-gray-400">
                <FaCog></FaCog>
                <Link className=" w-full rounded-none m-0">
                  Setting
                </Link>
              </div>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Dashboard;
