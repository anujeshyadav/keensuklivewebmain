(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[151],{1195:function(e,t,a){"use strict";a.r(t);var l=a(202),n=a(203),c=a(204),r=a(205),o=a(0),s=a.n(o),i=a(3),u=a(340),m=a(341),d=a(342),p=a(118),E=a(26),v=(a(680),a(210)),f=a.n(v),b=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={TicketbyUser:[]},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=(this.props.match.params.id,JSON.parse(localStorage.getItem("user_id")));console.log(t),E.a.get("/user/TicketbyUser/".concat(t)).then((function(t){console.log("ticketlist",t.data.data),!0===t.data.status&&e.setState({TicketbyUser:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.TicketbyUser;return s.a.createElement(p.a,{headerTop:"visible"},s.a.createElement("section",{className:"pt-0 pb-0"},s.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(f.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},s.a.createElement(u.a,null,s.a.createElement(m.a,null,s.a.createElement(d.a,{md:"12"},s.a.createElement("div",{className:"leftcont text-left"},s.a.createElement("h1",null,"Customer Support"))))))),s.a.createElement("section",{className:""},s.a.createElement(u.a,null,s.a.createElement(m.a,null,s.a.createElement(d.a,{lg:"2"},s.a.createElement("div",{className:"supp-1 mt-2 mb-2"},s.a.createElement(i.c,{to:"/customersupportform"},s.a.createElement("i",{className:"pe-7s-plus"}),s.a.createElement("p",null,"Create Ticket")))),s.a.createElement(d.a,{lg:"10"},s.a.createElement("div",{className:"support-box"},s.a.createElement(m.a,null,e.length?e.map((function(e,t){return s.a.createElement("div",{className:"supp-2"},s.a.createElement("h4",null,null===e||void 0===e?void 0:e.subject," ?"),s.a.createElement("ul",null,s.a.createElement("li",null,"Date/Time: ",s.a.createElement("span",null,null===e||void 0===e?void 0:e.createdAt)),s.a.createElement("li",null,"Ticket No: ",s.a.createElement("span",null,null===e||void 0===e?void 0:e.ticketNo)),s.a.createElement("li",null,"Status: ",s.a.createElement("span",null,null===e||void 0===e?void 0:e.status)),s.a.createElement("li",null,"Desc:-",null===e||void 0===e?void 0:e.desc)),s.a.createElement("div",{className:"supp-3"},s.a.createElement(i.c,{to:"/customersupportview/".concat(null===e||void 0===e?void 0:e._id)},"View More")))})):null)))))))}}]),a}(s.a.Component);t.default=b}}]);
//# sourceMappingURL=151.9279e7bc.chunk.js.map