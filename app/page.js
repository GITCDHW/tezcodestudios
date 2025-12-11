'use-client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/ui/button';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
      className="relative overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center p-4">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-background to-dark-surface opacity-90 z-0"></div>
        {/* Neon Grid Overlay (for aesthetic) */}
        <div className="absolute inset-0 z-0 opacity-10" style={{
          backgroundImage: `linear-gradient(to right, #00F0FF1A 1px, transparent 1px), linear-gradient(to bottom, #00F0FF1A 1px, transparent 1px)`,
          backgroundSize: `20px 20px`,
          maskImage: `radial-gradient(ellipse at center, black 0%, transparent 70%)`
        }}></div>

        <motion.div variants={containerVariants} className="relative z-10 max-w-4xl mx-auto">
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold leading-tight text-primary-neon drop-shadow-lg shadow-primary-neon/50">
            MVPs in <span className="text-secondary-neon">Days</span>, Not Months.
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-6 text-xl md:text-2xl text-gray-300">
            Transforming startup ideas into market-ready products with Gen-Z speed and creativity.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" passHref>
              <Button className="bg-primary-neon text-dark-background hover:bg-opacity-90 animate-pulse-glow border-2 border-primary-neon">
                Start Your Project Today
              </Button>
            </Link>
            <Link href="/services" passHref>
              <Button variant="outline" className="text-primary-neon border-primary-neon hover:bg-primary-neon/20">
                Explore Our Services
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Highlight Section */}
      <section className="py-20 bg-dark-surface text-center px-4">
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-50 mb-12">
          Our Core <span className="text-primary-neon">Capabilities</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {['MVP Development', 'SaaS Solutions', 'AI & Automation Tools'].map((service, index) => (
            <motion.div
              key={service}
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 240, 255, 0.3)' }}
              className="p-8 border border-primary-neon/30 rounded-lg shadow-lg bg-dark-background hover:border-primary-neon transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-primary-neon mb-4">{service}</h3>
              <p className="text-gray-300">
                {service === 'MVP Development' && "Launch fast, iterate faster. We build robust Minimum Viable Products that get you in front of users quickly."}
                {service === 'SaaS Solutions' && "Scalable, secure, and user-friendly SaaS platforms tailored to your business model."}
                {service === 'AI & Automation Tools' && "Integrate cutting-edge AI and automation to streamline operations and unlock new possibilities."}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div variants={itemVariants} className="mt-16">
          <Link href="/services" passHref>
            <Button variant="outline" className="text-secondary-neon border-secondary-neon hover:bg-secondary-neon/20">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 text-center px-4 bg-dark-background">
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-50 mb-6">
          Ready to Build Your <span className="text-secondary-neon">Next Big Thing</span>?
        </motion.h2>
        <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Let's discuss your vision and turn it into a high-impact product with speed and precision.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link href="/contact" passHref>
            <Button className="bg-secondary-neon text-dark-background hover:bg-opacity-90 animate-pulse-glow border-2 border-secondary-neon">
              Get a Free Consultation
            </Button>
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}
