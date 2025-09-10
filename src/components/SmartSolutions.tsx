import React from 'react';

const SmartSolutions = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-sm text-muted-foreground mb-4 tracking-wider uppercase">
            LUMYTOT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Smart Sleep Solutions for Growing Children
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Designed by parents for parents, Lumytot helps establish healthy sleep routines for your little ones.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Arched layout for the three features */}
          <div className="relative h-[600px] md:h-[500px]">
            
            {/* Left circle - Sun/Moon Light Indicator */}
            <div className="absolute left-0 top-16 md:top-8 text-center">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-6 rounded-full overflow-hidden bg-warm-cream">
                <img 
                  src="/lovable-uploads/3dbf7ede-0cb4-4785-b1c1-ea1cbfb8470d.png"
                  alt="Child interacting with Lumytot sun/moon indicator"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="max-w-xs">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  Sun/Moon Light Indicator
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  A gentle dimmable light that keeps the room calm while teaching your child when to sleep and wake.
                </p>
              </div>
            </div>

            {/* Center circle - Sleep Tips and Reminders (elevated) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 text-center">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                <div className="w-32 h-52 md:w-48 md:h-80 bg-slate-800 rounded-2xl flex items-center justify-center shadow-2xl">
                  <div className="text-white text-center p-4 md:p-6">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-amber-400 rounded-full mx-auto mb-3 md:mb-4"></div>
                    <div className="space-y-1 md:space-y-2">
                      <div className="h-1.5 md:h-2 bg-white/20 rounded w-full"></div>
                      <div className="h-1.5 md:h-2 bg-white/20 rounded w-3/4 mx-auto"></div>
                      <div className="h-1.5 md:h-2 bg-white/20 rounded w-1/2 mx-auto"></div>
                    </div>
                    <div className="mt-3 md:mt-4 text-xs">Sleep Tips & Reminders</div>
                  </div>
                </div>
              </div>
              <div className="max-w-xs">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  Sleep Tips and Reminders
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Helpful suggestions and wind-down reminders to establish a calming bedtime routine for your child.
                </p>
              </div>
            </div>

            {/* Right circle - Timers and Lights */}
            <div className="absolute right-0 top-16 md:top-8 text-center">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
                <div className="w-32 h-52 md:w-48 md:h-80 bg-slate-800 rounded-2xl flex items-center justify-center shadow-2xl">
                  <div className="text-white text-center p-4 md:p-6">
                    <div className="w-12 h-6 md:w-16 md:h-10 bg-amber-400 rounded mx-auto mb-3 md:mb-4 flex items-center justify-center">
                      <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs flex justify-between items-center">
                        <span>Night Mode</span>
                        <div className="w-6 h-3 md:w-8 md:h-4 bg-amber-400 rounded-full"></div>
                      </div>
                      <div className="text-xs flex justify-between items-center">
                        <span>Timer</span>
                        <span>8:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-xs">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  Timers and Lights
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Easily set day/night and nap times through our intuitive app, creating a consistent schedule for your child.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartSolutions;