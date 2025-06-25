import { Paper, Stack, Typography } from "@mui/material";


import OutlinedTextField from "../../components/textfields/outlined_textfield";
import Grid from '@mui/material/Grid';
import React, { useState } from "react";


const Setup = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }


    return (

        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh' }}>


            <Grid item xs={6}>

                <Paper sx={{ p: 2, margin: '4rem', height: '100vh' }}>

                    <Stack spacing={2} alignItems='center'>
                        <Typography variant="h1">Welcome!</Typography>
                        <Typography variant="h3">Before starting, we need to create an administrator</Typography>

                        <OutlinedTextField
                            label="Username"
                            value={username}
                            required
                            onChange={(e) => handleUsernameChange(e)}
                            type="text"
                            helperText="Enter a username for the administrator account">
                        </OutlinedTextField>

                        <OutlinedTextField
                            label="Password"
                            value={password}
                            required
                            onChange={(e) => handlePasswordChange(e)}
                            type="password"
                            helperText="Enter a password for the administrator account">
                        </OutlinedTextField>



                    </Stack>

                </Paper >
            </Grid>
        </Grid>
    );

}

export default Setup;