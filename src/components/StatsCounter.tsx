import React, { useEffect, useRef, useState } from "react";

interface StatsCounterProps {
  end: number;
  label: string;
  duration?: number;
}

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
      className="flex min-w-[160px] flex-col items-center justify-center px-10 py-10 sm:min-w-[180px] sm:px-12 sm:py-12"
    >
      <p className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
        {value}
        <span className="text-[#800000]">+</span>
      </p>
      <p className="mt-2 text-sm font-medium text-white/55">{label}</p>
    </div>
  );
};

export default StatsCounter;
