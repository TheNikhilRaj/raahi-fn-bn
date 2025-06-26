import BlogForm from "@/components/PostForm";

export default function PostBlog() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-start pt-[180px] px-4">
            <div className="w-full max-w-7xl mb-[50px]">
                <h1 className="mb-6 tracking-tighter text-4xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-6xl">
                    Post A Blog
                </h1>
                <BlogForm />
            </div>
        </div>
    );
}
