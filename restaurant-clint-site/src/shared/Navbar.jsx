import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { AuthContext } from "../providers/AuthProvider";
import useCart from "../hooks/useCart";
// import useAuth from "../hooks/useAuth";
export default function Navbar() {
  // const { user } = useAuth();
  const [cart] = useCart();
  // console.log(cart.length);
  const { user, logoutUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logoutUser()
      .then(() => {
        console.log("log out done");
      })
      .catch((error) => console.log("error"));
  };
  const link = (
    <>
      {" "}
      <li>
        <NavLink to={"/"} className="uppercase">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="uppercase">
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/order" className="uppercase">
          Order food
        </NavLink>
      </li>
      <li>
        <NavLink to="/menu" className="uppercase">
          Our Menu
        </NavLink>
      </li>
      <li>
        <button className="btn">
          <span className="text-2xl">
            <CiShoppingCart />
          </span>
          <div className="badge badge-secondary">+{cart.length}</div>
        </button>
      </li>
      <li>
        {" "}
        {user ? (
          <>
            <button className="btn btn-ghost" onClick={handleLogOut}>
              logout
            </button>
          </>
        ) : (
          <>
            <NavLink to={"/login"}>LogIn</NavLink>
          </>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar text-white  bg-opacity-35 bg-black fixed z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
}
