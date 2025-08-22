import React, { useEffect, useRef } from "react";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.parentElement?.offsetWidth || window.innerWidth;
    let height = canvas.parentElement?.offsetHeight || window.innerHeight;

    const particles: any[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 2 + Math.random() * 4,
      dx: (Math.random() - 0.5) * 1,
      dy: (Math.random() - 0.5) * 1,
      color: `hsl(${Math.random() * 360}, 80%, 60%)`,
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
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255,255,255,${1 - dist / 120})`;
            ctx.lineWidth = 0.5;
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
        ctx.shadowBlur = Math.min(width / 100, 20);
        ctx.fill();
      });

      connectParticles();
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.parentElement?.offsetWidth || window.innerWidth;
      height = canvas.parentElement?.offsetHeight || window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      particles.forEach((p) => {
        p.x = Math.random() * width;
        p.y = Math.random() * height;
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-gray-900 overflow-hidden flex items-center justify-center">
      {/* Canvas Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/60 z-10"></div>

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center px-6 md:px-0 space-y-6 max-w-6xl mx-auto py-32">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-lime-200 drop-shadow-lg">
          ByteLabs Tech Solutions
        </h1>
        <p className="text-lg sm:text-xl md:text-3xl text-gray-300 mt-4">
          Driving Innovation Through Smart Software & AI
        </p>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mt-2 leading-relaxed">
          We build cutting-edge software solutions that empower businesses worldwide. AI-driven analytics, custom web & mobile applications — scalable, secure, and innovative technology for your growth.
        </p>

        {/* Stats */}
        <div className="mt-12 w-full flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 md:gap-24 text-white">
          {[
            { value: "150+", label: "Projects", info: "Innovative Solutions", color: "text-cyan-400" },
            { value: "75+", label: "Clients", info: "Global Trust", color: "text-purple-400" },
            { value: "20+", label: "Countries", info: "Worldwide Reach", color: "text-pink-400" },
            { value: "10+", label: "Years", info: "Expertise", color: "text-green-400" },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center transform hover:scale-110 transition duration-500">
              <h2 className={`text-3xl md:text-4xl font-bold ${stat.color} drop-shadow-[0_0_15px]`}>
                {stat.value}
              </h2>
              <p className="text-gray-300 mt-1">{stat.label}</p>
              <p className="text-gray-400 text-sm">{stat.info}</p>
            </div>
          ))}
        </div>

        {/* AI Boxes */}
        <div className="mt-16 w-full flex flex-wrap justify-center gap-4 px-4 md:px-0">
          {[
            { title: "Machine Learning", desc: "Smart predictive models and api", color: "from-blue-400 to-cyan-400" },
            { title: "Computer Vision", desc: "Image & video recognition", color: "from-purple-400 to-pink-400" },
            { title: "Natural Language", desc: "Text & speech AI", color: "from-green-400 to-lime-400" },
            { title: "Robotics", desc: "Automated physical tasks", color: "from-yellow-400 to-orange-400" },
            { title: "Data Analytics", desc: "Insights from data and Data sets", color: "from-pink-400 to-red-400" },
            { title: "AI Automation", desc: "Streamlined processes", color: "from-cyan-400 to-blue-400" },
          ].map((box, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center p-4 flex-1 min-w-[140px] h-36 rounded-3xl bg-gradient-to-r ${box.color} text-white shadow-2xl hover:scale-105 transition-transform duration-300`}
            >
              <h3 className="font-bold text-lg text-center">{box.title}</h3>
              <p className="text-sm text-center mt-1">{box.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
