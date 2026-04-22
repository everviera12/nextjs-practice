import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="h-screen max-w-7xl p-10 mx-auto space-y-6">
      <Link href={"/"} className="underline text-white flex gap-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
        <span className="">Back to home</span>
      </Link>
      <h1 className="mt-6 font-bold text-white">Page Not Found</h1>
    </div>
  );
}
