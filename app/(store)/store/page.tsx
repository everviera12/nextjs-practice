import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

export default function StorePage() {
    return (
        /** 
         * Suspense works only when envolve a async component, example if we need fetch our product form API
         * @docs https://nextjs.org/docs/app/api-reference/file-conventions/loading
         * 
         * Fakestore api for pracitce 
         * @api https://fakestoreapi.com/docs
        **/

        <Suspense fallback={<Loading />}>
            <div className="h-screen p-6 ">
                <h1 className="mt-6 font-bold text-white">Welcome to my store Page!</h1>
                <Link href={'/checkout'}>Go to checkout page! →</Link>
            </div>
        </Suspense>

    );
}