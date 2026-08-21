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
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  const openServices = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setServicesOpen(true);
  };

  const closeServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(path + "/");
  };

  const servicesActive = pathname === "/services" || pathname.startsWith("/services/");

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

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link to="/" className={linkClass(isActive("/"))}>
            Home
          </Link>
          <Link to="/aboutus" className={linkClass(isActive("/aboutus"))}>
            About Us
          </Link>

          {/* Services — link to hub + hover dropdown */}
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            <Link
              to="/services"
              className={cn(
                linkClass(servicesActive || servicesOpen),
                "inline-flex items-center gap-1.5 outline-none",
              )}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 opacity-70 transition-transform duration-300",
                  servicesOpen && "rotate-180",
                )}
              />
            </Link>

            <div
              className={cn(
                "absolute left-1/2 top-full z-50 w-[280px] -translate-x-1/2 pt-3 transition-all duration-200",
                servicesOpen
                  ? "pointer-events-auto visible opacity-100"
                  : "pointer-events-none invisible opacity-0",
              )}
            >
              <div className="rounded-2xl border border-white/10 bg-[#0c0c0c] p-2 shadow-[0_20px_50px_rgba(0,0,0,.65)]">
                <Link
                  to="/services"
                  className={cn(
                    "mb-1 block rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-colors duration-150",
                    pathname === "/services" || pathname === "/services/"
                      ? "bg-[#800000] text-white"
                      : "text-white/90 hover:bg-[#800000] hover:text-white",
                  )}
                >
                  All Services
                </Link>
                {servicesLinks.map((service) => {
                  const active = isActive(service.path);
                  return (
                    <Link
                      key={service.name}
                      to={service.path}
                      className={cn(
                        "block rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors duration-150",
                        active
                          ? "bg-[#800000] text-white"
                          : "text-white/75 hover:bg-[#800000] hover:text-white",
                      )}
                    >
                      {service.name}
                    </Link>
                  );
                })}
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

        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden h-12 rounded-full bg-[#800000] px-7 text-base font-semibold tracking-wide text-white shadow-[0_10px_28px_rgba(128,0,0,.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#970000] hover:shadow-[0_14px_36px_rgba(128,0,0,.45)] sm:inline-flex md:h-13 md:px-8 md:text-[15px]"
          >
            <Link to="/contact">Free Quote</Link>
          </Button>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-white/20 hover:bg-white/10 lg:hidden"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile */}
      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-[var(--cine-base)]/95 backdrop-blur-xl transition-all duration-300 lg:hidden",
          isMenuOpen
            ? "max-h-[min(80vh,560px)] opacity-100"
            : "max-h-0 opacity-0 border-t-0",
        )}
      >
        <div className="max-h-[min(80vh,560px)] space-y-1 overflow-y-auto px-5 py-5">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className={cn(
              "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
              isActive("/")
                ? "bg-[#800000]/15 text-white"
                : "text-white/75 hover:bg-white/5 hover:text-white",
            )}
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            onClick={() => setIsMenuOpen(false)}
            className={cn(
              "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
              isActive("/aboutus")
                ? "bg-[#800000]/15 text-white"
                : "text-white/75 hover:bg-white/5 hover:text-white",
            )}
          >
            About Us
          </Link>

          <div className="pt-2">
            <Link
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "block rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                pathname === "/services" || pathname === "/services/"
                  ? "bg-[#800000] text-white"
                  : "text-white hover:bg-[#800000]/15",
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
                    : "text-white/65 hover:bg-[#800000] hover:text-white",
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
              "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
              isActive("/portfolio")
                ? "bg-[#800000]/15 text-white"
                : "text-white/75 hover:bg-white/5 hover:text-white",
            )}
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={cn(
              "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
              isActive("/contact")
                ? "bg-[#800000]/15 text-white"
                : "text-white/75 hover:bg-white/5 hover:text-white",
            )}
          >
            Contact
          </Link>

          <div className="pt-3">
            <Button
              asChild
              className="w-full rounded-full bg-[#800000] font-semibold hover:bg-[#970000]"
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
