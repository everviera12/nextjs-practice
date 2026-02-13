import Link from "next/link";
import { BlogProps } from "./_types/blog-types";

export default async function BlogPage() {
    const res = await fetch(`https://api.vercel.app/blog`)
    const posts = await res.json()

    return (
        <div className="h-screen p-6 ">
            <h1 className="mt-6 font-bold text-white">Welcome to my Blog<span className="text-yellow-500">!</span></h1>

            <div className="grid py-6 gap-6 lg:grid-cols-3">
                {posts.map((post: BlogProps) => (
                    <article key={post.id} className="bg-white flex flex-col justify-between h-52 text-black px-4 py-6">
                        <div>
                            <span className="text-xs">{post.date}</span>
                            <h2 className="text-2xl mt-2"> {post.title} </h2>
                        </div>
                        <Link href={`/blog/${post.id}`} className="italic text-sm flex items-center gap-3">
                            {post.author}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
}