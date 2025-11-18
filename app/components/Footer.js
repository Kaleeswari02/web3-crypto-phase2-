'use client';
import Link from 'next/link';
import { FaFacebook, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import GradientButton from './GradientButton';
import { AiFillLinkedin } from 'react-icons/ai';
import { RiTelegramFill } from 'react-icons/ri';
import AnimatedLogo from '../sections/animations/AnimatedLogo';
import Image from 'next/image';
import FooterLogoSection from '../sections/animations/FooterLogoSection'

export default function Footer() {


  return (
    <footer className="bg-lightdark text-white py-12 px-6">
      {/* Logo / Title Section */}
 <FooterLogoSection/>

      {/* CTA Buttons */}
      <div className="flex justify-center gap-6 mb-16">
        <button className="px-8 py-3 rounded-full bg-activegreen font-dreiviertelfett text-lg hover:opacity-90 transition">
          Connect Wallet
        </button>

        <GradientButton
          label="Download App"
          onClick={() => alert('Pressed!')}
          className="px-6 sm:px-8 py-2 sm:py-3"
        />
      </div>

      {/* Divider */}
      <div className="border-t  border-gray-700 mb-6 w-[1200px] mx-auto"></div>
      <div className="mt-6 text-center text-white text-[16px] font-kraeftig mb-4">
        Join Our Community
      </div>
      {/* Footer Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto w-full text-sm">
        {/* Left */}
        <Link
          href="/terms"
          className="mb-4 md:mb-0 hover:underline font-kraeftig text-[16px]"
        >
          Terms & Conditions
        </Link>

        {/* Center Social Icons */}
        <div className="flex gap-6 mb-4 md:mb-0">
          <a
            href="#"
            className="bg-black w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 transition"
          >
            <FaFacebook size={18} />
          </a>
          <a
            href="#"
            className="bg-black w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 transition"
          >
            <FaXTwitter size={18} />
          </a>
          <a
            href="#"
            className="bg-black w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 transition"
          >
            <FaDiscord size={18} />
          </a>
          <a
            href="#"
            className="bg-black w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 transition"
          >
            <AiFillLinkedin size={20} />
          </a>
          <a
            href="#"
            className="bg-black w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 transition"
          >
            <RiTelegramFill size={22} />
          </a>
        </div>

        {/* Right */}
        <Link
          href="/privacy"
          className="hover:underline font-kraeftig text-[16px]"
        >
          Security & Privacy
        </Link>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-white font-kraeftig text-[16px]">
        ©2025 Sportstechcrypto• All Rights Reserved
      </div>
    </footer>
  );
}
