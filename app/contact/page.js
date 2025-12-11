'use-client';
import { motion } from 'framer-motion';
import ContactForm from '@/components/forms/contact-form';

export default function ContactPage() {
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
      className="container mx-auto p-4 py-16 flex flex-col items-center justify-center min-h-[70vh]"
    >
      <motion.h1 variants={itemVariants} className="text-5xl font-extrabold text-center text-primary-neon mb-8">
        Get In <span className="text-secondary-neon">Touch</span>
      </motion.h1>
      <motion.p variants={itemVariants} className="text-xl text-center text-gray-300 mb-12 max-w-2xl mx-auto">
        Ready to turn your idea into a rapid MVP or a scalable SaaS product? Fill out the form below and let's start building!
      </motion.p>

      <motion.div variants={itemVariants} className="w-full max-w-lg bg-dark-surface p-8 rounded-lg shadow-xl border border-primary-neon/20">
        <ContactForm />
      </motion.div>
    </motion.div>
  );
}
