import './ProductReview.css'; // Import the CSS file
import { Box, Skeleton, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import EnterAnimation from '../../animations/EnterAnimation';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsFailure, fetchProductsStart, fetchProductsSuccess } from './productApiSlice';
import { RootState } from '@reduxjs/toolkit/query';
import CustomTable from '../../features/tableList/customTable';
import { Product } from '../../types/Products';


export const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products.items);
    const status = useSelector((state: RootState) => state.products.status);
    const error = useSelector((state: RootState) => state.products.error);

    useEffect(() => {
        if (status === 'idle') {
            const loadProducts = async () => {
                dispatch(fetchProductsStart());
                try {
                    const res = await fetch(`${import.meta.env.VITE_API_URL}/product`);
                    console.log('Fetched products:', res);

                    const data: Product[] = await res.json();
                    dispatch(fetchProductsSuccess(data));
                } catch (err) {
                    dispatch(fetchProductsFailure('Fetch failed'));
                }
            };

            loadProducts();
        }
    }, [status, dispatch]);

    return (
        <div>
            {status }
            {status === 'loading' && <p>Loading products...</p>}
            {status === 'failed' && <p style={{ color: 'red' }}>Error: {error}</p>}
            {status === 'succeeded' && products.length === 0 && <p>No products found.</p>}
            {status === 'succeeded' && 
                    <CustomTable columns={[]} rows={[products]}>
                        
                    </CustomTable>
            }
        </div>
    );
};
