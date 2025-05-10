// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Customize your primary color
        },
        secondary: {
            main: '#dc004e', // Customize your secondary color
        },
        // Add more customizations as needed
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif', // Customize your font
        h1: {
            fontSize: 36,
        },
        h2: {
            fontSize: 28,

        },
        h3: {
            fontSize: 24,
        },
    },

    // Add more theme customizations if needed
});

export default theme;