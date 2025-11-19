import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Challenge from '@/components/Challenge';
import Solution from '@/components/Solution';
import Proof from '@/components/Proof';
import Testimonials from '@/components/Testimonials';
import HowItWorks from '@/components/HowItWorks';
import WhyMatters from '@/components/WhyMatters';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Challenge />
      <Solution />
      <Proof />
      <Testimonials />
      <HowItWorks />
      <WhyMatters />
      <Footer />
    </>
  );
}

