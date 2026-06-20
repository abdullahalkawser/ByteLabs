import React, { useState, useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); 
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimer = useRef(null);

  const testimonials = [
    {
      name: "Zayan Ahmed",
      role: "Founder",
      company: "Apex Digital",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Working with Bytes Lab was an absolute pleasure! Abdullah Al Kawser's technical guidance and extremely helpful attitude made our entire project development smooth and stress-free. Highly recommended!",
    },
    {
      name: "Nusrat Jahan",
      role: "Product Manager",
      company: "ShopifyBD",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The e-commerce platform developed by Bytes Lab exceeded our expectations. Abdullah Al Kawser was there from day one, patiently explaining every technical detail and ensuring everything worked flawlessly.",
    },
    {
      name: "Rahat Chowdhury",
      role: "CEO",
      company: "NextGen FinTech",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "It's rare to find such dedication and perfection within tight deadlines. The team at Bytes Lab is incredible. Kawser bhai's exceptional support and friendly behavior made all the difference for us.",
    },
    {
      name: "Mariam Sultana",
      role: "Marketing Director",
      company: "EduCare Global",
      image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Bytes Lab is not just an agency; they are a true business partner. Our students absolutely love the clean and intuitive learning management system they built. Huge thanks to Kawser bhai and the team!",
    },
    {
      name: "Imran Khan",
      role: "CTO",
      company: "Medix Health",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The modern and scalable tech stack Bytes Lab uses is top-notch. Abdullah Al Kawser is an extremely knowledgeable and cooperative professional. Complex architectural solutions were delivered effortlessly.",
    },
    {
      name: "Sajid Hasan",
      role: "Managing Director",
      company: "Traders Hub",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Bytes Lab never compromises on code quality. From our first meeting, it was clear that Kawser bhai genuinely prioritizes client success. Their post-launch customer support is an absolute 10 out of 10!",
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      autoplayTimer.current = setInterval(() => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5500);
    }
    return () => clearInterval(autoplayTimer.current);
  }, [isHovered, testimonials.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.96,
      rotateY: direction > 0 ? 10 : -10,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        x: { type: "spring", stiffness: 90, damping: 16 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
        rotateY: { duration: 0.4 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 120 : -120,
      opacity: 0,
      scale: 0.96,
      rotateY: direction < 0 ? 10 : -10,
      transition: {
        x: { type: "spring", stiffness: 90, damping: 16 },
        opacity: { duration: 0.3 }
      }
    })
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-[#070a13] text-white relative overflow-hidden flex items-center justify-center min-h-[90vh]">
      
      {/* Background Infinity Scrolling Text */}
      <div className="absolute top-1/2 left-0 w-full overflow-hidden select-none pointer-events-none opacity-[0.02] transform -translate-y-1/2 -rotate-12 z-0 hidden md:block">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="text-[12rem] font-black whitespace-nowrap tracking-[1.5rem]"
        >
          BYTES LAB • BYTES LAB • BYTES LAB • BYTES LAB • BYTES LAB • BYTES LAB •
        </motion.div>
      </div>

      {/* Ambient Glow Effects */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[110px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-[28rem] h-[28rem] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold rounded-full mb-3 uppercase tracking-wider"
          >
            Testimonials
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black mb-4 tracking-tight"
          >
            Success Stories from{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Bytes Lab
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-medium"
          >
            See how Abdullah Al Kawser and the Bytes Lab team helped global brands and startups build high-performance products.
          </motion.p>
        </div>

        {/* Slider Section */}
        <div 
          className="relative max-w-4xl mx-auto px-4 md:px-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-visible min-h-[440px] md:min-h-[320px] flex items-center justify-center perspective-[1200px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              {testimonials.map(
                (testimonial, index) =>
                  index === currentSlide && (
                    <motion.div
                      key={index}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="w-full flex justify-center"
                    >
                      <Tilt
                        glareEnable={true}
                        glareMaxOpacity={0.12}
                        glareColor="#ffffff"
                        glarePosition="all"
                        tiltMaxAngleX={6}
                        tiltMaxAngleY={6}
                        perspective={1500}
                        className="bg-gray-900/40 backdrop-blur-2xl border border-gray-800/80 rounded-3xl p-8 md:p-14 shadow-[0_25px_60px_rgba(0,0,0,0.4)] w-full cursor-grab active:cursor-grabbing relative overflow-hidden group"
                      >
                        <Quote className="absolute right-8 top-8 w-24 h-24 text-gray-800/15 pointer-events-none group-hover:text-blue-500/10 group-hover:rotate-12 transition-all duration-500" />
                        
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
                          
                          {/* Profile Avatar */}
                          <div className="relative flex-shrink-0">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] overflow-hidden shadow-2xl border-2 border-gray-700/60 group-hover:border-blue-500 transition-all duration-500 transform -rotate-6 group-hover:rotate-0 group-hover:rounded-2xl">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-500"
                              />
                            </div>
                            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition-opacity duration-500 -z-10 group-hover:rounded-2xl"></div>
                          </div>

                          {/* Testimonial Content */}
                          <div className="flex-1 text-center md:text-left">
                            {/* Stars */}
                            <motion.div variants={contentVariants} initial="hidden" animate="visible" transition={{ delay: 0.05 }} className="flex justify-center md:justify-start gap-1 mb-4">
                              {Array.from({ length: testimonial.rating }).map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]"
                                />
                              ))}
                            </motion.div>
                            
                            {/* Review Text */}
                            <motion.p variants={contentVariants} initial="hidden" animate="visible" transition={{ delay: 0.12 }} className="text-base md:text-[1.1rem] text-gray-200 mb-6 font-medium leading-relaxed italic">
                              "{testimonial.text}"
                            </motion.p>
                            
                            {/* Author Info */}
                            <motion.div variants={contentVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
                              <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{testimonial.name}</div>
                              <div className="text-sm md:text-base text-blue-400/90 font-medium mt-0.5">
                                {testimonial.role} <span className="text-gray-700">|</span> <span className="text-gray-400">{testimonial.company}</span>
                              </div>
                            </motion.div>
                          </div>

                        </div>
                      </Tilt>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -inset-x-2 md:-inset-x-6 flex justify-between items-center pointer-events-none transform -translate-y-1/2">
            <motion.button
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="pointer-events-auto bg-gray-900/80 border border-gray-800 backdrop-blur-md p-3.5 rounded-full shadow-xl hover:bg-gray-800 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="pointer-events-auto bg-gray-900/80 border border-gray-800 backdrop-blur-md p-3.5 rounded-full shadow-xl hover:bg-gray-800 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className="relative py-2 focus:outline-none"
              >
                <div className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "w-8 bg-gradient-to-r from-blue-500 to-indigo-500" : "w-2 bg-gray-800 hover:bg-gray-600"
                  }`} 
                />
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;