import { Outlet } from "react-router-dom";
import Footer from "../Home/Footer";
import Navber from "../Navber/Navber";

const Root = () => {
    return (
        <div >
            <div className=" w-[94%] mx-auto ">
            <Navber/>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;