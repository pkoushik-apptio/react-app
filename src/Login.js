import React from "react";
import { Box, 
    Container, 
    TextField, 
    Typography, 
    Paper, 
    Button } from '@mui/material';

const Login =(props) =>{
return (   <Container maxWidth="sm" >
<Paper sx={{padding: '30px', position: 'relative', top: '100px'}}>
<Box
  component="form"
  sx={{
    '& .MuiTextField-root': { 'marginBottom': '20px' },
  }}
  noValidate
  autoComplete="off"
>
  <Typography variant="h6" textAlign="center" color="primary" marginBottom="20px">
    Sign in to access your todos
  </Typography>
  <div>
    <TextField
      required
      fullWidth
      id="username"
      label="Username"
      placeholder="Enter username or email"
    //   value={username}
    //   onChange={(e)=>{setUsername(e.target.value)}}
    />
    <TextField
      id="outlined-disabled"
      required
      fullWidth
      label="password"
      type="password"
      placeholder="Password"
    //   value={password}
    //   onChange={(e)=>{setPassword(e.target.value)}}
    />
  </div>
  <Button variant="contained" fullWidth>Login</Button>
</Box>
</Paper>
</Container>)
}
 
export default Login;