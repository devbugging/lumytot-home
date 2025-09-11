import React from 'react';
import { Star } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import sarahImage from '@/assets/testimonial-sarah.jpg';
import davidImage from '@/assets/testimonial-david.jpg';
import jenniferImage from '@/assets/testimonial-jennifer.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Mother of 2",
      rating: 5,
      text: "Lumytot has been a game-changer for our bedtime routine. My 3-year-old now looks forward to sleep time, and we've seen such an improvement in her mood during the day. Highly recommended!",
      location: "Portland, OR",
      image: sarahImage
    },
    {
      name: "David R.", 
      role: "Father of 1",
      rating: 5,
      text: "As a working parent, I was skeptical about another gadget, but Lumytot actually works. My son sleeps through the night now, and the app gives me peace of mind with its sleep tracking.",
      location: "Austin, TX",
      image: davidImage
    },
    {
      name: "Jennifer L.",
      role: "Mother of 3", 
      rating: 5,
      text: "I wish I had Lumytot when my older kids were toddlers! The gentle wake-up feature has eliminated those cranky morning meltdowns. It's been worth every penny for our family's well-being.",
      location: "Denver, CO",
      image: jenniferImage
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Parents Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real families sharing their experiences with Lumytot and how it's transformed their sleep routines.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-xl p-6 shadow-soft hover:shadow-warm transition-all duration-300 border border-border/50"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warm-orange text-warm-orange" />
                ))}
              </div>
              
              <blockquote className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-muted-foreground text-xs">{testimonial.role}</div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;