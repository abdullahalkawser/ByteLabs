import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const nodes: any[] = [];
    const cubes: any[] = [];
    const nodeCount = 20;
    const cubeCount = 10;

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 5 + Math.random() * 5,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
      });
    }

    // Initialize cubes
    for (let i = 0; i < cubeCount; i++) {
      cubes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 8 + Math.random() * 10,
        dx: (Math.random() - 0.5) * 1,
        dy: (Math.random() - 0.5) * 1,
        color: `hsl(${Math.random() * 360}, 70%, 50%)`,
      });
    }

    // Mouse move event
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
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
          if (dist < 150) {
            node.x += dx * 0.002;
            node.y += dy * 0.002;
          }
        }
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 255, 0.7)';
        ctx.shadowColor = 'cyan';
        ctx.shadowBlur = 10;
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
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.2 + (150 - dist) / 150 * 0.5})`;
            ctx.lineWidth = 1;
            ctx.shadowBlur = 5;
            ctx.shadowColor = 'cyan';
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
          if (dist < 200) {
            cube.x += dx * 0.003;
            cube.y += dy * 0.003;
          }
        }
        ctx.save();
        ctx.translate(cube.x, cube.y);
        ctx.rotate((Date.now() % 3600) / 500);
        ctx.fillStyle = cube.color;
        ctx.shadowColor = cube.color;
        ctx.shadowBlur = 15;
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
    <section id="about" className="relative py-24 bg-gray-900 text-white overflow-hidden">
      {/* Canvas for AI network */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">About</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our AI-powered projects and see how technology transforms industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-left space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Shaping the Future of{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI & Software
              </span>
            </h2>

            <p className="text-gray-300 text-lg sm:text-xl">
              We are a cutting-edge team of developers, AI researchers, and designers dedicated to building innovative, scalable, and secure software solutions that drive the next generation of technology.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {[
                'Innovation-driven AI solutions',
                'Client-focused software architecture',
                'Cutting-edge machine learning models',
                'Scalable, secure, and modern systems',
              ].map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{value}</span>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Learn More About Us
            </button>
          </div>

          {/* Image next to content */}
          <div className="animate-fade-in-right relative">
            <img
              src="https://kashmirmonitor-s01.sgp1.cdn.digitaloceanspaces.com/wp-content/uploads/2025/05/vecteezy_ai-generated-ai-circuit-board-technology-background_37348385-scaled-1-1.jpg"
              alt="AI circuit board background"
              className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in-left { opacity: 0; animation: fadeInLeft 1s forwards; }
        .animate-fade-in-right { opacity: 0; animation: fadeInRight 1s forwards; }

        @keyframes fadeInLeft {
          to { opacity: 1; transform: translateX(0); }
          from { opacity: 0; transform: translateX(-20px); }
        }

        @keyframes fadeInRight {
          to { opacity: 1; transform: translateX(0); }
          from { opacity: 0; transform: translateX(20px); }
        }
      `}</style>
    </section>
  );
};

export default About;
