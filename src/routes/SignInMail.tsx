// Importación de los componentes necesarios de React y Material-UI
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Función de componente para mostrar el aviso de derechos de autor
function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
// Creación del tema predeterminado (que aparentemente no se utiliza)
const defaultTheme = createTheme();

// Componente principal de la página de inicio de sesión
export default function SignInMail() {
  // Función para manejar el envío del formulario
  const [username, setUserName] = React.useState("");
  const handleSubmit = () => {
    console.log(username)
    
   
  };

  return (
    // Envolver el contenido con el tema predeterminado
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
               
        {/* Primera columna: formulario de inicio de sesión */}
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={0} square>
          <Box
            sx={{
              my: 20,
              mx: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxHeight: '90vh',
            }}
          >
           <Box
            sx={{
              display: { xs: 'block', sm: 'none' },
              backgroundColor: 'white',
              backgroundImage: 'url(https://unifood.storeware.cl/assets/img/illustrations/happiness.svg)',
              backgroundRepeat: 'no-repeat',
              p: 15,
              
              
            }}
          >

          </Box>
            <Typography component="h1" variant="h5">
              Control de Acceso
            </Typography>
            <Typography variant="subtitle1" sx={{color:'rgba(0, 0, 0, 0.5)'}} gutterBottom>
            Ingrese sus credenciales.
            </Typography>
            {/* Formulario */}
            <Box component="form" noValidate onSubmit={handleSubmit}  sx={{ mt: 1 }}>
              {/* Campo de entrada para el correo electrónico */}
              <TextField
                onChange={(evet)=>{
                  setUserName(evet.target.value)
                }}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
             
              {/* Botón para iniciar sesión */}
              <Button
                type="submit"
                href="/loginpass"
                onClick={handleSubmit}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
               Continuar
              </Button>
             
              
            </Box>
          </Box>
        </Grid>
        {/* Segunda columna: imagen de fondo */}
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: 'url(https://unifood.storeware.cl/assets/img/illustrations/happiness.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            maxHeight: '85vh',
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
