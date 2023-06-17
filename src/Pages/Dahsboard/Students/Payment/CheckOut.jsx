import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProviders";

const CheckOut = ({ price, ClassId,selectedClass }) => {
  console.log(price);
  const [cardError, setCardError] = useState("");
  const { user } = useContext(AuthContext);
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    // //  if(price>0){
    //   fetch('http://localhost:5000/create-payment-intent',{
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(price)
    //   })
    //   .then(res=>res.json())
    //   .then(data=>setClientSecret(data.clientSecret))
    // }
    if (price > 0) {
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("payment method", paymentMethod);
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    console.log("payment intent", paymentIntent.status);
    if (paymentIntent.status === "succeeded") {
      const transaction = { transactionId: paymentIntent.id, enrolledClass:selectedClass };
      setTransactionId(transaction);
      fetch(`http://localhost:5000/enrolledClass`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(transaction),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };
  return (
    <>
      <form className="w-[400px] py-5" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn my-5 btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {transactionId && <p className="text-green-600">Transaction Complete</p>}
    </>
  );
};

export default CheckOut;
