import { useEffect, useState } from "react";
import Instructor from "./Instructor";
import english from "../../assets/slider-image/Engish/4.jpg";
// import english5 from "../../assets/english5.png"
import { FaGraduationCap } from "react-icons/fa6";

const Insructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("https://assignment-12-server-puce.vercel.app/instructor")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
  }, []);
  return (
    <section className="bg-[#F7F9FF] pb-10">
      <div className="h-[80vh] w-full flex flex-col items-center justify-center">
        <img
          src={english}
          className="h-full bg-opacity-70 bg-slate-600 w-full"
        />
        <button className="w-56 -mt-8 font-sans rounded-full py-5 px-3 bg-[#FF7350] mx-auto text-center">
          <span className=" font-bold  text-slate-100 tracking-wider">
            English
          </span>{" "}
          <span className="text-lg font-extrabold  text-slate-100 mx-3">|</span>
          <span className="font-bold  text-slate-100 tracking-wider">
            Teacher
          </span>
        </button>
      </div>
      <div className="text-center">
        <p className="text-[#FF7350] mt-20 flex gap-1 items-center justify-center font-bold text-lg font-sans">
          <FaGraduationCap /> Our Teacher
        </p>
        <h1 className="text-black text-5xl font-bold font-sans mb-7 mt-5">
          Our Expert Teacher
        </h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 max-w-7xl items-center justify-between mx-auto gap-x-1 gap-y-20 py-20">
        {instructors.map((instructor) => (
          <Instructor key={instructor._id} instructor={instructor}></Instructor>
        ))}
      </div>
    </section>
  );
};

export default Insructors;
