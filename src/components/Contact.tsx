import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactCyberpunk = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  // Helper for random positions
  const randomPosition = () => `${Math.random() * 100}%`;
  const randomSize = () => 10 + Math.random() * 20;

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge software solutions? Get in touch with our team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 3D Cyberpunk Card */}
          <Tilt glareEnable scale={1.05} transitionSpeed={400} className="animate-fade-in-left">
            <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden h-96">
              
              {/* Neon Wireframe Grid */}
              <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-20">
                {Array.from({ length: 144 }).map((_, i) => (
                  <div key={i} className="border border-cyan-500/50 animate-pulse"></div>
                ))}
              </div>

              {/* Rotating 3D Cubes */}
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-cyan-500/50 border border-cyan-400 rounded-sm shadow-lg animate-rotate-slow"
                  style={{
                    width: `${randomSize()}px`,
                    height: `${randomSize()}px`,
                    left: randomPosition(),
                    top: randomPosition(),
                    transform: `rotate(${i * 45}deg)`
                  }}
                ></div>
              ))}

              {/* Floating Neon Particles */}
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-purple-500 rounded-full animate-float-fast opacity-70"
                  style={{
                    left: randomPosition(),
                    top: randomPosition(),
                    animationDelay: `${Math.random() * 3000}ms`
                  }}
                ></div>
              ))}

              {/* Contact Info */}
              <div className="mt-8 space-y-6 relative z-10">
                {[
                  { icon: Mail, label: 'Email', value: 'hello@techflow.dev', gradient: 'from-cyan-400 to-purple-600' },
                  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', gradient: 'from-green-400 to-blue-500' },
                  { icon: MapPin, label: 'Location', value: 'San Francisco, CA', gradient: 'from-purple-400 to-pink-500' }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">{item.label}</div>
                        <div className="text-gray-300">{item.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Tilt>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <form onSubmit={handleSubmit} className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 space-y-6">
              {[
                { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your.email@example.com' }
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-200 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 bg-black/50 text-white placeholder-gray-400"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 bg-black/50 text-white placeholder-gray-400 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-400 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCyberpunk;
