"use strict";(self.webpackChunkrv18_basic=self.webpackChunkrv18_basic||[]).push([[384],{5384:(e,t,s)=>{s.r(t),s.d(t,{default:()=>y});var a=s(2791),n=s(2009),i=s(8024),r=s(5750),l=s(6535);const o=(0,r.Z)("div",{target:"e1834n9t4"})({name:"q25zk3",styles:"position:relative;display:flex;min-width:1000px;gap:20px;border:none;margin:0 auto"}),d=(0,r.Z)("div",{target:"e1834n9t2"})("position:relative;display:flex;width:400px;height:50px;justify-content:space-between;text-align:center;border-radius:10px;align-items:center;padding:0 20px;border:2px solid ",l.G.color.p500,";"),c=(0,r.Z)("div",{target:"e1834n9t1"})("position:relative;min-width:400px;align-items:center;padding:20px 10px;border-bottom:2px solid ",l.G.color.p200,";.branch{position:relative;display:flex;gap:5px;}"),p=(0,r.Z)("div",{target:"e1834n9t0"})({name:"rvtfpm",styles:"height:500px;overflow:scroll"});var g=s(7291),h=s(914),x=(s(4709),s(184));const u=e=>{let{market:t}=e;return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(c,{children:[(0,x.jsxs)("div",{className:"branch",children:[(0,x.jsx)(g.Zi,{children:t.marketname}),(0,x.jsx)(g.Zi,{children:"|"}),(0,x.jsx)(g.Zi,{children:t.Branch})]}),(0,x.jsx)(h.C8,{}),(0,x.jsxs)("div",{children:[(0,x.jsxs)(g.vD,{children:[t.address," "]}),(0,x.jsx)(g.vD,{children:t.phonenumber})]})]})})};var m=s(9235),v=s(5294),j=s(3014);const w="".concat(j.L,"/market"),k=new window.kakao.maps.services.Geocoder,f=e=>new Promise(((t,s)=>{k.addressSearch("".concat(e),(function(e,a){if(a===window.kakao.maps.services.Status.OK){const s={lat:e[0].y,lng:e[0].x};t(s)}else s(a)}))}));const y=()=>{const[e,t]=(0,a.useState)([]),[s,r]=(0,a.useState)(!0),[l,c]=(0,a.useState)([{position:{lat:0,lng:0}}]),[j,y]=(0,a.useState)({lat:0,lng:0}),[b,S]=(0,a.useState)({lat:0,lng:0}),[Z,F]=(0,a.useState)((()=>[{position:{lat:0,lng:0}}])),C=async()=>{const e=await(async()=>await v.Z.get("http://threeback.hellomh.site/market/address"))();if(null!=e.data){Z.splice(0,1);for(let t=0;t<e.data.length;t++)await f(e.data[t].address).then((e=>{l.push({position:{lat:e.lat,lng:e.lng}})}));return F(l),r(!1),e}};return(0,a.useEffect)((()=>{navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){y({lat:e.coords.latitude,lng:e.coords.longitude}),S({lat:e.coords.latitude,lng:e.coords.longitude})})),C(),k.coord2Address(b.lng,b.lat,(function(e,t){t===window.kakao.maps.services.Status.OK&&(document.getElementById("myaddress").innerText=e[0].address.address_name)})),(async e=>{let{successFn:t,failFn:s,errorFn:a}=e;try{const e="".concat(w,"/address"),a=await v.Z.get(e);"2"===a.status.toString().charAt(0)?t(a.data):s("\uba54\uc778 \ubaa8\uc2a4\ud2b8 \ub370\uc774\ud130 \ubd88\ub7ec\uc624\uae30 \uc2e4\ud328")}catch(n){a(n)}})({successFn:e=>{t(e)},failFn:e=>{alert("\ub9c8\ucf13\uc815\ubcf4 \ubd88\ub7ec\uc624\uae30 \uc2e4\ud328")},errorFn:e=>{alert("\uc11c\ubc84 \ubd88\uc548\uc815")}})}),[Z]),s?(0,x.jsx)("div",{children:"Loading..."}):(0,x.jsx)("div",{children:(0,x.jsx)(m.Z,{children:(0,x.jsx)(h.H7,{children:(0,x.jsx)(h.IU,{children:(0,x.jsxs)(o,{children:[(0,x.jsxs)("div",{children:[(0,x.jsxs)(d,{children:[(0,x.jsx)(g.Zi,{style:{width:"50px"},children:"\ub0b4 \uc704\uce58"}),(0,x.jsx)(g.Zi,{id:"myaddress"})]}),(0,x.jsx)(h.rS,{}),(0,x.jsx)(p,{children:e.map(((e,t)=>(0,x.jsx)(u,{market:e},t)))})]}),(0,x.jsxs)(n.D,{center:j,style:{width:"550px",height:"550px"},level:4,onDragEnd:e=>{const t=e.getCenter();y({lat:t.getLat(),lng:t.getLng()})},children:[(0,x.jsx)(i.O,{position:b,image:{src:"https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",size:new window.kakao.maps.Size(24,35)}}),Z.map(((e,t)=>{if(null!==Z)return(0,x.jsx)(i.O,{position:e.position,clickable:!0},t)}))]})]})})})})})}}}]);
//# sourceMappingURL=384.423bac15.chunk.js.map