import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa6";

export default function AllUsers() {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

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
        axiosSecure.delete(`/users/${item}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
          // refetch();
        });
      }
    });
  };
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: ` ${user.name} is now become an admin`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-evenly">
        {" "}
        <h1 className="text-2xl">All Users</h1>
        <h1 className="text-2xl">Total users{users.length}</h1>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((users, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{users.name}</td>
                  <td>{users.email}</td>
                  <td>
                    {users.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        className="btn btn-lg bg-orange-400"
                        onClick={() => handleMakeAdmin(users)}
                      >
                        <FaUsers className="text-xl"></FaUsers>
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs text-red-500"
                      onClick={() => handleDelete(users._id)}
                    >
                      <FaTrashAlt className="text-xl"></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
