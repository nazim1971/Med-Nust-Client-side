import { FaHome,  FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/isRole";
import AdminMenu from "./AdminMenu";
import UserMenu from "./UserMenu";
import SellerMenu from "./SellerMenu";
import Swal from "sweetalert2";


const Sidebar = () => {
    const {logOut} = useAuth();
    const [role, isLoading] = useRole()
    console.log(role, isLoading) 


    const handleLogout = ()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes Logout!!"
          }).then((result) => {
            if (result.isConfirmed) {
                logOut()
              Swal.fire({
                title: "LogOut!",
                text: "Your logout.",
                icon: "success"
              });
            }
          });
    }

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
                        <button onClick={()=>handleLogout()} className="btn bg-red-500">LogOut</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;