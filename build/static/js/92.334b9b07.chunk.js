(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[92],{1185:function(e,a,t){"use strict";t.r(a);var l=t(202),n=t(203),r=t(213),i=t(204),c=t(205),m=t(0),o=t.n(m),s=t(340),u=t(341),d=t(342),h=t(692),p=t(118),g=(t(691),function(e){Object(i.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={modal:!1},n.toggle=n.toggle.bind(Object(r.a)(n)),n}return Object(n.a)(t,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){return o.a.createElement(p.a,{headerTop:"visible"},o.a.createElement("section",null,o.a.createElement(s.a,null,o.a.createElement(u.a,null,o.a.createElement(d.a,{lg:"2"}),o.a.createElement(d.a,{lg:"8"},o.a.createElement("div",{className:"wal-amt"},o.a.createElement("h1",null,"Complete  Profile  Astrologer"),o.a.createElement("hr",null),o.a.createElement("form",null,o.a.createElement(u.a,null,o.a.createElement(d.a,{md:"6"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"Gender*"),o.a.createElement("select",{className:"form-control",value:this.state.gender,onChange:this.changeHandler,name:"gender"},o.a.createElement("option",{selected:!0},"--select--"),o.a.createElement("option",null,"Male"),o.a.createElement("option",null,"Female")))),o.a.createElement(d.a,{md:"6"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"DOB*"),o.a.createElement("input",{type:"date",required:!0,name:"dob",maxLength:"8",value:this.state.dob,onChange:this.changeHandler}))),o.a.createElement(d.a,{md:"6"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"Primary Skills*"),o.a.createElement("input",{placeholder:"Primary Skills",name:"primary_skills",type:"text",value:this.state.primary_skills,onChange:this.changeHandler}))),o.a.createElement(d.a,{md:"6"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"All Skills*"),o.a.createElement("input",{placeholder:"All Skills",name:"all_skills",type:"text",value:this.state.all_skills,onChange:this.changeHandler}))),o.a.createElement(d.a,{md:"6"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"Language*"),o.a.createElement("input",{placeholder:"language",name:"language",type:"text",value:this.state.language,onChange:this.changeHandler}))),o.a.createElement(d.a,{md:"6"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"Experience in years*"),o.a.createElement("input",{type:"text",name:"exp_in_years",required:!0,value:this.state.exp_in_years,onChange:this.changeHandler}))),o.a.createElement(d.a,{md:"6"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"How many hours you can contribute daily?*"),o.a.createElement("input",{type:"text",name:"conrubute_hrs",required:!0,value:this.state.conrubute_hrs,onChange:this.changeHandler}))),o.a.createElement(d.a,{md:"6"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"Where did you hear about Astrotalk?*"),o.a.createElement("input",{type:"text",name:"hear_abt_astrology",value:this.state.hear_abt_astrology,onChange:this.changeHandler}))),o.a.createElement(d.a,{md:"12"},o.a.createElement("p",{className:"mb-0 mt-10"},"Are you working on any other online platform?*"),o.a.createElement(u.a,null,o.a.createElement(d.a,{md:"6"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"Name of platform"),o.a.createElement("input",{type:"text",name:"other_online_platform",value:this.state.other_online_platform,onChange:this.changeHandler}))),o.a.createElement(d.a,{md:"6"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"Monthly Earning"),o.a.createElement("input",{type:"text"}))))),o.a.createElement(d.a,{md:"6"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"What is a suitable time for interview*"),o.a.createElement("input",{type:"text",required:!0,name:"suitable_tym_interview",value:this.suitable_tym_interview,onChange:this.changeHandler}))),o.a.createElement(d.a,{md:"6"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"Which city do you currently live in?"),o.a.createElement("input",{type:"text",required:!0,name:"crnt_city",value:this.crnt_city,onChange:this.changeHandler}))),o.a.createElement(d.a,{md:"6"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"Main source of business (other than astrology)*"),o.a.createElement("input",{placeholder:"source of business",name:"income_src",type:"text",value:this.state.income_src,onChange:this.changeHandler}))),o.a.createElement(d.a,{md:"6"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"Select your highest qualification*"),o.a.createElement("input",{placeholder:"qualification",name:"highest_qualification",type:"text",value:this.state.highest_qualification,onChange:this.changeHandler}))),o.a.createElement(d.a,{md:"6"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"Degree/Diploma*"),o.a.createElement("input",{placeholder:"Degree/Diploma",name:"degree_deploma",type:"text",value:this.state.degree_deploma,onChange:this.changeHandler}))),o.a.createElement(d.a,{md:"6"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"College/School/University*"),o.a.createElement("input",{type:"text",name:"clg_scl_name",required:!0,value:this.clg_scl_name,onChange:this.changeHandler}))),o.a.createElement(d.a,{md:"6"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"From where did you learn Astrology?"),o.a.createElement("input",{type:"text",name:"lrn_abt_astrology",required:!0,value:this.lrn_abt_astrology,onChange:this.changeHandler}))),o.a.createElement(d.a,{md:"6"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"Instagram profile link"),o.a.createElement("input",{type:"text",name:"insta_link ",required:!0,value:this.insta_link,onChange:this.changeHandler}))),o.a.createElement(d.a,{md:"6"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"Facebook profile link"),o.a.createElement("input",{type:"text",name:"fb_link",required:!0,value:this.fb_link,onChange:this.changeHandler}))),o.a.createElement(d.a,{md:"6"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"LinkedIn profile link"),o.a.createElement("input",{type:"text",name:"linkedln_link",required:!0,value:this.linkedln_link,onChange:this.changeHandler}))),o.a.createElement(d.a,{md:"6"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"Youtube channel link"),o.a.createElement("input",{type:"text",name:"youtube_link",required:!0,value:this.youtube_link,onChange:this.changeHandler}))),o.a.createElement(d.a,{md:"6"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"Name of the person who referred you?"),o.a.createElement("input",{type:"text",name:"anybody_prefer",required:!0,value:this.anybody_prefer,onChange:this.changeHandler}))),o.a.createElement(d.a,{md:"6"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"Minimum Earning Expectation from AstroVipra*"),o.a.createElement("input",{type:"text",name:"min_earning_expe",required:!0,value:this.min_earning_expe,onChange:this.changeHandler}))),o.a.createElement(d.a,{md:"6"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"Maximum Earning Expectation from AstroVipra*"),o.a.createElement("input",{type:"text",name:"max_earning_expe",required:!0,value:this.max_earning_expe,onChange:this.changeHandler}))),o.a.createElement(d.a,{md:"6"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"Website profile link"),o.a.createElement("input",{type:"text",name:"max_earning_expe",required:!0,value:this.max_earning_expe,onChange:this.changeHandler}))),o.a.createElement(d.a,{md:"12"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"Long bio*"),o.a.createElement("textarea",{type:"text",class:"form-control",name:"long_bio",required:!0,value:this.long_bio,onChange:this.changeHandler,placeholder:"Please let us know more about you"}))),o.a.createElement(d.a,{md:"12",className:"mt-3"},o.a.createElement(h.a,{className:"btn btn-success"},"Submit")))))),o.a.createElement(d.a,{lg:"2"})))))}}]),t}(o.a.Component));a.default=g},691:function(e,a,t){},692:function(e,a,t){"use strict";var l=t(7),n=t(14),r=t(208),i=t(20),c=t(0),m=t.n(c),o=t(2),s=t.n(o),u=t(58),d=t.n(u),h=t(36),p=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],g={active:s.a.bool,"aria-label":s.a.string,block:s.a.bool,color:s.a.string,disabled:s.a.bool,outline:s.a.bool,tag:h.o,innerRef:s.a.oneOfType([s.a.object,s.a.func,s.a.string]),onClick:s.a.func,size:s.a.string,children:s.a.node,className:s.a.string,cssModule:s.a.object,close:s.a.bool},E=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(r.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],r=e.block,i=e.className,c=e.close,o=e.cssModule,s=e.color,u=e.outline,g=e.size,E=e.tag,b=e.innerRef,f=Object(n.a)(e,p);c&&"undefined"===typeof f.children&&(f.children=m.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(u?"-outline":"")+"-"+s,y=Object(h.k)(d()(i,{close:c},c||"btn",c||v,!!g&&"btn-"+g,!!r&&"btn-block",{active:a,disabled:this.props.disabled}),o);f.href&&"button"===E&&(E="a");var _=c?"Close":null;return m.a.createElement(E,Object(l.a)({type:"button"===E&&f.onClick?"button":void 0},f,{className:y,ref:b,onClick:this.onClick,"aria-label":t||_}))},a}(m.a.Component);E.propTypes=g,E.defaultProps={color:"secondary",tag:"button"},a.a=E}}]);
//# sourceMappingURL=92.334b9b07.chunk.js.map