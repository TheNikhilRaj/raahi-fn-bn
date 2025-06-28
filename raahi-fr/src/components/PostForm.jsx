import React, { useState, useEffect } from "react";
import { Country, State } from "country-state-city";
import { postBlog } from "@/util/api";
import { useUser } from "@clerk/clerk-react";

export default function BlogForm() {
    const { user } = useUser(); // Clerk user object

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
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo((prev) => ({ ...prev, [name]: value }));
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








    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) {
            alert("You must be logged in to submit a blog.");
            return;
        }

        setLoading(true);
        setMessage("");

        const formData = new FormData();

        // Add text fields
        Object.entries(info).forEach(([key, value]) => {
            formData.append(key, value);
        });

        formData.append("country", selectedCountry);
        formData.append("state", selectedState);
        formData.append("userId", user.id); // Clerk user ID

        console.log(formData)
        if (imageFile) {
            formData.append("image", imageFile); // Matches multer's .single("image")
        }

        try {
            const response = await postBlog(formData);
            setMessage("✅ Blog posted successfully!");
            console.log("Response:", response);
        } catch (error) {
            console.error("Blog post failed:", error);
            setMessage(error.error || "❌ Blog submission failed.");
        } finally {
            setLoading(false);
        }
    };














    return (
        <form onSubmit={handleSubmit}>
            <div className="max-w-6xl flex flex-col items-start bg-[#aaaaaa]/30 backdrop-blur-sm border p-4 rounded shadow space-y-3 mx-auto z-10">

                {/* Title */}
                <div className="w-full">
                    <label htmlFor="title" className="block mb-2 font-medium">Enter Title:</label>
                    <input type="text" name="title" value={info.title} onChange={handleChange} className="border border-gray-300 p-2 rounded w-full" placeholder="Title" />
                </div>

                {/* Subtitle */}
                <div className="w-full">
                    <label htmlFor="subtitle" className="block mb-2 font-medium">Enter Subtitle:</label>
                    <input type="text" name="subtitle" value={info.subtitle} onChange={handleChange} className="border border-gray-300 p-2 rounded w-full" placeholder="Subtitle" />
                </div>

                {/* Description */}
                <div className="w-full">
                    <label htmlFor="description" className="block mb-2 font-medium">Blog Description:</label>
                    <textarea name="description" value={info.description} onChange={handleChange} rows="4" placeholder="Enter your blog description..." className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                {/* Liked */}
                <div className="w-full">
                    <label htmlFor="liked" className="block mb-2 font-medium">What did you like about the place?</label>
                    <textarea name="liked" value={info.liked} onChange={handleChange} rows="3" placeholder="Share what you liked..." className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                {/* Pros */}
                <div className="w-full">
                    <label htmlFor="pros" className="block mb-2 font-medium">Pros of the place:</label>
                    <textarea name="pros" value={info.pros} onChange={handleChange} rows="3" placeholder="Mention the pros..." className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>

                {/* Cons */}
                <div className="w-full">
                    <label htmlFor="cons" className="block mb-2 font-medium">Cons of the place:</label>
                    <textarea name="cons" value={info.cons} onChange={handleChange} rows="3" placeholder="Mention the cons..." className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>

                {/* Suggestions */}
                <div className="w-full">
                    <label htmlFor="suggestions" className="block mb-2 font-medium">Suggestions or other places to visit:</label>
                    <textarea name="suggestions" value={info.suggestions} onChange={handleChange} rows="3" placeholder="Suggest similar or better places..." className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>

                {/* Country */}
                <div className="w-full">
                    <label htmlFor="country" className="block mb-2 font-medium">Select Country:</label>
                    <select id="country" name="country" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className="border border-gray-300 p-2 rounded w-full">
                        <option value="">-- Select Country --</option>
                        {countries.map((country) => (
                            <option key={country.isoCode} value={country.isoCode}>{country.name}</option>
                        ))}
                    </select>
                </div>

                {/* State */}
                <div className="w-full">
                    <label htmlFor="state" className="block mb-2 font-medium">Select State:</label>
                    <select id="state" name="state" value={selectedState} onChange={(e) => setSelectedState(e.target.value)} className="border border-gray-300 p-2 rounded w-full" disabled={!selectedCountry}>
                        <option value="">-- Select State --</option>
                        {states.map((state) => (
                            <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
                        ))}
                    </select>
                </div>

                {/* Image Upload */}
                <div className="w-full">
                    <label htmlFor="image" className="block mb-2 font-medium">Upload A Potrait Image (JPG, JPEG, PNG):</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/jpeg, image/png, image/jpg"
                        onChange={(e) => setImageFile(e.target.files[0])}
                        className="block w-full border border-gray-300 p-2 rounded bg-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        required
                    />
                </div>

                {/* Submit */}
                <div className="mt-6">
                    <button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded shadow transition-all duration-200">
                        {loading ? "Posting..." : "Post"}
                    </button>
                </div>

                {message && <p className="mt-2 text-sm">{message}</p>}
            </div>
        </form>
    );
}
