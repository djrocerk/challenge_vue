if(!self.define){let e,s={};const l=(l,n)=>(l=new URL(l+".js",n).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const t=e=>l(e,c),o={module:{uri:c},exports:r,require:t};s[c]=Promise.all(n.map((e=>o[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"challenge-typescript"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/challenge_vue/dist/css/app.c88978c2.css",revision:null},{url:"/challenge_vue/dist/css/chunk-vendors.1944359c.css",revision:null},{url:"/challenge_vue/dist/img/logo.151b5b4c.webp",revision:null},{url:"/challenge_vue/dist/index.html",revision:"20996b244d79715ab4e9b8420826ca46"},{url:"/challenge_vue/dist/js/app.e120b90b.js",revision:null},{url:"/challenge_vue/dist/js/chunk-vendors.b2d002df.js",revision:null},{url:"/challenge_vue/dist/manifest.json",revision:"27e0500b3b9004c8094bc1fc3eb8e8b1"},{url:"/challenge_vue/dist/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
