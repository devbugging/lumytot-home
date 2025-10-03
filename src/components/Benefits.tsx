import React from 'react';
import { Clock, Moon, Heart, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
const Benefits = () => {
  const { t } = useTranslation();
  const benefits = [{
    icon: <Clock className="w-6 h-6" style={{
      color: '#738871'
    }} />,
    title: t('benefits.cognitive.title'),
    description: t('benefits.cognitive.description')
  }, {
    icon: <Moon className="w-6 h-6" style={{
      color: '#738871'
    }} />,
    title: t('benefits.mood.title'),
    description: t('benefits.mood.description')
  }, {
    icon: <Heart className="w-6 h-6" style={{
      color: '#738871'
    }} />,
    title: t('benefits.immune.title'),
    description: t('benefits.immune.description')
  }, {
    icon: <TrendingUp className="w-6 h-6" style={{
      color: '#738871'
    }} />,
    title: t('benefits.growth.title'),
    description: t('benefits.growth.description')
  }];
  return <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('benefits.title')}</h2>
          <p className="text-custom max-w-2xl mx-auto">
            {t('benefits.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => <div key={index} className="bg-gradient-card rounded-xl p-6 text-center shadow-soft hover:shadow-warm transition-all duration-300 border border-border/50 group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-colors" style={{
            backgroundColor: '#73887120'
          }}>
                {benefit.icon}
              </div>
              
              <h3 className="font-semibold text-foreground mb-3 text-lg leading-tight">
                {benefit.title}
              </h3>

              <p className="text-muted-foreground text-base leading-relaxed">
                {benefit.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Benefits;