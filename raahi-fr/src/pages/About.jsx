import React from 'react';
import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div className="relative min-h-screen font-sans mt-[120px] text-black overflow-hidden mb-9">

            {/* Main Content Overlay */}
            <div className="relative z-10 space-y-12">

                {/* Hero Section */}
                <section className="py-16 text-center">
                    <h1 className="text-5xl sm:text-6xl font-extrabold drop-shadow-xl">About Raahi</h1>
                    <p className="text-lg mt-4 text-gray-700 px-4 max-w-3xl mx-auto">
                        Discover stories, journeys, and experiences from explorers around the world.
                    </p>
                </section>


                <section className="md:flex items-center px-6 py-12 gap-10 backdrop-blur-lg bg-white/10 border border-white/10 shadow-2xl rounded-2xl mx-4">
                    <div className="flex-1 h-60 rounded-lg overflow-hidden">
                        <img
                            src="https://res.cloudinary.com/dmul3ttae/image/upload/v1751116223/raahi-logo_gynsvt.png"
                            alt="Story"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-black mb-4">Our Story</h2>
                        <p className="text-black leading-relaxed">
                            Founded in 2025, Raahi began as a passion project by a group of friends who loved traveling, journaling, and sharing experiences.
                            We noticed a lack of personalized, trustworthy travel content — so we created a platform where real travelers could voice their unique adventures.
                        </p>
                    </div>
                </section>



                {/* Our Mission */}
                <section className="md:flex items-center px-6 py-12 gap-10 backdrop-blur-lg bg-white/10 border border-white/10 shadow-2xl rounded-2xl mx-4">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-black mb-4">Our Mission</h2>
                        <p className="text-black mb-6 leading-relaxed">
                            At Raahi, we aim to empower wanderers to explore the world and share their stories through beautiful, insightful travel blogs.
                            Our mission is to connect people through experiences, culture, and storytelling — making travel more than just a destination.
                        </p>
                    </div>
                    <div className="flex-1 h-60 rounded-lg overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                            alt="Mission"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>

                {/* Our Story */}


                {/* Our Values */}
                <section className="backdrop-blur-lg bg-white/10 border border-white/10 shadow-2xl px-6 py-16 text-center rounded-2xl mx-4">
                    <h2 className="text-3xl font-bold text-black mb-10">Our Values</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
                        {[
                            { title: 'Inspiration', desc: 'Fueling wanderlust through honest stories and stunning visuals.' },
                            { title: 'Authenticity', desc: 'We believe in real voices and real experiences.' },
                            { title: 'Practicality', desc: 'Offering useful, actionable tips for fellow travelers.' },
                            { title: 'Connection', desc: 'Building a global community of storytellers and explorers.' },
                            { title: 'Respect', desc: 'Honoring cultures, places, and people with empathy and care.' },
                            { title: 'Community', desc: 'Empowering creators and connecting readers around shared journeys.' }
                        ].map(({ title, desc }) => (
                            <div key={title} className="bg-blue-900/80 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg hover:scale-105 transition-transform">
                                <h3 className="text-xl font-semibold text-blue-200">{title}</h3>
                                <p className="text-white mt-2 text-sm">{desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* How We're Different */}
                <section className="px-6 py-16 backdrop-blur-lg bg-white/10 border border-white/10 shadow-2xl rounded-2xl mx-4">
                    <h2 className="text-3xl font-bold text-center text-black mb-8">What Makes Us Unique</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
                        {[
                            {
                                title: 'Quality Content',
                                desc: 'Every blog is curated with care, authenticity, and depth.'
                            },
                            {
                                title: 'Unique Branding',
                                desc: 'Raahi is not just a site — it’s an identity for those who seek and share.'
                            },
                            {
                                title: 'Audience Engagement',
                                desc: 'We bridge bloggers and readers through meaningful stories and comments.'
                            },
                            {
                                title: 'Trust & Safety',
                                desc: 'We ensure your voice is protected and your data is secure.'
                            }
                        ].map(({ title, desc }) => (
                            <div key={title} className="bg-blue-900/80 backdrop-blur-md p-5 rounded-lg border border-white/10 shadow hover:shadow-xl">
                                <h4 className="text-lg font-semibold text-blue-200">{title}</h4>
                                <p className="text-sm mt-2 text-white">{desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center py-12 backdrop-blur-lg bg-white/10 border border-white/10 shadow-2xl rounded-2xl mx-4">
                    <h2 className="text-4xl font-extrabold text-black mb-6">Become a Part of Raahi</h2>
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
};

export default AboutPage;