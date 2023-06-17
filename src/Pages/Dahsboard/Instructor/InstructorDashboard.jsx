import React from 'react';
import { FaCentos } from 'react-icons/fa';

const InstructorDashboard = () => {
    return (
        <div>
        <div className="h-[20vh] text-slate-50 bg-[#7BC4B2] flex justify-between">
           <h1 className="  font-semibold text-5xl p-10">Dashboard</h1>
           <div className="flex justify-center items-center mx-10 gap-x-5">
               <h1 className="flex items-center"><FaCentos></FaCentos>Settings</h1>
               <h1>Notifications</h1>
               <h1>Stats</h1>
           </div>
        </div>
       <div className="flex">
          <div className="p-10 text-white h-[92vh] w-1/4 bg-slate-600">
          <h1 className="mb-5">My selected class</h1>
          <h1>My enrolled class</h1>
          </div>
          <div className=" h-[92vh] w-3/4 ">
            <h2>Instructor</h2>
          </div>
       </div>
       </div>
    );
};

export default InstructorDashboard;