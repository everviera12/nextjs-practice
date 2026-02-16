"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { useAuthContext } from "../../context/auth-context";

import { Breadcrumbs, Button, Link, Menu, MenuItem } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Our Store", href: "/store" },
  {
    label: "Api Examples",
    list: [
      { label: "Name example", href: "/name-api-example" },
    ],
  },
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
        <ul className="flex items-center gap-3">
          {NAV_LINKS.map((li, idx) => {
            if (li.href) {
              return (
                <li key={idx}>
                  <Link href={li.href}>{li.label}</Link>
                </li>
              );
            }

            if (li.list) {
              return (
                <li key={idx}>
                  <PopupState variant="popover" popupId={`popup-${idx}`}>
                    {(popupState) => (
                      <>
                        <Button variant="text" {...bindTrigger(popupState)}> 
                          {li.label}
                        </Button>

                        <Menu {...bindMenu(popupState)}>
                          {li.list.map((item, subIdx) => (
                            <MenuItem key={subIdx} onClick={popupState.close}>
                              <Link href={item.href} underline="none" className="w-full block">
                                {item.label}
                              </Link>
                            </MenuItem>
                          ))}
                        </Menu>
                      </>
                    )}
                  </PopupState>
                </li>
              );
            }

            return null;
          })}
        </ul>

        <Button
          className={`font-bold! ${isLoggedIn ? isLoggedInTrue : isLoggedInFalse}`}
          onClick={() => (isLoggedIn ? handleLogout() : handleLogin("Admin"))}
          variant="contained"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </Button>
      </nav>

      <Breadcrumbs
        aria-label="breadcrumb"
        separator={
          <NavigateNextIcon fontSize="small" className="text-white!" />
        }
      >
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
