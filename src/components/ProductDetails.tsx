import React from 'react';
import childImage from '@/assets/child-sleeping.jpg';

const ProductDetails = () => {
  const specifications = [
    { label: "Dimensions & Materials", value: "Just the right size: 5\" × 5\" × 4\" of pure cuteness. Made from BPA-free, toddler-safe materials with a silky soft-touch finish — because style should always come with safety." },
    { label: "Power & Connectivity", value: "USB-C charging with 7-day battery life, WiFi connectivity" },
    { label: "Light Technology", value: "Advanced LED system with circadian rhythm optimization" },
    { label: "Sound Features", value: "Built-in nature sounds, white noise, and lullabies" }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="/lovable-uploads/6422a9c3-d6a4-4411-a930-92344931a381.png" 
              alt="Child playing with wooden toys next to Lumytot device"
              className="w-full h-auto rounded-2xl shadow-soft"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Details about the Lumytot
            </h2>
            
            <div className="space-y-6">
              
              <div>
                <h3 className="font-semibold text-foreground mb-3">✨ Dimensions & Materials</h3>
                <div className="space-y-2">
                  <p className="text-muted-foreground text-sm">
                    Just the right size: 5" × 5" × 4" of pure cuteness. Made from BPA-free, toddler-safe materials with a silky soft-touch finish — because style should always come with safety.
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

export default ProductDetails;