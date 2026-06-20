import React, { useState, useEffect, useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import { Mail, Phone, MapPin, Send, MessageSquareCode, User, Terminal, ArrowLeftRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  sender: 'user' | 'system';
  text: string;
  time: string;
}

const ContactCyberpunk = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isChatMode, setIsChatMode] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init',
      sender: 'system',
      text: "⚡ SYSTEM ONLINE: Secure matrix established with Bytes Lab. Abdullah Al Kawser is active. How can we elevate your core product today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // কিছু রেডিমেড কুইক মেসেজ (ইউজার ক্লিক করলেই সেন্ড হবে)
  const quickMessages = [
    "💡 I have a project idea",
    "💰 Budget & Estimation query",
    "📞 Want to schedule a call with Kawser bhai",
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("📡 Data Transmitted to Bytes Lab mainframes! We'll reply at your email shortly.");
    setFormData({ name: '', email: '', message: '' });
  };

  // মেসেজ প্রসেসিং ইঞ্জিন
  const processMessage = (textToSend: string) => {
    const userTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newUserMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      time: userTime,
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const systemTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      let botResponse = "🔄 Transmission received. Abdullah Al Kawser and the Bytes Lab architects will review your blueprint. Expect a ping at hello@byteslab.com.bd within 2 hours!";
      
      const lowerText = textToSend.toLowerCase();
      if (lowerText.includes('idea') || lowerText.includes('project')) {
        botResponse = "🚀 Project parameters acknowledged! We love building disruptive software. Could you drop your email/WhatsApp? Kawser bhai will set up a Zoom briefing.";
      } else if (lowerText.includes('budget') || lowerText.includes('price') || lowerText.includes('estimation')) {
        botResponse = "💎 Budget scanner activated. Our development cost depends on your specifications. Drop your contact info or mail us at hello@byteslab.com.bd for an instant quotation.";
      } else if (lowerText.includes('call') || lowerText.includes('kawser')) {
        botResponse = "📅 Operational schedule synced! Abdullah Al Kawser bhai is available for a quick consult. Please leave your active email so we can send the Google Meet invite code.";
      }

      const systemResponse: Message = {
        id: `sys-${Date.now()}`,
        sender: 'system',
        text: botResponse,
        time: systemTime,
      };
      setMessages((prev) => [...prev, systemResponse]);
    }, 1300);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim()) return;
    processMessage(currentInput);
    setCurrentInput('');
  };

  return (
    <section id="contact" className="py-24 bg-[#05070f] text-white overflow-hidden relative min-h-screen flex items-center">
      
      {/* Background Matrix Ambient Lights */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#05070f] to-[#05070f] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Main Header */}
        <div className="text-center mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mb-4 tracking-tight"
          >
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.25)]">
              Amazing Together
            </span>
          </motion.h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-medium">
            Ready to deploy high-end software solutions? Initialize secure communication with the Bytes Lab mainframe.
          </p>

          {/* Mode Switcher */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6,182,212,0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsChatMode(!isChatMode)}
            className="mt-6 inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-cyan-500/10 border-2 border-cyan-500/30 text-cyan-400 font-bold text-sm tracking-wide transition-all duration-300"
          >
            <ArrowLeftRight className="w-4 h-4" />
            {isChatMode ? "Switch to Secure Form" : "Switch to Live Cyberlink Chat"}
          </motion.button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Info Hub */}
          <div className="lg:col-span-5 h-full">
            <Tilt glareEnable scale={1.02} transitionSpeed={400} className="h-full">
              <div className="bg-gray-900/30 border border-gray-800/80 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl relative overflow-hidden h-full min-h-[380px] flex flex-col justify-between group">
                
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-[0.05] pointer-events-none">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="border border-cyan-500"></div>
                  ))}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-xs font-mono tracking-widest text-cyan-400 font-bold uppercase">BYTES LAB HQ CORE</span>
                  </div>
                  <h3 className="text-2xl font-black tracking-tight mb-2">Direct Terminals</h3>
                  <p className="text-sm text-gray-400 font-medium mb-8">Skip the queue and interact through our encrypted endpoints directly.</p>
                </div>

                {/* Bytes Lab Channels */}
                <div className="space-y-5 relative z-10">
                  {[
                    { icon: Mail, label: 'Official Core Mail', value: 'hello@byteslab.com.bd', gradient: 'from-cyan-500 to-blue-600', glow: 'shadow-cyan-500/10' },
                    { icon: Phone, label: 'Secure Comms', value: '+880 1700-000000', gradient: 'from-emerald-400 to-cyan-500', glow: 'shadow-emerald-500/10' },
                    { icon: MapPin, label: 'HQ Grid Coords', value: 'Dhaka, Bangladesh', gradient: 'from-purple-500 to-pink-500', glow: 'shadow-purple-500/10' }
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-center gap-4 group/item cursor-pointer p-2 rounded-xl hover:bg-white/[0.02] transition-colors duration-200">
                        <div className={`w-11 h-11 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg ${item.glow} group-hover/item:scale-110 transition-transform duration-300`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-500 font-mono uppercase tracking-wider">{item.label}</div>
                          <div className="text-base font-semibold text-gray-200 group-hover/item:text-cyan-400 transition-colors duration-200">{item.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Tilt>
          </div>

          {/* Right Column: Intelligent Chat Terminal / Form Area */}
          <div className="lg:col-span-7 h-full min-h-[550px]">
            <AnimatePresence mode="wait">
              {!isChatMode ? (
                
                // --- ১. কন্টাক্ট ফর্ম ---
                <motion.div
                  key="contact-form"
                  initial={{ opacity: 0, scale: 0.98, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.98, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <form onSubmit={handleFormSubmit} className="bg-gray-900/30 border border-gray-800/80 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl space-y-5 flex flex-col justify-between h-full">
                    <div className="space-y-5">
                      {[
                        { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter your identity...' },
                        { id: 'email', label: 'Email Address', type: 'email', placeholder: 'yourname@domain.com' }
                      ].map((field) => (
                        <div key={field.id}>
                          <label htmlFor={field.id} className="block text-xs font-bold font-mono uppercase tracking-widest text-gray-400 mb-2">
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            id={field.id}
                            name={field.id}
                            value={formData[field.id as keyof typeof formData]}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3.5 border border-gray-800 focus:border-cyan-500 bg-black/40 text-white placeholder-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all duration-300 font-medium"
                            placeholder={field.placeholder}
                          />
                        </div>
                      ))}

                      <div>
                        <label htmlFor="message" className="block text-xs font-bold font-mono uppercase tracking-widest text-gray-400 mb-2">
                          Project Brief / Requirements
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3.5 border border-gray-800 focus:border-cyan-500 bg-black/40 text-white placeholder-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all duration-300 font-medium resize-none"
                          placeholder="Describe the software solution you want Bytes Lab to craft..."
                        />
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(6,182,212,0.3)" }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full mt-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white py-4 px-6 rounded-xl font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-3 group transition-all duration-300"
                    >
                      Broadcast Package
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                
                // --- ২. রিয়েল-টাইম লাইভ সাইবার চ্যাট কনসোল ---
                <motion.div
                  key="chat-system"
                  initial={{ opacity: 0, scale: 0.98, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.98, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div className="bg-gray-900/40 border border-cyan-500/30 backdrop-blur-2xl rounded-3xl shadow-[0_0_40px_rgba(6,182,212,0.12)] flex flex-col justify-between h-[550px] overflow-hidden">
                    
                    {/* চ্যাট হেডার */}
                    <div className="bg-black/40 px-6 py-4 border-b border-gray-800/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                          <Terminal className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-black tracking-wide flex items-center gap-1.5">
                            Bytes Cyberlink Terminal <span className="text-[9px] text-cyan-400 font-mono px-1.5 py-0.5 bg-cyan-500/10 rounded-md border border-cyan-500/20">v2.6</span>
                          </div>
                          <div className="text-[11px] text-emerald-400 font-mono flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> Node Secured via E2E
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* চ্যাট হিস্ট্রি এরিয়া উইথ অ্যানিমেশন বাবল */}
                    <div className="flex-1 p-6 overflow-y-auto space-y-4 scrollbar-none">
                      <AnimatePresence initial={false}>
                        {messages.map((msg) => (
                          <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div className={`flex gap-2.5 max-w-[82%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                              <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 border mt-0.5 ${
                                msg.sender === 'user' ? 'bg-purple-500/10 border-purple-500/30 text-purple-400' : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                              }`}>
                                {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <MessageSquareCode className="w-3.5 h-3.5" />}
                              </div>
                              <div className={`p-3.5 rounded-2xl text-sm leading-relaxed shadow-lg ${
                                msg.sender === 'user' 
                                  ? 'bg-gradient-to-br from-purple-600/20 to-indigo-600/30 border border-purple-500/30 text-purple-50 rounded-br-none' 
                                  : 'bg-black/40 border border-gray-800 text-cyan-50 rounded-bl-none font-mono text-xs'
                              }`}>
                                <div>{msg.text}</div>
                                <div className="text-[9px] text-gray-500 mt-1.5 text-right font-sans font-medium">{msg.time}</div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>

                      {/* টাইপিং ডট অ্যানিমেশন */}
                      {isTyping && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                          <div className="flex gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400"><MessageSquareCode className="w-3.5 h-3.5" /></div>
                            <div className="bg-black/30 border border-gray-800 px-4 py-3.5 rounded-2xl rounded-bl-none flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
                            </div>
                          </div>
                        </motion.div>
                      )}
                      <div ref={chatEndRef} />
                    </div>

                    {/* ফুটারে কুইক মেসেজ সাজেশন চিপস এবং ইনপুট ফিল্ড */}
                    <div className="p-4 bg-black/40 border-t border-gray-800/60 space-y-3">
                      
                      {/* সাজেস্টেড কুইক চিপস (অ্যানিমেটেড হোভার) */}
                      <div className="flex flex-wrap gap-2">
                        {quickMessages.map((text, idx) => (
                          <motion.button
                            key={idx}
                            whileHover={{ scale: 1.03, backgroundColor: "rgba(6,182,212,0.1)", borderColor: "rgba(6,182,212,0.4)" }}
                            whileTap={{ scale: 0.98 }}
                            type="button"
                            onClick={() => processMessage(text.substring(2))} // ইমোজি বাদে বাকি লেখা পাঠানোর জন্য
                            className="text-[11px] font-medium px-3 py-1.5 rounded-lg bg-gray-900/60 border border-gray-800 text-gray-400 hover:text-cyan-400 transition-all duration-200 flex items-center gap-1.5"
                          >
                            <Sparkles className="w-3 h-3 text-cyan-400/70" />
                            {text}
                          </motion.button>
                        ))}
                      </div>

                      {/* মেইন টেক্সট ইনপুট */}
                      <form onSubmit={handleSendMessage} className="flex gap-3 items-center">
                        <input
                          type="text"
                          value={currentInput}
                          onChange={(e) => setCurrentInput(e.target.value)}
                          placeholder="Transmit an encrypted payload or choice to Bytes Lab..."
                          className="flex-1 px-4 py-3 bg-gray-950 border border-gray-800 focus:border-cyan-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/10 font-mono text-xs text-cyan-400 placeholder-gray-600 transition-all duration-300"
                        />
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          type="submit"
                          disabled={!currentInput.trim()}
                          className="p-3 bg-gradient-to-br from-cyan-400 to-blue-600 disabled:opacity-40 disabled:pointer-events-none text-white rounded-xl shadow-lg transition-all duration-300"
                        >
                          <Send className="w-4 h-4" />
                        </motion.button>
                      </form>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCyberpunk;