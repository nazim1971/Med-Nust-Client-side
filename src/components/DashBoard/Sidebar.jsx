import { FaHome,  FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/isRole";
import AdminMenu from "./AdminMenu";
import UserMenu from "./UserMenu";
import SellerMenu from "./SellerMenu";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";


const Sidebar = ({closeDrawer}) => {
    const {logOut} = useAuth();
    const [role] = useRole()

      // dark and light mode
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("light");
    return storedTheme || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
    
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
                icon: "success"
              });
            }
          });
    }

    return (
        <div >
                        <div className="w-64 text-white h-full bg-orange-400">
                <ul className="menu p-4 pt-8">
                <label className="cursor-pointer grid place-items-center mb-4">
  <input onChange={handleToggle} type="checkbox" value="dark" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
                    {role === 'admin' && <AdminMenu closeDrawer={closeDrawer}/>}
                    {role === 'seller' && <SellerMenu closeDrawer={closeDrawer} />}
                    {role === 'user' && <UserMenu closeDrawer={closeDrawer} />}
                   
                            
                    
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li onClick={closeDrawer}>
                        <NavLink to="/">
                            <FaHome></FaHome>
                           Local Home</NavLink>
                    </li>
                    <li className="mt-5">
                        <button onClick={()=>handleLogout()} className="btn btn-sm border-none text-white bg-red-500">LogOut</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;