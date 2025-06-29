// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./util/RequireAuth";

import Home from "./pages/Home";
import FindBlogs from "./pages/FindBlogs";
import PostBlog from "./pages/PostBlog";
import MyBlogs from "./pages/MyBlogs";
import BlogDetails from "./pages/BlogDetails";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/animate-ui/backgrounds/particles";

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-hidden">
        {/* Global background */}
        <ParticlesBackground className="fixed inset-0 z-[-1] pointer-events-none" />


        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:id" element={<BlogDetails />} />

          <Route path="/post" element={
            <RequireAuth>
              <PostBlog />
            </RequireAuth>
          } />
          <Route path="/myblog" element={
            <RequireAuth>
              <MyBlogs />
            </RequireAuth>
          } />

          <Route path="/find" element={<FindBlogs />} />


          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
