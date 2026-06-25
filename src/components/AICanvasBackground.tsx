// components/AICanvasBackground.jsx
import React, { useEffect, useRef } from 'react';

const AICanvasBackground = () => {
  const canvasRef = useRef(null);
  
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const nodes = [];
    const cubes = [];
    const nodeCount = 20;
    const cubeCount = 10;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 5 + Math.random() * 5,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
      });
    }

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

    const handleMouseMove = (e) => {
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
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.2 + (150 - dist)/150 * 0.5})`;
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
        ctx.fillRect(-cube.size/2, -cube.size/2, cube.size, cube.size);
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
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
    />
  );
};

export default AICanvasBackground;
