export default function BlogSectionLoading() {
    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
                <div key={i} className="overflow-hidden shadow-lg bg-gray-50 border border-gray-600 p-4">
                    <div className="animate-pulse">
                        <div className="h-3 mb-10 bg-gray-700 rounded w-40"></div>

                        <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>

                        <div className="mt-6 flex items-center space-x-3">
                            <div className="h-3 bg-gray-700 rounded w-1/4"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}