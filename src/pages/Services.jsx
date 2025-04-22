import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SEO from '../components/shared/SEO';

export default function Services() {
  const aiSolutionsRef = useScrollAnimation();
  const webDevRef = useScrollAnimation();
  const mobileDevRef = useScrollAnimation();
  const customSoftwareRef = useScrollAnimation();
  
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section bg-background-light/30">
        <div className="container">
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold sm:text-5xl md:text-6xl text-gradient-animate"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Comprehensive technology solutions tailored to your business needs
            </motion.p>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <div ref={aiSolutionsRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-8 text-gradient-animate">AI Solutions & Implementation</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="card card-hover p-6">
                <h3 className="text-xl font-bold mb-4 text-accent">Custom AI Models</h3>
                <p className="text-gray-300 mb-4">
                  We develop tailored artificial intelligence solutions designed specifically for your business challenges. Our team of AI experts works closely with you to understand your needs and create models that deliver measurable results.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-gray-300">Predictive analytics models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-gray-300">Computer vision solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-gray-300">Natural language processing</span>
                  </li>
                </ul>
              </div>
              
              <div className="card card-hover p-6">
                <h3 className="text-xl font-bold mb-4 text-accent">RAG Systems</h3>
                <p className="text-gray-300 mb-4">
                  Our Retrieval-Augmented Generation (RAG) systems combine the power of large language models with your proprietary data to create intelligent knowledge management solutions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-gray-300">Document processing and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-gray-300">Intelligent search and retrieval</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-gray-300">Context-aware AI assistants</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 card card-hover p-6">
              <h3 className="text-xl font-bold mb-4 text-accent">Machine Learning Models</h3>
              <p className="text-gray-300 mb-4">
                We specialize in developing and deploying custom machine learning models that transform your data into actionable insights and automated processes.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-gray-300">Classification and regression models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-gray-300">Clustering and anomaly detection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-gray-300">Time series forecasting</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-gray-300">Recommendation systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-gray-300">Reinforcement learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-gray-300">Model deployment and monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      <section className="section bg-background-light/30">
        <div className="container">
          <div ref={webDevRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-8 text-gradient-animate">Web Application Development</h2>
            
            <div className="card card-hover p-6 mb-8">
              <p className="text-gray-300 mb-6">
                We create modern, responsive web applications that deliver exceptional user experiences and drive business growth. Our web development team combines technical expertise with creative design to build solutions that stand out in today's competitive digital landscape.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-background-dark/30 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-white">Frontend Development</h3>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>React.js</li>
                    <li>Vue.js</li>
                    <li>Next.js</li>
                    <li>Responsive design</li>
                    <li>Progressive Web Apps</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-background-dark/30 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-white">Backend Development</h3>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Python/Django</li>
                    <li>RESTful APIs</li>
                    <li>GraphQL</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-background-dark/30 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-white">Database & Infrastructure</h3>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>AWS/Azure/GCP</li>
                    <li>Docker & Kubernetes</li>
                    <li>CI/CD pipelines</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Development Section */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <div ref={mobileDevRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-8 text-gradient-animate">Mobile App Development</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="card card-hover p-6">
                <h3 className="text-xl font-bold mb-4 text-accent">Native Mobile Apps</h3>
                <p className="text-gray-300 mb-4">
                  We develop high-performance native mobile applications for iOS and Android platforms that provide seamless user experiences and leverage platform-specific features.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-gray-300">iOS development with Swift</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-gray-300">Android development with Kotlin</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-gray-300">Hardware integration</span>
                  </li>
                </ul>
              </div>
              
              <div className="card card-hover p-6">
                <h3 className="text-xl font-bold mb-4 text-accent">Cross-Platform Solutions</h3>
                <p className="text-gray-300 mb-4">
                  Our cross-platform development approach allows for efficient development of applications that work seamlessly across multiple platforms while maintaining a consistent user experience.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-gray-300">React Native development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-gray-300">Flutter applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-gray-300">Code sharing strategies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Software Section */}
      <section className="section bg-background-light/30">
        <div className="container">
          <div ref={customSoftwareRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-8 text-gradient-animate">Custom Software Development</h2>
            
            <div className="card card-hover p-6">
              <p className="text-gray-300 mb-6">
                We create tailored software solutions designed to address your specific business challenges and requirements. Our custom software development services focus on delivering scalable, maintainable, and secure applications that provide long-term value.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-accent">Our Approach</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">1.</span>
                      <div>
                        <span className="font-semibold text-white">Discovery & Analysis</span>
                        <p className="text-gray-300 text-sm">We work closely with you to understand your business processes, challenges, and objectives.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">2.</span>
                      <div>
                        <span className="font-semibold text-white">Solution Design</span>
                        <p className="text-gray-300 text-sm">Our architects design a solution that addresses your specific needs while ensuring scalability and security.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">3.</span>
                      <div>
                        <span className="font-semibold text-white">Agile Development</span>
                        <p className="text-gray-300 text-sm">We use agile methodologies to deliver working software in iterative cycles, allowing for feedback and adjustments.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">4.</span>
                      <div>
                        <span className="font-semibold text-white">Testing & Quality Assurance</span>
                        <p className="text-gray-300 text-sm">Rigorous testing ensures your software is reliable, secure, and performs as expected.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">5.</span>
                      <div>
                        <span className="font-semibold text-white">Deployment & Support</span>
                        <p className="text-gray-300 text-sm">We handle deployment and provide ongoing support and maintenance to ensure your software continues to deliver value.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-accent">Types of Solutions</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-gray-300">Enterprise Resource Planning (ERP) systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-gray-300">Customer Relationship Management (CRM) solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-gray-300">Business process automation tools</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-gray-300">Data analytics and visualization platforms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-gray-300">Industry-specific applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-gray-300">Legacy system modernization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-gray-300">Integration solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <div className="card card-hover p-8 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-gradient-animate">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6">
              Contact us today to discuss how our services can help you achieve your business goals and stay ahead of the competition.  
            </p>
            <a href="/contact" className="button-primary inline-block">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
