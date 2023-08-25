import { useEffect, useState } from "react";
import Class from "./Class";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("https://assignment-12-server-puce.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);
  return (
    // grid grid-cols-3 mt-10 gap-y-5
    <div className=" bg-slate-100">
      <div
        className="hero min-h-[80vh]"
        style={{
          backgroundImage:
            "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 10%),linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 50%),linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 40%),linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0) 10%),url(https://i.ibb.co/1zNKsV9/21-08-2023-02-14-04-REC.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md md:mt-28">
            <h1 className="mb-5 text-5xl font-bold text-white drop-shadow-xl">
              Feature Classes
            </h1>
            <p className="mb-5 text-xl font font-[400] tracking-wide text-white drop-shadow-lg">
              All the classes of our prominant as well as experienced
              instructors. They develped the resouces with extent perseverance.{" "}
            </p>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="grid bg-slate-100 md:grid-cols-3 grid-cols-1 py-32 max-w-7xl mx-auto gap-y-5 md:gap-y-10">
        {classes.map((EveryClass) => (
          <Class key={EveryClass._id} EveryClass={EveryClass}></Class>
        ))}
      </div>
    </div>
  );
};

export default Classes;
