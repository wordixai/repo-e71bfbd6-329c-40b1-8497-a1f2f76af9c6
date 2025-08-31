import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "When does the pass launch?",
    answer: "Coming soon — we're visiting the colivings now and will open early access soon. Join our waitlist to be the first to know!"
  },
  {
    question: "Can I choose how long I stay?",
    answer: "Yes! You'll be able to choose flexible durations per space. The pass gives you credits to use across our network of colivings."
  },
  {
    question: "Is the Interrail pass included?",
    answer: "Yes, the Coliving Pass includes Interrail train travel for your route, making it easy to move sustainably between destinations."
  },
  {
    question: "What makes these colivings special?",
    answer: "Each coliving is carefully curated for its natural setting, community focus, and remote work friendliness. They're located in rural areas across Europe's most beautiful landscapes."
  },
  {
    question: "How do the live founder calls work?",
    answer: "As I visit each coliving, I'll host live video calls where you can ask questions directly to the founders and get insider insights about each location."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about The Flex Nomad Pass
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;