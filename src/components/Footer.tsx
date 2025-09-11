import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-warm-brown text-warm-cream py-16">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/e408984a-a4b7-4ab5-95f5-0cf6289b8a79.png" 
                alt="Lumytot Logo" 
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-xl font-bold">Lumytot</span>
            </div>
            <p className="text-warm-cream/80 text-sm leading-relaxed">
              Smart sleep solutions designed to help your little ones get the rest they need for healthy growth and development.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-warm-cream/80">
              <li><a href="#" className="hover:text-warm-cream transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-warm-cream transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-warm-cream transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-warm-cream transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div></div>
          
          <div>
            <h4 className="font-semibold mb-4">Here for you</h4>
            <ul className="space-y-2 text-sm text-warm-cream/80">
              <li><a href="#" className="hover:text-warm-cream transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-warm-cream transition-colors">Sleep Tips</a></li>
              <li><a href="#" className="hover:text-warm-cream transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-warm-cream transition-colors">Warranty</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-warm-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-warm-cream/60 text-sm">
              © 2025 Lumytot. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <a href="#" className="text-warm-cream/60 hover:text-warm-cream transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;