import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Package,
  Users2,
  Globe,
  Film,
  TrendingUp,
  Calendar,
  ArrowRight,
} from "lucide-react";
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

/** Primary nav order: Home → About → Services → Portfolio → Contact */
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const servicesLinks = [
  {
    name: "Product Branding",
    path: "/services/product-branding",
    description: "Identity, packaging & brand systems",
    icon: Package,
  },
  {
    name: "Celebrity Management",
    path: "/services/celebrity-management",
    description: "Talent partnerships & influence",
    icon: Users2,
  },
  {
    name: "Digital Marketing",
    path: "/services/digital-marketing",
    description: "Campaigns that convert",
    icon: Globe,
  },
  {
    name: "Film & Ad Production",
    path: "/services/film-and-ad-production",
    description: "From concept to screen",
    icon: Film,
  },
  {
    name: "Film Promotion",
    path: "/services/film-promotion",
    description: "Teasers to trending",
    icon: TrendingUp,
  },
  {
    name: "Event Management",
    path: "/services/event-management",
    description: "Experiences that stick",
    icon: Calendar,
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
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
        {/* Logo */}
        <Link to="/" className="group flex shrink-0 items-center gap-3">
          <span className="inline-flex items-center justify-center rounded-2xl bg-white px-3 py-2 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-transform duration-300 group-hover:scale-[1.03]">
            <img
              src={logo}
              alt="Cineglare"
              className="h-10 w-auto max-w-[200px] object-contain object-center md:h-12 md:max-w-[240px]"
            />
          </span>
        </Link>

        {/* Desktop nav — Home · About · Services · Portfolio · Contact */}
        <div className="hidden items-center gap-1 lg:flex xl:gap-2">
          <Link to="/" className={cn(linkClass(isActive("/")), "px-3 py-2")}>
            Home
          </Link>
          <Link
            to="/aboutus"
            className={cn(linkClass(isActive("/aboutus")), "px-3 py-2")}
          >
            About Us
          </Link>

          {/* Services dropdown */}
          <DropdownMenu open={servicesOpen} onOpenChange={setServicesOpen}>
            <DropdownMenuTrigger
              className={cn(
                linkClass(servicesActive),
                "inline-flex items-center gap-1.5 px-3 py-2 outline-none data-[state=open]:text-white",
              )}
            >
              Services
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 opacity-70 transition-transform duration-300",
                  servicesOpen && "rotate-180",
                )}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="center"
              sideOffset={12}
              className="w-[min(92vw,22rem)] rounded-2xl border border-white/10 bg-[#0c0c0c] p-2 shadow-[0_24px_60px_rgba(0,0,0,.65)]"
            >
              <div className="mb-1 px-3 pb-2 pt-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#800000]">
                  What we do
                </p>
              </div>
              <div className="grid gap-0.5">
                {servicesLinks.map((service) => {
                  const Icon = service.icon;
                  const active = isActive(service.path);
                  return (
                    <DropdownMenuItem
                      key={service.name}
                      asChild
                      className={cn(
                        "cursor-pointer rounded-xl p-0 focus:bg-transparent",
                      )}
                    >
                      <Link
                        to={service.path}
                        className={cn(
                          "flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors duration-200",
                          active
                            ? "bg-[#800000] text-white"
                            : "text-white/80 hover:bg-[#800000] hover:text-white",
                        )}
                      >
                        <span
                          className={cn(
                            "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors",
                            active
                              ? "bg-white/15 text-white"
                              : "bg-white/5 text-[#800000] group-hover:bg-white/15 group-hover:text-white",
                          )}
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold leading-tight">
                            {service.name}
                          </span>
                          <span
                            className={cn(
                              "mt-0.5 block text-xs leading-snug",
                              active ? "text-white/75" : "text-white/45",
                            )}
                          >
                            {service.description}
                          </span>
                        </span>
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </div>
              <div className="mt-2 border-t border-white/10 pt-2">
                <DropdownMenuItem asChild className="cursor-pointer rounded-xl p-0 focus:bg-transparent">
                  <Link
                    to="/services"
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    View all services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/portfolio"
            className={cn(linkClass(isActive("/portfolio")), "px-3 py-2")}
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className={cn(linkClass(isActive("/contact")), "px-3 py-2")}
          >
            Contact
          </Link>
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden h-11 rounded-full bg-[#800000] px-6 text-sm font-semibold tracking-wide text-white shadow-[0_10px_28px_rgba(128,0,0,.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#970000] hover:shadow-[0_14px_36px_rgba(128,0,0,.45)] sm:inline-flex md:h-12 md:px-7 md:text-[15px]"
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

      {/* Mobile drawer */}
      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-[var(--cine-base)]/98 backdrop-blur-xl transition-all duration-300 lg:hidden",
          isMenuOpen
            ? "max-h-[min(85vh,640px)] opacity-100"
            : "max-h-0 opacity-0 border-t-0",
        )}
      >
        <div className="max-h-[min(85vh,640px)] space-y-1 overflow-y-auto px-5 py-5">
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

          {/* Mobile services accordion-style block */}
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              className={cn(
                "flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors",
                servicesActive
                  ? "bg-[#800000]/15 text-white"
                  : "text-white/75 hover:bg-white/5 hover:text-white",
              )}
            >
              Services
              <ChevronDown
                className={cn(
                  "h-4 w-4 opacity-70 transition-transform duration-300",
                  servicesOpen && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300",
                servicesOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
              )}
            >
              <div className="space-y-0.5 pb-2 pl-2 pr-1 pt-1">
                {servicesLinks.map((service) => {
                  const Icon = service.icon;
                  const active = isActive(service.path);
                  return (
                    <Link
                      key={service.name}
                      to={service.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
                        active
                          ? "bg-[#800000] text-white"
                          : "text-white/70 hover:bg-[#800000]/20 hover:text-white",
                      )}
                    >
                      <Icon className="h-4 w-4 shrink-0 opacity-80" />
                      <span className="font-medium">{service.name}</span>
                    </Link>
                  );
                })}
                <Link
                  to="/services"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-[#800000] hover:bg-white/5"
                >
                  View all services
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
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
