import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo/Cineglare.svg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "#contact" },
];

const servicesLinks = [
  { name: "Product Branding", path: "/services/product-branding" },
  { name: "Celebrity Management", path: "/services/celebrity-management" },
  { name: "Digital Marketing", path: "/services/digital-marketing" },
  { name: "Film and AD Production", path: "/services/film-and-ad-production" },
  { name: "Film Promotion", path: "/services/film-promotion" },
  { name: "Event Management", path: "/services/event-management" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    if (path.startsWith("#")) return false;
    return pathname === path || pathname.startsWith(path + "/");
  };

  const servicesActive = pathname.startsWith("/services");

  const linkClass = (active: boolean) =>
    cn(
      "relative text-[15px] font-medium tracking-wide transition-colors duration-300",
      active ? "text-white" : "text-white/65 hover:text-white",
      "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#800000] after:transition-transform after:duration-300 hover:after:scale-x-100",
      active && "after:scale-x-100",
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[var(--cine-base)]/95 backdrop-blur-xl transition-shadow duration-500",
        scrolled
          ? "shadow-[0_12px_40px_rgba(0,0,0,.55)]"
          : "shadow-none",
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#800000]/70 to-transparent"
      />
      <nav className="relative mx-auto flex h-[5rem] max-w-7xl items-center justify-between px-5 md:h-[5.5rem] md:px-8 lg:px-10">
        <Link to="/" className="group flex shrink-0 items-center gap-3">
          <span className="inline-flex items-center justify-center rounded-2xl bg-white px-3 py-2 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-transform duration-300 group-hover:scale-[1.03]">
            <img
              src={logo}
              alt="Cineglare"
              className="h-10 w-auto max-w-[200px] object-contain object-center md:h-12 md:max-w-[240px]"
            />
          </span>
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) =>
            link.path.startsWith("#") ? (
              <a key={link.name} href={link.path} className={linkClass(false)}>
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={linkClass(isActive(link.path))}
              >
                {link.name}
              </Link>
            ),
          )}

          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                linkClass(servicesActive),
                "inline-flex items-center gap-1 outline-none",
              )}
            >
              Services
              <ChevronDown className="h-3.5 w-3.5 opacity-70" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="center"
              className="min-w-[240px] rounded-2xl border border-white/10 bg-[#0c0c0c]/95 p-2 shadow-[0_20px_50px_rgba(0,0,0,.55)] backdrop-blur-xl"
            >
              {servicesLinks.map((service) => (
                <DropdownMenuItem
                  key={service.name}
                  asChild
                  className="cursor-pointer rounded-xl px-3 py-2.5 text-sm text-white/75 focus:bg-[#800000]/20 focus:text-white"
                >
                  <Link to={service.path}>{service.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden h-12 rounded-full bg-[#800000] px-7 text-base font-semibold tracking-wide text-white shadow-[0_10px_28px_rgba(128,0,0,.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#970000] hover:shadow-[0_14px_36px_rgba(128,0,0,.45)] sm:inline-flex md:h-13 md:px-8 md:text-[15px]"
          >
            <a href="#contact">Free Quote</a>
          </Button>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-white/20 hover:bg-white/10 lg:hidden"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-[var(--cine-base)]/95 backdrop-blur-xl transition-all duration-400 lg:hidden",
          isMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 border-t-0",
        )}
      >
        <div className="space-y-1 px-5 py-5">
          {navLinks.map((link) =>
            link.path.startsWith("#") ? (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-white/75 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-white/5",
                  isActive(link.path)
                    ? "bg-[#800000]/15 text-white"
                    : "text-white/75 hover:text-white",
                )}
              >
                {link.name}
              </Link>
            ),
          )}

          <div className="pt-2">
            <p className="px-4 pb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#800000]">
              Services
            </p>
            {servicesLinks.map((service) => (
              <Link
                key={service.name}
                to={service.path}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-xl px-4 py-2.5 text-sm text-white/65 transition-colors hover:bg-white/5 hover:text-white"
              >
                {service.name}
              </Link>
            ))}
          </div>

          <div className="pt-3">
            <Button
              asChild
              className="w-full rounded-full bg-[#800000] font-semibold hover:bg-[#970000]"
            >
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Free Quote
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
