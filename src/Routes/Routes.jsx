import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Sign-Up/Register";
import Private from "./Private";
import UpdateProfile from "../Pages/Home/UpdateProfile/UpdateProfile";
import CategoryDate from "../Pages/Home/CategoryData/CategoryDate";
import Shop from "../Pages/Shop/Shop";
import Cart from "../Pages/Cart/Cart";
import Payment from "../Pages/CheckOut/Payment";
import Invoice from "../Pages/CheckOut/Invoice";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UserHome from "../Pages/Dashboard/User/UserHome";
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
import SellerRoute from "./SellerRoute";
import Error from "./Error";
import HowItWorks from "../Pages/Home/Banner/HowItWorks";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <Error/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
       {
        path: '/cart',
        element: <Private><Cart/></Private>
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
        path: '/howItWorks',
        element: <HowItWorks/>
       },
       {
        path: '/register',
        element: <Register/>
       },
       {
        path: '/updateProfile',
        element: <Private><UpdateProfile/></Private>
       },
       {
        path: '/categoryData/:cat',
        element: <CategoryDate/>
       },
       {
        path: '/payment',
        element: <Private><Payment/></Private>
       },
       {
        path: '/invoice',
        element: <Private><Invoice/></Private>
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
          element: <Private><UserHome/> </Private>
        },
       
        // seller dashboard
        {
          path: 'sellerHome',
          element: <Private><SellerRoute><SellerHome/></SellerRoute> </Private>
        },
        {
          path: 'manageMedicines',
          element: <Private><SellerRoute><ManageMedicines/></SellerRoute> </Private>
        },
        {
          path: 'askForAd',
          element:  <Private><SellerRoute><AskForAd/></SellerRoute> </Private>
        },
        {
          path: 'payHistorySeller',
          element:   <Private><SellerRoute><PayHistorySelller/></SellerRoute> </Private>
        },
        //admin routes only
        {
          path: 'adminHome',
          element: <Private><AdminRoute><AdminHome/></AdminRoute></Private>
        },
        {
          path: 'manageBannerAd',
          element: <Private><AdminRoute><ManageBannerAd/></AdminRoute></Private>
        },
        {
          path: 'manageCategory',
          element: <Private><AdminRoute><ManageCategory/></AdminRoute></Private>
        },
        {
          path: 'manageUsers',
          element: <Private><AdminRoute><ManageUsers/></AdminRoute></Private>
        },
        {
          path: 'payManagement',
          element: <Private><AdminRoute><PayManagement/></AdminRoute></Private>
        },
        {
          path: 'salesReport',
          element: <Private><AdminRoute><SalesReport/></AdminRoute></Private>
        }
      ]
    }
  ]);

export default routes;