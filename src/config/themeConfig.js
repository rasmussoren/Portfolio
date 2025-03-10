// columnConfig.js
export const defaultProductColumns = [
    {
        id: 'select',
        label: 'Select',
        render: (item) => (
            <input type="checkbox" />
        ),
    },

    { id: 'product_number', label: 'SKU' },
    { id: 'name', label: 'Description' },
    { id: 'sales_price', label: 'Sales Price' },
    { id: 'cost_price', label: 'Cost Price' },
    { id: 'stock', label: 'Stock' },
];