import{p as q,M as me,m as Q,N as fe,O as W,e as X,P as Y,g as Z,f as ee,Q as pe,R as he,S as I,i as ke,a as t,T as B,U as K,W as ye,X as ge,Y as _e,Z as Ce,$ as be,a0 as Se,a1 as Pe,a2 as xe,a3 as Ie,a4 as Ve,a5 as Ae,a6 as Be,a7 as we,a8 as Ee,a9 as Ge,l as Le,aa as Ne,ab as Me,s as w,ac as T,ad as Te,ae as De,af as je,ag as V,ah as A,ai as ae,aj as x,ak as H,v as Fe,d as Re,t as b,J as $e,K as S,w as _,o as f,C as s,al as E,am as G,D as L,an as N,L as p,c as O,G as ze,H as Ke,_ as He}from"./index-a99e1a27.js";import{g as P}from"./index-0fa819ad.js";import{T as Oe}from"./TextPlugin-7f8d2251.js";import{a as Je}from"./googleSpreadSheetAPI-1c4cac29.js";import{V as Ue,a as M}from"./VRow-4c08fcb2.js";const J=[{degree:"Matric",studyIn:"Science",duration:"01/2010 - 03/2018",institutionName:"Laural Bank Public School (LPS)",marks:"",animation:"animation-1"},{degree:"Intermediate",studyIn:"Science",duration:"01/2018 - 03/2019",institutionName:"Punjab Group of Colleges (PGC)",marks:"",animation:"animation-2"},{degree:"Bachelors",studyIn:"Computer Science",duration:"08/2019 - 08/2023",institutionName:"Univeristy of Central Punjab (UCP)",marks:"CGPA: 3.4",animation:"animation-3"}],qe=["JavaScript","Node.js","Vue.js","C++","Vuex","TypeScript","Laravel","Python","Pinia","Express.js","MongoDB","MySQL","HTML","Sequelize","CSS","Sass","TailwindCSS","Bootstrap","Vuetify","Git","GitHub","NPM","Composer","VS Code","PyCharm","Postman","Svelte","PHP","C"],Qe=["Cricket","Reading","Coding","Netflix"];const te=Symbol.for("vuetify:v-chip-group"),We=q({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:me},...Q(),...fe({selectedClass:"v-chip--selected"}),...W(),...X(),...Y({variant:"tonal"})},"VChipGroup");Z()({name:"VChipGroup",props:We(),emits:{"update:modelValue":e=>!0},setup(e,h){let{slots:c}=h;const{themeClasses:u}=ee(e),{isSelected:l,select:v,next:k,prev:y,selected:o}=pe(e,te);return he({VChip:{color:I(e,"color"),disabled:I(e,"disabled"),filter:I(e,"filter"),variant:I(e,"variant")}}),ke(()=>t(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},u.value,e.class],style:e.style},{default:()=>{var d;return[(d=c.default)==null?void 0:d.call(c,{isSelected:l,select:v,next:k,prev:y,selected:o.value})]}})),{}}});const Xe=q({activeClass:String,appendAvatar:String,appendIcon:B,closable:Boolean,closeIcon:{type:B,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:B,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:K(),onClickOnce:K(),...ye(),...Q(),...ge(),..._e(),...Ce(),...be(),...Se(),...Pe(),...W({tag:"span"}),...X(),...Y({variant:"tonal"})},"VChip"),U=Z()({name:"VChip",directives:{Ripple:xe},props:Xe(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,h){let{attrs:c,emit:u,slots:l}=h;const{t:v}=Ie(),{borderClasses:k}=Ve(e),{colorClasses:y,colorStyles:o,variantClasses:d}=Ae(e),{densityClasses:n}=Be(e),{elevationClasses:r}=we(e),{roundedClasses:se}=Ee(e),{sizeClasses:ne}=Ge(e),{themeClasses:ie}=ee(e),D=Le(e,"modelValue"),a=Ne(e,te,!1),m=Me(e,c),oe=w(()=>e.link!==!1&&m.isLink.value),g=w(()=>!e.disabled&&e.link!==!1&&(!!a||e.link||m.isClickable.value)),ce=w(()=>({"aria-label":v(e.closeLabel),onClick(i){i.stopPropagation(),D.value=!1,u("click:close",i)}}));function j(i){var C;u("click",i),g.value&&((C=m.navigate)==null||C.call(m,i),a==null||a.toggle())}function de(i){(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),j(i))}return()=>{const i=m.isLink.value?"a":e.tag,C=!!(e.appendIcon||e.appendAvatar),re=!!(C||l.append),ue=!!(l.close||e.closable),F=!!(l.filter||e.filter)&&a,R=!!(e.prependIcon||e.prependAvatar),ve=!!(R||l.prepend),$=!a||a.isSelected.value;return D.value&&T(t(i,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":g.value,"v-chip--filter":F,"v-chip--pill":e.pill},ie.value,k.value,$?y.value:void 0,n.value,r.value,se.value,ne.value,d.value,a==null?void 0:a.selectedClass.value,e.class],style:[$?o.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:m.href.value,tabindex:g.value?0:void 0,onClick:j,onKeydown:g.value&&!oe.value&&de},{default:()=>{var z;return[De(g.value,"v-chip"),F&&t(je,{key:"filter"},{default:()=>[T(t("div",{class:"v-chip__filter"},[l.filter?t(A,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},l.filter):t(V,{key:"filter-icon",icon:e.filterIcon},null)]),[[ae,a.isSelected.value]])]}),ve&&t("div",{key:"prepend",class:"v-chip__prepend"},[l.prepend?t(A,{key:"prepend-defaults",disabled:!R,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},l.prepend):t(x,null,[e.prependIcon&&t(V,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&t(H,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),t("div",{class:"v-chip__content"},[((z=l.default)==null?void 0:z.call(l,{isSelected:a==null?void 0:a.isSelected.value,selectedClass:a==null?void 0:a.selectedClass.value,select:a==null?void 0:a.select,toggle:a==null?void 0:a.toggle,value:a==null?void 0:a.value.value,disabled:e.disabled}))??e.text]),re&&t("div",{key:"append",class:"v-chip__append"},[l.append?t(A,{key:"append-defaults",disabled:!C,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},l.append):t(x,null,[e.appendIcon&&t(V,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&t(H,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),ue&&t("button",Fe({key:"close",class:"v-chip__close"},ce.value),[l.close?t(A,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},l.close):t(V,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Te("ripple"),g.value&&e.ripple,null]])}}}),le=e=>(ze("data-v-d5c6fa6a"),e=e(),Ke(),e),Ye={id:"serving-best"},Ze={class:"d-flex flex-column",style:{gap:"0.6rem"}},ea={class:"header-simple"},aa={class:"main-sub-heading text"},ta={class:"main-sub-heading"},la={class:"d-flex justify-end"},sa={class:"sub-heading text-whitew"},na=le(()=>s("div",{class:"d-flex flex-column",style:{gap:"0.6rem"}},[s("p",{class:"header-simple"}," Skills ")],-1)),ia=le(()=>s("div",{class:"d-flex flex-column",style:{gap:"0.6rem"}},[s("p",{class:"header-simple"}," Interests ")],-1)),oa=Re({__name:"Education",setup(e){P.registerPlugin(Oe);const h=b(null),c=b(null),u=b(null),l=Array.from({length:J.length},(o,d)=>b(null)),v=b([]),k=["active-green","leadership-management","soft-skill","it-and-software","hard-skills","green-skills","link"],y=()=>k[Math.floor(Math.random()*k.length)];return $e(async()=>{P.to(h.value,{duration:.6,text:"Academic Journey",ease:"slow(0.7,0.7,false)",y:3}),P.to(c.value,{duration:1,text:"Nurturing Knowledge, Empowering Futures",ease:"none",delay:.2}),P.to(u.value,{duration:1,opacity:1,display:"block",x:1,y:1,delay:.7});const o=await Je();o&&o.length>0?v.value=o:v.value=qe,l.forEach((d,n)=>{P.to(d.value,{duration:1,opacity:1,display:"block",x:1,y:1,delay:.3+n*.1})})}),(o,d)=>(f(),S("section",Ye,[t(Ue,{align:"center"},{default:_(()=>[t(M,{cols:"12",class:"d-flex align-center justify-center flex-column mt-9"},{default:_(()=>[s("p",{class:"main-heading",ref_key:"title1",ref:h},null,512),s("p",{class:"sub-heading",ref_key:"title2",ref:c},null,512)]),_:1}),t(M,{cols:"12",sm:"6",class:"d-flex align-center justify-center mt-7 flex-wrap",style:{gap:"1rem"}},{default:_(()=>[(f(!0),S(x,null,E(G(J),(n,r)=>(f(),S("div",{key:r,class:L(["base-card",`${n.animation}`]),ref_for:!0,ref:G(l)[r]},[s("div",Ze,[s("p",ea,[N(p(n.degree)+" ",1),s("span",aa," - "+p(n.studyIn),1)]),s("p",ta,p(n.institutionName),1),s("div",la,[s("p",sa,p(n.duration),1)]),T(s("p",{class:"main-sub-heading"},p(n.marks),513),[[ae,n.marks]])])],2))),128))]),_:1}),t(M,{cols:"12",sm:"6"},{default:_(()=>[s("div",{class:"base-card d-flex align-center flex-column animation animation-skills-interest",ref_key:"skillsAndInterestAnimation",ref:u},[na,s("div",null,[(f(!0),S(x,null,E(v.value,(n,r)=>(f(),O(U,{key:r,class:L(`ma-2 text-${y()}`)},{default:_(()=>[N(p(n),1)]),_:2},1032,["class"]))),128))]),ia,s("div",null,[(f(!0),S(x,null,E(G(Qe),(n,r)=>(f(),O(U,{key:r,class:L(`ma-2 text-${y()}`)},{default:_(()=>[N(p(n),1)]),_:2},1032,["class"]))),128))])],512)]),_:1})]),_:1})]))}});const ma=He(oa,[["__scopeId","data-v-d5c6fa6a"]]);export{ma as default};
