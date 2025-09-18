import React from 'react';

const SleepWakeIndicator = () => {
  return (
    <section className="py-16 bg-gradient-warm">
      <div className="container mx-auto px-6 md:px-8">
        <div className="relative flex items-center justify-center max-w-5xl mx-auto">
          
          {/* Sun Shining: Wake Up Time - Left Side */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 text-left">
            <div className="text-primary text-2xl md:text-3xl font-light leading-tight">
              <div>wake up time</div>
            </div>
          </div>
          
          {/* Central Sun/Moon Graphic */}
          <div className="flex-shrink-0 z-10">
            <img 
              src="/src/assets/sleep-wake-infographic.png"
              alt="Sun and moon sleep wake cycle infographic" 
              className="w-96 h-96 object-contain"
            />
          </div>
          
          {/* Moon Shining: Sleep Time - Right Side */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-right">
            <div className="text-primary text-2xl md:text-3xl font-light leading-tight">
              <div>moon shining:</div>
              <div>sleep time</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SleepWakeIndicator;