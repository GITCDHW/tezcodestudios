import React from 'react';
import { motion } from 'framer-motion';

const Button = React.forwardRef(
  ({ className, variant, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-background";

    const variants = {
      default: "bg-primary-neon text-dark-background hover:bg-opacity-80 focus:ring-primary-neon",
      outline: "border-2 border-primary-neon text-primary-neon hover:bg-primary-neon/20 focus:ring-primary-neon",
      secondary: "bg-secondary-neon text-dark-background hover:bg-opacity-80 focus:ring-secondary-neon",
      ghost: "text-gray-200 hover:bg-gray-800 focus:ring-gray-600",
    };

    return (
      <motion.button
        ref={ref}
        className={`${baseStyles} ${variants[variant || 'default']} ${className || ''}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
