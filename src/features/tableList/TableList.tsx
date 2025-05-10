import { motion } from 'framer-motion';
import './TableList.css'; // Import the CSS file
import { Box, Table, Typography } from '@mui/material';
import EnterAnimation from '../../animations/EnterAnimation';

const TableList = () => {
    return (
        <Box>
            <Typography variant="h1">
                Tables
            </Typography>
                <motion.div>
                    <EnterAnimation>
                    <Table>
                        <thead>
                            <tr>
                                <th>Header 1</th>
                                <th>Header 2</th>
                                <th>Header 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Data 1</td>
                                <td>Data 2</td>
                                <td>Data 3</td>
                            </tr>
                        </tbody>
                        </Table>
                    </EnterAnimation>
                </motion.div>

        </Box>
    );
};

export default TableList;