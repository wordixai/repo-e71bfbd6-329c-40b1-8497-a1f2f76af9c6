import { Globe, Home, Train } from 'lucide-react';

const steps = [
  {
    icon: Globe,
    number: '1',
    title: 'Choose your 1 or 2-month journey',
    description: 'Select the length of your pass and pick from 15+ rural colivings across Europe: forest, mountains, beach & more.'
  },
  {
    icon: Home,
    number: '2', 
    title: 'Stay in community spaces',
    description: 'Use your Coliving Pass credits to live and work in inspiring, slow-living environments.'
  },
  {
    icon: Train,
    number: '3',
    title: 'Travel by train',
    description: 'Move sustainably across borders with your Interrail pass, included in the offer.'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your journey to sustainable nomadism in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="feature-icon mx-auto">
                    <IconComponent size={32} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;