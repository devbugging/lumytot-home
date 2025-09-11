import React from 'react';
import { Instagram, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InstagramBanner = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 text-center border border-border/50 shadow-soft">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Follow Us on Instagram
          </h2>
          
          {/* Photo collage */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Main Instagram icon */}
              <div className="bg-gradient-to-br from-pink-500 to-orange-400 p-6 rounded-full z-10 relative">
                <Instagram className="w-10 h-10 text-white" />
              </div>
              
              {/* Photo mash around the icon - better distributed */}
              <div className="absolute -top-8 -left-20 w-28 h-28 rounded-xl overflow-hidden border-3 border-white shadow-xl transform -rotate-12 hover:scale-105 transition-transform">
                <img src="/lovable-uploads/b99a08d5-58b3-4224-a6bc-b59f3a4195c9.png" alt="Happy family moment" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-8 -right-20 w-28 h-28 rounded-xl overflow-hidden border-3 border-white shadow-xl transform rotate-12 hover:scale-105 transition-transform">
                <img src="/lovable-uploads/2a88ee1a-9c82-4a4e-a708-68496056eab9.png" alt="Lumytot in action" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-18 w-24 h-24 rounded-xl overflow-hidden border-3 border-white shadow-xl transform rotate-6 hover:scale-105 transition-transform">
                <img src="/lovable-uploads/4429646c-d357-4686-9995-105bc97b2ef7.png" alt="Peaceful sleep" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-18 w-24 h-24 rounded-xl overflow-hidden border-3 border-white shadow-xl transform -rotate-6 hover:scale-105 transition-transform">
                <img src="/lovable-uploads/6422a9c3-d6a4-4411-a930-92344931a381.png" alt="Sweet dreams" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-12 -left-28 w-20 h-20 rounded-lg overflow-hidden border-2 border-white shadow-lg transform rotate-45 hover:scale-105 transition-transform">
                <img src="/lovable-uploads/1a3bf8d1-3952-4b4d-8971-dd6a1801ddff.png" alt="Family time" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-12 -right-28 w-20 h-20 rounded-lg overflow-hidden border-2 border-white shadow-lg transform -rotate-45 hover:scale-105 transition-transform">
                <img src="/lovable-uploads/3dbf7ede-0cb4-4785-b1c1-ea1cbfb8470d.png" alt="Better sleep" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -left-24 top-2 w-18 h-18 rounded-lg overflow-hidden border-2 border-white shadow-lg transform rotate-12 hover:scale-105 transition-transform">
                <img src="/lovable-uploads/545f0b50-1d10-4062-bc2e-4e3f1cf9d838.png" alt="Sweet moments" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -right-24 top-2 w-18 h-18 rounded-lg overflow-hidden border-2 border-white shadow-lg transform -rotate-12 hover:scale-105 transition-transform">
                <img src="/lovable-uploads/ac7f8321-ad8e-481a-9f6f-a3ca0cc71a05.png" alt="Peaceful nights" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          
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