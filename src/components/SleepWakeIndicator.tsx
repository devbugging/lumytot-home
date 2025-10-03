import React from 'react';
import { Sun, Moon } from 'lucide-react';

const SleepWakeIndicator = () => {
  return (
    <section id="what-is-lumytot" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-warm-brown">
            The clock your toddler understands
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground/80 font-medium max-w-3xl mx-auto">
            No buttons. No noise. Just simple light cues that teach healthy sleep routines
          </p>
        </div>

        {/* Main Content - Image and Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <div>
            <img
              src="/lovable-uploads/f696386d-f583-48db-ad2a-c9022393e240.png"
              alt="Child sleeping peacefully with Lumytot nightlight on bedside table"
              className="w-full h-auto rounded-2xl shadow-soft"
            />
          </div>

          {/* Right - Content Cards */}
          <div className="space-y-5">
            {/* Introduction Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-warm-green/20 shadow-lg">
              <p className="text-muted-foreground leading-relaxed mb-3">
                Lumytot is a sleep clock designed for toddlers. With simple sun and moon lights, it shows children when it's time to sleep and when it's time to wake.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Toddlers can't read the clock, but they instinctively respond to light. Our bodies follow a natural circadian rhythm, guided by changes in light and darkness.
              </p>
            </div>

            {/* Wake Up Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-warm-orange/20 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#738871' }}>
                  <Sun className="w-6 h-6" style={{ color: '#E9E7E5' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-warm-brown mb-2">Sunlight means wake up</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Bright light signals to the brain that it's morning. Energy levels rise, and the body is ready to start the day. When the sun lights up, your toddler knows it's okay to get out of bed.
                  </p>
                </div>
              </div>
            </div>

            {/* Sleep Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-warm-brown/20 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#738871' }}>
                  <Moon className="w-6 h-6" style={{ color: '#E9E7E5' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-warm-brown mb-2">Dim light means sleep</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Soft, gentle light helps the brain release melatonin, the hormone that makes us feel sleepy and ready for rest. The moon's calming glow creates a peaceful atmosphere for bedtime.
                  </p>
                </div>
              </div>
            </div>

            {/* Summary Card */}
            <div className="rounded-2xl p-6 border-2 border-warm-green/30" style={{ backgroundColor: '#E9E7E5' }}>
              <p className="text-custom leading-relaxed font-medium text-sm">
                By pairing light with daily routines, Lumytot gives toddlers a clear signal of what comes next—making mornings smoother, bedtimes calmer, and family life more predictable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SleepWakeIndicator;