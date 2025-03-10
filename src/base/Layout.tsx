import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import './Layout.css'; // Import the CSS file

const Layout = () => {
    return (
        <div className="layout-container">
            <Sidebar />
            <div className="sidebar-space">
            <div className="standard-container">
                <Outlet /> {/* Dynamically loads the page content */}
                </div>
            </div>
        </div>
    );
};

export default Layout;