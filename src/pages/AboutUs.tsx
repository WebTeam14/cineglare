import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Monitor,
  Lightbulb,
  Globe,
  Users,
  Clapperboard,
  Award,
  Globe2,
  Target,
  Handshake,
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Play,
} from "lucide-react";
import { asset } from "@/assets/placeholder";

const aboutHero = asset("AboutHero.png");
const teamworkStructure = asset("teamwork.jpg");
const csrCommunity = asset("communitygrowth.jpg");
const csrPeople = asset("growth.jfif");
const csrGreen = asset("growth1.jfif");
const csrWomen = asset("women.jfif");

const TypewriterWord = () => {
  const words = ["Cineglare", "Stories", "Experiences", "Impact"];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const currentWord = words[wordIndex] ?? "";
    const timer = window.setTimeout(() => {
      if (!deleting) {
        const next = currentWord.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next === currentWord) setDeleting(true);
      } else {
        const next = currentWord.slice(0, Math.max(0, displayText.length - 1));
        setDisplayText(next);
        if (!next) {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, deleting ? 65 : displayText.length === currentWord.length ? 1600 : 105);
    return () => window.clearTimeout(timer);
  }, [displayText, deleting, wordIndex]);
  return (
    <span className="inline-flex min-w-[7ch] items-baseline text-[#800000]">
      <span>{displayText}</span>
      <span className="ml-1 inline-block h-[0.9em] w-[2px] animate-pulse bg-[#800000]" />
    </span>
  );
};

const AnimatedStat = ({
  value,
  suffix = "",
  label,
  icon: Icon,
  accent = false,
}: {
  value: number;
  suffix?: string;
  label: string;
  icon: React.ElementType;
  accent?: boolean;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const duration = 1500;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, value]);
  return (
    <div
      ref={ref}
      className={
        accent
          ? "group relative overflow-hidden rounded-2xl border border-[#800000]/50 p-5 text-center shadow-[0_16px_40px_-14px_rgba(128,0,0,0.45)] transition-all duration-500 hover:-translate-y-2"
          : "group relative overflow-hidden rounded-2xl border border-[#800000]/15 p-5 text-center shadow-[0_12px_32px_-16px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-2 hover:border-[#800000]/40 hover:shadow-[0_18px_40px_-14px_rgba(128,0,0,0.28)]"
      }
      style={{
        background: accent
          ? "#800000"
          : "linear-gradient(145deg, #ffffff 0%, #fff5f5 55%, #fceaea 100%)",
      }}
    >
      <div className={accent ? "absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-white/50 transition-transform duration-500 group-hover:scale-x-100" : "absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#800000] transition-transform duration-500 group-hover:scale-x-100"} />
      <Icon className={accent ? "mx-auto mb-4 h-6 w-6 text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" : "mx-auto mb-4 h-6 w-6 text-[#800000] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"} />
      <div className={accent ? "text-3xl font-bold tracking-tight text-white sm:text-4xl" : "text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"}>
        {count}{suffix}
      </div>
      <div className={accent ? "mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/85" : "mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-600"}>
        {label}
      </div>
    </div>
  );
};

