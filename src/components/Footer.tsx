import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo/Cineglare.svg";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
  { name: "Privacy Policy", path: "#" },
  { name: "Terms & Conditions", path: "#" },
];

const agencyLinks = [
  { name: "Product Branding", path: "/services/product-branding" },
  { name: "Celebrity Management", path: "/services/celebrity-management" },
  { name: "Digital Marketing", path: "/services/digital-marketing" },
  { name: "Film Production", path: "/services/film-and-ad-production" },
  { name: "Event Management", path: "/services/event-management" },
];

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-5">
    <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white">
      {children}
    </h3>
    <span className="mt-2 block h-0.5 w-8 rounded-full bg-[#800000]" />
  </div>
);

const Footer = () => {
  return (
    <footer className="relative overflow-hidden surface-base text-white">
      {/* Soft blend from previous section into footer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--cine-base)] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#800000]/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/4 h-64 w-64 rounded-full bg-[#800000]/[0.07] blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-8 sm:px-8 lg:px-12 lg:pt-20">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mb-14 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="mb-5 inline-flex">
              <span className="inline-flex items-center justify-center rounded-2xl bg-white px-3 py-2 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)]">
                <img
                  src={logo}
                  alt="Cineglare"
                  className="h-8 w-auto max-w-[160px] object-contain md:h-9 md:max-w-[180px]"
                />
              </span>
            </Link>
            <p className="mb-5 max-w-xs text-sm leading-relaxed text-white/55">
              Where brand shines brighter and entertainment goes bigger. Your
              spotlight experience starts here.
            </p>
            <div className="mb-5 rounded-xl border border-[#800000]/25 bg-[#800000]/[0.08] p-4">
              <p className="text-sm leading-relaxed text-white/75">
                <span className="font-semibold text-white">Our Mission: </span>
                Crafting vision into reality through powerful brand stories and
                unforgettable experiences.
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#800000]/50 hover:bg-[#800000] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <SectionTitle>Quick Links</SectionTitle>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    <span className="text-[#800000] opacity-70 transition-opacity group-hover:opacity-100">
                      ›
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <SectionTitle>Our Services</SectionTitle>
            <ul className="space-y-2.5">
              {agencyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    <span className="text-[#800000] opacity-70 transition-opacity group-hover:opacity-100">
                      ›
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch + Newsletter */}
          <div>
            <SectionTitle>Get in Touch</SectionTitle>
            <ul className="mb-8 space-y-3.5 text-sm text-white/65">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#800000]" />
                <span className="leading-relaxed">
                  3rd Floor, Business Plaza, Mumbai, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#800000]" />
                <a
                  href="tel:+919876543210"
                  className="transition-colors hover:text-white"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#800000]" />
                <a
                  href="mailto:hello@cineglare.com"
                  className="transition-colors hover:text-white"
                >
                  hello@cineglare.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#800000]" />
                <span>Mon – Sat: 9:00 AM – 6:00 PM IST</span>
              </li>
              <li className="flex items-start gap-3">
                <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-[#800000]" />
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>

            <SectionTitle>Newsletter</SectionTitle>
            <form
              className="flex overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Your email address"
                className="h-11 flex-1 border-0 bg-transparent text-sm text-white placeholder:text-white/35 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button
                type="submit"
                className="h-11 shrink-0 rounded-none rounded-r-lg bg-[#800000] px-4 font-semibold text-white hover:bg-[#970000]"
              >
                <Send className="mr-1.5 h-4 w-4" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="text-center text-xs text-white/40 sm:text-left sm:text-sm">
            © {new Date().getFullYear()} CineGlare — Crafting Vision into Reality.
            All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-white/40 sm:text-sm">
            <a href="#" className="transition-colors hover:text-white/70">
              Terms & Conditions
            </a>
            <span className="text-white/20">·</span>
            <a href="#" className="transition-colors hover:text-white/70">
              Privacy Policy
            </a>
            <span className="text-white/20">·</span>
            <a href="#" className="transition-colors hover:text-white/70">
              Help
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
