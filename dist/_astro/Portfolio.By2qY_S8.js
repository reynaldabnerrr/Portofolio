const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/index.C3YGerEN.js","_astro/index.DUhCYmUb.js"])))=>i.map(i=>d[i]);
import{r as Sl,a as Ue,R as Co}from"./index.DUhCYmUb.js";const yl="modulepreload",El=function(i){return"/"+i},Ma={},Tl=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let a=function(c){return Promise.all(c.map(f=>Promise.resolve(f).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),d=o?.nonce||o?.getAttribute("nonce");s=a(t.map(c=>{if(c=El(c),c in Ma)return;Ma[c]=!0;const f=c.endsWith(".css"),m=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${m}`))return;const u=document.createElement("link");if(u.rel=f?"stylesheet":yl,f||(u.as="script"),u.crossOrigin="",u.href=c,d&&u.setAttribute("nonce",d),document.head.appendChild(u),f)return new Promise((x,v)=>{u.addEventListener("load",x),u.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};var ws={exports:{}},_i={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sa;function wl(){if(Sa)return _i;Sa=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(n,s,r){var a=null;if(r!==void 0&&(a=""+r),s.key!==void 0&&(a=""+s.key),"key"in s){r={};for(var o in s)o!=="key"&&(r[o]=s[o])}else r=s;return s=r.ref,{$$typeof:i,type:n,key:a,ref:s!==void 0?s:null,props:r}}return _i.Fragment=e,_i.jsx=t,_i.jsxs=t,_i}var ya;function No(){return ya||(ya=1,ws.exports=wl()),ws.exports}var l=No(),qn={},Ea;function Al(){if(Ea)return qn;Ea=1,Object.defineProperty(qn,"__esModule",{value:!0});var i=No(),e=Sl(),t=function(){return t=Object.assign||function(d){for(var c,f=1,m=arguments.length;f<m;f++)for(var u in c=arguments[f])Object.prototype.hasOwnProperty.call(c,u)&&(d[u]=c[u]);return d},t.apply(this,arguments)};function n(d,c){var f,m;switch(c.type){case"TYPE":return t(t({},d),{speed:c.speed,text:(f=c.payload)===null||f===void 0?void 0:f.substring(0,d.text.length+1)});case"DELAY":return t(t({},d),{speed:c.payload});case"DELETE":return t(t({},d),{speed:c.speed,text:(m=c.payload)===null||m===void 0?void 0:m.substring(0,d.text.length-1)});case"COUNT":return t(t({},d),{count:d.count+1});default:return d}}var s=function(d){var c=d.words,f=c===void 0?["Hello World!","This is","a simple Typewriter"]:c,m=d.loop,u=m===void 0?1:m,x=d.typeSpeed,v=x===void 0?80:x,y=d.deleteSpeed,g=y===void 0?50:y,h=d.delaySpeed,A=h===void 0?1500:h,C=d.onLoopDone,M=d.onType,R=d.onDelete,T=d.onDelay,N=e.useReducer(n,{speed:v,text:"",count:0}),_=N[0],w=_.speed,L=_.text,D=_.count,B=N[1],q=e.useRef(0),Z=e.useRef(!1),k=e.useRef(!1),X=e.useRef(!1),W=e.useRef(!1),te=e.useCallback((function(){var se=D%f.length,le=f[se];k.current?(B({type:"DELETE",payload:le,speed:g}),L===""&&(k.current=!1,B({type:"COUNT"}))):(B({type:"TYPE",payload:le,speed:v}),X.current=!0,L===le&&(B({type:"DELAY",payload:A}),X.current=!1,W.current=!0,setTimeout((function(){W.current=!1,k.current=!0}),A),u>0&&(q.current+=1,q.current/f.length===u&&(W.current=!1,Z.current=!0)))),X.current&&M&&M(q.current),k.current&&R&&R(),W.current&&T&&T()}),[D,A,g,u,v,f,L,M,R,T]);return e.useEffect((function(){var se=setTimeout(te,w);return Z.current&&clearTimeout(se),function(){return clearTimeout(se)}}),[te,w]),e.useEffect((function(){C&&Z.current&&C()}),[C]),[L,{isType:X.current,isDelay:W.current,isDelete:k.current,isDone:Z.current}]},r="styles-module_blinkingCursor__yugAC",a="styles-module_blinking__9VXRT";(function(d,c){c===void 0&&(c={});var f=c.insertAt;if(typeof document<"u"){var m=document.head||document.getElementsByTagName("head")[0],u=document.createElement("style");u.type="text/css",f==="top"&&m.firstChild?m.insertBefore(u,m.firstChild):m.appendChild(u),u.styleSheet?u.styleSheet.cssText=d:u.appendChild(document.createTextNode(d))}})(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var o=e.memo((function(d){var c=d.cursorBlinking,f=c===void 0||c,m=d.cursorStyle,u=m===void 0?"|":m,x=d.cursorColor,v=x===void 0?"inherit":x;return i.jsx("span",t({style:{color:v},className:"".concat(r," ").concat(f?a:"")},{children:u}))}));return qn.Cursor=o,qn.Typewriter=function(d){var c=d.words,f=c===void 0?["Hello World!","This is","a simple Typewriter"]:c,m=d.loop,u=m===void 0?1:m,x=d.typeSpeed,v=x===void 0?80:x,y=d.deleteSpeed,g=y===void 0?50:y,h=d.delaySpeed,A=h===void 0?1500:h,C=d.cursor,M=C!==void 0&&C,R=d.cursorStyle,T=R===void 0?"|":R,N=d.cursorColor,_=N===void 0?"inherit":N,w=d.cursorBlinking,L=w===void 0||w,D=d.onLoopDone,B=d.onType,q=d.onDelay,Z=d.onDelete,k=s({words:f,loop:u,typeSpeed:v,deleteSpeed:g,delaySpeed:A,onLoopDone:D,onType:B,onDelay:q,onDelete:Z})[0];return i.jsxs(i.Fragment,{children:[i.jsx("span",{children:k}),M&&i.jsx(o,{cursorStyle:T,cursorColor:_,cursorBlinking:L})]})},qn.useTypewriter=s,qn}var Rl=Al();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qr="185",Cl=0,Ta=1,Nl=2,os=1,Pl=2,wi=3,Cn=0,Dt=1,hn=2,pn=0,li=1,wa=2,Aa=3,Ra=4,Dl=5,On=100,Ll=101,Il=102,Ul=103,Fl=104,Ol=200,Bl=201,kl=202,zl=203,or=204,lr=205,Gl=206,Hl=207,Vl=208,Wl=209,jl=210,Xl=211,ql=212,Yl=213,Kl=214,cr=0,dr=1,ur=2,ui=3,hr=4,fr=5,pr=6,mr=7,Po=0,$l=1,Zl=2,nn=0,Do=1,Lo=2,Io=3,Uo=4,Fo=5,Oo=6,Bo=7,ko=300,Gn=301,hi=302,As=303,Rs=304,vs=306,gr=1e3,fn=1001,xr=1002,Mt=1003,Jl=1004,Fi=1005,wt=1006,Cs=1007,kn=1008,Bt=1009,zo=1010,Go=1011,Ci=1012,ea=1013,rn=1014,en=1015,gn=1016,ta=1017,na=1018,Ni=1020,Ho=35902,Vo=35899,Wo=1021,jo=1022,Yt=1023,xn=1026,zn=1027,Xo=1028,ia=1029,Hn=1030,sa=1031,ra=1033,ls=33776,cs=33777,ds=33778,us=33779,_r=35840,vr=35841,br=35842,Mr=35843,Sr=36196,yr=37492,Er=37496,Tr=37488,wr=37489,fs=37490,Ar=37491,Rr=37808,Cr=37809,Nr=37810,Pr=37811,Dr=37812,Lr=37813,Ir=37814,Ur=37815,Fr=37816,Or=37817,Br=37818,kr=37819,zr=37820,Gr=37821,Hr=36492,Vr=36494,Wr=36495,jr=36283,Xr=36284,ps=36285,qr=36286,Ql=3200,Yr=0,ec=1,An="",Ht="srgb",ms="srgb-linear",gs="linear",Qe="srgb",Yn=7680,Ca=519,tc=512,nc=513,ic=514,aa=515,sc=516,rc=517,oa=518,ac=519,Na=35044,Pa="300 es",tn=2e3,Pi=2001;function oc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lc(){const i=xs("canvas");return i.style.display="block",i}const Da={};function La(...i){const e="THREE."+i.shift();console.log(e,...i)}function qo(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Pe(...i){i=qo(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ye(...i){i=qo(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ci(...i){const e=i.join(" ");e in Da||(Da[e]=!0,Pe(...i))}function cc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const dc={[cr]:dr,[ur]:pr,[hr]:mr,[ui]:fr,[dr]:cr,[pr]:ur,[mr]:hr,[fr]:ui};class Wn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ns=Math.PI/180,Kr=180/Math.PI;function Di(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function uc(i,e){return(i%e+e)%e}function Ps(i,e,t){return(1-t)*i+t*e}function vi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}class Xe{static{Xe.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let d=n[s+0],c=n[s+1],f=n[s+2],m=n[s+3],u=r[a+0],x=r[a+1],v=r[a+2],y=r[a+3];if(m!==y||d!==u||c!==x||f!==v){let g=d*u+c*x+f*v+m*y;g<0&&(u=-u,x=-x,v=-v,y=-y,g=-g);let h=1-o;if(g<.9995){const A=Math.acos(g),C=Math.sin(A);h=Math.sin(h*A)/C,o=Math.sin(o*A)/C,d=d*h+u*o,c=c*h+x*o,f=f*h+v*o,m=m*h+y*o}else{d=d*h+u*o,c=c*h+x*o,f=f*h+v*o,m=m*h+y*o;const A=1/Math.sqrt(d*d+c*c+f*f+m*m);d*=A,c*=A,f*=A,m*=A}}e[t]=d,e[t+1]=c,e[t+2]=f,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],d=n[s+1],c=n[s+2],f=n[s+3],m=r[a],u=r[a+1],x=r[a+2],v=r[a+3];return e[t]=o*v+f*m+d*x-c*u,e[t+1]=d*v+f*u+c*m-o*x,e[t+2]=c*v+f*x+o*u-d*m,e[t+3]=f*v-o*m-d*u-c*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,d=Math.sin,c=o(n/2),f=o(s/2),m=o(r/2),u=d(n/2),x=d(s/2),v=d(r/2);switch(a){case"XYZ":this._x=u*f*m+c*x*v,this._y=c*x*m-u*f*v,this._z=c*f*v+u*x*m,this._w=c*f*m-u*x*v;break;case"YXZ":this._x=u*f*m+c*x*v,this._y=c*x*m-u*f*v,this._z=c*f*v-u*x*m,this._w=c*f*m+u*x*v;break;case"ZXY":this._x=u*f*m-c*x*v,this._y=c*x*m+u*f*v,this._z=c*f*v+u*x*m,this._w=c*f*m-u*x*v;break;case"ZYX":this._x=u*f*m-c*x*v,this._y=c*x*m+u*f*v,this._z=c*f*v-u*x*m,this._w=c*f*m+u*x*v;break;case"YZX":this._x=u*f*m+c*x*v,this._y=c*x*m+u*f*v,this._z=c*f*v-u*x*m,this._w=c*f*m-u*x*v;break;case"XZY":this._x=u*f*m-c*x*v,this._y=c*x*m-u*f*v,this._z=c*f*v+u*x*m,this._w=c*f*m+u*x*v;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],d=t[9],c=t[2],f=t[6],m=t[10],u=n+o+m;if(u>0){const x=.5/Math.sqrt(u+1);this._w=.25/x,this._x=(f-d)*x,this._y=(r-c)*x,this._z=(a-s)*x}else if(n>o&&n>m){const x=2*Math.sqrt(1+n-o-m);this._w=(f-d)/x,this._x=.25*x,this._y=(s+a)/x,this._z=(r+c)/x}else if(o>m){const x=2*Math.sqrt(1+o-n-m);this._w=(r-c)/x,this._x=(s+a)/x,this._y=.25*x,this._z=(d+f)/x}else{const x=2*Math.sqrt(1+m-n-o);this._w=(a-s)/x,this._x=(r+c)/x,this._y=(d+f)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,d=t._y,c=t._z,f=t._w;return this._x=n*f+a*o+s*c-r*d,this._y=s*f+a*d+r*o-n*c,this._z=r*f+a*c+n*d-s*o,this._w=a*f-n*o-s*d-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let d=1-t;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);d=Math.sin(d*c)/f,t=Math.sin(t*c)/f,this._x=this._x*d+n*t,this._y=this._y*d+s*t,this._z=this._z*d+r*t,this._w=this._w*d+a*t,this._onChangeCallback()}else this._x=this._x*d+n*t,this._y=this._y*d+s*t,this._z=this._z*d+r*t,this._w=this._w*d+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{static{z.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ia.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ia.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,d=e.w,c=2*(a*s-o*n),f=2*(o*t-r*s),m=2*(r*n-a*t);return this.x=t+d*c+a*m-o*f,this.y=n+d*f+o*c-r*m,this.z=s+d*m+r*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,d=t.z;return this.x=s*d-r*o,this.y=r*a-n*d,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ds.copy(this).projectOnVector(e),this.sub(Ds)}reflect(e){return this.sub(Ds.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ds=new z,Ia=new mi;class Le{static{Le.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,d,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,d,c)}set(e,t,n,s,r,a,o,d,c){const f=this.elements;return f[0]=e,f[1]=s,f[2]=o,f[3]=t,f[4]=r,f[5]=d,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],d=n[6],c=n[1],f=n[4],m=n[7],u=n[2],x=n[5],v=n[8],y=s[0],g=s[3],h=s[6],A=s[1],C=s[4],M=s[7],R=s[2],T=s[5],N=s[8];return r[0]=a*y+o*A+d*R,r[3]=a*g+o*C+d*T,r[6]=a*h+o*M+d*N,r[1]=c*y+f*A+m*R,r[4]=c*g+f*C+m*T,r[7]=c*h+f*M+m*N,r[2]=u*y+x*A+v*R,r[5]=u*g+x*C+v*T,r[8]=u*h+x*M+v*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],d=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-n*r*f+n*o*d+s*r*c-s*a*d}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],d=e[6],c=e[7],f=e[8],m=f*a-o*c,u=o*d-f*r,x=c*r-a*d,v=t*m+n*u+s*x;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=m*y,e[1]=(s*c-f*n)*y,e[2]=(o*n-s*a)*y,e[3]=u*y,e[4]=(f*t-s*d)*y,e[5]=(s*r-o*t)*y,e[6]=x*y,e[7]=(n*d-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const d=Math.cos(r),c=Math.sin(r);return this.set(n*d,n*c,-n*(d*a+c*o)+a+e,-s*c,s*d,-s*(-c*a+d*o)+o+t,0,0,1),this}scale(e,t){return ci("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ls.makeScale(e,t)),this}rotate(e){return ci("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ls.makeRotation(-e)),this}translate(e,t){return ci("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ls.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ls=new Le,Ua=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fa=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hc(){const i={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qe&&(s.r=mn(s.r),s.g=mn(s.g),s.b=mn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===An?gs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ci("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ci("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ms]:{primaries:e,whitePoint:n,transfer:gs,toXYZ:Ua,fromXYZ:Fa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:Ua,fromXYZ:Fa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),i}const Ve=hc();function mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function di(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Kn;class fc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kn===void 0&&(Kn=xs("canvas")),Kn.width=e.width,Kn.height=e.height;const s=Kn.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Kn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=mn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mn(t[n]/255)*255):t[n]=mn(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pc=0;class la{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pc++}),this.uuid=Di(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Is(s[a].image)):r.push(Is(s[a]))}else r=Is(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Is(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let mc=0;const Us=new z;class At extends Wn{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=fn,s=fn,r=wt,a=kn,o=Yt,d=Bt,c=At.DEFAULT_ANISOTROPY,f=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mc++}),this.uuid=Di(),this.name="",this.source=new la(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=d,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Us).x}get height(){return this.source.getSize(Us).y}get depth(){return this.source.getSize(Us).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ko)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gr:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gr:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=ko;At.DEFAULT_ANISOTROPY=1;class dt{static{dt.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const d=e.elements,c=d[0],f=d[4],m=d[8],u=d[1],x=d[5],v=d[9],y=d[2],g=d[6],h=d[10];if(Math.abs(f-u)<.01&&Math.abs(m-y)<.01&&Math.abs(v-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(m+y)<.1&&Math.abs(v+g)<.1&&Math.abs(c+x+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(c+1)/2,M=(x+1)/2,R=(h+1)/2,T=(f+u)/4,N=(m+y)/4,_=(v+g)/4;return C>M&&C>R?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=T/n,r=N/n):M>R?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=_/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=N/r,s=_/r),this.set(n,s,r,t),this}let A=Math.sqrt((g-v)*(g-v)+(m-y)*(m-y)+(u-f)*(u-f));return Math.abs(A)<.001&&(A=1),this.x=(g-v)/A,this.y=(m-y)/A,this.z=(u-f)/A,this.w=Math.acos((c+x+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gc extends Wn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new At(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new la(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends gc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yo extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xc extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lt{static{lt.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,d,c,f,m,u,x,v,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,d,c,f,m,u,x,v,y,g)}set(e,t,n,s,r,a,o,d,c,f,m,u,x,v,y,g){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=d,h[2]=c,h[6]=f,h[10]=m,h[14]=u,h[3]=x,h[7]=v,h[11]=y,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/$n.setFromMatrixColumn(e,0).length(),r=1/$n.setFromMatrixColumn(e,1).length(),a=1/$n.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),d=Math.cos(s),c=Math.sin(s),f=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){const u=a*f,x=a*m,v=o*f,y=o*m;t[0]=d*f,t[4]=-d*m,t[8]=c,t[1]=x+v*c,t[5]=u-y*c,t[9]=-o*d,t[2]=y-u*c,t[6]=v+x*c,t[10]=a*d}else if(e.order==="YXZ"){const u=d*f,x=d*m,v=c*f,y=c*m;t[0]=u+y*o,t[4]=v*o-x,t[8]=a*c,t[1]=a*m,t[5]=a*f,t[9]=-o,t[2]=x*o-v,t[6]=y+u*o,t[10]=a*d}else if(e.order==="ZXY"){const u=d*f,x=d*m,v=c*f,y=c*m;t[0]=u-y*o,t[4]=-a*m,t[8]=v+x*o,t[1]=x+v*o,t[5]=a*f,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*d}else if(e.order==="ZYX"){const u=a*f,x=a*m,v=o*f,y=o*m;t[0]=d*f,t[4]=v*c-x,t[8]=u*c+y,t[1]=d*m,t[5]=y*c+u,t[9]=x*c-v,t[2]=-c,t[6]=o*d,t[10]=a*d}else if(e.order==="YZX"){const u=a*d,x=a*c,v=o*d,y=o*c;t[0]=d*f,t[4]=y-u*m,t[8]=v*m+x,t[1]=m,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=x*m+v,t[10]=u-y*m}else if(e.order==="XZY"){const u=a*d,x=a*c,v=o*d,y=o*c;t[0]=d*f,t[4]=-m,t[8]=c*f,t[1]=u*m+y,t[5]=a*f,t[9]=x*m-v,t[2]=v*m-x,t[6]=o*f,t[10]=y*m+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_c,e,vc)}lookAt(e,t,n){const s=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Mn.crossVectors(n,Ft),Mn.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Mn.crossVectors(n,Ft)),Mn.normalize(),Oi.crossVectors(Ft,Mn),s[0]=Mn.x,s[4]=Oi.x,s[8]=Ft.x,s[1]=Mn.y,s[5]=Oi.y,s[9]=Ft.y,s[2]=Mn.z,s[6]=Oi.z,s[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],d=n[8],c=n[12],f=n[1],m=n[5],u=n[9],x=n[13],v=n[2],y=n[6],g=n[10],h=n[14],A=n[3],C=n[7],M=n[11],R=n[15],T=s[0],N=s[4],_=s[8],w=s[12],L=s[1],D=s[5],B=s[9],q=s[13],Z=s[2],k=s[6],X=s[10],W=s[14],te=s[3],se=s[7],le=s[11],fe=s[15];return r[0]=a*T+o*L+d*Z+c*te,r[4]=a*N+o*D+d*k+c*se,r[8]=a*_+o*B+d*X+c*le,r[12]=a*w+o*q+d*W+c*fe,r[1]=f*T+m*L+u*Z+x*te,r[5]=f*N+m*D+u*k+x*se,r[9]=f*_+m*B+u*X+x*le,r[13]=f*w+m*q+u*W+x*fe,r[2]=v*T+y*L+g*Z+h*te,r[6]=v*N+y*D+g*k+h*se,r[10]=v*_+y*B+g*X+h*le,r[14]=v*w+y*q+g*W+h*fe,r[3]=A*T+C*L+M*Z+R*te,r[7]=A*N+C*D+M*k+R*se,r[11]=A*_+C*B+M*X+R*le,r[15]=A*w+C*q+M*W+R*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],d=e[9],c=e[13],f=e[2],m=e[6],u=e[10],x=e[14],v=e[3],y=e[7],g=e[11],h=e[15],A=d*x-c*u,C=o*x-c*m,M=o*u-d*m,R=a*x-c*f,T=a*u-d*f,N=a*m-o*f;return t*(y*A-g*C+h*M)-n*(v*A-g*R+h*T)+s*(v*C-y*R+h*N)-r*(v*M-y*T+g*N)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],d=e[2],c=e[6],f=e[10];return t*(a*f-o*c)-n*(r*f-o*d)+s*(r*c-a*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],d=e[6],c=e[7],f=e[8],m=e[9],u=e[10],x=e[11],v=e[12],y=e[13],g=e[14],h=e[15],A=t*o-n*a,C=t*d-s*a,M=t*c-r*a,R=n*d-s*o,T=n*c-r*o,N=s*c-r*d,_=f*y-m*v,w=f*g-u*v,L=f*h-x*v,D=m*g-u*y,B=m*h-x*y,q=u*h-x*g,Z=A*q-C*B+M*D+R*L-T*w+N*_;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/Z;return e[0]=(o*q-d*B+c*D)*k,e[1]=(s*B-n*q-r*D)*k,e[2]=(y*N-g*T+h*R)*k,e[3]=(u*T-m*N-x*R)*k,e[4]=(d*L-a*q-c*w)*k,e[5]=(t*q-s*L+r*w)*k,e[6]=(g*M-v*N-h*C)*k,e[7]=(f*N-u*M+x*C)*k,e[8]=(a*B-o*L+c*_)*k,e[9]=(n*L-t*B-r*_)*k,e[10]=(v*T-y*M+h*A)*k,e[11]=(m*M-f*T-x*A)*k,e[12]=(o*w-a*D-d*_)*k,e[13]=(t*D-n*w+s*_)*k,e[14]=(y*C-v*R-g*A)*k,e[15]=(f*R-m*C+u*A)*k,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,d=e.z,c=r*a,f=r*o;return this.set(c*a+n,c*o-s*d,c*d+s*o,0,c*o+s*d,f*o+n,f*d-s*a,0,c*d-s*o,f*d+s*a,r*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,d=t._w,c=r+r,f=a+a,m=o+o,u=r*c,x=r*f,v=r*m,y=a*f,g=a*m,h=o*m,A=d*c,C=d*f,M=d*m,R=n.x,T=n.y,N=n.z;return s[0]=(1-(y+h))*R,s[1]=(x+M)*R,s[2]=(v-C)*R,s[3]=0,s[4]=(x-M)*T,s[5]=(1-(u+h))*T,s[6]=(g+A)*T,s[7]=0,s[8]=(v+C)*N,s[9]=(g-A)*N,s[10]=(1-(u+y))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=$n.set(s[0],s[1],s[2]).length();const o=$n.set(s[4],s[5],s[6]).length(),d=$n.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Wt.copy(this);const c=1/a,f=1/o,m=1/d;return Wt.elements[0]*=c,Wt.elements[1]*=c,Wt.elements[2]*=c,Wt.elements[4]*=f,Wt.elements[5]*=f,Wt.elements[6]*=f,Wt.elements[8]*=m,Wt.elements[9]*=m,Wt.elements[10]*=m,t.setFromRotationMatrix(Wt),n.x=a,n.y=o,n.z=d,this}makePerspective(e,t,n,s,r,a,o=tn,d=!1){const c=this.elements,f=2*r/(t-e),m=2*r/(n-s),u=(t+e)/(t-e),x=(n+s)/(n-s);let v,y;if(d)v=r/(a-r),y=a*r/(a-r);else if(o===tn)v=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Pi)v=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=m,c[9]=x,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=tn,d=!1){const c=this.elements,f=2/(t-e),m=2/(n-s),u=-(t+e)/(t-e),x=-(n+s)/(n-s);let v,y;if(d)v=1/(a-r),y=a/(a-r);else if(o===tn)v=-2/(a-r),y=-(a+r)/(a-r);else if(o===Pi)v=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=m,c[9]=0,c[13]=x,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $n=new z,Wt=new lt,_c=new z(0,0,0),vc=new z(1,1,1),Mn=new z,Oi=new z,Ft=new z,Oa=new lt,Ba=new mi;class Nn{constructor(e=0,t=0,n=0,s=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],d=s[1],c=s[5],f=s[9],m=s[2],u=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,x),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,x),this._z=Math.atan2(d,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-m,x),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(d,r));break;case"ZYX":this._y=Math.asin(-We(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(u,x),this._z=Math.atan2(d,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,x));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,x),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Oa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ba.setFromEuler(this),this.setFromQuaternion(Ba,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class Ko{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bc=0;const ka=new z,Zn=new mi,on=new lt,Bi=new z,bi=new z,Mc=new z,Sc=new mi,za=new z(1,0,0),Ga=new z(0,1,0),Ha=new z(0,0,1),Va={type:"added"},yc={type:"removed"},Jn={type:"childadded",child:null},Fs={type:"childremoved",child:null};class St extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new z,t=new Nn,n=new mi,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new Le}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.premultiply(Zn),this}rotateX(e){return this.rotateOnAxis(za,e)}rotateY(e){return this.rotateOnAxis(Ga,e)}rotateZ(e){return this.rotateOnAxis(Ha,e)}translateOnAxis(e,t){return ka.copy(e).applyQuaternion(this.quaternion),this.position.add(ka.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(za,e)}translateY(e){return this.translateOnAxis(Ga,e)}translateZ(e){return this.translateOnAxis(Ha,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bi.copy(e):Bi.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(bi,Bi,this.up):on.lookAt(Bi,bi,this.up),this.quaternion.setFromRotationMatrix(on),s&&(on.extractRotation(s.matrixWorld),Zn.setFromRotationMatrix(on),this.quaternion.premultiply(Zn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Va),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yc),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Va),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,e,Mc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,Sc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,d){return o[d.uuid]===void 0&&(o[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const d=o.shapes;if(Array.isArray(d))for(let c=0,f=d.length;c<f;c++){const m=d[c];r(e.shapes,m)}else r(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let d=0,c=this.material.length;d<c;d++)o.push(r(e.materials,this.material[d]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const d=this.animations[o];s.animations.push(r(e.animations,d))}}if(t){const o=a(e.geometries),d=a(e.materials),c=a(e.textures),f=a(e.images),m=a(e.shapes),u=a(e.skeletons),x=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),d.length>0&&(n.materials=d),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),m.length>0&&(n.shapes=m),u.length>0&&(n.skeletons=u),x.length>0&&(n.animations=x),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const d=[];for(const c in o){const f=o[c];delete f.metadata,d.push(f)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}St.DEFAULT_UP=new z(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ki extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ec={type:"move"};class Os{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,d=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const g=t.getJointPose(y,n),h=this._getHandJoint(c,y);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const f=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],u=f.position.distanceTo(m.position),x=.02,v=.005;c.inputState.pinching&&u>x+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=x-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(d.matrix.fromArray(r.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,r.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(r.linearVelocity)):d.hasLinearVelocity=!1,r.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(r.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ec)))}return o!==null&&(o.visible=s!==null),d!==null&&(d.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ki;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const $o={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},zi={h:0,s:0,l:0};function Bs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ve.workingColorSpace){if(e=uc(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Bs(a,r,e+1/3),this.g=Bs(a,r,e),this.b=Bs(a,r,e-1/3)}return Ve.colorSpaceToWorking(this,s),this}setStyle(e,t=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const n=$o[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mn(e.r),this.g=mn(e.g),this.b=mn(e.b),this}copyLinearToSRGB(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return Ve.workingToColorSpace(Tt.copy(this),e),Math.round(We(Tt.r*255,0,255))*65536+Math.round(We(Tt.g*255,0,255))*256+Math.round(We(Tt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.workingToColorSpace(Tt.copy(this),t);const n=Tt.r,s=Tt.g,r=Tt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let d,c;const f=(o+a)/2;if(o===a)d=0,c=0;else{const m=a-o;switch(c=f<=.5?m/(a+o):m/(2-a-o),a){case n:d=(s-r)/m+(s<r?6:0);break;case s:d=(r-n)/m+2;break;case r:d=(n-s)/m+4;break}d/=6}return e.h=d,e.s=c,e.l=f,e}getRGB(e,t=Ve.workingColorSpace){return Ve.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=Ht){Ve.workingToColorSpace(Tt.copy(this),e);const t=Tt.r,n=Tt.g,s=Tt.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Sn),this.setHSL(Sn.h+e,Sn.s+t,Sn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(zi);const n=Ps(Sn.h,zi.h,t),s=Ps(Sn.s,zi.s,t),r=Ps(Sn.l,zi.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new je;je.NAMES=$o;class Tc extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const jt=new z,ln=new z,ks=new z,cn=new z,Qn=new z,ei=new z,Wa=new z,zs=new z,Gs=new z,Hs=new z,Vs=new dt,Ws=new dt,js=new dt;class qt{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),jt.subVectors(e,t),s.cross(jt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){jt.subVectors(s,t),ln.subVectors(n,t),ks.subVectors(e,t);const a=jt.dot(jt),o=jt.dot(ln),d=jt.dot(ks),c=ln.dot(ln),f=ln.dot(ks),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;const u=1/m,x=(c*d-o*f)*u,v=(a*f-o*d)*u;return r.set(1-x-v,v,x)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(e,t,n,s,r,a,o,d){return this.getBarycoord(e,t,n,s,cn)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(r,cn.x),d.addScaledVector(a,cn.y),d.addScaledVector(o,cn.z),d)}static getInterpolatedAttribute(e,t,n,s,r,a){return Vs.setScalar(0),Ws.setScalar(0),js.setScalar(0),Vs.fromBufferAttribute(e,t),Ws.fromBufferAttribute(e,n),js.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Vs,r.x),a.addScaledVector(Ws,r.y),a.addScaledVector(js,r.z),a}static isFrontFacing(e,t,n,s){return jt.subVectors(n,t),ln.subVectors(e,t),jt.cross(ln).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),jt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return qt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Qn.subVectors(s,n),ei.subVectors(r,n),zs.subVectors(e,n);const d=Qn.dot(zs),c=ei.dot(zs);if(d<=0&&c<=0)return t.copy(n);Gs.subVectors(e,s);const f=Qn.dot(Gs),m=ei.dot(Gs);if(f>=0&&m<=f)return t.copy(s);const u=d*m-f*c;if(u<=0&&d>=0&&f<=0)return a=d/(d-f),t.copy(n).addScaledVector(Qn,a);Hs.subVectors(e,r);const x=Qn.dot(Hs),v=ei.dot(Hs);if(v>=0&&x<=v)return t.copy(r);const y=x*c-d*v;if(y<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(ei,o);const g=f*v-x*m;if(g<=0&&m-f>=0&&x-v>=0)return Wa.subVectors(r,s),o=(m-f)/(m-f+(x-v)),t.copy(s).addScaledVector(Wa,o);const h=1/(g+y+u);return a=y*h,o=u*h,t.copy(n).addScaledVector(Qn,a).addScaledVector(ei,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Li{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xt):Xt.fromBufferAttribute(r,a),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gi.copy(n.boundingBox)),Gi.applyMatrix4(e.matrixWorld),this.union(Gi)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mi),Hi.subVectors(this.max,Mi),ti.subVectors(e.a,Mi),ni.subVectors(e.b,Mi),ii.subVectors(e.c,Mi),yn.subVectors(ni,ti),En.subVectors(ii,ni),Dn.subVectors(ti,ii);let t=[0,-yn.z,yn.y,0,-En.z,En.y,0,-Dn.z,Dn.y,yn.z,0,-yn.x,En.z,0,-En.x,Dn.z,0,-Dn.x,-yn.y,yn.x,0,-En.y,En.x,0,-Dn.y,Dn.x,0];return!Xs(t,ti,ni,ii,Hi)||(t=[1,0,0,0,1,0,0,0,1],!Xs(t,ti,ni,ii,Hi))?!1:(Vi.crossVectors(yn,En),t=[Vi.x,Vi.y,Vi.z],Xs(t,ti,ni,ii,Hi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const dn=[new z,new z,new z,new z,new z,new z,new z,new z],Xt=new z,Gi=new Li,ti=new z,ni=new z,ii=new z,yn=new z,En=new z,Dn=new z,Mi=new z,Hi=new z,Vi=new z,Ln=new z;function Xs(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ln.fromArray(i,r);const o=s.x*Math.abs(Ln.x)+s.y*Math.abs(Ln.y)+s.z*Math.abs(Ln.z),d=e.dot(Ln),c=t.dot(Ln),f=n.dot(Ln);if(Math.max(-Math.max(d,c,f),Math.min(d,c,f))>o)return!1}return!0}const gt=new z,Wi=new Xe;let wc=0;class Kt extends Wn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Na,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wi.fromBufferAttribute(this,t),Wi.applyMatrix3(e),this.setXY(t,Wi.x,Wi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Na&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Zo extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jo extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ct extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Ac=new Li,Si=new z,qs=new z;class bs{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ac.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Si.subVectors(e,this.center);const t=Si.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Si,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Si.copy(e.center).add(qs)),this.expandByPoint(Si.copy(e.center).sub(qs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Rc=0;const Gt=new lt,Ys=new St,si=new z,Ot=new Li,yi=new Li,vt=new z;class kt extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oc(e)?Jo:Zo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Le().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return Ys.lookAt(e),Ys.updateMatrix(),this.applyMatrix4(Ys.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ct(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ot.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];yi.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Ot.min,yi.min),Ot.expandByPoint(vt),vt.addVectors(Ot.max,yi.max),Ot.expandByPoint(vt)):(Ot.expandByPoint(yi.min),Ot.expandByPoint(yi.max))}Ot.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],d=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)vt.fromBufferAttribute(o,c),d&&(si.fromBufferAttribute(e,c),vt.add(si)),s=Math.max(s,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Kt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],d=[];for(let _=0;_<n.count;_++)o[_]=new z,d[_]=new z;const c=new z,f=new z,m=new z,u=new Xe,x=new Xe,v=new Xe,y=new z,g=new z;function h(_,w,L){c.fromBufferAttribute(n,_),f.fromBufferAttribute(n,w),m.fromBufferAttribute(n,L),u.fromBufferAttribute(r,_),x.fromBufferAttribute(r,w),v.fromBufferAttribute(r,L),f.sub(c),m.sub(c),x.sub(u),v.sub(u);const D=1/(x.x*v.y-v.x*x.y);isFinite(D)&&(y.copy(f).multiplyScalar(v.y).addScaledVector(m,-x.y).multiplyScalar(D),g.copy(m).multiplyScalar(x.x).addScaledVector(f,-v.x).multiplyScalar(D),o[_].add(y),o[w].add(y),o[L].add(y),d[_].add(g),d[w].add(g),d[L].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let _=0,w=A.length;_<w;++_){const L=A[_],D=L.start,B=L.count;for(let q=D,Z=D+B;q<Z;q+=3)h(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const C=new z,M=new z,R=new z,T=new z;function N(_){R.fromBufferAttribute(s,_),T.copy(R);const w=o[_];C.copy(w),C.sub(R.multiplyScalar(R.dot(w))).normalize(),M.crossVectors(T,w);const D=M.dot(d[_])<0?-1:1;a.setXYZW(_,C.x,C.y,C.z,D)}for(let _=0,w=A.length;_<w;++_){const L=A[_],D=L.start,B=L.count;for(let q=D,Z=D+B;q<Z;q+=3)N(e.getX(q+0)),N(e.getX(q+1)),N(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,x=n.count;u<x;u++)n.setXYZ(u,0,0,0);const s=new z,r=new z,a=new z,o=new z,d=new z,c=new z,f=new z,m=new z;if(e)for(let u=0,x=e.count;u<x;u+=3){const v=e.getX(u+0),y=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),f.subVectors(a,r),m.subVectors(s,r),f.cross(m),o.fromBufferAttribute(n,v),d.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),o.add(f),d.add(f),c.add(f),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(y,d.x,d.y,d.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,x=t.count;u<x;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),f.subVectors(a,r),m.subVectors(s,r),f.cross(m),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,d){const c=o.array,f=o.itemSize,m=o.normalized,u=new c.constructor(d.length*f);let x=0,v=0;for(let y=0,g=d.length;y<g;y++){o.isInterleavedBufferAttribute?x=d[y]*o.data.stride+o.offset:x=d[y]*f;for(let h=0;h<f;h++)u[v++]=c[x++]}return new Kt(u,f,m)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,n=this.index.array,s=this.attributes;for(const o in s){const d=s[o],c=e(d,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const d=[],c=r[o];for(let f=0,m=c.length;f<m;f++){const u=c[f],x=e(u,n);d.push(x)}t.morphAttributes[o]=d}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,d=a.length;o<d;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const c in d)d[c]!==void 0&&(e[c]=d[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const c=n[d];e.data.attributes[d]=c.toJSON(e.data)}const s={};let r=!1;for(const d in this.morphAttributes){const c=this.morphAttributes[d],f=[];for(let m=0,u=c.length;m<u;m++){const x=c[m];f.push(x.toJSON(e.data))}f.length>0&&(s[d]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const f=s[c];this.setAttribute(c,f.clone(t))}const r=e.morphAttributes;for(const c in r){const f=[],m=r[c];for(let u=0,x=m.length;u<x;u++)f.push(m[u].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Cc=0;class gi extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=li,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=or,this.blendDst=lr,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ca,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==or&&(n.blendSrc=this.blendSrc),this.blendDst!==lr&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ca&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const d=r[o];delete d.metadata,a.push(d)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Xe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const un=new z,Ks=new z,ji=new z,Tn=new z,$s=new z,Xi=new z,Zs=new z;class Qo{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ks.copy(e).add(t).multiplyScalar(.5),ji.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(Ks);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ji),o=Tn.dot(this.direction),d=-Tn.dot(ji),c=Tn.lengthSq(),f=Math.abs(1-a*a);let m,u,x,v;if(f>0)if(m=a*d-o,u=a*o-d,v=r*f,m>=0)if(u>=-v)if(u<=v){const y=1/f;m*=y,u*=y,x=m*(m+a*u+2*o)+u*(a*m+u+2*d)+c}else u=r,m=Math.max(0,-(a*u+o)),x=-m*m+u*(u+2*d)+c;else u=-r,m=Math.max(0,-(a*u+o)),x=-m*m+u*(u+2*d)+c;else u<=-v?(m=Math.max(0,-(-a*r+o)),u=m>0?-r:Math.min(Math.max(-r,-d),r),x=-m*m+u*(u+2*d)+c):u<=v?(m=0,u=Math.min(Math.max(-r,-d),r),x=u*(u+2*d)+c):(m=Math.max(0,-(a*r+o)),u=m>0?r:Math.min(Math.max(-r,-d),r),x=-m*m+u*(u+2*d)+c);else u=a>0?-r:r,m=Math.max(0,-(a*u+o)),x=-m*m+u*(u+2*d)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Ks).addScaledVector(ji,u),x}intersectSphere(e,t){un.subVectors(e.center,this.origin);const n=un.dot(this.direction),s=un.dot(un)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,d=n+a;return d<0?null:o<0?this.at(d,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,d;const c=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),f>=0?(r=(e.min.y-u.y)*f,a=(e.max.y-u.y)*f):(r=(e.max.y-u.y)*f,a=(e.min.y-u.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(e.min.z-u.z)*m,d=(e.max.z-u.z)*m):(o=(e.max.z-u.z)*m,d=(e.min.z-u.z)*m),n>d||o>s)||((o>n||n!==n)&&(n=o),(d<s||s!==s)&&(s=d),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,n,s,r){$s.subVectors(t,e),Xi.subVectors(n,e),Zs.crossVectors($s,Xi);let a=this.direction.dot(Zs),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,e);const d=o*this.direction.dot(Xi.crossVectors(Tn,Xi));if(d<0)return null;const c=o*this.direction.dot($s.cross(Tn));if(c<0||d+c>a)return null;const f=-o*Tn.dot(Zs);return f<0?null:this.at(f/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ri extends gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ja=new lt,In=new Qo,qi=new bs,Xa=new z,Yi=new z,Ki=new z,$i=new z,Js=new z,Zi=new z,qa=new z,Ji=new z;class Pt extends St{constructor(e=new kt,t=new Ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Zi.set(0,0,0);for(let d=0,c=r.length;d<c;d++){const f=o[d],m=r[d];f!==0&&(Js.fromBufferAttribute(m,e),a?Zi.addScaledVector(Js,f):Zi.addScaledVector(Js.sub(t),f))}t.add(Zi)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere),qi.applyMatrix4(r),In.copy(e.ray).recast(e.near),!(qi.containsPoint(In.origin)===!1&&(In.intersectSphere(qi,Xa)===null||In.origin.distanceToSquared(Xa)>(e.far-e.near)**2))&&(ja.copy(r).invert(),In.copy(e.ray).applyMatrix4(ja),!(n.boundingBox!==null&&In.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,In)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,d=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,m=r.attributes.normal,u=r.groups,x=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=u.length;v<y;v++){const g=u[v],h=a[g.materialIndex],A=Math.max(g.start,x.start),C=Math.min(o.count,Math.min(g.start+g.count,x.start+x.count));for(let M=A,R=C;M<R;M+=3){const T=o.getX(M),N=o.getX(M+1),_=o.getX(M+2);s=Qi(this,h,e,n,c,f,m,T,N,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,x.start),y=Math.min(o.count,x.start+x.count);for(let g=v,h=y;g<h;g+=3){const A=o.getX(g),C=o.getX(g+1),M=o.getX(g+2);s=Qi(this,a,e,n,c,f,m,A,C,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(a))for(let v=0,y=u.length;v<y;v++){const g=u[v],h=a[g.materialIndex],A=Math.max(g.start,x.start),C=Math.min(d.count,Math.min(g.start+g.count,x.start+x.count));for(let M=A,R=C;M<R;M+=3){const T=M,N=M+1,_=M+2;s=Qi(this,h,e,n,c,f,m,T,N,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,x.start),y=Math.min(d.count,x.start+x.count);for(let g=v,h=y;g<h;g+=3){const A=g,C=g+1,M=g+2;s=Qi(this,a,e,n,c,f,m,A,C,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Nc(i,e,t,n,s,r,a,o){let d;if(e.side===Dt?d=n.intersectTriangle(a,r,s,!0,o):d=n.intersectTriangle(s,r,a,e.side===Cn,o),d===null)return null;Ji.copy(o),Ji.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ji);return c<t.near||c>t.far?null:{distance:c,point:Ji.clone(),object:i}}function Qi(i,e,t,n,s,r,a,o,d,c){i.getVertexPosition(o,Yi),i.getVertexPosition(d,Ki),i.getVertexPosition(c,$i);const f=Nc(i,e,t,n,Yi,Ki,$i,qa);if(f){const m=new z;qt.getBarycoord(qa,Yi,Ki,$i,m),s&&(f.uv=qt.getInterpolatedAttribute(s,o,d,c,m,new Xe)),r&&(f.uv1=qt.getInterpolatedAttribute(r,o,d,c,m,new Xe)),a&&(f.normal=qt.getInterpolatedAttribute(a,o,d,c,m,new z),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:d,c,normal:new z,materialIndex:0};qt.getNormal(Yi,Ki,$i,u.normal),f.face=u,f.barycoord=m}return f}class Pc extends At{constructor(e=null,t=1,n=1,s,r,a,o,d,c=Mt,f=Mt,m,u){super(null,a,o,d,c,f,s,r,m,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qs=new z,Dc=new z,Lc=new Le;class Fn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Qs.subVectors(n,t).cross(Dc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Qs),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lc.getNormalMatrix(e),s=this.coplanarPoint(Qs).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new bs,Ic=new Xe(.5,.5),es=new z;class ca{constructor(e=new Fn,t=new Fn,n=new Fn,s=new Fn,r=new Fn,a=new Fn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],d=r[2],c=r[3],f=r[4],m=r[5],u=r[6],x=r[7],v=r[8],y=r[9],g=r[10],h=r[11],A=r[12],C=r[13],M=r[14],R=r[15];if(s[0].setComponents(c-a,x-f,h-v,R-A).normalize(),s[1].setComponents(c+a,x+f,h+v,R+A).normalize(),s[2].setComponents(c+o,x+m,h+y,R+C).normalize(),s[3].setComponents(c-o,x-m,h-y,R-C).normalize(),n)s[4].setComponents(d,u,g,M).normalize(),s[5].setComponents(c-d,x-u,h-g,R-M).normalize();else if(s[4].setComponents(c-d,x-u,h-g,R-M).normalize(),t===tn)s[5].setComponents(c+d,x+u,h+g,R+M).normalize();else if(t===Pi)s[5].setComponents(d,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(e){Un.center.set(0,0,0);const t=Ic.distanceTo(e.center);return Un.radius=.7071067811865476+t,Un.applyMatrix4(e.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(es.x=s.normal.x>0?e.max.x:e.min.x,es.y=s.normal.y>0?e.max.y:e.min.y,es.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class el extends gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ya=new lt,$r=new Qo,ts=new bs,ns=new z;class Uc extends St{constructor(e=new kt,t=new el){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(s),ts.radius+=r,e.ray.intersectsSphere(ts)===!1)return;Ya.copy(s).invert(),$r.copy(e.ray).applyMatrix4(Ya);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),d=o*o,c=n.index,m=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),x=Math.min(c.count,a.start+a.count);for(let v=u,y=x;v<y;v++){const g=c.getX(v);ns.fromBufferAttribute(m,g),Ka(ns,g,d,s,e,t,this)}}else{const u=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let v=u,y=x;v<y;v++)ns.fromBufferAttribute(m,v),Ka(ns,v,d,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ka(i,e,t,n,s,r,a){const o=$r.distanceSqToPoint(i);if(o<t){const d=new z;$r.closestPointToPoint(i,d),d.applyMatrix4(n);const c=s.ray.origin.distanceTo(d);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class tl extends At{constructor(e=[],t=Gn,n,s,r,a,o,d,c,f){super(e,t,n,s,r,a,o,d,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fc extends At{constructor(e,t,n,s,r,a,o,d,c){super(e,t,n,s,r,a,o,d,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fi extends At{constructor(e,t,n=rn,s,r,a,o=Mt,d=Mt,c,f=xn,m=1){if(f!==xn&&f!==zn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:m};super(u,s,r,a,o,d,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new la(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Oc extends fi{constructor(e,t=rn,n=Gn,s,r,a=Mt,o=Mt,d,c=xn){const f={width:e,height:e,depth:1},m=[f,f,f,f,f,f];super(e,e,t,n,s,r,a,o,d,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class nl extends At{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Vn extends kt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const d=[],c=[],f=[],m=[];let u=0,x=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(d),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(m,2));function v(y,g,h,A,C,M,R,T,N,_,w){const L=M/N,D=R/_,B=M/2,q=R/2,Z=T/2,k=N+1,X=_+1;let W=0,te=0;const se=new z;for(let le=0;le<X;le++){const fe=le*D-q;for(let xe=0;xe<k;xe++){const Be=xe*L-B;se[y]=Be*A,se[g]=fe*C,se[h]=Z,c.push(se.x,se.y,se.z),se[y]=0,se[g]=0,se[h]=T>0?1:-1,f.push(se.x,se.y,se.z),m.push(xe/N),m.push(1-le/_),W+=1}}for(let le=0;le<_;le++)for(let fe=0;fe<N;fe++){const xe=u+fe+k*le,Be=u+fe+k*(le+1),et=u+(fe+1)+k*(le+1),ke=u+(fe+1)+k*le;d.push(xe,Be,ke),d.push(Be,et,ke),te+=6}o.addGroup(x,te,w),x+=te,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ms extends kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),d=Math.floor(s),c=o+1,f=d+1,m=e/o,u=t/d,x=[],v=[],y=[],g=[];for(let h=0;h<f;h++){const A=h*u-a;for(let C=0;C<c;C++){const M=C*m-r;v.push(M,-A,0),y.push(0,0,1),g.push(C/o),g.push(1-h/d)}}for(let h=0;h<d;h++)for(let A=0;A<o;A++){const C=A+c*h,M=A+c*(h+1),R=A+1+c*(h+1),T=A+1+c*h;x.push(C,M,T),x.push(M,R,T)}this.setIndex(x),this.setAttribute("position",new Ct(v,3)),this.setAttribute("normal",new Ct(y,3)),this.setAttribute("uv",new Ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.width,e.height,e.widthSegments,e.heightSegments)}}class da extends kt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const d=Math.min(a+o,Math.PI);let c=0;const f=[],m=new z,u=new z,x=[],v=[],y=[],g=[];for(let h=0;h<=n;h++){const A=[],C=h/n,M=a+C*o,R=e*Math.cos(M),T=Math.sqrt(e*e-R*R);let N=0;h===0&&a===0?N=.5/t:h===n&&d===Math.PI&&(N=-.5/t);for(let _=0;_<=t;_++){const w=_/t,L=s+w*r;m.x=-T*Math.cos(L),m.y=R,m.z=T*Math.sin(L),v.push(m.x,m.y,m.z),u.copy(m).normalize(),y.push(u.x,u.y,u.z),g.push(w+N,1-C),A.push(c++)}f.push(A)}for(let h=0;h<n;h++)for(let A=0;A<t;A++){const C=f[h][A+1],M=f[h][A],R=f[h+1][A],T=f[h+1][A+1];(h!==0||a>0)&&x.push(C,M,T),(h!==n-1||d<Math.PI)&&x.push(M,R,T)}this.setIndex(x),this.setAttribute("position",new Ct(v,3)),this.setAttribute("normal",new Ct(y,3)),this.setAttribute("uv",new Ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _s extends kt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const d=[],c=[],f=[],m=[],u=new z,x=new z,v=new z;for(let y=0;y<=n;y++){const g=a+y/n*o;for(let h=0;h<=s;h++){const A=h/s*r;x.x=(e+t*Math.cos(g))*Math.cos(A),x.y=(e+t*Math.cos(g))*Math.sin(A),x.z=t*Math.sin(g),c.push(x.x,x.y,x.z),u.x=e*Math.cos(A),u.y=e*Math.sin(A),v.subVectors(x,u).normalize(),f.push(v.x,v.y,v.z),m.push(h/s),m.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=s;g++){const h=(s+1)*y+g-1,A=(s+1)*(y-1)+g-1,C=(s+1)*(y-1)+g,M=(s+1)*y+g;d.push(h,A,M),d.push(A,C,M)}this.setIndex(d),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function pi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if($a(s))s.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if($a(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Rt(i){const e={};for(let t=0;t<i.length;t++){const n=pi(i[t]);for(const s in n)e[s]=n[s]}return e}function $a(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Bc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function il(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const kc={clone:pi,merge:Rt};var zc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zc,this.fragmentShader=Gc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pi(e.uniforms),this.uniformsGroups=Bc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new je().setHex(s.value);break;case"v2":this.uniforms[n].value=new Xe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new dt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Le().fromArray(s.value);break;case"m4":this.uniforms[n].value=new lt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Hc extends an{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Za extends gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yr,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vc extends gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ql,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wc extends gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sl extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const er=new lt,Ja=new z,Qa=new z;class jc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Bt,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ca,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ja.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ja),Qa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qa),t.updateMatrixWorld(),er.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(er,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Pi||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(er)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const is=new z,ss=new mi,Zt=new z;class rl extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(is,ss,Zt),Zt.x===1&&Zt.y===1&&Zt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(is,ss,Zt.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(is,ss,Zt),Zt.x===1&&Zt.y===1&&Zt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(is,ss,Zt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wn=new z,eo=new Xe,to=new Xe;class Vt extends rl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wn.x,wn.y).multiplyScalar(-e/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-e/wn.z)}getViewSize(e,t){return this.getViewBounds(e,eo,to),t.subVectors(to,eo)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ns*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const d=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/d,t-=a.offsetY*n/c,s*=a.width/d,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ua extends rl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=f*this.view.offsetY,d=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xc extends jc{constructor(){super(new ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class no extends sl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new Xc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class qc extends sl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ri=-90,ai=1;class Yc extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Vt(ri,ai,e,t);s.layers=this.layers,this.add(s);const r=new Vt(ri,ai,e,t);r.layers=this.layers,this.add(r);const a=new Vt(ri,ai,e,t);a.layers=this.layers,this.add(a);const o=new Vt(ri,ai,e,t);o.layers=this.layers,this.add(o);const d=new Vt(ri,ai,e,t);d.layers=this.layers,this.add(d);const c=new Vt(ri,ai,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,d]=t;for(const c of t)this.remove(c);if(e===tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Pi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,d,c,f]=this.children,m=e.getRenderTarget(),u=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(m,u,x),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Kc extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class al{static{al.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}}function io(i,e,t,n){const s=$c(n);switch(t){case Wo:return i*e;case Xo:return i*e/s.components*s.byteLength;case ia:return i*e/s.components*s.byteLength;case Hn:return i*e*2/s.components*s.byteLength;case sa:return i*e*2/s.components*s.byteLength;case jo:return i*e*3/s.components*s.byteLength;case Yt:return i*e*4/s.components*s.byteLength;case ra:return i*e*4/s.components*s.byteLength;case ls:case cs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ds:case us:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vr:case Mr:return Math.max(i,16)*Math.max(e,8)/4;case _r:case br:return Math.max(i,8)*Math.max(e,8)/2;case Sr:case yr:case Tr:case wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Er:case fs:case Ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Nr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Pr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Dr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Lr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ir:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ur:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Or:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Br:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case kr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case zr:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Gr:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Hr:case Vr:case Wr:return Math.ceil(i/4)*Math.ceil(e/4)*16;case jr:case Xr:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ps:case qr:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $c(i){switch(i){case Bt:case zo:return{byteLength:1,components:1};case Ci:case Go:case gn:return{byteLength:2,components:1};case ta:case na:return{byteLength:2,components:4};case rn:case ea:case en:return{byteLength:4,components:1};case Ho:case Vo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qr}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qr);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ol(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Zc(i){const e=new WeakMap;function t(o,d){const c=o.array,f=o.usage,m=c.byteLength,u=i.createBuffer();i.bindBuffer(d,u),i.bufferData(d,c,f),o.onUploadCallback();let x;if(c instanceof Float32Array)x=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)x=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)x=i.SHORT;else if(c instanceof Uint32Array)x=i.UNSIGNED_INT;else if(c instanceof Int32Array)x=i.INT;else if(c instanceof Int8Array)x=i.BYTE;else if(c instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:x,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,d,c){const f=d.array,m=d.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,f);else{m.sort((x,v)=>x.start-v.start);let u=0;for(let x=1;x<m.length;x++){const v=m[u],y=m[x];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++u,m[u]=y)}m.length=u+1;for(let x=0,v=m.length;x<v;x++){const y=m[x];i.bufferSubData(c,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const d=e.get(o);d&&(i.deleteBuffer(d.buffer),e.delete(o))}function a(o,d){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,d));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,d),c.version=o.version}}return{get:s,remove:r,update:a}}var Jc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,td=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ad=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,od=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ud=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Md=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ad=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Wd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$d=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eu=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,tu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,su=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ru=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,au=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ou=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,du=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Mu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Su=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Au=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ru=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Du=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Uu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ou=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ku=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ju=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$u=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ju=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,th=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ih=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ah=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,lh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ch=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ph=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_h=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Th=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ah=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ch=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ph=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:Jc,alphahash_pars_fragment:Qc,alphamap_fragment:ed,alphamap_pars_fragment:td,alphatest_fragment:nd,alphatest_pars_fragment:id,aomap_fragment:sd,aomap_pars_fragment:rd,batching_pars_vertex:ad,batching_vertex:od,begin_vertex:ld,beginnormal_vertex:cd,bsdfs:dd,iridescence_fragment:ud,bumpmap_pars_fragment:hd,clipping_planes_fragment:fd,clipping_planes_pars_fragment:pd,clipping_planes_pars_vertex:md,clipping_planes_vertex:gd,color_fragment:xd,color_pars_fragment:_d,color_pars_vertex:vd,color_vertex:bd,common:Md,cube_uv_reflection_fragment:Sd,defaultnormal_vertex:yd,displacementmap_pars_vertex:Ed,displacementmap_vertex:Td,emissivemap_fragment:wd,emissivemap_pars_fragment:Ad,colorspace_fragment:Rd,colorspace_pars_fragment:Cd,envmap_fragment:Nd,envmap_common_pars_fragment:Pd,envmap_pars_fragment:Dd,envmap_pars_vertex:Ld,envmap_physical_pars_fragment:Wd,envmap_vertex:Id,fog_vertex:Ud,fog_pars_vertex:Fd,fog_fragment:Od,fog_pars_fragment:Bd,gradientmap_pars_fragment:kd,lightmap_pars_fragment:zd,lights_lambert_fragment:Gd,lights_lambert_pars_fragment:Hd,lights_pars_begin:Vd,lights_toon_fragment:jd,lights_toon_pars_fragment:Xd,lights_phong_fragment:qd,lights_phong_pars_fragment:Yd,lights_physical_fragment:Kd,lights_physical_pars_fragment:$d,lights_fragment_begin:Zd,lights_fragment_maps:Jd,lights_fragment_end:Qd,lightprobes_pars_fragment:eu,logdepthbuf_fragment:tu,logdepthbuf_pars_fragment:nu,logdepthbuf_pars_vertex:iu,logdepthbuf_vertex:su,map_fragment:ru,map_pars_fragment:au,map_particle_fragment:ou,map_particle_pars_fragment:lu,metalnessmap_fragment:cu,metalnessmap_pars_fragment:du,morphinstance_vertex:uu,morphcolor_vertex:hu,morphnormal_vertex:fu,morphtarget_pars_vertex:pu,morphtarget_vertex:mu,normal_fragment_begin:gu,normal_fragment_maps:xu,normal_pars_fragment:_u,normal_pars_vertex:vu,normal_vertex:bu,normalmap_pars_fragment:Mu,clearcoat_normal_fragment_begin:Su,clearcoat_normal_fragment_maps:yu,clearcoat_pars_fragment:Eu,iridescence_pars_fragment:Tu,opaque_fragment:wu,packing:Au,premultiplied_alpha_fragment:Ru,project_vertex:Cu,dithering_fragment:Nu,dithering_pars_fragment:Pu,roughnessmap_fragment:Du,roughnessmap_pars_fragment:Lu,shadowmap_pars_fragment:Iu,shadowmap_pars_vertex:Uu,shadowmap_vertex:Fu,shadowmask_pars_fragment:Ou,skinbase_vertex:Bu,skinning_pars_vertex:ku,skinning_vertex:zu,skinnormal_vertex:Gu,specularmap_fragment:Hu,specularmap_pars_fragment:Vu,tonemapping_fragment:Wu,tonemapping_pars_fragment:ju,transmission_fragment:Xu,transmission_pars_fragment:qu,uv_pars_fragment:Yu,uv_pars_vertex:Ku,uv_vertex:$u,worldpos_vertex:Zu,background_vert:Ju,background_frag:Qu,backgroundCube_vert:eh,backgroundCube_frag:th,cube_vert:nh,cube_frag:ih,depth_vert:sh,depth_frag:rh,distance_vert:ah,distance_frag:oh,equirect_vert:lh,equirect_frag:ch,linedashed_vert:dh,linedashed_frag:uh,meshbasic_vert:hh,meshbasic_frag:fh,meshlambert_vert:ph,meshlambert_frag:mh,meshmatcap_vert:gh,meshmatcap_frag:xh,meshnormal_vert:_h,meshnormal_frag:vh,meshphong_vert:bh,meshphong_frag:Mh,meshphysical_vert:Sh,meshphysical_frag:yh,meshtoon_vert:Eh,meshtoon_frag:Th,points_vert:wh,points_frag:Ah,shadow_vert:Rh,shadow_frag:Ch,sprite_vert:Nh,sprite_frag:Ph},pe={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},Qt={basic:{uniforms:Rt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Rt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Rt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Rt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Rt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new je(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Rt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Rt([pe.points,pe.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Rt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Rt([pe.common,pe.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Rt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Rt([pe.sprite,pe.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:Rt([pe.common,pe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:Rt([pe.lights,pe.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Qt.physical={uniforms:Rt([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const rs={r:0,b:0,g:0},Dh=new lt,ll=new Le;ll.set(-1,0,0,0,1,0,0,0,1);function Lh(i,e,t,n,s,r){const a=new je(0);let o=s===!0?0:1,d,c,f=null,m=0,u=null;function x(A){let C=A.isScene===!0?A.background:null;if(C&&C.isTexture){const M=A.backgroundBlurriness>0;C=e.get(C,M)}return C}function v(A){let C=!1;const M=x(A);M===null?g(a,o):M&&M.isColor&&(g(M,1),C=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(A,C){const M=x(C);M&&(M.isCubeTexture||M.mapping===vs)?(c===void 0&&(c=new Pt(new Vn(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:pi(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,T,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Dh.makeRotationFromEuler(C.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ll),c.material.toneMapped=Ve.getTransfer(M.colorSpace)!==Qe,(f!==M||m!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,m=M.version,u=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(d===void 0&&(d=new Pt(new Ms(2,2),new an({name:"BackgroundMaterial",uniforms:pi(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(d)),d.material.uniforms.t2D.value=M,d.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,d.material.toneMapped=Ve.getTransfer(M.colorSpace)!==Qe,M.matrixAutoUpdate===!0&&M.updateMatrix(),d.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||m!==M.version||u!==i.toneMapping)&&(d.material.needsUpdate=!0,f=M,m=M.version,u=i.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null))}function g(A,C){A.getRGB(rs,il(i)),t.buffers.color.setClear(rs.r,rs.g,rs.b,C,r)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,C=1){a.set(A),o=C,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,g(a,o)},render:v,addToRenderList:y,dispose:h}}function Ih(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(D,B,q,Z,k){let X=!1;const W=m(D,Z,q,B);r!==W&&(r=W,c(r.object)),X=x(D,Z,q,k),X&&v(D,Z,q,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,M(D,B,q,Z),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function d(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function f(D){return i.deleteVertexArray(D)}function m(D,B,q,Z){const k=Z.wireframe===!0;let X=n[B.id];X===void 0&&(X={},n[B.id]=X);const W=D.isInstancedMesh===!0?D.id:0;let te=X[W];te===void 0&&(te={},X[W]=te);let se=te[q.id];se===void 0&&(se={},te[q.id]=se);let le=se[k];return le===void 0&&(le=u(d()),se[k]=le),le}function u(D){const B=[],q=[],Z=[];for(let k=0;k<t;k++)B[k]=0,q[k]=0,Z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:Z,object:D,attributes:{},index:null}}function x(D,B,q,Z){const k=r.attributes,X=B.attributes;let W=0;const te=q.getAttributes();for(const se in te)if(te[se].location>=0){const fe=k[se];let xe=X[se];if(xe===void 0&&(se==="instanceMatrix"&&D.instanceMatrix&&(xe=D.instanceMatrix),se==="instanceColor"&&D.instanceColor&&(xe=D.instanceColor)),fe===void 0||fe.attribute!==xe||xe&&fe.data!==xe.data)return!0;W++}return r.attributesNum!==W||r.index!==Z}function v(D,B,q,Z){const k={},X=B.attributes;let W=0;const te=q.getAttributes();for(const se in te)if(te[se].location>=0){let fe=X[se];fe===void 0&&(se==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),se==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor));const xe={};xe.attribute=fe,fe&&fe.data&&(xe.data=fe.data),k[se]=xe,W++}r.attributes=k,r.attributesNum=W,r.index=Z}function y(){const D=r.newAttributes;for(let B=0,q=D.length;B<q;B++)D[B]=0}function g(D){h(D,0)}function h(D,B){const q=r.newAttributes,Z=r.enabledAttributes,k=r.attributeDivisors;q[D]=1,Z[D]===0&&(i.enableVertexAttribArray(D),Z[D]=1),k[D]!==B&&(i.vertexAttribDivisor(D,B),k[D]=B)}function A(){const D=r.newAttributes,B=r.enabledAttributes;for(let q=0,Z=B.length;q<Z;q++)B[q]!==D[q]&&(i.disableVertexAttribArray(q),B[q]=0)}function C(D,B,q,Z,k,X,W){W===!0?i.vertexAttribIPointer(D,B,q,k,X):i.vertexAttribPointer(D,B,q,Z,k,X)}function M(D,B,q,Z){y();const k=Z.attributes,X=q.getAttributes(),W=B.defaultAttributeValues;for(const te in X){const se=X[te];if(se.location>=0){let le=k[te];if(le===void 0&&(te==="instanceMatrix"&&D.instanceMatrix&&(le=D.instanceMatrix),te==="instanceColor"&&D.instanceColor&&(le=D.instanceColor)),le!==void 0){const fe=le.normalized,xe=le.itemSize,Be=e.get(le);if(Be===void 0)continue;const et=Be.buffer,ke=Be.type,J=Be.bytesPerElement,ae=ke===i.INT||ke===i.UNSIGNED_INT||le.gpuType===ea;if(le.isInterleavedBufferAttribute){const Q=le.data,_e=Q.stride,Re=le.offset;if(Q.isInstancedInterleavedBuffer){for(let ye=0;ye<se.locationSize;ye++)h(se.location+ye,Q.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ye=0;ye<se.locationSize;ye++)g(se.location+ye);i.bindBuffer(i.ARRAY_BUFFER,et);for(let ye=0;ye<se.locationSize;ye++)C(se.location+ye,xe/se.locationSize,ke,fe,_e*J,(Re+xe/se.locationSize*ye)*J,ae)}else{if(le.isInstancedBufferAttribute){for(let Q=0;Q<se.locationSize;Q++)h(se.location+Q,le.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Q=0;Q<se.locationSize;Q++)g(se.location+Q);i.bindBuffer(i.ARRAY_BUFFER,et);for(let Q=0;Q<se.locationSize;Q++)C(se.location+Q,xe/se.locationSize,ke,fe,xe*J,xe/se.locationSize*Q*J,ae)}}else if(W!==void 0){const fe=W[te];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(se.location,fe);break;case 3:i.vertexAttrib3fv(se.location,fe);break;case 4:i.vertexAttrib4fv(se.location,fe);break;default:i.vertexAttrib1fv(se.location,fe)}}}}A()}function R(){w();for(const D in n){const B=n[D];for(const q in B){const Z=B[q];for(const k in Z){const X=Z[k];for(const W in X)f(X[W].object),delete X[W];delete Z[k]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;const B=n[D.id];for(const q in B){const Z=B[q];for(const k in Z){const X=Z[k];for(const W in X)f(X[W].object),delete X[W];delete Z[k]}}delete n[D.id]}function N(D){for(const B in n){const q=n[B];for(const Z in q){const k=q[Z];if(k[D.id]===void 0)continue;const X=k[D.id];for(const W in X)f(X[W].object),delete X[W];delete k[D.id]}}}function _(D){for(const B in n){const q=n[B],Z=D.isInstancedMesh===!0?D.id:0,k=q[Z];if(k!==void 0){for(const X in k){const W=k[X];for(const te in W)f(W[te].object),delete W[te];delete k[X]}delete q[Z],Object.keys(q).length===0&&delete n[B]}}}function w(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:L,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:g,disableUnusedAttributes:A}}function Uh(i,e,t){let n;function s(d){n=d}function r(d,c){i.drawArrays(n,d,c),t.update(c,n,1)}function a(d,c,f){f!==0&&(i.drawArraysInstanced(n,d,c,f),t.update(c,n,f))}function o(d,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,c,0,f);let u=0;for(let x=0;x<f;x++)u+=c[x];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Fh(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(N){return!(N!==Yt&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){const _=N===gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Bt&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==en&&!_)}function d(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=d(c);f!==c&&(Pe("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const m=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:d,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:u,maxTextures:x,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:A,maxVaryings:C,maxFragmentUniforms:M,maxSamples:R,samples:T}}function Oh(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Fn,o=new Le,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(m,u){const x=m.length!==0||u||n!==0||s;return s=u,n=m.length,x},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,u){t=f(m,u,0)},this.setState=function(m,u,x){const v=m.clippingPlanes,y=m.clipIntersection,g=m.clipShadows,h=i.get(m);if(!s||v===null||v.length===0||r&&!g)r?f(null):c();else{const A=r?0:n,C=A*4;let M=h.clippingState||null;d.value=M,M=f(v,u,C,x);for(let R=0;R!==C;++R)M[R]=t[R];h.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function c(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(m,u,x,v){const y=m!==null?m.length:0;let g=null;if(y!==0){if(g=d.value,v!==!0||g===null){const h=x+y*4,A=u.matrixWorldInverse;o.getNormalMatrix(A),(g===null||g.length<h)&&(g=new Float32Array(h));for(let C=0,M=x;C!==y;++C,M+=4)a.copy(m[C]).applyMatrix4(A,o),a.normal.toArray(g,M),g[M+3]=a.constant}d.value=g,d.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}const Rn=4,so=[.125,.215,.35,.446,.526,.582],Bn=20,Bh=256,Ei=new ua,ro=new je;let tr=null,nr=0,ir=0,sr=!1;const kh=new z;class ao{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=kh}=r;tr=this._renderer.getRenderTarget(),nr=this._renderer.getActiveCubeFace(),ir=this._renderer.getActiveMipmapLevel(),sr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,n,s,d,o),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=co(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(tr,nr,ir),this._renderer.xr.enabled=sr,e.scissorTest=!1,oi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gn||e.mapping===hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tr=this._renderer.getRenderTarget(),nr=this._renderer.getActiveCubeFace(),ir=this._renderer.getActiveMipmapLevel(),sr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:gn,format:Yt,colorSpace:ms,depthBuffer:!1},s=oo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oo(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zh(r)),this._blurMaterial=Hh(r,e,t),this._ggxMaterial=Gh(r,e,t)}return s}_compileMaterial(e){const t=new Pt(new kt,e);this._renderer.compile(t,Ei)}_sceneToCubeUV(e,t,n,s,r){const d=new Vt(90,1,t,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],m=this._renderer,u=m.autoClear,x=m.toneMapping;m.getClearColor(ro),m.toneMapping=nn,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new Vn,new Ri({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,g=y.material;let h=!1;const A=e.background;A?A.isColor&&(g.color.copy(A),e.background=null,h=!0):(g.color.copy(ro),h=!0);for(let C=0;C<6;C++){const M=C%3;M===0?(d.up.set(0,c[C],0),d.position.set(r.x,r.y,r.z),d.lookAt(r.x+f[C],r.y,r.z)):M===1?(d.up.set(0,0,c[C]),d.position.set(r.x,r.y,r.z),d.lookAt(r.x,r.y+f[C],r.z)):(d.up.set(0,c[C],0),d.position.set(r.x,r.y,r.z),d.lookAt(r.x,r.y,r.z+f[C]));const R=this._cubeSize;oi(s,M*R,C>2?R:0,R,R),m.setRenderTarget(s),h&&m.render(y,d),m.render(e,d)}m.toneMapping=x,m.autoClear=u,e.background=A}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Gn||e.mapping===hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=co()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const d=this._cubeSize;oi(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(a,Ei)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const d=a.uniforms,c=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),m=Math.sqrt(c*c-f*f),u=0+c*1.25,x=m*u,{_lodMax:v}=this,y=this._sizeLods[n],g=3*y*(n>v-Rn?n-v+Rn:0),h=4*(this._cubeSize-y);d.envMap.value=e.texture,d.roughness.value=x,d.mipInt.value=v-t,oi(r,g,h,3*y,2*y),s.setRenderTarget(r),s.render(o,Ei),d.envMap.value=r.texture,d.roughness.value=0,d.mipInt.value=v-n,oi(e,g,h,3*y,2*y),s.setRenderTarget(e),s.render(o,Ei)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const d=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");const f=3,m=this._lodMeshes[s];m.material=c;const u=c.uniforms,x=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*x):2*Math.PI/(2*Bn-1),y=r/v,g=isFinite(r)?1+Math.floor(f*y):Bn;g>Bn&&Pe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Bn}`);const h=[];let A=0;for(let N=0;N<Bn;++N){const _=N/y,w=Math.exp(-_*_/2);h.push(w),N===0?A+=w:N<g&&(A+=2*w)}for(let N=0;N<h.length;N++)h[N]=h[N]/A;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=h,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:C}=this;u.dTheta.value=v,u.mipInt.value=C-n;const M=this._sizeLods[s],R=3*M*(s>C-Rn?s-C+Rn:0),T=4*(this._cubeSize-M);oi(t,R,T,3*M,2*M),d.setRenderTarget(t),d.render(m,Ei)}}function zh(i){const e=[],t=[],n=[];let s=i;const r=i-Rn+1+so.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let d=1/o;a>i-Rn?d=so[a-i+Rn-1]:a===0&&(d=0),t.push(d);const c=1/(o-2),f=-c,m=1+c,u=[f,f,m,f,m,m,f,f,m,m,f,m],x=6,v=6,y=3,g=2,h=1,A=new Float32Array(y*v*x),C=new Float32Array(g*v*x),M=new Float32Array(h*v*x);for(let T=0;T<x;T++){const N=T%3*2/3-1,_=T>2?0:-1,w=[N,_,0,N+2/3,_,0,N+2/3,_+1,0,N,_,0,N+2/3,_+1,0,N,_+1,0];A.set(w,y*v*T),C.set(u,g*v*T);const L=[T,T,T,T,T,T];M.set(L,h*v*T)}const R=new kt;R.setAttribute("position",new Kt(A,y)),R.setAttribute("uv",new Kt(C,g)),R.setAttribute("faceIndex",new Kt(M,h)),n.push(new Pt(R,null)),s>Rn&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function oo(i,e,t){const n=new sn(i,e,t);return n.texture.mapping=vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Gh(i,e,t){return new an({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bh,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ss(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Hh(i,e,t){const n=new Float32Array(Bn),s=new z(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ss(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function lo(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ss(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function co(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ss(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Ss(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class cl extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new tl(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Vn(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:pn});r.uniforms.tEquirect.value=t;const a=new Pt(s,r),o=t.minFilter;return t.minFilter===kn&&(t.minFilter=wt),new Yc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function Vh(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,x=!1){return u==null?null:x?a(u):r(u)}function r(u){if(u&&u.isTexture){const x=u.mapping;if(x===As||x===Rs)if(e.has(u)){const v=e.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const y=new cl(v.height);return y.fromEquirectangularTexture(i,u),e.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const x=u.mapping,v=x===As||x===Rs,y=x===Gn||x===hi;if(v||y){let g=t.get(u);const h=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return n===null&&(n=new ao(i)),g=v?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{const A=u.image;return v&&A&&A.height>0||y&&A&&d(A)?(n===null&&(n=new ao(i)),g=v?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",f),g.texture):null}}}return u}function o(u,x){return x===As?u.mapping=Gn:x===Rs&&(u.mapping=hi),u}function d(u){let x=0;const v=6;for(let y=0;y<v;y++)u[y]!==void 0&&x++;return x===v}function c(u){const x=u.target;x.removeEventListener("dispose",c);const v=e.get(x);v!==void 0&&(e.delete(x),v.dispose())}function f(u){const x=u.target;x.removeEventListener("dispose",f);const v=t.get(x);v!==void 0&&(t.delete(x),v.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function Wh(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ci("WebGLRenderer: "+n+" extension not supported."),s}}}function jh(i,e,t,n){const s={},r=new WeakMap;function a(m){const u=m.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",a),delete s[u.id];const x=r.get(u);x&&(e.remove(x),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(m,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function d(m){const u=m.attributes;for(const x in u)e.update(u[x],i.ARRAY_BUFFER)}function c(m){const u=[],x=m.index,v=m.attributes.position;let y=0;if(v===void 0)return;if(x!==null){const A=x.array;y=x.version;for(let C=0,M=A.length;C<M;C+=3){const R=A[C+0],T=A[C+1],N=A[C+2];u.push(R,T,T,N,N,R)}}else{const A=v.array;y=v.version;for(let C=0,M=A.length/3-1;C<M;C+=3){const R=C+0,T=C+1,N=C+2;u.push(R,T,T,N,N,R)}}const g=new(v.count>=65535?Jo:Zo)(u,1);g.version=y;const h=r.get(m);h&&e.remove(h),r.set(m,g)}function f(m){const u=r.get(m);if(u){const x=m.index;x!==null&&u.version<x.version&&c(m)}else c(m);return r.get(m)}return{get:o,update:d,getWireframeAttribute:f}}function Xh(i,e,t){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function d(m,u){i.drawElements(n,u,r,m*a),t.update(u,n,1)}function c(m,u,x){x!==0&&(i.drawElementsInstanced(n,u,r,m*a,x),t.update(u,n,x))}function f(m,u,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,m,0,x);let y=0;for(let g=0;g<x;g++)y+=u[g];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=d,this.renderInstances=c,this.renderMultiDraw=f}function qh(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Yh(i,e,t){const n=new WeakMap,s=new dt;function r(a,o,d){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=f!==void 0?f.length:0;let u=n.get(o);if(u===void 0||u.count!==m){let w=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const x=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let C=0;x===!0&&(C=1),v===!0&&(C=2),y===!0&&(C=3);let M=o.attributes.position.count*C,R=1;M>e.maxTextureSize&&(R=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const T=new Float32Array(M*R*4*m),N=new Yo(T,M,R,m);N.type=en,N.needsUpdate=!0;const _=C*4;for(let L=0;L<m;L++){const D=g[L],B=h[L],q=A[L],Z=M*R*4*L;for(let k=0;k<D.count;k++){const X=k*_;x===!0&&(s.fromBufferAttribute(D,k),T[Z+X+0]=s.x,T[Z+X+1]=s.y,T[Z+X+2]=s.z,T[Z+X+3]=0),v===!0&&(s.fromBufferAttribute(B,k),T[Z+X+4]=s.x,T[Z+X+5]=s.y,T[Z+X+6]=s.z,T[Z+X+7]=0),y===!0&&(s.fromBufferAttribute(q,k),T[Z+X+8]=s.x,T[Z+X+9]=s.y,T[Z+X+10]=s.z,T[Z+X+11]=q.itemSize===4?s.w:1)}}u={count:m,texture:N,size:new Xe(M,R)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let x=0;for(let y=0;y<c.length;y++)x+=c[y];const v=o.morphTargetsRelative?1:1-x;d.getUniforms().setValue(i,"morphTargetBaseInfluence",v),d.getUniforms().setValue(i,"morphTargetInfluences",c)}d.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Kh(i,e,t,n,s){let r=new WeakMap;function a(c){const f=s.render.frame,m=c.geometry,u=e.get(c,m);if(r.get(u)!==f&&(e.update(u),r.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",d)===!1&&c.addEventListener("dispose",d),r.get(c)!==f&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){const x=c.skeleton;r.get(x)!==f&&(x.update(),r.set(x,f))}return u}function o(){r=new WeakMap}function d(c){const f=c.target;f.removeEventListener("dispose",d),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const $h={[Do]:"LINEAR_TONE_MAPPING",[Lo]:"REINHARD_TONE_MAPPING",[Io]:"CINEON_TONE_MAPPING",[Uo]:"ACES_FILMIC_TONE_MAPPING",[Oo]:"AGX_TONE_MAPPING",[Bo]:"NEUTRAL_TONE_MAPPING",[Fo]:"CUSTOM_TONE_MAPPING"};function Zh(i,e,t,n,s,r){const a=new sn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new fi(e,t):void 0}),o=new sn(e,t,{type:gn,depthBuffer:!1,stencilBuffer:!1}),d=new kt;d.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ct([0,2,0,0,2,0],2));const c=new Hc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Pt(d,c),m=new ua(-1,1,1,-1,0,1);let u=null,x=null,v=!1,y,g=null,h=[],A=!1;this.setSize=function(C,M){a.setSize(C,M),o.setSize(C,M);for(let R=0;R<h.length;R++){const T=h[R];T.setSize&&T.setSize(C,M)}},this.setEffects=function(C){h=C,A=h.length>0&&h[0].isRenderPass===!0;const M=a.width,R=a.height;for(let T=0;T<h.length;T++){const N=h[T];N.setSize&&N.setSize(M,R)}},this.begin=function(C,M){if(v||C.toneMapping===nn&&h.length===0)return!1;if(g=M,M!==null){const R=M.width,T=M.height;(a.width!==R||a.height!==T)&&this.setSize(R,T)}return A===!1&&C.setRenderTarget(a),y=C.toneMapping,C.toneMapping=nn,!0},this.hasRenderPass=function(){return A},this.end=function(C,M){C.toneMapping=y,v=!0;let R=a,T=o;for(let N=0;N<h.length;N++){const _=h[N];if(_.enabled!==!1&&(_.render(C,T,R,M),_.needsSwap!==!1)){const w=R;R=T,T=w}}if(u!==C.outputColorSpace||x!==C.toneMapping){u=C.outputColorSpace,x=C.toneMapping,c.defines={},Ve.getTransfer(u)===Qe&&(c.defines.SRGB_TRANSFER="");const N=$h[x];N&&(c.defines[N]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=R.texture,C.setRenderTarget(g),C.render(f,m),g=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),d.dispose(),c.dispose()}}const dl=new At,Zr=new fi(1,1),ul=new Yo,hl=new xc,fl=new tl,uo=[],ho=[],fo=new Float32Array(16),po=new Float32Array(9),mo=new Float32Array(4);function xi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=uo[s];if(r===void 0&&(r=new Float32Array(s),uo[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ys(i,e){let t=ho[e];t===void 0&&(t=new Int32Array(e),ho[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Jh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Qh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function nf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(xt(t,n))return;mo.set(n),i.uniformMatrix2fv(this.addr,!1,mo),_t(t,n)}}function sf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(xt(t,n))return;po.set(n),i.uniformMatrix3fv(this.addr,!1,po),_t(t,n)}}function rf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(xt(t,n))return;fo.set(n),i.uniformMatrix4fv(this.addr,!1,fo),_t(t,n)}}function af(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function lf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function cf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function df(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function uf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function hf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function pf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zr.compareFunction=t.isReversedDepthBuffer()?oa:aa,r=Zr):r=dl,t.setTexture2D(e||r,s)}function mf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||hl,s)}function gf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||fl,s)}function xf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ul,s)}function _f(i){switch(i){case 5126:return Jh;case 35664:return Qh;case 35665:return ef;case 35666:return tf;case 35674:return nf;case 35675:return sf;case 35676:return rf;case 5124:case 35670:return af;case 35667:case 35671:return of;case 35668:case 35672:return lf;case 35669:case 35673:return cf;case 5125:return df;case 36294:return uf;case 36295:return hf;case 36296:return ff;case 35678:case 36198:case 36298:case 36306:case 35682:return pf;case 35679:case 36299:case 36307:return mf;case 35680:case 36300:case 36308:case 36293:return gf;case 36289:case 36303:case 36311:case 36292:return xf}}function vf(i,e){i.uniform1fv(this.addr,e)}function bf(i,e){const t=xi(e,this.size,2);i.uniform2fv(this.addr,t)}function Mf(i,e){const t=xi(e,this.size,3);i.uniform3fv(this.addr,t)}function Sf(i,e){const t=xi(e,this.size,4);i.uniform4fv(this.addr,t)}function yf(i,e){const t=xi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ef(i,e){const t=xi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Tf(i,e){const t=xi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function wf(i,e){i.uniform1iv(this.addr,e)}function Af(i,e){i.uniform2iv(this.addr,e)}function Rf(i,e){i.uniform3iv(this.addr,e)}function Cf(i,e){i.uniform4iv(this.addr,e)}function Nf(i,e){i.uniform1uiv(this.addr,e)}function Pf(i,e){i.uniform2uiv(this.addr,e)}function Df(i,e){i.uniform3uiv(this.addr,e)}function Lf(i,e){i.uniform4uiv(this.addr,e)}function If(i,e,t){const n=this.cache,s=e.length,r=ys(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Zr:a=dl;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Uf(i,e,t){const n=this.cache,s=e.length,r=ys(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||hl,r[a])}function Ff(i,e,t){const n=this.cache,s=e.length,r=ys(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||fl,r[a])}function Of(i,e,t){const n=this.cache,s=e.length,r=ys(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ul,r[a])}function Bf(i){switch(i){case 5126:return vf;case 35664:return bf;case 35665:return Mf;case 35666:return Sf;case 35674:return yf;case 35675:return Ef;case 35676:return Tf;case 5124:case 35670:return wf;case 35667:case 35671:return Af;case 35668:case 35672:return Rf;case 35669:case 35673:return Cf;case 5125:return Nf;case 36294:return Pf;case 36295:return Df;case 36296:return Lf;case 35678:case 36198:case 36298:case 36306:case 35682:return If;case 35679:case 36299:case 36307:return Uf;case 35680:case 36300:case 36308:case 36293:return Ff;case 36289:case 36303:case 36311:case 36292:return Of}}class kf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_f(t.type)}}class zf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bf(t.type)}}class Gf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const rr=/(\w+)(\])?(\[|\.)?/g;function go(i,e){i.seq.push(e),i.map[e.id]=e}function Hf(i,e,t){const n=i.name,s=n.length;for(rr.lastIndex=0;;){const r=rr.exec(n),a=rr.lastIndex;let o=r[1];const d=r[2]==="]",c=r[3];if(d&&(o=o|0),c===void 0||c==="["&&a+2===s){go(t,c===void 0?new kf(o,i,e):new zf(o,i,e));break}else{let m=t.map[o];m===void 0&&(m=new Gf(o),go(t,m)),t=m}}}class hs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),d=e.getUniformLocation(t,o.name);Hf(o,d,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],d=n[o.id];d.needsUpdate!==!1&&o.setValue(e,d.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function xo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Vf=37297;let Wf=0;function jf(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const _o=new Le;function Xf(i){Ve._getMatrix(_o,Ve.workingColorSpace,i);const e=`mat3( ${_o.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(i)){case gs:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function vo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+jf(i.getShaderSource(e),o)}else return r}function qf(i,e){const t=Xf(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Yf={[Do]:"Linear",[Lo]:"Reinhard",[Io]:"Cineon",[Uo]:"ACESFilmic",[Oo]:"AgX",[Bo]:"Neutral",[Fo]:"Custom"};function Kf(i,e){const t=Yf[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const as=new z;function $f(){Ve.getLuminanceCoefficients(as);const i=as.x.toFixed(4),e=as.y.toFixed(4),t=as.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ai).join(`
`)}function Jf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ai(i){return i!==""}function bo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ep=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jr(i){return i.replace(ep,np)}const tp=new Map;function np(i,e){let t=Fe[e];if(t===void 0){const n=tp.get(e);if(n!==void 0)t=Fe[n],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Jr(t)}const ip=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function So(i){return i.replace(ip,sp)}function sp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yo(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const rp={[os]:"SHADOWMAP_TYPE_PCF",[wi]:"SHADOWMAP_TYPE_VSM"};function ap(i){return rp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const op={[Gn]:"ENVMAP_TYPE_CUBE",[hi]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE_UV"};function lp(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":op[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const cp={[hi]:"ENVMAP_MODE_REFRACTION"};function dp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":cp[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const up={[Po]:"ENVMAP_BLENDING_MULTIPLY",[$l]:"ENVMAP_BLENDING_MIX",[Zl]:"ENVMAP_BLENDING_ADD"};function hp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":up[i.combine]||"ENVMAP_BLENDING_NONE"}function fp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function pp(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const d=ap(t),c=lp(t),f=dp(t),m=hp(t),u=fp(t),x=Zf(t),v=Jf(r),y=s.createProgram();let g,h,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ai).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ai).join(`
`),h.length>0&&(h+=`
`)):(g=[yo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ai).join(`
`),h=[yo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nn?"#define TONE_MAPPING":"",t.toneMapping!==nn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==nn?Kf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,qf("linearToOutputTexel",t.outputColorSpace),$f(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ai).join(`
`)),a=Jr(a),a=bo(a,t),a=Mo(a,t),o=Jr(o),o=bo(o,t),o=Mo(o,t),a=So(a),o=So(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",t.glslVersion===Pa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const C=A+g+a,M=A+h+o,R=xo(s,s.VERTEX_SHADER,C),T=xo(s,s.FRAGMENT_SHADER,M);s.attachShader(y,R),s.attachShader(y,T),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function N(D){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(y)||"",q=s.getShaderInfoLog(R)||"",Z=s.getShaderInfoLog(T)||"",k=B.trim(),X=q.trim(),W=Z.trim();let te=!0,se=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,R,T);else{const le=vo(s,R,"vertex"),fe=vo(s,T,"fragment");Ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+le+`
`+fe)}else k!==""?Pe("WebGLProgram: Program Info Log:",k):(X===""||W==="")&&(se=!1);se&&(D.diagnostics={runnable:te,programLog:k,vertexShader:{log:X,prefix:g},fragmentShader:{log:W,prefix:h}})}s.deleteShader(R),s.deleteShader(T),_=new hs(s,y),w=Qf(s,y)}let _;this.getUniforms=function(){return _===void 0&&N(this),_};let w;this.getAttributes=function(){return w===void 0&&N(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(y,Vf)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wf++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=T,this}let mp=0;class gp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xp(e),t.set(e,n)),n}}class xp{constructor(e){this.id=mp++,this.code=e,this.usedTimes=0}}function _p(i){return i===Hn||i===fs||i===ps}function vp(i,e,t,n,s,r){const a=new Ko,o=new gp,d=new Set,c=[],f=new Map,m=n.logarithmicDepthBuffer;let u=n.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return d.add(_),_===0?"uv":`uv${_}`}function y(_,w,L,D,B,q){const Z=D.fog,k=B.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,te=e.get(_.envMap||X,W),se=te&&te.mapping===vs?te.image.height:null,le=x[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Pe("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const fe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,xe=fe!==void 0?fe.length:0;let Be=0;k.morphAttributes.position!==void 0&&(Be=1),k.morphAttributes.normal!==void 0&&(Be=2),k.morphAttributes.color!==void 0&&(Be=3);let et,ke,J,ae;if(le){const ve=Qt[le];et=ve.vertexShader,ke=ve.fragmentShader}else{et=_.vertexShader,ke=_.fragmentShader;const ve=o.getVertexShaderStage(_),He=o.getFragmentShaderStage(_);o.update(_,ve,He),J=ve.id,ae=He.id}const Q=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Re=B.isInstancedMesh===!0,ye=B.isBatchedMesh===!0,Ze=!!_.map,De=!!_.matcap,$e=!!te,ze=!!_.aoMap,Ge=!!_.lightMap,at=!!_.bumpMap&&_.wireframe===!1,ot=!!_.normalMap,ft=!!_.displacementMap,ut=!!_.emissiveMap,st=!!_.metalnessMap,ct=!!_.roughnessMap,I=_.anisotropy>0,bt=_.clearcoat>0,Ke=_.dispersion>0,E=_.iridescence>0,p=_.sheen>0,F=_.transmission>0,V=I&&!!_.anisotropyMap,Y=bt&&!!_.clearcoatMap,oe=bt&&!!_.clearcoatNormalMap,ce=bt&&!!_.clearcoatRoughnessMap,K=E&&!!_.iridescenceMap,ee=E&&!!_.iridescenceThicknessMap,de=p&&!!_.sheenColorMap,Te=p&&!!_.sheenRoughnessMap,he=!!_.specularMap,ue=!!_.specularColorMap,Ce=!!_.specularIntensityMap,we=F&&!!_.transmissionMap,P=F&&!!_.thicknessMap,S=!!_.gradientMap,$=!!_.alphaMap,O=_.alphaTest>0,re=!!_.alphaHash,ie=!!_.extensions;let ne=nn;_.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ne=i.toneMapping);const be={shaderID:le,shaderType:_.type,shaderName:_.name,vertexShader:et,fragmentShader:ke,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:ye,batchingColor:ye&&B._colorsTexture!==null,instancing:Re,instancingColor:Re&&B.instanceColor!==null,instancingMorph:Re&&B.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ve.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ze,matcap:De,envMap:$e,envMapMode:$e&&te.mapping,envMapCubeUVHeight:se,aoMap:ze,lightMap:Ge,bumpMap:at,normalMap:ot,displacementMap:ft,emissiveMap:ut,normalMapObjectSpace:ot&&_.normalMapType===ec,normalMapTangentSpace:ot&&_.normalMapType===Yr,packedNormalMap:ot&&_.normalMapType===Yr&&_p(_.normalMap.format),metalnessMap:st,roughnessMap:ct,anisotropy:I,anisotropyMap:V,clearcoat:bt,clearcoatMap:Y,clearcoatNormalMap:oe,clearcoatRoughnessMap:ce,dispersion:Ke,iridescence:E,iridescenceMap:K,iridescenceThicknessMap:ee,sheen:p,sheenColorMap:de,sheenRoughnessMap:Te,specularMap:he,specularColorMap:ue,specularIntensityMap:Ce,transmission:F,transmissionMap:we,thicknessMap:P,gradientMap:S,opaque:_.transparent===!1&&_.blending===li&&_.alphaToCoverage===!1,alphaMap:$,alphaTest:O,alphaHash:re,combine:_.combine,mapUv:Ze&&v(_.map.channel),aoMapUv:ze&&v(_.aoMap.channel),lightMapUv:Ge&&v(_.lightMap.channel),bumpMapUv:at&&v(_.bumpMap.channel),normalMapUv:ot&&v(_.normalMap.channel),displacementMapUv:ft&&v(_.displacementMap.channel),emissiveMapUv:ut&&v(_.emissiveMap.channel),metalnessMapUv:st&&v(_.metalnessMap.channel),roughnessMapUv:ct&&v(_.roughnessMap.channel),anisotropyMapUv:V&&v(_.anisotropyMap.channel),clearcoatMapUv:Y&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:de&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:Te&&v(_.sheenRoughnessMap.channel),specularMapUv:he&&v(_.specularMap.channel),specularColorMapUv:ue&&v(_.specularColorMap.channel),specularIntensityMapUv:Ce&&v(_.specularIntensityMap.channel),transmissionMapUv:we&&v(_.transmissionMap.channel),thicknessMapUv:P&&v(_.thicknessMap.channel),alphaMapUv:$&&v(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ot||I),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(Ze||$),fog:!!Z,useFog:_.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&ot===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:_e,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Be,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:Ze&&_.map.isVideoTexture===!0&&Ve.getTransfer(_.map.colorSpace)===Qe,decodeVideoTextureEmissive:ut&&_.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(_.emissiveMap.colorSpace)===Qe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===hn,flipSided:_.side===Dt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ie&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&_.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return be.vertexUv1s=d.has(1),be.vertexUv2s=d.has(2),be.vertexUv3s=d.has(3),d.clear(),be}function g(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)w.push(L),w.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(h(w,_),A(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function h(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function A(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function C(_){const w=x[_.type];let L;if(w){const D=Qt[w];L=kc.clone(D.uniforms)}else L=_.uniforms;return L}function M(_,w){let L=f.get(w);return L!==void 0?++L.usedTimes:(L=new pp(i,w,_,s),c.push(L),f.set(w,L)),L}function R(_){if(--_.usedTimes===0){const w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function N(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:C,acquireProgram:M,releaseProgram:R,releaseShaderCache:T,programs:c,dispose:N}}function bp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,d){i.get(a)[o]=d}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Mp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Eo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function To(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let x=0;return u.isInstancedMesh&&(x+=2),u.isSkinnedMesh&&(x+=1),x}function o(u,x,v,y,g,h){let A=i[e];return A===void 0?(A={id:u.id,object:u,geometry:x,material:v,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:g,group:h},i[e]=A):(A.id=u.id,A.object=u,A.geometry=x,A.material=v,A.materialVariant=a(u),A.groupOrder=y,A.renderOrder=u.renderOrder,A.z=g,A.group=h),e++,A}function d(u,x,v,y,g,h){const A=o(u,x,v,y,g,h);v.transmission>0?n.push(A):v.transparent===!0?s.push(A):t.push(A)}function c(u,x,v,y,g,h){const A=o(u,x,v,y,g,h);v.transmission>0?n.unshift(A):v.transparent===!0?s.unshift(A):t.unshift(A)}function f(u,x,v){t.length>1&&t.sort(u||Mp),n.length>1&&n.sort(x||Eo),s.length>1&&s.sort(x||Eo),v&&(t.reverse(),n.reverse(),s.reverse())}function m(){for(let u=e,x=i.length;u<x;u++){const v=i[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:d,unshift:c,finish:m,sort:f}}function Sp(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new To,i.set(n,[a])):s>=r.length?(a=new To,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function yp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new je};break;case"SpotLight":t={position:new z,direction:new z,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function Ep(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Tp=0;function wp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ap(i){const e=new yp,t=Ep(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const s=new z,r=new lt,a=new lt;function o(c){let f=0,m=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let x=0,v=0,y=0,g=0,h=0,A=0,C=0,M=0,R=0,T=0,N=0;c.sort(wp);for(let w=0,L=c.length;w<L;w++){const D=c[w],B=D.color,q=D.intensity,Z=D.distance;let k=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Hn?k=D.shadow.map.texture:k=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)f+=B.r*q,m+=B.g*q,u+=B.b*q;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],q);N++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const W=D.shadow,te=t.get(D);te.shadowIntensity=W.intensity,te.shadowBias=W.bias,te.shadowNormalBias=W.normalBias,te.shadowRadius=W.radius,te.shadowMapSize=W.mapSize,n.directionalShadow[x]=te,n.directionalShadowMap[x]=k,n.directionalShadowMatrix[x]=D.shadow.matrix,A++}n.directional[x]=X,x++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(B).multiplyScalar(q),X.distance=Z,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[y]=X;const W=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,W.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[y]=W.matrix,D.castShadow){const te=t.get(D);te.shadowIntensity=W.intensity,te.shadowBias=W.bias,te.shadowNormalBias=W.normalBias,te.shadowRadius=W.radius,te.shadowMapSize=W.mapSize,n.spotShadow[y]=te,n.spotShadowMap[y]=k,M++}y++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(B).multiplyScalar(q),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=X,g++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const W=D.shadow,te=t.get(D);te.shadowIntensity=W.intensity,te.shadowBias=W.bias,te.shadowNormalBias=W.normalBias,te.shadowRadius=W.radius,te.shadowMapSize=W.mapSize,te.shadowCameraNear=W.camera.near,te.shadowCameraFar=W.camera.far,n.pointShadow[v]=te,n.pointShadowMap[v]=k,n.pointShadowMatrix[v]=D.shadow.matrix,C++}n.point[v]=X,v++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(q),X.groundColor.copy(D.groundColor).multiplyScalar(q),n.hemi[h]=X,h++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=m,n.ambient[2]=u;const _=n.hash;(_.directionalLength!==x||_.pointLength!==v||_.spotLength!==y||_.rectAreaLength!==g||_.hemiLength!==h||_.numDirectionalShadows!==A||_.numPointShadows!==C||_.numSpotShadows!==M||_.numSpotMaps!==R||_.numLightProbes!==N)&&(n.directional.length=x,n.spot.length=y,n.rectArea.length=g,n.point.length=v,n.hemi.length=h,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=M+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=N,_.directionalLength=x,_.pointLength=v,_.spotLength=y,_.rectAreaLength=g,_.hemiLength=h,_.numDirectionalShadows=A,_.numPointShadows=C,_.numSpotShadows=M,_.numSpotMaps=R,_.numLightProbes=N,n.version=Tp++)}function d(c,f){let m=0,u=0,x=0,v=0,y=0;const g=f.matrixWorldInverse;for(let h=0,A=c.length;h<A;h++){const C=c[h];if(C.isDirectionalLight){const M=n.directional[m];M.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),m++}else if(C.isSpotLight){const M=n.spot[x];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),x++}else if(C.isRectAreaLight){const M=n.rectArea[v];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(g),a.identity(),r.copy(C.matrixWorld),r.premultiply(g),a.extractRotation(r),M.halfWidth.set(C.width*.5,0,0),M.halfHeight.set(0,C.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(C.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(g),u++}else if(C.isHemisphereLight){const M=n.hemi[y];M.direction.setFromMatrixPosition(C.matrixWorld),M.direction.transformDirection(g),y++}}}return{setup:o,setupView:d,state:n}}function wo(i){const e=new Ap(i),t=[],n=[],s=[];function r(u){m.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function d(u){s.push(u)}function c(){e.setup(t)}function f(u){e.setupView(t,u)}const m={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:d}}function Rp(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new wo(i),e.set(s,[o])):r>=a.length?(o=new wo(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Cp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Np=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Pp=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Dp=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Ao=new lt,Ti=new z,ar=new z;function Lp(i,e,t){let n=new ca;const s=new Xe,r=new Xe,a=new dt,o=new Vc,d=new Wc,c={},f=t.maxTextureSize,m={[Cn]:Dt,[Dt]:Cn,[hn]:hn},u=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:Cp,fragmentShader:Np}),x=u.clone();x.defines.HORIZONTAL_PASS=1;const v=new kt;v.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Pt(v,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=os;let h=this.type;this.render=function(T,N,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Pl&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=os);const w=i.getRenderTarget(),L=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),B=i.state;B.setBlending(pn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const q=h!==this.type;q&&N.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(k=>k.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,k=T.length;Z<k;Z++){const X=T[Z],W=X.shadow;if(W===void 0){Pe("WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const te=W.getFrameExtents();s.multiply(te),r.copy(W.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/te.x),s.x=r.x*te.x,W.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/te.y),s.y=r.y*te.y,W.mapSize.y=r.y));const se=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=se,W.map===null||q===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===wi){if(X.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new sn(s.x,s.y,{format:Hn,type:gn,minFilter:wt,magFilter:wt,generateMipmaps:!1}),W.map.texture.name=X.name+".shadowMap",W.map.depthTexture=new fi(s.x,s.y,en),W.map.depthTexture.name=X.name+".shadowMapDepth",W.map.depthTexture.format=xn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Mt,W.map.depthTexture.magFilter=Mt}else X.isPointLight?(W.map=new cl(s.x),W.map.depthTexture=new Oc(s.x,rn)):(W.map=new sn(s.x,s.y),W.map.depthTexture=new fi(s.x,s.y,rn)),W.map.depthTexture.name=X.name+".shadowMap",W.map.depthTexture.format=xn,this.type===os?(W.map.depthTexture.compareFunction=se?oa:aa,W.map.depthTexture.minFilter=wt,W.map.depthTexture.magFilter=wt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Mt,W.map.depthTexture.magFilter=Mt);W.camera.updateProjectionMatrix()}const le=W.map.isWebGLCubeRenderTarget?6:1;for(let fe=0;fe<le;fe++){if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,fe),i.clear();else{fe===0&&(i.setRenderTarget(W.map),i.clear());const xe=W.getViewport(fe);a.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),B.viewport(a)}if(X.isPointLight){const xe=W.camera,Be=W.matrix,et=X.distance||xe.far;et!==xe.far&&(xe.far=et,xe.updateProjectionMatrix()),Ti.setFromMatrixPosition(X.matrixWorld),xe.position.copy(Ti),ar.copy(xe.position),ar.add(Pp[fe]),xe.up.copy(Dp[fe]),xe.lookAt(ar),xe.updateMatrixWorld(),Be.makeTranslation(-Ti.x,-Ti.y,-Ti.z),Ao.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Ao,xe.coordinateSystem,xe.reversedDepth)}else W.updateMatrices(X);n=W.getFrustum(),M(N,_,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===wi&&A(W,_),W.needsUpdate=!1}h=this.type,g.needsUpdate=!1,i.setRenderTarget(w,L,D)};function A(T,N){const _=e.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,x.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,x.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new sn(s.x,s.y,{format:Hn,type:gn})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(N,null,_,u,y,null),x.uniforms.shadow_pass.value=T.mapPass.texture,x.uniforms.resolution.value=T.mapSize,x.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(N,null,_,x,y,null)}function C(T,N,_,w){let L=null;const D=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)L=D;else if(L=_.isPointLight===!0?d:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const B=L.uuid,q=N.uuid;let Z=c[B];Z===void 0&&(Z={},c[B]=Z);let k=Z[q];k===void 0&&(k=L.clone(),Z[q]=k,N.addEventListener("dispose",R)),L=k}if(L.visible=N.visible,L.wireframe=N.wireframe,w===wi?L.side=N.shadowSide!==null?N.shadowSide:N.side:L.side=N.shadowSide!==null?N.shadowSide:m[N.side],L.alphaMap=N.alphaMap,L.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,L.map=N.map,L.clipShadows=N.clipShadows,L.clippingPlanes=N.clippingPlanes,L.clipIntersection=N.clipIntersection,L.displacementMap=N.displacementMap,L.displacementScale=N.displacementScale,L.displacementBias=N.displacementBias,L.wireframeLinewidth=N.wireframeLinewidth,L.linewidth=N.linewidth,_.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const B=i.properties.get(L);B.light=_}return L}function M(T,N,_,w,L){if(T.visible===!1)return;if(T.layers.test(N.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===wi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const q=e.update(T),Z=T.material;if(Array.isArray(Z)){const k=q.groups;for(let X=0,W=k.length;X<W;X++){const te=k[X],se=Z[te.materialIndex];if(se&&se.visible){const le=C(T,se,w,L);T.onBeforeShadow(i,T,N,_,q,le,te),i.renderBufferDirect(_,null,q,le,T,te),T.onAfterShadow(i,T,N,_,q,le,te)}}}else if(Z.visible){const k=C(T,Z,w,L);T.onBeforeShadow(i,T,N,_,q,k,null),i.renderBufferDirect(_,null,q,k,T,null),T.onAfterShadow(i,T,N,_,q,k,null)}}const B=T.children;for(let q=0,Z=B.length;q<Z;q++)M(B[q],N,_,w,L)}function R(T){T.target.removeEventListener("dispose",R);for(const _ in c){const w=c[_],L=T.target.uuid;L in w&&(w[L].dispose(),delete w[L])}}}function Ip(i,e){function t(){let S=!1;const $=new dt;let O=null;const re=new dt(0,0,0,0);return{setMask:function(ie){O!==ie&&!S&&(i.colorMask(ie,ie,ie,ie),O=ie)},setLocked:function(ie){S=ie},setClear:function(ie,ne,be,ve,He){He===!0&&(ie*=ve,ne*=ve,be*=ve),$.set(ie,ne,be,ve),re.equals($)===!1&&(i.clearColor(ie,ne,be,ve),re.copy($))},reset:function(){S=!1,O=null,re.set(-1,0,0,0)}}}function n(){let S=!1,$=!1,O=null,re=null,ie=null;return{setReversed:function(ne){if($!==ne){const be=e.get("EXT_clip_control");ne?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),$=ne;const ve=ie;ie=null,this.setClear(ve)}},getReversed:function(){return $},setTest:function(ne){ne?Q(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(ne){O!==ne&&!S&&(i.depthMask(ne),O=ne)},setFunc:function(ne){if($&&(ne=dc[ne]),re!==ne){switch(ne){case cr:i.depthFunc(i.NEVER);break;case dr:i.depthFunc(i.ALWAYS);break;case ur:i.depthFunc(i.LESS);break;case ui:i.depthFunc(i.LEQUAL);break;case hr:i.depthFunc(i.EQUAL);break;case fr:i.depthFunc(i.GEQUAL);break;case pr:i.depthFunc(i.GREATER);break;case mr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=ne}},setLocked:function(ne){S=ne},setClear:function(ne){ie!==ne&&(ie=ne,$&&(ne=1-ne),i.clearDepth(ne))},reset:function(){S=!1,O=null,re=null,ie=null,$=!1}}}function s(){let S=!1,$=null,O=null,re=null,ie=null,ne=null,be=null,ve=null,He=null;return{setTest:function(Je){S||(Je?Q(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(Je){$!==Je&&!S&&(i.stencilMask(Je),$=Je)},setFunc:function(Je,Lt,It){(O!==Je||re!==Lt||ie!==It)&&(i.stencilFunc(Je,Lt,It),O=Je,re=Lt,ie=It)},setOp:function(Je,Lt,It){(ne!==Je||be!==Lt||ve!==It)&&(i.stencilOp(Je,Lt,It),ne=Je,be=Lt,ve=It)},setLocked:function(Je){S=Je},setClear:function(Je){He!==Je&&(i.clearStencil(Je),He=Je)},reset:function(){S=!1,$=null,O=null,re=null,ie=null,ne=null,be=null,ve=null,He=null}}}const r=new t,a=new n,o=new s,d=new WeakMap,c=new WeakMap;let f={},m={},u={},x=new WeakMap,v=[],y=null,g=!1,h=null,A=null,C=null,M=null,R=null,T=null,N=null,_=new je(0,0,0),w=0,L=!1,D=null,B=null,q=null,Z=null,k=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,te=0;const se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(se)[1]),W=te>=1):se.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),W=te>=2);let le=null,fe={};const xe=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),et=new dt().fromArray(xe),ke=new dt().fromArray(Be);function J(S,$,O,re){const ie=new Uint8Array(4),ne=i.createTexture();i.bindTexture(S,ne),i.texParameteri(S,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(S,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<O;be++)S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D($+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return ne}const ae={};ae[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(ui),at(!1),ot(Ta),Q(i.CULL_FACE),ze(pn);function Q(S){f[S]!==!0&&(i.enable(S),f[S]=!0)}function _e(S){f[S]!==!1&&(i.disable(S),f[S]=!1)}function Re(S,$){return u[S]!==$?(i.bindFramebuffer(S,$),u[S]=$,S===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=$),S===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=$),!0):!1}function ye(S,$){let O=v,re=!1;if(S){O=x.get($),O===void 0&&(O=[],x.set($,O));const ie=S.textures;if(O.length!==ie.length||O[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,be=ie.length;ne<be;ne++)O[ne]=i.COLOR_ATTACHMENT0+ne;O.length=ie.length,re=!0}}else O[0]!==i.BACK&&(O[0]=i.BACK,re=!0);re&&i.drawBuffers(O)}function Ze(S){return y!==S?(i.useProgram(S),y=S,!0):!1}const De={[On]:i.FUNC_ADD,[Ll]:i.FUNC_SUBTRACT,[Il]:i.FUNC_REVERSE_SUBTRACT};De[Ul]=i.MIN,De[Fl]=i.MAX;const $e={[Ol]:i.ZERO,[Bl]:i.ONE,[kl]:i.SRC_COLOR,[or]:i.SRC_ALPHA,[jl]:i.SRC_ALPHA_SATURATE,[Vl]:i.DST_COLOR,[Gl]:i.DST_ALPHA,[zl]:i.ONE_MINUS_SRC_COLOR,[lr]:i.ONE_MINUS_SRC_ALPHA,[Wl]:i.ONE_MINUS_DST_COLOR,[Hl]:i.ONE_MINUS_DST_ALPHA,[Xl]:i.CONSTANT_COLOR,[ql]:i.ONE_MINUS_CONSTANT_COLOR,[Yl]:i.CONSTANT_ALPHA,[Kl]:i.ONE_MINUS_CONSTANT_ALPHA};function ze(S,$,O,re,ie,ne,be,ve,He,Je){if(S===pn){g===!0&&(_e(i.BLEND),g=!1);return}if(g===!1&&(Q(i.BLEND),g=!0),S!==Dl){if(S!==h||Je!==L){if((A!==On||R!==On)&&(i.blendEquation(i.FUNC_ADD),A=On,R=On),Je)switch(S){case li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wa:i.blendFunc(i.ONE,i.ONE);break;case Aa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ra:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",S);break}else switch(S){case li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Aa:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ra:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",S);break}C=null,M=null,T=null,N=null,_.set(0,0,0),w=0,h=S,L=Je}return}ie=ie||$,ne=ne||O,be=be||re,($!==A||ie!==R)&&(i.blendEquationSeparate(De[$],De[ie]),A=$,R=ie),(O!==C||re!==M||ne!==T||be!==N)&&(i.blendFuncSeparate($e[O],$e[re],$e[ne],$e[be]),C=O,M=re,T=ne,N=be),(ve.equals(_)===!1||He!==w)&&(i.blendColor(ve.r,ve.g,ve.b,He),_.copy(ve),w=He),h=S,L=!1}function Ge(S,$){S.side===hn?_e(i.CULL_FACE):Q(i.CULL_FACE);let O=S.side===Dt;$&&(O=!O),at(O),S.blending===li&&S.transparent===!1?ze(pn):ze(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),a.setFunc(S.depthFunc),a.setTest(S.depthTest),a.setMask(S.depthWrite),r.setMask(S.colorWrite);const re=S.stencilWrite;o.setTest(re),re&&(o.setMask(S.stencilWriteMask),o.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),o.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),ut(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(S){D!==S&&(S?i.frontFace(i.CW):i.frontFace(i.CCW),D=S)}function ot(S){S!==Cl?(Q(i.CULL_FACE),S!==B&&(S===Ta?i.cullFace(i.BACK):S===Nl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),B=S}function ft(S){S!==q&&(W&&i.lineWidth(S),q=S)}function ut(S,$,O){S?(Q(i.POLYGON_OFFSET_FILL),(Z!==$||k!==O)&&(Z=$,k=O,a.getReversed()&&($=-$),i.polygonOffset($,O))):_e(i.POLYGON_OFFSET_FILL)}function st(S){S?Q(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function ct(S){S===void 0&&(S=i.TEXTURE0+X-1),le!==S&&(i.activeTexture(S),le=S)}function I(S,$,O){O===void 0&&(le===null?O=i.TEXTURE0+X-1:O=le);let re=fe[O];re===void 0&&(re={type:void 0,texture:void 0},fe[O]=re),(re.type!==S||re.texture!==$)&&(le!==O&&(i.activeTexture(O),le=O),i.bindTexture(S,$||ae[S]),re.type=S,re.texture=$)}function bt(){const S=fe[le];S!==void 0&&S.type!==void 0&&(i.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function Ke(){try{i.compressedTexImage2D(...arguments)}catch(S){Ye("WebGLState:",S)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(S){Ye("WebGLState:",S)}}function p(){try{i.texSubImage2D(...arguments)}catch(S){Ye("WebGLState:",S)}}function F(){try{i.texSubImage3D(...arguments)}catch(S){Ye("WebGLState:",S)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(S){Ye("WebGLState:",S)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(S){Ye("WebGLState:",S)}}function oe(){try{i.texStorage2D(...arguments)}catch(S){Ye("WebGLState:",S)}}function ce(){try{i.texStorage3D(...arguments)}catch(S){Ye("WebGLState:",S)}}function K(){try{i.texImage2D(...arguments)}catch(S){Ye("WebGLState:",S)}}function ee(){try{i.texImage3D(...arguments)}catch(S){Ye("WebGLState:",S)}}function de(S){return m[S]!==void 0?m[S]:i.getParameter(S)}function Te(S,$){m[S]!==$&&(i.pixelStorei(S,$),m[S]=$)}function he(S){et.equals(S)===!1&&(i.scissor(S.x,S.y,S.z,S.w),et.copy(S))}function ue(S){ke.equals(S)===!1&&(i.viewport(S.x,S.y,S.z,S.w),ke.copy(S))}function Ce(S,$){let O=c.get($);O===void 0&&(O=new WeakMap,c.set($,O));let re=O.get(S);re===void 0&&(re=i.getUniformBlockIndex($,S.name),O.set(S,re))}function we(S,$){const re=c.get($).get(S);d.get($)!==re&&(i.uniformBlockBinding($,re,S.__bindingPointIndex),d.set($,re))}function P(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},m={},le=null,fe={},u={},x=new WeakMap,v=[],y=null,g=!1,h=null,A=null,C=null,M=null,R=null,T=null,N=null,_=new je(0,0,0),w=0,L=!1,D=null,B=null,q=null,Z=null,k=null,et.set(0,0,i.canvas.width,i.canvas.height),ke.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:_e,bindFramebuffer:Re,drawBuffers:ye,useProgram:Ze,setBlending:ze,setMaterial:Ge,setFlipSided:at,setCullFace:ot,setLineWidth:ft,setPolygonOffset:ut,setScissorTest:st,activeTexture:ct,bindTexture:I,unbindTexture:bt,compressedTexImage2D:Ke,compressedTexImage3D:E,texImage2D:K,texImage3D:ee,pixelStorei:Te,getParameter:de,updateUBOMapping:Ce,uniformBlockBinding:we,texStorage2D:oe,texStorage3D:ce,texSubImage2D:p,texSubImage3D:F,compressedTexSubImage2D:V,compressedTexSubImage3D:Y,scissor:he,viewport:ue,reset:P}}function Up(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,f=new WeakMap,m=new Set;let u;const x=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,p){return v?new OffscreenCanvas(E,p):xs("canvas")}function g(E,p,F){let V=1;const Y=Ke(E);if((Y.width>F||Y.height>F)&&(V=F/Math.max(Y.width,Y.height)),V<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const oe=Math.floor(V*Y.width),ce=Math.floor(V*Y.height);u===void 0&&(u=y(oe,ce));const K=p?y(oe,ce):u;return K.width=oe,K.height=ce,K.getContext("2d").drawImage(E,0,0,oe,ce),Pe("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+oe+"x"+ce+")."),K}else return"data"in E&&Pe("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),E;return E}function h(E){return E.generateMipmaps}function A(E){i.generateMipmap(E)}function C(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(E,p,F,V,Y,oe=!1){if(E!==null){if(i[E]!==void 0)return i[E];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ce;V&&(ce=e.get("EXT_texture_norm16"),ce||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=p;if(p===i.RED&&(F===i.FLOAT&&(K=i.R32F),F===i.HALF_FLOAT&&(K=i.R16F),F===i.UNSIGNED_BYTE&&(K=i.R8),F===i.UNSIGNED_SHORT&&ce&&(K=ce.R16_EXT),F===i.SHORT&&ce&&(K=ce.R16_SNORM_EXT)),p===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.R8UI),F===i.UNSIGNED_SHORT&&(K=i.R16UI),F===i.UNSIGNED_INT&&(K=i.R32UI),F===i.BYTE&&(K=i.R8I),F===i.SHORT&&(K=i.R16I),F===i.INT&&(K=i.R32I)),p===i.RG&&(F===i.FLOAT&&(K=i.RG32F),F===i.HALF_FLOAT&&(K=i.RG16F),F===i.UNSIGNED_BYTE&&(K=i.RG8),F===i.UNSIGNED_SHORT&&ce&&(K=ce.RG16_EXT),F===i.SHORT&&ce&&(K=ce.RG16_SNORM_EXT)),p===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.RG8UI),F===i.UNSIGNED_SHORT&&(K=i.RG16UI),F===i.UNSIGNED_INT&&(K=i.RG32UI),F===i.BYTE&&(K=i.RG8I),F===i.SHORT&&(K=i.RG16I),F===i.INT&&(K=i.RG32I)),p===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.RGB8UI),F===i.UNSIGNED_SHORT&&(K=i.RGB16UI),F===i.UNSIGNED_INT&&(K=i.RGB32UI),F===i.BYTE&&(K=i.RGB8I),F===i.SHORT&&(K=i.RGB16I),F===i.INT&&(K=i.RGB32I)),p===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),F===i.UNSIGNED_INT&&(K=i.RGBA32UI),F===i.BYTE&&(K=i.RGBA8I),F===i.SHORT&&(K=i.RGBA16I),F===i.INT&&(K=i.RGBA32I)),p===i.RGB&&(F===i.UNSIGNED_SHORT&&ce&&(K=ce.RGB16_EXT),F===i.SHORT&&ce&&(K=ce.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),p===i.RGBA){const ee=oe?gs:Ve.getTransfer(Y);F===i.FLOAT&&(K=i.RGBA32F),F===i.HALF_FLOAT&&(K=i.RGBA16F),F===i.UNSIGNED_BYTE&&(K=ee===Qe?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&ce&&(K=ce.RGBA16_EXT),F===i.SHORT&&ce&&(K=ce.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function R(E,p){let F;return E?p===null||p===rn||p===Ni?F=i.DEPTH24_STENCIL8:p===en?F=i.DEPTH32F_STENCIL8:p===Ci&&(F=i.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===rn||p===Ni?F=i.DEPTH_COMPONENT24:p===en?F=i.DEPTH_COMPONENT32F:p===Ci&&(F=i.DEPTH_COMPONENT16),F}function T(E,p){return h(E)===!0||E.isFramebufferTexture&&E.minFilter!==Mt&&E.minFilter!==wt?Math.log2(Math.max(p.width,p.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?p.mipmaps.length:1}function N(E){const p=E.target;p.removeEventListener("dispose",N),w(p),p.isVideoTexture&&f.delete(p),p.isHTMLTexture&&m.delete(p)}function _(E){const p=E.target;p.removeEventListener("dispose",_),D(p)}function w(E){const p=n.get(E);if(p.__webglInit===void 0)return;const F=E.source,V=x.get(F);if(V){const Y=V[p.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&L(E),Object.keys(V).length===0&&x.delete(F)}n.remove(E)}function L(E){const p=n.get(E);i.deleteTexture(p.__webglTexture);const F=E.source,V=x.get(F);delete V[p.__cacheKey],a.memory.textures--}function D(E){const p=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(p.__webglFramebuffer[V]))for(let Y=0;Y<p.__webglFramebuffer[V].length;Y++)i.deleteFramebuffer(p.__webglFramebuffer[V][Y]);else i.deleteFramebuffer(p.__webglFramebuffer[V]);p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer[V])}else{if(Array.isArray(p.__webglFramebuffer))for(let V=0;V<p.__webglFramebuffer.length;V++)i.deleteFramebuffer(p.__webglFramebuffer[V]);else i.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&i.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let V=0;V<p.__webglColorRenderbuffer.length;V++)p.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(p.__webglColorRenderbuffer[V]);p.__webglDepthRenderbuffer&&i.deleteRenderbuffer(p.__webglDepthRenderbuffer)}const F=E.textures;for(let V=0,Y=F.length;V<Y;V++){const oe=n.get(F[V]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),a.memory.textures--),n.remove(F[V])}n.remove(E)}let B=0;function q(){B=0}function Z(){return B}function k(E){B=E}function X(){const E=B;return E>=s.maxTextures&&Pe("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),B+=1,E}function W(E){const p=[];return p.push(E.wrapS),p.push(E.wrapT),p.push(E.wrapR||0),p.push(E.magFilter),p.push(E.minFilter),p.push(E.anisotropy),p.push(E.internalFormat),p.push(E.format),p.push(E.type),p.push(E.generateMipmaps),p.push(E.premultiplyAlpha),p.push(E.flipY),p.push(E.unpackAlignment),p.push(E.colorSpace),p.join()}function te(E,p){const F=n.get(E);if(E.isVideoTexture&&I(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){const V=E.image;if(V===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(F,E,p);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+p)}function se(E,p){const F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){_e(F,E,p);return}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+p)}function le(E,p){const F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){_e(F,E,p);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+p)}function fe(E,p){const F=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&F.__version!==E.version){Re(F,E,p);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+p)}const xe={[gr]:i.REPEAT,[fn]:i.CLAMP_TO_EDGE,[xr]:i.MIRRORED_REPEAT},Be={[Mt]:i.NEAREST,[Jl]:i.NEAREST_MIPMAP_NEAREST,[Fi]:i.NEAREST_MIPMAP_LINEAR,[wt]:i.LINEAR,[Cs]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},et={[tc]:i.NEVER,[ac]:i.ALWAYS,[nc]:i.LESS,[aa]:i.LEQUAL,[ic]:i.EQUAL,[oa]:i.GEQUAL,[sc]:i.GREATER,[rc]:i.NOTEQUAL};function ke(E,p){if(p.type===en&&e.has("OES_texture_float_linear")===!1&&(p.magFilter===wt||p.magFilter===Cs||p.magFilter===Fi||p.magFilter===kn||p.minFilter===wt||p.minFilter===Cs||p.minFilter===Fi||p.minFilter===kn)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,xe[p.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,xe[p.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,xe[p.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Be[p.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Be[p.minFilter]),p.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,et[p.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===Mt||p.minFilter!==Fi&&p.minFilter!==kn||p.type===en&&e.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||n.get(p).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,s.getMaxAnisotropy())),n.get(p).__currentAnisotropy=p.anisotropy}}}function J(E,p){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,p.addEventListener("dispose",N));const V=p.source;let Y=x.get(V);Y===void 0&&(Y={},x.set(V,Y));const oe=W(p);if(oe!==E.__cacheKey){Y[oe]===void 0&&(Y[oe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Y[oe].usedTimes++;const ce=Y[E.__cacheKey];ce!==void 0&&(Y[E.__cacheKey].usedTimes--,ce.usedTimes===0&&L(p)),E.__cacheKey=oe,E.__webglTexture=Y[oe].texture}return F}function ae(E,p,F){return Math.floor(Math.floor(E/F)/p)}function Q(E,p,F,V){const oe=E.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,p.width,p.height,F,V,p.data);else{oe.sort((Te,he)=>Te.start-he.start);let ce=0;for(let Te=1;Te<oe.length;Te++){const he=oe[ce],ue=oe[Te],Ce=he.start+he.count,we=ae(ue.start,p.width,4),P=ae(he.start,p.width,4);ue.start<=Ce+1&&we===P&&ae(ue.start+ue.count-1,p.width,4)===we?he.count=Math.max(he.count,ue.start+ue.count-he.start):(++ce,oe[ce]=ue)}oe.length=ce+1;const K=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),de=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,p.width);for(let Te=0,he=oe.length;Te<he;Te++){const ue=oe[Te],Ce=Math.floor(ue.start/4),we=Math.ceil(ue.count/4),P=Ce%p.width,S=Math.floor(Ce/p.width),$=we,O=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,P),t.pixelStorei(i.UNPACK_SKIP_ROWS,S),t.texSubImage2D(i.TEXTURE_2D,0,P,S,$,O,F,V,p.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,de)}}function _e(E,p,F){let V=i.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),p.isData3DTexture&&(V=i.TEXTURE_3D);const Y=J(E,p),oe=p.source;t.bindTexture(V,E.__webglTexture,i.TEXTURE0+F);const ce=n.get(oe);if(oe.version!==ce.__version||Y===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&p.image instanceof ImageBitmap)===!1){const O=Ve.getPrimaries(Ve.workingColorSpace),re=p.colorSpace===An?null:Ve.getPrimaries(p.colorSpace),ie=p.colorSpace===An||O===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie)}t.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment);let ee=g(p.image,!1,s.maxTextureSize);ee=bt(p,ee);const de=r.convert(p.format,p.colorSpace),Te=r.convert(p.type);let he=M(p.internalFormat,de,Te,p.normalized,p.colorSpace,p.isVideoTexture);ke(V,p);let ue;const Ce=p.mipmaps,we=p.isVideoTexture!==!0,P=ce.__version===void 0||Y===!0,S=oe.dataReady,$=T(p,ee);if(p.isDepthTexture)he=R(p.format===zn,p.type),P&&(we?t.texStorage2D(i.TEXTURE_2D,1,he,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,he,ee.width,ee.height,0,de,Te,null));else if(p.isDataTexture)if(Ce.length>0){we&&P&&t.texStorage2D(i.TEXTURE_2D,$,he,Ce[0].width,Ce[0].height);for(let O=0,re=Ce.length;O<re;O++)ue=Ce[O],we?S&&t.texSubImage2D(i.TEXTURE_2D,O,0,0,ue.width,ue.height,de,Te,ue.data):t.texImage2D(i.TEXTURE_2D,O,he,ue.width,ue.height,0,de,Te,ue.data);p.generateMipmaps=!1}else we?(P&&t.texStorage2D(i.TEXTURE_2D,$,he,ee.width,ee.height),S&&Q(p,ee,de,Te)):t.texImage2D(i.TEXTURE_2D,0,he,ee.width,ee.height,0,de,Te,ee.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){we&&P&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$,he,Ce[0].width,Ce[0].height,ee.depth);for(let O=0,re=Ce.length;O<re;O++)if(ue=Ce[O],p.format!==Yt)if(de!==null)if(we){if(S)if(p.layerUpdates.size>0){const ie=io(ue.width,ue.height,p.format,p.type);for(const ne of p.layerUpdates){const be=ue.data.subarray(ne*ie/ue.data.BYTES_PER_ELEMENT,(ne+1)*ie/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,ne,ue.width,ue.height,1,de,be)}p.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,ue.width,ue.height,ee.depth,de,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,O,he,ue.width,ue.height,ee.depth,0,ue.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?S&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,ue.width,ue.height,ee.depth,de,Te,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,O,he,ue.width,ue.height,ee.depth,0,de,Te,ue.data)}else{we&&P&&t.texStorage2D(i.TEXTURE_2D,$,he,Ce[0].width,Ce[0].height);for(let O=0,re=Ce.length;O<re;O++)ue=Ce[O],p.format!==Yt?de!==null?we?S&&t.compressedTexSubImage2D(i.TEXTURE_2D,O,0,0,ue.width,ue.height,de,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,O,he,ue.width,ue.height,0,ue.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?S&&t.texSubImage2D(i.TEXTURE_2D,O,0,0,ue.width,ue.height,de,Te,ue.data):t.texImage2D(i.TEXTURE_2D,O,he,ue.width,ue.height,0,de,Te,ue.data)}else if(p.isDataArrayTexture)if(we){if(P&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$,he,ee.width,ee.height,ee.depth),S)if(p.layerUpdates.size>0){const O=io(ee.width,ee.height,p.format,p.type);for(const re of p.layerUpdates){const ie=ee.data.subarray(re*O/ee.data.BYTES_PER_ELEMENT,(re+1)*O/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,ee.width,ee.height,1,de,Te,ie)}p.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,de,Te,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,ee.width,ee.height,ee.depth,0,de,Te,ee.data);else if(p.isData3DTexture)we?(P&&t.texStorage3D(i.TEXTURE_3D,$,he,ee.width,ee.height,ee.depth),S&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,de,Te,ee.data)):t.texImage3D(i.TEXTURE_3D,0,he,ee.width,ee.height,ee.depth,0,de,Te,ee.data);else if(p.isFramebufferTexture){if(P)if(we)t.texStorage2D(i.TEXTURE_2D,$,he,ee.width,ee.height);else{let O=ee.width,re=ee.height;for(let ie=0;ie<$;ie++)t.texImage2D(i.TEXTURE_2D,ie,he,O,re,0,de,Te,null),O>>=1,re>>=1}}else if(p.isHTMLTexture){if("texElementImage2D"in i){const O=i.canvas;if(O.hasAttribute("layoutsubtree")||O.setAttribute("layoutsubtree","true"),ee.parentNode!==O){O.appendChild(ee),m.add(p),O.onpaint=re=>{const ie=re.changedElements;for(const ne of m)ie.includes(ne.image)&&(ne.needsUpdate=!0)},O.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{const ie=i.RGBA,ne=i.RGBA,be=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ie,ne,be,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(we&&P){const O=Ke(Ce[0]);t.texStorage2D(i.TEXTURE_2D,$,he,O.width,O.height)}for(let O=0,re=Ce.length;O<re;O++)ue=Ce[O],we?S&&t.texSubImage2D(i.TEXTURE_2D,O,0,0,de,Te,ue):t.texImage2D(i.TEXTURE_2D,O,he,de,Te,ue);p.generateMipmaps=!1}else if(we){if(P){const O=Ke(ee);t.texStorage2D(i.TEXTURE_2D,$,he,O.width,O.height)}S&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Te,ee)}else t.texImage2D(i.TEXTURE_2D,0,he,de,Te,ee);h(p)&&A(V),ce.__version=oe.version,p.onUpdate&&p.onUpdate(p)}E.__version=p.version}function Re(E,p,F){if(p.image.length!==6)return;const V=J(E,p),Y=p.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);const oe=n.get(Y);if(Y.version!==oe.__version||V===!0){t.activeTexture(i.TEXTURE0+F);const ce=Ve.getPrimaries(Ve.workingColorSpace),K=p.colorSpace===An?null:Ve.getPrimaries(p.colorSpace),ee=p.colorSpace===An||ce===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const de=p.isCompressedTexture||p.image[0].isCompressedTexture,Te=p.image[0]&&p.image[0].isDataTexture,he=[];for(let ne=0;ne<6;ne++)!de&&!Te?he[ne]=g(p.image[ne],!0,s.maxCubemapSize):he[ne]=Te?p.image[ne].image:p.image[ne],he[ne]=bt(p,he[ne]);const ue=he[0],Ce=r.convert(p.format,p.colorSpace),we=r.convert(p.type),P=M(p.internalFormat,Ce,we,p.normalized,p.colorSpace),S=p.isVideoTexture!==!0,$=oe.__version===void 0||V===!0,O=Y.dataReady;let re=T(p,ue);ke(i.TEXTURE_CUBE_MAP,p);let ie;if(de){S&&$&&t.texStorage2D(i.TEXTURE_CUBE_MAP,re,P,ue.width,ue.height);for(let ne=0;ne<6;ne++){ie=he[ne].mipmaps;for(let be=0;be<ie.length;be++){const ve=ie[be];p.format!==Yt?Ce!==null?S?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,0,0,ve.width,ve.height,Ce,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,P,ve.width,ve.height,0,ve.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):S?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,0,0,ve.width,ve.height,Ce,we,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,P,ve.width,ve.height,0,Ce,we,ve.data)}}}else{if(ie=p.mipmaps,S&&$){ie.length>0&&re++;const ne=Ke(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,re,P,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Te){S?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,he[ne].width,he[ne].height,Ce,we,he[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,P,he[ne].width,he[ne].height,0,Ce,we,he[ne].data);for(let be=0;be<ie.length;be++){const He=ie[be].image[ne].image;S?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,0,0,He.width,He.height,Ce,we,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,P,He.width,He.height,0,Ce,we,He.data)}}else{S?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ce,we,he[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,P,Ce,we,he[ne]);for(let be=0;be<ie.length;be++){const ve=ie[be];S?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,0,0,Ce,we,ve.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,P,Ce,we,ve.image[ne])}}}h(p)&&A(i.TEXTURE_CUBE_MAP),oe.__version=Y.version,p.onUpdate&&p.onUpdate(p)}E.__version=p.version}function ye(E,p,F,V,Y,oe){const ce=r.convert(F.format,F.colorSpace),K=r.convert(F.type),ee=M(F.internalFormat,ce,K,F.normalized,F.colorSpace),de=n.get(p),Te=n.get(F);if(Te.__renderTarget=p,!de.__hasExternalTextures){const he=Math.max(1,p.width>>oe),ue=Math.max(1,p.height>>oe);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?t.texImage3D(Y,oe,ee,he,ue,p.depth,0,ce,K,null):t.texImage2D(Y,oe,ee,he,ue,0,ce,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),ct(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,Y,Te.__webglTexture,0,st(p)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,Y,Te.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(E,p,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),p.depthBuffer){const V=p.depthTexture,Y=V&&V.isDepthTexture?V.type:null,oe=R(p.stencilBuffer,Y),ce=p.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ct(p)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st(p),oe,p.width,p.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,st(p),oe,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,oe,p.width,p.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,E)}else{const V=p.textures;for(let Y=0;Y<V.length;Y++){const oe=V[Y],ce=r.convert(oe.format,oe.colorSpace),K=r.convert(oe.type),ee=M(oe.internalFormat,ce,K,oe.normalized,oe.colorSpace);ct(p)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st(p),ee,p.width,p.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,st(p),ee,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,ee,p.width,p.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(E,p,F){const V=p.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=n.get(p.depthTexture);if(Y.__renderTarget=p,(!Y.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),V){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,p.depthTexture.addEventListener("dispose",N)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ke(i.TEXTURE_CUBE_MAP,p.depthTexture);const de=r.convert(p.depthTexture.format),Te=r.convert(p.depthTexture.type);let he;p.depthTexture.format===xn?he=i.DEPTH_COMPONENT24:p.depthTexture.format===zn&&(he=i.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,he,p.width,p.height,0,de,Te,null)}}else te(p.depthTexture,0);const oe=Y.__webglTexture,ce=st(p),K=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,ee=p.depthTexture.format===zn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(p.depthTexture.format===xn)ct(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,K,oe,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,ee,K,oe,0);else if(p.depthTexture.format===zn)ct(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,K,oe,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,ee,K,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $e(E){const p=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==E.depthTexture){const V=E.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),V){const Y=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,V.removeEventListener("dispose",Y)};V.addEventListener("dispose",Y),p.__depthDisposeCallback=Y}p.__boundDepthTexture=V}if(E.depthTexture&&!p.__autoAllocateDepthBuffer)if(F)for(let V=0;V<6;V++)De(p.__webglFramebuffer[V],E,V);else{const V=E.texture.mipmaps;V&&V.length>0?De(p.__webglFramebuffer[0],E,0):De(p.__webglFramebuffer,E,0)}else if(F){p.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[V]),p.__webglDepthbuffer[V]===void 0)p.__webglDepthbuffer[V]=i.createRenderbuffer(),Ze(p.__webglDepthbuffer[V],E,!1);else{const Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=p.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,oe)}}else{const V=E.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=i.createRenderbuffer(),Ze(p.__webglDepthbuffer,E,!1);else{const Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=p.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,oe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(E,p,F){const V=n.get(E);p!==void 0&&ye(V.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&$e(E)}function Ge(E){const p=E.texture,F=n.get(E),V=n.get(p);E.addEventListener("dispose",_);const Y=E.textures,oe=E.isWebGLCubeRenderTarget===!0,ce=Y.length>1;if(ce||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=p.version,a.memory.textures++),oe){F.__webglFramebuffer=[];for(let K=0;K<6;K++)if(p.mipmaps&&p.mipmaps.length>0){F.__webglFramebuffer[K]=[];for(let ee=0;ee<p.mipmaps.length;ee++)F.__webglFramebuffer[K][ee]=i.createFramebuffer()}else F.__webglFramebuffer[K]=i.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){F.__webglFramebuffer=[];for(let K=0;K<p.mipmaps.length;K++)F.__webglFramebuffer[K]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ce)for(let K=0,ee=Y.length;K<ee;K++){const de=n.get(Y[K]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&ct(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let K=0;K<Y.length;K++){const ee=Y[K];F.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[K]);const de=r.convert(ee.format,ee.colorSpace),Te=r.convert(ee.type),he=M(ee.internalFormat,de,Te,ee.normalized,ee.colorSpace,E.isXRRenderTarget===!0),ue=st(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,he,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,F.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ze(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),ke(i.TEXTURE_CUBE_MAP,p);for(let K=0;K<6;K++)if(p.mipmaps&&p.mipmaps.length>0)for(let ee=0;ee<p.mipmaps.length;ee++)ye(F.__webglFramebuffer[K][ee],E,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ee);else ye(F.__webglFramebuffer[K],E,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);h(p)&&A(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let K=0,ee=Y.length;K<ee;K++){const de=Y[K],Te=n.get(de);let he=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(he=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,Te.__webglTexture),ke(he,de),ye(F.__webglFramebuffer,E,de,i.COLOR_ATTACHMENT0+K,he,0),h(de)&&A(he)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(K=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,V.__webglTexture),ke(K,p),p.mipmaps&&p.mipmaps.length>0)for(let ee=0;ee<p.mipmaps.length;ee++)ye(F.__webglFramebuffer[ee],E,p,i.COLOR_ATTACHMENT0,K,ee);else ye(F.__webglFramebuffer,E,p,i.COLOR_ATTACHMENT0,K,0);h(p)&&A(K),t.unbindTexture()}E.depthBuffer&&$e(E)}function at(E){const p=E.textures;for(let F=0,V=p.length;F<V;F++){const Y=p[F];if(h(Y)){const oe=C(E),ce=n.get(Y).__webglTexture;t.bindTexture(oe,ce),A(oe),t.unbindTexture()}}}const ot=[],ft=[];function ut(E){if(E.samples>0){if(ct(E)===!1){const p=E.textures,F=E.width,V=E.height;let Y=i.COLOR_BUFFER_BIT;const oe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(E),K=p.length>1;if(K)for(let de=0;de<p.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const ee=E.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let de=0;de<p.length;de++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[de]);const Te=n.get(p[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,F,V,0,0,F,V,Y,i.NEAREST),d===!0&&(ot.length=0,ft.length=0,ot.push(i.COLOR_ATTACHMENT0+de),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ot.push(oe),ft.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ft)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let de=0;de<p.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,ce.__webglColorRenderbuffer[de]);const Te=n.get(p[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&d){const p=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[p])}}}function st(E){return Math.min(s.maxSamples,E.samples)}function ct(E){const p=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function I(E){const p=a.render.frame;f.get(E)!==p&&(f.set(E,p),E.update())}function bt(E,p){const F=E.colorSpace,V=E.format,Y=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==ms&&F!==An&&(Ve.getTransfer(F)===Qe?(V!==Yt||Y!==Bt)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",F)),p}function Ke(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=q,this.getTextureUnits=Z,this.setTextureUnits=k,this.setTexture2D=te,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=fe,this.rebindTextures=ze,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ct,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Fp(i,e){function t(n,s=An){let r;const a=Ve.getTransfer(s);if(n===Bt)return i.UNSIGNED_BYTE;if(n===ta)return i.UNSIGNED_SHORT_4_4_4_4;if(n===na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ho)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zo)return i.BYTE;if(n===Go)return i.SHORT;if(n===Ci)return i.UNSIGNED_SHORT;if(n===ea)return i.INT;if(n===rn)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===gn)return i.HALF_FLOAT;if(n===Wo)return i.ALPHA;if(n===jo)return i.RGB;if(n===Yt)return i.RGBA;if(n===xn)return i.DEPTH_COMPONENT;if(n===zn)return i.DEPTH_STENCIL;if(n===Xo)return i.RED;if(n===ia)return i.RED_INTEGER;if(n===Hn)return i.RG;if(n===sa)return i.RG_INTEGER;if(n===ra)return i.RGBA_INTEGER;if(n===ls||n===cs||n===ds||n===us)if(a===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ls)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ls)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ds)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===us)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_r||n===vr||n===br||n===Mr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_r)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===br)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sr||n===yr||n===Er||n===Tr||n===wr||n===fs||n===Ar)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sr||n===yr)return a===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Er)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Tr)return r.COMPRESSED_R11_EAC;if(n===wr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===fs)return r.COMPRESSED_RG11_EAC;if(n===Ar)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Rr||n===Cr||n===Nr||n===Pr||n===Dr||n===Lr||n===Ir||n===Ur||n===Fr||n===Or||n===Br||n===kr||n===zr||n===Gr)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Rr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ir)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ur)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Or)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Br)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hr||n===Vr||n===Wr)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Hr)return a===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jr||n===Xr||n===ps||n===qr)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===jr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ps)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ni?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Op=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new nl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new an({vertexShader:Op,fragmentShader:Bp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new Ms(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zp extends Wn{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",d=1,c=null,f=null,m=null,u=null,x=null,v=null;const y=typeof XRWebGLBinding<"u",g=new kp,h={},A=t.getContextAttributes();let C=null,M=null;const R=[],T=[],N=new Xe;let _=null;const w=new Vt;w.viewport=new dt;const L=new Vt;L.viewport=new dt;const D=[w,L],B=new Kc;let q=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=R[J];return ae===void 0&&(ae=new Os,R[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=R[J];return ae===void 0&&(ae=new Os,R[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=R[J];return ae===void 0&&(ae=new Os,R[J]=ae),ae.getHandSpace()};function k(J){const ae=T.indexOf(J.inputSource);if(ae===-1)return;const Q=R[ae];Q!==void 0&&(Q.update(J.inputSource,J.frame,c||a),Q.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",W);for(let J=0;J<R.length;J++){const ae=T[J];ae!==null&&(T[J]=null,R[J].disconnect(ae))}q=null,Z=null,g.reset();for(const J in h)delete h[J];e.setRenderTarget(C),x=null,u=null,m=null,s=null,M=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:x},this.getBinding=function(){return m===null&&y&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",X),s.addEventListener("inputsourceschange",W),A.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(N),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,_e=null,Re=null;A.depth&&(Re=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=A.stencil?zn:xn,_e=A.stencil?Ni:rn);const ye={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};m=this.getBinding(),u=m.createProjectionLayer(ye),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new sn(u.textureWidth,u.textureHeight,{format:Yt,type:Bt,depthTexture:new fi(u.textureWidth,u.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const Q={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};x=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),M=new sn(x.framebufferWidth,x.framebufferHeight,{format:Yt,type:Bt,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(d),c=null,a=await s.requestReferenceSpace(o),ke.setContext(s),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(J){for(let ae=0;ae<J.removed.length;ae++){const Q=J.removed[ae],_e=T.indexOf(Q);_e>=0&&(T[_e]=null,R[_e].disconnect(Q))}for(let ae=0;ae<J.added.length;ae++){const Q=J.added[ae];let _e=T.indexOf(Q);if(_e===-1){for(let ye=0;ye<R.length;ye++)if(ye>=T.length){T.push(Q),_e=ye;break}else if(T[ye]===null){T[ye]=Q,_e=ye;break}if(_e===-1)break}const Re=R[_e];Re&&Re.connect(Q)}}const te=new z,se=new z;function le(J,ae,Q){te.setFromMatrixPosition(ae.matrixWorld),se.setFromMatrixPosition(Q.matrixWorld);const _e=te.distanceTo(se),Re=ae.projectionMatrix.elements,ye=Q.projectionMatrix.elements,Ze=Re[14]/(Re[10]-1),De=Re[14]/(Re[10]+1),$e=(Re[9]+1)/Re[5],ze=(Re[9]-1)/Re[5],Ge=(Re[8]-1)/Re[0],at=(ye[8]+1)/ye[0],ot=Ze*Ge,ft=Ze*at,ut=_e/(-Ge+at),st=ut*-Ge;if(ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(st),J.translateZ(ut),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Re[10]===-1)J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const ct=Ze+ut,I=De+ut,bt=ot-st,Ke=ft+(_e-st),E=$e*De/I*ct,p=ze*De/I*ct;J.projectionMatrix.makePerspective(bt,Ke,E,p,ct,I),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function fe(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ae=J.near,Q=J.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(Q=g.depthFar)),B.near=L.near=w.near=ae,B.far=L.far=w.far=Q,(q!==B.near||Z!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),q=B.near,Z=B.far),B.layers.mask=J.layers.mask|6,w.layers.mask=B.layers.mask&-5,L.layers.mask=B.layers.mask&-3;const _e=J.parent,Re=B.cameras;fe(B,_e);for(let ye=0;ye<Re.length;ye++)fe(Re[ye],_e);Re.length===2?le(B,w,L):B.projectionMatrix.copy(w.projectionMatrix),xe(J,B,_e)};function xe(J,ae,Q){Q===null?J.matrix.copy(ae.matrixWorld):(J.matrix.copy(Q.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Kr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&x===null))return d},this.setFoveation=function(J){d=J,u!==null&&(u.fixedFoveation=J),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(J){return h[J]};let Be=null;function et(J,ae){if(f=ae.getViewerPose(c||a),v=ae,f!==null){const Q=f.views;x!==null&&(e.setRenderTargetFramebuffer(M,x.framebuffer),e.setRenderTarget(M));let _e=!1;Q.length!==B.cameras.length&&(B.cameras.length=0,_e=!0);for(let De=0;De<Q.length;De++){const $e=Q[De];let ze=null;if(x!==null)ze=x.getViewport($e);else{const at=m.getViewSubImage(u,$e);ze=at.viewport,De===0&&(e.setRenderTargetTextures(M,at.colorTexture,at.depthStencilTexture),e.setRenderTarget(M))}let Ge=D[De];Ge===void 0&&(Ge=new Vt,Ge.layers.enable(De),Ge.viewport=new dt,D[De]=Ge),Ge.matrix.fromArray($e.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray($e.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(ze.x,ze.y,ze.width,ze.height),De===0&&(B.matrix.copy(Ge.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),_e===!0&&B.cameras.push(Ge)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){m=n.getBinding();const De=m.getDepthInformation(Q[0]);De&&De.isValid&&De.texture&&g.init(De,s.renderState)}if(Re&&Re.includes("camera-access")&&y){e.state.unbindTexture(),m=n.getBinding();for(let De=0;De<Q.length;De++){const $e=Q[De].camera;if($e){let ze=h[$e];ze||(ze=new nl,h[$e]=ze);const Ge=m.getCameraImage($e);ze.sourceTexture=Ge}}}}for(let Q=0;Q<R.length;Q++){const _e=T[Q],Re=R[Q];_e!==null&&Re!==void 0&&Re.update(_e,ae,c||a)}Be&&Be(J,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),v=null}const ke=new ol;ke.setAnimationLoop(et),this.setAnimationLoop=function(J){Be=J},this.dispose=function(){}}}const Gp=new lt,pl=new Le;pl.set(-1,0,0,0,1,0,0,0,1);function Hp(i,e){function t(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function n(g,h){h.color.getRGB(g.fogColor.value,il(i)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function s(g,h,A,C,M){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(g,h):h.isMeshLambertMaterial?(r(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(g,h),m(g,h)):h.isMeshPhongMaterial?(r(g,h),f(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(g,h),u(g,h),h.isMeshPhysicalMaterial&&x(g,h,M)):h.isMeshMatcapMaterial?(r(g,h),v(g,h)):h.isMeshDepthMaterial?r(g,h):h.isMeshDistanceMaterial?(r(g,h),y(g,h)):h.isMeshNormalMaterial?r(g,h):h.isLineBasicMaterial?(a(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?d(g,h,A,C):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,t(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===Dt&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,t(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===Dt&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,t(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,t(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const A=e.get(h),C=A.envMap,M=A.envMapRotation;C&&(g.envMap.value=C,g.envMapRotation.value.setFromMatrix4(Gp.makeRotationFromEuler(M)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(pl),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,g.aoMapTransform))}function a(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function d(g,h,A,C){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*A,g.scale.value=C*.5,h.map&&(g.map.value=h.map,t(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function f(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function m(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function u(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function x(g,h,A){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Dt&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,h){h.matcap&&(g.matcap.value=h.matcap)}function y(g,h){const A=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vp(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(M,R){const T=R.program;n.uniformBlockBinding(M,T)}function c(M,R){let T=s[M.id];T===void 0&&(g(M),T=f(M),s[M.id]=T,M.addEventListener("dispose",A));const N=R.program;n.updateUBOMapping(M,N);const _=e.render.frame;r[M.id]!==_&&(u(M),r[M.id]=_)}function f(M){const R=m();M.__bindingPointIndex=R;const T=i.createBuffer(),N=M.__size,_=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,N,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,T),T}function m(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const R=s[M.id],T=M.uniforms,N=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let _=0,w=T.length;_<w;_++){const L=T[_];if(Array.isArray(L))for(let D=0,B=L.length;D<B;D++)x(L[D],_,D,N);else x(L,_,0,N)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(M,R,T,N){if(y(M,R,T,N)===!0){const _=M.__offset,w=M.value;if(Array.isArray(w)){let L=0;for(let D=0;D<w.length;D++){const B=w[D],q=h(B);v(B,M.__data,L),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(w,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,M.__data)}}function v(M,R,T){typeof M=="number"||typeof M=="boolean"?R[0]=M:M.isMatrix3?(R[0]=M.elements[0],R[1]=M.elements[1],R[2]=M.elements[2],R[3]=0,R[4]=M.elements[3],R[5]=M.elements[4],R[6]=M.elements[5],R[7]=0,R[8]=M.elements[6],R[9]=M.elements[7],R[10]=M.elements[8],R[11]=0):ArrayBuffer.isView(M)?R.set(new M.constructor(M.buffer,M.byteOffset,R.length)):M.toArray(R,T)}function y(M,R,T,N){const _=M.value,w=R+"_"+T;if(N[w]===void 0)return typeof _=="number"||typeof _=="boolean"?N[w]=_:ArrayBuffer.isView(_)?N[w]=_.slice():N[w]=_.clone(),!0;{const L=N[w];if(typeof _=="number"||typeof _=="boolean"){if(L!==_)return N[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(L.equals(_)===!1)return L.copy(_),!0}}return!1}function g(M){const R=M.uniforms;let T=0;const N=16;for(let w=0,L=R.length;w<L;w++){const D=Array.isArray(R[w])?R[w]:[R[w]];for(let B=0,q=D.length;B<q;B++){const Z=D[B],k=Array.isArray(Z.value)?Z.value:[Z.value];for(let X=0,W=k.length;X<W;X++){const te=k[X],se=h(te),le=T%N,fe=le%se.boundary,xe=le+fe;T+=fe,xe!==0&&N-xe<se.storage&&(T+=N-xe),Z.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=T,T+=se.storage}}}const _=T%N;return _>0&&(T+=N-_),M.__size=T,M.__cache={},this}function h(M){const R={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(R.boundary=4,R.storage=4):M.isVector2?(R.boundary=8,R.storage=8):M.isVector3||M.isColor?(R.boundary=16,R.storage=12):M.isVector4?(R.boundary=16,R.storage=16):M.isMatrix3?(R.boundary=48,R.storage=48):M.isMatrix4?(R.boundary=64,R.storage=64):M.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(R.boundary=16,R.storage=M.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",M),R}function A(M){const R=M.target;R.removeEventListener("dispose",A);const T=a.indexOf(R.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function C(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:d,update:c,dispose:C}}const Wp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Jt=null;function jp(){return Jt===null&&(Jt=new Pc(Wp,16,16,Hn,gn),Jt.name="DFG_LUT",Jt.minFilter=wt,Jt.magFilter=wt,Jt.wrapS=fn,Jt.wrapT=fn,Jt.generateMipmaps=!1,Jt.needsUpdate=!0),Jt}class Xp{constructor(e={}){const{canvas:t=lc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:u=!1,outputBufferType:x=Bt}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const y=x,g=new Set([ra,sa,ia]),h=new Set([Bt,rn,Ci,Ni,ta,na]),A=new Uint32Array(4),C=new Int32Array(4),M=new z;let R=null,T=null;const N=[],_=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let D=!1,B=null,q=null,Z=null,k=null;this._outputColorSpace=Ht;let X=0,W=0,te=null,se=-1,le=null;const fe=new dt,xe=new dt;let Be=null;const et=new je(0);let ke=0,J=t.width,ae=t.height,Q=1,_e=null,Re=null;const ye=new dt(0,0,J,ae),Ze=new dt(0,0,J,ae);let De=!1;const $e=new ca;let ze=!1,Ge=!1;const at=new lt,ot=new z,ft=new dt,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function ct(){return te===null?Q:1}let I=n;function bt(b,U){return t.getContext(b,U)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:d,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qr}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",Lt,!1),I===null){const U="webgl2";if(I=bt(U,b),I===null)throw bt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw Ye("WebGLRenderer: "+b.message),b}let Ke,E,p,F,V,Y,oe,ce,K,ee,de,Te,he,ue,Ce,we,P,S,$,O,re,ie,ne;function be(){Ke=new Wh(I),Ke.init(),re=new Fp(I,Ke),E=new Fh(I,Ke,e,re),p=new Ip(I,Ke),E.reversedDepthBuffer&&u&&p.buffers.depth.setReversed(!0),q=I.createFramebuffer(),Z=I.createFramebuffer(),k=I.createFramebuffer(),F=new qh(I),V=new bp,Y=new Up(I,Ke,p,V,E,re,F),oe=new Vh(L),ce=new Zc(I),ie=new Ih(I,ce),K=new jh(I,ce,F,ie),ee=new Kh(I,K,ce,ie,F),S=new Yh(I,E,Y),Ce=new Oh(V),de=new vp(L,oe,Ke,E,ie,Ce),Te=new Hp(L,V),he=new Sp,ue=new Rp(Ke),P=new Lh(L,oe,p,ee,v,d),we=new Lp(L,ee,E),ne=new Vp(I,F,E,p),$=new Uh(I,Ke,F),O=new Xh(I,Ke,F),F.programs=de.programs,L.capabilities=E,L.extensions=Ke,L.properties=V,L.renderLists=he,L.shadowMap=we,L.state=p,L.info=F}be(),y!==Bt&&(w=new Zh(y,t.width,t.height,o,s,r));const ve=new zp(L,I);this.xr=ve,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=Ke.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ke.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(b){b!==void 0&&(Q=b,this.setSize(J,ae,!1))},this.getSize=function(b){return b.set(J,ae)},this.setSize=function(b,U,j=!0){if(ve.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,ae=U,t.width=Math.floor(b*Q),t.height=Math.floor(U*Q),j===!0&&(t.style.width=b+"px",t.style.height=U+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(J*Q,ae*Q).floor()},this.setDrawingBufferSize=function(b,U,j){J=b,ae=U,Q=j,t.width=Math.floor(b*j),t.height=Math.floor(U*j),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(y===Bt){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(fe)},this.getViewport=function(b){return b.copy(ye)},this.setViewport=function(b,U,j,G){b.isVector4?ye.set(b.x,b.y,b.z,b.w):ye.set(b,U,j,G),p.viewport(fe.copy(ye).multiplyScalar(Q).round())},this.getScissor=function(b){return b.copy(Ze)},this.setScissor=function(b,U,j,G){b.isVector4?Ze.set(b.x,b.y,b.z,b.w):Ze.set(b,U,j,G),p.scissor(xe.copy(Ze).multiplyScalar(Q).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(b){p.setScissorTest(De=b)},this.setOpaqueSort=function(b){_e=b},this.setTransparentSort=function(b){Re=b},this.getClearColor=function(b){return b.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,j=!0){let G=0;if(b){let H=!1;if(te!==null){const ge=te.texture.format;H=g.has(ge)}if(H){const ge=te.texture.type,Se=h.has(ge),me=P.getClearColor(),Ee=P.getClearAlpha(),Ae=me.r,Ie=me.g,Oe=me.b;Se?(A[0]=Ae,A[1]=Ie,A[2]=Oe,A[3]=Ee,I.clearBufferuiv(I.COLOR,0,A)):(C[0]=Ae,C[1]=Ie,C[2]=Oe,C[3]=Ee,I.clearBufferiv(I.COLOR,0,C))}else G|=I.COLOR_BUFFER_BIT}U&&(G|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),B=b},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",Lt,!1),P.dispose(),he.dispose(),ue.dispose(),V.dispose(),oe.dispose(),ee.dispose(),ie.dispose(),ne.dispose(),de.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",fa),ve.removeEventListener("sessionend",pa),Pn.stop()};function He(b){b.preventDefault(),La("WebGLRenderer: Context Lost."),D=!0}function Je(){La("WebGLRenderer: Context Restored."),D=!1;const b=F.autoReset,U=we.enabled,j=we.autoUpdate,G=we.needsUpdate,H=we.type;be(),F.autoReset=b,we.enabled=U,we.autoUpdate=j,we.needsUpdate=G,we.type=H}function Lt(b){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function It(b){const U=b.target;U.removeEventListener("dispose",It),ml(U)}function ml(b){gl(b),V.remove(b)}function gl(b){const U=V.get(b).programs;U!==void 0&&(U.forEach(function(j){de.releaseProgram(j)}),b.isShaderMaterial&&de.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,j,G,H,ge){U===null&&(U=ut);const Se=H.isMesh&&H.matrixWorld.determinantAffine()<0,me=vl(b,U,j,G,H);p.setMaterial(G,Se);let Ee=j.index,Ae=1;if(G.wireframe===!0){if(Ee=K.getWireframeAttribute(j),Ee===void 0)return;Ae=2}const Ie=j.drawRange,Oe=j.attributes.position;let Ne=Ie.start*Ae,tt=(Ie.start+Ie.count)*Ae;ge!==null&&(Ne=Math.max(Ne,ge.start*Ae),tt=Math.min(tt,(ge.start+ge.count)*Ae)),Ee!==null?(Ne=Math.max(Ne,0),tt=Math.min(tt,Ee.count)):Oe!=null&&(Ne=Math.max(Ne,0),tt=Math.min(tt,Oe.count));const pt=tt-Ne;if(pt<0||pt===1/0)return;ie.setup(H,G,me,j,Ee);let ht,nt=$;if(Ee!==null&&(ht=ce.get(Ee),nt=O,nt.setIndex(ht)),H.isMesh)G.wireframe===!0?(p.setLineWidth(G.wireframeLinewidth*ct()),nt.setMode(I.LINES)):nt.setMode(I.TRIANGLES);else if(H.isLine){let yt=G.linewidth;yt===void 0&&(yt=1),p.setLineWidth(yt*ct()),H.isLineSegments?nt.setMode(I.LINES):H.isLineLoop?nt.setMode(I.LINE_LOOP):nt.setMode(I.LINE_STRIP)}else H.isPoints?nt.setMode(I.POINTS):H.isSprite&&nt.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))nt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const yt=H._multiDrawStarts,Me=H._multiDrawCounts,Ut=H._multiDrawCount,qe=Ee?ce.get(Ee).bytesPerElement:1,zt=V.get(G).currentProgram.getUniforms();for(let $t=0;$t<Ut;$t++)zt.setValue(I,"_gl_DrawID",$t),nt.render(yt[$t]/qe,Me[$t])}else if(H.isInstancedMesh)nt.renderInstances(Ne,pt,H.count);else if(j.isInstancedBufferGeometry){const yt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Me=Math.min(j.instanceCount,yt);nt.renderInstances(Ne,pt,Me)}else nt.render(Ne,pt)};function ha(b,U,j){b.transparent===!0&&b.side===hn&&b.forceSinglePass===!1?(b.side=Dt,b.needsUpdate=!0,Ui(b,U,j),b.side=Cn,b.needsUpdate=!0,Ui(b,U,j),b.side=hn):Ui(b,U,j)}this.compile=function(b,U,j=null){j===null&&(j=b),T=ue.get(j),T.init(U),_.push(T),j.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),b!==j&&b.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights();const G=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ge=H.material;if(ge)if(Array.isArray(ge))for(let Se=0;Se<ge.length;Se++){const me=ge[Se];ha(me,j,H),G.add(me)}else ha(ge,j,H),G.add(ge)}),T=_.pop(),G},this.compileAsync=function(b,U,j=null){const G=this.compile(b,U,j);return new Promise(H=>{function ge(){if(G.forEach(function(Se){V.get(Se).currentProgram.isReady()&&G.delete(Se)}),G.size===0){H(b);return}setTimeout(ge,10)}Ke.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Es=null;function xl(b){Es&&Es(b)}function fa(){Pn.stop()}function pa(){Pn.start()}const Pn=new ol;Pn.setAnimationLoop(xl),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(b){Es=b,ve.setAnimationLoop(b),b===null?Pn.stop():Pn.start()},ve.addEventListener("sessionstart",fa),ve.addEventListener("sessionend",pa),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(b,U);const j=ve.enabled===!0&&ve.isPresenting===!0,G=w!==null&&(te===null||j)&&w.begin(L,te);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(U),U=ve.getCamera()),b.isScene===!0&&b.onBeforeRender(L,b,U,te),T=ue.get(b,_.length),T.init(U),T.state.textureUnits=Y.getTextureUnits(),_.push(T),at.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$e.setFromProjectionMatrix(at,tn,U.reversedDepth),Ge=this.localClippingEnabled,ze=Ce.init(this.clippingPlanes,Ge),R=he.get(b,N.length),R.init(),N.push(R),ve.enabled===!0&&ve.isPresenting===!0){const Se=L.xr.getDepthSensingMesh();Se!==null&&Ts(Se,U,-1/0,L.sortObjects)}Ts(b,U,0,L.sortObjects),R.finish(),L.sortObjects===!0&&R.sort(_e,Re,U.reversedDepth),st=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,st&&P.addToRenderList(R,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ze===!0&&Ce.beginShadows();const H=T.state.shadowsArray;if(we.render(H,b,U),ze===!0&&Ce.endShadows(),(G&&w.hasRenderPass())===!1){const Se=R.opaque,me=R.transmissive;if(T.setupLights(),U.isArrayCamera){const Ee=U.cameras;if(me.length>0)for(let Ae=0,Ie=Ee.length;Ae<Ie;Ae++){const Oe=Ee[Ae];ga(Se,me,b,Oe)}st&&P.render(b);for(let Ae=0,Ie=Ee.length;Ae<Ie;Ae++){const Oe=Ee[Ae];ma(R,b,Oe,Oe.viewport)}}else me.length>0&&ga(Se,me,b,U),st&&P.render(b),ma(R,b,U)}te!==null&&W===0&&(Y.updateMultisampleRenderTarget(te),Y.updateRenderTargetMipmap(te)),G&&w.end(L),b.isScene===!0&&b.onAfterRender(L,b,U),ie.resetDefaultState(),se=-1,le=null,_.pop(),_.length>0?(T=_[_.length-1],Y.setTextureUnits(T.state.textureUnits),ze===!0&&Ce.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,N.pop(),N.length>0?R=N[N.length-1]:R=null,B!==null&&B.renderEnd()};function Ts(b,U,j,G){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$e.intersectsSprite(b)){G&&ft.setFromMatrixPosition(b.matrixWorld).applyMatrix4(at);const Se=ee.update(b),me=b.material;me.visible&&R.push(b,Se,me,j,ft.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$e.intersectsObject(b))){const Se=ee.update(b),me=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ft.copy(b.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ft.copy(Se.boundingSphere.center)),ft.applyMatrix4(b.matrixWorld).applyMatrix4(at)),Array.isArray(me)){const Ee=Se.groups;for(let Ae=0,Ie=Ee.length;Ae<Ie;Ae++){const Oe=Ee[Ae],Ne=me[Oe.materialIndex];Ne&&Ne.visible&&R.push(b,Se,Ne,j,ft.z,Oe)}}else me.visible&&R.push(b,Se,me,j,ft.z,null)}}const ge=b.children;for(let Se=0,me=ge.length;Se<me;Se++)Ts(ge[Se],U,j,G)}function ma(b,U,j,G){const{opaque:H,transmissive:ge,transparent:Se}=b;T.setupLightsView(j),ze===!0&&Ce.setGlobalState(L.clippingPlanes,j),G&&p.viewport(fe.copy(G)),H.length>0&&Ii(H,U,j),ge.length>0&&Ii(ge,U,j),Se.length>0&&Ii(Se,U,j),p.buffers.depth.setTest(!0),p.buffers.depth.setMask(!0),p.buffers.color.setMask(!0),p.setPolygonOffset(!1)}function ga(b,U,j,G){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const Ne=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new sn(1,1,{generateMipmaps:!0,type:Ne?gn:Bt,minFilter:kn,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace})}const ge=T.state.transmissionRenderTarget[G.id],Se=G.viewport||fe;ge.setSize(Se.z*L.transmissionResolutionScale,Se.w*L.transmissionResolutionScale);const me=L.getRenderTarget(),Ee=L.getActiveCubeFace(),Ae=L.getActiveMipmapLevel();L.setRenderTarget(ge),L.getClearColor(et),ke=L.getClearAlpha(),ke<1&&L.setClearColor(16777215,.5),L.clear(),st&&P.render(j);const Ie=L.toneMapping;L.toneMapping=nn;const Oe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),ze===!0&&Ce.setGlobalState(L.clippingPlanes,G),Ii(b,j,G),Y.updateMultisampleRenderTarget(ge),Y.updateRenderTargetMipmap(ge),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let tt=0,pt=U.length;tt<pt;tt++){const ht=U[tt],{object:nt,geometry:yt,material:Me,group:Ut}=ht;if(Me.side===hn&&nt.layers.test(G.layers)){const qe=Me.side;Me.side=Dt,Me.needsUpdate=!0,xa(nt,j,G,yt,Me,Ut),Me.side=qe,Me.needsUpdate=!0,Ne=!0}}Ne===!0&&(Y.updateMultisampleRenderTarget(ge),Y.updateRenderTargetMipmap(ge))}L.setRenderTarget(me,Ee,Ae),L.setClearColor(et,ke),Oe!==void 0&&(G.viewport=Oe),L.toneMapping=Ie}function Ii(b,U,j){const G=U.isScene===!0?U.overrideMaterial:null;for(let H=0,ge=b.length;H<ge;H++){const Se=b[H],{object:me,geometry:Ee,group:Ae}=Se;let Ie=Se.material;Ie.allowOverride===!0&&G!==null&&(Ie=G),me.layers.test(j.layers)&&xa(me,U,j,Ee,Ie,Ae)}}function xa(b,U,j,G,H,ge){b.onBeforeRender(L,U,j,G,H,ge),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(L,U,j,G,b,ge),H.transparent===!0&&H.side===hn&&H.forceSinglePass===!1?(H.side=Dt,H.needsUpdate=!0,L.renderBufferDirect(j,U,G,H,b,ge),H.side=Cn,H.needsUpdate=!0,L.renderBufferDirect(j,U,G,H,b,ge),H.side=hn):L.renderBufferDirect(j,U,G,H,b,ge),b.onAfterRender(L,U,j,G,H,ge)}function Ui(b,U,j){U.isScene!==!0&&(U=ut);const G=V.get(b),H=T.state.lights,ge=T.state.shadowsArray,Se=H.state.version,me=de.getParameters(b,H.state,ge,U,j,T.state.lightProbeGridArray),Ee=de.getProgramCacheKey(me);let Ae=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;const Ie=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=oe.get(b.envMap||G.environment,Ie),G.envMapRotation=G.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ae===void 0&&(b.addEventListener("dispose",It),Ae=new Map,G.programs=Ae);let Oe=Ae.get(Ee);if(Oe!==void 0){if(G.currentProgram===Oe&&G.lightsStateVersion===Se)return va(b,me),Oe}else me.uniforms=de.getUniforms(b),B!==null&&b.isNodeMaterial&&B.build(b,j,me),b.onBeforeCompile(me,L),Oe=de.acquireProgram(me,Ee),Ae.set(Ee,Oe),G.uniforms=me.uniforms;const Ne=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ne.clippingPlanes=Ce.uniform),va(b,me),G.needsLights=Ml(b),G.lightsStateVersion=Se,G.needsLights&&(Ne.ambientLightColor.value=H.state.ambient,Ne.lightProbe.value=H.state.probe,Ne.directionalLights.value=H.state.directional,Ne.directionalLightShadows.value=H.state.directionalShadow,Ne.spotLights.value=H.state.spot,Ne.spotLightShadows.value=H.state.spotShadow,Ne.rectAreaLights.value=H.state.rectArea,Ne.ltc_1.value=H.state.rectAreaLTC1,Ne.ltc_2.value=H.state.rectAreaLTC2,Ne.pointLights.value=H.state.point,Ne.pointLightShadows.value=H.state.pointShadow,Ne.hemisphereLights.value=H.state.hemi,Ne.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ne.spotLightMatrix.value=H.state.spotLightMatrix,Ne.spotLightMap.value=H.state.spotLightMap,Ne.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=Oe,G.uniformsList=null,Oe}function _a(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=hs.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function va(b,U){const j=V.get(b);j.outputColorSpace=U.outputColorSpace,j.batching=U.batching,j.batchingColor=U.batchingColor,j.instancing=U.instancing,j.instancingColor=U.instancingColor,j.instancingMorph=U.instancingMorph,j.skinning=U.skinning,j.morphTargets=U.morphTargets,j.morphNormals=U.morphNormals,j.morphColors=U.morphColors,j.morphTargetsCount=U.morphTargetsCount,j.numClippingPlanes=U.numClippingPlanes,j.numIntersection=U.numClipIntersection,j.vertexAlphas=U.vertexAlphas,j.vertexTangents=U.vertexTangents,j.toneMapping=U.toneMapping}function _l(b,U){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(U.matrixWorld);for(let j=0,G=b.length;j<G;j++){const H=b[j];if(H.texture!==null&&H.boundingBox.containsPoint(M))return H}return null}function vl(b,U,j,G,H){U.isScene!==!0&&(U=ut),Y.resetTextureUnits();const ge=U.fog,Se=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,me=te===null?L.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ve.workingColorSpace,Ee=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ae=oe.get(G.envMap||Se,Ee),Ie=G.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Oe=!!j.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ne=!!j.morphAttributes.position,tt=!!j.morphAttributes.normal,pt=!!j.morphAttributes.color;let ht=nn;G.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ht=L.toneMapping);const nt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,yt=nt!==void 0?nt.length:0,Me=V.get(G),Ut=T.state.lights;if(ze===!0&&(Ge===!0||b!==le)){const rt=b===le&&G.id===se;Ce.setState(G,b,rt)}let qe=!1;G.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Ut.state.version||Me.outputColorSpace!==me||H.isBatchedMesh&&Me.batching===!1||!H.isBatchedMesh&&Me.batching===!0||H.isBatchedMesh&&Me.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Me.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Me.instancing===!1||!H.isInstancedMesh&&Me.instancing===!0||H.isSkinnedMesh&&Me.skinning===!1||!H.isSkinnedMesh&&Me.skinning===!0||H.isInstancedMesh&&Me.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Me.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Me.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Me.instancingMorph===!1&&H.morphTexture!==null||Me.envMap!==Ae||G.fog===!0&&Me.fog!==ge||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Ce.numPlanes||Me.numIntersection!==Ce.numIntersection)||Me.vertexAlphas!==Ie||Me.vertexTangents!==Oe||Me.morphTargets!==Ne||Me.morphNormals!==tt||Me.morphColors!==pt||Me.toneMapping!==ht||Me.morphTargetsCount!==yt||!!Me.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(qe=!0):(qe=!0,Me.__version=G.version);let zt=Me.currentProgram;qe===!0&&(zt=Ui(G,U,H),B&&G.isNodeMaterial&&B.onUpdateProgram(G,zt,Me));let $t=!1,_n=!1,jn=!1;const it=zt.getUniforms(),mt=Me.uniforms;if(p.useProgram(zt.program)&&($t=!0,_n=!0,jn=!0),G.id!==se&&(se=G.id,_n=!0),Me.needsLights){const rt=_l(T.state.lightProbeGridArray,H);Me.lightProbeGrid!==rt&&(Me.lightProbeGrid=rt,_n=!0)}if($t||le!==b){p.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),it.setValue(I,"projectionMatrix",b.projectionMatrix),it.setValue(I,"viewMatrix",b.matrixWorldInverse);const bn=it.map.cameraPosition;bn!==void 0&&bn.setValue(I,ot.setFromMatrixPosition(b.matrixWorld)),E.logarithmicDepthBuffer&&it.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&it.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),le!==b&&(le=b,_n=!0,jn=!0)}if(Me.needsLights&&(Ut.state.directionalShadowMap.length>0&&it.setValue(I,"directionalShadowMap",Ut.state.directionalShadowMap,Y),Ut.state.spotShadowMap.length>0&&it.setValue(I,"spotShadowMap",Ut.state.spotShadowMap,Y),Ut.state.pointShadowMap.length>0&&it.setValue(I,"pointShadowMap",Ut.state.pointShadowMap,Y)),H.isSkinnedMesh){it.setOptional(I,H,"bindMatrix"),it.setOptional(I,H,"bindMatrixInverse");const rt=H.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),it.setValue(I,"boneTexture",rt.boneTexture,Y))}H.isBatchedMesh&&(it.setOptional(I,H,"batchingTexture"),it.setValue(I,"batchingTexture",H._matricesTexture,Y),it.setOptional(I,H,"batchingIdTexture"),it.setValue(I,"batchingIdTexture",H._indirectTexture,Y),it.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&it.setValue(I,"batchingColorTexture",H._colorsTexture,Y));const vn=j.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&S.update(H,j,zt),(_n||Me.receiveShadow!==H.receiveShadow)&&(Me.receiveShadow=H.receiveShadow,it.setValue(I,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(mt.envMapIntensity.value=U.environmentIntensity),mt.dfgLUT!==void 0&&(mt.dfgLUT.value=jp()),_n){if(it.setValue(I,"toneMappingExposure",L.toneMappingExposure),Me.needsLights&&bl(mt,jn),ge&&G.fog===!0&&Te.refreshFogUniforms(mt,ge),Te.refreshMaterialUniforms(mt,G,Q,ae,T.state.transmissionRenderTarget[b.id]),Me.needsLights&&Me.lightProbeGrid){const rt=Me.lightProbeGrid;mt.probesSH.value=rt.texture,mt.probesMin.value.copy(rt.boundingBox.min),mt.probesMax.value.copy(rt.boundingBox.max),mt.probesResolution.value.copy(rt.resolution)}hs.upload(I,_a(Me),mt,Y)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(hs.upload(I,_a(Me),mt,Y),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&it.setValue(I,"center",H.center),it.setValue(I,"modelViewMatrix",H.modelViewMatrix),it.setValue(I,"normalMatrix",H.normalMatrix),it.setValue(I,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){const rt=G.uniformsGroups;for(let bn=0,Xn=rt.length;bn<Xn;bn++){const ba=rt[bn];ne.update(ba,zt),ne.bind(ba,zt)}}return zt}function bl(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Ml(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(b,U,j){const G=V.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),V.get(b.texture).__webglTexture=U,V.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:j,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){const j=V.get(b);j.__webglFramebuffer=U,j.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,j=0){te=b,X=U,W=j;let G=null,H=!1,ge=!1;if(b){const me=V.get(b);if(me.__useDefaultFramebuffer!==void 0){p.bindFramebuffer(I.FRAMEBUFFER,me.__webglFramebuffer),fe.copy(b.viewport),xe.copy(b.scissor),Be=b.scissorTest,p.viewport(fe),p.scissor(xe),p.setScissorTest(Be),se=-1;return}else if(me.__webglFramebuffer===void 0)Y.setupRenderTarget(b);else if(me.__hasExternalTextures)Y.rebindTextures(b,V.get(b.texture).__webglTexture,V.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ie=b.depthTexture;if(me.__boundDepthTexture!==Ie){if(Ie!==null&&V.has(Ie)&&(b.width!==Ie.image.width||b.height!==Ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(b)}}const Ee=b.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ge=!0);const Ae=V.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ae[U])?G=Ae[U][j]:G=Ae[U],H=!0):b.samples>0&&Y.useMultisampledRTT(b)===!1?G=V.get(b).__webglMultisampledFramebuffer:Array.isArray(Ae)?G=Ae[j]:G=Ae,fe.copy(b.viewport),xe.copy(b.scissor),Be=b.scissorTest}else fe.copy(ye).multiplyScalar(Q).floor(),xe.copy(Ze).multiplyScalar(Q).floor(),Be=De;if(j!==0&&(G=q),p.bindFramebuffer(I.FRAMEBUFFER,G)&&p.drawBuffers(b,G),p.viewport(fe),p.scissor(xe),p.setScissorTest(Be),H){const me=V.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,j)}else if(ge){const me=U;for(let Ee=0;Ee<b.textures.length;Ee++){const Ae=V.get(b.textures[Ee]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ee,Ae.__webglTexture,j,me)}}else if(b!==null&&j!==0){const me=V.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,me.__webglTexture,j)}se=-1},this.readRenderTargetPixels=function(b,U,j,G,H,ge,Se,me=0){if(!(b&&b.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){p.bindFramebuffer(I.FRAMEBUFFER,Ee);try{const Ae=b.textures[me],Ie=Ae.format,Oe=Ae.type;if(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+me),!E.textureFormatReadable(Ie)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!E.textureTypeReadable(Oe)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-G&&j>=0&&j<=b.height-H&&I.readPixels(U,j,G,H,re.convert(Ie),re.convert(Oe),ge)}finally{const Ae=te!==null?V.get(te).__webglFramebuffer:null;p.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(b,U,j,G,H,ge,Se,me=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee)if(U>=0&&U<=b.width-G&&j>=0&&j<=b.height-H){p.bindFramebuffer(I.FRAMEBUFFER,Ee);const Ae=b.textures[me],Ie=Ae.format,Oe=Ae.type;if(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+me),!E.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!E.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ne=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ne),I.bufferData(I.PIXEL_PACK_BUFFER,ge.byteLength,I.STREAM_READ),I.readPixels(U,j,G,H,re.convert(Ie),re.convert(Oe),0);const tt=te!==null?V.get(te).__webglFramebuffer:null;p.bindFramebuffer(I.FRAMEBUFFER,tt);const pt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await cc(I,pt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ne),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ge),I.deleteBuffer(Ne),I.deleteSync(pt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,j=0){const G=Math.pow(2,-j),H=Math.floor(b.image.width*G),ge=Math.floor(b.image.height*G),Se=U!==null?U.x:0,me=U!==null?U.y:0;Y.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,j,0,0,Se,me,H,ge),p.unbindTexture()},this.copyTextureToTexture=function(b,U,j=null,G=null,H=0,ge=0){let Se,me,Ee,Ae,Ie,Oe,Ne,tt,pt;const ht=b.isCompressedTexture?b.mipmaps[ge]:b.image;if(j!==null)Se=j.max.x-j.min.x,me=j.max.y-j.min.y,Ee=j.isBox3?j.max.z-j.min.z:1,Ae=j.min.x,Ie=j.min.y,Oe=j.isBox3?j.min.z:0;else{const mt=Math.pow(2,-H);Se=Math.floor(ht.width*mt),me=Math.floor(ht.height*mt),b.isDataArrayTexture?Ee=ht.depth:b.isData3DTexture?Ee=Math.floor(ht.depth*mt):Ee=1,Ae=0,Ie=0,Oe=0}G!==null?(Ne=G.x,tt=G.y,pt=G.z):(Ne=0,tt=0,pt=0);const nt=re.convert(U.format),yt=re.convert(U.type);let Me;U.isData3DTexture?(Y.setTexture3D(U,0),Me=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Y.setTexture2DArray(U,0),Me=I.TEXTURE_2D_ARRAY):(Y.setTexture2D(U,0),Me=I.TEXTURE_2D),p.activeTexture(I.TEXTURE0),p.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),p.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),p.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Ut=p.getParameter(I.UNPACK_ROW_LENGTH),qe=p.getParameter(I.UNPACK_IMAGE_HEIGHT),zt=p.getParameter(I.UNPACK_SKIP_PIXELS),$t=p.getParameter(I.UNPACK_SKIP_ROWS),_n=p.getParameter(I.UNPACK_SKIP_IMAGES);p.pixelStorei(I.UNPACK_ROW_LENGTH,ht.width),p.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht.height),p.pixelStorei(I.UNPACK_SKIP_PIXELS,Ae),p.pixelStorei(I.UNPACK_SKIP_ROWS,Ie),p.pixelStorei(I.UNPACK_SKIP_IMAGES,Oe);const jn=b.isDataArrayTexture||b.isData3DTexture,it=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const mt=V.get(b),vn=V.get(U),rt=V.get(mt.__renderTarget),bn=V.get(vn.__renderTarget);p.bindFramebuffer(I.READ_FRAMEBUFFER,rt.__webglFramebuffer),p.bindFramebuffer(I.DRAW_FRAMEBUFFER,bn.__webglFramebuffer);for(let Xn=0;Xn<Ee;Xn++)jn&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,V.get(b).__webglTexture,H,Oe+Xn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,V.get(U).__webglTexture,ge,pt+Xn)),I.blitFramebuffer(Ae,Ie,Se,me,Ne,tt,Se,me,I.DEPTH_BUFFER_BIT,I.NEAREST);p.bindFramebuffer(I.READ_FRAMEBUFFER,null),p.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||V.has(b)){const mt=V.get(b),vn=V.get(U);p.bindFramebuffer(I.READ_FRAMEBUFFER,Z),p.bindFramebuffer(I.DRAW_FRAMEBUFFER,k);for(let rt=0;rt<Ee;rt++)jn?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,mt.__webglTexture,H,Oe+rt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mt.__webglTexture,H),it?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,vn.__webglTexture,ge,pt+rt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,vn.__webglTexture,ge),H!==0?I.blitFramebuffer(Ae,Ie,Se,me,Ne,tt,Se,me,I.COLOR_BUFFER_BIT,I.NEAREST):it?I.copyTexSubImage3D(Me,ge,Ne,tt,pt+rt,Ae,Ie,Se,me):I.copyTexSubImage2D(Me,ge,Ne,tt,Ae,Ie,Se,me);p.bindFramebuffer(I.READ_FRAMEBUFFER,null),p.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else it?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Me,ge,Ne,tt,pt,Se,me,Ee,nt,yt,ht.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Me,ge,Ne,tt,pt,Se,me,Ee,nt,ht.data):I.texSubImage3D(Me,ge,Ne,tt,pt,Se,me,Ee,nt,yt,ht):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ge,Ne,tt,Se,me,nt,yt,ht.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ge,Ne,tt,ht.width,ht.height,nt,ht.data):I.texSubImage2D(I.TEXTURE_2D,ge,Ne,tt,Se,me,nt,yt,ht);p.pixelStorei(I.UNPACK_ROW_LENGTH,Ut),p.pixelStorei(I.UNPACK_IMAGE_HEIGHT,qe),p.pixelStorei(I.UNPACK_SKIP_PIXELS,zt),p.pixelStorei(I.UNPACK_SKIP_ROWS,$t),p.pixelStorei(I.UNPACK_SKIP_IMAGES,_n),ge===0&&U.generateMipmaps&&I.generateMipmap(Me),p.unbindTexture()},this.initRenderTarget=function(b){V.get(b).__webglFramebuffer===void 0&&Y.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Y.setTextureCube(b,0):b.isData3DTexture?Y.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Y.setTexture2DArray(b,0):Y.setTexture2D(b,0),p.unbindTexture()},this.resetState=function(){X=0,W=0,te=null,p.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}}function qp(i,e,t,n){const s=document.createElement("canvas");s.width=512,s.height=512;const r=s.getContext("2d");if(r){const o=r.createLinearGradient(0,0,512,512);o.addColorStop(0,n),o.addColorStop(1,"#040814"),r.fillStyle=o,r.fillRect(0,0,512,512),r.strokeStyle=t,r.lineWidth=16,r.strokeRect(16,16,480,480),r.strokeStyle="rgba(255, 255, 255, 0.08)",r.lineWidth=2;for(let d=64;d<512;d+=64)r.beginPath(),r.moveTo(d,0),r.lineTo(d,512),r.stroke(),r.beginPath(),r.moveTo(0,d),r.lineTo(512,d),r.stroke();r.fillStyle=t,r.fillRect(24,24,32,8),r.fillRect(24,24,8,32),r.fillRect(456,24,32,8),r.fillRect(480,24,8,32),r.fillRect(24,480,32,8),r.fillRect(24,456,8,32),r.fillRect(456,480,32,8),r.fillRect(480,456,8,32),r.shadowColor=t,r.shadowBlur=25,r.fillStyle="#ffffff",r.font="bold 58px 'Outfit', sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText(i,256,220),r.shadowBlur=0,r.fillStyle=t,r.font="bold 28px 'JetBrains Mono', monospace",r.fillText(`[ ${e} ]`,256,310)}const a=new Fc(s);return a.needsUpdate=!0,a}function Yp({isLightMode:i=!1}){const e=Ue.useRef(null);return Ue.useEffect(()=>{const t=e.current;if(!t)return;const n=t.clientWidth,s=t.clientHeight,r=new Tc,a=new Vt(45,n/s,.1,1e3);a.position.z=6.5;const o=new Xp({alpha:!0,antialias:!0});o.setSize(n,s),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.appendChild(o.domElement);const d=new qc(16777215,i?1.2:.8);r.add(d);const c=new no(61695,2.5);c.position.set(5,5,7),r.add(c);const f=new no(15485081,2);f.position.set(-5,-5,-5),r.add(f);const u=[{label:"LARAVEL",sublabel:"BACKEND API",color:"#6366f1",bg:"#0f172a"},{label:"REACT 19",sublabel:"FRONTEND UI",color:"#06b6d4",bg:"#082f49"},{label:"FLUTTER",sublabel:"MOBILE DEV",color:"#3b82f6",bg:"#1e3a8a"},{label:"MYSQL",sublabel:"DATABASE",color:"#f59e0b",bg:"#451a03"},{label:"REST API",sublabel:"ARCHITECTURE",color:"#10b981",bg:"#064e3b"},{label:"CTF PLAYER",sublabel:"SECURITY HOBBY",color:"#ec4899",bg:"#831843"}].map(Q=>{const _e=qp(Q.label,Q.sublabel,Q.color,Q.bg);return new Za({map:_e,roughness:.2,metalness:.8,transparent:!0,opacity:i?.9:.95})}),x=new Vn(2.3,2.3,2.3),v=new Pt(x,u);r.add(v);const y=new Vn(2.45,2.45,2.45),g=new Ri({color:i?5195493:61695,wireframe:!0,transparent:!0,opacity:.35}),h=new Pt(y,g);r.add(h);const A=new da(.75,32,32),C=new Za({color:i?6514417:61695,emissive:i?5195493:61695,emissiveIntensity:.8,roughness:.1}),M=new Pt(A,C);r.add(M);const R=new _s(2.9,.018,16,100),T=new Ri({color:i?3900150:61695,transparent:!0,opacity:.6}),N=new Pt(R,T);N.rotation.x=Math.PI/3,r.add(N);const _=new _s(3.3,.012,16,90),w=new Ri({color:i?15485081:16096779,transparent:!0,opacity:.5}),L=new Pt(_,w);L.rotation.y=Math.PI/4,r.add(L);const D=160,B=new kt,q=new Float32Array(D*3);for(let Q=0;Q<D*3;Q+=3){const _e=3+Math.random()*2.5,Re=Math.random()*Math.PI*2,ye=Math.acos(Math.random()*2-1);q[Q]=_e*Math.sin(ye)*Math.cos(Re),q[Q+1]=_e*Math.sin(ye)*Math.sin(Re),q[Q+2]=_e*Math.cos(ye)}B.setAttribute("position",new Kt(q,3));const Z=new el({color:i?5195493:61695,size:.045,transparent:!0,opacity:.75}),k=new Uc(B,Z);r.add(k);let X=!1,W={x:0,y:0},te=0,se=0,le=0,fe=0;const xe=Q=>{X=!0,W={x:Q.clientX,y:Q.clientY}},Be=Q=>{const _e=t.getBoundingClientRect(),Re=Q.clientX-_e.left-_e.width/2,ye=Q.clientY-_e.top-_e.height/2;if(le=Re*.0015,fe=ye*.0015,X){const Ze={x:Q.clientX-W.x,y:Q.clientY-W.y};v.rotation.y+=Ze.x*.01,v.rotation.x+=Ze.y*.01,h.rotation.y+=Ze.x*.01,h.rotation.x+=Ze.y*.01,W={x:Q.clientX,y:Q.clientY}}},et=()=>{X=!1};t.addEventListener("mousedown",xe),window.addEventListener("mousemove",Be),window.addEventListener("mouseup",et);const ke=()=>{if(!t)return;const Q=t.clientWidth,_e=t.clientHeight;a.aspect=Q/_e,a.updateProjectionMatrix(),o.setSize(Q,_e)};window.addEventListener("resize",ke);let J;const ae=()=>{te+=(le-te)*.05,se+=(fe-se)*.05,X||(v.rotation.x+=.005,v.rotation.y+=.008,h.rotation.x+=.005,h.rotation.y+=.008),N.rotation.z+=.006,L.rotation.x+=.007,k.rotation.y+=.002,r.rotation.y=te*.8,r.rotation.x=se*.8,o.render(r,a),J=requestAnimationFrame(ae)};return ae(),()=>{t.removeEventListener("mousedown",xe),window.removeEventListener("mousemove",Be),window.removeEventListener("mouseup",et),window.removeEventListener("resize",ke),cancelAnimationFrame(J),t.contains(o.domElement)&&t.removeChild(o.domElement),x.dispose(),u.forEach(Q=>Q.dispose()),y.dispose(),g.dispose(),A.dispose(),C.dispose(),R.dispose(),T.dispose(),_.dispose(),w.dispose(),B.dispose(),Z.dispose(),o.dispose()}},[i]),l.jsx("div",{ref:e,className:"w-full h-[400px] sm:h-[500px] relative flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing select-none"})}const Kp=Co.lazy(()=>Tl(()=>import("./index.C3YGerEN.js").then(i=>i.i),__vite__mapDeps([0,1])).then(i=>({default:i.GitHubCalendar}))),Ro=()=>{const i=Ue.useRef(null);return Ue.useEffect(()=>{const e=i.current;if(!e)return;const t=e.getContext("2d");if(!t)return;e.width=window.innerWidth,e.height=window.innerHeight;const n=Math.floor(e.width/20),s=Array(n).fill(0);let r;const a=()=>{t.fillStyle="rgba(3, 7, 18, 0.15)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#22c55e",t.font="15px monospace",s.forEach((c,f)=>{const m=String.fromCharCode(Math.floor(Math.random()*96)+33),u=f*20;t.fillText(m,u,c),c>100+Math.random()*1e4?s[f]=0:s[f]=c+20})},o=()=>{a(),r=requestAnimationFrame(o)};o();const d=()=>{e.width=window.innerWidth,e.height=window.innerHeight};return window.addEventListener("resize",d),()=>{cancelAnimationFrame(r),window.removeEventListener("resize",d)}},[]),l.jsx("canvas",{ref:i,className:"fixed inset-0 z-[100] w-full h-full pointer-events-none"})};function Zp(){const[i,e]=Ue.useState("home"),[t,n]=Ue.useState(!1),[s,r]=Ue.useState(!0),[a,o]=Ue.useState(0),[d,c]=Ue.useState("> BOOT: INITIATING SECURE ARCHITECTURE PROTOCOLS..."),[f,m]=Ue.useState(!1),[u,x]=Ue.useState({x:0,y:0}),[v,y]=Ue.useState([]),[g,h]=Ue.useState(null),[A,C]=Ue.useState(!1),M=Ue.useRef(!1),[R,T]=Ue.useState(!1),[N,_]=Ue.useState(0),[w,L]=Ue.useState(!1),[D,B]=Ue.useState(""),[q,Z]=Ue.useState(["Don Neto Developer Terminal [Version 1.0.0]","Type 'help' to view all available commands.","guest@donneto:~$ "]),[k,X]=Ue.useState(!1),[W,te]=Ue.useState(!1),[se,le]=Ue.useState(""),[fe,xe]=Ue.useState([{sender:"bot",text:"Hello! 👋 I'm Reynald's virtual assistant. How can I help you today? Ask me about projects, skills, or contact info."}]),[Be,et]=Ue.useState(!1);Ue.useEffect(()=>{document.documentElement.classList.toggle("light",R)},[R]);const ke=P=>{P.preventDefault();const S=D.trim().toLowerCase();if(!S)return;let $=[...q];switch($[$.length-1]==="guest@donneto:~$ "?$[$.length-1]=`guest@donneto:~$ ${D}`:$.push(`guest@donneto:~$ ${D}`),S){case"help":$.push("Available commands:","  about        - View Reynald's bio","  projects     - List showcase projects and links","  skills       - Show technical stack details","  contact      - Display professional email and networks","  achievements - List CTF competition rewards","  hack         - Execute automated matrix decryption sequence","  clear        - Clear console history");break;case"about":$.push("Reynald Abner Tananda is a Computer Science student at Hasanuddin University","focusing on Software Engineering, Laravel REST APIs, Flutter UI, and cybersecurity forensics.");break;case"projects":$.push("Featured Projects:","  1. E-Logbook Radiology UNHAS (Laravel & PWA medical platform)","  2. Topcell CRM (Laravel enterprise portal)","  3. ANTEKHUB (Flutter student networking)","  4. Jokka Web (Next.js culture explorer)","  5. Topcell Company Profile (Next.js responsive landing page)");break;case"skills":$.push("Programming: Python, PHP, JS, Kotlin, Dart","Web: Laravel, React, Next.js, Nginx, REST APIs","Mobile/DS: Flutter, Machine Learning, Deep Learning, NLP","Tools: Git, Linux, Docker, Tailwind CSS, SQL databases");break;case"contact":$.push("Direct contact details:","  Email    : reynald030685@gmail.com","  GitHub   : github.com/reynaldabnerrr","  LinkedIn : linkedin.com/in/reynald-abner-tananda");break;case"achievements":$.push("Achievements Milestones:","  - GEMASTIK XVIII Cyber Security Finalist (2025)","  - Pragyan CTF 2025 NIT India Winner (1st Student Category)","  - Interfest CTF Top 6 (2024)","  - Cyber Jawara International Top 11 (2024)");break;case"clear":$=[];break;case"hack":X(!0),setTimeout(()=>{X(!1),Z(O=>[...O,"> Hacking simulator complete. Target database successfully decrypted."])},3e3);break;default:$.push(`Command not found: '${S}'. Type 'help' to see options.`)}S!=="clear"?$.push("guest@donneto:~$ "):$=["guest@donneto:~$ "],Z($),B("")},J=P=>{P.trim()&&(xe(S=>[...S,{sender:"user",text:P}]),le(""),et(!0),setTimeout(()=>{et(!1);const S=P.toLowerCase();let $="I'm not sure about that. Try selecting one of the quick options below or ask about 'projects', 'skills', or 'hire'.";S.includes("project")||S.includes("work")?$="Reynald has developed outstanding systems like Topcell CRM, ANTEKHUB (Flutter mobile app), and Jokka Web ( Makasar tourism planner). You can inspect them in the Projects section!":S.includes("skill")||S.includes("stack")||S.includes("tech")?$="His core stack includes Laravel, Next.js, React, Tailwind CSS, Flutter, Firebase, Docker, Nginx, and Cybersecurity Incident Response.":S.includes("hire")||S.includes("contact")||S.includes("email")||S.includes("phone")?$="You can contact Reynald directly via email at reynald030685@gmail.com or hit the Contact cards to message him on LinkedIn/WhatsApp!":(S.includes("hello")||S.includes("hi ")||S.includes("hey"))&&($="Hello! Let me know what you'd like to discover about Reynald's engineering stack or custom software services."),xe(O=>[...O,{sender:"bot",text:$}])},750))},[ae,Q]=Ue.useState([]),[_e,Re]=Ue.useState("cart"),[ye,Ze]=Ue.useState(""),[De,$e]=Ue.useState(""),[ze,Ge]=Ue.useState("qris"),[at,ot]=Ue.useState(!1),[ft,ut]=Ue.useState(null),[st,ct]=Ue.useState(0),[I,bt]=Ue.useState(900),Ke=P=>{Q(S=>S.find(O=>O.id===P.id)?S.map(O=>O.id===P.id?{...O,quantity:O.quantity+1}:O):[...S,{id:P.id,name:P.name,price:P.price,image:P.image,quantity:1}]),ut(`Added ${P.name} to cart!`),setTimeout(()=>ut(null),2500)},E=(P,S)=>{Q($=>$.map(O=>{if(O.id===P){const re=O.quantity+S;return re>0?{...O,quantity:re}:null}return O}).filter(Boolean))},p=()=>ae.reduce((P,S)=>P+S.price*S.quantity,0),F=()=>{ae.length!==0&&Re("checkout")},V=P=>{P.preventDefault(),!(!ye||!De)&&(ct(Math.floor(Math.random()*9e4+1e4)),bt(900),ot(!0),setTimeout(()=>{ot(!1),Re("qris")},1200))},Y=()=>{ot(!0),setTimeout(()=>{ot(!1),Re("paid"),setTimeout(()=>{Re("notified")},2e3)},1200)},oe=()=>{Q([]),Re("cart"),Ze(""),$e(""),ct(0)},ce=()=>{let P=De.replace(/\D/g,"");P.startsWith("0")&&(P="62"+P.slice(1));const S=ae.map(ie=>`- ${ie.name} (x${ie.quantity})`).join(`
`),$=p().toLocaleString("id-ID"),O=`Halo ${ye}!

Terima kasih telah berbelanja di Don Neto Store.

Pembayaran sebesar *Rp ${$}* telah kami terima.

Rincian Pembelian:
${S}

ID Transaksi: #DN-${st}
Status: *LUNAS via QRIS (Midtrans)*

_Nota ini dikirim otomatis oleh simulator website Don Neto._`,re=`https://api.whatsapp.com/send?phone=${P}&text=${encodeURIComponent(O)}`;window.open(re,"_blank")};Ue.useEffect(()=>{let P;return _e==="qris"&&(P=setInterval(()=>{bt(S=>S<=1?(clearInterval(P),Re("cart"),0):S-1)},1e3)),()=>clearInterval(P)},[_e]);const K=P=>{const S=Math.floor(P/60),$=P%60;return`${S.toString().padStart(2,"0")}:${$.toString().padStart(2,"0")}`},[ee]=Ue.useState(null),de=Ue.useRef(null),Te=[{id:5,title:"E-Logbook Radiology UNHAS",category:"Academic & Medical Platform",description:"A web-based academic monitoring and digital logbook system developed for the Radiology Specialist Medical Education Program at Hasanuddin University.",longDescription:"A comprehensive web-based academic monitoring and digital logbook platform developed for the Radiology Specialist Medical Education Program at Hasanuddin University (UNHAS). The system enables residents to log clinical procedures, track curriculum milestones, manage academic portfolios, and receive supervisor approvals and feedback seamlessly.",technologies:["Laravel","PHP","MySQL","JavaScript","HTML","CSS","Bootstrap","REST API","PWA"],github:null,demo:"https://radiologiunhas.cloud/",image:"fa-solid fa-notes-medical",color:"from-cyan-600 via-blue-600 to-indigo-600",features:["Digital clinical activity and learning logbook","Resident academic progress monitoring & milestones","Supervisor approval and feedback system","Clinical case and supporting document management","Study plan and course management pipelines","Role-based access control for residents, supervisors, and admins","Integrated dashboard analytics and reporting system","Progressive Web App (PWA) installation support"],status:"Completed"},{id:4,title:"Topcell CRM",category:"Enterprise Web Application",description:"Comprehensive CRM system with Qontak WhatsApp API integration, custom follow-up pipelines (H1, H7, 1-Month), role privilege management, and advanced sales analytics.",longDescription:"An enterprise CRM platform built on Laravel, MySQL, and Tailwind CSS. The application automates customer follow-ups by integrating the Qontak WhatsApp Business API. It provides automatic checkpoint tracking engines, role privileges, transaction ledger filter reports, and marketing message templates.",technologies:["Laravel","PHP","Tailwind CSS","MySQL","Qontak API","Axios","Vite"],github:"https://github.com/reynaldabnerrr/CRM_TOPCELL.git",demo:null,image:"fa-solid fa-comments",color:"from-indigo-600 via-purple-600 to-cyan-500",features:["Dynamic follow-up checkpoints tracker (H+1, H+7, 1-Month)","Qontak WhatsApp Business API template syncing & broadcasting","Role privilege management toggles for Sales and Aftercare staff","Multi-column date range filters on massive transaction ledgers","Automatic token refresh cycles for uninterrupted API communications","Fully responsive modern admin dashboard layout"],status:"Completed"},{id:1,title:"ANTEKHUB (Mobile App)",category:"Mobile Application",description:"Flutter-based mobile application frontend for alumni, students, and professional networking. Supports job searches and mentorship.",longDescription:"Developed the frontend of ANTEKHUB, a Flutter app to facilitate networking among alumni, students, and professionals. Designed responsive UI for user comfort, directory features, mentorship portal, job listings, and RESTful API integration.",technologies:["Flutter","Dart","Firebase","RESTful API","Git"],github:"https://github.com/reynaldabnerrr/AntekHub.git",demo:null,image:"fa-solid fa-mobile-screen-button",color:"from-blue-600 to-purple-600",features:["Responsive and user-friendly UI for professional networking","Alumni and student directories integration","Mentorship portal and opportunity sharing features","Job listings and event management pipelines","Seamless integration with RESTful backend endpoints"],status:"Completed"},{id:2,title:"Jokka Web",category:"Web Application",description:"Tourism platform introducing Makassar's culture, tourist destinations, and local culinary experiences. Equipped with an interactive itinerary planner.",longDescription:"A Makassar culture and travel explorer application. Provides detailed destination data, local tourism event calendars, local culinary guides, interactive maps, and a database-driven user review system.",technologies:["Next.js","React","TypeScript","Tailwind CSS","Vercel","API Integration"],github:"https://github.com/reynaldabnerrr/Jokka.git",demo:"https://jokka-1d960.firebaseapp.com",image:"fa-solid fa-globe",color:"from-emerald-500 to-teal-600",features:["Interactive destination explorer","Event calendar and booking system","Cultural heritage showcase","Culinary guide and recommendations","Travel itinerary planner","User reviews and ratings"],status:"Completed"},{id:3,title:"Topcell Company Profile",category:"Corporate Website",description:"Modern corporate profile website for Topcell, presenting services, vision, and digital solutions interactively and elegantly.",longDescription:"Professional corporate profile website designed to display Topcell's services, vision, mission, and brand identity. Built using Next.js and Tailwind CSS with smooth animations and a modern layout on both desktop and mobile.",technologies:["Next.js","React","TypeScript","Tailwind CSS","Vercel"],github:"https://github.com/reynaldabnerrr",demo:"https://topcell.topgroup.asia/",image:"fa-solid fa-building",color:"from-orange-500 to-red-500",features:["Professional company profile presentation","Responsive and modern landing page","Service and portfolio showcase","Clear call-to-action sections","Optimized experience for desktop and mobile"],status:"Completed"}],he=[{title:"GEMASTIK XVIII",category:"Finalist — Cyber Security Division",date:"Oct 2025",icon:"fa-solid fa-trophy text-yellow-400",details:"National student technology competition organized by Balai Pengembangan Talenta Indonesia."},{title:"Pragyan CTF 2025",category:"1st Place (Student Category)",date:"Feb 2025",icon:"fa-solid fa-award text-yellow-500",details:"International Capture The Flag competition organized by NIT Trichy, India."},{title:"Interfest CTF",category:"Top 6 (Telkom University)",date:"Dec 2024",icon:"fa-solid fa-crosshairs text-red-500",details:"National cybersecurity competition with hands-on penetration testing scenarios."},{title:"Cyber Jawara International",category:"Top 11",date:"Oct 2024",icon:"fa-solid fa-globe text-blue-400",details:"Prestigious national/regional CTF competition for professional and student teams."},{title:"HOLOGY 7.0 CTF",category:"Top 20 (Brawijaya University)",date:"Oct 2024",icon:"fa-solid fa-shield-halved text-cyan-400",details:"Cyber incident analysis and national CTF challenge-solving competition."},{title:"COMPFEST 16 CTF",category:"Finalist (Universitas Indonesia)",date:"Sep 2024",icon:"fa-solid fa-lightbulb text-amber-400",details:"One of the most rigorous and challenging student CTF competitions in Indonesia."},{title:"GEMASTIK XVII",category:"Finalist — Cyber Security Division",date:"Sep 2024",icon:"fa-solid fa-lock text-purple-400",details:"Finalist in the Cyber Security division at the XVII National GEMASTIK competition."}],ue=[{role:"Software Engineer (Intern)",org:"RS UNHAS",period:"May 2025 – September 2025",points:["Developed and maintained backend systems for a web-based E-Logbook Information System.","Built RESTful APIs using Laravel and managed MySQL databases with high performance.","Implemented authentication and role-based access control for system security.","Collaborated with frontend developers for seamless interface integration.","Conducted API testing, debugging, and prepared technical documentation."]},{role:"Teaching Assistant – Mobile App Programming",org:"Universitas Hasanuddin (UNHAS)",period:"August 2025 – December 2025",points:["Assisted lecturing professors in delivering mobile application programming courses for undergraduate classes.","Guided students through Flutter laboratory sessions, from basic OOP concepts to deployment.","Provided technical support in debugging, UI/UX design concepts, and state management optimization.","Transferred understanding of clean code, folder structures, and error-solving best practices.","Evaluated weekly assignments and assisted in standardizing undergraduate laboratory grading."]},{role:"Freelance Frontend Developer",org:"ANTEKHUB (Mobile App)",period:"July 2024 – September 2024",points:["Developed the frontend of the ANTEKHUB application using Flutter for alumni and students.","Built responsive and fluid UI for comfortable networking navigation.","Integrated directory features, job listings, mentorship programs, and event schedulers.","Collaborated closely with the backend team for optimal consumption of RESTful API data."]}],Ce=[{role:"Head of Digital Forensics",org:"ICC UH (IT Computer Club Universitas Hasanuddin)",period:"January 2025 – June 2025",points:["Led regular training sessions on Digital Forensics, OSINT, and digital investigation techniques.","Transferred skills in disk forensics, memory analysis, and cyber CTF challenge solving.","Participated in external CTF competitions representing the university IT computer club.","Developed the club's cybersecurity curriculum to be relevant with current industry trends."]},{role:"Coordinator – Mobile App Development",org:"Coder Institute",period:"March 2024 – February 2025",points:["Designed curriculum and compiled structured learning modules for mobile application development.","Delivered training materials and facilitated hands-on mentoring in Flutter & Android frameworks.","Guided members in creating real-world mobile application projects from ideation to presentation.","Evaluated members' learning progress periodically for curriculum effectiveness."]},{role:"Core Team – Technical",org:"Google Developer Student Clubs (GDSC)",period:"September 2023 – October 2024",points:["Delivered periodic technical sessions and compiled technology introduction module assets.","Mentored members in basic Flutter implementation and API connectivity.","Supported the growth ecosystem of the developer community at the university level."]}];Ue.useEffect(()=>{const P=setInterval(()=>{o(S=>{if(S>=100)return clearInterval(P),100;const $=Math.floor(Math.random()*8)+4,O=Math.min(S+$,100);return O<25?c("> BOOT: INITIATING SECURE ARCHITECTURE PROTOCOLS..."):O<50?c("> NET: ESTABLISHING INTEGRATED CRM ENDPOINTS..."):O<75?c("> RENDER: SHADING DYNAMIC CYBER GRAPHICS GRID..."):O<95?c("> CORE: SPINNING DECORATIVE BACKGROUND PARTICLES..."):c("> SYSTEM: COGNITIVE WORKSPACE ONLINE."),O})},45);return()=>clearInterval(P)},[]),Ue.useEffect(()=>{if(a===100){const P=setTimeout(()=>{m(!0);const S=setTimeout(()=>{r(!1)},500);return()=>clearTimeout(S)},500);return()=>clearTimeout(P)}},[a]),Ue.useEffect(()=>{const P=()=>{const O=[],re=typeof window<"u"&&window.innerWidth<768?25:55;for(let ie=0;ie<re;ie++)O.push({id:ie,x:Math.random()*(typeof window<"u"?window.innerWidth:1200),y:Math.random()*(typeof window<"u"?window.innerHeight:800),vx:(Math.random()-.5)*1.2,vy:(Math.random()-.5)*1.2,size:Math.random()*2+1.2});y(O)},S=O=>{x({x:O.clientX,y:O.clientY})},$=()=>{if(n(window.scrollY>40),M.current)return;const O=["home","about","services","simulator","skills","projects","achievements","github","contact"],re=window.scrollY+160;O.forEach(ie=>{const ne=document.getElementById(ie);if(ne){const be=ne.getBoundingClientRect(),ve=be.top+window.scrollY,He=be.height;re>=ve&&re<ve+He&&e(ie)}})};return P(),window.addEventListener("scroll",$),window.addEventListener("mousemove",S),()=>{window.removeEventListener("scroll",$),window.removeEventListener("mousemove",S)}},[]),Ue.useEffect(()=>{const P=de.current;if(!P)return;const S=P.getContext("2d");if(!S)return;let $;const O=()=>{P.width=window.innerWidth,P.height=window.innerHeight},re=()=>{S.clearRect(0,0,P.width,P.height),v.forEach(ie=>{const ne=u.x-ie.x,be=u.y-ie.y,ve=Math.sqrt(ne*ne+be*be);if(ve<160){const He=(160-ve)/160;ie.x-=ne*He*.025,ie.y-=be*He*.025}ie.x+=ie.vx,ie.y+=ie.vy,ie.x<0?(ie.x=0,ie.vx*=-1):ie.x>P.width&&(ie.x=P.width,ie.vx*=-1),ie.y<0?(ie.y=0,ie.vy*=-1):ie.y>P.height&&(ie.y=P.height,ie.vy*=-1),S.beginPath(),S.arc(ie.x,ie.y,ie.size,0,Math.PI*2),S.fillStyle="rgba(99, 102, 241, 0.35)",S.fill(),v.forEach(He=>{if(ie.id!==He.id){const Je=ie.x-He.x,Lt=ie.y-He.y,It=Math.sqrt(Je*Je+Lt*Lt);It<95&&(S.beginPath(),S.strokeStyle=`rgba(6, 182, 212, ${.12*(1-It/95)})`,S.lineWidth=.5,S.moveTo(ie.x,ie.y),S.lineTo(He.x,He.y),S.stroke())}})}),$=requestAnimationFrame(re)};return O(),re(),window.addEventListener("resize",O),()=>{window.removeEventListener("resize",O),cancelAnimationFrame($)}},[v,u]);const we=P=>{const S=document.getElementById(P);if(S){const O=document.body.getBoundingClientRect().top,ne=S.getBoundingClientRect().top-O-80;M.current=!0,e(P),window.scrollTo({top:ne,behavior:"smooth"}),setTimeout(()=>{M.current=!1},800)}};return l.jsxs("div",{className:"min-h-screen w-full bg-[var(--background)] text-[var(--foreground)] selection:bg-indigo-500/30 selection:text-indigo-200 relative overflow-hidden",children:[s&&l.jsxs("div",{className:`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] overflow-hidden transition-all duration-500 ${f?"opacity-0 scale-95 pointer-events-none":"opacity-100 scale-100"}`,children:[l.jsx("div",{className:"cyber-grid absolute inset-0 opacity-40"}),l.jsx("div",{className:"absolute w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px] -top-10 -left-10 pointer-events-none"}),l.jsx("div",{className:"absolute w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[80px] -bottom-10 -right-10 pointer-events-none"}),l.jsxs("div",{className:"relative flex flex-col items-center justify-center p-8 max-w-sm w-full z-10 text-center",children:[l.jsxs("div",{className:"relative flex items-center justify-center w-40 h-40 mb-10 select-none scale-110",children:[l.jsx("div",{className:"absolute w-36 h-36 border-2 border-dashed border-indigo-500/30 rounded-full animate-spin",style:{animationDuration:"12s"}}),l.jsx("div",{className:"absolute w-40 h-40 border-2 border-t-indigo-500 border-b-indigo-500 border-r-transparent border-l-transparent rounded-full animate-spin",style:{animationDuration:"6s"}}),l.jsx("div",{className:"absolute w-32 h-32 border-2 border-r-cyan-400 border-l-cyan-400 border-t-transparent border-b-transparent rounded-full animate-spin",style:{animationDuration:"3s",animationDirection:"reverse"}}),l.jsx("div",{className:"absolute w-24 h-24 bg-gradient-to-tr from-indigo-500/10 to-cyan-500/10 rounded-full blur-md animate-pulse"}),l.jsxs("div",{className:"flex flex-col items-center justify-center z-10",children:[l.jsxs("span",{className:"text-3xl font-black text-white tracking-tighter font-outfit text-glow",children:[a,"%"]}),l.jsx("span",{className:"text-[9px] uppercase tracking-widest text-indigo-400 font-bold mt-1",children:"LOADING"})]})]}),l.jsxs("div",{className:"cyber-card p-5 w-full rounded-2xl border border-white/[0.06] bg-[#070b13]/60 backdrop-blur-xl space-y-3.5 shadow-2xl relative",children:[l.jsxs("div",{className:"flex items-center gap-1.5 border-b border-white/[0.06] pb-2",children:[l.jsx("div",{className:"w-2 h-2 rounded-full bg-red-500/80"}),l.jsx("div",{className:"w-2 h-2 rounded-full bg-yellow-500/80"}),l.jsx("div",{className:"w-2 h-2 rounded-full bg-green-500/80"}),l.jsx("span",{className:"text-[9px] text-gray-400 font-mono ml-1.5 uppercase font-bold tracking-wider",children:"Workspace Loader"})]}),l.jsx("div",{className:"w-full bg-white/[0.04] border border-white/[0.08] rounded-full h-1.5 overflow-hidden p-[1px]",children:l.jsx("div",{className:"bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 h-full rounded-full transition-all duration-300 ease-out shadow-[0_0_10px_rgba(99,102,241,0.5)]",style:{width:`${a}%`}})}),l.jsx("div",{className:"h-6 flex items-center justify-center",children:l.jsx("p",{className:"text-[10px] font-mono text-gray-400 tracking-tight text-center font-semibold text-indigo-300/90 truncate w-full",children:d})})]})]})]}),l.jsx("div",{className:"cyber-grid"}),l.jsx("div",{className:"hero-orb top-[-15%] left-[-10%]"}),l.jsx("div",{className:"hero-orb bottom-[15%] right-[-10%] bg-radial-gradient(circle,rgba(6,182,212,0.12)_0%,transparent_65%)"}),l.jsx("div",{className:"hero-orb top-[40%] left-[35%] w-[550px] h-[550px] bg-radial-gradient(circle,rgba(236,72,153,0.04)_0%,transparent_65%)"}),l.jsx("canvas",{ref:de,className:"fixed inset-0 pointer-events-none z-[2]",style:{opacity:.85}}),l.jsxs("div",{className:"fixed top-0 left-0 right-0 z-50 bg-[#030712]/90 backdrop-blur-md border-b border-white/[0.06] text-[10px] font-mono py-1.5 px-4 hidden md:flex items-center justify-between text-gray-400 select-none",children:[l.jsxs("div",{className:"flex items-center space-x-4",children:[l.jsxs("div",{className:"flex items-center gap-1.5 text-emerald-400 font-bold",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),l.jsx("span",{children:"DEV_ENV: ONLINE"})]}),l.jsx("span",{className:"text-white/20",children:"|"}),l.jsxs("span",{children:["LATENCY: ",l.jsx("span",{className:"text-cyan-400",children:"12ms"})]}),l.jsx("span",{className:"text-white/20",children:"|"}),l.jsxs("span",{children:["STACK: ",l.jsx("span",{className:"text-indigo-400",children:"LARAVEL / REACT / FLUTTER"})]}),l.jsx("span",{className:"text-white/20",children:"|"}),l.jsxs("span",{className:"hidden lg:inline",children:["NODE: ",l.jsx("span",{className:"text-purple-400",children:"IDN-JKT-01"})]})]}),l.jsxs("div",{className:"flex items-center space-x-3",children:[l.jsxs("button",{onClick:()=>X(!k),className:`px-2 py-0.5 rounded border transition-all ${k?"bg-emerald-500/20 border-emerald-500/50 text-emerald-300":"border-white/10 hover:border-white/20 text-gray-400"}`,children:[l.jsx("i",{className:"fa-solid fa-code text-[9px] mr-1"}),k?"MATRIX: ON":"MATRIX: OFF"]}),l.jsxs("button",{onClick:()=>L(!0),className:"px-2 py-0.5 rounded border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 transition-all",children:[l.jsx("i",{className:"fa-solid fa-terminal text-[9px] mr-1"}),"TERMINAL [CTRL+K]"]}),ae.length>0&&l.jsxs("button",{onClick:()=>we("simulator"),className:"px-2 py-0.5 rounded border border-pink-500/40 bg-pink-500/15 text-pink-300 animate-pulse font-bold",children:[l.jsx("i",{className:"fa-solid fa-cart-shopping text-[9px] mr-1"}),"CART (",ae.reduce((P,S)=>P+S.quantity,0),")"]})]})]}),l.jsx("nav",{className:`fixed top-0 md:top-7 left-0 right-0 z-40 transition-all duration-500 ${t?"bg-[var(--background)]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3":"bg-transparent py-4"}`,children:l.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-3",children:[l.jsx("button",{onClick:()=>we("home"),className:"text-white font-extrabold text-xl tracking-widest hover:opacity-85 transition-opacity flex items-center gap-2 group",children:l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 font-outfit font-extrabold text-xl tracking-widest text-glow",children:"DON NETO"})}),l.jsxs("div",{className:"hidden lg:flex items-center space-x-1.5",children:[[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"services",label:"Services"},{id:"simulator",label:"Live Demo"},{id:"skills",label:"Skills"},{id:"projects",label:"Projects"},{id:"achievements",label:"Achievements"},{id:"github",label:"Activity"},{id:"contact",label:"Contact"}].map(P=>l.jsx("button",{onClick:()=>we(P.id),className:`text-xs px-3.5 py-2 rounded-full font-semibold transition-all duration-300 relative ${i===P.id?"text-white bg-indigo-500/20 border border-indigo-500/40 shadow-[0_0_12px_rgba(99,102,241,0.25)]":"text-gray-400 hover:text-white hover:bg-white/[0.04]"}`,children:P.label},P.id)),l.jsx("button",{onClick:()=>T(!R),className:"text-indigo-400 hover:text-white p-2 rounded-full hover:bg-white/[0.04] border border-transparent hover:border-white/[0.08] transition-all ml-2","aria-label":"Toggle Theme",title:"Toggle Light/Dark Theme",children:l.jsx("i",{className:`fa-solid ${R?"fa-moon":"fa-sun"} text-xs`})}),l.jsx("button",{onClick:()=>L(!0),className:"text-indigo-400 hover:text-white p-2 rounded-full hover:bg-white/[0.04] border border-transparent hover:border-white/[0.08] transition-all ml-1","aria-label":"Developer Console",title:"Open Terminal Console",children:l.jsx("i",{className:"fa-solid fa-terminal text-xs"})})]}),l.jsxs("div",{className:"lg:hidden flex items-center gap-1.5 shrink-0",children:[l.jsx("button",{onClick:()=>T(!R),className:"text-indigo-400 w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] transition-colors","aria-label":"Toggle Theme",children:l.jsx("i",{className:`fa-solid ${R?"fa-moon":"fa-sun"} text-xs`})}),l.jsx("button",{onClick:()=>L(!0),className:"text-indigo-400 w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] transition-colors","aria-label":"Developer Console",children:l.jsx("i",{className:"fa-solid fa-terminal text-xs"})}),l.jsx("button",{onClick:()=>C(!A),className:"text-white w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] transition-colors","aria-label":"Toggle menu",children:l.jsx("svg",{className:`w-4.5 h-4.5 transition-transform duration-300 ${A?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:A?l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]})]})}),A&&l.jsx("div",{className:"lg:hidden fixed inset-0 z-[60]","aria-modal":"true",onClick:()=>C(!1),children:l.jsxs("div",{className:"mobile-drawer-panel absolute top-0 left-0 right-0 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl animate-slide-down",onClick:P=>P.stopPropagation(),children:[l.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b border-white/[0.06]",children:[l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 font-outfit font-extrabold text-xl tracking-widest",children:"DON NETO"}),l.jsx("button",{onClick:()=>C(!1),className:"text-gray-400 hover:text-white p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] transition-colors","aria-label":"Close menu",children:l.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),l.jsx("div",{className:"px-5 py-4 space-y-1",children:[{id:"home",label:"Home",icon:"fa-house"},{id:"about",label:"About",icon:"fa-user"},{id:"services",label:"Services",icon:"fa-briefcase"},{id:"simulator",label:"Live Demo",icon:"fa-play"},{id:"skills",label:"Skills",icon:"fa-code"},{id:"projects",label:"Projects",icon:"fa-folder-open"},{id:"achievements",label:"Achievements",icon:"fa-trophy"},{id:"github",label:"GitHub Activity",icon:"fa-chart-bar"},{id:"contact",label:"Contact",icon:"fa-envelope"}].map(P=>l.jsxs("button",{onClick:()=>{we(P.id),C(!1)},className:`flex items-center gap-3 w-full text-left px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${i===P.id?"bg-indigo-600/15 border border-indigo-500/30 text-indigo-400":"text-gray-300 hover:text-white hover:bg-white/[0.05]"}`,children:[l.jsx("i",{className:`fa-solid ${P.icon} w-4 text-center text-xs ${i===P.id?"text-indigo-400":"text-gray-500"}`}),P.label,i===P.id&&l.jsx("span",{className:"ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400"})]},P.id))})]})}),l.jsxs("header",{id:"home",className:"relative min-h-screen flex flex-col items-center justify-between text-center px-6 pt-24 pb-12 sm:pt-32 sm:pb-24 z-10 overflow-hidden",children:[l.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.1),transparent_65%)] pointer-events-none"}),l.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mx-auto my-auto gap-8 text-left z-10",children:[l.jsxs("div",{className:"flex flex-col items-start w-full lg:w-7/12 space-y-6",children:[l.jsxs("div",{className:"inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono font-semibold tracking-wide uppercase shadow-[0_0_20px_rgba(0,240,255,0.15)]",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-ping"}),l.jsx("span",{children:"FULL-STACK SOFTWARE ENGINEER & MOBILE DEVELOPER"})]}),l.jsxs("h1",{className:"text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-syne leading-none",children:[l.jsx("span",{className:"block text-gray-400 text-base sm:text-lg font-mono mb-2 tracking-widest uppercase",children:"Reynald Abner Tananda, S.T."}),l.jsx("span",{className:"text-gradient-cyber block font-outfit",children:"Engineering Web Apps, Mobile & Modern Systems"})]}),l.jsx("h2",{className:"text-lg sm:text-2xl font-bold text-gray-300 min-h-[45px] font-outfit",children:l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-pink-400",children:l.jsx(Rl.Typewriter,{words:["Full-Stack Software Engineer 💻","Web & Mobile Application Developer 📱","Laravel, React & Flutter Specialist ⚙️","Competitive CTF Player (Hobby & Enthusiast) 🛡️"],loop:0,cursor:!0,cursorStyle:"|",typeSpeed:60,deleteSpeed:45,delaySpeed:1800})})}),l.jsx("p",{className:"text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed font-medium",children:"Building high-performance web applications, mobile apps in Flutter, automated CRM systems, and RESTful API backends with clean code and robust software architecture."}),l.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 w-full my-2",children:[l.jsxs("div",{className:"p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-center",children:[l.jsx("div",{className:"text-2xl font-black text-indigo-400 font-mono tracking-tight",children:"3.80"}),l.jsx("div",{className:"text-[10px] text-gray-400 uppercase font-bold tracking-wider mt-0.5",children:"GPA CS UNHAS"})]}),l.jsxs("div",{className:"p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-center",children:[l.jsx("div",{className:"text-2xl font-black text-cyan-400 font-mono tracking-tight",children:"15+ Apps"}),l.jsx("div",{className:"text-[10px] text-gray-400 uppercase font-bold tracking-wider mt-0.5",children:"Built & Deployed"})]}),l.jsxs("div",{className:"p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-center",children:[l.jsx("div",{className:"text-2xl font-black text-emerald-400 font-mono tracking-tight",children:"1st Place"}),l.jsx("div",{className:"text-[10px] text-gray-400 uppercase font-bold tracking-wider mt-0.5",children:"Pragyan CTF '25"})]}),l.jsxs("div",{className:"p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-center",children:[l.jsx("div",{className:"text-2xl font-black text-pink-400 font-mono tracking-tight",children:"Finalist"}),l.jsx("div",{className:"text-[10px] text-gray-400 uppercase font-bold tracking-wider mt-0.5",children:"GEMASTIK XVIII"})]})]}),l.jsxs("div",{className:"flex flex-wrap items-center gap-3 pt-2 w-full",children:[l.jsxs("button",{onClick:()=>we("projects"),className:"px-7 py-3.5 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 rounded-full text-white font-bold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] flex items-center gap-2 cyber-button",children:["Explore Projects",l.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]}),l.jsxs("button",{onClick:()=>L(!0),className:"px-6 py-3.5 bg-white/[0.04] border border-indigo-500/30 hover:bg-indigo-500/10 rounded-full text-indigo-300 font-bold tracking-wide transition-all duration-300 hover:scale-105 flex items-center gap-2 font-mono text-sm",children:[l.jsx("i",{className:"fa-solid fa-terminal text-xs"})," Launch Terminal"]}),l.jsxs("button",{onClick:()=>we("simulator"),className:"px-6 py-3.5 bg-white/[0.04] border border-pink-500/30 hover:bg-pink-500/10 rounded-full text-pink-300 font-bold tracking-wide transition-all duration-300 hover:scale-105 flex items-center gap-2 text-sm",children:[l.jsx("i",{className:"fa-solid fa-play text-xs"})," Live Demo"]})]})]}),l.jsxs("div",{className:"w-full lg:w-5/12 relative flex flex-col items-center justify-center",children:[l.jsxs("div",{className:"relative w-full max-w-[310px] sm:max-w-md aspect-square rounded-3xl border border-cyan-500/30 bg-[#070c18]/80 backdrop-blur-2xl p-6 shadow-[0_0_50px_rgba(0,240,255,0.15)] flex flex-col items-center justify-center overflow-hidden group",children:[l.jsx("div",{className:"absolute inset-0 z-0 opacity-80 group-hover:opacity-100 transition-opacity",children:l.jsx(Yp,{isLightMode:R})}),l.jsxs("div",{className:"relative z-10 flex flex-col items-center space-y-3 pointer-events-none",children:[l.jsxs("div",{className:"relative",children:[l.jsx("div",{className:"absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 opacity-60 blur-md animate-pulse"}),l.jsx("img",{src:"/assets/profile.jpg",alt:"Reynald Abner Tananda",width:130,height:130,className:"rounded-full relative z-10 border-2 border-white/30 shadow-2xl object-cover"})]}),l.jsxs("div",{className:"bg-[#030712]/90 border border-cyan-500/40 rounded-full px-4 py-1.5 backdrop-blur-md flex items-center gap-2",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-ping"}),l.jsx("span",{className:"text-[11px] font-mono font-bold text-white tracking-wider",children:"AVAILABLE FOR DEV PROJECTS"})]})]})]}),l.jsxs("p",{className:"text-[10px] font-mono text-gray-400 mt-3 text-center tracking-widest uppercase",children:[l.jsx("i",{className:"fa-solid fa-hand-pointer text-cyan-400 mr-1.5 animate-bounce"})," Interactive 3D Matrix — Move Cursor to Rotate"]})]})]}),l.jsxs("div",{className:"flex flex-col items-center opacity-65 mt-8",children:[l.jsx("span",{className:"text-[10px] uppercase tracking-widest text-indigo-400/90 mb-2 font-bold font-outfit",children:"Scroll"}),l.jsx("div",{className:"w-5.5 h-9 border-2 border-white/20 rounded-full flex justify-center p-1",children:l.jsx("div",{className:"w-1.5 h-2 bg-indigo-400 rounded-full animate-bounce"})})]})]}),l.jsxs("main",{className:"relative z-10 max-w-6xl mx-auto px-6 sm:px-8 py-16 space-y-36",children:[l.jsx("section",{id:"about",className:"scroll-mt-24",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[l.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[l.jsxs("div",{className:"space-y-2",children:[l.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-widest text-indigo-400",children:"[PROFILE_SUMMARY]"}),l.jsx("h2",{className:"text-4xl sm:text-5xl font-black tracking-tight font-outfit text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400",children:"About Me"}),l.jsx("div",{className:"w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"})]}),l.jsxs("div",{className:"space-y-4.5 text-gray-400 text-base leading-relaxed font-medium",children:[l.jsxs("p",{children:["Hi! I'm ",l.jsx("span",{className:"text-indigo-400 font-bold",children:"Reynald Abner Tananda, S.T."}),", a ",l.jsx("span",{className:"text-emerald-400 font-bold",children:"Fresh Graduate in Computer Science"})," from ",l.jsx("span",{className:"text-white font-bold",children:"Universitas Hasanuddin"})," specializing in Software Engineering and Mobile Development with a ",l.jsx("span",{className:"text-cyan-400 font-black",children:"GPA of 3.80/4.00"}),"."]}),l.jsx("p",{children:"I have hands-on experience developing full-stack web platforms and mobile applications, including backend engineering for hospital logbook systems (RS UNHAS) and serving as a Teaching Assistant for Mobile Programming (Flutter)."}),l.jsxs("p",{children:["As an active hobby, I enjoy participating in competitive CTF (Capture The Flag) challenges, leading the Digital Forensics division at ",l.jsx("span",{className:"text-pink-400 font-bold",children:"ICC UNHAS"}),", and sharing cybersecurity learning modules with peers."]})]}),l.jsxs("div",{className:"grid grid-cols-3 gap-4 pt-4",children:[l.jsxs("div",{className:"p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-center shadow-md shadow-black/25",children:[l.jsx("span",{className:"block text-3xl font-black text-indigo-400 tracking-tight font-outfit",children:"3.80"}),l.jsx("span",{className:"text-[10px] uppercase text-gray-400 tracking-wider font-bold block mt-1",children:"GPA Score"})]}),l.jsxs("div",{className:"p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-center shadow-md shadow-black/25",children:[l.jsx("span",{className:"block text-3xl font-black text-cyan-400 tracking-tight font-outfit",children:"15+"}),l.jsx("span",{className:"text-[10px] uppercase text-gray-400 tracking-wider font-bold block mt-1",children:"Apps & Projects"})]}),l.jsxs("div",{className:"p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-center shadow-md shadow-black/25",children:[l.jsx("span",{className:"block text-3xl font-black text-pink-400 tracking-tight font-outfit",children:"3+"}),l.jsx("span",{className:"text-[10px] uppercase text-gray-400 tracking-wider font-bold block mt-1",children:"TA & Interns"})]})]})]}),l.jsx("div",{className:"lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4",children:[{title:"Software Engineer",desc:"Laravel Backend, REST APIs, MySQL databases",icon:"fa-solid fa-laptop-code text-indigo-400",color:"cyber-card-glow-indigo"},{title:"Mobile Specialist",desc:"Flutter UI, Android concepts, TA tutoring",icon:"fa-solid fa-mobile-screen-button text-cyan-400",color:"cyber-card-glow-cyan"},{title:"Web Architecture",desc:"React, Next.js, Astro & PWA solutions",icon:"fa-solid fa-layer-group text-pink-400",color:"cyber-card-glow-pink"},{title:"CTF Enthusiast",desc:"Pragyan CTF winner, Gemastik national finalist",icon:"fa-solid fa-trophy text-emerald-400",color:"cyber-card-glow-green"}].map((P,S)=>l.jsxs("div",{className:`cyber-card p-5 rounded-3xl flex flex-col justify-between h-44 shadow-lg shadow-black/10 ${P.color}`,children:[l.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl",children:l.jsx("i",{className:P.icon})}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-bold text-white text-sm font-outfit mb-1 leading-tight",children:P.title}),l.jsx("p",{className:"text-[10px] text-gray-400 leading-normal",children:P.desc})]})]},S))})]})}),l.jsx("section",{id:"services",className:"scroll-mt-24",children:l.jsxs("div",{className:"space-y-12",children:[l.jsxs("div",{className:"text-center space-y-3",children:[l.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 text-glow",children:"[CAPABILITIES]"}),l.jsx("h2",{className:"text-4xl sm:text-5xl font-black tracking-tight font-outfit text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400",children:"Services & Custom Solutions"}),l.jsx("div",{className:"w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto"}),l.jsx("p",{className:"text-gray-400 text-sm sm:text-base max-w-xl mx-auto pt-2 leading-relaxed",children:"Custom software engineering and business digitization solutions to optimize your workflows."})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[{title:"Web & App Development",desc:"Custom website creation, landing pages, and responsive e-commerce systems using Next.js / Laravel with modern SEO optimization.",icon:"fa-solid fa-laptop-code",glow:"cyber-card-glow-indigo"},{title:"API & Payment Integration",desc:"Connecting systems with payment gateways (Midtrans/Xendit) for automated QRIS/VA payments, as well as external RESTful API integration.",icon:"fa-solid fa-credit-card",glow:"cyber-card-glow-cyan"},{title:"Custom Dashboards & POS",desc:"Custom back-office systems for inventory management, analytical dashboards, daily/monthly transaction reports, and admin access control.",icon:"fa-solid fa-chart-line",glow:"cyber-card-glow-pink"},{title:"Automation & Integration",desc:"Automated real-time notifications, OTP delivery, broadcasts, and automated invoices connected directly to the WhatsApp API.",icon:"fa-solid fa-message",glow:"cyber-card-glow-green"}].map((P,S)=>l.jsxs("div",{className:`cyber-card p-6 sm:p-8 rounded-3xl border border-white/[0.05] hover:border-white/10 shadow-lg shadow-black/20 ${P.glow}`,children:[l.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-white mb-6",children:l.jsx("i",{className:P.icon})}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-extrabold text-white text-base font-outfit mb-3",children:P.title}),l.jsx("p",{className:"text-xs text-gray-400 leading-relaxed font-medium",children:P.desc})]})]},S))})]})}),l.jsx("section",{id:"simulator",className:"scroll-mt-24",children:l.jsxs("div",{className:"space-y-12",children:[l.jsxs("div",{className:"text-center space-y-3",children:[l.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 text-glow",children:"[INTERACTIVE_DEMO]"}),l.jsx("h2",{className:"text-4xl sm:text-5xl font-black tracking-tight font-outfit text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400",children:"Interactive System Simulator"}),l.jsx("div",{className:"w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto"}),l.jsx("p",{className:"text-gray-400 text-sm sm:text-base max-w-xl mx-auto pt-2 leading-relaxed",children:"Test system integration live. Add products, complete checkout, simulate a webhook callback from the payment gateway (Midtrans), and receive an automated WhatsApp invoice."})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[l.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[l.jsxs("h3",{className:"text-base font-bold text-white font-outfit pb-2 border-b border-white/[0.05] flex items-center gap-2",children:[l.jsx("span",{className:"w-2.5 h-2.5 bg-indigo-500 rounded-full animate-pulse"})," 1. Select Simulation Product"]}),l.jsx("div",{className:"space-y-3",children:[{id:1,name:"Mechanical Keyboard RGB",price:65e4,image:"⌨️",desc:"Premium blue switches & double-shot keycaps."},{id:2,name:"Wireless Ergonomic Mouse",price:38e4,image:"🖱️",desc:"Dual-mode Bluetooth with silent clicks."},{id:3,name:"Minimalist Desk Mat (90x40)",price:15e4,image:"🌌",desc:"Smooth microfiber surface with stitched borders."}].map(P=>l.jsxs("div",{className:"cyber-card p-4 rounded-2xl flex items-center justify-between border border-white/[0.04] gap-3",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("span",{className:"text-3xl bg-white/5 border border-white/10 w-12 h-12 rounded-xl flex items-center justify-center",children:P.image}),l.jsxs("div",{children:[l.jsx("h4",{className:"font-bold text-white text-sm font-outfit",children:P.name}),l.jsx("p",{className:"text-[10px] text-gray-400 leading-tight mb-1",children:P.desc}),l.jsxs("span",{className:"text-xs font-semibold text-indigo-400",children:["Rp ",P.price.toLocaleString("id-ID")]})]})]}),l.jsx("button",{type:"button",onClick:()=>Ke(P),className:"px-3.5 py-2 bg-indigo-600/20 border border-indigo-500/30 hover:bg-indigo-600 rounded-xl text-xs font-bold text-indigo-300 hover:text-white transition-all duration-300",children:"+ Cart"})]},P.id))}),ft&&l.jsxs("div",{className:"p-3 bg-indigo-600/10 border border-indigo-500/25 text-indigo-300 rounded-xl text-xs font-semibold flex items-center gap-2 animate-pulse",children:[l.jsx("i",{className:"fa-solid fa-circle-check"}),l.jsx("span",{children:ft})]})]}),l.jsx("div",{className:"lg:col-span-7",children:l.jsxs("div",{className:"mock-window p-6 relative min-h-[400px] border border-white/[0.08] shadow-[0_0_50px_rgba(99,102,241,0.12)] flex flex-col justify-between",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.06] pb-4 mb-4",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500"}),l.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-yellow-500"}),l.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-green-500"}),l.jsx("span",{className:"text-gray-400 text-[10px] ml-2 font-mono",children:"checkout-gateway.test"})]}),l.jsxs("span",{className:"text-[9px] text-gray-400 bg-white/[0.04] border border-white/[0.08] px-2.5 py-0.5 rounded uppercase font-semibold font-mono",children:["Step: ",_e.toUpperCase()]})]}),_e==="cart"&&l.jsxs("div",{className:"flex-1 flex flex-col justify-between animate-slide-up",children:[l.jsxs("div",{className:"space-y-4",children:[l.jsxs("h4",{className:"font-bold text-white text-sm font-outfit flex items-center gap-2",children:[l.jsx("i",{className:"fa-solid fa-cart-shopping text-indigo-400"})," Your Shopping Cart"]}),ae.length===0?l.jsxs("div",{className:"text-center py-12 text-gray-400",children:[l.jsx("i",{className:"fa-solid fa-basket-shopping text-3xl mb-3 block text-gray-400"}),l.jsx("p",{className:"text-xs font-medium",children:"Your cart is empty. Please add products from the left column."})]}):l.jsx("div",{className:"space-y-2.5 max-h-[220px] overflow-y-auto pr-1",children:ae.map(P=>l.jsxs("div",{className:"flex items-center justify-between p-2.5 bg-white/[0.02] border border-white/[0.05] rounded-xl text-xs",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("span",{className:"text-xl",children:P.image}),l.jsxs("div",{children:[l.jsx("span",{className:"font-bold text-white block text-xs",children:P.name}),l.jsxs("span",{className:"text-[10px] text-gray-400",children:["Rp ",P.price.toLocaleString("id-ID")]})]})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("button",{type:"button",onClick:()=>E(P.id,-1),className:"w-5 h-5 bg-white/5 border border-white/10 rounded flex items-center justify-center font-bold text-gray-300 hover:bg-white/10",children:"-"}),l.jsx("span",{className:"font-bold text-white w-4 text-center",children:P.quantity}),l.jsx("button",{type:"button",onClick:()=>E(P.id,1),className:"w-5 h-5 bg-white/5 border border-white/10 rounded flex items-center justify-center font-bold text-gray-300 hover:bg-white/10",children:"+"})]})]},P.id))})]}),ae.length>0&&l.jsxs("div",{className:"border-t border-white/[0.06] pt-4 mt-4 space-y-4",children:[l.jsxs("div",{className:"flex justify-between items-center text-xs font-bold text-white",children:[l.jsx("span",{children:"Total Tagihan:"}),l.jsxs("span",{className:"text-indigo-400 text-sm",children:["Rp ",p().toLocaleString("id-ID")]})]}),l.jsxs("button",{type:"button",onClick:F,className:"w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20",children:["Isi Data Pengiriman ",l.jsx("i",{className:"fa-solid fa-arrow-right text-[10px]"})]})]})]}),_e==="checkout"&&l.jsxs("form",{onSubmit:V,className:"flex-1 flex flex-col justify-between animate-slide-up",children:[l.jsxs("div",{className:"space-y-4",children:[l.jsxs("h4",{className:"font-bold text-white text-sm font-outfit flex items-center gap-2",children:[l.jsx("i",{className:"fa-solid fa-address-card text-cyan-400"})," Formulir Pengiriman & Pembayaran"]}),l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{children:[l.jsx("label",{className:"text-[10px] text-gray-400 block mb-1 font-bold",children:"NAMA PELANGGAN"}),l.jsx("input",{type:"text",required:!0,placeholder:"Masukkan nama Anda (e.g. Budi)",value:ye,onChange:P=>Ze(P.target.value),className:"w-full bg-white/[0.03] border border-white/[0.08] text-white rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-400"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"text-[10px] text-gray-400 block mb-1 font-bold",children:"WHATSAPP NUMBER (Simulation Invoice)"}),l.jsx("input",{type:"tel",required:!0,placeholder:"e.g. 08123456789",value:De,onChange:P=>$e(P.target.value),className:"w-full bg-white/[0.03] border border-white/[0.08] text-white rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-400"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"text-[10px] text-gray-400 block mb-1 font-bold",children:"PAYMENT METHOD"}),l.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[l.jsxs("button",{type:"button",onClick:()=>Ge("qris"),className:`p-2.5 rounded-lg border text-left flex items-center justify-between text-[11px] ${ze==="qris"?"bg-indigo-600/10 border-indigo-500 text-indigo-300":"bg-white/[0.02] border-white/[0.05] text-gray-400 hover:border-white/10"}`,children:[l.jsx("span",{className:"font-bold",children:"QRIS (Automated)"}),l.jsx("i",{className:"fa-solid fa-qrcode text-xs"})]}),l.jsxs("button",{type:"button",onClick:()=>Ge("va"),className:`p-2.5 rounded-lg border text-left flex items-center justify-between text-[11px] ${ze==="va"?"bg-indigo-600/10 border-indigo-500 text-indigo-300":"bg-white/[0.02] border-white/[0.05] text-gray-400 hover:border-white/10"}`,children:[l.jsx("span",{className:"font-bold",children:"Virtual Account"}),l.jsx("i",{className:"fa-solid fa-building-columns text-xs"})]})]})]})]})]}),l.jsxs("div",{className:"border-t border-white/[0.06] pt-4 mt-4 space-y-3",children:[l.jsxs("div",{className:"flex justify-between items-center text-xs font-bold text-white",children:[l.jsx("span",{children:"Total Invoice:"}),l.jsxs("span",{children:["Rp ",p().toLocaleString("id-ID")]})]}),l.jsxs("div",{className:"flex gap-2",children:[l.jsx("button",{type:"button",onClick:()=>Re("cart"),className:"w-1/3 py-2.5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] text-gray-300 font-bold rounded-xl text-xs transition-colors",children:"Back"}),l.jsx("button",{type:"submit",disabled:at,className:"w-2/3 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20",children:at?l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"w-3.5 h-3.5 border-2 border-t-transparent border-white rounded-full animate-spin"}),"Generating token..."]}):l.jsxs(l.Fragment,{children:["Generate Payment Invoice ",l.jsx("i",{className:"fa-solid fa-credit-card text-[10px]"})]})})]})]})]}),_e==="qris"&&l.jsxs("div",{className:"flex-1 flex flex-col justify-between items-center text-center animate-slide-up py-3 font-outfit",children:[l.jsxs("div",{className:"space-y-3 w-full max-w-[280px]",children:[l.jsx("h4",{className:"font-bold text-white text-sm font-outfit",children:"Simulated Midtrans Payment"}),l.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-xs font-mono font-bold text-pink-500 animate-pulse pb-1",children:[l.jsx("i",{className:"fa-solid fa-clock"}),l.jsxs("span",{children:["Time Limit: ",K(I)]})]}),ze==="qris"?l.jsxs("div",{className:"p-4 bg-white rounded-2xl flex flex-col items-center justify-center border border-indigo-200/50 shadow-lg relative overflow-hidden w-full",children:[l.jsxs("div",{className:"w-36 h-36 border border-gray-200 rounded-lg flex items-center justify-center bg-gray-50 relative p-1.5 pt-3",children:[l.jsx("span",{className:"absolute top-1 text-[9px] font-black text-blue-900 tracking-wider",children:"QRIS"}),l.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=110x110&color=030712&data=${encodeURIComponent("https://www.abner.my.id/")}`,alt:"QRIS Code",className:"w-28 h-28 border border-gray-300 rounded"})]}),l.jsxs("span",{className:"text-[10px] text-gray-700 font-bold mt-2 font-mono",children:["ORDER-ID: DN-",st]})]}):l.jsxs("div",{className:"p-4 bg-[#090d16] border border-white/[0.06] rounded-2xl flex flex-col items-stretch text-left w-full space-y-3 shadow-md",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.06] pb-2",children:[l.jsx("span",{className:"font-bold text-white text-xs",children:"Simulated Virtual Account"}),l.jsx("span",{className:"text-[10px] text-indigo-400 font-extrabold",children:"BANK MANDIRI"})]}),l.jsxs("div",{className:"space-y-1.5",children:[l.jsx("label",{className:"text-[9px] text-gray-400 block font-semibold",children:"VIRTUAL ACCOUNT NUMBER"}),l.jsxs("div",{className:"flex items-center justify-between bg-white/[0.04] border border-white/[0.06] rounded-lg p-2.5",children:[l.jsxs("span",{className:"font-mono text-xs text-white tracking-widest font-bold",children:["88012",De.replace(/\D/g,"").slice(-10).padStart(10,"0")]}),l.jsx("button",{type:"button",onClick:()=>{const P=`88012${De.replace(/\D/g,"").slice(-10).padStart(10,"0")}`;navigator.clipboard.writeText(P),ut("Virtual Account copied!"),setTimeout(()=>ut(null),2e3)},className:"text-[9px] font-bold text-indigo-400 hover:text-indigo-300 px-2 py-1 bg-indigo-500/10 rounded border border-indigo-500/20 transition-colors",children:"Copy"})]})]}),l.jsx("p",{className:"text-[9px] text-gray-400 leading-normal",children:"Copy the Virtual Account number above and simulate a paid VA transfer by clicking the green button below."})]}),l.jsxs("p",{className:"text-[10px] text-gray-400 leading-tight font-mono",children:["Total Invoice: ",l.jsxs("span",{className:"font-bold text-indigo-400",children:["Rp ",p().toLocaleString("id-ID")]})]})]}),l.jsxs("div",{className:"w-full mt-4 space-y-2",children:[l.jsx("button",{type:"button",onClick:Y,disabled:at,className:"w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 glow-payment-success active:scale-[0.98]",children:at?l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"w-3.5 h-3.5 border-2 border-t-transparent border-white rounded-full animate-spin"}),"Verifying Payment..."]}):l.jsxs(l.Fragment,{children:[l.jsx("i",{className:"fa-solid fa-circle-check"})," ",ze==="qris"?"Simulate Successful Scan & Pay":"Simulate Paid VA Transfer"]})}),l.jsx("button",{type:"button",onClick:()=>Re("checkout"),className:"w-full py-2 bg-white/[0.01] hover:bg-white/[0.04] border border-white/[0.06] text-gray-400 hover:text-gray-200 rounded-xl text-[10px] transition-colors",children:"Cancel Payment"})]})]}),_e==="paid"&&l.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center text-center animate-slide-up space-y-4",children:[l.jsx("div",{className:"w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-3xl text-green-400 animate-bounce shadow-lg shadow-green-500/10",children:l.jsx("i",{className:"fa-solid fa-check"})}),l.jsxs("div",{className:"space-y-1",children:[l.jsx("h4",{className:"font-extrabold text-white text-lg font-outfit",children:"Payment Successful!"}),l.jsx("p",{className:"text-xs text-gray-400 max-w-[280px] leading-relaxed",children:"Midtrans Gateway has successfully forwarded the payment webhook to the backend system."})]}),l.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/5 border border-indigo-500/20 text-indigo-300 text-[10px] animate-pulse",children:[l.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping"}),"Sending Automated Invoice via WhatsApp..."]})]}),_e==="notified"&&l.jsxs("div",{className:"flex-1 flex flex-col justify-between animate-slide-up",children:[l.jsxs("div",{className:"space-y-3.5",children:[l.jsxs("div",{className:"flex items-center gap-2.5 bg-green-950/20 border border-green-500/20 p-2.5 rounded-2xl",children:[l.jsx("div",{className:"w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-sm",children:l.jsx("i",{className:"fab fa-whatsapp"})}),l.jsxs("div",{children:[l.jsx("span",{className:"font-bold text-white block text-xs",children:"WhatsApp Notification Dispatch"}),l.jsxs("span",{className:"text-[9px] text-green-400 font-mono",children:["Invoice successfully sent to +",De.replace(/\D/g,"").startsWith("0")?"62"+De.replace(/\D/g,"").slice(1):De.replace(/\D/g,"")]})]})]}),l.jsxs("div",{className:"bg-[#0b141a] border border-[#202c33] rounded-2xl p-4 text-xs font-mono text-gray-200 relative shadow-2xl",children:[l.jsx("div",{className:"absolute top-4 -left-2 w-0 h-0 border-t-[8px] border-t-transparent border-r-[10px] border-r-[#0b141a] border-b-[8px] border-b-transparent"}),l.jsxs("div",{className:"flex justify-between items-center text-[10px] text-green-400 font-bold mb-2",children:[l.jsx("span",{children:"💬 Don Neto Store - INVOICE"}),l.jsx("span",{children:new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})})]}),l.jsxs("div",{className:"border-b border-gray-800 pb-2 mb-2 text-[10px] text-gray-400",children:["Transaction ID: ",l.jsxs("span",{className:"text-white font-bold",children:["#DN-",st]})]}),l.jsxs("div",{className:"space-y-1 text-[11px] leading-relaxed",children:[l.jsxs("p",{children:["Hello ",l.jsx("span",{className:"text-white font-bold",children:ye}),"!"]}),l.jsxs("p",{children:["We have received your payment of ",l.jsxs("span",{className:"text-green-400 font-bold",children:["Rp ",p().toLocaleString("id-ID")]}),"."]}),l.jsx("p",{className:"pt-1.5 text-gray-400",children:"Purchase Details:"}),l.jsx("ul",{className:"list-disc pl-4 text-gray-300",children:ae.map(P=>l.jsxs("li",{children:[P.name," (x",P.quantity,")"]},P.id))}),l.jsxs("p",{className:"pt-2 text-[10px] text-gray-400 font-medium",children:["Status: ",l.jsx("span",{className:"bg-green-500/10 text-green-400 px-1.5 py-0.5 rounded font-bold border border-green-500/20 uppercase text-[9px]",children:"Paid via QRIS"})]})]})]})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 mt-4",children:[l.jsxs("button",{type:"button",onClick:ce,className:"w-full sm:w-2/3 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-green-600/10 hover:shadow-green-600/20 active:scale-95",children:[l.jsx("i",{className:"fab fa-whatsapp"})," Send to Real WhatsApp"]}),l.jsxs("button",{type:"button",onClick:oe,className:"w-full sm:w-1/3 py-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] text-gray-300 font-bold rounded-xl text-xs transition-all duration-300 flex items-center justify-center gap-2",children:[l.jsx("i",{className:"fa-solid fa-rotate-left"})," Reset"]})]})]})]})})]})]})}),l.jsx("section",{id:"skills",className:"scroll-mt-24",children:l.jsxs("div",{className:"space-y-12",children:[l.jsxs("div",{className:"text-center space-y-3",children:[l.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 text-glow",children:"[TECHNICAL_STACK]"}),l.jsx("h2",{className:"text-4xl sm:text-5xl font-black tracking-tight font-outfit",children:"Skills & Core Stack"}),l.jsx("div",{className:"w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto"})]}),l.jsxs("div",{className:"cyber-card p-6 sm:p-8 rounded-3xl border border-white/[0.04] bg-[#070b13]/60 backdrop-blur-xl relative overflow-hidden flex flex-col items-center",children:[l.jsx("div",{className:"flex flex-wrap gap-2 justify-center mb-8 w-full border-b border-white/[0.06] pb-4 z-10",children:[{label:"Programming",icon:"fa-solid fa-code"},{label:"Web & Backend",icon:"fa-solid fa-server"},{label:"Mobile & DS",icon:"fa-solid fa-brain"},{label:"Databases & DevOps",icon:"fa-solid fa-database"}].map((P,S)=>l.jsxs("button",{onClick:()=>_(S),className:`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all border ${N===S?"bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20":"bg-white/[0.02] border-white/[0.06] text-gray-400 hover:text-white hover:bg-white/[0.04]"}`,children:[l.jsx("i",{className:P.icon}),P.label]},S))}),l.jsxs("div",{className:"w-full relative h-[250px] flex items-center justify-center",children:[l.jsxs("svg",{className:"absolute inset-0 w-full h-full z-0 pointer-events-none",children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:"laser",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#6366f1",stopOpacity:"0.8"}),l.jsx("stop",{offset:"100%",stopColor:"#06b6d4",stopOpacity:"0.8"})]}),l.jsxs("filter",{id:"glow-laser",children:[l.jsx("feGaussianBlur",{stdDeviation:"3",result:"coloredBlur"}),l.jsxs("feMerge",{children:[l.jsx("feMergeNode",{in:"coloredBlur"}),l.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),l.jsx("line",{x1:"50%",y1:"120",x2:"50%",y2:"35",stroke:"url(#laser)",strokeWidth:"2",filter:"url(#glow-laser)",strokeDasharray:"6,6",className:"animate-[dash_3s_linear_infinite]"}),l.jsx("line",{x1:"50%",y1:"120",x2:"78%",y2:"80",stroke:"url(#laser)",strokeWidth:"2",filter:"url(#glow-laser)",strokeDasharray:"6,6",className:"animate-[dash_3s_linear_infinite]"}),l.jsx("line",{x1:"50%",y1:"120",x2:"70%",y2:"185",stroke:"url(#laser)",strokeWidth:"2",filter:"url(#glow-laser)",strokeDasharray:"6,6",className:"animate-[dash_3s_linear_infinite]"}),l.jsx("line",{x1:"50%",y1:"120",x2:"30%",y2:"185",stroke:"url(#laser)",strokeWidth:"2",filter:"url(#glow-laser)",strokeDasharray:"6,6",className:"animate-[dash_3s_linear_infinite]"}),l.jsx("line",{x1:"50%",y1:"120",x2:"22%",y2:"80",stroke:"url(#laser)",strokeWidth:"2",filter:"url(#glow-laser)",strokeDasharray:"6,6",className:"animate-[dash_3s_linear_infinite]"})]}),l.jsx("div",{className:"absolute left-1/2 top-[120px] -translate-x-1/2 -translate-y-1/2 z-10",children:l.jsx("div",{className:"w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 p-[2px] shadow-lg shadow-indigo-600/30 animate-pulse",children:l.jsxs("div",{className:"w-full h-full rounded-full bg-[#070b13] flex flex-col items-center justify-center text-center p-2",children:[l.jsx("span",{className:"text-[10px] font-black text-indigo-300 uppercase tracking-wider font-mono",children:"Core Hub"}),l.jsx("span",{className:"text-[11px] font-extrabold text-white leading-tight font-outfit mt-0.5",children:["Programming","Web & Backend","Mobile & DS","DevOps & DB"][N]})]})})}),[{x:"left-1/2 top-[35px] -translate-x-1/2 -translate-y-1/2",skill:[["Python","PHP","JavaScript","Kotlin","Dart"],["Laravel","React","Next.js","RESTful API","Nginx"],["Flutter","Machine Learning","Deep Learning","NLP","Data Analysis"],["MySQL","Firebase","Nginx Configs","VPS Deployments","Git"]][N][0]},{x:"left-[78%] top-[80px] -translate-x-1/2 -translate-y-1/2",skill:[["Python","PHP","JavaScript","Kotlin","Dart"],["Laravel","React","Next.js","RESTful API","Nginx"],["Flutter","Machine Learning","Deep Learning","NLP","Data Analysis"],["MySQL","Firebase","Nginx Configs","VPS Deployments","Git"]][N][1]},{x:"left-[70%] top-[185px] -translate-x-1/2 -translate-y-1/2",skill:[["Python","PHP","JavaScript","Kotlin","Dart"],["Laravel","React","Next.js","RESTful API","Nginx"],["Flutter","Machine Learning","Deep Learning","NLP","Data Analysis"],["MySQL","Firebase","Nginx Configs","VPS Deployments","Git"]][N][2]},{x:"left-[30%] top-[185px] -translate-x-1/2 -translate-y-1/2",skill:[["Python","PHP","JavaScript","Kotlin","Dart"],["Laravel","React","Next.js","RESTful API","Nginx"],["Flutter","Machine Learning","Deep Learning","NLP","Data Analysis"],["MySQL","Firebase","Nginx Configs","VPS Deployments","Git"]][N][3]},{x:"left-[22%] top-[80px] -translate-x-1/2 -translate-y-1/2",skill:[["Python","PHP","JavaScript","Kotlin","Dart"],["Laravel","React","Next.js","RESTful API","Nginx"],["Flutter","Machine Learning","Deep Learning","NLP","Data Analysis"],["MySQL","Firebase","Nginx Configs","VPS Deployments","Git"]][N][4]}].map((P,S)=>l.jsx("div",{className:`absolute ${P.x} z-10 group`,children:l.jsx("div",{className:"px-3.5 py-2 rounded-xl bg-[#090e18]/90 border border-white/[0.08] shadow-md group-hover:border-indigo-400 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.25)] transition-all duration-300 flex items-center justify-center min-w-[80px]",children:l.jsx("span",{className:"text-[10px] font-bold text-white group-hover:text-indigo-300 transition-colors font-mono",children:P.skill})})},S))]})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[{title:"Programming",icon:"fa-solid fa-code text-indigo-400",skills:["Python","PHP","JavaScript","Kotlin","Dart"],accent:"text-indigo-400 border-indigo-500/20 bg-indigo-500/5"},{title:"Web & Backend",icon:"fa-solid fa-server text-cyan-400",skills:["Laravel","React","Next.js","RESTful API","Nginx"],accent:"text-cyan-400 border-cyan-500/20 bg-cyan-500/5"},{title:"Mobile & DS",icon:"fa-solid fa-brain text-pink-400",skills:["Flutter","Machine Learning","Deep Learning","NLP","Data Analysis"],accent:"text-pink-400 border-pink-500/20 bg-pink-500/5"},{title:"Databases & DevOps",icon:"fa-solid fa-database text-emerald-400",skills:["MySQL","Firebase","Nginx Configs","VPS Deployments","Git"],accent:"text-emerald-400 border-emerald-500/20 bg-emerald-500/5"}].map((P,S)=>l.jsxs("div",{className:"cyber-card p-6 rounded-3xl border border-white/[0.05] hover:border-white/10 shadow-md",children:[l.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[l.jsx("div",{className:"w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg",children:l.jsx("i",{className:P.icon})}),l.jsx("h3",{className:"font-extrabold text-white text-base font-outfit",children:P.title})]}),l.jsx("ul",{className:"space-y-4",children:P.skills.map(($,O)=>l.jsxs("li",{className:"flex flex-col gap-1.5",children:[l.jsxs("div",{className:"flex justify-between text-xs text-gray-300 font-medium",children:[l.jsx("span",{children:$}),l.jsxs("span",{className:"text-gray-400 font-bold",children:[95-O*5,"%"]})]}),l.jsx("div",{className:"w-full bg-white/[0.04] rounded-full h-1.5 overflow-hidden",children:l.jsx("div",{className:"bg-gradient-to-r from-indigo-500 to-cyan-400 h-full rounded-full fill-bar-animate animate-pulse",style:{width:`${95-O*5}%`}})})]},O))})]},S))}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 pt-6",children:[l.jsxs("div",{className:"cyber-card p-6 sm:p-8 rounded-3xl space-y-4 shadow-md",children:[l.jsxs("h4",{className:"font-bold text-white text-base font-outfit flex items-center gap-3",children:[l.jsx("div",{className:"w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm text-indigo-400",children:l.jsx("i",{className:"fa-solid fa-graduation-cap"})}),"Academic Coursework"]}),l.jsx("div",{className:"flex flex-wrap gap-2",children:["Data Structures & Algorithms","Web Development","Mobile Application Development","Machine Learning","Data Science","Natural Language Processing","Cybersecurity","Software Project Management"].map((P,S)=>l.jsx("span",{className:"px-3.5 py-1.5 text-xs font-semibold bg-white/[0.03] border border-white/[0.06] rounded-xl text-gray-300 hover:border-indigo-500/30 transition-colors duration-300",children:P},S))})]}),l.jsxs("div",{className:"cyber-card p-6 sm:p-8 rounded-3xl space-y-4 shadow-md",children:[l.jsxs("h4",{className:"font-bold text-white text-base font-outfit flex items-center gap-3",children:[l.jsx("div",{className:"w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm text-cyan-400",children:l.jsx("i",{className:"fa-solid fa-handshake"})}),"Professional & Soft Skills"]}),l.jsx("div",{className:"flex flex-wrap gap-2",children:["Leadership","Strategic Planning","Problem Solving","Critical Thinking","Communication","Team Collaboration","B2 English","A2 Chinese"].map((P,S)=>l.jsx("span",{className:"px-3.5 py-1.5 text-xs font-semibold bg-indigo-500/5 border border-indigo-500/25 rounded-xl text-indigo-300 hover:border-indigo-400 transition-colors duration-300",children:P},S))})]})]})]})}),l.jsx("section",{id:"projects",className:"scroll-mt-24",children:l.jsxs("div",{className:"space-y-12",children:[l.jsxs("div",{className:"text-center space-y-3",children:[l.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 text-glow",children:"[FEATURED_PROJECTS]"}),l.jsx("h2",{className:"text-4xl sm:text-5xl font-black tracking-tight font-outfit",children:"Featured Projects"}),l.jsx("div",{className:"w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto"}),l.jsx("p",{className:"text-gray-400 text-sm sm:text-base max-w-xl mx-auto pt-2 leading-relaxed",children:'Click "View Details" to interact with live dashboard mockups and check system architectures.'})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:Te.map(P=>l.jsxs("div",{className:"cyber-card rounded-3xl overflow-hidden group flex flex-col justify-between border border-white/[0.04] shadow-lg transition-transform duration-300 ease-out",onMouseMove:S=>{const $=S.currentTarget,O=$.getBoundingClientRect(),re=S.clientX-O.left,ie=S.clientY-O.top,ne=O.width/2,be=O.height/2,ve=(be-ie)/be*10,He=(re-ne)/ne*10;$.style.transform=`perspective(1000px) rotateX(${ve}deg) rotateY(${He}deg) translateY(-4px)`},onMouseLeave:S=>{const $=S.currentTarget;$.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)"},children:[l.jsxs("div",{children:[l.jsxs("div",{className:"relative h-48 bg-gradient-to-br from-indigo-950 via-[#0a0f1d] to-[#030712] flex items-center justify-center border-b border-white/[0.05] overflow-hidden",children:[l.jsx("div",{className:"absolute inset-0 bg-cover bg-center opacity-25 group-hover:scale-110 transition-transform duration-700"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent"}),l.jsx("div",{className:`w-32 h-32 rounded-full absolute bg-gradient-to-tr ${P.color} filter blur-2xl opacity-35 animate-float-slow`}),l.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl text-white relative z-10 shadow-2xl",children:l.jsx("i",{className:P.image})}),l.jsx("div",{className:"absolute top-4 right-4",children:l.jsx("span",{className:"px-3.5 py-1 bg-white/[0.06] border border-white/[0.08] backdrop-blur-md text-indigo-300 rounded-full text-[10px] font-bold uppercase tracking-wider",children:P.status})})]}),l.jsxs("div",{className:"p-8 space-y-4",children:[l.jsx("span",{className:"text-xs font-semibold uppercase text-indigo-400 tracking-wider font-outfit",children:P.category}),l.jsx("h3",{className:"text-2xl font-black text-white group-hover:text-indigo-300 transition-colors font-outfit leading-tight",children:P.title}),l.jsx("p",{className:"text-gray-400 text-sm leading-relaxed font-medium",children:P.description}),l.jsxs("div",{className:"flex flex-wrap gap-2 pt-2",children:[P.technologies.slice(0,4).map(S=>l.jsx("span",{className:"px-3 py-1 rounded-full text-[10px] font-bold bg-white/[0.04] border border-white/[0.06] text-gray-300",children:S},S)),P.technologies.length>4&&l.jsxs("span",{className:"px-3 py-1 rounded-full text-[10px] font-bold bg-indigo-500/10 text-indigo-300",children:["+",P.technologies.length-4," more"]})]})]})]}),l.jsxs("div",{className:"p-8 pt-0 flex flex-wrap gap-3",children:[l.jsxs("button",{onClick:()=>h(P),className:"px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-all duration-300 flex items-center justify-center text-xs font-bold tracking-wide gap-2 shadow-lg shadow-indigo-600/15",children:[l.jsxs("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),"View Details"]}),P.demo&&l.jsxs("a",{href:P.demo,target:"_blank",rel:"noopener noreferrer",className:"px-5 py-2.5 bg-gradient-to-r from-cyan-600/30 to-indigo-600/30 hover:from-cyan-600/50 hover:to-indigo-600/50 text-cyan-300 border border-cyan-500/40 rounded-xl transition-all duration-300 flex items-center justify-center text-xs font-bold gap-2",children:[l.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square text-xs"}),"Live Demo"]}),P.github&&l.jsxs("a",{href:P.github,target:"_blank",rel:"noopener noreferrer",className:"px-5 py-2.5 bg-white/[0.03] hover:bg-white/[0.08] text-gray-200 border border-white/[0.06] rounded-xl transition-all duration-300 flex items-center justify-center text-xs font-bold gap-2",children:[l.jsx("i",{className:"fab fa-github text-sm"}),"GitHub"]})]})]},P.id))})]})}),l.jsx("section",{className:"scroll-mt-24",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12",children:[l.jsxs("div",{className:"lg:col-span-6 space-y-8",children:[l.jsxs("h2",{className:"text-2xl font-black text-white font-outfit border-b border-white/[0.08] pb-3 flex items-center gap-3",children:[l.jsx("div",{className:"w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-base text-indigo-400",children:l.jsx("i",{className:"fa-solid fa-briefcase"})}),"Work Experience"]}),l.jsx("div",{className:"relative border-l border-white/[0.08] ml-4 space-y-10 pt-2",children:ue.map((P,S)=>l.jsxs("div",{className:"relative pl-6 group",children:[l.jsx("div",{className:"absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-glow transition-transform duration-300 group-hover:scale-125"}),l.jsxs("div",{className:"space-y-1.5",children:[l.jsx("span",{className:"text-[10px] font-bold text-indigo-400 uppercase tracking-widest",children:P.period}),l.jsx("h3",{className:"text-lg font-bold text-white font-outfit leading-snug",children:P.role}),l.jsx("span",{className:"text-xs text-gray-400 block font-semibold",children:P.org}),l.jsx("ul",{className:"list-disc list-outside pl-4 text-xs text-gray-300 space-y-2 pt-2.5 font-medium leading-relaxed",children:P.points.map(($,O)=>l.jsx("li",{children:$},O))})]})]},S))})]}),l.jsxs("div",{className:"lg:col-span-6 space-y-8",children:[l.jsxs("h2",{className:"text-2xl font-black text-white font-outfit border-b border-white/[0.08] pb-3 flex items-center gap-3",children:[l.jsx("div",{className:"w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-base text-cyan-400",children:l.jsx("i",{className:"fa-solid fa-users"})}),"Organization Experience"]}),l.jsx("div",{className:"relative border-l border-white/[0.08] ml-4 space-y-10 pt-2",children:Ce.map((P,S)=>l.jsxs("div",{className:"relative pl-6 group",children:[l.jsx("div",{className:"absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-glow transition-transform duration-300 group-hover:scale-125"}),l.jsxs("div",{className:"space-y-1.5",children:[l.jsx("span",{className:"text-[10px] font-bold text-cyan-400 uppercase tracking-widest",children:P.period}),l.jsx("h3",{className:"text-lg font-bold text-white font-outfit leading-snug",children:P.role}),l.jsx("span",{className:"text-xs text-gray-400 block font-semibold",children:P.org}),l.jsx("ul",{className:"list-disc list-outside pl-4 text-xs text-gray-300 space-y-2 pt-2.5 font-medium leading-relaxed",children:P.points.map(($,O)=>l.jsx("li",{children:$},O))})]})]},S))})]})]})}),l.jsx("section",{id:"achievements",className:"scroll-mt-24",children:l.jsxs("div",{className:"space-y-12",children:[l.jsxs("div",{className:"text-center space-y-3",children:[l.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 text-glow",children:"[ACHIEVEMENTS_INDEX]"}),l.jsx("h2",{className:"text-4xl sm:text-5xl font-black tracking-tight font-outfit",children:"Competitions & Achievements"}),l.jsx("div",{className:"w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto"})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:he.map((P,S)=>l.jsx("div",{className:"cyber-card p-6 rounded-3xl border border-white/[0.04] hover:border-white/10 flex flex-col justify-between space-y-4 shadow-lg",children:l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("div",{className:"w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg",children:l.jsx("i",{className:P.icon})}),l.jsx("span",{className:"text-[10px] font-bold bg-white/[0.05] border border-white/[0.08] text-indigo-300 px-3 py-1 rounded-full",children:P.date})]}),l.jsx("h3",{className:"font-extrabold text-white text-base sm:text-lg font-outfit leading-snug",children:P.title}),l.jsx("span",{className:"text-xs text-cyan-400 font-bold block",children:P.category}),l.jsx("p",{className:"text-gray-400 text-xs leading-relaxed font-medium",children:P.details})]})},S))})]})}),l.jsx("section",{id:"github",className:"scroll-mt-24",children:l.jsxs("div",{className:"space-y-12",children:[l.jsxs("div",{className:"text-center space-y-3",children:[l.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 text-glow",children:"[DEVELOPER_ACTIVITY]"}),l.jsx("h2",{className:"text-4xl sm:text-5xl font-black tracking-tight font-outfit",children:"GitHub Activity"}),l.jsx("div",{className:"w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto"})]}),l.jsx("div",{className:"flex justify-center",children:l.jsx("div",{className:"cyber-card p-6 sm:p-8 rounded-3xl w-full max-w-4xl border border-white/[0.04] overflow-x-auto shadow-xl",children:l.jsx("div",{className:"min-w-[700px] min-h-[160px] flex justify-center items-center py-2",children:l.jsx(Co.Suspense,{fallback:l.jsx("div",{className:"h-[160px] flex items-center justify-center text-xs text-gray-400 font-mono",children:"Loading GitHub activity data..."}),children:l.jsx(Kp,{username:"reynaldabnerrr",colorScheme:"dark",blockSize:12,blockMargin:4,fontSize:13})})})})})]})}),l.jsx("section",{id:"contact",className:"scroll-mt-24",children:l.jsxs("div",{className:"space-y-12",children:[l.jsxs("div",{className:"text-center space-y-3",children:[l.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 text-glow",children:"[GET_IN_TOUCH]"}),l.jsx("h2",{className:"text-4xl sm:text-5xl font-black tracking-tight font-outfit",children:"Get In Touch"}),l.jsx("div",{className:"w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto"}),l.jsx("p",{className:"text-gray-400 text-sm sm:text-base max-w-xl mx-auto pt-2 leading-relaxed",children:"Have an interesting project concept or collaboration offer? Please contact me through the channels below."})]}),l.jsx("div",{className:"cyber-card p-8 rounded-3xl max-w-2xl mx-auto border border-white/[0.04] shadow-xl",children:l.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[l.jsxs("a",{href:"mailto:reynald030685@gmail.com",className:"flex flex-col items-center p-5 rounded-2xl bg-red-500/5 border border-red-500/10 text-red-400 hover:bg-red-500/10 hover:border-red-400 hover:scale-105 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)] transition-all duration-300",target:"_blank",rel:"noopener noreferrer",children:[l.jsx("i",{className:"fas fa-envelope text-3xl mb-3"}),l.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider font-outfit",children:"Email"})]}),l.jsxs("a",{href:"https://www.linkedin.com/in/reynald-abner-tananda-a060b4227/",className:"flex flex-col items-center p-5 rounded-2xl bg-blue-500/5 border border-blue-500/10 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300",target:"_blank",rel:"noopener noreferrer",children:[l.jsx("i",{className:"fab fa-linkedin text-3xl mb-3"}),l.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider font-outfit",children:"LinkedIn"})]}),l.jsxs("a",{href:"https://github.com/reynaldabnerrr",className:"flex flex-col items-center p-5 rounded-2xl bg-gray-500/5 border border-gray-500/10 text-gray-400 hover:bg-gray-500/10 hover:border-gray-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(156,163,175,0.2)] transition-all duration-300",target:"_blank",rel:"noopener noreferrer",children:[l.jsx("i",{className:"fab fa-github text-3xl mb-3"}),l.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider font-outfit",children:"GitHub"})]}),l.jsxs("a",{href:"https://www.instagram.com/reynaldabnerr/",className:"flex flex-col items-center p-5 rounded-2xl bg-pink-500/5 border border-pink-500/10 text-pink-400 hover:bg-pink-500/10 hover:border-pink-400 hover:scale-105 hover:shadow-[0_0_15px_rgba(236,72,153,0.2)] transition-all duration-300",target:"_blank",rel:"noopener noreferrer",children:[l.jsx("i",{className:"fab fa-instagram text-3xl mb-3"}),l.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider font-outfit",children:"Instagram"})]})]})})]})})]}),k&&l.jsx(Ro,{}),g&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"fixed inset-0 z-50 bg-[var(--background)]/80 backdrop-blur-xl transition-all duration-300 pointer-events-auto",onClick:()=>h(null)}),l.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-10 pointer-events-none",children:l.jsxs("div",{className:"cyber-card rounded-3xl max-w-4xl w-full border border-white/[0.08] shadow-2xl my-auto pointer-events-auto animate-slide-up",children:[l.jsxs("div",{className:"relative h-48 sm:h-56 bg-gradient-to-br from-indigo-950 via-[#0d1326] to-[#030712] flex items-center justify-center border-b border-white/[0.08]",children:[l.jsx("button",{onClick:()=>h(null),className:"absolute top-4 right-4 w-10 h-10 bg-white/[0.05] hover:bg-white/[0.1] rounded-full flex items-center justify-center text-white border border-white/[0.08] transition-colors z-20 pointer-events-auto",children:l.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),l.jsx("div",{className:`absolute inset-0 bg-gradient-to-tr ${g.color} opacity-20 filter blur-2xl`}),l.jsx("div",{className:"w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl sm:text-5xl text-white relative z-10 shadow-2xl",children:l.jsx("i",{className:g.image})}),l.jsx("div",{className:"absolute bottom-4 left-6",children:l.jsx("span",{className:"px-4 py-1.5 bg-white/[0.05] border border-white/[0.08] text-indigo-300 rounded-full text-xs font-bold uppercase tracking-wider",children:g.category})})]}),l.jsxs("div",{className:"p-6 sm:p-8 space-y-8 max-h-[70vh] overflow-y-auto",children:[l.jsxs("div",{className:"space-y-3",children:[l.jsx("h2",{className:"text-3xl sm:text-4xl font-black text-white font-outfit tracking-tight",children:g.title}),l.jsx("p",{className:"text-gray-300 text-sm sm:text-base leading-relaxed font-medium",children:g.longDescription})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-8",children:[l.jsxs("div",{className:"md:col-span-7 space-y-4",children:[l.jsxs("h3",{className:"text-lg font-bold text-white font-outfit border-b border-white/[0.05] pb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-2.5 h-2.5 bg-indigo-500 rounded-full"})," Key Features & Architecture"]}),l.jsx("ul",{className:"space-y-3",children:g.features.map((P,S)=>l.jsxs("li",{className:"flex items-start text-xs sm:text-sm text-gray-300",children:[l.jsx("svg",{className:"w-5 h-5 text-indigo-400 mr-2.5 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M5 13l4 4L19 7"})}),l.jsx("span",{children:P})]},S))})]}),l.jsxs("div",{className:"md:col-span-5 space-y-6",children:[l.jsxs("div",{className:"space-y-3",children:[l.jsxs("h3",{className:"text-lg font-bold text-white font-outfit border-b border-white/[0.05] pb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-2.5 h-2.5 bg-cyan-400 rounded-full"})," Tech Stack"]}),l.jsx("div",{className:"flex flex-wrap gap-2",children:g.technologies.map(P=>l.jsx("span",{className:"px-3 py-1.5 bg-white/[0.04] border border-white/[0.06] text-gray-300 rounded-lg text-xs font-semibold",children:P},P))})]}),l.jsxs("div",{className:"space-y-3",children:[l.jsxs("h3",{className:"text-lg font-bold text-white font-outfit border-b border-white/[0.05] pb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-2.5 h-2.5 bg-pink-500 rounded-full"})," Project Links"]}),l.jsxs("div",{className:"flex flex-col gap-2.5",children:[g.github&&l.jsxs("a",{href:g.github,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-between p-3 bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/10 rounded-xl text-xs font-bold text-gray-300 transition-colors pointer-events-auto",children:[l.jsx("span",{children:"GitHub Repository"}),l.jsx("i",{className:"fab fa-github text-sm"})]}),g.demo&&l.jsxs("a",{href:g.demo,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-between p-3 bg-indigo-600/10 border border-indigo-500/20 hover:bg-indigo-600 hover:text-white rounded-xl text-xs font-bold text-indigo-300 transition-all duration-300 pointer-events-auto",children:[l.jsx("span",{children:"Live Application Demo"}),l.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square text-xs"})]})]})]})]})]})]}),l.jsx("div",{className:"p-6 border-t border-white/[0.08] flex justify-end pointer-events-auto",children:l.jsx("button",{onClick:()=>h(null),className:"px-6 py-2.5 bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-gray-500 text-white rounded-xl text-xs font-bold transition-colors pointer-events-auto",children:"Close Window"})})]})})]}),k&&l.jsx(Ro,{}),w&&l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in",children:l.jsxs("div",{className:"cyber-card w-full max-w-2xl rounded-2xl border border-white/[0.08] bg-[#070c14]/90 overflow-hidden shadow-2xl flex flex-col h-[400px]",children:[l.jsxs("div",{className:"flex items-center justify-between bg-white/[0.02] border-b border-white/[0.06] px-4 py-3 select-none",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500/80 cursor-pointer animate-pulse",onClick:()=>L(!1)}),l.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-yellow-500/80"}),l.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-green-500/80"}),l.jsxs("span",{className:"text-[10px] text-gray-400 font-mono ml-2 uppercase font-bold tracking-wider flex items-center gap-1.5",children:[l.jsx("i",{className:"fa-solid fa-terminal text-indigo-400"})," guest@donneto: ~"]})]}),l.jsx("button",{onClick:()=>L(!1),className:"text-gray-500 hover:text-white text-xs font-bold font-mono px-2 py-0.5 rounded hover:bg-white/5",children:"ESC"})]}),l.jsx("div",{className:"flex-1 p-4 overflow-y-auto font-mono text-xs text-green-400 space-y-1.5 scrollbar-thin",children:q.map((P,S)=>l.jsx("div",{className:"whitespace-pre-wrap leading-relaxed",children:P},S))}),l.jsxs("form",{onSubmit:ke,className:"bg-[#05080e]/60 border-t border-white/[0.05] p-3 flex items-center gap-2",children:[l.jsx("span",{className:"font-mono text-xs text-indigo-400 font-bold",children:"guest@donneto:~$"}),l.jsx("input",{type:"text",autoFocus:!0,value:D,onChange:P=>B(P.target.value),placeholder:"Type 'help' and press Enter...",className:"flex-1 bg-transparent text-xs font-mono text-green-300 focus:outline-none placeholder:text-gray-700"})]})]})}),l.jsxs("div",{className:"fixed bottom-6 right-6 z-40 flex flex-col items-end",children:[W&&l.jsxs("div",{className:"cyber-card w-[320px] sm:w-[350px] h-[450px] rounded-3xl border border-white/[0.08] bg-[#0d141d]/90 overflow-hidden shadow-2xl flex flex-col justify-between mb-4 animate-slide-up",children:[l.jsxs("div",{className:"bg-[#075e54] p-4 flex items-center gap-3 text-white",children:[l.jsxs("div",{className:"relative",children:[l.jsx("div",{className:"w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-lg",children:l.jsx("i",{className:"fa-solid fa-robot"})}),l.jsx("div",{className:"w-2.5 h-2.5 bg-green-400 rounded-full absolute bottom-0 right-0 border border-[#075e54] animate-pulse"})]}),l.jsxs("div",{children:[l.jsx("span",{className:"font-bold text-sm block font-outfit",children:"Don Neto Assistant"}),l.jsx("span",{className:"text-[10px] text-green-200",children:"Online"})]})]}),l.jsxs("div",{className:"flex-1 p-4 bg-[#0b141a]/95 overflow-y-auto space-y-3.5 scrollbar-thin",children:[fe.map((P,S)=>l.jsx("div",{className:`flex ${P.sender==="user"?"justify-end":"justify-start"}`,children:l.jsx("div",{className:`p-3 rounded-2xl text-xs max-w-[85%] font-medium relative shadow ${P.sender==="user"?"bg-[#005c4b] text-white rounded-tr-none":"bg-[#202c33] text-gray-200 rounded-tl-none"}`,children:P.text})},S)),Be&&l.jsx("div",{className:"flex justify-start",children:l.jsxs("div",{className:"p-3 bg-[#202c33] text-gray-400 rounded-2xl rounded-tl-none text-xs flex items-center gap-1",children:[l.jsx("span",{className:"w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"}),l.jsx("span",{className:"w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce",style:{animationDelay:"0.2s"}}),l.jsx("span",{className:"w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce",style:{animationDelay:"0.4s"}})]})})]}),l.jsx("div",{className:"px-4 py-2 bg-white/[0.01] border-t border-white/[0.04] flex flex-wrap gap-1.5",children:[{label:"📁 View Projects",val:"Show Projects"},{label:"🛠️ Core Stack",val:"Check Core Stack"},{label:"💼 Contact Info",val:"Hire Reynald"}].map((P,S)=>l.jsx("button",{type:"button",onClick:()=>J(P.val),className:"px-2.5 py-1 bg-white/5 border border-white/10 hover:border-indigo-500/30 rounded-full text-[10px] text-gray-300 transition-colors",children:P.label},S))}),l.jsxs("form",{onSubmit:P=>{P.preventDefault(),J(se)},className:"bg-[#1f2c34] p-3 flex items-center gap-2",children:[l.jsx("input",{type:"text",value:se,onChange:P=>le(P.target.value),placeholder:"Type a message...",className:"flex-1 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-2 text-xs text-white focus:outline-none placeholder:text-gray-400"}),l.jsx("button",{type:"submit",className:"w-8 h-8 rounded-full bg-[#00a884] hover:bg-[#008f72] flex items-center justify-center text-white text-xs transition-colors",children:l.jsx("i",{className:"fa-solid fa-paper-plane"})})]})]}),l.jsx("button",{onClick:()=>te(!W),className:"w-14 h-14 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 active:scale-95 transition-all shadow-green-600/20 z-40 relative animate-bounce","aria-label":"Chatbot Assistant",children:W?l.jsx("i",{className:"fa-solid fa-xmark"}):l.jsxs(l.Fragment,{children:[l.jsx("i",{className:"fab fa-whatsapp"}),l.jsx("span",{className:"absolute -top-1 -right-1 w-4.5 h-4.5 bg-red-500 rounded-full border-2 border-[#030712] flex items-center justify-center text-[9px] font-bold text-white animate-pulse",children:"1"})]})})]}),ee&&l.jsxs("div",{className:"fixed bottom-6 right-6 z-50 p-4 bg-[#0b141a] border border-[#202c33] text-gray-200 rounded-2xl text-xs font-mono max-w-sm shadow-2xl flex items-center gap-3 animate-slide-up",children:[l.jsx("div",{className:"w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-[10px]",children:l.jsx("i",{className:"fa-solid fa-bell"})}),l.jsx("span",{children:ee})]}),l.jsx("footer",{className:"border-t border-white/[0.08] bg-[var(--background)] text-[var(--foreground)] py-12 px-6 relative z-10",children:l.jsxs("div",{className:"max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left",children:[l.jsxs("div",{children:[l.jsxs("p",{className:"text-base font-bold font-outfit",children:["© ",new Date().getFullYear()," Reynald Abner Tananda"]}),l.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Crafted beautifully using Astro, React, & Tailwind CSS. Hosted on Vercel."})]}),l.jsxs("div",{className:"flex gap-4 text-xs text-gray-300 font-semibold font-mono",children:[l.jsx("span",{children:"Makassar, ID"}),l.jsx("span",{children:"•"}),l.jsx("span",{children:"Secured Dev"})]})]})})]})}export{Zp as P,Tl as _,l as j};
