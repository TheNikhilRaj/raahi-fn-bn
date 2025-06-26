import React from 'react';
import { Link } from "react-router-dom";


const AboutPage = () => {
    return (
        <div className="relative min-h-screen font-sans mt-[120px] text-black overflow-hidden mb-9">

            {/* Main Content Overlay */}
            <div className="relative z-10 space-y-12">

                {/* Hero Section */}
                <section className="py-16 text-center">
                    <h1 className="text-5xl sm:text-6xl font-extrabold drop-shadow-xl">About Us</h1>
                </section>

                {/* Our Mission */}
                <section className="md:flex items-center px-6 py-12 gap-10 backdrop-blur-lg bg-white/10 border border-white/10 shadow-2xl rounded-2xl mx-4">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-black mb-4">Our Mission</h2>
                        <p className="text-black mb-6 leading-relaxed">
                            Through travel, we connect people to positive experiences enabling them to see the world with confidence...
                        </p>

                    </div>
                    <div className="flex-1 h-60 rounded-lg overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28"
                            alt="Mission"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>

                {/* Our Story */}
                <section className="md:flex items-center px-6 py-12 gap-10 backdrop-blur-lg bg-white/10 border border-white/10 shadow-2xl rounded-2xl mx-4">
                    <div className="flex-1 h-60 rounded-lg overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d"
                            alt="Story"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-black mb-4">Our Story</h2>
                        <p className="text-black leading-relaxed">
                            Founded in 2025, Raahi was created by a group of passionate people to describe their real experiences at wonderful places and stay at stunning locations.
                        </p>
                    </div>
                </section>

                {/* Our Values */}
                <section className="backdrop-blur-lg bg-white/10 border border-white/10 shadow-2xl px-6 py-16 text-center rounded-2xl mx-4">
                    <h2 className="text-3xl font-bold text-black mb-10">Our Values</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
                        {['Inspiration', 'Authenticity', 'Practicality', 'Connection', 'Respect', 'Community'].map((value) => (
                            <div key={value} className="bg-blue-900/80 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg hover:scale-105 transition-transform">
                                <h3 className="text-xl font-semibold text-blue-200">{value}</h3>
                                <p className="text-white mt-2 text-sm">Short description for {value.toLowerCase()}...</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* How We're Different */}
                <section className="px-6 py-16 backdrop-blur-lg bg-white/10 border border-white/10 shadow-2xl rounded-2xl mx-4">
                    <h2 className="text-3xl font-bold text-center text-black mb-8">How We're Different</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
                        {[
                            'Quality Content',
                            'Unique Branding',
                            'Audience Engagement',
                            'Trust & Safety Framework'
                        ].map((item) => (
                            <div key={item} className="bg-blue-900/80 backdrop-blur-md p-5 rounded-lg border border-white/10 shadow hover:shadow-xl">
                                <h4 className="text-lg font-semibold text-blue-200">{item}</h4>
                                <p className="text-sm mt-2 text-white">We are proud to support {item.toLowerCase()} in all services we offer.</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center py-12 backdrop-blur-lg bg-white/10 border border-white/10 shadow-2xl rounded-2xl mx-4">
                    <h2 className="text-4xl font-extrabold text-black mb-6">Join Our Community!!!</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link
                            to="/find"
                            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold text-white"
                        >
                            Find Blog
                        </Link>

                        <Link
                            to="/post"
                            className="bg-gray-200 text-black hover:bg-gray-300 px-6 py-3 rounded-full font-semibold"
                        >
                            Post Blog
                        </Link>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default AboutPage;
