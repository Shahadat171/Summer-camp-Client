import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProviders";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_Gateway_PK}`);
const Payment = () => {
  const id = useParams();
  const ClassId = id.id;
  const [selectedClass, setSelectedClass] = useState({});
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (!user) {
      return;
    }
    fetch(`http://localhost:5000/selectedClasses?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        const singleClass = data.find(
          (everyClass) => everyClass._id === ClassId
        );
        setSelectedClass(singleClass);
      });
  }, []);
  console.log(selectedClass);
  const total = parseInt(selectedClass.price);
  console.log(total);
  return (
    <div>
      <h2>Payment</h2>
      <Elements classname=" w-full h-12 " stripe={stripePromise}>
        <CheckOut
          selectedClass={selectedClass}
          ClassId={ClassId}
          price={total}
        ></CheckOut>
      </Elements>
    </div>
  );
};

export default Payment;
