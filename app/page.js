'use client';
import Link from 'next/link';
import HeroSection from './sections/HeroSection';
import React from 'react';
import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import HeroNav from './components/Navbar';
import { VideoSection } from './sections/VideoSection';
import FeatureCard from './sections/FeatureCard';
import { ReferEarnSection } from './sections/ReferEarnSection';
import { OurProductsSection } from './sections/OurProductsSection';
import BlogCommunityTabs from './sections/BlogCommunityTabs';
import Footer from './components/Footer';
import PreIconTransition from './sections/PreIconTransition';
import HowItWorksSection from './sections/HowItWorksSection'
import DownloadSection from './sections/mobileapp';
import FitnessAndIconsPage from './sections/mobilescroll';
import FixedFooter from './sections/fixedfooter';
import StokSpinSection from './sections/StokSpinSection';
import EmptySection from './sections/EmptySection';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Fitness from './sections/Fitness'

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navRef = useRef(null);
  useEffect(() => {
    // Navbar slide animation
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
    });
 
    // ✅ Only pin HeroSection
    ScrollTrigger.create({
      trigger: '.hero-panel',
      start: 'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
    });
  }, []);
  return (
    <div className="min-h-screen">
      <div className="relative min-h-screen">
        <div ref={navRef} className="fixed top-0 left-0 w-full z-[9999]">
          <HeroNav />
        </div>
        <HeroSection />
        <PreIconTransition />
        <HowItWorksSection/>
          <Fitness/>
         <DownloadSection />
         <StokSpinSection />
        <FeatureCard />
        <OurProductsSection />
        <ReferEarnSection />
        <BlogCommunityTabs />
        <Footer />
        <FixedFooter />
      </div>
    </div>
  );
}
 