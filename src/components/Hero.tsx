import React from 'react';
import { Button } from '@/components/ui/button';
import { Mouse } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(/lovable-uploads/b99a08d5-58b3-4224-a6bc-b59f3a4195c9.png)`
    }}>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-full p-12 md:p-16 border border-white/20 shadow-2xl w-[600px] h-[600px] flex items-center justify-center">
          {/* Add a subtle inner glow */}
        <div className="absolute inset-4 bg-white/5 rounded-full blur-xl"></div>
        <div className="relative z-10 flex flex-col items-center h-full justify-center">
          <div className="mb-8 inline-block bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-medium border border-white/20 shadow-lg">
            {t('hero.badge')}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">{t('hero.title')}</h1>

          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed text-white">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToWaitlist} className="text-lg px-8 py-4 backdrop-blur-md border-white/30 text-white hover:opacity-80 transition-all duration-300" style={{
              backgroundColor: 'rgba(115, 136, 113, 0.4)'
            }}>
              {t('hero.cta')}
            </Button>
          </div>
          
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80">
            <div className="flex items-center gap-2 animate-bounce">
              <Mouse className="w-5 h-5" />
              <span className="text-sm font-medium">Scroll to explore</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;