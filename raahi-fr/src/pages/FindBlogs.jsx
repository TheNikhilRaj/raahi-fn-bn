import SearchBar from "@/components/SearchBar"
import CardGrid from "@/components/ui/CardGrid"


export default function FindBlogs() {
    return (
        <div className="min-h-screen flex flex-col pt-[150px] mt-5">
            <div className="mb-6 flex flex-col items-center">
                <h1 className="mb-6 mt-4 tracking-tighter text-4xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-6xl">
                    Find Blogs
                </h1>
                <SearchBar />
            </div>

            <div>
                <CardGrid />
            </div>
        </div>

    );
}
