(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[120,145],{729:function(e,a,t){e.exports=t.p+"static/media/astro3.4e14373e.jpg"},848:function(e,a,t){"use strict";t.r(a);var l=t(22),n=t(0),s=t.n(n),c=t(3);t(729);a.default=function(e){var a=e.data,t=e.sliderClass,r=e.sliderdemoClass,i=Object(n.useState)(""),o=Object(l.a)(i,2),m=(o[0],o[1],Object(n.useState)(a)),u=Object(l.a)(m,2),d=(u[0],u[1]);return Object(n.useEffect)((function(){d(a)}),[a]),s.a.createElement("div",{className:"".concat(r||" slider-demo"," text-center ").concat(t||""," st-hit")},s.a.createElement("div",{className:"image-flip"},s.a.createElement("div",{className:"mainflip flip-0"},s.a.createElement("div",{className:"frontside"},s.a.createElement(c.c,{to:"/astrologerdetail/"+a._id},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body text-center"},s.a.createElement("p",null,s.a.createElement("img",{src:null===a||void 0===a?void 0:a.img,alt:""})),s.a.createElement("h4",{className:"card-title"},null===a||void 0===a?void 0:a.fullname),s.a.createElement("ul",{className:"mb-3"},s.a.createElement("li",null,"Specility: ",s.a.createElement("span",null,null===a||void 0===a?void 0:a.all_skills)),s.a.createElement("li",null,"Language: ",s.a.createElement("span",null,null===a||void 0===a?void 0:a.language)),s.a.createElement("li",null,"Experience: ",s.a.createElement("span",null,null===a||void 0===a?void 0:a.exp_in_years)),s.a.createElement("li",null,"Call Rate:"," ",s.a.createElement("span",null,null===a||void 0===a?void 0:a.callCharge,"/",null===a||void 0===a?void 0:a.conrubute_hrs))))))))))}},902:function(e,a,t){"use strict";t.r(a);var l=t(22),n=t(0),s=t.n(n),c=t(690),r=t.n(c),i=t(212),o=t.n(i),m=t(848),u=t(26);a.default=function(e){var a=e.spaceTopClass,t=e.spaceBottomClass,c=e.spaceLeftClass,i=e.spaceRightClass,d=e.bgColorClass,p=e.sliderdemoClass,v=(e.backgroundImage,{loop:!0,slidesPerView:4,grabCursor:!0,spaceBetween:10,breakpoints:{1024:{slidesPerView:4},768:{slidesPerView:3},640:{slidesPerView:2},320:{slidesPerView:1}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},renderPrevButton:function(){return s.a.createElement("button",{className:"swiper-button-prev ht-swiper-button-nav gt-1"},s.a.createElement("i",{className:"pe-7s-angle-left"}))},renderNextButton:function(){return s.a.createElement("button",{className:"swiper-button-next ht-swiper-button-nav gt-2"},s.a.createElement("i",{className:"pe-7s-angle-right"}))}}),E=Object(n.useState)([]),f=Object(l.a)(E,2),g=f[0],b=f[1];return Object(n.useEffect)((function(){u.a.get("/admin/allAstro").then((function(e){console.log(e.data.data),!0===e.data.status&&b(e.data.data)})).catch((function(e){console.log(e)}))}),[]),s.a.createElement("div",{className:" ".concat(a||"","  ").concat(t||""," ").concat(c||"","  ").concat(i||""," ").concat(d||"")},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12  ml-auto mr-auto"},s.a.createElement("div",{className:"heading"},s.a.createElement("h2",null,"Best Astrologers"),s.a.createElement("img",{src:o.a,alt:""})),s.a.createElement("div",{className:" nav-style-1 nav-testi-style"},s.a.createElement(r.a,v,g&&g.map((function(e,a){return s.a.createElement(m.default,{data:e,key:a,sliderClass:"swiper-slide rtt",sliderdemoClass:p})}))))))))}}}]);
//# sourceMappingURL=120.57524623.chunk.js.map