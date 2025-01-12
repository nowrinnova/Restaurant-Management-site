import React from "react";

export default function FoodCart({ item }) {
  const { name, image, price, recipe } = item;
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 top-0 bg-black px-2 text-white">
        ${price}
      </p>

      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">add</button>
        </div>
      </div>
    </div>
  );
}
