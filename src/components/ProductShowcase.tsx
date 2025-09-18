import React from 'react';
// import deviceImage from '@/assets/lumytot-device.jpg';

const ProductShowcase = () => {
  const features = ["Elegant Design Meets Daily Function", "Sleep cycle optimization technology", "Whisper-quiet operation", "Easy setup and maintenance"];
  return <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="inline-block px-4 py-2 rounded-full text-sm font-medium" style={{
            color: '#738871',
            backgroundColor: '#73887120'
          }}>RESEARCH & DESIGN</div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Created for Little Ones.
              <br />
              <span style={{ color: '#738871' }}>Designed for Real Life.</span>
            </h2>
            
            
            
            <p className="text-custom leading-relaxed">Toddler-Proof. Parent-Approved. Lumytot is made for curious hands and bedtime chaos: 
            <br /><span className="text-header-button">✓</span> No buttons to mash 
            <br /><span className="text-header-button">✓</span> No bright lights to overstimulate (fully adjustable brightness) 
            <br /><span className="text-header-button">✓</span> Just one glowing cue to make sleep routines easier (for everyone).
            </p>
            
            <p className="text-custom leading-relaxed">Elegant design meets everyday chaos. Lumytot blends smart sleep tech with whisper-quiet magic to help your little one rest better, and maybe even give you a break. It's super easy to set up, a breeze to maintain, and made to fit right into your family's beautifully messy routine.</p>
            
            
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
              <img src="/lovable-uploads/1a3bf8d1-3952-4b4d-8971-dd6a1801ddff.png" alt="Lumytot device displaying moon and stars on nightstand next to sleeping child" className="w-full h-auto rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProductShowcase;