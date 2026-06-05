import { Link } from "wouter";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  Stethoscope, Scissors, Syringe, Smile, Car, Home as HomeIcon,
  Activity, Leaf, Cat, Dog, CheckCircle, ArrowRight, Phone, Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const services = [
  {
    icon: Stethoscope,
    title: "Veterinary Consultation",
    tagline: "Expert diagnosis when it matters most",
    desc: "Our experienced veterinarians provide thorough health assessments and develop personalised treatment plans tailored to your pet's unique needs.",
    benefits: ["Comprehensive physical examination", "Advanced diagnostic testing", "Tailored treatment planning", "Follow-up care coordination"],
    process: ["Schedule appointment", "Initial health assessment", "Diagnosis & treatment plan", "Ongoing care & follow-up"],
    color: "from-blue-600 to-blue-400",
    badge: "bg-blue-50 text-blue-600",
    popular: true,
  },
  {
    icon: Scissors,
    title: "Pet Grooming",
    tagline: "Salon-quality care in a stress-free environment",
    desc: "Our certified groomers use premium products and techniques to keep your pet clean, comfortable, and looking their absolute best.",
    benefits: ["Full bathing with premium shampoos", "Breed-specific haircuts & styling", "Nail trimming & filing", "Ear cleaning & checking", "Teeth brushing option"],
    process: ["Book grooming session", "Pre-groom health check", "Full grooming treatment", "Post-groom review & pickup"],
    color: "from-purple-600 to-purple-400",
    badge: "bg-purple-50 text-purple-600",
    popular: false,
  },
  {
    icon: Syringe,
    title: "Vaccinations",
    tagline: "Protect your pet at every stage of life",
    desc: "We offer a complete range of core and lifestyle vaccinations, keeping your pet protected and compliant with Dubai's animal health regulations.",
    benefits: ["Core vaccine packages", "Lifestyle-based vaccination plans", "UAE travel health certificates", "Detailed vaccination records", "Puppy & kitten schedules"],
    process: ["Health screening", "Vaccine selection", "Administration", "Certificate & reminder setup"],
    color: "from-emerald-600 to-teal-400",
    badge: "bg-emerald-50 text-emerald-600",
    popular: false,
  },
  {
    icon: Smile,
    title: "Dental Care",
    tagline: "A healthy mouth, a healthy pet",
    desc: "Dental disease affects 80% of pets over three years old. Our dental services prevent, diagnose, and treat oral health issues to keep your pet comfortable.",
    benefits: ["Professional dental cleaning", "Digital dental X-rays", "Oral health assessment", "Tooth extraction if needed", "Home dental care guidance"],
    process: ["Oral examination", "Pre-anaesthetic bloodwork", "Professional dental cleaning", "Recovery & aftercare plan"],
    color: "from-yellow-500 to-amber-400",
    badge: "bg-yellow-50 text-yellow-700",
    popular: false,
  },
  {
    icon: Car,
    title: "Pet Taxi Service",
    tagline: "Stress-free transport across Dubai",
    desc: "Our professional pet taxi service ensures your pet arrives at their appointment calm and comfortable, no matter where you are in Dubai.",
    benefits: ["Air-conditioned vehicles", "Secure, padded carriers", "Experienced pet handlers", "Real-time updates", "All Dubai areas covered"],
    process: ["Book taxi with appointment", "Confirm pickup address", "Your pet is collected safely", "Delivered back home after"],
    color: "from-orange-500 to-amber-500",
    badge: "bg-orange-50 text-orange-600",
    popular: false,
  },
  {
    icon: HomeIcon,
    title: "Home Visits",
    tagline: "Professional care in the comfort of your home",
    desc: "For pets who are anxious, elderly, or simply difficult to transport, our vets bring their full expertise directly to your door.",
    benefits: ["Full clinical consultation", "Vaccinations & preventive care", "Post-surgery check-ups", "Senior pet wellness visits", "Reduced pet stress"],
    process: ["Book home visit", "Vet arrives at your home", "Full consultation & treatment", "Follow-up plan provided"],
    color: "from-primary to-accent",
    badge: "bg-primary/10 text-primary",
    popular: false,
  },
  {
    icon: Activity,
    title: "Pet Health Checkups",
    tagline: "Prevention is the best medicine",
    desc: "Regular wellness examinations allow our vets to detect health issues early, ensuring your pet lives a longer, healthier life.",
    benefits: ["Full body examination", "Blood & urine screening", "Weight & nutrition assessment", "Parasite screening", "Health score report"],
    process: ["Annual or biannual scheduling", "Comprehensive screening", "Results review with vet", "Personalised wellness plan"],
    color: "from-rose-600 to-pink-500",
    badge: "bg-rose-50 text-rose-600",
    popular: false,
  },
  {
    icon: Leaf,
    title: "Preventive Care",
    tagline: "Keeping your pet healthy for the long term",
    desc: "Our preventive care programmes are designed to keep your pet protected from common illnesses, parasites, and age-related conditions.",
    benefits: ["Flea & tick prevention", "Heartworm prevention", "Nutritional counselling", "Weight management plans", "Microchipping services"],
    process: ["Lifestyle assessment", "Risk-based prevention plan", "Product prescriptions", "Scheduled follow-ups"],
    color: "from-teal-600 to-cyan-500",
    badge: "bg-teal-50 text-teal-600",
    popular: false,
  },
  {
    icon: Cat,
    title: "Cat Care",
    tagline: "Specialised care for feline companions",
    desc: "We understand that cats have unique needs. Our feline-friendly approach minimises stress and maximises the quality of care for your cat.",
    benefits: ["Fear-free examination techniques", "Feline nutrition guidance", "Indoor cat wellness plans", "Urinary health monitoring", "Dental care for cats"],
    process: ["Feline-specific intake form", "Calm low-stress exam", "Tailored treatment", "Cat-friendly follow-up"],
    color: "from-violet-600 to-purple-400",
    badge: "bg-violet-50 text-violet-600",
    popular: false,
  },
  {
    icon: Dog,
    title: "Dog Care",
    tagline: "Comprehensive canine health and wellness",
    desc: "From energetic puppies to senior dogs, our full-spectrum canine care services keep dogs of all breeds and ages in peak health.",
    benefits: ["Breed-specific health monitoring", "Hip & joint assessments", "Skin & coat consultations", "Puppy development tracking", "Senior dog wellness care"],
    process: ["Breed & age assessment", "Targeted examination", "Personalised treatment plan", "Lifestyle & diet recommendations"],
    color: "from-blue-500 to-indigo-500",
    badge: "bg-blue-50 text-blue-600",
    popular: false,
  },
];

