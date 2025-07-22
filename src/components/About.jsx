import React, { useEffect, useRef } from 'react';
import { Target, Users, Award, Zap } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '2+', label: 'Years Experience' },
    { number: '24/7', label: 'Support' },
  ];

  const values = [
    {
      icon: <Target className="text-purple-600" size={48} />,
      title: 'Mission-Driven',
      description: 'We focus on delivering solutions that align with your business objectives and drive measurable results.',
      color: 'purple'
    },
    {
      icon: <Users className="text-cyan-600" size={48} />,
      title: 'Client-Centric',
      description: 'Our clients success is our success. We build lasting partnerships through exceptional service.',
      color: 'cyan'
    },
    {
      icon: <Award className="text-yellow-600" size={48} />,
      title: 'Quality First',
      description: 'We maintain the highest standards in every project, ensuring excellence in design and development.',
      color: 'yellow'
    },
    {
      icon: <Zap className="text-pink-600" size={48} />,
      title: 'Innovation',
      description: 'We stay ahead of trends and technologies to deliver cutting-edge solutions for modern challenges.',
      color: 'pink'
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const statVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
          >
            About Cincobyte
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            We are a forward-thinking technology company dedicated to transforming businesses 
            through innovative digital solutions and exceptional user experiences.
          </motion.p>
        </motion.div>

        {/* Animated Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              variants={statVariants}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 }
              }}
            >
              <motion.div 
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-slate-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Values */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {values.map((value, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(168, 85, 247, 0.15)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="mb-4"
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
              >
                {value.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {value.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
              <motion.div
                className={`mt-4 h-1 bg-gradient-to-r from-${value.color}-400 to-${value.color}-600 rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;