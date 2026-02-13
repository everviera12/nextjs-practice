import { TrendingFlatRounded } from "@mui/icons-material";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="h-screen max-w-7xl p-10 mx-auto space-y-6">
      <Link href={"/"} className="underline text-white flex gap-2 items-center">
        <TrendingFlatRounded className="rotate-180" fontSize="medium" />
        <span className="">Back to home</span>
      </Link>

      <h1 className="mt-6 font-bold text-white">Page Not Found</h1>
    </div>
  );
}
