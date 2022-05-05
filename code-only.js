(()=>{var dt=Object.create;var ye=Object.defineProperty;var ht=Object.getOwnPropertyDescriptor;var pt=Object.getOwnPropertyNames;var vt=Object.getPrototypeOf,gt=Object.prototype.hasOwnProperty;var D=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var xt=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of pt(t))!gt.call(e,o)&&o!==n&&ye(e,o,{get:()=>t[o],enumerable:!(r=ht(t,o))||r.enumerable});return e};var yt=(e,t,n)=>(n=e!=null?dt(vt(e)):{},xt(t||!e||!e.__esModule?ye(n,"default",{value:e,enumerable:!0}):n,e));var Le=D((yn,Ee)=>{Ee.exports={Other:0,CR:1<<0,LF:1<<1,Control:1<<2,Extend:1<<3,ZWJ:1<<4,Regional_Indicator:1<<5,Prepend:1<<6,SpacingMark:1<<7,L:1<<8,V:1<<9,T:1<<10,LV:1<<11,LVT:1<<12,Extended_Pictographic:1<<13}});var Te=D((mn,At)=>{At.exports={data:"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"}});var we=D((bn,Et)=>{Et.exports={data:"AAACAAAAAACAOAAAAbYBSf7t2S1IBEEYBuDVDZ7FYrQMNsFiu3hgEYOI0SCXRIUrB8JhEZtgs5gEg1GMFk02m82oGI02m+9xezCOczv/uwv3fvAwc/PzfXOzcdqzWdaBDdiGPdiHdjE+DS3RNDuCfsn8idQ/g3OH3BdwKf0e96/gumTfYcncLdzBPTzAo+RZ+f0Cr/AG7/AJX4738x1wtz9FO5PX/50n6UXMNdfg/0lERERERERERERERETpdedHBvDRql4nq0cXtW9af98qdRby0Vvp8K4W0V+C5Xw0t4J2bfjeBp3cnEu1brnnCTYNa7eKdz91XP7WO9Lb4GqRb7cY6xbtAdqeVOsY/QGcevw/tb6OT85YhvfKYEx9CMuxKsKnrs+eJtVInVvHJ0eVYVvTZk2siFVLOCjb61PTZX3MdVWEyP7fjzpmMxdzTyq2Ebue6x61nXRGnzndWpf1an7dXmGYE4Y1ptqqKsK1nu26Ju0ty+maV2Rpvk+qnDZjKUIobUiesdAQE/jmCTmHmsskpFZsVYbtmXRcaoSGUPomunW2derQhDPFjtT1Q/eb8vnm990fq35oHVt11bU9m89c7DNI8Qs="}});var Ve=D((An,Ne)=>{var J=0,Be=-3;function R(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function Lt(e,t){this.source=e,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=t,this.destLen=0,this.ltree=new R,this.dtree=new R}var De=new R,_e=new R,$=new Uint8Array(30),ee=new Uint16Array(30),Ue=new Uint8Array(30),ke=new Uint16Array(30),Tt=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Se=new R,L=new Uint8Array(288+32);function Me(e,t,n,r){var o,i;for(o=0;o<n;++o)e[o]=0;for(o=0;o<30-n;++o)e[o+n]=o/n|0;for(i=r,o=0;o<30;++o)t[o]=i,i+=1<<e[o]}function wt(e,t){var n;for(n=0;n<7;++n)e.table[n]=0;for(e.table[7]=24,e.table[8]=152,e.table[9]=112,n=0;n<24;++n)e.trans[n]=256+n;for(n=0;n<144;++n)e.trans[24+n]=n;for(n=0;n<8;++n)e.trans[24+144+n]=280+n;for(n=0;n<112;++n)e.trans[24+144+8+n]=144+n;for(n=0;n<5;++n)t.table[n]=0;for(t.table[5]=32,n=0;n<32;++n)t.trans[n]=n}var Ie=new Uint16Array(16);function G(e,t,n,r){var o,i;for(o=0;o<16;++o)e.table[o]=0;for(o=0;o<r;++o)e.table[t[n+o]]++;for(e.table[0]=0,i=0,o=0;o<16;++o)Ie[o]=i,i+=e.table[o];for(o=0;o<r;++o)t[n+o]&&(e.trans[Ie[t[n+o]]++]=o)}function St(e){e.bitcount--||(e.tag=e.source[e.sourceIndex++],e.bitcount=7);var t=e.tag&1;return e.tag>>>=1,t}function T(e,t,n){if(!t)return n;for(;e.bitcount<24;)e.tag|=e.source[e.sourceIndex++]<<e.bitcount,e.bitcount+=8;var r=e.tag&65535>>>16-t;return e.tag>>>=t,e.bitcount-=t,r+n}function Q(e,t){for(;e.bitcount<24;)e.tag|=e.source[e.sourceIndex++]<<e.bitcount,e.bitcount+=8;var n=0,r=0,o=0,i=e.tag;do r=2*r+(i&1),i>>>=1,++o,n+=t.table[o],r-=t.table[o];while(r>=0);return e.tag=i,e.bitcount-=o,t.trans[n+r]}function It(e,t,n){var r,o,i,a,l,d;for(r=T(e,5,257),o=T(e,5,1),i=T(e,4,4),a=0;a<19;++a)L[a]=0;for(a=0;a<i;++a){var f=T(e,3,0);L[Tt[a]]=f}for(G(Se,L,0,19),l=0;l<r+o;){var h=Q(e,Se);switch(h){case 16:var v=L[l-1];for(d=T(e,2,3);d;--d)L[l++]=v;break;case 17:for(d=T(e,3,3);d;--d)L[l++]=0;break;case 18:for(d=T(e,7,11);d;--d)L[l++]=0;break;default:L[l++]=h;break}}G(t,L,0,r),G(n,L,r,o)}function Ce(e,t,n){for(;;){var r=Q(e,t);if(r===256)return J;if(r<256)e.dest[e.destLen++]=r;else{var o,i,a,l;for(r-=257,o=T(e,$[r],ee[r]),i=Q(e,n),a=e.destLen-T(e,Ue[i],ke[i]),l=a;l<a+o;++l)e.dest[e.destLen++]=e.dest[l]}}}function Ct(e){for(var t,n,r;e.bitcount>8;)e.sourceIndex--,e.bitcount-=8;if(t=e.source[e.sourceIndex+1],t=256*t+e.source[e.sourceIndex],n=e.source[e.sourceIndex+3],n=256*n+e.source[e.sourceIndex+2],t!==(~n&65535))return Be;for(e.sourceIndex+=4,r=t;r;--r)e.dest[e.destLen++]=e.source[e.sourceIndex++];return e.bitcount=0,J}function Bt(e,t){var n=new Lt(e,t),r,o,i;do{switch(r=St(n),o=T(n,2,0),o){case 0:i=Ct(n);break;case 1:i=Ce(n,De,_e);break;case 2:It(n,n.ltree,n.dtree),i=Ce(n,n.ltree,n.dtree);break;default:i=Be}if(i!==J)throw new Error("Data error")}while(!r);return n.destLen<n.dest.length?typeof n.dest.slice=="function"?n.dest.slice(0,n.destLen):n.dest.subarray(0,n.destLen):n.dest}wt(De,_e);Me($,ee,4,3);Me(Ue,ke,2,1);$[28]=0;ee[28]=258;Ne.exports=Bt});var Re=D((En,He)=>{var Dt=new Uint8Array(new Uint32Array([305419896]).buffer)[0]===18,ze=(e,t,n)=>{let r=e[t];e[t]=e[n],e[n]=r},_t=e=>{let t=e.length;for(let n=0;n<t;n+=4)ze(e,n,n+3),ze(e,n+1,n+2)},Ut=e=>{Dt&&_t(e)};He.exports={swap32LE:Ut}});var qe=D((Ln,Pe)=>{var Fe=Ve(),{swap32LE:kt}=Re(),re=6+5,M=5,Mt=re-M,Nt=65536>>re,Vt=1<<Mt,zt=Vt-1,q=2,Ht=1<<M,te=Ht-1,Oe=65536>>M,Rt=1024>>M,Ft=Oe+Rt,Ot=Ft,Pt=32,qt=Ot+Pt,Wt=1<<q,ne=class{constructor(t){let n=typeof t.readUInt32BE=="function"&&typeof t.slice=="function";if(n||t instanceof Uint8Array){let r;if(n)this.highStart=t.readUInt32LE(0),this.errorValue=t.readUInt32LE(4),r=t.readUInt32LE(8),t=t.slice(12);else{let o=new DataView(t.buffer);this.highStart=o.getUint32(0,!0),this.errorValue=o.getUint32(4,!0),r=o.getUint32(8,!0),t=t.subarray(12)}t=Fe(t,new Uint8Array(r)),t=Fe(t,new Uint8Array(r)),kt(t),this.data=new Uint32Array(t.buffer)}else({data:this.data,highStart:this.highStart,errorValue:this.errorValue}=t)}get(t){let n;return t<0||t>1114111?this.errorValue:t<55296||t>56319&&t<=65535?(n=(this.data[t>>M]<<q)+(t&te),this.data[n]):t<=65535?(n=(this.data[Oe+(t-55296>>M)]<<q)+(t&te),this.data[n]):t<this.highStart?(n=this.data[qt-Nt+(t>>re)],n=this.data[n+(t>>M&zt)],n=(n<<q)+(t&te),this.data[n]):this.data[this.data.length-Wt]}};Pe.exports=ne});var We=D((oe,se)=>{(function(e,t){typeof oe=="object"&&typeof se!="undefined"?se.exports=t():typeof define=="function"&&define.amd?define(t):function(){var n=e.Base64,r=t();r.noConflict=function(){return e.Base64=n,r},e.Meteor&&(Base64=r),e.Base64=r}()})(typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:oe,function(){"use strict";var e="3.7.2",t=e,n=typeof atob=="function",r=typeof btoa=="function",o=typeof Buffer=="function",i=typeof TextDecoder=="function"?new TextDecoder:void 0,a=typeof TextEncoder=="function"?new TextEncoder:void 0,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d=Array.prototype.slice.call(l),f=function(s){var c={};return s.forEach(function(x,b){return c[x]=b}),c}(d),h=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,v=String.fromCharCode.bind(String),u=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):function(s,c){return c===void 0&&(c=function(x){return x}),new Uint8Array(Array.prototype.slice.call(s,0).map(c))},m=function(s){return s.replace(/=/g,"").replace(/[+\/]/g,function(c){return c=="+"?"-":"_"})},E=function(s){return s.replace(/[^A-Za-z0-9\+\/]/g,"")},N=function(s){for(var c,x,b,k,I="",j=s.length%3,P=0;P<s.length;){if((x=s.charCodeAt(P++))>255||(b=s.charCodeAt(P++))>255||(k=s.charCodeAt(P++))>255)throw new TypeError("invalid character found");c=x<<16|b<<8|k,I+=d[c>>18&63]+d[c>>12&63]+d[c>>6&63]+d[c&63]}return j?I.slice(0,j-3)+"===".substring(j):I},_=r?function(s){return btoa(s)}:o?function(s){return Buffer.from(s,"binary").toString("base64")}:N,B=o?function(s){return Buffer.from(s).toString("base64")}:function(s){for(var c=4096,x=[],b=0,k=s.length;b<k;b+=c)x.push(v.apply(null,s.subarray(b,b+c)));return _(x.join(""))},S=function(s,c){return c===void 0&&(c=!1),c?m(B(s)):B(s)},U=function(s){if(s.length<2){var c=s.charCodeAt(0);return c<128?s:c<2048?v(192|c>>>6)+v(128|c&63):v(224|c>>>12&15)+v(128|c>>>6&63)+v(128|c&63)}else{var c=65536+(s.charCodeAt(0)-55296)*1024+(s.charCodeAt(1)-56320);return v(240|c>>>18&7)+v(128|c>>>12&63)+v(128|c>>>6&63)+v(128|c&63)}},Z=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,F=function(s){return s.replace(Z,U)},O=o?function(s){return Buffer.from(s,"utf8").toString("base64")}:a?function(s){return B(a.encode(s))}:function(s){return _(F(s))},V=function(s,c){return c===void 0&&(c=!1),c?m(O(s)):O(s)},le=function(s){return V(s,!0)},at=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,ct=function(s){switch(s.length){case 4:var c=(7&s.charCodeAt(0))<<18|(63&s.charCodeAt(1))<<12|(63&s.charCodeAt(2))<<6|63&s.charCodeAt(3),x=c-65536;return v((x>>>10)+55296)+v((x&1023)+56320);case 3:return v((15&s.charCodeAt(0))<<12|(63&s.charCodeAt(1))<<6|63&s.charCodeAt(2));default:return v((31&s.charCodeAt(0))<<6|63&s.charCodeAt(1))}},ue=function(s){return s.replace(at,ct)},fe=function(s){if(s=s.replace(/\s+/g,""),!h.test(s))throw new TypeError("malformed base64.");s+="==".slice(2-(s.length&3));for(var c,x="",b,k,I=0;I<s.length;)c=f[s.charAt(I++)]<<18|f[s.charAt(I++)]<<12|(b=f[s.charAt(I++)])<<6|(k=f[s.charAt(I++)]),x+=b===64?v(c>>16&255):k===64?v(c>>16&255,c>>8&255):v(c>>16&255,c>>8&255,c&255);return x},X=n?function(s){return atob(E(s))}:o?function(s){return Buffer.from(s,"base64").toString("binary")}:fe,de=o?function(s){return u(Buffer.from(s,"base64"))}:function(s){return u(X(s),function(c){return c.charCodeAt(0)})},he=function(s){return de(pe(s))},lt=o?function(s){return Buffer.from(s,"base64").toString("utf8")}:i?function(s){return i.decode(de(s))}:function(s){return ue(X(s))},pe=function(s){return E(s.replace(/[-_]/g,function(c){return c=="-"?"+":"/"}))},Y=function(s){return lt(pe(s))},ut=function(s){if(typeof s!="string")return!1;var c=s.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(c)||!/[^\s0-9a-zA-Z\-_]/.test(c)},ve=function(s){return{value:s,enumerable:!1,writable:!0,configurable:!0}},ge=function(){var s=function(c,x){return Object.defineProperty(String.prototype,c,ve(x))};s("fromBase64",function(){return Y(this)}),s("toBase64",function(c){return V(this,c)}),s("toBase64URI",function(){return V(this,!0)}),s("toBase64URL",function(){return V(this,!0)}),s("toUint8Array",function(){return he(this)})},xe=function(){var s=function(c,x){return Object.defineProperty(Uint8Array.prototype,c,ve(x))};s("toBase64",function(c){return S(this,c)}),s("toBase64URI",function(){return S(this,!0)}),s("toBase64URL",function(){return S(this,!0)})},ft=function(){ge(),xe()},H={version:e,VERSION:t,atob:X,atobPolyfill:fe,btoa:_,btoaPolyfill:N,fromBase64:Y,toBase64:V,encode:V,encodeURI:le,encodeURL:le,utob:F,btou:ue,decode:Y,isValid:ut,fromUint8Array:S,toUint8Array:he,extendString:ge,extendUint8Array:xe,extendBuiltins:ft};return H.Base64={},Object.keys(H).forEach(function(s){return H.Base64[s]=H[s]}),H})});var je=D((Tn,Ye)=>{var p=Le(),Zt=Te().data,Xt=we().data,Ze=qe(),Xe=We().Base64,Yt=new Ze(Xe.toUint8Array(Zt)),jt=new Ze(Xe.toUint8Array(Xt));function g(e,t){return(e&t)!==0}var w={Initial:0,ExtendOrZWJ:1,NotBoundary:2};function Kt(e,t){let n=e.length,r=0,o=w.Initial;for(let i=t;i+1<n;i++){let a=e[i+0],l=e[i+1];switch(g(a,p.Regional_Indicator)||(r=0),o){case w.NotBoundary:case w.Initial:g(a,p.Extended_Pictographic)?o=w.ExtendOrZWJ:o=w.Initial;break;case w.ExtendOrZWJ:g(a,p.Extend)?o=w.ExtendOrZWJ:g(a,p.ZWJ)&&g(l,p.Extended_Pictographic)?o=w.NotBoundary:o=w.Initial;break}if(!(g(a,p.CR)&&g(l,p.LF))){if(g(a,p.Control|p.CR|p.LF)||g(l,p.Control|p.CR|p.LF))return i+1-t;if(!(g(a,p.L)&&g(l,p.L|p.V|p.LV|p.LVT))&&!(g(a,p.LV|p.V)&&g(l,p.V|p.T))&&!(g(a,p.LVT|p.T)&&g(l,p.T))&&!g(l,p.Extend|p.ZWJ)&&!g(l,p.SpacingMark)&&!g(a,p.Prepend)&&o!==w.NotBoundary){if(g(a,p.Regional_Indicator)&&g(l,p.Regional_Indicator)&&r%2===0){r++;continue}return i+1-t}}}return n-t}Ye.exports=function(t){let n=[],r=[0],o=[];for(let i=0;i<t.length;){let a=t.codePointAt(i);o.push(Yt.get(a)|jt.get(a)),i+=a>65535?2:1,r.push(i)}for(let i=0;i<o.length;){let a=Kt(o,i),l=r[i],d=r[i+a];n.push(t.slice(l,d)),i+=a}return n}});var me="1lab.eqn_display",C=!1;window.localStorage.getItem(me)==="displayed"&&(C=!0);var be="1lab.serif_font",z=!1;window.localStorage.getItem(be)==="displayed"&&(z=!0);var mt=()=>{window.localStorage.setItem(me,C?"displayed":"hidden")},bt=()=>{window.localStorage.setItem(be,z?"displayed":"hidden")};window.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll("input.equations"),t=document.body;C?t.classList.add("show-equations"):t.classList.remove("show-equations"),z?t.classList.remove("sans-serif"):t.classList.add("sans-serif"),e.forEach(r=>{r.classList.contains("narrow-only")||(r.style.display="block"),r.checked!==void 0&&(r.checked=C),r.onclick=()=>{C=!C,C?t.classList.add("show-equations"):t.classList.remove("show-equations"),mt(),e.forEach(o=>{o.checked!==void 0&&(o.checked=C),C?o.innerText="Hide equations":o.innerText="Show equations"})}});let n=document.getElementById("toggle-fonts");n&&(n.checked=z,n.onclick=()=>{z=n.checked,z?t.classList.remove("sans-serif"):t.classList.add("sans-serif"),bt()})});var K=[],A=null,Ae=(e,t)=>()=>{let n=e.getAttribute("data-type");if(n&&(A&&(A.remove(),A=null),t)){A=document.createElement("div"),A.innerText=n,A.classList.add("typeTooltip","sourceCode"),document.body.appendChild(A);let r=e.getBoundingClientRect(),o=A.getBoundingClientRect();r.bottom+o.height+30>window.innerHeight?A.style.top=`calc(${e.offsetTop-o.height}px - 2em`:A.style.top=`${e.offsetTop+e.offsetHeight}px`,A.style.left=`${e.offsetLeft}px`}K.forEach(r=>{e.href==r.href&&(t?r.classList.add("hover-highlight"):r.classList.remove("hover-highlight"))})};document.addEventListener("DOMContentLoaded",async()=>{K=Array.from(document.getElementsByTagName("a")),K.forEach(e=>{e.hasAttribute("href")&&(e.onmouseover=Ae(e,!0),e.onmouseout=Ae(e,!1))})});var Je=yt(je(),1),Ke=/^\s+$/,Ge=/^[`~!@#$%^&*()\-=_+{}[\]\|\\;':",./<>?]+$/,ie={insertOrder:"insertOrder",bestMatch:"bestMatch"},Gt={keySelector:e=>e,threshold:.6,ignoreCase:!0,ignoreSymbols:!0,normalizeWhitespace:!0,returnMatchData:!1,useDamerau:!0,useSellers:!0,sortBy:ie.bestMatch},Qt=()=>{},Jt=e=>e instanceof Array?e:[e];function $e(e,t){let n=t.ignoreCase?e.toLocaleLowerCase():e,r=[],o=[],i=!0,a=0;for(let l of(0,Je.default)(n))Ke.lastIndex=0,Ge.lastIndex=0,t.normalizeWhitespace&&Ke.test(l)?i||(r.push(" "),o.push(a),i=!0):t.ignoreSymbols&&Ge.test(l)||(r.push(l.normalize()),o.push(a),i=!1),a+=l.length;for(o.push(e.length);r[r.length-1]===" ";)r.pop(),o.pop();return{original:e,normal:r,map:o}}function $t(e,t){return{index:t[e.start],length:t[e.end+1]-t[e.start]}}function et(e,t){if(t===0)return{index:0,length:0};let n=t;for(let r=e.length-2;r>0&&n>1;r--){let o=e[r];n=o[n]<o[n-1]?n:n-1}return{start:n-1,end:t-1}}function en(){return{start:0,end:0}}var tn=()=>!0,nn=(e,t)=>e<t;function rn(e,t){let n=new Array(e);for(let r=0;r<e;r++)n[r]=new Array(t),n[r][0]=r;for(let r=0;r<t;r++)n[0][r]=r;return n}function on(e,t){let n=new Array(e);n[0]=new Array(t).fill(0);for(let r=1;r<e;r++)n[r]=new Array(t),n[r][0]=r;return n}function tt(e,t,n,r,o){let i=n[r],a=n[r+1],l=e[r]===t[o]?0:1,d,f=a[o]+1;(d=i[o+1]+1)<f&&(f=d),(d=i[o]+l)<f&&(f=d),a[o+1]=f}function nt(e,t,n,r){for(let o=0;o<e.length;o++)tt(e,t,n,o,r)}function sn(e,t,n,r){if(r===0){nt(e,t,n,r);return}e.length>0&&tt(e,t,n,0,r);for(let o=1;o<e.length;o++){let i=n[o-1],a=n[o],l=n[o+1],d=e[o]===t[r]?0:1,f,h=l[r]+1;(f=a[r+1]+1)<h&&(h=f),(f=a[r]+d)<h&&(h=f),e[o]===t[r-1]&&e[o-1]===t[r]&&(f=i[r-1]+d)<h&&(h=f),l[r+1]=h}}function an(e,t,n){let r=e;for(let o=0;o<t.length;o++){let i=t[o];r.children[i]==null&&(r.children[i]={children:{},candidates:[],depth:0}),r.depth=Math.max(r.depth,t.length-o),r=r.children[i]}r.candidates.push(n)}function Qe(e,t,n,r){for(let o of n){let i=Jt(r.keySelector(o)).map((a,l)=>({index:t,keyIndex:l,item:o,normalized:$e(a,r)}));t++;for(let a of i)an(e,a.normalized.normal,a)}}function cn(e,t){let n=t.score-e.score;if(n!==0)return n;let r=e.match.start-t.match.start;if(r!==0)return r;let o=e.keyIndex-t.keyIndex;if(o!==0)return o;let i=e.lengthDiff-t.lengthDiff;return i!==0?i:rt(e,t)}function rt(e,t){return e.index-t.index}function ln(e){switch(e){case ie.bestMatch:return cn;case ie.insertOrder:return rt;default:throw new Error(`unknown sortBy method ${e}`)}}function ot(e,t,n,r,o,i,a){let l={item:n.item,normalized:n.normalized,score:r,match:o,index:n.index,keyIndex:n.keyIndex,lengthDiff:i};t[n.index]==null?(t[n.index]=e.length,e.push(l)):a(l,e[t[n.index]])<0&&(e[t[n.index]]=l)}var un=Math.max,fn=e=>e;function dn(e,t,n,r,o){let i=t+o,a=Math.min(n.length,t+e.depth+1),l=Math.ceil((i+a)/2),d=l-a;return 1-d/l>=r}function hn(e,t,n,r,o,i){let a=Math.min(o,i-(e.depth+1));return 1-a/n.length>=r}function pn(e,t,n,r,o,i,a){let l=[];for(let f in e.children){let h=e.children[f];l.push([h,1,f,0,t.length])}let d=new Array(e.depth);for(;l.length!==0;){let[f,h,v,u,m]=l.pop();d[h-1]=v,n.score(t,d,r,h-1);let E=h,N=r[r.length-1][E],_=u,B=m;if(n.shouldUpdateScore(N,m)&&(_=E,B=N),f.candidates.length>0){let S=n.getLength(t.length,h),U=1-B/S;if(U>=a.threshold){let Z=et(r,_),F=Math.abs(h-t.length);for(let O of f.candidates)ot(o,i,O,U,Z,F,n.compareItems)}}for(let S in f.children){let U=f.children[S];n.shouldContinue(U,h,t,a.threshold,B,N)&&l.push([U,h+1,S,_,B])}}}function vn(e,t,n){let r=n.useSellers?on:rn,o={score:n.useDamerau?sn:nt,getLength:n.useSellers?fn:un,shouldUpdateScore:n.useSellers?nn:tn,shouldContinue:n.useSellers?hn:dn,walkBack:n.useSellers?et:en,compareItems:ln(n.sortBy)},i={},a=[],l=r(e.length+1,t.depth+1);if(n.threshold<=0||e.length===0)for(let f of t.candidates)ot(a,i,f,0,{index:0,length:0},e.length,o.compareItems);pn(t,e,o,l,a,i,n);let d=a.sort(o.compareItems);if(n.returnMatchData){let f=n.useSellers?$t:Qt;return d.map(h=>({item:h.item,original:h.normalized.original,key:h.normalized.normal.join(""),score:h.score,match:f(h.match,h.normalized.map)}))}return d.map(f=>f.item)}var W=class{constructor(t,n){this.options=Object.assign({},Gt,n),this.trie={children:{},candidates:[],depth:0},Qe(this.trie,0,t,this.options),this.count=t.length}add(...t){Qe(this.trie,this.count,t,this.options),this.count+=t.length}search(t,n){return n=Object.assign({},this.options,n),vn($e(t,this.options).normal,this.trie,n)}};var st=(e,t)=>{if(typeof t=="string")e.appendChild(document.createTextNode(t.toString()));else if(t instanceof Array)t.forEach(n=>st(e,n));else{if(t===void 0)return;e.appendChild(t)}},y=class{static createTextNode(t){return document.createTextNode(t)}static createElement(t,n,...r){if(typeof t!="string")return t(n);{let o=document.createElement(t),i=n||{};for(let a in i)if(a&&i.hasOwnProperty(a)){let l=i[a];l===!0?o.setAttribute(a,a):l!==!1&&l!=null&&o.setAttribute(a,l.toString())}for(let a=0;a<r.length;a++)st(o,r[a]);return o}}};var gn=({match:e,original:t})=>{if(e.length==0)return t;if(e.index==0&&e.length==t.length)return y.createElement("span",{class:"search-match"},t);let n=[];return e.index>0&&n.push(t.substring(0,e.index)),n.push(y.createElement("span",{class:"search-match"},t.substring(e.index,e.index+e.length))),n.push(t.substring(e.index+e.length)),n},ae=!1,ce,it=e=>{if(document.getElementById("search-wrapper"))return;let t=y.createElement("input",{id:"search-box",type:"text",placeholder:"Search...",autocomplete:"off",tabindex:"0"}),n=y.createElement("div",{id:"search-results"}),r=y.createElement("div",{id:"search-wrapper",class:"modal open"},y.createElement("div",{class:"modal-contents search-form",role:"form"},t,n)),o=u=>{n.innerHTML="",n.appendChild(y.createElement("span",{class:"search-error"},u))},i=()=>{if(!ce)return;let u=ce.search(t.value);if(u.length>0){n.scrollTo(0,0),n.innerHTML="";let m=y.createElement("ul",null,u.slice(0,20).map(E=>y.createElement("li",null,y.createElement("a",{class:"search-result",href:`/${E.item.idAnchor}`},y.createElement("h3",{class:"sourceCode search-header"},y.createElement("span",null,gn(E)),y.createElement("span",{class:"search-module"},E.item.idAnchor.replace(/#[0-9]+$/,"").slice(0,-5))),y.createElement("p",{class:"search-type sourceCode"},E.item.idType)))));n.appendChild(m)}else t.value.length===0?n.innerHTML="":n.innerText="No results found"};t.addEventListener("input",()=>{e&&(e.value=t.value),i()});let a=()=>{e&&(t.value=e.value),t.focus(),i()};e&&e.addEventListener("input",a);let l=()=>{r.remove(),e&&e.removeEventListener("input",a)};r.addEventListener("click",u=>{u.target!==t&&l()});let d=u=>{u.classList.remove("active"),u.ariaSelected="false"},f=u=>{u.classList.add("active"),u.ariaSelected="true",u.scrollIntoView({block:"nearest"})},h=()=>{let u=n.querySelector("li.active");if(u)u.nextElementSibling&&(d(u),f(u.nextElementSibling));else{let m=n.querySelector("li");m&&f(m)}},v=()=>{let u=n.querySelector("li.active");u&&u.previousElementSibling&&(d(u),f(u.previousElementSibling))};t.addEventListener("keydown",u=>{switch(u.key){case"Tab":u.preventDefault(),u.shiftKey?v():h();break;case"Down":case"ArrowDown":u.preventDefault(),h();break;case"Up":case"ArrowUp":u.preventDefault(),v();break;case"Enter":{u.preventDefault();let m=n.querySelector("li.active > a")||n.querySelector("li > a");m&&m.click();break}case"Escape":{u.preventDefault(),l();break}}}),document.body.appendChild(r),t.focus(),ae||(ae=!0,fetch("/static/search.json").then(u=>u.json()).then(u=>{ce=new W(u,{returnMatchData:!0,keySelector:m=>m.idIdent}),i()}).catch(u=>{console.error("Failed to load search index",u),ae=!1,o("Failed to load search index")})),i()};document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("search-box-proxy");e&&e.addEventListener("focus",()=>it(e)),document.addEventListener("keydown",t=>{t.key=="k"&&t.ctrlKey&&!t.altKey&&(t.preventDefault(),it(e))})});})();
//# sourceMappingURL=code-only.js.map
