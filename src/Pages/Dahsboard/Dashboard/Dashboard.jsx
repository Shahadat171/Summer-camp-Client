import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../../../Hook/UseAdmin";
import "./Dashboard.css"
import UseInstructor from "../../../Hook/UseInstructor";

const Dashboard = () => {
  const [isAdmin] = UseAdmin();
  // const isInstructor = true
  const [isInstructor] = UseInstructor()
  // console.log(isAdmin,isInstructor)
  return (
    <div>
      <div className="h-52 bg-slate-500 flex items-center justify-center">
        <h2 className=" text-5xl text-slate-50 font-semibold p-12">Dashboard</h2>
        <h2 className=" text-5xl text-slate-50 font-semibold p-12">English Center</h2>
      </div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/manageClass">Manage Class</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageUsers">Manage Users</NavLink>
                </li>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/classes">Classes</NavLink>
                </li>
                <li>
                  <NavLink to="/instructors">Instrucors</NavLink>
                </li>
              </>
            ) :
             isInstructor ? (
              <>
                <li>
                  <NavLink to="/dashboard/myClass">My Class</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addClass">Add a Class</NavLink>
                </li>
                <li>
                  <NavLink to="/">Home</NavLink>
                  <li>
                  <NavLink to="/classes">Classes</NavLink>
                </li>
                <li>
                  <NavLink to="/instructors">Instrucors</NavLink>
                </li>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/selectedClass">
                    Selected Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/enrolledClass">
                    Enrolled Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    Payment history
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/classes">Classes</NavLink>
                </li>
                <li>
                  <NavLink to="/instructors">Instrucors</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
