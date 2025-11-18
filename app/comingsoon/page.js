"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
 
export default function Connected() {
  const icon1Ref = useRef(null);
  const icon2Ref = useRef(null);
  const icon3Ref = useRef(null);
 
  useEffect(() => {
    gsap.fromTo(
      icon1Ref.current,
      { scale: 0.8 },
      {
        scale: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 0.7,
        transformOrigin: "50% 50%",
      }
    );
 
    gsap.fromTo(
      icon2Ref.current,
      { scale: 0.9 },
      {
        scale: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 0.7,
        transformOrigin: "50% 50%",
      }
    );
 
    gsap.fromTo(
      icon3Ref.current,
      { scale: 0.8 },
      {
        scale: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 0.7,
        transformOrigin: "50% 50%",
      }
    );
  }, []);
 
  return (
    <section className="w-full h-screen bg-black flex flex-col justify-center items-center relative">
      {/* Centered "Coming Soon" Image */}
      <img
        src="/assets/Component 5 comming soon.png"
        className="absolute top-1/2 transform -translate-y-1/2"
        alt="Coming Soon"
      />
 
      {/* Wrapper for the icons */}
      <div className="relative w-[900px] h-[400px]">
        {/* Icon 1 */}
        <img
          ref={icon1Ref}
          src="/assets/CsVector1.png"
          className="absolute w-14 h-14"
          style={{ top: "130px", left: "319px" }}
          alt="Icon 1"
        />
 
        {/* Icon 2 */}
        <img
          ref={icon2Ref}
          src="/assets/CsVector2.png"
          className="absolute w-12 h-12"
          style={{ top: "130px", left: "609px" }}
          alt="Icon 2"
        />
 
        {/* Icon 3 */}
        <img
          ref={icon3Ref}
          src="/assets/CsVector3.png"
          className="absolute w-14 h-14"
          style={{ top: "267px", left: "388px" }}
          alt="Icon 3"
        />
      </div>
 
      {/* Button */}
      <div>
        <button className="bg-[#14F195] rounded-full text-black p-1 font-dreiviertelfett w-48">
          Back to Home
        </button>
      </div>
    </section>
  );
}