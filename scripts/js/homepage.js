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
gsap.utils.toArray('.shrinking-image').forEach((elem) => {
  gsap.fromTo(
    elem,
    { scale: 1.4 },
    {
      scale: 1,
      scrollTrigger: {
        id: 'Shrinking Image',
        trigger: elem,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
        // markers: true,
      },
    }
  );
});

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
    markers: true,
    onEnter: () => {
      gsap.fromTo(
        splitTextLines,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 2, stagger: 0.1, ease: 'power4.out' }
      );
    },
  });
});

// gsap.fromTo(
//   splitFadeUpElements.lines,
//   { opacity: 0, translateX: '20px' },
//   { opacity: 1, translateX: 0, duration: 2, stagger: 0.1, ease: 'power4.out' }
// );

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
