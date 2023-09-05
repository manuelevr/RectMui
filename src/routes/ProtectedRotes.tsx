import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
export default function ProtectedRoutes() {
    const auth = useAuth();
    console.log(auth.isAuthenticated) 
    return auth.isAuthenticated ? <Outlet/>: <Navigate to="/login"/>
}