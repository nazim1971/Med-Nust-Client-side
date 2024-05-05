import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Contect from "../components/Navber/Contect";
import About from "../components/Navber/About";
import Login from "../components/SignIn/Login";
import Register from "../components/SignIn/Register";
import AddProduct from "../components/Navber/AddProduct";
import ViewPrivate from "../components/Home/ViewPrivate";
import Private from "../components/PrivateRoute/Private";

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
       }
      ]
    },
  ]);

export default routes;