(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[87],{1061:function(e,t,a){e.exports=a.p+"static/media/note.37f263df.png"},1253:function(e,t,a){"use strict";a.r(t);var n=a(202),c=a(203),l=a(204),o=a(205),i=a(0),r=a.n(i),s=a(340),u=a(341),m=a(342),d=a(118),f=(a(691),a(1061)),p=a.n(f),E=a(26),g=a(95),h=a.n(g),b=a(680),v=a.n(b),x=a(210),k=a.n(x),N=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).componentDidMount=function(){var t=JSON.parse(localStorage.getItem("user_id"));E.a.get("/admin/get_notification/".concat(t)).then((function(t){console.log(t.data),!0===t.data.status&&e.setState({notification:t.data.data})})).catch((function(e){console.log(e),console.log(e.response)}))},e.notificationDelete=function(e){E.a.get("/admin/dlt_notification/"+e).then((function(e){console.log("@@@@@",e.data.data),v()("Success!","Address SuccessFull! Deleted","success"),window.location.reload(!0)})).catch((function(e){v()("Error!","You clicked the button!","error"),console.log(e)}))},e.state={notification:[]},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state.notification;return r.a.createElement(d.a,{headerTop:"visible"},r.a.createElement("section",{className:"pt-0 pb-0"},r.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(k.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},r.a.createElement(s.a,null,r.a.createElement(u.a,null,r.a.createElement(m.a,{md:"12"},r.a.createElement("div",{className:"leftcont text-left"},r.a.createElement("h1",null,"Notification"))))))),r.a.createElement("section",null,r.a.createElement(s.a,{className:"mt-9"},r.a.createElement(u.a,null,r.a.createElement(m.a,{lg:"12"},r.a.createElement("div",{className:"notes-box"},r.a.createElement(s.a,null,r.a.createElement(u.a,null,t.length?t.map((function(t,a){return r.a.createElement(m.a,{lg:"12",key:a},r.a.createElement("div",{className:"noteify-list"},r.a.createElement("div",{className:"noteifybx"},r.a.createElement("img",{src:p.a,alt:"",width:"50px"})),r.a.createElement("div",{className:"noteifybxx"},r.a.createElement("h2",null,t.title),r.a.createElement("p",null,h()(t.desc)),r.a.createElement("span",{className:"notify-sp"},r.a.createElement("button",{onClick:function(){return e.notificationDelete(t._id)(window.location.reload())}},r.a.createElement("i",{class:"fa fa-times","aria-hidden":"true"}))))))})):null))))))))}}]),a}(r.a.Component);t.default=N},691:function(e,t,a){}}]);
//# sourceMappingURL=87.7d57077d.chunk.js.map