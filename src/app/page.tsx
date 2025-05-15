import HeroCarousel from '@/components/sections/hero-carousel';
import ServicesSection from '@/components/sections/services-section';
import OpeningHoursSection from '@/components/sections/opening-hours-section';
import MembershipSection from '@/components/sections/membership-section';

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <ServicesSection />
      <OpeningHoursSection />
      <MembershipSection />
      <footer className="bg-foreground text-background py-8 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} TUFitness. By AraiMaiLuu Group</p>
        </div>
      </footer>
    </>
  );
}
