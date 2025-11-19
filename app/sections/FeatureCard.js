'use client';
import React from 'react';
import { useGSAP } from '@gsap/react';
import Tilt from 'react-parallax-tilt';
import { CardAnimation } from './animations/CardAnimation';
import { CardHoverAnimation } from './animations/CardHoverAnimation';
import Image from 'next/image';
const FeatureCard = () => {
  useGSAP(() => {
    CardAnimation();
    CardHoverAnimation();
  });

  return (
<section className="card_section bg-lightdark relative w-full flex items-center justify-center overflow-visible py-20">
  {/* Centered small background image */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
    <img
      src="/assets/feature-card-textbg.png"
      alt="background"
      className="w-auto h-auto max-w-[800px] max-h-[400px]" // adjust size as needed
    />
  </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl w-full items-start overflow-visible">
        {/* Left Side Card */}
        <div className="slide_contents flex flex-col gap-3">
          <div className="flex flex-col gap-8">
            {/* ✅ First Card - STAKING */}
            <div
              className="
        flex flex-col bg-[#14F195] rounded-[32px] p-8 
        overflow-hidden
        max-h-[220px] hover:max-h-[400px]
        transition-all duration-500 ease-in-out
      "
            >
              <span className="text-darkBlue font-extrafett text-[28px] mb-3.5">
                STAKING
              </span>
              <span className="text-darkBlue text-lg mb-4 font-kraeftig">
                Stake your SROK coin to <br /> receive passive income.
              </span>
              <div className="flex justify-end">
                <Image
                  src="/assets/feature-icon1.png"
                  className="w-[150px] h-[164px] object-contain"
                  alt="staking"
                  width={150}
                  height={164}
                />
              </div>
            </div>

            {/* ✅ Second Card - Web2 Web3 */}
            <div
              className="
        flex flex-col bg-[#DF8EFF] rounded-[32px] p-8 
        overflow-hidden
        max-h-[220px] hover:max-h-[400px]
        transition-all duration-500 ease-in-out
      "
            >
              <span className="font-extrafett text-[28px] mb-3.5">
                Web2 - Web3
              </span>
              <span className="text-black text-lg mb-4 font-kraeftig">
                Seamlessly bridge traditional Web2 platforms with decentralized{' '}
                <br /> Web3 solutions.
              </span>
              <div className="flex justify-end">
                <Image
                  src="/assets/feature-icon2.png"
                  className="w-[150px] h-[164px] object-contain"
                  alt="staking"
                  width={150}
                  height={164}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Center Animated Cards */}

        <div className="centercardHover">
          <Tilt className="z-[999999999] relative flex justify-center featurecardhover">
            <div className="card_border rounded-xl lg:max-w-[20rem] flex justify-center relative">
              {/* Title */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 title z-[999999] flex flex-col items-center text-center w-full card_title ">
                <h1
                  className="font-extrafettkursiv text-5xl sm:text-6xl font-bold leading-[1.2] will-change-transform px-4"
                  style={{ textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
                >
                  A <br /> Thriving Ecosystem for Web3 Innovation
                </h1>
              </div>

              {/* Two stacked cards */}
              <div className="flex justify-center relative">
                <div className="rounded-lg overflow-visible card_component relative h-[500px] ">
                  {/* Purple Card */}
                  <Image
                    src="/assets/purple-card.png"
                    alt="Purple Card"
                    className="w-auto h-full  object-cover purple_card rounded-[30px] "
                    width={357}
                    height={500}
                  />

                  {/* Feature Card */}
                  <Image
                    src="/assets/feature-card.png"
                    alt="Feature Card"
                    className="w-auto h-full rounded-[30px] object-cover absolute top-0 left-0 feature_card opacity-0"
                    width={357}
                    height={500}
                  />

                  {/* Icons centered halfway on bottom of feature card */}
                    <div className="feature_icons absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 flex gap-4 z-10 opacity-0">
                      <Image
                        src="/assets/feature-center-icon1.png"
                        alt="Icon 1"
                        className="w-12 h-12 object-contain cursor-pointer"
                        width={52}
                        height={52}
                      />
                      <Image
                        src="/assets/feature-center-icon2.png"
                        alt="Icon 2"
                        className="w-12 h-12 object-contain cursor-pointer"
                        width={52}
                        height={52}
                      />
                      <Image
                        src="/assets/feature-center-icon3.png"
                        alt="Icon 3"
                        className="w-12 h-12 object-contain cursor-pointer"
                        width={52}
                        height={52}
                      />
                    </div>

                </div>
              </div>
            </div>
          </Tilt>
        </div>

        {/* Right Side Card */}
        <div className="slide_contents flex flex-col gap-3">
          <div className="flex flex-col gap-8">
            {/* ✅ Wallet Card */}
            <div
              className="
        relative flex flex-col bg-[#DFFFF9] rounded-[32px] p-8 
        overflow-hidden
        max-h-[220px] hover:max-h-[400px]
        transition-all duration-500 ease-in-out
      "
            >
              <span className="text-[#1E1E1E] text-[28px] mb-3.5 font-extrafett">
                Wallet
              </span>
              <span className="text-[#1E1E1E] text-lg mb-4 font-kraeftig">
                Buy, Sell and transfer your <br /> STOK coin in wallet.
              </span>
              <div className="flex justify-end">
                <Image
                  src="/assets/feature-icon2.png"
                  className="w-[150px] h-[160px] object-contain"
                  alt="wallet"
                  width={150}
                  height={160}
                />
              </div>
            </div>

            {/* ✅ Mini-Game Card */}
            <div
              className="
                relative flex flex-col bg-[#D1FFC4] rounded-[32px] p-8 
                overflow-hidden
                max-h-[220px] hover:max-h-[400px]
                transition-all duration-500 ease-in-out
              "
            >
              <span className="text-[#1E1E1E] text-[28px] mb-3.5 font-extrafett">
                Mini-Game
              </span>
              <span className="text-[#1E1E1E] text-lg mb-4 font-kraeftig">
                Play mini-game and get exclusive rewards.
              </span>
              <div className="flex justify-end">
                <Image
                  src="/assets/feature-icon3.png"
                  className="w-[150px] h-[160px] object-contain"
                  alt="wallet"
                  width={150}
                  height={160}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
