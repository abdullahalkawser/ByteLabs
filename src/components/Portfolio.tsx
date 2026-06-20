import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { ExternalLink, ArrowRight, X, Sparkles, CheckCircle2, Layers } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [hiddenProjects, setHiddenProjects] = useState<number[]>([]);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const projects = [
    { 
      title: 'E-commerce AI Platform', 
      category: 'Web AI',
      description: 'Next-generation product recommendation engine optimizing retail conversion scales using clickstream vectors.', 
      tags: ['React', 'Node.js', 'AI', 'TensorFlow'], 
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      longDescription: 'This production-grade AI engine tracks thousands of user interactions per second to construct dynamic recommendation matrix setups. It drives conversion boosts by up to 35% through neural personalization models.',
      features: ['Real-time user behavior tracking', 'Automated deep learning model retraining', 'Highly scalable GraphQL API gateway']
    },
    { 
      title: 'Smart HealthCare AI', 
      category: 'Mobile AI',
      description: 'Advanced telemedicine framework incorporating cognitive symptom diagnostics and anomalies screening.', 
      tags: ['React Native', 'AI', 'Cloud', 'Python'], 
      image: 'https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=800',
      longDescription: 'A HIPAA-compliant system utilizing custom CNN models to assist radiologists and practitioners by pre-screening medical scans and identifying high-risk clinical anomalies instantly.',
      features: ['Secure DICOM image format processing', 'Real-time multi-lingual support pipelines', 'Zero-downtime medical server infra']
    },
    { 
      title: 'AI Predictive Analytics', 
      category: 'Enterprise',
      description: 'Enterprise business intelligence dashboard projecting multi-quarter growth vectors and threat assessment charts.', 
      tags: ['Vue.js', 'Python', 'TensorFlow', 'BigData'], 
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      longDescription: 'Processes petabytes of raw transactional data to generate crystal-clear market trend predictions, supply chain bottlenecks mapping, and high-fidelity revenue telemetry reports.',
      features: ['Automated ETL cleaning pipelines', 'Interactive 3D timeline visualization', 'Direct Slack & Email alerting hubs']
    },
    { 
      title: 'Social Media Neuro-Suggester', 
      category: 'Mobile AI',
      description: 'Real-time content creation pipeline predicting engagement weights based on sentiment curves.', 
      tags: ['React Native', 'AI', 'GraphQL', 'BERT'], 
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      longDescription: 'Leverages advanced NLP transformers to parse real-time global media pipelines, delivering highly contextual topic trends mapping and viral post layout architecture logic.',
      features: ['Automated hashtag density matrix mapping', 'Multi-variant generative copy hooks', 'Instant scheduler sync api hooks']
    },
    { 
      title: 'FinTech Investment AI', 
      category: 'Enterprise',
      description: 'High-frequency cloud dashboard projecting asset pricing arrays and historical risk curves safely.', 
      tags: ['Angular', 'Node.js', 'AI', 'Redis'], 
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
      longDescription: 'Processes intensive market telemetry arrays using robust microservices to map real-time predictive indices, portfolio rebalancing triggers, and secure transaction sync loops.',
      features: ['Ultra-low latency price array queries', 'Military-grade end-to-end data encryption', 'Custom backtesting simulation engine']
    },
    { 
      title: 'Cognitive Travel AI Planner', 
      category: 'Web AI',
      description: 'Autonomous geographic itinerary optimization matching user profiles with live spatial pricing data.', 
      tags: ['React', 'AI', 'API', 'Mapbox'], 
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      longDescription: 'An intelligent mapping engine that balances travel schedules, hotel operational logic, and dynamically changing flight fare matrices to render highly personalized vacation blueprints.',
      features: ['Dynamic route calculation graph maps', 'Automated budget constraint matching logic', 'Direct live flight ticketing hooks']
    }
  ];

  // ফিল্টারিং লজিক + হাইড ফিল্টার কম্বিনেশন
  const filteredProjects = projects.filter((project, index) => {
    if (hiddenProjects.includes(index)) return false;
    if (activeTab === 'All') return true;
    return project.category === activeTab;
  });

  const handleClose = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setHiddenProjects([...hiddenProjects, index]);
  };

  return (
    <section id="portfolio" className="py-32 bg-slate-950 text-slate-100 relative overflow-hidden font-sans selection:bg-blue-500/30">
      
      {/* ১. লাইভ পার্টিকেলস এবং ডাইনামিক ব্যাকগ্রাউন্ড লাইটিং */}
      <div className="absolute inset-0" />
      
      {/* ফ্লোটিং এআই অরবস (Floating AI Orbs) */}
      <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[6s] top-[-50px] left-[-50px]" />
      <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-[150px] pointer-events-none animate-pulse duration-[9s] right-[-100px] top-[20%]" />
      
      {/* কাস্টম পার্টিকেল ডটস */}
      <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-70" />
      <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-50 duration-1000" />
      <div className="absolute bottom-12 left-10 w-1 h-1 bg-teal-400 rounded-full animate-pulse opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* হেডার সেকশন */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <Sparkles className="w-3.5 h-3.5 animate-spin duration-[3s]" /> Next-Gen Neural Ecosystem
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-white animate-fade-in">
            Architectural <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-sm">Showcase</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light">
            Explore our advanced AI implementations categorized by structural deployment fields. Click on any block to audit system architectures.
          </p>
        </div>

        {/* ৩. ইন্টারেক্টিভ ক্যাটাগরি ফিল্টার ট্যাব */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16 bg-slate-900/60 p-2 rounded-2xl border border-slate-800/80 max-w-md mx-auto backdrop-blur-md">
          {['All', 'Web AI', 'Mobile AI', 'Enterprise'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md shadow-blue-500/20 scale-105'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* পোর্টফোলিও গ্রিড লেআউট */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 transition-all duration-500">
          {filteredProjects.map((project, index) => {
            // প্রজেক্টের রিয়েল ইনডেক্স বের করার লজিক
            const originalIndex = projects.findIndex(p => p.title === project.title);
            
            return (
              <Tilt
                key={originalIndex}
                glareEnable={true}
                glareMaxOpacity={0.15}
                scale={1.03}
                transitionSpeed={800}
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                className="w-full h-full animate-card-appear"
              >
                {/* ২. নিয়ন বর্ডার রেস বডি */}
                <div 
                  onClick={() => setSelectedProject(project)}
                  className="relative h-full bg-slate-900/50 border border-slate-800 backdrop-blur-xl rounded-3xl p-6 flex flex-col justify-between items-start text-left overflow-hidden group hover:border-blue-500/40 cursor-pointer transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
                >
                  {/* হোভার বর্ডার অ্যানিমেশন লাইন গ্লো */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-x-full group-hover:animate-border-race pointer-events-none" />

                  {/* হাইড বাটন */}
                  <button
                    onClick={(e) => handleClose(e, originalIndex)}
                    className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-400 hover:text-red-400 hover:border-red-500/30 z-20 transition-all backdrop-blur-sm shadow-md"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="w-full space-y-5 relative z-10">
                    {/* ব্রাউজার স্টাইল উইন্ডো সহ প্রজেক্ট ইমেজ */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-950 rounded-2xl border border-slate-800 group-hover:border-blue-500/30 transition-colors duration-500">
                      <div className="h-6 bg-slate-950/90 border-b border-slate-800 relative px-3 flex items-center">
                        <div className="flex gap-1.5">
                          <div className="w-1.5 h-1.5 bg-red-500/40 rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-yellow-500/40 rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-green-500/40 rounded-full"></div>
                        </div>
                        <span className="text-[9px] font-mono text-slate-600 mx-auto transform -translate-x-3">system_core.log</span>
                      </div>
                      <div className="overflow-hidden h-44 relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out mix-blend-luminosity group-hover:mix-blend-normal"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-80" />
                        
                        {/* ক্যাটাগরি ফ্লোটিং ট্যাগ */}
                        <span className="absolute bottom-3 left-3 text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded bg-slate-950/90 text-blue-400 border border-blue-500/20 backdrop-blur-sm">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* টেক্সট ডিটেইলস */}
                    <div className="space-y-2.5">
                      <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed font-normal opacity-90">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* ট্যাগস এবং অ্যাকশন ফুটার */}
                  <div className="w-full mt-6 pt-5 border-t border-slate-800/80 space-y-4 relative z-10">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2.5 py-0.5 bg-slate-950/80 text-slate-300 border border-slate-800 rounded text-xs font-bold tracking-wider group-hover:border-purple-500/20 group-hover:text-purple-300 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between w-full">
                      <span className="text-blue-400 group-hover:text-white font-bold text-sm flex items-center gap-1.5 transition-colors">
                        Explore Blueprint
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                      </span>
                      <div className="p-2 text-slate-400 group-hover:text-blue-400 border border-transparent group-hover:border-slate-800 rounded-xl bg-slate-950/0 group-hover:bg-slate-950/40 transition-all duration-300">
                        <ExternalLink className="w-4 h-4 animate-pulse" />
                      </div>
                    </div>
                  </div>

                </div>
              </Tilt>
            );
          })}
        </div>
      </div>

      {/* ৪. ডাইনামিক অ্যানিমেটেড প্রজেক্ট ডিটেইলস মোডাল (পপ-আপ) */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 backdrop-blur-2xl bg-slate-950/80 animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl shadow-black/90 flex flex-col max-h-[90vh] animate-scaleUp">
            
            {/* মোডাল ক্লোজ বাটন */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 z-30 p-2 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            {/* মোডাল মেইন স্ক্রোল কন্টেন্ট */}
            <div className="overflow-y-auto w-full p-6 sm:p-8 space-y-6">
              
              {/* প্রজেক্ট ব্যানার ইমেজ */}
              <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-slate-800 shadow-inner">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>

              {/* প্রজেক্ট টাইটেল ও সাবটাইটেল */}
              <div className="space-y-2">
                <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-blue-400 font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-4 h-4" /> {selectedProject.category} System Network
                </p>
              </div>

              {/* টেক স্ট্যাক ট্যাগস */}
              <div className="flex flex-wrap gap-2 pt-1">
                {selectedProject.tags.map((tag: string, idx: number) => (
                  <span key={idx} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded text-xs font-bold tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>

              {/* লং ডেসক্রিপশন */}
              <div className="space-y-3 pt-2">
                <h4 className="text-lg font-extrabold text-white">Project Architecture Overview</h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* কোর ফিচারস বুকলেট */}
              <div className="space-y-3 pt-2">
                <h4 className="text-lg font-extrabold text-white">Core System Specifications</h4>
                <ul className="space-y-2.5">
                  {selectedProject.features.map((feature: string, idx: number) => (
                    <li key={idx} className="text-slate-200 text-sm sm:text-base flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* মোডাল অ্যাকশন ফুটার */}
            <div className="w-full p-6 bg-slate-950/80 border-t border-slate-800/80 flex flex-col sm:flex-row justify-end items-center gap-4">
              <button 
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto px-6 py-3 border border-slate-800 rounded-xl text-sm font-bold text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              >
                Close Audit
              </button>
              <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">
                Launch Environment <ExternalLink className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* --- অ্যাডভান্সড সিএসএস কি-ফ্রেম অ্যানিমেশনস --- */}
      <style jsx>{`
        @keyframes borderRace {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-border-race {
          animation: borderRace 2s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
        }
        @keyframes cardAppear {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-card-appear {
          animation: cardAppear 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.96); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-scaleUp {
          animation: scaleUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;