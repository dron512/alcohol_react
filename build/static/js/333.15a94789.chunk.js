"use strict";(self.webpackChunkrv18_basic=self.webpackChunkrv18_basic||[]).push([[333],{5594:(t,e,o)=>{o.d(e,{A9:()=>l,KA:()=>n,Sk:()=>d,Ss:()=>i,UN:()=>u});var r=o(3014),s=o(4880),a=o(1933);const c="".concat(r.L,"/favorites"),n=async()=>{try{const t="".concat(c,"/list"),e=await s.Z.get(t);if("2"===e.status.toString().charAt(0))return e.data;alert("\uba54\uc778 \ubaa8\uc2a4\ud2b8 \ub370\uc774\ud130 \ubd88\ub7ec\uc624\uae30 \uc2e4\ud328")}catch(t){alert(t)}},i=async t=>{let{code:e}=t;try{const t="".concat(c),o=await s.Z.delete(t,{data:{code:e.code}});if("2"===o.status.toString().charAt(0))return o.data;console.log("\uc2e4\ud328")}catch(o){console.log("err",o)}},l=()=>{const t=(0,a.useQueryClient)(),{mutate:e,isLoading:o}=(0,a.useMutation)((t=>i({code:t})),{onSuccess:e=>{t.invalidateQueries(["wishQuery"])},onError:t=>{console.error("Error updating cart:",t)}});return{mutate:e,isLoading:o}},d=()=>{const t=(0,a.useQueryClient)(),{mutate:e,isLoading:o}=(0,a.useMutation)((t=>(async t=>{let{code:e}=t;try{const t="".concat(c),o=await s.Z.post(t,e);if("2"===o.status.toString().charAt(0))return o.data;console.log("er")}catch(o){console.log("er",o)}})({code:t})),{onSuccess:e=>{t.invalidateQueries(["wishQuery"])},onError:t=>{console.error("Error updating cart:",t)}});return{mutate:e,isLoading:o}},u=t=>{let{setHeartChecked:e}=t;const{mutate:o,isLoading:r}=(0,a.useMutation)((t=>(async t=>{let{code:e}=t;try{const t="".concat(c,"/check"),o=await s.Z.post(t,e);if(200===o.status)return o;console.log("\ub370\uc774\ud130 \ubd88\ub7ec\uc624\uae30 \uc2e4\ud328")}catch(o){console.log(o)}})({code:t})),{onSuccess:t=>{e(t.data)},onError:t=>{console.error("\ucc98\ub9ac \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4:",t)}});return{mutate:o,isLoading:r}}},2333:(t,e,o)=>{o.r(e),o.d(e,{default:()=>m});var r=o(2791),s=o(8304),a=o(5594),c=o(7689),n=o(6535),i=o(1229),l=o(6293),d=o(511),u=o(37),h=o(1797),g=o(184);const v=t=>{let{data:e}=t;const[o,s]=(0,r.useState)(e.code),{moveToDetail:v}=(0,h.Z)(),y=((0,c.s0)(),t=>{}),m=t=>{alert("failFn : \ub370\uc774\ud130 \ud638\ucd9c\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4.")};return(0,g.jsxs)(l.l,{children:[(0,g.jsx)(d.Z,{alt:"",width:240,height:240,placeholder:(0,g.jsx)("div",{children:(0,g.jsx)(u.Z,{width:240,height:240})}),src:null===e||void 0===e?void 0:e.picture,onClick:()=>v(null===e||void 0===e?void 0:e.code)}),(0,g.jsx)(i.ib,{children:(0,g.jsxs)("div",{className:"tagform",children:[(0,g.jsx)("button",{className:"wish-bt",onClick:()=>{return t=e.code,console.log("\uc0c1\ud488 \ucf54\ub4dc2:",o),void(0,a.Ss)({code:{code:t},successFn:y,failFn:m,errorFn:t=>{alert("\uc11c\ubc84\uc0c1\ud0dc \ubd88\uc548\uc815 \ub2e4\uc74c\uc5d0 \uc0c1\ud488\ubd88\ub7ec\uc624\uae30 \uc2dc\ub3c4")}});var t},children:(0,g.jsx)("img",{src:"/images/star.png",alt:"star"})}),(0,g.jsx)("p",{className:"productNm",style:{color:n.G.color.p900},children:null===e||void 0===e?void 0:e.name})]})})]})};var y=o(1933);const m=()=>{const[t,e]=(0,r.useState)([]),{data:o}=(0,y.useQuery)({queryKey:["wishQuery"],queryFn:()=>(0,a.KA)({})});return(0,r.useEffect)((()=>{e(o)}),[o]),(0,g.jsx)("div",{children:(0,g.jsx)(s.T5,{children:null===t||void 0===t?void 0:t.map((t=>(0,g.jsx)(v,{data:t},t.code)))})})}}}]);
//# sourceMappingURL=333.15a94789.chunk.js.map