'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import Button from '@/components/ui/button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for the field as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please correct the errors in the form.", { toastId: 'form-error' });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/hello', { // Matches the backend API route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Your message has been sent successfully!', { toastId: 'form-success' });
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        const errorData = await response.json();
        toast.error(`Failed to send message: ${errorData.error || 'Unknown error'}`, { toastId: 'form-fail' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('An unexpected error occurred. Please try again.', { toastId: 'form-exception' });
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyles = "w-full p-3 bg-dark-background border border-primary-neon/30 rounded-md text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-neon/50 transition-colors duration-200";
  const labelStyles = "block text-gray-200 text-sm font-semibold mb-2";
  const errorStyles = "text-red-500 text-sm mt-1";

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label htmlFor="name" className={labelStyles}>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={inputStyles}
          placeholder="John Doe"
          disabled={isLoading}
        />
        {errors.name && <p className={errorStyles}>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className={labelStyles}>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputStyles}
          placeholder="john.doe@example.com"
          disabled={isLoading}
        />
        {errors.email && <p className={errorStyles}>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className={labelStyles}>Your Project Idea / Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className={inputStyles}
          placeholder="Tell us about your project, your vision, and how we can help..."
          disabled={isLoading}
        ></textarea>
        {errors.message && <p className={errorStyles}>{errors.message}</p>}
      </div>
      <Button
        type="submit"
        className="w-full bg-primary-neon text-dark-background hover:bg-opacity-90 transition-opacity duration-200"
        disabled={isLoading}
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </Button>
    </motion.form>
  );
}
