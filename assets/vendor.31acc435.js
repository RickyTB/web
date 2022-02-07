function M(){}const we=t=>t;function jt(t,e){for(const n in e)t[n]=e[n];return t}function Ge(t){return t()}function Ke(){return Object.create(null)}function k(t){t.forEach(Ge)}function be(t){return typeof t=="function"}function hs(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ut(t){return Object.keys(t).length===0}function fs(t,e,n,i){if(t){const s=Ye(t,e,n,i);return t[0](s)}}function Ye(t,e,n,i){return t[1]&&i?jt(n.ctx.slice(),t[1](i(e))):n.ctx}function ds(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],a=Math.max(e.dirty.length,s.length);for(let c=0;c<a;c+=1)r[c]=e.dirty[c]|s[c];return r}return e.dirty|s}return e.dirty}function ps(t,e,n,i,s,r){if(s){const a=Ye(e,n,i,r);t.p(a,s)}}function ms(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function gs(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}const Xe=typeof window!="undefined";let We=Xe?()=>window.performance.now():()=>Date.now(),ve=Xe?t=>requestAnimationFrame(t):M;const R=new Set;function Ze(t){R.forEach(e=>{e.c(t)||(R.delete(e),e.f())}),R.size!==0&&ve(Ze)}function Je(t){let e;return R.size===0&&ve(Ze),{promise:new Promise(n=>{R.add(e={c:t,f:n})}),abort(){R.delete(e)}}}let ee=!1;function zt(){ee=!0}function qt(){ee=!1}function Bt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Ht(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const h=e[l];h.claim_order!==void 0&&o.push(h)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,h=(s>0&&e[n[s]].claim_order<=l?s+1:Bt(1,s,g=>e[n[g]].claim_order,l))-1;i[o]=n[h]+1;const d=h+1;n[d]=o,s=Math.max(d,s)}const r=[],a=[];let c=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(r.push(e[o-1]);c>=o;c--)a.push(e[c]);c--}for(;c>=0;c--)a.push(e[c]);r.reverse(),a.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<a.length;o++){for(;l<r.length&&a[o].claim_order>=r[l].claim_order;)l++;const h=l<r.length?r[l]:null;t.insertBefore(a[o],h)}}function Gt(t,e){t.appendChild(e)}function Qe(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Kt(t){const e=et("style");return Yt(Qe(t),e),e.sheet}function Yt(t,e){Gt(t.head||t,e)}function Xt(t,e){if(ee){for(Ht(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function _s(t,e,n){ee&&!n?Xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Wt(t){t.parentNode.removeChild(t)}function et(t){return document.createElement(t)}function Zt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Ee(t){return document.createTextNode(t)}function ys(){return Ee(" ")}function ws(){return Ee("")}function bs(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function vs(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Jt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Es(t,e){for(const n in e)Jt(t,n,e[n])}function Qt(t){return Array.from(t.childNodes)}function en(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function tt(t,e,n,i,s=!1){en(t);const r=(()=>{for(let a=t.claim_info.last_index;a<t.length;a++){const c=t[a];if(e(c)){const o=n(c);return o===void 0?t.splice(a,1):t[a]=o,s||(t.claim_info.last_index=a),c}}for(let a=t.claim_info.last_index-1;a>=0;a--){const c=t[a];if(e(c)){const o=n(c);return o===void 0?t.splice(a,1):t[a]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=a,c}}return i()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function nt(t,e,n,i){return tt(t,s=>s.nodeName===e,s=>{const r=[];for(let a=0;a<s.attributes.length;a++){const c=s.attributes[a];n[c.name]||r.push(c.name)}r.forEach(a=>s.removeAttribute(a))},()=>i(e))}function Is(t,e,n){return nt(t,e,n,et)}function Ss(t,e,n){return nt(t,e,n,Zt)}function tn(t,e){return tt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Ee(e),!0)}function Ts(t){return tn(t," ")}function As(t,e,n){t.classList[n?"add":"remove"](e)}function nn(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}const te=new Map;let ne=0;function sn(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function rn(t,e){const n={stylesheet:Kt(e),rules:{}};return te.set(t,n),n}function it(t,e,n,i,s,r,a,c=0){const o=16.666/i;let l=`{
`;for(let v=0;v<=1;v+=o){const Q=e+(n-e)*r(v);l+=v*100+`%{${a(Q,1-Q)}}
`}const h=l+`100% {${a(n,1-n)}}
}`,d=`__svelte_${sn(h)}_${c}`,g=Qe(t),{stylesheet:y,rules:b}=te.get(g)||rn(g,t);b[d]||(b[d]=!0,y.insertRule(`@keyframes ${d} ${h}`,y.cssRules.length));const T=t.style.animation||"";return t.style.animation=`${T?`${T}, `:""}${d} ${i}ms linear ${s}ms 1 both`,ne+=1,d}function Ie(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),ne-=s,ne||an())}function an(){ve(()=>{ne||(te.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),te.clear())})}let Se;function j(t){Se=t}const U=[],st=[],ie=[],rt=[],on=Promise.resolve();let Te=!1;function cn(){Te||(Te=!0,on.then(at))}function z(t){ie.push(t)}const Ae=new Set;let se=0;function at(){const t=Se;do{for(;se<U.length;){const e=U[se];se++,j(e),ln(e.$$)}for(j(null),U.length=0,se=0;st.length;)st.pop()();for(let e=0;e<ie.length;e+=1){const n=ie[e];Ae.has(n)||(Ae.add(n),n())}ie.length=0}while(U.length);for(;rt.length;)rt.pop()();Te=!1,Ae.clear(),j(t)}function ln(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}let q;function ot(){return q||(q=Promise.resolve(),q.then(()=>{q=null})),q}function re(t,e,n){t.dispatchEvent(nn(`${e?"intro":"outro"}${n}`))}const ae=new Set;let D;function $s(){D={r:0,c:[],p:D}}function Ns(){D.r||k(D.c),D=D.p}function un(t,e){t&&t.i&&(ae.delete(t),t.i(e))}function Cs(t,e,n,i){if(t&&t.o){if(ae.has(t))return;ae.add(t),D.c.push(()=>{ae.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const ct={duration:0};function Ps(t,e,n){let i=e(t,n),s=!1,r,a,c=0;function o(){r&&Ie(t,r)}function l(){const{delay:d=0,duration:g=300,easing:y=we,tick:b=M,css:T}=i||ct;T&&(r=it(t,0,1,g,d,y,T,c++)),b(0,1);const v=We()+d,Q=v+g;a&&a.abort(),s=!0,z(()=>re(t,!0,"start")),a=Je(ye=>{if(s){if(ye>=Q)return b(1,0),re(t,!0,"end"),o(),s=!1;if(ye>=v){const He=y((ye-v)/g);b(He,1-He)}}return s})}let h=!1;return{start(){h||(h=!0,Ie(t),be(i)?(i=i(),ot().then(l)):l())},invalidate(){h=!1},end(){s&&(o(),s=!1)}}}function Ds(t,e,n){let i=e(t,n),s=!0,r;const a=D;a.r+=1;function c(){const{delay:o=0,duration:l=300,easing:h=we,tick:d=M,css:g}=i||ct;g&&(r=it(t,1,0,l,o,h,g));const y=We()+o,b=y+l;z(()=>re(t,!1,"start")),Je(T=>{if(s){if(T>=b)return d(0,1),re(t,!1,"end"),--a.r||k(a.c),!1;if(T>=y){const v=h((T-y)/l);d(1-v,v)}}return s})}return be(i)?ot().then(()=>{i=i(),c()}):c(),{end(o){o&&i.tick&&i.tick(1,0),s&&(r&&Ie(t,r),s=!1)}}}function Os(t,e){const n={},i={},s={$$scope:1};let r=t.length;for(;r--;){const a=t[r],c=e[r];if(c){for(const o in a)o in c||(i[o]=1);for(const o in c)s[o]||(n[o]=c[o],s[o]=1);t[r]=c}else for(const o in a)s[o]=1}for(const a in i)a in n||(n[a]=void 0);return n}function ks(t){return typeof t=="object"&&t!==null?t:{}}function Rs(t){t&&t.c()}function Vs(t,e){t&&t.l(e)}function hn(t,e,n,i){const{fragment:s,on_mount:r,on_destroy:a,after_update:c}=t.$$;s&&s.m(e,n),i||z(()=>{const o=r.map(Ge).filter(be);a?a.push(...o):k(o),t.$$.on_mount=[]}),c.forEach(z)}function fn(t,e){const n=t.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function dn(t,e){t.$$.dirty[0]===-1&&(U.push(t),cn(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Fs(t,e,n,i,s,r,a,c=[-1]){const o=Se;j(t);const l=t.$$={fragment:null,ctx:null,props:r,update:M,not_equal:s,bound:Ke(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:Ke(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};a&&a(l.root);let h=!1;if(l.ctx=n?n(t,e.props||{},(d,g,...y)=>{const b=y.length?y[0]:g;return l.ctx&&s(l.ctx[d],l.ctx[d]=b)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](b),h&&dn(t,d)),g}):[],l.update(),h=!0,k(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){zt();const d=Qt(e.target);l.fragment&&l.fragment.l(d),d.forEach(Wt)}else l.fragment&&l.fragment.c();e.intro&&un(t.$$.fragment),hn(t,e.target,e.anchor,e.customElement),qt(),at()}j(o)}class xs{$destroy(){fn(this,1),this.$destroy=M}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="FirebaseError";class oe extends Error{constructor(e,n,i){super(n);this.code=e,this.customData=i,this.name=mn,Object.setPrototypeOf(this,oe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lt.prototype.create)}}class lt{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],a=r?gn(r,i):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new oe(s,c,i)}}function gn(t,e){return t.replace(_n,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const _n=/\{\$([^}]+)}/g;function $e(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],a=e[s];if(ut(r)&&ut(a)){if(!$e(r,a))return!1}else if(r!==a)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function ut(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t){return t&&t._delegate?t._delegate:t}class ce{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new pn;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bn(e))try{this.getOrInitializeService({instanceIdentifier:O})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=O){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=O){return this.instances.has(e)}getOptions(e=O){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);i===c&&a.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const a=this.instances.get(s);return a&&e(a,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:wn(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=O){return this.component?this.component.multipleInstances?e:O:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wn(t){return t===O?void 0:t}function bn(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yn(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var p;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(p||(p={}));const En={debug:p.DEBUG,verbose:p.VERBOSE,info:p.INFO,warn:p.WARN,error:p.ERROR,silent:p.SILENT},In=p.INFO,Sn={[p.DEBUG]:"log",[p.VERBOSE]:"log",[p.INFO]:"info",[p.WARN]:"warn",[p.ERROR]:"error"},Tn=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Sn[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ht{constructor(e){this.name=e,this._logLevel=In,this._logHandler=Tn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in p))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?En[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,p.DEBUG,...e),this._logHandler(this,p.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,p.VERBOSE,...e),this._logHandler(this,p.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,p.INFO,...e),this._logHandler(this,p.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,p.WARN,...e),this._logHandler(this,p.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,p.ERROR,...e),this._logHandler(this,p.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($n(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function $n(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ne="@firebase/app",ft="0.7.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce=new ht("@firebase/app"),Nn="@firebase/app-compat",Cn="@firebase/analytics-compat",Pn="@firebase/analytics",Dn="@firebase/app-check-compat",On="@firebase/app-check",kn="@firebase/auth",Rn="@firebase/auth-compat",Vn="@firebase/database",Fn="@firebase/database-compat",xn="@firebase/functions",Ln="@firebase/functions-compat",Mn="@firebase/installations",jn="@firebase/installations-compat",Un="@firebase/messaging",zn="@firebase/messaging-compat",qn="@firebase/performance",Bn="@firebase/performance-compat",Hn="@firebase/remote-config",Gn="@firebase/remote-config-compat",Kn="@firebase/storage",Yn="@firebase/storage-compat",Xn="@firebase/firestore",Wn="@firebase/firestore-compat",Zn="firebase",Jn="9.6.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="[DEFAULT]",Qn={[Ne]:"fire-core",[Nn]:"fire-core-compat",[Pn]:"fire-analytics",[Cn]:"fire-analytics-compat",[On]:"fire-app-check",[Dn]:"fire-app-check-compat",[kn]:"fire-auth",[Rn]:"fire-auth-compat",[Vn]:"fire-rtdb",[Fn]:"fire-rtdb-compat",[xn]:"fire-fn",[Ln]:"fire-fn-compat",[Mn]:"fire-iid",[jn]:"fire-iid-compat",[Un]:"fire-fcm",[zn]:"fire-fcm-compat",[qn]:"fire-perf",[Bn]:"fire-perf-compat",[Hn]:"fire-rc",[Gn]:"fire-rc-compat",[Kn]:"fire-gcs",[Yn]:"fire-gcs-compat",[Xn]:"fire-fst",[Wn]:"fire-fst-compat","fire-js":"fire-js",[Zn]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new Map,Pe=new Map;function ei(t,e){try{t.container.addComponent(e)}catch(n){Ce.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function De(t){const e=t.name;if(Pe.has(e))return Ce.debug(`There were multiple attempts to register component ${e}.`),!1;Pe.set(e,t);for(const n of le.values())ei(n,t);return!0}function ti(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},ue=new lt("app","Firebase",ni);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ce("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ue.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=Jn;function Ls(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:dt,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw ue.create("bad-app-name",{appName:String(i)});const s=le.get(i);if(s){if($e(t,s.options)&&$e(n,s.config))return s;throw ue.create("duplicate-app",{appName:i})}const r=new vn(i);for(const c of Pe.values())r.addComponent(c);const a=new ii(t,n,r);return le.set(i,a),a}function ri(t=dt){const e=le.get(t);if(!e)throw ue.create("no-app",{appName:t});return e}function V(t,e,n){var i;let s=(i=Qn[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),a=e.match(/\s|\//);if(r||a){const c=[`Unable to register library "${s}" with version "${e}":`];r&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ce.warn(c.join(" "));return}De(new ce(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t){De(new ce("platform-logger",e=>new An(e),"PRIVATE")),V(Ne,ft,t),V(Ne,ft,"esm2017"),V("fire-js","")}ai("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}w.UNAUTHENTICATED=new w(null),w.GOOGLE_CREDENTIALS=new w("google-credentials-uid"),w.FIRST_PARTY=new w("first-party-uid"),w.MOCK_USER=new w("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let F="9.6.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=new ht("@firebase/firestore");function he(t,...e){if(x.logLevel<=p.DEBUG){const n=e.map(Oe);x.debug(`Firestore (${F}): ${t}`,...n)}}function pt(t,...e){if(x.logLevel<=p.ERROR){const n=e.map(Oe);x.error(`Firestore (${F}): ${t}`,...n)}}function oi(t,...e){if(x.logLevel<=p.WARN){const n=e.map(Oe);x.warn(`Firestore (${F}): ${t}`,...n)}}function Oe(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t="Unexpected state"){const e=`FIRESTORE (${F}) INTERNAL ASSERTION FAILED: `+t;throw pt(e),new Error(e)}function H(t,e){t||E()}function ci(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="ok",li="cancelled",G="unknown",m="invalid-argument",ui="deadline-exceeded",hi="not-found",fi="permission-denied",ke="unauthenticated",di="resource-exhausted",L="failed-precondition",pi="aborted",mi="out-of-range",gi="unimplemented",_i="internal",yi="unavailable";class u extends oe{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(w.UNAUTHENTICATED))}shutdown(){}}class vi{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(H(typeof e.accessToken=="string"),new wi(e.accessToken,new w(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class Ei{constructor(e,n,i){this.type="FirstParty",this.user=w.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class Ii{constructor(e,n,i){this.t=e,this.i=n,this.o=i}getToken(){return Promise.resolve(new Ei(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(w.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Si{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ti{constructor(e){this.u=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(H(typeof e.token=="string"),new Si(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n,i,s,r,a,c,o){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.useFetchStreams=o}}class fe{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fe&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,n,i){n===void 0?n=0:n>e.length&&E(),i===void 0?i=e.length-n:i>e.length-n&&E(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return K.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof K?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),a=n.get(s);if(r<a)return-1;if(r>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class _ extends K{construct(e,n,i){return new _(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new u(m,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new _(n)}static emptyPath(){return new _([])}}const $i=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class I extends K{construct(e,n,i){return new I(e,n,i)}static isValidIdentifier(e){return $i.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),I.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new I(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new u(m,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new u(m,"Path has trailing escape character: "+e);const o=e[s+1];if(o!=="\\"&&o!=="."&&o!=="`")throw new u(m,"Path has invalid escape sequence: "+e);i+=o,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(i+=c,s++):(r(),s++)}if(r(),a)throw new u(m,"Unterminated ` in path: "+e);return new I(n)}static emptyPath(){return new I([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.path=e}static fromPath(e){return new A(_.fromString(e))}static fromName(e){return new A(_.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&_.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return _.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new A(new _(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t,e,n){if(!n)throw new u(m,`Function ${t}() cannot be called with an empty ${e}.`)}function _t(t){if(!A.isDocumentKey(t))throw new u(m,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yt(t){if(A.isDocumentKey(t))throw new u(m,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Re(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":E()}function Ni(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new u(m,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Re(t);throw new u(m,`Expected type '${e.name}', but it was: ${n}`)}}return t}function de(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt,f;function bt(t){if(t===void 0)return pt("RPC_ERROR","HTTP error has no status"),G;switch(t){case 200:return mt;case 400:return L;case 401:return ke;case 403:return fi;case 404:return hi;case 409:return pi;case 416:return mi;case 429:return di;case 499:return li;case 500:return G;case 501:return gi;case 503:return yi;case 504:return ui;default:return t>=200&&t<300?mt:t>=400&&t<500?L:t>=500&&t<600?_i:G}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(f=wt||(wt={}))[f.OK=0]="OK",f[f.CANCELLED=1]="CANCELLED",f[f.UNKNOWN=2]="UNKNOWN",f[f.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",f[f.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",f[f.NOT_FOUND=5]="NOT_FOUND",f[f.ALREADY_EXISTS=6]="ALREADY_EXISTS",f[f.PERMISSION_DENIED=7]="PERMISSION_DENIED",f[f.UNAUTHENTICATED=16]="UNAUTHENTICATED",f[f.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",f[f.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",f[f.ABORTED=10]="ABORTED",f[f.OUT_OF_RANGE=11]="OUT_OF_RANGE",f[f.UNIMPLEMENTED=12]="UNIMPLEMENTED",f[f.INTERNAL=13]="INTERNAL",f[f.UNAVAILABLE=14]="UNAVAILABLE",f[f.DATA_LOSS=15]="DATA_LOSS";class Pi extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.h=n+"://"+e.host,this.l="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}m(e,n,i,s,r){const a=this.p(e,n);he("RestConnection","Sending: ",a,i);const c={};return this.g(c,s,r),this.v(e,a,c,i).then(o=>(he("RestConnection","Received: ",o),o),o=>{throw oi("RestConnection",`${e} failed with error: `,o,"url: ",a,"request:",i),o})}T(e,n,i,s,r){return this.m(e,n,i,s,r)}g(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+F,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}p(e,n){const i=Ci[e];return`${this.h}/v1/${n}:${i}`}}{constructor(e,n){super(e),this.I=n}A(e,n){throw new Error("Not supported by FetchConnection")}async v(e,n,i,s){const r=JSON.stringify(s);let a;try{a=await this.I(n,{method:"POST",headers:i,body:r})}catch(c){throw new u(bt(c.status),"Request failed with error: "+c.statusText)}if(!a.ok)throw new u(bt(a.status),"Request failed with error: "+a.statusText);return a.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=Di(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function Y(t,e){return t<e?-1:t>e?1:0}function vt(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new u(m,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new u(m,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new u(m,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new u(m,"Timestamp seconds out of range: "+e)}static now(){return $.fromMillis(Date.now())}static fromDate(e){return $.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new $(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ve(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.fields=e,e.sort(I.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vt(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new N(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new N(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}N.EMPTY_BYTE_STRING=new N("");const ki=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fe(t){if(H(!!t),typeof t=="string"){let e=0;const n=ki.exec(t);if(H(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:S(t.seconds),nanos:S(t.nanos)}}function S(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function St(t){return typeof t=="string"?N.fromBase64String(t):N.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Tt(t){const e=Fe(t.mapValue.fields.__local_write_time__.timestampValue);return new $(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ri(t)?4:10:E()}function xe(t,e){if(t===e)return!0;const n=At(t);if(n!==At(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Tt(t).isEqual(Tt(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=Fe(i.timestampValue),a=Fe(s.timestampValue);return r.seconds===a.seconds&&r.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return St(i.bytesValue).isEqual(St(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return S(i.geoPointValue.latitude)===S(s.geoPointValue.latitude)&&S(i.geoPointValue.longitude)===S(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return S(i.integerValue)===S(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=S(i.doubleValue),a=S(s.doubleValue);return r===a?de(r)===de(a):isNaN(r)&&isNaN(a)}return!1}(t,e);case 9:return vt(t.arrayValue.values||[],e.arrayValue.values||[],xe);case 10:return function(i,s){const r=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Et(r)!==Et(a))return!1;for(const c in r)if(r.hasOwnProperty(c)&&(a[c]===void 0||!xe(r[c],a[c])))return!1;return!0}(t,e);default:return E()}}function Le(t){return!!t&&"mapValue"in t}function X(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ve(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=X(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=X(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.value=e}static empty(){return new pe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Le(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=X(n)}setAll(e){let n=I.emptyPath(),i={},s=[];e.forEach((a,c)=>{if(!n.isImmediateParentOf(c)){const o=this.getFieldsMap(n);this.applyChanges(o,i,s),i={},s=[],n=c.popLast()}a?i[c.lastSegment()]=X(a):s.push(c.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());Le(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xe(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Le(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Ve(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new pe(X(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n=null,i=[],s=[],r=null,a="F",c=null,o=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=a,this.startAt=c,this.endAt=o,this.$=null,this.S=null,this.startAt,this.endAt}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!de(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):function(n,i){if(n.F){if(isNaN(i))return{doubleValue:"NaN"};if(i===1/0)return{doubleValue:"Infinity"};if(i===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:de(i)?"-0":i}}(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(){this._=void 0}}class xi extends me{}class Li extends me{constructor(e){super(),this.elements=e}}class Mi extends me{constructor(e){super(),this.elements=e}}class ji extends me{constructor(e,n){super(),this.q=e,this.O=n}}class W{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new W}static exists(e){return new W(void 0,e)}static updateTime(e){return new W(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class ge{}class $t extends ge{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}}class Nt extends ge{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}}class Ui extends ge{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class zi extends ge{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}class qi{constructor(e,n){this.databaseId=e,this.F=n}}function Me(t,e){return t.F?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bi(t,e){return t.F?e.toBase64():e.toUint8Array()}function Hi(t,e){return Me(t,e.toTimestamp())}function Ct(t,e){return function(n){return new _(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function je(t,e){return Ct(t.databaseId,e.path)}function Gi(t){return new _(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Pt(t,e,n){return{name:je(t,e),fields:n.value.mapValue.fields}}function Ki(t,e){let n;if(e instanceof $t)n={update:Pt(t,e.key,e.value)};else if(e instanceof Ui)n={delete:je(t,e.key)};else if(e instanceof Nt)n={update:Pt(t,e.key,e.data),updateMask:Yi(e.fieldMask)};else{if(!(e instanceof zi))return E();n={verify:je(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const a=r.transform;if(a instanceof xi)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Li)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Mi)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ji)return{fieldPath:r.field.canonicalString(),increment:a.O};throw E()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Hi(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:E()}(t,e.precondition)),n}function Yi(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t){return new qi(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.K=i,this.q=s,this.J=!1}X(){if(this.J)throw new u(L,"The client has already been terminated.")}m(e,n,i){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.K.m(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===ke&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new u(G,s.toString())})}T(e,n,i){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.K.T(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===ke&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new u(G,s.toString())})}terminate(){this.J=!0}}async function Wi(t,e){const n=ci(t),i=Gi(n.q)+"/documents",s={writes:e.map(r=>Ki(n.q,r))};await n.m("Commit",i,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=new Map;function Zi(t){if(t._terminated)throw new u(L,"The client has already been terminated.");if(!Z.has(t)){he("ComponentProvider","Initializing Datastore");const r=function(o){return new Pi(o,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",i=t._persistenceKey,s=t._freezeSettings(),new Ai(e,n,i,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams))),a=Ue(t._databaseId),c=function(o,l,h,d){return new Xi(o,l,h,d)}(t._authCredentials,t._appCheckCredentials,r,a);Z.set(t,c)}var e,n,i,s;/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return Z.get(t)}class Dt{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new u(m,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new u(m,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(i,s,r,a){if(s===!0&&a===!0)throw new u(m,`${i} and ${r} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n,i){this._authCredentials=n,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dt({}),this._settingsFrozen=!1,e instanceof fe?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new u(m,'"projectId" not provided in firebase.initializeApp.');return new fe(s.options.projectId)}(e))}get app(){if(!this._app)throw new u(L,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new u(L,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dt(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new bi;switch(n.type){case"gapi":const i=n.client;return H(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new Ii(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new u(m,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Z.get(e);n&&(he("ComponentProvider","Removing Datastore"),Z.delete(e),n.terminate())}(this),Promise.resolve()}}function Ms(t=ri()){return ti(t,"firestore/lite").getImmediate()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new P(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new C(this.firestore,e,this._key)}}class qe{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new qe(this.firestore,e,this._query)}}class P extends qe{constructor(e,n,i){super(e,n,new Vi(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new C(this.firestore,null,new A(e))}withConverter(e){return new P(this.firestore,e,this._path)}}function js(t,e,...n){if(t=B(t),gt("collection","path",e),t instanceof ze){const i=_.fromString(e,...n);return yt(i),new P(t,null,i)}{if(!(t instanceof C||t instanceof P))throw new u(m,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(_.fromString(e,...n));return yt(i),new P(t.firestore,null,i)}}function Ji(t,e,...n){if(t=B(t),arguments.length===1&&(e=Oi.R()),gt("doc","path",e),t instanceof ze){const i=_.fromString(e,...n);return _t(i),new C(t,null,new A(i))}{if(!(t instanceof C||t instanceof P))throw new u(m,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(_.fromString(e,...n));return _t(i),new C(t.firestore,t instanceof P?t.converter:null,new A(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new u(m,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new I(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this._byteString=e}static fromBase64String(e){try{return new J(N.fromBase64String(e))}catch(n){throw new u(m,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new J(N.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new u(m,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new u(m,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=/^__.*__$/;class es{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Nt(e,this.data,this.fieldMask,n,this.fieldTransforms):new $t(e,this.data,n,this.fieldTransforms)}}function Vt(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw E()}}class Be{constructor(e,n,i,s,r,a){this.settings=e,this.databaseId=n,this.q=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Z(),this.fieldTransforms=r||[],this.fieldMask=a||[]}get path(){return this.settings.path}get tt(){return this.settings.tt}nt(e){return new Be(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.q,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}et(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.nt({path:i,rt:!1});return s.st(e),s}it(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.nt({path:i,rt:!1});return s.Z(),s}ot(e){return this.nt({path:void 0,rt:!0})}ut(e){return _e(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.at)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Z(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(e.length===0)throw this.ut("Document fields must not be empty");if(Vt(this.tt)&&Qi.test(e))throw this.ut('Document fields cannot begin and end with "__"')}}class ts{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.q=i||Ue(e)}ht(e,n,i,s=!1){return new Be({tt:e,methodName:n,at:i,path:I.emptyPath(),rt:!1,ct:s},this.databaseId,this.q,this.ignoreUndefinedProperties)}}function ns(t){const e=t._freezeSettings(),n=Ue(t._databaseId);return new ts(t._databaseId,!!e.ignoreUndefinedProperties,n)}function is(t,e,n,i,s,r={}){const a=t.ht(r.merge||r.mergeFields?2:0,e,n,s);Mt("Data must be an object, but it was:",a,i);const c=xt(i,a);let o,l;if(r.merge)o=new It(a.fieldMask),l=a.fieldTransforms;else if(r.mergeFields){const h=[];for(const d of r.mergeFields){const g=ss(e,d,n);if(!a.contains(g))throw new u(m,`Field '${g}' is specified in your field mask but missing from your input data.`);os(h,g)||h.push(g)}o=new It(h),l=a.fieldTransforms.filter(d=>o.covers(d.field))}else o=null,l=a.fieldTransforms;return new es(new pe(c),o,l)}function Ft(t,e){if(Lt(t=B(t)))return Mt("Unsupported field value:",e,t),xt(t,e);if(t instanceof kt)return function(n,i){if(!Vt(i.tt))throw i.ut(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ut(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.rt&&e.tt!==4)throw e.ut("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const a of n){let c=Ft(a,i.ot(r));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),r++}return{arrayValue:{values:s}}}(t,e)}return function(n,i){if((n=B(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Fi(i.q,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=$.fromDate(n);return{timestampValue:Me(i.q,s)}}if(n instanceof $){const s=new $(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Me(i.q,s)}}if(n instanceof Rt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof J)return{bytesValue:Bi(i.q,n._byteString)};if(n instanceof C){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i.ut(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ct(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.ut(`Unsupported field value: ${Re(n)}`)}(t,e)}function xt(t,e){const n={};return function(i){for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ve(t,(i,s)=>{const r=Ft(s,e.et(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function Lt(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $||t instanceof Rt||t instanceof J||t instanceof C||t instanceof kt)}function Mt(t,e,n){if(!Lt(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Re(n);throw i==="an object"?e.ut(t+" a custom object"):e.ut(t+" "+i)}}function ss(t,e,n){if((e=B(e))instanceof Ot)return e._internalPath;if(typeof e=="string")return as(t,e);throw _e("Field path arguments must be of type string or ",t,!1,void 0,n)}const rs=new RegExp("[~\\*/\\[\\]]");function as(t,e,n){if(e.search(rs)>=0)throw _e(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ot(...e.split("."))._internalPath}catch{throw _e(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _e(t,e,n,i,s){const r=i&&!i.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let o="";return(r||a)&&(o+=" (found",r&&(o+=` in field ${i}`),a&&(o+=` in document ${s}`),o+=")"),new u(m,c+t+o)}function os(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}function Us(t,e){const n=Ji(t=Ni(t,P)),i=cs(t.converter,e),s=is(ns(t.firestore),"addDoc",n._key,i,n.converter!==null,{});return Wi(Zi(t.firestore),[s.toMutation(n._key,W.exists(!1))]).then(()=>n)}(function(t){F=t})(`${si}_lite`),De(new ce("firestore/lite",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=new ze(n,new vi(t.getProvider("auth-internal")),new Ti(t.getProvider("app-check-internal")));return e&&i._setSettings(e),i},"PUBLIC")),V("firestore-lite","3.4.4",""),V("firestore-lite","3.4.4","esm2017");var ls="firebase",us="9.6.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */V(ls,us,"app");function zs(t,{delay:e=0,duration:n=400,easing:i=we}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:i,css:r=>`opacity: ${r*s}`}}async function qs(t,e,n){var i,s;const r=document.querySelectorAll(`astro-root[uid="${t}"]`),a=(s=(i=r[0].querySelector("astro-fragment"))==null?void 0:i.innerHTML)!=null?s:null,c=await n();for(const o of r)c(o,a)}async function Bs(t,e,n){var i,s;const r=document.querySelectorAll(`astro-root[uid="${t}"]`),a=(s=(i=r[0].querySelector("astro-fragment"))==null?void 0:i.innerHTML)!=null?s:null,c=async()=>{const l=await n();for(const h of r)l(h,a)},o=new IntersectionObserver(l=>{for(const h of l)if(!!h.isIntersecting){o.disconnect(),c();break}});for(const l of r)for(let h=0;h<l.children.length;h++){const d=l.children[h];o.observe(d)}}export{Ee as A,tn as B,bs as C,vs as D,$s as E,Ns as F,js as G,Rs as H,Vs as I,hn as J,fn as K,z as L,Ds as M,As as N,Ps as O,zs as P,qs as Q,Us as R,xs as S,Bs as T,ws as U,ks as V,jt as a,Zt as b,Ss as c,Qt as d,Wt as e,Es as f,_s as g,Os as h,Fs as i,gs as j,fs as k,et as l,ys as m,M as n,Is as o,Ts as p,Jt as q,Xt as r,hs as s,ms as t,ps as u,ds as v,un as w,Cs as x,Ls as y,Ms as z};
