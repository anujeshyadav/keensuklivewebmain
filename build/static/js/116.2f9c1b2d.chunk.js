(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[116,142],{1230:function(e,t,a){"use strict";a.r(t);var n=a(202),l=a(203),c=a(204),o=a(205),r=a(0),s=a.n(r),i=a(3),m=a(340),u=a(341),d=a(342),p=a(118),f=a(857),E=a(26),g=a(95),h=a.n(g),v=a(210),b=a.n(v),k=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).componentDidMount=function(){E.a.get("/admin/getproductcalegory").then((function(t){console.log(t.data.data),!0===t.data.status&&e.setState({procategory:t.data.data})})).catch((function(e){console.log(e),console.log(e.response)}))},e.state={procategory:[]},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.procategory;return s.a.createElement(p.a,{headerTop:"visible"},s.a.createElement("section",{className:"pt-0 pb-0"},s.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(b.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},s.a.createElement(m.a,null,s.a.createElement(u.a,null,s.a.createElement(d.a,{md:"12"},s.a.createElement("div",{className:"leftcont text-left"},s.a.createElement("h1",null,"Astromall Shop"),s.a.createElement("h3",null,"Shop Best Online Astrology Products And Services"))))))),s.a.createElement("section",{className:"ptb-0"},s.a.createElement(m.a,null,s.a.createElement(u.a,null,s.a.createElement(d.a,{lg:"12"},s.a.createElement("div",{className:"pt-10 pb-50"},s.a.createElement(f.default,null),s.a.createElement(u.a,null,e.length?e.map((function(e,t){return s.a.createElement(d.a,{key:t,md:"4"},s.a.createElement("div",{className:"po-box"},s.a.createElement(i.c,{to:"/productlist/"+e._id},s.a.createElement(u.a,null,s.a.createElement(d.a,{md:"4"},s.a.createElement("div",{className:"po-1"},s.a.createElement("img",{src:e.img,alt:"",width:"100%",height:"80px"}))),s.a.createElement(d.a,{md:"8"},s.a.createElement("div",{className:"po-1"},s.a.createElement("h3",null,e.name),s.a.createElement("p",null,h()(e.desc))))))))})):null))),s.a.createElement(d.a,{lg:"6"})))))}}]),a}(s.a.Component);t.default=k},765:function(e,t,a){"use strict";t.a=function(e){var t=Object.create(null);return function(a){return void 0===t[a]&&(t[a]=e(a)),t[a]}}},857:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(805);t.default=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("div",{className:"st-search"},l.a.createElement(c.ReactSearchAutocomplete,{items:[{id:0,name:"Cobol"},{id:1,name:"JavaScript"},{id:2,name:"Basic"},{id:3,name:"PHP"},{id:4,name:"Java"}],onSearch:function(e,t){console.log(e,t)},onHover:function(e){console.log(e)},onSelect:function(e){console.log(e)},onFocus:function(){console.log("Focused")},autoFocus:!0,formatResult:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{style:{display:"block",textAlign:"left"}},"id: ",e.id),l.a.createElement("span",{style:{display:"block",textAlign:"left"}},"name: ",e.name))}}))))}}}]);
//# sourceMappingURL=116.2f9c1b2d.chunk.js.map