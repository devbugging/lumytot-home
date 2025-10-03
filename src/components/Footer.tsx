import React from 'react';
import { Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const { t } = useTranslation();
  return <footer className="bg-warm-brown text-warm-cream py-16">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/lumytot-logo-2.png" alt="Lumytot Logo" className="h-8 w-auto" />

            </div>
            <p className="text-warm-cream/80 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>
          
          <div></div>
          
          <div>

            <ul className="space-y-2 text-sm text-warm-cream/80">
              <li><a href="#" className="hover:text-warm-cream transition-colors">{t('footer.helpCenter')}</a></li>
              <li><a href="#" className="hover:text-warm-cream transition-colors">{t('footer.sleepTips')}</a></li>
              <li><a href="#" className="hover:text-warm-cream transition-colors">{t('footer.contact')}</a></li>
              <li><a href="#" className="hover:text-warm-cream transition-colors">{t('footer.warranty')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-sm text-warm-cream/80">
              <li><a href="#" className="hover:text-warm-cream transition-colors">{t('footer.about')}</a></li>
              <li><a href="#" className="hover:text-warm-cream transition-colors">{t('footer.mission')}</a></li>
              <li><a href="#" className="hover:text-warm-cream transition-colors">{t('footer.privacy')}</a></li>
              <li><a href="#" className="hover:text-warm-cream transition-colors">{t('footer.terms')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-warm-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-warm-cream/60 text-sm">
              © 2025 Lumytot. {t('footer.rights')}
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/lumytot/" target="_blank" rel="noopener noreferrer" className="text-warm-cream/60 hover:text-warm-cream transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;