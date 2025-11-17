import { useState, useRef, useEffect } from 'react';
import BlogSection from './BlogSection';
import CommunitySection from './CommunitySection';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BlogCommunityTabs = () => {
  const [activeTab, setActiveTab] = useState('blog');
  const containerRef = useRef(null);
  const tabsRef = useRef(null);
  const bgTextRef = useRef(null);
  const blogButtonRef = useRef(null);
  const communityButtonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate tabs border (slow fade-in)
      gsap.from(tabsRef.current, {
        x: -50,
        opacity: 0,
        duration: 4, // Slower
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 95%',
          end: 'top 65%', // Slower reveal
          scrub: 2, // Slower scrub
        },
      });

      // Animate background blog text sliding left to right
      gsap.fromTo(
        bgTextRef.current,
        { x: -300, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 5, // Slower
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 90%',
            end: 'top 50%',
            scrub: 2.5, // Slower scrub
          },
        }
      );

      // Animate Blog button (slower left-to-right)
      gsap.from(blogButtonRef.current, {
        x: -150, // Slide from further left
        opacity: 0,
        duration: 2.5, // Slower
        delay: 0.5, // Slight delay for sequential effect
        ease: 'power3.out',
        scrollTrigger: {
          trigger: tabsRef.current,
          start: 'top 90%',
          end: 'top 70%',
          scrub: 2, // Slower
        },
      });

      // Animate Community button (slower left-to-right)
      gsap.from(communityButtonRef.current, {
        x: -150,
        opacity: 0,
        duration: 2.8, // Slower
        delay: 0.7, // Slight delay after Blog button
        ease: 'power3.out',
        scrollTrigger: {
          trigger: tabsRef.current,
          start: 'top 90%',
          end: 'top 70%',
          scrub: 2, // Slower
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col bg-lightdark min-h-screen"
    >
      {/* Background blog text */}
      <div
        ref={bgTextRef}
        className="absolute top-20 left-0 right-0 h-[280px] bg-no-repeat bg-center bg-contain pointer-events-none"
        style={{ backgroundImage: "url('/assets/blog-text.png')" }}
      ></div>

      {/* Tabs */}
      <div
        ref={tabsRef}
        className="relative flex items-start w-[316px] p-[11px] mt-20 border border-black rounded-[20px] px-4 py-3 ml-[120px] z-10"
      >
        <button
          ref={blogButtonRef}
          className={`px-6 py-2 rounded-full font-dreiviertelfett transition-colors ${
            activeTab === 'blog'
              ? 'bg-activegreen text-white'
              : 'bg-black text-white'
          }`}
          onClick={() => setActiveTab('blog')}
        >
          Blog
        </button>

        <div className="flex items-center mx-5">
          <div className="w-[1px] h-[41px] bg-white" />
        </div>

        <button
          ref={communityButtonRef}
          className={`px-6 py-2 rounded-full font-dreiviertelfett transition-colors ${
            activeTab === 'community'
              ? 'bg-activegreen text-white'
              : 'bg-black text-white'
          }`}
          onClick={() => setActiveTab('community')}
        >
          Community
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto relative z-10">
        {activeTab === 'blog' ? <BlogSection /> : <CommunitySection />}
      </div>
    </div>
  );
};

export default BlogCommunityTabs;
