export interface Product {
    id: number;
    name: string;
    sku?: string;
    price?: number;
    brand?: string;

    // Allow flexible fields added from backend
    customFields?: Record<string, string | number | boolean>;
}
