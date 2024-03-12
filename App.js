import React from "react";
import "./App.css";
import CheckoutStepper from "./components/CheckoutStepper";

const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => <div>Provide your content details</div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div>Enter your shipping address</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Complete payment for your order</div>,
  },
  {
    name: "Delivered",
    Component: () => <div>Your order has been delivered</div>,
  },
];
function App() {
  return (
    <>
      <h2>chekout steppper</h2>
      <CheckoutStepper setpsConfig={CHECKOUT_STEPS} />
    </>
  );
}

export default App;
