import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import { data } from "react-router-dom";

export default function CheckOut() {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart] = useCart();
  const { user } = useAuth();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", {
          price: totalPrice,
        })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
      //confirm payment
      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              email: user.email || "anonymous",
              name: user.displayName || "anonymous",
            },
          },
        });
      if (confirmError) {
        console.log("confirm error");
      } else {
        console.log("payment intent", paymentIntent);
        if (paymentIntent.status == "succeeded") {
          console.log("transaction id", paymentIntent.id);
          setTransactionId(paymentIntent.id);
          //now save  the payment in the database
          const payment = {
            email: user.email,
            price: totalPrice,
            transactionId: paymentIntent.id,
            data: new Date(),
            cartIds: cart.map((item) => item._id),
            menuItemIds: cart.map((item) => item.menuId),
            status: "pending",
          };
          const res = await axiosSecure.post("/payments", payment);
          console.log(res.data);
        }
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
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
        className="btn btn-sm btn-warning my-4"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p>{error}</p>
      <p>
        {transactionId && (
          <p className="text-green-500 text-xs">
            your transaction is successful ${transactionId}
          </p>
        )}
      </p>
    </form>
  );
}
