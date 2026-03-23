import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Play, FastForward, SlidersHorizontal, Volume2 } from "lucide-react";

export function TerminalShowcase() {
  const [step, setStep] = useState(0);
  
  const commands = [
    { text: "/play Lofi Hip Hop Radio", icon: <Play className="w-4 h-4 text-accent" />, response: <>Added <span className="text-accent font-bold">Lofi Hip Hop Radio</span> to the queue. Now playing!</> },
    { text: "/filter nightcore", icon: <SlidersHorizontal className="w-4 h-4 text-primary" />, response: <>Audio filter <span className="text-primary font-bold">Nightcore</span> applied successfully.</> },
    { text: "/volume 80", icon: <Volume2 className="w-4 h-4 text-accent" />, response: <>Volume set to <span className="text-accent font-bold">80%</span> 🔊</> },
    { text: "/skip", icon: <FastForward className="w-4 h-4 text-white" />, response: <>Skipped! Now playing: <span className="text-white font-bold">Resonance - HOME</span></> },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % (commands.length + 1));
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden border border-white/10 bg-[#0f111a] shadow-2xl relative">
      {/* Terminal Header */}
      <div className="bg-[#1a1d27] px-4 py-3 flex items-center gap-2 border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="mx-auto flex items-center gap-2 text-xs font-mono text-muted-foreground">
          <Terminal className="w-3 h-3" />
          discord — #music
        </div>
      </div>
      
      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm min-h-[260px] relative">
        <div className="space-y-4">
          {/* Previous context */}
          <div className="opacity-30 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">@User</span>
              <span className="text-gray-400">used</span>
              <span className="text-white bg-white/10 px-1.5 py-0.5 rounded">/join</span>
            </div>
            <div className="pl-4 border-l-2 border-primary/30 text-gray-300 flex items-center gap-2">
              🎧 Joined <span className="font-bold text-white">General Voice</span>
            </div>
          </div>

          {/* Active command */}
          {step < commands.length && (
            <motion.div 
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2 pt-2">
                <span className="text-primary font-bold">@User</span>
                <span className="text-gray-400">typing...</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 w-fit px-3 py-2 rounded-lg border border-white/10">
                {commands[step].icon}
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, ease: "linear" }}
                  className="overflow-hidden whitespace-nowrap block border-r-2 border-accent pr-1"
                >
                  {commands[step].text}
                </motion.span>
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="pl-4 mt-4"
              >
                <div className="bg-[#1a1d27] border-l-4 border-primary rounded-r p-4 shadow-lg">
                  <div className="flex items-center gap-2 font-sans font-bold text-white mb-2">
                    <span className="bg-gradient-to-r from-primary to-accent text-[10px] uppercase px-2 py-0.5 rounded text-white font-bold tracking-wider">BOT</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">NEON MUSIC</span>
                  </div>
                  <p className="text-gray-300 font-sans text-sm">{commands[step].response}</p>
                </div>
              </motion.div>
            </motion.div>
          )}

          {step === commands.length && (
            <div className="flex items-center gap-2 pt-2 animate-pulse text-gray-500">
              <span className="w-2 h-4 bg-gray-500 rounded-sm inline-block" />
              Waiting for command...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
