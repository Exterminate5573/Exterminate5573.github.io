import{N as a,F as _,P as d,Q as p,D as m,A as l,R as g,S as h}from"./CIxDC5vv.js";function v(e,n,t){if(e==null)return n(void 0),a;const s=_(()=>e.subscribe(n,t));return s.unsubscribe?()=>s.unsubscribe():s}const r=[];function w(e,n=a){let t=null;const s=new Set;function o(u){if(d(e,u)&&(e=u,t)){const f=!r.length;for(const c of s)c[1](),r.push(c,e);if(f){for(let c=0;c<r.length;c+=2)r[c][0](r[c+1]);r.length=0}}}function i(u){o(u(e))}function b(u,f=a){const c=[u,f];return s.add(c),s.size===1&&(t=n(o,i)||a),u(e),()=>{s.delete(c),s.size===0&&t&&(t(),t=null)}}return{set:o,update:i,subscribe:b}}function y(e){let n;return v(e,t=>n=t)(),n}function z(e){l===null&&p(),h&&l.l!==null?k(l).m.push(e):m(()=>{const n=_(e);if(typeof n=="function")return n})}function x(e,n,{bubbles:t=!1,cancelable:s=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:s})}function D(){const e=l;return e===null&&p(),(n,t,s)=>{var i;const o=(i=e.s.$$events)==null?void 0:i[n];if(o){const b=g(o)?o.slice():[o],u=x(n,t,s);for(const f of b)f.call(e.x,u);return!u.defaultPrevented}return!0}}function k(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}export{D as c,y as g,z as o,v as s,w};
