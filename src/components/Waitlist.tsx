import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Baby } from 'lucide-react';
import { useTranslation } from 'react-i18next';
const Waitlist = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);

    try {
      // Get IP and country information
      let ipAddress = '';
      let country = '';

      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        ipAddress = ipData.ip;

        // Get country from IP
        const geoResponse = await fetch(`https://ipapi.co/${ipAddress}/json/`);
        const geoData = await geoResponse.json();
        country = geoData.country_name || '';
      } catch (geoError) {
        console.error('Error fetching geo data:', geoError);
      }

      const response = await fetch('https://api.freewaitlists.com/waitlists/cmgkrif7z0012qq01k4ex7b96', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          meta: {
            name: '',
            source: 'landing-page',
            ip: ipAddress,
            country: country
          }
        })
      });

      const result = await response.json();
      console.log(result);

      setIsLoading(false);
      setEmail('');
      toast({
        title: t('waitlist.successTitle'),
        description: t('waitlist.successDesc')
      });
    } catch (error) {
      console.error('Error joining waitlist:', error);
      setIsLoading(false);
      toast({
        title: t('waitlist.errorTitle'),
        description: t('waitlist.errorDesc'),
        variant: "destructive"
      });
    }
  };
  return <section id="waitlist" className="py-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-0 items-center border border-border rounded-2xl overflow-hidden">
          {/* Left side - Family image */}
          <div className="order-2 lg:order-1 h-full">
            <img src="/lovable-uploads/1d06827d-ed94-4c43-bdf7-e2cd2275acee.png" alt="Happy family with toddler using Lumytot device" className="w-full h-full object-cover rounded-l-2xl" />
          </div>
          
          {/* Right side - Waitlist form */}
          <div className="order-1 lg:order-2 space-y-6 bg-waitlist-bg p-8 lg:p-12 lg:pl-20 h-full flex flex-col justify-center rounded-r-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t('waitlist.title')}</h2>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input type="email" placeholder={t('waitlist.placeholder')} value={email} onChange={e => setEmail(e.target.value)} className="flex-1 h-12 px-4 bg-background border-border/50 focus:border-primary transition-colors" required />
              <Button type="submit" variant="warm" size="lg" disabled={isLoading} className="h-12 px-8 whitespace-nowrap" style={{
              backgroundColor: '#738871'
            }}>
                {isLoading ? t('waitlist.buttonLoading') : t('waitlist.button')}
              </Button>
            </form>

            <p className="text-custom leading-relaxed">{t('waitlist.description')}</p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Baby className="w-5 h-5" style={{ color: '#738871' }} />
              <span className="text-custom">{t('waitlist.disclaimer')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Waitlist;