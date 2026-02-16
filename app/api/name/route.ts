import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Users endpoint",
    users: [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Sam Smith" },
      { id: 3, name: "Alice Johnson" },
      { id: 4, name: "Zoe Brux" },
      { id: 5, name: "Liv Morgan" },
    ],
  });
}

export async function POST(request: Request) {
  const { id, name } = await request.json();

  return NextResponse.json({
    ok: true,
    message: "User created successfully",
    user: {
      id: id ?? Math.floor(Math.random() * 1000) + 1,
      name: name || "User from BACKEND",
    },
  });
}