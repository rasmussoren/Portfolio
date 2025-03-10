import { IconType } from 'react-icons';
import { FaChartPie, FaTable, FaCreditCard, FaVrCardboard, FaUser, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
    icon: IconType; // Type for icon component from react-icons
    label: string;  // Label for the nav item
    path: string;   // URL path for the nav link
}

const Sidebar = () => {
    return (
        <div style={{
            width: '10%',
            backgroundColor: 'white',
            color: '#4A5568', // gray.800
            height: '100vh',
            padding: '16px',
            position: 'fixed',
            borderRight: '1px solid #E2E8F0'
        }}>
            <h2 style={{
                fontSize: '1.25rem', // lg font size
                fontWeight: 'bold',
                marginBottom: '24px',
                paddingLeft: '12px',
            }}>
                Soft UI Dashboard
            </h2>

            {/* Main Navigation */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
                <NavItem icon={FaChartPie} label="Dashboard" path="/" />
                <NavItem icon={FaTable} label="Tables" path="/tables" />
                <NavItem icon={FaCreditCard} label="Product Review" path="/product-review" />
                <NavItem icon={FaVrCardboard} label="Virtual Reality" path="/vr" />
                <NavItem icon={FaUser} label="Profile" path="/profile" />
            </div>

            {/* Section Header */}
            <h3 style={{
                fontSize: '0.875rem', // sm font size
                fontWeight: 'bold',
                color: '#A0AEC0', // gray.500
                marginTop: '24px',
                paddingLeft: '12px',
            }}>
                ACCOUNT PAGES
            </h3>

            {/* Account Pages */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
                <NavItem icon={FaSignInAlt} label="Sign In" path="/signin" />
                <NavItem icon={FaUserPlus} label="Sign Up" path="/signup" />
            </div>
        </div>
    );
};

const NavItem = ({ icon: Icon, label, path }: NavItemProps) => (
    <NavLink
        to={path}
        style={{ width: '100%', textDecoration: 'none' }}
    >
        {({ isActive }) => (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 16px',
                borderRadius: '4px',
                fontWeight: '500', // medium font weight
                transition: '0.3s',
                backgroundColor: isActive ? '#3182CE' : 'transparent', // blue.500
                color: isActive ? 'white' : '#4A5568', // gray.700
                cursor: 'pointer'
            }}>
                <Icon style={{
                    height: '1.25rem', // boxSize equivalent
                    width: '1.25rem',
                    marginRight: '12px',
                    color: isActive ? 'white' : '#A0AEC0' // gray.500
                }} />
                <span>{label}</span>
            </div>
        )}
    </NavLink>
);

export default Sidebar;