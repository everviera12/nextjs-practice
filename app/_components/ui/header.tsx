"use client";
import { usePathname } from "next/navigation";

import { useAuthContext } from "../auth-context";

import { Breadcrumbs, Button, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import { useMemo } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Our Store", href: "/store" },
];

const isLoggedInTrue = "bg-green-100! text-green-900!";
const isLoggedInFalse = "bg-sky-100! text-sky-900!";

export default function Header() {
  const path = usePathname();
  const { handleLogout, handleLogin, isLoggedIn } = useAuthContext();

  const crumbs = useMemo(() => {
    if (!path || path === "/") return [];
    const parts = path.split("/").filter(Boolean);
    return parts.map((segment, idx) => ({
      name: segment,
      href: "/" + parts.slice(0, idx + 1).join("/"),
    }));
  }, [path]);

  console.log(crumbs);

  return (
    <header className="max-w-7xl py-3 px-10 mx-auto grid gap-3">
      <nav className="flex items-center justify-between">
        <ul className="flex gap-3">
          {NAV_LINKS.map((li, idx) => (
            <li key={idx}>
              <Link href={li.href}>{li.label}</Link>
            </li>
          ))}
        </ul>

        <Button
          className={`font-bold! ${isLoggedIn ? isLoggedInTrue : isLoggedInFalse}`}
          onClick={() => (isLoggedIn ? handleLogout() : handleLogin("Admin"))}
          variant="contained"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </Button>
      </nav>

      <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" className="text-white!" />}>
        <Link
          underline="hover"
          color="info"
          href="/"
          className="flex items-center cursor-pointer"
        >
          <HomeIcon fontSize="medium" />
        </Link>

        {crumbs.map((crumb, idx) => (
          <Link
            key={idx}
            underline="hover"
            color="info"
            href={crumb.href}
            className="flex items-center gap-1 cursor-pointer"
          >
            {crumb.name.toUpperCase()}
          </Link>
        ))}
      </Breadcrumbs>
    </header>
  );
}
