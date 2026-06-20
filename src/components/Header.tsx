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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    }, 400); // দ্রুত এবং স্মুথ ট্রানজিশনের জন্য ডিলে কমানো হয়েছে
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
      {/* --- ১. মডার্ন সাইবারপাঙ্ক হেডার নেভিগেশন --- */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled
            ? 'h-20 bg-[#05070f]/90 border-cyan-500/20 backdrop-blur-xl shadow-[0_4px_30px_rgba(6,182,212,0.15)]'
            : 'h-24 bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
              <Cpu className="w-7 h-7 text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)] group-hover:rotate-180 transition-transform duration-500" />
              <div className="text-3xl font-black bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent tracking-wide">
                ByteLabs
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-sm font-medium tracking-wide text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <span className="text-cyan-500/0 group-hover:text-cyan-500/100 mr-1 transition-all duration-200">&lt;</span>
                  {item}
                  <span className="text-cyan-500/0 group-hover:text-cyan-500/100 ml-1 transition-all duration-200">&gt;</span>
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6,182,212,0.6)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsQuoteModalOpen(true)}
                className="relative bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white px-8 py-3.5 rounded-2xl text-sm font-bold tracking-wide overflow-hidden group transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
              >
                <span className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                Get a Quote
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 w-full bg-[#05070f]/95 border-b border-gray-900 backdrop-blur-2xl overflow-hidden"
            >
              <div className="px-6 py-8 space-y-6">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-base font-medium text-gray-300 hover:text-cyan-400"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button
                  onClick={() => { setIsMobileMenuOpen(false); setIsQuoteModalOpen(true); }}
                  className="w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl text-sm font-bold"
                >
                  Get a Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* --- ২. মডার্ন বিগ-টাইপোগ্রাফি কুইজ টার্মিনাল (Modal) --- */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={resetQuoteSystem}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 30 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative w-full max-w-2xl bg-[#080a14] border border-cyan-500/20 rounded-[32px] p-8 md:p-12 shadow-[0_0_60px_rgba(6,182,212,0.2)] text-white overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              <button 
                onClick={resetQuoteSystem}
                className="absolute top-6 right-6 text-gray-500 hover:text-cyan-400 transition-colors p-2 rounded-full hover:bg-gray-900 focus:outline-none"
              >
                <X size={22} />
              </button>

              <div className="flex items-center gap-2 pb-4 mb-8 border-b border-gray-900 text-xs font-mono tracking-wider text-gray-500">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>ByteLabs Mainframe System v2.5</span>
              </div>

              <AnimatePresence mode="wait">
                {currentStep < quizQuestions.length ? (
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="space-y-8"
                  >
                    {/* স্টেপ ইন্ডিকেটর ও প্রোগ্রেস বার */}
                    <div className="space-y-3">
                      <div className="text-sm font-mono text-cyan-400 font-bold">
                        Question 0{currentStep + 1} of 0{quizQuestions.length}
                      </div>
                      <div className="w-full bg-gray-950 h-2 rounded-full overflow-hidden">
                        <motion.div 
                          className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 h-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${((currentStep + 1) / quizQuestions.length) * 100}%` }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>
                    </div>

                    {/* বড় এবং আকর্ষণীয় মডার্ন প্রশ্ন টাইটেল */}
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white leading-tight">
                      {quizQuestions[currentStep].question}
                    </h3>

                    {/* বড় সাইজের প্রিমিয়াম অপশনস কার্ড */}
                    <div className="space-y-3.5">
                      {quizQuestions[currentStep].options.map((option, idx) => {
                        const isSelected = answers[currentStep] === option;
                        return (
                          <motion.button
                            key={idx}
                            whileHover={{ scale: 1.015, x: 4 }}
                            whileTap={{ scale: 0.995 }}
                            onClick={() => handleOptionSelect(option)}
                            className={`w-full text-left px-6 py-4.5 rounded-2xl border text-base font-semibold flex items-center justify-between transition-all duration-300 ${
                              isSelected 
                                ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/5 border-cyan-400 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.15)]' 
                                : 'bg-black/30 border-gray-900 text-gray-300 hover:border-gray-800 hover:text-white'
                            }`}
                          >
                            <span className="leading-snug">{option}</span>
                            {isSelected ? (
                              <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 ml-4" />
                            ) : (
                              <ChevronRight className="w-5 h-5 text-gray-700 flex-shrink-0 ml-4" />
                            )}
                          </motion.button>
                        );
                      })}
                    </div>

                    {/* ব্যাক বাটন নেভিগেশন */}
                    {currentStep > 0 && (
                      <button 
                        onClick={() => setCurrentStep(prev => prev - 1)}
                        className="text-xs font-semibold text-gray-500 hover:text-cyan-400 flex items-center gap-2 mt-4 transition-colors font-mono"
                      >
                        <ArrowLeft className="w-4 h-4" /> Go back to previous node
                      </button>
                    )}
                  </motion.div>
                ) : (
                  // ফাইনাল সাবমিশন ওভারভিউ স্ক্রিন
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="text-center py-4 space-y-8"
                  >
                    <div className="w-16 h-16 bg-gradient-to-tr from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl shadow-cyan-500/20 rotate-6 animate-pulse">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-3xl font-black tracking-tight text-white">Parameters compiled!</h3>
                      <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
                        Your strategic core architecture setup is ready to sync into ByteLabs secure mainframe databases.
                      </p>
                    </div>

                    {/* সিলেক্টেড সামারি প্রিভিউ (বড় করা হয়েছে) */}
                    <div className="bg-black/40 border border-gray-900 rounded-2xl p-6 text-left space-y-3 text-sm text-gray-300 max-w-md mx-auto shadow-inner">
                      <div><span className="text-cyan-400 font-bold font-mono mr-2">&gt; Engine:</span> {answers[0]}</div>
                      <div><span className="text-purple-400 font-bold font-mono mr-2">&gt; Scope:</span> {answers[1]}</div>
                      <div><span className="text-emerald-400 font-bold font-mono mr-2">&gt; Vector:</span> {answers[2]}</div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto w-full pt-4">
                      <button 
                        onClick={() => setCurrentStep(0)}
                        className="flex-1 py-4 border border-gray-800 hover:border-gray-700 hover:text-white text-xs font-bold rounded-xl tracking-wider transition-colors"
                      >
                        Reconfigure node
                      </button>
                      <button 
                        onClick={() => {
                          alert("📡 Package transmitted to ByteLabs managers vector. Target locked!");
                          resetQuoteSystem();
                        }}
                        className="flex-1 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white text-xs font-bold rounded-xl tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                      >
                        Lock in parameters <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;