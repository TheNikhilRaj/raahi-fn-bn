import axios from "axios";

export const API_BASE_URL = import.meta.env.VITE_API_URL;




export const postBlog = async (formData) => {
    try {
        const res = await axios.post(
            `${API_BASE_URL}/blogs/post`, // or use NEXT_PUBLIC if using Next.js
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        return res.data;
    } catch (error) {
        throw error.response?.data || { error: "Something went wrong." };
    }
};





export const fetchLatestBlogs = async () => {
    try {
        const res = await fetch(`${API_BASE_URL}/blogs/latest`);
        if (!res.ok) throw new Error("Failed to fetch latest blogs");
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("API Error:", error);
        return null;
    }
};




export const getBlogsByUser = async (userId) => {
    try {
        const res = await axios.get(`${API_BASE_URL}/blogs/${userId}`);
        return res.data.blogs;
    } catch (error) {
        console.error("Failed to fetch user blogs", error);
        return [];
    }
};