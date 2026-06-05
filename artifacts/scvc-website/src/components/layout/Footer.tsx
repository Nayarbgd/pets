import { Link } from "wouter";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary font-serif font-bold text-xl">
                SC
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-tight text-white">Safe Care</span>
                <span className="text-xs text-primary-foreground/80 font-medium uppercase tracking-wider">Veterinary Clinic</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-xs">
              Dubai's premium veterinary care facility. Providing world-class medical, dental, and grooming services for your beloved pets in JLT.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">Our Services</Link></li>
              <li><Link href="/reviews" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">Client Reviews</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="/book" className="text-accent font-medium hover:text-white transition-colors text-sm">Book Appointment</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">Veterinary Consultation</Link></li>
              <li><Link href="/services" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">Pet Grooming</Link></li>
              <li><Link href="/services" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">Vaccinations</Link></li>
              <li><Link href="/services" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">Dental Care</Link></li>
              <li><Link href="/services" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">Pet Taxi Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Jumeirah Bay X2, Shop 7<br />
                  Jumeirah Lakes Towers (JLT)<br />
                  Dubai, UAE
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+97148343287" className="text-primary-foreground/80 hover:text-white text-sm">
                  +971 4 834 3287
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:info@scvc.ae" className="text-primary-foreground/80 hover:text-white text-sm">
                  info@scvc.ae
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Safe Care Veterinary Clinic. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
