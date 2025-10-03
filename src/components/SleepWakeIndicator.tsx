import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SleepWakeIndicator = () => {
  const { t } = useTranslation();
  return (
    <section id="what-is-lumytot" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-warm-brown">
            {t('whatIsLumytot.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('whatIsLumytot.subtitle')}
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div>
            <img
              src="/lovable-uploads/f696386d-f583-48db-ad2a-c9022393e240.png"
              alt="Child sleeping peacefully with Lumytot nightlight on bedside table"
              className="w-full h-auto rounded-3xl"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('whatIsLumytot.intro')}
              </p>
            </div>

            {/* Light Cues Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Sun Card */}
              <div className="bg-white rounded-3xl p-8 border-2 border-warm-green/10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: '#FFD166' }}>
                  <Sun className="w-8 h-8" style={{ color: '#F4A261' }} />
                </div>
                <h3 className="text-2xl font-bold text-warm-brown mb-3">{t('whatIsLumytot.sunTitle')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('whatIsLumytot.sunDesc')}
                </p>
              </div>

              {/* Moon Card */}
              <div className="bg-white rounded-3xl p-8 border-2 border-warm-green/10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: '#738871' }}>
                  <Moon className="w-8 h-8" style={{ color: '#E9E7E5' }} />
                </div>
                <h3 className="text-2xl font-bold text-warm-brown mb-3">{t('whatIsLumytot.moonTitle')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('whatIsLumytot.moonDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SleepWakeIndicator;