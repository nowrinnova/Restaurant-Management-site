import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layOut/MainLayOut";
import Home from "../pages/home/home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/order/order/Order";
import SignIn from "../components/auth/SignIn";
import Register from "../components/auth/Register";
import DashBoard from "../pages/DashBoard/DashBorad/DashBoard";
import Cart from "../pages/DashBoard/Cart/Cart";
import UserHome from "../pages/DashBoard/userHome/UserHome";
import PrivateRoutes from "../routes/PrivateRoutes";
import AllUsers from "../pages/DashBoard/DashBorad/AllUsers";
import AddItem from "../pages/DashBoard/add item/AddItem";
// import AdminRoute from "./AdminRoute";
import AdminRoute from "./AdminRoute";
import ManageItem from "../pages/DashBoard/manage Item/ManageItem";
import UpdateItem from "../pages/DashBoard/update menu item/UpdateItem";
import Payment from "../pages/DashBoard/payment/Payment";
// import SignOut from "../components/auth/SignOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <SignIn></SignIn>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <DashBoard></DashBoard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "reservation",
        element: <UserHome></UserHome>,
      },
      {
        path: "review",
        element: <UserHome></UserHome>,
      },
      {
        path: "history",
        element: <UserHome></UserHome>,
      },
      {
        path: "booking",
        element: <UserHome></UserHome>,
      },
      //admin routes
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "manageItem",
        element: <ManageItem></ManageItem>,
      },
      {
        path: "updateItem/:id",
        element: <UpdateItem></UpdateItem>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
    ],
  },
]);
export default router;
