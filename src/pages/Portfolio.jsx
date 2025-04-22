import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Portfolio() {
  const aiSection = useScrollAnimation();
  const webSection = useScrollAnimation();
  const customSection = useScrollAnimation();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section bg-background-light/30">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient-animate">
            Our Portfolio
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations with cutting-edge technology solutions.
          </p>
        </div>
      </section>

      {/* AI & ML Projects */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-gradient-animate">
            AI & Machine Learning Projects
          </h2>
          <div ref={aiSection} className="grid md:grid-cols-2 gap-8 stagger-children">
            {aiProjects.map((project, index) => (
              <div key={index} className="card card-hover">
                <h3 className="text-xl font-bold mb-4 text-gradient-animate">{project.title}</h3>
                
                <div className="mb-4">
                  <h4 className="text-accent font-bold mb-2">Challenge:</h4>
                  <p className="text-gray-300">{project.challenge}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-accent font-bold mb-2">Solution:</h4>
                  <p className="text-gray-300">{project.solution}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-accent font-bold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-background-light/30 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-accent font-bold mb-2">Results:</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    {project.results.map((result, i) => (
                      <li key={i}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web & Mobile Projects */}
      <section className="section bg-background-light/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-gradient-animate">
            Web & Mobile Development Projects
          </h2>
          <div ref={webSection} className="grid md:grid-cols-2 gap-8 stagger-children">
            {webProjects.map((project, index) => (
              <div key={index} className="card card-hover">
                <h3 className="text-xl font-bold mb-4 text-gradient-animate">{project.title}</h3>
                
                <div className="mb-4">
                  <h4 className="text-accent font-bold mb-2">Challenge:</h4>
                  <p className="text-gray-300">{project.challenge}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-accent font-bold mb-2">Solution:</h4>
                  <p className="text-gray-300">{project.solution}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-accent font-bold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-background-light/30 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.testimonial && (
                  <div className="mb-4 mt-6 bg-background-dark/30 p-4 rounded-lg border-l-4 border-accent">
                    <h4 className="text-accent font-bold mb-2">Client Testimonial:</h4>
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-4 h-4 ${i < project.testimonial.rating ? 'text-yellow-400' : 'text-gray-500'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">{project.testimonial.rating}/5</span>
                    </div>
                    <p className="text-gray-300 italic">{project.testimonial.quote}</p>
                    <div className="mt-2 text-sm text-gray-400">
                      <span className="font-medium">— {project.testimonial.author}</span>
                      <span>, {project.testimonial.position}</span>
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-accent font-bold mb-2">Results:</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    {project.results.map((result, i) => (
                      <li key={i}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Software Solutions */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-gradient-animate">
            Custom Software Solutions
          </h2>
          <div ref={customSection} className="grid md:grid-cols-2 gap-8 stagger-children">
            {customProjects.map((project, index) => (
              <div key={index} className="card card-hover">
                <h3 className="text-xl font-bold mb-4 text-gradient-animate">{project.title}</h3>
                
                <div className="mb-4">
                  <h4 className="text-accent font-bold mb-2">Challenge:</h4>
                  <p className="text-gray-300">{project.challenge}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-accent font-bold mb-2">Solution:</h4>
                  <p className="text-gray-300">{project.solution}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-accent font-bold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-background-light/30 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-accent font-bold mb-2">Results:</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    {project.results.map((result, i) => (
                      <li key={i}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-background-light/30">
        <div className="container">
          <div className="card p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise in AI, web development, and custom software solutions
              can help you achieve your business goals.
            </p>
            <button className="button-primary">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

const aiProjects = [
  {
    title: "Predictive Maintenance System",
    challenge: "A manufacturing company was experiencing significant downtime due to unexpected equipment failures, resulting in production delays and increased maintenance costs.",
    solution: "We developed a predictive maintenance system using machine learning algorithms that analyze sensor data to predict equipment failures before they occur.",
    technologies: ["Python", "TensorFlow", "IoT Sensors", "Azure ML", "Power BI"],
    results: [
      "Reduced unplanned downtime by 78%",
      "Decreased maintenance costs by 42%",
      "Extended equipment lifespan by an average of 3 years"
    ],
    testimonial: {
      quote: "The predictive maintenance system has revolutionized our operations. We've seen dramatic reductions in downtime and maintenance costs, and the ROI has been exceptional.",
      author: "Vikram Singh",
      position: "Operations Director, IndusTech Manufacturing",
      rating: 5
    }
  },
  {
    title: "Customer Sentiment Analysis",
    challenge: "A large retail chain wanted to better understand customer sentiment across their multiple feedback channels, including social media, customer service interactions, and online reviews.",
    solution: "We implemented an AI-powered sentiment analysis system that processes and analyzes customer feedback from multiple sources in real-time.",
    technologies: ["NLP", "BERT", "Python", "AWS Comprehend", "Tableau"],
    results: [
      "Identified key customer pain points within 24 hours",
      "Improved customer satisfaction scores by 32%",
      "Enabled proactive response to emerging issues"
    ],
    testimonial: {
      quote: "The sentiment analysis tool has given us unprecedented insights into our customers' experiences. We can now address issues before they become widespread problems.",
      author: "Ananya Patel",
      position: "Customer Experience Manager, RetailGiant",
      rating: 4.7
    }
  },
  {
    title: "Predictive Maintenance System",
    challenge: "A leading manufacturing company was experiencing unexpected equipment failures resulting in costly downtime.",
    solution: "We developed an ML-powered predictive maintenance system that analyzes sensor data to forecast equipment failures before they occur.",
    technologies: ["TensorFlow", "IoT sensors", "Custom Dashboard"],
    results: [
      "78% reduction in unplanned downtime",
      "45% decrease in maintenance costs"
    ],
    testimonial: {
      quote: "The predictive maintenance solution has transformed our operations. We can now plan maintenance activities proactively and avoid costly downtime.",
      author: "Rajesh Kumar",
      position: "Plant Manager, Manufacturing Excellence",
      rating: 4.9
    }
  },
  {
    title: "Intelligent Customer Service Assistant",
    challenge: "An e-commerce company needed to improve customer support while reducing operational costs.",
    solution: "We created a custom RAG-based AI assistant that handles customer inquiries, processes returns, and escalates complex issues to human agents.",
    technologies: ["OpenAI APIs", "Vector Databases", "Knowledge Management System"],
    results: [
      "65% of inquiries now handled automatically",
      "40% reduction in response time",
      "92% customer satisfaction"
    ],
    testimonial: {
      quote: "The AI assistant has revolutionized our customer service operations. Our team can now focus on complex issues while routine inquiries are handled automatically.",
      author: "Meera Joshi",
      position: "Customer Experience Director, ShopEasy",
      rating: 4.8
    }
  }
];

const webProjects = [
  {
    title: "E-Commerce Platform Redesign",
    challenge: "A leading retail company was struggling with an outdated e-commerce platform that had poor user experience and low conversion rates.",
    solution: "We redesigned and rebuilt their e-commerce platform with a modern tech stack, focusing on mobile responsiveness, performance optimization, and intuitive user experience.",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Redux", "Stripe API"],
    results: [
      "42% increase in conversion rate",
      "65% reduction in page load time",
      "38% increase in average order value"
    ],
    testimonial: {
      quote: "The team at Maruti Solutions transformed our online presence completely. The new platform is not only visually stunning but has significantly improved our sales and customer satisfaction.",
      author: "Rajiv Mehta",
      position: "CTO, RetailPlus",
      rating: 5
    }
  },
  {
    title: "Healthcare Patient Portal",
    challenge: "A healthcare provider needed a secure, HIPAA-compliant patient portal that would allow patients to access their medical records, schedule appointments, and communicate with healthcare providers.",
    solution: "We developed a comprehensive patient portal with end-to-end encryption, two-factor authentication, and intuitive interfaces for both patients and healthcare providers.",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Azure", "OAuth 2.0"],
    results: [
      "Reduced administrative workload by 35%",
      "Improved patient satisfaction scores by 28%",
      "Decreased no-show appointments by 45%"
    ],
    testimonial: {
      quote: "Maruti Solutions delivered a secure and user-friendly patient portal that exceeded our expectations. Their understanding of healthcare regulations and security requirements was impressive.",
      author: "Dr. Priya Sharma",
      position: "Medical Director, HealthFirst",
      rating: 4.8
    }
  },
  {
    title: "Enterprise Resource Planning Platform",
    challenge: "A growing business needed to integrate disparate systems across departments.",
    solution: "We designed and developed a comprehensive ERP solution with custom modules for inventory, HR, finance, and customer management.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    results: [
      "60% improvement in cross-departmental workflow efficiency",
      "Complete data integration across all business functions"
    ],
    testimonial: {
      quote: "The ERP system has streamlined our entire operation. What used to take days now happens in minutes, and we have complete visibility across all departments.",
      author: "Sanjay Gupta",
      position: "CEO, GrowthTech Solutions",
      rating: 5
    }
  },
  {
    title: "Cross-Platform Delivery Management App",
    challenge: "A logistics company needed a seamless solution for delivery tracking and management.",
    solution: "We built a cross-platform application for real-time tracking, route optimization, and delivery confirmation.",
    technologies: ["Flutter", "Firebase", "Google Maps API", "Custom Backend"],
    results: [
      "35% reduction in delivery times",
      "99.8% delivery confirmation accuracy"
    ]
  }
];

const customProjects = [
  {
    title: "Automated Document Processing System",
    challenge: "A financial services firm was manually processing thousands of documents daily.",
    solution: "We developed an AI-powered document processing system that automatically extracts, categorizes, and stores information from various document types.",
    technologies: ["Computer Vision", "NLP", "Custom OCR"],
    results: [
      "90% reduction in manual processing time",
      "99.2% accuracy in data extraction"
    ]
  },
  {
    title: "Healthcare Data Analytics Platform",
    challenge: "A healthcare provider needed better insights from patient data while maintaining strict privacy compliance.",
    solution: "We created a secure analytics platform with anonymization capabilities and predictive health insights.",
    technologies: ["Python", "Secure Cloud Infrastructure", "HIPAA-compliant Architecture"],
    results: [
      "Identified trends leading to 23% improvement in preventative care measures",
      "Maintained complete data security"
    ]
  }
];
