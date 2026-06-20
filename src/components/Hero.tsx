import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Brain, 
  Eye, 
  MessageSquare, 
  Cpu, 
  BarChart3, 
  Zap, 
  ArrowUpRight, 
  Network, 
  Layers, 
  Activity, 
  Globe2, 
  Calendar,
  Sparkles,
  Layers3,
  Flame
} from "lucide-react";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = containerRef.current?.offsetWidth || window.innerWidth;
    let height = canvas.height = containerRef.current?.offsetHeight || window.innerHeight;

    // আরও ব্রাইট এবং কালারফুল নিউরাল পার্টিকল প্যালেট
    const colors = ["#0ea5e9", "#a855f7", "#f43f5e", "#10b981", "#eab308"];
    const particles: any[] = Array.from({ length: 85 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 1.8 + Math.random() * 4,
      dx: (Math.random() - 0.5) * 0.9,
      dy: (Math.random() - 0.5) * 0.9,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.18 - dist / 150 * 0.18})`; // পার্পল-সায়ান মিক্সড লাইনস
            ctx.lineWidth = 0.7;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        const distX = (mouse.current.x - width / 2) * 0.002;
        const distY = (mouse.current.y - height / 2) * 0.002;

        p.x += p.dx + distX;
        p.y += p.dy + distY;

        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.fill();
      });

      connectParticles();
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!canvas || !containerRef.current) return;
      width = canvas.width = containerRef.current.offsetWidth;
      height = canvas.height = containerRef.current.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // কালারফুল গ্রেডিয়েন্ট বর্ডার ও ব্যাকগ্রাউন্ড ম্যাপিং
  const aiBoxes = [
    { 
      title: "Machine Learning", 
      desc: "Predictive neural structures & API nodes", 
      icon: <Brain className="w-6 h-6 text-sky-400 group-hover:text-white" />, 
      colorClass: "from-sky-500/10 to-blue-600/5 hover:border-sky-500/60 shadow-[0_0_30px_rgba(14,165,233,0.05)] hover:shadow-[0_0_40px_rgba(14,165,233,0.3)]",
      iconBg: "bg-sky-500/10 border-sky-500/20 group-hover:bg-sky-500"
    },
    { 
      title: "Computer Vision", 
      desc: "Spatial processing & real-time analytics", 
      icon: <Eye className="w-6 h-6 text-purple-400 group-hover:text-white" />, 
      colorClass: "from-purple-500/10 to-indigo-600/5 hover:border-purple-500/60 shadow-[0_0_30px_rgba(168,85,247,0.05)] hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]",
      iconBg: "bg-purple-500/10 border-purple-500/20 group-hover:bg-purple-500"
    },
    { 
      title: "Natural Language", 
      desc: "Semantic processing & generative response", 
      icon: <MessageSquare className="w-6 h-6 text-rose-400 group-hover:text-white" />, 
      colorClass: "from-rose-500/10 to-pink-600/5 hover:border-rose-500/60 shadow-[0_0_30px_rgba(244,63,94,0.05)] hover:shadow-[0_0_40px_rgba(244,63,94,0.3)]",
      iconBg: "bg-rose-500/10 border-rose-500/20 group-hover:bg-rose-500"
    },
    { 
      title: "Robotics Engine", 
      desc: "Automated macro-routines & edge control", 
      icon: <Cpu className="w-6 h-6 text-emerald-400 group-hover:text-white" />, 
      colorClass: "from-emerald-500/10 to-teal-600/5 hover:border-emerald-500/60 shadow-[0_0_30px_rgba(16,119,81,0.05)] hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]",
      iconBg: "bg-emerald-500/10 border-emerald-500/20 group-hover:bg-emerald-500"
    },
    { 
      title: "Data Analytics", 
      desc: "Deep vector pattern recognition pipelines", 
      icon: <BarChart3 className="w-6 h-6 text-amber-400 group-hover:text-white" />, 
      colorClass: "from-amber-500/10 to-orange-600/5 hover:border-amber-500/60 shadow-[0_0_30px_rgba(245,158,11,0.05)] hover:shadow-[0_0_40px_rgba(245,158,11,0.3)]",
      iconBg: "bg-amber-500/10 border-amber-500/20 group-hover:bg-amber-500"
    },
    { 
      title: "AI Automation", 
      desc: "Autonomous workflows & cognitive logic", 
      icon: <Zap className="w-6 h-6 text-fuchsia-400 group-hover:text-white" />, 
      colorClass: "from-fuchsia-500/10 to-violet-600/5 hover:border-fuchsia-500/60 shadow-[0_0_30px_rgba(217,70,239,0.05)] hover:shadow-[0_0_40px_rgba(217,70,239,0.3)]",
      iconBg: "bg-fuchsia-500/10 border-fuchsia-500/20 group-hover:bg-fuchsia-500"
    },
  ];

  const ribbonItems = ["Neural Mesh Active", "RSA-4096 Safe", "Core Engine v2.5", "Latency: 12ms", "Mainframe Verified", "Quantum Guard Locked"];

  return (
    <section 
      ref={containerRef}
      className="bg-slate-950 text-slate-100 relative overflow-hidden font-sans selection:bg-blue-500/30 w-full min-h-screen flex flex-col items-center justify-center py-32 md:py-48"
    >
      {/* ১. ব্যাকগ্রাউন্ড কালার ব্লাস্ট এবং ক্যানভাস */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />

      {/* মাল্টি-কালার নিয়ন ল্যাম্প ওভারলে */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[160px] z-10 pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[160px] z-10 pointer-events-none animate-pulse [animation-duration:7s]" />
      <div className="absolute top-1/2 left-2/3 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[140px] z-10 pointer-events-none animate-pulse [animation-duration:5s]" />

      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-30 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/70 to-slate-950 z-10 pointer-events-none" />

      {/* ২. কোর কন্টেন্ট */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* কালারফুল গ্লো ট্যাগ */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-900 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(168,85,247,0.15)] backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-purple-400 animate-spin [animation-duration:4s]" />
          <span className="font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Next-Gen Intelligent Fabric</span>
        </motion.div>

        {/* ৩D গ্রেডিয়েন্ট সুপার ম্যাসিভ হেডিং */}
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 12, stiffness: 60 }}
          className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tight max-w-6xl leading-[0.95] text-white"
        >
          ByteLabs <br />
          <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(168,85,247,0.3)]">
            Tech Solutions
          </span>
        </motion.h1>

        {/* সাবহেডিং */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl sm:text-2xl md:text-3xl text-slate-200 mt-10 font-black max-w-4xl tracking-wide leading-snug"
        >
          Driving Innovation Through Smart Software & AI Engineering
        </motion.p>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-slate-400 text-base sm:text-lg md:text-xl max-w-3xl mt-5 leading-relaxed font-semibold"
        >
          We build cutting-edge software solutions that empower businesses worldwide. AI-driven analytics, custom web & mobile applications.
        </motion.p>

        {/* লুপ ইনফো রিবন */}
        <div className="w-full max-w-5xl overflow-hidden mt-16 mb-4 relative py-4 border-y border-slate-900 bg-slate-950/40 backdrop-blur-md z-20">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10" />
          
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 18, repeat: Infinity }}
            className="flex whitespace-nowrap gap-16 w-max text-xs font-mono tracking-widest uppercase text-slate-400 font-black"
          >
            {[...ribbonItems, ...ribbonItems].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Network className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 📊 কালারফুল ও ভাইব্রেন্ট কাউন্টার প্যানেল */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 bg-gradient-to-b from-slate-900/60 to-slate-950/20 backdrop-blur-xl border border-slate-900 rounded-[36px] p-8 md:p-12 shadow-2xl"
        >
          {[
            { value: "150+", label: "Projects Node", info: "Innovative Systems", icon: <Layers className="w-5 h-5 text-sky-400" />, glow: "group-hover:border-sky-500/30", color: "from-sky-400 to-blue-500", border: "md:border-r border-slate-900" },
            { value: "75+", label: "Global Clients", info: "Enterprise Networks", icon: <Globe2 className="w-5 h-5 text-purple-400" />, glow: "group-hover:border-purple-500/30", color: "from-purple-400 to-indigo-500", border: "md:border-r border-slate-900" },
            { value: "20+", label: "Active Vectors", info: "Worldwide Core Reach", icon: <Activity className="w-5 h-5 text-rose-400" />, glow: "group-hover:border-rose-500/30", color: "from-rose-400 to-pink-500", border: "md:border-r border-slate-900" },
            { value: "10+", label: "Years Sandbox", info: "Deep Industry Foundation", icon: <Calendar className="w-5 h-5 text-emerald-400" />, glow: "group-hover:border-emerald-500/30", color: "from-emerald-400 to-teal-500", border: "" },
          ].map((stat, idx) => (
            <div key={idx} className={`flex flex-col items-center text-center px-6 py-4 group cursor-pointer ${stat.border}`}>
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                {stat.icon}
              </div>
              <h2 className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105 tracking-tight`}>
                {stat.value}
              </h2>
              <p className="text-slate-100 font-black text-sm mt-3 tracking-wide font-mono uppercase">{stat.label}</p>
              <p className="text-slate-500 text-xs mt-1 font-semibold">{stat.info}</p>
            </div>
          ))}
        </motion.div>

        {/* 🛠️ কালারফুল এবং নিয়ন গ্লোয়িং AI কার্ড গ্রিড */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {aiBoxes.map((box, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative flex flex-col text-left p-8 md:p-10 rounded-[28px] bg-gradient-to-br border border-slate-900 backdrop-blur-2xl transition-all duration-500 cursor-pointer overflow-hidden ${box.colorClass}`}
            >
              {/* নিয়ন ডাইনামিক ইন্টারনাল স্পটলাইট গ্লো */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-500" />
              
              {/* কাস্টম কালার ব্যাকগ্রাউন্ড আইকন হোল্ডার */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 shadow-xl ${box.iconBg}`}>
                {box.icon}
              </div>

              {/* কার্ড টাইটেল উইথ বোল্ড কালার ফিল */}
              <div className="mt-8 flex items-center justify-between">
                <h3 className="font-black text-xl md:text-2xl text-slate-100 group-hover:text-white transition-colors tracking-tight">
                  {box.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-all duration-300" />
              </div>
              
              {/* ডেসক্রিপশন টেক্সট */}
              <p className="text-sm text-slate-400 mt-3 leading-relaxed font-semibold group-hover:text-slate-300 transition-colors">
                {box.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ⚡ অতিরিক্ত ক্যাটালিস্ট সেকশন (পেজটিকে আরও রিচ করার জন্য) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 w-full max-w-6xl rounded-[32px] p-8 md:p-12 bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-blue-900/40 border border-purple-500/20 flex flex-col md:flex-row items-center justify-between text-left gap-8 shadow-[0_0_50px_rgba(168,85,247,0.1)] backdrop-blur-lg"
        >
          <div className="flex items-start gap-5">
            <div className="p-4 rounded-2xl bg-purple-500/20 border border-purple-500/30 text-purple-400 animate-bounce">
              <Flame className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-2xl font-black text-white tracking-tight">Ready to deploy your customized models?</h4>
              <p className="text-slate-400 text-sm md:text-base mt-2 font-medium max-w-xl">
                Connect with our pipeline infrastructure instantly. Build scalable applications with sub-millisecond core inference routines.
              </p>
            </div>
          </div>
          <button className="whitespace-nowrap px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-black text-sm uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-[0_0_30px_rgba(168,85,247,0.4)]">
            Initialize Core Engine
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;