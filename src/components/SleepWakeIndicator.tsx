import React from 'react';
import { Sun, Moon } from 'lucide-react';

const SleepWakeIndicator = () => {
  return (
    <section className="py-16 bg-gradient-warm">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          {/* Wake Up Time */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <Sun className="w-12 h-12 text-primary" />
            <span className="text-lg font-medium text-foreground">Wake up time</span>
          </div>
          
          {/* Sleep Time */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <Moon className="w-12 h-12 text-primary" />
            <span className="text-lg font-medium text-foreground">Sleep time</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SleepWakeIndicator;