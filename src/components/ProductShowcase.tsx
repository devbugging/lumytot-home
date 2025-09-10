import React from 'react';
// import deviceImage from '@/assets/lumytot-device.jpg';

const ProductShowcase = () => {
  const features = [
    "Elegant Design Meets Daily Function",
    "Sleep cycle optimization technology", 
    "Child-safe materials and construction",
    "Whisper-quiet operation",
    "Easy setup and maintenance"
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="inline-block px-4 py-2 rounded-full text-sm font-medium" style={{color: '#7562A4', backgroundColor: '#7562A420'}}>
              RESEARCH & DESIGN
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Created for Little Ones.
              <br />
              <span className="text-primary">Designed for Real Life.</span>
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Every aspect of Lumytot has been carefully crafted with both children and parents in mind. 
              From our intuitive controls to our scientifically-backed sleep programs, we've created 
              a product that truly makes bedtime easier for the whole family.
            </p>
            
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <h3 className="font-semibold text-foreground mb-3">Elegant Design Meets Daily Function</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We've combined beautiful aesthetics with practical functionality. Lumytot seamlessly integrates 
                into any nursery or bedroom while providing the advanced sleep support your child needs.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-glow border border-border/50">
                <img 
                  src="/lovable-uploads/c3dde79d-95db-4e0f-98c8-32d282df36f9.png" 
                  alt="Child interacting with Lumytot device showing bright sun mode"
                  className="w-full h-auto rounded-xl"
                />
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Sleep Quality</span>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-2 h-2 bg-primary rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Ease of Use</span>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-2 h-2 bg-primary rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Child Safety</span>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-2 h-2 bg-primary rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;