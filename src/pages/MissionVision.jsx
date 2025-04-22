import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';

export default function MissionVision() {
  const missionRef = useScrollAnimation();
  const visionRef = useScrollAnimation();
  const valuesRef = useScrollAnimation();
  const goalsRef = useScrollAnimation();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section bg-background-light/30">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient-animate">
            Our Mission & Vision
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Guiding principles that drive our innovation and commitment to excellence
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <div ref={missionRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Our Mission</h2>
            <div className="card p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="aspect-square rounded-full bg-accent/20 flex items-center justify-center p-8"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </motion.div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300 leading-relaxed text-lg mb-6">
                    To empower businesses through intelligent technology solutions that optimize operations, 
                    enhance decision-making, and create sustainable competitive advantages in an increasingly 
                    digital world.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    We are committed to delivering innovative AI and software solutions that solve real-world 
                    business challenges, drive digital transformation, and help our clients achieve their 
                    strategic objectives with measurable results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section bg-background-light/30">
        <div className="container">
          <div ref={visionRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Our Vision</h2>
            <div className="card p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <p className="text-gray-300 leading-relaxed text-lg mb-6">
                    To be recognized as the premier AI and software development partner for businesses seeking 
                    innovative solutions to complex challenges, known for our technical excellence, client-focused 
                    approach, and transformative results.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    We envision a future where our technology solutions empower organizations of all sizes to 
                    harness the full potential of artificial intelligence and custom software, creating more 
                    efficient, data-driven, and successful businesses across industries.
                  </p>
                </div>
                <div className="md:w-1/3">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="aspect-square rounded-full bg-primary/20 flex items-center justify-center p-8"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <div ref={valuesRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Innovation',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  description: 'We embrace cutting-edge technologies and creative thinking to develop solutions that push boundaries and create new possibilities.'
                },
                {
                  title: 'Excellence',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  ),
                  description: 'We are committed to delivering the highest quality in everything we do, from code quality to client communication and project management.'
                },
                {
                  title: 'Integrity',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  description: 'We operate with honesty, transparency, and ethical standards in all our business relationships and practices.'
                },
                {
                  title: 'Collaboration',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  description: 'We believe in the power of teamwork, both within our organization and in partnership with our clients, to achieve exceptional results.'
                },
                {
                  title: 'Client Focus',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  ),
                  description: 'We prioritize understanding our clients\' unique needs and challenges to deliver solutions that truly address their business objectives.'
                },
                {
                  title: 'Continuous Learning',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ),
                  description: 'We are committed to staying at the forefront of technology through ongoing education, research, and professional development.'
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-6 flex flex-col items-center text-center h-full"
                >
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="section bg-background-light/30">
        <div className="container">
          <div ref={goalsRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Strategic Goals</h2>
            <div className="card p-8">
              <ul className="space-y-6">
                {[
                  'Become the leading AI solutions provider in our target markets within the next five years',
                  'Continuously expand our technical capabilities to stay at the forefront of emerging technologies',
                  'Build long-term partnerships with clients based on trust, value, and measurable results',
                  'Cultivate a diverse, talented team that thrives on innovation and collaboration',
                  'Maintain sustainable growth while preserving our commitment to quality and client satisfaction'
                ].map((goal, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="text-accent mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-300 text-lg">{goal}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}