import React from 'react';
import Tilt from 'react-parallax-tilt';
import { 
  Bot, FileText, ShieldAlert, ShoppingBag, 
  UserCheck, BrainCircuit, ArrowRight, Sparkles, CheckCircle2, Zap
} from 'lucide-react';

// ৬টি রিয়ালিস্টিক প্রজেক্ট ডেটা (ইউনিক আইকন, ইমেজ ও টেকনোলজি ট্যাগসহ)
const aiProjects = [
  {
    icon: Bot,
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=600&q=80', // Chatbot / Digital Human AI
    title: 'Cognitive AI Chatbot Suite',
    useCase: 'Enterprise Customer Support Automation',
    description: 'Next-generation conversational intelligence designed to automate complex user journeys across Banking, Healthcare, and high-volume E-commerce platforms.',
    features: ['Context-aware multi-turn conversations', 'Support for 40+ global languages', 'Instant CRM & live agent handoff integration'],
    techTags: ['LLMs', 'OpenAI API', 'Node.js', 'Vector DB'],
    badge: 'Live Demo'
  },
  {
    icon: UserCheck,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80', // Professional Workspace / HR
    title: 'Smart Resume Screener & Matcher',
    useCase: 'Automated HR Talent Acquisition',
    description: 'An advanced cognitive HR pipeline that instantly processes raw CVs, extracts complex skill graphs, and ranks top candidates based on semantic job alignment.',
    features: ['Deep skill graph parsing from PDFs', 'Intelligent JD-candidate matching score', 'Bias-free automated shortlisting'],
    techTags: ['NLP', 'Python', 'SpaCy', 'FastAPI'],
    badge: 'Enterprise'
  },
  {
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80', // Digital Cloud / Data Analytics
    title: 'AI Document Intelligence System',
    useCase: 'Corporate Document Lifecycle & Analytics',
    description: 'Instantly transform messy enterprise documents, dense legal PDFs, and receipts into structured database entries with auto-generated contextual summaries.',
    features: ['Vision-powered advanced OCR models', 'Contextual multi-page text summarization', 'Semantic legal query & insights search'],
    techTags: ['PyTorch', 'Transformers', 'OCR Tech', 'AWS'],
    badge: '99.8% Accuracy'
  },
  {
    icon: ShieldAlert,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80', // Cyber Security Cyberpunk
    title: 'Neural Content & Spam Shield',
    useCase: 'Media & Corporate Communications Security',
    description: 'Real-time corporate firewall driven by text classification that flags advanced phishing attempts, corporate espionage, and fake news propagation.',
    features: ['Zero-day text classification & threat scoring', 'Deep link & metadata integrity scanner', 'Real-time dashboard alert pipelines'],
    techTags: ['BERT Models', 'Scikit-Learn', 'Cyber Security'],
    badge: 'Security Only'
  },
  {
    icon: ShoppingBag,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80', // E-commerce / Data Screens
    title: 'Hyper-Personalized Recommendation Engine',
    useCase: 'Predictive E-commerce Growth Infrastructure',
    description: 'Maximize conversions using clickstream behavioral analytics. Deliver Amazon-grade product match predictions tailored to individual user shopping profiles.',
    features: ['Collaborative & content-based recommendations', 'Real-time user intent vector tracking', 'Dynamic cart upsell optimization engines'],
    techTags: ['TensorFlow', 'Redis', 'BigData', 'GraphQL'],
    badge: '3x ROI Boost'
  },
  {
    icon: BrainCircuit,
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80', // Deep Science Laboratory / AI Hospital
    title: 'Predictive Health & Medical Analytics',
    useCase: 'Healthcare Diagnostic Optimization',
    description: 'Deep learning computer vision models capable of assisting radiologists by pre-screening medical scans and predicting patient risk anomalies.',
    features: ['High-precision tumor & anomaly segmentation', 'DICOM medical image format parsing', 'HIPAA compliant secure data encryption'],
    techTags: ['Computer Vision', 'CNN', 'PyTorch', 'Docker'],
    badge: 'Medical Grade'
  }
];

