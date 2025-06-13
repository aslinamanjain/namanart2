import React, { useState, useEffect } from 'react';
import { Mail, Instagram, Youtube, Briefcase, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram className="h-5 w-5" />,
      url: 'https://www.instagram.com/namanart/',
      description: 'Behind-the-scenes content',
    },
    {
      name: 'YouTube',
      icon: <Youtube className="h-5 w-5" />,
      url: 'https://www.youtube.com/@OfficialNamanArt',
      description: 'Latest video projects',
    },
    {
      name: 'Behance',
      icon: <Briefcase className="h-5 w-5" />,
      url: 'https://www.behance.net/namanjain9?fbclid=PAZXh0bgNhZW0CMTEAAafyY4n79hUlJWB0Vz9ctH2gByqZx5Y-2nIGylhHT1b4A3eMaykPO9Go4-FIkA_aem__Pyv_HhZynYcm8FsqObIbA',
      description: 'Portfolio showcase',
    },
  ];

  const projectTypes = [
    'Direction & Filmmaking',
    'Lyrical Typography Videos',
    'Concert Visuals',
    'Music Videos',
    'Advertisement Campaigns',
    'Album Cover Art',
    'Brand Collaborations',
    'Other Creative Projects',
  ];

  return (
    <div className="min-h-screen py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="font-heading text-6xl md:text-7xl font-normal mb-6 tracking-ultra-wide text-gray-100">
            LET'S CREATE TOGETHER
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed font-sans text-gray-300">
            Ready to bring your vision to life? Whether it's a music video, concert visuals, 
            or any creative project, let's craft something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-gray-800 rounded-2xl p-8">
              <h2 className="font-display text-3xl font-bold mb-8 tracking-wide text-gray-100">
                Start Your Project
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-display font-medium mb-2 tracking-wide text-gray-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-gray-400 rounded-lg focus:outline-none transition-all duration-300 font-sans"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-display font-medium mb-2 tracking-wide text-gray-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-gray-400 rounded-lg focus:outline-none transition-all duration-300 font-sans"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="subject" className="block font-display font-medium mb-2 tracking-wide text-gray-300">
                    Project Type *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border bg-gray-700 border-gray-600 text-gray-100 focus:border-gray-400 rounded-lg focus:outline-none transition-all duration-300 font-sans"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-display font-medium mb-2 tracking-wide text-gray-300">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-gray-400 rounded-lg focus:outline-none transition-all duration-300 resize-none font-sans"
                    placeholder="Tell me about your vision, timeline, budget, and any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full font-display font-semibold py-4 px-6 bg-gray-100 hover:bg-white text-gray-900 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 tracking-wider"
                >
                  <Send className="h-5 w-5" />
                  <span>SEND MESSAGE</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Contact Information */}
            <div className="bg-gray-800 rounded-2xl p-8">
              <h2 className="font-display text-3xl font-bold mb-8 tracking-wide text-gray-100">
                Get In Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-700 text-gray-300 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1 tracking-wide text-gray-100">
                      Email
                    </h3>
                    <p className="font-sans text-gray-300">
                      artist@namanart.com
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold mb-6 tracking-wide text-gray-100">
                Follow My Journey
              </h3>

              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gray-600 text-gray-300 group-hover:bg-gray-500 rounded-lg flex items-center justify-center transition-all duration-300">
                      {social.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-gray-100 group-hover:text-gray-200 transition-colors duration-300 tracking-wide">
                        {social.name}
                      </h4>
                      <p className="text-sm font-sans text-gray-400">
                        {social.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-gray-800 to-transparent rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold mb-4 tracking-wide text-gray-100">
                Quick Response
              </h3>
              <p className="leading-relaxed font-sans text-gray-300">
                I typically respond to project inquiries within 24 hours. For urgent requests, 
                please mention it in your message, and I'll prioritize accordingly.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Message */}
        <div className="text-center mt-20 bg-gray-800 rounded-2xl p-12">
          <h2 className="font-heading text-4xl md:text-5xl font-normal mb-6 tracking-widest text-gray-100">
            LET'S CREATE SOMETHING TIMELESS
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed font-sans text-gray-300">
            Every great project starts with a conversation. I'm excited to hear about your vision 
            and explore how we can bring it to life through the power of visual storytelling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;