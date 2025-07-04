import { Link } from "react-router-dom";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
    useUser
} from "@clerk/clerk-react";

export default function Header() {
    const { isSignedIn } = useUser();

    return (
        <header className="h-[150px] fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 shadow-lg">
            <div className="max-w-8xl ml-[70px] px-3 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link to="/">
                    <img
                        src="/Raahi-Logo.png"
                        alt="Raahi logo"
                        className="h-[150px] object-cover drop-shadow-[0_0_7px_rgba(0,0,0,0.5)] hover:drop-shadow-[0_0_10px_rgba(200,0,128,0.5)] transition duration-300"
                    />
                </Link>

                <nav className="flex items-center justify-end gap-6 px-4 py-2 text-gray-700 text-lg font-semibold font-sans">
                    <Link
                        to="/find"
                        className="hover:text-indigo-600 hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.4)] transition duration-150"
                    >
                        Find Blogs
                    </Link>

                    {isSignedIn && (
                        <>
                            <Link
                                to="/post"
                                className="hover:text-indigo-600 hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.4)] transition duration-150"
                            >
                                Post Blog
                            </Link>
                            <Link
                                to="/myblog"
                                className="hover:text-indigo-600 hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.4)] transition duration-150"
                            >
                                My Blogs
                            </Link>
                        </>
                    )}

                    <Link
                        to="/about"
                        className="hover:text-indigo-600 hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.4)] transition duration-150"
                    >
                        About Us
                    </Link>

                    <SignedOut>
                        <SignInButton mode="modal">
                            <button className="px-3 py-1.5 bg-indigo-600/80 backdrop:blur-md text-white rounded-lg shadow hover:bg-indigo-700 hover:scale-105 transition duration-150">
                                Sign In
                            </button>
                        </SignInButton>
                    </SignedOut>

                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                </nav>

            </div>
        </header>
    );
}
