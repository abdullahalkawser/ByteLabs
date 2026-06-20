import React, { useEffect, useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import * as THREE from 'three';
import { 
  Smartphone, Brain, Palette, Cloud, 
  Users, Server, Shield, Terminal, 
  ArrowUpRight, Zap, CheckCircle 
} from 'lucide-react';

// স্ট্রাকচার্ড, ডিটেইলড এবং প্রফেশনাল সার্ভিস ডেটা (ইমেজ ও টেকনোলজি ট্যাগসহ)
const services = [
  { 
    icon: Brain, 
    title: 'AI & Custom ML Solutions', 
    description: 'Transform your core operations with intelligent automated pipelines, state-of-the-art NLP frameworks, and high-accuracy predictive modeling designed for enterprise scale.', 
    techStack: ['Neural Networks', 'NLP', 'LLMs', 'Python'],
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80' // Abstract Cyber Punk Art
  },
  { 
    icon: Smartphone, 
    title: 'Next-Gen Mobile Apps', 
    description: 'Engineered high-performance cross-platform applications delivering native-level optimization, fluid 120Hz responses, and breathtaking user interfaces.', 
    techStack: ['React Native', 'Flutter', 'iOS', 'Android'],
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80'
  },
  { 
    icon: Cloud, 
    title: 'Cloud Infra & DevOps', 
    description: 'Highly available, zero-downtime, automated, and infinitely scalable secure cloud infrastructure setups tailored specifically for heavy modern traffic loads.', 
    techStack: ['AWS', 'Kubernetes', 'CI/CD', 'Docker'],
    badge: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80'
  },
  { 
    icon: Shield, 
    title: 'Enterprise Cybersecurity', 
    description: 'Proactive vulnerability assessments, real-time threat monitoring, and bulletproof military-grade security standard deployments to protect your core data assets.', 
    techStack: ['Penetration Testing', 'IAM', 'SOC', 'SIEM'],
    badge: 'Secure',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&q=80'
  },
  { 
    icon: Palette, 
    title: 'Immersive UI/UX Engineering', 
    description: 'Crafting pixel-perfect, conversion-driven user experiences and interactive high-fidelity prototypes based deeply on psychological user behavior analytics.', 
    techStack: ['Figma', 'Prototyping', 'Wireframe', 'UI Tech'],
    badge: 'Creative',
    image: 'https://images.unsplash.com/photo-1618005198143-e5283b519a7f?auto=format&fit=crop&w=600&q=80'
  },
  { 
    icon: Server, 
    title: 'Scalable Backend Systems', 
    description: 'Robust server architecture capable of handling ultra-intensive queries, highly concurrent thread processing, and ultra-secure microservice data synchronization.', 
    techStack: ['Node.js', 'Go Lang', 'Microservices', 'GraphQL'],
    badge: 'High-Perf',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=600&q=80'
  },
  { 
    icon: Users, 
    title: 'Strategic Tech Consulting', 
    description: 'Let our solution architects map your legacy codebase or complex business logic to a futuristic, automated, and modern digital cloud workflow.', 
    techStack: ['Architecture', 'Roadmap', 'Cloud Migration'],
    badge: 'Expert',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80'
  },
  { 
    icon: Terminal, 
    title: 'Dedicated Team Augmentation', 
    description: 'Instantly scale up your existing engineering workspace with elite, vetted mid-to-senior software developers specializing in agile rapid delivery.', 
    techStack: ['Agile Scale', 'Vetted Devs', 'Dedicated Team'],
    badge: 'Managed',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=600&q=80'
  }
];

// পার্টিকল ব্যাকগ্রাউন্ড কম্পোনেন্ট
const CardParticles = ({ width = 320, height = 460 }: { width?: number; height?: number }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    currentMount.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const count = 60; 
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 3.2;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({ 
      color: 0x22d3ee, 
      size: 0.035, 
      transparent: true, 
      opacity: 0.25 
    });
    
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = currentMount.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      points.rotation.y += 0.001 + mouse.x * 0.003;
      points.rotation.x += 0.0008 + mouse.y * 0.003;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [width, height]);

  return <div ref={mountRef} className="absolute inset-0 -z-10 rounded-3xl overflow-hidden pointer-events-none" />;
};

