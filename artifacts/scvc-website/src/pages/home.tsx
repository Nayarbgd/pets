import { Link } from "wouter";
import { motion } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";
import {
  Phone, MessageCircle, Calendar, Star, MapPin, Shield, Heart,
  Stethoscope, Scissors, Syringe, Smile, Car, Home as HomeIcon,
  Activity, Leaf, Cat, Dog, ChevronRight, CheckCircle, Clock,
  Award, Users, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const services = [
  { icon: Stethoscope, title: "Veterinary Consultation", desc: "Expert diagnosis and treatment plans from our experienced veterinary team.", color: "bg-blue-50 text-blue-600" },
  { icon: Scissors, title: "Pet Grooming", desc: "Professional grooming services including baths, haircuts, and nail trims.", color: "bg-purple-50 text-purple-600" },
  { icon: Syringe, title: "Vaccinations", desc: "Complete vaccination programs to protect your pet's health and longevity.", color: "bg-emerald-50 text-emerald-600" },
  { icon: Smile, title: "Dental Care", desc: "Professional dental cleanings and oral health care for a bright smile.", color: "bg-yellow-50 text-yellow-600" },
  { icon: Car, title: "Pet Taxi", desc: "Comfortable and safe transportation service for your pet in Dubai.", color: "bg-orange-50 text-orange-600" },
  { icon: HomeIcon, title: "Home Visits", desc: "Convenient veterinary care brought directly to your home in JLT.", color: "bg-rose-50 text-rose-600" },
];

const whyUs = [
  { icon: Heart, title: "Compassionate Care", desc: "We treat every pet with the warmth and attention they deserve." },
  { icon: Award, title: "Experienced Team", desc: "Our vets bring years of specialised expertise to every consultation." },
  { icon: Activity, title: "Modern Equipment", desc: "State-of-the-art diagnostics and treatment technologies." },
  { icon: Clock, title: "Flexible Hours", desc: "Open 7 days a week for your convenience." },
  { icon: HomeIcon, title: "Home Visits", desc: "Skip the travel — we come to you." },
  { icon: Car, title: "Pet Taxi", desc: "Door-to-door pickup and drop-off for every appointment." },
];

const testimonials = [
  { name: "Sarah Al Mansouri", location: "JLT, Dubai", rating: 5, text: "Exceptional care from the team at SCVC. Dr. Ahmed was so patient with my anxious golden retriever. The clinic is spotless and the staff truly love animals.", pet: "Golden Retriever" },
  { name: "Marcus Chen", location: "JBR, Dubai", rating: 5, text: "Used their pet taxi service for the first time and I'm blown away. My cat arrived calm and well-cared for. The vet was incredibly thorough with the health check.", pet: "Persian Cat" },
  { name: "Fatima Al Hashemi", location: "Marina, Dubai", rating: 5, text: "SCVC saved my dog's life. The emergency care was prompt, the doctors were knowledgeable, and they followed up the next day. Truly outstanding service.", pet: "French Bulldog" },
  { name: "James O'Brien", location: "Downtown Dubai", rating: 5, text: "The home visit service is a game changer for my elderly cat who hates travel. The vet spent 45 minutes with us and was incredibly thorough.", pet: "Siamese Cat" },
  { name: "Nadia Petrov", location: "DIFC, Dubai", rating: 5, text: "Grooming service is top tier. My Poodle comes back looking like she just walked out of a luxury salon. Always friendly, always professional.", pet: "Miniature Poodle" },
  { name: "Khalid Al Ameri", location: "JLT, Dubai", rating: 5, text: "Best vet in Dubai, hands down. They remembered my dog's name on the second visit and asked about his previous treatment. That personal touch means everything.", pet: "Labrador" },
];

const faqs = [
  { q: "What vaccinations does my pet need?", a: "Core vaccinations for dogs include Distemper, Parvovirus, Hepatitis, and Rabies. For cats, we recommend FVRCP and Rabies. Our vets will create a personalised vaccination schedule based on your pet's age, lifestyle, and health history." },
  { q: "How often should I bring my pet for a check-up?", a: "We recommend annual wellness exams for healthy adult pets, and twice-yearly for senior pets (7+ years). Puppies and kittens require more frequent visits during their first year for vaccinations and growth monitoring." },
  { q: "Do you offer home visit services in all areas of Dubai?", a: "We provide home visits throughout Dubai, with particular coverage in JLT, Dubai Marina, JBR, Downtown, DIFC, and surrounding areas. Contact us to confirm availability for your specific location." },
  { q: "How does your pet taxi service work?", a: "Our pet taxi service provides safe, air-conditioned transportation to and from our clinic. Simply book an appointment, provide your address, and our team will arrive at your scheduled time. Your pet travels in a secure, comfortable carrier." },
  { q: "What should I bring to my pet's first appointment?", a: "Please bring any previous vaccination records, medical history, current medications, and a list of any concerns you have. For puppies and kittens, bring documentation from the breeder if available." },
  { q: "Do you provide emergency services?", a: "We do our best to accommodate urgent cases during clinic hours. For after-hours emergencies, we can refer you to the nearest 24-hour emergency veterinary facility in Dubai." },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePos({ x, y });
  }, []);

  useEffect(() => {
    document.title = "Safe Care Veterinary Clinic Dubai | Premium Vet Care in JLT";
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
        className="relative min-h-[92vh] flex items-center overflow-hidden"
        style={{ background: "hsl(222, 58%, 9%)" }}
      >
        {/* ── MESH GRADIENT BASE ── */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, hsl(222,60%,9%) 0%, hsl(228,55%,13%) 35%, hsl(248,50%,17%) 65%, hsl(265,42%,14%) 100%)",
        }} />
        {/* Mesh node — upper-left indigo */}
        <div className="absolute" style={{
          top: "-15%", left: "-8%", width: "65%", height: "75%",
          background: "radial-gradient(ellipse at center, rgba(99,102,241,0.18) 0%, transparent 65%)",
          filter: "blur(50px)",
          transform: `translate(${mousePos.x * -5}px, ${mousePos.y * -3}px)`,
          transition: "transform 1.4s cubic-bezier(0.25,0.46,0.45,0.94)",
        }} />
        {/* Mesh node — upper-right rich purple */}
        <div className="absolute" style={{
          top: "-8%", right: "-12%", width: "60%", height: "72%",
          background: "radial-gradient(ellipse at center, rgba(124,58,237,0.16) 0%, transparent 65%)",
          filter: "blur(55px)",
          transform: `translate(${mousePos.x * -4}px, ${mousePos.y * -2}px)`,
          transition: "transform 1.4s cubic-bezier(0.25,0.46,0.45,0.94)",
        }} />
        {/* Mesh node — bottom-centre blue */}
        <div className="absolute" style={{
          bottom: "-15%", left: "25%", width: "55%", height: "60%",
          background: "radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 65%)",
          filter: "blur(60px)",
          transform: `translate(${mousePos.x * -3}px, ${mousePos.y * -2}px)`,
          transition: "transform 1.6s cubic-bezier(0.25,0.46,0.45,0.94)",
        }} />
        {/* Cinematic studio light — upper-right */}
        <div className="absolute" style={{
          top: "-25%", right: "8%", width: "78%", height: "92%",
          background: "radial-gradient(ellipse at 63% 28%, rgba(219,234,254,0.07) 0%, rgba(147,197,253,0.03) 38%, transparent 65%)",
          filter: "blur(20px)",
          transform: `translate(${mousePos.x * -3}px, ${mousePos.y * -2}px)`,
          transition: "transform 1.8s cubic-bezier(0.25,0.46,0.45,0.94)",
        }} />
        {/* Fine grid texture */}
        <div className="absolute inset-0" style={{
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')",
          opacity: 0.15,
        }} />

        {/* ── PET IMAGE — parallax outer wrapper ── */}
        <div
          className="absolute bottom-0 right-0 w-[58%] max-w-[860px] hidden lg:block pointer-events-none"
          style={{
            transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 8}px)`,
            transition: "transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94)",
            zIndex: 10,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
            className="relative"
          >
            {/* Blue glow — dog (right) */}
            <div style={{
              position: "absolute", right: "-8%", top: "5%",
              width: "65%", height: "70%",
              background: "radial-gradient(ellipse at center, rgba(99,179,237,0.30) 0%, rgba(66,153,225,0.15) 45%, transparent 75%)",
              filter: "blur(52px)", borderRadius: "50%",
              animation: "glowFloat1 16s ease-in-out infinite",
              zIndex: 1, willChange: "transform",
            }} />
            {/* Purple glow — cat (left) */}
            <div style={{
              position: "absolute", left: "-6%", top: "10%",
              width: "62%", height: "68%",
              background: "radial-gradient(ellipse at center, rgba(167,139,250,0.28) 0%, rgba(139,92,246,0.14) 45%, transparent 75%)",
              filter: "blur(56px)", borderRadius: "50%",
              animation: "glowFloat2 20s ease-in-out infinite",
              zIndex: 1, willChange: "transform",
            }} />
            {/* Ambient centre glow */}
            <div style={{
              position: "absolute", left: "10%", top: "20%",
              width: "80%", height: "55%",
              background: "radial-gradient(ellipse at center, rgba(129,140,248,0.13) 0%, transparent 70%)",
              filter: "blur(64px)", borderRadius: "50%", zIndex: 1,
            }} />
            {/* Ground depth — bottom fade into background */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0, height: "32%",
              background: "linear-gradient(to top, rgba(10,16,38,0.65) 0%, transparent 100%)",
              zIndex: 3,
            }} />

            {/* Pet image — gentle breathing */}
            <img
              src="/grooming-image.png"
              alt="Happy dog and cat cared for at Safe Care Veterinary Clinic Dubai"
              className="relative w-full"
              style={{
                position: "relative", zIndex: 2,
                animation: "petBreathe 9s ease-in-out infinite",
                filter: "drop-shadow(0 0 80px rgba(138,92,246,0.40)) drop-shadow(0 40px 60px rgba(0,0,0,0.45))",
                willChange: "transform",
              }}
            />

          </motion.div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT — text content */}
            <motion.div initial="hidden" animate="visible" variants={stagger} className="relative">
              <motion.div variants={fadeUp} className="relative z-10">
                <Badge className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-1.5 text-sm font-medium">
                  <MapPin className="w-3.5 h-3.5 mr-1.5" /> Jumeirah Lakes Towers, Dubai
                </Badge>
              </motion.div>
              <motion.h1 variants={fadeUp} className="relative z-10 text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
                Premium Care<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-violet-300">
                  Your Pet Deserves
                </span>
              </motion.h1>
              <motion.p variants={fadeUp} className="relative z-10 text-xl text-white/75 max-w-xl leading-relaxed mb-10">
                Dubai's trusted veterinary clinic offering world-class consultations, grooming, vaccinations, dental care, home visits, and pet taxi services in JLT.
              </motion.p>
              <motion.div variants={fadeUp} className="relative z-10 flex flex-wrap gap-4 mb-8 items-center">
                <Link href="/book">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 h-14 text-base shadow-xl shadow-black/20" data-testid="button-hero-book">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Appointment
                  </Button>
                </Link>
                <a href="tel:+97148343287">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-14 px-8 text-base backdrop-blur-sm" data-testid="button-hero-call">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </a>
                <a href="https://wa.me/97148343287" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white h-14 px-8 text-base" data-testid="button-hero-whatsapp">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Button>
                </a>

                {/* Rating badge — inline after WhatsApp */}
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3">
                  <div className="flex">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm leading-tight">4.7 / 5</div>
                    <div className="text-white/70 text-xs">113+ verified reviews</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT — spacer so grid layout still works on the left */}
            <div className="hidden lg:block" />
          </div>
        </div>

      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: Star, value: "4.7★", label: "Google Rating", color: "text-yellow-500" },
              { icon: Users, value: "113+", label: "Verified Reviews", color: "text-primary" },
              { icon: Award, value: "Expert", label: "Veterinary Team", color: "text-accent" },
              { icon: Shield, value: "Trusted", label: "Veterinary Care", color: "text-emerald-600" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-center gap-4 p-4 rounded-xl bg-muted/40">
                <div className={`w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className={`text-xl font-bold ${item.color}`}>{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">Our Services</Badge>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Everything Your Pet Needs
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From routine check-ups to specialist care, grooming to emergency consultations — all under one roof in the heart of JLT.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="group h-full border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden" data-testid={`card-service-${i}`}>
                    <CardContent className="p-8">
                      <div className={`w-14 h-14 rounded-2xl ${s.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <s.icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                      <Link href="/services" className="inline-flex items-center text-primary font-medium text-sm gap-1 group-hover:gap-2 transition-all">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="text-center mt-12">
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-10" data-testid="button-view-all-services">
                  View All Services <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-accent border-accent/20 bg-accent/5">Why SCVC</Badge>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Dubai's Most Trusted Vet Clinic
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We combine medical excellence with genuine compassion to give your pet the care they deserve.
              </p>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyUs.map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* GROOMING HIGHLIGHT */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <Badge variant="outline" className="mb-4 text-purple-600 border-purple-200 bg-purple-50">Grooming</Badge>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Salon-Quality<br />Pet Grooming
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our professional groomers treat every pet like royalty. From luxurious baths to precision cuts, we make your pet look and feel their best.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {["Luxury Bathing", "Breed-Specific Cuts", "Nail Trimming", "Ear Cleaning"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 shrink-0" />
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/services">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8" data-testid="button-grooming-cta">
                  <Scissors className="w-4 h-4 mr-2" /> Book Grooming
                </Button>
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/grooming-dog.jpg"
                  alt="Professional pet grooming at Safe Care Veterinary Clinic"
                  className="w-full h-full object-cover rounded-3xl"
                />
                {/* Floating label */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 flex items-center justify-between shadow-lg border border-white/60">
                  <div>
                    <div className="font-bold text-foreground text-sm">Professional Grooming</div>
                    <div className="text-muted-foreground text-xs">Salon-quality results every time</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                    <Scissors className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PET TAXI + HOME VISITS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pet Taxi */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Card className="h-full overflow-hidden border border-border/50 group hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-8 text-white">
                  <Car className="w-12 h-12 mb-4 opacity-90" />
                  <h3 className="text-2xl font-bold mb-2">Pet Taxi Service</h3>
                  <p className="text-white/80">Safe, comfortable transport for your pet across Dubai.</p>
                </div>
                <CardContent className="p-8">
                  <ul className="space-y-3 mb-8">
                    {["Air-conditioned vehicles", "Secure pet carriers", "Experienced handlers", "Pickup & drop-off", "All Dubai areas covered"].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/book">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" data-testid="button-taxi-book">
                      Book Pet Taxi
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Home Visits */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Card className="h-full overflow-hidden border border-border/50 group hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-primary to-accent p-8 text-white">
                  <HomeIcon className="w-12 h-12 mb-4 opacity-90" />
                  <h3 className="text-2xl font-bold mb-2">Home Visit Service</h3>
                  <p className="text-white/80">Professional veterinary care delivered to your door.</p>
                </div>
                <CardContent className="p-8">
                  <ul className="space-y-3 mb-8">
                    {["Full health consultations", "Vaccinations at home", "Wellness check-ups", "Anxious pet friendly", "JLT & Marina coverage"].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/book">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white" data-testid="button-homevisit-book">
                      Book Home Visit
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-yellow-600 border-yellow-200 bg-yellow-50">Reviews</Badge>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Trusted by Dubai Pet Owners
              </h2>
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className={`w-6 h-6 ${i <= 4 ? "fill-yellow-400 text-yellow-400" : "fill-yellow-400 text-yellow-400"}`} />
                  ))}
                </div>
                <span className="text-xl font-bold text-foreground">4.7</span>
                <span className="text-muted-foreground">from 113+ reviews</span>
              </div>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="h-full border border-border/50 hover:shadow-md transition-shadow" data-testid={`card-review-${i}`}>
                    <CardContent className="p-6">
                      <div className="flex mb-3">
                        {[1,2,3,4,5].map(s => (
                          <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6 text-sm">"{t.text}"</p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                          {t.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-foreground">{t.name}</div>
                          <div className="text-xs text-muted-foreground">{t.location} · {t.pet}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="text-center mt-10">
              <Link href="/reviews">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white px-8" data-testid="button-view-reviews">
                  Read All Reviews <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">FAQ</Badge>
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Common Questions</h2>
              <p className="text-muted-foreground text-lg">Everything you need to know about caring for your pet in Dubai.</p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border border-border/60 rounded-xl px-6 data-[state=open]:border-primary/30" data-testid={`accordion-faq-${i}`}>
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <div className="flex justify-center gap-2 mb-6">
                <Cat className="w-8 h-8 opacity-80" />
                <Dog className="w-8 h-8 opacity-80" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                Your Pet's Health<br />Can't Wait
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Book an appointment today and experience Dubai's most trusted veterinary care. Same-day appointments available.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/book">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-10 h-14 text-base shadow-xl" data-testid="button-cta-book">
                    <Calendar className="w-5 h-5 mr-2" /> Book Appointment
                  </Button>
                </Link>
                <a href="tel:+97148343287">
                  <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 h-14 px-8 text-base" data-testid="button-cta-call">
                    <Phone className="w-5 h-5 mr-2" /> +971 4 834 3287
                  </Button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
