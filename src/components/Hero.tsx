import React from 'react';
import { Button } from '@/components/ui/button';
import { Mouse } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/b99a08d5-58b3-4224-a6bc-b59f3a4195c9.png)` }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-full p-20 md:p-24 border border-white/20 shadow-2xl w-[750px] h-[750px] flex items-center justify-center">
          {/* Add a subtle inner glow */}
        <div className="absolute inset-4 bg-white/5 rounded-full blur-xl"></div>
        <div className="relative z-10">
          <div className="mb-4 inline-block bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-medium border border-white/20 shadow-lg">
            NAPS. NIGHTS. SOLVED.
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Help Your Toddler
            <br />
            <span className="text-white">Sleep Better</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed text-white">
            The world's first nap-friendly sleep trainer. Lumytot makes nights restful and naps effortless, bringing peace to the whole family.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30">
              Join the Waiting List
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="mt-12 flex flex-col items-center text-white/80">
            <div className="flex flex-col items-center animate-bounce">
              <Mouse className="w-6 h-6 mb-2" />
              <span className="text-sm font-medium">Scroll to explore</span>
            </div>
          </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;