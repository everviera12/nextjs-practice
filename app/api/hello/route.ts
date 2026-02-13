export async function GET() {
  return Response.json({
    message: "Hello world! 😁",
    radom_number: Math.random().toLocaleString(),
  });
}