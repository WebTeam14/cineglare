import { Facebook, Instagram, Linkedin, Youtube, ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo/Cineglare.svg";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
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

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#0a0a0a]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#800000]/50 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#800000]/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/4 h-64 w-64 rounded-full bg-[#800000]/[0.07] blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-14 pb-8 sm:px-8 lg:px-12 lg:pt-16">
        {/* Top brand + newsletter row */}
        <div className="mb-12 flex flex-col gap-10 border-b border-white/[0.08] pb-12 lg:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:pb-14">
          <div className="max-w-md">
            <Link to="/" className="mb-5 inline-flex">
              <span className="inline-flex items-center justify-center rounded-2xl bg-white px-3 py-2 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)]">
                <img
                  src={logo}
                  alt="Cineglare"
                  className="h-8 w-auto max-w-[160px] object-contain md:h-9 md:max-w-[180px]"
                />
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/55 sm:text-[15px] sm:leading-7">
              Where brand shines brighter and entertainment goes bigger. Your
              spotlight experience starts here.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#800000]/50 hover:bg-[#800000] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="w-full max-w-md lg:max-w-sm">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
              Newsletter
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/50">
              Subscribe for inspiration, ideas, and news.
            </p>
            <form
              className="flex flex-col gap-2.5 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Your email"
                className="h-11 flex-1 rounded-full border-white/10 bg-white/[0.05] text-white placeholder:text-white/35 focus-visible:ring-[#800000]/50"
              />
              <Button
                type="submit"
                className="h-11 shrink-0 rounded-full bg-[#800000] px-5 font-semibold text-white hover:bg-[#970000]"
              >
                Subscribe
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Link columns */}
        <div className="mb-12 grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-3 lg:mb-14 lg:gap-12">
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
              Our Services
            </h3>
            <ul className="space-y-3">
              {agencyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
              Get in Touch
            </h3>
            <ul className="space-y-3.5 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#800000]" />
                <a href="mailto:info@cineglare.com" className="transition-colors hover:text-white">
                  info@cineglare.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#800000]" />
                <a href="tel:+910000000000" className="transition-colors hover:text-white">
                  +91 00000 00000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#800000]" />
                <span>India · Global Presence</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-6 sm:flex-row">
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
