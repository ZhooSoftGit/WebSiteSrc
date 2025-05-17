import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, User, Tag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const dummyBlogs = [
   {
    id: "1",
    title: "The Future of AI in Software Development",
    date: "2025-05-10",
    author: "Jane Doe",
    category: "AI & Machine Learning",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWklMjB0ZWNobm9sb2d5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="mb-4 text-lg">Artificial Intelligence (AI) is no longer a futuristic concept but a present-day reality reshaping various industries, and software development is no exception. The integration of AI into the software development lifecycle (SDLC) is paving the way for more efficient, intelligent, and automated processes.</p>
      
      <h2 class="text-2xl font-semibold my-4">Key AI Trends in Software Development</h2>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>AI-Powered Code Generation:</strong> Tools like GitHub Copilot are assisting developers by suggesting code snippets and even entire functions, speeding up development time.</li>
        <li><strong>Automated Testing:</strong> AI algorithms can generate test cases, perform smarter test execution, and identify bugs more effectively than traditional methods.</li>
        <li><strong>Intelligent Project Management:</strong> AI can help in predicting project timelines, resource allocation, and identifying potential risks early in the development cycle.</li>
        <li><strong>Enhanced Code Refactoring:</strong> AI tools can analyze codebases to suggest improvements, optimize performance, and ensure adherence to coding standards.</li>
        <li><strong>AI in DevOps:</strong> From automated deployments to predictive monitoring and anomaly detection, AI is making DevOps practices more robust and proactive.</li>
      </ul>

      <h2 class="text-2xl font-semibold my-4">The Impact on Developers</h2>
      <p class="mb-4 text-lg">While some fear AI might replace developers, the current trajectory suggests AI will augment human capabilities, freeing developers from repetitive tasks to focus on more complex problem-solving and innovation. It's crucial for developers to adapt and learn how to leverage these AI tools effectively.</p>
      
      <h2 class="text-2xl font-semibold my-4">Challenges and Considerations</h2>
      <p class="mb-4 text-lg">Despite the benefits, there are challenges such as the ethical implications of AI, the need for large datasets for training models, and the potential for AI to introduce new types of errors. Continuous learning and responsible development practices are key.</p>

      <p class="text-lg">The future of software development is intertwined with AI. Embracing these technologies will be crucial for businesses and developers aiming to stay competitive and innovative in the rapidly evolving tech landscape.</p>
    `
  },
  {
    id: "2",
    title: "Mastering Cloud Solutions: AWS vs Azure",
    date: "2025-04-22",
    author: "John Smith",
    category: "Cloud Computing",
    imageUrl: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=80",
    content: "<p class='mb-4 text-lg'>This is a detailed blog post about AWS vs Azure. Content to be added.</p>"
  },
  {
    id: "3",
    title: "The Rise of Digital Transformation in SMEs",
    date: "2025-03-15",
    author: "Alice Brown",
    category: "Digital Transformation",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c7DA?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpZ2l0YWwlMjB0cmFuc2Zvcm1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=80",
    content: "<p class='mb-4 text-lg'>This is a detailed blog post about digital transformation in SMEs. Content to be added.</p>"
  },
];

const BlogDetails = () => {
  const { blogId } = useParams();
  const blog = dummyBlogs.find(b => b.id === blogId);

  if (!blog) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-12 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Blog Post Not Found</h1>
        <p className="text-gray-600 mb-8">Sorry, the blog post you are looking for does not exist.</p>
        <Link to="/blogs">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blogs
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-xl"
      >
        <div className="mb-6">
          <Link to="/blogs">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blogs
            </Button>
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
        <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 space-x-4">
          <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> {blog.date}</span>
          <span className="flex items-center"><User className="h-4 w-4 mr-1" /> By {blog.author}</span>
          <span className="flex items-center"><Tag className="h-4 w-4 mr-1" /> {blog.category}</span>
        </div>
        
        <img src={blog.imageUrl} alt={blog.title} className="w-full h-auto max-h-[400px] object-cover rounded-lg mb-8 shadow-md" />

        <div className="prose prose-lg max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: blog.content }} />
        
      </motion.article>
    </div>
  );
};

export default BlogDetails;