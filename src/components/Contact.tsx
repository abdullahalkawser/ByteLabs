import React, { useState, useEffect, useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import { Mail, Phone, MapPin, Send, MessageSquareCode, User, Terminal, ArrowLeftRight, Sparkles, Cpu, ShieldCheck, Activity, Globe, Database, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  sender: 'user' | 'system';
  text: string;
  time: string;
}

// সংখ্যা স্ক্রোল অ্যানিমেশন কম্পোনেন্ট (Counter Up Effect)
const CounterUp = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        start = end;
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}</span>;
};

const MainContactAndAnalyticsConsole = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isChatMode, setIsChatMode] = useState(false);
  const [shouldShake, setShouldShake] = useState(false);
  const [liveTraffic, setLiveTraffic] = useState(12);
  const [latency, setLatency] = useState(42);
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

  // রিয়েল-টাইম মেট্রিক্স সিমুলেশন অ্যানিমেশন
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveTraffic(prev => Math.max(8, Math.min(24, prev + (Math.random() > 0.5 ? 1 : -1))));
      setLatency(prev => Math.max(30, Math.min(65, prev + Math.floor((Math.random() - 0.5) * 8))));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const quickMessages = [
    "💡 I have a project idea",
    "💰 Budget & Estimation query",
    "📞 Want to schedule a call with Kawser bhai",
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

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
    setShouldShake(true);
    setTimeout(() => setShouldShake(false), 500);

    setTimeout(() => {
      setIsTyping(false);
      const systemTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      let botResponse = "🔄 Transmission received. Abdullah Al Kawser and the Bytes Lab architects will review your blueprint. Expect a ping at hello@byteslab.com.bd within 2 hours!";
      
      const lowerText = textToSend.toLowerCase();
      if (lowerText.includes('idea') || lowerText.includes('project')) {
        botResponse = "🚀 Project parameters acknowledged! We love building disruptive software. Could you drop your email/WhatsApp? Kawser bhai will set up a Zoom briefing.";
      } else if (lowerText.includes('budget') || lowerText.includes('price') || lowerText.includes('estimation')) {
        botResponse = "💎 Budget scanner activated. Our development cost depends on your specifications. Drop your contact info for an instant quotation.";
      } else if (lowerText.includes('call') || lowerText.includes('kawser')) {
        botResponse = "📅 Operational schedule synced! Abdullah Al Kawser bhai is available for a quick consult. Please leave your active email so we can send the invite code.";
      }

      setMessages((prev) => [...prev, { id: `sys-${Date.now()}`, sender: 'system', text: botResponse, time: systemTime }]);
    }, 1300);
  };
  

  return (
    <section id="contact" className="py-20 bg-slate-950 text-slate-100 relative overflow-hidden font-sans selection:bg-purple-500/30text-white overflow-hidden relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-12">
        
        {/* --- ১. রিয়েল-টাইম লাইভ সিস্টেম স্ট্যাটাস প্যানেল --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-950/40 p-4 rounded-2xl border border-gray-900 backdrop-blur-md"
        >
          <div className="flex items-center gap-3 px-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400"><Activity className="w-4 h-4" /></div>
            <div>
              <div className="text-[10px] uppercase font-mono tracking-widest text-gray-500">Mainframe Latency</div>
              <div className="text-sm font-mono font-bold text-cyan-400 transition-all duration-300">{latency}ms</div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400"><Globe className="w-4 h-4 animate-spin-slow" /></div>
            <div>
              <div className="text-[10px] uppercase font-mono tracking-widest text-gray-500">Active Uplinks</div>
              <div className="text-sm font-mono font-bold text-emerald-400">{liveTraffic} Agents</div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400"><Database className="w-4 h-4" /></div>
            <div>
              <div className="text-[10px] uppercase font-mono tracking-widest text-gray-500">Nodes Synchronized</div>
              <div className="text-sm font-mono font-bold text-purple-400">99.98% Integrity</div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400"><ShieldCheck className="w-4 h-4" /></div>
            <div>
              <div className="text-[10px] uppercase font-mono tracking-widest text-gray-500">Security Target</div>
              <div className="text-sm font-mono font-bold text-amber-400">Quantum Encrypted</div>
            </div>
          </div>
        </motion.div>

        {/* --- ২. কোর কনসেন্ট্রেট হেডার এবং স্ট্যাটিস্টিকস কাউন্টার --- */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/5 border border-cyan-500/20 rounded-full text-[10px] font-mono tracking-widest text-cyan-400 font-bold uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" /> Connection Protocol Active
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none">
              Initialize Your <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Digital Blueprint</span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Have a disruptive software concept or enterprise problem? Select your interface layout—either fill out the neural data form or spawn an encrypted live dialogue node instantly.
            </p>

            {/* অ্যানিমেটেড প্রোডাকশন কাউন্টার প্যানেল */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-900/60">
              <div>
                <div className="text-2xl font-black text-white font-mono"><CounterUp value={142} />+</div>
                <div className="text-[11px] font-medium text-gray-500 uppercase font-sans mt-0.5">Projects Cores</div>
              </div>
              <div>
                <div className="text-2xl font-black text-cyan-400 font-mono"><CounterUp value={98} />%</div>
                <div className="text-[11px] font-medium text-gray-500 uppercase font-sans mt-0.5">Success Ratio</div>
              </div>
              <div>
                <div className="text-2xl font-black text-purple-400 font-mono"><CounterUp value={30} />M+</div>
                <div className="text-[11px] font-medium text-gray-500 uppercase font-sans mt-0.5">Lines Executed</div>
              </div>
            </div>

            <button
              onClick={() => setIsChatMode(!isChatMode)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-gray-950 border border-gray-800 text-gray-200 font-bold text-xs tracking-wider uppercase hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300"
            >
              <ArrowLeftRight className="w-3.5 h-3.5" />
              {isChatMode ? "Deploy Transmission Form" : "Boot Cyber Matrix Chat"}
            </button>
          </div>

          {/* --- ৩. কোর কন্ট্যাক্ট মডিউল কনটেইনার --- */}
          <div className="lg:col-span-7 h-[530px]">
            <AnimatePresence mode="wait">
              {!isChatMode ? (
                <motion.div
                  key="form-terminal"
                  initial={{ opacity: 0, x: 50, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.98 }}
                  transition={{ type: "spring", duration: 0.4 }}
                  className="h-full bg-gray-900/10 border border-gray-900 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between shadow-2xl"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-900">
                      <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">Secure Data Packet Form</span>
                      <span className="text-[9px] font-mono text-purple-400 px-2 py-0.5 bg-purple-500/5 rounded border border-purple-500/20">BUFFER CLEAR</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {['name', 'email'].map((fld) => (
                        <div key={fld}>
                          <label className="block text-[10px] font-bold font-mono uppercase tracking-wider text-gray-500 mb-1.5">{fld} Identity</label>
                          <input 
                            type={fld === 'email' ? 'email' : 'text'} 
                            placeholder={fld === 'email' ? 'matrix@domain.com' : 'Full Name'}
                            className="w-full px-4 py-3 bg-black/50 border border-gray-800 focus:border-purple-500 text-xs font-mono rounded-xl focus:outline-none transition-all duration-300"
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold font-mono uppercase tracking-wider text-gray-500 mb-1.5">Project Blueprint Payload</label>
                      <textarea 
                        rows={5} 
                        placeholder="Detail the operational scale of your target system..."
                        className="w-full px-4 py-3 bg-black/50 border border-gray-800 focus:border-purple-500 text-xs font-mono rounded-xl focus:outline-none resize-none transition-all duration-300"
                      />
                    </div>
                  </div>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white py-4 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg">
                    Broadcast Payload Matrix <Send className="w-3.5 h-3.5" />
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key="chat-terminal"
                  initial={{ opacity: 0, x: 50, scale: 0.98 }}
                  animate={shouldShake ? { x: [-4, 4, -4, 4, 0], borderColor: '#06b6d4' } : { opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.98 }}
                  className="h-full border border-gray-900 rounded-3xl bg-gray-950/20 backdrop-blur-xl flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300"
                >
                  <div className="bg-black/50 px-5 py-3 border-b border-gray-900 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-black tracking-wide font-mono">ByteLabs Live Comm Port</span>
                    </div>
                    <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> Channel Clear
                    </div>
                  </div>

                  {/* মেসেজ স্ক্রোল এরিয়া */}
                  <div className="flex-1 p-5 overflow-y-auto space-y-3 scrollbar-none text-xs font-mono">
                    {messages.map((msg) => (
                      <motion.div key={msg.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`p-3 rounded-xl max-w-[85%] border ${msg.sender === 'user' ? 'bg-purple-600/20 border-purple-500/30 text-purple-100 rounded-tr-none' : 'bg-black/60 border-gray-800 text-cyan-100 rounded-tl-none'}`}>
                          <div>{msg.text}</div>
                          <div className="text-[8px] text-gray-500 mt-1 text-right">{msg.time}</div>
                        </div>
                      </motion.div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-black/60 border border-gray-800 px-3 py-2 rounded-xl rounded-tl-none flex items-center gap-1">
                          <span className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                          <span className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                          <span className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce" />
                        </div>
                      </div>
                    )}
                    <div ref={chatEndRef} />
                  </div>

                  {/* ইনপুট এন্ড চিপস প্যানেল */}
                  <div className="p-4 bg-black/60 border-t border-gray-900 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {quickMessages.map((text, idx) => (
                        <button key={idx} onClick={() => processMessage(text.substring(2))} className="text-[9px] font-mono font-medium px-2.5 py-1 rounded-lg bg-gray-950 border border-gray-900 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/20 transition-all">
                          {text}
                        </button>
                      ))}
                    </div>
                    <form onSubmit={(e) => { e.preventDefault(); if (!currentInput.trim()) return; processMessage(currentInput); setCurrentInput(''); }} className="flex gap-2">
                      <input 
                        type="text" 
                        value={currentInput} 
                        onChange={(e) => setCurrentInput(e.target.value)}
                        placeholder="Type active request payload..." 
                        className="flex-1 px-3 py-2.5 bg-gray-950 border border-gray-900 rounded-xl focus:border-cyan-500 text-xs text-cyan-400 font-mono focus:outline-none"
                      />
                      <button type="submit" className="p-2.5 bg-gradient-to-br from-cyan-400 to-blue-600 text-white rounded-xl"><Send className="w-3.5 h-3.5" /></button>
                    </form>
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

export default MainContactAndAnalyticsConsole;