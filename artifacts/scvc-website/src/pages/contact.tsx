import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, MessageCircle, Mail, MapPin, Clock, CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const hours = [
  { day: "Monday", time: "9:00 AM – 9:00 PM" },
  { day: "Tuesday", time: "9:00 AM – 9:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 9:00 PM" },
  { day: "Thursday", time: "9:00 AM – 9:00 PM" },
  { day: "Friday", time: "9:00 AM – 9:00 PM" },
  { day: "Saturday", time: "9:00 AM – 9:00 PM" },
  { day: "Sunday", time: "10:00 AM – 6:00 PM" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | Safe Care Veterinary Clinic Dubai";
  }, []);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", email: "", message: "" },
  });

  function onSubmit(_data: ContactFormData) {
    setSubmitted(true);
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[hsl(218,53%,14%)] via-[hsl(218,53%,20%)] to-[hsl(262,47%,25%)] py-20 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <Badge className="mb-6 bg-white/10 border-white/20 text-white">Contact Us</Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl font-serif font-bold mb-4">
              Get in Touch
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/75 text-xl max-w-xl mx-auto">
              We're here for you and your pet. Reach out via phone, WhatsApp, email, or our contact form.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Phone, title: "Call Us", info: "+971 4 834 3287",
                sub: "Mon–Sat 9am–9pm, Sun 10am–6pm",
                action: "tel:+97148343287", label: "Call Now",
                color: "text-primary bg-primary/10",
                btnClass: "bg-primary hover:bg-primary/90 text-white",
              },
              {
                icon: MessageCircle, title: "WhatsApp", info: "+971 4 834 3287",
                sub: "Quick replies during clinic hours",
                action: "https://wa.me/97148343287", label: "Chat on WhatsApp",
                color: "text-[#25D366] bg-[#25D366]/10",
                btnClass: "bg-[#25D366] hover:bg-[#20bd5a] text-white",
              },
              {
                icon: Mail, title: "Email Us", info: "info@scvc.ae",
                sub: "We respond within 24 hours",
                action: "mailto:info@scvc.ae", label: "Send Email",
                color: "text-accent bg-accent/10",
                btnClass: "bg-accent hover:bg-accent/90 text-white",
              },
            ].map((c, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="h-full text-center border border-border/50 hover:shadow-md transition-shadow" data-testid={`card-contact-${i}`}>
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-2xl ${c.color} flex items-center justify-center mx-auto mb-5`}>
                      <c.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{c.title}</h3>
                    <p className="text-primary font-semibold mb-1">{c.info}</p>
                    <p className="text-muted-foreground text-sm mb-6">{c.sub}</p>
                    <a href={c.action} target={c.action.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                      <Button className={`w-full ${c.btnClass}`} data-testid={`button-contact-${i}`}>
                        {c.label}
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center">
                  <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-5" />
                  <h3 className="text-2xl font-bold text-foreground mb-3">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  <Button onClick={() => setSubmitted(false)} variant="outline" className="border-emerald-500 text-emerald-600 hover:bg-emerald-50" data-testid="button-send-another">
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <Card className="border border-border/50 shadow-sm">
                  <CardContent className="p-8">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} data-testid="input-contact-name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="phone" render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+971 5x xxx xxxx" {...field} data-testid="input-contact-phone" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                        </div>
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your@email.com" {...field} data-testid="input-contact-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="message" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Tell us how we can help..." rows={5} {...field} data-testid="input-contact-message" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white h-13" data-testid="button-contact-submit">
                          <Send className="w-4 h-4 mr-2" /> Send Message
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              )}
            </motion.div>

            {/* Info + Map */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-8">
              {/* Location */}
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Find Us</h2>
                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm mb-6" style={{ height: "260px" }}>
                  <iframe
                    src="https://maps.google.com/maps?q=Jumeirah+Bay+X2+JLT+Dubai&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SCVC Location"
                    data-testid="map-scvc-location"
                  />
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-foreground">Safe Care Veterinary Clinic</div>
                    <p className="text-muted-foreground text-sm">Jumeirah Bay X2, Shop 7<br />Jumeirah Lakes Towers (JLT), Dubai, UAE</p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <Card className="border border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <Clock className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">Opening Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {hours.map((h, i) => {
                      const today = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date().getDay()];
                      const isToday = h.day === today;
                      return (
                        <div key={i} className={`flex justify-between items-center py-2 px-3 rounded-lg text-sm ${isToday ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground"}`} data-testid={`hours-row-${i}`}>
                          <span className="font-medium">{h.day}</span>
                          <span>{h.time}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
