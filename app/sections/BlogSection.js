// // BlogSection.js
// 'use client';
// import { useState, useRef, useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import blogData from '../data/blog.json';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';

// gsap.registerPlugin(ScrollTrigger);

// // Arrow icons
// const LeftArrow = () => (
//   <svg
//     width="31"
//     height="31"
//     viewBox="0 0 31 31"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <rect width="31" height="31" fill="#2C2C2C" />
//     <path
//       d="M18 11L14 15.5L18 20"
//       stroke="#14F195"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );
// const RightArrow = () => (
//   <svg
//     width="31"
//     height="31"
//     viewBox="0 0 31 31"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <rect width="31" height="31" fill="#2C2C2C" />
//     <path
//       d="M13 11L17 15.5L13 20"
//       stroke="#14F195"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const BlogSection = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const cardsPerPage = 2;
//   const totalPages = Math.ceil(blogData.length / cardsPerPage);
//   const router = useRouter(); // <-- Add this

//   const containerRef = useRef(null);
//   const cardsRef = useRef(null);

//   const startIndex = currentPage * cardsPerPage;
//   const visibleCards = blogData.slice(startIndex, startIndex + cardsPerPage);

//   // Animate cards with direction: "left" or "right"
//   const animateCards = (direction = 'right') => {
//     const xStart = direction === 'right' ? 150 : -150;
//     gsap.fromTo(
//       cardsRef.current.children,
//       { x: xStart, opacity: 0, scale: 0.9 },
//       {
//         x: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         ease: 'power3.out',
//         stagger: 0.2,
//       }
//     );
//   };

//   // Animate on scroll initially
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.utils.toArray('.blog-card').forEach((card, i) => {
//         gsap.fromTo(
//           card,
//           { x: -150, opacity: 0, scale: 0.9 },
//           {
//             x: 0,
//             opacity: 1,
//             scale: 1,
//             duration: 1.2,
//             ease: 'power3.out',
//             delay: i * 0.2,
//             scrollTrigger: {
//               trigger: cardsRef.current,
//               start: 'top 70%',
//               end: 'top 30%',
//               scrub: 1,
//             },
//           }
//         );
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, [currentPage, visibleCards]);

//   // Handlers
//   const handlePrevious = () => {
//     setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
//     setTimeout(() => animateCards('left'), 50); // Animate from left
//   };

//   const handleNext = () => {
//     setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
//     setTimeout(() => animateCards('right'), 50); // Animate from right
//   };

//   return (
//     <div
//       className="container mx-auto px-4 py-8 flex flex-col gap-8 relative"
//       ref={containerRef}
//     >
//       <div
//         className="overflow-hidden w-full flex gap-8 justify-center"
//         ref={cardsRef}
//       >
//         {visibleCards.map((card) => renderCard(card, router))}
//       </div>

//       {/* Navigation arrows */}
//       <div className="flex gap-2 justify-start mt-6 ml-[120px]">
//         <button onClick={handlePrevious}>
//           <LeftArrow />
//         </button>
//         <button onClick={handleNext}>
//           <RightArrow />
//         </button>
//       </div>
//     </div>
//   );
// };

// const renderCard = (card, router) => (
//   <div
//     key={card.id}
//     onClick={() => router.push('/blog')}
//     className="cursor-pointer flex bg-black rounded-[20px] overflow-hidden w-[620px] p-[12px] blog-card"
//   >
//     <Image
//       src={card.image}
//       width={278}
//       height={338}
//       className="w-[278px] h-[338px] rounded-[10px] object-cover"
//       alt='card-image'
//     />
//     <div className="flex flex-col gap-4 justify-between w-full p-[14px]">
//       <div>
//         <button className="bg-[#2C2C2C] py-1 px-3 rounded text-sm text-white font-kraeftig">
//           {card.category}
//         </button>
//         <h3 className="text-white text-[26px] font-halbfett mt-2">
//           {card.title}
//         </h3>
//         <p className="text-[#7928D2] text-base mt-2 font-kraeftig">
//           {card.action}
//         </p>
//       </div>
//       <div className="flex justify-between items-start mt-4">
//         <div className="flex flex-col gap-1 text-[#B4B4B4] text-base font-kraeftig">
//           <span>post on:</span>
//           <span>{card.date}</span>
//         </div>
//         <button className="bg-activegreen py-2 px-4 rounded-[10px] text-black text-xs font-kraeftig mt-4">
//           {card.buttonText}
//         </button>
//       </div>
//     </div>
//   </div>
// );

// export default BlogSection;

const BlogSection = () => {
  return (
    <div className="w-full flex justify-center mt-10">
      <img
        src="/assets/coming-soon.png"
        alt="Coming Soon"
        className="max-w-full"
      />
    </div>
  );
};

export default BlogSection;

