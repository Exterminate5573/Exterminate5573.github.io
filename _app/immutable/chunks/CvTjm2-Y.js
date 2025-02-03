var Je=e=>{throw TypeError(e)};var $t=(e,t,n)=>t.has(e)||Je("Cannot "+n);var A=(e,t,n)=>($t(e,t,"read from private field"),n?n.call(e):t.get(e)),P=(e,t,n)=>t.has(e)?Je("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n);import{f as Ie,as as Dt,aq as C,N,a1 as O,ar as Ft}from"./BB74VhBf.js";import{o as Xe}from"./CqXvHc_A.js";const V=[];function Oe(e,t=Ie){let n=null;const r=new Set;function a(o){if(Dt(e,o)&&(e=o,n)){const c=!V.length;for(const l of r)l[1](),V.push(l,e);if(c){for(let l=0;l<V.length;l+=2)V[l][0](V[l+1]);V.length=0}}}function s(o){a(o(e))}function i(o,c=Ie){const l=[o,c];return r.add(l),r.size===1&&(n=t(a,s)||Ie),o(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:s,subscribe:i}}new URL("sveltekit-internal://");function Vt(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function Bt(e){return e.split("%25").map(decodeURI).join("%25")}function qt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function Ue({href:e}){return e.split("#")[0]}function Gt(e,t,n,r=!1){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));t();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return a}const Mt="/__data.json",Ht=".html__data.json";function Kt(e){return e.endsWith(".html")?e.replace(/\.html$/,Ht):e.replace(/\/$/,"")+Mt}function Wt(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function Yt(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}const zt=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:(t==null?void 0:t.method)||"GET")!=="GET"&&W.delete(je(e)),zt(e,t));const W=new Map;function Jt(e,t){const n=je(e,t),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&W.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Yt(a)),Promise.resolve(new Response(a,s))}return window.fetch(e,t)}function Xt(e,t,n){if(W.size>0){const r=je(e,n),a=W.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);W.delete(r)}}return window.fetch(t,n)}function je(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t!=null&&t.headers||t!=null&&t.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${Wt(...a)}"]`}return r}const Zt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Qt(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${tn(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Le(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Le(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const d=Zt.exec(c),[,u,y,h,m]=d;return t.push({name:h,matcher:m,optional:!!u,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"(.*?)":u?"([^/]*)?":"([^/]+?)"}return Le(c)}).join("")}).join("")}/?$`),params:t}}function en(e){return!/^\([^)]+\)$/.test(e)}function tn(e){return e.slice(1).split("/").filter(en)}function nn(e,t,n){const r={},a=e.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<t.length;o+=1){const c=t[o];let l=a[o-i];if(c.chained&&c.rest&&i&&(l=a.slice(o-i,o+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const d=t[o+1],u=a[o+1];d&&!d.rest&&d.optional&&u&&c.chained&&(i=0),!d&&!u&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function Le(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function rn({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([o,[c,l,d]])=>{const{pattern:u,params:y}=Qt(o),h={id:o,exec:m=>{const f=u.exec(m);if(f)return nn(f,y,r)},errors:[1,...d||[]].map(m=>e[m]),layouts:[0,...l||[]].map(i),leaf:s(c)};return h.errors.length=h.layouts.length=Math.max(h.errors.length,h.layouts.length),h});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[a.has(o),e[o]]}}function ht(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function Ze(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}var it;const x=((it=globalThis.__sveltekit_1bfyer)==null?void 0:it.base)??"";var ct;const an=((ct=globalThis.__sveltekit_1bfyer)==null?void 0:ct.assets)??x,on="1738551338046",dt="sveltekit:snapshot",pt="sveltekit:scroll",gt="sveltekit:states",sn="sveltekit:pageurl",q="sveltekit:history",J="sveltekit:navigation",ue={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},fe=location.origin;function mt(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function $e(){return{x:pageXOffset,y:pageYOffset}}function B(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const Qe={...ue,"":ue.hover};function yt(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function _t(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=yt(e)}}function Pe(e,t,n){let r;try{if(r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,s=!r||!!a||ve(r,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===fe&&e.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function he(e){let t=null,n=null,r=null,a=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)r===null&&(r=B(o,"preload-code")),a===null&&(a=B(o,"preload-data")),t===null&&(t=B(o,"keepfocus")),n===null&&(n=B(o,"noscroll")),s===null&&(s=B(o,"reload")),i===null&&(i=B(o,"replacestate")),o=yt(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Qe[r??"off"],preload_data:Qe[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function et(e){const t=Oe(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const wt={v:()=>{}};function cn(){const{set:e,subscribe:t}=Oe(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${an}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==on;return i&&(e(!0),wt.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:r}}function ve(e,t,n){return e.origin!==fe||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.pathname===t+"/index.html"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function tt(e){const t=fn(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,t.charCodeAt(a));return n}const ln="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function fn(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let a=0;a<e.length;a++)n<<=6,n|=ln.indexOf(e[a]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const un=-1,hn=-2,dn=-3,pn=-4,gn=-5,mn=-6;function yn(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(s,i=!1){if(s===un)return;if(s===dn)return NaN;if(s===pn)return 1/0;if(s===gn)return-1/0;if(s===mn)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=t==null?void 0:t[c];if(l)return r[s]=l(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const d=new Set;r[s]=d;for(let h=1;h<o.length;h+=1)d.add(a(o[h]));break;case"Map":const u=new Map;r[s]=u;for(let h=1;h<o.length;h+=2)u.set(a(o[h]),a(o[h+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const y=Object.create(null);r[s]=y;for(let h=1;h<o.length;h+=2)y[o[h]]=a(o[h+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const h=globalThis[c],m=o[1],f=tt(m),g=new h(f);r[s]=g;break}case"ArrayBuffer":{const h=o[1],m=tt(h);r[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let l=0;l<o.length;l+=1){const d=o[l];d!==hn&&(c[l]=a(d))}}else{const c={};r[s]=c;for(const l in o){const d=o[l];c[l]=a(d)}}return r[s]}return a(0)}const bt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...bt];const _n=new Set([...bt]);[..._n];function wn(e){return e.filter(t=>t!=null)}class Ae{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class De{constructor(t,n){this.status=t,this.location=n}}class Fe extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}const bn="x-sveltekit-invalidated",vn="x-sveltekit-trailing-slash";function de(e){return e instanceof Ae||e instanceof Fe?e.status:500}function An(e){return e instanceof Fe?e.text:"Internal Error"}let U,X,Te;const Sn=Xe.toString().includes("$$")||/function \w+\(\) \{\}/.test(Xe.toString());var ee,te,ne,re,ae,oe,se,ie,lt,ce,ft,le,ut;Sn?(U={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},X={current:null},Te={current:!1}):(U=new(lt=class{constructor(){P(this,ee,C({}));P(this,te,C(null));P(this,ne,C(null));P(this,re,C({}));P(this,ae,C({id:null}));P(this,oe,C({}));P(this,se,C(-1));P(this,ie,C(new URL("https://example.com")))}get data(){return N(A(this,ee))}set data(t){O(A(this,ee),t)}get form(){return N(A(this,te))}set form(t){O(A(this,te),t)}get error(){return N(A(this,ne))}set error(t){O(A(this,ne),t)}get params(){return N(A(this,re))}set params(t){O(A(this,re),t)}get route(){return N(A(this,ae))}set route(t){O(A(this,ae),t)}get state(){return N(A(this,oe))}set state(t){O(A(this,oe),t)}get status(){return N(A(this,se))}set status(t){O(A(this,se),t)}get url(){return N(A(this,ie))}set url(t){O(A(this,ie),t)}},ee=new WeakMap,te=new WeakMap,ne=new WeakMap,re=new WeakMap,ae=new WeakMap,oe=new WeakMap,se=new WeakMap,ie=new WeakMap,lt),X=new(ft=class{constructor(){P(this,ce,C(null))}get current(){return N(A(this,ce))}set current(t){O(A(this,ce),t)}},ce=new WeakMap,ft),Te=new(ut=class{constructor(){P(this,le,C(!1))}get current(){return N(A(this,le))}set current(t){O(A(this,le),t)}},le=new WeakMap,ut),wt.v=()=>Te.current=!0);function kn(e){Object.assign(U,e)}const En=new Set(["icon","shortcut icon","apple-touch-icon"]),F=ht(pt)??{},Z=ht(dt)??{},$={url:et({}),page:et({}),navigating:Oe(null),updated:cn()};function Ve(e){F[e]=$e()}function Rn(e,t){let n=e+1;for(;F[n];)delete F[n],n+=1;for(n=t+1;Z[n];)delete Z[n],n+=1}function M(e){return location.href=e.href,new Promise(()=>{})}async function vt(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(x||"/");e&&await e.update()}}function nt(){}let Se,Ce,pe,j,Ne,S;const ge=[],me=[];let L=null;const At=new Set,In=new Set,Y=new Set;let w={branch:[],error:null,url:null},Be=!1,ye=!1,rt=!0,Q=!1,H=!1,St=!1,qe=!1,kt,I,T,_e;const z=new Set;async function Mn(e,t,n){var a,s,i,o;document.URL!==location.href&&(location.href=location.href),S=e,await((s=(a=e.hooks).init)==null?void 0:s.call(a)),Se=rn(e),j=document.documentElement,Ne=t,Ce=e.nodes[0],pe=e.nodes[1],Ce(),pe(),I=(i=history.state)==null?void 0:i[q],T=(o=history.state)==null?void 0:o[J],I||(I=T=Date.now(),history.replaceState({...history.state,[q]:I,[J]:T},""));const r=F[I];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await jn(Ne,n):Cn(S.hash?jt(new URL(location.href)):location.href,{replaceState:!0}),On()}function Un(){ge.length=0,qe=!1}function Et(e){me.some(t=>t==null?void 0:t.snapshot)&&(Z[e]=me.map(t=>{var n;return(n=t==null?void 0:t.snapshot)==null?void 0:n.capture()}))}function Rt(e){var t;(t=Z[e])==null||t.forEach((n,r)=>{var a,s;(s=(a=me[r])==null?void 0:a.snapshot)==null||s.restore(n)})}function at(){Ve(I),Ze(pt,F),Et(T),Ze(dt,Z)}async function Ge(e,t,n,r){return K({type:"goto",url:mt(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(qe=!0),t.invalidate&&t.invalidate.forEach(Nn)}})}async function Ln(e){if(e.id!==(L==null?void 0:L.id)){const t={};z.add(t),L={id:e.id,token:t,promise:Ut({...e,preload:t}).then(n=>(z.delete(t),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function xe(e){const t=Lt(e);if(!t)return;const n=Se.find(r=>r.exec(Tt(t)));n&&await Promise.all([...n.layouts,n.leaf].map(r=>r==null?void 0:r[1]()))}function It(e,t,n){var s;w=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(U,e.props.page),kt=new S.root({target:t,props:{...e.props,stores:$,components:me},hydrate:n,sync:!1}),Rt(T);const a={from:null,to:{params:w.params,route:{id:((s=w.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};Y.forEach(i=>i(a)),ye=!0}function we({url:e,params:t,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(x&&(e.pathname===x||e.pathname===x+"/"))o="always";else for(const h of n)(h==null?void 0:h.slash)!==void 0&&(o=h.slash);e.pathname=Vt(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:s},props:{constructors:wn(n).map(h=>h.node.component),page:We(U)}};i!==void 0&&(c.props.form=i);let l={},d=!U,u=0;for(let h=0;h<Math.max(n.length,w.branch.length);h+=1){const m=n[h],f=w.branch[h];(m==null?void 0:m.data)!==(f==null?void 0:f.data)&&(d=!0),m&&(l={...l,...m.data},d&&(c.props[`data_${u}`]=l),u+=1)}return(!w.url||e.href!==w.url.href||w.error!==a||i!==void 0&&i!==U.form||d)&&(c.props.page={error:a,params:t,route:{id:(s==null?void 0:s.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:d?l:U.data}),c}async function Me({loader:e,parent:t,url:n,params:r,route:a,server_data_node:s}){var d,u,y;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((d=l.universal)!=null&&d.load){let h=function(...f){for(const g of f){const{href:_}=new URL(g,n);c.dependencies.add(_)}};const m={route:new Proxy(a,{get:(f,g)=>(o&&(c.route=!0),f[g])}),params:new Proxy(r,{get:(f,g)=>(o&&c.params.add(g),f[g])}),data:(s==null?void 0:s.data)??null,url:Gt(n,()=>{o&&(c.url=!0)},f=>{o&&c.search_params.add(f)},S.hash),async fetch(f,g){let _;f instanceof Request?(_=f.url,g={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:[...f.headers].length?f.headers:void 0,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...g}):_=f;const R=new URL(_,n);return o&&h(R.href),R.origin===n.origin&&(_=R.href.slice(n.origin.length)),ye?Xt(_,R.href,g):Jt(_,g)},setHeaders:()=>{},depends:h,parent(){return o&&(c.parent=!0),t()},untrack(f){o=!1;try{return f()}finally{o=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:e,server:s,universal:(u=l.universal)!=null&&u.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((y=l.universal)==null?void 0:y.trailingSlash)??(s==null?void 0:s.slash)}}function ot(e,t,n,r,a,s){if(qe)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==w.params[i])return!0;for(const i of a.dependencies)if(ge.some(o=>o(new URL(i))))return!0;return!1}function He(e,t){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?t??null:null}function Tn(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),s=t.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function st({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:We(U),constructors:[]}}}async function Ut({id:e,invalidating:t,url:n,params:r,route:a,preload:s}){if((L==null?void 0:L.id)===e)return z.delete(L.token),L.promise;const{errors:i,layouts:o,leaf:c}=a,l=[...o,c];i.forEach(p=>p==null?void 0:p().catch(()=>{})),l.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let d=null;const u=w.url?e!==be(w.url):!1,y=w.route?a.id!==w.route.id:!1,h=Tn(w.url,n);let m=!1;const f=l.map((p,b)=>{var D;const k=w.branch[b],E=!!(p!=null&&p[0])&&((k==null?void 0:k.loader)!==p[1]||ot(m,y,u,h,(D=k.server)==null?void 0:D.uses,r));return E&&(m=!0),E});if(f.some(Boolean)){try{d=await Ct(n,f)}catch(p){const b=await G(p,{url:n,params:r,route:{id:e}});return z.has(s)?st({error:b,url:n,params:r,route:a}):ke({status:de(p),error:b,url:n,route:a})}if(d.type==="redirect")return d}const g=d==null?void 0:d.nodes;let _=!1;const R=l.map(async(p,b)=>{var Ee;if(!p)return;const k=w.branch[b],E=g==null?void 0:g[b];if((!E||E.type==="skip")&&p[1]===(k==null?void 0:k.loader)&&!ot(_,y,u,h,(Ee=k.universal)==null?void 0:Ee.uses,r))return k;if(_=!0,(E==null?void 0:E.type)==="error")throw E;return Me({loader:p[1],url:n,params:r,route:a,parent:async()=>{var ze;const Ye={};for(let Re=0;Re<b;Re+=1)Object.assign(Ye,(ze=await R[Re])==null?void 0:ze.data);return Ye},server_data_node:He(E===void 0&&p[0]?{type:"skip"}:E??null,p[0]?k==null?void 0:k.server:void 0)})});for(const p of R)p.catch(()=>{});const v=[];for(let p=0;p<l.length;p+=1)if(l[p])try{v.push(await R[p])}catch(b){if(b instanceof De)return{type:"redirect",location:b.location};if(z.has(s))return st({error:await G(b,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let k=de(b),E;if(g!=null&&g.includes(b))k=b.status??k,E=b.error;else if(b instanceof Ae)E=b.body;else{if(await $.updated.check())return await vt(),await M(n);E=await G(b,{params:r,url:n,route:{id:a.id}})}const D=await xn(p,v,i);return D?we({url:n,params:r,branch:v.slice(0,D.idx).concat(D.node),status:k,error:E,route:a}):await Pt(n,{id:a.id},E,k)}else v.push(void 0);return we({url:n,params:r,branch:v,status:200,error:null,route:a,form:t?void 0:null})}async function xn(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function ke({status:e,error:t,url:n,route:r}){const a={};let s=null;if(S.server_loads[0]===0)try{const o=await Ct(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==fe||n.pathname!==location.pathname||Be)&&await M(n)}try{const o=await Me({loader:Ce,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:He(s)}),c={node:await pe(),loader:pe,universal:null,server:null,data:null};return we({url:n,params:a,branch:[o,c],status:e,error:t,route:null})}catch(o){if(o instanceof De)return Ge(new URL(o.location,location.href),{},0);throw o}}function Lt(e){let t;try{if(t=S.hooks.reroute({url:new URL(e)})??e,typeof t=="string"){const n=new URL(e);S.hash?n.hash=t:n.pathname=t,t=n}}catch{return}return t}function Ke(e,t){if(!e||ve(e,x,S.hash))return;const n=Lt(e);if(!n)return;const r=Tt(n);for(const a of Se){const s=a.exec(r);if(s)return{id:be(e),invalidating:t,route:a,params:qt(s),url:e}}}function Tt(e){return Bt(S.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(x.length))||"/"}function be(e){return(S.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function xt({url:e,type:t,intent:n,delta:r}){let a=!1;const s=Ot(w,n,e,t);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return Q||At.forEach(o=>o(i)),a?null:s}async function K({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=nt,block:d=nt}){const u=Ke(t,!1),y=xt({url:t,type:e,delta:n==null?void 0:n.delta,intent:u});if(!y){d();return}const h=I,m=T;l(),Q=!0,ye&&$.navigating.set(X.current=y.navigation),_e=c;let f=u&&await Ut(u);if(!f){if(ve(t,x,S.hash))return await M(t);f=await Pt(t,{id:null},await G(new Fe(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(u==null?void 0:u.url)||t,_e!==c)return y.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(o>=20)f=await ke({status:500,error:await G(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return Ge(new URL(f.location,t).href,{},o+1,c),!1;else f.props.page.status>=400&&await $.updated.check()&&(await vt(),await M(t));if(Un(),Ve(h),Et(m),f.props.page.url.pathname!==t.pathname&&(t.pathname=f.props.page.url.pathname),i=n?n.state:i,!n){const v=s?0:1,p={[q]:I+=v,[J]:T+=v,[gt]:i};(s?history.replaceState:history.pushState).call(history,p,"",t),s||Rn(I,T)}if(L=null,f.props.page.state=i,ye){w=f.state,f.props.page&&(f.props.page.url=t);const v=(await Promise.all(Array.from(In,p=>p(y.navigation)))).filter(p=>typeof p=="function");if(v.length>0){let p=function(){v.forEach(b=>{Y.delete(b)})};v.push(p),v.forEach(b=>{Y.add(b)})}kt.$set(f.props),kn(f.props.page),St=!0}else It(f,Ne,!1);const{activeElement:g}=document;await Ft();const _=n?n.scroll:a?$e():null;if(rt){const v=t.hash&&document.getElementById(decodeURIComponent(S.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));_?scrollTo(_.x,_.y):v?v.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==g&&document.activeElement!==document.body;!r&&!R&&$n(),rt=!0,f.props.page&&Object.assign(U,f.props.page),Q=!1,e==="popstate"&&Rt(T),y.fulfil(void 0),Y.forEach(v=>v(y.navigation)),$.navigating.set(X.current=null)}async function Pt(e,t,n,r){return e.origin===fe&&e.pathname===location.pathname&&!Be?await ke({status:r,error:n,url:e,route:t}):await M(e)}function Pn(){let e;j.addEventListener("mousemove",s=>{const i=s.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function t(s){s.defaultPrevented||r(s.composedPath()[0],1)}j.addEventListener("mousedown",t),j.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver(s=>{for(const i of s)i.isIntersecting&&(xe(new URL(i.target.href)),n.unobserve(i.target))},{threshold:0});function r(s,i){const o=_t(s,j);if(!o)return;const{url:c,external:l,download:d}=Pe(o,x,S.hash);if(l||d)return;const u=he(o),y=c&&be(w.url)===be(c);if(!u.reload&&!y)if(i<=u.preload_data){const h=Ke(c,!1);h&&Ln(h)}else i<=u.preload_code&&xe(c)}function a(){n.disconnect();for(const s of j.querySelectorAll("a")){const{url:i,external:o,download:c}=Pe(s,x,S.hash);if(o||c)continue;const l=he(s);l.reload||(l.preload_code===ue.viewport&&n.observe(s),l.preload_code===ue.eager&&xe(i))}}Y.add(a),a()}function G(e,t){if(e instanceof Ae)return e.body;const n=de(e),r=An(e);return S.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function Cn(e,t={}){return e=new URL(mt(e)),e.origin!==fe?Promise.reject(new Error("goto: invalid URL")):Ge(e,t,0)}function Nn(e){if(typeof e=="function")ge.push(e);else{const{href:t}=new URL(e,location.href);ge.push(n=>n.href===t)}}function On(){var t;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(at(),!Q){const a=Ot(w,void 0,null,"leave"),s={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};At.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&at()}),(t=navigator.connection)!=null&&t.saveData||Pn(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=_t(n.composedPath()[0],j);if(!r)return;const{url:a,external:s,target:i,download:o}=Pe(r,x,S.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=he(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||o)return;const[d,u]=(S.hash?a.hash.replace(/^#/,""):a.href).split("#"),y=d===Ue(location);if(s||c.reload&&(!y||!u)){xt({url:a,type:"link"})?Q=!0:n.preventDefault();return}if(u!==void 0&&y){const[,h]=w.url.href.split("#");if(h===u){if(n.preventDefault(),u===""||u==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=r.ownerDocument.getElementById(decodeURIComponent(u));m&&(m.scrollIntoView(),m.focus())}return}if(H=!0,Ve(I),e(a),!c.replace_state)return;H=!1}n.preventDefault(),await new Promise(h=>{requestAnimationFrame(()=>{setTimeout(h,0)}),setTimeout(h,100)}),K({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ve(o,x,!1))return;const c=n.target,l=he(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const d=new FormData(c),u=a==null?void 0:a.getAttribute("name");u&&d.append(u,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(d).toString(),K({type:"form",url:o,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[q]){const a=n.state[q];if(_e={},a===I)return;const s=F[a],i=n.state[gt]??{},o=new URL(n.state[sn]??location.href),c=n.state[J],l=w.url?Ue(location)===Ue(w.url):!1;if(c===T&&(St||l)){i!==U.state&&(U.state=i),e(o),F[I]=$e(),s&&scrollTo(s.x,s.y),I=a;return}const u=a-I;await K({type:"popstate",url:o,popped:{state:i,scroll:s,delta:u},accept:()=>{I=a,T=c},block:()=>{history.go(-u)},nav_token:_e})}else if(!H){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{H?(H=!1,history.replaceState({...history.state,[q]:++I,[J]:T},"",location.href)):S.hash&&w.url.hash===location.hash&&K({type:"goto",url:jt(w.url)})});for(const n of document.querySelectorAll("link"))En.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(X.current=null)});function e(n){w.url=U.url=n,$.page.set(We(U)),$.page.notify()}}async function jn(e,{status:t=200,error:n,node_ids:r,params:a,route:s,data:i,form:o}){Be=!0;const c=new URL(location.href);({params:a={},route:s={id:null}}=Ke(c,!1)||{});let l,d=!0;try{const u=r.map(async(m,f)=>{const g=i[f];return g!=null&&g.uses&&(g.uses=Nt(g.uses)),Me({loader:S.nodes[m],url:c,params:a,route:s,parent:async()=>{const _={};for(let R=0;R<f;R+=1)Object.assign(_,(await u[R]).data);return _},server_data_node:He(g)})}),y=await Promise.all(u),h=Se.find(({id:m})=>m===s.id);if(h){const m=h.layouts;for(let f=0;f<m.length;f++)m[f]||y.splice(f,0,void 0)}l=we({url:c,params:a,branch:y,status:t,error:n,form:o,route:h??null})}catch(u){if(u instanceof De){await M(new URL(u.location,location.href));return}l=await ke({status:de(u),error:await G(u,{url:c,params:a,route:s}),url:c,route:s}),e.textContent="",d=!1}l.props.page&&(l.props.page.state={}),It(l,e,d)}async function Ct(e,t){var s;const n=new URL(e);n.pathname=Kt(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(vn,"1"),n.searchParams.append(bn,t.map(i=>i?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let i;throw(s=a.headers.get("content-type"))!=null&&s.includes("application/json")?i=await a.json():a.status===404?i="Not Found":a.status===500&&(i="Internal Error"),new Ae(a.status,i)}return new Promise(async i=>{var y;const o=new Map,c=a.body.getReader(),l=new TextDecoder;function d(h){return yn(h,{...S.decoders,Promise:m=>new Promise((f,g)=>{o.set(m,{fulfil:f,reject:g})})})}let u="";for(;;){const{done:h,value:m}=await c.read();if(h&&!u)break;for(u+=!m&&u?`
`:l.decode(m,{stream:!0});;){const f=u.indexOf(`
`);if(f===-1)break;const g=JSON.parse(u.slice(0,f));if(u=u.slice(f+1),g.type==="redirect")return i(g);if(g.type==="data")(y=g.nodes)==null||y.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=Nt(_.uses),_.data=d(_.data))}),i(g);else if(g.type==="chunk"){const{id:_,data:R,error:v}=g,p=o.get(_);o.delete(_),v?p.reject(d(v)):p.fulfil(d(R))}}}})}function Nt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function $n(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function Ot(e,t,n,r){var c,l;let a,s;const i=new Promise((d,u)=>{a=d,s=u});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:n&&{params:(t==null?void 0:t.params)??null,route:{id:((l=t==null?void 0:t.route)==null?void 0:l.id)??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:s}}function We(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}function jt(e){const t=new URL(e);return t.hash=decodeURIComponent(e.hash),t}export{Mn as a,U as p,$ as s};
