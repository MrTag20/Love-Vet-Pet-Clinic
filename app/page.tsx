'use client';

import React, { useState } from 'react';
import { SideOpeningIntro } from '@/components/ui/SideOpeningIntro';
import { Navbar } from '@/components/sections/Navbar';
import { ScrollFrameHero } from '@/components/hero/ScrollFrameHero';
import { QuickCategoryStrip } from '@/components/sections/QuickCategoryStrip';
import { PromoStrip } from '@/components/sections/PromoStrip';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { FeaturedProductsSection } from '@/components/sections/FeaturedProductsSection';
import { DoctorSection } from '@/components/sections/DoctorSection';
import { AppointmentSection } from '@/components/sections/AppointmentSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { TrustBadgeStrip } from '@/components/sections/TrustBadgeStrip';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  const [cartCount, setCartCount] = useState<number>(2);
  const [isHeroComplete, setIsHeroComplete] = useState<boolean>(false);
  const [introFinished, setIntroFinished] = useState<boolean>(false);

  const handleAddToCart = (product: any) => {
    setCartCount((prev) => prev + 1);
  };

  const handleBookWithDoctor = (doctorName: string) => {
    const appointmentSection = document.getElementById('appointment');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Automatic Side-Opening Intro Animation on page open/reload */}
      <SideOpeningIntro
        companyName="Love Vet"
        tagline="Compassionate Care & Advanced Surgery"
      />

      <main className="min-h-screen bg-[#F3EEE1] text-[#1E2A22] selection:bg-[#D4A017]/30 selection:text-[#1D3424] flex flex-col overflow-x-clip">
        {/* 1. Floating Sticky Navbar (Pops down ONLY after finishing all hero frames) */}
        <Navbar
          cartCount={cartCount}
          visible={isHeroComplete}
          onOpenCart={() => {
            document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Hero Section with Scroll-Driven Frame Animation */}
        <ScrollFrameHero
          frameCount={240}
          basePath="/framesimg/ezgif-frame-"
          fileExtension=".jpg"
          onCompleteChange={(complete) => {
            setIsHeroComplete(complete);
          }}
          onBookClick={() => {
            document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onServicesClick={() => {
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Quick Category Strip */}
        <QuickCategoryStrip
          onSelectCategory={(category) => {
            console.log('Category selected:', category);
          }}
        />

        {/* 4. Promo Strip (10% off, 24x7 Emergency, Home Sample Collection) */}
        <PromoStrip />

        {/* 5. Our Services Section (Placed BEFORE Featured Products) */}
        <ServicesSection />

        {/* 6. Why Us / Certifications & Surgery Section */}
        <WhyUsSection />

        {/* 7. Featured Products Section */}
        <FeaturedProductsSection onAddToCart={handleAddToCart} />

        {/* 8. Our Specialized Doctor Section */}
        <DoctorSection onBookWithDoctor={handleBookWithDoctor} />

        {/* 9. Book an Appointment Section (2-Column Form with Zod Validation) */}
        <AppointmentSection />

        {/* 10. Testimonials Section (Quote Cards Carousel) */}
        <TestimonialsSection />

        {/* 11. Trust Badge Strip */}
        <TrustBadgeStrip />

        {/* 12. Footer with Dark Neumorphism */}
        <Footer />
      </main>
    </>
  );
}
