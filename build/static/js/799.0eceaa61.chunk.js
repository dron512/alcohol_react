"use strict";(self.webpackChunkrv18_basic=self.webpackChunkrv18_basic||[]).push([[799,305],{5151:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(5750),o=(r(2791),r(6535)),a=r(184);const s=e=>{let{active:t,btName:r,onClick:s}=e;const l=(0,n.Z)("button",{target:"e1wnpxuy0"})("width:159px;height:45px;background:",t?o.G.color.b900:o.G.color.p000,";border:",t?"none":"1px solid ".concat(o.G.color.p300),";color:",t?o.G.color.p000:o.G.color.p300,";font-size:13px;cursor:pointer;");return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(l,{onClick:s,children:r})})}},7305:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var n=r(7049),o=r(2791),a=r(6535),s=r(4347),l=r(3249),c=r(8637),d=r(2634),i=r(3972),x=r(184);const p=[{name:"\ub354 \ud398\uc774\uba38\uc2a4 \uadf8\ub77c\uc6b0\uc2a4 700ml",writing:"\uc838\ub77c\u314f\u314f\u314f\u314f\u314f\u314f\u314f\u314f\u314f\u314f",grade:4,picture:""}],h=()=>{const[e,t]=(0,o.useState)(p),[r,h]=(0,o.useState)(!1),[u,m]=(0,o.useState)();(0,o.useEffect)((()=>{(0,d.t_)({successFn:e=>{t(e)},failFn:e=>{alert("most \uc2e4\ud328")},errorFn:e=>{alert("\uc11c\ubc84\uc0c1\ud0dc \ubd88\uc548\uc815 \ub2e4\uc74c\uc5d0 \uc2dc\ub3c4")}})}),[]);const j=[{title:"\uc774\ubbf8\uc9c0",dataIndex:"name",render:(e,t)=>(0,x.jsxs)("div",{children:[(0,x.jsx)("img",{style:{width:"80px",marginBottom:"10px"},src:""+t.picture,alt:"\ub9ac\ubdf0 \uc791\uc131"}),(0,x.jsx)(c.l,{children:Array.from({length:t.grade},((e,t)=>(0,x.jsx)("img",{src:"/images/star.png",alt:"star"},t)))})]})},{title:"\uc81c\ud488\uba85",dataIndex:"productNm",render:(e,t)=>(0,x.jsx)("div",{children:(0,x.jsx)("p",{children:t.name})})},{title:"\ub0b4\uc6a9",dataIndex:"content",render:(e,t,r)=>(0,x.jsx)("div",{style:{width:"600px",wordWrap:"break-word",textAlign:"center",display:"flex",justifyContent:"center"},children:(0,x.jsx)("p",{children:t.writing})})},{title:"\ub9ac\ubdf0\uc0ad\uc81c",button:(0,x.jsx)("button",{children:"ddldldd"}),render:(e,t,r)=>(0,x.jsx)(i.w,{onClick:()=>(e=>{h(!0),m(e)})(r),children:"\ub9ac\ubdf0 \uc0ad\uc81c"})}];return(0,x.jsxs)(n.ZP,{theme:{token:{colorPrimary:a.G.color.p900},components:{Table:{headerBg:"none",headerColor:a.G.color.p500}}},children:[(0,x.jsx)(s.Z,{columns:j,dataSource:e,pagination:!1}),r&&(0,x.jsx)(l.A,{onClose:()=>{h(!1)},code:e[u],refreshData:()=>{(0,d.t_)({successFn:e=>{t(e)},failFn:e=>{alert("most \uc2e4\ud328")},errorFn:e=>{alert("\uc11c\ubc84\uc0c1\ud0dc \ubd88\uc548\uc815 \ub2e4\uc74c\uc5d0 \uc2dc\ub3c4")}})}})]})}},7799:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var n=r(5750),o=r(2791),a=r(5151),s=r(7689),l=r(7049),c=r(2634),d=r(3249),i=r(6535),x=r(3972),p=r(4347),h=r(184);const u=[{code:3,name:"\uc870\ub2c8\uc6cc\ucee4 \ube14\ub799 700ml",purchaseday:"2024-05-02",marketname:"\ud3ec\ub3c4\ub300\uad6c\ub3d9\uc131\ub85c\uc810",delivery:"PickUp",picture:""}],m=()=>{const[e,t]=(0,o.useState)(!1),[r,n]=(0,o.useState)(u),[a,s]=(0,o.useState)();(0,o.useEffect)((()=>{(0,c.xj)({successFn:e=>{n(e)},failFn:e=>{alert("\uc2e4\ud328")},errorFn:e=>{alert("\uc11c\ubc84\uc0c1\ud0dc \ubd88\uc548\uc815 \ub2e4\uc74c\uc5d0 \uc2dc\ub3c4")}})}),[]);const m=[{title:"\uc774\ubbf8\uc9c0",dataIndex:"name",render:(e,t)=>(0,h.jsx)("img",{style:{width:"80px"},src:t.picture,alt:"\ub9ac\ubdf0 \uc791\uc131"})},{title:"\uc81c\ud488\uba85 | \uc8fc\ubb38\ubc88\ud638",dataIndex:"test",render:(e,t)=>(0,h.jsx)("div",{children:(0,h.jsx)("p",{children:t.name})})},{title:"\uc8fc\ubb38\uc77c\uc790",dataIndex:"purchaseday"},{title:"\ub9e4\uc7a5\uba85",dataIndex:"marketname"},{title:"\uc8fc\ubb38\ubc29\uc2dd",dataIndex:"delivery"},{title:"\ub9ac\ubdf0\uc791\uc131",button:(0,h.jsx)("button",{children:"ddldldd"}),render:(e,r,n)=>(0,h.jsx)(x.w,{onClick:()=>{return e=n,t(!0),s(e),void console.log("\ubaa8\ub2ec\ub85c \uc804\ub2ec\ub418\ub294 \ucf54\ub4dc \uac12:",e);var e},children:"\ub9ac\ubdf0 \uc791\uc131"})}];return(0,h.jsxs)(l.ZP,{theme:{token:{colorPrimary:i.G.color.p900},components:{Table:{headerBg:"none",headerColor:i.G.color.p500}}},children:[(0,h.jsx)(p.Z,{columns:m,dataSource:r,pagination:!1}),e&&(0,h.jsx)(d.Z,{onClose:()=>{t(!1)},code:r[a]})]})};var j=r(7305),g=r(914),v=r(7291);const b=()=>{(0,s.s0)();const[e,t]=(0,o.useState)(1),r=e=>{t(e),console.log("\uc120\ud0dd\ub41c \ub9ac\ubdf0\ubc84\ud2bc",e)},l=(0,n.Z)("div",{target:"e1b1wlgk0"})("width:100%;position:relative;hr{background-color:",i.G.color.b900,";height:3px;}");return(0,h.jsxs)(l,{children:[(0,h.jsx)(g.C8,{}),(0,h.jsx)(v.XN,{children:"\uc0c1\ud488\ub9ac\ubdf0"}),(0,h.jsx)(g.rS,{}),(0,h.jsxs)("div",{children:[(0,h.jsx)(a.Z,{btName:"\uc791\uc131 \uac00\ub2a5\ud55c \ub9ac\ubdf0",reBtId:1,active:1===e,onClick:()=>{r(1)}}),(0,h.jsx)(a.Z,{btName:"\ub0b4 \ub9ac\ubdf0",reBtId:2,active:2===e,onClick:()=>r(2)})]}),(0,h.jsx)("hr",{}),(0,h.jsx)("div",{className:"page-content",children:1===e?(0,h.jsx)(m,{}):(0,h.jsx)(j.default,{})})]})}},8637:(e,t,r)=>{r.d(t,{l:()=>a});var n=r(5750),o=r(6535);const a=(0,n.Z)("div",{target:"e1lw7wcc0"})("display:flex;align-items:center;img{width:19px;height:15px;}a{margin-left:10px;font-size:13px;color:",o.G.color.p400,";text-decoration:underline;}")}}]);
//# sourceMappingURL=799.0eceaa61.chunk.js.map