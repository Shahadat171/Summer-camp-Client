import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageClass = () => {
  const [allClasses, setAllClasses] = useState([]);
  useEffect(() => {
    fetch("https://assignment-12-server-puce.vercel.app/addedClass/admin")
      .then((res) => res.json())
      .then((data) => setAllClasses(data));
  }, []);
  const handleAproved = (Classes) => {
    fetch(
      `https://assignment-12-server-puce.vercel.app/addedClass/approved/${Classes._id}`,
      {
        method: "PATCH",
      }
    )
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
    fetch(
      `https://assignment-12-server-puce.vercel.app/addedClass/denied/${Classs._id}`,
      {
        method: "PATCH",
      }
    )
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
  const handlefeedback = (event) => {
    event.preventDefault();
    const feedback = event.target.feedback.value;
    console.log(feedback);
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
                {/* Open the modal using ID.showModal() method */}
                <button
                  className="btn btn-primary"
                  onClick={() => window.my_modal_5.showModal()}
                >
                  Feddback
                </button>
                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <form method="dialog" className="modal-box">
                    <form onSubmit={handlefeedback}>
                      <div className="form-control">
                        <input
                          name="feedback"
                          type="text"
                          placeholder="Give feedback"
                          className="input input-bordered input-primary w-full max-w-xs"
                        />
                      </div>
                      <input
                        type="submit"
                        value="Send"
                        className="mt-10 btn btn-primary"
                      />
                    </form>
                    <div className="modal-action">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </div>
                  </form>
                </dialog>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClass;
