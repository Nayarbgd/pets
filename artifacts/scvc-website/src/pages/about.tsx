import { Link } from "wouter";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  Heart, Award, Shield, Users, MapPin, Phone, Calendar,
  CheckCircle, Star, Stethoscope, BookOpen, Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAnimationVariants, staggerSlow as stagger } from "@/hooks/use-animation-variants";

const team = [
  {
    name: "Dr. Ahmed Al Rashidi",
    role: "Chief Veterinarian",
    credentials: "BVM&S, RCVS Certified",
    speciality: "Internal Medicine & Surgery",
    bio: "With over 12 years of experience in small animal medicine, Dr. Ahmed leads SCVC's clinical team with a passion for evidence-based, compassionate care.",
    initials: "AA",
  },
  {
    name: "Dr. Sarah Westbrook",
    role: "Senior Veterinarian",
    credentials: "DVM, FRCPath",
    speciality: "Feline Medicine & Dentistry",
    bio: "A feline specialist with 9 years of experience, Dr. Sarah brings exceptional expertise in cat medicine and is known for her calm, fear-free approach.",
    initials: "SW",
  },
  {
    name: "Dr. Khalid Al Zaabi",
    role: "Veterinary Surgeon",
    credentials: "BVSc, Cert SAS",
    speciality: "Soft Tissue Surgery",
    bio: "Dr. Khalid specialises in soft tissue surgery and orthopaedics, with advanced training from the Royal College of Veterinary Surgeons in the UK.",
    initials: "KZ",
  },
  {
    name: "Layla Mahmoud",
    role: "Head Groomer",
    credentials: "Certified Pet Groomer",
    speciality: "Pet Grooming & Styling",
    bio: "With 8 years of professional grooming experience across Dubai's top clinics, Layla's skill and care make every grooming session a stress-free experience.",
    initials: "LM",
  },
];

const values = [
  { icon: Heart, title: "Compassionate Care", desc: "We treat every animal as if they were our own, with patience, empathy, and genuine love for their wellbeing." },
  { icon: Award, title: "Clinical Excellence", desc: "We hold ourselves to the highest standards of veterinary medicine, continuously updating our knowledge and equipment." },
  { icon: Shield, title: "Client Trust", desc: "We communicate honestly and clearly, ensuring you always understand your pet's health and treatment options." },
  { icon: Globe, title: "Community Service", desc: "We're proud to serve the diverse expatriate and local community of JLT and Dubai with warmth and respect." },
];

const facilities = [
  "Fully equipped examination rooms",
  "In-house diagnostic laboratory",
  "Digital X-ray & ultrasound",
  "Dental procedure suite",
  "Surgery theatre",
  "Professional grooming studio",
  "Comfortable recovery ward",
  "Dedicated cat-friendly zones",
];

