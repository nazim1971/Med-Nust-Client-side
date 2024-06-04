import { Outlet } from "react-router-dom";
import Sidebar from "../../components/DashBoard/Sidebar";



const Dashboard = () => {

    // TODO: get isAdmin value from the database
  

    return (
        <div className="flex">
            
            {/* dashboard side bar */}
            <Sidebar/>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;