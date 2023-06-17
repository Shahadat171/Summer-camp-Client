import React, { useEffect, useState } from "react";

const EnrolledClass = () => {
  const [enrolledClass, setEnrolledClass] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/enrolledClass")
      .then((res) => res.json())
      .then((data) => {
        setEnrolledClass(data);
      });
  });
  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th className="">Name</th>
                <th>Instructor</th>
                <th>Price</th>
                <th>Seats</th>
              </tr>
            </thead>
            <tbody>
              {enrolledClass.map((Class) => (
                <tr key={Class._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>{Class.enrolledClass.name}</td>
                  <td>{Class.enrolledClass.instructorName}</td>
                  <td>${Class.enrolledClass.price}</td>
                  <td>{Class.enrolledClass.availableSeats}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EnrolledClass;
