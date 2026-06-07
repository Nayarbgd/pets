import { Link } from "wouter";
import { useState } from "react";
import {
  Phone, MessageCircle, Calendar, Star, MapPin, Shield, Heart,
  Stethoscope, Scissors, Syringe, Smile, Car, Home as HomeIcon,
  Activity, Clock, Award, Users, CheckCircle, ChevronDown, ChevronRight,
  Cat, Dog, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const services = [
  { icon: Stethoscope, title: "Consultation", color: "bg-blue-50 text-blue-600" },
  { icon: Scissors, title: "Grooming", color: "bg-purple-50 text-purple-600" },
  { icon: Syringe, title: "Vaccinations", color: "bg-emerald-50 text-emerald-600" },
  { icon: Smile, title: "Dental Care", color: "bg-yellow-50 text-yellow-600" },
  { icon: Car, title: "Pet Taxi", color: "bg-orange-50 text-orange-600" },
  { icon: HomeIcon, title: "Home Visits", color: "bg-rose-50 text-rose-600" },
];

const whyUs = [
  { icon: Heart, title: "Compassionate Care", desc: "Every pet treated with warmth and attention." },
  { icon: Award, title: "Expert Vets", desc: "Years of specialised veterinary expertise." },
  { icon: Activity, title: "Modern Equipment", desc: "State-of-the-art diagnostics and treatments." },
  { icon: Clock, title: "Open 7 Days", desc: "Flexible hours for your convenience." },
  { icon: HomeIcon, title: "Home Visits", desc: "We come directly to your door." },
  { icon: Car, title: "Pet Taxi", desc: "Door-to-door pickup and drop-off." },
];

const testimonials = [
  { name: "Sarah Al Mansouri", location: "JLT, Dubai", pet: "Golden Retriever", text: "Exceptional care from the team at SCVC. Dr. Ahmed was so patient with my anxious golden retriever. The clinic is spotless and the staff truly love animals." },
  { name: "Marcus Chen", location: "JBR, Dubai", pet: "Persian Cat", text: "Used their pet taxi service for the first time and I'm blown away. My cat arrived calm and well-cared for. The vet was incredibly thorough with the health check." },
  { name: "Fatima Al Hashemi", location: "Marina, Dubai", pet: "French Bulldog", text: "SCVC saved my dog's life. The emergency care was prompt, the doctors were knowledgeable, and they followed up the next day. Truly outstanding service." },
];

const faqs = [
  { q: "What vaccinations does my pet need?", a: "Core vaccinations for dogs include Distemper, Parvovirus, Hepatitis, and Rabies. For cats, we recommend FVRCP and Rabies. Our vets will create a personalised schedule for your pet." },
  { q: "How often should I bring my pet for a check-up?", a: "Annual wellness exams for healthy adults, twice-yearly for senior pets (7+ years). Puppies and kittens need more frequent visits in their first year." },
  { q: "Do you offer home visits across all of Dubai?", a: "Yes — JLT, Dubai Marina, JBR, Downtown, DIFC, and surrounding areas. Contact us to confirm your location." },
  { q: "How does the pet taxi service work?", a: "Book an appointment, give us your address, and we arrive at the scheduled time. Your pet travels in a secure, air-conditioned, comfortable carrier." },
  { q: "What should I bring to the first appointment?", a: "Previous vaccination records, medical history, current medications, and any concerns you have. For puppies/kittens, bring breeder documentation if available." },
];

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border/60 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left bg-white active:bg-muted/30"
      >
        <span className="font-semibold text-foreground text-sm leading-snug">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 pt-1 bg-white text-sm text-muted-foreground leading-relaxed border-t border-border/40">
          {a}
        </div>
      )}
    </div>
  );
}

