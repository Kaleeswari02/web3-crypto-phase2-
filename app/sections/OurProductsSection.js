import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const OurProductsSection = () => {
  const containerRef = useRef(null);
  const slideRefs = useRef([]);

  const products = [
    {
      title: 'S-Walking Pad',
      bigTitle: 'S-WALKING PAD',
      subtitle: 'Transform any space into your fitness <br/> zone with the compact, foldable <br/> S-Walking Pad.',
      leftImg: '/assets/walkingpad-cover.png',
      rightVideo: '/assets/products-video.mp4',
      smallText:'Transform any space into your fitness zone with the compact, foldable S-Walking Pad. Enjoy a quiet, low-impact walk at home or in the office, anytime.'
    },
    {
      title: 'Treadmill',
      bigTitle: 'TREADMILL',
      subtitle: 'Push your limits with the high-performance Treadmill.',
      leftImg: '/assets/treadmill-cover.png',
      rightVideo: '/assets/products-video.mp4',
       smallText:'Push your limits with the high-performance Treadmill. Perfect for walking, jogging, or running, it brings the gym experience to your home.'
    },
    {
      title: 'S-Bike',
      bigTitle: 'S-BIKE',
      subtitle: 'Get fit with the sleek S-Bike.',
      leftImg: '/assets/sbike-cover.png',
      rightVideo: '/assets/products-video.mp4',
       smallText:'Get fit with the sleek S-Bike. Enjoy a low-impact, full-body workout that fits seamlessly into your daily routine.'
    },
  ];

  useGSAP(
    () => {
      const slides = slideRefs.current;

      // initial states
      gsap.set(slides, { autoAlpha: 0, y: 50, scale: 0.95 });
      if (slides[0]) gsap.set(slides[0], { autoAlpha: 1, y: 0, scale: 1 });

      // prepare inner elements and letters
      slides.forEach((slide, idx) => {
        if (!slide) return;
        const leftCard = slide.querySelector('.left-card');
        const rightCard = slide.querySelector('.right-card');
        const centerHeading = slide.querySelector('.center-heading');

        if (leftCard) gsap.set(leftCard, { y: 100, opacity: 0 });
        if (rightCard) gsap.set(rightCard, { y: -100, opacity: 0 });

        // set every .letter inside centerHeading to initial rotated state
        if (centerHeading) {
          const letters = centerHeading.querySelectorAll('.letter');
          if (letters.length) {
            gsap.set(letters, {
              rotationX: -85,
              transformOrigin: 'bottom',
              autoAlpha: 0,
              backfaceVisibility: 'hidden',
            });
          } else {
            gsap.set(centerHeading, { y: 20, opacity: 0 });
          }
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=400%',
          scrub: 0.7,
          pin: true,
          snap: {
            snapTo: [0, 0.33, 0.66, 1],
            duration: { min: 0.3, max: 0.5 },
          },
        },
      });

      slides.forEach((slide, i) => {
        if (i === 0) return; // slide 0 is landing grid

        const sectionProgress = (i - 1) / products.length;
        const timePos = sectionProgress * 4;

        // hide previous
        tl.to(
          slides[i - 1],
          {
            autoAlpha: 0,
            y: -40,
            scale: 0.98,
            duration: 0.6,
            ease: 'power1.inOut',
          },
          timePos
        );

        // show current
        tl.fromTo(
          slides[i],
          { autoAlpha: 0, y: 40, scale: 0.98 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, ease: 'power1.inOut' },
          timePos + 0.3
        );

        // animate product details
        const leftCard = slide.querySelector('.left-card');
        const rightCard = slide.querySelector('.right-card');
        const centerHeading = slide.querySelector('.center-heading');

        // LETTER-BASED reveal for center title (rotateX wake-up)
        if (centerHeading) {
          const letters = Array.from(centerHeading.querySelectorAll('.letter'));
          if (letters.length) {
            // add letter animation to the same timeline so it syncs with slide timing
            tl.to(
              letters,
              {
                rotationX: 0,
                autoAlpha: 1,
                duration: 0.6,
                ease: 'power1.out',
                stagger: 0.04,
                transformOrigin: 'bottom',
              },
              timePos + 0.6
            );
          } else {
            tl.to(
              centerHeading,
              { y: 0, opacity: 1, duration: 0.6, ease: 'power1.out' },
              timePos + 0.6
            );
          }
        }

        if (leftCard)
          tl.to(
            leftCard,
            { y: 0, opacity: 1, duration: 0.6, ease: 'power1.out' },
            timePos + 0.6
          );
        if (rightCard)
          tl.to(
            rightCard,
            { y: 0, opacity: 1, duration: 0.6, ease: 'power1.out' },
            timePos + 0.6
          );
      });
    },
    { scope: containerRef }
  );

  // helper to render letters (keeps spaces as non-breaking spaces)
  const renderLetters = (text) =>
    text.split('').map((ch, idx) => (
      <span
        key={idx}
        className={`letter ${ch === ' ' ? 'space' : ''}`}
        aria-hidden
      >
        {ch === ' ' ? '\u00A0' : ch}
      </span>
    ));

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-lightdark overflow-hidden"
    >
    {/* -------------------------------------------------- */}
{/* SLIDE 0 — Your inserted background/title block     */}
{/* -------------------------------------------------- */}
<div
  ref={(el) => (slideRefs.current[0] = el)}
  className="absolute inset-0 flex flex-col items-center justify-center"
>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
    <img
      src="/assets/product-bg-textimg.png"
      alt="background"
      className="w-auto h-auto max-w-[800px] max-h-[400px]"
    />

    <div className="text-center mb-16 relative z-10">
      <h2 className="text-white text-6xl sm:text-7xl font-halbfett mb-4">
        Our
      </h2>
      <h2 className="text-white text-6xl sm:text-7xl font-halbfett flex items-center justify-center gap-2">
        Web2
        <Image
          src="/assets/small-icon.png"
          width={48}
          height={48}
          alt="logo"
          className="inline-block"
        />
        Products
      </h2>
    </div>
  </div>
</div>

{/* -------------------------------------------------- */}
{/* SLIDE 1 — The product grid (old slide 0)           */}
{/* -------------------------------------------------- */}
<div
  ref={(el) => (slideRefs.current[1] = el)}
  className="absolute inset-0 flex flex-col items-center justify-center px-6"
>
  <div className="text-center mb-16 relative z-10">
    <h2 className="text-white text-6xl sm:text-7xl font-halbfett mb-4">
      Our
    </h2>
    <h2 className="text-white text-6xl sm:text-7xl font-halbfett flex items-center justify-center gap-2">
      Web2
      <Image
        src="/assets/small-icon.png"
        width={48}
        height={48}
        alt="logo"
        className="inline-block"
      />
      Products
    </h2>
  </div>

  <div className="relative w-full max-w-6xl flex justify-center">
    <Image
      src="/assets/product-bg-blur.png"
      alt="Cards Background"
      width={913}
      height={479}
      className="absolute bottom-0 left-0 w-auto object-contain pointer-events-none select-none z-0 mt-20"
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full relative z-10">
      {products.map((p, i) => (
        <div
          key={i}
          className="relative flex flex-col items-center overflow-hidden rounded-[20px] transform transition-transform duration-500 hover:scale-105"
        >
          <Image
            src={p.leftImg}
            alt={p.title}
            width={354}
            height={400}
            className="rounded-[20px]"
          />
          <div className="absolute bottom-4 w-full text-center px-6 py-4">
            <h3 className="text-white text-[18px] mb-2 font-halbfett">
              {p.title}
            </h3>
            <p className="text-white/90 text-[12px] font-buch line-clamp-4">
             {p.smallText}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

{/* -------------------------------------------------- */}
{/* SLIDES 2–4 — Product detail slides                 */}
{/* -------------------------------------------------- */}
{products.map((p, i) => (
  <div
    key={i}
    ref={(el) => (slideRefs.current[i + 2] = el)}  // shifted by +2
    className="absolute inset-0 flex items-center justify-center"
  >
    <div className="left-card absolute left-[5%] top-[40%] -translate-y-1/2 w-[240px] z-10">
      <Image
        src={p.leftImg}
        alt={p.title}
        width={354}
        height={400}
        className="w-full h-auto rounded-[20px]"
      />
      <div className="absolute bottom-3 left-0 w-full text-center px-4 py-2">
        <h3 className="text-white text-[18px] mb-1 font-halbfett">{p.title}</h3>
      </div>
    </div>

    <div className="center-heading text-center z-20">
      <h2 className="big-title text-white text-[110px] font-[900] leading-none font-extrafett">
        {renderLetters(p.bigTitle)}
      </h2>
      <span className="text-white text-[28px] font-kraeftig block mt-4"   
      dangerouslySetInnerHTML={{ __html: p.subtitle }}>
      </span>
    </div>

    <div className="right-card absolute right-[5%] top-1/2 -translate-y-1/2 w-[240px] h-[280px] z-10">
      <video
        src={p.rightVideo}
        poster={p.leftImg}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-[20px]"
      />
    </div>
  </div>
))}

    </div>
  );
};
