import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const CardAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const card_tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.card_section',
      scrub: true,              // smoother and slower animation
      start: 'center center',
      end: '+=1500',            // longer distance = slower
      pin: true,
    },
    defaults: { ease: 'power3.out' },
  });

  card_tl
    // Intro
    .fromTo(
      '.card_component',
      {
        opacity: 0,
        rotateY: 30,
        rotateX: 20,
        transformPerspective: 2300,
        transformOrigin: 'center top',
      },
      {
        opacity: 1,
        rotateX: 0,
        rotateY: 0,
      }
    )

    // Title intro (white)
    .fromTo(
      '.card_title h1',
      { opacity: 0, scale: 1, color: '#fff' },
      { opacity: 1, scale: 1.2, color: '#fff' }
    )

    // Keep title small
    .to('.card_title h1', { scale: 0.7, opacity: 1 })

    // 🔥 Purple → Feature card swap
    .to('.purple_card', { opacity: 0 }, '>')
    .to('.feature_card', { opacity: 1 }, '<')

    // Change title color
    .to('.card_title h1', { color: '#000' }, '<')

    // ⬇️ NEW — Show icons only when feature card is visible
    .to('.feature_icons', { opacity: 1, duration: 1 }, '<')

    // Border animation
    .fromTo(
      '.card_border',
      { border: '2px solid transparent', borderRadius: '30px' },
      { border: '2px solid white', borderRadius: '30px' },
      '<'
    )

    // Slide in side cards
    .fromTo('.slide_contents', { y: 1900 }, { y: 0 });
};
