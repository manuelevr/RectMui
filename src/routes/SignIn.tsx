import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import  {useAuth}  from '../auth/AuthProvider';
import { Navigate } from 'react-router-dom';
import { API_URL } from '../auth/constants';

const defaultTheme = createTheme();

export default function SignIn() {
  const auth = useAuth();
  if (auth.isAuthenticated) {
    return<Navigate to='/dashboard'/>
  }
  const [emailValue, setEmailValue] = useState(''); // Estado para el valor del correo electrónico
  const handleSubmit = async  (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('email')
    const password = data.get('password')
    try {
      const response = await fetch(`${API_URL}/login`, {
        mode:'no-cors',
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
    if (response.ok) {
      console.log ("ok")      
    }else{
    }
  } catch (error) {
    console.log(error);
  }
  }
  const sendPasswordRequest = async (email:string) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");
  
  
  
    fetch(`http://localhost:5000/l/${encodeURIComponent(email)}`,{
      mode:'no-cors',  
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    })
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {/* Campo de correo electrónico con botón en la derecha */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={emailValue}
              onChange={(e)=>setEmailValue(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                   <Button variant="outlined" size="small" onClick={() => sendPasswordRequest(emailValue)}>
                      Obtener
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
            {/* Campo de contraseña */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            {/* Botón de inicio de sesión */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
