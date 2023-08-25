import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { FaAmazonPay } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SelectedClass = () => {
  const [selectedClass, setSelectedClass] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (!user) {
      return;
    }
    fetch(
      `https://assignment-12-server-puce.vercel.app/selectedClasses?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setSelectedClass(data));
  }, [user]);
  const handleDelete = (Classes) => {
    fetch(
      `https://assignment-12-server-puce.vercel.app/deleteSelectedClasses/${Classes._id}`,
      {
        method: "DElETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted");
        }
      });
  };
  return (
    <div className="bg-[#125E8A] w-full h-full mt-20 flex flex-col items-center justify-center text-white">
      <div className="overflow-x-auto bg-[#083149]">
        <div className="overflow-x-auto"></div>
        <table className="table text-white">
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
              <th>Price</th>
              <th>Seats</th>
              <th>Pay</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {selectedClass.map((Class) => (
              <tr key={Class._id}>
                <th>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox text-white border-white bg-slate-400"
                    />
                  </label>
                </th>
                <td>{Class.name}</td>
                <td>{Class.instructorName}</td>
                <td>${Class.price}</td>
                <td>{Class.availableSeats}</td>
                <td>
                  <Link to={`/dashboard/payment/${Class._id}`}>
                    <FaAmazonPay className="w-8 h-8"></FaAmazonPay>
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleDelete(Class)}>
                    <FaTrashAlt className="h-8 w-6"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;
