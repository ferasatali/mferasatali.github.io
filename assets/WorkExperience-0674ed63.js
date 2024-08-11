import{g as d,V as E,a as k}from"./index-ef8a1126.js";import{T as S}from"./TextPlugin-7f8d2251.js";import{c as w}from"./googleSpreadSheetAPI-e7ef4733.js";import{d as I,t as r,K as V,L as t,a as l,w as p,o as a,C as e,M as f,N as _,O as N,P as c,ap as A,G as P,H as W,_ as b}from"./index-b238e753.js";import{V as D}from"./VSkeletonLoader-3fc7c7e0.js";const J=[{companyName:"House of Tech (HOT)",role:"Full Stack Developer",duration:"08/2022 - 07/2023",content:["Application used for Online Booking of cars","Technologies: NodeJs, VueJs, Javascript, Google API, Express Js","Work on Database and API's Integration","Work on Backend and Frontend of the project."]},{companyName:"Aslase",role:"Full Stack Software Engineer",duration:"07/2023 - Present",content:["Integrate Recruitment portal for Hiring candidates","Technologies: NodeJs, VueJs, Javascript, Google API, Express Js","Work on Database and API's Integration","Work on Backend and Frontend of the project."]}],F=i=>(P("data-v-e7e666f1"),i=i(),W(),i),T=F(()=>e("p",{class:"header-simple"},"Details",-1)),j={key:0},B={class:"main-heading1 mt-3"},C={class:"sub-heading1"},H={class:"sub-heading1 ml-2 d-flex justify-end"},G={class:"px-3"},L={key:1},O=I({__name:"WorkExperience",setup(i){d.registerPlugin(S);const m=r(null),g=r(null),h=r(null),u=r([]),o=r(!1);return V(async()=>{d.to(m.value,{duration:.6,text:"Professional Experience",ease:"slow(0.7,0.7,false)",x:0}),d.to(g.value,{duration:1,text:"Navigating Challenges and Driving Success in the Work Arena",ease:"none",delay:1}),d.to(h.value,{duration:1,opacity:1,display:"block",x:1});try{o.value=!0;const n=await w();n&&n.length?u.value=n.reverse():u.value=J.reverse(),o.value=!1}catch(n){console.error(n),o.value=!1}o.value=!1}),(n,M)=>(a(),t("section",null,[l(E,{align:"center",justify:"center"},{default:p(()=>[l(k,{cols:"12",class:"d-flex align-center justify-center flex-column mt-8"},{default:p(()=>[e("p",{class:"main-heading text-center",ref_key:"title1",ref:m},null,512),e("p",{class:"paragraph text-center",ref_key:"title2",ref:g},null,512)]),_:1}),l(k,{cols:"12",class:"d-flex align-center justify-center flex-wrap mt-6",style:{gap:"2rem"}},{default:p(()=>[e("div",{class:"d-flex base-card flex-column animation-div ma-4",ref_key:"workExperienceAnimation",ref:h},[T,o.value?(a(),t("div",L,[(a(),t(f,null,_(10,s=>l(D,{key:s,type:"heading",width:"100%",style:{"background-color":"transparent"}})),64))])):(a(),t("span",j,[(a(!0),t(f,null,_(u.value,(s,x)=>(a(),t("div",{key:x},[e("p",B,[N(c(x+1)+" - "+c(s.companyName)+" ",1),e("span",C," - "+c(s.role),1),e("span",H,c(s.duration),1)]),e("div",G,[(a(!0),t(f,null,_(s.content,(v,y)=>(a(),t("ul",{key:y},[e("li",null,c(v),1)]))),128))]),l(A,{thickness:"2",color:"blue",class:"mt-3"})]))),128))]))],512)]),_:1})]),_:1})]))}});const U=b(O,[["__scopeId","data-v-e7e666f1"]]);export{U as default};