// !==============================================================================
// FIXME: Building animations
// !==============================================================================

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// !

// *==============================================================================
// ** Imports  **
// *==============================================================================

import { navBackgroundSwap, openCloseNav } from './utils';
import { splitTextFunction } from './animations';

// !=========================================
// ! GSAP  **
// !=========================================

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

// ********** Homepage header breathe **********

gsap.fromTo(
  '.main-header',
  { backgroundSize: '100vh 100vh' },
  { backgroundSize: '130vh 130vh', duration: 30, repeat: -1, yoyo: true, ease: 'power1.inOut' }
);

// ********** Image Shrink **********

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

gsap.utils.toArray('.shrinking-image').forEach((elem) => {
  imageShrinkFunction(elem);
});

// setTimeout(() => {
//   ScrollTrigger.refresh();
// }, 500);

// !

// *==============================================================================
// ** Page JS  **
// *==============================================================================

// *==============================================================================
// ** Imported  **
// *==============================================================================

splitTextFunction();

// ********** Nav Background Swap **********

navBackgroundSwap();

// ********** Nav **********
openCloseNav();
