import React, { useEffect, useRef, useState } from "react";

interface StatsCounterProps {
  end: number;
  label: string;
  duration?: number;
}

/**
 * Lightweight counter — avoids react-countup / intersection-observer edge cases
 * that can throw in production after scroll into view.
 */
const StatsCounter: React.FC<StatsCounterProps> = ({
  end,
  label,
  duration = 2,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const run = () => {
      if (started.current) return;
      started.current = true;
      if (prefersReduced) {
        setValue(end);
        return;
      }
      const start = performance.now();
      const ms = Math.max(0.4, duration) * 1000;
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / ms);
        // ease-out
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(end * eased));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === "undefined") {
      run();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center bg-card text-foreground p-8 shadow-lg"
    >
      <h2 className="text-6xl font-bold">
        {value}
        <span className="text-primary">+</span>
      </h2>
      <p className="text-muted-foreground mt-2 text-lg font-medium">{label}</p>
    </div>
  );
};

export default StatsCounter;
