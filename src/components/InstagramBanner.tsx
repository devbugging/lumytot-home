import React from 'react';
import { Instagram, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InstagramBanner = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 text-center border border-border/50 shadow-soft">
          {/* Photo collage */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              {/* Main Instagram icon */}
              <div className="bg-gradient-to-br from-pink-500 to-orange-400 p-4 rounded-full z-10 relative">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              
              {/* Photo mash around the icon */}
              <div className="absolute -top-2 -left-8 w-12 h-12 rounded-lg overflow-hidden border-2 border-white shadow-lg transform -rotate-12">
                <img src="/lovable-uploads/b99a08d5-58b3-4224-a6bc-b59f3a4195c9.png" alt="Happy family moment" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-2 -right-8 w-12 h-12 rounded-lg overflow-hidden border-2 border-white shadow-lg transform rotate-12">
                <img src="/lovable-uploads/2a88ee1a-9c82-4a4e-a708-68496056eab9.png" alt="Lumytot in action" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -left-6 w-10 h-10 rounded-lg overflow-hidden border-2 border-white shadow-lg transform rotate-6">
                <img src="/lovable-uploads/4429646c-d357-4686-9995-105bc97b2ef7.png" alt="Peaceful sleep" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-6 w-10 h-10 rounded-lg overflow-hidden border-2 border-white shadow-lg transform -rotate-6">
                <img src="/lovable-uploads/6422a9c3-d6a4-4411-a930-92344931a381.png" alt="Sweet dreams" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Follow Us on Instagram
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
            Join our community of sleep-loving parents! Get daily tips, real family stories, 
            and behind-the-scenes content from the Lumytot team.
          </p>
          
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white/10 text-foreground border-border/30 hover:bg-white/20 transition-all duration-300 group"
            onClick={() => window.open('https://instagram.com/lumytot', '_blank')}
          >
            <Instagram className="w-5 h-5 mr-2" />
            Follow @lumytot
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <div className="mt-6 text-sm text-muted-foreground">
            Our toddler sleeps better than our follower count.
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramBanner;