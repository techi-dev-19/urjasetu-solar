import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import urjalogo from "@/assets/urjalogo.png"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Hybrid Solar Power System", href: "/hybrid"},
  { label: "PM Muft Bijli Yojna", href: "/muft-bijli"},
  // { label: "News", href: "/news" },
  // { label: "Our Presence", href: "/presence" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link to="/" className="h-full w-fit m-0">
          <img src={urjalogo} alt="" className="h-[90px] w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary hover:bg-muted",
                location.pathname === item.href
                  ? "text-primary bg-muted"
                  : "text-muted-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:+919369873546"
            className="flex items-center text-sm text-muted-foreground hover:text-primary"
          >
            <Phone className="mr-2 h-4 w-4" />
            +91-9369873546
          </a>
          <Button asChild className="gradient-solar border-0 hover:opacity-90">
            <Link to="/contact">Get Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-muted"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 text-sm font-medium rounded-md transition-colors",
                  location.pathname === item.href
                    ? "text-primary bg-muted"
                    : "text-muted-foreground hover:text-primary hover:bg-muted",
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t border-border mt-4">
              <a
                href="tel:+1234567890"
                className="flex items-center px-4 text-sm text-muted-foreground"
              >
                <Phone className="mr-2 h-4 w-4" />
                +91-9369873546
              </a>
              <Button asChild className="w-full gradient-solar border-0">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get Quote
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
