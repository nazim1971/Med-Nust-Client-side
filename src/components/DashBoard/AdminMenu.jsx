import { FaBook, FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const AdminMenu = () => {
    return (
        <>
        <li>
            <NavLink to="/dashboard/adminHome">
                <FaHome></FaHome>
                Admin Home</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/manageBannerAd">
                <FaUtensils></FaUtensils>
                Manage Banner Ad</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/manageCategory">
                <FaList></FaList>
                Manage Category</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/manageUsers">
                <FaBook></FaBook>
                Manage User</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/payManagement">
                <FaUsers></FaUsers>
                Payment ManageMent</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/salesReport">
                <FaUsers></FaUsers>
                Sales Report</NavLink>
        </li>
    </>
    );
};

export default AdminMenu;