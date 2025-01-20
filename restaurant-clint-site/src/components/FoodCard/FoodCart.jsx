import React from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
export default function FoodCart({ item }) {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [refetch] = useCart();
  const handleAddToCart = (food) => {
    if (user && user?.email) {
      //send cart info to the database
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name: name,
        picture: image,
        price: price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        refetch();
      });
    } else {
      Swal.fire({
        title: "You are not logged in ",
        text: "Please login to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // Swal.fire({
          //   title: "Deleted!",
          //   text: "Your file has been deleted.",
          //   icon: "success",
          // });
          navigate("/login");
        }
      });
    }
  };
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 top-0 bg-black px-2 text-white">
        ${price}
      </p>

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => handleAddToCart(item)}
          >
            add
          </button>
        </div>
      </div>
    </div>
  );
}
