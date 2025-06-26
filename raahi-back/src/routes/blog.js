import express from "express";
import multer from "multer";
import {
    createBlog,
    getLatestBlogs,
    getBlogsByUser
} from "../controllers/blog.js";

const router = express.Router();

const storage = multer.memoryStorage(); // keeps image in memory for streaming
const upload = multer({ storage });

router.post("/post", upload.single("image"), createBlog);
router.get("/latest", getLatestBlogs);
router.get("/:userId", getBlogsByUser);



export default router;
