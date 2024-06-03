import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import useAdmin from "../../Hooks/useAdmin";
import { NavLink, Outlet } from "react-router-dom";



const Dashboard = () => {

    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
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
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/payHistoryUser">
                                        <FaCalendar></FaCalendar>
                                        User Pay History</NavLink>
                                </li>
                               
                            </>
                    }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart">
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;