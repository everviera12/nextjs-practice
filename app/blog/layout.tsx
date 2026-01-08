export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <span className="p-6 font-semibold uppercase">Tag from BlogLayout component 🖌️</span>
            {children}
        </section>
    );
}