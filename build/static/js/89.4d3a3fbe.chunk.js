(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[89],{1254:function(e,t,a){"use strict";a.r(t);var n=a(207),l=a(202),o=a(203),c=a(213),r=a(204),s=a(205),i=a(0),u=a.n(i),m=a(340),b=a(341),d=a(342),p=a(692),h=a(118),f=(a(691),a(26)),g=a(680),v=a.n(g),E=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(e){var o;return Object(l.a)(this,a),(o=t.call(this,e)).changeHandler=function(e){o.setState(Object(n.a)({},e.target.name,e.target.value))},o.submitHandler=function(e){e.preventDefault();var t={userid:JSON.parse(localStorage.getItem("user_id")),amount:parseInt(o.state.amount)};f.a.post("/user/add_custome_amt",t).then((function(e){console.log("@@@@@",e.data.data),v()("Success!","Submitted SuccessFull!","success"),o.props.history.push("/demoChat")})).catch((function(e){v()("Error!","You clicked the button!","error"),console.log(e)}))},o.state={modal:!1,userid:"",amount:""},o.toggle=o.toggle.bind(Object(c.a)(o)),o}return Object(o.a)(a,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){return u.a.createElement(h.a,{headerTop:"visible"},u.a.createElement("section",null,u.a.createElement(m.a,null,u.a.createElement(b.a,null,u.a.createElement(d.a,{lg:"2"}),u.a.createElement(d.a,{lg:"8"},u.a.createElement("div",{className:"wal-amt"},u.a.createElement("h3",null,"Add Amount to Wallet"),u.a.createElement("form",{onSubmit:this.submitHandler},u.a.createElement(b.a,null,u.a.createElement(d.a,{md:"12"},u.a.createElement("label",null,"Amount"),u.a.createElement("input",{type:"text",placeholder:"Enter Amount",name:"amount",value:this.state.amount,onChange:this.changeHandler})),u.a.createElement(d.a,{md:"12",className:"mt-3"},u.a.createElement(p.a,{className:"btn btn-success"},"Submit")))))),u.a.createElement(d.a,{lg:"2"})))))}}]),a}(u.a.Component);t.default=E},691:function(e,t,a){},692:function(e,t,a){"use strict";var n=a(7),l=a(14),o=a(208),c=a(20),r=a(0),s=a.n(r),i=a(2),u=a.n(i),m=a(58),b=a.n(m),d=a(36),p=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],h={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:d.o,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(o.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],o=e.block,c=e.className,r=e.close,i=e.cssModule,u=e.color,m=e.outline,h=e.size,f=e.tag,g=e.innerRef,v=Object(l.a)(e,p);r&&"undefined"===typeof v.children&&(v.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var E="btn"+(m?"-outline":"")+"-"+u,k=Object(d.k)(b()(c,{close:r},r||"btn",r||E,!!h&&"btn-"+h,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),i);v.href&&"button"===f&&(f="a");var C=r?"Close":null;return s.a.createElement(f,Object(n.a)({type:"button"===f&&v.onClick?"button":void 0},v,{className:k,ref:g,onClick:this.onClick,"aria-label":a||C}))},t}(s.a.Component);f.propTypes=h,f.defaultProps={color:"secondary",tag:"button"},t.a=f}}]);
//# sourceMappingURL=89.4d3a3fbe.chunk.js.map