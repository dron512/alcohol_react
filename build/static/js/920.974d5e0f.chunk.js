"use strict";(self.webpackChunkrv18_basic=self.webpackChunkrv18_basic||[]).push([[920],{3012:(e,i,t)=>{t.d(i,{XQ:()=>a}),t(3014).L;const s="94b443da7db84c565579d43ba563dd3f",n="http://localhost:3000/sign/kakao",a=()=>"".concat("https://kauth.kakao.com/oauth/authorize","?client_id=").concat(s,"&redirect_uri=").concat(n,"&response_type=code")},920:(e,i,t)=>{t.r(i),t.d(i,{default:()=>k});var s=t(9529),n=t(7462),a=t(2791);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"};var c=t(4291),r=function(e,i){return a.createElement(c.Z,(0,n.Z)({},e,{ref:i,icon:o}))};const l=a.forwardRef(r);var d=t(8526),p=t(2091),h=t(9862),m=t(2641),x=t(7689),g=t(1087),f=t(3012),u=t(3203),v=t(724),j=t(6535),w=t(9492),b=t(184);const y={email:"",password:""},k=()=>{const e=(0,x.s0)(),[i,t]=(0,a.useState)(y),n=((0,f.XQ)(),e=>{i[e.target.name]=e.target.value,t({...i})}),{doLogin:o,moveToPath:c}=(0,v.Z)(),r=e=>{console.log("\ud1a0\ud070 - ",e),c("/")},k=e=>{console.log("\uc2e4\ud328",e),alert("\uc774\uba54\uc77c \ubc0f \ube44\ubc00\ubc88\ud638 \ud655\uc778\ud558\uc138\uc694.")},Z=e=>{console.log("\uc11c\ubc84 \uc5d0\ub7ec",e)};return(0,b.jsx)("div",{children:(0,b.jsxs)(w.Np,{children:[(0,b.jsxs)(w.FR,{children:[(0,b.jsx)("p",{className:"logo",children:"ALCHOHOL HOLIC"}),(0,b.jsxs)("div",{className:"email-line",children:[(0,b.jsx)("div",{className:"line"}),(0,b.jsx)("p",{children:"\uc774\uba54\uc77c \ub85c\uadf8\uc778"}),(0,b.jsx)("div",{className:"line"})]})]}),(0,b.jsxs)(d.Z,{name:"normal_login",className:"login-form",initialValues:{remember:!0,email:i.email,password:i.password},onFinish:async e=>{try{const e=await(0,u.SV)({loginParam:i,successFn:r,failFn:k,errorFn:Z});r(e),o({loginParam:i})}catch(t){k(t)}},children:[(0,b.jsx)(d.Z.Item,{name:"email",rules:[{required:!0,message:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694!"}],children:(0,b.jsx)(p.default,{prefix:(0,b.jsx)(s.Z,{className:"site-form-item-icon"}),placeholder:"\uc774\uba54\uc77c",name:"email",onChange:n,style:{width:"100%",height:"60px",fontSize:"20px"}})}),(0,b.jsx)(d.Z.Item,{name:"password",rules:[{required:!0,message:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694!"}],children:(0,b.jsx)(p.default.Password,{style:{width:"100%",height:"60px",fontSize:"20px"},prefix:(0,b.jsx)(l,{className:"site-form-item-icon"}),type:"password",placeholder:"\ube44\ubc00\ubc88\ud638",name:"password",onChange:n})}),(0,b.jsx)(d.Z.Item,{children:(0,b.jsxs)("div",{style:{position:"relative",display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,b.jsx)(d.Z.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:(0,b.jsx)(h.Z,{children:"\uc774\uba54\uc77c \uc800\uc7a5\ud558\uae30"})}),(0,b.jsx)(g.rU,{className:"login-form-forgot",to:"/sign/FindIdPw",children:"\uc774\uba54\uc77c/ \ube44\ubc00\ubc88\ud638 \ucc3e\uae30"})]})}),(0,b.jsx)(d.Z.Item,{children:(0,b.jsx)(m.ZP,{type:"primary",htmlType:"submit",style:{width:"100%",height:"60px",background:"".concat(j.G.color.f900),fontSize:"20px"},children:"\ub85c\uadf8\uc778"})})]}),(0,b.jsx)(w.FR,{children:(0,b.jsxs)("div",{className:"login-line",children:[(0,b.jsx)("div",{className:"line"}),(0,b.jsx)("p",{children:"\uac04\ud3b8 \ub85c\uadf8\uc778/\ud68c\uc6d0\uac00\uc785"}),(0,b.jsx)("div",{className:"line"})]})}),(0,b.jsxs)(w.Nm,{onClick:()=>{const e=(0,f.XQ)();window.location.href=e},style:{background:"".concat(j.G.color.y900),border:"none"},children:[(0,b.jsx)("img",{src:"/images/kakao.png",alt:"heart"}),"\uce74\uce74\uc624 3\ucd08\ub9cc\uc5d0 \uc2dc\uc791\ud558\uae30"]}),(0,b.jsx)(w.Nm,{onClick:()=>e("/sign/up"),children:"\ud68c\uc6d0\uac00\uc785"})]})})}},9492:(e,i,t)=>{t.d(i,{FR:()=>o,Nm:()=>c,Np:()=>a});var s=t(5750),n=t(6535);const a=(0,s.Z)("div",{target:"e1mcyvkm2"})({name:"bf48n3",styles:"min-width:1300px;padding:130px 330px 130px 330px"}),o=(0,s.Z)("div",{target:"e1mcyvkm1"})("position:relative;width:100%;display:flex;flex-direction:column;align-items:center;.logo{font-size:50px;font-weight:bold;padding-bottom:130px;}.email-line{position:relative;width:100%;display:flex;justify-content:space-between;align-items:center;color:",n.G.color.p800,";padding-bottom:50px;p{font-size:20px;}.line{height:2px;width:30%;background:",n.G.color.p800,";}}.login-line{position:relative;width:100%;display:flex;justify-content:space-between;align-items:center;color:",n.G.color.p800,";padding:20px 0 40px 0;p{font-size:20px;}.line{height:2px;width:30%;background:",n.G.color.p800,";}}"),c=(0,s.Z)("button",{target:"e1mcyvkm0"})("width:100%;height:60px;margin-bottom:17px;border-radius:8px;font-size:20px;color:",n.G.color.p800,";background:none;border:1px solid ",n.G.color.p500,";cursor:pointer;img{width:21px;margin-right:10px;}")},9529:(e,i,t)=>{t.d(i,{Z:()=>r});var s=t(7462),n=t(2791);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};var o=t(4291),c=function(e,i){return n.createElement(o.Z,(0,s.Z)({},e,{ref:i,icon:a}))};const r=n.forwardRef(c)}}]);
//# sourceMappingURL=920.974d5e0f.chunk.js.map