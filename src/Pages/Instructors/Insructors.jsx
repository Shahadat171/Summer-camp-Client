import { useEffect, useState } from "react";
import Instructor from "./Instructor";

const Insructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/instructor")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
  }, []);
  return (
    <div className="grid grid-cols-3 mt-12 ml-10 gap-y-5">
      {instructors.map((instructor) => (
        <Instructor key={instructor._id} instructor={instructor}></Instructor>
      ))}
    </div>
  );
};

export default Insructors;
