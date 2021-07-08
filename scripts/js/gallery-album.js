// *==============================================================================
// ** Imports  **
// *==============================================================================
import { flickityInit } from './lib';
import { navBackgroundSwap, openCloseNav } from './utils';
import { swipeTextAnimation } from './animations';

// *=========================================
// ** Flickity  **
// *=========================================

flickityInit();

navBackgroundSwap();

openCloseNav();

swipeTextAnimation();
