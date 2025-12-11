'use-client';
import { motion } from 'framer-motion';

const services = [
  {
    title: "MVP Development",
    description: "Our core expertise lies in rapid Minimum Viable Product development. We help startups validate ideas and enter the market swiftly with a robust, scalable foundation. Focus on core features, clean code, and fast iterations.",
    features: ["Rapid Prototyping", "Lean Development", "User Feedback Integration", "Scalable Architecture"],
    icon: "🚀"
  },
  {
    title: "SaaS Solutions",
    description: "From concept to launch, we build multi-tenant Software as a Service platforms that are secure, high-performing, and user-friendly. We handle everything from subscription models to complex data management.",
    features: ["Multi-Tenant Architecture", "Subscription Billing", "Secure Data Handling", "API Integrations"],
    icon: "☁️"
  },
  {
    title: "AI & Automation Tools",
    description: "Leverage the power of artificial intelligence and automation to optimize your business processes or build innovative AI-powered products. From custom chatbots to data analysis and predictive models.",
    features: ["Machine Learning Models", "Process Automation", "Generative AI Integration", "Data Pipelines"],
    icon: "🧠"
  },
  {
    title: "Custom Software Development",
    description: "Beyond MVPs, we offer full-cycle custom software development tailored to your unique business needs. Whether it's a complex internal tool or a public-facing application, we build it precisely.",
    features: ["Full-Stack Development", "API Development", "Database Design", "Legacy System Modernization"],
    icon: "💻"
  },
  {
    title: "UI/UX Design & Branding",
    description: "While we're engineers at heart, we understand the importance of user experience. We craft intuitive interfaces and help define a modern brand identity that resonates with your target audience.",
    features: ["Wireframing & Prototyping", "User Interface Design", "Brand Identity", "Usability Testing"],
    icon: "✨"
  },
];

export default function ServicesPage() {
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
        Our <span className="text-secondary-neon">Services</span>
      </motion.h1>
      <motion.p variants={itemVariants} className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
        TezCodeStudios offers a suite of development services designed to bring your ideas to life with unparalleled speed and technical excellence.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={itemVariants}
            whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(0, 240, 255, 0.2)' }}
            className="bg-dark-surface p-8 rounded-lg shadow-xl border border-primary-neon/20 hover:border-primary-neon transition-all duration-300 flex flex-col"
          >
            <div className="text-5xl mb-4 text-center">{service.icon}</div>
            <h2 className="text-3xl font-bold text-primary-neon mb-4 text-center">{service.title}</h2>
            <p className="text-gray-300 text-lg mb-6 flex-grow">{service.description}</p>
            <div className="mt-auto">
              <h3 className="text-xl font-semibold text-secondary-neon mb-3">Key Aspects:</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
