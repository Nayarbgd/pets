import { Link } from "wouter";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Star, Quote, ThumbsUp, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useAnimationVariants, staggerSlow as stagger } from "@/hooks/use-animation-variants";

const reviews = [
  { name: "Sarah Al Mansouri", location: "JLT, Dubai", rating: 5, date: "March 2025", service: "Veterinary Consultation", text: "The most professional veterinary clinic I've visited in Dubai. Dr. Ahmed was incredibly patient with my golden retriever, who can be very anxious around new environments. The clinic is spotless, well-equipped, and the team genuinely loves animals. We found our forever vet.", helpful: 24, pet: "Max, Golden Retriever" },
  { name: "Marcus Chen", location: "JBR, Dubai", rating: 5, date: "February 2025", service: "Pet Taxi + Check-up", text: "I used the pet taxi service for the first time and I was blown away. My Persian cat Lily can be extremely difficult to transport, but she arrived calm and relaxed. The health check was thorough and the vet took time to explain everything clearly. Worth every dirham.", helpful: 18, pet: "Lily, Persian Cat" },
  { name: "Fatima Al Hashemi", location: "Dubai Marina", rating: 5, date: "January 2025", service: "Emergency Consultation", text: "SCVC saved my French Bulldog's life. I called panicking and they saw us within the hour. The doctors were calm, quick, and incredibly knowledgeable. They followed up by phone the next two days to check on Baguette. That level of care is rare anywhere in the world, let alone Dubai.", helpful: 31, pet: "Baguette, French Bulldog" },
  { name: "James O'Brien", location: "Downtown Dubai", rating: 5, date: "December 2024", service: "Home Visit", text: "The home visit service is genuinely life-changing for my 14-year-old Siamese cat who absolutely hates car travel. The vet arrived on time, spent a full 45 minutes with us, was incredibly thorough, and left us with a clear care plan. Professional, compassionate, and well worth it.", helpful: 19, pet: "Oscar, Siamese Cat" },
  { name: "Nadia Petrov", location: "DIFC, Dubai", rating: 5, date: "November 2024", service: "Grooming", text: "My Miniature Poodle Coco comes out of every session looking like she just walked out of a luxury salon. The groomers are skilled, gentle, and patient. Coco used to hate grooming — now she actually wags her tail when we arrive. That's how good they are.", helpful: 22, pet: "Coco, Miniature Poodle" },
  { name: "Khalid Al Ameri", location: "JLT, Dubai", rating: 5, date: "October 2024", service: "Annual Check-up", text: "Genuinely the best vet in Dubai. They remembered my Labrador's name on the second visit without checking records, and asked about a minor ear issue from our previous appointment. That kind of personal attention is something you just can't fake. Highly, highly recommend.", helpful: 27, pet: "Bruno, Labrador" },
  { name: "Emma Thompson", location: "Palm Jumeirah", rating: 5, date: "September 2024", service: "Vaccinations", text: "Brought my two kittens for their first vaccinations. The team handled them so gently — I was worried they'd be scared but both kittens were remarkably calm. Efficient, affordable, and the whole experience was much less stressful than I expected for two lively 12-week-olds.", helpful: 15, pet: "Luna & Nova, Kittens" },
  { name: "Ahmed Bin Zayed", location: "Business Bay", rating: 5, date: "August 2024", service: "Dental Care", text: "Didn't realise how serious my dog's dental issues were until SCVC identified them during a routine check. They explained everything clearly, provided a detailed treatment plan, and the dental cleaning procedure went perfectly. His breath is so much better and he's noticeably more comfortable eating.", helpful: 20, pet: "Rocky, German Shepherd" },
  { name: "Priya Sharma", location: "Jumeirah", rating: 5, date: "July 2024", service: "Pet Grooming", text: "Took my Shih Tzu for a full groom and the results were outstanding. The groomer clearly knew the breed requirements perfectly. Mochi looked amazing and smelled wonderful for days. The price was fair for the quality and the studio was clean and professional. Will not go anywhere else.", helpful: 16, pet: "Mochi, Shih Tzu" },
  { name: "David Clarke", location: "JLT, Dubai", rating: 5, date: "June 2024", service: "Preventive Care", text: "Set up a full preventive care plan for my two dogs through SCVC. The consultation was comprehensive and the recommendations were practical and evidence-based. The vets here don't oversell — they tell you exactly what your pet needs and nothing more. Trustworthy and excellent.", helpful: 23, pet: "Bailey & Archie" },
  { name: "Reem Al Nuaimi", location: "Al Barsha", rating: 5, date: "May 2024", service: "Home Visit + Vaccination", text: "My elderly cat is 16 and cannot travel anymore. The home visit service means she can still receive excellent care in the comfort of her own space. The vet was gentle, unhurried, and spent extra time reassuring her. This service has genuinely improved her quality of life.", helpful: 28, pet: "Princess, Senior Cat" },
  { name: "Tom Nguyen", location: "Dubai Sports City", rating: 5, date: "April 2024", service: "Veterinary Consultation", text: "Moved to Dubai six months ago and was recommended SCVC by multiple people in our building. Happy to confirm the recommendation was spot on. Clean clinic, friendly staff, knowledgeable vets, and reasonable pricing. Found our vet for as long as we're in Dubai.", helpful: 14, pet: "Pepper, Beagle" },
];

