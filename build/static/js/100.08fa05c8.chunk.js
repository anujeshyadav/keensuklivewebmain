(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[100],{1166:function(e,t,a){"use strict";a.r(t);var r=a(41),n=a(22),c=a(0),o=a.n(c),i=a(689),l=a.n(i),s=a(743),u=a(209),m=a(47),d=a(3),f=a(206),h=a(118),p=a(676),g=(a(730),a(725),a(120));function b(){b=function(){return t};var e,t={},a=Object.prototype,r=a.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},c="function"==typeof Symbol?Symbol:{},o=c.iterator||"@@iterator",i=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function s(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,a){return e[t]=a}}function u(e,t,a,r){var c=t&&t.prototype instanceof g?t:g,o=Object.create(c.prototype),i=new C(r||[]);return n(o,"_invoke",{value:S(e,a,i)}),o}function m(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var d="suspendedStart",f="executing",h="completed",p={};function g(){}function v(){}function E(){}var y={};s(y,o,(function(){return this}));var w=Object.getPrototypeOf,N=w&&w(w(_([])));N&&N!==a&&r.call(N,o)&&(y=N);var j=E.prototype=g.prototype=Object.create(y);function O(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function a(n,c,o,i){var l=m(e[n],e,c);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){a("next",e,o,i)}),(function(e){a("throw",e,o,i)})):t.resolve(u).then((function(e){s.value=e,o(s)}),(function(e){return a("throw",e,o,i)}))}i(l.arg)}var c;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){a(e,r,t,n)}))}return c=c?c.then(n,n):n()}})}function S(t,a,r){var n=d;return function(c,o){if(n===f)throw new Error("Generator is already running");if(n===h){if("throw"===c)throw o;return{value:e,done:!0}}for(r.method=c,r.arg=o;;){var i=r.delegate;if(i){var l=x(i,r);if(l){if(l===p)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var s=m(t,a,r);if("normal"===s.type){if(n=r.done?h:"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=h,r.method="throw",r.arg=s.arg)}}}function x(t,a){var r=a.method,n=t.iterator[r];if(n===e)return a.delegate=null,"throw"===r&&t.iterator.return&&(a.method="return",a.arg=e,x(t,a),"throw"===a.method)||"return"!==r&&(a.method="throw",a.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var c=m(n,t.iterator,a.arg);if("throw"===c.type)return a.method="throw",a.arg=c.arg,a.delegate=null,p;var o=c.arg;return o?o.done?(a[t.resultName]=o.value,a.next=t.nextLoc,"return"!==a.method&&(a.method="next",a.arg=e),a.delegate=null,p):o:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,p)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function _(t){if(t||""===t){var a=t[o];if(a)return a.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,c=function a(){for(;++n<t.length;)if(r.call(t,n))return a.value=t[n],a.done=!1,a;return a.value=e,a.done=!0,a};return c.next=c}}throw new TypeError(typeof t+" is not iterable")}return v.prototype=E,n(j,"constructor",{value:E,configurable:!0}),n(E,"constructor",{value:v,configurable:!0}),v.displayName=s(E,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,s(e,l,"GeneratorFunction")),e.prototype=Object.create(j),e},t.awrap=function(e){return{__await:e}},O(k.prototype),s(k.prototype,i,(function(){return this})),t.AsyncIterator=k,t.async=function(e,a,r,n,c){void 0===c&&(c=Promise);var o=new k(u(e,a,r,n),c);return t.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},O(j),s(j,l,"Generator"),s(j,o,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),a=[];for(var r in t)a.push(r);return a.reverse(),function e(){for(;a.length;){var r=a.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=_,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var a in this)"t"===a.charAt(0)&&r.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var a=this;function n(r,n){return i.type="throw",i.arg=t,a.next=r,n&&(a.method="next",a.arg=e),!!n}for(var c=this.tryEntries.length-1;c>=0;--c){var o=this.tryEntries[c],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(l&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var c=n;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=e,o.arg=t,c?(this.method="next",this.next=c.finallyLoc,p):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),P(a),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;P(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,a,r){return this.delegate={iterator:_(t),resultName:a,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}t.default=Object(m.connect)((function(e){return{products:e.productData.products}}))((function(e){var t=e.location,a=e.products,i=(e.product,e.currency,e.addToCart,e.addToWishlist,e.addToCompare,e.cartItem,e.wishlistItem,e.discountedPrice,e.compareItem,e.sliderClassName),m=e.spaceBottomClass,v=e.colorClass,E=e.titlePriceClass,y=(Object(g.useToasts)().addToast,Object(c.useState)("grid two-column")),w=Object(n.a)(y,2),N=w[0],j=(w[1],Object(c.useState)("")),O=Object(n.a)(j,2),k=O[0],S=(O[1],Object(c.useState)("")),x=Object(n.a)(S,2),L=x[0],P=(x[1],Object(c.useState)("")),C=Object(n.a)(P,2),_=C[0],T=(C[1],Object(c.useState)("")),F=Object(n.a)(T,2),z=F[0],I=(F[1],Object(c.useState)(0)),G=Object(n.a)(I,2),A=G[0],B=G[1],R=Object(c.useState)(1),D=Object(n.a)(R,2),J=D[0],Y=D[1],H=Object(c.useState)([]),K=Object(n.a)(H,2),V=(K[0],K[1]),W=Object(c.useState)([]),q=Object(n.a)(W,2),M=q[0],Q=q[1],U=t.pathname;Object(c.useEffect)((function(){var e=Object(f.g)(a,k,L),t=Object(f.g)(e,_,z);Q(e=t),V(e.slice(A,A+16))}),[A,a,k,L,_,z]);var X=Object(c.useState)([]),Z=Object(n.a)(X,2),$=Z[0],ee=Z[1];return Object(c.useEffect)((function(){var e;!function(){(e=e||Object(r.a)(b().mark((function e(){var t,a;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://13.235.180.192/api/admin/getproductbytagname/Kids");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,ee(a.data),console.log(a.data);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}()}),[]),o.a.createElement(c.Fragment,null,o.a.createElement(l.a,null,o.a.createElement("title",null,"Flone | Shop Page"),o.a.createElement("meta",{name:"description",content:"Shop page of flone react minimalist eCommerce template."})),o.a.createElement(u.BreadcrumbsItem,{to:"/"},"Home"),o.a.createElement(u.BreadcrumbsItem,{to:""+U},"Shop"),o.a.createElement(h.a,{headerTop:"visible"},o.a.createElement(p.a,null),o.a.createElement("div",{className:"shop-area pt-95 pb-100"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"shop-bottom-area mt-35"},o.a.createElement("div",{className:"row ".concat(N||"")},o.a.createElement(c.Fragment,null,$.map((function(e){return o.a.createElement("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6 ".concat(i||""),key:e._id},o.a.createElement("div",{className:"product-wrap-2 ".concat(m||""," ").concat(v||""," ")},o.a.createElement("div",{className:"product-img"},o.a.createElement(d.c,{to:"/product-sticky/"+e._id},o.a.createElement("img",{className:"default-img",src:e.product_img[0],alt:""}),o.a.createElement("img",{className:"hover-img",src:e.product_img[1],alt:""})),o.a.createElement("div",{className:"product-action-2"})),o.a.createElement("div",{className:"product-content-2"},o.a.createElement("div",{className:"title-price-wrap-2 ".concat(E||"")},o.a.createElement("h3",null,o.a.createElement(d.c,{to:"/product/"+e._id},e.product_name)),o.a.createElement("div",{className:"price-2"},o.a.createElement(c.Fragment,null,o.a.createElement("span",null,"\u20b9 ",e.sell_price)))))))}))))),o.a.createElement("div",{className:"pro-pagination-style text-center mt-30"},o.a.createElement(s.a,{totalRecords:M.length,pageLimit:16,pageNeighbours:2,setOffset:B,currentPage:J,setCurrentPage:Y,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"}))))))))}))},676:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(3),o=a(209);t.a=function(){return n.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"breadcrumb-content text-center"},n.a.createElement(o.Breadcrumbs,{separator:n.a.createElement("span",null,"/"),item:c.d,finalItem:"span"}))))}},725:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=(a(206),function(e){e.getLayout,e.getFilterSortParams;var t=e.productCount,a=e.sortedProductCount;return n.a.createElement("div",{className:"shop-top-bar mb-35"},n.a.createElement("div",{className:"select-shoing-wrap"},n.a.createElement("p",null,"Showing ",a," of ",t," result")))});t.a=function(e){var t=e.getLayout,a=e.getFilterSortParams,o=e.productCount,i=e.sortedProductCount;return n.a.createElement(r.Fragment,null,n.a.createElement(c,{getLayout:t,getFilterSortParams:a,productCount:o,sortedProductCount:i}))}},730:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(206),o=function(){return n.a.createElement("div",{className:"sidebar-widget"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Search "),n.a.createElement("div",{className:"pro-sidebar-search mb-50 mt-25"},n.a.createElement("form",{className:"pro-sidebar-search-form",action:"#"},n.a.createElement("input",{type:"text",placeholder:"Search here..."}),n.a.createElement("button",null,n.a.createElement("i",{className:"pe-7s-search"})))))},i=function(e){var t=e.categories,a=e.getSortParams,r=e.cb;return n.a.createElement("div",{className:"sidebar-widget"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Categories "),n.a.createElement("div",{className:"sidebar-widget-list mt-30"},t?n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(e){a("category",""),Object(c.h)(e)}},n.a.createElement("span",{className:"checkmark"})," All Categories"))),t.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(t){console.log(e._id),r(e._id),a("category",e),Object(c.h)(t)}}," ",n.a.createElement("span",{className:"checkmark"})," ",e.name," ")))}))):"No categories found"))},l=function(e){var t=e.colors,a=e.getSortParams,r=e.getonecolor;return n.a.createElement("div",{className:"sidebar-widget mt-50"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Color "),n.a.createElement("div",{className:"sidebar-widget-list mt-20"},t?n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(e){a("color",""),Object(c.h)(e)}},n.a.createElement("span",{className:"checkmark"})," All Colors"," "))),t.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(t){r(e._id),console.log(e._id),a("color",e),Object(c.h)(t)}},n.a.createElement("span",{className:"checkmark"}),n.a.createElement("span",{style:{backgroundColor:null===e||void 0===e?void 0:e.colorName,borderRadius:"50%",height:25,width:25}})," ",null===e||void 0===e?void 0:e.colorName," ")))}))):"No colors found"))},s=function(e){var t=e.sizes,a=e.getSortParams,r=e.getonesize;return n.a.createElement("div",{className:"sidebar-widget mt-40"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Size "),n.a.createElement("div",{className:"sidebar-widget-list mt-20"},t?n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(e){a("size",""),Object(c.h)(e)}},n.a.createElement("span",{className:"checkmark"})," All Sizes"," "))),t.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{className:"text-uppercase",onClick:function(t){console.log(e._id),r(e._id),a("size",e),Object(c.h)(t)}}," ",n.a.createElement("span",{className:"checkmark"}),e.sizeName," ")))}))):"No sizes found"))},u=function(e){var t=e.tags,a=e.getSortParams,r=e.getonetag;return n.a.createElement("div",{className:"sidebar-widget mt-50"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Tag "),n.a.createElement("div",{className:"sidebar-widget-tag mt-25"},t?n.a.createElement("ul",null,t.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("button",{onClick:function(t){r(e),a("tag",e),Object(c.h)(t)}},e))}))):"No tags found"))},m=function(e){var t=e.brands,a=e.getSortParams,r=e.getonebrand;return n.a.createElement("div",{className:"sidebar-widget mt-50"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Brand "),n.a.createElement("div",{className:"sidebar-widget-tag mt-25"},t?n.a.createElement("ul",null,t.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("button",{onClick:function(t){r(e._id),a("brands",e),Object(c.h)(t)}},e.name))}))):"No brands found"))},d=a(22),f=a(844),h=a(842);function p(e){return"".concat(e,"\xb0C")}var g=function(e){e.tags,e.getSortParams;var t=e.priceobj,a=n.a.useState([1,90]),r=Object(d.a)(a,2),c=r[0],o=r[1];return n.a.createElement("div",{className:"sidebar-widget mt-50"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Price Range "),n.a.createElement("div",{className:"sidebar-widget-tag mt-25"},n.a.createElement(f.a,null,n.a.createElement(h.a,{getAriaLabel:function(){return"Price range"},value:c,scale:function(e){return 25*e},onChange:function(e,a){o(a),t({min:25*a[0],max:25*a[1]})},valueLabelDisplay:"auto",getAriaValueText:p}))))};t.a=function(e){var t=e.products,a=e.getSortParams,r=e.sideSpaceClass,d=e.colors,f=e.sizes,h=e.category,p=e.tags,b=e.brand,v=e.callback,E=e.tagcallback,y=e.colorcallback,w=e.sizecallback,N=e.brandcallback,j=e.pricerange;Object(c.b)(t),Object(c.c)(t),Object(c.f)(t),Object(c.d)(t);return n.a.createElement("div",{className:"sidebar-style ".concat(r||"")},n.a.createElement(o,null),n.a.createElement(g,{tags:p,getSortParams:a,priceobj:function(e){j(e),console.log(e)}}),n.a.createElement(u,{tags:p,getSortParams:a,getonetag:function(e){E(e),console.log(e)}}),n.a.createElement(l,{colors:d,getSortParams:a,getonecolor:function(e){y(e),console.log(e)}}),n.a.createElement(s,{sizes:f,getSortParams:a,getonesize:function(e){w(e),console.log(e)}}),n.a.createElement(m,{brands:b,getSortParams:a,getonebrand:function(e){N(e),console.log(e)}}),n.a.createElement(i,{categories:h,getSortParams:a,cb:function(e){v(e),console.log(e)}}))}}}]);
//# sourceMappingURL=100.08fa05c8.chunk.js.map