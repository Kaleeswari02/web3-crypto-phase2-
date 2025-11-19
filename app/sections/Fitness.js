'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Fitness() {
  const headingRef = useRef(null);
  const buttonsRef = useRef(null);
  const mobileButtonsRef = useRef(null);
  const firstImageRef = useRef(null);
  const secondImageRef = useRef(null);
  const thirdImageRef = useRef(null);
  const mobileImageRef = useRef(null);

  // State for mobile image carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const mobileImages = [
    'assets/fitness-img1.png',
    'assets/fitness-img2.png',
    'assets/fitness-img3.png',
  ];

  useEffect(() => {
    // Create a timeline for coordinated animations
    const tl = gsap.timeline();

    // Check if we're on mobile or desktop
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // Mobile animations
      tl.fromTo(
        [headingRef.current, mobileButtonsRef.current, mobileImageRef.current],
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'back.out(2.5)',
        },
        0
      );
    } else {
      // Desktop animations
      tl.fromTo(
        [headingRef.current, buttonsRef.current, firstImageRef.current],
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'back.out(2.5)',
        },
        0
      );

      tl.fromTo(
        thirdImageRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'back.out(2.5)',
        },
        0
      );

      tl.fromTo(
        secondImageRef.current,
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: 'back.out(2.5)',
        },
        0.1
      );
    }
  }, []);

  // Handle previous image
  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? mobileImages.length - 1 : prev - 1
    );
  };

  // Handle next image
  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === mobileImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full min-h-screen md:h-screen flex justify-center items-center bg-lightdark overflow-hidden py-8 md:py-0">
      <div className="w-[90%] md:w-[80%] h-auto md:h-[80%] flex flex-col md:flex-row justify-center items-center md:mt-2 gap-8 md:gap-0">
        {/* Text and Buttons Section */}
        <div className="w-full md:w-[55%] h-auto md:h-full flex flex-col justify-center space-y-6 md:space-y-8 text-white px-4 md:px-5">
          <h1
            ref={headingRef}
            className="text-[13px] sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-semibold leading-tight text-left w-full"
          >
            Designed For Fitness Enthusiasts <br/> Who Want To Get More Out Of Their
            Workouts, Our App Rewards You With <br/> Crypto Every Time You Move.
          </h1>

          {/* Mobile Buttons - Horizontal Layout */}
          <div
            ref={mobileButtonsRef}
            className="md:hidden flex gap-3 items-center justify-start flex-wrap"
          >
            <div className="flex items-center gap-2 border-2 border-[#7928D2] rounded-full px-4 py-2 bg-[#7928D2]/10">
              <img
                src="/assets/fitness-icon1.png"
                className="w-5 h-5"
                alt="Earn"
              />
              <span className="text-xs font-bold text-[#7928D2]">EARN</span>
            </div>
            <div className="flex items-center gap-2 border-2 border-[#399FE9] rounded-full px-4 py-2 bg-[#399FE9]/10">
              <img
                src="/assets/fitness-icon2.png"
                className="w-5 h-5"
                alt="Move"
              />
              <span className="text-xs font-bold text-[#399FE9]">MOVE</span>
            </div>
            <div className="flex items-center gap-2 border-2 border-[#14F195] rounded-full px-4 py-2 bg-[#14F195]/10">
              <img
                src="/assets/fitness-img3.png"
                className="w-5 h-5"
                alt="Play"
              />
              <span className="text-xs font-bold text-[#14F195]">PLAY</span>
            </div>
          </div>

          {/* Desktop Buttons - Vertical Layout */}
          <div ref={buttonsRef} className="hidden md:flex flex-col gap-4 w-">
            <div className="flex gap-4 items-center">
              <img
                src="/assets/fitness-icon1.png"
                className="w-10 h-10"
                alt="Play"
              />
              <button className="flex items-center justify-center h-10 gap-2 text-lg leading-tight font-bold text-[#14F195] border-2 hover:from-[#00B9A9] hover:to-[#32E3D6] py-2 px-2 rounded-full shadow-lg transition-all ease-in-out duration-200 border-[#14F195]">
                PLAY
              </button>
            </div>
            <div className="flex gap-4 items-center">
              <img
                src="/assets/fitness-icon2.png"
                className="w-10 h-10"
                alt="Move"
              />
              <button className="flex items-center justify-center h-10 gap-2 text-lg leading-tight font-bold text-[#399FE9] border-2 hover:from-[#00B9A9] hover:to-[#32E3D6] py-2 px-2 rounded-full shadow-lg transition-all ease-in-out duration-200 border-[#399FE9]">
                MOVE
              </button>
            </div>
            <div className="flex gap-4 items-center">
              <img
                src="/assets/fitness-icon3.png"
                className="w-10 h-10"
                alt="Earn"
              />
              <button className="flex items-center justify-center h-10 gap-2 text-lg leading-tight font-bold text-[#7928D2] border-2 hover:from-[#00B9A9] hover:to-[#32E3D6] py-2 px-2 rounded-full shadow-lg transition-all ease-in-out duration-200 border-[#7928D2]">
                EARN
              </button>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="w-full md:w-[45%] h-auto md:h-[80%]">
          {/* Mobile Image - Carousel with navigation */}
          <div
            ref={mobileImageRef}
            className="md:hidden w-full flex justify-center items-center relative"
          >
            <div className="relative w-full max-w-[320px] bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-1">
              {/* Main Image Container */}
              <div className="relative bg-black rounded-3xl overflow-hidden">
                <img
                  src={mobileImages[currentImageIndex]}
                  alt={`Slide ${currentImageIndex + 1}`}
                  className="w-full h-auto transition-all duration-300 ease-in-out"
                />

                {/* Navigation Buttons */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-800/80 hover:bg-gray-700/90 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="white"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>

                <button
                  onClick={handleNextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-800/80 hover:bg-gray-700/90 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="white"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4 pb-3">
                {mobileImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-white w-6'
                        : 'bg-gray-500'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Images - Original layout */}
          <div className="hidden md:flex rounded-2xl p-5 justify-end gap-4 h-full">
            <div className="w-1/2 flex items-center justify-center">
              <img
                ref={firstImageRef}
                src="/assets/fitness-img1.png"
                alt="First Image"
                className="w-60 h-[22rem]"
              />
            </div>

            <div className="w-1/2 flex flex-col gap-4 justify-center">
              <img
                ref={secondImageRef}
                src="/assets/fitness-img2.png"
                alt="Second Image"
                className="w-60 h-[28rem] rounded-2xl"
              />
              <img
                ref={thirdImageRef}
                src="/assets/fitness-img3.png"
                alt="Third Image"
                className="w-60 h-[28rem] rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
