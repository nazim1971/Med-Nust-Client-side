import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../components/DashBoard/Sidebar";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    const { user } = useAuth();
    const location = useLocation();
    const isDashboardPage = location.pathname === "/dashboard";
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    return (
        <div className="flex min-h-screen relative">
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            {/* Toggle button for small screens */}
            <button 
                className="sm:hidden p-2 bg-orange-400 text-2xl"
                onClick={toggleDrawer}
            >
                {isDrawerOpen ? 'Close Menu' : '<' }
            </button>

            {/* Dashboard side bar */}
            <div 
                className={`sm:flex ${isDrawerOpen ? 'fixed inset-0 h-full bg-white z-50' : 'hidden'} sm:block sm:h-auto`}>
                <Sidebar className='min-h-full sm:min-h-screen' closeDrawer={closeDrawer} />
            </div>

            {/* Overlay to close the drawer when clicking outside */}
            {isDrawerOpen && (
                <div 
                    className="fixed inset-0 bg-black opacity-50 z-40"
                    onClick={closeDrawer}
                />
            )}

            {/* Dashboard content */}
            {!isDrawerOpen && (
                <div className="flex-1 p-8">
                    {isDashboardPage && (
                        <p className="text-4xl p-4">
                            Hello!! <span className="text-blue-600">{user.displayName}</span>
                        </p>
                    )}
                    <Outlet />
                </div>
            )}
        </div>
    );
};

export default Dashboard;
