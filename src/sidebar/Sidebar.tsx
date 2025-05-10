import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { setSelectedNavItem } from './navigationSlice'; // Import the action
import { FaChartPie, FaTable, FaCreditCard, FaVrCardboard, FaUser, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import './Sidebar.css'; // Import your sidebar styles

const tabs = [
    { name: "Dashboard", icon: <FaChartPie />, path: "/" },
    { name: "Tables", icon: <FaTable />, path: "/tables" },
    { name: "Product Review", icon: <FaCreditCard />, path: "/product-review" },
    { name: "Virtual Reality", icon: <FaVrCardboard />, path: "/vr" },
    { name: "Profile", icon: <FaUser />, path: "/profile" },
    { name: "Sign In", icon: <FaSignInAlt />, path: "/signin" },
    { name: "Sign Up", icon: <FaUserPlus />, path: "/signup" },
];

const Sidebar = () => {
    const dispatch = useAppDispatch();
    const selectedNavItem = useAppSelector((state) => state.navigation.selectedNavItem);

    return (
        <div className="sidebar">
            <h2 className="sidebar-header">Soft UI Dashboard</h2>
            <div className="sidebar-section">
                {tabs.map(({ name, icon, path }, i) => (
                    <NavItem
                        key={i}
                        name={name}
                        icon={icon}
                        path={path}
                        isActive={i === selectedNavItem}
                        onClick={() => dispatch(setSelectedNavItem(i))} // Dispatch the action
                    />
                ))}
            </div>
        </div>
    );
};

const NavItem = ({ name, icon, path, isActive, onClick }) => (
    <NavLink to={path} style={{ width: '100%', textDecoration: 'none' }}>
        <motion.div
            className="nav-item"
            initial={{ color: isActive ? "#333" : "#fff" }}
            animate={{ color: isActive ? "#333" : "#fff" }}
            onClick={onClick}
            style={{ position: 'relative', cursor: 'pointer', padding: '10px 16px' }}
        >
            <span style={{ position: "relative", zIndex: 1 }}>{icon} {name}</span>
            {isActive && (
                <motion.div
                    style={selectionStyle}
                    layoutId="selected"
                    initial={{ backgroundColor: "#FDFDFD" }} // Default selection color
                    animate={{ backgroundColor: "#FDFDFD" }} // You can set this to animate dynamically if needed
                />
            )}
        </motion.div>
    </NavLink>
);

const selectionStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "4px",
    zIndex: 0, // Behind the text
};

export default Sidebar;