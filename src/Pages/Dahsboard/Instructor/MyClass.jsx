import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const MyClass = () => {
  const { user } = useContext(AuthContext);
  const [myClass, setMyClass] = useState([]);
  useEffect(() => {
    fetch(
      `https://assignment-12-server-puce.vercel.app/addedClass?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyClass(data));
  }, [user]);
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
            <th className="">Name</th>
            <th>Instructor</th>
            <th>Price</th>
            <th>Seats</th>
            <th>Status</th>
            <th>Feedback</th>
            <th>Update</th>
            <th>Enrolled Students</th>
          </tr>
        </thead>
        <tbody>
          {myClass.map((Class) => (
            <tr key={Class._id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>{Class.name}</td>
              <td>{Class.instructorName}</td>
              <td>${Class.price}</td>
              <td>{Class.seats}</td>
              <td>{Class.status}</td>
              <td>
                <button className="btn btn-primary">Feedback</button>
              </td>
              <td>
                <button className="btn btn-primary">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClass;
