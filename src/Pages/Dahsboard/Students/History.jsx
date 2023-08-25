import React, { useEffect, useState } from "react";

const History = () => {
  const [historis, setHistoris] = useState([]);
  useEffect(() => {
    fetch("https://assignment-12-server-puce.vercel.app/enrolledClass")
      .then((res) => res.json())
      .then((data) => setHistoris(data));
  }, []);

  return (
    <div className="bg-[#125E8A] w-full h-full mt-20 flex flex-col items-center justify-center text-white">
      <div>
        <div className="overflow-x-auto bg-[#083149]">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-white">
                <th>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox text-white border-white bg-slate-400"
                    />
                  </label>
                </th>
                <th className="">Name</th>
                <th>Instructor</th>
                <th>Transaction Id</th>
              </tr>
            </thead>
            <tbody>
              {historis.map((Class) => (
                <tr key={Class._id}>
                  <th>
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox text-white border-white bg-slate-400"
                      />
                    </label>
                  </th>
                  <td>{Class.enrolledClass.name}</td>
                  <td>{Class.enrolledClass.instructorName}</td>
                  <td>{Class.transactionId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;
