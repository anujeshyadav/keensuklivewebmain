(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[147],{1277:function(e,a,t){"use strict";t.r(a);var c=t(22),l=t(0),n=t.n(l),m=t(118),r=(t(676),t(992)),s=Object(r.GoogleApiWrapper)({apiKey:"AIzaSyB2D8wrWMY3XZnuHO6C31uq90JiuaFzGws"})((function(e){return n.a.createElement(r.Map,{google:e.google,zoom:10,style:{width:"100%",height:"100%"},initialCenter:{lat:e.latitude,lng:e.longitude}},n.a.createElement(r.Marker,{position:{lat:e.latitude,lng:e.longitude},icon:{url:"".concat("/assets/img/icon-img/2.png")},animation:e.google.maps.Animation.BOUNCE}))})),i=t(212),o=t.n(i),u=t(26),E=(t(95),t(680)),d=t.n(E);a.default=function(e){e.location;var a=Object(l.useState)({Name:"",email:"",Subject:"",Message:""}),t=Object(c.a)(a,2),r=(t[0],t[1],Object(l.useState)("")),i=Object(c.a)(r,2),E=i[0],g=i[1],f=Object(l.useState)(""),p=Object(c.a)(f,2),N=p[0],v=p[1],b=Object(l.useState)(""),h=Object(c.a)(b,2),S=h[0],j=h[1],w=Object(l.useState)(""),y=Object(c.a)(w,2),O=y[0],C=y[1];return n.a.createElement(l.Fragment,null,n.a.createElement(m.a,{headerTop:"visible"},n.a.createElement("div",{className:"headingtitle text-center pt-30"},n.a.createElement("h2",null,"Contact Us"),n.a.createElement("img",{src:o.a,alt:"",className:"sb-img"})),n.a.createElement("div",{className:"contact-area pt-100 pb-100"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"contact-map mb-10"},n.a.createElement(s,{latitude:"47.444",longitude:"-122.176"})),n.a.createElement("div",{className:"custom-row-2"},n.a.createElement("div",{className:"col-lg-4 col-md-5"},n.a.createElement("div",{className:"contact-info-wrap"},n.a.createElement("div",{className:"single-contact-info"},n.a.createElement("div",{className:"contact-icon"},n.a.createElement("i",{className:"fa fa-phone"})),n.a.createElement("div",{className:"contact-info-dec"},n.a.createElement("p",null,"+012 345 678 102"),n.a.createElement("p",null,"+012 345 678 102"))),n.a.createElement("div",{className:"single-contact-info"},n.a.createElement("div",{className:"contact-icon"},n.a.createElement("i",{className:"fa fa-globe"})),n.a.createElement("div",{className:"contact-info-dec"},n.a.createElement("p",null,n.a.createElement("a",{href:"mailto:yourname@email.com"},"yourname@email.com")),n.a.createElement("p",null,n.a.createElement("a",{href:"https://yourwebsitename.com"},"yourwebsitename.com")))),n.a.createElement("div",{className:"single-contact-info"},n.a.createElement("div",{className:"contact-icon"},n.a.createElement("i",{className:"fa fa-map-marker"})),n.a.createElement("div",{className:"contact-info-dec"},n.a.createElement("p",null,"Address goes here, "),n.a.createElement("p",null,"street, Crossroad 123."))),n.a.createElement("div",{className:"contact-social text-center"},n.a.createElement("h3",null,"Follow Us"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"//facebook.com"},n.a.createElement("i",{className:"fa fa-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"//pinterest.com"},n.a.createElement("i",{className:"fa fa-pinterest-p"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"//thumblr.com"},n.a.createElement("i",{className:"fa fa-tumblr"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"//vimeo.com"},n.a.createElement("i",{className:"fa fa-vimeo"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"//twitter.com"},n.a.createElement("i",{className:"fa fa-twitter"}))))))),n.a.createElement("div",{className:"col-lg-8 col-md-7"},n.a.createElement("div",{className:"contact-form"},n.a.createElement("div",{className:"contact-title mb-30"},n.a.createElement("h2",null,"Get In Touch")),n.a.createElement("form",{className:"contact-form-style"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("input",{required:!0,name:"name",value:E,placeholder:"Name*",onChange:function(e){return g(e.target.value)},type:"text"})),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("input",{required:!0,name:"email",value:N,onChange:function(e){return v(e.target.value)},placeholder:"Email*",type:"email"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("input",{name:"Subject",value:S,onChange:function(e){return j(e.target.value)},placeholder:"Subject*",type:"text"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("textarea",{required:!0,name:"Message",value:O,onChange:function(e){return C(e.target.value)},placeholder:"Your Message*",defaultValue:""}),n.a.createElement("button",{onClick:function(e){e.preventDefault();var a={userid:JSON.parse(localStorage.getItem("user_id")).toString(),name:E.toString(),email:N.toString(),subject:S.toString(),msg:O.toString()};u.a.post("/admin/add_contactus",a).then((function(e){console.log("success"===e.data.message),"success"===e.data.message&&(d()("Submitted Sucessfully"),v(""),g(""),j(""),C(""))})).catch((function(e){console.log(e),d()("Something went wrong","Try again Later")}))},className:"submit",type:"submit"},"SEND")))),n.a.createElement("p",{className:"form-message"}))))))))}},676:function(e,a,t){"use strict";var c=t(0),l=t.n(c),n=t(3),m=t(209);a.a=function(){return l.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"breadcrumb-content text-center"},l.a.createElement(m.Breadcrumbs,{separator:l.a.createElement("span",null,"/"),item:n.d,finalItem:"span"}))))}}}]);
//# sourceMappingURL=147.201e4edd.chunk.js.map