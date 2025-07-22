import React, { useEffect, useRef } from 'react';
import { Code, Smartphone, Globe, BarChart, Shield, Headphones } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const services = [
    {
      icon: <Code className="text-purple-600" size={48} />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
      features: ['React & Next.js', 'Node.js Backend', 'Database Design', 'API Integration'],
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      icon: <Smartphone className="text-cyan-600" size={48} />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization'],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: <Globe className="text-pink-600" size={48} />,
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation strategies to modernize your business operations.',
      features: ['Digital Consulting', 'Technology Roadmap', 'Process Optimization', 'Change Management'],
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      icon: <BarChart className="text-yellow-600" size={48} />,
      title: 'Analytics & SEO',
      description: 'Data-driven insights and search engine optimization to maximize your online presence.',
      features: ['SEO Optimization', 'Google Analytics', 'Performance Tracking', 'Conversion Optimization'],
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      icon: <Shield className="text-red-600" size={48} />,
      title: 'Security Solutions',
      description: 'Robust security measures to protect your digital assets and user data.',
      features: ['Security Audits', 'Data Protection', 'Compliance', 'Risk Assessment'],
      gradient: 'from-red-500 to-pink-600'
    },
    {
      icon: <Headphones className="text-indigo-600" size={48} />,
      title: 'Support & Maintenance',
      description: '24/7 technical support and ongoing maintenance to ensure peak performance.',
      features: ['24/7 Monitoring', 'Bug Fixes', 'Updates', 'Performance Optimization'],
      gradient: 'from-indigo-500 to-purple-600'
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
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            Our Services
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            We offer comprehensive digital solutions tailored to meet your unique business needs 
            and drive sustainable growth.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden border border-gray-100"
              variants={itemVariants}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                initial={{ scale: 0, rotate: 45 }}
                whileHover={{ scale: 1.5, rotate: 0 }}
                transition={{ duration: 0.5 }}
              />
              
              <motion.div 
                className="mb-6 relative z-10"
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  scale: 1.2
                }}
                transition={{ duration: 0.6 }}
              >
                {service.icon}
              </motion.div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed relative z-10">
                {service.description}
              </p>
              
              <motion.ul 
                className="space-y-2 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {service.features.map((feature, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-center text-slate-700"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    <motion.div 
                      className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>

              {/* Hover Effect Border */}
              <motion.div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient}`}
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;