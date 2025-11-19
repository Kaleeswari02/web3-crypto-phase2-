'use client';
import React, { useEffect, useRef, useState } from 'react';

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const PreIconTransition = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [screen, setScreen] = useState("desktop");

  /* --------------------------- TUNABLE CONSTANTS --------------------------- */
  const SECTION_VH = 180;
  const ICON_SPACING_START = 290;
  const ICON_SPACING_END = 120;
  const ICON_LIFT_Y = -150;
  const ICON_BOTTOM_Y = 670;

  const pLiftStart = 0.05;
  const pLiftEnd = 0.44;
  const pContentStart = 0.45;
  const pContentEnd = 0.75;
  const pNextStart = 0.76;
  const pNextEnd = 1.0;

  useEffect(() => {
    // Load GSAP and ScrollTrigger
    const script1 = document.createElement('script');
    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
    script1.async = true;
    
    const script2 = document.createElement('script');
    script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    script2.onload = () => {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      
      if (!gsap || !ScrollTrigger) return;
      
      gsap.registerPlugin(ScrollTrigger);

      const scrollTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          setProgress(clamp(self.progress, 0, 1));
        }
      });

      return () => {
        scrollTrigger.kill();
      };
    };

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
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

  const getIconStyle = (index) => {
    const baseX = (index - 1) * ICON_SPACING_START;
    const finalX = (index - 1) * ICON_SPACING_END;

    const tLift = clamp(
      (progress - pLiftStart) / (pLiftEnd - pLiftStart),
      0,
      1
    );
    const liftAmount = easeOutCubic(tLift);
    const yAfterLift = index === 2 ? lerp(0, ICON_LIFT_Y, liftAmount) : 0;

    const tContent = clamp(
      (progress - pContentStart) / (pContentEnd - pContentStart),
      0,
      1
    );
    const contentAmount = easeOutCubic(tContent);
    const xPhase2 = lerp(baseX, finalX, contentAmount);
    const yPhase2 = lerp(yAfterLift, ICON_BOTTOM_Y, contentAmount);
    const scalePhase2 = lerp(1, 0.5, contentAmount);

    const tNext = clamp(
      (progress - pNextStart) / (pNextEnd - pNextStart),
      0,
      1
    );
    const nextAmount = easeOutCubic(tNext);

    const inlineOffsets = [
      { x: -390, y: 550 },
      { x: -135, y: 650 },
      { x: 145, y: 720 },
    ];

    const xCross = lerp(xPhase2, inlineOffsets[index].x, nextAmount);
    const y = lerp(yPhase2, inlineOffsets[index].y, nextAmount);
    const scale = lerp(scalePhase2, 0.45, nextAmount);

    const transform = `translate3d(${xCross}px, ${y}px, 0) scale(${scale})`;
    return {
      transform,
      WebkitTransform: transform,
      transition: 'transform 150ms linear',
      opacity: 1,
    };
  };

  // Responsive drop positions
  const getPositions = (screen) => {
    const basePositions = [
      { x: -30, y: -200, angle: -45 },
      { x: 150, y: -100, angle: 27 },
      { x: 105, y: 190, angle: 98 },
      { x: -125, y: 200, angle: 160 },
      { x: -200, y: -80, angle: 250 },
    ];

    let scale;
    if (screen === "mobile") scale = 0.55;
    else if (screen === "tablet") scale = 0.75;
    else scale = 1;

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

  const contentT = clamp(
    (progress - pContentStart) / (pContentEnd - pContentStart),
    0,
    1
  );
  const contentEase = easeOutCubic(contentT);
  const contentOpacity =
    1 - clamp((progress - pNextStart) / (pNextEnd - pNextStart), 0, 1);
  const contentTranslateY = lerp(120, -40, contentEase);

  const nextT = clamp((progress - pNextStart) / (pNextEnd - pNextStart), 0, 1);
  const nextOpacity = easeOutCubic(nextT);
  const nextTranslateY = lerp(80, 0, nextT);

  const showIconTitles = progress >= pContentStart && progress < pNextStart;
  const titleOpacity = showIconTitles ? 1 : 0;

  const bgColors = [
    { bgColor: '#28d2b0' },
    { bgColor: '#399fea' },
    { bgColor: '#7a28d3' },
  ];

  const iconImgs = [
     '/assets/play.png',
    '/assets/move.png',
    '/assets/earn.png',
  ];
  const iconTitles = ['Play', 'Run', 'Earn'];

  return (
    <>

      
      <section
        ref={sectionRef}
        style={{ height: `${SECTION_VH}vh`, overflow: 'hidden' }}
        className="relative text-white"
        data-bgcolor="#1a1a1a"
      >
        <div className="w-full h-[full] relative" style={{ background: '#1a1a1a' }}>
          {/* ICONS */}
          <div
            className="absolute left-1/2 icon-container h-[100vh]"
            style={{
              top: '0vh',
              transform: 'translateX(-50%)',
              pointerEvents: 'auto',
              zIndex: 30,
            }}
          >
            <div className="relative flex items-center justify-center">
              {bgColors.map((bg, i) => (
                <div 
                  key={i} 
                  className="absolute icon" 
                  style={getIconStyle(i)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className="rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-transform duration-500 ease-out"
                    style={{
                      width: 210,
                      height: 210,
                      overflow: 'hidden',
                      backgroundColor: bg.bgColor,
                      transform: hoveredIndex === i ? 'scale(1.1)' : 'scale(1)',
                    }}
                  >
                    <img
                      src={iconImgs[i]}
                      alt={`icon-${i}`}
                      style={{ 
                        width: 145, 
                        height: 145, 
                        objectFit: 'contain',
                        opacity: 0.9,
                      }}
                      className="TransformIcon"
                    />
                  </div>

                  {/* Bursting Drops */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[0, 1, 2, 3, 4].map((dropIndex) => (
                      <div
                        key={dropIndex}
                        className="absolute rounded-full movingdrop"
                        style={{
                          backgroundColor: bg.bgColor,
                          width: '36px',
                          height: '36px',
                          top: '50%',
                          left: '50%',
                          marginLeft: '-18px',
                          marginTop: '-18px',
                          boxShadow: `0 0 15px ${bg.bgColor}50`,
                          transition: "transform 600ms cubic-bezier(0.2, 0, 0.2, 1), opacity 300ms ease-out",
                          ...getDropStyle(dropIndex, hoveredIndex === i),
                          opacity: hoveredIndex === i ? 1 : 0,
                        }}
                      />
                    ))}
                  </div>

                  {/* Icon Title */}
                  <div
                    style={{
                      // position: 'absolute',
                      top: '110%',
                      width: '100%',
                      textAlign: 'center',
                      fontSize: '30px',
                      fontWeight: 'bold',
                      opacity: titleOpacity,
                      transition: 'opacity 300ms ease-out',
                      color: 'white',
                      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                    }}
                  >
                    {iconTitles[i]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FIRST CONTENT */}
          <div
            className="absolute left-1/2 h-[100vh] content-container text-center px-6"
            style={{
              top: '85vh',
              transform: `translateX(-50%) translateY(${contentTranslateY}px)`,
              opacity: contentOpacity,
              transition: 'opacity 160ms linear, transform 160ms linear',
              zIndex: 20,
              width: '100%',
              maxWidth: 980,
            }}
          >
            <h1 className="text-4xl md:text-8xl font-bold mb-4 leading-tight">
              Transform
              <br />
              your <span className="text-gray-200">workout</span>
              <br />
              <span className="text-4xl md:text-8xl font-bold mb-4 leading-tight">
                into fun!
              </span>
            </h1>
            <p className="text-md md:text-2xl mb-8 leading-relaxed">
              Feel the rush with every move, like the next big crypto spike! Where
              movement meets excitement
              <br />
              get ready for fun-filled workouts!
            </p>
          </div>

          {/* SECOND CONTENT */}
          <div
            className="absolute left-1/2 text-center px-6"
            style={{
              top: '125vh',
              transform: `translateX(-50%) translateY(${nextTranslateY}px)`,
              opacity: nextOpacity,
              transition: 'opacity 160ms linear, transform 160ms linear',
              zIndex: 25,
              width: '100%',
              maxWidth: 980,
            }}
          >
            <h2 className="text-xl md:text-6xl font-bold leading-relaxed space-y-10">
              <span className="block">
                " Play games on your <br />
                mobile, &nbsp; &nbsp; &nbsp; &nbsp; run daily on the{' '}
              </span>
              <span className="block"></span>
              <span className="block">
                treadmill and &nbsp; &nbsp; &nbsp; &nbsp; earn <br />
                crypto with every <br />
                workout!"
              </span>
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default PreIconTransition;