const AboutUs = () => {
  const stats = [
    { value: 50, suffix: "+", label: "Team Members", icon: Users },
    { value: 500, suffix: "+", label: "Projects Delivered", icon: Clapperboard },
    { value: 10, suffix: "+", label: "Years of Excellence", icon: Award },
    { value: 23, suffix: "+", label: "Countries Reached", icon: Globe2 },
  ];
  const values = [
    { title: "Innovation", description: "We embrace fresh ideas, technology and creative thinking to build work that stands apart.", icon: Lightbulb },
    { title: "Excellence", description: "We pursue high standards from the first idea to the final execution.", icon: Target },
    { title: "Collaboration", description: "Great work happens when creative minds, clients and partners move together.", icon: Handshake },
    { title: "Integrity", description: "We work with honesty, transparency and respect at every stage.", icon: ShieldCheck },
    { title: "Global Impact", description: "We create stories and experiences designed to travel beyond boundaries.", icon: Globe2 },
  ];
  const departments = [
    {
      number: "01",
      title: "Brand & Marketing",
      items: ["Brand Strategist", "Copywriter", "Digital Marketing Specialist", "Media Relations Team"],
      subTitle: "Brand Product Designing",
      subItems: ["Product / Model Designer", "Graphic & Visual Designer", "3D & Motion Graphic Artist", "AI / Design Technology Specialist", "UX Researcher / Design Strategist"],
    },
    {
      number: "02",
      title: "Corporate & Global Affairs",
      items: ["International Business Head / Associate", "UAE", "Qatar", "KSA", "UK", "Canada"],
      subTitle: "Corporate Communications Lead",
      subItems: ["HR & Talent Manager", "Admin & Legal - Indian Affairs", "Admin & Legal - International Affairs", "Visa & Logistic Team", "AI & R&D Division"],
    },
    {
      number: "03",
      title: "AD Film Production",
      items: ["Line Producer", "Art Director", "Production Team", "Talent & Styling Unit", "Technical & Post-Production", "Creative & Client Support", "Logistics & Operations"],
      subTitle: "Events & Entertainment",
      subItems: ["Client Relations Manager", "Operations Lead", "Celebrity Management Team"],
    },
  ];
  const csrCards = [
    { src: csrCommunity, title: "Community Growth", number: "01" },
    { src: csrPeople, title: "Investing in People", number: "02" },
    { src: csrGreen, title: "Go Green", number: "03" },
    { src: csrWomen, title: "Empowering Women", number: "04" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden surface-base text-white">
      <Header />
      <style>{`
        @keyframes aboutFloat { 0%, 100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-16px) translateX(6px); } }
        @keyframes aboutPulse { 0%, 100% { opacity: .35; transform: scale(1); } 50% { opacity: .75; transform: scale(1.08); } }
        @keyframes aboutReveal { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .about-reveal { animation: aboutReveal .8s cubic-bezier(.22,1,.36,1) both; }
        .about-float { animation: aboutFloat 7s ease-in-out infinite; }
        .about-pulse { animation: aboutPulse 5s ease-in-out infinite; }
        .about-grid { background-image: linear-gradient(rgba(128,0,0,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(128,0,0,.08) 1px, transparent 1px); background-size: 48px 48px; }
      `}</style>
      <main>
        <section className="relative isolate min-h-[80svh] overflow-hidden surface-deep">
          <img src={aboutHero} alt="Cineglare team" className="absolute inset-0 h-full w-full object-cover object-center opacity-70" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,6,6,.96)_0%,rgba(6,6,6,.78)_42%,rgba(6,6,6,.25)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,var(--cine-base)_0%,rgba(6,6,6,.55)_28%,transparent_55%,rgba(6,6,6,.35)_100%)]" />
          <div className="absolute -right-28 top-20 h-80 w-80 rounded-full bg-[#800000]/30 blur-[110px] about-pulse" />
          <div className="about-grid absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
          <div className="relative mx-auto flex min-h-[80svh] max-w-7xl items-end px-6 pb-12 pt-28 sm:px-8 md:pb-16 lg:px-12">
            <div className="max-w-4xl">
              <div className="about-reveal mb-5 flex items-center gap-3">
                <span className="h-px w-12 bg-[#800000]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">Who We Are</span>
              </div>
              <h1 className="about-reveal text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl [animation-delay:120ms]">
                About<br /><span className="text-[#800000]">Cineglare.</span>
              </h1>
              <p className="about-reveal mt-6 max-w-2xl text-base leading-relaxed text-white/70 [animation-delay:220ms] md:text-lg">
                A creative force where <TypewriterWord /> becomes meaningful brand stories, unforgettable events and experiences people remember.
              </p>
              <div className="about-reveal mt-8 flex flex-wrap items-center gap-4 [animation-delay:320ms]">
                <a href="#story" className="group inline-flex items-center gap-3 rounded-full bg-[#800000] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#970000]">
                  Discover Our Story <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                </a>
                <div className="flex items-center gap-2 text-sm text-white/55">
                  <span className="h-2 w-2 rounded-full bg-[#800000]" />Creative. Strategic. Global.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="relative overflow-hidden surface-raise py-14 text-white sm:py-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0 surface-glow opacity-70" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-14 lg:px-12">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-12 bg-[#800000]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">Our Story</span>
              </div>
              <h2 className="max-w-md text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Ideas that<span className="block text-[#800000]">move people.</span>
              </h2>
              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#800000] text-white"><Sparkles className="h-5 w-5" /></div>
                <p className="max-w-xs text-sm leading-6 text-white/55">ISO 9001:2015 certified • Shield Global Group subsidiary</p>
              </div>
            </div>
            <div className="space-y-5 text-base leading-8 text-white/65 sm:text-lg">
              <p><strong className="font-bold text-white">Cineglare</strong> is an ISO 9001:2015 certified company, committed to delivering excellence through a robust Quality Management System. It is a proud subsidiary of Shield Global Group — a diversified conglomerate with a strong presence across Asia, Africa and Europe, operating actively in over 23 countries.</p>
              <p>As a dynamic brand and entertainment company, Cineglare specializes in advertising, film production, event management, and brand management & promotions — delivering creative excellence powered by global expertise and backed by Shield Global Group's international foundation.</p>
              <p>With a passionate team of creative strategists, marketers and event curators, Cineglare turns creativity into impactful experiences. From logo design and tagline creation to full-scale product launches, we help brands stand out with innovative storytelling and flawless execution.</p>
              <div className="border-l-4 border-[#800000] pl-6 pt-2 text-xl font-bold leading-8 text-white sm:text-2xl">“From strategy to execution, we turn ambitious ideas into experiences that people remember.”</div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden surface-base py-14 sm:py-16 lg:py-20">
          <div className="absolute inset-0 about-grid opacity-20" />
          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">Our Purpose</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Driven by a clear<span className="text-[#800000]"> purpose.</span></h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">Everything we create is guided by a vision and mission to transform ideas into meaningful experiences.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {[
                { number: "01", label: "Our Direction", title: "Vision", text: "Make every brand a phenomenon and every event a masterpiece.", accent: false },
                { number: "02", label: "What We Do", title: "Mission", text: "Crafting inspiring brand experiences that celebrate excellence.", accent: true },
              ].map((item) => (
                <article
                  key={item.number}
                  className={item.accent ? "group relative overflow-hidden rounded-[2rem] border border-[#800000]/50 p-7 shadow-[0_20px_48px_-16px_rgba(128,0,0,0.45)] transition-all duration-500 hover:-translate-y-1 sm:p-10" : "group relative overflow-hidden rounded-[2rem] border border-[#800000]/15 p-7 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-1 hover:border-[#800000]/35 sm:p-10"}
                  style={{ background: item.accent ? "#800000" : "linear-gradient(145deg, #ffffff 0%, #fff5f5 55%, #fceaea 100%)" }}
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className={item.accent ? "flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-sm font-bold text-white" : "flex h-12 w-12 items-center justify-center rounded-xl bg-[#800000] text-sm font-bold text-white"}>{item.number}</span>
                    <span className={item.accent ? "text-[10px] font-bold uppercase tracking-[.25em] text-white/70" : "text-[10px] font-bold uppercase tracking-[.25em] text-neutral-500"}>{item.label}</span>
                  </div>
                  <h3 className={item.accent ? "text-3xl font-bold text-white sm:text-4xl" : "text-3xl font-bold text-neutral-900 sm:text-4xl"}>{item.title}</h3>
                  <div className={item.accent ? "mt-7 border-l-2 border-white/50 pl-6" : "mt-7 border-l-2 border-[#800000] pl-6"}>
                    <p className={item.accent ? "text-xl font-medium leading-8 text-white/90 sm:text-2xl" : "text-xl font-medium leading-8 text-neutral-700 sm:text-2xl"}>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden surface-raise py-14 sm:py-16 lg:py-20">
          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
              <div className="flex flex-col justify-start">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-12 bg-[#800000]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">Visionaries at Work</span>
                </div>
                <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Creative minds.<span className="block text-[#800000]">One shared ambition.</span>
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
                  At the heart of Cineglare is a passionate team of innovators, creators and strategists who bring ideas to life across advertising, film production, event management and brand promotions.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:pt-1">
                {stats.map((stat, index) => (
                  <AnimatedStat key={stat.label} {...stat} accent={index === 1} />
                ))}
              </div>
            </div>

            <div className="mt-12 sm:mt-16">
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#800000]" />
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl">Our Leadership</h3>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#800000]" />
              </div>
              <div className="mx-auto max-w-3xl px-2 text-center">
                <blockquote className="relative">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -left-2 -top-6 select-none font-serif text-7xl leading-none text-[#800000]/80 sm:-left-4 sm:-top-8 sm:text-8xl"
                  >
                    “
                  </span>
                  <p className="relative px-4 text-lg font-medium leading-relaxed text-white sm:px-8 sm:text-xl sm:leading-8 md:text-2xl">
                    With visionary leadership and creative foresight, he has built Cineglare into a powerhouse of innovation, crafting stories that resonate globally.
                  </p>
                  <span
                    aria-hidden
                    className="pointer-events-none mt-2 inline-block select-none font-serif text-5xl leading-none text-[#800000]/80 sm:text-6xl"
                  >
                    ”
                  </span>
                </blockquote>
              </div>
            </div>

            <div className="mt-12">
              <div className="mb-8 text-center">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">Our Culture</span>
                <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">What drives us</h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {values.map(({ title, description, icon: Icon }, index) => (
                  <article
                    key={title}
                    className={index === 0 ? "group rounded-2xl border border-[#800000]/50 p-5 text-center shadow-[0_16px_40px_-16px_rgba(128,0,0,0.4)] transition-all duration-300 hover:-translate-y-1" : "group rounded-2xl border border-[#800000]/15 p-5 text-center shadow-[0_12px_32px_-18px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-[#800000]/35"}
                    style={{ background: index === 0 ? "#800000" : "linear-gradient(145deg, #ffffff 0%, #fff5f5 55%, #fceaea 100%)" }}
                  >
                    <Icon className={index === 0 ? "mx-auto h-7 w-7 text-white" : "mx-auto h-7 w-7 text-[#800000]"} />
                    <h4 className={index === 0 ? "mt-4 font-bold text-white" : "mt-4 font-bold text-neutral-900"}>{title}</h4>
                    <p className={index === 0 ? "mt-2 text-sm leading-relaxed text-white/85" : "mt-2 text-sm leading-relaxed text-neutral-700"}>{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden surface-base py-14 text-white sm:py-16 lg:py-20">
          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-12 bg-[#800000]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">Built to Create</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">A structure designed<span className="block text-[#800000]">for impact.</span></h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">Our collaborative divisions bring strategy, creativity, production and execution together under one connected vision.</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {departments.map((dept) => (
                <article key={dept.number} className="group relative overflow-hidden rounded-[1.5rem] border border-black/10 bg-white p-7 shadow-[0_12px_32px_-18px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2 hover:border-[#800000] hover:bg-[#800000] hover:shadow-[0_22px_48px_-16px_rgba(128,0,0,0.4)] sm:p-8">
                  <span className="text-xs font-semibold text-[#800000] transition-colors group-hover:text-white/80">{dept.number}</span>
                  <h3 className="mt-2 border-b border-black/10 pb-4 text-xl font-bold text-neutral-900 transition-colors group-hover:border-white/20 group-hover:text-white">{dept.title}</h3>
                  <ul className="mt-5 space-y-2.5 text-sm font-semibold text-neutral-800">
                    {dept.items.map((item) => (
                      <li key={item} className="flex gap-2 transition-colors group-hover:text-white">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#800000] transition-colors group-hover:bg-white" />{item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-black/10 pt-5 transition-colors group-hover:border-white/20">
                    <h4 className="text-sm font-bold text-neutral-900 transition-colors group-hover:text-white">{dept.subTitle}</h4>
                    <ul className="mt-3 space-y-2 text-sm font-medium text-neutral-700">
                      {dept.subItems.map((item) => (
                        <li key={item} className="transition-colors group-hover:text-white/90">{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden surface-raise py-14 sm:py-16 lg:py-20">
          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-12 bg-[#800000]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">Our Principles</span>
                </div>
                <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Creativity with<span className="text-[#800000]"> character.</span></h2>
                <div className="mt-10 space-y-7">
                  {[
                    { title: "INNOVATION", icon: Monitor, text: "Powered by AI and creativity, we craft smarter, faster and more impactful brand experiences by blending art, intelligence and technology." },
                    { title: "INTEGRITY", icon: Lightbulb, text: "Where creativity meets strategy to build powerful brands and unforgettable experiences driven by innovation and global expertise." },
                    { title: "PASSION", icon: Globe, text: "We pour heart, energy and imagination into every project — turning passion into powerful brand stories that inspire." },
                  ].map(({ title, icon: Icon, text }) => (
                    <div key={title} className="group flex gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#800000] text-white transition-all duration-300 group-hover:scale-105"><Icon className="h-6 w-6" /></div>
                      <div>
                        <h3 className="text-lg font-bold">{title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/55 sm:text-base">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[340px] overflow-hidden rounded-[1.5rem] lg:min-h-[480px]">
                <img src={teamworkStructure} alt="Team collaboration" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--cine-base)_0%,rgba(6,6,6,.35)_35%,transparent_75%)]" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-[#800000]/30 bg-[#0c0c0c] p-5 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.7)] sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#800000]"><Play className="ml-0.5 h-4 w-4 fill-current" /></div>
                    <div>
                      <p className="text-sm font-bold">Art. Strategy. Execution.</p>
                      <p className="text-xs text-white/45">One team, one vision.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden surface-base py-14 sm:py-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_60%_at_50%_50%,rgba(128,0,0,.22)_0%,rgba(128,0,0,.08)_45%,transparent_78%)]" />
          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Giving Back</span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Corporate Social<span className="block text-[#800000]">Responsibility.</span></h2>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">Through our CSR initiatives, we support community growth, sustainability and education in the creative arts — inspiring positive change through every project.</p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {csrCards.map((card) => (
                <article key={card.title} className="group relative overflow-hidden rounded-2xl border border-[#800000]/20 bg-[#0c0c0c]">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={card.src} alt={card.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--cine-base)_0%,rgba(6,6,6,.45)_35%,transparent_80%)] opacity-95" />
                    <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#800000] text-xs font-bold text-white shadow-[0_8px_20px_rgba(0,0,0,0.45)] sm:left-5 sm:top-5">{card.number}</span>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-xl font-bold text-white">{card.title}</h3>
                      <div className="mt-3 h-1 w-8 rounded-full bg-white/80 transition-all duration-500 group-hover:w-16" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-10 flex items-center justify-between border-t border-white/20 pt-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Creating impact beyond business</span>
              <ArrowUpRight className="h-5 w-5 text-white/60" />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden surface-base py-14 text-center sm:py-16 lg:py-20">
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#800000]/20 blur-[120px]" />
          <div className="relative mx-auto max-w-4xl px-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">The next story starts here</span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Let's create something<span className="block text-[#800000]">worth remembering.</span></h2>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
