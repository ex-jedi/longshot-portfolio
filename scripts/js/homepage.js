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

import { textArealabelHide, navBackgroundSwap, openCloseNav } from './utils';

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

// ********** Split Text Fade Up **********

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

// !

// *==============================================================================
// ** Page JS  **
// *==============================================================================

// *==============================================================================
// ** Imported  **
// *==============================================================================

// ********** Homepage Parallax **********

textArealabelHide();

// ********** Nav Background Swap **********

navBackgroundSwap();

// ********** Nav **********
openCloseNav();
