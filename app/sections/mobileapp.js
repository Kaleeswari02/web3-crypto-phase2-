'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import GradientButton from '../components/GradientButton';

gsap.registerPlugin(ScrollTrigger);

export default function DownloadSection() {
  // const phoneRef = useRef(null);
// useLayoutEffect(() => {
//   const ctx = gsap.context((self) => {
//     const parts = self.selector(".phone-part");

//     gsap.set(parts, {
//       y: 0,
//       opacity: 1,
//       zIndex: (i) => parts.length - i,
//     });

//     gsap.to(parts, {
//       y: (i) => {
//         if (i === 0) return -180;
//         if (i === 1) return -100;
//         if (i === 2) return 0;
//         if (i === 3) return 100;
//         if (i === 4) return 180;
//       },
//       ease: "none",
//       scrollTrigger: {
//         trigger: "#download-section",
//         start: "top top",
//         end: "+=200%",
//         pin: true,
//         scrub: 1,
//         anticipatePin: 1,
//       }
//     });
//   }, phoneRef);

//   return () => ctx.revert();
// }, []);


  return (
    <section
      id="download-section"
      className="relative flex  md:flex-row  items-center  min-h-screen bg-lightdark text-white mobileappsection"
    >
       <div className='mobile-view socialanddownload'>
          {/* Download Button */}
        <GradientButton label="Download Now" onClick={() => alert('Pressed!')} className="w-50 download-btn-phase2" />
         <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"> 
           {/* <Image src="/assets/qrcode.webp" alt="qr" width={120} height={120} className="rounded-lg" />  */}
          <div className="flex gap-4"> 
            <a href="#" className="flex items-center gap-2" style={{
                  border:'1px solid #13f295',
                  borderRadius:'10px'
                }}> 
                <img src="/assets/playstore.webp" alt="google-play" className='appdownloadimg' /> 
            </a>
            <a href="#" className="flex items-center gap-2" style={{
              
               border:'1px solid #7a28d1',
                  borderRadius:'10px'
            }}> 
              <img src="/assets/appstore.webp" alt="app-store" className='appdownloadimg'/> 
            </a> 
          </div> 
        
        </div>
       
 </div>
 {/* ref={phoneRef} */}
      <div  className="relative w-full flex justify-center items-center Leftsidesection">
        {/* {[1, 2, 3, 4, 5].map((i) => (
          <Image
            key={i}
            src={`/assets/phone-part-${i}.webp`}
            alt={`phone-part-${i}`}
            width={550}
            height={500}
            className="absolute phone-part object-contain"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              
            }}
            priority
          />
        ))} */}
          <video 
            src="/assets/phoneslidesgif.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="web3videosec"
          />
      </div>

      {/* Right Side Text */}
{/* Right Side - Content */}
 <div className="w-full  mt-12 md:mt-0 text-center md:text-left space-y-6 RightSideContent"> 
    <h2 className="font-bold crypto-txt"> 
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14F195] via-[#399FE9] to-[#7928D2] crypto-txt"> 
        Sportstech NEO 
      </span>{' '} 
      <span className="crypto-txt"></span> brings<br /> you closer to a {' '} 
      <span className="text-white crypto-txt">healthier <br /> lifestyle.</span>
    </h2> 
    <p className="crypto-des"> Whether you&apos;re walking, running, cycling, or participating in any fitness activity, each step can bring you closer to valuable rewards. </p>
     {/* QR Code + Store Links */}

    <div className='desktop-view'>
         <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 appdownlaod"> 
           {/* <Image src="/assets/qrcode.webp" alt="qr" width={120} height={120} className="rounded-lg" />  */}
                  <div className="flex gap-10"> 
            <a href="#" className="flex items-center gap-2" style={{
                  border:'1px solid #13f295',
                  borderRadius:'10px'
                }}> 
                <img src="/assets/playstore.webp" alt="google-play" className='appdownloadimg' /> 
            </a>
            <a href="#" className="flex items-center gap-2" style={{
              
               border:'1px solid #7a28d1',
                  borderRadius:'10px'
            }}> 
              <img src="/assets/appstore.webp" alt="app-store" className='appdownloadimg'/> 
            </a> 
          </div> 
        
        </div>
         {/* Download Button */}
        <GradientButton label="Download Now" onClick={() => alert('Pressed!')} className="w-50 download-btn-phase2" />
    </div>
   

 </div>
    </section>
  );
}
