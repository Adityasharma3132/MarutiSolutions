import { motion } from 'framer-motion';
import Scene from '../components/three/Scene';
import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useNavigate, Link } from 'react-router-dom';
import SEO from '../components/shared/SEO';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const servicesRef = useScrollAnimation();
  const techStackRef = useScrollAnimation();
  const heroTextRef = useScrollAnimation({ threshold: 0.5 });
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen">
      <SEO 
        title="Transforming Business with AI & Intelligent Solutions"
        description="Maruti Solutions provides cutting-edge AI solutions, custom software development, and digital transformation services for businesses across India."
        keywords={["AI Solutions", "Machine Learning", "Software Development", "Digital Transformation", "RAG Systems", "Custom Software"]}
      />
      <Scene />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={heroTextRef} className="max-w-4xl fade-in">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transforming Business Challenges with{' '}
              <span className="text-gradient-animate">Intelligent Solutions</span>
            </motion.h1>
            <h2 className="text-xl sm:text-2xl text-gray-300 mb-8">
              AI · Machine Learning · Software Development · Digital Transformation
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-primary"
              onClick={() => navigate('/services')}
            >
              Discover Our Solutions
            </motion.button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-background-light/50">
        <div className="container">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gradient-animate"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="card card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <h3 className="text-xl font-bold mb-4 text-gradient-animate">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gradient-animate"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Technology Stack
          </motion.h2>
          <div ref={techStackRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 stagger-children">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="card card-hover text-center hover-lift"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" 
                }}
              >
                <h4 className="text-lg font-bold mb-2 text-glow">{tech.name}</h4>
                <p className="text-sm text-gray-400">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-background-light/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="slide-in-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-3xl font-bold mb-6 text-gradient-animate"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Advanced AI Solutions
              </motion.h2>
              <motion.p 
                className="text-gray-300 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Leverage cutting-edge artificial intelligence and machine learning technologies
                to transform your business processes and drive innovation.
              </motion.p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <span className="text-accent">•</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="slide-in-right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="card card-hover p-8"
                whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="text-center">
                  <motion.h3 
                    className="text-2xl font-bold mb-4 text-gradient-animate"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Ready to Transform?
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Start your digital transformation journey with our expert team.
                  </motion.p>
                  <Link to="/contact">
                    <motion.button 
                      className="button-secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Schedule a Consultation
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "AI Solutions & Implementation",
    description: "Custom AI solutions tailored to your business needs, from machine learning models to natural language processing."
  },
  {
    title: "RAG Systems",
    description: "Advanced Retrieval-Augmented Generation systems for intelligent document processing and knowledge management."
  },
  {
    title: "Machine Learning Models",
    description: "Development and deployment of custom ML models for prediction, classification, and data analysis."
  },
  {
    title: "Web Application Development",
    description: "Modern, responsive web applications built with cutting-edge technologies and frameworks."
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android platforms."
  },
  {
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business requirements and challenges."
  }
];

const techStack = [
  { name: "TensorFlow", category: "AI/ML" },
  { name: "PyTorch", category: "AI/ML" },
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "AWS", category: "Cloud" },
  { name: "MongoDB", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" }
];

const features = [
  "Natural Language Processing",
  "Computer Vision Solutions",
  "Predictive Analytics",
  "Automated Decision Making",
  "Real-time Data Processing",
  "Custom AI Model Development"
];
