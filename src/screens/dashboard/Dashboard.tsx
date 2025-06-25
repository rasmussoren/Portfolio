import './Dashboard.css'; // Import the CSS file
import { Box, Skeleton, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import EnterAnimation from '../../animations/EnterAnimation';

const Dashboard = () => {
    return (
        <Box >
            <motion.div>
                <EnterAnimation>
                    <Grid container>
                        <Grid item xs={8}>
                            <Typography variant="h2">
                                test</Typography>
                            <Skeleton variant="rectangular" width={210} height={118} />
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h2">
                                test</Typography>
                        </Grid>

                    </Grid>
                </EnterAnimation>
            </motion.div>
        </Box>
    );
};

export default Dashboard;