import React from 'react';
import { Sun, Moon } from 'lucide-react';

const SleepWakeIndicator = () => {
  return (
    <section id="what-is-lumytot" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-warm-brown">
            The clock your toddler understands
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No buttons. No noise. Just simple light cues that teach healthy sleep routines
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Image - Takes 2 columns */}
          <div className="lg:col-span-2">
            <img
              src="/lovable-uploads/f696386d-f583-48db-ad2a-c9022393e240.png"
              alt="Child sleeping peacefully with Lumytot nightlight on bedside table"
              className="w-full h-auto rounded-3xl"
            />
          </div>

          {/* Content - Takes 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            {/* Introduction */}
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Lumytot is a sleep clock designed for toddlers. With simple sun and moon lights, it shows children when it's time to sleep and when it's time to wake. Toddlers can't read the clock, but they instinctively respond to light.
              </p>
            </div>

            {/* Light Cues Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Sun Card */}
              <div className="bg-white rounded-3xl p-8 border-2 border-warm-green/10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4" style={{ backgroundColor: '#FFD166' }}>
                  <Sun className="w-8 h-8" style={{ color: '#F4A261' }} />
                </div>
                <h3 className="text-2xl font-bold text-warm-brown mb-3">Wake up</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bright light signals it's morning. Energy rises, and your toddler knows it's time to start the day.
                </p>
              </div>

              {/* Moon Card */}
              <div className="bg-white rounded-3xl p-8 border-2 border-warm-green/10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4" style={{ backgroundColor: '#738871' }}>
                  <Moon className="w-8 h-8" style={{ color: '#E9E7E5' }} />
                </div>
                <h3 className="text-2xl font-bold text-warm-brown mb-3">Sleep time</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Soft light helps release melatonin. The calming glow creates a peaceful atmosphere for rest.
                </p>
              </div>
            </div>

            {/* Bottom Summary */}
            <div>
              <p className="text-lg text-warm-brown font-medium leading-relaxed">
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