import React from 'react';
import { Checkbox, FormControlLabel, FormGroup, Grid, Paper, Stack, Typography } from '@mui/material';
import OutlinedTextField from '../../components/textfields/outlined_textfield';
import FilledButtonRect from '../../components/buttons/filledButton';



const Login = () => {


    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }


    function handleLogin() {
        // Handle login logic here
        console.log('Logging in with:', { username, password });
    }


    return (
        <Grid>
            <Paper sx={{ p: 2, margin: '4rem', height: '100vh' }}>
                <Stack spacing={2} alignItems='center'>
                    <Typography variant="h1">Welcome</Typography>

                    <FormGroup>


                    {/* Add a login button */}
                    <OutlinedTextField label='username' onChange={handleUsernameChange} value={username}  ></OutlinedTextField>

                    <OutlinedTextField label='password' onChange={handlePasswordChange} value={password} type='password'></OutlinedTextField>

                        <FormControlLabel control={<Checkbox />} label="Remember me" />


                        <FilledButtonRect label={'Log in'} onClick={handleLogin}></FilledButtonRect>
                    </FormGroup>

                    <Typography variant="body2">Don't have an account? <a href="/setup">Sign up here</a></Typography>

                </Stack>
            </Paper>
        </Grid>

    );


}
export default Login;