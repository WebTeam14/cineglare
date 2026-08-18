import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface StatsCounterProps {
  end: number;
  label: string;
  duration?: number;
}

const StatsCounter: React.FC<StatsCounterProps> = ({
  end,
  label,
  duration = 2.5,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center bg-card text-foreground p-8 shadow-lg"
    >
      {inView && (
        <h2 className="text-6xl font-bold">
          <CountUp start={0} end={end} duration={duration} />+
        </h2>
      )}
      <p className="text-muted-foreground mt-2 text-lg font-medium">{label}</p>
    </div>
  );
};

export default StatsCounter;