export default function Services() {
  useEffect(() => {
    document.title = "Our Services | Safe Care Veterinary Clinic Dubai";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[hsl(218,53%,14%)] via-[hsl(218,53%,20%)] to-[hsl(262,47%,25%)] py-24 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <Badge className="mb-6 bg-white/10 border-white/20 text-white">Our Services</Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Comprehensive Pet Care<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-violet-300">
                Under One Roof
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/75 max-w-2xl mx-auto">
              From routine consultations to specialist treatments, grooming to home visits — everything your pet needs, delivered with expertise and care in JLT, Dubai.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-300 h-full" data-testid={`card-service-detail-${i}`}>
                  <div className={`bg-gradient-to-r ${s.color} p-8 text-white relative overflow-hidden`}>
                    {s.popular && (
                      <Badge className="absolute top-4 right-4 bg-white text-primary font-semibold">Most Popular</Badge>
                    )}
                    <s.icon className="w-12 h-12 mb-4 opacity-90" />
                    <h2 className="text-2xl font-bold mb-1">{s.title}</h2>
                    <p className="text-white/80 text-sm">{s.tagline}</p>
                  </div>
                  <CardContent className="p-8">
                    <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wide">Benefits</h4>
                        <ul className="space-y-2">
                          {s.benefits.map((b, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wide">Process</h4>
                        <ol className="space-y-2">
                          {s.process.map((p, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center shrink-0 font-bold mt-0.5">{j+1}</span>
                              <span className="text-sm text-muted-foreground">{p}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>

                    <Link href="/book">
                      <Button className="bg-primary hover:bg-primary/90 text-white w-full" data-testid={`button-service-book-${i}`}>
                        Book This Service <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-4xl font-serif font-bold mb-4">
              Ready to Book?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Contact us today or book directly online. Our team is ready to help.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-10 h-14 font-semibold" data-testid="button-services-cta-book">
                  <Calendar className="w-5 h-5 mr-2" /> Book Appointment
                </Button>
              </Link>
              <a href="tel:+97148343287">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-14 px-8" data-testid="button-services-cta-call">
                  <Phone className="w-5 h-5 mr-2" /> Call Us Now
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
