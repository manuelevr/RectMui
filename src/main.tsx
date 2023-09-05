import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Dashboard from './routes/Dashboard.tsx'

//import './index.css'
import { CssBaseline } from '@mui/material'
import { createBrowserRouter,RouterProvider  } from "react-router-dom" ;
import SignIn from './routes/SignIn.tsx'
import {CustomizedSnackbars} from './routes/CustomizedSnackbars.tsx'
import ProtectedRoutes from './routes/ProtectedRotes.tsx'
import { AuthProvider } from './auth/AuthProvider.tsx'
import SignInMail from './routes/SignInMail.tsx'
import SignInPass from './routes/SignInPass.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [{
      path: "/dashboard",
      element:<Dashboard/>
    }]
  },
  {
    path: "/loginpass",
    element:<SignInPass mail={""}/>
  },
  {
    path: "/loginmail",
    element:<SignInMail/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
) ;
