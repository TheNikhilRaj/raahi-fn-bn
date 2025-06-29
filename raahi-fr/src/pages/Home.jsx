// src/pages/Home.jsx
import CardGrid from "@/components/ui/CardGrid";
import Hero from "@/components/Hero";
import ScrollRevealingImage from "@/components/ui/scrollingimg";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col justify-center pt-[150px] max-w-full">
            {/* <div className="overflow-hidden max-h-[700px] min-w-full">
                <img
                    src="/hello.png"
                    alt="Hello"
                    className="w-full object-cover"
                />
            </div> */}
            <ScrollRevealingImage />
            <Hero />
            <CardGrid />



            <div className="my-5">
                <section className="text-center py-12 backdrop-blur-lg bg-white/10 border border-white/10 shadow-2xl rounded-2xl mx-4">
                    <h2 className="text-4xl font-extrabold text-black mb-6">Start Blogging, Become a Raahi</h2>
                    <p className="text-gray-700 mb-8 px-4 max-w-xl mx-auto">
                        Whether you’re an avid traveler, a weekend wanderer, or a storyteller at heart — share your journey with the world through Raahi.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link
                            to="/find"
                            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold text-white"
                        >
                            Explore Blogs
                        </Link>

                        <Link
                            to="/post"
                            className="bg-gray-200 text-black hover:bg-gray-300 px-6 py-3 rounded-full font-semibold"
                        >
                            Start Blogging
                        </Link>
                    </div>
                </section>
            </div>


        </div>
    );
}
