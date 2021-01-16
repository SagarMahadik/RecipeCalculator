import { gsap } from 'gsap';

export default {
  verticalBounce(target) {
    return gsap.fromTo(
      target,
      {
        y: -200,
        autoAlpha: 0
      },
      {
        y: 0,
        ease: 'bounce',
        duration: 2.5,
        delay: 0.5,
        autoAlpha: 1
      }
    );
  },
  fadeIn(target) {
    return gsap.fromTo(
      target,
      {
        ease: 'power2.easeIn',
        autoAlpha: 0
      },
      {
        ease: 'power2.easeOut',
        autoAlpha: 1,
        duration: 1.0
      }
    );
  },
  slideUp(target) {
    return gsap.fromTo(
      target,
      {
        ease: 'power2.easeIn',
        y: 200
      },
      {
        ease: 'power2.easeOut',
        y: 0,
        duration: 2,
        delay: 0.5
      }
    );
  }
};
