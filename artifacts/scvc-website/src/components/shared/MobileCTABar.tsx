import { Phone, MessageCircle, Calendar } from "lucide-react";
import { Link } from "wouter";

export default function MobileCTABar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40 flex items-center">
      <a 
        href="tel:+97148343287"
        className="flex-1 py-4 flex flex-col items-center justify-center gap-1 text-primary hover:bg-primary/5 transition-colors"
      >
        <Phone className="w-5 h-5" />
        <span className="text-[10px] font-medium">Call Us</span>
      </a>
      <div className="w-px h-10 bg-border"></div>
      <a 
        href="https://wa.me/97148343287"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-4 flex flex-col items-center justify-center gap-1 text-[#25D366] hover:bg-[#25D366]/5 transition-colors"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-[10px] font-medium">WhatsApp</span>
      </a>
      <div className="w-px h-10 bg-border"></div>
      <Link 
        href="/book"
        className="flex-1 py-4 flex flex-col items-center justify-center gap-1 text-accent hover:bg-accent/5 transition-colors"
      >
        <Calendar className="w-5 h-5" />
        <span className="text-[10px] font-medium">Book</span>
      </Link>
    </div>
  );
}
