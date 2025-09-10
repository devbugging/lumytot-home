import React from 'react';
import deviceImage from '@/assets/lumynt-device.jpg';

const WhatIsLumynt = () => {
  return (
    <section id="what-is-lumynt" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={deviceImage} 
              alt="Lumynt smart nightlight device"
              className="w-full h-auto rounded-2xl shadow-soft"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What is Lumynt?
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Lumynt is an innovative smart sleep solution designed specifically for toddlers and young children. 
                Our scientifically-backed nightlight creates the optimal sleep environment through carefully calibrated 
                light therapy and soothing sounds.
              </p>
              
              <p>
                Unlike traditional nightlights, Lumynt adapts to your child's natural sleep cycle, gradually dimming 
                as bedtime approaches and providing gentle wake-up lighting in the morning. The result? Better sleep 
                for your little one and more peaceful nights for the whole family.
              </p>
              
              <p>
                Developed in collaboration with pediatric sleep specialists and child psychologists, Lumynt combines 
                cutting-edge technology with beautiful, child-friendly design that fits seamlessly into any nursery 
                or bedroom.
              </p>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-warm-orange rounded-full border-2 border-background"></div>
                <div className="w-8 h-8 bg-warm-peach rounded-full border-2 border-background"></div>
                <div className="w-8 h-8 bg-accent rounded-full border-2 border-background"></div>
              </div>
              <span className="text-sm text-muted-foreground">Trusted by 500+ families</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsLumynt;