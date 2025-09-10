
    import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const dummyBlogs = [
  {
    id: "1",
    title: "The Future of AI in Software Development",
    date: "2025-05-10",
    author: "Jane Doe",
    excerpt: "Artificial Intelligence is rapidly transforming the landscape of software development. Discover the key trends and how AI is being leveraged to build smarter, more efficient applications...",
    category: "AI & Machine Learning",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWklMjB0ZWNobm9sb2d5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  }
];

const Blogs = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center text-teal-700">Our Blog</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Stay updated with the latest insights, trends, and news from Zhoosoft and the technology industry.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden card-hover border-l-4 border-teal-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <img src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-xs font-semibold text-teal-600 uppercase">{blog.category}</span>
                <h2 className="text-xl font-bold text-gray-800 mt-2 mb-3 h-16 overflow-hidden">{blog.title}</h2>
                <p className="text-sm text-gray-600 mb-1">By {blog.author} on {blog.date}</p>
                <p className="text-gray-700 text-sm mb-4 h-20 overflow-hidden">{blog.excerpt}</p>
                <Link to={`/blogs/${blog.id}`}>
                  <Button variant="outline" className="w-full text-teal-600 border-teal-600 hover:bg-teal-50">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </div>
  );
};

export default Blogs;
  