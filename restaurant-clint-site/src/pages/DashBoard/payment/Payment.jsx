import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
export default function Payment() {
  return (
    <div>
      <SectionTitle
        heading={"payment"}
        subHeading={"please feel the meal and pay money "}
      ></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckOut></CheckOut>
      </Elements>
    </div>
  );
}
