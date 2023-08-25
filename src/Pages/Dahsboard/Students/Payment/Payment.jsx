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
    fetch(
      `https://assignment-12-server-puce.vercel.app/selectedClasses?email=${user.email}`
    )
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
    <div className="bg-[#125E8A] w-full h-full mt-20 flex flex-col items-center justify-center text-white">
      <div className="bg-[#083149] text-white p-10 rounded-md">
        <h2>Payment</h2>
        <Elements classname=" w-full h-12 " stripe={stripePromise}>
          <CheckOut
            selectedClass={selectedClass}
            ClassId={ClassId}
            price={total}
          ></CheckOut>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
