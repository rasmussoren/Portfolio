import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Make sure to import these
import Layout from './Layout'; 
import Tables from '../features/tableList/TableList'; 
import Dashboard from '../dashboard/Dashboard';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="tables" element={<Tables />} />
                    <Route path="pricing-tool" element={<Tables />} />
                    {/*<Route path="product-review" element={<ProductReview filterType="review" />} />*/}
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;