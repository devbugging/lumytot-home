import React from 'react';
import { Clock, Moon, Heart, TrendingUp } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Improved Cognitive Development",
      description: "Quality sleep is essential for brain development, memory consolidation, and learning in growing children."
    },
    {
      icon: <Moon className="w-6 h-6" />,
      title: "Better Social and Emotional Development",
      description: "Well-rested children show improved emotional regulation, better social skills, and increased empathy."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Stronger Immune System",
      description: "Adequate sleep strengthens the immune system, helping children fight off illnesses and stay healthy."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Support for Healthy Growth",
      description: "Growth hormone is primarily released during deep sleep, making quality rest crucial for physical development."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Benefits of Quality Sleep for Your Child
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Scientific research shows that healthy sleep patterns are fundamental to your child's overall development and well-being.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-xl p-6 text-center shadow-soft hover:shadow-warm transition-all duration-300 border border-border/50 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                {benefit.icon}
              </div>
              
              <h3 className="font-semibold text-foreground mb-3 text-sm leading-tight">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground text-xs leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;