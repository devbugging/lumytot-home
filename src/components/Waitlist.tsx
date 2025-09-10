import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setEmail('');
      toast({
        title: "You're on the list! 🎉",
        description: "We'll notify you when Lumytot is available. Welcome to the family!",
      });
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Limited Early Access
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Join the waiting list now
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Be among the first to experience Lumytot and give your child the gift of better sleep. 
              Early supporters receive exclusive benefits and special pricing.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-muted-foreground">Early bird pricing (save 30%)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-muted-foreground">Free shipping to your door</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-muted-foreground">Priority customer support</span>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 pt-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 px-4 bg-background border-border/50 focus:border-primary transition-colors"
                required
              />
              <Button 
                type="submit" 
                variant="warm" 
                size="lg"
                disabled={isLoading}
                className="h-12 px-8 whitespace-nowrap"
              >
                {isLoading ? 'Joining...' : 'Join Waitlist'}
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
          
          <div className="lg:flex justify-center">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-soft border border-border/50 max-w-md">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">👶</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Join Our Community</h3>
                <p className="text-muted-foreground text-sm">
                  Get sleep tips, parenting advice, and exclusive updates from our team of experts.
                </p>
                <div className="flex justify-center items-center gap-2 pt-2">
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-6 h-6 bg-warm-orange rounded-full border border-background"></div>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">500+ parents joined</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;