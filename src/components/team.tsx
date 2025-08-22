import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Particles from 'react-tsparticles';

const teamMembers = [
  { name: 'Abdullah', role: 'Founder', image: 'https://ik.imagekit.io/kiehp5ayu/493918777_1249827663230269_812639154031349223_n-fotor-bg-remover-20250822222549.-fotor-enhance-20250822222800.jpg?updatedAt=1755880220944' },
  { name: 'Bob', role: 'CTO', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { name: 'Charlie', role: 'Lead Developer', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { name: 'Diana', role: 'UI/UX Designer', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { name: 'Ethan', role: 'Frontend Developer', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { name: 'Fiona', role: 'Backend Developer', image: 'https://randomuser.me/api/portraits/women/3.jpg' },
  { name: 'George', role: 'Data Scientist', image: 'https://randomuser.me/api/portraits/men/4.jpg' },
  { name: 'Hannah', role: 'Marketing Head', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
  { name: 'Ian', role: 'Project Manager', image: 'https://randomuser.me/api/portraits/men/5.jpg' },
  { name: 'Julia', role: 'QA Engineer', image: 'https://randomuser.me/api/portraits/women/5.jpg' },
];

export default function Team() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, 1], [-10, 10]);
  const rotateY = useTransform(mouseX, [0, 1], [-10, 10]);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section className="relative bg-gray-900 text-white py-16 overflow-hidden">
      {/* Particles Background */}
      <Particles
        options={{
          background: { color: 'bg-gray-900' },
          fpsLimit: 60,
          interactivity: { events: { onHover: { enable: true, mode: 'repulse' } } },
          particles: {
            color: { value: '#00ffff' },
            links: { enable: true, color: '#00ffff' },
            move: { enable: true, speed: 1 },
            number: { value: 50 },
            size: { value: { min: 1, max: 3 } },
          },
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {teamMembers.map((member, index) => {
            const delay = Math.random() * 2;

            return (
              <motion.div
                key={index}
                className="relative bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center shadow-xl cursor-pointer"
                style={{ rotateX, rotateY }}
                onMouseMove={handleMouseMove}
                whileHover={{ scale: 1.08 }}
              >
                {/* Animated Neon Ring */}
                <div
                  className="relative w-36 h-36 mb-4"
                  style={{ animationDelay: `${delay}s` }}
                >
                  <div
                    className="absolute inset-0 rounded-full animate-spin-slow animate-pulse-glow"
                    style={{
                      border: '4px solid #00ffff',          // neon ring color
                      boxShadow: '0 0 30px #00ffff, 0 0 60px #00ffff', // shadow color
                    }}
                  ></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-full h-full object-cover rounded-full border-4 border-gray-900"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
