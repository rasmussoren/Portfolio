import { IconType } from 'react-icons';
import { FaChartPie, FaTable, FaCreditCard, FaVrCardboard, FaUser, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';  // Import the CSS file
    
interface NavItemProps {
    icon: IconType; // Type for icon component from react-icons
    label: string;  // Label for the nav item
    path: string;   // URL path for the nav link
}

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="sidebar-header">Soft UI Dashboard</h2>

            {/* Main Navigation */}
            <div className="sidebar-section">
                <NavItem icon={FaChartPie} label="Dashboard" path="/" />
                <NavItem icon={FaTable} label="Tables" path="/tables" />
                <NavItem icon={FaCreditCard} label="Product Review" path="/product-review" />
                <NavItem icon={FaVrCardboard} label="Virtual Reality" path="/vr" />
                <NavItem icon={FaUser} label="Profile" path="/profile" />
            </div>

            {/* Section Header */}
            <h3 className="section-header">ACCOUNT PAGES</h3>

            {/* Account Pages */}
            <div className="sidebar-section">
                <NavItem icon={FaSignInAlt} label="Sign In" path="/signin" />
                <NavItem icon={FaUserPlus} label="Sign Up" path="/signup" />
            </div>
        </div>
    );
};

const NavItem = ({ icon: Icon, label, path }: NavItemProps) => (
    <NavLink to={path} style={{ width: '100%', textDecoration: 'none' }}>
        {({ isActive }) => (
            <div className={`nav-item ${isActive ? 'nav-item-active' : 'nav-item-inactive'}`}>
                <Icon className={`icon ${isActive ? 'icon-active' : 'icon-inactive'}`} />
                <span>{label}</span>
            </div>
        )}
    </NavLink>
);

export default Sidebar;