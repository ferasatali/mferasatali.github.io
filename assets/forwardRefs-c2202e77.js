import{p as m,z as R,j as g,w as b,h as w,d as P,T as W}from"./index-414b66e0.js";const j=m({eager:Boolean},"lazy");function _(a,f){const e=R(!1),s=g(()=>e.value||a.eager||f.value);b(f,()=>e.value=!0);function o(){a.eager||(e.value=!1)}return{isBooted:e,hasContent:s,onAfterLeave:o}}const z=m({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:a=>a!==!0}},"transition"),D=(a,f)=>{let{slots:e}=f;const{transition:s,disabled:o,...t}=a,{component:r=W,...n}=typeof s=="object"?s:{};return w(r,P(typeof s=="string"?{name:o?"":s}:n,t,{disabled:o}),e)},p=Symbol("Forwarded refs");function h(a,f){let e=a;for(;e;){const s=Reflect.getOwnPropertyDescriptor(e,f);if(s)return s;e=Object.getPrototypeOf(e)}}function T(a){for(var f=arguments.length,e=new Array(f>1?f-1:0),s=1;s<f;s++)e[s-1]=arguments[s];return a[p]=e,new Proxy(a,{get(o,t){if(Reflect.has(o,t))return Reflect.get(o,t);if(!(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))){for(const r of e)if(r.value&&Reflect.has(r.value,t)){const n=Reflect.get(r.value,t);return typeof n=="function"?n.bind(r.value):n}}},has(o,t){if(Reflect.has(o,t))return!0;if(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))return!1;for(const r of e)if(r.value&&Reflect.has(r.value,t))return!0;return!1},set(o,t,r){if(Reflect.has(o,t))return Reflect.set(o,t,r);if(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))return!1;for(const n of e)if(n.value&&Reflect.has(n.value,t))return Reflect.set(n.value,t,r);return!1},getOwnPropertyDescriptor(o,t){var n;const r=Reflect.getOwnPropertyDescriptor(o,t);if(r)return r;if(!(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))){for(const i of e){if(!i.value)continue;const u=h(i.value,t)??("_"in i.value?h((n=i.value._)==null?void 0:n.setupState,t):void 0);if(u)return u}for(const i of e){const u=i.value&&i.value[p];if(!u)continue;const l=u.slice();for(;l.length;){const c=l.shift(),d=h(c.value,t);if(d)return d;const v=c.value&&c.value[p];v&&l.push(...v)}}}}})}export{D as M,z as a,T as f,j as m,_ as u};
