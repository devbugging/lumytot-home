import React from 'react';

const SleepWakeIndicator = () => {
  return (
    <section className="py-16 bg-gradient-warm">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-center max-w-4xl mx-auto">
          
          {/* Wake Up Time - Left Side */}
          <div className="flex items-center flex-1">
            <span className="text-lg font-medium text-foreground mr-4">Wake up time</span>
            <div className="flex-1 h-0.5 bg-primary/30"></div>
          </div>
          
          {/* Central Logo */}
          <div className="mx-8 flex-shrink-0">
            <img 
              src="/lumytot-logo-green.png" 
              alt="Lumytot sun and moon logo" 
              className="w-24 h-24 object-contain"
            />
          </div>
          
          {/* Sleep Time - Right Side */}
          <div className="flex items-center flex-1">
            <div className="flex-1 h-0.5 bg-primary/30"></div>
            <span className="text-lg font-medium text-foreground ml-4">Sleep time</span>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SleepWakeIndicator;