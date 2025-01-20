import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

export default function DashBoard() {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-300">
        <ul className="text-center py-10 space-y-5">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/adminHome"}>Admin Home</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItem"}>Add Items</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageItem"}>Manage Items</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/bookings"}>Manage Bookings</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/users"}>All Users</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashboard/cart"}>My cart {cart.length}</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/userHome"}>User Home</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/reservation"}>My Reservation</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/review"}>Add Review</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/history"}>Payment History</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/booking"}>My Booking</NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/order"}>order</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
