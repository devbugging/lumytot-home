import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhatIsLumytot from '@/components/WhatIsLumytot';
import SmartSolutions from '@/components/SmartSolutions';
import SleepWakeIndicator from '@/components/SleepWakeIndicator';
import Waitlist from '@/components/Waitlist';
import Benefits from '@/components/Benefits';
import ProductShowcase from '@/components/ProductShowcase';
import Testimonials from '@/components/Testimonials';
import InstagramBanner from '@/components/InstagramBanner';

import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhatIsLumytot />
      <SmartSolutions />
      <SleepWakeIndicator />
      <Waitlist />
      <Benefits />
      <ProductShowcase />
      <InstagramBanner />
      <Testimonials />
      
      <Footer />
    </div>
  );
};

export default Index;
