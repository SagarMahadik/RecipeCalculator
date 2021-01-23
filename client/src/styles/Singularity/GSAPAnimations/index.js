import { gsap } from 'gsap';

export default {
  SlideInleft(target) {
    return gsap.fromTo(
      target,
      {
        x: -200,
        ease: 'power3.easeOut',
        autoAlpha: 0
      },
      {
        x: 0,
        ease: 'power3.easeOut',
        autoAlpha: 1,
        duration: 1.22
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
        ease: 'power2.easeIn',
        autoAlpha: 1,
        duration: 1.8
      }
    );
  },
  fadeOut(target, index) {
    return gsap.fromTo(
      target[index],
      {
        ease: 'power2.easeOut',
        autoAlpha: 1
      },
      {
        ease: 'power2.easeOut',
        autoAlpha: 0,
        duration: 0.4
      }
    );
  },
  SlideInleftSolwer(target) {
    return gsap.fromTo(
      target,
      {
        x: 0,
        ease: 'power3.easeOut',
        autoAlpha: 1
      },
      {
        x: -100,
        ease: 'power3.easeOut',
        autoAlpha: 0,
        duration: 1.22,
        scale: 1
      }
    );
  },
  bounceElement(target, index) {
    gsap.to(target[index], 0.5, {
      y: -15,
      ease: 'power2.easeOut'
    });
    gsap.to(target[index], 0.8, {
      y: 0,
      ease: 'bounce.easeOut',
      delay: 0.1
    });
  },
  slideElementToRight(target, index) {
    return gsap.fromTo(
      target[index],
      {
        x: 0
      },
      {
        duration: 1.0,
        translateX: '100%',
        ease: 'power3.easeOut'
      }
    );
  },
  SildeLeftContainer(target) {
    return gsap.fromTo(
      target,
      {
        autoAlpha: 0,
        x: -400
      },
      {
        duration: 1.4,
        autoAlpha: 1,
        x: 0,
        delay: 1,
        ease: 'power3.easeOut'
      }
    );
  },
  IconBounce(element, index) {
    gsap.to(element[index], 0.5, {
      y: -100,
      ease: 'power2.easeOut'
    });
    gsap.to(element[index], 0.8, {
      y: 0,
      ease: 'bounce.easeOut',
      delay: 0.0
    });
  }
};
