'use-client'
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.footer
      initial="hidden"
      animate="show"
      variants={footerVariants}
      className="bg-dark-background text-gray-400 py-10 border-t border-primary-neon/20 mt-12"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Link href="/" className="text-2xl font-bold text-primary-neon hover:text-secondary-neon transition-colors duration-300 mb-4 md:mb-0">
            TezCodeStudios
          </Link>
          <div className="flex space-x-6">
            <Link href="/services" className="hover:text-primary-neon transition-colors duration-300">Services</Link>
            <Link href="/projects" className="hover:text-primary-neon transition-colors duration-300">Projects</Link>
            <Link href="/about" className="hover:text-primary-neon transition-colors duration-300">About</Link>
            <Link href="/contact" className="hover:text-primary-neon transition-colors duration-300">Contact</Link>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <p>&copy; {year} TezCodeStudios. All rights reserved.</p>
          <p className="text-sm mt-2">
            Built with <span className="text-red-500">❤️</span> and cutting-edge tech.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
