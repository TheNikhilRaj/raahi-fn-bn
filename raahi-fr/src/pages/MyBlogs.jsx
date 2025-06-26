// pages/MyBlogs.jsx
import React, { useEffect, useState } from 'react';
import MultiCard from '@/components/ui/card/card01';
import { useUser } from '@clerk/clerk-react';
import { getBlogsByUser } from '@/util/api';

function MyBlogs() {
  const { user } = useUser();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ loading state

  useEffect(() => {
    if (user?.id) {
      setLoading(true);
      getBlogsByUser(user.id)
        .then(setBlogs)
        .finally(() => setLoading(false));
    }
  }, [user]);

  // Convert blogs to the shape expected by MultiCard
  const cards = blogs.map((blog) => ({
    image: blog.image,
    title: blog.title,
    subtitle: blog.subtitle,
    description: blog.description,
    link: `/blog/${blog._id}`,
  }));

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-[180px] px-4 mb-9">
      <h1 className="mb-12 mt-2 tracking-tighter text-4xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-6xl">
        My Blogs
      </h1>

      {loading ? (
        <div className="text-zinc-500 text-lg mt-10">Loading your blogs...</div>
      ) : blogs.length === 0 ? (
        <div className="text-zinc-500 text-lg mt-10">No blogs found.</div>
      ) : (
        <MultiCard cards={cards} />
      )}
    </div>
  );
}

export default MyBlogs;
