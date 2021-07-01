// *=========================================
// ** Hiding Text area label on scroll  **
// *=========================================

const textAreaLabel = document.querySelector('.text-area-label');
const textAreaInput = document.querySelector('.text-area-input');

function textAreaScrollHandler() {
  if (textAreaInput.scrollTop > 3) {
    textAreaLabel.classList.add('fade-out');
    console.log('Scrolled');
  } else if (textAreaInput.scrollTop > 20) {
    textAreaInput.style.lineHeight = '10rem';
  } else {
    textAreaLabel.classList.remove('fade-out');
  }
}

function textArealabelHide() {
  textAreaInput.addEventListener('scroll', textAreaScrollHandler);
}

// *=========================================
// ** Nav Trigger  **
// *=========================================

function openCloseNav() {
  const mainNav = document.querySelector('.main-nav');
  const mainNavTrigger = document.querySelector('#main-nav-trigger');
  const mainNavCloser = document.querySelector('#main-nav-closer ');
  // console.log({ mainNav, mainNavTrigger, mainNavCloser });

  mainNavTrigger.addEventListener('click', () => {
    mainNav.style.transform = 'translateX(0)';
    mainNav.style.opacity = 1;
  });

  mainNavCloser.addEventListener('click', () => {
    mainNav.style.transform = 'translateX(-100%)';
    mainNav.style.opacity = 0;
  });
}

// *=========================================
// ** Main nav background swap  **
// *=========================================

function navBackgroundSwap() {
  // Get current page nav link and remove it from the DOM so you can use :nth-child to select remaining nav links
  const currentPage = document.querySelector('#main-nav-current');
  if (currentPage) currentPage.remove();

  // Get main nav and menu links
  const mainNav = document.querySelector('.main-nav');
  const oddMenuLink = document.querySelectorAll('.main-nav-link:nth-child(odd)');
  const evenMenuLink = document.querySelectorAll('.main-nav-link:nth-child(even)');
  // const thirdMenuLink = document.querySelector('.main-nav-link:nth-child(3)');

  // Set media queries so you can load correct size backgrounds
  const bigScreen = window.matchMedia('(min-width: 1201px)');
  const mediumScreen = window.matchMedia('(max-width: 1200px)');
  const smallerScreen = window.matchMedia('(max-width: 900px)');
  const smallScreen = window.matchMedia('(max-width: 600px)');

  oddMenuLink.forEach((link) => {
    link.addEventListener('mouseover', () => {
      if (smallScreen.matches) {
        mainNav.style.backgroundImage = "url('/images/from-orkney-600.png')";
      } else if (smallerScreen.matches) {
        mainNav.style.backgroundImage = "url('/images/from-orkney-900.png')";
      } else if (mediumScreen.matches) {
        mainNav.style.backgroundImage = "url('/images/from-orkney-1200.png')";
      } else if (bigScreen.matches) {
        mainNav.style.backgroundImage = "url('/images/from-orkney-2000.png')";
      }
    });
  });

  evenMenuLink.forEach((link) => {
    link.addEventListener('mouseover', () => {
      if (smallScreen.matches) {
        mainNav.style.backgroundImage = "url('/images/beech-600.jpg')";
      } else if (smallerScreen.matches) {
        mainNav.style.backgroundImage = "url('/images/beech-900.jpg')";
      } else if (mediumScreen.matches) {
        mainNav.style.backgroundImage = "url('/images/beech-1200.jpg')";
      } else if (bigScreen.matches) {
        mainNav.style.backgroundImage = "url('/images/beech-2000.jpg')";
      }
    });
  });
}

// *==============================================================================
// ** Exports  **
// *==============================================================================

export { textArealabelHide, navBackgroundSwap, openCloseNav };
