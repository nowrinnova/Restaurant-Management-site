import React from "react";
import FoodCart from "../../../components/FoodCard/FoodCart";

export default function OrderTab({ item }) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {item.map((item) => (
        <FoodCart item={item}></FoodCart>
      ))}
    </div>
  );
}
