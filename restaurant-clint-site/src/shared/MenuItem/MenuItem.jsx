import React from "react";

export default function MenuItem({ data }) {
  const { name, recipe, image, price } = data;
  return (
    <div className="flex justify-center items-center">
      <img className="w-[120px]" style={{borderRadius:'0 200px 200px 200px'}} src={image} alt="" />
      <div className="ml-4">
        <h1 className="uppercase text-[#151515]">{name}--------------</h1>
        <p className="text-[#737373] text-sm">{recipe}</p>
      </div>
      <p className="text-xl text-orange-400 ml-5 font-bold">${price}</p>
    </div>
  );
}
