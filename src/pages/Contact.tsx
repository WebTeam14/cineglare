import { useState, type FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import { asset } from "@/assets/placeholder";

const contactHero = asset("contact.jpg");

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    hint: "Mon–Sat, 10am – 7pm IST",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@cineglare.com",
    href: "mailto:hello@cineglare.com",
    hint: "We reply within one business day",
  },
  {
    icon: MapPin,
    label: "Studio",
    value: "3rd Floor, Business Plaza, Mumbai, India",
    href: undefined,
    hint: "Visits by appointment",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // UI-only success state until a real endpoint is wired
    window.setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Header />

      <main className="overflow-hidden">
        {/* ---------------------- HERO ---------------------- */}
        <section className="relative isolate flex min-h-[60vh] items-end overflow-hidden bg-black md:min-h-[72svh]">
          <img
            src={contactHero}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black to-transparent"
          />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-28 sm:px-8 md:pb-18 lg:px-12">
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-12 bg-[#800000]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
                  Start a conversation
                </span>
              </div>
              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Contact
                <span className="block text-[#800000]">Cineglare.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                Tell us about your brand, film, or event. We respond within one
                business day — and we are ready to build something memorable.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------- FORM + DETAILS ---------------------- */}
        <section className="relative overflow-hidden bg-[#0a0a0a] py-16 sm:py-20 lg:py-28">
          {/* Soft solid red gradient wash — no blur / glass */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#800000]/20 via-transparent to-[#800000]/10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#800000]/15 to-transparent"
          />

          <div className="relative z-[1] mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
              {/* Left — info */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#800000]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
                    Reach us
                  </span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Let’s create
                  <span className="text-[#800000]"> together.</span>
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-white/55">
                  Whether you need a campaign, a production, or a full event
                  experience — share a few details and our team will follow up.
                </p>

                <div className="mt-10 space-y-4">
                  {contactDetails.map(
                    ({ icon: Icon, label, value, href, hint }) => {
                      const inner = (
                        <>
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1a1a1a] text-[#800000] transition-colors duration-300 group-hover:bg-white group-hover:text-[#800000]">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45 transition-colors duration-300 group-hover:text-white/80">
                              {label}
                            </p>
                            <p className="mt-1 text-base font-medium text-white transition-colors duration-300 group-hover:text-white">
                              {value}
                            </p>
                            <p className="mt-0.5 text-sm text-white/45 transition-colors duration-300 group-hover:text-white/75">
                              {hint}
                            </p>
                          </div>
                        </>
                      );

                      // Solid card: dark surface → solid brand red on hover
                      const className =
                        "group flex items-start gap-4 rounded-2xl border border-[#1f1f1f] bg-[#121212] p-5 transition-all duration-300 hover:border-[#800000] hover:bg-[#800000]";

                      return href ? (
                        <a key={label} href={href} className={className}>
                          {inner}
                        </a>
                      ) : (
                        <div key={label} className={className}>
                          {inner}
                        </div>
                      );
                    },
                  )}
                </div>

                <div className="mt-8 flex items-center gap-3 rounded-2xl border border-[#1f1f1f] bg-[#121212] px-5 py-4">
                  <Clock className="h-5 w-5 shrink-0 text-[#800000]" />
                  <p className="text-sm text-white/55">
                    <span className="font-medium text-white/80">Response time:</span>{" "}
                    typically within 24 hours on business days.
                  </p>
                </div>
              </div>

              {/* Right — form: solid panel with soft red gradient edge */}
              <div className="rounded-[1.75rem] border border-[#1f1f1f] bg-[#121212] p-6 sm:p-8 lg:p-10">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-[#800000]/12 via-transparent to-transparent"
                />
                {submitted ? (
                  <div className="relative flex min-h-[22rem] flex-col items-center justify-center text-center">
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#800000] text-white">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                      Message sent
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">
                      Thanks for reaching out. Our team will get back to you
                      within one business day.
                    </p>
                    <Button
                      type="button"
                      className="mt-8 rounded-full border-0 bg-[#1a1a1a] text-white hover:bg-[#800000] hover:text-white"
                      onClick={() => setSubmitted(false)}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <div className="relative">
                    <div className="mb-8">
                      <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                        Send a message
                      </h3>
                      <p className="mt-2 text-sm text-white/50">
                        All fields are required unless noted.
                      </p>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="contact-name"
                            className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50"
                          >
                            Name
                          </label>
                          <Input
                            id="contact-name"
                            name="name"
                            required
                            placeholder="Your full name"
                            className="h-12 rounded-xl border-[#2a2a2a] bg-[#0a0a0a] text-white placeholder:text-white/30 focus-visible:border-[#800000] focus-visible:ring-[#800000]"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="contact-email"
                            className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50"
                          >
                            Email
                          </label>
                          <Input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            placeholder="you@company.com"
                            className="h-12 rounded-xl border-[#2a2a2a] bg-[#0a0a0a] text-white placeholder:text-white/30 focus-visible:border-[#800000] focus-visible:ring-[#800000]"
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="contact-phone"
                            className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50"
                          >
                            Phone{" "}
                            <span className="font-normal normal-case tracking-normal text-white/30">
                              (optional)
                            </span>
                          </label>
                          <Input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            placeholder="+91 …"
                            className="h-12 rounded-xl border-[#2a2a2a] bg-[#0a0a0a] text-white placeholder:text-white/30 focus-visible:border-[#800000] focus-visible:ring-[#800000]"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="contact-service"
                            className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50"
                          >
                            Interest
                          </label>
                          <select
                            id="contact-service"
                            name="service"
                            required
                            defaultValue=""
                            className="flex h-12 w-full rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] px-3 text-sm text-white outline-none focus-visible:border-[#800000] focus-visible:ring-2 focus-visible:ring-[#800000]"
                          >
                            <option value="" disabled className="bg-[#0a0a0a]">
                              Select a service
                            </option>
                            <option value="branding" className="bg-[#0a0a0a]">
                              Product Branding
                            </option>
                            <option value="celebrity" className="bg-[#0a0a0a]">
                              Celebrity Management
                            </option>
                            <option value="digital" className="bg-[#0a0a0a]">
                              Digital Marketing
                            </option>
                            <option value="production" className="bg-[#0a0a0a]">
                              Film & Ad Production
                            </option>
                            <option value="promotion" className="bg-[#0a0a0a]">
                              Film Promotion
                            </option>
                            <option value="events" className="bg-[#0a0a0a]">
                              Event Management
                            </option>
                            <option value="other" className="bg-[#0a0a0a]">
                              Something else
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="contact-subject"
                          className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50"
                        >
                          Subject
                        </label>
                        <Input
                          id="contact-subject"
                          name="subject"
                          required
                          placeholder="Brief project title"
                          className="h-12 rounded-xl border-[#2a2a2a] bg-[#0a0a0a] text-white placeholder:text-white/30 focus-visible:border-[#800000] focus-visible:ring-[#800000]"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="contact-message"
                          className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50"
                        >
                          Message
                        </label>
                        <Textarea
                          id="contact-message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Tell us about your goals, timeline, and any key details…"
                          className="min-h-[140px] rounded-xl border-[#2a2a2a] bg-[#0a0a0a] text-white placeholder:text-white/30 focus-visible:border-[#800000] focus-visible:ring-[#800000]"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={sending}
                        className="h-13 w-full rounded-full bg-[#800000] text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#970000] disabled:opacity-70 sm:h-14"
                      >
                        {sending ? (
                          "Sending…"
                        ) : (
                          <span className="inline-flex items-center gap-2.5">
                            Send Message
                            <Send className="h-4 w-4" />
                          </span>
                        )}
                      </Button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------- BOTTOM CTA STRIP ---------------------- */}
        <section className="relative overflow-hidden bg-[#0a0a0a] py-14 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#800000]/25 via-[#800000]/08 to-transparent"
          />
          <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
              Prefer a quick call?
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              We’re one conversation away
              <span className="text-[#800000]"> from your next big moment.</span>
            </h2>
            <a
              href="tel:+919876543210"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#800000] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#970000]"
            >
              Call +91 98765 43210
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
