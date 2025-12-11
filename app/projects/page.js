import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: "AI-Powered CRM Assistant",
    description: "Developed an intelligent assistant that integrates with existing CRM systems to automate data entry, schedule follow-ups, and provide personalized client insights using Gemini API.",
    image: "/project-crm.jpg", // Placeholder image
    tags: ["AI", "SaaS", "Automation", "CRM"],
  },
  {
    id: 2,
    title: "Decentralized Event Ticketing MVP",
    description: "Built a Minimum Viable Product for a blockchain-based event ticketing platform, focusing on secure transactions, fraud prevention, and transparent resale markets.",
    image: "/project-ticket.jpg", // Placeholder image
    tags: ["MVP", "Blockchain", "Web3", "Frontend"],
  },
  {
    id: 3,
    title: "Fitness & Wellness SaaS Platform",
    description: "A comprehensive SaaS platform for personal trainers and gyms to manage client subscriptions, workout plans, and progress tracking, with integrated video conferencing.",
    image: "/project-fitness.jpg", // Placeholder image
    tags: ["SaaS", "Mobile", "API", "Subscription"],
  },
  {
    id: 4,
    title: "E-commerce Recommendation Engine",
    description: "Implemented a custom recommendation engine for an e-commerce platform, increasing conversion rates by 15% through personalized product suggestions based on user behavior.",
    image: "/project-ecommerce.jpg", // Placeholder image
    tags: ["AI", "E-commerce", "Data Science", "Backend"],
  },
];

export default function ProjectsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="container mx-auto p-4 py-16"
    >
      <motion.h1 variants={itemVariants} className="text-5xl font-extrabold text-center text-primary-neon mb-8">
        Our <span className="text-secondary-neon">Projects</span>
      </motion.h1>
      <motion.p variants={itemVariants} className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
        A glimpse into the diverse and innovative solutions we've delivered for visionary founders. We turn complex ideas into tangible products with speed and precision.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(0, 240, 255, 0.2)' }}
            className="bg-dark-surface p-6 rounded-lg shadow-xl border border-primary-neon/20 hover:border-primary-neon transition-all duration-300 flex flex-col"
          >
            {/* Using a placeholder div for image for now, replace with actual Next/Image */}
            <div className="w-full h-48 bg-gray-800 rounded-md mb-4 flex items-center justify-center text-gray-500">
              <span className="text-lg">Image Placeholder</span>
            </div>
            {/* <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4"/> */}
            <h2 className="text-2xl font-bold text-primary-neon mb-3">{project.title}</h2>
            <p className="text-gray-300 text-base mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="bg-secondary-neon/22 text-secondary-neon text-sm px-3 py-1 rounded-full border border-secondary-neon/50">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div variants={itemVariants} className="mt-16 text-center">
        <Link href="/contact" passHref>
          <Button className="bg-primary-neon text-dark-background hover:bg-opacity-90 animate-pulse-glow">
            Have a Project Idea? Let's Talk!
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
