import { ExternalLink, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ColivingMap = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Curated Colivings Across Europe</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are the curated colivings you'll have access to. Each space is community-driven, 
            nature-based, and remote worker friendly.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center relative">
            {/* Map placeholder with iframe */}
            <div className="absolute inset-0">
              <iframe
                src="https://www.pampam.city/p/ui4dN2sjl93Esf3c0Ct0?42.037751,-8.278714,3.57"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Coliving Map"
                className="rounded-2xl"
              />
            </div>
            
            {/* Fallback content */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Interactive Coliving Map
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Discover 15+ carefully selected colivings across Europe's most beautiful natural settings.
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-8 text-center">
            <Button variant="outline" className="btn-outline" asChild>
              <a 
                href="https://www.pampam.city/p/ui4dN2sjl93Esf3c0Ct0?42.037751,-8.278714,3.57" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Click here to open the full map
                <ExternalLink className="ml-2" size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColivingMap;