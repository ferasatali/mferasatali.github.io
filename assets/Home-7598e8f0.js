import{g as s}from"./index-0fa819ad.js";import{T as b}from"./TextPlugin-7f8d2251.js";import{d as v,I as f,t,J as k,K as S,C as e,L as w,o as I,G as H,H as M,_ as j}from"./index-a99e1a27.js";import{g as C}from"./googleSpreadSheetAPI-1c4cac29.js";const h="/assets/stars-2c33d046.svg",D="/assets/mferasatali-b71bdda2.png",g=o=>(H("data-v-9f6abcad"),o=o(),M(),o),E={class:"d-flex align-center justify-center flex-column home"},W=g(()=>e("div",{class:"home-tagline d-flex align-center justify-start py-1 px-4"},[e("img",{width:"30",src:h,alt:"HCMS"}),e("p",{class:""},"profileIntroduction('MFA');"),e("img",{width:"30",src:h,alt:"HCMS"})],-1)),B={class:"d-flex align-center flex-row flex-wrap"},F={class:"image"},L=g(()=>e("img",{src:D,alt:"ferasat"},null,-1)),P={class:"header-simple mt-4 text-grey"},Y={class:"mt-5 mt-md-12 text-center home-title"},q=v({__name:"Home",setup(o){s.registerPlugin(b);const n=f("2021-02-01"),i=f(),l=t(0),r=t(0),c=t(null),d=t(null),m=t(null),u=t(null),p=t("Welcome();! <br> I'm a passionate Software Engineer and Web Developer based in Lahore, Pakistan. <br> With expertise in building scalable web applications and a commitment to innovation, <br> I bring a unique blend of technical skills and creativity to drive success in every project. <br> Explore my journey through code and creativity below. <br> Let's build something amazing together! <br> Unlock more about my journey by clicking the button on right side.");k(async()=>{const a=await C();a&&(p.value=a),y(),s.to(u.value,{duration:1,display:"block",opacity:1,x:1,y:1,delay:3}),s.to(c.value,{duration:2,text:"Muhammad Ferasat Ali",ease:"none",delay:.5}),s.to(d.value,{duration:1,text:"Full Stack Software Engineer",ease:"none",delay:.1}),s.to(m.value,{duration:3,text:p.value,ease:"none",delay:1})});const y=()=>{const a=i.diff(n,"years"),_=n.clone().add(a,"years"),x=i.diff(_,"months");r.value=x,l.value=a};return(a,_)=>(I(),S("div",E,[W,e("div",B,[e("div",F,[e("div",{class:"base-card mr-md-4 d-flex align-center flex-column",ref_key:"image",ref:u,style:{"min-height":"360px"}},[L,e("p",P,w(`${l.value-1}.${r.value}`)+"+ Years ",1)],512)]),e("div",Y,[e("p",{class:"base-title",ref_key:"title1",ref:c},null,512),e("p",{class:"mt-4 base-title unique-title mt-2",ref_key:"title2",ref:d},null,512)])]),e("p",{ref_key:"description",ref:m,class:"base-body-text mt-2 home-description text-center text-text"},null,512)]))}});const G=j(q,[["__scopeId","data-v-9f6abcad"]]);export{G as default};
