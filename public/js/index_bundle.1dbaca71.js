!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3),n(4);const r=document.querySelector(".search-input");r.addEventListener("click",(function(){r.style.width="10rem",r.style.height="2.5rem"})),r.addEventListener("blur",(function(){r.style.width="3rem",r.style.height="3rem"}));const o=document.querySelector(".main-magazine");let u,i,f=!1;o.addEventListener("mousedown",e=>{f=!0,u=e.pageX-o.offsetLeft,i=o.scrollLeft}),o.addEventListener("mouseleave",()=>{f=!1}),o.addEventListener("mouseup",()=>{f=!1}),o.addEventListener("mousemove",e=>{if(!f)return;e.preventDefault();const t=3*(e.pageX-o.offsetLeft-u);o.scrollLeft=i-t})},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){}]);