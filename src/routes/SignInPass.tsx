// Importación de los componentes necesarios de React y Material-UI
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Creación del tema predeterminado 
const defaultTheme = createTheme();
interface SignInPassProps  {
  mail: string;
}
// Componente principal de la página de inicio de sesión
 const SignInPass:React.FC<SignInPassProps> = ({mail})=>{
  const [email, setEmail] = useState({mail});
  const [password, setPassword] = useState('');
  // Función para manejar el envío del formulario
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
     
      password: data.get('password'),
    });
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
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              {/* Campo de entrada para ca contreña */}
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
             
              {/* Botón para iniciar sesión */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Continuar
              </Button>
              <Grid container direction="row-reverse"
                      justifyContent="flex-start"
                      alignItems="center">
                <Grid item >
                 <Box>
                 <Typography variant="caption" sx={{color:'rgba(0, 0, 0, 0.9)'}} gutterBottom>
                  Necesita nuevo codigo?
                </Typography>
                  <Link href="#" variant="body2">
                    {" Solicitar"}
                  </Link>
                 </Box>
                <Grid item >
                  <Typography variant="caption" sx={{color:'rgba(0, 0, 0, 0.9)'}} gutterBottom>
                  Desea usar otro Correo?
                  </Typography>
                  <Link href="/loginmail" variant="body2">
                    {" Cambiar"}
                  </Link>
                </Grid>
                </Grid>
              </Grid>
              
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
};
export default SignInPass;