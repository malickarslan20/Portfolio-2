import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      message: formData.message,
    };

    emailjs
      .send('service_h5k663a', 'template_1relfh5', templateParams, 'PgPgnjyw2-vqkM6QO')
      .then(
        () => {
          alert('Thank you! Your message has been sent.');
          setFormData({ name: '', email: '', company: '', message: '' });
        },
        (error) => {
          console.error('EmailJS error:', error);
          alert('Oops! Something went wrong. Please try again later.');
        }
      );
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: 'Email',
      details: 'cincobyteofficial@gmail.com',
      link: 'cincobyteofficial@gmail.com'
    },
    {
      icon: <Phone className="text-emerald-600" size={24} />,
      title: 'Phone',
      details: '+923343515122',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="text-red-600" size={24} />,
      title: 'Address',
      details: 'Old Civil lines, Sargodha, Pakistan',
      link: '#'
    },
    {
      icon: <Clock className="text-purple-600" size={24} />,
      title: 'Business Hours',
      details: 'Mon - Fri: 7:00 AM - 11:00 PM EST',
      link: '#'
    },
    {
      icon: <Globe className="text-indigo-600" size={24} />,
      title: 'Website',
      details: 'www.innovatecorp.com',
      link: 'https://www.innovatecorp.com'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get In Touch</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="bg-gray-100 p-3 rounded-lg group-hover:bg-blue-50 transition-colors duration-200">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{info.title}</h4>
                    <a 
                      href={info.link}
                      className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {info.details}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-200 rounded-xl h-64 flex items-center justify-center">
  <div className="text-center">
    <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
    <a
      href="https://www.google.com/maps/place/123+Innovation+Street,+Tech+City"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      Old Civil Lines, Sargodha, Pakistan
    </a>
    <p className="text-sm text-gray-500 mt-2">Click to view on Google Maps</p>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
