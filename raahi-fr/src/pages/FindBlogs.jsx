import { useState } from "react";

import SearchBar from "@/components/SearchBar"
import CardGrid from "@/components/ui/CardGrid"
import MultiCard from "@/components/ui/card/card01";

export default function FindBlogs() {
    const [blogs, setBlogs] = useState([]);

    const cards = blogs.map((blog) => ({
        image: blog.image,
        title: blog.title,
        subtitle: blog.subtitle,
        description: blog.description,
        link: `/blog/${blog._id}`,
    }));

    return (
        <div className="min-h-screen flex flex-col pt-[150px] mt-5">
            <div className="mb-6 flex flex-col items-center">
                <h1 className="mb-6 mt-4 tracking-tighter text-4xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-6xl">
                    Find Blogs
                </h1>
                <SearchBar onSearchResults={setBlogs} />
            </div>
            <div className="flex justify-center">
                <MultiCard cards={cards} />
            </div>


            <div>
                <CardGrid />
            </div>
        </div>

    );
}
