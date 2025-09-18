import React from 'react';
import childImage from '@/assets/child-sleeping.jpg';
const ProductDetails = () => {
  const specifications = [{
    label: "Dimensions & Materials",
    value: "Just the right size: 5\" × 5\" × 4\" of pure cuteness. Made from BPA-free, toddler-safe materials with a silky soft-touch finish — because style should always come with safety."
  }, {
    label: "Power & Connectivity",
    value: "USB-C charging with 7-day battery life, WiFi connectivity"
  }, {
    label: "Light Technology",
    value: "Advanced LED system with circadian rhythm optimization"
  }, {
    label: "Sound Features",
    value: "Built-in nature sounds, white noise, and lullabies"
  }];
  return <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <img src="/lovable-uploads/c3dde79d-95db-4e0f-98c8-32d282df36f9.png" alt="Child interacting with Lumytot device showing bright sun mode" className="w-full h-auto rounded-2xl shadow-soft" />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Everything you need to know about Lumy•tot.</h2>
            <p className="text-lg text-muted-foreground mt-4">Discover the thoughtful design and innovative features that make bedtime better for everyone.</p>
            
            <div className="space-y-6">
              
              <div>
                <h3 className="font-semibold text-foreground mb-3">Dimensions & Materials</h3>
                <div className="space-y-2">
                  <p className="text-muted-foreground leading-relaxed">
                    Just the right size: 5" × 5" × 4" of pure cuteness. Made from BPA-free, toddler-safe materials with a silky soft-touch finish — because style should always come with safety.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-3 mt-6">Light Brightness Levels</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    From dreamy dim to morning bright — with multiple glow levels and warm or cool tones, Lumytot lets you set the perfect vibe for sleepy moons or sunny wake-ups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProductDetails;