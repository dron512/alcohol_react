"use strict";(self.webpackChunkrv18_basic=self.webpackChunkrv18_basic||[]).push([[11],{9326:(t,o,e)=>{e.d(o,{FM:()=>p,M7:()=>l,Nm:()=>i,Z1:()=>d,mi:()=>g,qL:()=>r,yS:()=>c});var a=e(5294),n=e(4880),s=e(3014);"".concat(s.L,"/main");const c=async(t,o)=>{let e;if(console.log("m-axios  :",t),console.log("s-axios  :",o),e=""!==o?o:t,e)try{const t=await a.Z.get("".concat(s.L,"/search/category?category=").concat(e));if(200===t.status)return t.data;console.log("no")}catch(n){console.log(n)}},l=async t=>{let{search:o}=t;console.log("axios-data",o);try{console.log("\uc5ec\uae30\uc624\ub098");const t=await a.Z.post("".concat(s.L,"/main/anony/contents"),o);if(console.log(t.status),200===t.status){console.log("result",t.data);return t.data}console.log("no")}catch(e){alert(e.response.data.errorMessage),console.log(e)}},r=async t=>{let{search:o}=t;console.log("axios-data",o);try{const t=await n.Z.post("".concat(s.L,"/main/contents"),o);if(200===t.status){return t.data}console.log("no")}catch(e){console.log(e)}},i=async t=>{let{code:o}=t;console.log("axios",o);const e={code:Number(o)};console.log("params  ",e);try{const t=await n.Z.post("".concat(s.L,"/detail"),e);if(200===t.status)return console.log("R : ",t.data),t.data;console.log("no")}catch(a){console.log(a)}},g=async()=>{try{const t=await n.Z.get("".concat(s.L,"/main/recent"));if(200===t.status)return console.log("\uacb0\uacfc\uac12 : ",t.data),t.data}catch(t){console.log(t)}},d=async t=>{let{code:o}=t;console.log("ax:",o);const e={code:o};try{const t=await n.Z.post("".concat(s.L,"/detail/market"),e);if(200===t.status)return t.data}catch(a){console.log(a)}},p=async t=>{let{postcard:o}=t;console.log("ax :",o);try{const t=await n.Z.post("".concat(s.L,"/shoppingbasket"),o);if(200===t.status)return console.log("result :",t.data),t.data}catch(e){console.log(e)}}},9777:(t,o,e)=>{e.d(o,{Qj:()=>s,lg:()=>c,nU:()=>n});var a=e(5750);const n=(0,a.Z)("div",{target:"e1ubhs6l2"})({name:"k4ylfp",styles:"display:flex;align-items:center;gap:10px;margin:0 10px 0 10px"}),s=(0,a.Z)("div",{target:"e1ubhs6l1"})({name:"6x2f5o",styles:"font-size:16px;font-weight:bold"}),c=(0,a.Z)("button",{target:"e1ubhs6l0"})({name:"1xe7pzz",styles:"width:30px;height:30px;background-color:#fff;cursor:pointer;border:1px solid #868686;&:hover{background-color:#868686;}img{width:20px;height:20px;border:none;}"})},1831:(t,o,e)=>{e.d(o,{EJ:()=>s,Nx:()=>i,O9:()=>r,fB:()=>l,g_:()=>c});var a=e(5750),n=e(6535);const s=(0,a.Z)("div",{target:"e1wpkkv24"})({name:"1ywwctc",styles:"position:fixed;display:flex;align-items:center;justify-content:center;left:0;top:0;width:100%;height:100%;background:rgba(0, 0, 0, 0.7);z-index:999"}),c=(0,a.Z)("div",{target:"e1wpkkv23"})("position:relative;min-width:1000px;height:600px;background-color:",n.G.color.p100,";padding:20px;margin:0 auto;overflow-y:scroll;scroll-behavior:smooth;"),l=(0,a.Z)("button",{target:"e1wpkkv22"})({name:"kcporm",styles:"width:20px;height:20px;padding:0;background:none;border:none;cursor:pointer;img{width:20px;height:20px;}"}),r=(0,a.Z)("button",{target:"e1wpkkv21"})({name:"4czyut",styles:"position:relative;display:flex;justify-content:space-between;gap:20px;display:flex;justify-content:space-between;height:500px;padding:0;background:none;border:none"}),i=(0,a.Z)("div",{target:"e1wpkkv20"})({name:"dwou8h",styles:"position:relative;width:500px;justify-content:center;text-align:center"})}}]);
//# sourceMappingURL=11.e67c6a9e.chunk.js.map