import React from 'react';
import { motion } from 'framer-motion';


const teamMembers = [
  {
    name: 'Aaditya Sharma',
    role: 'Chief Executive Officer and CFO',
    image: '/assets/team/aadityaa.jpg', 
    altImage: '/assets/team/placeholder-male.svg',
    description: 'A visionary leader with extensive experience in AI and software development, driving innovation and growth at Maruti Solutions.',
    linkedin: 'https://in.linkedin.com/in/adityasharma31',
    twitter: 'https://x.com/CEO_Maruti'
  },
  
  {
    name: 'Somya Sharma',
    role: 'Co Founder and Chief Technology Officer',
    image: '/assets/team/Somya.jpg',
    altImage: '/assets/team/placeholder-male.svg',
    description: 'An expert in cutting-edge technologies, leading our technical initiatives and ensuring excellence in all our solutions.',
    linkedin: 'https://linkedin.com/in/somya-sharma-mhs',
    twitter: 'https://x.com/_somyasharma03'
  },
  {
    name: 'Lavesh Jain',
    role: 'Chief Operations Officer and AI Development Head',
    image: '/assets/team/Lavesh.jpg',
    altImage: '/assets/team/placeholder-male.svg',
    description: 'A strategic thinker with a proven track record in optimizing business operations and delivering exceptional results.',
    linkedin: 'https://www.linkedin.com/in/jlavesh/',
    twitter: 'https://x.com/laveshjain31'
  },
  {
    name: 'Vivek Raikwar',
    role: 'Creative Head and Head of AI Research',
    image: '/assets/team/Vivek.jpg',
    altImage: '/assets/team/placeholder-male.svg',
    description: 'Leading our AI research initiatives and developing innovative solutions for complex business challenges.',
    linkedin: 'https://www.linkedin.com/in/vivekraikwar/',
    twitter: 'https://x.com/Vivek_raikwar13'
  },
  {
    name: 'Vansh Vyas',
    role: 'Head of Product Development',
    image: '/assets/team/vansh1.jpg',
    altImage: '/assets/team/placeholder-male.svg',
    description: 'A product visionary focused on creating user-centric solutions that transform businesses.',
    linkedin: 'https://www.linkedin.com/in/vansh-vyas-8956942a0/',
    twitter: 'https://x.com/VanshVyas286776'
  },
];




// const teamMembers = [
//   {
//     name: 'Aaditya Sharma',
//     role: 'Chief Executive Officer and CFO',
//     image: 'avatars//userimages//Aaditya.jpg',
//     description: 'A visionary leader with extensive experience in AI and software development, driving innovation and growth at Maruti Solutions.',
//   },
//   {
//     name: 'Somya Sharma',
//     role: 'Co Founder and Chief Technology Officer',
//     image: 'avatars//userimages//Somya.jpg',
//     description: 'An expert in cutting-edge technologies, leading our technical initiatives and ensuring excellence in all our solutions.',
//   },
//   {
//     name: 'Lavesh Jain',
//     role: 'Chief Operations Officer and AI Development Head',
//     image: 'avatars//userimages//Lavesh.jpg',
//     description: 'A strategic thinker with a proven track record in optimizing business operations and delivering exceptional results.',
//   },
//   {
//     name: 'Vivek Raikwar',
//     role: 'Creative Head and Head of AI Research',
//     image: 'avatars//userimages//Vivek.jpg',
//     description: 'Leading our AI research initiatives and developing innovative solutions for complex business challenges.',
//   },
//   {
//     name: 'Vansh Vyas',
//     role: 'Head of Product Development',
//     image: 'avatars//userimages//Vansh.jpg',
//     description: 'A product visionary focused on creating user-centric solutions that transform businesses.',
//   },
// ];

const Team = () => {
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
              Our Leadership Team
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-xl text-gray-300"
            >
              Meet the visionaries driving innovation at Maruti Solutions
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card card-hover overflow-hidden"
            >
              <div className="relative w-full mb-4 overflow-hidden rounded-lg aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.src = member.altImage || 'https://via.placeholder.com/400x400?text=Photo';
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
                <p className="text-accent mt-1">{member.role}</p>
                <p className="mt-3 text-gray-300">{member.description}</p>
                <div className="mt-4 flex space-x-3">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  )}
                  {member.twitter && (
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </section>
    </div>
  );
};

export default Team;