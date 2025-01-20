import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const hostingKey = import.meta.env.VITE_iMAGE_HOSTING_KEY;
const image_hosting_Apis = `https://api.imgbb.com/1/upload?&key=${hostingKey}`;
export default function UpdateItem() {
  const item = useLoaderData();
  const { name, category, price, image, recipe, _id } = item;
  console.log(item);
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
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
      const menuRs = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRs.data);
      if (menuRs.data.modifiedCount > 0) {
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
        heading={"update Item"}
        subHeading={"Update item data"}
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
            defaultValue={name}
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
            defaultValue={price}
          />
        </label>

        <select
          className="select select-bordered w-full my-5"
          {...register("category")}
          defaultValue={category}
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
          defaultValue={image}
        />
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="recipe details"
          {...register("recipe")}
          defaultValue={recipe}
        ></textarea>
        <button className="btn btn-outline btn-warning" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}
