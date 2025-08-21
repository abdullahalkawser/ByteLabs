import React from 'react';

const AIShowcase = () => {
  const aiProducts = [
    {
      image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4435d0?auto=format&fit=crop&w=400&q=80', // realistic AI image
      title: '🤖 AI Chatbot for Business Support',
      useCase: 'Customer service automation (Bank, Hospital, E-commerce)',
      features: ['FAQ answering bot', 'Multi-language support', '24/7 instant replies']
    },
    {
      image: 'https://images.unsplash.com/photo-1581090700227-79b6f0fdfc40?auto=format&fit=crop&w=400&q=80',
      title: '🧑‍💼 Smart Resume Screener (HR AI Tool)',
      useCase: 'HR automation',
      features: ['Upload CV → AI extracts skills & ranks candidates', 'Saves HR time', 'JD-candidate matching']
    },
    {
      image: 'https://images.unsplash.com/photo-1591696331117-0e1ce96fa7a1?auto=format&fit=crop&w=400&q=80',
      title: '📑 AI-Powered Document Scanner & Summarizer',
      useCase: 'Document management for companies',
      features: ['OCR from PDF/Docs/Images', 'NLP summarization', 'Searchable insights']
    },
    {
      image: 'https://images.unsplash.com/photo-1611078480105-3fbe2fc89f23?auto=format&fit=crop&w=400&q=80',
      title: '📰 Fake News / Spam Email Detector',
      useCase: 'Media & Corporate communication security',
      features: ['Text classification', 'Spam/phishing detection', 'Fake news identification']
    },
    {
      image: 'https://images.unsplash.com/photo-1581093588401-2f0aa9e1b8c3?auto=format&fit=crop&w=400&q=80',
      title: '🛒 E-commerce Recommendation System',
      useCase: 'Online shopping platforms',
      features: ['Behavior-based recommendations', '"Similar to Amazon" logic', 'Personalized shopping']
    },
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            AI Solutions for Real{' '}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Business Impact
            </span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            From automation to insights—state-of-the-art AI transforming business operations.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {aiProducts.map((product, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-700 relative overflow-hidden"
            >
              {/* 3D Image Card */}
              <div className="relative mb-5 perspective-1000">
                <div className="rounded-2xl overflow-hidden shadow-lg group-hover:scale-[1.05] transition-transform duration-500">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover transform hover:rotate-1 hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>

              {/* Product Details */}
              <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
              <p className="text-sm text-purple-400 font-medium mb-4">{product.useCase}</p>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-xl font-medium text-sm hover:shadow-xl hover:scale-105 transition-all duration-300">
                See Demo
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Contact Sales for Custom AI Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIShowcase;
