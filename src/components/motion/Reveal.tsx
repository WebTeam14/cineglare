import {
  Children,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type RevealVariant = "up" | "fade" | "scale" | "left" | "right";

const VARIANT_HIDDEN: Record<RevealVariant, string> = {
  up: "translateY(24px)",
  fade: "none",
  scale: "scale(0.97)",
  left: "translateX(-28px)",
  right: "translateX(28px)",
};

function useInView<T extends HTMLElement>(threshold = 0.15, once = true) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, inView };
}

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Motion flavour. Defaults to a short upward fade. */
  variant?: RevealVariant;
  /** Delay in milliseconds. */
  delay?: number;
  /** Duration in milliseconds. */
  duration?: number;
  as?: ElementType;
  style?: CSSProperties;
  id?: string;
}

/** Fades content in the first time it scrolls into view. */
export function Reveal({
  children,
  className,
  variant = "up",
  delay = 0,
  duration = 700,
  as,
  style,
  id,
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      id={id}
      ref={ref}
      className={cn(className)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : VARIANT_HIDDEN[variant],
        transition: `opacity ${duration}ms var(--ease-cinema) ${delay}ms, transform ${duration}ms var(--ease-cinema) ${delay}ms`,
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  /** Gap between each child animation, in ms. */
  step?: number;
  baseDelay?: number;
  variant?: RevealVariant;
  as?: ElementType;
}

/** Reveals each direct child in sequence with a small stagger. */
export function Stagger({
  children,
  className,
  step = 80,
  baseDelay = 0,
  variant = "up",
  as,
}: StaggerProps) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, inView } = useInView<HTMLDivElement>();
  const items = Children.toArray(children).filter(isValidElement);

  return (
    <Tag ref={ref} className={cn(className)}>
      {items.map((child, index) => (
        <div
          key={child.key ?? index}
          className="contents-none"
          style={{
            display: "contents",
          }}
        >
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : VARIANT_HIDDEN[variant],
              transition: `opacity 620ms var(--ease-cinema) ${baseDelay + index * step}ms, transform 620ms var(--ease-cinema) ${baseDelay + index * step}ms`,
              willChange: "opacity, transform",
              height: "100%",
            }}
          >
            {child}
          </div>
        </div>
      ))}
    </Tag>
  );
}

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Pixels of travel across the viewport. Keep small (10-80). */
  strength?: number;
}

/** Very light scroll parallax, rAF-throttled and reduced-motion aware. */
export function Parallax({ children, className, strength = 40 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const progress = (rect.top + rect.height / 2) / window.innerHeight - 0.5;
      setOffset(-progress * strength);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [strength]);

  return (
    <div ref={ref} className={cn(className)}>
      <div style={{ transform: `translate3d(0, ${offset}px, 0)`, willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}

/** Decorative ambient gradient blobs used to bridge sections. */
export function AmbientGradient({
  className,
  intensity = 1,
}: {
  className?: string;
  intensity?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <div
        className="animate-ambient absolute -left-[10%] top-[-20%] h-[38rem] w-[38rem] rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, color-mix(in oklab, var(--primary) ${18 * intensity}%, transparent), transparent 70%)`,
        }}
      />
      <div
        className="animate-ambient absolute -right-[12%] bottom-[-25%] h-[34rem] w-[34rem] rounded-full blur-3xl"
        style={{
          animationDelay: "-6s",
          background: `radial-gradient(circle, color-mix(in oklab, var(--primary) ${11 * intensity}%, transparent), transparent 70%)`,
        }}
      />
    </div>
  );
}

export default Reveal;
