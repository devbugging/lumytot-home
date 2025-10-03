import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

type Mode = 'sun' | 'moon';

const InteractiveLightDemo = () => {
  const [activeMode, setActiveMode] = useState<Mode>('moon');

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
                  activeMode === 'sun' ? 'scale-110' : 'scale-100'
                }`}
                style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: activeMode === 'sun' ? '#FFD166' : '#E9E7E5',
                  boxShadow: activeMode === 'sun'
                    ? '0 0 40px rgba(255, 209, 102, 0.6), 0 0 80px rgba(255, 209, 102, 0.3)'
                    : '0 4px 6px rgba(0, 0, 0, 0.1)',
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
                  activeMode === 'moon' ? 'scale-110' : 'scale-100'
                }`}
                style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: activeMode === 'moon' ? '#738871' : '#E9E7E5',
                  boxShadow: activeMode === 'moon'
                    ? '0 0 40px rgba(115, 136, 113, 0.6), 0 0 80px rgba(115, 136, 113, 0.3)'
                    : '0 4px 6px rgba(0, 0, 0, 0.1)',
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
                      Wake-up time
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      When the sun lights up, your toddler knows it's time to start the day. The warm, gentle glow signals that morning has arrived, helping them understand when it's okay to get out of bed. This simple visual cue builds confidence and independence, teaching healthy wake-up habits without confusion.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-warm-brown">
                      Night time to sleep
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      When the moon glows softly, it's a gentle reminder that bedtime is here. The calming light creates a peaceful atmosphere, helping your child wind down naturally. By consistently seeing the moon at night, toddlers learn to associate this visual cue with rest, making bedtime routines smoother and more predictable.
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground/70 italic">
                  Click on the sun or moon to see how Lumytot guides your child's day
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
