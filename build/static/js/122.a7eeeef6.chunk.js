(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[122],{1243:function(e,t,a){"use strict";a.r(t);a(41);var n=a(22),c=a(0),o=a.n(c),l=(a(209),a(47)),i=a(23),r=a(119),s=a(59),u=a(118),d=a(676),m=a(26),f=a(340),v=a(680),b=a.n(v);t.default=Object(l.connect)((function(e){return{cartItems:e.cartData,wishlistItems:e.wishlistData,currency:e.currencyData}}),(function(e){return{addToCart:function(t,a,n){e(Object(s.g)(t,a,n))},addToWishlist:function(t,a,n){e(Object(r.d)(t,a,n))},deleteFromWishlist:function(t,a,n){e(Object(r.f)(t,a,n))},deleteAllFromWishlist:function(t){e(Object(r.e)(t))}}}))((function(e){var t=e.location,a=(e.args,Object(c.useRef)()),l=(t.pathname,Object(c.useState)([])),r=Object(n.a)(l,2),s=(r[0],r[1],Object(c.useState)({})),v=Object(n.a)(s,2),g=(v[0],v[1],Object(c.useState)(!1)),p=Object(n.a)(g,2),h=(p[0],p[1],Object(c.useState)(!0)),j=Object(n.a)(h,2),O=j[0],E=j[1],y=Object(i.useHistory)(),A=Object(i.useLocation)();return Object(c.useEffect)((function(){localStorage.getItem("user_id")&&(a.current=setInterval((function(){var e,t;console.log(null===(e=A.state)||void 0===e?void 0:e._id);var n=(null===A||void 0===A||null===(t=A.state)||void 0===t?void 0:t._id)||sessionStorage.getItem("notificationdata");console.log(n),m.a.get("/user/getOnenotificationByastro/".concat(n)).then((function(e){var t,n,c,o,l;console.log("request for chat ",e.data.data),console.log("notification",e.data.data),"Accept"===(null===e||void 0===e||null===(t=e.data)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.status)&&"Chat"===(null===e||void 0===e||null===(c=e.data)||void 0===c||null===(o=c.data)||void 0===o?void 0:o.type)&&(E(!1),b()("Astro is now Accepted Your Request"),clearInterval(a.current),y.push("/chatApp"),m.a.get("/admin/dltNotificattion/".concat(null===(l=e.data.data)||void 0===l?void 0:l._id)).then((function(e){console.log("notification deleted",e)})).catch((function(e){console.log(e)})))})).catch((function(e){}))}),5e3))}),[]),o.a.createElement(c.Fragment,null,o.a.createElement(u.a,{headerTop:"visible"},o.a.createElement(d.a,null),o.a.createElement("section",{style:{padding:"180px 0px"}},o.a.createElement(f.a,null,O&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"d-flex justify-content-center mb-4"},o.a.createElement("div",{class:"custom-loader"})),o.a.createElement("div",{className:"d-flex justify-content-center align-item-center"},o.a.createElement("h3",null,"Wait Till Astrologer Accept Your Request..."),o.a.createElement("h3",null,"Do not Refresh Your Page...")))))))}))},676:function(e,t,a){"use strict";var n=a(0),c=a.n(n),o=a(3),l=a(209);t.a=function(){return c.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"breadcrumb-content text-center"},c.a.createElement(l.Breadcrumbs,{separator:c.a.createElement("span",null,"/"),item:o.d,finalItem:"span"}))))}}}]);
//# sourceMappingURL=122.a7eeeef6.chunk.js.map