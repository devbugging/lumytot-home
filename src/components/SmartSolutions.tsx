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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Sun/Moon Light Indicator */}
          <div className="relative">
            <div className="w-80 h-96 mx-auto bg-warm-cream rounded-t-full flex flex-col items-center justify-between overflow-hidden">
              <div className="w-full h-48 rounded-t-full overflow-hidden bg-white">
                <img 
                  src="/lovable-uploads/2a88ee1a-9c82-4a4e-a708-68496056eab9.png"
                  alt="Mother and child enjoying Lumytot together"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Sun/Moon Light Indicator
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A gentle dimmable light that keeps the room calm while teaching your child when to sleep and wake.
                </p>
              </div>
            </div>
          </div>

          {/* Sleep Tips and Reminders */}
          <div className="relative">
            <div className="w-80 h-96 mx-auto bg-gradient-to-br from-purple-100 to-blue-100 rounded-t-full flex flex-col items-center justify-between overflow-hidden">
              <div className="w-full h-48 rounded-t-full overflow-hidden bg-white">
                <img 
                  src="/lovable-uploads/4429646c-d357-4686-9995-105bc97b2ef7.png"
                  alt="Lumytot app showing sleep tips and reminders"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Sleep Tips and Reminders
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Helpful suggestions and wind-down reminders to establish a calming bedtime routine for your child.
                </p>
              </div>
            </div>
          </div>

          {/* Timers and Lights */}
          <div className="relative">
            <div className="w-80 h-96 mx-auto bg-gradient-to-br from-orange-100 to-amber-100 rounded-t-full flex flex-col items-center justify-between overflow-hidden">
              <div className="w-full h-48 rounded-t-full overflow-hidden bg-white flex items-end justify-center pb-4">
                <div className="w-40 h-32 bg-slate-800 rounded-2xl flex items-center justify-center shadow-xl">
                  <div className="text-white text-center p-3">
                    <div className="w-10 h-5 bg-amber-400 rounded mx-auto mb-2 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs flex justify-between items-center">
                        <span>Night</span>
                        <div className="w-4 h-2 bg-amber-400 rounded-full"></div>
                      </div>
                      <div className="text-xs flex justify-between items-center">
                        <span>Timer</span>
                        <span>8PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Timers and Lights
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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