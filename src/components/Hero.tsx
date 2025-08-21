import React, { useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: any[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 2 + Math.random() * 3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      color: `hsl(${Math.random() * 360}, 80%, 60%)`,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particles
      particles.forEach((p) => {
        const distX = (mouse.current.x - width / 2) * 0.02;
        const distY = (mouse.current.y - height / 2) * 0.02;

        p.x += p.dx + distX * 0.05;
        p.y += p.dy + distY * 0.05;

        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.fill();
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 255, 255, ${(120 - dist) / 120 * 0.5})`;
            ctx.lineWidth = 1;
            ctx.shadowColor = "cyan";
            ctx.shadowBlur = 10;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-gray-900 overflow-hidden flex items-center justify-center">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />
      <div className="absolute inset-0 bg-gray-900/90 z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 md:px-0 space-y-8 max-w-4xl mx-auto py-20">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-[0_0_20px_cyan] animate-fade-in-down">
          NextGen Tech Solutions
        </h1>
        <p className="text-xl md:text-3xl text-gray-300 drop-shadow-[0_0_10px_cyan] animate-fade-in-down delay-200">
          Driving Innovation Through Smart Software & AI
        </p>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl drop-shadow-[0_0_5px_cyan] animate-fade-in-down delay-400">
          We build cutting-edge software solutions that empower businesses worldwide. AI-driven analytics, custom web & mobile applications — scalable, secure, and innovative technology for your growth.
        </p>

        {/* Stats Section */}
        <div className="mt-12 w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 text-white">
          {[
            {
              value: "150+",
              label: "Projects",
              info: "Innovative Solutions",
              color: "text-cyan-400",
            },
            {
              value: "75+",
              label: "Clients",
              info: "Global Trust",
              color: "text-purple-400",
            },
            {
              value: "20+",
              label: "Countries",
              info: "Worldwide Reach",
              color: "text-pink-400",
            },
            {
              value: "10+",
              label: "Years",
              info: "Expertise",
              color: "text-green-400",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center transform hover:scale-110 transition duration-500 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <CheckCircle className={`w-8 h-8 mb-1 ${stat.color} drop-shadow-[0_0_8px]`} />
              <h2 className={`text-3xl md:text-4xl font-bold ${stat.color}`}>
                {stat.value}
              </h2>
              <p className="text-gray-300 mt-1">{stat.label}</p>
              <p className="text-gray-400 text-sm">{stat.info}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-fade-in-down {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInDown 1s forwards;
        }
        .animate-fade-in-down.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-fade-in-down.delay-400 {
          animation-delay: 0.4s;
        }
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s forwards;
        }

        @keyframes fadeInDown {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
