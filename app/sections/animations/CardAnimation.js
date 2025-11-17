import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const CardAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const card_tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.card_section',
      scrub: 2,
      start: 'center center',
      end: '+=1200',
      pin: true,
    },
    defaults: { ease: 'power3.out', duration: 1.5 },
  });

  card_tl
    // Intro
    .fromTo(
      '.card_component',
      {
        opacity: 0,
        rotateY: 60,
        rotateX: 45,
        transformPerspective: 2300,
        transformOrigin: 'center top',
      },
      { opacity: 1, rotateX: 0, rotateY: 0 }
    )

    // Title intro (white text for purple card)
    .fromTo(
      '.card_title h1',
      { opacity: 0, scale: 1, color: '#fff' }, // start white
      { opacity: 1, scale: 1.2, color: '#fff' } // end white
    )

    // Keep title small
    .to('.card_title h1', { scale: 0.7, opacity: 1 })

    // 🔥 Purple → Feature card swap
    .to('.purple_card', { opacity: 0 }, '>') // fade out purple
    .to('.feature_card', { opacity: 1 }, '<') // fade in feature card

    // Ensure title is black when feature card shows
    .to('.card_title h1', { color: '#000' }, '<')

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
