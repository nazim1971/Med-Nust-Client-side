import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Sign-Up/Register";
import AddProduct from "../Pages/Home/Navber/AddProduct";
import Private from "./Private";
import ViewPrivate from "../Pages/Home/ViewPrivate";
import UpdateProfile from "../Pages/Home/UpdateProfile/UpdateProfile";
import CategoryDate from "../Pages/Home/CategoryData/CategoryDate";
import Shop from "../Pages/Shop/Shop";
import Cart from "../Pages/Cart/Cart";
import CheackOut from "../Pages/CheckOut/CheackOut";
import Payment from "../Pages/CheckOut/Payment";
import Invoice from "../Pages/CheckOut/Invoice";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
       {
        path: '/cart',
        element: <Cart/>
       },
       {
        path: '/shop',
        element: <Shop/>
       },
       {
        path: '/login',
        element: <Login/>
       },
       {
        path: '/register',
        element: <Register/>
       },
       {
        path: '/addProduct',
        element: <AddProduct/>
       },
       {
        path: '/viewPrivate',
        element: <Private><ViewPrivate/></Private>
       },
       {
        path: '/updateProfile',
        element: <UpdateProfile/>
       },
       {
        path: '/categoryData/:cat',
        element: <CategoryDate/>
       },
       {
        path: '/payment',
        element: <Payment/>
       },
       {
        path: '/invoice',
        element: <Invoice/>
       }
      ]
    },
  ]);

export default routes;