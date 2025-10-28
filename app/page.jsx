import BestSellers from '@/components/BestSellers';
import Contact from '@/components/Contact';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import PartnerLogos from '@/components/PartnerLogos';
import Product from '@/components/Product';
import Slogan from '@/components/Slogan';
import Stats from '@/components/Stats';
import Story from '@/components/Story';

export default function Home() {
  return (
    <div>
      <Hero />
      <PartnerLogos />
      <Product />
      <Slogan />
      <Features />
      <BestSellers />
      <Stats />
      <Story />
      <Contact />
    </div>
  );
}
