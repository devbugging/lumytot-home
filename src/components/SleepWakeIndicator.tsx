import React from 'react';

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

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Light Cue Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Wake Up Card */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-warm-orange/20 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
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
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-warm-brown mb-3">Dim light means sleep</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Soft, gentle light helps the brain release melatonin, the hormone that makes us feel sleepy and ready for rest.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Summary Card */}
              <div className="bg-gradient-to-r from-warm-green/10 to-warm-orange/10 rounded-2xl p-8 border border-warm-green/30">
                <p className="text-lg text-warm-brown leading-relaxed font-medium">
                  By pairing light with daily routines, Lumytot gives toddlers a clear signal of what comes next—making mornings smoother, bedtimes calmer, and family life more predictable.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SleepWakeIndicator;