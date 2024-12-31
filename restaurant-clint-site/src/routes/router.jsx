import {
  createBrowserRouter
} from "react-router-dom";
import MainLayOut from "../layOut/MainLayOut";
import Home from "../pages/home/home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[{
      path:'/',
      element:<Home></Home>
    }]
  },
]);
export default router