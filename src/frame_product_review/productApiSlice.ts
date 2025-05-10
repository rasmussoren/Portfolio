//import { createFetchingSlice } from '../utils/fetchingSlice';
import { Product } from '../types/Products';
import { PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from '../app/createAppSlice';

//export const productApiSlice = createFetchingSlice<Product>('products');

export interface ProductState {
    items: Product[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ProductState = {
    items: [], 
    status: 'idle',
    error: null,
};

export const productApiSlice = createAppSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProductsStart(state) {
            state.status = 'loading';
        },
        fetchProductsSuccess(state, action: PayloadAction<Product[]>) {
            state.status = 'succeeded';
            state.items = action.payload;
        },
        fetchProductsFailure(state, action: PayloadAction<string>) {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});

export const {
    fetchProductsStart,
    fetchProductsSuccess,
    fetchProductsFailure,
} = productApiSlice.actions;

export default productApiSlice.reducer;
