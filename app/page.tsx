'use client'

import { useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [name, setName] = useState<string>('')

  const handleLogin = (userName: string) => {
    setIsLoggedIn(true)
    setName(userName)
    console.log(userName);
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setName('')
    console.log('Logout active');
  }

  return (
    <div className="h-screen p-6 ">
      <button
        className="bg-sky-100 text-sky-700 px-6 py-2 rounded-full cursor-pointer"
        onClick={() => isLoggedIn ? handleLogout() : handleLogin('Admin')}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      <h1 className="mt-6 font-bold text-white">
        Welcome <span className="text-green-400 font-bold"> {name} </span>
      </h1>
    </div>
  );
}