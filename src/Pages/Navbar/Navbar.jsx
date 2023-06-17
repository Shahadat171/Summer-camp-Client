import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import DarkLightMood from "../DarkTheme/DarkLightMood";


const Navbar = () => {
  // const [role,setRole] = useState({})
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="navbar bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden"></label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to='/instructors'>Instructors</Link>
              </li>
              <li>
                <Link to="/classes">Classes</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-white font-serif">
            English Center
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-[15px] menu-horizontal px-1">
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to='/instructors'>Instructors</Link>
            </li>
            <li>
            <Link to="/classes">Classes</Link>
            </li>
          </ul>
        </div>
        <DarkLightMood></DarkLightMood>
        <div className="navbar-end">
         {
          user ? 
            <ul className="flex items-center gap-x-5">
           <li>
            <Link to="/dashboard">Dashboard</Link>
            </li>
           <li><img className=" rounded-full h-9 " src={user.photoURL} alt="" /></li>
           <li><Link onClick={handleLogOut} className="btn btn-primary">Log Out</Link></li>
           </ul>
            : 
         <Link className="btn btn-primary" to="/login">Login</Link>
         }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
