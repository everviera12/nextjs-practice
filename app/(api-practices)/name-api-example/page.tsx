"use client";

import { useState } from "react";
import { Button, Link } from "@mui/material";
import { User } from "@/app/api/name/_types";
import { Toaster, sileo } from "sileo";

const API_ENDPOINTS = [
  { label: "Hello API", href: "/api/hello" },
  { label: "Name API", href: "/api/name" },
];

/** Alarm component library
 * @docs https://sileo.aaryan.design/docs/api
 * 
 */

export default function NameApiExample() {
  const [data, setData] = useState<User | undefined>();

  const createUser = async (name: string) => {
    try {
      sileo.info({
        title: "Creating user",
        description: "Sending request...",
      });

      const response = await fetch("/api/name", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      const result = await response.json();

      if (!response.ok) {
        sileo.error({
          title: "Error",
          description: result.message || "Failed to create user",
        });
        return;
      }

      setData(result);
      console.log("result:", result);

      sileo.success({
        title: "Success",
        description: `User ${result.user.name} created`,
      });
    } catch (err) {
      console.error(err);
      sileo.error({
        title: "Network error",
        description: "Could not reach server",
      });
    }
  };

  console.log(data);

  return (
    <div className="max-w-7xl px-10 mx-auto">
      <h1>Code examples</h1>

      <Button onClick={() => createUser("Ever")} variant="contained">
        {data ? "Check console to see data" : "Create User"}
      </Button>

      {API_ENDPOINTS.map((api, idx) => (
        <ul key={idx}>
          <li>
            <Link href={api.href} underline="hover" color="info">
              {api.label}
            </Link>
          </li>
        </ul>
      ))}

      {/* Contenedor global de toasts */}
      <Toaster
        position="top-center"
        options={{
          fill: "#171717",
          styles: { description: "text-white/75!" },
        }}
      />
    </div>
  );
}
