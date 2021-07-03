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
      // markers: true,
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
    '.homepage-header-background-image',
    { scale: 1 },
    {
      scale: 1.5,
      duration: 30,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    }
  );
}

// ********** Homepage Gallery Fade **********

function homepageGalleryFade() {
  const triggerElem = document.querySelector('.homepage-gallery-section');

  ScrollTrigger.create({
    trigger: triggerElem,
    start: 'top 90%',
    end: 'bottom 10%',
    id: 'Image grid',
    // markers: true,
    onEnter: () =>
      gsap.fromTo(
        '.homepage-gallery-image',
        { opacity: 0, scale: 1.2 },
        { opacity: 1, scale: 1, duration: 1, stagger: { each: 0.3, from: 'start' } }
      ),
    onEnterBack: () =>
      gsap.fromTo(
        '.homepage-gallery-image',
        { opacity: 0, scale: 1.2 },
        { opacity: 1, scale: 1, duration: 1, stagger: { each: 0.3, from: 'end' } }
      ),
    onLeave: () =>
      gsap.to('.homepage-gallery-image', { opacity: 0, duration: 0.5, stagger: { each: 0.1, from: 'end' } }),
    onLeaveBack: () =>
      gsap.fromTo(
        '.homepage-gallery-image',
        { opacity: 1, scale: 1.2 },
        { opacity: 0, duration: 0.5, stagger: { each: 0.3, from: 'start' } }
      ),
  });
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
// ** About me Paragraphs  **
// *=========================================

function aboutMeparagraphFunction() {
  const fadeparas = gsap.utils.toArray(document.querySelectorAll('.about-me-section p'));

  fadeparas.forEach((paras) => {
    gsap.set(paras, { opacity: 0, x: 20 });

    ScrollTrigger.create({
      trigger: paras,
      start: 'top 70%',
      end: 'bottom 20%',
      once: true,
      id: 'Paragraph Fade',
      // markers: true,
      onEnter: () => gsap.to(paras, { opacity: 1, x: 0, duration: 0.5 }),
    });
  });
}

// *==============================================================================
// ** Utils  **
// *==============================================================================

// * ScrollTrigger Refresh
function scrollTriggerRefresh(time = 1000) {
  const scrollTriggerRefreshTarget = document.querySelectorAll('.scrolltrigger-refresh-target');
  window.addEventListener('load', () => {
    setTimeout(() => {
      // console.log(`✨ ScrollTrigger refresh created after ${time}ms ✨`);
      scrollTriggerRefreshTarget.forEach((triggerElem) => {
        ScrollTrigger.create({
          trigger: triggerElem,
          start: 'top bottom',
          once: true,
          id: 'ScrollTrigger Refresh',
          // markers: true,
          onEnter: () => {
            ScrollTrigger.refresh();
            // console.log('⚡ ScrollTrigger Refresh Triggered ⚡');
          },
        });
      });
    }, time);
  });
}

// *=========================================
// ** Exports  **
// *=========================================

export {
  splitTextFunction,
  fadeandShrinkFunction,
  homepageHeaderBreathe,
  homepageGalleryFade,
  scrollTriggerRefresh,
  aboutMeparagraphFunction,
};
