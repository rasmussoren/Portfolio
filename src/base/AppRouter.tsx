import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Make sure to import these
import Layout from './Layout'; 
import Tables from '../features/tableList/TableList'; 
import Dashboard from '../screens/dashboard/Dashboard';
import { ProductList } from '../screens/frame_product_review/ProductList'; // Import your ProductReview component
import Setup from '../screens/setup/Setup'; // Import your Setup component
import Login from '../screens/login/login';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="setup" element={<Setup />} />
                <Route path="login" element={<Login />} />

                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="tables" element={<Tables />} />
                    <Route path="pricing-tool" element={<Tables />} />
                    <Route path="product-review" element={<ProductList />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;