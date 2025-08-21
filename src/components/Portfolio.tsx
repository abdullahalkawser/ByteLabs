import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { ExternalLink, ArrowRight, X } from 'lucide-react';

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const [hiddenProjects, setHiddenProjects] = useState([]);

  const projects = [
    { title: 'E-commerce AI', description: 'AI product recommendation engine', tags: ['React', 'Node.js', 'AI'], image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'HealthCare AI', description: 'Telemedicine with AI diagnosis', tags: ['React Native', 'AI', 'Cloud'], image: 'https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'AI Analytics Dashboard', description: 'Predictive analytics for business intelligence', tags: ['Vue.js', 'Python', 'TensorFlow'], image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Social Media AI', description: 'AI-powered content suggestions', tags: ['React Native', 'AI', 'GraphQL'], image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'FinTech AI Dashboard', description: 'AI investment insights and predictions', tags: ['Angular', 'Node.js', 'AI'], image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Travel AI Planner', description: 'AI travel itinerary recommendations', tags: ['React', 'AI', 'API'], image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Education AI Platform', description: 'AI-based personalized learning', tags: ['Next.js', 'Node.js', 'AI'], image: 'https://images.pexels.com/photos/4145195/pexels-photo-4145195.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Crypto AI Exchange', description: 'AI-driven crypto trading insights', tags: ['React', 'Blockchain', 'AI'], image: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Smart Home AI', description: 'AI-based home automation', tags: ['Flutter', 'IoT', 'AI'], image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Job Portal AI', description: 'AI-powered job recommendations', tags: ['React', 'Node.js', 'AI'], image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Fitness AI App', description: 'Track workouts with AI suggestions', tags: ['React Native', 'Redux', 'AI'], image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Restaurant Finder AI', description: 'AI restaurant suggestions', tags: ['Vue.js', 'Node.js', 'AI'], image: 'https://images.pexels.com/photos/262918/pexels-photo-262918.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ];

  const displayedProjects = showAll
    ? projects.filter((_, index) => !hiddenProjects.includes(index))
    : projects.slice(0, 4).filter((_, index) => !hiddenProjects.includes(index));

  const handleClose = (index) => {
    setHiddenProjects([...hiddenProjects, index]);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Animated floating background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-3xl animate-float-slow top-[-100px] left-[-80px]" />
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full opacity-20 blur-3xl animate-float-slow top-[200px] right-[-150px]" />
        <div className="absolute w-56 h-56 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-20 blur-3xl animate-float-slow bottom-[50px] left-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our AI-powered projects and see how technology transforms industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.05}
              transitionSpeed={500}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
            >
              <div className="relative group bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300">
                {/* Close button */}
                <button
                  onClick={() => handleClose(index)}
                  className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800 p-6">
                  <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden border-4 border-gray-700">
                    <div className="h-2 bg-gray-700 relative">
                      <div className="absolute left-2 top-0.5 flex gap-1">
                        <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <div className="absolute inset-6 bg-black/20 rounded-lg blur-xl transform translate-y-4 translate-x-4 -z-10"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="text-blue-400 hover:text-blue-600 font-medium flex items-center gap-2 hover:gap-3 transition-all">
                      View Case Study
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-400 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
