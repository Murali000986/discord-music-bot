import { useEffect, useState } from "react";

export function Visualizer({ bars = 32, className = "" }: { bars?: number, className?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`flex items-end justify-center gap-1 ${className}`}>
      {Array.from({ length: bars }).map((_, i) => {
        // Create a symmetric bell curve effect for the visualizer
        const centerOffset = Math.abs((bars / 2) - i) / (bars / 2);
        const baseHeight = 100 - (centerOffset * 70); 
        
        return (
          <div
            key={i}
            className="w-2 rounded-t-full bg-gradient-to-t from-primary/50 via-primary to-accent box-glow-accent origin-bottom"
            style={{
              height: `${baseHeight}%`,
              animation: `waveform ${0.8 + Math.random() * 0.5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * -2}s`,
              opacity: 0.6 + Math.random() * 0.4
            }}
          />
        );
      })}
    </div>
  );
}
