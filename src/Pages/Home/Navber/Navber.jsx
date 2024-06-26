import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import "animate.css";
import useAuth from "../../../Hooks/useAuth";
import { BiCartAdd } from "react-icons/bi";
import ReactClock from "./ReactClock";

const Navber = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch();
  };

  const menu = (
    <>
      <li>
        {" "}
        <NavLink to="/"> Home </NavLink>{" "}
      </li>
      <hr className="lg:hidden flex" />
      <li>
        {" "}
        <NavLink to="/shop"> Shop </NavLink>{" "}
      </li>
      <hr className="lg:hidden flex" />
      {user && (
        <li>
          {" "}
          <NavLink to="/cart">
            {" "}
            <BiCartAdd className="text-xl" />{" "}
          </NavLink>{" "}
        </li>
      )}
      <hr className="lg:hidden flex" />
      <li className="hidden lg:block">
        <ReactClock />
      </li>
    </>
  );

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

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-xl">
            {" "}
            <img
              className="h-10 w-10 animate__animated animate__pulse  animate__infinite"
              src="https://i.ibb.co/Z88qpcZ/MED-NUST-removebg-preview.png"
              alt="website-logo"
            />{" "}
            <span>
              Med
              <span className="text-orange-400">-Nust</span>
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          <label className="lg:swap hidden  mr-4 lg:swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input onChange={handleToggle} type="checkbox" value="dark" />

            {/* sun icon */}
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {/* user picture and logout/login btn */}
          {user ? (
            <div className="flex gap-3 items-center z-[1000] ">
              <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className=" m-1">
                  <img
                    className="h-14 w-14 rounded-full   "
                    src={
                      (user && user?.photoURL) ||
                      "https://i.ibb.co/VHD1J6g/user-profile-icon-free-vector.jpg"
                    }
                    alt="user image"
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 border rounded-box w-52"
                > <li className="block lg:hidden">
                <label className="flex justify-center cursor-pointer gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                  </svg>
                  <input
                    onChange={handleToggle}
                    type="checkbox"
                    value="dark"
                    className="toggle theme-controller"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                </label>
              </li>
              
              <li className="lg:hidden">
                <ReactClock />
              </li>
                  <li>
                    <NavLink to="/updateProfile">Update Profile</NavLink>
                  </li>
                  <hr  />
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <hr  />
                  <a className="lg:hidden">{menu}</a>
                  <hr className="lg:hidden flex" />
                  <li>
                    <button onClick={handleSignOut} className=" text-red-500">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex gap-2   ">
              <div className="dropdown dropdown-bottom dropdown-end ">
                <div tabIndex={0} role="button" className="btn m-1">
                  Join Us
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[100] menu p-2 shadow bg-base-100 rounded-box w-52 border"
                >
                  <li className="block lg:hidden">
                    <label className="flex justify-center cursor-pointer gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                      </svg>
                      <input
                        onChange={handleToggle}
                        type="checkbox"
                        value="dark"
                        className="toggle theme-controller"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                      </svg>
                    </label>
                  </li>
                  
                  <li className="lg:hidden">
                    <ReactClock />
                  </li>
                  <li>
                    <Link to="/login" className="font-semibold">
                      Login
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link to="/register" className="font-semibold">
                      Register
                    </Link>
                  </li>
                  <hr className="lg:hidden flex" />
                  <a className="lg:hidden">{menu}</a>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
