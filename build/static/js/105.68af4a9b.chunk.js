(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[105],{1011:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAUCAMAAADImI+JAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEtQTFRFAAAAJJcMJJcMIpYLI5YNJJcNI5cNIJ8AI5cLI5cMIJcII5YMI5YNI5cNJJcMI5YNIJULJJcMI5YNJJYMI5cNI5cMJJcMJJYMJJgNdMofWAAAABl0Uk5TAEC/cKD/3xBgkCCv75+AUDDQ4MDwsH8/T6YatRMAAADFSURBVHiczZHNEoMgDIQhuuWnqCBa+/5P2gRwtIdOvbV7yGTIB8kGpX4tTUTdFbAHcLvAGYj0d9AC/GYvqSPyd4TBcD7e+DpNSkWiCibAzwhSzECQ5/nWCCxcGdkCUDgPrMoBtoIpcgGSJj6I+gALE4UuYCyxhOGxSRuj6/wz8Nw27ugbUmNcZIZgjyViV/cGKjON69K6tiWmzCqrPIG6jWXajCZIXr3HM5jB/8XOdzO2bVB1gDuDroyT4+H6o7y+8Fv/oxdhTAfxcKTptgAAAABJRU5ErkJggg=="},1196:function(e,t,a){"use strict";a.r(t);var l=a(202),n=a(203),o=a(204),s=a(205),i=a(0),r=a.n(i),c=a(340),u=a(341),d=a(342),m=a(692),g=a(118),v=a(26),p=a(680),b=a.n(p),h=a(1011),A=a.n(h),f=a(210),E=a.n(f),k=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getListofQuestion=function(){var e=n.props.match.params.id,t=localStorage.getItem("user_id");v.a.get("/user/list_ask_qus/".concat(e,"/").concat(JSON.parse(t))).then((function(e){var t,a,l,o;console.log("askquesionlist",e.data.data);var s=(null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.length)-1,i=null===(l=e.data.data[s])||void 0===l?void 0:l.view_button,r=e.data.data[s];console.log(r),n.setState({R_question:r}),n.setState({togglebtn:i}),n.setState({astroQuesList:null===e||void 0===e||null===(o=e.data)||void 0===o?void 0:o.data})})).catch((function(e){console.log(e)}))},n.submitHandler=function(e,t,a){if(e.preventDefault(),n.state.question.length>5&&n.state.question.length<150){var l={astroid:t,userid:JSON.parse(localStorage.getItem("user_id")),question:n.state.question};v.a.post("/user/user_ask_qus",l).then((function(e){var t,a;console.log("@@@@@",e.data),"success"==(null===(t=e.data)||void 0===t?void 0:t.message)&&b()("Success!","Question Submitted SuccessFully!","success"),n.getListofQuestion(),"Your Question limit is Over"==(null===(a=e.data)||void 0===a?void 0:a.msg)&&b()("Your Question limit is Over"),n.setState({question:""})})).catch((function(e){b()("Error!","You clicked the button!","error"),console.log(e)}))}else b()("Enter Some value in Text Area")},n.handleChange=function(e){n.setState({question:e.target.value})},n.state={astroId:"",question:"",createdAt:"",astroQuesList:[],userId:"",R_question:{},togglebtn:!0},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;this.getListofQuestion(),v.a.get("/admin/getoneAstro/".concat(t)).then((function(t){var a,l,n,o,s,i,r,c,u,d;console.log(t.data),e.setState({fullname:t.data.data.fullname,all_skills:t.data.data.all_skills,language:t.data.data.language,img:t.data.data.img[0],status:null===t||void 0===t||null===(a=t.data)||void 0===a||null===(l=a.data)||void 0===l?void 0:l.status,Exp:t.data.data.Exp,exp_in_years:t.data.data.exp_in_years,callCharge:t.data.data.callCharge,long_bio:t.data.data.long_bio,msg:t.data.data.msg,astroMobile:null===t||void 0===t||null===(n=t.data)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.mobile,astroId:null===t||void 0===t||null===(s=t.data)||void 0===s||null===(i=s.data)||void 0===i?void 0:i._id,userId:null===t||void 0===t||null===(r=t.data)||void 0===r||null===(c=r.data)||void 0===c?void 0:c._id,createdAt:null===t||void 0===t||null===(u=t.data)||void 0===u||null===(d=u.data)||void 0===d?void 0:d.createdAt})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,t,a,l=this,n=this.state.astroQuesList;return r.a.createElement(g.a,{headerTop:"visible"},r.a.createElement("section",{className:"pt-0 pb-0"},r.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(E.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},r.a.createElement(c.a,null,r.a.createElement(u.a,null,r.a.createElement(d.a,{md:"12"},r.a.createElement("div",{className:"leftcont text-left"},r.a.createElement("h1",null,"Ask Question to Astrologer"))))))),r.a.createElement("section",{className:""},r.a.createElement(c.a,null,r.a.createElement(u.a,null,r.a.createElement(d.a,{lg:"12"},r.a.createElement("div",{className:"support-box"},r.a.createElement(u.a,null,r.a.createElement(d.a,{lg:"12"},r.a.createElement("div",{className:"supp-2 ask-qes-2"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h3",null,"Astrologer : ",r.a.createElement("span",null,this.state.fullname))),r.a.createElement("li",null,"Date/Time:"," ",r.a.createElement("span",null,this.state.createdAt.split("T")[0],"/",this.state.createdAt.split("T")[1])),r.a.createElement("li",null,"Remaining Question Count:"," ",r.a.createElement("span",null,null===(e=this.state.R_question)||void 0===e?void 0:e.remaining_qus)),r.a.createElement("li",null,"Question Count Total:"," ",r.a.createElement("span",null,null===(t=this.state.R_question)||void 0===t?void 0:t.totalQus)),r.a.createElement("li",null,"Status:"," ",r.a.createElement("span",null,"Offline"===this.state.status?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{style:{color:"red"}},this.state.status)):r.a.createElement(r.a.Fragment,null,r.a.createElement("b",{style:{color:"green"}},this.state.status)))),r.a.createElement("li",null,"Question:",r.a.createElement("ul",{className:"ask-ques"},(null===n||void 0===n?void 0:n.length)>0?n.map((function(e,t){return r.a.createElement("li",null,r.a.createElement("i",{class:"fa fa-quora","aria-hidden":"true",style:{marginRight:6}},t+1+"."),e.question,(null===e||void 0===e?void 0:e.answer)?r.a.createElement("p",null,r.a.createElement("img",{src:A.a,alt:""}),null===e||void 0===e?void 0:e.answer):null)})):"No question available"))),r.a.createElement("div",{className:"supp-4"},"false"===this.state.togglebtn||0===(null===(a=this.state.R_question)||void 0===a?void 0:a.remaining_qus)?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Write Your Question"),r.a.createElement("form",null,r.a.createElement(d.a,{md:"12"},r.a.createElement("div",{class:"form-group mtb-10"},r.a.createElement("label",null,"Question*"),r.a.createElement("textarea",{className:"form-control stp",name:"questime",placeholder:"Ask your question here...",value:this.state.question,maxLength:150,onChange:function(e){l.handleChange(e)}}),r.a.createElement("small",{className:"sm-txt"},"Note: Maximum"," ",150-this.state.question.length," ","Charactor Accepted."," "))," "),r.a.createElement(m.a,{className:"btn btn-primary",onClick:function(e){return l.submitHandler(e,l.state.astroId,l.state.userId)}},"Submit")))))))))))))}}]),a}(r.a.Component);t.default=k},692:function(e,t,a){"use strict";var l=a(7),n=a(14),o=a(208),s=a(20),i=a(0),r=a.n(i),c=a(2),u=a.n(c),d=a(58),m=a.n(d),g=a(36),v=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],p={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:g.o,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(o.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],o=e.block,s=e.className,i=e.close,c=e.cssModule,u=e.color,d=e.outline,p=e.size,b=e.tag,h=e.innerRef,A=Object(n.a)(e,v);i&&"undefined"===typeof A.children&&(A.children=r.a.createElement("span",{"aria-hidden":!0},"\xd7"));var f="btn"+(d?"-outline":"")+"-"+u,E=Object(g.k)(m()(s,{close:i},i||"btn",i||f,!!p&&"btn-"+p,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),c);A.href&&"button"===b&&(b="a");var k=i?"Close":null;return r.a.createElement(b,Object(l.a)({type:"button"===b&&A.onClick?"button":void 0},A,{className:E,ref:h,onClick:this.onClick,"aria-label":a||k}))},t}(r.a.Component);b.propTypes=p,b.defaultProps={color:"secondary",tag:"button"},t.a=b}}]);
//# sourceMappingURL=105.68af4a9b.chunk.js.map