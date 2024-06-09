import { FaBook, FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const AdminMenu = ({closeDrawer}) => {
    return (
        <>
        <li onClick={closeDrawer}>
            <NavLink to="/dashboard/adminHome">
                <FaHome></FaHome>
                Home</NavLink>
        </li>
        <li onClick={closeDrawer}>
            <NavLink to="/dashboard/manageUsers">
                <FaBook></FaBook>
                Manage User</NavLink>
        </li>
        <li onClick={closeDrawer}>
            <NavLink to="/dashboard/manageCategory">
                <FaList></FaList>
                Manage Category</NavLink>
        </li>
        <li onClick={closeDrawer}>
            <NavLink to="/dashboard/payManagement">
                <FaUsers></FaUsers>
                Payment ManageMent</NavLink>
        </li>
        <li onClick={closeDrawer}>
            <NavLink to="/dashboard/salesReport">
                <FaUsers></FaUsers>
                Sales Report</NavLink>
        </li>
        <li onClick={closeDrawer}>
            <NavLink to="/dashboard/manageBannerAd">
                <FaUtensils></FaUtensils>
                Manage Banner Ad</NavLink>
        </li>
       
        
        
        
    </>
    );
};

export default AdminMenu;