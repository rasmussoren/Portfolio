// e.g. src/features/products/columns.ts
import { Column } from '../../screens/frame_product_review/ProductList';
import { Product } from './productTypes';

export const productColumns: Column<Product>[] = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Name' },
    { id: 'sku', label: 'SKU' },
    // add more fields if you have them, like price, descriptionÅc
];
