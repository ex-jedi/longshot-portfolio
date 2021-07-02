// *==============================================================================
// ** Imports  **
// *==============================================================================

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// *=========================================
// ** GSAP  **
// *=========================================

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

// *==============================================================================
// ** GSAP Animations For Multiple Pages  **
// *==============================================================================

// *=========================================
// ** Split Text Fade Up  **
// *=========================================

function splitTextFunction() {
  const splitTextFadeUpTargets = gsap.utils.toArray('.split-text-fade-up');

  splitTextFadeUpTargets.forEach((elem) => {
    const splitFadeUpElements = new SplitText(elem, { type: 'lines' });

    const splitTextLines = splitFadeUpElements.lines;

    gsap.set(splitTextLines, { opacity: 0, x: 20 });

    ScrollTrigger.create({
      trigger: elem,
      start: 'top center',
      end: 'bottom top',
      id: 'Split Text Animaton',
      once: true,
      // markers: true,
      onEnter: () => {
        gsap.fromTo(
          splitTextLines,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 2, stagger: 0.1, ease: 'power4.out' }
        );
      },
    });
  });
}

// *=========================================
// ** Image Fade And Shrink   **
// *=========================================

function imageShrinkFunction(target) {
  const imageShrinkTimeline = gsap.timeline({
    scrollTrigger: {
      id: 'Shrinking Image',
      trigger: target.closest('.shrinking-image-wrapper'),
      start: 'top 90%',
      end: 'bottom top',
      scrub: 0.5,
      markers: true,
    },
  });

  imageShrinkTimeline
    .fromTo(target, { opacity: 0 }, { opacity: 1, duration: 0.1 })
    .fromTo(target, { scale: 1.5 }, { scale: 1, duration: 2 });
}

function fadeandShrinkFunction() {
  gsap.utils.toArray('.shrinking-image').forEach((elem) => {
    imageShrinkFunction(elem);
  });
}

// *=========================================
// ** Image Split  **
// *=========================================

// *==============================================================================
// ** Page Animations  **
// *==============================================================================

// *=========================================
// ** Homepage  **
// *=========================================

// ********** Homepage header breathe **********

function homepageHeaderBreathe() {
  gsap.fromTo(
    '.main-header',
    { backgroundSize: '100vw 100vh' },
    {
      backgroundSize: '130vw 130vh',
      duration: 30,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    }
  );
}

// ********** Homepage Parallax Image **********

function homepageParallax() {
  gsap.to('.parallax-image', {
    yPercent: -30,
    ease: 'none',
    scrollTrigger: {
      trigger: '.parallax-image-section',
      start: 'top bottom',
      end: 'bottom',
      scrub: 0.5,
    },
  });
}

// *=========================================
// ** Exports  **
// *=========================================

export { splitTextFunction, fadeandShrinkFunction, homepageHeaderBreathe };
