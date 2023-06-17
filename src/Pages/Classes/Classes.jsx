import { useEffect, useState } from "react";
import Class from "./Class";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);
  return (
    <div className="grid grid-cols-3 mt-10 gap-y-5">
      {classes.map((EveryClass) => (
        <Class key={EveryClass._id} EveryClass={EveryClass}></Class>
      ))}
    </div>
  );
};

export default Classes;
