import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Category from "../../home/Category";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const hostingKey = import.meta.env.VITE_iMAGE_HOSTING_KEY;
const image_hosting_Apis = `https://api.imgbb.com/1/upload?&key=${hostingKey}`;
export default function AddItem() {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    //image upload to the imagebb and get an API
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_Apis, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    // console.log(res.data.data.display_url);
    if (res.data.success) {
      //now send the menu item data to the server with the image url
      const menuItem = {
        name: data.name,
        Category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      console.log(menuItem);
      //send data to the database
      const menuRs = await axiosSecure.post("/menu", menuItem);
      console.log(menuRs.data);
      if (menuRs.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} has been saved`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div>
      <SectionTitle
        heading="add in item"
        subHeading="what's a new"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-5">
        <label className="form-control w-full my-5 ">
          <div className="label">
            <span className="label-text">Recipe name?</span>
          </div>
          <input
            type="text"
            placeholder="Recipe name"
            className="input input-bordered w-full "
            {...register("name")}
          />
        </label>

        {/* price */}
        <label className="form-control w-full my-5 ">
          <div className="label">
            <span className="label-text">Price</span>
          </div>
          <input
            type="text"
            placeholder="Price"
            className="input input-bordered w-full "
            {...register("price")}
          />
        </label>

        <select
          className="select select-bordered w-full my-5"
          {...register("category")}
        >
          <option disabled selected>
            select the category
          </option>
          <option value="salad">Salad</option>
          <option value="pizza">Pizza</option>
          <option value="soup">Soup</option>
          <option value="drinks">Drinks</option>
          <option value="dessert">Dessert</option>
        </select>
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs my-5"
          {...register("image")}
        />
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="recipe details"
          {...register("recipe")}
        ></textarea>
        <button className="btn btn-outline btn-warning" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}
