import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogDetails } from "@/util/api";

export default function BlogDetails() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            const data = await blogDetails(id);
            setBlog(data);
        };

        fetchBlog();
    }, [id]);

    if (!blog) return <div className="text-center mt-10">Loading...</div>;

    return (
        <div className="min-h-screen flex flex-col pt-[150px] mt-5">
            <img src={blog.image} alt={blog.title} className="w-full h-72 object-cover rounded mb-6" />
            <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
            <h2 className="text-xl text-gray-600 mb-4">{blog.subtitle}</h2>
            <p className="mb-6 text-gray-800">{blog.description}</p>

            <div className="space-y-2">
                <p><strong>What you liked:</strong> {blog.liked}</p>
                <p><strong>Pros:</strong> {blog.pros}</p>
                <p><strong>Cons:</strong> {blog.cons}</p>
                <p><strong>Suggestions:</strong> {blog.suggestions}</p>
                <p><strong>Location:</strong> {blog.state}, {blog.country}</p>
            </div>
        </div>
    );
}
