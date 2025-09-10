import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhatIsLumynt from '@/components/WhatIsLumynt';
import Features from '@/components/Features';
import Waitlist from '@/components/Waitlist';
import Benefits from '@/components/Benefits';
import ProductShowcase from '@/components/ProductShowcase';
import Testimonials from '@/components/Testimonials';
import ProductDetails from '@/components/ProductDetails';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhatIsLumynt />
      <Features />
      <Waitlist />
      <Benefits />
      <ProductShowcase />
      <Testimonials />
      <ProductDetails />
      <Footer />
    </div>
  );
};

export default Index;
