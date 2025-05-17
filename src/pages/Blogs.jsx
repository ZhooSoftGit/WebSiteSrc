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
  },
  {
    id: "2",
    title: "Mastering Cloud Solutions: AWS vs Azure",
    date: "2025-04-22",
    author: "John Smith",
    excerpt: "Choosing the right cloud platform is crucial for business success. This post provides a comprehensive comparison of AWS and Azure, helping you make an informed decision...",
    category: "Cloud Computing",
    imageUrl: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "3",
    title: "The Rise of Digital Transformation in SMEs",
    date: "2025-03-15",
    author: "Alice Brown",
    excerpt: "Digital transformation is no longer just for large enterprises. Small and Medium Enterprises (SMEs) are increasingly adopting digital tools to enhance efficiency and competitiveness...",
    category: "Digital Transformation",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c7DA?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpZ2l0YWwlMjB0cmFuc2Zvcm1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
];

const Blogs = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">Our Blog</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Stay updated with the latest insights, trends, and news from Zhoosoft and the technology industry.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden card-hover"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <img src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-xs font-semibold text-blue-600 uppercase">{blog.category}</span>
                <h2 className="text-xl font-bold text-gray-800 mt-2 mb-3 h-16 overflow-hidden">{blog.title}</h2>
                <p className="text-sm text-gray-600 mb-1">By {blog.author} on {blog.date}</p>
                <p className="text-gray-700 text-sm mb-4 h-20 overflow-hidden">{blog.excerpt}</p>
                <Link to={`/blogs/${blog.id}`}>
                  <Button variant="outline" className="w-full">
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