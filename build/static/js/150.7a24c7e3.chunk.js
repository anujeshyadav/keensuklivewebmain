(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[150],{1180:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var a=n(202),c=n(203),r=n(204),o=n(205),i=n(0),l=n.n(i),s=n(118),u=n(340),d=n(341),f=n(212),b=n.n(f),m=n(342),v=n(892),j=n(26),O=n(95),p=n.n(O),y=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).state={data:{}},c}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;j.a.get("/admin/faq_list").then((function(t){console.log(t.data.data),e.setState({data:t.data.data})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){var e;return l.a.createElement(s.a,{headerTop:"visible"},l.a.createElement(u.a,{fluid:!0},l.a.createElement(d.a,{className:"mb-5"},l.a.createElement("div",{className:"headingtitle text-center ptb-40"},l.a.createElement("h2",null,"FAQS FOR AstroVipra"),l.a.createElement("img",{src:b.a,alt:"",className:"sb-img"}))),l.a.createElement(u.a,null,l.a.createElement(d.a,{className:""},l.a.createElement(m.a,{xs:!0,lg:"2"}),l.a.createElement(m.a,{xs:!0,lg:"8"},this.state.data.length>0?l.a.createElement(l.a.Fragment,null,null===(e=this.state.data)||void 0===e?void 0:e.map((function(e,t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{key:t},l.a.createElement(v.a.Item,{eventKey:t,className:""},l.a.createElement(v.a.Header,null,null===e||void 0===e?void 0:e.title),l.a.createElement(v.a.Body,null,p()(null===e||void 0===e?void 0:e.desc)))),l.a.createElement("br",null))}))):null),l.a.createElement(m.a,{xs:!0,lg:"2"})))))}}]),n}(i.Component)},892:function(e,t,n){"use strict";var a=n(13),c=n(669),r=n(58),o=n.n(r),i=n(0),l=n.n(i),s=n(703),u=n(670),d=n(207),f=n(689),b=n(27),m=n(700);var v,j=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];e.apply(this,a),t.apply(this,a)}}),null)},O=n(699),p=n(702),y=n(668),h=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],x={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function E(e,t){var n=t["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],a=x[e];return n+parseInt(Object(f.a)(t,a[0]),10)+parseInt(Object(f.a)(t,a[1]),10)}var N=(v={},Object(d.a)(v,b.c,"collapse"),Object(d.a)(v,b.d,"collapsing"),Object(d.a)(v,b.b,"collapsing"),Object(d.a)(v,b.a,"collapse show"),v),g={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:E},C=l.a.forwardRef((function(e,t){var n=e.onEnter,r=e.onEntering,s=e.onEntered,u=e.onExit,d=e.onExiting,f=e.className,b=e.children,v=e.dimension,x=void 0===v?"height":v,g=e.getDimensionValue,C=void 0===g?E:g,w=Object(c.a)(e,h),A="function"===typeof x?x():x,K=Object(i.useMemo)((function(){return j((function(e){e.style[A]="0"}),n)}),[A,n]),P=Object(i.useMemo)((function(){return j((function(e){var t="scroll".concat(A[0].toUpperCase()).concat(A.slice(1));e.style[A]="".concat(e[t],"px")}),r)}),[A,r]),k=Object(i.useMemo)((function(){return j((function(e){e.style[A]=null}),s)}),[A,s]),R=Object(i.useMemo)((function(){return j((function(e){e.style[A]="".concat(C(A,e),"px"),Object(O.a)(e)}),u)}),[u,C,A]),M=Object(i.useMemo)((function(){return j((function(e){e.style[A]=null}),d)}),[A,d]);return Object(y.jsx)(p.a,Object(a.a)(Object(a.a)({ref:t,addEndListener:m.a},w),{},{"aria-expanded":w.role?w.in:null,onEnter:K,onEntering:P,onEntered:k,onExit:R,onExiting:M,childRef:b.ref,children:function(e,t){return l.a.cloneElement(b,Object(a.a)(Object(a.a)({},t),{},{className:o()(f,b.props.className,N[e],"width"===A&&"collapse-horizontal")}))}}))}));C.defaultProps=g;var w=C;function A(e,t){return Array.isArray(e)?e.includes(t):e===t}var K=i.createContext({});K.displayName="AccordionContext";var P=K,k=["as","bsPrefix","className","children","eventKey"],R=i.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,l=e.bsPrefix,s=e.className,d=e.children,f=e.eventKey,b=Object(c.a)(e,k),m=Object(i.useContext)(P).activeEventKey;return l=Object(u.c)(l,"accordion-collapse"),Object(y.jsx)(w,Object(a.a)(Object(a.a)({ref:t,in:A(m,f)},b),{},{className:o()(s,l),children:Object(y.jsx)(r,{children:i.Children.only(d)})}))}));R.displayName="AccordionCollapse";var M=R,I=i.createContext({eventKey:""});I.displayName="AccordionItemContext";var S=I,B=["as","bsPrefix","className"],D=i.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,l=e.bsPrefix,s=e.className,d=Object(c.a)(e,B);l=Object(u.c)(l,"accordion-body");var f=Object(i.useContext)(S).eventKey;return Object(y.jsx)(M,{eventKey:f,children:Object(y.jsx)(r,Object(a.a)(Object(a.a)({ref:t},d),{},{className:o()(s,l)}))})}));D.displayName="AccordionBody";var F=D,V=n(54),H=["as","bsPrefix","className","onClick"];var T=i.forwardRef((function(e,t){var n=e.as,r=void 0===n?"button":n,l=e.bsPrefix,s=e.className,d=e.onClick,f=Object(c.a)(e,H);l=Object(u.c)(l,"accordion-button");var b=Object(i.useContext)(S).eventKey,m=function(e,t){var n=Object(i.useContext)(P),a=n.activeEventKey,c=n.onSelect,r=n.alwaysOpen;return function(n){var o=e===a?null:e;r&&(o=Array.isArray(a)?a.includes(e)?a.filter((function(t){return t!==e})):[].concat(Object(V.a)(a),[e]):[e]),null==c||c(o,n),null==t||t(n)}}(b,d),v=Object(i.useContext)(P).activeEventKey;return"button"===r&&(f.type="button"),Object(y.jsx)(r,Object(a.a)(Object(a.a)({ref:t,onClick:m},f),{},{"aria-expanded":b===v,className:o()(s,l,!A(v,b)&&"collapsed")}))}));T.displayName="AccordionButton";var J=T,L=["as","bsPrefix","className","children","onClick"],U=i.forwardRef((function(e,t){var n=e.as,r=void 0===n?"h2":n,i=e.bsPrefix,l=e.className,s=e.children,d=e.onClick,f=Object(c.a)(e,L);return i=Object(u.c)(i,"accordion-header"),Object(y.jsx)(r,Object(a.a)(Object(a.a)({ref:t},f),{},{className:o()(l,i),children:Object(y.jsx)(J,{onClick:d,children:s})}))}));U.displayName="AccordionHeader";var q=U,z=["as","bsPrefix","className","eventKey"],Q=i.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,l=e.bsPrefix,s=e.className,d=e.eventKey,f=Object(c.a)(e,z);l=Object(u.c)(l,"accordion-item");var b=Object(i.useMemo)((function(){return{eventKey:d}}),[d]);return Object(y.jsx)(S.Provider,{value:b,children:Object(y.jsx)(r,Object(a.a)(Object(a.a)({ref:t},f),{},{className:o()(s,l)}))})}));Q.displayName="AccordionItem";var _=Q,G=["as","activeKey","bsPrefix","className","onSelect","flush","alwaysOpen"],W=i.forwardRef((function(e,t){var n=Object(s.a)(e,{activeKey:"onSelect"}),r=n.as,l=void 0===r?"div":r,d=n.activeKey,f=n.bsPrefix,b=n.className,m=n.onSelect,v=n.flush,j=n.alwaysOpen,O=Object(c.a)(n,G),p=Object(u.c)(f,"accordion"),h=Object(i.useMemo)((function(){return{activeEventKey:d,onSelect:m,alwaysOpen:j}}),[d,m,j]);return Object(y.jsx)(P.Provider,{value:h,children:Object(y.jsx)(l,Object(a.a)(Object(a.a)({ref:t},O),{},{className:o()(b,p,v&&"".concat(p,"-flush"))}))})}));W.displayName="Accordion";t.a=Object.assign(W,{Button:J,Collapse:M,Item:_,Header:q,Body:F})}}]);
//# sourceMappingURL=150.7a24c7e3.chunk.js.map