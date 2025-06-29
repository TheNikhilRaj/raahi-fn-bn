import React, { useState, useEffect } from "react";
import { Country, State } from "country-state-city";
import { postBlog } from "@/util/api";
import { useUser } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function BlogForm() {
    const { user } = useUser();

    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);

    const [info, setInfo] = useState({
        title: "",
        subtitle: "",
        description: "",
        liked: "",
        pros: "",
        cons: "",
        suggestions: "",
    });

    const [imageFile, setImageFile] = useState(null);
    const [loading, setLoading] = useState(false);



    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setInfo((prev) => ({ ...prev, [name]: value }));
    // };





    const handleChange = (e) => {
        const { name, value } = e.target;
        let finalValue = value;

        if (name === "description") {
            finalValue = value
                .replace(/[^\p{L}\p{N}\p{P}\p{Z}\p{Emoji}]/gu, "")
                .slice(0, 1000);
        } else {
            finalValue = value
                .replace(/[^\p{L}\p{N}\p{P}\p{Z}\p{Emoji}]/gu, "")
                .slice(0, 500);
        }

        setInfo((prev) => ({
            ...prev,
            [name]: finalValue,
        }));
    };

    useEffect(() => {
        setCountries(Country.getAllCountries());
    }, []);

    useEffect(() => {
        if (selectedCountry) {
            setStates(State.getStatesOfCountry(selectedCountry));
            setSelectedState("");
        }
    }, [selectedCountry]);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) {
            alert("You must be logged in to submit a blog.");
            return;
        }

        setLoading(true);
        const formData = new FormData();

        Object.entries(info).forEach(([key, value]) => {
            formData.append(key, value);
        });

        formData.append("country", selectedCountry);
        formData.append("state", selectedState);
        formData.append("userId", user.id);

        if (imageFile) {
            formData.append("image", imageFile);
        }

        try {
            await postBlog(formData);
            toast.success("✅ Blog posted successfully!");
            setTimeout(() => navigate("/myblog"), 1500);
        } catch (error) {
            console.error("Blog post failed:", error);
            toast.error(error.error || "❌ Blog submission failed.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="max-w-6xl flex flex-col items-start bg-[#aaaaaa]/30 backdrop-blur-sm border p-4 rounded shadow space-y-3 mx-auto z-10">

                <div className="w-full">
                    <label htmlFor="title" className="block mb-2 font-medium">Enter Title:</label>
                    <input type="text" name="title" value={info.title} onChange={handleChange} className="border border-gray-300 p-2 rounded w-full" placeholder="Title" required />
                </div>

                <div className="w-full">
                    <label htmlFor="subtitle" className="block mb-2 font-medium">Enter Subtitle:</label>
                    <input type="text" name="subtitle" value={info.subtitle} onChange={handleChange} className="border border-gray-300 p-2 rounded w-full" placeholder="Subtitle" required />
                </div>

                <div className="w-full">
                    <label htmlFor="description" className="block mb-2 font-medium">Blog Description:</label>
                    <textarea name="description" value={info.description} onChange={handleChange} rows="4" placeholder="Enter your blog description..." className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>

                <div className="w-full">
                    <label htmlFor="liked" className="block mb-2 font-medium">What did you like about the place?</label>
                    <textarea name="liked" value={info.liked} onChange={handleChange} rows="3" placeholder="Share what you liked..." className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>

                <div className="w-full">
                    <label htmlFor="pros" className="block mb-2 font-medium">Pros of the place:</label>
                    <textarea name="pros" value={info.pros} onChange={handleChange} rows="3" placeholder="Mention the pros..." className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500" required />
                </div>

                <div className="w-full">
                    <label htmlFor="cons" className="block mb-2 font-medium">Cons of the place:</label>
                    <textarea name="cons" value={info.cons} onChange={handleChange} rows="3" placeholder="Mention the cons..." className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500" required />
                </div>

                <div className="w-full">
                    <label htmlFor="suggestions" className="block mb-2 font-medium">Suggestions or other places to visit:</label>
                    <textarea name="suggestions" value={info.suggestions} onChange={handleChange} rows="3" placeholder="Suggest similar or better places..." className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                </div>

                <div className="w-full">
                    <label htmlFor="country" className="block mb-2 font-medium">Select Country:</label>
                    <select id="country" name="country" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className="border border-gray-300 p-2 rounded w-full" required>
                        <option value="">-- Select Country --</option>
                        {countries.map((country) => (
                            <option key={country.isoCode} value={country.isoCode}>{country.name}</option>
                        ))}
                    </select>
                </div>

                <div className="w-full">
                    <label htmlFor="state" className="block mb-2 font-medium">Select State:</label>
                    <select id="state" name="state" value={selectedState} onChange={(e) => setSelectedState(e.target.value)} className="border border-gray-300 p-2 rounded w-full" disabled={!selectedCountry} required>
                        <option value="">-- Select State --</option>
                        {states.map((state) => (
                            <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
                        ))}
                    </select>
                </div>

                <div className="w-full">
                    <label htmlFor="image" className="block mb-2 font-medium">Upload A Portrait Image (JPG, JPEG, PNG):</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/jpeg, image/png, image/jpg"
                        onChange={(e) => setImageFile(e.target.files[0])}
                        className="block w-full border border-gray-300 p-2 rounded bg-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        required
                    />
                </div>

                <div className="mt-6">
                    <button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded shadow transition-all duration-200">
                        {loading ? "Posting..." : "Post"}
                    </button>
                </div>
            </div>
        </form>
    );
}
