import{a5 as S,a6 as X,a7 as J,a8 as w,a9 as Q,S as p,U as o,X as h,aa as x,M as q,ab as W,ac as k,q as ee,ad as re,ae as ne,w as U,a2 as ie,a3 as se,a1 as te,N as C,af as Z,ag as ae,ah as fe,ai as z,aj as ue,ak as K,al as le,am as H,v as ce,an as de,ao as ve,ap as oe,$ as F,aq as _e,V as Y,ar as A,as as be,at as pe}from"./MyN0rd6F.js";import{s as he,g as we}from"./BdqS88uB.js";function R(e,r=null,i){if(typeof e!="object"||e===null||S in e)return e;const s=k(e);if(s!==X&&s!==J)return e;var t=new Map,l=ee(e),P=w(0);l&&t.set("length",w(e.length));var g;return new Proxy(e,{defineProperty(c,n,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&W();var u=t.get(n);return u===void 0?(u=w(a.value),t.set(n,u)):h(u,R(a.value,g)),!0},deleteProperty(c,n){var a=t.get(n);if(a===void 0)n in c&&t.set(n,w(o));else{if(l&&typeof n=="string"){var u=t.get("length"),f=Number(n);Number.isInteger(f)&&f<u.v&&h(u,f)}h(a,o),$(P)}return!0},get(c,n,a){var _;if(n===S)return e;var u=t.get(n),f=n in c;if(u===void 0&&(!f||(_=x(c,n))!=null&&_.writable)&&(u=w(R(f?c[n]:o,g)),t.set(n,u)),u!==void 0){var d=p(u);return d===o?void 0:d}return Reflect.get(c,n,a)},getOwnPropertyDescriptor(c,n){var a=Reflect.getOwnPropertyDescriptor(c,n);if(a&&"value"in a){var u=t.get(n);u&&(a.value=p(u))}else if(a===void 0){var f=t.get(n),d=f==null?void 0:f.v;if(f!==void 0&&d!==o)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return a},has(c,n){var d;if(n===S)return!0;var a=t.get(n),u=a!==void 0&&a.v!==o||Reflect.has(c,n);if(a!==void 0||q!==null&&(!u||(d=x(c,n))!=null&&d.writable)){a===void 0&&(a=w(u?R(c[n],g):o),t.set(n,a));var f=p(a);if(f===o)return!1}return u},set(c,n,a,u){var I;var f=t.get(n),d=n in c;if(l&&n==="length")for(var _=a;_<f.v;_+=1){var y=t.get(_+"");y!==void 0?h(y,o):_ in c&&(y=w(o),t.set(_+"",y))}f===void 0?(!d||(I=x(c,n))!=null&&I.writable)&&(f=w(void 0),h(f,R(a,g)),t.set(n,f)):(d=f.v!==o,h(f,R(a,g)));var b=Reflect.getOwnPropertyDescriptor(c,n);if(b!=null&&b.set&&b.set.call(u,a),!d){if(l&&typeof n=="string"){var E=t.get("length"),N=Number(n);Number.isInteger(N)&&N>=E.v&&h(E,N+1)}$(P)}return!0},ownKeys(c){p(P);var n=Reflect.ownKeys(c).filter(f=>{var d=t.get(f);return d===void 0||d.v!==o});for(var[a,u]of t)u.v!==o&&!(a in c)&&n.push(a);return n},setPrototypeOf(){Q()}})}function $(e,r=1){h(e,e.v+r)}function G(e,r){return e===r||(e==null?void 0:e[S])===r}function Se(e={},r,i,s){return re(()=>{var t,l;return ne(()=>{t=l,l=[],U(()=>{e!==i(...l)&&(r(e,...l),t&&G(i(...t),e)&&r(null,...t))})}),()=>{ie(()=>{l&&G(i(...l),e)&&r(null,...l)})}}),e}let T=!1,M=Symbol();function xe(e,r,i){const s=i[r]??(i[r]={store:null,source:Z(void 0),unsubscribe:C});if(s.store!==e&&!(M in i))if(s.unsubscribe(),s.store=e??null,e==null)s.source.v=void 0,s.unsubscribe=C;else{var t=!0;s.unsubscribe=he(e,l=>{t?s.source.v=l:h(s.source,l)}),t=!1}return e&&M in i?we(e):p(s.source)}function Ee(){const e={};function r(){se(()=>{for(var i in e)e[i].unsubscribe();te(e,M,{enumerable:!1,value:!0})})}return[e,r]}function Pe(e){var r=T;try{return T=!1,[e(),T]}finally{T=r}}const ge={get(e,r){if(!e.exclude.includes(r))return p(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,i){return r in e.special||(e.special[r]=Ie({get[r](){return e.props[r]}},r,z)),e.special[r](i),K(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),K(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Ne(e,r){return new Proxy({props:e,exclude:r,special:{},version:w(0)},ge)}const ye={get(e,r){let i=e.props.length;for(;i--;){let s=e.props[i];if(A(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s)return s[r]}},set(e,r,i){let s=e.props.length;for(;s--;){let t=e.props[s];A(t)&&(t=t());const l=x(t,r);if(l&&l.set)return l.set(i),!0}return!1},getOwnPropertyDescriptor(e,r){let i=e.props.length;for(;i--;){let s=e.props[i];if(A(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s){const t=x(s,r);return t&&!t.configurable&&(t.configurable=!0),t}}},has(e,r){if(r===S||r===H)return!1;for(let i of e.props)if(A(i)&&(i=i()),i!=null&&r in i)return!0;return!1},ownKeys(e){const r=[];for(let i of e.props){A(i)&&(i=i());for(const s in i)r.includes(s)||r.push(s)}return r}};function De(...e){return new Proxy({props:e},ye)}function V(e){for(var r=q,i=q;r!==null&&!(r.f&(ve|oe));)r=r.parent;try{return F(r),e()}finally{F(i)}}function Ie(e,r,i,s){var B;var t=(i&_e)!==0,l=!ce||(i&de)!==0,P=(i&le)!==0,g=(i&be)!==0,c=!1,n;P?[n,c]=Pe(()=>e[r]):n=e[r];var a=S in e||H in e,u=P&&(((B=x(e,r))==null?void 0:B.set)??(a&&r in e&&(v=>e[r]=v)))||void 0,f=s,d=!0,_=!1,y=()=>(_=!0,d&&(d=!1,g?f=U(s):f=s),f);n===void 0&&s!==void 0&&(u&&l&&ae(),n=y(),u&&u(n));var b;if(l)b=()=>{var v=e[r];return v===void 0?y():(d=!0,_=!1,v)};else{var E=V(()=>(t?Y:pe)(()=>e[r]));E.f|=fe,b=()=>{var v=p(E);return v!==void 0&&(f=void 0),v===void 0?f:v}}if(!(i&z))return b;if(u){var N=e.$$legacy;return function(v,O){return arguments.length>0?((!l||!O||N||c)&&u(O?b():v),v):b()}}var I=!1,j=!1,m=Z(n),D=V(()=>Y(()=>{var v=b(),O=p(m);return I?(I=!1,j=!0,O):(j=!1,m.v=v)}));return t||(D.equals=ue),function(v,O){if(arguments.length>0){const L=O?p(D):l&&P?R(v):v;return D.equals(L)||(I=!0,h(m,L),_&&f!==void 0&&(f=L),U(()=>p(D))),v}return p(D)}}export{R as a,Se as b,Ee as c,xe as d,Ne as l,Ie as p,De as s};
