// app/sections/fixedfooter.js
'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const icons = [
  { id: 1, label: 'Home', icon: '/assets/home.webp', bg: '#14f195' },
  { id: 2, label: 'Web3', icon: '/assets/web3.webp', bg: '#399fe9' },
  { id: 3, label: 'Device', icon: '/assets/device.webp', bg: '#7928d2' },
  { id: 4, label: 'Refer', icon: '/assets/refer.webp', bg: '#b4b4b4' },
  { id: 5, label: 'Web2', icon: '/assets/web2.webp', bg: '#28d2b0' },
];

export default function FooterIcons() {
  const containerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;

    // start hidden
    gsap.set(el, { y: 100, opacity: 0 });

    const onScroll = () => {
      // clear old timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // show on scroll
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
      });

      // hide after 500ms of no scroll
      scrollTimeoutRef.current = setTimeout(() => {
        gsap.to(el, {
          y: 100,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.in',
        });
      }, 500);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <footer className="fixed left-0 right-0 bottom-6 z-50 pointer-events-none">
      <div
        ref={containerRef}
        className="flex justify-center items-end gap-6 pointer-events-auto"
      >
        {icons.map((it) => (
          <div key={it.id} className="group flex flex-col items-center">
            {/* Icon circle */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-black transform transition-all duration-250 group-hover:scale-90"
              style={{ backgroundColor: it.bg }}
            >
              <Image src={it.icon} alt={it.label} width={22} height={22} />
            </div>

            {/* Label */}
            <div className="mt-2 text-xs text-white footericonlable opacity-0 transform translate-y-1 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 pointer-events-none">
              {it.label}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
