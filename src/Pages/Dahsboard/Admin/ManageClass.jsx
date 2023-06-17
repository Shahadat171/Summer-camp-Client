import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageClass = () => {
  const [allClasses, setAllClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/addedClass/admin")
      .then((res) => res.json())
      .then((data) => setAllClasses(data));
  }, []);
  const handleAproved = (Classes) => {
    fetch(`http://localhost:5000/addedClass/approved/${Classes._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${Classes.name} is approved!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDeny = (Classs) => {
    fetch(`http://localhost:5000/addedClass/denied/${Classs._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${Classs.name} is denied!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Seats</th>
            <th>price</th>
            <th>Approve</th>
            <th>Deny</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {allClasses.map((Class) => (
            <tr key={Class._id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <img src={Class.image} alt="" />
              </td>
              <td>{Class.name}</td>
              <td>{Class.instructorEmail}</td>
              <td>{Class.status}</td>
              <td>{Class.seats}</td>
              <td>{Class.price}</td>
              <td>
                <button
                  onClick={() => handleAproved(Class)}
                  className="btn btn-primary"
                >
                  Approve
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDeny(Class)}
                  className="btn btn-primary"
                >
                  Deny
                </button>
              </td>
              <td>
                <button className="btn btn-primary">Feddback</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClass;
