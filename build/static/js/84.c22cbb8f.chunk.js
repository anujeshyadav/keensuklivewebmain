(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[84],{1053:function(e,t,a){e.exports=a.p+"static/media/Pj.316d312d.jpg"},1054:function(e,t,a){e.exports=a.p+"static/media/pagetitle.504c1cba.jpg"},1221:function(e,t,a){"use strict";a.r(t);var n=a(202),c=a(203),l=a(204),o=a(205),r=a(0),i=a.n(r),s=a(3),d=a(340),m=a(341),u=a(342),p=a(750),b=a(210),f=a.n(b),v=(a(1053),a(724),a(1054),a(118)),g=a(26),E=a(95),h=a.n(E),N=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).state={data:{}},c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;console.log(t),g.a.get("/admin/viewoneProduct/".concat(t)).then((function(t){var a;console.log(null===(a=t.data.data)||void 0===a?void 0:a._id),e.setState({data:t.data.data,image:t.data.data.image[0]})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){var e,t;return i.a.createElement(v.a,{headerTop:"visible"},i.a.createElement("section",{className:"pt-0 pb-0"},i.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(f.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},i.a.createElement(d.a,null,i.a.createElement(m.a,null,i.a.createElement(u.a,{md:"12"},i.a.createElement("div",{className:"leftcont text-left"},i.a.createElement("h1",null,"Product Detail"))))))),i.a.createElement(d.a,null,i.a.createElement(m.a,null,i.a.createElement(u.a,{md:"12"},i.a.createElement(p.a,{className:"mb-50"},i.a.createElement(m.a,null,i.a.createElement(u.a,{md:"4"},i.a.createElement("div",{className:"preview-pic tab-content"},i.a.createElement("img",{src:null===(e=this.state)||void 0===e?void 0:e.image,alt:"",width:"100%"}))),i.a.createElement(u.a,{md:"8"},i.a.createElement("div",{className:"details"},i.a.createElement("h3",{className:"product-title"},this.state.data.productname),i.a.createElement("p",null,h()(this.state.data.desc)),i.a.createElement("h4",{className:"price"},"Starting From: ",i.a.createElement("span",null,"\u20b9 ",this.state.data.price)),i.a.createElement("div",{class:"action"},i.a.createElement(s.c,{to:"/consultantlist/"+(null===(t=this.state.data)||void 0===t?void 0:t._id)},i.a.createElement("button",{className:"add-to-cart btn btn-default",type:"button"},"Book Now")))))))))))}}]),a}(i.a.Component);t.default=N},724:function(e,t,a){},750:function(e,t,a){"use strict";var n=a(7),c=a(14),l=a(0),o=a.n(l),r=a(2),i=a.n(r),s=a(58),d=a.n(s),m=a(36),u=["className","cssModule","color","body","inverse","outline","tag","innerRef"],p={tag:m.o,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},b=function(e){var t=e.className,a=e.cssModule,l=e.color,r=e.body,i=e.inverse,s=e.outline,p=e.tag,b=e.innerRef,f=Object(c.a)(e,u),v=Object(m.k)(d()(t,"card",!!i&&"text-white",!!r&&"card-body",!!l&&(s?"border":"bg")+"-"+l),a);return o.a.createElement(p,Object(n.a)({},f,{className:v,ref:b}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b}}]);
//# sourceMappingURL=84.c22cbb8f.chunk.js.map