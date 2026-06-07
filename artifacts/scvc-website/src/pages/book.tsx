import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Calendar, CheckCircle, Phone, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { useAnimationVariants, staggerSlow as stagger } from "@/hooks/use-animation-variants";

const bookingSchema = z.object({
  ownerName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  petName: z.string().min(1, "Please enter your pet's name"),
  petType: z.string().min(1, "Please select your pet type"),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  notes: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const services = [
  "Veterinary Consultation",
  "Pet Grooming",
  "Vaccinations",
  "Dental Care",
  "Pet Taxi Service",
  "Home Visit",
  "Pet Health Checkup",
  "Preventive Care",
  "Cat Care Consultation",
  "Dog Care Consultation",
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
];

const petTypes = ["Dog", "Cat", "Rabbit", "Bird", "Hamster", "Guinea Pig", "Reptile", "Other"];

const benefits = [
  { icon: "⚡", text: "Same-day appointments often available" },
  { icon: "🏠", text: "Home visits available in Dubai" },
  { icon: "🚗", text: "Pet taxi pickup service" },
  { icon: "✅", text: "Confirmation within 15 minutes" },
];

function getTomorrowDate() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

export default function Book() {
  const { fadeUp } = useAnimationVariants();
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);

  useEffect(() => {
    document.title = "Book Appointment | Safe Care Veterinary Clinic Dubai";
  }, []);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      ownerName: "", phone: "", email: "", petName: "",
      petType: "", service: "", preferredDate: "", preferredTime: "", notes: "",
    },
  });

  function onSubmit(data: BookingFormData) {
    setSubmittedData(data);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted && submittedData) {
    return (
      <div className="min-h-screen bg-muted/20 py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Card className="border border-emerald-200 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-10 text-center text-white">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <CheckCircle className="w-20 h-20 mx-auto mb-4 text-white" />
                </motion.div>
                <h1 className="text-3xl font-serif font-bold mb-2">Appointment Requested!</h1>
                <p className="text-white/80 text-lg">We'll confirm your booking within 15 minutes.</p>
              </div>
              <CardContent className="p-8">
                <h2 className="text-xl font-bold text-foreground mb-5">Booking Summary</h2>
                <div className="space-y-3 mb-8">
                  {[
                    { label: "Pet Owner", value: submittedData.ownerName },
                    { label: "Phone", value: submittedData.phone },
                    { label: "Email", value: submittedData.email },
                    { label: "Pet Name", value: submittedData.petName },
                    { label: "Pet Type", value: submittedData.petType },
                    { label: "Service", value: submittedData.service },
                    { label: "Preferred Date", value: submittedData.preferredDate },
                    { label: "Preferred Time", value: submittedData.preferredTime },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="text-muted-foreground text-sm">{label}</span>
                      <span className="font-medium text-sm text-foreground">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 rounded-xl p-5 mb-6 border border-blue-100">
                  <p className="text-sm text-blue-800 font-medium">
                    Our team will call you at <strong>{submittedData.phone}</strong> to confirm your appointment. You'll also receive a confirmation at <strong>{submittedData.email}</strong>.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+97148343287" className="flex-1">
                    <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white" data-testid="button-confirm-call">
                      <Phone className="w-4 h-4 mr-2" /> Call to Confirm
                    </Button>
                  </a>
                  <a href="https://wa.me/97148343287" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white" data-testid="button-confirm-whatsapp">
                      <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Us
                    </Button>
                  </a>
                </div>

                <div className="mt-5 text-center">
                  <button
                    onClick={() => { setSubmitted(false); form.reset(); }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors underline"
                    data-testid="button-book-another"
                  >
                    Book another appointment
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[hsl(218,53%,14%)] via-[hsl(218,53%,20%)] to-[hsl(262,47%,25%)] py-20 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <Badge className="mb-6 bg-white/10 border-white/20 text-white">Booking</Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl font-serif font-bold mb-4">
              Book an Appointment
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/75 text-xl max-w-xl mx-auto">
              Complete the form below and our team will confirm your appointment within 15 minutes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="bg-white border-b border-border py-5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="text-xl">{b.icon}</span>
                <span>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-2">
              <Card className="border border-border/50 shadow-sm overflow-hidden">
                <div className="bg-primary/5 px-8 py-5 border-b border-border">
                  <h2 className="text-xl font-serif font-bold text-foreground">Appointment Details</h2>
                  <p className="text-muted-foreground text-sm">All fields are required unless marked optional.</p>
                </div>
                <CardContent className="p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Owner info */}
                      <div>
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Pet Owner Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <FormField control={form.control} name="ownerName" render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your full name" {...field} data-testid="input-book-name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="phone" render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+971 5x xxx xxxx" {...field} data-testid="input-book-phone" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                        </div>
                        <div className="mt-5">
                          <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="your@email.com" {...field} data-testid="input-book-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                        </div>
                      </div>

                      <div className="border-t border-border pt-6">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Pet Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <FormField control={form.control} name="petName" render={({ field }) => (
                            <FormItem>
                              <FormLabel>Pet Name</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. Buddy" {...field} data-testid="input-book-petname" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="petType" render={({ field }) => (
                            <FormItem>
                              <FormLabel>Pet Type</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-book-pettype">
                                    <SelectValue placeholder="Select pet type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {petTypes.map(p => (
                                    <SelectItem key={p} value={p}>{p}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )} />
                        </div>
                      </div>

                      <div className="border-t border-border pt-6">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Appointment Preferences</h3>
                        <div className="space-y-5">
                          <FormField control={form.control} name="service" render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service Needed</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-book-service">
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {services.map(s => (
                                    <SelectItem key={s} value={s}>{s}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )} />

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField control={form.control} name="preferredDate" render={({ field }) => (
                              <FormItem>
                                <FormLabel>Preferred Date</FormLabel>
                                <FormControl>
                                  <Input type="date" min={getTomorrowDate()} {...field} data-testid="input-book-date" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )} />
                            <FormField control={form.control} name="preferredTime" render={({ field }) => (
                              <FormItem>
                                <FormLabel>Preferred Time</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger data-testid="select-book-time">
                                      <SelectValue placeholder="Select a time" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {timeSlots.map(t => (
                                      <SelectItem key={t} value={t}>{t}</SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )} />
                          </div>

                          <FormField control={form.control} name="notes" render={({ field }) => (
                            <FormItem>
                              <FormLabel>Additional Notes <span className="text-muted-foreground font-normal">(Optional)</span></FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Any symptoms, concerns, or special requirements we should know about..."
                                  rows={4}
                                  {...field}
                                  data-testid="input-book-notes"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                        </div>
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-base font-semibold shadow-lg" data-testid="button-book-submit">
                        <Calendar className="w-5 h-5 mr-2" />
                        Request Appointment
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        By submitting, you agree to be contacted by our team to confirm your appointment.
                      </p>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-5">
              {/* Quick Contact */}
              <Card className="border border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-4">Prefer to call?</h3>
                  <a href="tel:+97148343287" className="block">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white mb-3" data-testid="button-sidebar-call">
                      <Phone className="w-4 h-4 mr-2" /> +971 4 834 3287
                    </Button>
                  </a>
                  <a href="https://wa.me/97148343287" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white" data-testid="button-sidebar-whatsapp">
                      <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Us
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Opening Hours */}
              <Card className="border border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-foreground">Opening Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">Mon – Sat</span><span className="font-medium">9am – 9pm</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Sunday</span><span className="font-medium">10am – 6pm</span></div>
                  </div>
                </CardContent>
              </Card>

              {/* Why book */}
              <Card className="border border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-4">Why Book Online?</h3>
                  <ul className="space-y-3">
                    {[
                      "Confirmed within 15 minutes",
                      "Choose your preferred time",
                      "Select your exact service",
                      "No waiting on hold",
                      "24/7 booking availability",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
