import { Outlet } from "react-router-dom";
import Navber from "../Pages/Home/Navber/Navber";
import Footer from "../Pages/Home/Footer/Footer";

const Root = () => {
    return (
        < div >
            <div className=" w-[94%] mx-auto ">
            <div>
            <Navber/>
            <hr />
            </div>
            <div  className="min-h-screen">
            <Outlet/>
            </div>
            </div>
           
           <Footer/>
        
        </div>
    );
};

export default Root;