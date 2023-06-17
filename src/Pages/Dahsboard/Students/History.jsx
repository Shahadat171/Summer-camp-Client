import React, { useEffect, useState } from 'react';

const History = () => {
    const [historis,setHistoris]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/enrolledClass")
        .then(res=>res.json())
        .then(data=>setHistoris(data))
    },[])

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
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {historis.map((Class) => (
              <tr key={Class._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
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