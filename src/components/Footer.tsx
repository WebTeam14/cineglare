import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";

import logo from "@/assets/logo/Cineglare-light.svg";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="pr-20 pl-20 pt-10 pb-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center">
                <img
                  src={logo}
                  alt="Cineglare Logo"
                  className="h-10 w-auto md:h-12 object-contain"
                />
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Where brand shines brighter and entertainment goes bigger. Follow us - your spotlight experience starts here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) =>
                link.path.startsWith("#") ? (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {">"} &nbsp; {link.name}
                    </a>
                  </li>
                ) : (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {">"} &nbsp; {link.name}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Our Agency</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Product Branding</li>
              <li>Celebrity Management</li>
              <li>Digital Marketing</li>
              <li>Film Production</li>
              <li>Event Management</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to receive inspiration, ideas, and news in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Your Email" className="bg-background" />
              <Button variant="default" size="sm" className="sm:w-auto w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-4 text-center">
          <div className="flex flex-row justify-between items-start">
            <div className="basis-1/3">
              <p className="text-muted-foreground text-sm">
                © 2025 CineGlare — Crafting Vision into Reality. All rights reserved.
              </p>
            </div>
            <div className="basis-2/3 flex justify-end">
              <p className="text-muted-foreground max-w-3xl text-sm">
                Terms & Conditions | Privacy Policy | Help
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
