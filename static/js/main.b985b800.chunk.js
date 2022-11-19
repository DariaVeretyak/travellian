(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{31:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(26),r=n.n(c),i=n(10),s=n(2),o=n(3),d=n(24),l=n.n(d),b=n(7);function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"max",t="_dynamic_adapt_",n="data-da";function a(t){var n="min"===e?1:0;return Object(b.a)(t).sort((function(e,t){return e.breakpoint===t.breakpoint?e.order===t.order?0:"first"===e.order||"last"===t.order?-1*n:"last"===e.order||"first"===t.order?1*n:0:(e.breakpoint-t.breakpoint)*n}))}function c(){var e=[];return Object(b.a)(document.querySelectorAll("[".concat(n,"]"))).forEach((function(t){var a=t.getAttribute(n).split(",").map((function(e){return e.trim()})),c=Object(o.a)(a,3),r=c[0],i=c[1],s=c[2],d=document.querySelector(r);d&&e.push({parent:t.parentElement,element:t,to:d,breakpoint:null!==i&&void 0!==i?i:"767",order:void 0!==s?s:"last",index:-1})})),a(e)}function r(t){return Object(b.a)(new Set(t.map((function(t){var n=t.breakpoint;return"(".concat(e,"-width: ").concat(n,"px),").concat(n)})))).map((function(e){var t=e.split(","),n=Object(o.a)(t,2);return{query:n[0],breakpoint:n[1]}}))}var i=c();function s(e,t){return Object(b.a)(t.children).indexOf(e)}function d(e){var n=e.to,a=e.element,c=e.order;e.index=s(e.element,e.element.parentElement),a.classList.add(t),"last"===c||c>=n.children.length?n.append(a):"first"!==c?n.children[c].before(a):n.prepend(a)}function l(e){var n=e.parent,a=e.element,c=e.index;a.classList.remove(t),c>=0&&n.children[c]?n.children[c].before(a):n.append(a)}function j(e,n){return function(){e.matches?(n.forEach((function(e){d(e)})),n.reverse()):(n.forEach((function(e){e.element.classList.contains(t)&&l(e)})),n.reverse())}}var p=r(i);p.forEach((function(e){var t=window.matchMedia(e.query),n=j(t,i.filter((function(t){return t.breakpoint===e.breakpoint})));t.addEventListener("change",n),n()}))}n(31);var p=n(4),u=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],r=window.screen.width;return j(),Object(a.useEffect)((function(){j()}),[r]),Object(p.jsxs)("div",{className:"Header",id:"header",children:[Object(p.jsx)("div",{className:"Header__logo"}),Object(p.jsxs)("nav",{className:l()("Header__nav + ".concat(n?"Header__nav--open":"")),children:[Object(p.jsx)(i.b,{to:"/home",className:"Header__link",children:"Home"}),Object(p.jsx)(i.b,{to:"/explore",className:"Header__link",children:"Explore"}),Object(p.jsx)(i.b,{to:"/travel",className:"Header__link",children:"Travel"}),Object(p.jsx)(i.b,{to:"/blog",className:"Header__link",children:"Blog"}),Object(p.jsx)(i.b,{to:"/pricing",className:"Header__link",children:"Pricing"})]}),Object(p.jsxs)("div",{className:"Header__actions",children:[Object(p.jsx)(i.b,{to:"/login",className:"Header__link Header__link--login","data-da":".Header__nav--open, 510, first",children:"Login"}),Object(p.jsx)("button",{type:"button",className:"Header__signUp","data-da":".Header__nav--open, 770, last",children:Object(p.jsx)(i.b,{to:"/signUp",className:"Header__link Header__link--sign-up",children:"Sign up"})}),Object(p.jsx)("button",{className:l()("Header__hamburger + ".concat(n?"Header__hamburger--open":"")),type:"button",onClick:function(){return c(!n)},children:"."})]})]})},m=n(9),f=n(25),h=(n(34),n(35),n(36),n(37),n(38),function(){return Object(p.jsxs)(f.a,{direction:"vertical",autoplay:{delay:3500,disableOnInteraction:!1},navigation:{prevEl:".prev",nextEl:".next"},modules:[m.a,m.c,m.b],pagination:{clickable:!0},className:"Swiper",children:[["https://mobimg.b-cdn.net/v3/fetch/d6/d6c21a0e2f57fa69929d5358f30002a7.jpeg","https://mobimg.b-cdn.net/v3/fetch/19/196f89fbb0f5978443b9de32de99becc.jpeg","https://mobimg.b-cdn.net/v3/fetch/55/55fd01f4d0b0a49a0dd17adb1d2d103d.jpeg","https://mobimg.b-cdn.net/v3/fetch/a2/a2517c612d33ca455b5447149eceff81.jpeg","https://mobimg.b-cdn.net/v3/fetch/42/422f8b74c7439b23f1286bb4e61e0402.jpeg"].map((function(e){return Object(p.jsx)(f.b,{children:Object(p.jsx)("div",{className:"Swiper__img",style:{backgroundImage:"url(".concat(e,")")}})},e)})),Object(p.jsx)("div",{className:"prev"}),Object(p.jsx)("div",{className:"next"})]})}),v=(n(39),function(){for(var e=[],t=2;t<=8;t+=1)e.push(t);return Object(p.jsx)("section",{className:"HomePage",children:Object(p.jsx)("div",{className:"HomePage__slider slider",children:Object(p.jsx)(h,{})})})}),_=(n(40),function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(u,{}),Object(p.jsxs)("div",{className:"App__mainBlock",children:[Object(p.jsx)(v,{}),Object(p.jsxs)(s.d,{children:[Object(p.jsx)(s.b,{path:"/home",element:Object(p.jsx)(s.a,{to:"/",replace:!0})}),Object(p.jsx)(s.b,{path:"/home",element:Object(p.jsx)(s.a,{to:"/",replace:!0})})]})]})]})});n(41);r.a.render(Object(p.jsx)(i.a,{children:Object(p.jsx)(_,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.b985b800.chunk.js.map