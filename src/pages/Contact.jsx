import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/shared/SEO';
import { saveFormSubmission, exportSubmissionsAsJson } from '../utils/formStorage';

// Google Sheets Web App URL - Replace with your deployed script URL
const GOOGLE_SHEETS_URL = 'YOUR_GOOGLE_SHEETS_WEB_APP_URL';
 
export default function Contact() {
  const formRef = useScrollAnimation();
  const contactRef = useScrollAnimation();
  
  // Add styling for dropdown options when component mounts
  useEffect(() => {
    // Add a style tag to make dropdown options visible
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      select option {
        background-color: #f3f4f6 !important;
        color: #111827 !important;
        padding: 8px 12px;
      }
    `;
    document.head.appendChild(styleTag);
    
    // Clean up function to remove the style tag when component unmounts
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    description: '',
    budget: '',
    timeline: '',
    source: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showDownloadIcon, setShowDownloadIcon] = useState(false);
  const downloadTimerRef = useRef(null);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.company.trim()) errors.company = 'Company is required';
    
    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.projectType) errors.projectType = 'Project type is required';
    if (!formData.description.trim()) errors.description = 'Project description is required';
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      
      try {
        // Save the form data using the utility function
        await saveFormSubmission(formData);
        
        console.log('Form data saved to Supabase');
        
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Show download icon
        setShowDownloadIcon(true);
        
        // Clear any existing timer
        if (downloadTimerRef.current) {
          clearTimeout(downloadTimerRef.current);
        }
        
        // Set timer to hide download icon after 10 seconds
        downloadTimerRef.current = setTimeout(() => {
          setShowDownloadIcon(false);
        }, 10000);
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            projectType: '',
            description: '',
            budget: '',
            timeline: '',
            source: ''
          });
          setSubmitSuccess(false);
        }, 3000);
      } catch (error) {
        console.error('Error saving form data:', error);
        setIsSubmitting(false);
        alert('Error: Failed to save form data. Please try again.');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="Contact Us | Maruti Solutions"
        description="Get in touch with Maruti Solutions for AI solutions, custom software development, and digital transformation services. Request a free consultation today."
        keywords={["Contact", "Free Consultation", "AI Solutions", "Software Development", "Digital Transformation", "Indore"]}
      />
      {/* Hero Section */}
      <section className="section bg-background-light/30">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient-animate">
            Get in Touch
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with intelligent technology solutions? Contact our team to discuss your challenges.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <div ref={contactRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {contactInfo.map((info, index) => (
              <div key={index} className="card card-hover text-center p-8">
                <div className="text-accent mb-4 flex justify-center items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-background-light/30 rounded-full">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                <p className="text-gray-300">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section bg-background-light/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div ref={formRef} className="card p-8">
              <h2 className="text-3xl font-bold mb-8 text-gradient-animate text-center">
                Request Free Consultation
              </h2>
              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="text-accent text-5xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Thank You!</h3>
                  <p className="text-gray-300">Your consultation request has been submitted successfully. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  {/* Basic Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name*
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-background-light/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${formErrors.name ? 'border border-red-500 focus:ring-red-500' : 'focus:ring-accent'}`}
                      />
                      {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company*
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`w-full bg-background-light/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${formErrors.company ? 'border border-red-500 focus:ring-red-500' : 'focus:ring-accent'}`}
                      />
                      {formErrors.company && <p className="text-red-500 text-sm mt-1">{formErrors.company}</p>}
                    </div>
                  </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-background-light/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${formErrors.email ? 'border border-red-500 focus:ring-red-500' : 'focus:ring-accent'}`}
                    />
                    {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-background-light/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Optional"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type*
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`w-full bg-background-light/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${formErrors.projectType ? 'border border-red-500 focus:ring-red-500' : 'focus:ring-accent'}`}
                    style={{color: 'white'}}
                  >
                    <option value="">Select Project Type</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                  {formErrors.projectType && <p className="text-red-500 text-sm mt-1">{formErrors.projectType}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Description*
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full bg-background-light/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${formErrors.description ? 'border border-red-500 focus:ring-red-500' : 'focus:ring-accent'}`}
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                  {formErrors.description && <p className="text-red-500 text-sm mt-1">{formErrors.description}</p>}
                </div>

                {/* Additional Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-background-light/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                      style={{color: 'white'}}
                    >
                      <option value="">Select Budget Range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full bg-background-light/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                      style={{color: 'white'}}
                    >
                      <option value="">Select Timeline</option>
                      {timelines.map((timeline, index) => (
                        <option key={index} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className="w-full bg-background-light/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                    style={{color: 'white'}}
                  >
                    <option value="">Select Source</option>
                    {sources.map((source, index) => (
                      <option key={index} value={source}>{source}</option>
                    ))}
                  </select>
                </div>

                <button 
                  type="submit" 
                  className="button-primary w-full flex items-center justify-center" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Request Free Consultation'
                  )}
                </button>
              </form>
              )}
            </div>
            
            {/* Download Icon - Appears after form submission */}
            <AnimatePresence>
              {showDownloadIcon && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                  className="fixed bottom-8 right-8 z-50"
                >
                  <button
                    onClick={exportSubmissionsAsJson}
                    className="bg-accent hover:bg-accent/90 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="Download form submissions"
                    title="Download form submissions"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* End of Contact Form */}
    </div>
  );
}

const contactInfo = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>,
    title: "Office Address",
    value: "03, K Vallabh, Tilak Nagar, Indore, Madhya Pradesh 452018, India"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>,
    title: "Email Us",
    value: "info@marutisolutions.in"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>,
    title: "Call Us",
    value: "+91 7828740818"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    title: "Business Hours",
    value: "Monday - Friday: 9:00 AM - 6:00 PM IST"
  }
];

const projectTypes = [
  "AI Solutions",
  "Web Development",
  "Mobile Apps",
  "Custom Software",
  "IT Consulting",
  "Other"
];

const budgetRanges = [
  "₹5-10 Lakhs",
  "₹10-25 Lakhs",
  "₹25-50 Lakhs",
  "₹50 Lakhs - 1 Crore",
  "Above 1 Crore"
];

const timelines = [
  "Less than 1 month",
  "1-3 months",
  "3-6 months",
  "6-12 months",
  "More than 12 months"
];

const sources = [
  "Google Search",
  "LinkedIn",
  "Referral",
  "Social Media",
  "Conference/Event",
  "Other"
];

// Contact page completed
