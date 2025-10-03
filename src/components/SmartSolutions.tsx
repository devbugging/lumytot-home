import React from 'react';
import { useTranslation } from 'react-i18next';

const SmartSolutions = () => {
  const { t } = useTranslation();
  return <section className="py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <div className="text-sm text-custom mb-4 tracking-wider uppercase">
            {t('smartSolutions.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('smartSolutions.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t('smartSolutions.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start lg:grid-cols-[1fr_1fr_1fr] lg:max-w-none lg:mx-0">
          {/* Sun/Moon Light Indicator */}
          <div className="relative">
            <div className="w-full max-w-md h-[28rem] mx-auto bg-feature-card-bg rounded-t-full flex flex-col items-center justify-between overflow-hidden shadow-lg">
              <div className="w-full h-72 rounded-t-full overflow-hidden">
                <img src="/lovable-uploads/2a88ee1a-9c82-4a4e-a708-68496056eab9.png" alt="Mother and child enjoying Lumytot together" className="w-full h-full object-cover" />
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t('smartSolutions.sunMoon.title')}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed h-16">
                  {t('smartSolutions.sunMoon.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Sleep Tips and Reminders */}
          <div className="relative">
            <div className="w-full max-w-md h-[28rem] mx-auto bg-feature-card-bg rounded-t-full flex flex-col items-center justify-between overflow-hidden shadow-lg">
              <div className="w-full h-72 rounded-t-full overflow-hidden pt-8">
                <img src="/lovable-uploads/sleep-app-mockup.png" alt="Lumytot app showing sleep tips and reminders" className="w-full h-full object-cover" />
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t('smartSolutions.tips.title')}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed h-16">
                  {t('smartSolutions.tips.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Timers and Lights */}
          <div className="relative">
            <div className="w-full max-w-md h-[28rem] mx-auto bg-feature-card-bg rounded-t-full flex flex-col items-center justify-between overflow-hidden shadow-lg">
              <div className="w-full h-72 rounded-t-full overflow-hidden">
                <img src="/lovable-uploads/timer-schedule-mockup.png" alt="Hands holding phone with Lumytot timer and schedule interface" className="w-full h-full object-cover" />
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t('smartSolutions.schedules.title')}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed h-16">
                  {t('smartSolutions.schedules.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SmartSolutions;
