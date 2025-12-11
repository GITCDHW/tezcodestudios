'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <header className="bg-dark-background sticky top-0 z-50 shadow-md border-b border-primary-neon/20">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary-neon hover:text-secondary-neon transition-colors duration-300">
          TezCodeStudios
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact" className="text-secondary-neon hover:text-primary-neon border-2 border-secondary-neon rounded-full px-4 py-2 hover:bg-secondary-neon/10 transition-all duration-300">Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-primary-neon focus:outline-none">
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden bg-dark-surface absolute top-0 right-0 h-screen w-2/3 shadow-lg p-6 flex flex-col space-y-6 border-l border-primary-neon/20 z-40"
          >
            <button onClick={toggleMenu} className="self-end text-primary-neon focus:outline-none mb-8">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <MobileNavLink href="/" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink href="/services" onClick={toggleMenu}>Services</MobileNavLink>
            <MobileNavLink href="/projects" onClick={toggleMenu}>Projects</MobileNavLink>
            <MobileNavLink href="/about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink href="/contact" onClick={toggleMenu} className="text-secondary-neon border-2 border-secondary-neon rounded-full px-4 py-2 text-center hover:bg-secondary-neon/10">Contact</MobileNavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, children, className }) {
  return (
    <Link href={href} className={`text-gray-200 hover:text-primary-neon transition-colors duration-300 ${className || ''}`}>
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, onClick, className }) {
  return (
    <Link href={href} onClick={onClick} className={`text-gray-200 hover:text-primary-neon transition-colors duration-300 text-xl font-semibold ${className || ''}`}>
      {children}
    </Link>
  );
}
