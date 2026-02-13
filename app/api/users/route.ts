import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return Response.json({
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

  return Response.json({ message: "Method not allowed", status: 405 });
}
