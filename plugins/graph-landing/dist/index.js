// node_modules/@quartz-community/types/dist/index.js
function joinSegments(...segments) {
  return segments.filter((segment) => segment.length > 0).join("/").replace(/\/+/g, "/");
}

// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'var mn=/^[A-Za-z0-9_-]{6,20}$/;function Lt(e){if(!e)return;let n=e.trim();return mn.test(n)?n:void 0}function P(e){return typeof e=="string"?e:e.id}function rt(e,n){return n===void 0||!Number.isFinite(n)||n<0?"full":e>=n?"dot":"full"}function He(e,n,o){let r=e.get(n);if(r)return r;let i=o();return e.set(n,i),i}function Y(e,n){let o=e?n(e):void 0;return o!==void 0&&Number.isFinite(o)&&o>=0?o:void 0}function Et(e,n){if(n===void 0||!Number.isFinite(n)||n<0||n>=e.nodes.length)return e;let r=[...e.nodes].sort((f,v)=>v.degree!==f.degree?v.degree-f.degree:f.id<v.id?-1:f.id>v.id?1:0).slice(0,Math.max(0,n)),i=new Set(r.map(f=>f.id)),c=e.links.filter(f=>{let v=P(f.source),E=P(f.target);return i.has(v)&&i.has(E)});return{nodes:r,links:c}}function xt(e,n,o,r){let i=new Set,c=Math.max(0,Math.floor(r));if(c<=0)return i;let f=new Set([o]),v=new Set([o]);for(let E=0;E<c;E+=1){let C=new Set;for(let D of v)for(let y of e.get(D)??[])f.has(y)||(f.add(y),C.add(y),n.has(y)||i.add(y));v=C}return i}var pn=2.399963229728653,nt=20;function St(e,n,o){let r=e.x??0,i=e.y??0,c=e.z??0,f=n*pn;return{x:r+nt*Math.cos(f),y:i+nt*Math.sin(f),z:o?c+nt*Math.sin(f*.5):c}}function Mt(e,n,o){let r=new Set;if(n!==null){r.add(n);for(let i of e.get(n)??[])r.add(i)}if(o!==null){r.add(o);for(let i of e.get(o)??[])r.add(i)}return r}var qe="0.179.1",hn="https://esm.sh/force-graph@1.51.4",bn=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${qe}`,yn=`https://esm.sh/three-spritetext@1.9.2?deps=three@${qe}`,wn=`https://esm.sh/three@${qe}`,kn=`https://esm.sh/three@${qe}/examples/jsm/postprocessing/UnrealBloomPass.js`,Tn=8,vn=14;var Le=1,ot=3.5,Ln=.05,En=2.6,xn=1,Ct=1,ve=.18,Yt="graph-landing:lens",Kt="graph-landing:tune",gt="graph-landing:ambient-audio",Sn="UDVtMYqUAyw",Fe=12,Mn=28e3,Cn="https://www.youtube.com/iframe_api",Nn=.18,In=1.4,Pn=1.25,An=1.15,Dn=.55,Ee={x:330,y:235,z:565},Nt={x:0,y:0,z:0},Ue=Math.hypot(Ee.x,Ee.y,Ee.z),Rn=300/Ue,_n=1600/Ue,It=1.3,Gn=3.2,Pt=1.05,At=.32,Dt=.28,Hn={wikilink:.3,tag:.22,external:.28,cooc:.16,folder:.16},Fn="#a8b0c2",On="#2a3348",Rt={min:80,max:200},_t={min:40,max:110},Gt={min:160,max:280},Ht={min:90,max:170},Ft=220,Ot=2,zn=.15,Vn=.8,Un=350,at={min:-100,max:-190},st={min:72,max:116},it={min:130,max:260};function $n(e){return Be(e-.5,0,1)}function $e(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function lt(e){return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}function Bn(e){let n=[];for(let o of Object.values(e)){let r=$e(o),i=typeof r.slug=="string"?r.slug:"";if(i.length===0)continue;let c=r.multilingual,f=c&&typeof c=="object"?c:void 0;n.push({slug:i,title:typeof r.title=="string"?r.title:i,links:lt(r.links),tags:lt(r.tags),externalLinks:lt(r.externalLinks),content:typeof r.excerpt=="string"?r.excerpt:typeof r.content=="string"?r.content:"",multilingual:f})}return n}function Wn(e){let n=e.replace(/\\s+/g," ").trim();return n.length<=Ft?n:`${n.slice(0,Ft).trimEnd()}\\u2026`}function xe(e){let n=0;for(let o of e)n=n*31+o.charCodeAt(0)>>>0;return n%628/100}function zt(e){return xe(e)/(2*Math.PI)}function Oe(e,n,o){let r=xe(e),i=Math.acos(2*zt(`${e}:phi`)-1),c=n+(o-n)*zt(`${e}:r`);return{x:c*Math.sin(i)*Math.cos(r),y:c*Math.sin(i)*Math.sin(r),z:c*Math.cos(i)}}function jt(e){return e==="index"||e.endsWith("/index")}function Xt(e){return e==="tags"||e.startsWith("tags/")}function qn(e){let n=e.multilingual?.translationKey;if(n==="home"||n==="graph"||n==="about"||n==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function Zt(e,n){for(let o of n){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function ct(e,n){return e.multilingual?.locale?e.multilingual.locale:Zt(e.slug,n).locale}function Yn(e,n){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${Zt(e.slug,n).permalink}`}function Kn(e,n){let o=e.find(r=>ct(r,n.prefixes)===n.localeId)??e.find(r=>ct(r,n.prefixes)===n.sourceLocale)??e.find(r=>ct(r,n.prefixes)===void 0);if(!o)throw new Error("graph-landing: locale group had no notes to pick");return o}function Be(e,n,o){return Math.min(o,Math.max(n,e))}function Vt(e){let n=e.split("/").filter(o=>o.length>0);return n.length<2?"root":n[0]??"root"}function jn(e){let n=e.split("/").filter(o=>o.length>0);return n[n.length-1]??""}function mt(e){return jn(e).trim().toLowerCase()}function Xn(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function Zn(e){let n=e.trim();return n.length===0||Xn(n)||Xt(n)||jt(n)?!0:mt(n).length===0}function Jn(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),n=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(n.filter(o=>o.length>0))]}function Jt(e){try{let n=new URL(e,window.location.origin);return n.protocol!=="http:"&&n.protocol!=="https:"?null:(n.hash="",n.hostname=n.hostname.toLowerCase(),n.pathname!=="/"&&n.pathname.endsWith("/")&&(n.pathname=n.pathname.replace(/\\/+$/,"")),n.toString())}catch{return null}}function Qn(e,n){let o=Jt(e);return o===null?!1:!n.includes(new URL(o).hostname)}function Ut(e){return`external:${e}`}function er(e,n){let o=new URL(e),r=o.hostname.replace(/^www\\./,""),i=o.pathname;return(n.get(r)??0)>1&&i.length>1?`${r}${i}`:r}function tr(e){let n=new Map,o=new Map;for(let r of e){let i=mt(r.slug);i.length>0&&!n.has(i)&&n.set(i,r.slug);let c=r.title.trim().toLowerCase();c.length>0&&!o.has(c)&&o.set(c,r.slug);let f=c.replace(/\\s+/g,"-");f.length>0&&!o.has(f)&&o.set(f,r.slug)}return{byBasename:n,byTitle:o}}function nr(e,n,o){if(n.has(e))return e;let r=mt(e),i=o.byBasename.get(r);if(i)return i;let c=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(r);return c||null}function rr(e,n){return e.length===0?"":[...e].sort((r,i)=>(n.get(i)??0)-(n.get(r)??0))[0]??""}function or(e,n,o=void 0){let r=e.filter(u=>!jt(u.slug)&&!Xt(u.slug)&&!qn(u)),i=new Map;for(let u of r){let b=Yn(u,n.prefixes),k=i.get(b)??[];k.push(u),i.set(b,k)}let c=[];for(let u of i.values())c.push(Kn(u,n));let f=new Set(c.map(u=>u.slug)),v=tr(c),E=new Map,C=[],D=new Set,y=new Map,z=u=>{E.set(u,(E.get(u)??0)+1)},A=(u,b,k)=>u<b?`${u}|${b}|${k}`:`${b}|${u}|${k}`,x=(u,b,k,M)=>{let N=A(u,b,k);return D.has(N)?!1:(D.add(N),C.push({source:u,target:b,kind:k}),M&&(z(u),z(b)),!0)};for(let u of c)for(let b of u.links){if(Zn(b))continue;let k=nr(b,f,v);k!==null&&k!==u.slug&&x(u.slug,k,"wikilink",!0)}let R=Jn(),V=new Set;for(let u of c)for(let b of u.externalLinks){let k=Jt(b);k===null||!Qn(k,R)||(V.add(k),x(u.slug,Ut(k),"external",!0))}let O=new Map;for(let u of V){let b=new URL(u).hostname.replace(/^www\\./,"");O.set(b,(O.get(b)??0)+1)}let U=new Set,$=new Map;for(let u of c)for(let b of u.tags){y.set(b,(y.get(b)??0)+1);let k=`tag:${b}`;U.add(k),x(u.slug,k,"tag",!0);let M=$.get(b)??[];M.push(u.slug),$.set(b,M)}if(o!==!1){let u=o?.maxTagsPerNote,b=o?.maxEdges,k=0;e:for(let M of c)if(!(M.tags.length<2)&&!(u!==void 0&&M.tags.length>u))for(let N=0;N<M.tags.length;N+=1)for(let I=N+1;I<M.tags.length;I+=1){if(b!==void 0&&k>=b)break e;x(`tag:${M.tags[N]}`,`tag:${M.tags[I]}`,"cooc",!1)&&(k+=1)}}let S=new Map;for(let u of c){let b=Vt(u.slug);if(b==="root")continue;let k=S.get(b)??[];k.push(u.slug),S.set(b,k)}for(let u of S.values()){if(u.length<2)continue;let b=[...u].sort();for(let k=0;k<b.length;k+=1){let M=b[(k+1)%b.length],N=b[(k+Ot)%b.length],I=b[k];I===void 0||M===void 0||(I!==M&&!D.has(A(I,M,"wikilink"))&&x(I,M,"folder",!1),b.length>Ot+1&&N!==void 0&&I!==N&&!D.has(A(I,N,"wikilink"))&&x(I,N,"folder",!1))}}let G=[...E.values()],Z=G.length>0?Math.min(...G):0,ne=G.length>0?Math.max(...G):0,B=u=>{let b=E.get(u)??0,k=Math.sqrt(b),M=Math.sqrt(Z),I=Math.sqrt(ne)-M;return I===0?(Le+ot)/2:Le+(k-M)/I*(ot-Le)},j=[...c].sort((u,b)=>(E.get(b.slug)??0)-(E.get(u.slug)??0)),ue=new Set(j.filter(u=>(E.get(u.slug)??0)>0).slice(0,Tn).map(u=>u.slug)),W=c.map(u=>{let b=ue.has(u.slug),k=b?Oe(u.slug,_t.min,_t.max):Oe(u.slug,Rt.min,Rt.max);return{id:u.slug,name:u.title,type:"note",val:B(u.slug),degree:E.get(u.slug)??0,isHub:b,tag:"",slug:u.slug,url:"",folder:Vt(u.slug),tags:u.tags,dominantTag:rr(u.tags,y),excerpt:Wn(u.content),phase:xe(u.slug),x:k.x,y:k.y,z:k.z}});for(let u of V){let b=Ut(u),k=Oe(b,Gt.min,Gt.max);W.push({id:b,name:er(u,O),type:"external",val:B(b)*Dn,degree:E.get(b)??0,isHub:!1,tag:"",slug:"",url:u,folder:"",tags:[],dominantTag:"",excerpt:u,phase:xe(b),x:k.x,y:k.y,z:k.z})}for(let u of U){let b=u.slice(4),k=Oe(u,Ht.min,Ht.max);W.push({id:u,name:b,type:"tag",val:Be(B(u)*.7,Le,ot),degree:E.get(u)??0,isHub:!1,tag:b,slug:`tags/${b}`,url:"",folder:"tag",tags:[b],dominantTag:b,excerpt:"",phase:xe(u),x:k.x,y:k.y,z:k.z})}return{nodes:W,links:C}}function ut(e){let n=new Map,o=(r,i)=>{let c=n.get(r)??new Set;c.add(i),n.set(r,c)};for(let r of e){if(r.kind!=="wikilink"&&r.kind!=="tag"&&r.kind!=="external")continue;let i=P(r.source),c=P(r.target);o(i,c),o(c,i)}return n}function le(e,n){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",document.body.appendChild(o);let r=getComputedStyle(o).color;return o.remove(),r||n}function Qt(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:le("--light","#ffffff"),ink:le("--darkgray","#0f0f0f"),accent:le("--secondary","#a52142"),tertiary:le("--tertiary","#c75b75"),gray:le("--gray","#737373"),external:le("--graph-external","#3f6f8c"),font:e.length>0?e:"Inter, sans-serif"}}function Ve(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ar(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function sr(){return ar()&&!Ve()}function K(){return document.documentElement.getAttribute("saved-theme")==="dark"}function We(e){let n=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(n&&n[1]&&n[2]&&n[3])return{r:Number(n[1]),g:Number(n[2]),b:Number(n[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let r=parseInt(o[1],16);return{r:r>>16&255,g:r>>8&255,b:r&255}}return null}function ce(e,n){let o=We(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${n})`:e}function X(e,n,o){let r=We(e),i=We(n);if(!r||!i)return e;let c=(f,v)=>Math.round(f+(v-f)*o);return`rgb(${c(r.r,i.r)}, ${c(r.g,i.g)}, ${c(r.b,i.b)})`}function en(e){return K()?X(e.bg,"#05070f",.88):e.bg}function ir(e){let n=We(e);if(!n)return e;let o=r=>{let i=r/255,c=i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);return Math.round(c*255)};return`rgb(${o(n.r)}, ${o(n.g)}, ${o(n.b)})`}function lr(e){return ir(en(e))}function tn(e,n){let o=0;for(let r of e)o=o*31+r.charCodeAt(0)>>>0;return n[o%n.length]??n[0]??e}function $t(e,n){return e==="articles"?n.accent:e==="inbox"?n.tertiary:e==="root"?n.ink:tn(e,[n.accent,n.tertiary,n.ink,n.gray])}function cr(e,n){return e.length===0?n.ink:tn(e,[n.accent,n.tertiary])}function nn(e){let n=e.split("/").map(c=>encodeURIComponent(c)).join("/"),o=document.querySelector("base")?.getAttribute("href"),r="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(r=o.endsWith("/")?o:`${o}/`);let i=`${r}${n}`.replace(/\\/{2,}/g,"/");return new URL(i,window.location.origin)}function ur(e){if(e.length===0)throw new Error("graph-landing: cannot navigate a node without a slug");let n=nn(e);window.location.assign(n.toString())}function dr(e){if(e.length===0)throw new Error("graph-landing: cannot open an empty external url");window.open(e,"_blank","noopener,noreferrer")}function fr(e){let n=e.default;if(typeof n!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return n()}function dt(e,n){e.textContent=n,e.classList.add("graph-landing__error")}async function gr(e){let o=await import(e?bn:hn);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):fr(o)}function mr(){try{let e=sessionStorage.getItem(Yt);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function pr(){let e={nodeScale:.7,edgeScale:1,zoom:1,spread:1};try{let n=sessionStorage.getItem(Kt);if(!n)return e;let o=$e(JSON.parse(n)),r=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,i=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,c=typeof o.zoom=="number"?o.zoom:e.zoom,f=typeof o.spread=="number"?o.spread:e.spread;return{nodeScale:r,edgeScale:i,zoom:c,spread:f}}catch(n){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",n),e}}function ze(e){try{sessionStorage.setItem(Kt,JSON.stringify(e))}catch(n){console.error("[graph-landing] could not persist tune",n)}}function ft(e){try{sessionStorage.setItem(Yt,e)}catch(n){console.error("[graph-landing] could not persist lens",n)}}function hr(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function br(e,n){return e.type==="tag"?e.tag===n:e.tags.includes(n)}function yr(e,n){return e.type==="note"&&e.folder===n}function Bt(e,n){let o=P(n),r=e.find(i=>i.id===o);return!r||r.type!=="note"?null:r.folder}function wr(e,n,o){let r=new Map;if(n==="folder"){let i=[...new Set(e.nodes.filter(c=>c.type==="note").map(c=>c.folder))];return i.forEach((c,f)=>{let v=Math.PI*2*f/Math.max(i.length,1),E={x:Math.cos(v)*o,y:Math.sin(v)*o,z:0};for(let C of e.nodes)C.type==="note"&&C.folder===c&&r.set(C.id,E)}),r}if(n==="tag"){let i=e.nodes.filter(f=>f.type==="tag"),c=new Map;i.forEach((f,v)=>{let E=Math.PI*2*v/Math.max(i.length,1);c.set(f.tag,{x:Math.cos(E)*o,y:Math.sin(E)*o,z:0})});for(let f of e.nodes)if(f.type==="tag"){let v=c.get(f.tag);v&&r.set(f.id,v)}else if(f.dominantTag.length>0){let v=c.get(f.dominantTag);v&&r.set(f.id,v)}}return r}function kr(e,n){let o=[],r=i=>{let c=n*i;for(let f of o){let v=e(f);v&&(f.vx=(f.vx??0)+(v.x-(f.x??0))*c,f.vy=(f.vy??0)+(v.y-(f.y??0))*c,f.vz=(f.vz??0)+(v.z-(f.z??0))*c)}};return r.initialize=i=>{o=i},r}function Wt(e,n,o,r){for(let i of e.querySelectorAll(n)){if(!(i instanceof HTMLElement))continue;let c=i.getAttribute(r);i.setAttribute("aria-pressed",c===o?"true":"false")}}function Tr(e,n,o,r){let i=ut(n.links),c=(t,a,s)=>t<a?`${t}|${a}|${s}`:`${a}|${t}|${s}`,f=new Map,v=new Map,E=new Set,C=new Set;r.fullData!==n&&(f=new Map(r.fullData.nodes.map(t=>[t.id,t])),v=ut(r.fullData.links),E=new Set(n.nodes.map(t=>t.id)),C=new Set(n.links.map(t=>c(P(t.source),P(t.target),t.kind))));let D=t=>{if(r.fullData===n)return!1;let a=xt(v,E,t,r.expandHops);if(a.size===0)return!1;let s=r.layout.incrementalWarmup?f.get(t):void 0,d=0;for(let g of a){let l=f.get(g);if(l){if(s&&l.x===void 0){let p=St(s,d,r.use3d);l.x=p.x,l.y=p.y,l.z=p.z,d+=1}n.nodes.push(l),E.add(g)}}for(let g of r.fullData.links){let l=P(g.source),p=P(g.target);if(!E.has(l)||!E.has(p))continue;let m=c(l,p,g.kind);C.has(m)||(C.add(m),n.links.push(g))}return i=ut(n.links),!0},y={lens:mr(),allLabels:!1,focusTag:null,focusFolder:null},z=null,A=null,x=pr(),R=()=>A??z,V=new Set(n.nodes.filter(t=>t.type==="note").sort((t,a)=>a.degree-t.degree).slice(0,vn).map(t=>t.id)),O=t=>{let a=t.val;return t.isHub&&(a*=In),y.lens==="tag"&&t.type==="tag"&&(a*=Pn),y.focusTag&&t.id===`tag:${y.focusTag}`&&(a*=An),a},U=t=>{let a=R();return y.allLabels||a===t.id||a!==null&&(i.get(a)?.has(t.id)??!1)?!0:V.has(t.id)},$=t=>{let a=Be((O(t)-Le)/5,0,1);return(It+a*(Gn-It))*x.nodeScale},S=t=>{let a=R();if(a!==null)return a===t||(i.get(a)?.has(t)??!1);if(y.focusTag===null&&y.focusFolder===null)return!0;let s=n.nodes.find(d=>d.id===t);return s?y.focusFolder!==null?yr(s,y.focusFolder):y.focusTag!==null&&br(s,y.focusTag):!1},G=t=>t.type==="external"?o.current.external:y.lens==="tag"?t.type==="tag"?o.current.tertiary:cr(t.dominantTag,o.current):y.lens==="folder"?t.type==="tag"?o.current.tertiary:$t(t.folder,o.current):y.lens==="hub"?t.type==="tag"?o.current.tertiary:t.isHub?o.current.accent:o.current.ink:t.type==="tag"?o.current.tertiary:o.current.ink,Z=t=>{let a=R();if(a!==null&&(a===t.id||(i.get(a)?.has(t.id)??!1)))return o.current.accent;let s=G(t);return S(t.id)?K()?t.type==="external"?X(o.current.external,"#ffffff",.18):t.type==="tag"?X(o.current.tertiary,"#ffffff",.22):t.isHub?X("#fff3e4",o.current.accent,.1):X("#ffffff",o.current.accent,.12):t.type==="external"?X(o.current.external,"#08343a",.12):t.type==="tag"?X(o.current.tertiary,o.current.accent,.55):t.isHub?X(o.current.ink,o.current.accent,.22):s:ce(s,ve)},ne=t=>{let a=K();return t==="wikilink"?a?.34:.52:t==="external"?a?.3:.44:t==="tag"?a?.22:.32:a?.12:.2},B=t=>{let a=P(t.source),s=P(t.target),d=R();return d!==null&&(a===d||s===d)?K()?.72:.78:(d!==null||y.focusTag!==null||y.focusFolder!==null)&&(!S(a)||!S(s))?ne(t.kind)*ve:ne(t.kind)},j=t=>{let a=P(t.source),s=P(t.target),d=R(),g=K()?Fn:On;return d!==null&&(a===d||s===d)?X(o.current.accent,g,.45):g},ue=t=>ce(j(t),B(t)),W=()=>n,u=t=>{let a=K()?"rgba(255, 255, 255, 0.85)":ce(o.current.ink,.88);return S(t.id)?a:ce(a,ve)},b=()=>{if(typeof e.cameraPosition=="function"){let t=e.cameraPosition();if(t&&typeof t.x=="number"&&typeof t.y=="number"&&typeof t.z=="number"){let a=Math.hypot(t.x,t.y,t.z);if(a>1)return{dir:{x:t.x,y:t.y,z:t.z},len:a}}}return{dir:Ee,len:Ue}},k=t=>{if(r.use3d){if(typeof e.cameraPosition!="function")return;let a=Ue/Be(x.zoom,.4,2.5),{dir:s,len:d}=b(),g=a/d;e.cameraPosition({x:s.x*g,y:s.y*g,z:s.z*g},Nt,t),Ze();return}typeof e.zoom=="function"&&e.zoom(x.zoom,t)},M=()=>{let t=$n(x.spread),a=at.min+t*(at.max-at.min),s=st.min+t*(st.max-st.min),d=e.d3Force("charge");d?.strength&&d.strength(a),d?.theta&&r.layout.chargeTheta!==void 0&&d.theta(r.layout.chargeTheta);let g=e.d3Force("link");g?.distance&&g.distance(w=>y.lens==="tag"&&w.kind==="tag"?s*.72:s),g?.strength&&g.strength(w=>{if(w.kind==="cooc"||w.kind==="folder")return .04;if(y.lens==="tag"&&w.kind==="tag")return .95;if(y.lens==="folder"){let T=Bt(n.nodes,w.source),F=Bt(n.nodes,w.target);if(T!==null&&T===F)return .72}return w.kind==="tag"?.65:.8});let l=e.d3Force("center");l?.strength&&l.strength(Ln);let p=it.min+t*(it.max-it.min),m=wr(n,y.lens,p),h=y.lens==="folder"||y.lens==="tag"?.08:0;e.d3Force("cluster",kr(w=>m.get(w.id)??null,h)),r.use3d&&e.d3Force("flattenZ",null)},N=new Map,I=new Map,ee=new Map,re=new Map,de=new Map,te=new Map,fe=new Map,oe=(t,a,s)=>{let d=`${Math.round(a*4)}|${s}`;return He(fe,d,()=>({geometry:new t.SphereGeometry(a,6,6),material:new t.MeshBasicMaterial({color:s})}))},Se=new Map,ge=new Map,Ye=(t,a,s)=>{let d=`${a}|${s}`;return He(Se,d,()=>new t.CylinderGeometry(a,a,1,s))},Me=(t,a,s)=>{let d=`${a}|${s}`;return He(ge,d,()=>new t.MeshBasicMaterial({color:a,transparent:!0,opacity:s,depthWrite:!1}))},J=()=>{if(!r.use3d||typeof e.nodeThreeObject!="function")return;let t=r.spriteText,a=r.three,s=r.lod.dotDistance,d=r.lod.nodeResolution??14,g=r.interaction.incrementalRepaint;if(N.clear(),I.clear(),fe.clear(),re.clear(),de.clear(),g)for(let l of n.nodes)de.set(l.id,l);typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(a===null),e.nodeThreeObject(l=>{let p=$(l),m=Z(l),h=!1;if(a){if(K()){let _=l.isHub?1.35:1.1,q=new a.MeshLambertMaterial({color:m,emissive:m,emissiveIntensity:_});N.set(l.id,{material:q,base:_,phase:l.phase}),g&&re.set(l.id,q),h=new a.Mesh(new a.SphereGeometry(p,d,d),q)}else{let _=new a.MeshBasicMaterial({color:m});g&&re.set(l.id,_),h=new a.Mesh(new a.SphereGeometry(p,d,d),_)}if(s!==void 0&&h!==!1){let _=oe(a,p,m),q=new a.Mesh(_.geometry,_.material),Te=new a.LOD;Te.addLevel(h,0),Te.addLevel(q,s),h=Te}}let w=U(l);if(!t||!g&&!w)return h;let T=new t(l.name);if(T.color=u(l),T.fontWeight="400",T.strokeWidth=0,T.textHeight=V.has(l.id)?6.5:5.5,T.center.set(0,.5),T.position.x=p+2,T.position.y=0,g?(T.visible=w,I.set(l.id,{sprite:T,node:l})):r.lod.labelDistance!==void 0&&I.set(l.id,{sprite:T,node:l}),!a||h===!1)return T;let F=new a.Group;return F.add(h),F.add(T),F})},L=()=>{let t=r.three;if(!r.use3d||!t||typeof e.linkThreeObject!="function")return;let a=new t.Vector3(0,1,0),s=r.lod.linkResolution??5,d=r.lod.cullDistance,g=r.interaction.incrementalRepaint,l=r.lod.shareLinkResources;if(ee.clear(),te.clear(),Se.clear(),ge.clear(),g)for(let p of n.links){let m=P(p.source),h=P(p.target);for(let w of[m,h]){let T=te.get(w);T?T.push(p):te.set(w,[p])}}e.linkThreeObject(p=>{let m=Hn[p.kind]*x.edgeScale,h=l?Me(t,j(p),B(p)):new t.MeshBasicMaterial({color:j(p),transparent:!0,opacity:B(p),depthWrite:!1}),w=l?Ye(t,m,s):new t.CylinderGeometry(m,m,1,s),T=new t.Mesh(w,h);return(d!==void 0||g)&&ee.set(p,T),T}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((p,m)=>{let h=m.end.x-m.start.x,w=m.end.y-m.start.y,T=m.end.z-m.start.z,F=Math.sqrt(h*h+w*w+T*T);return p.position.x=(m.start.x+m.end.x)/2,p.position.y=(m.start.y+m.end.y)/2,p.position.z=(m.start.z+m.end.z)/2,p.scale.x=1,p.scale.y=Math.max(F,.01),p.scale.z=1,p.quaternion.setFromUnitVectors(a,new t.Vector3(h,w,T).normalize()),!0})},pt=()=>{!r.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{let a=R();if(a===null)return 0;let s=P(t.source),d=P(t.target);return s===a||d===a?2:0})},ae=()=>{e.nodeVal(O),e.nodeColor(Z),e.linkColor(ue),e.linkWidth(t=>{let a=P(t.source),s=P(t.target),d=R(),g=x.edgeScale;return d!==null&&(a===d||s===d)?.7*g:t.kind==="wikilink"||t.kind==="external"?.5*g:(t.kind==="tag"?.35:.25)*g}),typeof e.linkOpacity=="function"&&e.linkOpacity(Ct),pt(),L(),r.use3d||e.nodeCanvasObjectMode(()=>"replace")},rn=(t,a)=>{let s=Mt(i,t,a),d=new Set;for(let g of s){let l=de.get(g);if(!l)continue;let p=Z(l);re.get(g)?.color.set(p);let m=N.get(g);m&&m.material.emissive.set(p);let h=I.get(g);h&&(h.sprite.color=u(l),h.sprite.visible=U(l));for(let w of te.get(g)??[]){if(d.has(w))continue;d.add(w);let T=ee.get(w);T&&(r.lod.shareLinkResources&&r.three?T.material=Me(r.three,j(w),B(w)):(T.material.color.set(j(w)),T.material.opacity=B(w)))}}},Ke=t=>{if(r.interaction.incrementalRepaint&&r.use3d){pt(),rn(t,R());return}ae(),r.use3d&&J()},je=()=>{let t=r.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let a=(l,p)=>{let m=document.createElement("span");m.className="graph-landing__legend-item";let h=document.createElement("span");h.className="graph-landing__dot",h.setAttribute("aria-hidden","true"),h.style.background=l;let w=document.createElement("span");return w.textContent=p,m.append(h,w),m},s=r.root.dataset.legendNotes??"Notes",d=r.root.dataset.legendTags??"Tags",g=r.root.dataset.legendLinks??"Links";t.replaceChildren(a(o.current.ink,s),a(o.current.tertiary,d),a(o.current.external,g))},ht=t=>{let a=document.createElement("li"),s=document.createElement("button");s.type="button",s.className="graph-landing__tag-item",s.dataset[t.dataset.key]=t.dataset.value,s.setAttribute("aria-pressed",t.pressed?"true":"false");let d=document.createElement("span");if(d.className="graph-landing__facet-name",t.dotColor!==null){let l=document.createElement("span");l.className="graph-landing__dot",l.style.background=t.dotColor,d.append(l)}d.append(document.createTextNode(t.label));let g=document.createElement("span");return g.className="graph-landing__tag-count",g.textContent=String(t.count),s.append(d,g),a.append(s),a},bt=()=>{let t=r.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let a=r.root.querySelector("[data-graph-facet-label]"),s=r.root.querySelector(".graph-landing__tags");if(y.lens==="folder"){let g=r.root.dataset.folderRootLabel??"root",l=new Map;for(let m of n.nodes)m.type==="note"&&l.set(m.folder,(l.get(m.folder)??0)+1);let p=[...l.entries()].sort((m,h)=>h[1]-m[1]);a instanceof HTMLElement&&(a.textContent=r.root.dataset.legendFolders??"Folders"),s instanceof HTMLElement&&(s.hidden=p.length===0),t.replaceChildren(...p.map(([m,h])=>ht({dataset:{key:"graphFolder",value:m},pressed:y.focusFolder===m,dotColor:$t(m,o.current),label:m==="root"?g:m,count:h})));return}let d=n.nodes.filter(g=>g.type==="tag").sort((g,l)=>l.degree-g.degree).slice(0,16);a instanceof HTMLElement&&(a.textContent=r.root.dataset.legendTags??"Tags"),s instanceof HTMLElement&&(s.hidden=d.length===0),t.replaceChildren(...d.map(g=>ht({dataset:{key:"graphTag",value:g.tag},pressed:y.focusTag===g.tag,dotColor:null,label:g.tag,count:g.degree})))},me=null;r.layout.incrementalWarmup&&typeof e.onFinishUpdate=="function"&&e.onFinishUpdate(()=>{me!==null&&(e.warmupTicks(me),me=null)});let on=()=>{!r.layout.incrementalWarmup||typeof e.onFinishUpdate!="function"||(me===null&&(me=e.warmupTicks()),e.warmupTicks(0))},pe=()=>{e.graphData(W()),M(),ae(),J(),je(),bt(),Wt(r.root,"[data-graph-lens]",y.lens,"data-graph-lens"),e.d3ReheatSimulation()},an=t=>{y.lens=t,t!=="tag"&&(y.focusTag=null),t!=="folder"&&(y.focusFolder=null),ft(t),pe()},sn=t=>{y.focusTag=y.focusTag===t?null:t,y.focusFolder=null,y.focusTag&&(y.lens="tag",ft("tag")),pe()},ln=t=>{y.focusFolder=y.focusFolder===t?null:t,y.focusTag=null,y.focusFolder&&(y.lens="folder",ft("folder")),pe()},Xe=()=>r.use3d?lr(o.current):en(o.current),Ze=()=>{if(!r.use3d||!r.lod.fog||!r.three||typeof e.scene!="function")return;let t=b().len;e.scene().fog=new r.three.Fog(Xe(),t*Rn,t*_n)};e.graphData(W()),e.backgroundColor(Xe()),e.nodeLabel(t=>t.name),e.nodeRelSize(En),typeof e.nodeOpacity=="function"&&e.nodeOpacity(xn),typeof e.linkOpacity=="function"&&e.linkOpacity(Ct),M(),ae();let se=r.root.querySelector("[data-graph-preview]"),Ce=r.root.querySelector("[data-graph-preview-chip]"),Ne=r.root.querySelector("[data-graph-preview-title]"),Ie=r.root.querySelector("[data-graph-preview-excerpt]"),Pe=0;window.addCleanup(()=>window.clearTimeout(Pe));let cn=t=>{if(!(se instanceof HTMLElement)||!(Ce instanceof HTMLElement)||!(Ne instanceof HTMLElement)||!(Ie instanceof HTMLElement))return;window.clearTimeout(Pe);let a=r.root.dataset.legendNotes??"Notes",s=r.root.dataset.legendTags??"Tags",d=r.root.dataset.legendLinks??"Links";if(t.type==="tag"){let g=r.root.dataset.previewTagTemplate??"{n} notes";Ce.textContent=s,Ne.textContent=`#${t.tag}`,Ie.textContent=g.replace("{n}",String(t.degree))}else t.type==="external"?(Ce.textContent=d,Ne.textContent=t.name,Ie.textContent=t.url):(Ce.textContent=a,Ne.textContent=t.name,Ie.textContent=t.excerpt);se.hidden=!1,se.dataset.visible="true"},yt=()=>{se instanceof HTMLElement&&(window.clearTimeout(Pe),Pe=window.setTimeout(()=>{se.dataset.visible="false",se.hidden=!0},Un))};if(e.onNodeHover(t=>{let a=R();z=t?t.id:null,A===null&&(t?cn(t):yt()),Ke(a)}),r.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),!Ve()&&typeof e.controls=="function"){let s=e.controls();s.autoRotate=!1,s.autoRotateSpeed=Nn;let d=window.setTimeout(()=>{typeof e.controls=="function"&&(e.controls().autoRotate=!0)},1600);window.addCleanup(()=>window.clearTimeout(d))}if(e.warmupTicks(r.layout.warmupTicks??50),e.cooldownTicks(r.layout.freezeAfterWarmup?0:r.layout.cooldownTicks??200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),r.bloomPass&&typeof e.postProcessingComposer=="function"&&(r.bloomPass.strength=K()?Pt:0,r.bloomPass.radius=At,r.bloomPass.threshold=Dt,e.postProcessingComposer().addPass(r.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(Ee,Nt),x.zoom!==1&&k(0)),J(),Ze(),!Ve()){let s=0,d=()=>{let g=performance.now()/1e3*Vn;for(let l of N.values())l.material.emissiveIntensity=l.base*(1+zn*Math.sin(g+l.phase));s=window.requestAnimationFrame(d)};s=window.requestAnimationFrame(d),window.addCleanup(()=>window.cancelAnimationFrame(s))}let t=r.lod.labelDistance,a=r.lod.cullDistance;if((t!==void 0||a!==void 0)&&typeof e.cameraPosition=="function"){let s=e.cameraPosition.bind(e),d=0,g=()=>{let l=s();if(l&&typeof l.x=="number"&&typeof l.y=="number"&&typeof l.z=="number"){if(t!==void 0)for(let p of I.values()){let m=p.node.x??0,h=p.node.y??0,w=p.node.z??0,T=Math.hypot(l.x-m,l.y-h,l.z-w);p.sprite.visible=rt(T,t)==="full"}if(a!==void 0){let p=R();for(let[m,h]of ee){let w=P(m.source),T=P(m.target);if(p!==null&&(w===p||T===p)){h.visible=!0;continue}let F=Math.hypot(l.x-h.position.x,l.y-h.position.y,l.z-h.position.z);h.visible=rt(F,a)!=="dot"}}}d=window.requestAnimationFrame(g)};d=window.requestAnimationFrame(g),window.addCleanup(()=>window.cancelAnimationFrame(d))}}else e.warmupTicks(r.layout.warmupTicks??60),e.cooldownTicks(r.layout.freezeAfterWarmup?0:r.layout.cooldownTicks??180),e.nodeCanvasObject((t,a,s)=>{let d=$(t),g=t.x??0,l=t.y??0;if(a.save(),a.beginPath(),a.arc(g,l,d,0,Math.PI*2),a.fillStyle=Z(t),a.fill(),t.isHub&&(a.strokeStyle=S(t.id)?o.current.accent:ce(o.current.accent,ve),a.lineWidth=1.2/s,a.stroke()),U(t)){let p=11.5/s;a.font=`${p}px ${o.current.font}`,a.fillStyle=S(t.id)?o.current.ink:ce(o.current.ink,ve),a.textAlign="center",a.textBaseline="bottom",a.fillText(t.name,g,l-d-6)}a.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,a,s)=>{let d=$(t)+8;s.beginPath(),s.arc(t.x??0,t.y??0,d,0,Math.PI*2),s.fillStyle=a,s.fill()});let Ae=r.root.querySelector("[data-graph-inspect]"),De=r.root.querySelector("[data-graph-inspect-chip]"),Re=r.root.querySelector("[data-graph-inspect-title]"),_e=r.root.querySelector("[data-graph-inspect-excerpt]"),Je=r.root.querySelector("[data-graph-inspect-tags]"),Qe=r.root.querySelector("[data-graph-inspect-connected]"),H=r.root.querySelector("[data-graph-inspect-open]"),ie=t=>{r.root.dataset.railOpen=t?"true":"false";let a=r.root.querySelector("[data-graph-rail-toggle]"),s=r.root.querySelector("[data-graph-rail-scrim]"),d=r.root.querySelector("#graph-landing-rail");a instanceof HTMLButtonElement&&a.setAttribute("aria-expanded",t?"true":"false"),d instanceof HTMLElement&&d.setAttribute("aria-hidden",t?"false":"true"),s instanceof HTMLElement&&(s.hidden=!t)},Ge=t=>{Ve()||typeof e.controls!="function"||(e.controls().autoRotate=t)},un=t=>{let a=i.get(t.id)??new Set,s=[];for(let d of a){let g=n.nodes.find(l=>l.id===d);g&&s.push(g)}return s.sort((d,g)=>g.degree-d.degree)},dn=t=>{if(!(Ae instanceof HTMLElement)||!(De instanceof HTMLElement)||!(Re instanceof HTMLElement)||!(_e instanceof HTMLElement)||!(Je instanceof HTMLElement)||!(Qe instanceof HTMLElement))return;let a=r.root.dataset.legendNotes??"Notes",s=r.root.dataset.legendTags??"Tags",d=r.root.dataset.legendLinks??"Links",g=r.root.dataset.inspectEmpty??"No direct connections";t.type==="tag"?(De.textContent=s,Re.textContent=`#${t.tag}`,_e.textContent=(r.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(t.degree))):t.type==="external"?(De.textContent=d,Re.textContent=t.name,_e.textContent=t.url):(De.textContent=a,Re.textContent=t.name,_e.textContent=t.excerpt);let l=t.tags.map(m=>{let h=document.createElement("li");return h.textContent=m,h});Je.replaceChildren(...l),Je.hidden=l.length===0;let p=un(t).slice(0,12);if(p.length===0){let m=document.createElement("li");m.className="graph-landing__inspect-empty",m.textContent=g,Qe.replaceChildren(m)}else Qe.replaceChildren(...p.map(m=>{let h=document.createElement("li"),w=document.createElement("button");w.type="button",w.className="graph-landing__inspect-link",w.dataset.graphInspectId=m.id;let T=m.type==="tag"?s:m.type==="external"?d:a,F=document.createElement("span");F.textContent=T;let _=document.createElement("strong");return _.textContent=m.type==="tag"?`#${m.tag}`:m.name,w.append(F,_),h.append(w),h}));H instanceof HTMLAnchorElement&&(t.type==="note"&&t.slug.length>0?(H.hidden=!1,H.href=nn(t.slug).toString(),H.textContent=r.root.dataset.inspectRead??"Read note",H.removeAttribute("target"),H.removeAttribute("rel")):t.type==="external"&&t.url.length>0?(H.hidden=!1,H.href=t.url,H.textContent=r.root.dataset.inspectOpenExternal??"Open",H.target="_blank",H.rel="noopener noreferrer"):(H.hidden=!0,H.removeAttribute("href"),H.removeAttribute("target"),H.removeAttribute("rel"))),Ae.hidden=!1,r.root.dataset.inspecting="true",ie(!1),yt()},he=()=>{let t=R();A=null,Ae instanceof HTMLElement&&(Ae.hidden=!0),r.root.dataset.inspecting="false",Ge(!0),Ke(t)},fn=t=>{if(A===t.id&&t.type==="note"&&t.slug.length>0){ur(t.slug);return}if(A===t.id&&t.type==="external"&&t.url.length>0){dr(t.url);return}let a=R();A=t.id,dn(t),Ke(a)},et=t=>{D(t.id)&&(on(),pe()),fn(t)},tt=!1;e.onNodeClick((t,a)=>{t&&(tt=!0,a&&typeof a.stopPropagation=="function"&&a.stopPropagation(),et(t))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{he(),ie(!1)});let Q=r.root.querySelector("#graph-landing-mount");if(Q instanceof HTMLElement){let t=null,a=l=>{t={x:l.clientX,y:l.clientY},Ge(!1)},s=(l,p)=>{if(typeof e.graph2ScreenCoords!="function")return null;let m=Q.getBoundingClientRect(),h=l-m.left,w=p-m.top,T=null,F=4096;for(let _ of W().nodes){if(_.x===void 0||_.y===void 0)continue;let q=e.graph2ScreenCoords(_.x,_.y,_.z??0),Te=(q.x-h)**2+(q.y-w)**2,gn=(q.x-l)**2+(q.y-p)**2,vt=Math.min(Te,gn);vt<F&&(F=vt,T=_)}return T},d=l=>{let p=t;t=null,Ge(!0),!(!p||(l.clientX-p.x)**2+(l.clientY-p.y)**2>25)&&window.setTimeout(()=>{if(tt){tt=!1;return}let h=s(l.clientX,l.clientY);h?et(h):he()},0)},g=()=>{t=null,Ge(!0)};Q.addEventListener("pointerdown",a,!0),Q.addEventListener("pointerup",d,!0),Q.addEventListener("pointercancel",g,!0),window.addCleanup(()=>{Q.removeEventListener("pointerdown",a,!0),Q.removeEventListener("pointerup",d,!0),Q.removeEventListener("pointercancel",g,!0)})}Wt(r.root,"[data-graph-lens]",y.lens,"data-graph-lens"),je(),bt(),y.lens!=="all"&&pe(),r.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let wt=()=>{o.current=Qt(),e.backgroundColor(Xe()),Ze(),r.bloomPass&&(r.bloomPass.strength=K()?Pt:0,r.bloomPass.radius=At,r.bloomPass.threshold=Dt),ae(),J(),je()};document.addEventListener("themechange",wt),window.addCleanup(()=>document.removeEventListener("themechange",wt));let kt=t=>{let a=t.target;if(!(a instanceof Element))return;if(a.closest("[data-graph-inspect-close]")){he();return}if(a.closest("[data-graph-rail-toggle]")){let h=r.root.dataset.railOpen!=="true";h&&he(),ie(h);return}if(a.closest("[data-graph-rail-scrim]")){ie(!1);return}let s=a.closest("[data-graph-inspect-id]");if(s instanceof HTMLElement&&s.dataset.graphInspectId){let h=r.fullData.nodes.find(w=>w.id===s.dataset.graphInspectId);h&&et(h);return}let d=a.closest("[data-graph-lens]");if(d instanceof HTMLElement&&d.dataset.graphLens&&hr(d.dataset.graphLens)){an(d.dataset.graphLens);return}let g=a.closest("[data-graph-tag]");if(g instanceof HTMLElement&&g.dataset.graphTag){sn(g.dataset.graphTag);return}let l=a.closest("[data-graph-folder]");if(l instanceof HTMLElement&&l.dataset.graphFolder){ln(l.dataset.graphFolder);return}if(a.closest("[data-graph-relayout]")){e.d3ReheatSimulation();return}let p=a.closest("[data-graph-labels]");if(p instanceof HTMLButtonElement){y.allLabels=!y.allLabels,p.setAttribute("aria-pressed",y.allLabels?"true":"false");let h=p.dataset.labelShow??"Labels",w=p.dataset.labelHide??"Labels",T=y.allLabels?w:h;p.title=T,p.setAttribute("aria-label",T),J();return}if(a.closest("[data-graph-theme]")){let h=K()?"light":"dark";document.documentElement.setAttribute("saved-theme",h),localStorage.setItem("theme",h),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${h}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:h}}));return}let m=a.closest("[data-graph-tags-toggle]");if(m instanceof HTMLButtonElement){let h=r.root.querySelector(".graph-landing__tags");if(h instanceof HTMLElement){let w=h.dataset.open==="true";h.dataset.open=w?"false":"true",m.setAttribute("aria-expanded",w?"false":"true")}}},be=r.root.querySelector("[data-graph-node-scale]"),ye=r.root.querySelector("[data-graph-edge-scale]");if(be instanceof HTMLInputElement){be.value=String(Math.round(x.nodeScale*100));let t=()=>{x.nodeScale=Number(be.value)/100,ze(x),ae(),r.use3d&&J()};be.addEventListener("input",t),window.addCleanup(()=>be.removeEventListener("input",t))}if(ye instanceof HTMLInputElement){ye.value=String(Math.round(x.edgeScale*100));let t=()=>{x.edgeScale=Number(ye.value)/100,ze(x),ae()};ye.addEventListener("input",t),window.addCleanup(()=>ye.removeEventListener("input",t))}let we=r.root.querySelector("[data-graph-zoom]");if(we instanceof HTMLInputElement){we.value=String(Math.round(x.zoom*100));let t=()=>{x.zoom=Number(we.value)/100,ze(x),k(200)};we.addEventListener("input",t),window.addCleanup(()=>we.removeEventListener("input",t))}let ke=r.root.querySelector("[data-graph-spread]");if(ke instanceof HTMLInputElement){ke.value=String(Math.round(x.spread*100));let t=()=>{x.spread=Number(ke.value)/100,ze(x),M(),e.d3ReheatSimulation()};ke.addEventListener("input",t),window.addCleanup(()=>ke.removeEventListener("input",t))}ie(!1),r.root.addEventListener("click",kt),window.addCleanup(()=>r.root.removeEventListener("click",kt));let Tt=t=>{if(t.key==="Escape"){if(r.root.dataset.railOpen==="true"){ie(!1);return}he()}};window.addEventListener("keydown",Tt),window.addCleanup(()=>window.removeEventListener("keydown",Tt))}function vr(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function Lr(){try{return window.localStorage.getItem(gt)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function qt(e){try{if(e){window.localStorage.setItem(gt,"stopped");return}window.localStorage.removeItem(gt)}catch(n){console.error("[graph-landing] could not persist ambient audio preference",n)}}function Er(e){let n=performance.now(),o=0,r=i=>{let c=Math.min(1,(i-n)/e.durationMs),f=c*c;e.apply(e.from+(e.to-e.from)*f),c<1&&(o=window.requestAnimationFrame(r))};return o=window.requestAnimationFrame(r),()=>{window.cancelAnimationFrame(o)}}function xr(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((n,o)=>{let r=window,i=r.onYouTubeIframeAPIReady;if(r.onYouTubeIframeAPIReady=()=>{typeof i=="function"&&i();let c=r.YT;if(!c||typeof c.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}n(c)},!document.querySelector("script[data-graph-youtube-api]")){let c=document.createElement("script");c.src=Cn,c.async=!0,c.dataset.graphYoutubeApi="1",c.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(c)}})}function Sr(e){return new e.api.Player(e.host,{videoId:e.videoId,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,loop:1,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,playlist:e.videoId,rel:0},events:{onReady:n=>{e.onReady(n.target)},onStateChange:n=>{n.data===e.api.PlayerState.ENDED&&e.onEnded(n.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}function Mr(e){let n=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]");if(!(n instanceof HTMLButtonElement)||!(o instanceof HTMLElement))return;let r=e.dataset.audioStop??"Stop music",i=e.dataset.audioPlay??"Play music",c=Lt(e.dataset.graphAmbientVideoId)??Sn,f=null,v=!1,E=null,C=!Lr(),D=!1,y=S=>{n.setAttribute("aria-pressed",S?"true":"false"),n.setAttribute("aria-label",S?r:i),n.title=S?r:i,n.dataset.playing=S?"true":"false"},z=()=>{E&&(E(),E=null)},A=S=>{f&&f.setVolume(Math.max(0,Math.min(Fe,S)))},x=S=>{!C||D||(D=!0,y(!0),S.unMute(),A(0),S.playVideo(),z(),E=Er({from:0,to:Fe,durationMs:Mn,apply:A}))},R=()=>{C=!1,D=!1,z(),qt(!0),f&&(f.mute(),f.pauseVideo(),A(0)),y(!1)},V=async()=>{if(!f)try{let S=await xr();if(f)return;f=Sr({api:S,host:o,videoId:c,onReady:G=>{v=!0,G.mute(),A(0),G.playVideo()},onEnded:G=>{C&&(G.playVideo(),A(Fe))}})}catch(S){console.error("[graph-landing] ambient audio unavailable",S)}},O=S=>{let G=S.target;if(!(G instanceof Element&&G.closest("[data-graph-audio-toggle]"))&&!(!C||D||vr())){if(v&&f){x(f);return}V()}},U=()=>{if(C&&D){R();return}if(C=!0,qt(!1),v&&f){x(f);return}V()},$=()=>{if(f){if(document.hidden){z(),f.pauseVideo();return}C&&D&&(f.playVideo(),A(Fe))}};y(C),V(),n.addEventListener("click",U),e.addEventListener("pointerdown",O,!0),e.addEventListener("touchstart",O,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",$),window.addCleanup(()=>{n.removeEventListener("click",U),e.removeEventListener("pointerdown",O,!0),e.removeEventListener("touchstart",O,!0),document.removeEventListener("visibilitychange",$),z(),f&&(f.pauseVideo(),f.destroy(),f=null)})}async function Cr(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1",Mr(e);let n=e.querySelector("#graph-landing-mount");if(!(n instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let o=e.querySelectorAll("[data-graph-counts]"),r=e.dataset.locale??e.dataset.graphDefaultLocale??"ko",i=e.dataset.sourceLocale??e.dataset.graphDefaultLocale??"ko",c=(e.dataset.localePrefixes??"").split(",").map(L=>L.trim()).filter(L=>L.length>0),f=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",v=e.dataset.indexSource==="graphIndex"?"graphIndex":"contentIndex",E=e.dataset.graphIndexPath??"",C=Y(e.dataset.maxRenderedNodes,L=>Number.parseInt(L,10)),D=e.dataset.expandHops?Number.parseInt(e.dataset.expandHops,10):1,y=Number.isFinite(D)?D:1,z=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,A=e.dataset.graphRenderMode==="3d"?"3d":"auto",x=e.dataset.graphLayoutFreezeAfterWarmup==="true",R=Y(e.dataset.graphLayoutWarmupTicks,L=>Number.parseInt(L,10)),V=Y(e.dataset.graphLayoutCooldownTicks,L=>Number.parseInt(L,10)),O=Y(e.dataset.graphLayoutChargeTheta,Number.parseFloat),U=e.dataset.graphLayoutIncrementalWarmup==="true",$=Y(e.dataset.graphLodLabelDistance,Number.parseFloat),S=Y(e.dataset.graphLodDotDistance,Number.parseFloat),G=Y(e.dataset.graphLodCullDistance,Number.parseFloat),Z=e.dataset.graphLodFog==="true",ne=Y(e.dataset.graphLodNodeResolution,L=>Number.parseInt(L,10)),B=Y(e.dataset.graphLodLinkResolution,L=>Number.parseInt(L,10)),j=e.dataset.graphInteractionIncrementalRepaint==="true",ue=e.dataset.graphLodShareLinkResources==="true",W=!1,u=null,b={current:Qt()},k=()=>{W=!0,u&&(u._destructor(),u=null),delete e.dataset.graphReady};window.addCleanup(k);let M=sr();if(A==="3d"&&!M){dt(n,"3D graph unavailable: WebGL is required and motion must be enabled.");return}let N=A==="3d"||M,I=gr(N),ee=N?import(yn).then(L=>L.default??null).catch(L=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",L),null)):Promise.resolve(null),re=N?import(wn).catch(L=>(console.error("[graph-landing] three unavailable; using default node spheres",L),null)):Promise.resolve(null),de=N?import(kn).then(L=>L.UnrealBloomPass?new L.UnrealBloomPass:null).catch(L=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",L),null)):Promise.resolve(null);I.catch(()=>{});let te;try{te=$e(v==="graphIndex"?await fetch(E).then(L=>L.json()):await fetchData)}catch(L){throw dt(n,"Graph could not load content index."),L}if(W)return;let fe=or(Bn(te),{localeId:r,sourceLocale:i,prefixes:c},z),oe=Et(fe,C),Se=f.replace("{n}",String(oe.nodes.length)).replace("{m}",String(oe.links.length));for(let L of o)L.textContent=Se;let ge;try{ge=await I}catch(L){throw dt(n,"Graph could not load. Check your network connection."),L}let[Ye,Me,J]=await Promise.all([ee,re,de]);W||(n.replaceChildren(),u=ge(n),n.__graphLanding=u,n.__graphData=oe,Tr(u,oe,b,{use3d:N,root:e,spriteText:Ye,bloomPass:J,three:Me,fullData:fe,expandHops:y,layout:{freezeAfterWarmup:x,warmupTicks:R,cooldownTicks:V,chargeTheta:O,incrementalWarmup:U},lod:{labelDistance:$,dotDistance:S,cullDistance:G,fog:Z,nodeResolution:ne,linkResolution:B,shareLinkResources:ue},interaction:{incrementalRepaint:j}}))}var Nr="preferred-locale";document.addEventListener("click",e=>{let n=e.target;if(!(n instanceof Element))return;let o=n.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let r=o.dataset.preferredLocale;if(r)try{localStorage.setItem(Nr,r)}catch(i){console.error("[graph-landing] failed to persist preferred-locale",i)}});document.addEventListener("nav",()=>{Cr()});\n';

