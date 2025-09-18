import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lumytot-logo-green.png" 
            alt="Lumytot Logo" 
            className="h-8 w-auto"
          />
          
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#what-is-lumytot" className="text-muted-foreground hover:text-foreground transition-colors">
            What is Lumytot
          </a>
          <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
            Benefits
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
            Reviews
          </a>
          <a href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">
            Blog
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">EN</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background border border-border shadow-lg z-50">
              <DropdownMenuItem className="cursor-pointer hover:bg-muted">
                🇺🇸 English
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-muted">
                🇸🇮 Slovenščina
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            variant="warm" 
            size="sm"
            onClick={() => {
              document.getElementById('waitlist')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            Yes, I Need Sleep!
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;