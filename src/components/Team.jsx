import React, { useEffect, useRef } from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';


const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const team = [
    {
      name: 'Shayan Mirza',
      role: 'CEO & Co-Founder',
      image: '/Shayan.jpg',
      bio: 'Build powerful, scalable, and efficient solutions with Python.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      },
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Zia Ur Rehmman',
      role: ' Co-Founder & Web Developer with Django',
      image: '/Zia.jpg',
      bio: 'Full-stack architect passionate about scalable solutions with Django.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      },
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Kashif Ur Rehman',
      role: 'CTO & Senior MERN  Developer',
      image: '/Kashif.jpg',
      bio: 'Senior developer with expertise in React, Node.js, and cloud architecture.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      },
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'Sheryar Yousaf',
      role: 'Flutter Developer',
      image: '/Sheryar.jpg',
      bio: 'Build fast, beautiful, and cross-platform mobile apps with Flutter.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      },
      gradient: 'from-pink-500 to-rose-500'
    },
    
    {
      name: 'Malick Arslan',
      role: 'Frontend Developer',
      image: '/Arslan.jpg',
      bio: 'Craft responsive, user-friendly interfaces using modern frontend technologies like React, Vue, and Tailwind CSS..',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      },
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Talha Ayyaz',
      role: 'Dart-Powered App Creator',
      image: '/Talha.jpg',
      bio: 'Create high-performance cross-platform apps using Flutter and Dart for seamless Android and iOS experiences.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      },
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-pink-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            Meet Our Team
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Our diverse team of experts brings together years of experience and passion 
            for creating exceptional digital solutions.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {team.map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group relative"
              variants={itemVariants}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative overflow-hidden">
                <motion.img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.8 }}
                />
                <motion.div 
                  className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex space-x-3">
                    <motion.a 
                      href={member.social.linkedin} 
                      className="bg-white text-slate-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin size={16} />
                    </motion.a>
                    <motion.a 
                      href={member.social.twitter} 
                      className="bg-white text-slate-800 p-2 rounded-full hover:bg-blue-400 hover:text-white transition-colors duration-200"
                      whileHover={{ scale: 1.2, rotate: -360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Twitter size={16} />
                    </motion.a>
                    <motion.a 
                      href={member.social.github} 
                      className="bg-white text-slate-800 p-2 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-200"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={16} />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
              
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold text-slate-900 mb-1"
                  whileHover={{ color: "#8b5cf6" }}
                  transition={{ duration: 0.3 }}
                >
                  {member.name}
                </motion.h3>
                <motion.div 
                  className={`font-semibold mb-3 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}
                  whileHover={{ scale: 1.05 }}
                >
                  {member.role}
                </motion.div>
                <p className="text-slate-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Animated Border */}
              <motion.div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${member.gradient}`}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;