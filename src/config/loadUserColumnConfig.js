export const loadUserColumnConfig = () => {
    // For example, retrieve from local storage or an API
    const config = JSON.parse(localStorage.getItem('columnConfig'));
    return config || defaultProductColumns; // Fallback to default
};