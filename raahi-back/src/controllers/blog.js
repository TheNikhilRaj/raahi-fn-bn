import Blog from "../models/blog.js";
import cloudinary from "../utils/cloudinary.js";
import streamifier from "streamifier";

export const createBlog = async (req, res) => {
    try {
        const {
            title,
            subtitle,
            description,
            liked,
            pros,
            cons,
            suggestions,
            country,
            state,
            userId,
        } = req.body;

        let imageUrl = "";

        // Handle Cloudinary image upload via streamifier
        if (req.file) {
            const streamUpload = (fileBuffer) => {
                return new Promise((resolve, reject) => {
                    const stream = cloudinary.uploader.upload_stream(
                        { folder: "blogs" },
                        (error, result) => {
                            if (result) resolve(result);
                            else reject(error);
                        }
                    );
                    streamifier.createReadStream(fileBuffer).pipe(stream);
                });
            };

            const result = await streamUpload(req.file.buffer);
            imageUrl = result.secure_url;
        }

        const newBlog = new Blog({
            userId,
            title,
            subtitle,
            description,
            liked,
            pros,
            cons,
            suggestions,
            country,
            state,
            image: imageUrl,
        });

        await newBlog.save();
        res.status(201).json({ message: "Blog created", blog: newBlog });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong." });
    }
};





export const getLatestBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find()
            .sort({ createdAt: -1 })
            .limit(8);

        res.status(200).json(blogs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch latest blogs" });
    }
};





// GET /blogs/user/:userId
export const getBlogsByUser = async (req, res) => {
    try {
        const { userId } = req.params;

        const blogs = await Blog.find({ userId }).sort({ createdAt: -1 }); // Latest first

        res.status(200).json({ success: true, blogs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