const ratingBreakdown = [
  { stars: 5, count: 97, percentage: 86 },
  { stars: 4, count: 12, percentage: 11 },
  { stars: 3, count: 3, percentage: 2.5 },
  { stars: 2, count: 1, percentage: 0.9 },
  { stars: 1, count: 0, percentage: 0 },
];

const successStories = [
  {
    title: "Emergency Surgery Saves Baguette",
    desc: "When Fatima's French Bulldog showed signs of respiratory distress, our team performed life-saving emergency care within hours. Baguette made a full recovery.",
    outcome: "Full recovery",
    icon: "🐾",
  },
  {
    title: "Senior Cat Princess Still Thriving at 16",
    desc: "Thanks to regular home visit check-ups and a personalised senior wellness plan, Princess continues to enjoy a comfortable, pain-managed life in her twilight years.",
    outcome: "Ongoing wellness",
    icon: "🐱",
  },
  {
    title: "Rocky's Dental Transformation",
    desc: "Bruno's owner had no idea about his severe periodontal disease. After a full dental treatment programme, Rocky's health, appetite, and energy levels all dramatically improved.",
    outcome: "Complete recovery",
    icon: "🦷",
  },
];

export default function Reviews() {
  const { fadeUp } = useAnimationVariants();
  useEffect(() => {
    document.title = "Client Reviews | Safe Care Veterinary Clinic Dubai";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[hsl(218,53%,14%)] via-[hsl(218,53%,20%)] to-[hsl(262,47%,25%)] py-24 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <Badge className="mb-6 bg-white/10 border-white/20 text-white">Client Reviews</Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Trusted by Dubai's
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-300">
                Pet Lovers
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/75 max-w-2xl mx-auto mb-8">
              Don't take our word for it. Here's what the pet owners of Dubai have to say about their experience with SCVC.
            </motion.p>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-4xl font-bold">4.7</span>
              <span className="text-white/60 text-lg">from 113+ reviews on Google</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Rating Breakdown */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <h2 className="text-2xl font-serif font-bold text-foreground">Rating Breakdown</h2>
            </motion.div>
            <motion.div variants={stagger} className="space-y-3">
              {ratingBreakdown.map((r, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-center gap-4">
                  <div className="flex items-center gap-1 w-24 justify-end">
                    <span className="text-sm font-medium text-foreground">{r.stars}</span>
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <Progress value={r.percentage} className="h-2.5" />
                  </div>
                  <span className="text-sm text-muted-foreground w-12 text-right">{r.count}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="h-full border border-border/50 hover:shadow-md transition-shadow" data-testid={`card-review-detail-${i}`}>
                  <CardContent className="p-6 flex flex-col h-full">
                    <Quote className="w-8 h-8 text-primary/20 mb-3" />
                    <div className="flex mb-3">
                      {[1,2,3,4,5].map(s => (
                        <Star key={s} className={`w-4 h-4 ${s <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`} />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm flex-1 mb-4">"{review.text}"</p>
                    <div className="border-t border-border pt-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                            {review.name.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div>
                            <div className="font-semibold text-sm text-foreground">{review.name}</div>
                            <div className="text-xs text-muted-foreground">{review.location}</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mt-2">
                        <Badge variant="outline" className="text-xs text-primary border-primary/20 bg-primary/5">
                          {review.service}
                        </Badge>
                        <span className="text-xs text-muted-foreground ml-auto">{review.date}</span>
                      </div>
                      <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>{review.helpful} found this helpful</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <Badge variant="outline" className="mb-4 text-accent border-accent/20 bg-accent/5">Success Stories</Badge>
              <h2 className="text-4xl font-serif font-bold text-foreground">Pets We've Helped</h2>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {successStories.map((story, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="h-full border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300" data-testid={`card-story-${i}`}>
                    <CardContent className="p-8 text-center">
                      <div className="text-5xl mb-5">{story.icon}</div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{story.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5">{story.desc}</p>
                      <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200">
                        <Award className="w-3.5 h-3.5 mr-1.5" />
                        {story.outcome}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-4xl font-serif font-bold mb-4">
              Join Our Happy Pet Family
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Experience the SCVC difference for yourself. Book today.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-10 h-14 font-semibold" data-testid="button-reviews-cta-book">
                  <Calendar className="w-5 h-5 mr-2" /> Book Appointment
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
