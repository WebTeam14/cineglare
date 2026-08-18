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
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  as?: ElementType;
  style?: CSSProperties;
  id?: string;
}

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
  step?: number;
  baseDelay?: number;
  variant?: RevealVariant;
  as?: ElementType;
}

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
  strength?: number;
}

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

/** Decorative ambient crimson gradients that bridge sections over black. */
export function AmbientGradient({
  className,
  intensity = 1,
}: {
  className?: string;
  intensity?: number;
}) {
  const a = Math.min(42, Math.round(28 * intensity));
  const b = Math.min(32, Math.round(20 * intensity));
  const c = Math.min(24, Math.round(14 * intensity));
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <div
        className="animate-ambient absolute -left-[15%] top-[-10%] h-[48rem] w-[48rem] rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, color-mix(in oklab, var(--primary) ${a}%, transparent), transparent 68%)`,
        }}
      />
      <div
        className="animate-ambient absolute -right-[18%] top-[35%] h-[42rem] w-[42rem] rounded-full blur-3xl"
        style={{
          animationDelay: "-7s",
          background: `radial-gradient(circle, color-mix(in oklab, var(--primary) ${b}%, transparent), transparent 70%)`,
        }}
      />
      <div
        className="animate-ambient absolute left-[10%] bottom-[-15%] h-[36rem] w-[36rem] rounded-full blur-3xl"
        style={{
          animationDelay: "-12s",
          background: `radial-gradient(circle, color-mix(in oklab, var(--primary) ${c}%, transparent), transparent 72%)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, color-mix(in oklab, var(--primary) 6%, transparent) 30%, transparent 55%, color-mix(in oklab, var(--primary) 8%, transparent) 75%, transparent 100%)",
        }}
      />
    </div>
  );
}

export default Reveal;
