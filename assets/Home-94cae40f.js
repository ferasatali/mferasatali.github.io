import{g as s,T as b}from"./TextPlugin-190e56bf.js";import{v,N as f,r as t,O as k,z as S,B as e,G as w,y as I,H,I as M,_ as j}from"./index-71f914f6.js";import{g as D}from"./googleSpreadSheetAPI-1c4cac29.js";const h="/assets/stars-2c33d046.svg",E="/assets/mferasatali-b71bdda2.png",g=o=>(H("data-v-9f6abcad"),o=o(),M(),o),W={class:"d-flex align-center justify-center flex-column home"},B=g(()=>e("div",{class:"home-tagline d-flex align-center justify-start py-1 px-4"},[e("img",{width:"30",src:h,alt:"HCMS"}),e("p",{class:""},"profileIntroduction('MFA');"),e("img",{width:"30",src:h,alt:"HCMS"})],-1)),C={class:"d-flex align-center flex-row flex-wrap"},F={class:"image"},P=g(()=>e("img",{src:E,alt:"ferasat"},null,-1)),Y={class:"header-simple mt-4 text-grey"},q={class:"mt-5 mt-md-12 text-center home-title"},z=v({__name:"Home",setup(o){s.registerPlugin(b);const n=f("2021-02-01"),i=f(),l=t(0),r=t(0),c=t(null),d=t(null),u=t(null),m=t(null),p=t("Welcome();! <br> I'm a passionate Software Engineer and Web Developer based in Lahore, Pakistan. <br> With expertise in building scalable web applications and a commitment to innovation, <br> I bring a unique blend of technical skills and creativity to drive success in every project. <br> Explore my journey through code and creativity below. <br> Let's build something amazing together! <br> Unlock more about my journey by clicking the button on right side.");k(async()=>{const a=await D();a&&(p.value=a),y(),s.to(m.value,{duration:1,display:"block",opacity:1,x:1,y:1,delay:3}),s.to(c.value,{duration:2,text:"Muhammad Ferasat Ali",ease:"none",delay:.5}),s.to(d.value,{duration:1,text:"Full Stack Software Engineer",ease:"none",delay:.1}),s.to(u.value,{duration:3,text:p.value,ease:"none",delay:1})});const y=()=>{const a=i.diff(n,"years"),_=n.clone().add(a,"years"),x=i.diff(_,"months");r.value=x,l.value=a};return(a,_)=>(I(),S("div",W,[B,e("div",C,[e("div",F,[e("div",{class:"base-card mr-md-4 d-flex align-center flex-column",ref_key:"image",ref:m,style:{"min-height":"360px"}},[P,e("p",Y,w(`${l.value-1}.${r.value}`)+"+ Years ",1)],512)]),e("div",q,[e("p",{class:"base-title",ref_key:"title1",ref:c},null,512),e("p",{class:"mt-4 base-title unique-title mt-2",ref_key:"title2",ref:d},null,512)])]),e("p",{ref_key:"description",ref:u,class:"base-body-text mt-2 home-description text-center text-text"},null,512)]))}});const T=j(z,[["__scopeId","data-v-9f6abcad"]]);export{T as default};
