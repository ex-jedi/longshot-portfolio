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
  const currentPage = document.querySelector('#main-nav-current');
  console.log(currentPage);
  currentPage.remove();

  const mainNav = document.querySelector('.main-nav');

  const firstMenuLink = document.querySelector('.main-nav-link:nth-child(1)');
  const secondMenuLink = document.querySelector('.main-nav-link:nth-child(2)');

  firstMenuLink.addEventListener('mouseover', () => {
    mainNav.style.backgroundImage = "url('/images/from-orkney-2000.png')";
  });

  secondMenuLink.addEventListener('mouseover', () => {
    mainNav.style.backgroundImage = "url('/images/beech.jpg')";
  });
}

// ********** Console Log Elements Wider Then Viewport **********
// const docWidth = document.documentElement.offsetWidth;

// [].forEach.call(document.querySelectorAll('*'), function (el) {
//   if (el.offsetWidth > docWidth) {
//     console.log(el);
//   }
// });

// console.log('Hi');

// *==============================================================================
// ** Exports  **
// *==============================================================================

export { textArealabelHide, navBackgroundSwap, openCloseNav };
