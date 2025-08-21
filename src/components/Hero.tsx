import React, { useEffect, useRef } from "react";

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

    // Mouse move
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Parallax effect
        const distX = (mouse.current.x - width / 2) * 0.02;
        const distY = (mouse.current.y - height / 2) * 0.02;

        p.x += p.dx + distX * 0.05;
        p.y += p.dy + distY * 0.05;

        // Bounce
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.fill();
      });

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

      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 md:px-0 space-y-6 max-w-4xl mx-auto py-20">
<h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
  ByteLabs Tech Solutions
</h1>
<p className="text-xl md:text-3xl text-gray-300 mt-4">
  Driving Innovation Through Smart Software & AI
</p>
<p className="text-gray-400 text-base md:text-lg max-w-2xl mt-2 leading-relaxed">
  We build cutting-edge software solutions that empower businesses worldwide. AI-driven analytics, custom web & mobile applications — scalable, secure, and innovative technology for your growth.
</p>



        <div className="mt-12 w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 text-white">
          {[
            { value: "150+", label: "Projects", info: "Innovative Solutions", color: "text-cyan-400" },
            { value: "75+", label: "Clients", info: "Global Trust", color: "text-purple-400" },
            { value: "20+", label: "Countries", info: "Worldwide Reach", color: "text-pink-400" },
            { value: "10+", label: "Years", info: "Expertise", color: "text-green-400" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center transform hover:scale-110 transition duration-500"
            >
              <h2 className={`text-3xl md:text-4xl font-bold ${stat.color} drop-shadow-[0_0_10px]`}>
                {stat.value}
              </h2>
              <p className="text-gray-300 mt-1">{stat.label}</p>
              <p className="text-gray-400 text-sm">{stat.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
