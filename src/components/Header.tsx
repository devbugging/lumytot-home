import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative w-8 h-8">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center relative">
              <span className="text-primary-foreground font-bold text-lg">L</span>
              <div className="absolute -top-1 -right-1 bg-[#7562A4] text-white px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap">
                NAPS. NIGHTS. SOLVED.
              </div>
            </div>
          </div>
          <span className="text-xl font-bold text-foreground">Lumytot</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#what-is-lumytot" className="text-muted-foreground hover:text-foreground transition-colors">
            What is Lumytot
          </a>
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
            Benefits
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
            Reviews
          </a>
        </nav>

        <Button variant="warm" size="sm">
          Join Waitlist
        </Button>
      </div>
    </header>
  );
};

export default Header;