import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import SEO from '../components/shared/SEO';

export default function PrivacyPolicy() {
  const introRef = useScrollAnimation();
  const collectionRef = useScrollAnimation();
  const useRef = useScrollAnimation();
  const sharingRef = useScrollAnimation();
  const securityRef = useScrollAnimation();
  const cookiesRef = useScrollAnimation();
  const rightsRef = useScrollAnimation();
  const contactRef = useScrollAnimation();

  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="Privacy Policy | Maruti Solutions"
        description="Learn about how Maruti Solutions collects, uses, and protects your personal information. Read our comprehensive privacy policy."
        keywords={["Privacy Policy", "Data Protection", "Personal Information", "Data Security", "Maruti Solutions"]}
      />
      {/* Hero Section */}
      <section className="section bg-background-light/30">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient-animate"
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-center text-gray-300 max-w-3xl mx-auto"
          >
            How we collect, use, and protect your information
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <div ref={introRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Introduction</h2>
            <div className="card p-8">
              <p className="text-gray-300 leading-relaxed mb-4">
                At Maruti Solutions, we respect your privacy and are committed to protecting your personal data. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                you visit our website or use our services.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We use your data to provide and improve our services. By using our services, you agree to the 
                collection and use of information in accordance with this policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Information Collection */}
      <section className="section bg-background-light/30">
        <div className="container">
          <div ref={collectionRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Information We Collect</h2>
            <div className="card p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Personal Data</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    While using our services, we may ask you to provide us with certain personally identifiable 
                    information that can be used to contact or identify you. This may include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Name and contact information</li>
                    <li>Company information</li>
                    <li>Project requirements and details</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Usage Data</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    We automatically collect certain information when you visit our website, including:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Browser type and version</li>
                    <li>Time spent on pages</li>
                    <li>Device information</li>
                    <li>Other diagnostic data</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Usage */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <div ref={useRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">How We Use Your Data</h2>
            <div className="card p-8">
              <ul className="space-y-4 text-gray-300">
                <li>• To provide and maintain our services</li>
                <li>• To notify you about changes to our services</li>
                <li>• To provide customer support</li>
                <li>• To gather analysis for improving our services</li>
                <li>• To monitor the usage of our services</li>
                <li>• To detect, prevent and address technical issues</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-background-light/30">
        <div className="container">
          <div ref={contactRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Contact Us</h2>
            <div className="card p-8">
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• By email: privacy@marutisolutions.com</li>
                <li>• By visiting our contact page</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}