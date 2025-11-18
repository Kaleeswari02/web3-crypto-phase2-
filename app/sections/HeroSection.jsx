import { useState, useEffect } from 'react';

export default function AnimatedIconsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [screen, setScreen] = useState("desktop");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Detect screen size for responsive drop positions
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setScreen("mobile");
      else if (window.innerWidth < 1024) setScreen("tablet");
      else setScreen("desktop");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const icons = [
    { id: 1, bgColor: '#28d1af' },
    { id: 2, bgColor: '#7a28d3' },
    { id: 3, bgColor: '#3a9fea' },
  ];

  // Responsive drop positions - only x and y, leave angles unchanged
  const getPositions = (screen) => {
    const basePositions = [
      { x: -20, y: -290, angle: -45 },
      { x: 200, y: -100, angle: 27 },
      { x: 185, y: 200, angle: 98 },
      { x: -155, y: 230, angle: 160 },
      { x: -300, y: -190, angle: 250 },
    ];

    let scale;
    if (screen === "mobile") scale = 0.55;
    else if (screen === "tablet") scale = 0.75;
    else scale = 1; // desktop

    // Scale only the positions, not angles
    return basePositions.map(pos => ({
      x: pos.x * scale,
      y: pos.y * scale,
      angle: pos.angle,
    }));
  };

  const getDropStyle = (index, isHovered) => {
    const positions = getPositions(screen);
    const { x, y, angle } = positions[index];
    return {
      transform: isHovered
        ? `translate(${x}px, ${y}px) rotate(${angle + 90}deg) scale(1)`
        : `translate(${x * 0.65}px, ${y * 0.65}px) rotate(${angle + 90}deg) scale(0)`,
      transitionDelay: isHovered ? `${index * 50}ms` : '0ms',
    };
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center p-6 pt-xl-0 pt-lg-0 pt-md-0 pt-30">
      <div className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-12 lg:gap-16 items-center justify-center">
        {icons.map((item, iconIndex) => (
          <div
            key={item.id}
            className={`relative transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-48 opacity-0'
            }`}
            style={{ transitionDelay: `${iconIndex * 200}ms` }}
            onMouseEnter={() => setHoveredIndex(iconIndex)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Main Icon Circle */}
            <div
              tabIndex={0}
              className={`relative rounded-full flex items-center justify-center cursor-pointer iconcirclehover transform transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-white/30 ${
                hoveredIndex === iconIndex ? 'scale-110' : 'scale-100'
              } w-40 h-40 sm:w-36 sm:h-36 md:w-64 md:h-64 lg:w-85 lg:h-85`}
              style={{ backgroundColor: item.bgColor }}
            >
              {/* Icon Images */}
              {iconIndex === 0 && (
                <img
                  src="/assets/play.webp"
                  alt="Play"
                  className={`object-contain play-img image-center-place opacity-90 transform transition-all duration-500 ease-out ${
                    hoveredIndex === iconIndex ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                  }`}
                />
              )}
              {iconIndex === 1 && (
                <img
                  src="/assets/run.webp"
                  alt="Run"
                  className={`object-contain run-img image-center-place opacity-90 transform transition-all duration-500 ease-out ${
                    hoveredIndex === iconIndex ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                  }`}
                />
              )}
              {iconIndex === 2 && (
                <img
                  src="/assets/earn.webp"
                  alt="Earn"
                  className={`object-contain earn-img image-center-place opacity-90 transform transition-all duration-500 ease-out ${
                    hoveredIndex === iconIndex ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                  }`}
                />
              )}
            </div>

            {/* Bursting Drops */}
            <div className="absolute inset-0 pointer-events-none">
              {[0, 1, 2, 3, 4].map((dropIndex) => (
                <div
                  key={dropIndex}
                  className="absolute top-1/2 left-1/2 movingdrop rounded-full w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-9 lg:h-9"
                  style={{
                    backgroundColor: item.bgColor,
                    marginLeft: "-5px",
                    marginTop: "-5px",
                    boxShadow: `0 0 15px ${item.bgColor}50`,
                    transition: "transform 600ms cubic-bezier(0.2, 0, 0.2, 1), opacity 300ms ease-out",
                    ...getDropStyle(dropIndex, hoveredIndex === iconIndex),
                    ...(hoveredIndex === iconIndex
                      ? { animation: `dropBurst 1s ${dropIndex * 80}ms forwards` }
                      : { opacity: 0.3, animation: `dropReturn 600ms ${dropIndex * 50}ms forwards` }),
                  }}
                />
              ))}
            </div>

            {/* Ripple placeholder */}
            <div />
          </div>
        ))}
      </div>
    </div>
  );
}
