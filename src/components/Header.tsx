import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, ChevronRight, CheckCircle2, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // মোবাইল মোডাল ওপেন থাকলে স্ক্রিন স্ক্রোল লক করার জন্য ইউটিলিটি
  useEffect(() => {
    if (isQuoteModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isQuoteModalOpen]);

  const navItems = ['Home', 'About', 'Services', 'Portfolio', 'Pricing', 'Contact'];

  const quizQuestions = [
    {
      id: 1,
      question: "Select your project's core engine:",
      options: ["Web Application Development", "Mobile App (iOS/Android)", "AI & Machine Learning Nodes", "UI/UX Cyber Design"]
    },
    {
      id: 2,
      question: "Allocated estimation budget:",
      options: ["$1K - $5K (Startup Node)", "$5K - $15K (Scale Vector)", "$15K+ (Enterprise Mainframe)", "Not sure / Need Consultation"]
    },
    {
      id: 3,
      question: "Targeted deployment timeline:",
      options: ["Ultra Fast (< 1 Month)", "Standard (1-3 Months)", "Strategic (3+ Months)"]
    }
  ];

  const handleOptionSelect = (option: string) => {
    setAnswers({ ...answers, [currentStep]: option });
    setTimeout(() => {
      if (currentStep < quizQuestions.length) {
        setCurrentStep(prev => prev + 1);
      }
    }, 350); 
  };

  const resetQuoteSystem = () => {
    setIsQuoteModalOpen(false);
    setTimeout(() => {
      setCurrentStep(0);
      setAnswers({});
    }, 400);
  };

  return (
    <>
      {/* --- ১. ফুলি রেস্পন্সিভ সাইবারপাঙ্ক হেডার --- */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled
            ? 'h-16 md:h-20 bg-[#05070f]/90 border-cyan-500/20 backdrop-blur-xl shadow-[0_4px_30px_rgba(6,182,212,0.15)]'
            : 'h-20 md:h-24 bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            
            {/* ব্র্যান্ড লোগো */}
            <div className="flex-shrink-0 flex items-center gap-2 md:gap-3 group cursor-pointer">
              <Cpu className="w-6 h-6 md:w-7 md:h-7 text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)] group-hover:rotate-180 transition-transform duration-500" />
              <div className="text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent tracking-wide">
                BytesLabs
              </div>
            </div>

            {/* ডেস্কটপ ও ট্যাবলেট নেভিগেশন লিংকের গ্রিড */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-10">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-xs xl:text-sm font-medium tracking-wide text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <span className="text-cyan-500/0 group-hover:text-cyan-500/100 mr-1 transition-all duration-200">&lt;</span>
                  {item}
                  <span className="text-cyan-500/0 group-hover:text-cyan-500/100 ml-1 transition-all duration-200">&gt;</span>
                </a>
              ))}
            </nav>

            {/* ডেস্কটপ অ্যাকশন বাটন */}
            <div className="hidden lg:block">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6,182,212,0.6)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsQuoteModalOpen(true)}
                className="relative bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white px-6 xl:px-8 py-3 rounded-xl xl:rounded-2xl text-xs xl:text-sm font-bold tracking-wide overflow-hidden group transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
              >
                <span className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                Get a Quote
              </motion.button>
            </div>

            {/* মোবাইল ও মাঝারি ট্যাবলেটের জন্য মেনু টগল বাটন */}
            <div className="flex lg:hidden items-center gap-4">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold sm:block hidden"
              >
                Get a Quote
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors p-1"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* মোবাইল ও ট্যাবলেট ড্রপডাউন ড্রয়ার মেনু */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden absolute top-full left-0 w-full bg-[#05070f]/95 border-b border-cyan-500/10 backdrop-blur-2xl overflow-hidden shadow-2xl"
            >
              <div className="px-6 py-6 space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-base font-semibold text-gray-300 hover:text-cyan-400 py-2 border-b border-gray-900/40"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button
                  onClick={() => { setIsMobileMenuOpen(false); setIsQuoteModalOpen(true); }}
                  className="w-full text-center bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white py-3.5 rounded-xl text-sm font-bold shadow-lg"
                >
                  Get a Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* --- ২. আল্ট্রা-রেস্পন্সিভ কুইজ টার্মিনাল মোডাল --- */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-x-hidden overflow-y-auto">
            {/* ব্যাকড্রপ ওভারলে */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={resetQuoteSystem}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* কোর মোডাল উইন্ডো */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl bg-[#080a14] border border-cyan-500/20 rounded-2xl sm:rounded-[28px] p-5 sm:p-8 md:p-10 shadow-[0_0_50px_rgba(6,182,212,0.15)] text-white my-auto max-h-[92vh] flex flex-col overflow-hidden"
            >
              {/* নিয়ন গ্লো ডেকোরেশন কণা */}
              <div className="absolute -top-24 -right-24 w-36 sm:w-48 h-36 sm:h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-36 sm:w-48 h-36 sm:h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* ক্লোজ বাটন */}
              <button 
                onClick={resetQuoteSystem}
                className="absolute top-4 sm:top-5 right-4 sm:top-5 text-gray-500 hover:text-cyan-400 transition-colors p-2 rounded-full hover:bg-gray-900 focus:outline-none z-10"
              >
                <X size={20} />
              </button>

              {/* সিস্টেম ট্যাগ */}
              <div className="flex items-center gap-2 pb-3 mb-5 sm:mb-6 border-b border-gray-900 text-[10px] sm:text-xs font-mono tracking-wider text-gray-500 flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>BytesLab Mainframe System v2.5</span>
              </div>

              {/* স্ক্রোলযোগ্য মূল কন্টেন্ট এরিয়া */}
              <div className="overflow-y-auto pr-1 flex-1 custom-scrollbar">
                <AnimatePresence mode="wait">
                  {currentStep < quizQuestions.length ? (
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-5 sm:space-y-6"
                    >
                      {/* প্রোগ্রেস ইন্ডিকেটর */}
                      <div className="space-y-2">
                        <div className="text-xs font-mono text-cyan-400 font-bold">
                          Question 0{currentStep + 1} of 0{quizQuestions.length}
                        </div>
                        <div className="w-full bg-gray-950 h-1.5 rounded-full overflow-hidden">
                          <motion.div 
                            className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 h-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentStep + 1) / quizQuestions.length) * 100}%` }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </div>

                      {/* রেস্পন্সিভ প্রশ্ন টাইটেল */}
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white leading-snug">
                        {quizQuestions[currentStep].question}
                      </h3>

                      {/* অপশন কার্ডস গ্রিড */}
                      <div className="space-y-2.5 sm:space-y-3">
                        {quizQuestions[currentStep].options.map((option, idx) => {
                          const isSelected = answers[currentStep] === option;
                          return (
                            <motion.button
                              key={idx}
                              whileHover={{ scale: window.innerWidth > 640 ? 1.01 : 1, x: window.innerWidth > 640 ? 4 : 0 }}
                              whileTap={{ scale: 0.99 }}
                              onClick={() => handleOptionSelect(option)}
                              className={`w-full text-left px-4 sm:px-6 py-3.5 sm:py-4.5 rounded-xl sm:rounded-2xl border text-sm sm:text-base font-semibold flex items-center justify-between transition-all duration-300 ${
                                isSelected 
                                  ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/5 border-cyan-400 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.1)]' 
                                  : 'bg-black/40 border-gray-900 text-gray-300 hover:border-gray-800 hover:text-white'
                              }`}
                            >
                              <span className="leading-snug pr-2">{option}</span>
                              {isSelected ? (
                                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                              ) : (
                                <ChevronRight className="w-4 h-4 sm:w-5 h-5 text-gray-700 flex-shrink-0" />
                              )}
                            </motion.button>
                          );
                        })}
                      </div>

                      {/* ব্যাক নেভিগেশন নোড */}
                      {currentStep > 0 && (
                        <button 
                          onClick={() => setCurrentStep(prev => prev - 1)}
                          className="text-[11px] sm:text-xs font-semibold text-gray-500 hover:text-cyan-400 flex items-center gap-2 pt-2 transition-colors font-mono focus:outline-none"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" /> Go back to previous node
                        </button>
                      )}
                    </motion.div>
                  ) : (
                    /* ফাইনাল সাবমিশন ওভারভিউ */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-2 space-y-6 sm:space-y-8"
                    >
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-tr from-cyan-400 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-xl shadow-cyan-500/10 rotate-6">
                        <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">Parameters compiled!</h3>
                        <p className="text-xs sm:text-sm text-gray-400 max-w-sm mx-auto leading-relaxed px-2">
                          Your strategic core architecture setup is ready to sync into ByteLabs secure mainframe databases.
                        </p>
                      </div>

                      {/* সিলেক্টেড সামারি রেস্পন্সিভ প্রিভিউ */}
                      <div className="bg-black/60 border border-gray-900/60 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-left space-y-2.5 text-xs sm:text-sm text-gray-300 max-w-md mx-auto font-medium">
                        <div className="truncate"><span className="text-cyan-400 font-bold font-mono mr-1.5">&gt; Engine:</span> {answers[0]}</div>
                        <div className="truncate"><span className="text-purple-400 font-bold font-mono mr-1.5">&gt; Scope:</span> {answers[1]}</div>
                        <div className="truncate"><span className="text-emerald-400 font-bold font-mono mr-1.5">&gt; Vector:</span> {answers[2]}</div>
                      </div>

                      {/* অ্যাকশন বাটন প্যানেল - মোবাইলে কলাম, ডেক্সটপে রো */}
                      <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 justify-center max-w-md mx-auto w-full pt-2">
                        <button 
                          onClick={() => setCurrentStep(0)}
                          className="w-full sm:flex-1 py-3 sm:py-4 border border-gray-800 hover:border-gray-700 hover:text-white text-xs font-bold rounded-xl tracking-wider transition-colors order-2 sm:order-1"
                        >
                          Reconfigure node
                        </button>
                        <button 
                          onClick={() => {
                            alert("📡 Package transmitted to ByteLabs managers vector. Target locked!");
                            resetQuoteSystem();
                          }}
                          className="w-full sm:flex-1 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white text-xs font-bold rounded-xl tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 order-1 sm:order-2"
                        >
                          Lock in parameters <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;