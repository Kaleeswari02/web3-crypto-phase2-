"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import GradientButton from "../components/GradientButton";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function DownloadSection() {
  const phoneRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const parts = gsap.utils.toArray(".phone-part");

      // Initial setup: Stack phone parts in the center, with no movement
      gsap.set(parts, {
        y: 0,                  // Keep them stacked initially (no movement)
        opacity: 1,
        zIndex: (i) => parts.length - i, // Stack images based on their index
      });

      // Scroll-based animation: Split and move the parts upwards when the user scrolls into the section
      gsap.to(parts, {
        y: (i) => {
          // The more negative the value, the more the part moves upwards
          if (i === 0) return -180;  // Top part moves fast up
          if (i === 1) return -100;  // Second part moves up slightly slower
          if (i === 2) return 0;     // Center part stays fixed
          if (i === 3) return 100;   // Fourth part moves downwards
          if (i === 4) return 180;   // Bottom part moves further down
          return 0;
        },
        opacity: 1,           // Keep opacity at full for all parts
        duration: 0.75,       // Speed of the animation (faster movement)
        ease: "none",         // Linear movement
        scrollTrigger: {
          trigger: "#download-section",  // Trigger the animation on this section
          start: "top top",              // Start the animation when the top of the section reaches the top of the viewport
          end: "bottom top",             // End the animation when the bottom of the section reaches the top of the viewport
          scrub: 1,                      // Sync the animation with the scroll speed
          markers: false,                // Disable markers for visual debugging
          once: true,                    // Trigger only once when the section comes into view
        },
      });
    }, phoneRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="download-section"
      className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-lightdark text-white min-h-[120vh]"  // Full viewport height
    >
      {/* Left Side - Phone */}
      <div
        ref={phoneRef}
        className="relative w-full md:w-1/2 flex justify-center items-center h-[600px]"  // Fixed height for the phone part container
      >
        {/* Phone parts stacked on top of each other */}
        {[1, 2, 3, 4, 5].map((i) => (
          <Image
            key={i}
            src={`/assets/phone-part-${i}.webp`}
            alt={`phone-part-${i}`}
            width={550}
            height={500}
            className="absolute phone-part"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)", // Initially centered
            }}
            priority
          />
        ))}
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 mt-12 md:mt-0 text-center md:text-left space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold crypto-txt">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14F195] via-[#399FE9] to-[#7928D2] crypto-txt">
            Sportstech NEO
          </span>{" "}
          <span className="crypto-txt"></span> <br />
          brings you closer to a <br />{" "}
          <span className="text-white crypto-txt">healthier lifestyle.</span>
        </h2>
        <p className="crypto-des">
          Whether you&apos;re walking, running, cycling, or participating in any
          fitness activity, each step can bring you closer to valuable rewards.
        </p>

        {/* QR Code + Store Links */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <Image
            src="/assets/qrcode.webp"
            alt="qr"
            width={120}
            height={120}
            className="rounded-lg"
          />
          <div className="flex gap-4">
            <a href="#" className="flex items-center gap-2">
              <Image
                src="/assets/playstore.webp"
                alt="google-play"
                width={150}
                height={50}
              />
            </a>
            <a href="#" className="flex items-center gap-2">
              <Image
                src="/assets/appstore.webp"
                alt="app-store"
                width={150}
                height={50}
              />
            </a>
          </div>
        </div>

        {/* Download Button */}
        <GradientButton
          label="Register Now"
          onClick={() => alert("Pressed!")}
          className="w-50 download-btn-phase2"
        />
      </div>
    </section>
  );
}
