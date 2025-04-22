import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';

export default function FutureTech() {
  const introRef = useScrollAnimation();
  const aiRef = useScrollAnimation();
  const blockchainRef = useScrollAnimation();
  const iotRef = useScrollAnimation();
  const arVrRef = useScrollAnimation();
  const quantumRef = useScrollAnimation();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section bg-background-light/30">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient-animate">
            Future Technologies
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Exploring the cutting-edge innovations that will shape tomorrow's digital landscape
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <div ref={introRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Embracing the Future</h2>
            <div className="card p-8">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                At Maruti Solutions, we're constantly exploring and implementing emerging technologies 
                to help our clients stay ahead of the curve. Our research and development teams work 
                tirelessly to understand, master, and deploy the most promising innovations in the 
                tech world.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We believe that early adoption and expertise in cutting-edge technologies is key to 
                delivering transformative solutions that provide our clients with significant competitive 
                advantages. Here are some of the future technologies we're currently focused on:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI and Machine Learning */}
      <section className="section bg-background-light/30">
        <div className="container">
          <div ref={aiRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Advanced AI & Machine Learning</h2>
            <div className="card p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-lg overflow-hidden"
                  >
                    <svg className="w-full h-auto text-accent" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <path fill="currentColor" d="M40,120 C40,120 80,160 160,120 L160,40 C80,80 40,40 40,40 Z" fillOpacity="0.2" />
                      <path fill="currentColor" d="M40,40 C40,40 80,0 160,40 L160,120 C80,80 40,120 40,120 Z" fillOpacity="0.3" />
                      <circle cx="100" cy="80" r="30" fill="currentColor" fillOpacity="0.5" />
                      <circle cx="70" cy="60" r="5" fill="white" />
                      <path fill="none" stroke="currentColor" strokeWidth="3" d="M40,80 C60,70 80,60 100,80 C120,100 140,90 160,80" />
                      <path fill="none" stroke="currentColor" strokeWidth="3" d="M40,60 C60,50 80,40 100,60 C120,80 140,70 160,60" />
                      <path fill="none" stroke="currentColor" strokeWidth="3" d="M40,100 C60,90 80,80 100,100 C120,120 140,110 160,100" />
                    </svg>
                  </motion.div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4 text-white">Beyond Traditional ML</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We're pushing the boundaries of what's possible with AI, exploring advanced techniques like:
                  </p>
                  <ul className="space-y-2 text-gray-300 mb-4">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span><strong>Generative AI:</strong> Creating new content, designs, and solutions through advanced neural networks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span><strong>Reinforcement Learning:</strong> Developing systems that learn optimal behaviors through trial and error</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span><strong>Explainable AI:</strong> Creating transparent AI systems where decisions can be understood and trusted</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span><strong>Federated Learning:</strong> Training models across multiple devices while preserving privacy</span>
                    </li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed">
                    Our AI solutions are designed to be ethical, transparent, and aligned with human values, ensuring 
                    that technology serves humanity's best interests while driving business innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <div ref={blockchainRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Blockchain & Distributed Ledger</h2>
            <div className="card p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4 text-white">Beyond Cryptocurrencies</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    While blockchain is known for powering cryptocurrencies, we're exploring its vast potential for:
                  </p>
                  <ul className="space-y-2 text-gray-300 mb-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Smart Contracts:</strong> Self-executing contracts with the terms directly written into code</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Supply Chain Tracking:</strong> End-to-end transparency and verification in complex supply networks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Digital Identity:</strong> Secure, user-controlled identity verification systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Decentralized Finance:</strong> Reimagining financial services without traditional intermediaries</span>
                    </li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed">
                    Our blockchain implementations focus on practical business applications that enhance security, 
                    reduce costs, and create new opportunities for collaboration and trust in digital ecosystems.
                  </p>
                </div>
                <div className="md:w-1/3">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-lg overflow-hidden"
                  >
                    <svg className="w-full h-auto text-primary" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <rect x="40" y="40" width="120" height="120" rx="10" fill="currentColor" fillOpacity="0.1" />
                      <path fill="none" stroke="currentColor" strokeWidth="3" d="M70,70 L130,70 L130,130 L70,130 Z" />
                      <path fill="none" stroke="currentColor" strokeWidth="3" d="M90,50 L150,50 L150,110 L90,110 Z" />
                      <path fill="none" stroke="currentColor" strokeWidth="3" d="M50,90 L110,90 L110,150 L50,150 Z" />
                      <circle cx="70" cy="70" r="5" fill="currentColor" />
                      <circle cx="130" cy="70" r="5" fill="currentColor" />
                      <circle cx="130" cy="130" r="5" fill="currentColor" />
                      <circle cx="70" cy="130" r="5" fill="currentColor" />
                      <circle cx="90" cy="50" r="5" fill="currentColor" />
                      <circle cx="150" cy="50" r="5" fill="currentColor" />
                      <circle cx="150" cy="110" r="5" fill="currentColor" />
                      <circle cx="90" cy="110" r="5" fill="currentColor" />
                      <circle cx="50" cy="90" r="5" fill="currentColor" />
                      <circle cx="110" cy="90" r="5" fill="currentColor" />
                      <circle cx="110" cy="150" r="5" fill="currentColor" />
                      <circle cx="50" cy="150" r="5" fill="currentColor" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IoT */}
      <section className="section bg-background-light/30">
        <div className="container">
          <div ref={iotRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Internet of Things (IoT)</h2>
            <div className="card p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-lg overflow-hidden"
                  >
                    <svg className="w-full h-auto text-secondary" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="100" r="60" fill="currentColor" fillOpacity="0.1" />
                      <circle cx="100" cy="100" r="40" fill="currentColor" fillOpacity="0.2" />
                      <circle cx="100" cy="100" r="20" fill="currentColor" fillOpacity="0.3" />
                      <circle cx="140" cy="70" r="10" fill="currentColor" fillOpacity="0.4" />
                      <circle cx="60" cy="130" r="10" fill="currentColor" fillOpacity="0.4" />
                      <circle cx="150" cy="120" r="8" fill="currentColor" fillOpacity="0.4" />
                      <circle cx="50" cy="80" r="8" fill="currentColor" fillOpacity="0.4" />
                      <path fill="none" stroke="currentColor" strokeWidth="2" d="M100,100 L140,70" />
                      <path fill="none" stroke="currentColor" strokeWidth="2" d="M100,100 L60,130" />
                      <path fill="none" stroke="currentColor" strokeWidth="2" d="M100,100 L150,120" />
                      <path fill="none" stroke="currentColor" strokeWidth="2" d="M100,100 L50,80" />
                    </svg>
                  </motion.div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4 text-white">Connected Intelligence</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We're developing IoT solutions that connect the physical and digital worlds, creating intelligent 
                    systems that can sense, analyze, and act on data in real-time:
                  </p>
                  <ul className="space-y-2 text-gray-300 mb-4">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span><strong>Smart Manufacturing:</strong> Optimizing production processes through connected sensors and predictive maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span><strong>Connected Healthcare:</strong> Remote monitoring systems and smart medical devices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span><strong>Smart Cities:</strong> Infrastructure monitoring, traffic management, and resource optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span><strong>Edge Computing:</strong> Processing data closer to its source for faster response times and reduced bandwidth</span>
                    </li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed">
                    Our IoT implementations prioritize security, scalability, and interoperability, ensuring that 
                    connected systems remain robust and future-proof as technology evolves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AR/VR */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <div ref={arVrRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Augmented & Virtual Reality</h2>
            <div className="card p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4 text-white">Immersive Experiences</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We're creating immersive digital experiences that transform how people interact with information, 
                    environments, and each other:
                  </p>
                  <ul className="space-y-2 text-gray-300 mb-4">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span><strong>Training & Simulation:</strong> Immersive learning environments for complex skills development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span><strong>Remote Collaboration:</strong> Virtual spaces for teams to work together regardless of physical location</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span><strong>Digital Twins:</strong> Virtual replicas of physical assets for monitoring and simulation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span><strong>Customer Experiences:</strong> Interactive product visualizations and virtual showrooms</span>
                    </li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed">
                    Our AR/VR solutions blend cutting-edge technology with thoughtful user experience design to create 
                    applications that are both powerful and intuitive to use.
                  </p>
                </div>
                <div className="md:w-1/3">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-lg overflow-hidden"
                  >
                    <svg className="w-full h-auto text-accent" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <path fill="currentColor" fillOpacity="0.2" d="M40,80 L100,40 L160,80 L100,120 Z" />
                      <path fill="currentColor" fillOpacity="0.3" d="M40,80 L100,120 L100,160 L40,120 Z" />
                      <path fill="currentColor" fillOpacity="0.4" d="M100,120 L160,80 L160,120 L100,160 Z" />
                      <path fill="none" stroke="currentColor" strokeWidth="2" d="M40,80 L100,40 L160,80 L100,120 Z" />
                      <path fill="none" stroke="currentColor" strokeWidth="2" d="M40,80 L40,120 L100,160 L100,120" />
                      <path fill="none" stroke="currentColor" strokeWidth="2" d="M100,120 L100,160 L160,120 L160,80" />
                      <circle cx="100" cy="40" r="4" fill="white" />
                      <circle cx="40" cy="80" r="4" fill="white" />
                      <circle cx="160" cy="80" r="4" fill="white" />
                      <circle cx="100" cy="120" r="4" fill="white" />
                      <circle cx="40" cy="120" r="4" fill="white" />
                      <circle cx="100" cy="160" r="4" fill="white" />
                      <circle cx="160" cy="120" r="4" fill="white" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Computing */}
      <section className="section bg-background-light/30">
        <div className="container">
          <div ref={quantumRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Quantum Computing</h2>
            <div className="card p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-lg overflow-hidden"
                  >
                    <svg className="w-full h-auto text-primary" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="100" r="60" fill="currentColor" fillOpacity="0.1" />
                      <ellipse cx="100" cy="100" rx="60" ry="20" fill="currentColor" fillOpacity="0.2" />
                      <ellipse cx="100" cy="100" rx="20" ry="60" fill="currentColor" fillOpacity="0.2" />
                      <circle cx="100" cy="100" r="10" fill="currentColor" />
                      <path fill="none" stroke="currentColor" strokeWidth="1" d="M40,100 C40,60 160,60 160,100 C160,140 40,140 40,100 Z" />
                      <path fill="none" stroke="currentColor" strokeWidth="1" d="M100,40 C60,40 60,160 100,160 C140,160 140,40 100,40 Z" />
                      <path fill="none" stroke="currentColor" strokeWidth="1" d="M100,100 L130,70" />
                      <path fill="none" stroke="currentColor" strokeWidth="1" d="M100,100 L70,70" />
                      <path fill="none" stroke="currentColor" strokeWidth="1" d="M100,100 L130,130" />
                      <path fill="none" stroke="currentColor" strokeWidth="1" d="M100,100 L70,130" />
                      <circle cx="130" cy="70" r="5" fill="currentColor" />
                      <circle cx="70" cy="70" r="5" fill="currentColor" />
                      <circle cx="130" cy="130" r="5" fill="currentColor" />
                      <circle cx="70" cy="130" r="5" fill="currentColor" />
                    </svg>
                  </motion.div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4 text-white">The Next Computing Frontier</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    While still in its early stages, quantum computing promises to revolutionize how we solve certain 
                    types of complex problems. We're actively researching and preparing for the quantum future:
                  </p>
                  <ul className="space-y-2 text-gray-300 mb-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Optimization Problems:</strong> Solving complex logistics, scheduling, and resource allocation challenges</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Cryptography:</strong> Developing quantum-resistant security protocols</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Material Science:</strong> Simulating molecular and chemical interactions for new materials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Machine Learning:</strong> Accelerating certain types of AI algorithms</span>
                    </li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed">
                    Our quantum computing initiatives focus on identifying practical applications where quantum 
                    advantages can deliver real business value, while also preparing our clients' systems for 
                    the post-quantum era.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card p-8 text-center"
          >
            <h2 className="text-3xl font-bold mb-4 text-gradient-animate">Partner with Us for the Future</h2>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Ready to explore how these cutting-edge technologies can transform your business? 
              Our team of experts is here to guide you through the possibilities and develop a 
              tailored strategy for your organization.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="/contact" 
                className="btn-primary inline-block px-8 py-3 rounded-md text-lg font-medium"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}