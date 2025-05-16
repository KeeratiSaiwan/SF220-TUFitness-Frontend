"use client";
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
    </>
  );
}
