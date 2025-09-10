import React from 'react';
import { Moon, Smartphone, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Moon className="w-8 h-8" />,
      title: "SunMoon Light Indicator",
      description: "Visual cues help children understand when it's time to sleep and when it's okay to wake up, promoting healthy sleep habits."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Sleep Tips and Reminders",
      description: "Receive personalized sleep guidance and gentle reminders through our companion app to establish consistent bedtime routines."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timers and Alarms", 
      description: "Set customizable sleep timers and gentle wake-up alarms that work with your child's natural sleep cycle for peaceful mornings."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Smart Sleep Solutions for Growing Children
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Carefully designed features to support healthy sleep patterns and peaceful bedtime routines.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-2xl p-8 text-center shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-6">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;