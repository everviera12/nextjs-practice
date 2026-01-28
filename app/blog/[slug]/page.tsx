import { Suspense } from "react";
import BlogSlugLoading from "./loading";

async function Content({ slug }: { slug: string }) {
    const res = await fetch(`https://api.vercel.app/blog/${slug}`)
    const post = await res.json()

    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </article>
    )
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    return (
        <Suspense fallback={<BlogSlugLoading />}>
            <div className="px-10">
                <h1 className="mt-6 font-bold text-white"> Blog Post </h1>
                <Content slug={slug} />
            </div>
        </Suspense>
    );
}