const Services = () => {
  return (
    <section id="services" className="py-32 bg-slate-950 text-slate-100 relative overflow-hidden font-sans selection:bg-cyan-500/30">
      
      {/* প্রিমিয়াম ব্যাকগ্রাউন্ড গ্রিড এবং গ্লো ইফেক্টস */}
      <div className="absolute inset-0" />
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* টপ হেডার সেকশন */}
        <div className="text-center mb-24 max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            <Zap className="w-3.5 h-3.5 fill-cyan-400 animate-pulse" /> Executive Capabilities
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            Our Premium Cybernetic <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-sm">
              Next-Gen Services
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light">
            We deliver highly engineered scalable software solutions and custom tailored cognitive workflows designed to safely insulate, automate, and dominate your global tech infrastructure.
          </p>
        </div>

        {/* ৮ টি প্রিমিয়াম ওভারসাইজড কার্ডের গ্রিড লেআউট */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Tilt
              key={idx}
              className="w-full h-full"
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1200}
              scale={1.03}
              transitionSpeed={800}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="#22d3ee"
              glarePosition="all"
            >
              <div className="relative h-[460px] bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl rounded-3xl p-8 flex flex-col justify-between items-start text-left overflow-hidden group hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]">
                
                {/* ব্যাকগ্রাউন্ড টেকনোলজি ইমেজ (ব্লেন্ডেড মিক্সড মোড) */}
                <div className="absolute inset-0 -z-20 transition-transform duration-700 ease-out scale-105 group-hover:scale-110">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500 mix-blend-luminosity"
                  />
                  {/* ডার্ক ওভারলে গ্রেডিয়েন্ট */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/40" />
                </div>

                {/* 3D পার্টিকল রেন্ডারিং ব্যাকগ্রাউন্ড */}
                <CardParticles width={360} height={460} />

                {/* টপ ব্যাজ */}
                <div className="absolute top-6 right-6 z-20">
                  <span className="text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-sm backdrop-blur-md">
                    {service.badge}
                  </span>
                </div>

                {/* কার্ডের মেইন কন্টেন্ট */}
                <div className="w-full space-y-6 relative z-10">
                  
                  {/* অ্যানিমেটেড আইকন হোল্ডার */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-950 border border-slate-800 text-cyan-400 shadow-lg group-hover:bg-gradient-to-br group-hover:from-cyan-400 group-hover:to-blue-600 group-hover:text-slate-950 group-hover:border-transparent group-hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-500">
                    <service.icon className="w-6 h-6 transition-transform duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275) group-hover:scale-110 group-hover:rotate-6" />
                  </div>

                  {/* টেক্সট ডিটেইলস (বড় এবং হোয়াইট ফন্ট) */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-extrabold tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-300 flex items-center justify-between">
                      {service.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-cyan-400 shrink-0" />
                    </h3>
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal opacity-85 group-hover:opacity-100 transition-opacity duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* কার্ড ফুটার (ডাইনামিক টেকনোলজি ট্যাগস) */}
                <div className="w-full pt-6 border-t border-slate-800/80 relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[10px] font-bold tracking-wider text-slate-300 bg-slate-950/60 border border-slate-800 px-2.5 py-1 rounded-md group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </Tilt>
          ))}
        </div>

        {/* --- ট্রাস্ট ফ্যাক্টর প্যানেল --- */}
        <div className="mt-28 p-8 rounded-3xl bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-slate-950/10 border border-slate-800/80 backdrop-blur-md flex flex-col md:flex-row justify-between items-center gap-8 group hover:border-cyan-500/20 transition-all duration-500">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-bold text-white flex items-center gap-2.5 justify-center md:justify-start">
              <CheckCircle className="w-5 h-5 text-cyan-400 animate-pulse" /> Enterprise SLA & Operational Integrity
            </h4>
            <p className="text-sm text-slate-400 max-w-2xl font-light">
              All production code includes 24/7 autonomous monitoring, strict enterprise NDAs, real-time error telemetry pipelines, and dedicated developer communications channels.
            </p>
          </div>
          <div className="flex gap-8 text-center bg-slate-950/80 px-8 py-5 rounded-2xl border border-slate-800 group-hover:border-cyan-500/30 transition-all duration-500">
            <div>
              <div className="text-3xl font-black text-cyan-400 bg-gradient-to-b from-white to-cyan-400 bg-clip-text text-transparent">99.99%</div>
              <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-1">Uptime SLA</div>
            </div>
            <div className="border-r border-slate-800" />
            <div>
              <div className="text-3xl font-black text-purple-400 bg-gradient-to-b from-white to-purple-400 bg-clip-text text-transparent">75+</div>
              <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-1">Deployments</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;