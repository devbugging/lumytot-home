import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/d2b5dd77-1bb2-42de-8601-622ec4b3c033.png)` }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-full p-20 md:p-24 border border-white/20 shadow-2xl w-[750px] h-[750px] flex items-center justify-center">
          {/* Add a subtle inner glow */}
          <div className="absolute inset-4 bg-white/5 rounded-full blur-xl"></div>
          <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Help Your Toddler
            <br />
            <span className="text-primary-glow">Sleep Better</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            The world's first nap-friendly sleep trainer. Lumytot makes nights restful and naps effortless, bringing peace to the whole family.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30">
              Join the Waiting List
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 backdrop-blur-md">
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
      </div>
    </section>
  );
};

export default Hero;