'use client';

import React, { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import GradientButton from '../components/GradientButton';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const leftVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const rightVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const slides = [
  {
    video: '/assets/section-2-video.mp4',
    icon: '/assets/game-icon.png',
    title: 'Play Game and Earn Crypto',
    description:
      '1Play exciting mobile games and earn crypto as you go! Every move you make brings you closer to valuable rewards. Start playing today, track your progress, and watch your earnings grow with each game you complete!',
    bigText: 'Play',
    phone: '/assets/phone.png',
    buttons: [
      { label: 'Download App', action: () => alert('Download App - Slide 1') },
    ],
  },
  {
    video: '/assets/section-2-video.mp4',
    icon: '/assets/run-icon.png',
    title: 'Track Your Progress',
    description:
      '2Play exciting mobile games and earn crypto as you go! Every move you make brings you closer to valuable rewards. Start playing today, track your progress, and watch your earnings grow with each game you complete!',
    bigText: 'Run',
    phone: '/assets/phone.png',
    buttons: [
      { label: 'Track Steps', action: () => alert('Track Steps - Slide 2') },
    ],
  },
  {
    video: '/assets/section-2-video.mp4',
    icon: '/assets/suit-icon.png',
    title: 'Cash Out Rewards',
    description:
      '3Play exciting mobile games and earn crypto as you go! Every move you make brings you closer to valuable rewards. Start playing today, track your progress, and watch your earnings grow with each game you complete!',
    bigText: 'Earn',
    phone: '/assets/phone.png',
    buttons: [{ label: 'Withdraw', action: () => alert('Withdraw - Slide 3') }],
  },
];

export const VideoSection = () => {
  const sliderRef = useRef(null);
  const pinRef = useRef(null);

  useLayoutEffect(() => {
    if (!sliderRef.current) return;

    const totalSlides = slides.length;

    ScrollTrigger.create({
      trigger: pinRef.current, // ✅ only pin slider area
      start: 'top top',
      end: '+=' + window.innerHeight * totalSlides,
      scrub: true,
      pin: true,
      snap: 1 / (totalSlides - 1),
      onUpdate: (self) => {
        const progress = self.progress * (totalSlides - 1);
        sliderRef.current.slickGoTo(Math.round(progress));
      },
      onLeave: () => {
        ScrollTrigger.refresh();
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: false,
  };

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* ✅ only this slider is scroll-controlled */}
      <div ref={pinRef}>
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="relative min-h-screen !flex !items-center !justify-center"
            >
              {/* Background Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
              >
                <source src={slide.video} type="video/mp4" />
              </video>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/80 z-10"></div>

              {/* Top-left Shadow */}
              <Image
                src="/assets/left-shadow.png"
                alt="Shadow"
                width={671}
                height={646}
                className="absolute top-0 left-0 z-20 pointer-events-none"
              />

              {/* Section Content */}
              <section
                className="relative z-30 flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 
              md:px-16 lg:px-28 min-h-screen mt-[7rem] gap-6 md:gap-12"
              >
                {/* Left */}
                <motion.div
                  className="flex-1 flex flex-col justify-center max-w-sm md:max-w-md text-center md:text-left mb-24 md:mb-[250px]"
                  initial="hidden"
                  animate="visible"
                  variants={leftVariants}
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
                    <Image
                      src={slide.icon}
                      alt="Slide icon"
                      width={86} // required numeric value
                      height={86} // required numeric value
                      className="w-[86px] object-contain"
                    />
                    <div className="flex flex-col space-y-4">
                      <h2 className="text-[18px] sm:text-[20px] md:text-[20px] font-dreiviertelfett leading-snug">
                        {slide.title}
                      </h2>
                      <div className="flex space-x-2 justify-center md:justify-start">
                        <div className="w-3 h-3 rounded-sm bg-green-400"></div>
                        <div className="w-3 h-3 rounded-sm bg-blue-400"></div>
                        <div className="w-3 h-3 rounded-sm bg-purple"></div>
                      </div>
                      {/* Buttons */}
                      {slide.buttons.map((btn, bIdx) => (
                        <GradientButton
                          key={bIdx}
                          label={btn.label}
                          onClick={btn.action}
                          className="w-fit mx-auto md:mx-0"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Middle - Phone */}
                <div className="flex-[1] flex justify-center items-center">
                  <Image
                    src={slide.phone}
                    alt="Phone mockup"
                    width={386}
                    height={563}
                    className="w-[220px] sm:w-[280px] md:w-[360px] lg:w-[420px]  object-contain"
                  />
                </div>

                {/* Right */}
                <motion.div
                  className="flex-[0.8] flex flex-col justify-center max-w-md text-center md:text-left mt-12 md:mt-0"
                  initial="hidden"
                  animate="visible"
                  variants={rightVariants}
                >
                  <p className="text-[16px] sm:text-[18px] md:text-[20px] font-[700] font-dreiviertelfett mt-12 md:mt-16">
                    {slide.description}
                  </p>
                  <h1 className="ml-0 sm:ml-8 md:ml-[100px] text-[40px] sm:text-[60px] md:text-[120px] lg:text-[160px] xl:text-[180px] font-dreiviertelfett text-transparent stroke-text leading-none">
                    {slide.bigText}
                  </h1>
                </motion.div>
              </section>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
