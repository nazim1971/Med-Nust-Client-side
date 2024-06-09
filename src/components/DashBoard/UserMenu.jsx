import { FaCalendar, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const UserMenu = ({closeDrawer}) => {
  return (
    <>
      <li onClick={closeDrawer}>
        <NavLink to="/dashboard/userHome">
        <FaCalendar></FaCalendar>
          Payment History
        </NavLink>
      </li>
     
    </>
  );
};

export default UserMenu;
