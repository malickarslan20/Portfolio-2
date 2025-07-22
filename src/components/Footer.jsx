import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:bg-blue-400' },
    { icon: Linkedin, href: '#', color: 'hover:bg-blue-700' },
    { icon: Instagram, href: '#', color: 'hover:bg-pink-600' }
  ];

  const quickLinks = ['About', 'Services', 'Portfolio', 'Team', 'Contact'];
  const services = ['Web Development', 'Mobile Apps', 'Digital Strategy', 'Analytics & SEO', 'Security Solutions', 'Support & Maintenance'];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full filter blur-2xl"
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500 rounded-full filter blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center text-2xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="mr-3"
              >
                <Zap className="text-yellow-400" size={28} />
              </motion.div>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Cincobyte
              </span>
            </motion.div>
            <motion.p 
              className="text-slate-300 mb-6 leading-relaxed max-w-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Delivering value in every byte through innovative solutions that transform businesses 
              and create lasting value for our clients.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href} 
                  className={`bg-slate-800 ${social.color} p-3 rounded-lg transition-all duration-300 shadow-lg`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 360,
                    boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <motion.ul 
              className="space-y-2"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {quickLinks.map((item, index) => (
                <motion.li 
                  key={item}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <motion.button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-2 transform"
                    whileHover={{ 
                      x: 10,
                      color: "#ffffff"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Services
            </h3>
            <motion.ul 
              className="space-y-2 text-slate-300"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.map((service, index) => (
                <motion.li 
                  key={service}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ 
                    x: 5,
                    color: "#ffffff"
                  }}
                  className="cursor-pointer transition-colors duration-200"
                >
                  {service}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-slate-400 mb-4 md:mb-0"
            whileHover={{ color: "#ffffff" }}
          >
            © 2024 Cincobyte. All rights reserved.
          </motion.p>
          <div className="flex items-center space-x-6">
            <motion.a 
              href="#" 
              className="text-slate-400 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#" 
              className="text-slate-400 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Terms of Service
            </motion.a>
            <motion.button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 p-2 rounded-lg transition-all duration-300 shadow-lg"
              whileHover={{ 
                scale: 1.1,
                rotate: 360,
                boxShadow: "0 10px 30px rgba(168, 85, 247, 0.4)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;