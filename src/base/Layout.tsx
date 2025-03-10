import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const Layout = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{
                marginLeft: '250px', // Space for the sidebar
                padding: '24px',     // Padding around content
                width: '100%',       // Full width
                backgroundColor: '#f7fafc', // Light gray background
                color: 'black',      // Text color
                minHeight: '100vh'   // Minimum height for full viewport
            }}>
                <Outlet /> {/* Dynamically loads the page content */}
            </div>
        </div>
    );
};

export default Layout;