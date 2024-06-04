import { FaHome,  FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/isRole";
import AdminMenu from "./AdminMenu";
import UserMenu from "./UserMenu";
import SellerMenu from "./SellerMenu";


const Sidebar = () => {
    const {logOut} = useAuth();
    const [role, isLoading] = useRole()
    console.log(role, isLoading) 


    return (
        <div>
                        <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {role === 'admin' && <AdminMenu/>}
                    {role === 'seller' && <SellerMenu/>}
                    {role === 'user' && <UserMenu/>}
                   
                            
                    
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
                            Cart</NavLink>
                    </li>
                    <li>
                        <button onClick={logOut} className="btn bg-red-500">LogOut</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;