import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const teamMembers = [
  {
    name: 'Sarah Rahman',
    role: 'Co-Founder & CEO',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    education: 'MBA, Stanford University',
    bio: 'Leading our strategic vision and driving global growth with a passion for scalable tech innovations.',
    skills: ['Leadership', 'Strategy', 'Venture Capital'],
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Abdullah',
    role: 'Founder',
    image: 'https://i.ibb.co/HvYxTvP/Chat-GPT-Image-Jun-21-2026-02-55-14-AM.png',
    education: 'B.Sc in CSE, BUET',
    bio: 'The visionary mind behind the platform, architecting the core infrastructure and future roadmaps.',
    skills: ['Architecture', 'Product Management', 'R&D'],
    socials: { linkedin: '#', github: '#' }
  },
  {
    name: 'Bob',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
    education: 'M.Sc in Software Engineering, MIT',
    bio: 'Overseeing technical architecture and ensuring high scalability, security, and fast deployment.',
    skills: ['Cloud Computing', 'Cybersecurity', 'DevOps'],
    socials: { linkedin: '#', github: '#' }
  },
  {
    name: 'Charlie',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    education: 'B.Sc in Software Engineering, DU',
    bio: 'Transforming complex designs into high-performance web solutions with clean and maintainable code.',
    skills: ['React / Next.js', 'Node.js', 'GraphQL'],
    socials: { twitter: '#', github: '#' }
  }
];

function TeamCard({ member, delay }) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  
  // Smooth 3D Tilt
  const rotateX = useTransform(mouseY, [0, 1], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 1], [-10, 10]);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      className="relative bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-black border border-slate-800 rounded-3xl p-6 pt-32 flex flex-col shadow-2xl cursor-pointer group hover:border-cyan-500/50 transition-colors duration-500 mt-32 z-10"
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.1, ease: "easeOut" }}
    >
      {/* কার্ড হোভার ব্যাকগ্রাউন্ড গ্লো */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* ইমেজ পজিশনিং: টপ বর্ডারের একদম মাঝখানে (অর্ধেক বাইরে, অর্ধেক ভেতরে) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-52 sm:h-52 z-30"
        style={{ transform: 'translateX(-50%) translateY(-50%) translateZ(50px)' }}
      >
        <motion.div 
          className="w-full h-full rounded-2xl overflow-hidden border-4 border-slate-950 shadow-[0_20px_40px_rgba(0,0,0,0.7)] group-hover:shadow-[0_20px_45px_rgba(6,182,212,0.3)] transition-all duration-500"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay * 0.3 }}
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-750 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* কন্টেন্ট এরিয়া */}
      <div className="flex flex-col flex-grow text-center mt-4" style={{ transform: 'translateZ(20px)' }}>
        <h3 className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors duration-300 tracking-wide">
          {member.name}
        </h3>
        
        <p className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent mb-4">
          {member.role}
        </p>

        <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-300 mb-4 bg-slate-800/50 border border-slate-700/40 px-3 py-1.5 rounded-xl w-fit mx-auto backdrop-blur-sm">
          <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
          <span className="font-medium">{member.education}</span>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-grow font-normal px-1">
          {member.bio}
        </p>

        <div className="flex flex-wrap justify-center gap-1.5 mb-6">
          {member.skills.map((skill, i) => (
            <span key={i} className="text-[10px] font-bold tracking-wider uppercase bg-cyan-950/40 text-cyan-400 border border-cyan-900/40 px-2.5 py-1 rounded-md">
              {skill}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-800/60 mt-auto">
          <span className="text-[10px] font-mono text-slate-500 tracking-widest">NET_ACCESS</span>
          <div className="flex gap-3.5">
            {member.socials.linkedin && (
              <a href={member.socials.linkedin} className="text-slate-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.02-.5.1-.68a1.14 1.14 0 0 1 1-.77c.76 0 1 .58 1 1.42v4.7h2.8M6.5 8.37a1.37 1.37 0 1 0 0-2.75 1.37 1.37 0 0 0 0 2.75M8 18.5V10.13H5.2V18.5H8z"/></svg>
              </a>
            )}
            {member.socials.twitter && (
              <a href={member.socials.twitter} className="text-slate-400 hover:text-purple-400 transform hover:scale-110 transition-all duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            )}
            {member.socials.github && (
              <a href={member.socials.github} className="text-slate-400 hover:text-teal-400 transform hover:scale-110 transition-all duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section className="relative bg-[#020617] text-white py-32 px-4 overflow-hidden min-h-screen flex items-center justify-center">
      
      {/* ব্যাকগ্রাউন্ড রিচ গ্লো এফেক্ট */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* মেইন হেডার */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-6xl font-black tracking-tight mb-4 bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Meet the Visionaries
          </motion.h2>
          <motion.p 
            className="text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our elite team bridges strategic leadership and advanced engineering to architect the future of tech solutions.
          </motion.p>
        </div>

        {/* কার্ডের রেসপনসিভ গ্রিড লেআউট */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 sm:gap-6 lg:gap-8 pt-6">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} delay={index} />
          ))}
        </div>
      </div>
    </section>
  );
}