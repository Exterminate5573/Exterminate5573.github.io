import{B as m,C as o,D as v,T as p,F as T,k as c,l as f,G as E,H as w}from"./BCLKaNN-.js";function h(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function i(e,r){var t=v;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=r)}function y(e,r){var t=(r&p)!==0,u=(r&T)!==0,a,s=!e.startsWith("<!>");return()=>{if(c)return i(f,null),f;a===void 0&&(a=h(s?e:"<!>"+e),t||(a=o(a)));var n=u?document.importNode(a,!0):a.cloneNode(!0);if(t){var _=o(n),l=n.lastChild;i(_,l)}else i(n,n);return n}}function M(e,r){var t=y(e,r);return()=>N(t())}function P(e,r,t="svg"){var u=!e.startsWith("<!>"),a=(r&p)!==0,s=`<${t}>${u?e:"<!>"+e}</${t}>`,n;return()=>{if(c)return i(f,null),f;if(!n){var _=h(s),l=o(_);if(a)for(n=document.createDocumentFragment();o(l);)n.appendChild(o(l));else n=o(l)}var d=n.cloneNode(!0);if(a){var g=o(d),C=d.lastChild;i(g,C)}else i(d,d);return d}}function N(e){if(c)return e;const r=e.nodeType===11,t=e.tagName==="SCRIPT"?[e]:e.querySelectorAll("script"),u=v;for(const s of t){const n=document.createElement("script");for(var a of s.attributes)n.setAttribute(a.name,a.value);n.textContent=s.textContent,(r?e.firstChild===s:e===s)&&(u.nodes_start=n),(r?e.lastChild===s:e===s)&&(u.nodes_end=n),s.replaceWith(n)}return e}function S(e=""){if(!c){var r=m(e+"");return i(r,r),r}var t=f;return t.nodeType!==3&&(t.before(t=m()),w(t)),i(t,t),t}function b(){if(c)return i(f,null),f;var e=document.createDocumentFragment(),r=document.createComment(""),t=m();return e.append(r,t),i(r,t),e}function D(e,r){if(c){v.nodes_end=f,E();return}e!==null&&e.before(r)}const x="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(x);export{D as a,i as b,b as c,S as d,h as e,M as f,P as n,y as t};
