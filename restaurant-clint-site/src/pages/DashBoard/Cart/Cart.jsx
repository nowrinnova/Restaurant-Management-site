import { FaDeleteLeft } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cart] = useCart();
  const [refetch] = useCart();
  const navigate = useNavigate();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  // console.log(cart);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${item}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
          refetch();
        });
      }
    });
  };
  const handlePayment = () => {
    navigate("/dashBoard/payment");
  };
  return (
    <div className="p-5">
      <div className="flex gap-5 justify-evenly items-center">
        <h1 className="text-4xl">items:{cart.length}</h1>
        <h1 className="text-4xl">Total Price :{totalPrice}$</h1>
        {cart.length > 0 && (
          <button className="btn btn-success" onClick={handlePayment}>
            Pay
          </button>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          {cart.map((item, index) => (
            <tbody>
              {/* row 1 */}
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.picture}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      {/* <div className="font-bold">{item.name}</div> */}
                      {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                  </div>
                </td>
                <td>
                  {item.name}
                  <br />
                  {/* <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span> */}
                </td>
                <td>{item.price}$</td>
                <th>
                  <button
                    className="btn btn-ghost btn-xs text-red-500"
                    onClick={() => handleDelete(item._id)}
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
