import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/b99a08d5-58b3-4224-a6bc-b59f3a4195c9.png)` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
        <div className="bg-gradient-card/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary-foreground/10 shadow-glow">
          {/* Night light icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-card rounded-2xl flex items-center justify-center shadow-glow">
              <div className="text-3xl">🌙⭐</div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Help Your Toddler
            <br />
            <span className="text-primary-glow">Sleep Better</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Give your child the gift of better sleep with our smart nightlight. 
            Designed by sleep experts to create the perfect bedtime environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Join the Waiting List
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              Learn More
            </Button>
          </div>
          
          <div className="mt-8 text-sm opacity-75">
            <span className="inline-flex items-center gap-2">
              🔒 Secure Pre-order • 💝 Special Launch Price
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;