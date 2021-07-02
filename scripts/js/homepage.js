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
import { splitTextFunction, fadeandShrinkFunction, homepageHeaderBreathe, homepageGalleryFade } from './animations';

// !=========================================
// ! GSAP  **
// !=========================================

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

setTimeout(() => {
  ScrollTrigger.refresh();
}, 1000);

// !=========================================
// ! Animations  **
// !=========================================

// !

// *==============================================================================
// ** Page JS  **
// *==============================================================================

// *==============================================================================
// ** Imported  **
// *==============================================================================

// ********** Nav Background Swap **********
navBackgroundSwap();

// ********** Nav **********
openCloseNav();

// ********** Fade and shrink function **********
fadeandShrinkFunction();

// ********** Split text **********
splitTextFunction();

// ********** Homepage Header Breathe **********
homepageHeaderBreathe();

// ********** Homepage Gallery Fade **********
homepageGalleryFade();
