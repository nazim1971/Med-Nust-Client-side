import {  FaHome } from "react-icons/fa";
import { FcAdvertising } from "react-icons/fc";
import { GiMedicines } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { NavLink } from "react-router-dom";


const SellerMenu = () => {
    return (
        <>
        <li>
          <NavLink to="/dashboard/sellerHome">
            <FaHome></FaHome>
            User Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/manageMedicines">
            <GiMedicines></GiMedicines>
            Manage Medicines
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/askForAd">
            <FcAdvertising></FcAdvertising>
           Ask for Ad
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/payHistorySeller">
            <MdPayment></MdPayment>
            Seller Pay History
          </NavLink>
        </li>
      </>
    );
};

export default SellerMenu;