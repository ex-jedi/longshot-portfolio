!function(){"use strict";var e=[,function(e,t,n){n.r(t),n.d(t,{textArealabelHide:function(){return c},navBackgroundSwap:function(){return u},openCloseNav:function(){return l}});const o=document.querySelector(".text-area-label"),r=document.querySelector(".text-area-input");function a(){r.scrollTop>3?(o.classList.add("fade-out"),console.log("Scrolled")):r.scrollTop>20?r.style.lineHeight="10rem":o.classList.remove("fade-out")}function c(){r.addEventListener("scroll",a)}function l(){const e=document.querySelector(".main-nav"),t=document.querySelector("#main-nav-trigger"),n=document.querySelector("#main-nav-closer ");t.addEventListener("click",(()=>{e.style.transform="translateX(0)",e.style.opacity=1})),n.addEventListener("click",(()=>{e.style.transform="translateX(-100%)",e.style.opacity=0}))}function u(){const e=document.querySelector("#main-nav-current");console.log(e),e.remove();const t=document.querySelector(".main-nav"),n=document.querySelector(".main-nav-link:nth-child(1)"),o=document.querySelector(".main-nav-link:nth-child(2)");n.addEventListener("mouseover",(()=>{t.style.backgroundImage="url('/images/from-orkney-2000.png')"})),o.addEventListener("mouseover",(()=>{t.style.backgroundImage="url('/images/beech.jpg')"}))}}],t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};!function(){n.r(o);var e=n(1);(0,e.navBackgroundSwap)(),(0,e.openCloseNav)()}()}();
//# sourceMappingURL=about-me-min.js.map