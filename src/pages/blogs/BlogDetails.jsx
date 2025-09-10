
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
      <p class="mb-6 text-lg leading-relaxed text-gray-600">Artificial Intelligence (AI) is no longer a futuristic concept but a present-day reality reshaping various industries, and software development is no exception. The integration of AI into the software development lifecycle (SDLC) is paving the way for more efficient, intelligent, and automated processes. This evolution is not just about tools; it's about a fundamental shift in how we approach problem-solving, design, and execution in software engineering.</p>
      
      <h2 class="text-3xl font-bold my-6 text-gray-800 border-l-4 border-teal-500 pl-4">Key AI Trends in Software Development</h2>
      <p class="mb-6 text-lg leading-relaxed text-gray-600">The synergy between AI and software development is creating powerful new capabilities. Several key trends are emerging as frontrunners in this transformation:</p>
      <ul class="list-disc list-inside mb-6 space-y-4 text-lg text-gray-600">
        <li><strong>AI-Powered Code Generation:</strong> Tools like GitHub Copilot and Amazon CodeWhisperer are becoming indispensable for developers. They analyze context and suggest not just single lines but entire functions, drastically accelerating development time and reducing boilerplate code.</li>
        <li><strong>Automated and Intelligent Testing:</strong> AI algorithms are revolutionizing quality assurance. They can automatically generate comprehensive test cases, perform smarter, context-aware test execution, and predict which areas of the code are most at risk for bugs, leading to more robust applications.</li>
        <li><strong>Intelligent Project Management:</strong> AI is bringing predictive analytics to project management. By analyzing historical data, AI tools can forecast project timelines with greater accuracy, optimize resource allocation, and identify potential bottlenecks and risks before they derail a project.</li>
        <li><strong>Enhanced Code Refactoring and Optimization:</strong> AI tools can scan vast codebases to identify opportunities for improvement. They suggest refactoring patterns to enhance readability, optimize performance by finding inefficient algorithms, and ensure strict adherence to modern coding standards.</li>
        <li><strong>The Rise of AIOps in DevOps:</strong> AI for IT Operations (AIOps) is transforming the DevOps landscape. From automating complex deployment pipelines to predictive monitoring that flags potential issues before they cause downtime, AI is making DevOps practices more resilient, proactive, and efficient.</li>
      </ul>

      <div class="my-8 p-6 bg-teal-50 border border-teal-200 rounded-lg">
        <h3 class="text-2xl font-semibold text-teal-800 mb-3">The Impact on Developers: Augmentation, Not Replacement</h3>
        <p class="mb-4 text-lg leading-relaxed text-teal-700">While some fear that AI might replace developers, the current trajectory suggests a different story: AI is set to augment human capabilities. By automating mundane and repetitive tasks, AI frees developers to concentrate on what they do best: complex problem-solving, architectural design, and driving innovation. The modern developer's role is evolving into one where leveraging AI tools effectively becomes a core competency. Continuous learning and adaptation are no longer optional but essential for career growth in this new era.</p>
      </div>
      
      <h2 class="text-3xl font-bold my-6 text-gray-800 border-l-4 border-teal-500 pl-4">Challenges and Ethical Considerations</h2>
      <p class="mb-6 text-lg leading-relaxed text-gray-600">Despite the immense benefits, the integration of AI is not without its hurdles. Key challenges include the ethical implications of AI-driven decisions, the significant need for vast and unbiased datasets to train effective models, and the potential for AI to introduce novel and complex types of errors. Navigating this landscape requires a commitment to responsible development practices, transparency in AI models, and a robust framework for ethical oversight.</p>

      <p class="mt-8 text-xl leading-relaxed text-gray-700 font-medium">Ultimately, the future of software development is inextricably linked with artificial intelligence. Embracing these advanced technologies will be the defining factor for businesses and developers who aim to stay competitive, innovative, and relevant in the rapidly evolving digital landscape. The journey has just begun, and the possibilities are limitless.</p>
    `
  }
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
    <div className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/blogs">
            <Button variant="outline" className="text-teal-600 border-teal-600 hover:bg-teal-50">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Blogs
            </Button>
          </Link>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center mb-10">
            <span className="text-teal-600 font-semibold uppercase tracking-wider">{blog.category}</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 my-4 leading-tight">{blog.title}</h1>
            <div className="flex justify-center flex-wrap items-center text-md text-gray-500 mt-4 space-x-6">
              <span className="flex items-center"><Calendar className="h-5 w-5 mr-2" /> {blog.date}</span>
              <span className="flex items-center"><User className="h-5 w-5 mr-2" /> By {blog.author}</span>
            </div>
          </div>
          
          <img src={blog.imageUrl} alt={blog.title} className="w-full h-auto max-h-[500px] object-cover rounded-xl mb-12 shadow-2xl" />

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
          
        </motion.article>
      </div>
    </div>
  );
};

export default BlogDetails;
  