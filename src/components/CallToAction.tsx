import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Mail } from 'lucide-react';

const CallToAction = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="section-title">Join the Waitlist for Early Access</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Get notified when we launch and join me for live video calls from the colivings 
          as I visit — ask your questions directly.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-xl border border-border max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-14 text-lg"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="btn-hero h-14 whitespace-nowrap"
              >
                Join the Waitlist
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </form>
          
          <p className="text-sm text-muted-foreground mt-4">
            I'll send you early access and links to live calls from each coliving I visit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;