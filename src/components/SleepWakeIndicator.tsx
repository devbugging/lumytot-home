import React from 'react';
import { Sun, Moon } from 'lucide-react';

const SleepWakeIndicator = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-warm-beige to-warm-cream">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-warm-brown">
              Why Light Cues Work for Toddlers
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Toddlers can't read the clock, but they instinctively respond to light. Our bodies follow a natural circadian rhythm, which is guided by changes in light and darkness.
            </p>
          </div>

          {/* Cards Container - Full Width */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Wake Up Card */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-warm-orange/20 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-warm-green rounded-full flex items-center justify-center flex-shrink-0">
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

            {/* Sleep Card */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-warm-brown/20 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-warm-green rounded-full flex items-center justify-center flex-shrink-0">
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

          {/* Bottom Summary Card */}
          <div className="bg-gradient-to-r from-warm-green/10 to-warm-orange/10 rounded-2xl p-8 border border-warm-green/30 max-w-4xl mx-auto mt-8">
            <p className="text-lg text-warm-brown leading-relaxed font-medium">
              By pairing light with daily routines, Lumytot gives toddlers a clear signal of what comes next—making mornings smoother, bedtimes calmer, and family life more predictable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SleepWakeIndicator;