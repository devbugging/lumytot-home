import React from 'react';

const SleepWakeIndicator = () => {
  return (
    <section className="py-16 bg-gradient-warm">
      <div className="container mx-auto px-6 md:px-8">
        <div className="relative flex items-center justify-center max-w-5xl mx-auto">
          
          
          {/* Central Sun/Moon Graphic */}
          <div className="flex-shrink-0 z-10">
            <img 
              src="/src/assets/sleep-wake-infographic.png"
              alt="Sun and moon sleep wake cycle infographic" 
              className="w-96 h-96 object-contain"
            />
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default SleepWakeIndicator;