import { FaCalendar, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <li>
        <NavLink to="/dashboard/userHome">
          <FaHome></FaHome>
          User Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/payHistoryUser">
          <FaCalendar></FaCalendar>
          User Pay History
        </NavLink>
      </li>
    </>
  );
};

export default UserMenu;
