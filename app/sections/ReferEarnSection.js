import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import GradientButton from '../components/GradientButton';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const ReferEarnSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const phoneRef = useRef(null);
  const tokensRef = useRef([]);
  const subtextRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=2000', // ✅ extend scroll distance
          scrub: 2, // ✅ smoother, slower sync
          pin: true, // ✅ keep section fixed until animation completes
          markers: false,
        },
      });
      tl.fromTo(
        headingRef.current,
        { x: -300, opacity: 0 },
        { x: 0, opacity: 1, duration: 2, ease: 'power2.out' }
      );
      // Phone zoom in
      // Phone zoom in
      tl.to(phoneRef.current, {
        scale: 1.2,
        duration: 2,
        ease: 'power2.out',
        transformOrigin: 'top center', // ✅ grows downward, won't overlap button
      });
      tl.to(phoneRef.current, { scale: 1.2, duration: 2, ease: 'power2.out' });

      // Subtext + button fade in
      tl.fromTo(
        subtextRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );

      // Left & Right Cards slide in
      tl.fromTo(
        leftCardRef.current,
        { x: -150, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power2.out' },
        '-=0.5'
      );
      tl.fromTo(
        rightCardRef.current,
        { x: 150, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power2.out' },
        '-=0.8'
      );

      // Phone zoom out
      tl.to(phoneRef.current, { scale: 1, duration: 1, ease: 'power2.out' });

      // Tokens floating animation
      tokensRef.current.forEach((token, i) => {
        gsap.to(token, {
          y: '-=20',
          repeat: -1,
          yoyo: true,
          duration: 4 + i,
          ease: 'sine.inOut',
        });
      });
    },
    { scope: sectionRef } // ✅ handles cleanup automatically
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen pt-[120px] pb-[1px]
   bg-lightdark text-white flex flex-col items-center justify-center overflow-hidden px-4 z-20"
    >
      {/* Background */}
      <Image
        src="/assets/refer-bg.png"
        alt="Background Shadow"
        width={1728}
        height={1117}
        className="absolute inset-0 w-full h-full"
      />

      {/* Heading */}
      <h2
        ref={headingRef}
        className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-[900] font-extrafett mb-6 leading-tight text-center"
      >
        Refer And{' '}
        <span className="bg-gradient-to-r from-[#7928D2] via-[#399FE9] to-[#14F195] bg-clip-text text-transparent">
          Earn
        </span>
      </h2>

      {/* Subtext + Button */}
      {/* Subtext + Button */}
      <div
        ref={subtextRef}
        className="relative z-10 flex flex-col items-center justify-center gap-4 mb-24 opacity-0 px-4 sm:px-6 text-center"
      >
        <p className="text-gray-300 font-kraeftig text-lg sm:text-xl md:text-2xl max-w-full sm:max-w-xl">
          Sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <GradientButton
          label="Get Link"
          onClick={() => alert('Pressed!')}
          className="px-6 sm:px-8 py-2 sm:py-3"
        />
      </div>

      {/* Phone + Cards */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 w-full overflow-visible">
        {/* Left Card */}
        <div
          ref={leftCardRef}
          className="bg-black/60 rounded-lg p-6 sm:p-8 md:p-10 w-full sm:w-64 md:w-72 text-left opacity-0"
        >
          <h3 className="text-xl sm:text-2xl md:text-[28px] font-extrafett mb-2">
            Refer
          </h3>
          <p className="text-gray-400 text-sm sm:text-base md:text-[18px] font-buch">
            Excepteur sint occaecat cupidatat non proident,
          </p>
        </div>

        {/* Phone */}
        <div className="relative w-64 sm:w-80 md:w-[400px] z-20" ref={phoneRef}>
          <Image
            src="/assets/refer-phone.png"
            alt="Phone with Hand"
            width={2472}
            height={4096}
            className="w-full h-auto relative z-10"
          />
          <Image
            ref={(el) => (tokensRef.current[0] = el)}
            src="/assets/token.png"
            alt="Token"
            width={197}
            height={197}
            className="absolute left-[-10%] top-[75%]"
          />
          <Image
            ref={(el) => (tokensRef.current[1] = el)}
            src="/assets/token.png"
            alt="Token"
            width={197}
            height={197}
            className="absolute right-[-10%] top-[55%]"
          />
        </div>

        {/* Right Card */}
        <div
          ref={rightCardRef}
          className="bg-black/60 rounded-lg p-6 sm:p-8 md:p-10 w-full sm:w-64 md:w-72 text-left opacity-0"
        >
          <h3 className="text-xl sm:text-2xl md:text-[28px] font-extrafett mb-2">
            Earn
          </h3>
          <p className="text-gray-400 text-sm sm:text-base md:text-[18px] font-buch">
            Excepteur sint occaecat cupidatat non proident,
          </p>
        </div>
      </div>
    </section>
  );
};