const AIShowcase = () => {
  return (
    <section className="py-32 bg-slate-950 text-slate-100 relative overflow-hidden font-sans selection:bg-purple-500/30">
      
      {/* ব্যাকগ্রাউন্ড ম্যাট্রিক্স গ্রিড এবং গ্লো ইফেক্টস */}
      <div className="absolute inset-0" />
      <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* টপ হেডার সেকশন */}
        <div className="text-center mb-24 max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            <Zap className="w-3.5 h-3.5 fill-purple-400" /> Production-Ready Deployments
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            AI Solutions for Real <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
              Business Impact
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light">
            From cognitive workflow automation to deep data insights—our production-grade AI applications are custom engineered to scale your daily business architecture.
          </p>
        </div>

        {/* ৬ টি প্রিমিয়াম ৩D কার্ডের গ্রিড লেআউট */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
          {aiProjects.map((product, index) => (
            <Tilt
              key={index}
              className="w-full h-full"
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1200}
              scale={1.03}
              transitionSpeed={800}
              glareEnable={true}
              glareMaxOpacity={0.12}
              glareColor="#a855f7"
              glarePosition="all"
            >
              <div className="relative h-full bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl rounded-3xl p-6 flex flex-col justify-between items-start text-left overflow-hidden group hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]">
                
                {/* কার্ডের হেডার পার্ট: ইমেজ এবং ব্যাজ */}
                <div className="w-full space-y-5">
                  <div className="relative w-full h-52 rounded-2xl overflow-hidden shadow-inner group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-500">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-out mix-blend-luminosity group-hover:mix-blend-normal"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
                    
                    {/* ফ্লোটিং প্রোডাক্ট আইকন */}
                    <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-slate-950/90 border border-slate-800 text-purple-400 flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:text-white group-hover:bg-purple-600 group-hover:border-transparent transition-all duration-500">
                      <product.icon className="w-5 h-5 group-hover:rotate-6 transition-transform duration-300" />
                    </div>

                    {/* প্রজেক্ট স্ট্যাটাস ব্যাজ */}
                    <span className="absolute top-4 right-4 text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 shadow-sm backdrop-blur-md">
                      {product.badge}
                    </span>
                  </div>

                  {/* টেক্সট ডিটেইলস (উজ্জ্বল সাদা এবং বড় ফন্ট) */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-extrabold tracking-tight text-white group-hover:text-purple-400 transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-cyan-400/90 uppercase tracking-wider">
                      {product.useCase}
                    </p>
                    <p className="text-slate-200 text-sm leading-relaxed font-normal opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {product.description}
                    </p>
                  </div>

                  {/* বুলেট ফিচার লিস্ট */}
                  <ul className="space-y-2.5 pt-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-white text-sm flex items-start gap-2.5 font-normal">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* কার্ডের ফুটার পার্ট: টেক ট্যাগ এবং ডেমো বাটন */}
                <div className="w-full mt-6 pt-5 border-t border-slate-800/80 space-y-5">
                  <div className="flex flex-wrap gap-1.5">
                    {product.techTags.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[10px] font-bold tracking-wider text-slate-300 bg-slate-950/60 border border-slate-800 px-2.5 py-1 rounded group-hover:border-purple-500/30 group-hover:text-purple-300 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-slate-950 text-white border border-slate-800 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500 group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-500">
                    See Demo Deployment <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

              </div>
            </Tilt>
          ))}
        </div>

        {/* --- বটম গ্লোবাল কল-টু-অ্যাকশন (CTA) --- */}
        <div className="mt-28 p-10 rounded-3xl bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-slate-950/10 border border-slate-800/80 backdrop-blur-md flex flex-col md:flex-row justify-between items-center gap-8 group hover:border-purple-500/20 transition-all duration-500">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-2xl font-extrabold text-white flex items-center gap-2.5 justify-center md:justify-start">
              <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" /> Need a Bespoke AI Engine?
            </h4>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl font-light">
              Accelerate your digital evolution. Speak directly with our lead AI solution architects to build custom LLM workflows or neural predictive models tailored for your systems.
            </p>
          </div>
          <button className="whitespace-nowrap bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-base hover:shadow-[0_0_30px_rgba(168,84,247,0.4)] hover:scale-[1.03] transition-all duration-300 shrink-0">
            Contact Enterprise Sales
          </button>
        </div>

      </div>
    </section>
  );
};

export default AIShowcase;