import{V as oe,A as he,a as pe,b as be}from"./app-3bade85b.js";import{g as q,T as ye}from"./TextPlugin-190e56bf.js";import{p as K,U as xe,g as J,j as x,z as P,r as H,N as Z,b as c,S as Se,d as X,ac as ne,m as _e,ad as Ce,ae as de,K as we,A as ke,af as ie,I as Te,w as Ve,W as ze,l as Pe,H as Re,L as z,ag as Be,k as Ie,ah as Ae,Z as Me,ai as $e,B as Ee,_ as Oe,$ as Fe,a9 as He,a1 as _,ab as Ge,a2 as k,a3 as E,a6 as Ue,a7 as Le,a8 as Ne}from"./index-93882233.js";import{r as je,t as De,o as Y,a as We,s as qe,v as Xe,w as Ye,q as ue,x as Ke,y as Je,u as Ze}from"./VGrid-ea2378d6.js";const Qe=""+new URL("augur-(rep)-0d2a4e2c.svg",import.meta.url).href,et=""+new URL("dent-(dent)-e38d562a.svg",import.meta.url).href,tt=""+new URL("civic-(cvc)-1be24508.svg",import.meta.url).href,at=""+new URL("wanchain-(wan)-aa053263.svg",import.meta.url).href;const fe=Symbol.for("vuetify:v-tabs"),lt=K({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...xe(je({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),O=J()({name:"VTab",props:lt(),setup(e,u){let{slots:s,attrs:r}=u;const{textColorClasses:g,textColorStyles:d}=De(e,"sliderColor"),l=x(()=>e.direction==="horizontal"),n=P(!1),t=H(),i=H();function f(v){var R,m;let{value:h}=v;if(n.value=h,h){const T=(m=(R=t.value)==null?void 0:R.$el.parentElement)==null?void 0:m.querySelector(".v-tab--selected .v-tab__slider"),B=i.value;if(!T||!B)return;const U=getComputedStyle(T).color,b=T.getBoundingClientRect(),S=B.getBoundingClientRect(),V=l.value?"x":"y",I=l.value?"X":"Y",F=l.value?"right":"bottom",C=l.value?"width":"height",L=b[V],A=S[V],w=L>A?b[F]-S[F]:b[V]-S[V],N=Math.sign(w)>0?l.value?"right":"bottom":Math.sign(w)<0?l.value?"left":"top":"center",j=(Math.abs(w)+(Math.sign(w)<0?b[C]:S[C]))/Math.max(b[C],S[C])||0,p=b[C]/S[C]||0,M=1.5;We(B,{backgroundColor:[U,"currentcolor"],transform:[`translate${I}(${w}px) scale${I}(${p})`,`translate${I}(${w/M}px) scale${I}(${(j-1)/M+1})`,"none"],transformOrigin:Array(3).fill(N)},{duration:225,easing:qe})}}return Z(()=>{const v=Y.filterProps(e);return c(Y,X({symbol:fe,ref:t,class:["v-tab",e.class],style:e.style,tabindex:n.value?0:-1,role:"tab","aria-selected":String(n.value),active:!1},v,r,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":f}),{...s,default:()=>{var h;return c(Se,null,[((h=s.default)==null?void 0:h.call(s))??e.text,!e.hideSlider&&c("div",{ref:i,class:["v-tab__slider",g.value],style:d.value},null)])}})}),{}}});function re(e){const s=Math.abs(e);return Math.sign(e)*(s/((1/.501-2)*(1-s)+1))}function ce(e){let{selectedElement:u,containerSize:s,contentSize:r,isRtl:g,currentScrollOffset:d,isHorizontal:l}=e;const n=l?u.clientWidth:u.clientHeight,t=l?u.offsetLeft:u.offsetTop,i=g&&l?r-t-n:t,f=s+d,v=n+i,h=n*.4;return i<=d?d=Math.max(i-h,0):f<=v&&(d=Math.min(d-(f-v-h),r-s)),d}function st(e){let{selectedElement:u,containerSize:s,contentSize:r,isRtl:g,isHorizontal:d}=e;const l=d?u.clientWidth:u.clientHeight,n=d?u.offsetLeft:u.offsetTop,t=g&&d?r-n-l/2-s/2:n+l/2-s/2;return Math.min(r-s,Math.max(0,t))}const ot=Symbol.for("vuetify:v-slide-group"),me=K({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:ot},nextIcon:{type:ne,default:"$next"},prevIcon:{type:ne,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},..._e(),...Ce(),...de(),...Xe({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ve=J()({name:"VSlideGroup",props:me(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:s}=u;const{isRtl:r}=we(),{displayClasses:g,mobile:d}=ke(e),l=Ye(e,e.symbol),n=P(!1),t=P(0),i=P(0),f=P(0),v=x(()=>e.direction==="horizontal"),{resizeRef:h,contentRect:R}=ie(),{resizeRef:m,contentRect:T}=ie(),B=x(()=>l.selected.value.length?l.items.value.findIndex(a=>a.id===l.selected.value[0]):-1),U=x(()=>l.selected.value.length?l.items.value.findIndex(a=>a.id===l.selected.value[l.selected.value.length-1]):-1);if(Te){let a=-1;Ve(()=>[l.selected.value,R.value,T.value,v.value],()=>{cancelAnimationFrame(a),a=requestAnimationFrame(()=>{if(R.value&&T.value){const o=v.value?"width":"height";i.value=R.value[o],f.value=T.value[o],n.value=i.value+1<f.value}if(B.value>=0&&m.value){const o=m.value.children[U.value];B.value===0||!n.value?t.value=0:e.centerActive?t.value=st({selectedElement:o,containerSize:i.value,contentSize:f.value,isRtl:r.value,isHorizontal:v.value}):n.value&&(t.value=ce({selectedElement:o,containerSize:i.value,contentSize:f.value,isRtl:r.value,currentScrollOffset:t.value,isHorizontal:v.value}))}})})}const b=P(!1);let S=0,V=0;function I(a){const o=v.value?"clientX":"clientY";V=(r.value&&v.value?-1:1)*t.value,S=a.touches[0][o],b.value=!0}function F(a){if(!n.value)return;const o=v.value?"clientX":"clientY",y=r.value&&v.value?-1:1;t.value=y*(V+S-a.touches[0][o])}function C(a){const o=f.value-i.value;t.value<0||!n.value?t.value=0:t.value>=o&&(t.value=o),b.value=!1}function L(){h.value&&(h.value[v.value?"scrollLeft":"scrollTop"]=0)}const A=P(!1);function w(a){if(A.value=!0,!(!n.value||!m.value)){for(const o of a.composedPath())for(const y of m.value.children)if(y===o){t.value=ce({selectedElement:y,containerSize:i.value,contentSize:f.value,isRtl:r.value,currentScrollOffset:t.value,isHorizontal:v.value});return}}}function N(a){A.value=!1}function Q(a){var o;!A.value&&!(a.relatedTarget&&((o=m.value)!=null&&o.contains(a.relatedTarget)))&&p()}function j(a){m.value&&(v.value?a.key==="ArrowRight"?p(r.value?"prev":"next"):a.key==="ArrowLeft"&&p(r.value?"next":"prev"):a.key==="ArrowDown"?p("next"):a.key==="ArrowUp"&&p("prev"),a.key==="Home"?p("first"):a.key==="End"&&p("last"))}function p(a){var o,y,ae,le,se;if(m.value)if(!a)(o=ze(m.value)[0])==null||o.focus();else if(a==="next"){const $=(y=m.value.querySelector(":focus"))==null?void 0:y.nextElementSibling;$?$.focus():p("first")}else if(a==="prev"){const $=(ae=m.value.querySelector(":focus"))==null?void 0:ae.previousElementSibling;$?$.focus():p("last")}else a==="first"?(le=m.value.firstElementChild)==null||le.focus():a==="last"&&((se=m.value.lastElementChild)==null||se.focus())}function M(a){const o=t.value+(a==="prev"?-1:1)*i.value;t.value=Pe(o,0,f.value-i.value)}const ge=x(()=>{let a=t.value>f.value-i.value?-(f.value-i.value)+re(f.value-i.value-t.value):-t.value;t.value<=0&&(a=re(-t.value));const o=r.value&&v.value?-1:1;return{transform:`translate${v.value?"X":"Y"}(${o*a}px)`,transition:b.value?"none":"",willChange:b.value?"transform":""}}),D=x(()=>({next:l.next,prev:l.prev,select:l.select,isSelected:l.isSelected})),W=x(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!d.value;case!0:return n.value||Math.abs(t.value)>0;case"mobile":return d.value||n.value||Math.abs(t.value)>0;default:return!d.value&&(n.value||Math.abs(t.value)>0)}}),ee=x(()=>Math.abs(t.value)>0),te=x(()=>f.value>Math.abs(t.value)+i.value);return Z(()=>c(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!v.value,"v-slide-group--has-affixes":W.value,"v-slide-group--is-overflowing":n.value},g.value,e.class],style:e.style,tabindex:A.value||l.selected.value.length?-1:0,onFocus:Q},{default:()=>{var a,o,y;return[W.value&&c("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!ee.value}],onClick:()=>ee.value&&M("prev")},[((a=s.prev)==null?void 0:a.call(s,D.value))??c(oe,null,{default:()=>[c(ue,{icon:r.value?e.nextIcon:e.prevIcon},null)]})]),c("div",{key:"container",ref:h,class:"v-slide-group__container",onScroll:L},[c("div",{ref:m,class:"v-slide-group__content",style:ge.value,onTouchstartPassive:I,onTouchmovePassive:F,onTouchendPassive:C,onFocusin:w,onFocusout:N,onKeydown:j},[(o=s.default)==null?void 0:o.call(s,D.value)])]),W.value&&c("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!te.value}],onClick:()=>te.value&&M("next")},[((y=s.next)==null?void 0:y.call(s,D.value))??c(oe,null,{default:()=>[c(ue,{icon:r.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:l.selected,scrollTo:M,scrollOffset:t,focus:p}}});function nt(e){return e?e.map(u=>Ae(u)?u:{text:u,value:u}):[]}const it=K({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...me({mandatory:"force"}),...Ke(),...de()},"VTabs"),ut=J()({name:"VTabs",props:it(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:s}=u;const r=Re(e,"modelValue"),g=x(()=>nt(e.items)),{densityClasses:d}=Je(e),{backgroundColorClasses:l,backgroundColorStyles:n}=Ze(z(e,"bgColor"));return Be({VTab:{color:z(e,"color"),direction:z(e,"direction"),stacked:z(e,"stacked"),fixed:z(e,"fixedTabs"),sliderColor:z(e,"sliderColor"),hideSlider:z(e,"hideSlider")}}),Z(()=>{const t=ve.filterProps(e);return c(ve,X(t,{modelValue:r.value,"onUpdate:modelValue":i=>r.value=i,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},d.value,l.value,e.class],style:[{"--v-tabs-height":Ie(e.height)},n.value,e.style],role:"tablist",symbol:fe}),{default:()=>[s.default?s.default():g.value.map(i=>c(O,X(i,{key:i.text}),null))]})}),{}}}),G=e=>(Ue("data-v-3eaaec07"),e=e(),Le(),e),rt={class:"mt-4"},ct=G(()=>k("img",{src:Qe,class:"pl-7"},null,-1)),vt=G(()=>k("img",{src:et,class:"pl-7"},null,-1)),dt=G(()=>k("img",{src:tt,class:"pl-7"},null,-1)),ft=G(()=>k("img",{src:at,class:"pl-7"},null,-1)),mt={style:{"max-width":"1700px",margin:"0 auto"}},gt={class:"mt-auto"},ht=Me({__name:"discover",setup(e){const u=$e();q.registerPlugin(ye);const s=H(null);Ee(()=>{q.to(s.value,{duration:1,opacity:1,display:"block",x:1,y:1})});const r=he(),g=H(1),d=n=>{r.setExploreCurrentTab(n)},l=async()=>{await q.to(s.value,{opacity:1,delay:.6,x:"-50px",y:"1000"}),u.back()};return(n,t)=>{const i=Oe("router-view");return Fe(),He(Ge,null,{default:_(()=>[k("div",{ref_key:"animation",ref:s,class:"animation"},[k("div",rt,[c(ut,{modelValue:g.value,"onUpdate:modelValue":[t[0]||(t[0]=f=>g.value=f),d],color:"deep-white-accent-4","align-tabs":"center"},{default:_(()=>[c(O,{value:1},{default:_(()=>[E("Journey "),ct]),_:1}),c(O,{value:2},{default:_(()=>[E("Experience "),vt]),_:1}),c(O,{value:3},{default:_(()=>[E("Projects "),dt]),_:1}),c(O,{value:5},{default:_(()=>[E("Contact Me "),ft]),_:1})]),_:1},8,["modelValue"])]),k("div",mt,[c(i)])],512),k("div",gt,[c(be,{align:"center",class:"px-10 mb-6 align-center justify-space-between"},{default:_(()=>[c(pe,{cols:"12",class:"d-flex align-center justify-center mt-0 pt-0"},{default:_(()=>[c(Y,{variant:"text",class:"btn-explore",onClick:l,"prepend-icon":"mdi-close"},{default:_(()=>[E(" Close ")]),_:1})]),_:1})]),_:1})])]),_:1})}}});const St=Ne(ht,[["__scopeId","data-v-3eaaec07"]]);export{St as default};
