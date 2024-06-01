import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Contect from "../Pages/Home/Navber/Contect";
import About from "../Pages/Home/Navber/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Sign-Up/Register";
import AddProduct from "../Pages/Home/Navber/AddProduct";
import Private from "./Private";
import ViewPrivate from "../Pages/Home/ViewPrivate";
import UpdateProfile from "../Pages/Home/UpdateProfile/UpdateProfile";

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
        path: '/contect',
        element: <Contect/>
       },
       {
        path: '/about',
        element: <About/>
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
       }
      ]
    },
  ]);

export default routes;