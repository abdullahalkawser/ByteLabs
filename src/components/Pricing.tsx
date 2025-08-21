import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$999',
      period: '/project',
      description: 'Perfect for small businesses and startups',
      features: [
        'Responsive Web Development',
        'Basic SEO Optimization',
        'Mobile-First Design',
        '30 Days Support',
        'Source Code Access'
      ],
      popular: false
    },
    {
      name: 'Standard',
      price: '$2,499',
      period: '/project',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Everything in Basic',
        'Custom Web Application',
        'Database Integration',
        'API Development',
        '90 Days Support',
        'Performance Optimization',
        'Security Audit'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '$4,999',
      period: '/project',
      description: 'Enterprise-level solutions with AI integration',
      features: [
        'Everything in Standard',
        'AI/ML Integration',
        'Advanced Analytics',
        'Cloud Deployment',
        'DevOps Pipeline',
        '180 Days Support',
        'Dedicated Project Manager',
        '24/7 Monitoring'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-96 h-96 bg-purple-600/20 rounded-full animate-blob top-[-10%] left-[5%] absolute" />
        <div className="w-72 h-72 bg-blue-500/20 rounded-full animate-blob animation-delay-2000 top-[30%] left-[70%] absolute" />
        <div className="w-80 h-80 bg-pink-500/20 rounded-full animate-blob animation-delay-4000 top-[60%] left-[20%] absolute" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl font-extrabold text-white mb-4">
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Choose the perfect plan for your project needs. All plans include our quality guarantee and ongoing support.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.05}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              className="relative"
            >
              <div
                className={`relative bg-gray-800/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Glass overlay */}
                <div className={`absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br ${
                  plan.popular
                    ? 'from-purple-500/10 to-blue-500/10'
                    : 'from-gray-700/10 to-gray-700/10'
                }`} />

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:scale-105'
                      : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                  }`}>
                    Get Started
                  </button>
                </div>
              </div>
            </Tilt>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            Need a custom solution? 
            <a href="#contact" className="text-purple-500 hover:text-blue-400 font-medium ml-1">
              Contact us for a personalized quote
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
