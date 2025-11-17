import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import communityData from '../data/community.json';
import Image from 'next/image';
// Arrow icons
const LeftArrow = () => (
  <svg
    width="31"
    height="31"
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="31" height="31" fill="#2C2C2C" />
    <path
      d="M18 11L14 15.5L18 20"
      stroke="#14F195"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RightArrow = () => (
  <svg
    width="31"
    height="31"
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="31" height="31" fill="#2C2C2C" />
    <path
      d="M13 11L17 15.5L13 20"
      stroke="#14F195"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CommunitySection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState('right');
  const cardsPerPage = 2;
  const totalPages = Math.ceil(communityData.length / cardsPerPage);

  const containerRef = useRef(null);
  const cardsRef = useRef(null);

  const startIndex = currentPage * cardsPerPage;
  const visibleCards = communityData.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  // Animate cards with direction: "left" or "right"
  const animateCards = (dir = 'right') => {
    const xStart = dir === 'right' ? 150 : -150;
    gsap.fromTo(
      cardsRef.current.children,
      { x: xStart, opacity: 0, scale: 0.9 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
      }
    );
  };

  useEffect(() => {
    animateCards(direction);
  }, [currentPage]);

  // Handlers
  const handlePrevious = () => {
    setDirection('left');
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <div
      className="container mx-auto px-4 py-8 flex flex-col gap-8 relative"
      ref={containerRef}
    >
      <div
        className="overflow-hidden w-full flex gap-8 justify-center"
        ref={cardsRef}
      >
        {visibleCards.map(renderCard)}
      </div>

      {/* Navigation arrows */}
      <div className="flex gap-2 justify-start mt-6 ml-[120px]">
        <button onClick={handlePrevious}>
          <LeftArrow />
        </button>
        <button onClick={handleNext}>
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

const renderCard = (card) => (
  <div
    key={card.id}
    className="flex bg-black rounded-[20px] overflow-hidden w-[620px] p-[12px]"
  >
    {/* Left image */}
    <Image
      src={card.image}
      width={278}
      height={338}
      alt='card-image'
      className="w-[278px] h-[338px] rounded-[10px] object-cover"
    />

    {/* Right content */}
    <div className="flex flex-col gap-4 justify-between w-full p-[14px]">
      <div>
        <button className="bg-[#2C2C2C] py-1 px-3 rounded text-sm text-white font-kraeftig">
          {card.category}
        </button>
        <h3 className="text-white text-[26px] font-halbfett mt-2">
          {card.title}
        </h3>
        <p className="text-[#7928D2] text-base mt-2 font-kraeftig">
          {card.action}
        </p>
      </div>

      <div className="flex justify-between items-start mt-4">
        <div className="flex flex-col gap-1 text-[#B4B4B4] text-base font-kraeftig">
          <span>post on:</span>
          <span>{card.date}</span>
        </div>
        <button className="bg-activegreen py-2 px-4 rounded-[10px] text-black text-xs font-kraeftig mt-4">
          {card.buttonText}
        </button>
      </div>
    </div>
  </div>
);

export default CommunitySection;
