import React, { useEffect, useRef, useState } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUpRight, ShieldCheck, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: { x: number; y: number; vx: number; vy: number; size: number; color: string }[] = [];
    const particleCount = 50;
    const colors = ['#00f0ff', '#ff00f0', '#00ff90', '#b55fe6'];

    // মাউস পজিশন ট্র্যাকিং কণা আকর্ষণের জন্য
    const mouse = { x: null as number | null, y: null as number | null, radius: 100 };

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // ১. কণাগুলোর মুভমেন্ট এবং মাউস ইন্টারঅ্যাকশন
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // মাউস আকর্ষণ বলবিদ্যা
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            p.x -= dx * force * 0.03;
            p.y -= dy * force * 0.03;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
      });

      // ২. কনস্টেলেশন নিয়ন লাইন ইফেক্ট (কাছাকাছি কণাদের মধ্যে কানেকশন)
      ctx.shadowBlur = 0; // লাইনের জন্য ব্লার কমানো হলো পারফরম্যান্স বুস্ট করতে
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 75) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 - dist / 75})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    alert(`📡 Newsletter Link Established! Secure updates will node to: ${email}`);
    setEmail('');
  };

  const quickLinks = ['About Us', 'Services', 'Portfolio', 'Pricing', 'Blog', 'Contact'];
  const policyLinks = ['Privacy Policy', 'Terms of Service'];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-400 hover:border-blue-500/50' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-cyan-400 hover:border-cyan-500/50' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500 hover:border-blue-500/50' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500 hover:border-pink-500/50' }
  ];

  return (
    <footer className="relative overflow-hidden text-white bg-[#03050a] border-t border-gray-900/60 font-sans">
      {/* Interactive Canvas Grid */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10 pointer-events-auto" />

      {/* Deep Cyber Matrix Neon Shadow Layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#05070f] via-transparent to-transparent -z-20" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Brand Matrix Terminal */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <Cpu className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
              <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                ByteLabs
              </span>
              <span className="text-[9px] font-mono font-bold text-cyan-400 border border-cyan-400/30 px-1.5 py-0.5 rounded bg-cyan-500/5 uppercase tracking-widest">HQ</span>
            </div>
            
            <p className="text-sm text-gray-400 leading-relaxed max-w-md font-medium">
              We machine modern software architectures that scale enterprise vectors. 
              From high-performance matrix applications to cognitive AI nodes, we are your core protocol infrastructure.
            </p>
            
            {/* Newsletter Subscription Console */}
            <form onSubmit={handleSubscribe} className="flex max-w-md relative group">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Hook into our transmission channel..."
                className="w-full px-4 py-3 bg-black/40 border border-gray-800 focus:border-cyan-500 text-xs font-mono text-cyan-400 placeholder-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/10 transition-all duration-300"
              />
              <motion.button 
                whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(6,182,212,0.4)" }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1"
              >
                Sync <ArrowUpRight className="w-3 h-3" />
              </motion.button>
            </form>
          </div>

          {/* Column 2: System Sub-routines Links */}
          <div className="lg:col-span-3 lg:pl-8">
            <h3 className="text-xs font-bold font-mono uppercase tracking-widest text-gray-500 mb-5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> System Nodes
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-xs font-medium text-gray-400 hover:text-cyan-400 font-mono transition-colors duration-200 block group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 text-cyan-400 mr-1 transition-opacity duration-150">&gt;</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Matrix Network Comms */}
          <div className="lg:col-span-4 lg:pl-12 space-y-5">
            <div>
              <h3 className="text-xs font-bold font-mono uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Sync Frequency
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.15, y: -2 }}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-9 h-9 bg-gray-900/40 border border-gray-800/80 rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 shadow-md backdrop-blur-sm`}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-gray-900 bg-gray-950/30 backdrop-blur-md flex items-center gap-3 max-w-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 drop-shadow-[0_0_5px_rgba(52,211,153,0.3)]" />
              <div className="text-[11px] font-mono text-gray-500 leading-tight">
                All transmissions authenticated. encrypted with <span className="text-emerald-400 font-bold">RSA-4096</span>.
              </div>
            </div>
          </div>
        </div>

        {/* Matrix Mainframe Baseboard */}
        <div className="border-t border-gray-900/60 mt-14 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-gray-500">
          <div className="flex items-center gap-4">
            <span>© 2026 ByteLabs Mainframe.</span>
            <div className="hidden sm:flex gap-3">
              {policyLinks.map((link, idx) => (
                <a key={idx} href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-cyan-400 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
            Core Architecture developed by <span className="text-gray-400 font-bold hover:text-cyan-400 cursor-pointer transition-colors">ByteLabs Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;