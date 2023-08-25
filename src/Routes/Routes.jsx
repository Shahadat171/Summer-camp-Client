import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Insructors from "../Pages/Instructors/Insructors";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Pages/Dahsboard/Dashboard/Dashboard";
import AdminDashboard from "../Pages/Dahsboard/Admin/AdminDashboard";
import InstructorDashboard from "../Pages/Dahsboard/Instructor/InstructorDashboard";
import Students from "../Pages/Dahsboard/Students/Students";
import ManageClass from "../Pages/Dahsboard/Admin/ManageClass";
import ManageUsers from "../Pages/Dahsboard/Admin/ManageUsers";
import AddClass from "../Pages/Dahsboard/Instructor/AddClass";
import MyClass from "../Pages/Dahsboard/Instructor/MyClass";
import SelectedClass from "../Pages/Dahsboard/Students/SelectedClass";
import EnrolledClass from "../Pages/Dahsboard/Students/EnrolledClass";
import Payment from "../Pages/Dahsboard/Students/Payment/Payment";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import History from "../Pages/Dahsboard/Students/History";
import AdminHome from "../Pages/Dahsboard/Students/Home/AdminHome";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/instructors",
        element: <Insructors></Insructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "manageClass",
        element: <ManageClass></ManageClass>
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>
      },
      {
        path: "addClass",
        element: <AddClass></AddClass>
      },
      {
        path: "myClass",
        element: <MyClass></MyClass>

      },
      {
        path: "",
        element: <AdminHome></AdminHome>
      },
      {
        path: "selectedClass",
        element: <SelectedClass></SelectedClass>
      },
      {
        path: "enrolledClass",
        element: <EnrolledClass></EnrolledClass>
      },
      {
        path: "history",
        element: <History></History>
      },
      {
        path: "payment/:id",
        element: <Payment></Payment>
      }
    ]
  },
  {
    path : "*",
    element : <ErrorPage></ErrorPage>
  }
]);
