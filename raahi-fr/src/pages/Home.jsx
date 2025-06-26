// src/pages/Home.jsx
import CardGrid from "@/components/ui/CardGrid";
import Hero from "@/components/Hero";
import ScrollRevealingImage from "@/components/ui/scrollingimg";

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

        </div>
    );
}
