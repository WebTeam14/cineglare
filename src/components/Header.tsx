import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
// import logo from "@/assets/logo.jpeg";
import { Link } from "@tanstack/react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { asset } from "@/assets/placeholder";

const logo = asset("logoMain.png");

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    // { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "#contact" },
  ];

  const servicesLinks = [
    { name: "Product Branding", path: "/services/product-branding" },
    { name: "Celebrity Management", path: "/services/celebrity-management" },
    { name: "Digital Marketing", path: "/services/digital-marketing" },
    { name: "Film and AD Production", path: "/services/film-and-ad-production" },
    { name: "Film Promotion", path: "/services/film-promotion" },
    { name: "Event Management", path: "/services/event-management" }
    
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="pr-20 pl-20 pt-5 pb-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Cineglare Logo"
                className="h-10 w-auto md:h-12 object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-14">
            {/* {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))} */}

            {navLinks.map((link) =>
              link.path.startsWith("#") ? (
                // ✅ Still use <a> for same-page anchors
                <a
                  key={link.name}
                  href={link.path}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                // ✅ Use <Link> for React Router navigation
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
                Services <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border z-50">
                {servicesLinks.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link to={service.path} className="cursor-pointer">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="default" size="sm">
              Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="space-y-2">
              <p className="text-foreground font-semibold">Services</p>
              {servicesLinks.map((service) => (
                <Link
                  key={service.name}
                  to={service.path}
                  className="block pl-4 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <Button variant="default" size="sm" className="w-full">
              Free Quote
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
