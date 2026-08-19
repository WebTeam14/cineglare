import { Facebook, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo/Cineglare.svg";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "#contact" },
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
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.08] bg-[#080808]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#800000]/12 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-0 h-56 w-56 rounded-full bg-[#800000]/[0.08] blur-[90px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-8 md:px-10 lg:px-12">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="lg:pr-4">
            <Link to="/" className="mb-5 inline-flex">
              <span className="inline-flex items-center justify-center rounded-2xl bg-white px-2.5 py-1.5">
                <img
                  src={logo}
                  alt="Cineglare"
                  className="h-8 w-auto max-w-[160px] object-contain md:h-9 md:max-w-[180px]"
                />
              </span>
            </Link>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/55">
              Where brand shines brighter and entertainment goes bigger. Your
              spotlight experience starts here.
            </p>
            <div className="flex gap-2.5">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition-all duration-300 hover:border-[#800000]/50 hover:bg-[#800000] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#800000]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.path.startsWith("#") ? (
                    <a
                      href={link.path}
                      className="text-sm text-white/65 transition-colors duration-300 hover:text-white"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-sm text-white/65 transition-colors duration-300 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#800000]">
              Our Agency
            </h3>
            <ul className="space-y-3">
              {agencyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/65 transition-colors duration-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#800000]">
              Newsletter
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/55">
              Subscribe for inspiration, ideas, and news in your inbox.
            </p>
            <form
              className="flex flex-col gap-2.5 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Your email"
                className="h-11 rounded-full border-white/10 bg-white/[0.05] text-white placeholder:text-white/40 focus-visible:ring-[#800000]/50"
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
