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
// ** Main nav background swap  **
// *=========================================

function navBackgroundSwap() {
  // const mainNav = document.querySelector('.main-nav');
  // const mainNavLink = document.querySelectorAll('.main-nav-link');
  // const backgroundImageOne = "url('/images/from-orkney-2000.png')";
  // const backgroundImageTwo = "url('/images/beech.jpg')";
  // mainNav.style.backgroundImage = backgroundImageOne;
  // function backgroundSwapHandler() {
  //   console.log(mainNav.style.backgroundImage);
  //   if (mainNav.style.backgroundImage === backgroundImageOne) {
  //     mainNav.style.backgroundImage = backgroundImageTwo;
  //   } else if (mainNav.style.backgroundImage === backgroundImageTwo) {
  //     mainNav.style.backgroundImage = backgroundImageOne;
  //   }
  // }
  // mainNavLink.forEach((link) => link.addEventListener('mouseenter', backgroundSwapHandler));
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

export { textArealabelHide, navBackgroundSwap };
