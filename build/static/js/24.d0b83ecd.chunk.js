(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[24],{1221:function(e,t,a){"use strict";a.r(t);var l=a(204),n=a(205),o=a(206),r=a(207),c=a(0),i=a.n(c),s=a(3),d=a(342),u=a(343),m=a(344),v=a(120),p=a(26),E=a(212),f=a.n(E),g=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleAddConsultant=function(t,a){localStorage.setItem("astroproduct_id",t),sessionStorage.setItem("AstroMall_consultant_id",a),e.props.history.push("/addressform/".concat(a))},e.state={consultantList:[]},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;p.a.get("/user/product_consltnt_list/".concat(t)).then((function(t){var a,l;console.log(t.data.data),e.setState({consultantList:t.data.data}),localStorage.setItem("astro_id",null===t||void 0===t||null===(a=t.data)||void 0===a||null===(l=a.data[0])||void 0===l?void 0:l._id)})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){var e=this;return console.log("first",this.state.consultantList),i.a.createElement(v.a,{headerTop:"visible"},i.a.createElement("section",{className:"pt-0 pb-0"},i.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(f.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},i.a.createElement(d.a,null,i.a.createElement(u.a,null,i.a.createElement(m.a,{md:"12"},i.a.createElement("div",{className:"leftcont text-left"},i.a.createElement("h1",null,"Our Consultant"),i.a.createElement("h3",null,"Select the best astrologer"))))))),i.a.createElement("section",{className:"ptb-0 mt-50 mb-50"},i.a.createElement(d.a,null,i.a.createElement(u.a,null,this.state.consultantList.map((function(t){var a,l,n,o,r;return i.a.createElement(m.a,{style:{cursor:"pointer"},lg:"3",md:"3",sm:"6",xs:"12",key:t._id},i.a.createElement(m.a,{className:"frontside"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body text-center py-2"},i.a.createElement("img",{src:null===t||void 0===t||null===(a=t.astroid)||void 0===a?void 0:a.img,alt:"img"}),i.a.createElement("h4",{className:"card-title"},null===t||void 0===t||null===(l=t.astroid)||void 0===l?void 0:l.fullname),i.a.createElement("ul",null,i.a.createElement("li",null,"Rating :",i.a.createElement("span",null,null===t||void 0===t?void 0:t.astroid.avg_rating," star")),i.a.createElement("li",null," ",i.a.createElement("span",null,null===t||void 0===t||null===(n=t.astroid)||void 0===n?void 0:n.primary_skills)),i.a.createElement("li",null,"Language: ",i.a.createElement("span",null,null===t||void 0===t||null===(o=t.astroid)||void 0===o?void 0:o.language)),i.a.createElement("li",null," ","\u20b9 ",i.a.createElement("span",null,null===t||void 0===t?void 0:t.price)),i.a.createElement("li",null,"Experience:"," ",i.a.createElement("span",null,null===t||void 0===t||null===(r=t.astroid)||void 0===r?void 0:r.exp_in_years))),i.a.createElement("div",{onClick:function(){var a;return e.handleAddConsultant(null===t||void 0===t?void 0:t._id,null===t||void 0===t||null===(a=t.astroid)||void 0===a?void 0:a._id)},className:"my-2"},i.a.createElement(s.c,{className:"btn btn-primary btn-sm"},"Select"))))))}))))))}}]),a}(i.a.Component);t.default=g}}]);
//# sourceMappingURL=24.d0b83ecd.chunk.js.map