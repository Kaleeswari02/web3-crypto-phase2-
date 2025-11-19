'use client';
import Link from 'next/link';
import { FaFacebook, FaDiscord, FaInstagram,FaYoutube} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import GradientButton from './GradientButton';
import { AiFillLinkedin } from 'react-icons/ai';
import { RiTelegramFill } from 'react-icons/ri';
import AnimatedLogo from '../sections/animations/AnimatedLogo';
import Image from 'next/image';
import FooterLogoSection from '../sections/animations/FooterLogoSection'


export default function Footer() {


  return (
    <footer className="bg-lightdark text-white p-4 flex flex-col justify-center items-center">
      <FooterLogoSection />

      {/* Divider */}
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-[1200px] sm:h-auto lg:h-32 flex flex-col sm:flex-col lg:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Subscribe Section */}
          <div className="w-full md:w-[50%] space-y-3">
            <label className="font-kraeftig">Subscribe Our Newsletter</label>
            <div className="w-full flex sm:flex-row flex-col items-center">
              <div className="w-full sm:w-[80%] md:max-w-[70%] p-[1px] bg-gradient-to-r from-[#52FFA1] via-[#0A7CFF] to-[#8247E5] rounded-lg flex items-center relative mb-4 sm:mb-0">
                <div className="text-white bg-black rounded-lg absolute top-[-10px] left-4 px-1 text-sm md:text-base">
                  <span className="font-kraeftig text-xs">E-mail</span>
                </div>
                <input
                  placeholder="Enter your email"
                  className="w-full py-3 px-4 text-white font-kraeftig bg-black focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-lg"
                />
              </div>

              <button className="py-4 px-10 sm:ml-2 w-full font-kraeftig sm:w-auto bg-gradient-to-r
                from-[#52FFA1] via-[#5aa5fa] to-[#8247E5] text-white rounded-[15px]">
                Subscribe
              </button>
            </div>

          </div>

          {/* Community Section */}
          <div className="w-full md:w-[50%] flex flex-col justify-between items-center lg:items-end space-y-3">
            <div className="w-full text-white text-center sm:pr-0 md:pr-0 lg:pr-44  font-kraeftig text-[16px]">
              Join Our Community
            </div>
            <div className="flex sm:gap-4 md:gap-6 lg:gap-1 justify-center space-x-5 items-center">
              <a
                href="https://www.facebook.com/sportstechneo" target='blank'
                className="bg-black w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 transition"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="https://x.com/SportstechNeo" target='blank'
                className="bg-black w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 transition"
              >
                <FaXTwitter size={18} />
              </a>
              <a
                href="https://discord.com/invite/9TDjpYJ6e2" target='blank'
                className="bg-black w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 transition"
              >
                <FaDiscord size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/sportstech-neo-222867396?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhrHk7Hi6TeWiJQp0RnoQ%2FA%3D%3D" target='blank'
                className="bg-black w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 transition"
              >
                <AiFillLinkedin size={20} />
              </a>
               <a
                href="https://www.instagram.com/sportstechneo/" target='blank'
                className="bg-black w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 transition"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="bg-black w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 transition"
              >
                <RiTelegramFill size={22} />
              </a>
               <a
                href="#"
                className="bg-black w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 transition"
              >
                <FaYoutube  size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mb-6 w-full md:w-full lg:w-[1200px] mx-auto sm:hidden md:block lg:block"></div>

      {/* Footer Bottom Section */}
      <div className="sm:w-full md:w-full lg:w-[1200px]  flex sm:flex-col md:flex-row lg:flex-row items-center sm:justify-center md:justify-between lg:justify-between lg:items-center   ">
        {/* Left */}
        <Link
          href="/terms"
          className="text-center sm:text-left hover:underline font-kraeftig text-[16px]"
        >
          Terms & Conditions
        </Link>

        {/* Center Social Icons */}
        <div className="flex gap-6 justify-center sm:justify-start mb-16 md:mb-0 lg:mb-0 xl:mb-0">
          <Link href="" className="font-kraeftig text-[16px] cursor-pointer hover:underline">
            About
          </Link>
        </div>

        {/* Right */}
        <Link
          href="/privacy"
          className="text-center sm:text-right hover:underline font-kraeftig text-[16px]"
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
