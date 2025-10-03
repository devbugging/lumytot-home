import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Mode = 'sun' | 'moon';

const InteractiveLightDemo = () => {
  const { t } = useTranslation();
  const [activeMode, setActiveMode] = useState<Mode>('moon');
  const [hasAutoSwitched, setHasAutoSwitched] = useState(false);

  useEffect(() => {
    if (!hasAutoSwitched) {
      const timer = setTimeout(() => {
        setActiveMode('sun');
        setHasAutoSwitched(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [hasAutoSwitched]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Interactive Icons */}
            <div className="flex items-center justify-center gap-8">
              {/* Sun Icon */}
              <button
                onClick={() => setActiveMode('sun')}
                className={`relative rounded-full transition-all duration-500 transform hover:scale-105 ${
                  activeMode === 'sun' ? 'scale-110 animate-pulse-gentle animate-glow-sun' : 'scale-100'
                }`}
                style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: activeMode === 'sun' ? '#FFD166' : '#E9E7E5',
                }}
              >
                <Sun
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                  size={60}
                  style={{
                    color: activeMode === 'sun' ? '#F4A261' : '#9CA3AF',
                  }}
                />
              </button>

              {/* Moon Icon */}
              <button
                onClick={() => setActiveMode('moon')}
                className={`relative rounded-full transition-all duration-500 transform hover:scale-105 ${
                  activeMode === 'moon' ? 'scale-110 animate-pulse-gentle animate-glow-moon' : 'scale-100'
                }`}
                style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: activeMode === 'moon' ? '#738871' : '#E9E7E5',
                }}
              >
                <Moon
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                  size={60}
                  style={{
                    color: activeMode === 'moon' ? '#E9E7E5' : '#9CA3AF',
                  }}
                />
              </button>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <div className="transition-all duration-500">
                {activeMode === 'sun' ? (
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-warm-brown">
                      {t('interactive.wakeup.title')}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {t('interactive.wakeup.description')}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-warm-brown">
                      {t('interactive.sleep.title')}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {t('interactive.sleep.description')}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground/70 italic">
                  {t('interactive.instruction')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveLightDemo;
