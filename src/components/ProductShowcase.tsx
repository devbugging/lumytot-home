import React from 'react';
// import deviceImage from '@/assets/lumytot-device.jpg';

const ProductShowcase = () => {
  const features = ["Elegant Design Meets Daily Function", "Sleep cycle optimization technology", "Whisper-quiet operation", "Easy setup and maintenance"];
  return <section className="py-20" style={{ backgroundColor: '#738871' }}>
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="inline-block px-4 py-2 rounded-full text-sm font-medium" style={{
            color: '#738871',
            backgroundColor: '#E9E7E5'
          }}>RESEARCH & DESIGN</div>

            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#E9E7E5' }}>
              Built for Toddlers.
              <br />
              <span style={{
              color: '#FFD166'
            }}>Simplified for Parents.</span>
            </h2>



            <p className="leading-relaxed" style={{ color: '#E9E7E5' }}>Toddler-Proof. Parent-Approved. Lumytot is made for curious hands and bedtime chaos:
            <br /><span style={{ color: '#FFD166' }}>✓</span> No buttons to mash or break
            <br /><span style={{ color: '#FFD166' }}>✓</span> Adjustable brightness that won't overstimulate
            <br /><span style={{ color: '#FFD166' }}>✓</span> One clear light cue toddlers instantly understand
            <br /><span style={{ color: '#FFD166' }}>✓</span> All controlled in the app — easy for parents
            </p>

            <p className="leading-relaxed" style={{ color: '#E9E7E5' }}>Lumytot blends smart sleep tech with simple, child-friendly design. Is's quick to set up, and effortless to use. With Lumy•tot bedtime routines become calmer, clearer, and easier  for the whole family.</p>


          </div>

          <div className="order-1 lg:order-2 flex items-center justify-center">
            <div className="relative overflow-hidden rounded-xl w-4/5 h-96">
              <img src="/lovable-uploads/1a3bf8d1-3952-4b4d-8971-dd6a1801ddff.png" alt="Lumytot device displaying moon and stars on nightstand next to sleeping child" className="w-full h-auto object-cover" style={{transform: "translateY(-15%)"}} />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProductShowcase;
