import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export function AnimatedCounter({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          // Ease out quad
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(end * easeProgress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  // Format large numbers
  const formattedCount = count >= 1000000 
    ? (count / 1000000).toFixed(count >= 10000000 ? 0 : 1) + "M"
    : count >= 1000 
      ? (count / 1000).toFixed(0) + "K"
      : count.toString();

  return (
    <span ref={ref}>
      {formattedCount}{suffix}
    </span>
  );
}
