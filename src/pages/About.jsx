import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const overviewRef = useScrollAnimation();
  const missionRef = useScrollAnimation();
  const visionRef = useScrollAnimation();
  const approachRef = useScrollAnimation();
  const teamRef = useScrollAnimation();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section bg-background-light/30">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient-animate">
            About Maruti Solutions
          </h1>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <div ref={overviewRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Company Overview</h2>
            <div className="card p-8">
              <p className="text-gray-300 leading-relaxed">
                Maruti Solutions is a cutting-edge IT services and consulting company based in Indore, India. 
                We specialize in harnessing the power of artificial intelligence, machine learning, and custom 
                software development to solve real-world business challenges. Our team of expert developers, 
                data scientists, and IT consultants work collaboratively to deliver innovative solutions that 
                drive business growth and digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-background-light/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div ref={missionRef} className="slide-in-left">
              <div className="card h-full">
                <h2 className="text-2xl font-bold mb-4 text-gradient-animate">Our Mission</h2>
                <p className="text-gray-300 leading-relaxed">
                  To empower businesses through intelligent technology solutions that optimize operations, 
                  enhance decision-making, and create sustainable competitive advantages in an increasingly 
                  digital world.
                </p>
              </div>
            </div>
            <div ref={visionRef} className="slide-in-right">
              <div className="card h-full">
                <h2 className="text-2xl font-bold mb-4 text-gradient-animate">Our Vision</h2>
                <p className="text-gray-300 leading-relaxed">
                  To be recognized as the premier AI and software development partner for businesses seeking 
                  innovative solutions to complex challenges, known for our technical excellence, client-focused 
                  approach, and transformative results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <div ref={approachRef} className="scale-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Our Approach</h2>
            <div className="card p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                At Maruti Solutions, we believe in a collaborative, transparent approach to every project. 
                We begin by deeply understanding your business challenges, then leverage our technical expertise 
                to design and implement solutions that deliver measurable value.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our agile methodology ensures flexibility throughout the development process, allowing us to 
                adapt to changing requirements while maintaining focus on your core business objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section bg-background-light/30">
        <div className="container">
          <div ref={teamRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Our Team</h2>
            <div className="card p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Our diverse team comprises experienced software engineers, AI specialists, ML experts, and 
                business consultants who bring together a unique blend of technical expertise and industry 
                knowledge.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Led by our founding team of technology veterans with backgrounds from leading tech organizations, 
                we maintain a culture of continuous learning and innovation.
              </p>
            </div>
            
            {/* Team Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { value: "15+", label: "Team Members" },
                { value: "10+", label: "Projects Delivered" },
                { value: "1", label: "Country Served" },
                { value: "98%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <div key={index} className="card card-hover text-center p-6">
                  <div className="text-3xl font-bold text-gradient-animate mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
