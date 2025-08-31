import { Check, Train, Home, Video, Mail, Users } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Coliving stays across Europe',
    description: 'Access to 15+ carefully curated rural colivings'
  },
  {
    icon: Train,
    title: 'Train travel with Interrail',
    description: 'Sustainable transportation between destinations included'
  },
  {
    icon: Video,
    title: 'Live calls with coliving founders',
    description: 'Join exclusive video sessions from each location'
  },
  {
    icon: Mail,
    title: 'Early access + special launch pricing',
    description: 'Be first to book with exclusive member discounts'
  },
  {
    icon: Users,
    title: 'A real nomad & remote work community',
    description: 'Connect with like-minded professionals and travelers'
  }
];

const WhatsIncluded = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">What's Included in the Pass</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for your European nomad adventure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="text-accent" size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start space-x-2 mb-2">
                      <Check className="text-accent flex-shrink-0 mt-1" size={16} />
                      <h3 className="font-semibold text-foreground">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;