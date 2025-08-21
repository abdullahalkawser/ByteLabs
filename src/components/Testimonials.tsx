import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text:
        "TechFlow delivered an exceptional AI-powered e-commerce platform that increased our sales by 300%. Their attention to detail and technical expertise is unmatched.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "HealthPlus",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text:
        "The telemedicine app they built for us has transformed how we serve our patients. The real-time video consultation feature works flawlessly.",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder",
      company: "EduTech Solutions",
      image:
        "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text:
        "Working with TechFlow was a game-changer. They created a beautiful, functional learning management system that our students love using.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about
            working with us.
          </p>
        </div>

        {/* Slider */}
        <div className="relative perspective">
          <AnimatePresence mode="wait">
            {testimonials.map(
              (testimonial, index) =>
                index === currentSlide && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -200 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center"
                  >
                    <Tilt
                      glareEnable={true}
                      glareMaxOpacity={0.2}
                      glareColor="#ffffff"
                      glarePosition="all"
                      tiltMaxAngleX={15}
                      tiltMaxAngleY={15}
                      perspective={1000}
                      className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-10 md:p-16 shadow-2xl w-full max-w-4xl cursor-pointer"
                    >
                      <div className="flex flex-col md:flex-row items-center gap-10">
                        {/* Image */}
                        <div className="relative flex-shrink-0">
                          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-2xl transform transition-transform duration-300">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute top-2 left-2 w-28 h-28 md:w-36 md:h-36 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-2xl -z-10 animate-pulse"></div>
                        </div>

                        {/* Text */}
                        <div className="flex-1 text-center md:text-left">
                          <div className="flex justify-center md:justify-start gap-1 mb-4">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 text-yellow-400 animate-pulse"
                              />
                            ))}
                          </div>
                          <blockquote className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
                            "{testimonial.text}"
                          </blockquote>
                          <div>
                            <div className="text-xl font-semibold">{testimonial.name}</div>
                            <div className="text-gray-400">
                              {testimonial.role} at {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tilt>
                  </motion.div>
                )
            )}
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/70 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-200 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/70 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-200 z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 scale-125"
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
