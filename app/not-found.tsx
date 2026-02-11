import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="h-screen p-6 space-y-6">
      <Link href={"/"} className="underline text-white">
        Back to home
      </Link>

      <h1 className="mt-6 font-bold text-white">Page Not Found</h1>
    </div>
  );
}
