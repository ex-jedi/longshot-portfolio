!function(){"use strict";var e=[,function(e,t,n){n.r(t),n.d(t,{textArealabelHide:function(){return c},navBackgroundSwap:function(){return l},openCloseNav:function(){return i}});const r=document.querySelector(".text-area-label"),o=document.querySelector(".text-area-input");function a(){o.scrollTop>3?(r.classList.add("fade-out"),console.log("Scrolled")):o.scrollTop>20?o.style.lineHeight="10rem":r.classList.remove("fade-out")}function c(){o.addEventListener("scroll",a)}function i(){const e=document.querySelector(".main-nav"),t=document.querySelector("#main-nav-trigger"),n=document.querySelector("#main-nav-closer ");t.addEventListener("click",(()=>{e.style.transform="translateX(0)",e.style.opacity=1})),n.addEventListener("click",(()=>{e.style.transform="translateX(-100%)",e.style.opacity=0}))}function l(){const e=document.querySelector("#main-nav-current");e&&e.remove();const t=document.querySelector(".main-nav"),n=document.querySelectorAll(".main-nav-link:nth-child(odd)"),r=document.querySelectorAll(".main-nav-link:nth-child(even)"),o=window.matchMedia("(min-width: 1201px)"),a=window.matchMedia("(max-width: 1200px)"),c=window.matchMedia("(max-width: 900px)"),i=window.matchMedia("(max-width: 600px)");n.forEach((e=>{e.addEventListener("mouseover",(()=>{i.matches?t.style.backgroundImage="url('/images/from-orkney-600.png')":c.matches?t.style.backgroundImage="url('/images/from-orkney-900.png')":a.matches?t.style.backgroundImage="url('/images/from-orkney-1200.png')":o.matches&&(t.style.backgroundImage="url('/images/from-orkney-2000.png')")}))})),r.forEach((e=>{e.addEventListener("mouseover",(()=>{i.matches?t.style.backgroundImage="url('/images/beech-600.jpg')":c.matches?t.style.backgroundImage="url('/images/beech-900.jpg')":a.matches?t.style.backgroundImage="url('/images/beech-1200.jpg')":o.matches&&(t.style.backgroundImage="url('/images/beech-2000.jpg')")}))}))}}],t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};!function(){n.r(r);var e=n(1);(0,e.navBackgroundSwap)(),(0,e.openCloseNav)()}()}();
//# sourceMappingURL=gallery-min.js.map