!function(){"use strict";var e=[,function(e,n,t){t.r(n),t.d(n,{textArealabelHide:function(){return a},navBackgroundSwap:function(){return l},openClosenav:function(){return u}});const o=document.querySelector(".text-area-label"),r=document.querySelector(".text-area-input");function c(){r.scrollTop>3?(o.classList.add("fade-out"),console.log("Scrolled")):r.scrollTop>20?r.style.lineHeight="10rem":o.classList.remove("fade-out")}function a(){r.addEventListener("scroll",c)}function u(){const e=document.querySelector(".main-nav");document.querySelector("#main-nav-trigger").addEventListener("click",(()=>e.style.transform="translateX(0)"))}function l(){const e=document.querySelector("#main-nav-current");console.log(e),e.remove();const n=document.querySelector(".main-nav"),t=document.querySelector(".main-nav-link:nth-child(1)"),o=document.querySelector(".main-nav-link:nth-child(2)");t.addEventListener("mouseover",(()=>{n.style.backgroundImage="url('/images/from-orkney-2000.png')"})),o.addEventListener("mouseover",(()=>{n.style.backgroundImage="url('/images/beech.jpg')"}))}}],n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var c=n[o]={exports:{}};return e[o](c,c.exports,t),c.exports}t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};t.r(o),(0,t(1).navBackgroundSwap)()}();
//# sourceMappingURL=about-me-min.js.map