export default function About() {
  const { fadeUp } = useAnimationVariants();
  useEffect(() => {
    document.title = "About Us | Safe Care Veterinary Clinic Dubai";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[hsl(218,53%,14%)] via-[hsl(218,53%,20%)] to-[hsl(262,47%,25%)] py-24 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp}>
              <Badge className="mb-6 bg-white/10 border-white/20 text-white">Our Story</Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-serif font-bold mb-6">
              More Than a Clinic.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-violet-300">
                A Family for Your Pet.
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/75 max-w-2xl leading-relaxed">
              Founded by veterinarians who believed Dubai's pets deserved world-class care without compromise, SCVC has grown into JLT's most trusted veterinary practice.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp}>
                <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">Our Story</Badge>
                <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Why We Started SCVC</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Safe Care Veterinary Clinic was founded with a clear mission: to bring the standard of veterinary care in Dubai on par with the world's best. Our founders saw a gap — pet owners in Dubai deserved more than the minimum, and their pets deserved specialists who treated them with the same attention a top physician would give a human patient.
                  </p>
                  <p>
                    Located in the heart of Jumeirah Lakes Towers, we chose JLT deliberately — a vibrant community of families, young professionals, and pet lovers from every corner of the world who share one thing: a deep love for their animals.
                  </p>
                  <p>
                    Today, SCVC is recognised for its clinical excellence, warm atmosphere, and the genuine bonds our team builds with every pet and owner we serve.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: Users, value: "2,000+", label: "Happy Patients", color: "text-primary bg-primary/10" },
                  { icon: Star, value: "4.7★", label: "Google Rating", color: "text-yellow-600 bg-yellow-50" },
                  { icon: Award, value: "12+", label: "Years Experience", color: "text-accent bg-accent/10" },
                  { icon: Heart, value: "113+", label: "5-Star Reviews", color: "text-rose-600 bg-rose-50" },
                ].map((stat, i) => (
                  <Card key={i} className="border border-border/50">
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center mx-auto mb-3`}>
                        <stat.icon className="w-6 h-6" />
                      </div>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <Badge variant="outline" className="mb-4 text-accent border-accent/20 bg-accent/5">Our Mission</Badge>
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                To make every pet in Dubai healthier, happier, and better loved.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe veterinary care is a privilege — and we work every day to make world-class medicine accessible, affordable, and delivered with the warmth that pets and their owners deserve.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">Our Values</Badge>
              <h2 className="text-4xl font-serif font-bold text-foreground">What We Stand For</h2>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="h-full text-center border border-border/50 hover:shadow-md transition-shadow" data-testid={`card-value-${i}`}>
                    <CardContent className="p-8">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-5">
                        <v.icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3">{v.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <Badge variant="outline" className="mb-4 text-accent border-accent/20 bg-accent/5">The Team</Badge>
              <h2 className="text-4xl font-serif font-bold text-foreground">Meet the People Who Care</h2>
              <p className="text-muted-foreground mt-3 text-lg">A dedicated team of veterinary professionals who love what they do.</p>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="h-full border border-border/50 hover:shadow-lg transition-all duration-300 overflow-hidden" data-testid={`card-team-${i}`}>
                    <div className="bg-gradient-to-br from-primary to-accent p-8 text-center">
                      <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 border-2 border-white/30">
                        {member.initials}
                      </div>
                      <h3 className="text-white font-bold text-lg">{member.name}</h3>
                      <p className="text-white/80 text-sm">{member.role}</p>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Stethoscope className="w-4 h-4 text-accent" />
                        <span className="text-xs font-semibold text-accent">{member.speciality}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-4 h-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{member.credentials}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Facility */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp}>
                <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">Our Facility</Badge>
                <h2 className="text-4xl font-serif font-bold text-foreground mb-6">State-of-the-Art Clinic in JLT</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our clinic at Jumeirah Bay X2 is purpose-designed for both pet comfort and clinical excellence. Every space has been thoughtfully planned to reduce animal stress while enabling our team to deliver the highest standard of care.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {facilities.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="bg-gradient-to-br from-muted/60 to-muted/20 rounded-3xl p-8 border border-border/50">
                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-border">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-foreground mb-1">Location</div>
                    <p className="text-muted-foreground text-sm">Jumeirah Bay X2, Shop 7<br />Jumeirah Lakes Towers (JLT)<br />Dubai, UAE</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-border">
                  <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-foreground mb-1">Contact</div>
                    <a href="tel:+97148343287" className="text-muted-foreground text-sm hover:text-primary transition-colors">+971 4 834 3287</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-foreground mb-1">Opening Hours</div>
                    <p className="text-muted-foreground text-sm">Monday – Saturday: 9am – 9pm<br />Sunday: 10am – 6pm</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-4xl font-serif font-bold mb-4">
              Come Visit Us in JLT
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              We'd love to meet you and your pet. Book an appointment or call us today.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-10 h-14 font-semibold" data-testid="button-about-cta-book">
                  Book Appointment
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-14 px-8" data-testid="button-about-cta-contact">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
