(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[95],{1177:function(e,a,t){"use strict";t.r(a);var l=t(202),n=t(203),c=t(204),r=t(205),s=t(0),i=t.n(s),o=t(118),m=(t(676),t(821)),d=(t(822),t(873)),u=t(1178),v=t(341),E=t(342),b=t(26),g=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).handleswitch=function(e,a){console.log(e,null===a||void 0===a?void 0:a._id)},n.state={BlogViewData:[]},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;console.log(a),b.a.get("/user/blog_by_category/".concat(a)).then((function(a){console.log(a.data.data),e.setState({BlogViewData:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,a=this.state.BlogViewData;return i.a.createElement(o.a,{headerTop:"visible"},i.a.createElement("section",{className:"pt-0 pb-0"},i.a.createElement("div",{className:"",style:{backgroundColor:"#FFD59E",width:"100%",padding:"70px 0px",backgroundSize:"cover"}},i.a.createElement(u.a,null,i.a.createElement(v.a,null,i.a.createElement(E.a,{md:"12"},i.a.createElement("div",{className:"d-flex justify-content-center"},i.a.createElement("h1",null,"Our Latest Blog"))))))),i.a.createElement("div",{className:"blog-area pt-100 pb-100"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row flex-row-reverse"},i.a.createElement("div",{className:"col-lg-9"},i.a.createElement("div",{className:"ml-20"},i.a.createElement("div",{className:"row"},a&&a.map((function(e,a){return i.a.createElement(d.a,{data:e,key:a,sliderClass:"swiper-slide rtt"})}))))),i.a.createElement("div",{className:"col-lg-3"},i.a.createElement(m.a,{handleswitch:function(a,t){return e.handleswitch(a,t)}}))))))}}]),t}(i.a.Component);a.default=g},676:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(3),r=t(209);a.a=function(){return n.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"breadcrumb-content text-center"},n.a.createElement(r.Breadcrumbs,{separator:n.a.createElement("span",null,"/"),item:c.d,finalItem:"span"}))))}},821:function(e,a,t){"use strict";var l=t(22),n=t(0),c=t.n(n),r=t(26),s=t(803);a.a=function(e){var a=e.props,t=Object(n.useState)([]),i=Object(l.a)(t,2),o=i[0],m=i[1];Object(s.useHistory)();return Object(n.useEffect)((function(){r.a.get("/user/active_blog_category").then((function(e){console.log(e.data.data),!0===e.data.status&&m(e.data.data)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement("div",{className:"sidebar-style"},c.a.createElement("div",{className:"sidebar-widget mt-35"},c.a.createElement("h4",{className:"pro-sidebar-title"},"Categories"),c.a.createElement("div",{className:"sidebar-widget-list sidebar-widget-list--blog mt-20"},c.a.createElement("ul",null,o&&(null===o||void 0===o?void 0:o.map((function(e){var t;return c.a.createElement("li",{style:{cursor:"pointer"},onClick:function(t){return a.handleswitch(t,e)},key:null===e||void 0===e?void 0:e._id},c.a.createElement("div",{className:"sidebar-widget-list-left"},c.a.createElement("span",{className:"checkmark"}),c.a.createElement("input",{type:"checkbox",name:"id"})," ",c.a.createElement("div",{className:"mx-4"},null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t.slice(0,30))))})))))))}},822:function(e,a,t){"use strict";var l=t(0),n=t.n(l);a.a=function(){return n.a.createElement("div",{className:"pro-pagination-style text-center mt-20"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("button",{className:"prev"},n.a.createElement("i",{className:"fa fa-angle-double-left"}))),n.a.createElement("li",null,n.a.createElement("button",{className:"active"},"1")),n.a.createElement("li",null,n.a.createElement("button",null,"2")),n.a.createElement("li",null,n.a.createElement("button",{className:"next"},n.a.createElement("i",{className:"fa fa-angle-double-right"})))))}},873:function(e,a,t){"use strict";var l=t(22),n=t(0),c=t.n(n),r=t(3),s=(t(26),t(748)),i=t.n(s),o=t(95),m=t.n(o);a.a=function(e){var a,t=e.data,s=Object(n.useState)(t),o=Object(l.a)(s,2),d=(o[0],o[1]);return Object(n.useEffect)((function(){d(t)}),[t]),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},c.a.createElement("div",{className:"blog-wrap-2 mb-30"},c.a.createElement("div",{className:"blog-img-2"},c.a.createElement(r.c,{to:"/blog-details-standard/"+(null===t||void 0===t?void 0:t._id)},c.a.createElement("img",{style:{borderRadius:"8px"},height:"200px",width:"420px",src:null===t||void 0===t?void 0:t.blogImg,alt:""}))),c.a.createElement("div",{className:"blog-content-2"},c.a.createElement("div",{className:"blog-meta-2"},c.a.createElement("ul",null,c.a.createElement("li",null," CreatedAt:- ",null===t||void 0===t||null===(a=t.createdAt)||void 0===a?void 0:a.split("T")[0]))),c.a.createElement("h4",null,c.a.createElement(r.c,{to:"/blog-details-standard"+(null===t||void 0===t?void 0:t._id)},null===t||void 0===t?void 0:t.blog_title)),c.a.createElement(i.a,{lines:2,more:"Show more",less:"Show less",anchorClass:""},m()(null===t||void 0===t?void 0:t.desc))))))}}}]);
//# sourceMappingURL=95.bf74bd1c.chunk.js.map