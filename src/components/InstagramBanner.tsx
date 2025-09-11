import React from 'react';
import { Instagram, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InstagramBanner = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 text-center border border-border/50 shadow-soft">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-pink-500 to-orange-400 p-4 rounded-full">
              <Instagram className="w-8 h-8 text-white" />
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
            Join 10,000+ happy families already following us
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramBanner;