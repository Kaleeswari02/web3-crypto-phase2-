'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function FitnessAndIconsPage() {
  const containerRef = useRef(null);
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const iconsRef = useRef([]);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial mobile animation
      gsap.fromTo(
        '.mobile',
        { y: 1000, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Main timeline for section transitions
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%', // Extended scroll distance
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // First phase: Content slides in from left, mobile moves right
      mainTl
        .fromTo(
          '.content',
          { x: -1500, opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out', duration: 1 }
        )
        .to('.mobile', { x: 200, ease: 'power2.out', duration: 1 }, '<')
        // Second phase: First section fades out, second section fades in
        .to(
          firstSectionRef.current,
          {
            opacity: 0,
            scale: 0.8,
            ease: 'power2.inOut',
            duration: 1,
          },
          '+=0.5'
        )
        .fromTo(
          secondSectionRef.current,
          {
            opacity: 0,
            scale: 1.2,
            y: 100,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            ease: 'power2.out',
            duration: 1,
          },
          '<'
        )
        // Third phase: Icons animate in with stagger
        .fromTo(
          iconsRef.current,
          { y: 200, opacity: 0, scale: 0.5 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'back.out(1.7)',
          },
          '<+0.3'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const icons = [
    {
      id: 1,
      bgColor: '#28d1af',
      img: '/assets/Tap.webp',
      alt: 'Tap',
      title: 'Tap',
    },
    {
      id: 2,
      bgColor: '#ffffff',
      img: '/assets/move.webp',
      alt: 'Move',
      title: 'Move',
    },
    {
      id: 3,
      bgColor: '#7928D2',
      img: '/assets/earns.webp',
      alt: 'Earn',
      title: 'Earn',
    },
  ];

  const getDropStyle = (index, isHovered) => {
    const positions = [
      { x: -20, y: -290, angle: -45 },
      { x: 200, y: -100, angle: 27 },
      { x: 185, y: 200, angle: 98 },
      { x: -155, y: 230, angle: 160 },
      { x: -300, y: -190, angle: 250 },
    ];
    const angle = positions[index].angle;
    return {
      transform: isHovered
        ? `translate(${positions[index].x}px, ${positions[index].y}px) rotate(${angle + 90}deg) scale(1)`
        : `translate(${positions[index].x * 0.65}px, ${positions[index].y * 0.65}px) rotate(${angle + 90}deg) scale(0)`,
      transitionDelay: isHovered ? `${index * 50}ms` : '0ms',
    };
  };

  return (
    <div className="w-full">
      {/* Container that gets pinned */}
      <section
        ref={containerRef}
        className="relative h-[100vh] bg-[#1E1E1E] text-white overflow-hidden"
      >
        {/* First Section: Fitness App */}
        <div
          ref={firstSectionRef}
          className="absolute inset-0 h-full w-full flex items-center justify-center"
        >
          {/* Mobile image */}
          <div className="mobile relative z-10">
            <Image
              src="/assets/iPhone 16.webp"
              alt="Mobile App"
              width={500}
              height={755}
              className="w-[500px] drop-shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="content absolute left-0 px-48">
            <h1 className="text-5xl md:text-4xl font-bold leading-tight mb-6 mobile-anim-head">
              Revolutionizing Fitness
              <br />
              <span className="text-white">with </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14F195] via-[#399FE9] to-[#7928D2]">
                Blockchain Technology
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 mobile-anim-des">
              Designed for fitness enthusiasts who
              <br /> want to get more out of their workouts,
              <br /> our app rewards you with crypto every <br /> time you move.
            </p>
          </div>
        </div>

        {/* Second Section: Animated Icons */}
        <div
          ref={secondSectionRef}
          className="absolute inset-0 h-full w-full flex items-center justify-center p-8 opacity-0"
        >
          <div className="flex gap-16 items-center flex-wrap justify-center">
            {icons.map((item, iconIndex) => (
              <div
                key={item.id}
                ref={(el) => (iconsRef.current[iconIndex] = el)}
                className="relative opacity-0 transform"
                onMouseEnter={() => setHoveredIndex(iconIndex)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Main Icon Circle */}
                <div
                  tabIndex={0}
                  className={`relative w-80 h-80 rounded-full flex items-center justify-center cursor-pointer transform transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-white/30 ${
                    hoveredIndex === iconIndex ? 'scale-110' : 'scale-100'
                  }`}
                  style={{ backgroundColor: item.bgColor }}
                >
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={288}
                    height={288}
                    className={`object-contain opacity-90 transform transition-all duration-500 ease-out ${
                      hoveredIndex === iconIndex
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-5 opacity-0'
                    }`}
                  />
                </div>
                <p className="tmeSection text-white text-center mt-4 text-xl font-semibold">
                  {item.title}
                </p>

                {/* Bursting Drops */}
                <div className="absolute inset-0 pointer-events-none">
                  {[0, 1, 2, 3, 4].map((dropIndex) => (
                    <div
                      key={dropIndex}
                      className="absolute top-1/2 left-1/2 w-9 h-9 rounded-full movingdrop"
                      style={{
                        backgroundColor: item.bgColor,
                        marginLeft: '-18px',
                        marginTop: '-18px',
                        boxShadow: `0 0 15px ${item.bgColor}50`,
                        transition:
                          'transform 600ms cubic-bezier(0.2, 0, 0.2, 1), opacity 300ms ease-out',
                        ...getDropStyle(dropIndex, hoveredIndex === iconIndex),
                        ...(hoveredIndex === iconIndex
                          ? {
                              animation: `dropBurst 1s ${dropIndex * 80}ms forwards`,
                            }
                          : {
                              opacity: 0.3,
                              animation: `dropReturn 600ms ${dropIndex * 50}ms forwards`,
                            }),
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add some content after to allow for normal scrolling */}

      {/* <style jsx>{`
        @keyframes dropBurst {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(0);
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 0.4;
          }
        }

        @keyframes dropReturn {
          0% {
            opacity: 0.4;
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scale(0);
            opacity: 0;
          }
        }
      `}</style> */}
    </div>
  );
}
