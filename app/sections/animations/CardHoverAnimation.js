import gsap from 'gsap';
import { Observer } from 'gsap/Observer';

export const CardHoverAnimation = () => {
  gsap.registerPlugin(Observer);

  Observer.create({
    target: '.purple_card',
    type: 'pointer',
    onHover: () => {
      gsap.to('.payusd', {
        scale: 0,
        duration: 0.5,
        opacity: 0,
      });

      gsap.to('.subtitle', {
        opacity: 0,
        duration: 0.5,
      });

      gsap.to('.lower_subtitle', {
        opacity: 1,
        duration: 0.5,
        y: -5,
      });

      gsap.to('.payeth', {
        y: -70,
        x: -80,
        ease: 'back.out',
        duration: 0.5,
        delay: 0.06,
      });

      gsap.to('.payusdc', {
        opacity: 1,
        ease: 'back.out',
        scale: 1,
      });

      gsap.to('.swap_icon', {
        rotate: -180,
        y: -35,
        duration: 0.5,
        backgroundColor: 'var(--purple-lighter)',
        color: 'var(--purple-dark)',
        ease: 'back.out',
      });

      // gsap.to(".purple_card", {
      //     height: "250%",
      //     duration: 0.5,
      //     ease: 'back'
      // })
    },
    onHoverEnd: () => {
      gsap.to('.payusd', {
        scale: 1,
        ease: 'back.out',
        opacity: 1,
      });

      gsap.to('.subtitle', {
        opacity: 1,
        duration: 0.5,
      });

      gsap.to('.lower_subtitle', {
        opacity: 0,
        duration: 0.1,
        y: 0,
      });

      gsap.to('.payeth', {
        y: 0,
        x: 0,
        ease: 'back.out',
      });

      gsap.to('.swap_icon', {
        rotate: 0,
        y: 0,
        duration: 0.5,
        ease: 'back.out',
        color: 'var(--purple-lighter)',
        backgroundColor: 'var(--purple-light)',
      });
      // gsap.to(".purple_card", {
      //     height: "150%",
      //     duration: 0.5,
      //     ease: 'back'
      // })

      gsap.to('.payusdc', {
        opacity: 0,
        scale: 0,
        ease: 'back.out',
      });
    },
  });
};
