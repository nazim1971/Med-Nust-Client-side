import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
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
import Payment from "../Pages/CheckOut/Payment";
import Invoice from "../Pages/CheckOut/Invoice";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UserHome from "../Pages/Dashboard/User/UserHome";
import PayHistoryUser from "../Pages/Dashboard/User/PayHistoryUser";
import SellerHome from "../Pages/Dashboard/Seller/SellerHome";
import ManageMedicines from "../Pages/Dashboard/Seller/ManageMedicines";
import AskForAd from "../Pages/Dashboard/Seller/AskForAd";
import PayHistorySelller from "../Pages/Dashboard/Seller/PayHistorySelller";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import AdminRoute from "./AdminRoute";
import ManageBannerAd from "../Pages/Dashboard/Admin/ManageBannerAd";
import ManageCategory from "../Pages/Dashboard/Admin/ManageCategory";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import PayManagement from "../Pages/Dashboard/Admin/PayManagement";
import SalesReport from "../Pages/Dashboard/Admin/SalesReport";

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
    {
      path: 'dashboard',
      element: <Private> <Dashboard/> </Private>,
      children:[
        // normal user 
        {
          path: 'userHome',
          element: <UserHome/>
        },
        {
          path: 'payHistoryUser',
          element: <PayHistoryUser/>
        },
        // seller dashboard
        {
          path: 'sellerHome',
          element: <SellerHome/>
        },
        {
          path: 'manageMedicines',
          element: <ManageMedicines/>
        },
        {
          path: 'askForAd',
          element: <AskForAd/>
        },
        {
          path: 'payHistorySeller',
          element: <PayHistorySelller/>
        },
        //admin routes only
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome/></AdminRoute>
        },
        {
          path: 'manageBannerAd',
          element: <AdminRoute><ManageBannerAd/></AdminRoute>
        },
        {
          path: 'manageCategory',
          element: <AdminRoute><ManageCategory/></AdminRoute>
        },
        {
          path: 'manageUsers',
          element: <AdminRoute><ManageUsers/></AdminRoute>
        },
        {
          path: 'payManagement',
          element: <AdminRoute><PayManagement/></AdminRoute>
        },
        {
          path: 'salesReport',
          element: <AdminRoute><SalesReport/></AdminRoute>
        }
      ]
    }
  ]);

export default routes;