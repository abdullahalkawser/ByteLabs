import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { Check, Star, Zap, HelpCircle } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Basic Protocol',
      priceMonthly: 999,
      priceYearly: 799, // ২০% ডিসকাউন্ট
      period: '/project',
      description: 'Perfect for small businesses and fast-moving startups.',
      features: [
        'Responsive Web Development',
        'Basic SEO Optimization',
        'Mobile-First Design Architecture',
        '30 Days Core Support Matrix',
        'Full Source Code Access'
      ],
      popular: false,
      badge: 'Startup Tier'
    },
    {
      name: 'Standard Engine',
      priceMonthly: 2499,
      priceYearly: 1999,
      period: '/project',
      description: 'Ideal for growing businesses with advanced scaling needs.',
      features: [
        'Everything in Basic Protocol',
        'Custom Web Application Core',
        'Relational Database Integration',
        'Secure API Development Loops',
        '90 Days Extended Support',
        'Performance Optimization Array',
        'Full Military-Grade Security Audit'
      ],
      popular: true,
      badge: 'Most Popular'
    },
    {
      name: 'Neural Enterprise',
      priceMonthly: 4999,
      priceYearly: 3999,
      period: '/project',
      description: 'Enterprise-level solutions integrated with machine learning.',
      features: [
        'Everything in Standard Engine',
        'Custom AI/ML Integration Network',
        'Predictive Advanced Analytics Dashboard',
        'Automated Cloud Infrastructure Deployment',
        'CI/CD DevOps Pipeline Setup',
        '180 Days Dedicated Support Hub',
        'Dedicated Solutions Architect',
        '24/7 Automated System Monitoring'
      ],
      popular: false,
      badge: 'AI Advanced'
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-slate-950 text-slate-100 relative overflow-hidden font-sans selection:bg-purple-500/30">
      
      {/* ব্যাকগ্রাউন্ড সাইপার গ্রিড এবং গ্লো অরবস */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_90%,transparent_100%)] opacity-70" />
      
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-purple-600/10 to-blue-500/10 rounded-full blur-[130px] pointer-events-none top-[-10%] left-[5%]" />
      <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-pink-500/10 rounded-full blur-[150px] pointer-events-none top-[20%] right-[-10%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* হেডার সেকশন */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-purple-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.1)]">
            <Zap className="w-3.5 h-3.5 fill-purple-400 animate-pulse" /> Flexible Cloud Subscriptions
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-white">
            Transparent <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">Pricing Systems</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light">
            Select an optimal operational blueprint for your network architecture. All setups feature a global quality guarantee.
          </p>

          {/* ডাইনামিক ইন্টারঅ্যাক্টিভ বিলিং সুইচ */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <span className={`text-sm font-bold transition-colors duration-300 ${!isYearly ? 'text-white' : 'text-slate-500'}`}>Standard Rate</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-8 rounded-full bg-slate-900 border border-slate-800 p-1 relative transition-all duration-300 focus:outline-none group-hover:border-purple-500/50"
            >
              <div className={`w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 shadow-md ${isYearly ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm font-bold flex items-center gap-1.5 transition-colors duration-300 ${isYearly ? 'text-purple-400' : 'text-slate-500'}`}>
              Yearly Matrix <span className="text-[10px] bg-purple-500/10 text-purple-300 border border-purple-500/30 px-2 py-0.5 rounded-full font-black uppercase tracking-wider animate-pulse">Save 20%</span>
            </span>
          </div>
        </div>

        {/* ৩D প্রাইজ কার্ড গ্রিড লেআউট */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, index) => {
            const currentPrice = isYearly ? plan.priceYearly : plan.priceMonthly;
            
            return (
              <Tilt
                key={index}
                glareEnable={true}
                glareMaxOpacity={0.15}
                scale={1.03}
                transitionSpeed={800}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className="w-full h-full"
              >
                {/* কার্ড মেইন ফ্যাব্রিকেশন */}
                <div
                  className={`relative h-full bg-slate-900/50 border backdrop-blur-xl rounded-3xl p-8 flex flex-col justify-between overflow-hidden group transition-all duration-500 ${
                    plan.popular 
                      ? 'border-purple-500/60 shadow-[0_0_40px_rgba(168,85,247,0.15)]' 
                      : 'border-slate-800/80 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]'
                  }`}
                >
                  {/* হোভার বর্ডার রেস অ্যানিমেশন লাইন গ্লো */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent -translate-x-full group-hover:animate-border-race pointer-events-none" />

                  {/* পপুলার/টার্গেট ফ্লোটিং মেডেল বাটন */}
                  {plan.popular && (
                    <div className="absolute -top-1 right-8 transform">
                      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-4 py-1.5 rounded-b-xl text-xs font-black uppercase tracking-widest flex items-center gap-1 shadow-lg shadow-purple-500/20 animate-bounce duration-[3s]">
                        <Star className="w-3.5 h-3.5 fill-white" /> {plan.badge}
                      </div>
                    </div>
                  )}

                  {!plan.popular && (
                    <div className="absolute top-4 right-6">
                      <span className="text-[9px] font-black tracking-widest uppercase text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-900">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  {/* কার্ড আপার বডি */}
                  <div className="relative z-10 space-y-6">
                    <div>
                      <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-purple-400 transition-colors duration-300">
                        {plan.name}
                      </h3>
                      <p className="text-slate-400 text-sm mt-2 font-light leading-relaxed min-h-[40px]">
                        {plan.description}
                      </p>
                    </div>

                    {/* ডাইনামিক প্রাইসিং কম্পোনেন্ট */}
                    <div className="flex items-baseline pt-2 border-b border-slate-800/80 pb-6">
                      <span className="text-5xl font-black tracking-tight text-white transition-all duration-300">
                        ${currentPrice.toLocaleString()}
                      </span>
                      <span className="text-slate-400 ml-2 text-sm font-medium tracking-wide">
                        {plan.period}
                      </span>
                    </div>

                    {/* ফিচার বাকেটস */}
                    <ul className="space-y-4 pt-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 text-white text-sm font-normal">
                          <div className="p-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 shrink-0 mt-0.5 group-hover:bg-purple-600 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span className="text-slate-200 opacity-95 group-hover:opacity-100 transition-opacity">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* অ্যাকশন সাবমিট বাটন ফুটার */}
                  <div className="relative z-10 mt-8 pt-4 w-full">
                    <button className={`w-full py-4 px-6 rounded-xl font-bold text-sm transition-all duration-500 flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-[1.02]'
                        : 'bg-slate-950 text-white border border-slate-800 hover:border-purple-500/40 hover:bg-slate-900'
                    }`}>
                      Initialize Deployment Protocol
                    </button>
                  </div>

                </div>
              </Tilt>
            );
          })}
        </div>

        {/* কাস্টম ইনকোয়ারি ইন্টিগ্রেশন */}
        <div className="text-center mt-16 max-w-xl mx-auto p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm flex items-center justify-center gap-2">
          <HelpCircle className="w-4 h-4 text-purple-400 shrink-0" />
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            Need custom architecture, hybrid APIs or cluster nodes? 
            <a href="#contact" className="text-purple-400 hover:text-blue-400 font-bold ml-1 inline-flex items-center gap-0.5 transition-colors">
              Request Bespoke Quotation <span className="text-[10px]">→</span>
            </a>
          </p>
        </div>

      </div>

      {/* অ্যানিমেশন কি-ফ্রেম কোড */}
      <style jsx>{`
        @keyframes borderRace {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-border-race {
          animation: borderRace 2.5s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Pricing;