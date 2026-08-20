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
  Star,
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
  value, suffix = "", label, icon: Icon,
}: { value: number; suffix?: string; label: string; icon: React.ElementType }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) { setStarted(true); observer.disconnect(); }
    }, { threshold: 0.35 });
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
    <div ref={ref} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#800000]/70 hover:bg-[#800000]/10">
      <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#800000] transition-transform duration-500 group-hover:scale-x-100" />
      <Icon className="mx-auto mb-4 h-6 w-6 text-[#800000] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
      <div className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{count}{suffix}</div>
      <div className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-white/55">{label}</div>
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
    { number: "01", title: "Brand & Marketing", items: ["Brand Strategist", "Copywriter", "Digital Marketing Specialist", "Media Relations Team"], subTitle: "Brand Product Designing", subItems: ["Product / Model Designer", "Graphic & Visual Designer", "3D & Motion Graphic Artist", "AI / Design Technology Specialist", "UX Researcher / Design Strategist"] },
    { number: "02", title: "Corporate & Global Affairs", items: ["International Business Head / Associate", "UAE", "Qatar", "KSA", "UK", "Canada"], subTitle: "Corporate Communications Lead", subItems: ["HR & Talent Manager", "Admin & Legal - Indian Affairs", "Admin & Legal - International Affairs", "Visa & Logistic Team", "AI & R&D Division"] },
    { number: "03", title: "AD Film Production", items: ["Line Producer", "Art Director", "Production Team", "Talent & Styling Unit", "Technical & Post-Production", "Creative & Client Support", "Logistics & Operations"], subTitle: "Events & Entertainment", subItems: ["Client Relations Manager", "Operations Lead", "Celebrity Management Team"] },
  ];
  const csrCards = [
    { src: csrCommunity, title: "Community Growth", number: "01" },
    { src: csrPeople, title: "Investing in People", number: "02" },
    { src: csrGreen, title: "Go Green", number: "03" },
    { src: csrWomen, title: "Empowering Women", number: "04" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
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
        <section className="relative isolate min-h-[88svh] overflow-hidden bg-black">
          <img src={aboutHero} alt="Cineglare team" className="absolute inset-0 h-full w-full object-cover object-center opacity-70" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.96)_0%,rgba(0,0,0,.78)_42%,rgba(0,0,0,.25)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.9)_0%,transparent_45%,rgba(0,0,0,.3)_100%)]" />
          <div className="absolute -right-28 top-20 h-80 w-80 rounded-full bg-[#800000]/30 blur-[110px] about-pulse" />
          <div className="about-grid absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
          <div className="relative mx-auto flex min-h-[88svh] max-w-7xl items-end px-6 pb-14 pt-28 sm:px-8 md:pb-20 lg:px-12">
            <div className="max-w-4xl">
              <div className="about-reveal mb-7 flex items-center gap-3">
                <span className="h-px w-12 bg-[#800000]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">Who We Are</span>
              </div>
              <h1 className="about-reveal text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl [animation-delay:120ms]">About<br /><span className="text-[#800000]">Cineglare.</span></h1>
              <p className="about-reveal mt-8 max-w-2xl text-base leading-relaxed text-white/70 [animation-delay:220ms] md:text-lg">A creative force where <TypewriterWord /> becomes meaningful brand stories, unforgettable events and experiences people remember.</p>
              <div className="about-reveal mt-9 flex flex-wrap items-center gap-4 [animation-delay:320ms]">
                <a href="#story" className="group inline-flex items-center gap-3 rounded-full bg-[#800000] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#970000]">Discover Our Story <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" /></a>
                <div className="flex items-center gap-2 text-sm text-white/55"><span className="h-2 w-2 rounded-full bg-[#800000]" />Creative. Strategic. Global.</div>
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="relative overflow-hidden bg-white py-20 text-black sm:py-24 lg:py-32">
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-12">
            <div>
              <div className="mb-5 flex items-center gap-3"><span className="h-px w-12 bg-[#800000]" /><span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">Our Story</span></div>
              <h2 className="max-w-md text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Ideas that<span className="block text-[#800000]">move people.</span></h2>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#800000] text-white"><Sparkles className="h-5 w-5" /></div>
                <p className="max-w-xs text-sm leading-6 text-black/55">ISO 9001:2015 certified • Shield Global Group subsidiary</p>
              </div>
            </div>
            <div className="space-y-6 text-base leading-8 text-black/65 sm:text-lg">
              <p><strong className="font-bold text-black">Cineglare</strong> is an ISO 9001:2015 certified company, committed to delivering excellence through a robust Quality Management System. It is a proud subsidiary of Shield Global Group — a diversified conglomerate with a strong presence across Asia, Africa and Europe, operating actively in over 23 countries.</p>
              <p>As a dynamic brand and entertainment company, Cineglare specializes in advertising, film production, event management, and brand management & promotions — delivering creative excellence powered by global expertise and backed by Shield Global Group's international foundation.</p>
              <p>With a passionate team of creative strategists, marketers and event curators, Cineglare turns creativity into impactful experiences. From logo design and tagline creation to full-scale product launches, we help brands stand out with innovative storytelling and flawless execution.</p>
              <div className="border-l-4 border-[#800000] pl-6 pt-2 text-xl font-bold leading-8 text-black sm:text-2xl">“From strategy to execution, we turn ambitious ideas into experiences that people remember.”</div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#070707] py-20 sm:py-24 lg:py-32">
          <div className="absolute inset-0 about-grid opacity-20" />
          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">Our Purpose</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Driven by a clear<span className="text-[#800000]"> purpose.</span></h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">Everything we create is guided by a vision and mission to transform ideas into meaningful experiences.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {[{ number: "01", label: "Our Direction", title: "Vision", text: "Make every brand a phenomenon and every event a masterpiece." }, { number: "02", label: "What We Do", title: "Mission", text: "Crafting inspiring brand experiences that celebrate excellence." }].map((item) => (
                <article key={item.number} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.035] p-7 sm:p-10">
                  <div className="mb-10 flex items-center justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#800000] text-sm font-bold">{item.number}</span><span className="text-[10px] font-bold uppercase tracking-[.25em] text-white/40">{item.label}</span></div>
                  <h3 className="text-3xl font-bold sm:text-4xl">{item.title}</h3>
                  <div className="mt-7 border-l-2 border-[#800000] pl-6"><p className="text-xl font-medium leading-8 text-white/75 sm:text-2xl">{item.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-black py-14 sm:py-16 lg:py-20">
          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1fr_.9fr] lg:items-end">
              <div>
                <div className="mb-4 flex items-center gap-3"><span className="h-px w-12 bg-[#800000]" /><span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">Visionaries at Work</span></div>
                <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Creative minds.<span className="block text-[#800000]">One shared ambition.</span></h2>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">At the heart of Cineglare is a passionate team of innovators, creators and strategists who bring ideas to life across advertising, film production, event management and brand promotions.</p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">{stats.map((stat) => (<AnimatedStat key={stat.label} {...stat} />))}</div>
            </div>
            <div className="mt-16 sm:mt-20">
              <div className="mb-10 flex items-center gap-4"><span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#800000]" /><h3 className="text-xl font-bold tracking-tight sm:text-2xl">Our Leadership</h3><span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#800000]" /></div>
              <div className="mx-auto max-w-5xl space-y-5">
                {[{ initials: "RV", role: "Founder & Managing Director", name: "Ram Vijay Singh", text: "With visionary leadership and creative foresight, he has built Cineglare into a powerhouse of innovation, crafting stories that resonate globally." }, { initials: "MK", role: "Operations Director", name: "Manish Kumar Singh", text: "The backbone of execution excellence at Cineglare, ensuring every project is delivered with precision and passion." }].map((person, index) => (
                  <div key={person.name} className="group grid overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[.035] md:grid-cols-[150px_1fr_90px]">
                    <div className="flex items-center justify-center border-b border-white/10 bg-[#800000]/10 p-7 md:border-b-0 md:border-r"><div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#800000] bg-[#800000]/20 text-2xl font-bold">{person.initials}</div></div>
                    <div className="p-7 sm:p-8"><span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">{person.role}</span><h4 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">{person.name}</h4><div className="mt-4 h-px w-10 bg-[#800000]" /><p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/55 sm:text-base">{person.text}</p></div>
                    <div className="hidden items-center justify-center text-5xl font-serif text-[#800000]/40 md:flex">{index === 0 ? "01" : "02"}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.025]">
              <div className="border-b border-white/10 p-7 text-center sm:p-9"><span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">Our Culture</span><h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">What drives us</h3></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5">{values.map(({ title, description, icon: Icon }) => (<div key={title} className="group border-b border-white/10 p-6 text-center sm:border-r lg:border-b-0"><Icon className="mx-auto h-7 w-7 text-[#800000]" /><h4 className="mt-4 font-bold">{title}</h4><p className="mt-2 text-sm leading-relaxed text-white/50">{description}</p></div>))}</div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-14 text-black sm:py-16 lg:py-20">
          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <div className="mb-4 flex items-center gap-3"><span className="h-px w-12 bg-[#800000]" /><span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">Built to Create</span></div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">A structure designed<span className="block text-[#800000]">for impact.</span></h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/60 sm:text-lg">Our collaborative divisions bring strategy, creativity, production and execution together under one connected vision.</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {departments.map((dept) => (
                <article key={dept.number} className="group relative overflow-hidden rounded-[1.5rem] border border-black/10 bg-black p-7 text-white transition-all duration-500 hover:-translate-y-2 hover:bg-[#800000] sm:p-8">
                  <span className="text-xs font-semibold text-[#800000] group-hover:text-white/70">{dept.number}</span>
                  <h3 className="mt-2 border-b border-white/10 pb-4 text-xl font-bold">{dept.title}</h3>
                  <ul className="mt-5 space-y-2.5 text-sm text-white/65">{dept.items.map((item) => (<li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#800000] group-hover:bg-white" />{item}</li>))}</ul>
                  <div className="mt-6 border-t border-white/10 pt-5"><h4 className="text-sm font-semibold text-white/80">{dept.subTitle}</h4><ul className="mt-3 space-y-2 text-sm text-white/50">{dept.subItems.map((item) => (<li key={item}>{item}</li>))}</ul></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#080808]">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-16 xl:px-24 lg:py-20">
              <div className="mb-4 flex items-center gap-3"><span className="h-px w-12 bg-[#800000]" /><span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">Our Principles</span></div>
              <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Creativity with<span className="text-[#800000]"> character.</span></h2>
              <div className="mt-10 space-y-9">
                {[{ title: "INNOVATION", icon: Monitor, text: "Powered by AI and creativity, we craft smarter, faster and more impactful brand experiences by blending art, intelligence and technology." }, { title: "INTEGRITY", icon: Lightbulb, text: "Where creativity meets strategy to build powerful brands and unforgettable experiences driven by innovation and global expertise." }, { title: "PASSION", icon: Globe, text: "We pour heart, energy and imagination into every project — turning passion into powerful brand stories that inspire." }].map(({ title, icon: Icon, text }) => (
                  <div key={title} className="group flex gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#800000] text-white transition-all duration-300 group-hover:scale-105"><Icon className="h-6 w-6" /></div>
                    <div><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-white/45 sm:text-base">{text}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[420px] lg:min-h-full">
              <img src={teamworkStructure} alt="Team collaboration" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#080808]/50 lg:via-transparent" />
              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/15 bg-black/45 p-5 backdrop-blur-md sm:bottom-10 sm:left-10 sm:right-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#800000]"><Play className="ml-0.5 h-4 w-4 fill-current" /></div>
                  <div><p className="text-sm font-bold">Art. Strategy. Execution.</p><p className="text-xs text-white/45">One team, one vision.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#800000] py-14 sm:py-16 lg:py-20">
          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Giving Back</span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Corporate Social<span className="block text-black/80">Responsibility.</span></h2>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">Through our CSR initiatives, we support community growth, sustainability and education in the creative arts — inspiring positive change through every project.</p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {csrCards.map((card) => (
                <article key={card.title} className="group relative overflow-hidden rounded-2xl bg-black">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={card.src} alt={card.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-90" />
                    <span className="absolute left-5 top-5 text-xs font-semibold text-white/55">{card.number}</span>
                    <div className="absolute bottom-0 left-0 right-0 p-5"><h3 className="text-xl font-bold text-white">{card.title}</h3><div className="mt-3 h-1 w-8 rounded-full bg-white/80 transition-all duration-500 group-hover:w-16" /></div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-12 flex items-center justify-between border-t border-white/20 pt-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Creating impact beyond business</span>
              <ArrowUpRight className="h-5 w-5 text-white/60" />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-black py-14 text-center sm:py-16 lg:py-20">
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
