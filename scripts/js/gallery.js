// *==============================================================================
// ** Imports  **
// *==============================================================================
import { flickityInit } from './lib';

// *=========================================
// ** Flickity  **
// *=========================================

flickityInit();

const currentPage = document.querySelector('#main-nav-current');
console.log(currentPage);
currentPage.remove();
