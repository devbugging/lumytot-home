import React from 'react';
import deviceImage from '@/assets/lumytot-device.jpg';

const WhatIsLumytot = () => {
  return (
    <section id="what-is-lumytot" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="/lovable-uploads/f696386d-f583-48db-ad2a-c9022393e240.png" 
              alt="Child sleeping peacefully with Lumytot nightlight on bedside table"
              className="w-full h-auto rounded-2xl shadow-soft"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Innovative smart sleep solution for toddlers and young children
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              
              <p>
                Lumytot was born from a simple idea: helping toddlers understand sleep through light, routine, and gentle guidance. Blending playful design with science-backed tools, Lumytot offers calm, clarity, and comfort—for both kids and parents. With soft tones, rounded shapes, and thoughtful cues, every detail is designed to support better rest and brighter mornings.
              </p>
              
              <p>
                At the heart of Lumytot is the belief that routines can be magical. We create tools that are intuitive, beautiful, and functional—making bedtime less of a battle and more of a bonding ritual. With kindness, calm, and consistency, Lumytot helps families turn sleepy time into a joyful rhythm.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsLumytot;