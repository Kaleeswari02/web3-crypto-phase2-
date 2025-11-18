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

  const radius = 285;

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setAngle((prev) => (prev + 1) % 360); // speed of rotation
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="min-h-screen bg-lightdark relative overflow-hidden p-5">
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Rotating Coins */}
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Background Overlay Image */}
            <div className="absolute inset-0">
              <Image
                src="/assets/stok-bg-green-overlay.png"
                alt="background overlay"
                className="bject-cover"
                height={1096}
                width={1011}
              />
            </div>

            {/* Coin Container */}
            <div className="relative w-96 h-96">
              {/* Central STOK Coin */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 centerCoinindex"
                style={{ zIndex: 25 }}
              >
                <div className="rounded-full stockCoinShape flex center-coin">
                  <Image
                    src="/assets/stok.webp"
                    alt="stok"
                    width={442}
                    height={547}
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
                const scale = 0.7 + ((y + radius) / (2 * radius)) * 0.3;

                return (
                  <div
                    key={coin.id}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${scale})`,
                      zIndex,
                      transition: 'transform 0.05s linear',
                    }}
                  >
                    <div className="flex items-center justify-center">
                      <Image
                        src={coin.image}
                        alt="rotatingcoin"
                        width={163}
                        height={163}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center items-center w-full h-full">
            {/* Heading */}
            <div className="stockheadpart mb-5">
              <Image
                src="/assets/stockheading.webp"
                alt="stock heading"
                width={567}
                height={207}
              />
            </div>

            {/* Description */}
            <p className="text-gray-400 text-center text-lg mb-8 stockDes">
              Lorem ipsum dolor sit amet,
              <br /> consectetur
            </p>

            {/* Icons */}
            <div className="grid grid-cols-3 gap-y-4 stocksmallicons mb-8">
              {/* Play Icon */}
              <div className="text-center">
                <div className="rounded-full flex items-center justify-center mb-2">
                  <Image
                    src="/assets/stok-play-icon.png"
                    alt="play"
                    width={106}
                    height={106}
                  />
                </div>
                <p className="text-gray-400 text-sm icontextfont">PLAY</p>
              </div>

              {/* Run Icon */}
              <div className="text-center">
                <div className="rounded-full flex items-center justify-center mb-2">
                  <Image
                    src="/assets/stok-run-icon.png"
                    alt="run"
                    width={106}
                    height={106}
                  />
                </div>
                <p className="text-gray-400 text-sm icontextfont">RUN</p>
              </div>

              {/* Earn Icon */}
              <div className="text-center">
                <div className="rounded-full flex items-center justify-center mb-2">
                  <Image
                    src="/assets/stok-earn-icon.png"
                    alt="earn"
                    width={106}
                    height={106}
                  />
                </div>
                <p className="text-gray-400 text-sm icontextfont">EARN</p>
              </div>
            </div>

            {/* Buy Button */}
            <div className="w-full flex justify-center mb-10">
              <GradientButton label="Buy" onClick={() => alert('Pressed!')} />
            </div>

            {/* Decorative Glass Square */}
            <div className="glasssquare mb-6">
              <Image
                src="/assets/glasssquare.webp"
                width={166}
                height={168}
                alt="glass square"
              />
            </div>

            {/* Decorative Glass Rectangle */}
            <div className="glassRec">
              <Image
                src="/assets/glassrec.webp"
                width={127}
                height={224}
                alt="glass rectangle"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinStokSection;
