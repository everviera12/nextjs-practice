"use client";

import { Button } from "@mui/material";
import { useAuthContext } from "../auth-context";

export default function Header() {
  const { handleLogout, handleLogin, isLoggedIn } = useAuthContext();

  const isLoggedInTrue = "bg-green-100! text-green-900!";
  const isLoggedInFalse = "bg-sky-100! text-sky-900!";

  return (
    <header>
      <nav className="">
        <Button
          className={`font-bold! ${isLoggedIn ? isLoggedInTrue : isLoggedInFalse}`}
          onClick={() => (isLoggedIn ? handleLogout() : handleLogin("Admin"))}
          variant="contained"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </Button>
      </nav>
    </header>
  );
}
