!function(){"use strict";var e=[,function(e,t,n){n.r(t),n.d(t,{textArealabelHide:function(){return c},navBackgroundSwap:function(){return l},openCloseNav:function(){return i}});const r=document.querySelector(".text-area-label"),o=document.querySelector(".text-area-input");function a(){o.scrollTop>3?(r.classList.add("fade-out"),console.log("Scrolled")):o.scrollTop>20?o.style.lineHeight="10rem":r.classList.remove("fade-out")}function c(){o.addEventListener("scroll",a)}function i(){const e=document.querySelector(".main-nav"),t=document.querySelector("#main-nav-trigger"),n=document.querySelector("#main-nav-closer ");t.addEventListener("click",(()=>{e.style.transform="translateX(0)",e.style.opacity=1})),n.addEventListener("click",(()=>{e.style.transform="translateX(-100%)",e.style.opacity=0}))}function l(){document.querySelector("#main-nav-current").remove();const e=document.querySelector(".main-nav"),t=document.querySelector(".main-nav-link:nth-child(1)"),n=document.querySelector(".main-nav-link:nth-child(2)"),r=window.matchMedia("(min-width: 1201px)"),o=window.matchMedia("(max-width: 1200px)"),a=window.matchMedia("(max-width: 900px)"),c=window.matchMedia("(max-width: 600px)");t.addEventListener("mouseover",(()=>{c.matches?e.style.backgroundImage="url('/images/from-orkney-600.png')":a.matches?e.style.backgroundImage="url('/images/from-orkney-900.png')":o.matches?e.style.backgroundImage="url('/images/from-orkney-1200.png')":r.matches&&(e.style.backgroundImage="url('/images/from-orkney-2000.png')")})),n.addEventListener("mouseover",(()=>{e.style.backgroundImage="url('/images/beech.jpg')"}))}}],t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};!function(){n.r(r);var e=n(1);(0,e.textArealabelHide)(),(0,e.navBackgroundSwap)(),(0,e.openCloseNav)()}()}();
//# sourceMappingURL=homepage-min.js.map