import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ParticleBackground() {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; size: number; duration: number; delay: number; icon: string }>>([]);

  useEffect(() => {
    const icons = ["♪", "♫", "♬", "♩", "✧", "✦"];
    const generated = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 1.5 + 0.5,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
      icon: icons[Math.floor(Math.random() * icons.length)]
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bottom-[-5%] text-primary/30"
          style={{
            left: p.left,
            fontSize: `${p.size}rem`,
            animation: `float ${p.duration}s linear ${p.delay}s infinite`,
            filter: 'blur(1px)'
          }}
        >
          {p.icon}
        </div>
      ))}
    </div>
  );
}
