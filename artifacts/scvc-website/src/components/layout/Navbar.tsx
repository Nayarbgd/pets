import { Link, useLocation } from "wouter";
import { Menu, X, Phone, MapPin } from "lucide-react";
import SCVCLogo from "@/components/shared/SCVCLogo";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"}`}>
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <SCVCLogo className="h-8 w-auto" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-tight text-primary">Safe Care</span>
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Veterinary Clinic</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      location === link.href ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/book">
              <Button className="bg-primary text-white hover:bg-primary/90 font-medium px-6 shadow-sm">
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t animate-in slide-in-from-top-2">
            <div className="flex flex-col px-4 py-6 gap-4">
              {links.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-medium p-2 rounded-md ${
                    location === link.href ? "bg-primary/5 text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t">
                <Link href="/book" className="block w-full">
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
