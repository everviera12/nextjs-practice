"use client";

import { useAuthContext } from "../auth-context";

export default function Login() {
  // we get the name from the our context
  const { name } = useAuthContext();

  return (
    <div className="p-6 grid">
      <h1 className="mt-6 font-bold text-white">
        Welcome <span className="text-green-400 font-bold"> {name} </span>
      </h1>
    </div>
  );
}
