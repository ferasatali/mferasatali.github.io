import{g as T,c as J,a as Q,m as W,h as Z,b as c,d as V,T as F,p as U,o as ee,u as te,e as ae,f as B,r as q,i as ne,s as se,j as oe,w as ie,k as re,n as le,l as M,q as ce,t as L,v as $,x as z,y as k,z as I,A as g,B as u,C as w,F as ue,D as de,E as fe,G as me,H as N,I as G,_ as X,J as Y,V as pe,K as ge,L as ve,M as _e}from"./index-60fb3884.js";import{a as C,d as he,s as K,b as ye,g as we,n as xe,m as be,u as ke,V as j,c as H,e as Ve,f as Ee,h as P,i as S}from"./forwardRefs-3488277f.js";import{V as Ce}from"./VTooltip-5f81ad79.js";function Se(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",a=arguments.length>2?arguments[2]:void 0;return T()({name:a??J(Q(e.replace(/__/g,"-"))),props:{tag:{type:String,default:r},...W()},setup(t,n){let{slots:s}=n;return()=>{var d;return Z(t.tag,{class:[e,t.class],style:t.style},(d=s.default)==null?void 0:d.call(s))}}})}const Pe="/assets/menu-7a60e700.svg",Ae="/assets/mfa-logo-6aecc9b1.png",De=[{name:"GitHub",link:"https://github.com/ferasatali",icon:"/github.png"},{name:"LinkedIn",link:"https://www.linkedin.com/in/mferasatali",icon:"/linkedin-02.png"},{name:"GitHub Aslase",link:"https://github.com/fali-aslase",icon:"/github.png"},{name:"Twitter",link:"https://twitter.com/AliFerasat",icon:"/twitter.png"},{name:"Instagram",link:"https://www.instagram.com/mferasatali/",icon:"/instagram.png"},{name:"Facebook",link:"https://www.facebook.com/mferasatali",icon:"/facebook-01.png"}],Ie=Se("v-spacer","div","VSpacer");const Te=U({target:[Object,Array]},"v-dialog-transition"),$e=T()({name:"VDialogTransition",props:Te(),setup(e,r){let{slots:a}=r;const t={onBeforeEnter(n){n.style.pointerEvents="none",n.style.visibility="hidden"},async onEnter(n,s){var h;await new Promise(m=>requestAnimationFrame(m)),await new Promise(m=>requestAnimationFrame(m)),n.style.visibility="";const{x:d,y:l,sx:o,sy:v,speed:_}=R(e.target,n),x=C(n,[{transform:`translate(${d}px, ${l}px) scale(${o}, ${v})`,opacity:0},{}],{duration:225*_,easing:he});(h=O(n))==null||h.forEach(m=>{C(m,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*_,easing:K})}),x.finished.then(()=>s())},onAfterEnter(n){n.style.removeProperty("pointer-events")},onBeforeLeave(n){n.style.pointerEvents="none"},async onLeave(n,s){var h;await new Promise(m=>requestAnimationFrame(m));const{x:d,y:l,sx:o,sy:v,speed:_}=R(e.target,n);C(n,[{},{transform:`translate(${d}px, ${l}px) scale(${o}, ${v})`,opacity:0}],{duration:125*_,easing:ye}).finished.then(()=>s()),(h=O(n))==null||h.forEach(m=>{C(m,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*_,easing:K})})},onAfterLeave(n){n.style.removeProperty("pointer-events")}};return()=>e.target?c(F,V({name:"dialog-transition"},t,{css:!1}),a):c(F,{name:"dialog-transition"},a)}});function O(e){var a;const r=(a=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:a.children;return r&&[...r]}function R(e,r){const a=we(e),t=xe(r),[n,s]=getComputedStyle(r).transformOrigin.split(" ").map(p=>parseFloat(p)),[d,l]=getComputedStyle(r).getPropertyValue("--v-overlay-anchor-origin").split(" ");let o=a.left+a.width/2;d==="left"||l==="left"?o-=a.width/2:(d==="right"||l==="right")&&(o+=a.width/2);let v=a.top+a.height/2;d==="top"||l==="top"?v-=a.height/2:(d==="bottom"||l==="bottom")&&(v+=a.height/2);const _=a.width/t.width,x=a.height/t.height,h=Math.max(1,_,x),m=_/h||0,D=x/h||0,i=t.width*t.height/(window.innerWidth*window.innerHeight),f=i>.12?Math.min(1.5,(i-.12)*10+1):1;return{x:o-(n+t.left),y:v-(s+t.top),sx:m,sy:D,speed:f}}const Fe=U({id:String,...ee(be({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:$e}}),["absolute"])},"VMenu"),Be=T()({name:"VMenu",props:Fe(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:a}=r;const t=te(e,"modelValue"),{scopeId:n}=ke(),s=ae(),d=B(()=>e.id||`v-menu-${s}`),l=q(),o=ne(j,null),v=se(0);oe(j,{register(){++v.value},unregister(){--v.value},closeParents(){setTimeout(()=>{v.value||(t.value=!1,o==null||o.closeParents())},40)}});async function _(i){var y,b,E;const f=i.relatedTarget,p=i.target;await le(),t.value&&f!==p&&((y=l.value)!=null&&y.contentEl)&&((b=l.value)!=null&&b.globalTop)&&![document,l.value.contentEl].includes(p)&&!l.value.contentEl.contains(p)&&((E=M(l.value.contentEl)[0])==null||E.focus())}ie(t,i=>{i?(o==null||o.register(),document.addEventListener("focusin",_,{once:!0})):(o==null||o.unregister(),document.removeEventListener("focusin",_))});function x(){o==null||o.closeParents()}function h(i){var f,p,y;e.disabled||i.key==="Tab"&&(ce(M((f=l.value)==null?void 0:f.contentEl,!1),i.shiftKey?"prev":"next",E=>E.tabIndex>=0)||(t.value=!1,(y=(p=l.value)==null?void 0:p.activatorEl)==null||y.focus()))}function m(i){var p;if(e.disabled)return;const f=(p=l.value)==null?void 0:p.contentEl;f&&t.value?i.key==="ArrowDown"?(i.preventDefault(),L(f,"next")):i.key==="ArrowUp"&&(i.preventDefault(),L(f,"prev")):["ArrowDown","ArrowUp"].includes(i.key)&&(t.value=!0,i.preventDefault(),setTimeout(()=>setTimeout(()=>m(i))))}const D=B(()=>V({"aria-haspopup":"menu","aria-expanded":String(t.value),"aria-owns":d.value,onKeydown:m},e.activatorProps));return re(()=>{const i=H.filterProps(e);return c(H,V({ref:l,class:["v-menu",e.class],style:e.style},i,{modelValue:t.value,"onUpdate:modelValue":f=>t.value=f,absolute:!0,activatorProps:D.value,"onClick:outside":x,onKeydown:h},n),{activator:a.activator,default:function(){for(var f=arguments.length,p=new Array(f),y=0;y<f;y++)p[y]=arguments[y];return c(Ve,{root:"VMenu"},{default:()=>{var b;return[(b=a.default)==null?void 0:b.call(a,...p)]}})}})}),Ee({id:d,ΨopenChildren:v},l)}}),A=e=>(N("data-v-42c6d600"),e=e(),G(),e),Me={class:"d-flex align-center justify-space-between flex-wrap pa-4"},Le=A(()=>u("img",{width:"100px",src:Ae,class:"mr-4"},null,-1)),Ke={class:"d-flex flex-column base-card base-card-card ml-4"},je=A(()=>u("div",{class:"d-flex align-center justify-center"},[u("p",{class:"header"},"Contact & Social Links")],-1)),He={class:"d-flex flex-column mt-2 base-card base-card-menu",style:{gap:"0.6rem"}},Oe={class:"d-flex align-center",style:{gap:"0.6rem"}},Re=A(()=>u("p",null,"ferasatali14@gmail.com",-1)),Ue={class:"d-flex align-center",style:{gap:"0.6rem"}},qe=A(()=>u("p",null,"03424658936",-1)),ze=["src"],Ne=["href"],Ge={class:"d-flex flex-column mt-2 base-card base-card-menu"},Xe=$({__name:"HeaderComponent",setup(e){const r=q(!1);return(a,t)=>{const n=z("RouterLink");return k(),I("div",Me,[c(n,{to:"/"},{default:g(()=>[Le]),_:1}),c(Ie),u("div",null,[c(Be,{location:"left","close-on-content-click":!1,"model-value":r.value,"onUpdate:modelValue":t[0]||(t[0]=s=>r.value=s)},{activator:g(({props:s})=>[c(P,V({class:"text-capitalize free-trail-btn",height:"45px"},s),{default:g(()=>[w(" Connect With Ferasat ")]),_:2},1040)]),default:g(()=>[u("div",Ke,[je,u("div",He,[u("div",Oe,[c(S,null,{default:g(()=>[w(" mdi-email ")]),_:1}),Re]),u("div",Ue,[c(S,null,{default:g(()=>[w(" mdi-phone ")]),_:1}),qe])]),(k(!0),I(ue,null,de(fe(De),(s,d)=>(k(),I("div",{class:"d-flex align-center flex-row mt-3 base-card base-card-menu",style:{gap:"0.6rem"},key:d},[u("img",{width:"25px",class:"social-icons",src:s.icon},null,8,ze),u("p",null,[w(me(s.name)+" : ",1),u("a",{href:s.link,target:"_blank"}," MFerasatAli",8,Ne)])]))),128)),u("div",Ge,[c(P,{variant:"text",href:"https://drive.google.com/file/d/1NKosJ2dj94GCBNEzmjgpjcA82yuKfUsp/view?usp=sharing",target:"_blank"},{default:g(()=>[c(S,{class:"mr-2"},{default:g(()=>[w(" mdi-download ")]),_:1}),w(" Resume ")]),_:1}),c(P,{variant:"text",href:"https://drive.google.com/file/d/18a37mXxFUQZzhxqfwQeBEKYo-eIKSacu/view?usp=sharing",target:"_blank"},{default:g(()=>[c(S,{class:"mr-2"},{default:g(()=>[w(" mdi-download ")]),_:1}),w(" Cover Letter ")]),_:1})])])]),_:1},8,["model-value"])])])}}});const Ye=X(Xe,[["__scopeId","data-v-42c6d600"]]),Je=$({__name:"View",setup(e){return(r,a)=>{const t=z("router-view");return k(),Y(pe,null,{default:g(()=>[c(t)]),_:1})}}}),Qe=e=>(N("data-v-9b2f209f"),e=e(),G(),e),We={class:"app-container"},Ze={class:"mt-auto d-flex align-center justify-center pt-7"},et=Qe(()=>u("img",{src:Pe,class:"ml-2"},null,-1)),tt=$({__name:"Default",setup(e){const r=ge();ve(()=>{sessionStorage.getItem("page")=="discover"&&r.push("/discover")});const a=()=>{sessionStorage.setItem("page","discover"),r.push("/discover")};return(t,n)=>(k(),Y(_e,null,{default:g(()=>[u("div",We,[c(Ye),c(Je)]),u("div",Ze,[c(Ce,{text:"Profile",location:"start",theme:"red",activator:"parent"},{activator:g(({props:s})=>[c(P,V({variant:"text",class:"btn-explore",onClick:a},s),{prepend:g(()=>[et]),_:2},1040)]),_:1})])]),_:1}))}});const it=X(tt,[["__scopeId","data-v-9b2f209f"]]);export{it as default};
