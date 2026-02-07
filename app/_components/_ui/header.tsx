"use client";

import LinkNext from "next/link";
import { Button, Menu, MenuProps } from "antd";
import { useAuthContext } from "../auth-context";

type MenuItem = Required<MenuProps>["items"][number];

// Custom Link
const Link = () => {
  return <LinkNext href="/">Home</LinkNext>;
};

const items: MenuItem[] = [
  {
    key: "home",
    label: (
        <Link />
    )
  },
];

export default function Header() {
  const { handleLogout, handleLogin, isLoggedIn } = useAuthContext();

  const isLoggedInTrue = "bg-green-400 text-green-700";
  const isLoggedInFalse = "bg-sky-100 text-sky-700";

  return (
    <header>
      <nav className="">
        <Menu key={"nav-menu"} mode="horizontal" items={items} />

        <Button
          type="primary"
          className={`px-6 py-2 rounded-full cursor-pointer ${isLoggedIn ? isLoggedInTrue : isLoggedInFalse}`}
          onClick={() => (isLoggedIn ? handleLogout() : handleLogin("Admin"))}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </Button>
      </nav>
    </header>
  );
}
