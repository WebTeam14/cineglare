import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo/Cineglare.svg";

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
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isMenuOpen]);

  const openServices = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setServicesOpen(true);
  };

  const closeServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 160);
  };

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(path + "/");
  };

  const servicesActive =
    pathname === "/services" || pathname.startsWith("/services/");

  const linkClass = (active: boolean) =>
    cn(
      "relative text-[13px] font-medium uppercase tracking-[0.12em] transition-colors duration-300",
      active ? "text-white" : "text-white/60 hover:text-white",
      "after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-[#800000] after:transition-transform after:duration-300 hover:after:scale-x-100",
      active && "after:scale-x-100",
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || isMenuOpen
          ? "border-b border-white/[0.08] bg-[var(--cine-base)]/85 shadow-[0_8px_32px_rgba(0,0,0,.45)] backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent shadow-none",
      )}
    >
      {/* Top accent line */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-px transition-opacity duration-500",
          scrolled || isMenuOpen ? "opacity-100" : "opacity-0",
          "bg-gradient-to-r from-transparent via-[#800000]/80 to-transparent",
        )}
      />

      <nav className="relative mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 md:h-[5rem] md:px-8 lg:px-10">
        {/* Logo */}
        <Link to="/" className="group relative z-10 flex shrink-0 items-center">
          <img
            src={logo}
            alt="Cineglare"
            className="h-12 w-auto max-w-[200px] object-contain object-left transition-transform duration-300 group-hover:scale-[1.04] md:h-14 md:max-w-[240px]"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          <div className="flex items-center gap-6 xl:gap-8">
            <Link to="/" className={linkClass(isActive("/"))}>
              Home
            </Link>
            <Link to="/aboutus" className={linkClass(isActive("/aboutus"))}>
              About Us
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={closeServices}
            >
              <Link
                to="/services"
                className={cn(
                  linkClass(servicesActive || servicesOpen),
                  "inline-flex items-center gap-1 outline-none",
                )}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 opacity-60 transition-transform duration-300",
                    servicesOpen && "rotate-180 opacity-100",
                  )}
                />
              </Link>

              <div
                className={cn(
                  "absolute left-1/2 top-full z-50 w-[320px] -translate-x-1/2 pt-4 transition-all duration-200",
                  servicesOpen
                    ? "pointer-events-auto visible translate-y-0 opacity-100"
                    : "pointer-events-none invisible -translate-y-1 opacity-0",
                )}
              >
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]/95 p-2 shadow-[0_24px_64px_rgba(0,0,0,.7)] backdrop-blur-xl">
                  <div className="mb-1 px-3 py-2">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                      Our Services
                    </p>
                  </div>
                  <Link
                    to="/services"
                    className={cn(
                      "mb-1 flex items-center rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-colors duration-150",
                      pathname === "/services" || pathname === "/services/"
                        ? "bg-[#800000] text-white"
                        : "text-white hover:bg-[#800000]/90 hover:text-white",
                    )}
                  >
                    View All Services
                  </Link>
                  <div className="grid grid-cols-1 gap-0.5">
                    {servicesLinks.map((service) => {
                      const active = isActive(service.path);
                      return (
                        <Link
                          key={service.name}
                          to={service.path}
                          className={cn(
                            "block rounded-xl px-3.5 py-2.5 text-[13px] font-medium transition-colors duration-150",
                            active
                              ? "bg-[#800000] text-white"
                              : "text-white/70 hover:bg-white/8 hover:text-white",
                          )}
                        >
                          {service.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <Link to="/portfolio" className={linkClass(isActive("/portfolio"))}>
              Portfolio
            </Link>
            <Link to="/contact" className={linkClass(isActive("/contact"))}>
              Contact
            </Link>
          </div>

          <div className="ml-6 xl:ml-8">
            <Button
              asChild
              className="h-10 rounded-full bg-[#800000] px-6 text-[13px] font-semibold uppercase tracking-[0.1em] text-white shadow-[0_8px_24px_rgba(128,0,0,.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#970000] hover:shadow-[0_12px_32px_rgba(128,0,0,.45)] md:h-11 md:px-7"
            >
              <Link to="/contact">Free Quote</Link>
            </Button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:border-white/25 hover:bg-white/10 lg:hidden"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          {isMenuOpen ? <X size={18} strokeWidth={2} /> : <Menu size={18} strokeWidth={2} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-white/10 transition-all duration-400 ease-out lg:hidden",
          isMenuOpen
            ? "max-h-[min(85vh,640px)] opacity-100"
            : "max-h-0 border-t-0 opacity-0",
        )}
      >
        <div className="max-h-[min(85vh,640px)] space-y-0.5 overflow-y-auto bg-[var(--cine-base)]/95 px-5 py-4 backdrop-blur-2xl">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/aboutus" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "block rounded-xl px-4 py-3.5 text-sm font-medium tracking-wide transition-colors",
                isActive(item.path)
                  ? "bg-[#800000]/20 text-white"
                  : "text-white/75 hover:bg-white/5 hover:text-white",
              )}
            >
              {item.name}
            </Link>
          ))}

          {/* Services section */}
          <div className="pt-1">
            <p className="px-4 pb-2 pt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
              Services
            </p>
            <Link
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "block rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                pathname === "/services" || pathname === "/services/"
                  ? "bg-[#800000] text-white"
                  : "text-white hover:bg-[#800000]/20",
              )}
            >
              All Services
            </Link>
            {servicesLinks.map((service) => (
              <Link
                key={service.name}
                to={service.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block rounded-xl px-4 py-2.5 text-sm transition-colors",
                  isActive(service.path)
                    ? "bg-[#800000] text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white",
                )}
              >
                {service.name}
              </Link>
            ))}
          </div>

          <Link
            to="/portfolio"
            onClick={() => setIsMenuOpen(false)}
            className={cn(
              "mt-1 block rounded-xl px-4 py-3.5 text-sm font-medium tracking-wide transition-colors",
              isActive("/portfolio")
                ? "bg-[#800000]/20 text-white"
                : "text-white/75 hover:bg-white/5 hover:text-white",
            )}
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={cn(
              "block rounded-xl px-4 py-3.5 text-sm font-medium tracking-wide transition-colors",
              isActive("/contact")
                ? "bg-[#800000]/20 text-white"
                : "text-white/75 hover:bg-white/5 hover:text-white",
            )}
          >
            Contact
          </Link>

          <div className="px-1 pb-2 pt-4">
            <Button
              asChild
              className="h-12 w-full rounded-full bg-[#800000] text-sm font-semibold uppercase tracking-[0.1em] text-white shadow-[0_10px_28px_rgba(128,0,0,.35)] hover:bg-[#970000]"
            >
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
