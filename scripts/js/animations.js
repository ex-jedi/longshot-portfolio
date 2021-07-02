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

// *==============================================================================
// ** Page Animations  **
// *==============================================================================

// *=========================================
// ** Homepage  **
// *=========================================

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

export { splitTextFunction };
