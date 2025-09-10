import React from 'react';
import childImage from '@/assets/child-sleeping.jpg';

const ProductDetails = () => {
  const specifications = [
    { label: "Dimensions & Materials", value: "Compact 4 inch design made from child-safe, BPA-free materials" },
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
                <h3 className="font-semibold text-foreground mb-3">Specifications & Features</h3>
                <div className="space-y-4">
                  {specifications.map((spec, index) => (
                    <div key={index} className="border-b border-border/30 pb-3 last:border-b-0">
                      <div className="font-medium text-foreground text-sm mb-1">{spec.label}</div>
                      <div className="text-muted-foreground text-sm">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-3">In the Box</h3>
                <div className="space-y-2">
                  {[
                    "1x Lumytot Smart Nightlight",
                    "1x USB-C Charging Cable", 
                    "1x Quick Start Guide",
                    "1x Sleep Tips Booklet",
                    "Access to Lumytot Mobile App"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-card rounded-xl p-6 border border-border/50">
                <h3 className="font-semibold text-foreground mb-3">Safety & Certifications</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Lumytot meets all safety standards for children's products. CE marked, FCC approved, 
                  and tested by independent labs. Made with non-toxic, hypoallergenic materials safe for children 12+ months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;