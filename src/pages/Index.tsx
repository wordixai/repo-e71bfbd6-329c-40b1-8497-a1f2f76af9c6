import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import ColivingMap from '@/components/ColivingMap';
import WhatsIncluded from '@/components/WhatsIncluded';
import CallToAction from '@/components/CallToAction';
import FAQ from '@/components/FAQ';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <ColivingMap />
      <WhatsIncluded />
      <CallToAction />
      <FAQ />
    </div>
  );
};

export default Index;