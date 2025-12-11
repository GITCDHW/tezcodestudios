'use client';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="container mx-auto p-4 py-16"
    >
      <motion.h1 variants={itemVariants} className="text-5xl font-extrabold text-center text-primary-neon mb-8">
        About <span className="text-secondary-neon">TezCodeStudios</span>
      </motion.h1>
      <motion.p variants={itemVariants} className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
        We are a collective of driven developers passionate about building the future, one innovative product at a time.
      </motion.p>

      <div className="bg-dark-surface p-8 rounded-lg shadow-xl border border-primary-neon/20 mb-12">
        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-primary-neon mb-6">
          Our <span className="text-secondary-neon">Philosophy</span>
        </motion.h2>
        <motion.p variants={itemVariants} className="text-gray-300 text-lg mb-4">
          At TezCodeStudios, we embody the 'Gen-Z speed' ethos – agile, innovative, and exceptionally fast. We believe in building not just software, but transformative digital experiences. Our approach is centered on rapid iteration, transparent communication, and delivering maximum value in minimal time.
        </motion.p>
        <motion.p variants={itemVariants} className="text-gray-300 text-lg">
          We combine cutting-edge technology with creative problem-solving to help startups and founders navigate the complex world of software development, turning bold visions into successful realities.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <motion.div variants={itemVariants} className="bg-dark-surface p-8 rounded-lg shadow-xl border border-primary-neon/20">
          <h3 className="text-3xl font-bold text-secondary-neon mb-4">Gen-Z Speed & Creativity</h3>
          <p className="text-gray-300 text-lg">
            Our team comprises young, dynamic engineers who live and breathe technology. This means faster development cycles, fresh perspectives, and an innate understanding of modern user expectations. We're always experimenting with the latest tools to deliver optimal results.
          </p>
        </motion.div>
        <motion.div variants={itemVariants} className="bg-dark-surface p-8 rounded-lg shadow-xl border border-primary-neon/20">
          <h3 className="text-3xl font-bold text-secondary-neon mb-4">Transparent Pricing & Process</h3>
          <p className="text-gray-300 text-lg">
            No hidden fees, no lengthy contracts filled with jargon. We offer clear, upfront pricing models and maintain open lines of communication throughout the project lifecycle. You'll always know where your project stands and what you're paying for.
          </p>
        </motion.div>
      </div>

      <div className="bg-dark-surface p-8 rounded-lg shadow-xl border border-primary-neon/20">
        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-primary-neon mb-6">
          Our <span className="text-secondary-neon">Team</span>
        </motion.h2>
        <motion.p variants={itemVariants} className="text-gray-300 text-lg mb-4">
          Founded by a passionate developer with a vision for rapid, high-quality software delivery, TezCodeStudios is built on a foundation of strong technical depth. Our small, agile team is dedicated to engineering excellence, focusing on clean code, robust architectures, and scalable solutions.
        </motion.p>
        <motion.p variants={itemVariants} className="text-gray-300 text-lg">
          We are problem-solvers, innovators, and partners in your journey to build the next generation of digital products.
        </motion.p>
        {/* Placeholder for team members if desired later */}
        <div className="mt-8 text-center text-gray-500 italic">
          More details about our individual team members coming soon!
        </div>
      </div>
    </motion.div>
  );
}
