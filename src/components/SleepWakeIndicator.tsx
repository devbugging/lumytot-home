import React from 'react';

const SleepWakeIndicator = () => {
  return (
    <section className="py-16 bg-gradient-warm">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-warm-brown">
            Why Light Cues Work for Toddlers
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Toddlers can't read the clock, but they instinctively respond to light. Our bodies follow a natural circadian rhythm, which is guided by changes in light and darkness.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-warm-brown mb-2">Sunlight means wake up.</h3>
                  <p className="text-gray-700">
                    Bright light signals to the brain that it's morning. Energy levels rise, and the body is ready to start the day.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-warm-brown mb-2">Dim light means sleep.</h3>
                  <p className="text-gray-700">
                    Soft, gentle light helps the brain release melatonin, the hormone that makes us feel sleepy and ready for rest.
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                By pairing light with daily routines, Lumytot gives toddlers a clear signal of what comes next—making mornings smoother, bedtimes calmer, and family life more predictable.
              </p>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="/src/assets/infographic-3.png"
                alt="Sun and moon sleep wake cycle infographic showing light cues" 
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SleepWakeIndicator;