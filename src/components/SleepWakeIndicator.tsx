import React from 'react';
import { Sun, Moon } from 'lucide-react';

const SleepWakeIndicator = () => {
  return (
    <section id="what-is-lumytot" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6 md:px-8">
        {/* Top Section - Image and Introduction */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <div className="order-2 lg:order-1">
            <img src="/lovable-uploads/f696386d-f583-48db-ad2a-c9022393e240.png" alt="Child sleeping peacefully with Lumytot nightlight on bedside table" className="w-full h-auto rounded-2xl shadow-soft" />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">The clock your toddler understands.</h2>

            <p className="text-lg md:text-xl text-muted-foreground/80 font-medium">No buttons. No noise. Just one glowing light that teaches your child healthy sleep routines</p>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Lumytot is a sleep clock designed for toddlers. With simple sun and moon lights, it shows children when it's time to sleep and when it's time to wake. No noisy alarms or confusing buttons, just calm and clear cues that fit naturally into your child's routine.</p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Why Light Cues Work */}
        <div className="max-w-none">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-warm-brown">
              Why light cues work for toddlers?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Toddlers can't read the clock, but they instinctively respond to light. Our bodies follow a natural circadian rhythm, which is guided by changes in light and darkness.
            </p>
          </div>

          {/* Cards Container - Full Width 3 Columns */}
          <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-6">
            {/* Wake Up Card */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-warm-orange/20 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#738871' }}>
                  <Sun className="w-6 h-6" style={{ color: '#E9E7E5' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-warm-brown mb-3">Sunlight means wake up</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Bright light signals to the brain that it's morning. Energy levels rise, and the body is ready to start the day.
                  </p>
                </div>
              </div>
            </div>

            {/* Summary Card - Middle */}
            <div className="rounded-2xl p-8 border border-warm-green/30" style={{ backgroundColor: '#E9E7E5' }}>
              <p className="text-custom leading-relaxed">
                By pairing light with daily routines, Lumytot gives toddlers a clear signal of what comes next—making mornings smoother, bedtimes calmer, and family life more predictable.
              </p>
            </div>

            {/* Sleep Card */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-warm-brown/20 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#738871' }}>
                  <Moon className="w-6 h-6" style={{ color: '#E9E7E5' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-warm-brown mb-3">Dim light means sleep</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Soft, gentle light helps the brain release melatonin, the hormone that makes us feel sleepy and ready for rest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SleepWakeIndicator;