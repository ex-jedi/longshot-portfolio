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

export { textArealabelHide };
