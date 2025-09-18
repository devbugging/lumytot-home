import React from 'react';
import deviceImage from '@/assets/lumytot-device.jpg';
const WhatIsLumytot = () => {
  return <section id="what-is-lumytot" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <img src="/lovable-uploads/f696386d-f583-48db-ad2a-c9022393e240.png" alt="Child sleeping peacefully with Lumytot nightlight on bedside table" className="w-full h-auto rounded-2xl shadow-soft" />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">The clock your toddler understands.</h2>
            
            <p className="text-lg md:text-xl text-muted-foreground/80 font-medium">No buttons. No noise. Just one glowing light that teaches your child healthy sleep routines</p>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              
              <p>
                Lumytot is a sleep clock designed for toddlers. With simple sun and moon lights, it shows children when it's time to sleep and when it's time to wake. No noisy alarms or confusing buttons—just calm, clear cues that fit naturally into your child's routine. By making bedtime easy to understand, Lumytot helps kids settle faster, sleep longer, and wake up happier—while parents enjoy more peaceful nights.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>;
};
export default WhatIsLumytot;