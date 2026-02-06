"use client";

import { useAuthContext } from "../auth-context";

export default function Login() {
  const { name, handleLogout, handleLogin, isLoggedIn } = useAuthContext();

  const isLoggedInTrue = "bg-green-400 text-green-700";
  const isLoggedInFalse = "bg-sky-100 text-sky-700";

  return (
    <>
      <button
        className={`px-6 py-2 rounded-full cursor-pointer ${isLoggedIn ? isLoggedInTrue : isLoggedInFalse}`}
        onClick={() => (isLoggedIn ? handleLogout() : handleLogin("Admin"))}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <h1 className="mt-6 font-bold text-white">
        Welcome <span className="text-green-400 font-bold"> {name} </span>
      </h1>
    </>
  );
}
