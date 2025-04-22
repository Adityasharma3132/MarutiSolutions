import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';

export default function TermsOfService() {
  const introRef = useScrollAnimation();
  const termsRef = useScrollAnimation();
  const usageRef = useScrollAnimation();
  const intellectualPropertyRef = useScrollAnimation();
  const disclaimerRef = useScrollAnimation();
  const contactRef = useScrollAnimation();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section bg-background-light/30">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient-animate">
            Terms of Service
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <div ref={introRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Introduction</h2>
            <div className="card p-8">
              <p className="text-gray-300 leading-relaxed mb-4">
                Welcome to Maruti Solutions. These Terms of Service ("Terms") govern your use of our website, 
                products, and services ("Services"). By accessing or using our Services, you agree to be bound 
                by these Terms and our Privacy Policy.
              </p>
              <p className="text-gray-300 leading-relaxed">
                If you do not agree with any part of these Terms, you may not use our Services. Please read 
                these Terms carefully before proceeding. These Terms constitute a legally binding agreement 
                between you and Maruti Solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Use */}
      <section className="section bg-background-light/30">
        <div className="container">
          <div ref={termsRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Terms of Use</h2>
            <div className="card p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">1. Account Registration</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Some of our Services may require you to create an account. You are responsible for 
                    maintaining the confidentiality of your account credentials and for all activities that 
                    occur under your account. You agree to provide accurate and complete information when 
                    creating an account and to update your information to keep it accurate and current.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">2. User Conduct</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    When using our Services, you agree not to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      Violate any applicable laws or regulations
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      Infringe upon the rights of others
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      Attempt to gain unauthorized access to our Services or systems
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      Engage in any activity that interferes with or disrupts our Services
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      Use our Services to transmit any malware or other harmful code
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                    >
                      Collect or harvest any information from our Services without authorization
                    </motion.li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">3. Termination</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We reserve the right to suspend or terminate your access to our Services at any time, 
                    with or without cause, and with or without notice. Upon termination, your right to use 
                    our Services will immediately cease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Usage */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <div ref={usageRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Service Usage</h2>
            <div className="card p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">1. Service Modifications</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We reserve the right to modify, suspend, or discontinue any part of our Services at any time, 
                    with or without notice. We will not be liable to you or any third party for any modification, 
                    suspension, or discontinuation of our Services.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">2. Third-Party Services</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our Services may contain links to third-party websites or services that are not owned or 
                    controlled by Maruti Solutions. We have no control over, and assume no responsibility for, 
                    the content, privacy policies, or practices of any third-party websites or services. You 
                    acknowledge and agree that we shall not be responsible or liable for any damage or loss 
                    caused by the use of such third-party websites or services.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">3. Service Availability</h3>
                  <p className="text-gray-300 leading-relaxed">
                    While we strive to provide uninterrupted access to our Services, we do not guarantee that 
                    our Services will be available at all times. We may experience hardware, software, or other 
                    problems, or need to perform maintenance related to our Services, resulting in interruptions, 
                    delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or 
                    otherwise modify our Services at any time without notice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="section bg-background-light/30">
        <div className="container">
          <div ref={intellectualPropertyRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Intellectual Property</h2>
            <div className="card p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">1. Ownership</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our Services and their original content, features, and functionality are and will remain the 
                    exclusive property of Maruti Solutions and its licensors. Our Services are protected by copyright, 
                    trademark, and other intellectual property laws.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">2. License</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable 
                    license to use our Services for your personal or internal business purposes. This license does 
                    not include the right to collect or harvest any system data, engage in any advertising activities, 
                    or use our Services in any way that is not expressly permitted by these Terms.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">3. User Content</h3>
                  <p className="text-gray-300 leading-relaxed">
                    You retain all rights to any content you submit, post, or display on or through our Services. 
                    By submitting, posting, or displaying content on or through our Services, you grant us a worldwide, 
                    non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, create 
                    derivative works from, distribute, and display such content in connection with providing our Services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer and Limitation of Liability */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <div ref={disclaimerRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Disclaimer and Limitation of Liability</h2>
            <div className="card p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">1. Disclaimer of Warranties</h3>
                  <p className="text-gray-300 leading-relaxed">
                    OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER 
                    EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, 
                    FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE. WE DO NOT 
                    WARRANT THAT OUR SERVICES WILL FUNCTION UNINTERRUPTED, SECURE, OR AVAILABLE AT ANY PARTICULAR 
                    TIME OR LOCATION, OR THAT ANY ERRORS OR DEFECTS WILL BE CORRECTED.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">2. Limitation of Liability</h3>
                  <p className="text-gray-300 leading-relaxed">
                    IN NO EVENT SHALL MARUTI SOLUTIONS, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, 
                    OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE 
                    DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER 
                    INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE 
                    OUR SERVICES.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">3. Indemnification</h3>
                  <p className="text-gray-300 leading-relaxed">
                    You agree to defend, indemnify, and hold harmless Maruti Solutions and its licensees and 
                    licensors, and their employees, contractors, agents, officers, and directors, from and 
                    against any and all claims, damages, obligations, losses, liabilities, costs or debt, and 
                    expenses (including but not limited to attorney's fees), resulting from or arising out of 
                    your use of and access to our Services, or your violation of these Terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-background-light/30">
        <div className="container">
          <div ref={contactRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Contact Information</h2>
            <div className="card p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="card p-6 flex flex-col items-center text-center w-full md:w-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
                  <p className="text-gray-300">support@marutisolutions.com</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="card p-6 flex flex-col items-center text-center w-full md:w-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
                  <p className="text-gray-300">+91 7974342184</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="card p-6 flex flex-col items-center text-center w-full md:w-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-secondary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2 text-white">Address</h3>
                  <p className="text-gray-300">03 Tech Park, Indore, MP, India</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card p-8 text-center"
          >
            <p className="text-gray-300 leading-relaxed mb-4">
              These Terms of Service were last updated on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <p className="text-gray-300 leading-relaxed">
              By continuing to access or use our Services after any revisions become effective, you agree to be bound by the revised terms.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}