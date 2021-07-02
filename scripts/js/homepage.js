// !==============================================================================
// FIXME: Building animations
// !==============================================================================

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
  { backgroundSize: '130vh 130vh', duration: 30, repeat: -1, yoyo: true, ease: 'none' }
);

// ********** Image Shrink **********
gsap.utils.toArray('.shrinking-image').forEach((elem) => {
  gsap.fromTo(
    elem,
    { scale: 1.4 },
    {
      scale: 1,
      scrollTrigger: {
        trigger: elem,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
        markers: true,
      },
    }
  );
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
