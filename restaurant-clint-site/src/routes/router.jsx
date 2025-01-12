import {
  createBrowserRouter
} from "react-router-dom";
import MainLayOut from "../layOut/MainLayOut";
import Home from "../pages/home/home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/order/order/Order";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'menu',
      element:<Menu></Menu>
    },
    {
      path:'order',
      element:<Order></Order>
    },
  ]
  },
]);
export default router