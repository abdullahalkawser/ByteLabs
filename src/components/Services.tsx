import React, { useEffect, useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import * as THREE from 'three';
import { Globe, Smartphone, Brain, Palette, Cloud, Users, Server, Shield } from 'lucide-react';

const services = [

   { icon: Smartphone, title: 'Mobile Apps', description: 'Cross-platform mobile apps.', extra: 'React Native & Flutter.' },
  { icon: Brain, title: 'AI/ML Solutions', description: 'Smart AI & predictive models.', extra: 'NLP, CV, custom ML models.' },
  { icon: Palette, title: 'UI/UX Design', description: 'Creative & user-friendly interfaces.', extra: 'Wireframes, prototypes.' },
  { icon: Cloud, title: 'Cloud Services', description: 'Scalable cloud solutions.', extra: 'AWS, Azure, GCP.' },
  { icon: Users, title: 'Consulting', description: 'Optimize your business processes.', extra: 'Digital transformation roadmap.' },
  { icon: Shield, title: 'Cybersecurity', description: 'Protect digital assets.', extra: 'Pen testing & monitoring.' },
   
  { icon: Users, title: 'Team Augmentation', description: 'Scale your team with experts.', extra: 'Short-term & long-term contracts.' },
  { icon: Server, title: 'DevOps', description: 'CI/CD & infrastructure automation.', extra: 'Docker, Kubernetes, Terraform.' },
  { icon: Shield, title: 'Cybersecurity', description: 'Protect your digital assets.', extra: 'Penetration testing & monitoring.' }
];

// Animated particle background for each card
const CardParticles = ({ width = 300, height = 300 }: { width?: number; height?: number }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    mountRef.current!.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const count = 80;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) positions[i] = (Math.random() - 0.5) * 2;
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({ color: 0x5ee7df, size: 0.05, transparent: true, opacity: 0.6 });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Optional: slight motion based on mouse
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = mountRef.current!.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.y += 0.001 + mouse.x * 0.005;
      points.rotation.x += 0.001 + mouse.y * 0.005;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      mountRef.current!.removeChild(renderer.domElement);
    };
  }, [width, height]);

  return <div ref={mountRef} className="absolute inset-0 -z-10 rounded-3xl" />;
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-900 text-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Cutting-edge digital solutions to grow your business and stay ahead in the tech era.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <Tilt
              key={idx}
              className="w-full h-full"
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              perspective={1000}
              scale={1.06}
              transitionSpeed={500}
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#5ee7df"
              glarePosition="all"
            >
              <div className="relative bg-gray-800/70 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 h-80 flex flex-col justify-center items-center text-center overflow-hidden">
                {/* Particle background */}
                <CardParticles width={300} height={300} />

                {/* Icon */}
                <div className="flex justify-center mb-6 z-10 relative">
                  <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg transition-transform duration-500 hover:scale-110 animate-pulse">
                    <service.icon className="w-10 h-10 text-white drop-shadow-lg" />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-2 z-10 relative">{service.title}</h3>
                <p className="text-gray-300 text-sm z-10 relative">{service.description}</p>
                <p className="text-gray-400 text-xs mt-2 z-10 relative">{service.extra}</p>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
