"use client";

import { createContext, useContext, useState } from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  name: string;
  handleLogin: (userName: string) => void;
  handleLogout: () => void;
};

// we initialize the context and set the default value to null, also we type the context
export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  const handleLogin = (userName: string) => {
    setIsLoggedIn(true);
    setName(userName);
    console.log(userName);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setName("");
    console.log("Logout active");
  };

  // here we provide all the values needed for the context
  return (
    <AuthContext.Provider value={{ isLoggedIn, name, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * custom hook to use the AuthContext and we add an error handling
 * to check the context are imported in our Layout
 */
export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuthContext must be used inside AuthProvider");
  }
  return ctx;
}
