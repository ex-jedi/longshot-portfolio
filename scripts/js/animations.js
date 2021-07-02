// *==============================================================================
// ** Imports  **
// *==============================================================================

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// *=========================================
// ** GSAP  **
// *=========================================

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

// *=========================================
// ** Main Nav  **
// *=========================================

const mainNavTriggerWrapper = document.querySelector('.main-nav-trigger-wrapper');
const mainNavTrigger = document.querySelector('.main-nav-trigger');
const mainNav = document.querySelector('.main-nav');
const navLink = document.querySelectorAll('.main-nav-link');

// Restore pointerevents
function pointerEventsRestore() {
  mainNavTrigger.style.pointerEvents = 'auto';
  if (mainNav.dataset.state === 'open') {
    mainNavTrigger.textContent = 'CLOSE MENU';
    mainNavTrigger.style.padding = '0';
  } else {
    mainNavTrigger.textContent = 'MENU';
    mainNavTrigger.style.padding = '0 5rem';
    // Stripping out styles injected by GreenSock to show normal menu if screen is resized
    mainNav.removeAttribute('style');
    navLink.forEach((link) => link.removeAttribute('style'));
  }
}

// * Open menu

const openMenuTl = gsap.timeline({
  paused: true,
  defaults: { ease: 'power3.out', duration: 1, delay: 0 },
});

openMenuTl
  .to(mainNav, { y: '0%' })
  .addLabel('colorChange', '-=0.3')
  .to(navLink, { y: 0, opacity: 1, stagger: 0.2, duration: 0.5 }, 'colorChange')
  .to(mainNavTriggerWrapper, { backgroundColor: '#f4f1f0' }, 'colorChange')
  .to(mainNavTrigger, { color: '#6c9184', onComplete: pointerEventsRestore }, 'colorChange');

// * Close menu

const closeMenuTl = gsap.timeline({
  paused: true,
  defaults: { ease: 'power3.in', duration: 1, delay: 0 },
});

closeMenuTl
  .to(navLink, { y: 40, opacity: 0, stagger: -0.2, duration: 0.5 })
  .addLabel('colorChange', '-=0.5')
  .to(mainNavTriggerWrapper, { backgroundColor: '#6c9184' }, 'colorChange')
  .to(mainNavTrigger, { color: '#f4f1f0' }, 'colorChange')
  .to(mainNav, { y: '120%', onComplete: pointerEventsRestore }, 'colorChange');

function menuOpenerHandler() {
  if (mainNav.dataset.state === 'closed') {
    openMenuTl.restart();
    mainNavTrigger.style.pointerEvents = 'none';
    mainNav.dataset.state = 'open';
  } else {
    closeMenuTl.restart();
    mainNavTrigger.style.pointerEvents = 'none';
    mainNav.dataset.state = 'closed';
  }
}

// *==============================================================================
// ** GSAP Animations For Multiple Pages  **
// *==============================================================================

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

export { homepageParallax, menuOpenerHandler, mainNavTrigger, scrollColourChange };
