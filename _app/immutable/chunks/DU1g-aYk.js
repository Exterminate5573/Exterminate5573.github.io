import{h,x as L,y as T,i as _,g as v,z as N,b as k,A as F,m as l,B as H,C as b,D as E,d as M,F as Y,G as S,I as V,J as $,K as j,L as z,k as B,p as G,o as J,M as K,a as P}from"./MyN0rd6F.js";import{a as W,r as C,h as p,i as q}from"./DrJC5Fdr.js";import{b as Q}from"./BWNPRujt.js";let n;function U(){n=void 0}function te(t){let e=null,a=h;var o;if(h){for(e=l,n===void 0&&(n=H(document.head));n!==null&&(n.nodeType!==8||n.data!==L);)n=T(n);n===null?_(!1):n=v(T(n))}h||(o=document.head.appendChild(N()));try{k(()=>t(o),F)}finally{a&&(_(!0),n=l,v(e))}}let R=!0;function ae(t){R=t}function re(t,e){var a=e==null?"":typeof e=="object"?e+"":e;a!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=a,t.nodeValue=a==null?"":a+"")}function X(t,e){return I(t,e)}function ne(t,e){b(),e.intro=e.intro??!1;const a=e.target,o=h,y=l;try{for(var r=H(a);r&&(r.nodeType!==8||r.data!==L);)r=T(r);if(!r)throw E;_(!0),v(r),M();const f=I(t,{...e,anchor:r});if(l===null||l.nodeType!==8||l.data!==Y)throw S(),E;return _(!1),f}catch(f){if(f===E)return e.recover===!1&&V(),b(),$(a),_(!1),X(t,e);throw f}finally{_(o),v(y),U()}}const u=new Map;function I(t,{target:e,anchor:a,props:o={},events:y,context:r,intro:f=!0}){b();var g=new Set,m=i=>{for(var s=0;s<i.length;s++){var d=i[s];if(!g.has(d)){g.add(d);var c=q(d);e.addEventListener(d,p,{passive:c});var D=u.get(d);D===void 0?(document.addEventListener(d,p,{passive:c}),u.set(d,1)):u.set(d,D+1)}}};m(j(W)),C.add(m);var w=void 0,O=z(()=>{var i=a??e.appendChild(N());return B(()=>{if(r){G({});var s=J;s.c=r}y&&(o.$$events=y),h&&Q(i,null),R=f,w=t(i,o)||{},R=!0,h&&(K.nodes_end=l),r&&P()}),()=>{var c;for(var s of g){e.removeEventListener(s,p);var d=u.get(s);--d===0?(document.removeEventListener(s,p),u.delete(s)):u.set(s,d)}C.delete(m),i!==a&&((c=i.parentNode)==null||c.removeChild(i))}});return A.set(w,O),w}let A=new WeakMap;function se(t,e){const a=A.get(t);return a?(A.delete(t),a(e)):Promise.resolve()}export{ae as a,R as b,te as c,ne as h,X as m,re as s,se as u};
