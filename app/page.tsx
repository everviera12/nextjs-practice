import { Link } from "@mui/material";

const API_ENDPOINTS = [
  { label: "Hello API", href: '/api/hello' },
  { label: "Users API", href: "/api/users" },
];

export default function Home() {
  return (
    <div className="max-w-7xl px-10 mx-auto">
      <h1>Code examples</h1>

      {API_ENDPOINTS.map((api, idx) => (
        <ul key={idx}>
          <li>
            <Link href={api.href} underline="hover" color="info">
              {api.label}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}
