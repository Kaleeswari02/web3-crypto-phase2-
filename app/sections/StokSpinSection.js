import React, { useEffect, useState } from 'react';
import GradientButton from '../components/GradientButton';
import Image from 'next/image';

const CoinStokSection = () => {
  const [angle, setAngle] = useState(0);

  const orbitingCoins = [
    { id: 1, image: '/assets/rotateicon1.webp' },
    { id: 2, image: '/assets/rotateicon2.webp' },
    { id: 3, image: '/assets/rotateicon3.webp' },
    { id: 4, image: '/assets/rotateicon4.webp' },
    { id: 5, image: '/assets/rotateicon5.webp' },
    { id: 6, image: '/assets/rotateicon6.webp' },
    { id: 7, image: '/assets/rotateicon7.webp' },
  ];

  const radius = 250; // orbit radius (adjust to avoid overlapping center coin)
  const containerSize = 450; // left section container
  const orbitIconSize = 140; // fixed orbiting coin size

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setAngle((prev) => (prev + 1) % 360);
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="min-h-screen bg-lightdark relative overflow-hidden p-5">
      <div className="container mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Rotating Coins */}
          <div
            className="relative flex items-center justify-center w-full"
            style={{ height: containerSize, maxHeight: containerSize }}
          >
           {/* Background Overlay */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <Image
              src="/assets/stok-bg-green-overlay.png"
              alt="background overlay"
              className="object-cover h-full"
              height={1000}
              width={1000}
            />
<div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-[#0f0f0f] via-transparent to-[#0f0f0f]"></div>

          </div>
            {/* Coin Container */}
            <div
              className="relative w-full h-full"
              style={{ width: containerSize, height: containerSize }}
            >
              {/* Central STOK Coin (fixed, never moves) */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 centerCoinindex z-30"
              >
                <div className="rounded-full stockCoinShape flex center-coin">
                  <Image
                    src="/assets/stok.webp"
                    alt="stok"
                    width={containerSize}
                    height={containerSize}
                  />
                </div>
              </div>

              {/* Orbiting Coins */}
              {orbitingCoins.map((coin, index) => {
                const baseAngle = (index / orbitingCoins.length) * 360;
                const totalAngle = (baseAngle + angle) % 360;
                const radians = (totalAngle * Math.PI) / 180;

                const x = Math.cos(radians) * radius;
                const y = Math.sin(radians) * radius;

                const zIndex = Math.round(((y + radius) / (2 * radius)) * 50);

                return (
                  <div
                    key={coin.id}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                      zIndex,
                      transition: 'transform 0.05s linear',
                    }}
                  >
                    <div className="flex items-center justify-center">
                      <Image
                        src={coin.image}
                        alt="rotatingcoin"
                        width={orbitIconSize}
                        height={orbitIconSize}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="stockheadpart mb-5">
              <Image
                src="/assets/stok-spin-textimg.png"
                alt="stock heading"
                width={529}
                height={117}
              />
            </div>

            <div className="flex flex-col text-left space-y-5">
              <p className="text-white text-[36px] mb-6 font-dreiviertelfett leading-tight">
                Your Digital Asset Proof of <br />
                Active living.
              </p>
              <p className="text-[36px] font-dreiviertelfett leading-tight">
                <span className="text-activegreen">Own it.</span>{" "}
                <span className="text-purple">Earn it.</span>
              </p>
              <p className="text-[36px] font-dreiviertelfett leading-tight">
                <span className="text-lightBlue">Move the world with it.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinStokSection;