export default function HomeMobile() {
  return (
    <div className="bg-background">

      {/* ── HERO ── */}
      <section
        className="relative min-h-[90vh] flex flex-col justify-center px-5 pt-10 pb-8"
        style={{ background: "linear-gradient(160deg, hsl(222,60%,9%) 0%, hsl(248,50%,17%) 60%, hsl(265,42%,14%) 100%)" }}
      >
        {/* Static soft orbs — no animation, no blur filter on GPU */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div style={{
            position: "absolute", top: "5%", left: "-10%",
            width: "70%", height: "50%",
            background: "radial-gradient(ellipse, rgba(99,102,241,0.25) 0%, transparent 70%)",
          }} />
          <div style={{
            position: "absolute", top: "0", right: "-15%",
            width: "65%", height: "55%",
            background: "radial-gradient(ellipse, rgba(124,58,237,0.20) 0%, transparent 70%)",
          }} />
        </div>

        <div className="relative z-10">
          {/* Location badge */}
          <a
            href="https://maps.app.goo.gl/yXEY4UtJjbykt4ty9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white text-xs font-medium mb-6"
          >
            <MapPin className="w-3.5 h-3.5" />
            Jumeirah Lakes Towers, Dubai
          </a>

          {/* Headline */}
          <h1 className="text-[2.6rem] font-serif font-bold text-white leading-[1.1] mb-4">
            Premium Care<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-violet-300">
              Your Pet Deserves
            </span>
          </h1>

          <p className="text-white/75 text-base leading-relaxed mb-8 max-w-sm">
            Dubai's trusted vet clinic — consultations, grooming, vaccinations, dental care, home visits & pet taxi in JLT.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col gap-3 mb-8">
            <Link href="/book">
              <Button size="lg" className="w-full bg-white text-primary font-semibold h-14 text-base shadow-lg" data-testid="button-hero-book">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </Link>
            <div className="grid grid-cols-2 gap-3">
              <a href="tel:+97148343287" className="block">
                <Button size="lg" variant="outline" className="w-full border-white/30 text-white h-12 text-sm" data-testid="button-hero-call">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
              <a href="https://wa.me/97148343287" target="_blank" rel="noopener noreferrer" className="block">
                <Button size="lg" className="w-full bg-[#25D366] text-white h-12 text-sm" data-testid="button-hero-whatsapp">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Rating strip */}
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-4 py-3">
            <StarRow />
            <div>
              <div className="text-white font-bold text-sm leading-tight">4.7 / 5</div>
              <div className="text-white/70 text-xs">113+ verified reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-white border-b border-border py-5 px-5">
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: Star, value: "4.7★", label: "Google Rating", color: "text-yellow-500" },
            { icon: Users, value: "113+", label: "Verified Reviews", color: "text-primary" },
            { icon: Award, value: "Expert", label: "Vet Team", color: "text-accent" },
            { icon: Shield, value: "Trusted", label: "Vet Care", color: "text-emerald-600" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-muted/40 rounded-xl p-3">
              <div className={`w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 ${item.color}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <div className={`text-base font-bold leading-tight ${item.color}`}>{item.value}</div>
                <div className="text-xs text-muted-foreground">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-10 px-5 bg-muted/30">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-3 text-primary border-primary/20 bg-primary/5">Our Services</Badge>
          <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Everything Your Pet Needs</h2>
          <p className="text-sm text-muted-foreground">All under one roof in JLT, Dubai.</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {services.map((s, i) => (
            <Link key={i} href="/services">
              <div className="bg-white rounded-2xl p-4 border border-border/50 active:bg-muted/30 transition-colors">
                <div className={`w-11 h-11 rounded-xl ${s.color} flex items-center justify-center mb-3`}>
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-foreground text-sm leading-tight mb-1">{s.title}</h3>
                <span className="text-xs text-primary font-medium inline-flex items-center gap-0.5">
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6">
          <Link href="/services">
            <Button variant="outline" className="w-full border-primary text-primary" data-testid="button-view-all-services">
              View All Services <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* ── WHY SCVC ── */}
      <section className="py-10 px-5 bg-white">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-3 text-accent border-accent/20 bg-accent/5">Why SCVC</Badge>
          <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Dubai's Most Trusted Vet</h2>
        </div>
        <div className="space-y-4">
          {whyUs.map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm mb-0.5">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GROOMING ── */}
      <section className="py-10 px-5 bg-gradient-to-br from-purple-50 to-blue-50">
        <Badge variant="outline" className="mb-3 text-purple-600 border-purple-200 bg-purple-50">Grooming</Badge>
        <h2 className="text-2xl font-serif font-bold text-foreground mb-3">
          Salon-Quality<br />Pet Grooming
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">
          Our professional groomers treat every pet like royalty — luxurious baths to precision cuts.
        </p>
        <div className="grid grid-cols-2 gap-2 mb-5">
          {["Luxury Bathing", "Breed-Specific Cuts", "Nail Trimming", "Ear Cleaning"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-purple-600 shrink-0" />
              <span className="text-sm font-medium text-foreground">{item}</span>
            </div>
          ))}
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg mb-5">
          <img
            src="/grooming-dog.webp"
            alt="Professional pet grooming at Safe Care Veterinary Clinic"
            className="w-full object-cover"
            style={{ maxHeight: "220px", objectPosition: "center top" }}
            loading="lazy"
            decoding="async"
          />
        </div>
        <Link href="/services">
          <Button className="w-full bg-accent text-white" data-testid="button-grooming-cta">
            <Scissors className="w-4 h-4 mr-2" /> Book Grooming
          </Button>
        </Link>
      </section>

      {/* ── PET TAXI + HOME VISITS ── */}
      <section className="py-10 px-5 bg-white space-y-4">
        {/* Pet Taxi */}
        <div className="rounded-2xl overflow-hidden border border-border/50">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-5 text-white">
            <Car className="w-8 h-8 mb-2 opacity-90" />
            <h3 className="text-lg font-bold mb-1">Pet Taxi Service</h3>
            <p className="text-white/80 text-sm">Safe, comfortable transport across Dubai.</p>
          </div>
          <div className="bg-white p-5">
            <ul className="space-y-2 mb-4">
              {["Air-conditioned vehicles", "Secure pet carriers", "Experienced handlers", "All Dubai areas covered"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/book">
              <Button className="w-full bg-orange-500 text-white" data-testid="button-taxi-book">
                Book Pet Taxi
              </Button>
            </Link>
          </div>
        </div>

        {/* Home Visits */}
        <div className="rounded-2xl overflow-hidden border border-border/50">
          <div className="bg-gradient-to-r from-primary to-accent p-5 text-white">
            <HomeIcon className="w-8 h-8 mb-2 opacity-90" />
            <h3 className="text-lg font-bold mb-1">Home Visit Service</h3>
            <p className="text-white/80 text-sm">Professional vet care delivered to your door.</p>
          </div>
          <div className="bg-white p-5">
            <ul className="space-y-2 mb-4">
              {["Full health consultations", "Vaccinations at home", "Anxious pet friendly", "JLT & Marina coverage"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/book">
              <Button className="w-full bg-primary text-white" data-testid="button-homevisit-book">
                Book Home Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-10 px-5 bg-muted/30">
        <div className="text-center mb-6">
          <Badge variant="outline" className="mb-3 text-yellow-600 border-yellow-200 bg-yellow-50">Reviews</Badge>
          <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Trusted by Dubai Pet Owners</h2>
          <div className="flex items-center justify-center gap-2">
            <StarRow count={5} />
            <span className="font-bold text-foreground">4.7</span>
            <span className="text-muted-foreground text-sm">· 113+ reviews</span>
          </div>
        </div>

        <div className="space-y-4">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-border/50" data-testid={`card-review-${i}`}>
              <StarRow />
              <p className="text-muted-foreground text-sm leading-relaxed mt-3 mb-4">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                  {t.name.split(" ").map((n: string) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.location} · {t.pet}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Link href="/reviews">
            <Button variant="outline" className="w-full border-primary text-primary" data-testid="button-view-reviews">
              Read All Reviews <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-10 px-5 bg-white">
        <div className="text-center mb-6">
          <Badge variant="outline" className="mb-3 text-primary border-primary/20 bg-primary/5">FAQ</Badge>
          <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Common Questions</h2>
          <p className="text-sm text-muted-foreground">Everything about caring for your pet in Dubai.</p>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-12 px-5 bg-gradient-to-br from-primary to-accent text-white text-center">
        <div className="flex justify-center gap-2 mb-4">
          <Cat className="w-7 h-7 opacity-80" />
          <Dog className="w-7 h-7 opacity-80" />
        </div>
        <h2 className="text-2xl font-serif font-bold mb-3 leading-tight">
          Your Pet's Health<br />Can't Wait
        </h2>
        <p className="text-white/80 text-sm leading-relaxed mb-7 max-w-xs mx-auto">
          Book today and experience Dubai's most trusted veterinary care. Same-day appointments available.
        </p>
        <div className="flex flex-col gap-3">
          <Link href="/book">
            <Button size="lg" className="w-full bg-white text-primary font-semibold h-14 text-base shadow-xl" data-testid="button-cta-book">
              <Calendar className="w-5 h-5 mr-2" /> Book Appointment
            </Button>
          </Link>
          <a href="tel:+97148343287">
            <Button size="lg" variant="outline" className="w-full border-white/40 text-white h-12 text-base" data-testid="button-cta-call">
              <Phone className="w-5 h-5 mr-2" /> +971 4 834 3287
            </Button>
          </a>
        </div>
      </section>

    </div>
  );
}
