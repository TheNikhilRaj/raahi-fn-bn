import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
        },
        description: {
            type: String,
            required: true,
        },
        liked: {
            type: String,
        },
        pros: {
            type: String,
        },
        cons: {
            type: String,
        },
        suggestions: {
            type: String,
        },
        country: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: false,
        },
        image: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);
