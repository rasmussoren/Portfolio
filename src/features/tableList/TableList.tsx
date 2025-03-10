import React from 'react';
import './TableList.css'; // Import the CSS file
import { Box, Typography } from '@mui/material';

const TableList = () => {
    return (
        <div>
            <Typography variant="h4">
                Tables
            </Typography>
            <Typography variant="body1" >
            Here you can manage and view your tables dynamically.
            </Typography>

        </div>
    );
};

export default TableList;