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
    fetch(`http://localhost:5000/selectedClasses?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setSelectedClass(data));
  }, [user]);
  const handleDelete = (Classes) => {
    fetch(`http://localhost:5000/deleteSelectedClasses/${Classes._id}`, {
      method: "DElETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted");
        }
      });
  };
  return (
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
              <th>Pay</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {selectedClass.map((Class) => (
              <tr key={Class._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
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
