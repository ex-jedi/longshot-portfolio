// *==============================================================================
// ** Imports  **
// *==============================================================================

import * as Flickity from 'flickity';
import 'flickity-imagesloaded';

// *=========================================
// ** Flickity  **
// *=========================================

function flickityInit() {
  const carousel = document.querySelector('.gallery-carousel');
  const flkty = new Flickity(carousel, {
    imagesLoaded: true,
    autoPlay: 1000,
    prevNextButtons: false,
    wrapAround: true,
    selectedAttraction: 0.006,
    friction: 0.15,
  });
}

export { flickityInit };
