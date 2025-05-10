import React from 'react';
import Grid from '@mui/material/Grid';
import {Box, Typography } from '@mui/material';

import { motion } from 'framer-motion';
import EnterAnimation from '../animations/EnterAnimation';
import Skeleton from '@mui/material/Skeleton';


const ModuleBuilder = () => {
    return (
        <Box>
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
}


export default ModuleBuilder;