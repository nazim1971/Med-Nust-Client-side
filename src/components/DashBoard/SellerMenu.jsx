import {  FaHome } from "react-icons/fa";
import { FcAdvertising } from "react-icons/fc";
import { GiMedicines } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { NavLink } from "react-router-dom";


const SellerMenu = ({closeDrawer}) => {
    return (
        <>
        <li onClick={closeDrawer}>
          <NavLink to="/dashboard/sellerHome">
            <FaHome></FaHome>
            Home
          </NavLink>
        </li>
        <li onClick={closeDrawer}>
          <NavLink to="/dashboard/manageMedicines">
            <GiMedicines></GiMedicines>
            Manage Medicines
          </NavLink>
        </li>
        <li onClick={closeDrawer}>
          <NavLink to="/dashboard/payHistorySeller">
            <MdPayment></MdPayment>
            Payment History
          </NavLink>
        </li>
        <li onClick={closeDrawer}>
          <NavLink to="/dashboard/askForAd">
            <FcAdvertising></FcAdvertising>
           Ask for Ad
          </NavLink>
        </li>
        
      </>
    );
};

export default SellerMenu;