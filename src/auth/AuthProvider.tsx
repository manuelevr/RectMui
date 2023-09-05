import { useContext, createContext, useState, useEffect } from "react";

// Define una interfaz para las props del AuthProvider.
interface AuthProviderProps {
  children: React.ReactNode;
}
interface AuthContextType {
  isAuthenticated: boolean;
  username: string; // Cambiado a string
}
// Crea un contexto de autenticación.
const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false, // Valor predeterminado de autenticación.
  username: ""
});

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUserName] = useState("");
    console.log(isAuthenticated)
  // Renderiza el contenido del contexto, proporcionando el valor de autenticación.
  return (
    <AuthContext.Provider value={{isAuthenticated,username }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = ()=> useContext (AuthContext);
