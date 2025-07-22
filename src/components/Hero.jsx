import React from 'react';
import { ArrowRight, ChevronDown, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl"
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div 
        className="container mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center mb-6"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="mr-4"
          >
            <Zap className="text-yellow-400" size={48} />
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Cincobyte
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.h2 
            className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          >
            Delivering Value in Every Byte
          </motion.h2>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Transform your business with cutting-edge solutions that drive growth, 
          innovation, and lasting success in the digital landscape.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span>View Our Work</motion.span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>
          
          <motion.button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.2 }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default Hero;