// src/components/styles/graph-landing.scss
var graph_landing_default = 'html:has(.graph-landing),\nbody:has(.graph-landing) {\n  --graph-external: #3f6f8c;\n  height: 100dvh;\n  overflow: hidden;\n}\n\nhtml[saved-theme=dark]:has(.graph-landing),\nhtml[saved-theme=dark] body:has(.graph-landing) {\n  --graph-external: #8fb6c8;\n}\n\nhtml:not([saved-theme=dark]):has(.graph-landing),\nhtml:not([saved-theme=dark]) body:has(.graph-landing) {\n  --graph-external: #0f6a72;\n}\n\n.page:has(.graph-landing) > #quartz-body {\n  row-gap: 0;\n}\n\n.page:has(.graph-landing) footer,\n.page:has(.graph-landing) header,\n.page:has(.graph-landing) .left,\n.page:has(.graph-landing) .right,\n.page:has(.graph-landing) .sidebar {\n  display: none;\n}\n\n.center.minimal:has(.graph-landing) {\n  max-width: 100%;\n  min-width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing {\n  background: var(--light);\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  max-width: 100%;\n  overflow-x: hidden;\n  width: 100%;\n}\n\n/* Pinned to the viewport so host wrappers (page padding, header rows)\n   can never crop the canvas. */\n.graph-landing__hero {\n  background: var(--light);\n  height: 100svh;\n  height: 100dvh;\n  inset: 0;\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n}\n\n.graph-landing__canvas {\n  height: 100%;\n  inset: 0;\n  position: absolute;\n  /* Touch drags rotate the constellation instead of scrolling/zooming the page. */\n  touch-action: none;\n  width: 100%;\n}\n\n.graph-landing__canvas canvas {\n  display: block;\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.graph-landing__overlay {\n  height: 100%;\n  inset: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n}\n\n.graph-landing__rail {\n  backdrop-filter: blur(16px);\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 14px;\n  bottom: 66px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.18);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  left: 16px;\n  max-height: calc(100dvh - 140px);\n  max-width: 248px;\n  opacity: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 14px 14px 12px;\n  pointer-events: none;\n  position: absolute;\n  top: auto;\n  touch-action: pan-y;\n  transform: translateY(10px);\n  transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease;\n  visibility: hidden;\n  width: 248px;\n  z-index: 4;\n}\n\n.graph-landing[data-rail-open=true] .graph-landing__rail {\n  opacity: 1;\n  pointer-events: auto;\n  transform: none;\n  visibility: visible;\n}\n\n.graph-landing__rail > * {\n  flex-shrink: 0;\n}\n\n.graph-landing__chrome {\n  align-items: center;\n  display: flex;\n  gap: 8px;\n  justify-content: space-between;\n  left: 0;\n  padding: 1.25rem 1.5rem;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 3;\n}\n\n.graph-landing__title-block--chrome {\n  display: flex;\n  flex: 1 1 auto;\n  min-width: 0;\n  pointer-events: auto;\n}\n\n.graph-landing__scrim {\n  display: none;\n}\n\n.graph-landing__rail-toggle {\n  align-items: center;\n  backdrop-filter: blur(10px);\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 10px;\n  bottom: 16px;\n  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);\n  color: var(--dark);\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  justify-content: center;\n  left: 16px;\n  pointer-events: auto;\n  position: absolute;\n  width: 40px;\n  z-index: 5;\n}\n\n.graph-landing__rail-toggle:focus-visible,\n.graph-landing__audio-toggle:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__audio-toggle {\n  align-items: center;\n  backdrop-filter: blur(10px);\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 10px;\n  bottom: 16px;\n  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);\n  color: var(--dark);\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  justify-content: center;\n  left: 64px;\n  pointer-events: auto;\n  position: absolute;\n  width: 40px;\n  z-index: 5;\n}\n\n.graph-landing__audio-toggle .graph-landing__icon--audio-on {\n  display: none;\n}\n\n.graph-landing__audio-toggle[data-playing=true] .graph-landing__icon--audio-on {\n  display: block;\n}\n\n.graph-landing__audio-toggle[data-playing=true] .graph-landing__icon--audio-off {\n  display: none;\n}\n\n.graph-landing__audio,\n.graph-landing__audio iframe {\n  height: 113px;\n  width: 200px;\n}\n\n.graph-landing__audio {\n  bottom: 0;\n  left: 0;\n  opacity: 0.02;\n  overflow: hidden;\n  pointer-events: none;\n  position: absolute;\n  z-index: 0;\n}\n\n.graph-landing__top-right {\n  align-items: center;\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 1.25rem;\n  justify-content: flex-end;\n  pointer-events: auto;\n}\n\n.graph-landing__title-block {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 8px;\n}\n\n.graph-landing__title {\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.2;\n  margin: 0;\n  text-decoration: none;\n}\n\na.graph-landing__title:hover,\na.graph-landing__title:focus-visible {\n  color: var(--secondary);\n}\n\n.graph-landing__counts {\n  color: var(--gray);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.graph-landing__lenses {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0 4px;\n}\n\n.graph-landing__chip {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  line-height: 1.2;\n  min-height: 44px;\n  padding: 12px 8px;\n  position: relative;\n}\n\n.graph-landing__chip:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__chip:focus-visible {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__chip[aria-pressed=true] {\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__chip[aria-pressed=true]::after {\n  background: currentColor;\n  bottom: 11px;\n  content: "";\n  height: 1px;\n  left: 8px;\n  pointer-events: none;\n  position: absolute;\n  right: 8px;\n}\n\n.graph-landing__section-label {\n  color: var(--gray);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 11px;\n  letter-spacing: 0.04em;\n  line-height: 1.3;\n  margin: 0 0 4px;\n  pointer-events: none;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle,\n.graph-landing__icon-btn,\n.graph-landing__filters-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  font-weight: 400;\n  height: 44px;\n  justify-content: center;\n  line-height: 1;\n  min-height: 44px;\n  padding: 0;\n  text-decoration: none;\n}\n\n.graph-landing__nav-link:hover,\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:hover,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:hover,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:hover,\n.graph-landing__filters-toggle:focus-visible {\n  color: var(--secondary);\n  outline: none;\n}\n\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle {\n  color: var(--dark);\n}\n\n.graph-landing__icon-btn {\n  min-width: 44px;\n}\n\n/* Sun shows in dark mode (click -> light), moon in light mode. */\n.graph-landing__icon--sun {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--sun {\n  display: block;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--moon {\n  display: none;\n}\n\n.graph-landing__tags {\n  min-width: 0;\n}\n\n.graph-landing__filters-toggle {\n  display: none;\n}\n\n.graph-landing__tag-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__tag-item {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  gap: 8px;\n  justify-content: space-between;\n  line-height: 1.4;\n  min-height: 32px;\n  padding: 6px 8px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__tag-item:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__tag-item:focus-visible {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__tag-item[aria-pressed=true] {\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__facet-name {\n  align-items: center;\n  display: inline-flex;\n  gap: 7px;\n}\n\n.graph-landing__tag-count {\n  color: var(--gray);\n  font-variant-numeric: tabular-nums;\n}\n\n.graph-landing__utils {\n  border-top: 1px solid var(--lightgray);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 8px;\n}\n\n.graph-landing__tune {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.graph-landing__tune-head {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__tools {\n  display: inline-flex;\n  gap: 2px;\n}\n\n.graph-landing__tool {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 6px;\n  color: var(--gray);\n  cursor: pointer;\n  display: inline-flex;\n  height: 28px;\n  justify-content: center;\n  width: 28px;\n}\n\n.graph-landing__tool:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__tool:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__tool[aria-pressed=true] {\n  background: color-mix(in srgb, var(--secondary) 12%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__slider {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.graph-landing__slider span {\n  color: var(--gray);\n  font-size: 11px;\n}\n\n.graph-landing__slider input[type=range] {\n  accent-color: var(--secondary);\n  cursor: pointer;\n  width: 100%;\n}\n\n.graph-landing__legend {\n  align-items: center;\n  color: var(--gray);\n  cursor: default;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12px;\n  gap: 8px 12px;\n  line-height: 1.3;\n}\n\n.graph-landing__legend-item {\n  align-items: center;\n  display: inline-flex;\n  gap: 6px;\n}\n\n.graph-landing__dot {\n  border-radius: 50%;\n  display: inline-block;\n  height: 7px;\n  width: 7px;\n}\n\n.graph-landing__dot--note {\n  background: var(--darkgray);\n}\n\n.graph-landing__dot--tag {\n  background: var(--tertiary);\n}\n\n.graph-landing__dot--external {\n  background: var(--graph-external);\n}\n\n.graph-landing__preview {\n  background: color-mix(in srgb, var(--light) 88%, transparent);\n  backdrop-filter: blur(14px);\n  border: 1px solid color-mix(in srgb, var(--lightgray) 70%, transparent);\n  border-radius: 14px;\n  bottom: 2rem;\n  left: 50%;\n  margin: 0;\n  max-width: 560px;\n  opacity: 0;\n  padding: 1rem 1.3rem 0.9rem;\n  pointer-events: none;\n  position: absolute;\n  transform: translate(-58%, 6px);\n  transition: opacity 0.22s ease, transform 0.22s ease;\n  width: min(560px, 100% - 2.5rem);\n}\n\n.graph-landing__preview[data-visible=true] {\n  opacity: 1;\n  transform: translate(-58%, 0);\n}\n\n.graph-landing__preview-chip {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0 0 0.35rem;\n  text-transform: uppercase;\n}\n\n.graph-landing__preview-title {\n  color: var(--dark);\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0 0 0.4rem;\n}\n\n.graph-landing__preview-excerpt {\n  color: var(--darkgray);\n  display: -webkit-box;\n  font-size: 13px;\n  line-height: 1.5;\n  margin: 0 0 0.55rem;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n\n.graph-landing__preview-hint {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.12em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n:root[saved-theme=dark] .graph-landing__preview {\n  background: rgba(15, 17, 25, 0.78);\n  border-color: rgba(219, 226, 242, 0.14);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-title {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n.graph-landing__inspect {\n  background: color-mix(in srgb, var(--light) 90%, transparent);\n  backdrop-filter: blur(16px);\n  border-left: 1px solid var(--lightgray);\n  bottom: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-height: calc(100dvh - 4.5rem);\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 1.1rem 1.2rem 1.3rem;\n  pointer-events: auto;\n  position: absolute;\n  right: 0;\n  top: 4.5rem;\n  width: min(22rem, 100% - 15rem);\n}\n\n.graph-landing__inspect[hidden] {\n  display: none;\n}\n\n.graph-landing__inspect-bar {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__inspect-chip {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-close {\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  min-height: 32px;\n  padding: 0 4px;\n}\n\n.graph-landing__inspect-title {\n  color: var(--dark);\n  font-size: 1.05rem;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0;\n}\n\n.graph-landing__inspect-excerpt {\n  color: var(--darkgray);\n  font-size: 13px;\n  line-height: 1.55;\n  margin: 0;\n}\n\n.graph-landing__inspect-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-tags li {\n  border: 1px solid var(--lightgray);\n  border-radius: 999px;\n  color: var(--gray);\n  font-size: 11px;\n  padding: 2px 8px;\n}\n\n.graph-landing__inspect-section {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 6px 0 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-links {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-link {\n  align-items: baseline;\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--dark);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  gap: 8px;\n  min-height: 32px;\n  padding: 4px 2px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__inspect-link span {\n  color: var(--gray);\n  flex: 0 0 3.2rem;\n  font-size: 10px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-link strong {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.graph-landing__inspect-empty {\n  color: var(--gray);\n  font-size: 12px;\n  padding: 4px 0;\n}\n\n.graph-landing__inspect-open {\n  align-self: flex-start;\n  color: var(--secondary);\n  font-size: 13px;\n  font-weight: 500;\n  margin-top: 8px;\n  min-height: 44px;\n  padding: 10px 0;\n  text-decoration: none;\n}\n\n.graph-landing__inspect-open[hidden] {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__inspect {\n  background: rgba(12, 14, 20, 0.86);\n  border-left-color: rgba(219, 226, 242, 0.12);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-title,\n:root[saved-theme=dark] .graph-landing__inspect-link {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__preview {\n    display: none;\n  }\n  .graph-landing__inspect {\n    border-left: 0;\n    border-radius: 16px 16px 0 0;\n    border-top: 1px solid var(--lightgray);\n    bottom: 0;\n    left: 0;\n    max-height: min(52dvh, 100dvh - 4.5rem);\n    padding-bottom: max(12px, env(safe-area-inset-bottom));\n    right: 0;\n    top: auto;\n    width: 100%;\n    z-index: 5;\n  }\n}\n.graph-landing__error {\n  align-items: center;\n  color: var(--gray);\n  display: flex;\n  font-size: 0.9rem;\n  height: 100%;\n  justify-content: center;\n  padding: 1.5rem;\n  text-align: center;\n}\n\n:root[saved-theme=dark] .graph-landing {\n  background: var(--light);\n}\n\n:root[saved-theme=dark] .graph-landing__hero,\n:root[saved-theme=dark] .graph-landing__canvas {\n  background: color-mix(in srgb, var(--light) 12%, #05070f);\n}\n\n:root[saved-theme=dark] .graph-landing__rail {\n  background: color-mix(in srgb, var(--light) 72%, transparent);\n  border-color: var(--lightgray);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__chrome {\n    backdrop-filter: blur(10px);\n    background: color-mix(in srgb, var(--light) 78%, transparent);\n    border-bottom: 1px solid var(--lightgray);\n    gap: 6px;\n    justify-content: flex-start;\n    padding: max(8px, env(safe-area-inset-top)) 10px 8px 12px;\n    pointer-events: auto;\n  }\n  .graph-landing__title-block--rail {\n    display: none;\n  }\n  .graph-landing__title {\n    font-size: 14px;\n  }\n  .graph-landing__top-right {\n    flex: 1 1 auto;\n    gap: 0.65rem;\n    justify-content: flex-end;\n    min-width: 0;\n  }\n  .graph-landing__nav-link,\n  .graph-landing__locale-toggle {\n    font-size: 12px;\n    height: 40px;\n    min-height: 40px;\n  }\n  .graph-landing__rail-toggle,\n  .graph-landing__audio-toggle {\n    bottom: max(16px, env(safe-area-inset-bottom));\n    height: 44px;\n    width: 44px;\n  }\n  .graph-landing__rail-toggle {\n    left: max(16px, env(safe-area-inset-left));\n  }\n  .graph-landing__audio-toggle {\n    left: calc(max(16px, env(safe-area-inset-left)) + 44px + 8px);\n  }\n  .graph-landing__scrim {\n    background: rgba(8, 10, 16, 0.42);\n    border: 0;\n    display: block;\n    inset: 0;\n    pointer-events: auto;\n    position: absolute;\n    z-index: 3;\n  }\n  .graph-landing__scrim[hidden] {\n    display: none;\n  }\n  .graph-landing__rail {\n    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 44px + 10px);\n    left: max(16px, env(safe-area-inset-left));\n    max-height: min(58dvh, 100dvh - 8rem);\n    max-width: min(248px, 100vw - 32px);\n    width: min(248px, 100vw - 32px);\n  }\n  .graph-landing__lenses {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n  }\n  .graph-landing__chip {\n    flex: 0 0 auto;\n    min-height: 44px;\n  }\n  .graph-landing__tag-list {\n    max-height: 16dvh;\n    overflow-y: auto;\n  }\n  :root[saved-theme=dark] .graph-landing__chrome {\n    background: color-mix(in srgb, var(--light) 72%, transparent);\n    border-bottom-color: var(--lightgray);\n  }\n}';
var l;
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Math.random().toString(8);

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/components/GraphLanding.tsx
function overlayCopyForLocale(localeId) {
  if (localeId === "ko") {
    return {
      labelsShow: "\uB77C\uBCA8 \uBCF4\uC774\uAE30",
      labelsHide: "\uB77C\uBCA8 \uC228\uAE30\uAE30",
      relayout: "\uB2E4\uC2DC \uC815\uB82C",
      notes: "\uB178\uD2B8",
      tags: "\uD0DC\uADF8",
      links: "\uB9C1\uD06C",
      countsTemplate: "{n} \uB178\uB4DC \xB7 {m} \uC5E3\uC9C0",
      lensAll: "\uC804\uCCB4",
      lensTag: "\uD0DC\uADF8",
      lensFolder: "\uD3F4\uB354",
      spacing: "Spacing",
      zoom: "Zoom",
      articles: "Writing",
      about: "About",
      themeToggle: "\uB77C\uC774\uD2B8/\uB2E4\uD06C \uBAA8\uB4DC \uC804\uD658",
      filtersToggle: "\uD544\uD130",
      controls: "Controls",
      audioStop: "\uB178\uB798 \uB044\uAE30",
      audioPlay: "\uB178\uB798 \uCF1C\uAE30",
      folderRoot: "\uB8E8\uD2B8",
      previewHint: "\uD074\uB9AD\uD558\uBA74 \uC5F0\uACB0\uC774 \uC5F4\uB9BD\uB2C8\uB2E4",
      previewTagTemplate: "{n}\uAC1C \uB178\uD2B8",
      inspectOpen: "\uBCF8\uBB38 \uC77D\uAE30",
      inspectOpenExternal: "\uC5F4\uAE30",
      inspectConnected: "\uC5F0\uACB0",
      inspectClose: "\uB2EB\uAE30",
      inspectEmpty: "\uC9C1\uC811 \uC5F0\uACB0\uB41C \uBCC4\uC774 \uC5C6\uC2B5\uB2C8\uB2E4",
      folders: "\uD3F4\uB354",
      tune: "Tune",
      nodeSize: "Node size",
      edgeWidth: "Edge width"
    };
  }
  if (localeId === "ru") {
    return {
      labelsShow: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u0438",
      labelsHide: "\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u0438",
      relayout: "\u041F\u0435\u0440\u0435\u0441\u043E\u0431\u0440\u0430\u0442\u044C",
      notes: "\u0417\u0430\u043C\u0435\u0442\u043A\u0438",
      tags: "\u0422\u0435\u0433\u0438",
      links: "\u0421\u0441\u044B\u043B\u043A\u0438",
      countsTemplate: "{n} \u0443\u0437\u043B\u043E\u0432 \xB7 {m} \u0441\u0432\u044F\u0437\u0435\u0439",
      lensAll: "\u0412\u0441\u0435",
      lensTag: "\u0422\u0435\u0433\u0438",
      lensFolder: "\u041F\u0430\u043F\u043A\u0438",
      spacing: "Spacing",
      zoom: "Zoom",
      articles: "\u0417\u0430\u043C\u0435\u0442\u043A\u0438",
      about: "\u041C\u0435\u0442\u0430",
      themeToggle: "\u0421\u0432\u0435\u0442\u043B\u0430\u044F/\u0442\u0451\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430",
      filtersToggle: "\u0424\u0438\u043B\u044C\u0442\u0440\u044B",
      controls: "Controls",
      audioStop: "\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043C\u0443\u0437\u044B\u043A\u0443",
      audioPlay: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043C\u0443\u0437\u044B\u043A\u0443",
      folderRoot: "\u041A\u043E\u0440\u0435\u043D\u044C",
      previewHint: "\u041A\u043B\u0438\u043A \u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0441\u0432\u044F\u0437\u0438",
      previewTagTemplate: "{n} \u0437\u0430\u043C\u0435\u0442\u043E\u043A",
      inspectOpen: "\u0427\u0438\u0442\u0430\u0442\u044C \u0437\u0430\u043C\u0435\u0442\u043A\u0443",
      inspectOpenExternal: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C",
      inspectConnected: "\u0421\u0432\u044F\u0437\u0438",
      inspectClose: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
      inspectEmpty: "\u041F\u0440\u044F\u043C\u044B\u0445 \u0441\u0432\u044F\u0437\u0435\u0439 \u043D\u0435\u0442",
      folders: "\u041F\u0430\u043F\u043A\u0438",
      tune: "Tune",
      nodeSize: "Node size",
      edgeWidth: "Edge width"
    };
  }
  return {
    labelsShow: "Show labels",
    labelsHide: "Hide labels",
    relayout: "Re-layout",
    notes: "Notes",
    tags: "Tags",
    links: "Links",
    countsTemplate: "{n} nodes \xB7 {m} edges",
    lensAll: "All",
    lensTag: "Tags",
    lensFolder: "Folders",
    spacing: "Spacing",
    zoom: "Zoom",
    articles: "Writing",
    about: "About",
    themeToggle: "Toggle light / dark mode",
    filtersToggle: "Filters",
    controls: "Controls",
    audioStop: "Stop music",
    audioPlay: "Play music",
    folderRoot: "Root",
    previewHint: "Click to inspect connections",
    previewTagTemplate: "{n} notes",
    inspectOpen: "Read note",
    inspectOpenExternal: "Open",
    inspectConnected: "Connected",
    inspectClose: "Close",
    inspectEmpty: "No direct connections",
    folders: "Folders",
    tune: "Tune",
    nodeSize: "Node size",
    edgeWidth: "Edge width"
  };
}
function slugToAbsHref(slug) {
  const isIndex = slug === "index" || slug.endsWith("/index");
  const withoutIndex = isIndex ? slug.replace(/\/?index$/, "") : slug;
  if (withoutIndex.length === 0) {
    return "/";
  }
  const encoded = withoutIndex.split("/").map((segment) => encodeURIComponent(segment)).join("/");
  return isIndex ? `/${encoded}/` : `/${encoded}`;
}
function switchAriaLabel(targetLocaleId, targetName) {
  if (targetLocaleId === "en") {
    return "Switch to English";
  }
  if (targetLocaleId === "ko") {
    return "\uD55C\uAD6D\uC5B4\uB85C \uC804\uD658";
  }
  return `Switch to ${targetName}`;
}
function findLocaleSlug(allFiles, translationKey, localeId) {
  const match = allFiles.find((file) => {
    const multilingual = file.multilingual;
    return multilingual?.translationKey === translationKey && multilingual?.locale === localeId && typeof file.slug === "string" && file.slug !== "index";
  });
  return typeof match?.slug === "string" ? match.slug : null;
}
function localeToggleLink(allFiles, locales, currentLocale, translationKey) {
  const other = locales.find((locale) => locale.id !== currentLocale);
  if (!other) {
    return null;
  }
  const slug = findLocaleSlug(allFiles, translationKey, other.id) ?? findLocaleSlug(allFiles, "home", other.id);
  if (!slug) {
    return null;
  }
  const label = other.id === "en" ? "English" : other.id === "ko" ? "Korean" : other.nativeName ?? other.id;
  return {
    id: other.id,
    href: slugToAbsHref(slug),
    label,
    ariaLabel: switchAriaLabel(other.id, label)
  };
}
function pathToRoot(slug) {
  let rootPath = slug.split("/").filter((segment) => segment !== "").slice(0, -1).map(() => "..").join("/");
  if (rootPath.length === 0) {
    rootPath = ".";
  }
  return rootPath;
}
var defaultComponentOptions = {
  indexSource: "contentIndex"
};
var GraphLanding_default = ((pageOptions) => {
  const options = { ...defaultComponentOptions, ...pageOptions };
  const GraphLandingConstructor = () => {
    const GraphLanding = ({ fileData, cfg, allFiles }) => {
      const siteTitle = cfg.pageTitle ?? "ChernoWiki";
      const multilingual = fileData.multilingual;
      const slug = typeof fileData.slug === "string" ? fileData.slug : "";
      const multilingualCfg = cfg.multilingual;
      const locales = multilingualCfg?.locales ?? [];
      const localePrefixes = locales.map((locale) => locale.id).join(",");
      const slugPrefix = slug.includes("/") ? slug.split("/")[0] || void 0 : void 0;
      const localeId = multilingual?.locale ?? (slugPrefix && localePrefixes.length > 0 && localePrefixes.includes(slugPrefix) ? slugPrefix : void 0) ?? options.defaultLocale ?? "ko";
      const sourceLocale = multilingualCfg?.sourceLocale ?? options.defaultLocale ?? "ko";
      const copy = overlayCopyForLocale(localeId);
      const translationKey = multilingual?.translationKey ?? "graph";
      const localeToggle = localeToggleLink(allFiles, locales, localeId, translationKey);
      const homeSlug = findLocaleSlug(allFiles, "home", localeId);
      const homeHref = homeSlug ? slugToAbsHref(homeSlug) : "/";
      const graphIndexPath = joinSegments(pathToRoot(slug), "static/graphIndex.json");
      return /* @__PURE__ */ u2(
        "div",
        {
          class: "graph-landing",
          "data-rail-open": "false",
          "data-locale": localeId,
          "data-source-locale": sourceLocale,
          "data-locale-prefixes": localePrefixes,
          "data-index-source": options.indexSource,
          "data-graph-index-path": graphIndexPath,
          "data-max-rendered-nodes": options.maxRenderedNodes,
          "data-expand-hops": options.maxRenderedNodes !== void 0 ? options.expandHops : void 0,
          "data-tag-cooc-disabled": options.tagCooccurrence === false ? "true" : void 0,
          "data-tag-cooc-max-tags-per-note": options.tagCooccurrence ? options.tagCooccurrence.maxTagsPerNote : void 0,
          "data-tag-cooc-max-edges": options.tagCooccurrence ? options.tagCooccurrence.maxEdges : void 0,
          "data-graph-render-mode": options.renderMode === "3d" ? "3d" : void 0,
          "data-graph-layout-freeze-after-warmup": options.layout?.freezeAfterWarmup ? "true" : void 0,
          "data-graph-layout-warmup-ticks": options.layout?.warmupTicks,
          "data-graph-layout-cooldown-ticks": options.layout?.cooldownTicks,
          "data-graph-layout-charge-theta": options.layout?.chargeTheta,
          "data-graph-layout-incremental-warmup": options.layout?.incrementalWarmup ? "true" : void 0,
          "data-graph-lod-label-distance": options.lod?.labelDistance,
          "data-graph-lod-dot-distance": options.lod?.dotDistance,
          "data-graph-lod-cull-distance": options.lod?.cullDistance,
          "data-graph-lod-fog": options.lod?.fog ? "true" : void 0,
          "data-graph-lod-node-resolution": options.lod?.nodeResolution,
          "data-graph-lod-link-resolution": options.lod?.linkResolution,
          "data-graph-lod-share-link-resources": options.lod?.shareLinkResources ? "true" : void 0,
          "data-graph-interaction-incremental-repaint": options.interaction?.incrementalRepaint ? "true" : void 0,
          "data-graph-ambient-video-id": options.ambientVideoId,
          "data-graph-default-locale": options.defaultLocale,
          "data-counts-template": copy.countsTemplate,
          "data-folder-root-label": copy.folderRoot,
          "data-legend-notes": copy.notes,
          "data-legend-tags": copy.tags,
          "data-legend-links": copy.links,
          "data-legend-folders": copy.folders,
          "data-preview-tag-template": copy.previewTagTemplate,
          "data-inspect-read": copy.inspectOpen,
          "data-inspect-open-external": copy.inspectOpenExternal,
          "data-audio-stop": copy.audioStop,
          "data-audio-play": copy.audioPlay,
          "data-inspect-connected": copy.inspectConnected,
          "data-inspect-empty": copy.inspectEmpty,
          children: [
            /* @__PURE__ */ u2("link", { rel: "preconnect", href: "https://esm.sh", crossOrigin: "anonymous" }),
            /* @__PURE__ */ u2("link", { rel: "dns-prefetch", href: "https://esm.sh" }),
            /* @__PURE__ */ u2("section", { class: "graph-landing__hero", "aria-label": "Knowledge graph", children: [
              /* @__PURE__ */ u2("div", { class: "graph-landing__canvas", id: "graph-landing-mount" }),
              /* @__PURE__ */ u2("div", { class: "graph-landing__overlay", children: [
                /* @__PURE__ */ u2("div", { class: "graph-landing__chrome", children: [
                  /* @__PURE__ */ u2("div", { class: "graph-landing__title-block graph-landing__title-block--chrome", children: /* @__PURE__ */ u2("a", { class: "graph-landing__title", href: homeHref, children: siteTitle }) }),
                  /* @__PURE__ */ u2("nav", { class: "graph-landing__top-right", "aria-label": "Site", children: [
                    /* @__PURE__ */ u2("a", { class: "graph-landing__nav-link", href: "/mine/", children: "\u0426\u0438\u0442\u0430\u0442\u043D\u0438\u043A" }),
                    /* @__PURE__ */ u2("a", { class: "graph-landing__nav-link", href: "/forge/", children: "\u0417\u0430\u043C\u0435\u0442\u043A\u0438" }),
                    /* @__PURE__ */ u2("a", { class: "graph-landing__nav-link", href: "/meta/", children: "\u041C\u0435\u0442\u0430" }),
                    localeToggle ? /* @__PURE__ */ u2(
                      "a",
                      {
                        class: "graph-landing__locale-toggle",
                        href: localeToggle.href,
                        lang: localeToggle.id,
                        hreflang: localeToggle.id,
                        "aria-label": localeToggle.ariaLabel,
                        "data-preferred-locale": localeToggle.id,
                        children: localeToggle.label
                      }
                    ) : null,
                    /* @__PURE__ */ u2(
                      "button",
                      {
                        type: "button",
                        class: "graph-landing__icon-btn",
                        "data-graph-theme": true,
                        "aria-label": copy.themeToggle,
                        children: [
                          /* @__PURE__ */ u2(
                            "svg",
                            {
                              class: "graph-landing__icon graph-landing__icon--sun",
                              width: "18",
                              height: "18",
                              viewBox: "0 0 24 24",
                              "aria-hidden": "true",
                              focusable: "false",
                              children: [
                                /* @__PURE__ */ u2(
                                  "circle",
                                  {
                                    cx: "12",
                                    cy: "12",
                                    r: "4.4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    "stroke-width": "1.6"
                                  }
                                ),
                                /* @__PURE__ */ u2(
                                  "path",
                                  {
                                    fill: "none",
                                    stroke: "currentColor",
                                    "stroke-width": "1.6",
                                    "stroke-linecap": "round",
                                    d: "M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7"
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ u2(
                            "svg",
                            {
                              class: "graph-landing__icon graph-landing__icon--moon",
                              width: "18",
                              height: "18",
                              viewBox: "0 0 24 24",
                              "aria-hidden": "true",
                              focusable: "false",
                              children: /* @__PURE__ */ u2(
                                "path",
                                {
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "1.6",
                                  "stroke-linejoin": "round",
                                  d: "M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"
                                }
                              )
                            }
                          )
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ u2(
                  "button",
                  {
                    type: "button",
                    class: "graph-landing__scrim",
                    "data-graph-rail-scrim": true,
                    "aria-label": copy.inspectClose,
                    hidden: true
                  }
                ),
                /* @__PURE__ */ u2(
                  "button",
                  {
                    type: "button",
                    class: "graph-landing__rail-toggle",
                    "data-graph-rail-toggle": true,
                    "aria-expanded": "false",
                    "aria-controls": "graph-landing-rail",
                    "aria-label": copy.controls,
                    title: copy.controls,
                    children: /* @__PURE__ */ u2(
                      "svg",
                      {
                        width: "18",
                        height: "18",
                        viewBox: "0 0 18 18",
                        "aria-hidden": "true",
                        focusable: "false",
                        children: /* @__PURE__ */ u2(
                          "path",
                          {
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "1.6",
                            "stroke-linecap": "round",
                            d: "M3 5h12M3 9h12M3 13h12"
                          }
                        )
                      }
                    )
                  }
                ),
                /* @__PURE__ */ u2(
                  "div",
                  {
                    class: "graph-landing__rail",
                    id: "graph-landing-rail",
                    "aria-hidden": "true",
                    ...{ onwheel: "event.stopPropagation()" },
                    children: [
                      /* @__PURE__ */ u2("div", { class: "graph-landing__title-block graph-landing__title-block--rail", children: [
                        /* @__PURE__ */ u2("p", { class: "graph-landing__title", children: siteTitle }),
                        /* @__PURE__ */ u2("p", { class: "graph-landing__counts", "data-graph-counts": true, children: copy.countsTemplate.replace("{n}", "\u2013").replace("{m}", "\u2013") })
                      ] }),
                      /* @__PURE__ */ u2("div", { class: "graph-landing__lenses", role: "tablist", "aria-label": "Graph lens", children: [
                        /* @__PURE__ */ u2(
                          "button",
                          {
                            type: "button",
                            class: "graph-landing__chip",
                            "data-graph-lens": "all",
                            "aria-pressed": "true",
                            children: copy.lensAll
                          }
                        ),
                        /* @__PURE__ */ u2(
                          "button",
                          {
                            type: "button",
                            class: "graph-landing__chip",
                            "data-graph-lens": "tag",
                            "aria-pressed": "false",
                            children: copy.lensTag
                          }
                        ),
                        /* @__PURE__ */ u2(
                          "button",
                          {
                            type: "button",
                            class: "graph-landing__chip",
                            "data-graph-lens": "folder",
                            "aria-pressed": "false",
                            children: copy.lensFolder
                          }
                        )
                      ] }),
                      /* @__PURE__ */ u2("div", { class: "graph-landing__tags", children: [
                        /* @__PURE__ */ u2(
                          "p",
                          {
                            class: "graph-landing__section-label graph-landing__section-label--tags",
                            "data-graph-facet-label": true,
                            children: copy.tags
                          }
                        ),
                        /* @__PURE__ */ u2("ul", { class: "graph-landing__tag-list", "data-graph-tags": true })
                      ] }),
                      /* @__PURE__ */ u2("div", { class: "graph-landing__utils", children: [
                        /* @__PURE__ */ u2("div", { class: "graph-landing__tune", children: [
                          /* @__PURE__ */ u2("div", { class: "graph-landing__tune-head", children: [
                            /* @__PURE__ */ u2("p", { class: "graph-landing__section-label", children: copy.tune }),
                            /* @__PURE__ */ u2("div", { class: "graph-landing__tools", children: [
                              /* @__PURE__ */ u2(
                                "button",
                                {
                                  type: "button",
                                  class: "graph-landing__tool",
                                  "data-graph-relayout": true,
                                  "aria-label": copy.relayout,
                                  title: copy.relayout,
                                  children: /* @__PURE__ */ u2(
                                    "svg",
                                    {
                                      width: "15",
                                      height: "15",
                                      viewBox: "0 0 16 16",
                                      "aria-hidden": "true",
                                      focusable: "false",
                                      children: [
                                        /* @__PURE__ */ u2(
                                          "path",
                                          {
                                            fill: "none",
                                            stroke: "currentColor",
                                            "stroke-width": "1.4",
                                            "stroke-linecap": "round",
                                            d: "M13 8A5 5 0 1 1 11.6 4.4"
                                          }
                                        ),
                                        /* @__PURE__ */ u2("path", { fill: "currentColor", d: "M13.2 2.2v3.1h-3.1z" })
                                      ]
                                    }
                                  )
                                }
                              ),
                              /* @__PURE__ */ u2(
                                "button",
                                {
                                  type: "button",
                                  class: "graph-landing__tool",
                                  "data-graph-labels": true,
                                  "data-label-show": copy.labelsShow,
                                  "data-label-hide": copy.labelsHide,
                                  "aria-label": copy.labelsShow,
                                  title: copy.labelsShow,
                                  "aria-pressed": "false",
                                  children: /* @__PURE__ */ u2(
                                    "svg",
                                    {
                                      width: "15",
                                      height: "15",
                                      viewBox: "0 0 16 16",
                                      "aria-hidden": "true",
                                      focusable: "false",
                                      children: /* @__PURE__ */ u2(
                                        "path",
                                        {
                                          fill: "none",
                                          stroke: "currentColor",
                                          "stroke-width": "1.4",
                                          "stroke-linecap": "round",
                                          d: "M3 12.5 6.6 3.5h2.8L13 12.5M4.6 9.2h6.8"
                                        }
                                      )
                                    }
                                  )
                                }
                              )
                            ] })
                          ] }),
                          /* @__PURE__ */ u2("label", { class: "graph-landing__slider", children: [
                            /* @__PURE__ */ u2("span", { children: copy.edgeWidth }),
                            /* @__PURE__ */ u2(
                              "input",
                              {
                                type: "range",
                                min: "50",
                                max: "180",
                                value: "100",
                                "data-graph-edge-scale": true,
                                "aria-label": copy.edgeWidth
                              }
                            )
                          ] }),
                          /* @__PURE__ */ u2("label", { class: "graph-landing__slider", children: [
                            /* @__PURE__ */ u2("span", { children: copy.nodeSize }),
                            /* @__PURE__ */ u2(
                              "input",
                              {
                                type: "range",
                                min: "50",
                                max: "150",
                                value: "70",
                                "data-graph-node-scale": true,
                                "aria-label": copy.nodeSize
                              }
                            )
                          ] }),
                          /* @__PURE__ */ u2("label", { class: "graph-landing__slider", children: [
                            /* @__PURE__ */ u2("span", { children: copy.spacing }),
                            /* @__PURE__ */ u2(
                              "input",
                              {
                                type: "range",
                                min: "50",
                                max: "150",
                                value: "100",
                                "data-graph-spread": true,
                                "aria-label": copy.spacing
                              }
                            )
                          ] }),
                          /* @__PURE__ */ u2("label", { class: "graph-landing__slider", children: [
                            /* @__PURE__ */ u2("span", { children: copy.zoom }),
                            /* @__PURE__ */ u2(
                              "input",
                              {
                                type: "range",
                                min: "60",
                                max: "170",
                                value: "100",
                                "data-graph-zoom": true,
                                "aria-label": copy.zoom
                              }
                            )
                          ] })
                        ] }),
                        /* @__PURE__ */ u2("div", { class: "graph-landing__legend", "data-graph-legend": true, children: [
                          /* @__PURE__ */ u2("span", { class: "graph-landing__legend-item", children: [
                            /* @__PURE__ */ u2(
                              "span",
                              {
                                class: "graph-landing__dot graph-landing__dot--note",
                                "aria-hidden": "true"
                              }
                            ),
                            copy.notes
                          ] }),
                          /* @__PURE__ */ u2("span", { class: "graph-landing__legend-item", children: [
                            /* @__PURE__ */ u2(
                              "span",
                              {
                                class: "graph-landing__dot graph-landing__dot--tag",
                                "aria-hidden": "true"
                              }
                            ),
                            copy.tags
                          ] }),
                          /* @__PURE__ */ u2("span", { class: "graph-landing__legend-item", children: [
                            /* @__PURE__ */ u2(
                              "span",
                              {
                                class: "graph-landing__dot graph-landing__dot--external",
                                "aria-hidden": "true"
                              }
                            ),
                            copy.links
                          ] })
                        ] })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ u2("aside", { class: "graph-landing__preview", "data-graph-preview": true, hidden: true, "aria-live": "polite", children: [
                  /* @__PURE__ */ u2("p", { class: "graph-landing__preview-chip", "data-graph-preview-chip": true }),
                  /* @__PURE__ */ u2("p", { class: "graph-landing__preview-title", "data-graph-preview-title": true }),
                  /* @__PURE__ */ u2("p", { class: "graph-landing__preview-excerpt", "data-graph-preview-excerpt": true }),
                  /* @__PURE__ */ u2("p", { class: "graph-landing__preview-hint", children: copy.previewHint })
                ] }),
                /* @__PURE__ */ u2(
                  "aside",
                  {
                    class: "graph-landing__inspect",
                    "data-graph-inspect": true,
                    hidden: true,
                    ...{ onwheel: "event.stopPropagation()" },
                    children: [
                      /* @__PURE__ */ u2("div", { class: "graph-landing__inspect-bar", children: [
                        /* @__PURE__ */ u2("p", { class: "graph-landing__inspect-chip", "data-graph-inspect-chip": true }),
                        /* @__PURE__ */ u2(
                          "button",
                          {
                            type: "button",
                            class: "graph-landing__inspect-close",
                            "data-graph-inspect-close": true,
                            "aria-label": copy.inspectClose,
                            children: copy.inspectClose
                          }
                        )
                      ] }),
                      /* @__PURE__ */ u2("h2", { class: "graph-landing__inspect-title", "data-graph-inspect-title": true }),
                      /* @__PURE__ */ u2("p", { class: "graph-landing__inspect-excerpt", "data-graph-inspect-excerpt": true }),
                      /* @__PURE__ */ u2("ul", { class: "graph-landing__inspect-tags", "data-graph-inspect-tags": true }),
                      /* @__PURE__ */ u2("p", { class: "graph-landing__inspect-section", "data-graph-inspect-connected-label": true, children: copy.inspectConnected }),
                      /* @__PURE__ */ u2("ul", { class: "graph-landing__inspect-links", "data-graph-inspect-connected": true }),
                      /* @__PURE__ */ u2("a", { class: "graph-landing__inspect-open", "data-graph-inspect-open": true, hidden: true, children: copy.inspectOpen })
                    ]
                  }
                )
              ] })
            ] })
          ]
        }
      );
    };
    GraphLanding.css = graph_landing_default;
    GraphLanding.afterDOMLoaded = graph_landing_inline_default;
    return GraphLanding;
  };
  return GraphLandingConstructor;
});

// src/pageType.ts
var defaultOptions = {
  indexSource: "contentIndex"
};
var graphPageMatcher = ({ fileData }) => {
  const frontmatter = fileData.frontmatter;
  const translationKey = frontmatter?.translationKey;
  return translationKey === "graph" || translationKey === "home";
};
var GraphLandingPage = (userOpts) => {
  const options = { ...defaultOptions, ...userOpts };
  const instance = {
    name: "GraphLanding",
    priority: 20,
    match: graphPageMatcher,
    layout: "graph",
    frame: "minimal",
    body: GraphLanding_default(options),
    skipContentIndexFetch: options.indexSource === "graphIndex"
  };
  return instance;
};
var pageType_default = GraphLandingPage;

export { pageType_default as default };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map