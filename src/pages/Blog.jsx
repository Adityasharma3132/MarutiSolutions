import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import SEO from '../components/shared/SEO';

export default function Blog() {
  const latestArticlesRef = useScrollAnimation();
  const tutorialsRef = useScrollAnimation();

  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="Blog & Tutorials | Maruti Solutions"
        description="Stay updated with the latest insights, articles and tutorials on AI, software development, and technology trends from Maruti Solutions."
        keywords={["AI Blog", "Technology Insights", "Software Development Tutorials", "RAG Systems", "Machine Learning", "Tech Trends"]}
      />
      {/* Hero Section */}
      <section className="section bg-background-light/30">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient-animate">
            Latest Insights & Tutorials
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest in AI, software development, and technology trends
          </p>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-gradient-animate">Latest Articles</h2>
          <div ref={latestArticlesRef} className="grid md:grid-cols-2 gap-8 stagger-children">
            {articles.map((article, index) => (
              <Link key={index} to={article.slug} className="card card-hover p-8 hover:scale-105 transition-transform">
                <span className="text-sm text-accent mb-4 block">{article.date}</span>
                <h3 className="text-xl font-bold mb-4 text-gradient-animate">{article.title}</h3>
                <p className="text-gray-300 mb-6">{article.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, i) => (
                    <span key={i} className="bg-background-light/30 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src={article.author.avatar} 
                      alt={article.author.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <span className="text-sm text-gray-300">{article.author.name}</span>
                  </div>
                  <span className="text-accent">Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Tutorials */}
      <section className="section bg-background-light/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-gradient-animate">Technical Tutorials</h2>
          <div ref={tutorialsRef} className="grid md:grid-cols-2 gap-8 stagger-children">
            {tutorials.map((tutorial, index) => (
              <Link key={index} to={tutorial.slug} className="card card-hover p-8 hover:scale-105 transition-transform">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm px-3 py-1 rounded-full bg-accent/20 text-accent">
                    {tutorial.difficulty}
                  </span>
                  <span className="text-sm text-gray-400">{tutorial.duration}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gradient-animate">{tutorial.title}</h3>
                <p className="text-gray-300 mb-6">{tutorial.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {tutorial.technologies.map((tech, i) => (
                    <span key={i} className="bg-background-light/30 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img 
                      src={tutorial.author.avatar} 
                      alt={tutorial.author.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <span className="text-sm text-gray-300">{tutorial.author.name}</span>
                  </div>
                  <span className="text-accent">Start Tutorial →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <div className="card p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights, tutorials, and technology updates delivered directly to your inbox.
            </p>
            <form className="flex gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-background-light/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button type="submit" className="button-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

const articles = [
  {
    title: "The Future of RAG Systems in Enterprise Knowledge Management",
    slug: "future-of-rag-systems",
    excerpt: "Explore how RAG combines the power of large language models with proprietary company data to create intelligent knowledge systems that enhance decision-making and preserve institutional knowledge.",
    date: "March 5, 2025",
    tags: ["RAG", "Enterprise", "Knowledge Management", "AI"],
    author: {
      name: "Vansh Vyas",
      avatar: "/assets/team/vansh1.jpg"
    }
  },
  {
    title: "Balancing Innovation and Security in AI Implementation",
    slug: "ai-innovation-security-balance",
    excerpt: "A comprehensive guide to implementing cutting-edge AI solutions while maintaining robust security protocols and data privacy compliance, with practical frameworks for risk assessment.",
    date: "March 3, 2025",
    tags: ["AI Security", "Innovation", "Compliance"],
    author: {
      name: "Somya Sharma",
      avatar: "/assets/team/Somya.jpg"
    }
  },
  {
    title: "Web Development Trends That Will Define 2025",
    slug: "web-dev-trends-2025",
    excerpt: "From AI-powered components to advanced 3D visualizations, discover the emerging technologies that will shape user experiences in the coming year.",
    date: "February 28, 2025",
    tags: ["Web Development", "Trends", "UI/UX"],
    author: {
      name: "Lavesh Jain",
      avatar: "/assets/team/Lavesh.jpg"
    }
  },
  {
    title: "The Business Case for Custom Software vs. Off-the-Shelf Solutions",
    slug: "custom-vs-off-the-shelf-software",
    excerpt: "A comprehensive analysis helping decision-makers understand the long-term ROI considerations, maintenance implications, and strategic advantages of purpose-built software.",
    date: "February 25, 2025",
    tags: ["Software Development", "Business Strategy", "ROI"],
    author: {
      name: "Aaditya Sharma",
      avatar: "/assets/team/aadityaa.jpg"
    }
  }
];

const tutorials = [
  {
    title: "Building Your First RAG Application with Python",
    slug: "building-rag-application-python",
    description: "A step-by-step tutorial on creating a basic Retrieval-Augmented Generation system using Python, vector databases, and open-source LLMs.",
    difficulty: "Intermediate",
    duration: "45 min read",
    technologies: ["Python", "Vector DB", "LLM", "RAG"],
    author: {
      name: "Somya Sharma",
      avatar: "/assets/team/Somya.jpg"
    }
  },
  {
    title: "Optimizing React Applications for Enterprise-Scale Performance",
    slug: "react-enterprise-optimization",
    description: "Learn practical techniques for improving the performance of large-scale React applications, including state management strategies and advanced rendering techniques.",
    difficulty: "Advanced",
    duration: "60 min read",
    technologies: ["React", "JavaScript", "Performance", "Redux"],
    author: {
      name: "Vivek Raikwar",
      avatar: "/assets/team/Vivek.jpg"
    }
  }
];
