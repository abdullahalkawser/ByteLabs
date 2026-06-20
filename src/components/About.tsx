import React, { useEffect, useRef } from 'react';
import { CheckCircle, Award, Target, Users, Sparkles, MessageSquare, Quote } from 'lucide-react';

const About = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const nodes: any[] = [];
    const cubes: any[] = [];
    const nodeCount = 25;
    const cubeCount = 12;

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 4 + Math.random() * 4,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
      });
    }

    // Initialize cubes
    for (let i = 0; i < cubeCount; i++) {
      cubes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 6 + Math.random() * 8,
        dx: (Math.random() - 0.5) * 0.8,
        dy: (Math.random() - 0.5) * 0.8,
        color: `hsl(${180 + Math.random() * 60}, 80%, 50%)`, // Cyan/Blue tones to match theme
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw nodes
      nodes.forEach(node => {
        if (mouse.current.x && mouse.current.y) {
          const dx = node.x - mouse.current.x;
          const dy = node.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            node.x += dx * 0.003;
            node.y += dy * 0.003;
          }
        }
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(6, 182, 212, 0.6)';
        ctx.shadowColor = '#06b6d4';
        ctx.shadowBlur = 8;
        ctx.fill();
      });

      // Draw lines
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 + ((150 - dist) / 150) * 0.3})`;
            ctx.lineWidth = 0.8;
            ctx.shadowBlur = 0; // Turn off blur for lines to optimize performance
            ctx.stroke();
          }
        }
      }

      // Draw cubes
      cubes.forEach(cube => {
        if (mouse.current.x && mouse.current.y) {
          const dx = cube.x - mouse.current.x;
          const dy = cube.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 220) {
            cube.x += dx * 0.004;
            cube.y += dy * 0.004;
          }
        }
        ctx.save();
        ctx.translate(cube.x, cube.y);
        ctx.rotate((Date.now() % 3600) / 600);
        ctx.fillStyle = cube.color;
        ctx.shadowColor = cube.color;
        ctx.shadowBlur = 12;
        ctx.fillRect(-cube.size / 2, -cube.size / 2, cube.size, cube.size);
        ctx.restore();
      });

      // Update positions
      nodes.forEach(node => {
        node.x += node.dx;
        node.y += node.dy;
        if (node.x < 0 || node.x > width) node.dx *= -1;
        if (node.y < 0 || node.y > height) node.dy *= -1;
      });
      cubes.forEach(cube => {
        cube.x += cube.dx;
        cube.y += cube.dy;
        if (cube.x < 0 || cube.x > width) cube.dx *= -1;
        if (cube.y < 0 || cube.y > height) cube.dy *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="about" className="relative py-28 bg-slate-950 text-white overflow-hidden font-sans">
      {/* Background Grid and Light Flares */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]" />
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Canvas for AI network */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold tracking-wide uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <Sparkles className="w-4 h-4 animate-pulse" /> Who We Are
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
            Our Journey & <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Vision</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Explore our AI-powered ecosystem and see how technology transforms complex industries into seamless digital experiences.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Content & Values */}
          <div className="space-y-8 animate-fade-in-left">
            <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
              Shaping the Future of{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                AI & Advanced Software
              </span>
            </h3>

            <p className="text-slate-300 text-lg leading-relaxed">
              We are a cutting-edge team of developers, AI researchers, and creative designers dedicated to building innovative, scalable, and secure software solutions that drive the next generation of global tech.
            </p>

            {/* Core Values Boxes */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { text: 'Innovation-driven AI solutions', icon: Target, desc: 'Pushing boundaries with machine learning.' },
                { text: 'Client-focused architecture', icon: Users, desc: 'Tailored precisely to scale your business.' },
                { text: 'Cutting-edge ML models', icon: Sparkles, desc: 'Advanced neural networks at your disposal.' },
                { text: 'Scalable & Secure Systems', icon: Award, desc: 'Enterprise-grade bulletproof security.' },
              ].map((value, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                    <value.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base mb-1">{value.text}</h4>
                    <p className="text-xs text-slate-400 leading-normal">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>

   
          </div>


          {/* Right: Interactive Image Container */}
          <div className="relative animate-fade-in-right flex justify-center lg:justify-end">
            <div className="relative group max-w-md lg:max-w-full">
              {/* Decorative Glow Ring around image */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[2rem] opacity-30 blur group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-tilt" />
              
              <div className="relative overflow-hidden rounded-[1.8rem] bg-slate-950 border border-slate-800">
                <img
                  src="https://i.ibb.co/HvYxTvP/Chat-GPT-Image-Jun-21-2026-02-55-14-AM.png"
                  alt="AI circuit board background"
                  className="w-full h-auto object-cover transform scale-100 group-hover:scale-105 transition-all duration-700 ease-out brightness-90 group-hover:brightness-100"
                />
                
                {/* Floating Stats over Image for added eye-candy */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800 backdrop-blur-md shadow-2xl flex justify-around text-center transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-cyan-400">99%</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-semibold mt-0.5">Accuracy</div>
                  </div>
                  <div className="border-r border-slate-800" />
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-purple-400">25M+</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-semibold mt-0.5">Data Processed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- FOUNDER TALK SECTION (클라이언트 매혹용) --- */}
        <div className="mt-32 max-w-5xl mx-auto animate-fade-in-up">
          <div className="relative p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-slate-900/70 to-slate-950 border border-slate-800 shadow-2xl backdrop-blur-md overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl" />

            {/* Quote Icon */}
            <Quote className="absolute top-6 right-8 text-slate-800 w-24 h-24 pointer-events-none transform rotate-180 opacity-40" />

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
              {/* Founder Avatar Circle with Ring */}
              <div className="flex-shrink-0 relative">
                <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-400 to-purple-600 rounded-full blur opacity-40 animate-pulse" />
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-slate-900 border-2 border-cyan-400/50 flex items-center justify-center text-cyan-400 overflow-hidden shadow-inner">
                  {/* আপনি চাইলে এখানে ফাউনডারের অরিজিনাল ছবি দিতে পারেন src="" দিয়ে */}
                  <MessageSquare className="w-10 h-10 text-cyan-400" />
                </div>
              </div>

              {/* Speech/Text */}
              <div className="space-y-4 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-purple-400 uppercase bg-purple-950/50 px-3 py-1 rounded-full border border-purple-800/30">
                  Message From Our Founder
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  "Empowering businesses through cognitive, automated intelligence."
                </h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
                  "At our core, we believe that AI isn't here to replace human potential—it's here to amplify it. Our mission is to strip away complexity and engineer scalable, beautifully responsive systems that prepare your business for the next century of technological evolution. We look forward to building the future together."
                </p>
                <div className="pt-2">
                  <span className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-base sm:text-lg">
                   Abdullah ALKawser
                  </span>
                  <span className="block text-xs text-slate-500 uppercase tracking-widest font-semibold mt-0.5">
                    Founder & Chief AI Architect ByteLabs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Optimized Animations & Layout CSS Component */}
      <style jsx>{`
        .animate-fade-in-left { opacity: 0; animation: fadeInLeft 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in-right { opacity: 0; animation: fadeInRight 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in-up { opacity: 0; animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-tilt {
          animation: tilt 4s linear infinite alternate;
        }

        @keyframes tilt {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(1deg); }
          100% { transform: rotate(-1deg); }
        }
      `}</style>
    </section>
  );
};

export default About;