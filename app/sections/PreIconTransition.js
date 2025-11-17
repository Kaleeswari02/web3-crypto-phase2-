'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const PreIconTransition = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  /* --------------------------- TUNABLE CONSTANTS --------------------------- */
  const SECTION_VH = 180;
  const ICON_SPACING_START = 250;
  const ICON_SPACING_END = 120;
  const ICON_LIFT_Y = -150;
  const ICON_BOTTOM_Y = 750;

  const pLiftStart = 0.05;
  const pLiftEnd = 0.44;
  const pContentStart = 0.45;
  const pContentEnd = 0.75;
  const pNextStart = 0.76;
  const pNextEnd = 1.0;

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const sectionH = rect.height;
      const totalScrollable = Math.max(sectionH - windowH, 1);
      const scrolled = clamp(-rect.top, 0, totalScrollable);
      const p = scrolled / totalScrollable;
      setProgress(clamp(p, 0, 1));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
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
      { x: -320, y: 800 },
      { x: -100, y: 870 },
      { x: 120, y: 940 },
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

  // ✅ Use bg colors instead of Tailwind classes
  const bgColors = [
    { bgColor: '#28d1af' },
    { bgColor: '#7a28d3' },
    { bgColor: '#3a9fea' },
  ];

  const iconImgs = [
    '/assets/play.webp',
    '/assets/run.webp',
    '/assets/earn.webp',
  ];
  const iconTitles = ['Play', 'Run', 'Earn'];

  return (
    <section
      ref={sectionRef}
      style={{ height: `${SECTION_VH}vh`, overflow: 'hidden' }}
      className="relative bg-[#1E1E1E] text-white"
    >
      <div className="w-full h-full relative">
        {/* ICONS */}
        <div
          className="absolute left-1/2 icon-container"
          style={{
            top: '40vh',
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
            zIndex: 30,
          }}
        >
          <div className="relative flex items-center justify-center">
            {bgColors.map((bg, i) => (
              <div key={i} className="absolute icon" style={getIconStyle(i)}>
                <div
                  className="rounded-full shadow-lg flex items-center justify-center"
                  style={{
                    width: 210,
                    height: 210,
                    overflow: 'hidden',
                    backgroundColor: bg.bgColor, // ✅ inline bg color
                  }}
                >
                  <Image
                    src={iconImgs[i]}
                    alt={`icon-${i}`}
                    height={145}
                    width={145}
                    style={{ width: 145, height: 145, objectFit: 'contain' }}
                    className="TransformIcon"
                  />
                </div>
                {/* Icon Title */}
                <div
                  style={{
                    position: 'absolute',
                    top: '110%',
                    width: '100%',
                    textAlign: 'center',
                    fontSize: '30px',
                    fontWeight: 'bold',
                    opacity: titleOpacity,
                    transition: 'opacity 300ms ease-out',
                    color: 'white',
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                    fontFamily: 'Kraeftig',
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
          className="absolute left-1/2 content-container text-center px-6"
          style={{
            top: '70vh',
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
            top: '120vh',
            transform: `translateX(-50%) translateY(${nextTranslateY}px)`,
            opacity: nextOpacity,
            transition: 'opacity 160ms linear, transform 160ms linear',
            zIndex: 25,
            width: '100%',
            maxWidth: 980,
          }}
        >
          <h2 className="text-2xl md:text-5xl font-bold leading-relaxed space-y-4 text-height-icon">
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
  );
};

export default PreIconTransition;
