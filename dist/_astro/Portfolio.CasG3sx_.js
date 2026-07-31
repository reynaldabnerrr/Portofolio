const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/index.B-g_RpYn.js","_astro/index.DUhCYmUb.js"])))=>i.map(i=>d[i]);
import{r as Sl,a as Fe,R as Co}from"./index.DUhCYmUb.js";const yl="modulepreload",El=function(i){return"/"+i},Ma={},wl=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let a=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),d=l?.nonce||l?.getAttribute("nonce");r=a(t.map(c=>{if(c=El(c),c in Ma)return;Ma[c]=!0;const h=c.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":yl,h||(u.as="script"),u.crossOrigin="",u.href=c,d&&u.setAttribute("nonce",d),document.head.appendChild(u),h)return new Promise((x,v)=>{u.addEventListener("load",x),u.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return r.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};var Tr={exports:{}},_i={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sa;function Tl(){if(Sa)return _i;Sa=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(n,r,s){var a=null;if(s!==void 0&&(a=""+s),r.key!==void 0&&(a=""+r.key),"key"in r){s={};for(var l in r)l!=="key"&&(s[l]=r[l])}else s=r;return r=s.ref,{$$typeof:i,type:n,key:a,ref:r!==void 0?r:null,props:s}}return _i.Fragment=e,_i.jsx=t,_i.jsxs=t,_i}var ya;function No(){return ya||(ya=1,Tr.exports=Tl()),Tr.exports}var o=No(),qn={},Ea;function Al(){if(Ea)return qn;Ea=1,Object.defineProperty(qn,"__esModule",{value:!0});var i=No(),e=Sl(),t=function(){return t=Object.assign||function(d){for(var c,h=1,f=arguments.length;h<f;h++)for(var u in c=arguments[h])Object.prototype.hasOwnProperty.call(c,u)&&(d[u]=c[u]);return d},t.apply(this,arguments)};function n(d,c){var h,f;switch(c.type){case"TYPE":return t(t({},d),{speed:c.speed,text:(h=c.payload)===null||h===void 0?void 0:h.substring(0,d.text.length+1)});case"DELAY":return t(t({},d),{speed:c.payload});case"DELETE":return t(t({},d),{speed:c.speed,text:(f=c.payload)===null||f===void 0?void 0:f.substring(0,d.text.length-1)});case"COUNT":return t(t({},d),{count:d.count+1});default:return d}}var r=function(d){var c=d.words,h=c===void 0?["Hello World!","This is","a simple Typewriter"]:c,f=d.loop,u=f===void 0?1:f,x=d.typeSpeed,v=x===void 0?80:x,S=d.deleteSpeed,m=S===void 0?50:S,p=d.delaySpeed,A=p===void 0?1500:p,R=d.onLoopDone,M=d.onType,E=d.onDelete,w=d.onDelay,C=e.useReducer(n,{speed:v,text:"",count:0}),_=C[0],T=_.speed,P=_.text,N=_.count,k=C[1],I=e.useRef(0),X=e.useRef(!1),B=e.useRef(!1),j=e.useRef(!1),H=e.useRef(!1),Z=e.useCallback((function(){var ie=N%h.length,ae=h[ie];B.current?(k({type:"DELETE",payload:ae,speed:m}),P===""&&(B.current=!1,k({type:"COUNT"}))):(k({type:"TYPE",payload:ae,speed:v}),j.current=!0,P===ae&&(k({type:"DELAY",payload:A}),j.current=!1,H.current=!0,setTimeout((function(){H.current=!1,B.current=!0}),A),u>0&&(I.current+=1,I.current/h.length===u&&(H.current=!1,X.current=!0)))),j.current&&M&&M(I.current),B.current&&E&&E(),H.current&&w&&w()}),[N,A,m,u,v,h,P,M,E,w]);return e.useEffect((function(){var ie=setTimeout(Z,T);return X.current&&clearTimeout(ie),function(){return clearTimeout(ie)}}),[Z,T]),e.useEffect((function(){R&&X.current&&R()}),[R]),[P,{isType:j.current,isDelay:H.current,isDelete:B.current,isDone:X.current}]},s="styles-module_blinkingCursor__yugAC",a="styles-module_blinking__9VXRT";(function(d,c){c===void 0&&(c={});var h=c.insertAt;if(typeof document<"u"){var f=document.head||document.getElementsByTagName("head")[0],u=document.createElement("style");u.type="text/css",h==="top"&&f.firstChild?f.insertBefore(u,f.firstChild):f.appendChild(u),u.styleSheet?u.styleSheet.cssText=d:u.appendChild(document.createTextNode(d))}})(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var l=e.memo((function(d){var c=d.cursorBlinking,h=c===void 0||c,f=d.cursorStyle,u=f===void 0?"|":f,x=d.cursorColor,v=x===void 0?"inherit":x;return i.jsx("span",t({style:{color:v},className:"".concat(s," ").concat(h?a:"")},{children:u}))}));return qn.Cursor=l,qn.Typewriter=function(d){var c=d.words,h=c===void 0?["Hello World!","This is","a simple Typewriter"]:c,f=d.loop,u=f===void 0?1:f,x=d.typeSpeed,v=x===void 0?80:x,S=d.deleteSpeed,m=S===void 0?50:S,p=d.delaySpeed,A=p===void 0?1500:p,R=d.cursor,M=R!==void 0&&R,E=d.cursorStyle,w=E===void 0?"|":E,C=d.cursorColor,_=C===void 0?"inherit":C,T=d.cursorBlinking,P=T===void 0||T,N=d.onLoopDone,k=d.onType,I=d.onDelay,X=d.onDelete,B=r({words:h,loop:u,typeSpeed:v,deleteSpeed:m,delaySpeed:A,onLoopDone:N,onType:k,onDelay:I,onDelete:X})[0];return i.jsxs(i.Fragment,{children:[i.jsx("span",{children:B}),M&&i.jsx(l,{cursorStyle:w,cursorColor:_,cursorBlinking:P})]})},qn.useTypewriter=r,qn}var Rl=Al();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qs="185",Cl=0,wa=1,Nl=2,or=1,Pl=2,Ti=3,Cn=0,Dt=1,hn=2,pn=0,li=1,Ta=2,Aa=3,Ra=4,Dl=5,On=100,Ll=101,Il=102,Ul=103,Fl=104,Ol=200,Bl=201,kl=202,zl=203,os=204,ls=205,Gl=206,Vl=207,Hl=208,Wl=209,jl=210,Xl=211,ql=212,Yl=213,$l=214,cs=0,ds=1,us=2,ui=3,hs=4,fs=5,ps=6,ms=7,Po=0,Kl=1,Zl=2,nn=0,Do=1,Lo=2,Io=3,Uo=4,Fo=5,Oo=6,Bo=7,ko=300,Gn=301,hi=302,Ar=303,Rr=304,vr=306,gs=1e3,fn=1001,xs=1002,bt=1003,Jl=1004,Fi=1005,wt=1006,Cr=1007,kn=1008,Ft=1009,zo=1010,Go=1011,Ci=1012,ea=1013,sn=1014,en=1015,gn=1016,ta=1017,na=1018,Ni=1020,Vo=35902,Ho=35899,Wo=1021,jo=1022,Xt=1023,xn=1026,zn=1027,Xo=1028,ia=1029,Vn=1030,ra=1031,sa=1033,lr=33776,cr=33777,dr=33778,ur=33779,_s=35840,vs=35841,bs=35842,Ms=35843,Ss=36196,ys=37492,Es=37496,ws=37488,Ts=37489,fr=37490,As=37491,Rs=37808,Cs=37809,Ns=37810,Ps=37811,Ds=37812,Ls=37813,Is=37814,Us=37815,Fs=37816,Os=37817,Bs=37818,ks=37819,zs=37820,Gs=37821,Vs=36492,Hs=36494,Ws=36495,js=36283,Xs=36284,pr=36285,qs=36286,Ql=3200,Ys=0,ec=1,An="",zt="srgb",mr="srgb-linear",gr="linear",Je="srgb",Yn=7680,Ca=519,tc=512,nc=513,ic=514,aa=515,rc=516,sc=517,oa=518,ac=519,Na=35044,Pa="300 es",tn=2e3,Pi=2001;function oc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lc(){const i=xr("canvas");return i.style.display="block",i}const Da={};function La(...i){const e="THREE."+i.shift();console.log(e,...i)}function qo(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function De(...i){i=qo(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function qe(...i){i=qo(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ci(...i){const e=i.join(" ");e in Da||(Da[e]=!0,De(...i))}function cc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const dc={[cs]:ds,[us]:ps,[hs]:ms,[ui]:fs,[ds]:cs,[ps]:us,[ms]:hs,[fs]:ui};class Wn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nr=Math.PI/180,$s=180/Math.PI;function Di(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function uc(i,e){return(i%e+e)%e}function Pr(i,e,t){return(1-t)*i+t*e}function vi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}class We{static{We.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,l){let d=n[r+0],c=n[r+1],h=n[r+2],f=n[r+3],u=s[a+0],x=s[a+1],v=s[a+2],S=s[a+3];if(f!==S||d!==u||c!==x||h!==v){let m=d*u+c*x+h*v+f*S;m<0&&(u=-u,x=-x,v=-v,S=-S,m=-m);let p=1-l;if(m<.9995){const A=Math.acos(m),R=Math.sin(A);p=Math.sin(p*A)/R,l=Math.sin(l*A)/R,d=d*p+u*l,c=c*p+x*l,h=h*p+v*l,f=f*p+S*l}else{d=d*p+u*l,c=c*p+x*l,h=h*p+v*l,f=f*p+S*l;const A=1/Math.sqrt(d*d+c*c+h*h+f*f);d*=A,c*=A,h*=A,f*=A}}e[t]=d,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const l=n[r],d=n[r+1],c=n[r+2],h=n[r+3],f=s[a],u=s[a+1],x=s[a+2],v=s[a+3];return e[t]=l*v+h*f+d*x-c*u,e[t+1]=d*v+h*u+c*f-l*x,e[t+2]=c*v+h*x+l*u-d*f,e[t+3]=h*v-l*f-d*u-c*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,d=Math.sin,c=l(n/2),h=l(r/2),f=l(s/2),u=d(n/2),x=d(r/2),v=d(s/2);switch(a){case"XYZ":this._x=u*h*f+c*x*v,this._y=c*x*f-u*h*v,this._z=c*h*v+u*x*f,this._w=c*h*f-u*x*v;break;case"YXZ":this._x=u*h*f+c*x*v,this._y=c*x*f-u*h*v,this._z=c*h*v-u*x*f,this._w=c*h*f+u*x*v;break;case"ZXY":this._x=u*h*f-c*x*v,this._y=c*x*f+u*h*v,this._z=c*h*v+u*x*f,this._w=c*h*f-u*x*v;break;case"ZYX":this._x=u*h*f-c*x*v,this._y=c*x*f+u*h*v,this._z=c*h*v-u*x*f,this._w=c*h*f+u*x*v;break;case"YZX":this._x=u*h*f+c*x*v,this._y=c*x*f+u*h*v,this._z=c*h*v-u*x*f,this._w=c*h*f-u*x*v;break;case"XZY":this._x=u*h*f-c*x*v,this._y=c*x*f-u*h*v,this._z=c*h*v+u*x*f,this._w=c*h*f+u*x*v;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],l=t[5],d=t[9],c=t[2],h=t[6],f=t[10],u=n+l+f;if(u>0){const x=.5/Math.sqrt(u+1);this._w=.25/x,this._x=(h-d)*x,this._y=(s-c)*x,this._z=(a-r)*x}else if(n>l&&n>f){const x=2*Math.sqrt(1+n-l-f);this._w=(h-d)/x,this._x=.25*x,this._y=(r+a)/x,this._z=(s+c)/x}else if(l>f){const x=2*Math.sqrt(1+l-n-f);this._w=(s-c)/x,this._x=(r+a)/x,this._y=.25*x,this._z=(d+h)/x}else{const x=2*Math.sqrt(1+f-n-l);this._w=(a-r)/x,this._x=(s+c)/x,this._y=(d+h)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,l=t._x,d=t._y,c=t._z,h=t._w;return this._x=n*h+a*l+r*c-s*d,this._y=r*h+a*d+s*l-n*c,this._z=s*h+a*c+n*d-r*l,this._w=a*h-n*l-r*d-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,l=this.dot(e);l<0&&(n=-n,r=-r,s=-s,a=-a,l=-l);let d=1-t;if(l<.9995){const c=Math.acos(l),h=Math.sin(c);d=Math.sin(d*c)/h,t=Math.sin(t*c)/h,this._x=this._x*d+n*t,this._y=this._y*d+r*t,this._z=this._z*d+s*t,this._w=this._w*d+a*t,this._onChangeCallback()}else this._x=this._x*d+n*t,this._y=this._y*d+r*t,this._z=this._z*d+s*t,this._w=this._w*d+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{static{z.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ia.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ia.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,l=e.z,d=e.w,c=2*(a*r-l*n),h=2*(l*t-s*r),f=2*(s*n-a*t);return this.x=t+d*c+a*f-l*h,this.y=n+d*h+l*c-s*f,this.z=r+d*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,l=t.y,d=t.z;return this.x=r*d-s*l,this.y=s*a-n*d,this.z=n*l-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dr.copy(this).projectOnVector(e),this.sub(Dr)}reflect(e){return this.sub(Dr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dr=new z,Ia=new mi;class Ue{static{Ue.prototype.isMatrix3=!0}constructor(e,t,n,r,s,a,l,d,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,l,d,c)}set(e,t,n,r,s,a,l,d,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=t,h[4]=s,h[5]=d,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],l=n[3],d=n[6],c=n[1],h=n[4],f=n[7],u=n[2],x=n[5],v=n[8],S=r[0],m=r[3],p=r[6],A=r[1],R=r[4],M=r[7],E=r[2],w=r[5],C=r[8];return s[0]=a*S+l*A+d*E,s[3]=a*m+l*R+d*w,s[6]=a*p+l*M+d*C,s[1]=c*S+h*A+f*E,s[4]=c*m+h*R+f*w,s[7]=c*p+h*M+f*C,s[2]=u*S+x*A+v*E,s[5]=u*m+x*R+v*w,s[8]=u*p+x*M+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],d=e[6],c=e[7],h=e[8];return t*a*h-t*l*c-n*s*h+n*l*d+r*s*c-r*a*d}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],d=e[6],c=e[7],h=e[8],f=h*a-l*c,u=l*d-h*s,x=c*s-a*d,v=t*f+n*u+r*x;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=f*S,e[1]=(r*c-h*n)*S,e[2]=(l*n-r*a)*S,e[3]=u*S,e[4]=(h*t-r*d)*S,e[5]=(r*s-l*t)*S,e[6]=x*S,e[7]=(n*d-c*t)*S,e[8]=(a*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,l){const d=Math.cos(s),c=Math.sin(s);return this.set(n*d,n*c,-n*(d*a+c*l)+a+e,-r*c,r*d,-r*(-c*a+d*l)+l+t,0,0,1),this}scale(e,t){return ci("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lr.makeScale(e,t)),this}rotate(e){return ci("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lr.makeRotation(-e)),this}translate(e,t){return ci("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lr=new Ue,Ua=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fa=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hc(){const i={enabled:!0,workingColorSpace:mr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Je&&(r.r=mn(r.r),r.g=mn(r.g),r.b=mn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(r.r=di(r.r),r.g=di(r.g),r.b=di(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===An?gr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ci("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ci("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[mr]:{primaries:e,whitePoint:n,transfer:gr,toXYZ:Ua,fromXYZ:Fa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:Ua,fromXYZ:Fa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),i}const Ge=hc();function mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function di(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $n;class fc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$n===void 0&&($n=xr("canvas")),$n.width=e.width,$n.height=e.height;const r=$n.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=$n}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=mn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mn(t[n]/255)*255):t[n]=mn(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pc=0;class la{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pc++}),this.uuid=Di(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(Ir(r[a].image)):s.push(Ir(r[a]))}else s=Ir(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ir(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let mc=0;const Ur=new z;class Tt extends Wn{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=fn,r=fn,s=wt,a=kn,l=Xt,d=Ft,c=Tt.DEFAULT_ANISOTROPY,h=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mc++}),this.uuid=Di(),this.name="",this.source=new la(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=d,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ur).x}get height(){return this.source.getSize(Ur).y}get depth(){return this.source.getSize(Ur).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ko)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gs:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case xs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gs:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case xs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=ko;Tt.DEFAULT_ANISOTROPY=1;class st{static{st.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const d=e.elements,c=d[0],h=d[4],f=d[8],u=d[1],x=d[5],v=d[9],S=d[2],m=d[6],p=d[10];if(Math.abs(h-u)<.01&&Math.abs(f-S)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+S)<.1&&Math.abs(v+m)<.1&&Math.abs(c+x+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,M=(x+1)/2,E=(p+1)/2,w=(h+u)/4,C=(f+S)/4,_=(v+m)/4;return R>M&&R>E?R<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(R),r=w/n,s=C/n):M>E?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=w/r,s=_/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=C/s,r=_/s),this.set(n,r,s,t),this}let A=Math.sqrt((m-v)*(m-v)+(f-S)*(f-S)+(u-h)*(u-h));return Math.abs(A)<.001&&(A=1),this.x=(m-v)/A,this.y=(f-S)/A,this.z=(u-h)/A,this.w=Math.acos((c+x+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gc extends Wn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Tt(r),a=n.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new la(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rn extends gc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yo extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xc extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rt{static{rt.prototype.isMatrix4=!0}constructor(e,t,n,r,s,a,l,d,c,h,f,u,x,v,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,l,d,c,h,f,u,x,v,S,m)}set(e,t,n,r,s,a,l,d,c,h,f,u,x,v,S,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=l,p[13]=d,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=x,p[7]=v,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Kn.setFromMatrixColumn(e,0).length(),s=1/Kn.setFromMatrixColumn(e,1).length(),a=1/Kn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),l=Math.sin(n),d=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=a*h,x=a*f,v=l*h,S=l*f;t[0]=d*h,t[4]=-d*f,t[8]=c,t[1]=x+v*c,t[5]=u-S*c,t[9]=-l*d,t[2]=S-u*c,t[6]=v+x*c,t[10]=a*d}else if(e.order==="YXZ"){const u=d*h,x=d*f,v=c*h,S=c*f;t[0]=u+S*l,t[4]=v*l-x,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-l,t[2]=x*l-v,t[6]=S+u*l,t[10]=a*d}else if(e.order==="ZXY"){const u=d*h,x=d*f,v=c*h,S=c*f;t[0]=u-S*l,t[4]=-a*f,t[8]=v+x*l,t[1]=x+v*l,t[5]=a*h,t[9]=S-u*l,t[2]=-a*c,t[6]=l,t[10]=a*d}else if(e.order==="ZYX"){const u=a*h,x=a*f,v=l*h,S=l*f;t[0]=d*h,t[4]=v*c-x,t[8]=u*c+S,t[1]=d*f,t[5]=S*c+u,t[9]=x*c-v,t[2]=-c,t[6]=l*d,t[10]=a*d}else if(e.order==="YZX"){const u=a*d,x=a*c,v=l*d,S=l*c;t[0]=d*h,t[4]=S-u*f,t[8]=v*f+x,t[1]=f,t[5]=a*h,t[9]=-l*h,t[2]=-c*h,t[6]=x*f+v,t[10]=u-S*f}else if(e.order==="XZY"){const u=a*d,x=a*c,v=l*d,S=l*c;t[0]=d*h,t[4]=-f,t[8]=c*h,t[1]=u*f+S,t[5]=a*h,t[9]=x*f-v,t[2]=v*f-x,t[6]=l*h,t[10]=S*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_c,e,vc)}lookAt(e,t,n){const r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),Mn.crossVectors(n,It),Mn.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Mn.crossVectors(n,It)),Mn.normalize(),Oi.crossVectors(It,Mn),r[0]=Mn.x,r[4]=Oi.x,r[8]=It.x,r[1]=Mn.y,r[5]=Oi.y,r[9]=It.y,r[2]=Mn.z,r[6]=Oi.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],l=n[4],d=n[8],c=n[12],h=n[1],f=n[5],u=n[9],x=n[13],v=n[2],S=n[6],m=n[10],p=n[14],A=n[3],R=n[7],M=n[11],E=n[15],w=r[0],C=r[4],_=r[8],T=r[12],P=r[1],N=r[5],k=r[9],I=r[13],X=r[2],B=r[6],j=r[10],H=r[14],Z=r[3],ie=r[7],ae=r[11],oe=r[15];return s[0]=a*w+l*P+d*X+c*Z,s[4]=a*C+l*N+d*B+c*ie,s[8]=a*_+l*k+d*j+c*ae,s[12]=a*T+l*I+d*H+c*oe,s[1]=h*w+f*P+u*X+x*Z,s[5]=h*C+f*N+u*B+x*ie,s[9]=h*_+f*k+u*j+x*ae,s[13]=h*T+f*I+u*H+x*oe,s[2]=v*w+S*P+m*X+p*Z,s[6]=v*C+S*N+m*B+p*ie,s[10]=v*_+S*k+m*j+p*ae,s[14]=v*T+S*I+m*H+p*oe,s[3]=A*w+R*P+M*X+E*Z,s[7]=A*C+R*N+M*B+E*ie,s[11]=A*_+R*k+M*j+E*ae,s[15]=A*T+R*I+M*H+E*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],l=e[5],d=e[9],c=e[13],h=e[2],f=e[6],u=e[10],x=e[14],v=e[3],S=e[7],m=e[11],p=e[15],A=d*x-c*u,R=l*x-c*f,M=l*u-d*f,E=a*x-c*h,w=a*u-d*h,C=a*f-l*h;return t*(S*A-m*R+p*M)-n*(v*A-m*E+p*w)+r*(v*R-S*E+p*C)-s*(v*M-S*w+m*C)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],l=e[9],d=e[2],c=e[6],h=e[10];return t*(a*h-l*c)-n*(s*h-l*d)+r*(s*c-a*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],d=e[6],c=e[7],h=e[8],f=e[9],u=e[10],x=e[11],v=e[12],S=e[13],m=e[14],p=e[15],A=t*l-n*a,R=t*d-r*a,M=t*c-s*a,E=n*d-r*l,w=n*c-s*l,C=r*c-s*d,_=h*S-f*v,T=h*m-u*v,P=h*p-x*v,N=f*m-u*S,k=f*p-x*S,I=u*p-x*m,X=A*I-R*k+M*N+E*P-w*T+C*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/X;return e[0]=(l*I-d*k+c*N)*B,e[1]=(r*k-n*I-s*N)*B,e[2]=(S*C-m*w+p*E)*B,e[3]=(u*w-f*C-x*E)*B,e[4]=(d*P-a*I-c*T)*B,e[5]=(t*I-r*P+s*T)*B,e[6]=(m*M-v*C-p*R)*B,e[7]=(h*C-u*M+x*R)*B,e[8]=(a*k-l*P+c*_)*B,e[9]=(n*P-t*k-s*_)*B,e[10]=(v*w-S*M+p*A)*B,e[11]=(f*M-h*w-x*A)*B,e[12]=(l*T-a*N-d*_)*B,e[13]=(t*N-n*T+r*_)*B,e[14]=(S*R-v*E-m*A)*B,e[15]=(h*E-f*R+u*A)*B,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,l=e.y,d=e.z,c=s*a,h=s*l;return this.set(c*a+n,c*l-r*d,c*d+r*l,0,c*l+r*d,h*l+n,h*d-r*a,0,c*d-r*l,h*d+r*a,s*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,l=t._z,d=t._w,c=s+s,h=a+a,f=l+l,u=s*c,x=s*h,v=s*f,S=a*h,m=a*f,p=l*f,A=d*c,R=d*h,M=d*f,E=n.x,w=n.y,C=n.z;return r[0]=(1-(S+p))*E,r[1]=(x+M)*E,r[2]=(v-R)*E,r[3]=0,r[4]=(x-M)*w,r[5]=(1-(u+p))*w,r[6]=(m+A)*w,r[7]=0,r[8]=(v+R)*C,r[9]=(m-A)*C,r[10]=(1-(u+S))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Kn.set(r[0],r[1],r[2]).length();const l=Kn.set(r[4],r[5],r[6]).length(),d=Kn.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Vt.copy(this);const c=1/a,h=1/l,f=1/d;return Vt.elements[0]*=c,Vt.elements[1]*=c,Vt.elements[2]*=c,Vt.elements[4]*=h,Vt.elements[5]*=h,Vt.elements[6]*=h,Vt.elements[8]*=f,Vt.elements[9]*=f,Vt.elements[10]*=f,t.setFromRotationMatrix(Vt),n.x=a,n.y=l,n.z=d,this}makePerspective(e,t,n,r,s,a,l=tn,d=!1){const c=this.elements,h=2*s/(t-e),f=2*s/(n-r),u=(t+e)/(t-e),x=(n+r)/(n-r);let v,S;if(d)v=s/(a-s),S=a*s/(a-s);else if(l===tn)v=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(l===Pi)v=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=x,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,l=tn,d=!1){const c=this.elements,h=2/(t-e),f=2/(n-r),u=-(t+e)/(t-e),x=-(n+r)/(n-r);let v,S;if(d)v=1/(a-s),S=a/(a-s);else if(l===tn)v=-2/(a-s),S=-(a+s)/(a-s);else if(l===Pi)v=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=x,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Kn=new z,Vt=new rt,_c=new z(0,0,0),vc=new z(1,1,1),Mn=new z,Oi=new z,It=new z,Oa=new rt,Ba=new mi;class Nn{constructor(e=0,t=0,n=0,r=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],l=r[8],d=r[1],c=r[5],h=r[9],f=r[2],u=r[6],x=r[10];switch(t){case"XYZ":this._y=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,x),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,x),this._z=Math.atan2(d,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,x),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(d,s));break;case"ZYX":this._y=Math.asin(-Ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,x),this._z=Math.atan2(d,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(l,x));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,x),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Oa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ba.setFromEuler(this),this.setFromQuaternion(Ba,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class $o{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bc=0;const ka=new z,Zn=new mi,on=new rt,Bi=new z,bi=new z,Mc=new z,Sc=new mi,za=new z(1,0,0),Ga=new z(0,1,0),Va=new z(0,0,1),Ha={type:"added"},yc={type:"removed"},Jn={type:"childadded",child:null},Fr={type:"childremoved",child:null};class Mt extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new z,t=new Nn,n=new mi,r=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new Ue}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.premultiply(Zn),this}rotateX(e){return this.rotateOnAxis(za,e)}rotateY(e){return this.rotateOnAxis(Ga,e)}rotateZ(e){return this.rotateOnAxis(Va,e)}translateOnAxis(e,t){return ka.copy(e).applyQuaternion(this.quaternion),this.position.add(ka.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(za,e)}translateY(e){return this.translateOnAxis(Ga,e)}translateZ(e){return this.translateOnAxis(Va,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bi.copy(e):Bi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(bi,Bi,this.up):on.lookAt(Bi,bi,this.up),this.quaternion.setFromRotationMatrix(on),r&&(on.extractRotation(r.matrixWorld),Zn.setFromRotationMatrix(on),this.quaternion.premultiply(Zn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ha),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yc),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ha),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,e,Mc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,Sc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,d){return l[d.uuid]===void 0&&(l[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const d=l.shapes;if(Array.isArray(d))for(let c=0,h=d.length;c<h;c++){const f=d[c];s(e.shapes,f)}else s(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let d=0,c=this.material.length;d<c;d++)l.push(s(e.materials,this.material[d]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const d=this.animations[l];r.animations.push(s(e.animations,d))}}if(t){const l=a(e.geometries),d=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),x=a(e.animations),v=a(e.nodes);l.length>0&&(n.geometries=l),d.length>0&&(n.materials=d),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),x.length>0&&(n.animations=x),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(l){const d=[];for(const c in l){const h=l[c];delete h.metadata,d.push(h)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Mt.DEFAULT_UP=new z(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ki extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ec={type:"move"};class Or{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const l=this._targetRay,d=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),x=.02,v=.005;c.inputState.pinching&&u>x+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=x-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Ec)))}return l!==null&&(l.visible=r!==null),d!==null&&(d.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ki;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ko={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},zi={h:0,s:0,l:0};function Br(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ge.workingColorSpace){if(e=uc(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Br(a,s,e+1/3),this.g=Br(a,s,e),this.b=Br(a,s,e-1/3)}return Ge.colorSpaceToWorking(this,r),this}setStyle(e,t=zt){function n(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=Ko[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mn(e.r),this.g=mn(e.g),this.b=mn(e.b),this}copyLinearToSRGB(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Ge.workingToColorSpace(Et.copy(this),e),Math.round(Ve(Et.r*255,0,255))*65536+Math.round(Ve(Et.g*255,0,255))*256+Math.round(Ve(Et.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(Et.copy(this),t);const n=Et.r,r=Et.g,s=Et.b,a=Math.max(n,r,s),l=Math.min(n,r,s);let d,c;const h=(l+a)/2;if(l===a)d=0,c=0;else{const f=a-l;switch(c=h<=.5?f/(a+l):f/(2-a-l),a){case n:d=(r-s)/f+(r<s?6:0);break;case r:d=(s-n)/f+2;break;case s:d=(n-r)/f+4;break}d/=6}return e.h=d,e.s=c,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=zt){Ge.workingToColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,r=Et.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Sn),this.setHSL(Sn.h+e,Sn.s+t,Sn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(zi);const n=Pr(Sn.h,zi.h,t),r=Pr(Sn.s,zi.s,t),s=Pr(Sn.l,zi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new He;He.NAMES=Ko;class wc extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ht=new z,ln=new z,kr=new z,cn=new z,Qn=new z,ei=new z,Wa=new z,zr=new z,Gr=new z,Vr=new z,Hr=new st,Wr=new st,jr=new st;class jt{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ht.subVectors(e,t),r.cross(Ht);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ht.subVectors(r,t),ln.subVectors(n,t),kr.subVectors(e,t);const a=Ht.dot(Ht),l=Ht.dot(ln),d=Ht.dot(kr),c=ln.dot(ln),h=ln.dot(kr),f=a*c-l*l;if(f===0)return s.set(0,0,0),null;const u=1/f,x=(c*d-l*h)*u,v=(a*h-l*d)*u;return s.set(1-x-v,v,x)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(e,t,n,r,s,a,l,d){return this.getBarycoord(e,t,n,r,cn)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(s,cn.x),d.addScaledVector(a,cn.y),d.addScaledVector(l,cn.z),d)}static getInterpolatedAttribute(e,t,n,r,s,a){return Hr.setScalar(0),Wr.setScalar(0),jr.setScalar(0),Hr.fromBufferAttribute(e,t),Wr.fromBufferAttribute(e,n),jr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Hr,s.x),a.addScaledVector(Wr,s.y),a.addScaledVector(jr,s.z),a}static isFrontFacing(e,t,n,r){return Ht.subVectors(n,t),ln.subVectors(e,t),Ht.cross(ln).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Ht.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,l;Qn.subVectors(r,n),ei.subVectors(s,n),zr.subVectors(e,n);const d=Qn.dot(zr),c=ei.dot(zr);if(d<=0&&c<=0)return t.copy(n);Gr.subVectors(e,r);const h=Qn.dot(Gr),f=ei.dot(Gr);if(h>=0&&f<=h)return t.copy(r);const u=d*f-h*c;if(u<=0&&d>=0&&h<=0)return a=d/(d-h),t.copy(n).addScaledVector(Qn,a);Vr.subVectors(e,s);const x=Qn.dot(Vr),v=ei.dot(Vr);if(v>=0&&x<=v)return t.copy(s);const S=x*c-d*v;if(S<=0&&c>=0&&v<=0)return l=c/(c-v),t.copy(n).addScaledVector(ei,l);const m=h*v-x*f;if(m<=0&&f-h>=0&&x-v>=0)return Wa.subVectors(s,r),l=(f-h)/(f-h+(x-v)),t.copy(r).addScaledVector(Wa,l);const p=1/(m+S+u);return a=S*p,l=u*p,t.copy(n).addScaledVector(Qn,a).addScaledVector(ei,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Li{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Wt):Wt.fromBufferAttribute(s,a),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gi.copy(n.boundingBox)),Gi.applyMatrix4(e.matrixWorld),this.union(Gi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mi),Vi.subVectors(this.max,Mi),ti.subVectors(e.a,Mi),ni.subVectors(e.b,Mi),ii.subVectors(e.c,Mi),yn.subVectors(ni,ti),En.subVectors(ii,ni),Dn.subVectors(ti,ii);let t=[0,-yn.z,yn.y,0,-En.z,En.y,0,-Dn.z,Dn.y,yn.z,0,-yn.x,En.z,0,-En.x,Dn.z,0,-Dn.x,-yn.y,yn.x,0,-En.y,En.x,0,-Dn.y,Dn.x,0];return!Xr(t,ti,ni,ii,Vi)||(t=[1,0,0,0,1,0,0,0,1],!Xr(t,ti,ni,ii,Vi))?!1:(Hi.crossVectors(yn,En),t=[Hi.x,Hi.y,Hi.z],Xr(t,ti,ni,ii,Vi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const dn=[new z,new z,new z,new z,new z,new z,new z,new z],Wt=new z,Gi=new Li,ti=new z,ni=new z,ii=new z,yn=new z,En=new z,Dn=new z,Mi=new z,Vi=new z,Hi=new z,Ln=new z;function Xr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Ln.fromArray(i,s);const l=r.x*Math.abs(Ln.x)+r.y*Math.abs(Ln.y)+r.z*Math.abs(Ln.z),d=e.dot(Ln),c=t.dot(Ln),h=n.dot(Ln);if(Math.max(-Math.max(d,c,h),Math.min(d,c,h))>l)return!1}return!0}const ft=new z,Wi=new We;let Tc=0;class qt extends Wn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Na,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wi.fromBufferAttribute(this,t),Wi.applyMatrix3(e),this.setXY(t,Wi.x,Wi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),r=Nt(r,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Na&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Zo extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jo extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Rt extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Ac=new Li,Si=new z,qr=new z;class br{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ac.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Si.subVectors(e,this.center);const t=Si.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Si,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Si.copy(e.center).add(qr)),this.expandByPoint(Si.copy(e.center).sub(qr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Rc=0;const kt=new rt,Yr=new Mt,ri=new z,Ut=new Li,yi=new Li,_t=new z;class Ot extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oc(e)?Jo:Zo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ue().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,n){return kt.makeTranslation(e,t,n),this.applyMatrix4(kt),this}scale(e,t,n){return kt.makeScale(e,t,n),this.applyMatrix4(kt),this}lookAt(e){return Yr.lookAt(e),Yr.updateMatrix(),this.applyMatrix4(Yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Rt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ut.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];yi.setFromBufferAttribute(l),this.morphTargetsRelative?(_t.addVectors(Ut.min,yi.min),Ut.expandByPoint(_t),_t.addVectors(Ut.max,yi.max),Ut.expandByPoint(_t)):(Ut.expandByPoint(yi.min),Ut.expandByPoint(yi.max))}Ut.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(_t));if(t)for(let s=0,a=t.length;s<a;s++){const l=t[s],d=this.morphTargetsRelative;for(let c=0,h=l.count;c<h;c++)_t.fromBufferAttribute(l,c),d&&(ri.fromBufferAttribute(e,c),_t.add(ri)),r=Math.max(r,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new qt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const l=[],d=[];for(let _=0;_<n.count;_++)l[_]=new z,d[_]=new z;const c=new z,h=new z,f=new z,u=new We,x=new We,v=new We,S=new z,m=new z;function p(_,T,P){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,P),u.fromBufferAttribute(s,_),x.fromBufferAttribute(s,T),v.fromBufferAttribute(s,P),h.sub(c),f.sub(c),x.sub(u),v.sub(u);const N=1/(x.x*v.y-v.x*x.y);isFinite(N)&&(S.copy(h).multiplyScalar(v.y).addScaledVector(f,-x.y).multiplyScalar(N),m.copy(f).multiplyScalar(x.x).addScaledVector(h,-v.x).multiplyScalar(N),l[_].add(S),l[T].add(S),l[P].add(S),d[_].add(m),d[T].add(m),d[P].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let _=0,T=A.length;_<T;++_){const P=A[_],N=P.start,k=P.count;for(let I=N,X=N+k;I<X;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const R=new z,M=new z,E=new z,w=new z;function C(_){E.fromBufferAttribute(r,_),w.copy(E);const T=l[_];R.copy(T),R.sub(E.multiplyScalar(E.dot(T))).normalize(),M.crossVectors(w,T);const N=M.dot(d[_])<0?-1:1;a.setXYZW(_,R.x,R.y,R.z,N)}for(let _=0,T=A.length;_<T;++_){const P=A[_],N=P.start,k=P.count;for(let I=N,X=N+k;I<X;I+=3)C(e.getX(I+0)),C(e.getX(I+1)),C(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,x=n.count;u<x;u++)n.setXYZ(u,0,0,0);const r=new z,s=new z,a=new z,l=new z,d=new z,c=new z,h=new z,f=new z;if(e)for(let u=0,x=e.count;u<x;u+=3){const v=e.getX(u+0),S=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),l.fromBufferAttribute(n,v),d.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),l.add(h),d.add(h),c.add(h),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(S,d.x,d.y,d.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,x=t.count;u<x;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(l,d){const c=l.array,h=l.itemSize,f=l.normalized,u=new c.constructor(d.length*h);let x=0,v=0;for(let S=0,m=d.length;S<m;S++){l.isInterleavedBufferAttribute?x=d[S]*l.data.stride+l.offset:x=d[S]*h;for(let p=0;p<h;p++)u[v++]=c[x++]}return new qt(u,h,f)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,r=this.attributes;for(const l in r){const d=r[l],c=e(d,n);t.setAttribute(l,c)}const s=this.morphAttributes;for(const l in s){const d=[],c=s[l];for(let h=0,f=c.length;h<f;h++){const u=c[h],x=e(u,n);d.push(x)}t.morphAttributes[l]=d}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,d=a.length;l<d;l++){const c=a[l];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const c in d)d[c]!==void 0&&(e[c]=d[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const c=n[d];e.data.attributes[d]=c.toJSON(e.data)}const r={};let s=!1;for(const d in this.morphAttributes){const c=this.morphAttributes[d],h=[];for(let f=0,u=c.length;f<u;f++){const x=c[f];h.push(x.toJSON(e.data))}h.length>0&&(r[d]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let u=0,x=f.length;u<x;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Cc=0;class gi extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=li,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=os,this.blendDst=ls,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ca,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==os&&(n.blendSrc=this.blendSrc),this.blendDst!==ls&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ca&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const l in s){const d=s[l];delete d.metadata,a.push(d)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new We().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new We().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const un=new z,$r=new z,ji=new z,wn=new z,Kr=new z,Xi=new z,Zr=new z;class Qo{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){$r.copy(e).add(t).multiplyScalar(.5),ji.copy(t).sub(e).normalize(),wn.copy(this.origin).sub($r);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ji),l=wn.dot(this.direction),d=-wn.dot(ji),c=wn.lengthSq(),h=Math.abs(1-a*a);let f,u,x,v;if(h>0)if(f=a*d-l,u=a*l-d,v=s*h,f>=0)if(u>=-v)if(u<=v){const S=1/h;f*=S,u*=S,x=f*(f+a*u+2*l)+u*(a*f+u+2*d)+c}else u=s,f=Math.max(0,-(a*u+l)),x=-f*f+u*(u+2*d)+c;else u=-s,f=Math.max(0,-(a*u+l)),x=-f*f+u*(u+2*d)+c;else u<=-v?(f=Math.max(0,-(-a*s+l)),u=f>0?-s:Math.min(Math.max(-s,-d),s),x=-f*f+u*(u+2*d)+c):u<=v?(f=0,u=Math.min(Math.max(-s,-d),s),x=u*(u+2*d)+c):(f=Math.max(0,-(a*s+l)),u=f>0?s:Math.min(Math.max(-s,-d),s),x=-f*f+u*(u+2*d)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+l)),x=-f*f+u*(u+2*d)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy($r).addScaledVector(ji,u),x}intersectSphere(e,t){un.subVectors(e.center,this.origin);const n=un.dot(this.direction),r=un.dot(un)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=n-a,d=n+a;return d<0?null:l<0?this.at(d,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,l,d;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(l=(e.min.z-u.z)*f,d=(e.max.z-u.z)*f):(l=(e.max.z-u.z)*f,d=(e.min.z-u.z)*f),n>d||l>r)||((l>n||n!==n)&&(n=l),(d<r||r!==r)&&(r=d),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,n,r,s){Kr.subVectors(t,e),Xi.subVectors(n,e),Zr.crossVectors(Kr,Xi);let a=this.direction.dot(Zr),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;wn.subVectors(this.origin,e);const d=l*this.direction.dot(Xi.crossVectors(wn,Xi));if(d<0)return null;const c=l*this.direction.dot(Kr.cross(wn));if(c<0||d+c>a)return null;const h=-l*wn.dot(Zr);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ri extends gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ja=new rt,In=new Qo,qi=new br,Xa=new z,Yi=new z,$i=new z,Ki=new z,Jr=new z,Zi=new z,qa=new z,Ji=new z;class Pt extends Mt{constructor(e=new Ot,t=new Ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){Zi.set(0,0,0);for(let d=0,c=s.length;d<c;d++){const h=l[d],f=s[d];h!==0&&(Jr.fromBufferAttribute(f,e),a?Zi.addScaledVector(Jr,h):Zi.addScaledVector(Jr.sub(t),h))}t.add(Zi)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere),qi.applyMatrix4(s),In.copy(e.ray).recast(e.near),!(qi.containsPoint(In.origin)===!1&&(In.intersectSphere(qi,Xa)===null||In.origin.distanceToSquared(Xa)>(e.far-e.near)**2))&&(ja.copy(s).invert(),In.copy(e.ray).applyMatrix4(ja),!(n.boundingBox!==null&&In.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,In)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,l=s.index,d=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,x=s.drawRange;if(l!==null)if(Array.isArray(a))for(let v=0,S=u.length;v<S;v++){const m=u[v],p=a[m.materialIndex],A=Math.max(m.start,x.start),R=Math.min(l.count,Math.min(m.start+m.count,x.start+x.count));for(let M=A,E=R;M<E;M+=3){const w=l.getX(M),C=l.getX(M+1),_=l.getX(M+2);r=Qi(this,p,e,n,c,h,f,w,C,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,x.start),S=Math.min(l.count,x.start+x.count);for(let m=v,p=S;m<p;m+=3){const A=l.getX(m),R=l.getX(m+1),M=l.getX(m+2);r=Qi(this,a,e,n,c,h,f,A,R,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(d!==void 0)if(Array.isArray(a))for(let v=0,S=u.length;v<S;v++){const m=u[v],p=a[m.materialIndex],A=Math.max(m.start,x.start),R=Math.min(d.count,Math.min(m.start+m.count,x.start+x.count));for(let M=A,E=R;M<E;M+=3){const w=M,C=M+1,_=M+2;r=Qi(this,p,e,n,c,h,f,w,C,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,x.start),S=Math.min(d.count,x.start+x.count);for(let m=v,p=S;m<p;m+=3){const A=m,R=m+1,M=m+2;r=Qi(this,a,e,n,c,h,f,A,R,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Nc(i,e,t,n,r,s,a,l){let d;if(e.side===Dt?d=n.intersectTriangle(a,s,r,!0,l):d=n.intersectTriangle(r,s,a,e.side===Cn,l),d===null)return null;Ji.copy(l),Ji.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ji);return c<t.near||c>t.far?null:{distance:c,point:Ji.clone(),object:i}}function Qi(i,e,t,n,r,s,a,l,d,c){i.getVertexPosition(l,Yi),i.getVertexPosition(d,$i),i.getVertexPosition(c,Ki);const h=Nc(i,e,t,n,Yi,$i,Ki,qa);if(h){const f=new z;jt.getBarycoord(qa,Yi,$i,Ki,f),r&&(h.uv=jt.getInterpolatedAttribute(r,l,d,c,f,new We)),s&&(h.uv1=jt.getInterpolatedAttribute(s,l,d,c,f,new We)),a&&(h.normal=jt.getInterpolatedAttribute(a,l,d,c,f,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:l,b:d,c,normal:new z,materialIndex:0};jt.getNormal(Yi,$i,Ki,u.normal),h.face=u,h.barycoord=f}return h}class Pc extends Tt{constructor(e=null,t=1,n=1,r,s,a,l,d,c=bt,h=bt,f,u){super(null,a,l,d,c,h,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qr=new z,Dc=new z,Lc=new Ue;class Fn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Qr.subVectors(n,t).cross(Dc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Qr),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lc.getNormalMatrix(e),r=this.coplanarPoint(Qr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new br,Ic=new We(.5,.5),er=new z;class ca{constructor(e=new Fn,t=new Fn,n=new Fn,r=new Fn,s=new Fn,a=new Fn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tn,n=!1){const r=this.planes,s=e.elements,a=s[0],l=s[1],d=s[2],c=s[3],h=s[4],f=s[5],u=s[6],x=s[7],v=s[8],S=s[9],m=s[10],p=s[11],A=s[12],R=s[13],M=s[14],E=s[15];if(r[0].setComponents(c-a,x-h,p-v,E-A).normalize(),r[1].setComponents(c+a,x+h,p+v,E+A).normalize(),r[2].setComponents(c+l,x+f,p+S,E+R).normalize(),r[3].setComponents(c-l,x-f,p-S,E-R).normalize(),n)r[4].setComponents(d,u,m,M).normalize(),r[5].setComponents(c-d,x-u,p-m,E-M).normalize();else if(r[4].setComponents(c-d,x-u,p-m,E-M).normalize(),t===tn)r[5].setComponents(c+d,x+u,p+m,E+M).normalize();else if(t===Pi)r[5].setComponents(d,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(e){Un.center.set(0,0,0);const t=Ic.distanceTo(e.center);return Un.radius=.7071067811865476+t,Un.applyMatrix4(e.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(er.x=r.normal.x>0?e.max.x:e.min.x,er.y=r.normal.y>0?e.max.y:e.min.y,er.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class el extends gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ya=new rt,Ks=new Qo,tr=new br,nr=new z;class Uc extends Mt{constructor(e=new Ot,t=new el){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(r),tr.radius+=s,e.ray.intersectsSphere(tr)===!1)return;Ya.copy(r).invert(),Ks.copy(e.ray).applyMatrix4(Ya);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),d=l*l,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),x=Math.min(c.count,a.start+a.count);for(let v=u,S=x;v<S;v++){const m=c.getX(v);nr.fromBufferAttribute(f,m),$a(nr,m,d,r,e,t,this)}}else{const u=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let v=u,S=x;v<S;v++)nr.fromBufferAttribute(f,v),$a(nr,v,d,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function $a(i,e,t,n,r,s,a){const l=Ks.distanceSqToPoint(i);if(l<t){const d=new z;Ks.closestPointToPoint(i,d),d.applyMatrix4(n);const c=r.ray.origin.distanceTo(d);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(l),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class tl extends Tt{constructor(e=[],t=Gn,n,r,s,a,l,d,c,h){super(e,t,n,r,s,a,l,d,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fc extends Tt{constructor(e,t,n,r,s,a,l,d,c){super(e,t,n,r,s,a,l,d,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fi extends Tt{constructor(e,t,n=sn,r,s,a,l=bt,d=bt,c,h=xn,f=1){if(h!==xn&&h!==zn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,r,s,a,l,d,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new la(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Oc extends fi{constructor(e,t=sn,n=Gn,r,s,a=bt,l=bt,d,c=xn){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,r,s,a,l,d,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class nl extends Tt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hn extends Ot{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const d=[],c=[],h=[],f=[];let u=0,x=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(d),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(f,2));function v(S,m,p,A,R,M,E,w,C,_,T){const P=M/C,N=E/_,k=M/2,I=E/2,X=w/2,B=C+1,j=_+1;let H=0,Z=0;const ie=new z;for(let ae=0;ae<j;ae++){const oe=ae*N-I;for(let F=0;F<B;F++){const re=F*P-k;ie[S]=re*A,ie[m]=oe*R,ie[p]=X,c.push(ie.x,ie.y,ie.z),ie[S]=0,ie[m]=0,ie[p]=w>0?1:-1,h.push(ie.x,ie.y,ie.z),f.push(F/C),f.push(1-ae/_),H+=1}}for(let ae=0;ae<_;ae++)for(let oe=0;oe<C;oe++){const F=u+oe+B*ae,re=u+oe+B*(ae+1),Le=u+(oe+1)+B*(ae+1),ye=u+(oe+1)+B*ae;d.push(F,re,ye),d.push(re,Le,ye),Z+=6}l.addGroup(x,Z,T),x+=Z,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Mr extends Ot{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,l=Math.floor(n),d=Math.floor(r),c=l+1,h=d+1,f=e/l,u=t/d,x=[],v=[],S=[],m=[];for(let p=0;p<h;p++){const A=p*u-a;for(let R=0;R<c;R++){const M=R*f-s;v.push(M,-A,0),S.push(0,0,1),m.push(R/l),m.push(1-p/d)}}for(let p=0;p<d;p++)for(let A=0;A<l;A++){const R=A+c*p,M=A+c*(p+1),E=A+1+c*(p+1),w=A+1+c*p;x.push(R,M,w),x.push(M,E,w)}this.setIndex(x),this.setAttribute("position",new Rt(v,3)),this.setAttribute("normal",new Rt(S,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.width,e.height,e.widthSegments,e.heightSegments)}}class da extends Ot{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const d=Math.min(a+l,Math.PI);let c=0;const h=[],f=new z,u=new z,x=[],v=[],S=[],m=[];for(let p=0;p<=n;p++){const A=[],R=p/n,M=a+R*l,E=e*Math.cos(M),w=Math.sqrt(e*e-E*E);let C=0;p===0&&a===0?C=.5/t:p===n&&d===Math.PI&&(C=-.5/t);for(let _=0;_<=t;_++){const T=_/t,P=r+T*s;f.x=-w*Math.cos(P),f.y=E,f.z=w*Math.sin(P),v.push(f.x,f.y,f.z),u.copy(f).normalize(),S.push(u.x,u.y,u.z),m.push(T+C,1-R),A.push(c++)}h.push(A)}for(let p=0;p<n;p++)for(let A=0;A<t;A++){const R=h[p][A+1],M=h[p][A],E=h[p+1][A],w=h[p+1][A+1];(p!==0||a>0)&&x.push(R,M,w),(p!==n-1||d<Math.PI)&&x.push(M,E,w)}this.setIndex(x),this.setAttribute("position",new Rt(v,3)),this.setAttribute("normal",new Rt(S,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _r extends Ot{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:l},n=Math.floor(n),r=Math.floor(r);const d=[],c=[],h=[],f=[],u=new z,x=new z,v=new z;for(let S=0;S<=n;S++){const m=a+S/n*l;for(let p=0;p<=r;p++){const A=p/r*s;x.x=(e+t*Math.cos(m))*Math.cos(A),x.y=(e+t*Math.cos(m))*Math.sin(A),x.z=t*Math.sin(m),c.push(x.x,x.y,x.z),u.x=e*Math.cos(A),u.y=e*Math.sin(A),v.subVectors(x,u).normalize(),h.push(v.x,v.y,v.z),f.push(p/r),f.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=r;m++){const p=(r+1)*S+m-1,A=(r+1)*(S-1)+m-1,R=(r+1)*(S-1)+m,M=(r+1)*S+m;d.push(p,A,M),d.push(A,R,M)}this.setIndex(d),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function pi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Ka(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Ka(r[0])){const s=[];for(let a=0,l=r.length;a<l;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function At(i){const e={};for(let t=0;t<i.length;t++){const n=pi(i[t]);for(const r in n)e[r]=n[r]}return e}function Ka(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Bc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function il(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const kc={clone:pi,merge:At};var zc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zc,this.fragmentShader=Gc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pi(e.uniforms),this.uniformsGroups=Bc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new He().setHex(r.value);break;case"v2":this.uniforms[n].value=new We().fromArray(r.value);break;case"v3":this.uniforms[n].value=new z().fromArray(r.value);break;case"v4":this.uniforms[n].value=new st().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ue().fromArray(r.value);break;case"m4":this.uniforms[n].value=new rt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Vc extends an{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Za extends gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ys,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hc extends gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ql,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wc extends gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class rl extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const es=new rt,Ja=new z,Qa=new z;class jc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=Ft,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ca,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ja.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ja),Qa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qa),t.updateMatrixWorld(),es.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(es,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Pi||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(es)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ir=new z,rr=new mi,Zt=new z;class sl extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ir,rr,Zt),Zt.x===1&&Zt.y===1&&Zt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ir,rr,Zt.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ir,rr,Zt),Zt.x===1&&Zt.y===1&&Zt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ir,rr,Zt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new z,eo=new We,to=new We;class Gt extends sl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z)}getViewSize(e,t){return this.getViewBounds(e,eo,to),t.subVectors(to,eo)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const d=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/d,t-=a.offsetY*n/c,r*=a.width/d,n*=a.height/c}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ua extends sl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,l=r+t,d=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,l-=h*this.view.offsetY,d=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xc extends jc{constructor(){super(new ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class no extends rl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Xc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class qc extends rl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const si=-90,ai=1;class Yc extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gt(si,ai,e,t);r.layers=this.layers,this.add(r);const s=new Gt(si,ai,e,t);s.layers=this.layers,this.add(s);const a=new Gt(si,ai,e,t);a.layers=this.layers,this.add(a);const l=new Gt(si,ai,e,t);l.layers=this.layers,this.add(l);const d=new Gt(si,ai,e,t);d.layers=this.layers,this.add(d);const c=new Gt(si,ai,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,l,d]=t;for(const c of t)this.remove(c);if(e===tn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Pi)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,d,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,x),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class $c extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class al{static{al.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}}function io(i,e,t,n){const r=Kc(n);switch(t){case Wo:return i*e;case Xo:return i*e/r.components*r.byteLength;case ia:return i*e/r.components*r.byteLength;case Vn:return i*e*2/r.components*r.byteLength;case ra:return i*e*2/r.components*r.byteLength;case jo:return i*e*3/r.components*r.byteLength;case Xt:return i*e*4/r.components*r.byteLength;case sa:return i*e*4/r.components*r.byteLength;case lr:case cr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case dr:case ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vs:case Ms:return Math.max(i,16)*Math.max(e,8)/4;case _s:case bs:return Math.max(i,8)*Math.max(e,8)/2;case Ss:case ys:case ws:case Ts:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Es:case fr:case As:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cs:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ns:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ps:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ds:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ls:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Is:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Us:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fs:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Os:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Bs:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ks:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case zs:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Gs:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Vs:case Hs:case Ws:return Math.ceil(i/4)*Math.ceil(e/4)*16;case js:case Xs:return Math.ceil(i/4)*Math.ceil(e/4)*8;case pr:case qs:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kc(i){switch(i){case Ft:case zo:return{byteLength:1,components:1};case Ci:case Go:case gn:return{byteLength:2,components:1};case ta:case na:return{byteLength:2,components:4};case sn:case ea:case en:return{byteLength:4,components:1};case Vo:case Ho:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qs}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qs);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ol(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Zc(i){const e=new WeakMap;function t(l,d){const c=l.array,h=l.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(d,u),i.bufferData(d,c,h),l.onUploadCallback();let x;if(c instanceof Float32Array)x=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)x=i.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)x=i.SHORT;else if(c instanceof Uint32Array)x=i.UNSIGNED_INT;else if(c instanceof Int32Array)x=i.INT;else if(c instanceof Int8Array)x=i.BYTE;else if(c instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:x,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:f}}function n(l,d,c){const h=d.array,f=d.updateRanges;if(i.bindBuffer(c,l),f.length===0)i.bufferSubData(c,0,h);else{f.sort((x,v)=>x.start-v.start);let u=0;for(let x=1;x<f.length;x++){const v=f[u],S=f[x];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++u,f[u]=S)}f.length=u+1;for(let x=0,v=f.length;x<v;x++){const S=f[x];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const d=e.get(l);d&&(i.deleteBuffer(d.buffer),e.delete(l))}function a(l,d){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=e.get(l);if(c===void 0)e.set(l,t(l,d));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,l,d),c.version=l.version}}return{get:r,remove:s,update:a}}var Jc=`#ifdef USE_ALPHAHASH
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
#endif`,rd=`#ifdef USE_AOMAP
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
#endif`,sd=`#ifdef USE_AOMAP
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
#endif`,wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Td=`#ifdef USE_EMISSIVEMAP
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
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hd=`uniform bool receiveShadow;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$d=`PhysicalMaterial material;
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
#endif`,Kd=`uniform sampler2D dfgLUT;
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
#endif`,ru=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,su=`#ifdef USE_MAP
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
#endif`,wu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tu=`#ifdef OPAQUE
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
#endif`,Vu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hu=`#ifdef USE_SPECULARMAP
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
#endif`,$u=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
}`,rh=`#include <common>
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
}`,sh=`#if DEPTH_PACKING == 3200
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
}`,wh=`#define TOON
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
}`,Th=`uniform float size;
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
}`,ke={alphahash_fragment:Jc,alphahash_pars_fragment:Qc,alphamap_fragment:ed,alphamap_pars_fragment:td,alphatest_fragment:nd,alphatest_pars_fragment:id,aomap_fragment:rd,aomap_pars_fragment:sd,batching_pars_vertex:ad,batching_vertex:od,begin_vertex:ld,beginnormal_vertex:cd,bsdfs:dd,iridescence_fragment:ud,bumpmap_pars_fragment:hd,clipping_planes_fragment:fd,clipping_planes_pars_fragment:pd,clipping_planes_pars_vertex:md,clipping_planes_vertex:gd,color_fragment:xd,color_pars_fragment:_d,color_pars_vertex:vd,color_vertex:bd,common:Md,cube_uv_reflection_fragment:Sd,defaultnormal_vertex:yd,displacementmap_pars_vertex:Ed,displacementmap_vertex:wd,emissivemap_fragment:Td,emissivemap_pars_fragment:Ad,colorspace_fragment:Rd,colorspace_pars_fragment:Cd,envmap_fragment:Nd,envmap_common_pars_fragment:Pd,envmap_pars_fragment:Dd,envmap_pars_vertex:Ld,envmap_physical_pars_fragment:Wd,envmap_vertex:Id,fog_vertex:Ud,fog_pars_vertex:Fd,fog_fragment:Od,fog_pars_fragment:Bd,gradientmap_pars_fragment:kd,lightmap_pars_fragment:zd,lights_lambert_fragment:Gd,lights_lambert_pars_fragment:Vd,lights_pars_begin:Hd,lights_toon_fragment:jd,lights_toon_pars_fragment:Xd,lights_phong_fragment:qd,lights_phong_pars_fragment:Yd,lights_physical_fragment:$d,lights_physical_pars_fragment:Kd,lights_fragment_begin:Zd,lights_fragment_maps:Jd,lights_fragment_end:Qd,lightprobes_pars_fragment:eu,logdepthbuf_fragment:tu,logdepthbuf_pars_fragment:nu,logdepthbuf_pars_vertex:iu,logdepthbuf_vertex:ru,map_fragment:su,map_pars_fragment:au,map_particle_fragment:ou,map_particle_pars_fragment:lu,metalnessmap_fragment:cu,metalnessmap_pars_fragment:du,morphinstance_vertex:uu,morphcolor_vertex:hu,morphnormal_vertex:fu,morphtarget_pars_vertex:pu,morphtarget_vertex:mu,normal_fragment_begin:gu,normal_fragment_maps:xu,normal_pars_fragment:_u,normal_pars_vertex:vu,normal_vertex:bu,normalmap_pars_fragment:Mu,clearcoat_normal_fragment_begin:Su,clearcoat_normal_fragment_maps:yu,clearcoat_pars_fragment:Eu,iridescence_pars_fragment:wu,opaque_fragment:Tu,packing:Au,premultiplied_alpha_fragment:Ru,project_vertex:Cu,dithering_fragment:Nu,dithering_pars_fragment:Pu,roughnessmap_fragment:Du,roughnessmap_pars_fragment:Lu,shadowmap_pars_fragment:Iu,shadowmap_pars_vertex:Uu,shadowmap_vertex:Fu,shadowmask_pars_fragment:Ou,skinbase_vertex:Bu,skinning_pars_vertex:ku,skinning_vertex:zu,skinnormal_vertex:Gu,specularmap_fragment:Vu,specularmap_pars_fragment:Hu,tonemapping_fragment:Wu,tonemapping_pars_fragment:ju,transmission_fragment:Xu,transmission_pars_fragment:qu,uv_pars_fragment:Yu,uv_pars_vertex:$u,uv_vertex:Ku,worldpos_vertex:Zu,background_vert:Ju,background_frag:Qu,backgroundCube_vert:eh,backgroundCube_frag:th,cube_vert:nh,cube_frag:ih,depth_vert:rh,depth_frag:sh,distance_vert:ah,distance_frag:oh,equirect_vert:lh,equirect_frag:ch,linedashed_vert:dh,linedashed_frag:uh,meshbasic_vert:hh,meshbasic_frag:fh,meshlambert_vert:ph,meshlambert_frag:mh,meshmatcap_vert:gh,meshmatcap_frag:xh,meshnormal_vert:_h,meshnormal_frag:vh,meshphong_vert:bh,meshphong_frag:Mh,meshphysical_vert:Sh,meshphysical_frag:yh,meshtoon_vert:Eh,meshtoon_frag:wh,points_vert:Th,points_frag:Ah,shadow_vert:Rh,shadow_frag:Ch,sprite_vert:Nh,sprite_frag:Ph},me={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Qt={basic:{uniforms:At([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:At([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:At([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:At([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:At([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new He(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:At([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:At([me.points,me.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:At([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:At([me.common,me.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:At([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:At([me.sprite,me.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:At([me.common,me.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:At([me.lights,me.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Qt.physical={uniforms:At([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const sr={r:0,b:0,g:0},Dh=new rt,ll=new Ue;ll.set(-1,0,0,0,1,0,0,0,1);function Lh(i,e,t,n,r,s){const a=new He(0);let l=r===!0?0:1,d,c,h=null,f=0,u=null;function x(A){let R=A.isScene===!0?A.background:null;if(R&&R.isTexture){const M=A.backgroundBlurriness>0;R=e.get(R,M)}return R}function v(A){let R=!1;const M=x(A);M===null?m(a,l):M&&M.isColor&&(m(M,1),R=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(A,R){const M=x(R);M&&(M.isCubeTexture||M.mapping===vr)?(c===void 0&&(c=new Pt(new Hn(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:pi(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Dh.makeRotationFromEuler(R.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ll),c.material.toneMapped=Ge.getTransfer(M.colorSpace)!==Je,(h!==M||f!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,u=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(d===void 0&&(d=new Pt(new Mr(2,2),new an({name:"BackgroundMaterial",uniforms:pi(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(d)),d.material.uniforms.t2D.value=M,d.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,d.material.toneMapped=Ge.getTransfer(M.colorSpace)!==Je,M.matrixAutoUpdate===!0&&M.updateMatrix(),d.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||u!==i.toneMapping)&&(d.material.needsUpdate=!0,h=M,f=M.version,u=i.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null))}function m(A,R){A.getRGB(sr,il(i)),t.buffers.color.setClear(sr.r,sr.g,sr.b,R,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,R=1){a.set(A),l=R,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,m(a,l)},render:v,addToRenderList:S,dispose:p}}function Ih(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function l(N,k,I,X,B){let j=!1;const H=f(N,X,I,k);s!==H&&(s=H,c(s.object)),j=x(N,X,I,B),j&&v(N,X,I,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,M(N,k,I,X),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function d(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function f(N,k,I,X){const B=X.wireframe===!0;let j=n[k.id];j===void 0&&(j={},n[k.id]=j);const H=N.isInstancedMesh===!0?N.id:0;let Z=j[H];Z===void 0&&(Z={},j[H]=Z);let ie=Z[I.id];ie===void 0&&(ie={},Z[I.id]=ie);let ae=ie[B];return ae===void 0&&(ae=u(d()),ie[B]=ae),ae}function u(N){const k=[],I=[],X=[];for(let B=0;B<t;B++)k[B]=0,I[B]=0,X[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:I,attributeDivisors:X,object:N,attributes:{},index:null}}function x(N,k,I,X){const B=s.attributes,j=k.attributes;let H=0;const Z=I.getAttributes();for(const ie in Z)if(Z[ie].location>=0){const oe=B[ie];let F=j[ie];if(F===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(F=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(F=N.instanceColor)),oe===void 0||oe.attribute!==F||F&&oe.data!==F.data)return!0;H++}return s.attributesNum!==H||s.index!==X}function v(N,k,I,X){const B={},j=k.attributes;let H=0;const Z=I.getAttributes();for(const ie in Z)if(Z[ie].location>=0){let oe=j[ie];oe===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(oe=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(oe=N.instanceColor));const F={};F.attribute=oe,oe&&oe.data&&(F.data=oe.data),B[ie]=F,H++}s.attributes=B,s.attributesNum=H,s.index=X}function S(){const N=s.newAttributes;for(let k=0,I=N.length;k<I;k++)N[k]=0}function m(N){p(N,0)}function p(N,k){const I=s.newAttributes,X=s.enabledAttributes,B=s.attributeDivisors;I[N]=1,X[N]===0&&(i.enableVertexAttribArray(N),X[N]=1),B[N]!==k&&(i.vertexAttribDivisor(N,k),B[N]=k)}function A(){const N=s.newAttributes,k=s.enabledAttributes;for(let I=0,X=k.length;I<X;I++)k[I]!==N[I]&&(i.disableVertexAttribArray(I),k[I]=0)}function R(N,k,I,X,B,j,H){H===!0?i.vertexAttribIPointer(N,k,I,B,j):i.vertexAttribPointer(N,k,I,X,B,j)}function M(N,k,I,X){S();const B=X.attributes,j=I.getAttributes(),H=k.defaultAttributeValues;for(const Z in j){const ie=j[Z];if(ie.location>=0){let ae=B[Z];if(ae===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(ae=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(ae=N.instanceColor)),ae!==void 0){const oe=ae.normalized,F=ae.itemSize,re=e.get(ae);if(re===void 0)continue;const Le=re.buffer,ye=re.type,Y=re.bytesPerElement,J=ye===i.INT||ye===i.UNSIGNED_INT||ae.gpuType===ea;if(ae.isInterleavedBufferAttribute){const te=ae.data,le=te.stride,Se=ae.offset;if(te.isInstancedInterleavedBuffer){for(let ve=0;ve<ie.locationSize;ve++)p(ie.location+ve,te.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ve=0;ve<ie.locationSize;ve++)m(ie.location+ve);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let ve=0;ve<ie.locationSize;ve++)R(ie.location+ve,F/ie.locationSize,ye,oe,le*Y,(Se+F/ie.locationSize*ve)*Y,J)}else{if(ae.isInstancedBufferAttribute){for(let te=0;te<ie.locationSize;te++)p(ie.location+te,ae.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let te=0;te<ie.locationSize;te++)m(ie.location+te);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let te=0;te<ie.locationSize;te++)R(ie.location+te,F/ie.locationSize,ye,oe,F*Y,F/ie.locationSize*te*Y,J)}}else if(H!==void 0){const oe=H[Z];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(ie.location,oe);break;case 3:i.vertexAttrib3fv(ie.location,oe);break;case 4:i.vertexAttrib4fv(ie.location,oe);break;default:i.vertexAttrib1fv(ie.location,oe)}}}}A()}function E(){T();for(const N in n){const k=n[N];for(const I in k){const X=k[I];for(const B in X){const j=X[B];for(const H in j)h(j[H].object),delete j[H];delete X[B]}}delete n[N]}}function w(N){if(n[N.id]===void 0)return;const k=n[N.id];for(const I in k){const X=k[I];for(const B in X){const j=X[B];for(const H in j)h(j[H].object),delete j[H];delete X[B]}}delete n[N.id]}function C(N){for(const k in n){const I=n[k];for(const X in I){const B=I[X];if(B[N.id]===void 0)continue;const j=B[N.id];for(const H in j)h(j[H].object),delete j[H];delete B[N.id]}}}function _(N){for(const k in n){const I=n[k],X=N.isInstancedMesh===!0?N.id:0,B=I[X];if(B!==void 0){for(const j in B){const H=B[j];for(const Z in H)h(H[Z].object),delete H[Z];delete B[j]}delete I[X],Object.keys(I).length===0&&delete n[k]}}}function T(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:T,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:m,disableUnusedAttributes:A}}function Uh(i,e,t){let n;function r(d){n=d}function s(d,c){i.drawArrays(n,d,c),t.update(c,n,1)}function a(d,c,h){h!==0&&(i.drawArraysInstanced(n,d,c,h),t.update(c,n,h))}function l(d,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,c,0,h);let u=0;for(let x=0;x<h;x++)u+=c[x];t.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l}function Fh(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Xt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(C){const _=C===gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ft&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==en&&!_)}function d(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=d(c);h!==c&&(De("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:d,textureFormatReadable:a,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:x,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:R,maxFragmentUniforms:M,maxSamples:E,samples:w}}function Oh(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Fn,l=new Ue,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const x=f.length!==0||u||n!==0||r;return r=u,n=f.length,x},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,x){const v=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||v===null||v.length===0||s&&!m)s?h(null):c();else{const A=s?0:n,R=A*4;let M=p.clippingState||null;d.value=M,M=h(v,u,R,x);for(let E=0;E!==R;++E)M[E]=t[E];p.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=A}};function c(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,x,v){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=d.value,v!==!0||m===null){const p=x+S*4,A=u.matrixWorldInverse;l.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,M=x;R!==S;++R,M+=4)a.copy(f[R]).applyMatrix4(A,l),a.normal.toArray(m,M),m[M+3]=a.constant}d.value=m,d.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const Rn=4,ro=[.125,.215,.35,.446,.526,.582],Bn=20,Bh=256,Ei=new ua,so=new He;let ts=null,ns=0,is=0,rs=!1;const kh=new z;class ao{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:l=kh}=s;ts=this._renderer.getRenderTarget(),ns=this._renderer.getActiveCubeFace(),is=this._renderer.getActiveMipmapLevel(),rs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,n,r,d,l),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=co(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ts,ns,is),this._renderer.xr.enabled=rs,e.scissorTest=!1,oi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gn||e.mapping===hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ts=this._renderer.getRenderTarget(),ns=this._renderer.getActiveCubeFace(),is=this._renderer.getActiveMipmapLevel(),rs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:gn,format:Xt,colorSpace:mr,depthBuffer:!1},r=oo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oo(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zh(s)),this._blurMaterial=Vh(s,e,t),this._ggxMaterial=Gh(s,e,t)}return r}_compileMaterial(e){const t=new Pt(new Ot,e);this._renderer.compile(t,Ei)}_sceneToCubeUV(e,t,n,r,s){const d=new Gt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,x=f.toneMapping;f.getClearColor(so),f.toneMapping=nn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new Hn,new Ri({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let p=!1;const A=e.background;A?A.isColor&&(m.color.copy(A),e.background=null,p=!0):(m.color.copy(so),p=!0);for(let R=0;R<6;R++){const M=R%3;M===0?(d.up.set(0,c[R],0),d.position.set(s.x,s.y,s.z),d.lookAt(s.x+h[R],s.y,s.z)):M===1?(d.up.set(0,0,c[R]),d.position.set(s.x,s.y,s.z),d.lookAt(s.x,s.y+h[R],s.z)):(d.up.set(0,c[R],0),d.position.set(s.x,s.y,s.z),d.lookAt(s.x,s.y,s.z+h[R]));const E=this._cubeSize;oi(r,M*E,R>2?E:0,E,E),f.setRenderTarget(r),p&&f.render(S,d),f.render(e,d)}f.toneMapping=x,f.autoClear=u,e.background=A}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Gn||e.mapping===hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=co()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const l=s.uniforms;l.envMap.value=e;const d=this._cubeSize;oi(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(a,Ei)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;const d=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=0+c*1.25,x=f*u,{_lodMax:v}=this,S=this._sizeLods[n],m=3*S*(n>v-Rn?n-v+Rn:0),p=4*(this._cubeSize-S);d.envMap.value=e.texture,d.roughness.value=x,d.mipInt.value=v-t,oi(s,m,p,3*S,2*S),r.setRenderTarget(s),r.render(l,Ei),d.envMap.value=s.texture,d.roughness.value=0,d.mipInt.value=v-n,oi(e,m,p,3*S,2*S),r.setRenderTarget(e),r.render(l,Ei)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,l){const d=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&qe("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[r];f.material=c;const u=c.uniforms,x=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*x):2*Math.PI/(2*Bn-1),S=s/v,m=isFinite(s)?1+Math.floor(h*S):Bn;m>Bn&&De(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bn}`);const p=[];let A=0;for(let C=0;C<Bn;++C){const _=C/S,T=Math.exp(-_*_/2);p.push(T),C===0?A+=T:C<m&&(A+=2*T)}for(let C=0;C<p.length;C++)p[C]=p[C]/A;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",l&&(u.poleAxis.value=l);const{_lodMax:R}=this;u.dTheta.value=v,u.mipInt.value=R-n;const M=this._sizeLods[r],E=3*M*(r>R-Rn?r-R+Rn:0),w=4*(this._cubeSize-M);oi(t,E,w,3*M,2*M),d.setRenderTarget(t),d.render(f,Ei)}}function zh(i){const e=[],t=[],n=[];let r=i;const s=i-Rn+1+ro.length;for(let a=0;a<s;a++){const l=Math.pow(2,r);e.push(l);let d=1/l;a>i-Rn?d=ro[a-i+Rn-1]:a===0&&(d=0),t.push(d);const c=1/(l-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],x=6,v=6,S=3,m=2,p=1,A=new Float32Array(S*v*x),R=new Float32Array(m*v*x),M=new Float32Array(p*v*x);for(let w=0;w<x;w++){const C=w%3*2/3-1,_=w>2?0:-1,T=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];A.set(T,S*v*w),R.set(u,m*v*w);const P=[w,w,w,w,w,w];M.set(P,p*v*w)}const E=new Ot;E.setAttribute("position",new qt(A,S)),E.setAttribute("uv",new qt(R,m)),E.setAttribute("faceIndex",new qt(M,p)),n.push(new Pt(E,null)),r>Rn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function oo(i,e,t){const n=new rn(i,e,t);return n.texture.mapping=vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Gh(i,e,t){return new an({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bh,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sr(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Vh(i,e,t){const n=new Float32Array(Bn),r=new z(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Sr(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function lo(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sr(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function co(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Sr(){return`

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
	`}class cl extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new tl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Hn(5,5,5),s=new an({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:pn});s.uniforms.tEquirect.value=t;const a=new Pt(r,s),l=t.minFilter;return t.minFilter===kn&&(t.minFilter=wt),new Yc(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function Hh(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,x=!1){return u==null?null:x?a(u):s(u)}function s(u){if(u&&u.isTexture){const x=u.mapping;if(x===Ar||x===Rr)if(e.has(u)){const v=e.get(u).texture;return l(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const S=new cl(v.height);return S.fromEquirectangularTexture(i,u),e.set(u,S),u.addEventListener("dispose",c),l(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const x=u.mapping,v=x===Ar||x===Rr,S=x===Gn||x===hi;if(v||S){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new ao(i)),m=v?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const A=u.image;return v&&A&&A.height>0||S&&A&&d(A)?(n===null&&(n=new ao(i)),m=v?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function l(u,x){return x===Ar?u.mapping=Gn:x===Rr&&(u.mapping=hi),u}function d(u){let x=0;const v=6;for(let S=0;S<v;S++)u[S]!==void 0&&x++;return x===v}function c(u){const x=u.target;x.removeEventListener("dispose",c);const v=e.get(x);v!==void 0&&(e.delete(x),v.dispose())}function h(u){const x=u.target;x.removeEventListener("dispose",h);const v=t.get(x);v!==void 0&&(t.delete(x),v.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function Wh(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ci("WebGLRenderer: "+n+" extension not supported."),r}}}function jh(i,e,t,n){const r={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",a),delete r[u.id];const x=s.get(u);x&&(e.remove(x),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function l(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function d(f){const u=f.attributes;for(const x in u)e.update(u[x],i.ARRAY_BUFFER)}function c(f){const u=[],x=f.index,v=f.attributes.position;let S=0;if(v===void 0)return;if(x!==null){const A=x.array;S=x.version;for(let R=0,M=A.length;R<M;R+=3){const E=A[R+0],w=A[R+1],C=A[R+2];u.push(E,w,w,C,C,E)}}else{const A=v.array;S=v.version;for(let R=0,M=A.length/3-1;R<M;R+=3){const E=R+0,w=R+1,C=R+2;u.push(E,w,w,C,C,E)}}const m=new(v.count>=65535?Jo:Zo)(u,1);m.version=S;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function h(f){const u=s.get(f);if(u){const x=f.index;x!==null&&u.version<x.version&&c(f)}else c(f);return s.get(f)}return{get:l,update:d,getWireframeAttribute:h}}function Xh(i,e,t){let n;function r(f){n=f}let s,a;function l(f){s=f.type,a=f.bytesPerElement}function d(f,u){i.drawElements(n,u,s,f*a),t.update(u,n,1)}function c(f,u,x){x!==0&&(i.drawElementsInstanced(n,u,s,f*a,x),t.update(u,n,x))}function h(f,u,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,f,0,x);let S=0;for(let m=0;m<x;m++)S+=u[m];t.update(S,n,1)}this.setMode=r,this.setIndex=l,this.render=d,this.renderInstances=c,this.renderMultiDraw=h}function qh(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,l){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=l*(s/3);break;case i.LINES:t.lines+=l*(s/2);break;case i.LINE_STRIP:t.lines+=l*(s-1);break;case i.LINE_LOOP:t.lines+=l*s;break;case i.POINTS:t.points+=l*s;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Yh(i,e,t){const n=new WeakMap,r=new st;function s(a,l,d){const c=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(l);if(u===void 0||u.count!==f){let T=function(){C.dispose(),n.delete(l),l.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();const x=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,S=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],A=l.morphAttributes.color||[];let R=0;x===!0&&(R=1),v===!0&&(R=2),S===!0&&(R=3);let M=l.attributes.position.count*R,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const w=new Float32Array(M*E*4*f),C=new Yo(w,M,E,f);C.type=en,C.needsUpdate=!0;const _=R*4;for(let P=0;P<f;P++){const N=m[P],k=p[P],I=A[P],X=M*E*4*P;for(let B=0;B<N.count;B++){const j=B*_;x===!0&&(r.fromBufferAttribute(N,B),w[X+j+0]=r.x,w[X+j+1]=r.y,w[X+j+2]=r.z,w[X+j+3]=0),v===!0&&(r.fromBufferAttribute(k,B),w[X+j+4]=r.x,w[X+j+5]=r.y,w[X+j+6]=r.z,w[X+j+7]=0),S===!0&&(r.fromBufferAttribute(I,B),w[X+j+8]=r.x,w[X+j+9]=r.y,w[X+j+10]=r.z,w[X+j+11]=I.itemSize===4?r.w:1)}}u={count:f,texture:C,size:new We(M,E)},n.set(l,u),l.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let x=0;for(let S=0;S<c.length;S++)x+=c[S];const v=l.morphTargetsRelative?1:1-x;d.getUniforms().setValue(i,"morphTargetBaseInfluence",v),d.getUniforms().setValue(i,"morphTargetInfluences",c)}d.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function $h(i,e,t,n,r){let s=new WeakMap;function a(c){const h=r.render.frame,f=c.geometry,u=e.get(c,f);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",d)===!1&&c.addEventListener("dispose",d),s.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const x=c.skeleton;s.get(x)!==h&&(x.update(),s.set(x,h))}return u}function l(){s=new WeakMap}function d(c){const h=c.target;h.removeEventListener("dispose",d),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:l}}const Kh={[Do]:"LINEAR_TONE_MAPPING",[Lo]:"REINHARD_TONE_MAPPING",[Io]:"CINEON_TONE_MAPPING",[Uo]:"ACES_FILMIC_TONE_MAPPING",[Oo]:"AGX_TONE_MAPPING",[Bo]:"NEUTRAL_TONE_MAPPING",[Fo]:"CUSTOM_TONE_MAPPING"};function Zh(i,e,t,n,r,s){const a=new rn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,depthTexture:r?new fi(e,t):void 0}),l=new rn(e,t,{type:gn,depthBuffer:!1,stencilBuffer:!1}),d=new Ot;d.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Rt([0,2,0,0,2,0],2));const c=new Vc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Pt(d,c),f=new ua(-1,1,1,-1,0,1);let u=null,x=null,v=!1,S,m=null,p=[],A=!1;this.setSize=function(R,M){a.setSize(R,M),l.setSize(R,M);for(let E=0;E<p.length;E++){const w=p[E];w.setSize&&w.setSize(R,M)}},this.setEffects=function(R){p=R,A=p.length>0&&p[0].isRenderPass===!0;const M=a.width,E=a.height;for(let w=0;w<p.length;w++){const C=p[w];C.setSize&&C.setSize(M,E)}},this.begin=function(R,M){if(v||R.toneMapping===nn&&p.length===0)return!1;if(m=M,M!==null){const E=M.width,w=M.height;(a.width!==E||a.height!==w)&&this.setSize(E,w)}return A===!1&&R.setRenderTarget(a),S=R.toneMapping,R.toneMapping=nn,!0},this.hasRenderPass=function(){return A},this.end=function(R,M){R.toneMapping=S,v=!0;let E=a,w=l;for(let C=0;C<p.length;C++){const _=p[C];if(_.enabled!==!1&&(_.render(R,w,E,M),_.needsSwap!==!1)){const T=E;E=w,w=T}}if(u!==R.outputColorSpace||x!==R.toneMapping){u=R.outputColorSpace,x=R.toneMapping,c.defines={},Ge.getTransfer(u)===Je&&(c.defines.SRGB_TRANSFER="");const C=Kh[x];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,R.setRenderTarget(m),R.render(h,f),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),l.dispose(),d.dispose(),c.dispose()}}const dl=new Tt,Zs=new fi(1,1),ul=new Yo,hl=new xc,fl=new tl,uo=[],ho=[],fo=new Float32Array(16),po=new Float32Array(9),mo=new Float32Array(4);function xi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=uo[r];if(s===void 0&&(s=new Float32Array(r),uo[r]=s),e!==0){n.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=t,i[a].toArray(s,l)}return s}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yr(i,e){let t=ho[e];t===void 0&&(t=new Int32Array(e),ho[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Jh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Qh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),gt(t,e)}}function ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),gt(t,e)}}function tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),gt(t,e)}}function nf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;mo.set(n),i.uniformMatrix2fv(this.addr,!1,mo),gt(t,n)}}function rf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;po.set(n),i.uniformMatrix3fv(this.addr,!1,po),gt(t,n)}}function sf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;fo.set(n),i.uniformMatrix4fv(this.addr,!1,fo),gt(t,n)}}function af(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2iv(this.addr,e),gt(t,e)}}function lf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3iv(this.addr,e),gt(t,e)}}function cf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4iv(this.addr,e),gt(t,e)}}function df(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function uf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2uiv(this.addr,e),gt(t,e)}}function hf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3uiv(this.addr,e),gt(t,e)}}function ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4uiv(this.addr,e),gt(t,e)}}function pf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Zs.compareFunction=t.isReversedDepthBuffer()?oa:aa,s=Zs):s=dl,t.setTexture2D(e||s,r)}function mf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||hl,r)}function gf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||fl,r)}function xf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ul,r)}function _f(i){switch(i){case 5126:return Jh;case 35664:return Qh;case 35665:return ef;case 35666:return tf;case 35674:return nf;case 35675:return rf;case 35676:return sf;case 5124:case 35670:return af;case 35667:case 35671:return of;case 35668:case 35672:return lf;case 35669:case 35673:return cf;case 5125:return df;case 36294:return uf;case 36295:return hf;case 36296:return ff;case 35678:case 36198:case 36298:case 36306:case 35682:return pf;case 35679:case 36299:case 36307:return mf;case 35680:case 36300:case 36308:case 36293:return gf;case 36289:case 36303:case 36311:case 36292:return xf}}function vf(i,e){i.uniform1fv(this.addr,e)}function bf(i,e){const t=xi(e,this.size,2);i.uniform2fv(this.addr,t)}function Mf(i,e){const t=xi(e,this.size,3);i.uniform3fv(this.addr,t)}function Sf(i,e){const t=xi(e,this.size,4);i.uniform4fv(this.addr,t)}function yf(i,e){const t=xi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ef(i,e){const t=xi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wf(i,e){const t=xi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Tf(i,e){i.uniform1iv(this.addr,e)}function Af(i,e){i.uniform2iv(this.addr,e)}function Rf(i,e){i.uniform3iv(this.addr,e)}function Cf(i,e){i.uniform4iv(this.addr,e)}function Nf(i,e){i.uniform1uiv(this.addr,e)}function Pf(i,e){i.uniform2uiv(this.addr,e)}function Df(i,e){i.uniform3uiv(this.addr,e)}function Lf(i,e){i.uniform4uiv(this.addr,e)}function If(i,e,t){const n=this.cache,r=e.length,s=yr(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Zs:a=dl;for(let l=0;l!==r;++l)t.setTexture2D(e[l]||a,s[l])}function Uf(i,e,t){const n=this.cache,r=e.length,s=yr(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||hl,s[a])}function Ff(i,e,t){const n=this.cache,r=e.length,s=yr(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||fl,s[a])}function Of(i,e,t){const n=this.cache,r=e.length,s=yr(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ul,s[a])}function Bf(i){switch(i){case 5126:return vf;case 35664:return bf;case 35665:return Mf;case 35666:return Sf;case 35674:return yf;case 35675:return Ef;case 35676:return wf;case 5124:case 35670:return Tf;case 35667:case 35671:return Af;case 35668:case 35672:return Rf;case 35669:case 35673:return Cf;case 5125:return Nf;case 36294:return Pf;case 36295:return Df;case 36296:return Lf;case 35678:case 36198:case 36298:case 36306:case 35682:return If;case 35679:case 36299:case 36307:return Uf;case 35680:case 36300:case 36308:case 36293:return Ff;case 36289:case 36303:case 36311:case 36292:return Of}}class kf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_f(t.type)}}class zf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bf(t.type)}}class Gf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(e,t[l.id],n)}}}const ss=/(\w+)(\])?(\[|\.)?/g;function go(i,e){i.seq.push(e),i.map[e.id]=e}function Vf(i,e,t){const n=i.name,r=n.length;for(ss.lastIndex=0;;){const s=ss.exec(n),a=ss.lastIndex;let l=s[1];const d=s[2]==="]",c=s[3];if(d&&(l=l|0),c===void 0||c==="["&&a+2===r){go(t,c===void 0?new kf(l,i,e):new zf(l,i,e));break}else{let f=t.map[l];f===void 0&&(f=new Gf(l),go(t,f)),t=f}}}class hr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const l=e.getActiveUniform(t,a),d=e.getUniformLocation(t,l.name);Vf(l,d,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const l=t[s],d=n[l.id];d.needsUpdate!==!1&&l.setValue(e,d.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function xo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Hf=37297;let Wf=0;function jf(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}const _o=new Ue;function Xf(i){Ge._getMatrix(_o,Ge.workingColorSpace,i);const e=`mat3( ${_o.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(i)){case gr:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function vo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+jf(i.getShaderSource(e),l)}else return s}function qf(i,e){const t=Xf(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Yf={[Do]:"Linear",[Lo]:"Reinhard",[Io]:"Cineon",[Uo]:"ACESFilmic",[Oo]:"AgX",[Bo]:"Neutral",[Fo]:"Custom"};function $f(i,e){const t=Yf[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ar=new z;function Kf(){Ge.getLuminanceCoefficients(ar);const i=ar.x.toFixed(4),e=ar.y.toFixed(4),t=ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ai).join(`
`)}function Jf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:l}}return t}function Ai(i){return i!==""}function bo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ep=/^[ \t]*#include +<([\w\d./]+)>/gm;function Js(i){return i.replace(ep,np)}const tp=new Map;function np(i,e){let t=ke[e];if(t===void 0){const n=tp.get(e);if(n!==void 0)t=ke[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Js(t)}const ip=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function So(i){return i.replace(ip,rp)}function rp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yo(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const sp={[or]:"SHADOWMAP_TYPE_PCF",[Ti]:"SHADOWMAP_TYPE_VSM"};function ap(i){return sp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const op={[Gn]:"ENVMAP_TYPE_CUBE",[hi]:"ENVMAP_TYPE_CUBE",[vr]:"ENVMAP_TYPE_CUBE_UV"};function lp(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":op[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const cp={[hi]:"ENVMAP_MODE_REFRACTION"};function dp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":cp[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const up={[Po]:"ENVMAP_BLENDING_MULTIPLY",[Kl]:"ENVMAP_BLENDING_MIX",[Zl]:"ENVMAP_BLENDING_ADD"};function hp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":up[i.combine]||"ENVMAP_BLENDING_NONE"}function fp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function pp(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,l=t.fragmentShader;const d=ap(t),c=lp(t),h=dp(t),f=hp(t),u=fp(t),x=Zf(t),v=Jf(s),S=r.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ai).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ai).join(`
`),p.length>0&&(p+=`
`)):(m=[yo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ai).join(`
`),p=[yo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nn?"#define TONE_MAPPING":"",t.toneMapping!==nn?ke.tonemapping_pars_fragment:"",t.toneMapping!==nn?$f("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,qf("linearToOutputTexel",t.outputColorSpace),Kf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ai).join(`
`)),a=Js(a),a=bo(a,t),a=Mo(a,t),l=Js(l),l=bo(l,t),l=Mo(l,t),a=So(a),l=So(l),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Pa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const R=A+m+a,M=A+p+l,E=xo(r,r.VERTEX_SHADER,R),w=xo(r,r.FRAGMENT_SHADER,M);r.attachShader(S,E),r.attachShader(S,w),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function C(N){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(S)||"",I=r.getShaderInfoLog(E)||"",X=r.getShaderInfoLog(w)||"",B=k.trim(),j=I.trim(),H=X.trim();let Z=!0,ie=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,E,w);else{const ae=vo(r,E,"vertex"),oe=vo(r,w,"fragment");qe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+B+`
`+ae+`
`+oe)}else B!==""?De("WebGLProgram: Program Info Log:",B):(j===""||H==="")&&(ie=!1);ie&&(N.diagnostics={runnable:Z,programLog:B,vertexShader:{log:j,prefix:m},fragmentShader:{log:H,prefix:p}})}r.deleteShader(E),r.deleteShader(w),_=new hr(r,S),T=Qf(r,S)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(S,Hf)),P},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wf++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=E,this.fragmentShader=w,this}let mp=0;class gp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xp(e),t.set(e,n)),n}}class xp{constructor(e){this.id=mp++,this.code=e,this.usedTimes=0}}function _p(i){return i===Vn||i===fr||i===pr}function vp(i,e,t,n,r,s){const a=new $o,l=new gp,d=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return d.add(_),_===0?"uv":`uv${_}`}function S(_,T,P,N,k,I){const X=N.fog,B=k.geometry,j=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Z=e.get(_.envMap||j,H),ie=Z&&Z.mapping===vr?Z.image.height:null,ae=x[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&De("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const oe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,F=oe!==void 0?oe.length:0;let re=0;B.morphAttributes.position!==void 0&&(re=1),B.morphAttributes.normal!==void 0&&(re=2),B.morphAttributes.color!==void 0&&(re=3);let Le,ye,Y,J;if(ae){const Ee=Qt[ae];Le=Ee.vertexShader,ye=Ee.fragmentShader}else{Le=_.vertexShader,ye=_.fragmentShader;const Ee=l.getVertexShaderStage(_),ot=l.getFragmentShaderStage(_);l.update(_,Ee,ot),Y=Ee.id,J=ot.id}const te=i.getRenderTarget(),le=i.state.buffers.depth.getReversed(),Se=k.isInstancedMesh===!0,ve=k.isBatchedMesh===!0,$e=!!_.map,Ie=!!_.matcap,Ke=!!Z,Ye=!!_.aoMap,je=!!_.lightMap,ut=!!_.bumpMap&&_.wireframe===!1,pt=!!_.normalMap,xt=!!_.displacementMap,vt=!!_.emissiveMap,at=!!_.metalnessMap,ht=!!_.roughnessMap,L=_.anisotropy>0,Ct=_.clearcoat>0,Ze=_.dispersion>0,y=_.iridescence>0,g=_.sheen>0,O=_.transmission>0,W=L&&!!_.anisotropyMap,$=Ct&&!!_.clearcoatMap,se=Ct&&!!_.clearcoatNormalMap,de=Ct&&!!_.clearcoatRoughnessMap,K=y&&!!_.iridescenceMap,ee=y&&!!_.iridescenceThicknessMap,ue=g&&!!_.sheenColorMap,Ae=g&&!!_.sheenRoughnessMap,pe=!!_.specularMap,he=!!_.specularColorMap,Ne=!!_.specularIntensityMap,Pe=O&&!!_.transmissionMap,Oe=O&&!!_.thicknessMap,D=!!_.gradientMap,ce=!!_.alphaMap,Q=_.alphaTest>0,fe=!!_.alphaHash,_e=!!_.extensions;let ne=nn;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ne=i.toneMapping);const Te={shaderID:ae,shaderType:_.type,shaderName:_.name,vertexShader:Le,fragmentShader:ye,defines:_.defines,customVertexShaderID:Y,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:ve,batchingColor:ve&&k._colorsTexture!==null,instancing:Se,instancingColor:Se&&k.instanceColor!==null,instancingMorph:Se&&k.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:$e,matcap:Ie,envMap:Ke,envMapMode:Ke&&Z.mapping,envMapCubeUVHeight:ie,aoMap:Ye,lightMap:je,bumpMap:ut,normalMap:pt,displacementMap:xt,emissiveMap:vt,normalMapObjectSpace:pt&&_.normalMapType===ec,normalMapTangentSpace:pt&&_.normalMapType===Ys,packedNormalMap:pt&&_.normalMapType===Ys&&_p(_.normalMap.format),metalnessMap:at,roughnessMap:ht,anisotropy:L,anisotropyMap:W,clearcoat:Ct,clearcoatMap:$,clearcoatNormalMap:se,clearcoatRoughnessMap:de,dispersion:Ze,iridescence:y,iridescenceMap:K,iridescenceThicknessMap:ee,sheen:g,sheenColorMap:ue,sheenRoughnessMap:Ae,specularMap:pe,specularColorMap:he,specularIntensityMap:Ne,transmission:O,transmissionMap:Pe,thicknessMap:Oe,gradientMap:D,opaque:_.transparent===!1&&_.blending===li&&_.alphaToCoverage===!1,alphaMap:ce,alphaTest:Q,alphaHash:fe,combine:_.combine,mapUv:$e&&v(_.map.channel),aoMapUv:Ye&&v(_.aoMap.channel),lightMapUv:je&&v(_.lightMap.channel),bumpMapUv:ut&&v(_.bumpMap.channel),normalMapUv:pt&&v(_.normalMap.channel),displacementMapUv:xt&&v(_.displacementMap.channel),emissiveMapUv:vt&&v(_.emissiveMap.channel),metalnessMapUv:at&&v(_.metalnessMap.channel),roughnessMapUv:ht&&v(_.roughnessMap.channel),anisotropyMapUv:W&&v(_.anisotropyMap.channel),clearcoatMapUv:$&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:se&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&v(_.sheenRoughnessMap.channel),specularMapUv:pe&&v(_.specularMap.channel),specularColorMapUv:he&&v(_.specularColorMap.channel),specularIntensityMapUv:Ne&&v(_.specularIntensityMap.channel),transmissionMapUv:Pe&&v(_.transmissionMap.channel),thicknessMapUv:Oe&&v(_.thicknessMap.channel),alphaMapUv:ce&&v(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(pt||L),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!B.attributes.uv&&($e||ce),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&pt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:le,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:re,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:$e&&_.map.isVideoTexture===!0&&Ge.getTransfer(_.map.colorSpace)===Je,decodeVideoTextureEmissive:vt&&_.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(_.emissiveMap.colorSpace)===Je,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===hn,flipSided:_.side===Dt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:_e&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&_.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Te.vertexUv1s=d.has(1),Te.vertexUv2s=d.has(2),Te.vertexUv3s=d.has(3),d.clear(),Te}function m(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)T.push(P),T.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(T,_),A(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function A(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function R(_){const T=x[_.type];let P;if(T){const N=Qt[T];P=kc.clone(N.uniforms)}else P=_.uniforms;return P}function M(_,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new pp(i,T,_,r),c.push(P),h.set(T,P)),P}function E(_){if(--_.usedTimes===0){const T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){l.remove(_)}function C(){l.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:R,acquireProgram:M,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:C}}function bp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function r(a,l,d){i.get(a)[l]=d}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Mp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Eo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u){let x=0;return u.isInstancedMesh&&(x+=2),u.isSkinnedMesh&&(x+=1),x}function l(u,x,v,S,m,p){let A=i[e];return A===void 0?(A={id:u.id,object:u,geometry:x,material:v,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:p},i[e]=A):(A.id=u.id,A.object=u,A.geometry=x,A.material=v,A.materialVariant=a(u),A.groupOrder=S,A.renderOrder=u.renderOrder,A.z=m,A.group=p),e++,A}function d(u,x,v,S,m,p){const A=l(u,x,v,S,m,p);v.transmission>0?n.push(A):v.transparent===!0?r.push(A):t.push(A)}function c(u,x,v,S,m,p){const A=l(u,x,v,S,m,p);v.transmission>0?n.unshift(A):v.transparent===!0?r.unshift(A):t.unshift(A)}function h(u,x,v){t.length>1&&t.sort(u||Mp),n.length>1&&n.sort(x||Eo),r.length>1&&r.sort(x||Eo),v&&(t.reverse(),n.reverse(),r.reverse())}function f(){for(let u=e,x=i.length;u<x;u++){const v=i[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:d,unshift:c,finish:f,sort:h}}function Sp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new wo,i.set(n,[a])):r>=s.length?(a=new wo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function yp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new He};break;case"SpotLight":t={position:new z,direction:new z,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function Ep(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let wp=0;function Tp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ap(i){const e=new yp,t=Ep(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const r=new z,s=new rt,a=new rt;function l(c){let h=0,f=0,u=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let x=0,v=0,S=0,m=0,p=0,A=0,R=0,M=0,E=0,w=0,C=0;c.sort(Tp);for(let T=0,P=c.length;T<P;T++){const N=c[T],k=N.color,I=N.intensity,X=N.distance;let B=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Vn?B=N.shadow.map.texture:B=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=k.r*I,f+=k.g*I,u+=k.b*I;else if(N.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(N.sh.coefficients[j],I);C++}else if(N.isDirectionalLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const H=N.shadow,Z=t.get(N);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,n.directionalShadow[x]=Z,n.directionalShadowMap[x]=B,n.directionalShadowMatrix[x]=N.shadow.matrix,A++}n.directional[x]=j,x++}else if(N.isSpotLight){const j=e.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(k).multiplyScalar(I),j.distance=X,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,n.spot[S]=j;const H=N.shadow;if(N.map&&(n.spotLightMap[E]=N.map,E++,H.updateMatrices(N),N.castShadow&&w++),n.spotLightMatrix[S]=H.matrix,N.castShadow){const Z=t.get(N);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,n.spotShadow[S]=Z,n.spotShadowMap[S]=B,M++}S++}else if(N.isRectAreaLight){const j=e.get(N);j.color.copy(k).multiplyScalar(I),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=j,m++}else if(N.isPointLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),j.distance=N.distance,j.decay=N.decay,N.castShadow){const H=N.shadow,Z=t.get(N);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,Z.shadowCameraNear=H.camera.near,Z.shadowCameraFar=H.camera.far,n.pointShadow[v]=Z,n.pointShadowMap[v]=B,n.pointShadowMatrix[v]=N.shadow.matrix,R++}n.point[v]=j,v++}else if(N.isHemisphereLight){const j=e.get(N);j.skyColor.copy(N.color).multiplyScalar(I),j.groundColor.copy(N.groundColor).multiplyScalar(I),n.hemi[p]=j,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const _=n.hash;(_.directionalLength!==x||_.pointLength!==v||_.spotLength!==S||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==A||_.numPointShadows!==R||_.numSpotShadows!==M||_.numSpotMaps!==E||_.numLightProbes!==C)&&(n.directional.length=x,n.spot.length=S,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=M+E-w,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,_.directionalLength=x,_.pointLength=v,_.spotLength=S,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=A,_.numPointShadows=R,_.numSpotShadows=M,_.numSpotMaps=E,_.numLightProbes=C,n.version=wp++)}function d(c,h){let f=0,u=0,x=0,v=0,S=0;const m=h.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const R=c[p];if(R.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(R.isSpotLight){const M=n.spot[x];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),x++}else if(R.isRectAreaLight){const M=n.rectArea[v];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(R.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(R.width*.5,0,0),M.halfHeight.set(0,R.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(R.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(m),u++}else if(R.isHemisphereLight){const M=n.hemi[S];M.direction.setFromMatrixPosition(R.matrixWorld),M.direction.transformDirection(m),S++}}}return{setup:l,setupView:d,state:n}}function To(i){const e=new Ap(i),t=[],n=[],r=[];function s(u){f.camera=u,t.length=0,n.length=0,r.length=0}function a(u){t.push(u)}function l(u){n.push(u)}function d(u){r.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:l,pushLightProbeGrid:d}}function Rp(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let l;return a===void 0?(l=new To(i),e.set(r,[l])):s>=a.length?(l=new To(i),a.push(l)):l=a[s],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const Cp=`void main() {
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
}`,Pp=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Dp=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Ao=new rt,wi=new z,as=new z;function Lp(i,e,t){let n=new ca;const r=new We,s=new We,a=new st,l=new Hc,d=new Wc,c={},h=t.maxTextureSize,f={[Cn]:Dt,[Dt]:Cn,[hn]:hn},u=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Cp,fragmentShader:Np}),x=u.clone();x.defines.HORIZONTAL_PASS=1;const v=new Ot;v.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Pt(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=or;let p=this.type;this.render=function(w,C,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Pl&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=or);const T=i.getRenderTarget(),P=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),k=i.state;k.setBlending(pn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const I=p!==this.type;I&&C.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(B=>B.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,B=w.length;X<B;X++){const j=w[X],H=j.shadow;if(H===void 0){De("WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const Z=H.getFrameExtents();r.multiply(Z),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Z.x),r.x=s.x*Z.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Z.y),r.y=s.y*Z.y,H.mapSize.y=s.y));const ie=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ie,H.map===null||I===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ti){if(j.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new rn(r.x,r.y,{format:Vn,type:gn,minFilter:wt,magFilter:wt,generateMipmaps:!1}),H.map.texture.name=j.name+".shadowMap",H.map.depthTexture=new fi(r.x,r.y,en),H.map.depthTexture.name=j.name+".shadowMapDepth",H.map.depthTexture.format=xn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=bt,H.map.depthTexture.magFilter=bt}else j.isPointLight?(H.map=new cl(r.x),H.map.depthTexture=new Oc(r.x,sn)):(H.map=new rn(r.x,r.y),H.map.depthTexture=new fi(r.x,r.y,sn)),H.map.depthTexture.name=j.name+".shadowMap",H.map.depthTexture.format=xn,this.type===or?(H.map.depthTexture.compareFunction=ie?oa:aa,H.map.depthTexture.minFilter=wt,H.map.depthTexture.magFilter=wt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=bt,H.map.depthTexture.magFilter=bt);H.camera.updateProjectionMatrix()}const ae=H.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<ae;oe++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,oe),i.clear();else{oe===0&&(i.setRenderTarget(H.map),i.clear());const F=H.getViewport(oe);a.set(s.x*F.x,s.y*F.y,s.x*F.z,s.y*F.w),k.viewport(a)}if(j.isPointLight){const F=H.camera,re=H.matrix,Le=j.distance||F.far;Le!==F.far&&(F.far=Le,F.updateProjectionMatrix()),wi.setFromMatrixPosition(j.matrixWorld),F.position.copy(wi),as.copy(F.position),as.add(Pp[oe]),F.up.copy(Dp[oe]),F.lookAt(as),F.updateMatrixWorld(),re.makeTranslation(-wi.x,-wi.y,-wi.z),Ao.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Ao,F.coordinateSystem,F.reversedDepth)}else H.updateMatrices(j);n=H.getFrustum(),M(C,_,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===Ti&&A(H,_),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,P,N)};function A(w,C){const _=e.update(S);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,x.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,x.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new rn(r.x,r.y,{format:Vn,type:gn})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,_,u,S,null),x.uniforms.shadow_pass.value=w.mapPass.texture,x.uniforms.resolution.value=w.mapSize,x.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,_,x,S,null)}function R(w,C,_,T){let P=null;const N=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)P=N;else if(P=_.isPointLight===!0?d:l,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=P.uuid,I=C.uuid;let X=c[k];X===void 0&&(X={},c[k]=X);let B=X[I];B===void 0&&(B=P.clone(),X[I]=B,C.addEventListener("dispose",E)),P=B}if(P.visible=C.visible,P.wireframe=C.wireframe,T===Ti?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:f[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const k=i.properties.get(P);k.light=_}return P}function M(w,C,_,T,P){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Ti)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);const I=e.update(w),X=w.material;if(Array.isArray(X)){const B=I.groups;for(let j=0,H=B.length;j<H;j++){const Z=B[j],ie=X[Z.materialIndex];if(ie&&ie.visible){const ae=R(w,ie,T,P);w.onBeforeShadow(i,w,C,_,I,ae,Z),i.renderBufferDirect(_,null,I,ae,w,Z),w.onAfterShadow(i,w,C,_,I,ae,Z)}}}else if(X.visible){const B=R(w,X,T,P);w.onBeforeShadow(i,w,C,_,I,B,null),i.renderBufferDirect(_,null,I,B,w,null),w.onAfterShadow(i,w,C,_,I,B,null)}}const k=w.children;for(let I=0,X=k.length;I<X;I++)M(k[I],C,_,T,P)}function E(w){w.target.removeEventListener("dispose",E);for(const _ in c){const T=c[_],P=w.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function Ip(i,e){function t(){let D=!1;const ce=new st;let Q=null;const fe=new st(0,0,0,0);return{setMask:function(_e){Q!==_e&&!D&&(i.colorMask(_e,_e,_e,_e),Q=_e)},setLocked:function(_e){D=_e},setClear:function(_e,ne,Te,Ee,ot){ot===!0&&(_e*=Ee,ne*=Ee,Te*=Ee),ce.set(_e,ne,Te,Ee),fe.equals(ce)===!1&&(i.clearColor(_e,ne,Te,Ee),fe.copy(ce))},reset:function(){D=!1,Q=null,fe.set(-1,0,0,0)}}}function n(){let D=!1,ce=!1,Q=null,fe=null,_e=null;return{setReversed:function(ne){if(ce!==ne){const Te=e.get("EXT_clip_control");ne?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),ce=ne;const Ee=_e;_e=null,this.setClear(Ee)}},getReversed:function(){return ce},setTest:function(ne){ne?te(i.DEPTH_TEST):le(i.DEPTH_TEST)},setMask:function(ne){Q!==ne&&!D&&(i.depthMask(ne),Q=ne)},setFunc:function(ne){if(ce&&(ne=dc[ne]),fe!==ne){switch(ne){case cs:i.depthFunc(i.NEVER);break;case ds:i.depthFunc(i.ALWAYS);break;case us:i.depthFunc(i.LESS);break;case ui:i.depthFunc(i.LEQUAL);break;case hs:i.depthFunc(i.EQUAL);break;case fs:i.depthFunc(i.GEQUAL);break;case ps:i.depthFunc(i.GREATER);break;case ms:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=ne}},setLocked:function(ne){D=ne},setClear:function(ne){_e!==ne&&(_e=ne,ce&&(ne=1-ne),i.clearDepth(ne))},reset:function(){D=!1,Q=null,fe=null,_e=null,ce=!1}}}function r(){let D=!1,ce=null,Q=null,fe=null,_e=null,ne=null,Te=null,Ee=null,ot=null;return{setTest:function(nt){D||(nt?te(i.STENCIL_TEST):le(i.STENCIL_TEST))},setMask:function(nt){ce!==nt&&!D&&(i.stencilMask(nt),ce=nt)},setFunc:function(nt,Yt,$t){(Q!==nt||fe!==Yt||_e!==$t)&&(i.stencilFunc(nt,Yt,$t),Q=nt,fe=Yt,_e=$t)},setOp:function(nt,Yt,$t){(ne!==nt||Te!==Yt||Ee!==$t)&&(i.stencilOp(nt,Yt,$t),ne=nt,Te=Yt,Ee=$t)},setLocked:function(nt){D=nt},setClear:function(nt){ot!==nt&&(i.clearStencil(nt),ot=nt)},reset:function(){D=!1,ce=null,Q=null,fe=null,_e=null,ne=null,Te=null,Ee=null,ot=null}}}const s=new t,a=new n,l=new r,d=new WeakMap,c=new WeakMap;let h={},f={},u={},x=new WeakMap,v=[],S=null,m=!1,p=null,A=null,R=null,M=null,E=null,w=null,C=null,_=new He(0,0,0),T=0,P=!1,N=null,k=null,I=null,X=null,B=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Z=0;const ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(ie)[1]),H=Z>=1):ie.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),H=Z>=2);let ae=null,oe={};const F=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),Le=new st().fromArray(F),ye=new st().fromArray(re);function Y(D,ce,Q,fe){const _e=new Uint8Array(4),ne=i.createTexture();i.bindTexture(D,ne),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<Q;Te++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(ce+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return ne}const J={};J[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),te(i.DEPTH_TEST),a.setFunc(ui),ut(!1),pt(wa),te(i.CULL_FACE),Ye(pn);function te(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function le(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Se(D,ce){return u[D]!==ce?(i.bindFramebuffer(D,ce),u[D]=ce,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ce),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function ve(D,ce){let Q=v,fe=!1;if(D){Q=x.get(ce),Q===void 0&&(Q=[],x.set(ce,Q));const _e=D.textures;if(Q.length!==_e.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Te=_e.length;ne<Te;ne++)Q[ne]=i.COLOR_ATTACHMENT0+ne;Q.length=_e.length,fe=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,fe=!0);fe&&i.drawBuffers(Q)}function $e(D){return S!==D?(i.useProgram(D),S=D,!0):!1}const Ie={[On]:i.FUNC_ADD,[Ll]:i.FUNC_SUBTRACT,[Il]:i.FUNC_REVERSE_SUBTRACT};Ie[Ul]=i.MIN,Ie[Fl]=i.MAX;const Ke={[Ol]:i.ZERO,[Bl]:i.ONE,[kl]:i.SRC_COLOR,[os]:i.SRC_ALPHA,[jl]:i.SRC_ALPHA_SATURATE,[Hl]:i.DST_COLOR,[Gl]:i.DST_ALPHA,[zl]:i.ONE_MINUS_SRC_COLOR,[ls]:i.ONE_MINUS_SRC_ALPHA,[Wl]:i.ONE_MINUS_DST_COLOR,[Vl]:i.ONE_MINUS_DST_ALPHA,[Xl]:i.CONSTANT_COLOR,[ql]:i.ONE_MINUS_CONSTANT_COLOR,[Yl]:i.CONSTANT_ALPHA,[$l]:i.ONE_MINUS_CONSTANT_ALPHA};function Ye(D,ce,Q,fe,_e,ne,Te,Ee,ot,nt){if(D===pn){m===!0&&(le(i.BLEND),m=!1);return}if(m===!1&&(te(i.BLEND),m=!0),D!==Dl){if(D!==p||nt!==P){if((A!==On||E!==On)&&(i.blendEquation(i.FUNC_ADD),A=On,E=On),nt)switch(D){case li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ta:i.blendFunc(i.ONE,i.ONE);break;case Aa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ra:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qe("WebGLState: Invalid blending: ",D);break}else switch(D){case li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ta:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Aa:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ra:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",D);break}R=null,M=null,w=null,C=null,_.set(0,0,0),T=0,p=D,P=nt}return}_e=_e||ce,ne=ne||Q,Te=Te||fe,(ce!==A||_e!==E)&&(i.blendEquationSeparate(Ie[ce],Ie[_e]),A=ce,E=_e),(Q!==R||fe!==M||ne!==w||Te!==C)&&(i.blendFuncSeparate(Ke[Q],Ke[fe],Ke[ne],Ke[Te]),R=Q,M=fe,w=ne,C=Te),(Ee.equals(_)===!1||ot!==T)&&(i.blendColor(Ee.r,Ee.g,Ee.b,ot),_.copy(Ee),T=ot),p=D,P=!1}function je(D,ce){D.side===hn?le(i.CULL_FACE):te(i.CULL_FACE);let Q=D.side===Dt;ce&&(Q=!Q),ut(Q),D.blending===li&&D.transparent===!1?Ye(pn):Ye(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const fe=D.stencilWrite;l.setTest(fe),fe&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),vt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):le(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(D){N!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),N=D)}function pt(D){D!==Cl?(te(i.CULL_FACE),D!==k&&(D===wa?i.cullFace(i.BACK):D===Nl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):le(i.CULL_FACE),k=D}function xt(D){D!==I&&(H&&i.lineWidth(D),I=D)}function vt(D,ce,Q){D?(te(i.POLYGON_OFFSET_FILL),(X!==ce||B!==Q)&&(X=ce,B=Q,a.getReversed()&&(ce=-ce),i.polygonOffset(ce,Q))):le(i.POLYGON_OFFSET_FILL)}function at(D){D?te(i.SCISSOR_TEST):le(i.SCISSOR_TEST)}function ht(D){D===void 0&&(D=i.TEXTURE0+j-1),ae!==D&&(i.activeTexture(D),ae=D)}function L(D,ce,Q){Q===void 0&&(ae===null?Q=i.TEXTURE0+j-1:Q=ae);let fe=oe[Q];fe===void 0&&(fe={type:void 0,texture:void 0},oe[Q]=fe),(fe.type!==D||fe.texture!==ce)&&(ae!==Q&&(i.activeTexture(Q),ae=Q),i.bindTexture(D,ce||J[D]),fe.type=D,fe.texture=ce)}function Ct(){const D=oe[ae];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Ze(){try{i.compressedTexImage2D(...arguments)}catch(D){qe("WebGLState:",D)}}function y(){try{i.compressedTexImage3D(...arguments)}catch(D){qe("WebGLState:",D)}}function g(){try{i.texSubImage2D(...arguments)}catch(D){qe("WebGLState:",D)}}function O(){try{i.texSubImage3D(...arguments)}catch(D){qe("WebGLState:",D)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(D){qe("WebGLState:",D)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(D){qe("WebGLState:",D)}}function se(){try{i.texStorage2D(...arguments)}catch(D){qe("WebGLState:",D)}}function de(){try{i.texStorage3D(...arguments)}catch(D){qe("WebGLState:",D)}}function K(){try{i.texImage2D(...arguments)}catch(D){qe("WebGLState:",D)}}function ee(){try{i.texImage3D(...arguments)}catch(D){qe("WebGLState:",D)}}function ue(D){return f[D]!==void 0?f[D]:i.getParameter(D)}function Ae(D,ce){f[D]!==ce&&(i.pixelStorei(D,ce),f[D]=ce)}function pe(D){Le.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Le.copy(D))}function he(D){ye.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ye.copy(D))}function Ne(D,ce){let Q=c.get(ce);Q===void 0&&(Q=new WeakMap,c.set(ce,Q));let fe=Q.get(D);fe===void 0&&(fe=i.getUniformBlockIndex(ce,D.name),Q.set(D,fe))}function Pe(D,ce){const fe=c.get(ce).get(D);d.get(ce)!==fe&&(i.uniformBlockBinding(ce,fe,D.__bindingPointIndex),d.set(ce,fe))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},ae=null,oe={},u={},x=new WeakMap,v=[],S=null,m=!1,p=null,A=null,R=null,M=null,E=null,w=null,C=null,_=new He(0,0,0),T=0,P=!1,N=null,k=null,I=null,X=null,B=null,Le.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:te,disable:le,bindFramebuffer:Se,drawBuffers:ve,useProgram:$e,setBlending:Ye,setMaterial:je,setFlipSided:ut,setCullFace:pt,setLineWidth:xt,setPolygonOffset:vt,setScissorTest:at,activeTexture:ht,bindTexture:L,unbindTexture:Ct,compressedTexImage2D:Ze,compressedTexImage3D:y,texImage2D:K,texImage3D:ee,pixelStorei:Ae,getParameter:ue,updateUBOMapping:Ne,uniformBlockBinding:Pe,texStorage2D:se,texStorage3D:de,texSubImage2D:g,texSubImage3D:O,compressedTexSubImage2D:W,compressedTexSubImage3D:$,scissor:pe,viewport:he,reset:Oe}}function Up(i,e,t,n,r,s,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,h=new WeakMap,f=new Set;let u;const x=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(y,g){return v?new OffscreenCanvas(y,g):xr("canvas")}function m(y,g,O){let W=1;const $=Ze(y);if(($.width>O||$.height>O)&&(W=O/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const se=Math.floor(W*$.width),de=Math.floor(W*$.height);u===void 0&&(u=S(se,de));const K=g?S(se,de):u;return K.width=se,K.height=de,K.getContext("2d").drawImage(y,0,0,se,de),De("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+se+"x"+de+")."),K}else return"data"in y&&De("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),y;return y}function p(y){return y.generateMipmaps}function A(y){i.generateMipmap(y)}function R(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(y,g,O,W,$,se=!1){if(y!==null){if(i[y]!==void 0)return i[y];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let de;W&&(de=e.get("EXT_texture_norm16"),de||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=g;if(g===i.RED&&(O===i.FLOAT&&(K=i.R32F),O===i.HALF_FLOAT&&(K=i.R16F),O===i.UNSIGNED_BYTE&&(K=i.R8),O===i.UNSIGNED_SHORT&&de&&(K=de.R16_EXT),O===i.SHORT&&de&&(K=de.R16_SNORM_EXT)),g===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.R8UI),O===i.UNSIGNED_SHORT&&(K=i.R16UI),O===i.UNSIGNED_INT&&(K=i.R32UI),O===i.BYTE&&(K=i.R8I),O===i.SHORT&&(K=i.R16I),O===i.INT&&(K=i.R32I)),g===i.RG&&(O===i.FLOAT&&(K=i.RG32F),O===i.HALF_FLOAT&&(K=i.RG16F),O===i.UNSIGNED_BYTE&&(K=i.RG8),O===i.UNSIGNED_SHORT&&de&&(K=de.RG16_EXT),O===i.SHORT&&de&&(K=de.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RG8UI),O===i.UNSIGNED_SHORT&&(K=i.RG16UI),O===i.UNSIGNED_INT&&(K=i.RG32UI),O===i.BYTE&&(K=i.RG8I),O===i.SHORT&&(K=i.RG16I),O===i.INT&&(K=i.RG32I)),g===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGB8UI),O===i.UNSIGNED_SHORT&&(K=i.RGB16UI),O===i.UNSIGNED_INT&&(K=i.RGB32UI),O===i.BYTE&&(K=i.RGB8I),O===i.SHORT&&(K=i.RGB16I),O===i.INT&&(K=i.RGB32I)),g===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),O===i.UNSIGNED_INT&&(K=i.RGBA32UI),O===i.BYTE&&(K=i.RGBA8I),O===i.SHORT&&(K=i.RGBA16I),O===i.INT&&(K=i.RGBA32I)),g===i.RGB&&(O===i.UNSIGNED_SHORT&&de&&(K=de.RGB16_EXT),O===i.SHORT&&de&&(K=de.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),g===i.RGBA){const ee=se?gr:Ge.getTransfer($);O===i.FLOAT&&(K=i.RGBA32F),O===i.HALF_FLOAT&&(K=i.RGBA16F),O===i.UNSIGNED_BYTE&&(K=ee===Je?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&de&&(K=de.RGBA16_EXT),O===i.SHORT&&de&&(K=de.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function E(y,g){let O;return y?g===null||g===sn||g===Ni?O=i.DEPTH24_STENCIL8:g===en?O=i.DEPTH32F_STENCIL8:g===Ci&&(O=i.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===sn||g===Ni?O=i.DEPTH_COMPONENT24:g===en?O=i.DEPTH_COMPONENT32F:g===Ci&&(O=i.DEPTH_COMPONENT16),O}function w(y,g){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==bt&&y.minFilter!==wt?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function C(y){const g=y.target;g.removeEventListener("dispose",C),T(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&f.delete(g)}function _(y){const g=y.target;g.removeEventListener("dispose",_),N(g)}function T(y){const g=n.get(y);if(g.__webglInit===void 0)return;const O=y.source,W=x.get(O);if(W){const $=W[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&P(y),Object.keys(W).length===0&&x.delete(O)}n.remove(y)}function P(y){const g=n.get(y);i.deleteTexture(g.__webglTexture);const O=y.source,W=x.get(O);delete W[g.__cacheKey],a.memory.textures--}function N(y){const g=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let $=0;$<g.__webglFramebuffer[W].length;$++)i.deleteFramebuffer(g.__webglFramebuffer[W][$]);else i.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)i.deleteFramebuffer(g.__webglFramebuffer[W]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=y.textures;for(let W=0,$=O.length;W<$;W++){const se=n.get(O[W]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(O[W])}n.remove(y)}let k=0;function I(){k=0}function X(){return k}function B(y){k=y}function j(){const y=k;return y>=r.maxTextures&&De("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),k+=1,y}function H(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function Z(y,g){const O=n.get(y);if(y.isVideoTexture&&L(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&O.__version!==y.version){const W=y.image;if(W===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{le(O,y,g);return}}else y.isExternalTexture&&(O.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+g)}function ie(y,g){const O=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){le(O,y,g);return}else y.isExternalTexture&&(O.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+g)}function ae(y,g){const O=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){le(O,y,g);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+g)}function oe(y,g){const O=n.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&O.__version!==y.version){Se(O,y,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+g)}const F={[gs]:i.REPEAT,[fn]:i.CLAMP_TO_EDGE,[xs]:i.MIRRORED_REPEAT},re={[bt]:i.NEAREST,[Jl]:i.NEAREST_MIPMAP_NEAREST,[Fi]:i.NEAREST_MIPMAP_LINEAR,[wt]:i.LINEAR,[Cr]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},Le={[tc]:i.NEVER,[ac]:i.ALWAYS,[nc]:i.LESS,[aa]:i.LEQUAL,[ic]:i.EQUAL,[oa]:i.GEQUAL,[rc]:i.GREATER,[sc]:i.NOTEQUAL};function ye(y,g){if(g.type===en&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===wt||g.magFilter===Cr||g.magFilter===Fi||g.magFilter===kn||g.minFilter===wt||g.minFilter===Cr||g.minFilter===Fi||g.minFilter===kn)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,F[g.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,F[g.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,F[g.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,re[g.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,re[g.minFilter]),g.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,Le[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===bt||g.minFilter!==Fi&&g.minFilter!==kn||g.type===en&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Y(y,g){let O=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",C));const W=g.source;let $=x.get(W);$===void 0&&($={},x.set(W,$));const se=H(g);if(se!==y.__cacheKey){$[se]===void 0&&($[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[se].usedTimes++;const de=$[y.__cacheKey];de!==void 0&&($[y.__cacheKey].usedTimes--,de.usedTimes===0&&P(g)),y.__cacheKey=se,y.__webglTexture=$[se].texture}return O}function J(y,g,O){return Math.floor(Math.floor(y/O)/g)}function te(y,g,O,W){const se=y.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,O,W,g.data);else{se.sort((Ae,pe)=>Ae.start-pe.start);let de=0;for(let Ae=1;Ae<se.length;Ae++){const pe=se[de],he=se[Ae],Ne=pe.start+pe.count,Pe=J(he.start,g.width,4),Oe=J(pe.start,g.width,4);he.start<=Ne+1&&Pe===Oe&&J(he.start+he.count-1,g.width,4)===Pe?pe.count=Math.max(pe.count,he.start+he.count-pe.start):(++de,se[de]=he)}se.length=de+1;const K=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Ae=0,pe=se.length;Ae<pe;Ae++){const he=se[Ae],Ne=Math.floor(he.start/4),Pe=Math.ceil(he.count/4),Oe=Ne%g.width,D=Math.floor(Ne/g.width),ce=Pe,Q=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Oe,D,ce,Q,O,W,g.data)}y.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function le(y,g,O){let W=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=i.TEXTURE_3D);const $=Y(y,g),se=g.source;t.bindTexture(W,y.__webglTexture,i.TEXTURE0+O);const de=n.get(se);if(se.version!==de.__version||$===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const Q=Ge.getPrimaries(Ge.workingColorSpace),fe=g.colorSpace===An?null:Ge.getPrimaries(g.colorSpace),_e=g.colorSpace===An||Q===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let ee=m(g.image,!1,r.maxTextureSize);ee=Ct(g,ee);const ue=s.convert(g.format,g.colorSpace),Ae=s.convert(g.type);let pe=M(g.internalFormat,ue,Ae,g.normalized,g.colorSpace,g.isVideoTexture);ye(W,g);let he;const Ne=g.mipmaps,Pe=g.isVideoTexture!==!0,Oe=de.__version===void 0||$===!0,D=se.dataReady,ce=w(g,ee);if(g.isDepthTexture)pe=E(g.format===zn,g.type),Oe&&(Pe?t.texStorage2D(i.TEXTURE_2D,1,pe,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,pe,ee.width,ee.height,0,ue,Ae,null));else if(g.isDataTexture)if(Ne.length>0){Pe&&Oe&&t.texStorage2D(i.TEXTURE_2D,ce,pe,Ne[0].width,Ne[0].height);for(let Q=0,fe=Ne.length;Q<fe;Q++)he=Ne[Q],Pe?D&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,ue,Ae,he.data):t.texImage2D(i.TEXTURE_2D,Q,pe,he.width,he.height,0,ue,Ae,he.data);g.generateMipmaps=!1}else Pe?(Oe&&t.texStorage2D(i.TEXTURE_2D,ce,pe,ee.width,ee.height),D&&te(g,ee,ue,Ae)):t.texImage2D(i.TEXTURE_2D,0,pe,ee.width,ee.height,0,ue,Ae,ee.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Pe&&Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,pe,Ne[0].width,Ne[0].height,ee.depth);for(let Q=0,fe=Ne.length;Q<fe;Q++)if(he=Ne[Q],g.format!==Xt)if(ue!==null)if(Pe){if(D)if(g.layerUpdates.size>0){const _e=io(he.width,he.height,g.format,g.type);for(const ne of g.layerUpdates){const Te=he.data.subarray(ne*_e/he.data.BYTES_PER_ELEMENT,(ne+1)*_e/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,ne,he.width,he.height,1,ue,Te)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,ee.depth,ue,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,pe,he.width,he.height,ee.depth,0,he.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,ee.depth,ue,Ae,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,pe,he.width,he.height,ee.depth,0,ue,Ae,he.data)}else{Pe&&Oe&&t.texStorage2D(i.TEXTURE_2D,ce,pe,Ne[0].width,Ne[0].height);for(let Q=0,fe=Ne.length;Q<fe;Q++)he=Ne[Q],g.format!==Xt?ue!==null?Pe?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,ue,he.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,pe,he.width,he.height,0,he.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?D&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,ue,Ae,he.data):t.texImage2D(i.TEXTURE_2D,Q,pe,he.width,he.height,0,ue,Ae,he.data)}else if(g.isDataArrayTexture)if(Pe){if(Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,pe,ee.width,ee.height,ee.depth),D)if(g.layerUpdates.size>0){const Q=io(ee.width,ee.height,g.format,g.type);for(const fe of g.layerUpdates){const _e=ee.data.subarray(fe*Q/ee.data.BYTES_PER_ELEMENT,(fe+1)*Q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,ee.width,ee.height,1,ue,Ae,_e)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ue,Ae,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,ee.width,ee.height,ee.depth,0,ue,Ae,ee.data);else if(g.isData3DTexture)Pe?(Oe&&t.texStorage3D(i.TEXTURE_3D,ce,pe,ee.width,ee.height,ee.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ue,Ae,ee.data)):t.texImage3D(i.TEXTURE_3D,0,pe,ee.width,ee.height,ee.depth,0,ue,Ae,ee.data);else if(g.isFramebufferTexture){if(Oe)if(Pe)t.texStorage2D(i.TEXTURE_2D,ce,pe,ee.width,ee.height);else{let Q=ee.width,fe=ee.height;for(let _e=0;_e<ce;_e++)t.texImage2D(i.TEXTURE_2D,_e,pe,Q,fe,0,ue,Ae,null),Q>>=1,fe>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),ee.parentNode!==Q){Q.appendChild(ee),f.add(g),Q.onpaint=fe=>{const _e=fe.changedElements;for(const ne of f)_e.includes(ne.image)&&(ne.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{const _e=i.RGBA,ne=i.RGBA,Te=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,_e,ne,Te,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Pe&&Oe){const Q=Ze(Ne[0]);t.texStorage2D(i.TEXTURE_2D,ce,pe,Q.width,Q.height)}for(let Q=0,fe=Ne.length;Q<fe;Q++)he=Ne[Q],Pe?D&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ue,Ae,he):t.texImage2D(i.TEXTURE_2D,Q,pe,ue,Ae,he);g.generateMipmaps=!1}else if(Pe){if(Oe){const Q=Ze(ee);t.texStorage2D(i.TEXTURE_2D,ce,pe,Q.width,Q.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Ae,ee)}else t.texImage2D(i.TEXTURE_2D,0,pe,ue,Ae,ee);p(g)&&A(W),de.__version=se.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Se(y,g,O){if(g.image.length!==6)return;const W=Y(y,g),$=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+O);const se=n.get($);if($.version!==se.__version||W===!0){t.activeTexture(i.TEXTURE0+O);const de=Ge.getPrimaries(Ge.workingColorSpace),K=g.colorSpace===An?null:Ge.getPrimaries(g.colorSpace),ee=g.colorSpace===An||de===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ue=g.isCompressedTexture||g.image[0].isCompressedTexture,Ae=g.image[0]&&g.image[0].isDataTexture,pe=[];for(let ne=0;ne<6;ne++)!ue&&!Ae?pe[ne]=m(g.image[ne],!0,r.maxCubemapSize):pe[ne]=Ae?g.image[ne].image:g.image[ne],pe[ne]=Ct(g,pe[ne]);const he=pe[0],Ne=s.convert(g.format,g.colorSpace),Pe=s.convert(g.type),Oe=M(g.internalFormat,Ne,Pe,g.normalized,g.colorSpace),D=g.isVideoTexture!==!0,ce=se.__version===void 0||W===!0,Q=$.dataReady;let fe=w(g,he);ye(i.TEXTURE_CUBE_MAP,g);let _e;if(ue){D&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Oe,he.width,he.height);for(let ne=0;ne<6;ne++){_e=pe[ne].mipmaps;for(let Te=0;Te<_e.length;Te++){const Ee=_e[Te];g.format!==Xt?Ne!==null?D?Q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te,0,0,Ee.width,Ee.height,Ne,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te,Oe,Ee.width,Ee.height,0,Ee.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te,0,0,Ee.width,Ee.height,Ne,Pe,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te,Oe,Ee.width,Ee.height,0,Ne,Pe,Ee.data)}}}else{if(_e=g.mipmaps,D&&ce){_e.length>0&&fe++;const ne=Ze(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Oe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Ae){D?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,pe[ne].width,pe[ne].height,Ne,Pe,pe[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Oe,pe[ne].width,pe[ne].height,0,Ne,Pe,pe[ne].data);for(let Te=0;Te<_e.length;Te++){const ot=_e[Te].image[ne].image;D?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te+1,0,0,ot.width,ot.height,Ne,Pe,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te+1,Oe,ot.width,ot.height,0,Ne,Pe,ot.data)}}else{D?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ne,Pe,pe[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Oe,Ne,Pe,pe[ne]);for(let Te=0;Te<_e.length;Te++){const Ee=_e[Te];D?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te+1,0,0,Ne,Pe,Ee.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te+1,Oe,Ne,Pe,Ee.image[ne])}}}p(g)&&A(i.TEXTURE_CUBE_MAP),se.__version=$.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function ve(y,g,O,W,$,se){const de=s.convert(O.format,O.colorSpace),K=s.convert(O.type),ee=M(O.internalFormat,de,K,O.normalized,O.colorSpace),ue=n.get(g),Ae=n.get(O);if(Ae.__renderTarget=g,!ue.__hasExternalTextures){const pe=Math.max(1,g.width>>se),he=Math.max(1,g.height>>se);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,se,ee,pe,he,g.depth,0,de,K,null):t.texImage2D($,se,ee,pe,he,0,de,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),ht(g)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,$,Ae.__webglTexture,0,at(g)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,$,Ae.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(y,g,O){if(i.bindRenderbuffer(i.RENDERBUFFER,y),g.depthBuffer){const W=g.depthTexture,$=W&&W.isDepthTexture?W.type:null,se=E(g.stencilBuffer,$),de=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ht(g)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at(g),se,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,at(g),se,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,se,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,y)}else{const W=g.textures;for(let $=0;$<W.length;$++){const se=W[$],de=s.convert(se.format,se.colorSpace),K=s.convert(se.type),ee=M(se.internalFormat,de,K,se.normalized,se.colorSpace);ht(g)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at(g),ee,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,at(g),ee,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ee,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(y,g,O){const W=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(g.depthTexture);if($.__renderTarget=g,(!$.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W){if($.__webglInit===void 0&&($.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ye(i.TEXTURE_CUBE_MAP,g.depthTexture);const ue=s.convert(g.depthTexture.format),Ae=s.convert(g.depthTexture.type);let pe;g.depthTexture.format===xn?pe=i.DEPTH_COMPONENT24:g.depthTexture.format===zn&&(pe=i.DEPTH24_STENCIL8);for(let he=0;he<6;he++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,pe,g.width,g.height,0,ue,Ae,null)}}else Z(g.depthTexture,0);const se=$.__webglTexture,de=at(g),K=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,ee=g.depthTexture.format===zn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===xn)ht(g)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,K,se,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,ee,K,se,0);else if(g.depthTexture.format===zn)ht(g)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,K,se,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,ee,K,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ke(y){const g=n.get(y),O=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const W=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){const $=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),g.__depthDisposeCallback=$}g.__boundDepthTexture=W}if(y.depthTexture&&!g.__autoAllocateDepthBuffer)if(O)for(let W=0;W<6;W++)Ie(g.__webglFramebuffer[W],y,W);else{const W=y.texture.mipmaps;W&&W.length>0?Ie(g.__webglFramebuffer[0],y,0):Ie(g.__webglFramebuffer,y,0)}else if(O){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=i.createRenderbuffer(),$e(g.__webglDepthbuffer[W],y,!1);else{const $=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=g.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,se)}}else{const W=y.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),$e(g.__webglDepthbuffer,y,!1);else{const $=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,se)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(y,g,O){const W=n.get(y);g!==void 0&&ve(W.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ke(y)}function je(y){const g=y.texture,O=n.get(y),W=n.get(g);y.addEventListener("dispose",_);const $=y.textures,se=y.isWebGLCubeRenderTarget===!0,de=$.length>1;if(de||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=g.version,a.memory.textures++),se){O.__webglFramebuffer=[];for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[K]=[];for(let ee=0;ee<g.mipmaps.length;ee++)O.__webglFramebuffer[K][ee]=i.createFramebuffer()}else O.__webglFramebuffer[K]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let K=0;K<g.mipmaps.length;K++)O.__webglFramebuffer[K]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(de)for(let K=0,ee=$.length;K<ee;K++){const ue=n.get($[K]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&ht(y)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let K=0;K<$.length;K++){const ee=$[K];O.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[K]);const ue=s.convert(ee.format,ee.colorSpace),Ae=s.convert(ee.type),pe=M(ee.internalFormat,ue,Ae,ee.normalized,ee.colorSpace,y.isXRRenderTarget===!0),he=at(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,he,pe,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,O.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),$e(O.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),ye(i.TEXTURE_CUBE_MAP,g);for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0)for(let ee=0;ee<g.mipmaps.length;ee++)ve(O.__webglFramebuffer[K][ee],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ee);else ve(O.__webglFramebuffer[K],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(g)&&A(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let K=0,ee=$.length;K<ee;K++){const ue=$[K],Ae=n.get(ue);let pe=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(pe=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,Ae.__webglTexture),ye(pe,ue),ve(O.__webglFramebuffer,y,ue,i.COLOR_ATTACHMENT0+K,pe,0),p(ue)&&A(pe)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(K=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,W.__webglTexture),ye(K,g),g.mipmaps&&g.mipmaps.length>0)for(let ee=0;ee<g.mipmaps.length;ee++)ve(O.__webglFramebuffer[ee],y,g,i.COLOR_ATTACHMENT0,K,ee);else ve(O.__webglFramebuffer,y,g,i.COLOR_ATTACHMENT0,K,0);p(g)&&A(K),t.unbindTexture()}y.depthBuffer&&Ke(y)}function ut(y){const g=y.textures;for(let O=0,W=g.length;O<W;O++){const $=g[O];if(p($)){const se=R(y),de=n.get($).__webglTexture;t.bindTexture(se,de),A(se),t.unbindTexture()}}}const pt=[],xt=[];function vt(y){if(y.samples>0){if(ht(y)===!1){const g=y.textures,O=y.width,W=y.height;let $=i.COLOR_BUFFER_BIT;const se=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(y),K=g.length>1;if(K)for(let ue=0;ue<g.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const ee=y.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ue=0;ue<g.length;ue++){if(y.resolveDepthBuffer&&(y.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[ue]);const Ae=n.get(g[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ae,0)}i.blitFramebuffer(0,0,O,W,0,0,O,W,$,i.NEAREST),d===!0&&(pt.length=0,xt.length=0,pt.push(i.COLOR_ATTACHMENT0+ue),y.depthBuffer&&y.resolveDepthBuffer===!1&&(pt.push(se),xt.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,xt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let ue=0;ue<g.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,de.__webglColorRenderbuffer[ue]);const Ae=n.get(g[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,Ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&d){const g=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function at(y){return Math.min(r.maxSamples,y.samples)}function ht(y){const g=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function L(y){const g=a.render.frame;h.get(y)!==g&&(h.set(y,g),y.update())}function Ct(y,g){const O=y.colorSpace,W=y.format,$=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||O!==mr&&O!==An&&(Ge.getTransfer(O)===Je?(W!==Xt||$!==Ft)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",O)),g}function Ze(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=I,this.getTextureUnits=X,this.setTextureUnits=B,this.setTexture2D=Z,this.setTexture2DArray=ie,this.setTexture3D=ae,this.setTextureCube=oe,this.rebindTextures=Ye,this.setupRenderTarget=je,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Fp(i,e){function t(n,r=An){let s;const a=Ge.getTransfer(r);if(n===Ft)return i.UNSIGNED_BYTE;if(n===ta)return i.UNSIGNED_SHORT_4_4_4_4;if(n===na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ho)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zo)return i.BYTE;if(n===Go)return i.SHORT;if(n===Ci)return i.UNSIGNED_SHORT;if(n===ea)return i.INT;if(n===sn)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===gn)return i.HALF_FLOAT;if(n===Wo)return i.ALPHA;if(n===jo)return i.RGB;if(n===Xt)return i.RGBA;if(n===xn)return i.DEPTH_COMPONENT;if(n===zn)return i.DEPTH_STENCIL;if(n===Xo)return i.RED;if(n===ia)return i.RED_INTEGER;if(n===Vn)return i.RG;if(n===ra)return i.RG_INTEGER;if(n===sa)return i.RGBA_INTEGER;if(n===lr||n===cr||n===dr||n===ur)if(a===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===lr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===lr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ur)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_s||n===vs||n===bs||n===Ms)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===_s)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ms)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ss||n===ys||n===Es||n===ws||n===Ts||n===fr||n===As)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ss||n===ys)return a===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Es)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ws)return s.COMPRESSED_R11_EAC;if(n===Ts)return s.COMPRESSED_SIGNED_R11_EAC;if(n===fr)return s.COMPRESSED_RG11_EAC;if(n===As)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Rs||n===Cs||n===Ns||n===Ps||n===Ds||n===Ls||n===Is||n===Us||n===Fs||n===Os||n===Bs||n===ks||n===zs||n===Gs)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Rs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ns)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ps)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ds)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ls)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Is)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Us)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Os)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ks)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vs||n===Hs||n===Ws)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Vs)return a===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ws)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===js||n===Xs||n===pr||n===qs)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===js)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Xs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qs)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ni?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Op=`
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

}`;class kp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new nl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new an({vertexShader:Op,fragmentShader:Bp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new Mr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zp extends Wn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,l="local-floor",d=1,c=null,h=null,f=null,u=null,x=null,v=null;const S=typeof XRWebGLBinding<"u",m=new kp,p={},A=t.getContextAttributes();let R=null,M=null;const E=[],w=[],C=new We;let _=null;const T=new Gt;T.viewport=new st;const P=new Gt;P.viewport=new st;const N=[T,P],k=new $c;let I=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=E[Y];return J===void 0&&(J=new Or,E[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=E[Y];return J===void 0&&(J=new Or,E[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=E[Y];return J===void 0&&(J=new Or,E[Y]=J),J.getHandSpace()};function B(Y){const J=w.indexOf(Y.inputSource);if(J===-1)return;const te=E[J];te!==void 0&&(te.update(Y.inputSource,Y.frame,c||a),te.dispatchEvent({type:Y.type,data:Y.inputSource}))}function j(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",H);for(let Y=0;Y<E.length;Y++){const J=w[Y];J!==null&&(w[Y]=null,E[Y].disconnect(J))}I=null,X=null,m.reset();for(const Y in p)delete p[Y];e.setRenderTarget(R),x=null,u=null,f=null,r=null,M=null,ye.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){l=Y,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:x},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",j),r.addEventListener("inputsourceschange",H),A.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,le=null,Se=null;A.depth&&(Se=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=A.stencil?zn:xn,le=A.stencil?Ni:sn);const ve={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(ve),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new rn(u.textureWidth,u.textureHeight,{format:Xt,type:Ft,depthTexture:new fi(u.textureWidth,u.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const te={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};x=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),M=new rn(x.framebufferWidth,x.framebufferHeight,{format:Xt,type:Ft,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(d),c=null,a=await r.requestReferenceSpace(l),ye.setContext(r),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(Y){for(let J=0;J<Y.removed.length;J++){const te=Y.removed[J],le=w.indexOf(te);le>=0&&(w[le]=null,E[le].disconnect(te))}for(let J=0;J<Y.added.length;J++){const te=Y.added[J];let le=w.indexOf(te);if(le===-1){for(let ve=0;ve<E.length;ve++)if(ve>=w.length){w.push(te),le=ve;break}else if(w[ve]===null){w[ve]=te,le=ve;break}if(le===-1)break}const Se=E[le];Se&&Se.connect(te)}}const Z=new z,ie=new z;function ae(Y,J,te){Z.setFromMatrixPosition(J.matrixWorld),ie.setFromMatrixPosition(te.matrixWorld);const le=Z.distanceTo(ie),Se=J.projectionMatrix.elements,ve=te.projectionMatrix.elements,$e=Se[14]/(Se[10]-1),Ie=Se[14]/(Se[10]+1),Ke=(Se[9]+1)/Se[5],Ye=(Se[9]-1)/Se[5],je=(Se[8]-1)/Se[0],ut=(ve[8]+1)/ve[0],pt=$e*je,xt=$e*ut,vt=le/(-je+ut),at=vt*-je;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(at),Y.translateZ(vt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Se[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const ht=$e+vt,L=Ie+vt,Ct=pt-at,Ze=xt+(le-at),y=Ke*Ie/L*ht,g=Ye*Ie/L*ht;Y.projectionMatrix.makePerspective(Ct,Ze,y,g,ht,L),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function oe(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let J=Y.near,te=Y.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(te=m.depthFar)),k.near=P.near=T.near=J,k.far=P.far=T.far=te,(I!==k.near||X!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),I=k.near,X=k.far),k.layers.mask=Y.layers.mask|6,T.layers.mask=k.layers.mask&-5,P.layers.mask=k.layers.mask&-3;const le=Y.parent,Se=k.cameras;oe(k,le);for(let ve=0;ve<Se.length;ve++)oe(Se[ve],le);Se.length===2?ae(k,T,P):k.projectionMatrix.copy(T.projectionMatrix),F(Y,k,le)};function F(Y,J,te){te===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(te.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=$s*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&x===null))return d},this.setFoveation=function(Y){d=Y,u!==null&&(u.fixedFoveation=Y),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(Y){return p[Y]};let re=null;function Le(Y,J){if(h=J.getViewerPose(c||a),v=J,h!==null){const te=h.views;x!==null&&(e.setRenderTargetFramebuffer(M,x.framebuffer),e.setRenderTarget(M));let le=!1;te.length!==k.cameras.length&&(k.cameras.length=0,le=!0);for(let Ie=0;Ie<te.length;Ie++){const Ke=te[Ie];let Ye=null;if(x!==null)Ye=x.getViewport(Ke);else{const ut=f.getViewSubImage(u,Ke);Ye=ut.viewport,Ie===0&&(e.setRenderTargetTextures(M,ut.colorTexture,ut.depthStencilTexture),e.setRenderTarget(M))}let je=N[Ie];je===void 0&&(je=new Gt,je.layers.enable(Ie),je.viewport=new st,N[Ie]=je),je.matrix.fromArray(Ke.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Ke.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ie===0&&(k.matrix.copy(je.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),le===!0&&k.cameras.push(je)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){f=n.getBinding();const Ie=f.getDepthInformation(te[0]);Ie&&Ie.isValid&&Ie.texture&&m.init(Ie,r.renderState)}if(Se&&Se.includes("camera-access")&&S){e.state.unbindTexture(),f=n.getBinding();for(let Ie=0;Ie<te.length;Ie++){const Ke=te[Ie].camera;if(Ke){let Ye=p[Ke];Ye||(Ye=new nl,p[Ke]=Ye);const je=f.getCameraImage(Ke);Ye.sourceTexture=je}}}}for(let te=0;te<E.length;te++){const le=w[te],Se=E[te];le!==null&&Se!==void 0&&Se.update(le,J,c||a)}re&&re(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),v=null}const ye=new ol;ye.setAnimationLoop(Le),this.setAnimationLoop=function(Y){re=Y},this.dispose=function(){}}}const Gp=new rt,pl=new Ue;pl.set(-1,0,0,0,1,0,0,0,1);function Vp(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,il(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,R,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&x(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),v(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),S(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&l(m,p)):p.isPointsMaterial?d(m,p,A,R):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Dt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Dt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),R=A.envMap,M=A.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(Gp.makeRotationFromEuler(M)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(pl),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function l(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function d(m,p,A,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=R*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function x(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Hp(i,e,t,n){let r={},s={},a=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(M,E){const w=E.program;n.uniformBlockBinding(M,w)}function c(M,E){let w=r[M.id];w===void 0&&(m(M),w=h(M),r[M.id]=w,M.addEventListener("dispose",A));const C=E.program;n.updateUBOMapping(M,C);const _=e.render.frame;s[M.id]!==_&&(u(M),s[M.id]=_)}function h(M){const E=f();M.__bindingPointIndex=E;const w=i.createBuffer(),C=M.__size,_=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,C,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,w),w}function f(){for(let M=0;M<l;M++)if(a.indexOf(M)===-1)return a.push(M),M;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const E=r[M.id],w=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let _=0,T=w.length;_<T;_++){const P=w[_];if(Array.isArray(P))for(let N=0,k=P.length;N<k;N++)x(P[N],_,N,C);else x(P,_,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(M,E,w,C){if(S(M,E,w,C)===!0){const _=M.__offset,T=M.value;if(Array.isArray(T)){let P=0;for(let N=0;N<T.length;N++){const k=T[N],I=p(k);v(k,M.__data,P),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(P+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(T,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,M.__data)}}function v(M,E,w){typeof M=="number"||typeof M=="boolean"?E[0]=M:M.isMatrix3?(E[0]=M.elements[0],E[1]=M.elements[1],E[2]=M.elements[2],E[3]=0,E[4]=M.elements[3],E[5]=M.elements[4],E[6]=M.elements[5],E[7]=0,E[8]=M.elements[6],E[9]=M.elements[7],E[10]=M.elements[8],E[11]=0):ArrayBuffer.isView(M)?E.set(new M.constructor(M.buffer,M.byteOffset,E.length)):M.toArray(E,w)}function S(M,E,w,C){const _=M.value,T=E+"_"+w;if(C[T]===void 0)return typeof _=="number"||typeof _=="boolean"?C[T]=_:ArrayBuffer.isView(_)?C[T]=_.slice():C[T]=_.clone(),!0;{const P=C[T];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return C[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function m(M){const E=M.uniforms;let w=0;const C=16;for(let T=0,P=E.length;T<P;T++){const N=Array.isArray(E[T])?E[T]:[E[T]];for(let k=0,I=N.length;k<I;k++){const X=N[k],B=Array.isArray(X.value)?X.value:[X.value];for(let j=0,H=B.length;j<H;j++){const Z=B[j],ie=p(Z),ae=w%C,oe=ae%ie.boundary,F=ae+oe;w+=oe,F!==0&&C-F<ie.storage&&(w+=C-F),X.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=w,w+=ie.storage}}}const _=w%C;return _>0&&(w+=C-_),M.__size=w,M.__cache={},this}function p(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):De("WebGLRenderer: Unsupported uniform value type.",M),E}function A(M){const E=M.target;E.removeEventListener("dispose",A);const w=a.indexOf(E.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function R(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:d,update:c,dispose:R}}const Wp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Jt=null;function jp(){return Jt===null&&(Jt=new Pc(Wp,16,16,Vn,gn),Jt.name="DFG_LUT",Jt.minFilter=wt,Jt.magFilter=wt,Jt.wrapS=fn,Jt.wrapT=fn,Jt.generateMipmaps=!1,Jt.needsUpdate=!0),Jt}class Xp{constructor(e={}){const{canvas:t=lc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:x=Ft}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const S=x,m=new Set([sa,ra,ia]),p=new Set([Ft,sn,Ci,Ni,ta,na]),A=new Uint32Array(4),R=new Int32Array(4),M=new z;let E=null,w=null;const C=[],_=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let N=!1,k=null,I=null,X=null,B=null;this._outputColorSpace=zt;let j=0,H=0,Z=null,ie=-1,ae=null;const oe=new st,F=new st;let re=null;const Le=new He(0);let ye=0,Y=t.width,J=t.height,te=1,le=null,Se=null;const ve=new st(0,0,Y,J),$e=new st(0,0,Y,J);let Ie=!1;const Ke=new ca;let Ye=!1,je=!1;const ut=new rt,pt=new z,xt=new st,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function ht(){return Z===null?te:1}let L=n;function Ct(b,U){return t.getContext(b,U)}try{const b={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:d,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qs}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",Yt,!1),L===null){const U="webgl2";if(L=Ct(U,b),L===null)throw Ct(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw qe("WebGLRenderer: "+b.message),b}let Ze,y,g,O,W,$,se,de,K,ee,ue,Ae,pe,he,Ne,Pe,Oe,D,ce,Q,fe,_e,ne;function Te(){Ze=new Wh(L),Ze.init(),fe=new Fp(L,Ze),y=new Fh(L,Ze,e,fe),g=new Ip(L,Ze),y.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),I=L.createFramebuffer(),X=L.createFramebuffer(),B=L.createFramebuffer(),O=new qh(L),W=new bp,$=new Up(L,Ze,g,W,y,fe,O),se=new Hh(P),de=new Zc(L),_e=new Ih(L,de),K=new jh(L,de,O,_e),ee=new $h(L,K,de,_e,O),D=new Yh(L,y,$),Ne=new Oh(W),ue=new vp(P,se,Ze,y,_e,Ne),Ae=new Vp(P,W),pe=new Sp,he=new Rp(Ze),Oe=new Lh(P,se,g,ee,v,d),Pe=new Lp(P,ee,y),ne=new Hp(L,O,y,g),ce=new Uh(L,Ze,O),Q=new Xh(L,Ze,O),O.programs=ue.programs,P.capabilities=y,P.extensions=Ze,P.properties=W,P.renderLists=pe,P.shadowMap=Pe,P.state=g,P.info=O}Te(),S!==Ft&&(T=new Zh(S,t.width,t.height,l,r,s));const Ee=new zp(P,L);this.xr=Ee,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=Ze.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ze.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(b){b!==void 0&&(te=b,this.setSize(Y,J,!1))},this.getSize=function(b){return b.set(Y,J)},this.setSize=function(b,U,q=!0){if(Ee.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,J=U,t.width=Math.floor(b*te),t.height=Math.floor(U*te),q===!0&&(t.style.width=b+"px",t.style.height=U+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Y*te,J*te).floor()},this.setDrawingBufferSize=function(b,U,q){Y=b,J=U,te=q,t.width=Math.floor(b*q),t.height=Math.floor(U*q),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(S===Ft){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(oe)},this.getViewport=function(b){return b.copy(ve)},this.setViewport=function(b,U,q,G){b.isVector4?ve.set(b.x,b.y,b.z,b.w):ve.set(b,U,q,G),g.viewport(oe.copy(ve).multiplyScalar(te).round())},this.getScissor=function(b){return b.copy($e)},this.setScissor=function(b,U,q,G){b.isVector4?$e.set(b.x,b.y,b.z,b.w):$e.set(b,U,q,G),g.scissor(F.copy($e).multiplyScalar(te).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(b){g.setScissorTest(Ie=b)},this.setOpaqueSort=function(b){le=b},this.setTransparentSort=function(b){Se=b},this.getClearColor=function(b){return b.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,q=!0){let G=0;if(b){let V=!1;if(Z!==null){const xe=Z.texture.format;V=m.has(xe)}if(V){const xe=Z.texture.type,Me=p.has(xe),ge=Oe.getClearColor(),we=Oe.getClearAlpha(),Re=ge.r,Be=ge.g,ze=ge.b;Me?(A[0]=Re,A[1]=Be,A[2]=ze,A[3]=we,L.clearBufferuiv(L.COLOR,0,A)):(R[0]=Re,R[1]=Be,R[2]=ze,R[3]=we,L.clearBufferiv(L.COLOR,0,R))}else G|=L.COLOR_BUFFER_BIT}U&&(G|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),k=b},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Yt,!1),Oe.dispose(),pe.dispose(),he.dispose(),W.dispose(),se.dispose(),ee.dispose(),_e.dispose(),ne.dispose(),ue.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",fa),Ee.removeEventListener("sessionend",pa),Pn.stop()};function ot(b){b.preventDefault(),La("WebGLRenderer: Context Lost."),N=!0}function nt(){La("WebGLRenderer: Context Restored."),N=!1;const b=O.autoReset,U=Pe.enabled,q=Pe.autoUpdate,G=Pe.needsUpdate,V=Pe.type;Te(),O.autoReset=b,Pe.enabled=U,Pe.autoUpdate=q,Pe.needsUpdate=G,Pe.type=V}function Yt(b){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function $t(b){const U=b.target;U.removeEventListener("dispose",$t),ml(U)}function ml(b){gl(b),W.remove(b)}function gl(b){const U=W.get(b).programs;U!==void 0&&(U.forEach(function(q){ue.releaseProgram(q)}),b.isShaderMaterial&&ue.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,q,G,V,xe){U===null&&(U=vt);const Me=V.isMesh&&V.matrixWorld.determinantAffine()<0,ge=vl(b,U,q,G,V);g.setMaterial(G,Me);let we=q.index,Re=1;if(G.wireframe===!0){if(we=K.getWireframeAttribute(q),we===void 0)return;Re=2}const Be=q.drawRange,ze=q.attributes.position;let Ce=Be.start*Re,Qe=(Be.start+Be.count)*Re;xe!==null&&(Ce=Math.max(Ce,xe.start*Re),Qe=Math.min(Qe,(xe.start+xe.count)*Re)),we!==null?(Ce=Math.max(Ce,0),Qe=Math.min(Qe,we.count)):ze!=null&&(Ce=Math.max(Ce,0),Qe=Math.min(Qe,ze.count));const ct=Qe-Ce;if(ct<0||ct===1/0)return;_e.setup(V,G,ge,q,we);let lt,et=ce;if(we!==null&&(lt=de.get(we),et=Q,et.setIndex(lt)),V.isMesh)G.wireframe===!0?(g.setLineWidth(G.wireframeLinewidth*ht()),et.setMode(L.LINES)):et.setMode(L.TRIANGLES);else if(V.isLine){let St=G.linewidth;St===void 0&&(St=1),g.setLineWidth(St*ht()),V.isLineSegments?et.setMode(L.LINES):V.isLineLoop?et.setMode(L.LINE_LOOP):et.setMode(L.LINE_STRIP)}else V.isPoints?et.setMode(L.POINTS):V.isSprite&&et.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))et.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const St=V._multiDrawStarts,be=V._multiDrawCounts,Lt=V._multiDrawCount,Xe=we?de.get(we).bytesPerElement:1,Bt=W.get(G).currentProgram.getUniforms();for(let Kt=0;Kt<Lt;Kt++)Bt.setValue(L,"_gl_DrawID",Kt),et.render(St[Kt]/Xe,be[Kt])}else if(V.isInstancedMesh)et.renderInstances(Ce,ct,V.count);else if(q.isInstancedBufferGeometry){const St=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,be=Math.min(q.instanceCount,St);et.renderInstances(Ce,ct,be)}else et.render(Ce,ct)};function ha(b,U,q){b.transparent===!0&&b.side===hn&&b.forceSinglePass===!1?(b.side=Dt,b.needsUpdate=!0,Ui(b,U,q),b.side=Cn,b.needsUpdate=!0,Ui(b,U,q),b.side=hn):Ui(b,U,q)}this.compile=function(b,U,q=null){q===null&&(q=b),w=he.get(q),w.init(U),_.push(w),q.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),b!==q&&b.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights();const G=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const xe=V.material;if(xe)if(Array.isArray(xe))for(let Me=0;Me<xe.length;Me++){const ge=xe[Me];ha(ge,q,V),G.add(ge)}else ha(xe,q,V),G.add(xe)}),w=_.pop(),G},this.compileAsync=function(b,U,q=null){const G=this.compile(b,U,q);return new Promise(V=>{function xe(){if(G.forEach(function(Me){W.get(Me).currentProgram.isReady()&&G.delete(Me)}),G.size===0){V(b);return}setTimeout(xe,10)}Ze.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Er=null;function xl(b){Er&&Er(b)}function fa(){Pn.stop()}function pa(){Pn.start()}const Pn=new ol;Pn.setAnimationLoop(xl),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(b){Er=b,Ee.setAnimationLoop(b),b===null?Pn.stop():Pn.start()},Ee.addEventListener("sessionstart",fa),Ee.addEventListener("sessionend",pa),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;k!==null&&k.renderStart(b,U);const q=Ee.enabled===!0&&Ee.isPresenting===!0,G=T!==null&&(Z===null||q)&&T.begin(P,Z);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(U),U=Ee.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,U,Z),w=he.get(b,_.length),w.init(U),w.state.textureUnits=$.getTextureUnits(),_.push(w),ut.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ke.setFromProjectionMatrix(ut,tn,U.reversedDepth),je=this.localClippingEnabled,Ye=Ne.init(this.clippingPlanes,je),E=pe.get(b,C.length),E.init(),C.push(E),Ee.enabled===!0&&Ee.isPresenting===!0){const Me=P.xr.getDepthSensingMesh();Me!==null&&wr(Me,U,-1/0,P.sortObjects)}wr(b,U,0,P.sortObjects),E.finish(),P.sortObjects===!0&&E.sort(le,Se,U.reversedDepth),at=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,at&&Oe.addToRenderList(E,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&Ne.beginShadows();const V=w.state.shadowsArray;if(Pe.render(V,b,U),Ye===!0&&Ne.endShadows(),(G&&T.hasRenderPass())===!1){const Me=E.opaque,ge=E.transmissive;if(w.setupLights(),U.isArrayCamera){const we=U.cameras;if(ge.length>0)for(let Re=0,Be=we.length;Re<Be;Re++){const ze=we[Re];ga(Me,ge,b,ze)}at&&Oe.render(b);for(let Re=0,Be=we.length;Re<Be;Re++){const ze=we[Re];ma(E,b,ze,ze.viewport)}}else ge.length>0&&ga(Me,ge,b,U),at&&Oe.render(b),ma(E,b,U)}Z!==null&&H===0&&($.updateMultisampleRenderTarget(Z),$.updateRenderTargetMipmap(Z)),G&&T.end(P),b.isScene===!0&&b.onAfterRender(P,b,U),_e.resetDefaultState(),ie=-1,ae=null,_.pop(),_.length>0?(w=_[_.length-1],$.setTextureUnits(w.state.textureUnits),Ye===!0&&Ne.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,k!==null&&k.renderEnd()};function wr(b,U,q,G){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ke.intersectsSprite(b)){G&&xt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ut);const Me=ee.update(b),ge=b.material;ge.visible&&E.push(b,Me,ge,q,xt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ke.intersectsObject(b))){const Me=ee.update(b),ge=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),xt.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),xt.copy(Me.boundingSphere.center)),xt.applyMatrix4(b.matrixWorld).applyMatrix4(ut)),Array.isArray(ge)){const we=Me.groups;for(let Re=0,Be=we.length;Re<Be;Re++){const ze=we[Re],Ce=ge[ze.materialIndex];Ce&&Ce.visible&&E.push(b,Me,Ce,q,xt.z,ze)}}else ge.visible&&E.push(b,Me,ge,q,xt.z,null)}}const xe=b.children;for(let Me=0,ge=xe.length;Me<ge;Me++)wr(xe[Me],U,q,G)}function ma(b,U,q,G){const{opaque:V,transmissive:xe,transparent:Me}=b;w.setupLightsView(q),Ye===!0&&Ne.setGlobalState(P.clippingPlanes,q),G&&g.viewport(oe.copy(G)),V.length>0&&Ii(V,U,q),xe.length>0&&Ii(xe,U,q),Me.length>0&&Ii(Me,U,q),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function ga(b,U,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){const Ce=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new rn(1,1,{generateMipmaps:!0,type:Ce?gn:Ft,minFilter:kn,samples:Math.max(4,y.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}const xe=w.state.transmissionRenderTarget[G.id],Me=G.viewport||oe;xe.setSize(Me.z*P.transmissionResolutionScale,Me.w*P.transmissionResolutionScale);const ge=P.getRenderTarget(),we=P.getActiveCubeFace(),Re=P.getActiveMipmapLevel();P.setRenderTarget(xe),P.getClearColor(Le),ye=P.getClearAlpha(),ye<1&&P.setClearColor(16777215,.5),P.clear(),at&&Oe.render(q);const Be=P.toneMapping;P.toneMapping=nn;const ze=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),Ye===!0&&Ne.setGlobalState(P.clippingPlanes,G),Ii(b,q,G),$.updateMultisampleRenderTarget(xe),$.updateRenderTargetMipmap(xe),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Qe=0,ct=U.length;Qe<ct;Qe++){const lt=U[Qe],{object:et,geometry:St,material:be,group:Lt}=lt;if(be.side===hn&&et.layers.test(G.layers)){const Xe=be.side;be.side=Dt,be.needsUpdate=!0,xa(et,q,G,St,be,Lt),be.side=Xe,be.needsUpdate=!0,Ce=!0}}Ce===!0&&($.updateMultisampleRenderTarget(xe),$.updateRenderTargetMipmap(xe))}P.setRenderTarget(ge,we,Re),P.setClearColor(Le,ye),ze!==void 0&&(G.viewport=ze),P.toneMapping=Be}function Ii(b,U,q){const G=U.isScene===!0?U.overrideMaterial:null;for(let V=0,xe=b.length;V<xe;V++){const Me=b[V],{object:ge,geometry:we,group:Re}=Me;let Be=Me.material;Be.allowOverride===!0&&G!==null&&(Be=G),ge.layers.test(q.layers)&&xa(ge,U,q,we,Be,Re)}}function xa(b,U,q,G,V,xe){b.onBeforeRender(P,U,q,G,V,xe),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(P,U,q,G,b,xe),V.transparent===!0&&V.side===hn&&V.forceSinglePass===!1?(V.side=Dt,V.needsUpdate=!0,P.renderBufferDirect(q,U,G,V,b,xe),V.side=Cn,V.needsUpdate=!0,P.renderBufferDirect(q,U,G,V,b,xe),V.side=hn):P.renderBufferDirect(q,U,G,V,b,xe),b.onAfterRender(P,U,q,G,V,xe)}function Ui(b,U,q){U.isScene!==!0&&(U=vt);const G=W.get(b),V=w.state.lights,xe=w.state.shadowsArray,Me=V.state.version,ge=ue.getParameters(b,V.state,xe,U,q,w.state.lightProbeGridArray),we=ue.getProgramCacheKey(ge);let Re=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;const Be=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=se.get(b.envMap||G.environment,Be),G.envMapRotation=G.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Re===void 0&&(b.addEventListener("dispose",$t),Re=new Map,G.programs=Re);let ze=Re.get(we);if(ze!==void 0){if(G.currentProgram===ze&&G.lightsStateVersion===Me)return va(b,ge),ze}else ge.uniforms=ue.getUniforms(b),k!==null&&b.isNodeMaterial&&k.build(b,q,ge),b.onBeforeCompile(ge,P),ze=ue.acquireProgram(ge,we),Re.set(we,ze),G.uniforms=ge.uniforms;const Ce=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ce.clippingPlanes=Ne.uniform),va(b,ge),G.needsLights=Ml(b),G.lightsStateVersion=Me,G.needsLights&&(Ce.ambientLightColor.value=V.state.ambient,Ce.lightProbe.value=V.state.probe,Ce.directionalLights.value=V.state.directional,Ce.directionalLightShadows.value=V.state.directionalShadow,Ce.spotLights.value=V.state.spot,Ce.spotLightShadows.value=V.state.spotShadow,Ce.rectAreaLights.value=V.state.rectArea,Ce.ltc_1.value=V.state.rectAreaLTC1,Ce.ltc_2.value=V.state.rectAreaLTC2,Ce.pointLights.value=V.state.point,Ce.pointLightShadows.value=V.state.pointShadow,Ce.hemisphereLights.value=V.state.hemi,Ce.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ce.spotLightMatrix.value=V.state.spotLightMatrix,Ce.spotLightMap.value=V.state.spotLightMap,Ce.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=w.state.lightProbeGridArray.length>0,G.currentProgram=ze,G.uniformsList=null,ze}function _a(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=hr.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function va(b,U){const q=W.get(b);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function _l(b,U){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(U.matrixWorld);for(let q=0,G=b.length;q<G;q++){const V=b[q];if(V.texture!==null&&V.boundingBox.containsPoint(M))return V}return null}function vl(b,U,q,G,V){U.isScene!==!0&&(U=vt),$.resetTextureUnits();const xe=U.fog,Me=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,ge=Z===null?P.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ge.workingColorSpace,we=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Re=se.get(G.envMap||Me,we),Be=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ze=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ce=!!q.morphAttributes.position,Qe=!!q.morphAttributes.normal,ct=!!q.morphAttributes.color;let lt=nn;G.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(lt=P.toneMapping);const et=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,St=et!==void 0?et.length:0,be=W.get(G),Lt=w.state.lights;if(Ye===!0&&(je===!0||b!==ae)){const it=b===ae&&G.id===ie;Ne.setState(G,b,it)}let Xe=!1;G.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Lt.state.version||be.outputColorSpace!==ge||V.isBatchedMesh&&be.batching===!1||!V.isBatchedMesh&&be.batching===!0||V.isBatchedMesh&&be.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&be.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&be.instancing===!1||!V.isInstancedMesh&&be.instancing===!0||V.isSkinnedMesh&&be.skinning===!1||!V.isSkinnedMesh&&be.skinning===!0||V.isInstancedMesh&&be.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&be.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&be.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&be.instancingMorph===!1&&V.morphTexture!==null||be.envMap!==Re||G.fog===!0&&be.fog!==xe||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Ne.numPlanes||be.numIntersection!==Ne.numIntersection)||be.vertexAlphas!==Be||be.vertexTangents!==ze||be.morphTargets!==Ce||be.morphNormals!==Qe||be.morphColors!==ct||be.toneMapping!==lt||be.morphTargetsCount!==St||!!be.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Xe=!0):(Xe=!0,be.__version=G.version);let Bt=be.currentProgram;Xe===!0&&(Bt=Ui(G,U,V),k&&G.isNodeMaterial&&k.onUpdateProgram(G,Bt,be));let Kt=!1,_n=!1,jn=!1;const tt=Bt.getUniforms(),dt=be.uniforms;if(g.useProgram(Bt.program)&&(Kt=!0,_n=!0,jn=!0),G.id!==ie&&(ie=G.id,_n=!0),be.needsLights){const it=_l(w.state.lightProbeGridArray,V);be.lightProbeGrid!==it&&(be.lightProbeGrid=it,_n=!0)}if(Kt||ae!==b){g.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),tt.setValue(L,"projectionMatrix",b.projectionMatrix),tt.setValue(L,"viewMatrix",b.matrixWorldInverse);const bn=tt.map.cameraPosition;bn!==void 0&&bn.setValue(L,pt.setFromMatrixPosition(b.matrixWorld)),y.logarithmicDepthBuffer&&tt.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&tt.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),ae!==b&&(ae=b,_n=!0,jn=!0)}if(be.needsLights&&(Lt.state.directionalShadowMap.length>0&&tt.setValue(L,"directionalShadowMap",Lt.state.directionalShadowMap,$),Lt.state.spotShadowMap.length>0&&tt.setValue(L,"spotShadowMap",Lt.state.spotShadowMap,$),Lt.state.pointShadowMap.length>0&&tt.setValue(L,"pointShadowMap",Lt.state.pointShadowMap,$)),V.isSkinnedMesh){tt.setOptional(L,V,"bindMatrix"),tt.setOptional(L,V,"bindMatrixInverse");const it=V.skeleton;it&&(it.boneTexture===null&&it.computeBoneTexture(),tt.setValue(L,"boneTexture",it.boneTexture,$))}V.isBatchedMesh&&(tt.setOptional(L,V,"batchingTexture"),tt.setValue(L,"batchingTexture",V._matricesTexture,$),tt.setOptional(L,V,"batchingIdTexture"),tt.setValue(L,"batchingIdTexture",V._indirectTexture,$),tt.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&tt.setValue(L,"batchingColorTexture",V._colorsTexture,$));const vn=q.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&D.update(V,q,Bt),(_n||be.receiveShadow!==V.receiveShadow)&&(be.receiveShadow=V.receiveShadow,tt.setValue(L,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(dt.envMapIntensity.value=U.environmentIntensity),dt.dfgLUT!==void 0&&(dt.dfgLUT.value=jp()),_n){if(tt.setValue(L,"toneMappingExposure",P.toneMappingExposure),be.needsLights&&bl(dt,jn),xe&&G.fog===!0&&Ae.refreshFogUniforms(dt,xe),Ae.refreshMaterialUniforms(dt,G,te,J,w.state.transmissionRenderTarget[b.id]),be.needsLights&&be.lightProbeGrid){const it=be.lightProbeGrid;dt.probesSH.value=it.texture,dt.probesMin.value.copy(it.boundingBox.min),dt.probesMax.value.copy(it.boundingBox.max),dt.probesResolution.value.copy(it.resolution)}hr.upload(L,_a(be),dt,$)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(hr.upload(L,_a(be),dt,$),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&tt.setValue(L,"center",V.center),tt.setValue(L,"modelViewMatrix",V.modelViewMatrix),tt.setValue(L,"normalMatrix",V.normalMatrix),tt.setValue(L,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){const it=G.uniformsGroups;for(let bn=0,Xn=it.length;bn<Xn;bn++){const ba=it[bn];ne.update(ba,Bt),ne.bind(ba,Bt)}}return Bt}function bl(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Ml(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(b,U,q){const G=W.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),W.get(b.texture).__webglTexture=U,W.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){const q=W.get(b);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,q=0){Z=b,j=U,H=q;let G=null,V=!1,xe=!1;if(b){const ge=W.get(b);if(ge.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(L.FRAMEBUFFER,ge.__webglFramebuffer),oe.copy(b.viewport),F.copy(b.scissor),re=b.scissorTest,g.viewport(oe),g.scissor(F),g.setScissorTest(re),ie=-1;return}else if(ge.__webglFramebuffer===void 0)$.setupRenderTarget(b);else if(ge.__hasExternalTextures)$.rebindTextures(b,W.get(b.texture).__webglTexture,W.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Be=b.depthTexture;if(ge.__boundDepthTexture!==Be){if(Be!==null&&W.has(Be)&&(b.width!==Be.image.width||b.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(b)}}const we=b.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(xe=!0);const Re=W.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?G=Re[U][q]:G=Re[U],V=!0):b.samples>0&&$.useMultisampledRTT(b)===!1?G=W.get(b).__webglMultisampledFramebuffer:Array.isArray(Re)?G=Re[q]:G=Re,oe.copy(b.viewport),F.copy(b.scissor),re=b.scissorTest}else oe.copy(ve).multiplyScalar(te).floor(),F.copy($e).multiplyScalar(te).floor(),re=Ie;if(q!==0&&(G=I),g.bindFramebuffer(L.FRAMEBUFFER,G)&&g.drawBuffers(b,G),g.viewport(oe),g.scissor(F),g.setScissorTest(re),V){const ge=W.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,ge.__webglTexture,q)}else if(xe){const ge=U;for(let we=0;we<b.textures.length;we++){const Re=W.get(b.textures[we]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+we,Re.__webglTexture,q,ge)}}else if(b!==null&&q!==0){const ge=W.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ge.__webglTexture,q)}ie=-1},this.readRenderTargetPixels=function(b,U,q,G,V,xe,Me,ge=0){if(!(b&&b.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we){g.bindFramebuffer(L.FRAMEBUFFER,we);try{const Re=b.textures[ge],Be=Re.format,ze=Re.type;if(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ge),!y.textureFormatReadable(Be)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!y.textureTypeReadable(ze)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-G&&q>=0&&q<=b.height-V&&L.readPixels(U,q,G,V,fe.convert(Be),fe.convert(ze),xe)}finally{const Re=Z!==null?W.get(Z).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,U,q,G,V,xe,Me,ge=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we)if(U>=0&&U<=b.width-G&&q>=0&&q<=b.height-V){g.bindFramebuffer(L.FRAMEBUFFER,we);const Re=b.textures[ge],Be=Re.format,ze=Re.type;if(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ge),!y.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!y.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.bufferData(L.PIXEL_PACK_BUFFER,xe.byteLength,L.STREAM_READ),L.readPixels(U,q,G,V,fe.convert(Be),fe.convert(ze),0);const Qe=Z!==null?W.get(Z).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,Qe);const ct=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await cc(L,ct,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,xe),L.deleteBuffer(Ce),L.deleteSync(ct),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,q=0){const G=Math.pow(2,-q),V=Math.floor(b.image.width*G),xe=Math.floor(b.image.height*G),Me=U!==null?U.x:0,ge=U!==null?U.y:0;$.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,Me,ge,V,xe),g.unbindTexture()},this.copyTextureToTexture=function(b,U,q=null,G=null,V=0,xe=0){let Me,ge,we,Re,Be,ze,Ce,Qe,ct;const lt=b.isCompressedTexture?b.mipmaps[xe]:b.image;if(q!==null)Me=q.max.x-q.min.x,ge=q.max.y-q.min.y,we=q.isBox3?q.max.z-q.min.z:1,Re=q.min.x,Be=q.min.y,ze=q.isBox3?q.min.z:0;else{const dt=Math.pow(2,-V);Me=Math.floor(lt.width*dt),ge=Math.floor(lt.height*dt),b.isDataArrayTexture?we=lt.depth:b.isData3DTexture?we=Math.floor(lt.depth*dt):we=1,Re=0,Be=0,ze=0}G!==null?(Ce=G.x,Qe=G.y,ct=G.z):(Ce=0,Qe=0,ct=0);const et=fe.convert(U.format),St=fe.convert(U.type);let be;U.isData3DTexture?($.setTexture3D(U,0),be=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?($.setTexture2DArray(U,0),be=L.TEXTURE_2D_ARRAY):($.setTexture2D(U,0),be=L.TEXTURE_2D),g.activeTexture(L.TEXTURE0),g.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),g.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),g.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Lt=g.getParameter(L.UNPACK_ROW_LENGTH),Xe=g.getParameter(L.UNPACK_IMAGE_HEIGHT),Bt=g.getParameter(L.UNPACK_SKIP_PIXELS),Kt=g.getParameter(L.UNPACK_SKIP_ROWS),_n=g.getParameter(L.UNPACK_SKIP_IMAGES);g.pixelStorei(L.UNPACK_ROW_LENGTH,lt.width),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,lt.height),g.pixelStorei(L.UNPACK_SKIP_PIXELS,Re),g.pixelStorei(L.UNPACK_SKIP_ROWS,Be),g.pixelStorei(L.UNPACK_SKIP_IMAGES,ze);const jn=b.isDataArrayTexture||b.isData3DTexture,tt=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const dt=W.get(b),vn=W.get(U),it=W.get(dt.__renderTarget),bn=W.get(vn.__renderTarget);g.bindFramebuffer(L.READ_FRAMEBUFFER,it.__webglFramebuffer),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,bn.__webglFramebuffer);for(let Xn=0;Xn<we;Xn++)jn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,W.get(b).__webglTexture,V,ze+Xn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,W.get(U).__webglTexture,xe,ct+Xn)),L.blitFramebuffer(Re,Be,Me,ge,Ce,Qe,Me,ge,L.DEPTH_BUFFER_BIT,L.NEAREST);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||W.has(b)){const dt=W.get(b),vn=W.get(U);g.bindFramebuffer(L.READ_FRAMEBUFFER,X),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,B);for(let it=0;it<we;it++)jn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,dt.__webglTexture,V,ze+it):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,dt.__webglTexture,V),tt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vn.__webglTexture,xe,ct+it):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,vn.__webglTexture,xe),V!==0?L.blitFramebuffer(Re,Be,Me,ge,Ce,Qe,Me,ge,L.COLOR_BUFFER_BIT,L.NEAREST):tt?L.copyTexSubImage3D(be,xe,Ce,Qe,ct+it,Re,Be,Me,ge):L.copyTexSubImage2D(be,xe,Ce,Qe,Re,Be,Me,ge);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else tt?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(be,xe,Ce,Qe,ct,Me,ge,we,et,St,lt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(be,xe,Ce,Qe,ct,Me,ge,we,et,lt.data):L.texSubImage3D(be,xe,Ce,Qe,ct,Me,ge,we,et,St,lt):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,xe,Ce,Qe,Me,ge,et,St,lt.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,xe,Ce,Qe,lt.width,lt.height,et,lt.data):L.texSubImage2D(L.TEXTURE_2D,xe,Ce,Qe,Me,ge,et,St,lt);g.pixelStorei(L.UNPACK_ROW_LENGTH,Lt),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Xe),g.pixelStorei(L.UNPACK_SKIP_PIXELS,Bt),g.pixelStorei(L.UNPACK_SKIP_ROWS,Kt),g.pixelStorei(L.UNPACK_SKIP_IMAGES,_n),xe===0&&U.generateMipmaps&&L.generateMipmap(be),g.unbindTexture()},this.initRenderTarget=function(b){W.get(b).__webglFramebuffer===void 0&&$.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?$.setTextureCube(b,0):b.isData3DTexture?$.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?$.setTexture2DArray(b,0):$.setTexture2D(b,0),g.unbindTexture()},this.resetState=function(){j=0,H=0,Z=null,g.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}function qp(i,e,t,n,r=!1){const s=document.createElement("canvas");s.width=512,s.height=512;const a=s.getContext("2d");if(a){const d=a.createLinearGradient(0,0,512,512);r?(d.addColorStop(0,"#ffffff"),d.addColorStop(1,"#f1f5f9")):(d.addColorStop(0,n),d.addColorStop(1,"#040814")),a.fillStyle=d,a.fillRect(0,0,512,512),a.strokeStyle=r&&t==="#6366f1"?"#4f46e5":t,a.lineWidth=16,a.strokeRect(16,16,480,480),a.strokeStyle=r?"rgba(15, 23, 42, 0.07)":"rgba(255, 255, 255, 0.08)",a.lineWidth=2;for(let c=64;c<512;c+=64)a.beginPath(),a.moveTo(c,0),a.lineTo(c,512),a.stroke(),a.beginPath(),a.moveTo(0,c),a.lineTo(512,c),a.stroke();a.fillStyle=r&&t==="#6366f1"?"#4f46e5":t,a.fillRect(24,24,32,8),a.fillRect(24,24,8,32),a.fillRect(456,24,32,8),a.fillRect(480,24,8,32),a.fillRect(24,480,32,8),a.fillRect(24,456,8,32),a.fillRect(456,480,32,8),a.fillRect(480,456,8,32),r?(a.shadowColor="rgba(0, 0, 0, 0.06)",a.shadowBlur=8,a.fillStyle="#0f172a"):(a.shadowColor=t,a.shadowBlur=25,a.fillStyle="#ffffff"),a.font="bold 58px 'Outfit', sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText(i,256,220),a.shadowBlur=0,a.fillStyle=r&&t==="#6366f1"?"#4f46e5":t,a.font="bold 28px 'JetBrains Mono', monospace",a.fillText(`[ ${e} ]`,256,310)}const l=new Fc(s);return l.needsUpdate=!0,l}function Yp({isLightMode:i=!1}){const e=Fe.useRef(null);return Fe.useEffect(()=>{const t=e.current;if(!t)return;const n=i||typeof document<"u"&&document.documentElement.classList.contains("light"),r=t.clientWidth,s=t.clientHeight,a=new wc,l=new Gt(45,r/s,.1,1e3);l.position.z=6.5;const d=new Xp({alpha:!0,antialias:!0});d.setSize(r,s),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.appendChild(d.domElement);const c=new qc(16777215,n?.95:.8);a.add(c);const h=new no(n?5195493:61695,n?1.5:2.5);h.position.set(5,5,7),a.add(h);const f=new no(n?14362487:15485081,n?1.2:2);f.position.set(-5,-5,-5),a.add(f);const x=[{label:"LARAVEL",sublabel:"BACKEND API",color:"#6366f1",bg:"#0f172a"},{label:"REACT 19",sublabel:"FRONTEND UI",color:"#06b6d4",bg:"#082f49"},{label:"FLUTTER",sublabel:"MOBILE DEV",color:"#3b82f6",bg:"#1e3a8a"},{label:"MYSQL",sublabel:"DATABASE",color:"#f59e0b",bg:"#451a03"},{label:"REST API",sublabel:"ARCHITECTURE",color:"#10b981",bg:"#064e3b"},{label:"CTF PLAYER",sublabel:"SECURITY HOBBY",color:"#ec4899",bg:"#831843"}].map(le=>{const Se=qp(le.label,le.sublabel,le.color,le.bg,n);return new Za({map:Se,roughness:n?.45:.2,metalness:n?.1:.8,transparent:!0,opacity:.95})}),v=new Hn(2.3,2.3,2.3),S=new Pt(v,x);a.add(S);const m=new Hn(2.45,2.45,2.45),p=new Ri({color:n?5195493:61695,wireframe:!0,transparent:!0,opacity:n?.4:.35}),A=new Pt(m,p);a.add(A);const R=new da(.75,32,32),M=new Za({color:n?5195493:61695,emissive:n?5195493:61695,emissiveIntensity:n?.35:.8,roughness:.1}),E=new Pt(R,M);a.add(E);const w=new _r(2.9,.018,16,100),C=new Ri({color:n?5195493:61695,transparent:!0,opacity:n?.5:.6}),_=new Pt(w,C);_.rotation.x=Math.PI/3,a.add(_);const T=new _r(3.3,.012,16,90),P=new Ri({color:n?14362487:16096779,transparent:!0,opacity:n?.4:.5}),N=new Pt(T,P);N.rotation.y=Math.PI/4,a.add(N);const k=160,I=new Ot,X=new Float32Array(k*3);for(let le=0;le<k*3;le+=3){const Se=3+Math.random()*2.5,ve=Math.random()*Math.PI*2,$e=Math.acos(Math.random()*2-1);X[le]=Se*Math.sin($e)*Math.cos(ve),X[le+1]=Se*Math.sin($e)*Math.sin(ve),X[le+2]=Se*Math.cos($e)}I.setAttribute("position",new qt(X,3));const B=new el({color:n?5195493:61695,size:.045,transparent:!0,opacity:n?.6:.75}),j=new Uc(I,B);a.add(j);let H=!1,Z={x:0,y:0},ie=0,ae=0,oe=0,F=0;const re=le=>{H=!0,Z={x:le.clientX,y:le.clientY}},Le=le=>{const Se=t.getBoundingClientRect(),ve=le.clientX-Se.left-Se.width/2,$e=le.clientY-Se.top-Se.height/2;if(oe=ve*.0015,F=$e*.0015,H){const Ie={x:le.clientX-Z.x,y:le.clientY-Z.y};S.rotation.y+=Ie.x*.01,S.rotation.x+=Ie.y*.01,A.rotation.y+=Ie.x*.01,A.rotation.x+=Ie.y*.01,Z={x:le.clientX,y:le.clientY}}},ye=()=>{H=!1};t.addEventListener("mousedown",re),window.addEventListener("mousemove",Le),window.addEventListener("mouseup",ye);const Y=()=>{if(!t)return;const le=t.clientWidth,Se=t.clientHeight;l.aspect=le/Se,l.updateProjectionMatrix(),d.setSize(le,Se)};window.addEventListener("resize",Y);let J;const te=()=>{ie+=(oe-ie)*.05,ae+=(F-ae)*.05,H||(S.rotation.x+=.005,S.rotation.y+=.008,A.rotation.x+=.005,A.rotation.y+=.008),_.rotation.z+=.006,N.rotation.x+=.007,j.rotation.y+=.002,a.rotation.y=ie*.8,a.rotation.x=ae*.8,d.render(a,l),J=requestAnimationFrame(te)};return te(),()=>{t.removeEventListener("mousedown",re),window.removeEventListener("mousemove",Le),window.removeEventListener("mouseup",ye),window.removeEventListener("resize",Y),cancelAnimationFrame(J),t.contains(d.domElement)&&t.removeChild(d.domElement),v.dispose(),x.forEach(le=>le.dispose()),m.dispose(),p.dispose(),R.dispose(),M.dispose(),w.dispose(),C.dispose(),T.dispose(),P.dispose(),I.dispose(),B.dispose(),d.dispose()}},[i]),o.jsx("div",{ref:e,className:"w-full h-[400px] sm:h-[500px] relative flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing select-none"})}function $p({isOpen:i,onClose:e,isHacking:t,setIsHacking:n}){const[r,s]=Fe.useState(""),[a,l]=Fe.useState(["Don Neto Developer Terminal [Version 1.0.0]","Type 'help' to view all available commands.","guest@donneto:~$ "]);if(!i)return null;const d=c=>{c.preventDefault();const h=r.trim().toLowerCase();if(!h)return;let f=[...a];switch(f[f.length-1]==="guest@donneto:~$ "?f[f.length-1]=`guest@donneto:~$ ${r}`:f.push(`guest@donneto:~$ ${r}`),h){case"help":f.push("Available commands:","  about        - View Reynald's bio","  projects     - List showcase projects and links","  skills       - Show technical stack details","  contact      - Display professional email and networks","  achievements - List CTF competition rewards","  hack         - Execute automated matrix decryption sequence","  clear        - Clear console history");break;case"about":f.push("Reynald Abner Tananda is a Computer Science student at Hasanuddin University","focusing on Software Engineering, Laravel REST APIs, Flutter UI, and cybersecurity forensics.");break;case"projects":f.push("Featured Projects:","  1. E-Logbook Radiology UNHAS (Laravel & PWA medical platform)","  2. Topcell CRM (Laravel enterprise portal)","  3. ANTEKHUB (Flutter student networking)","  4. Jokka Web (Next.js culture explorer)","  5. Topcell Company Profile (Next.js responsive landing page)");break;case"skills":f.push("Programming: Python, PHP, JS, Kotlin, Dart","Web: Laravel, React, Next.js, Nginx, REST APIs","Mobile/DS: Flutter, Machine Learning, Deep Learning, NLP","Tools: Git, Linux, Docker, Tailwind CSS, SQL databases");break;case"contact":f.push("Direct contact details:","  Email    : reynald030685@gmail.com","  GitHub   : github.com/reynaldabnerrr","  LinkedIn : linkedin.com/in/reynald-abner-tananda");break;case"achievements":f.push("Achievements Milestones:","  - GEMASTIK XVIII Cyber Security Finalist (2025)","  - Pragyan CTF 2025 NIT India Winner (1st Student Category)","  - Interfest CTF Top 6 (2024)","  - Cyber Jawara International Top 11 (2024)");break;case"clear":f=[];break;case"hack":n(!0),setTimeout(()=>{n(!1),l(u=>[...u,"> Hacking simulator complete. Target database successfully decrypted."])},3e3);break;default:f.push(`Command not found: '${h}'. Type 'help' to see options.`)}h!=="clear"?f.push("guest@donneto:~$ "):f=["guest@donneto:~$ "],l(f),s("")};return o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in",role:"dialog","aria-modal":"true","aria-label":"Developer terminal console",onKeyDown:c=>{c.key==="Escape"&&e()},children:o.jsxs("div",{className:"cyber-card w-full max-w-2xl rounded-2xl border border-white/[0.08] bg-[#070c14]/90 overflow-hidden shadow-2xl flex flex-col h-[400px]",children:[o.jsxs("div",{className:"flex items-center justify-between bg-white/[0.02] border-b border-white/[0.06] px-4 py-3 select-none",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500/80 cursor-pointer animate-pulse",onClick:e,role:"button","aria-label":"Close terminal"}),o.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-yellow-500/80"}),o.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-green-500/80"}),o.jsxs("span",{className:"text-[10px] text-gray-400 font-mono ml-2 uppercase font-bold tracking-wider flex items-center gap-1.5",children:[o.jsx("i",{className:"fa-solid fa-terminal text-indigo-400","aria-hidden":"true"})," guest@donneto: ~"]})]}),o.jsx("button",{onClick:e,className:"text-gray-500 hover:text-white text-xs font-bold font-mono px-2 py-0.5 rounded hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500","aria-label":"Close terminal modal",children:"ESC"})]}),o.jsx("div",{className:"flex-1 p-4 overflow-y-auto font-mono text-xs text-green-400 space-y-1.5 scrollbar-thin","aria-live":"polite",children:a.map((c,h)=>o.jsx("div",{className:"whitespace-pre-wrap leading-relaxed",children:c},h))}),o.jsxs("form",{onSubmit:d,className:"bg-[#05080e]/60 border-t border-white/[0.05] p-3 flex items-center gap-2",children:[o.jsx("label",{htmlFor:"terminal-input",className:"font-mono text-xs text-indigo-400 font-bold",children:"guest@donneto:~$"}),o.jsx("input",{id:"terminal-input",name:"terminalInput",type:"text",autoFocus:!0,autoComplete:"off",spellCheck:!1,"aria-label":"Terminal command input",value:r,onChange:c=>s(c.target.value),placeholder:"Type 'help' and press Enter…",className:"flex-1 bg-transparent text-xs font-mono text-green-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 placeholder:text-gray-700"})]})]})})}function Kp({isLightMode:i=!1}){const[e,t]=Fe.useState(!1),[n,r]=Fe.useState(""),[s,a]=Fe.useState([{sender:"bot",text:"Hello! 👋 I'm Reynald's virtual assistant. How can I help you today? Ask me about projects, skills, or contact info."}]),[l,d]=Fe.useState(!1),c=h=>{h.trim()&&(a(f=>[...f,{sender:"user",text:h}]),r(""),d(!0),setTimeout(()=>{d(!1);const f=h.toLowerCase();let u="I'm not sure about that. Try selecting one of the quick options below or ask about 'projects', 'skills', or 'hire'.";f.includes("project")||f.includes("work")?u="Reynald has developed outstanding systems like Topcell CRM, ANTEKHUB (Flutter mobile app), and Jokka Web (Makassar culture explorer). You can inspect them in the Projects section!":f.includes("skill")||f.includes("stack")||f.includes("tech")?u="His core stack includes Laravel, Next.js, React, Tailwind CSS, Flutter, Firebase, Docker, Nginx, and Cybersecurity Incident Response.":f.includes("hire")||f.includes("contact")||f.includes("email")||f.includes("phone")?u="You can contact Reynald directly via email at reynald030685@gmail.com or hit the Contact cards to message him on LinkedIn/WhatsApp!":(f.includes("hello")||f.includes("hi ")||f.includes("hey"))&&(u="Hello! Let me know what you'd like to discover about Reynald's engineering stack or custom software services."),a(x=>[...x,{sender:"bot",text:u}])},750))};return o.jsxs("div",{className:"fixed bottom-6 right-6 z-40 flex flex-col items-end",children:[e&&o.jsxs("div",{className:"cyber-card w-[320px] sm:w-[350px] h-[450px] rounded-3xl border border-white/[0.08] bg-[#0d141d]/90 overflow-hidden shadow-2xl flex flex-col justify-between mb-4 animate-slide-up",role:"dialog","aria-modal":"true","aria-label":"Reynald's virtual assistant chatbot",children:[o.jsxs("div",{className:"bg-[#075e54] p-4 flex items-center gap-3 text-white",children:[o.jsxs("div",{className:"relative",children:[o.jsx("div",{className:"w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-lg",children:o.jsx("i",{className:"fa-solid fa-robot","aria-hidden":"true"})}),o.jsx("div",{className:"w-2.5 h-2.5 bg-green-400 rounded-full absolute bottom-0 right-0 border border-[#075e54] animate-pulse"})]}),o.jsxs("div",{children:[o.jsx("span",{className:"font-bold text-sm block font-outfit",children:"Don Neto Assistant"}),o.jsx("span",{className:"text-[10px] text-green-200",children:"Online"})]})]}),o.jsxs("div",{className:"flex-1 p-4 bg-[#0b141a]/95 overflow-y-auto space-y-3.5 scrollbar-thin","aria-live":"polite",children:[s.map((h,f)=>o.jsx("div",{className:`flex ${h.sender==="user"?"justify-end":"justify-start"}`,children:o.jsx("div",{className:`p-3 rounded-2xl text-xs max-w-[85%] font-medium relative shadow ${h.sender==="user"?"bg-[#005c4b] text-white rounded-tr-none":"bg-[#202c33] text-gray-200 rounded-tl-none"}`,children:h.text})},f)),l&&o.jsx("div",{className:"flex justify-start",children:o.jsxs("div",{className:"p-3 bg-[#202c33] text-gray-400 rounded-2xl rounded-tl-none text-xs flex items-center gap-1",children:[o.jsx("span",{className:"w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"}),o.jsx("span",{className:"w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce",style:{animationDelay:"0.2s"}}),o.jsx("span",{className:"w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce",style:{animationDelay:"0.4s"}})]})})]}),o.jsx("div",{className:"px-4 py-2 bg-white/[0.01] border-t border-white/[0.04] flex flex-wrap gap-1.5",children:[{label:"📁 View Projects",val:"Show Projects"},{label:"🛠️ Core Stack",val:"Check Core Stack"},{label:"💼 Contact Info",val:"Hire Reynald"}].map((h,f)=>o.jsx("button",{type:"button",onClick:()=>c(h.val),className:"px-2.5 py-1 bg-white/5 border border-white/10 hover:border-indigo-500/30 rounded-full text-[10px] text-gray-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",children:h.label},f))}),o.jsxs("form",{onSubmit:h=>{h.preventDefault(),c(n)},className:"bg-[#1f2c34] p-3 flex items-center gap-2",children:[o.jsx("input",{id:"chatbot-input",name:"chatbotInput",type:"text",autoComplete:"off",spellCheck:!1,"aria-label":"Type your message to assistant",value:n,onChange:h=>r(h.target.value),placeholder:"Type a message…",className:"flex-1 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-2 text-xs text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 placeholder:text-gray-400"}),o.jsx("button",{type:"submit",className:"w-8 h-8 rounded-full bg-[#00a884] hover:bg-[#008f72] flex items-center justify-center text-white text-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white","aria-label":"Send message to assistant",children:o.jsx("i",{className:"fa-solid fa-paper-plane","aria-hidden":"true"})})]})]}),o.jsx("button",{onClick:()=>t(!e),className:"w-14 h-14 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 active:scale-95 transition-all shadow-green-600/20 z-40 relative animate-bounce focus:outline-none focus-visible:ring-4 focus-visible:ring-green-400","aria-label":e?"Close virtual assistant chatbot":"Open virtual assistant chatbot",children:e?o.jsx("i",{className:"fa-solid fa-xmark","aria-hidden":"true"}):o.jsxs(o.Fragment,{children:[o.jsx("i",{className:"fab fa-whatsapp","aria-hidden":"true"}),o.jsx("span",{className:"absolute -top-1 -right-1 w-4.5 h-4.5 bg-red-500 rounded-full border-2 border-[#030712] flex items-center justify-center text-[9px] font-bold text-white animate-pulse",children:"1"})]})})]})}const Zp=[{id:1,name:"Web App Development Service",category:"Full-Stack Dev",price:15e5,image:"💻"},{id:2,name:"Flutter Mobile App UI Module",category:"Mobile Dev",price:12e5,image:"📱"},{id:3,name:"Cybersecurity Vulnerability Audit",category:"Security",price:2e6,image:"🛡️"},{id:4,name:"Laravel REST API Architecture",category:"Backend API",price:95e4,image:"⚡"}];function Jp({isLightMode:i=!1,simCart:e,setSimCart:t,scrollToSection:n}){const[r,s]=Fe.useState("cart"),[a,l]=Fe.useState(""),[d,c]=Fe.useState(""),[h,f]=Fe.useState("qris"),[u,x]=Fe.useState(!1),[v,S]=Fe.useState(null),[m,p]=Fe.useState(0),[A,R]=Fe.useState(900);Fe.useEffect(()=>{let I;return r==="qris"&&A>0&&(I=setInterval(()=>{R(X=>X>0?X-1:0)},1e3)),()=>clearInterval(I)},[r,A]);const M=I=>{const X=Math.floor(I/60),B=I%60;return`${X.toString().padStart(2,"0")}:${B.toString().padStart(2,"0")}`},E=I=>{t(X=>X.find(j=>j.id===I.id)?X.map(j=>j.id===I.id?{...j,quantity:j.quantity+1}:j):[...X,{id:I.id,name:I.name,price:I.price,image:I.image,quantity:1}]),S(`Added ${I.name} to cart!`),setTimeout(()=>S(null),2500)},w=(I,X)=>{t(B=>B.map(j=>{if(j.id===I){const H=j.quantity+X;return H>0?{...j,quantity:H}:null}return j}).filter(Boolean))},C=()=>e.reduce((I,X)=>I+X.price*X.quantity,0),_=()=>{e.length!==0&&s("checkout")},T=I=>{I.preventDefault(),!(!a||!d)&&(p(Math.floor(Math.random()*9e4+1e4)),R(900),x(!0),setTimeout(()=>{x(!1),s("qris")},1200))},P=()=>{x(!0),setTimeout(()=>{x(!1),s("paid"),setTimeout(()=>{s("notified")},2e3)},1200)},N=()=>{t([]),s("cart"),l(""),c(""),p(0)},k=()=>{let I=d.replace(/\D/g,"");I.startsWith("0")&&(I="62"+I.slice(1));const X=e.map(Z=>`- ${Z.name} (x${Z.quantity})`).join(`
`),B=C().toLocaleString("id-ID"),j=`Halo ${a}!

Terima kasih telah berbelanja di Don Neto Store.

Pembayaran sebesar *Rp ${B}* telah kami terima.

Rincian Pembelian:
${X}

ID Transaksi: #DN-${m}
Status: *LUNAS via QRIS (Midtrans)*

_Nota ini dikirim otomatis oleh simulator website Don Neto._`,H=`https://api.whatsapp.com/send?phone=${I}&text=${encodeURIComponent(j)}`;window.open(H,"_blank")};return o.jsx("section",{id:"simulator",className:"py-24 px-6 relative z-10 scroll-mt-24",children:o.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[o.jsxs("div",{className:"text-center max-w-3xl mx-auto space-y-4",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-mono font-bold uppercase tracking-wider",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-pink-400 animate-ping"}),o.jsx("span",{children:"LIVE INTERACTIVE E-COMMERCE SIMULATOR"})]}),o.jsx("h2",{className:"text-3xl sm:text-4xl font-black tracking-tight font-outfit text-white",children:"Full-Stack E-Commerce & WhatsApp Payment Gateway"}),o.jsx("p",{className:"text-gray-400 text-sm sm:text-base leading-relaxed font-medium",children:"Test the complete automated workflow live: select digital services, simulate Midtrans QRIS payment verification, and generate real WhatsApp receipt dispatches."})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[o.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[o.jsxs("div",{className:"flex justify-between items-center pb-2 border-b border-white/[0.06]",children:[o.jsx("h3",{className:"font-bold text-white text-base font-outfit",children:"Available Digital Services"}),o.jsx("span",{className:"text-[10px] text-gray-400 font-mono",children:"Select item to test"})]}),o.jsx("div",{className:"space-y-3",children:Zp.map(I=>o.jsxs("div",{className:"cyber-card p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-indigo-500/30 transition-all duration-300 flex items-center justify-between group",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"text-2xl p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform",children:I.image}),o.jsxs("div",{children:[o.jsx("h4",{className:"font-bold text-white text-xs group-hover:text-indigo-400 transition-colors font-outfit",children:I.name}),o.jsxs("span",{className:"text-[10px] text-gray-400 block font-mono",children:["Rp ",I.price.toLocaleString("id-ID")]})]})]}),o.jsx("button",{type:"button",onClick:()=>E(I),className:"px-3.5 py-2 bg-indigo-600/20 border border-indigo-500/30 hover:bg-indigo-600 rounded-xl text-xs font-bold text-indigo-300 hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",children:"+ Cart"})]},I.id))}),v&&o.jsxs("div",{className:"p-3 bg-indigo-600/10 border border-indigo-500/25 text-indigo-300 rounded-xl text-xs font-semibold flex items-center gap-2 animate-pulse",children:[o.jsx("i",{className:"fa-solid fa-circle-check","aria-hidden":"true"}),o.jsx("span",{children:v})]})]}),o.jsx("div",{className:"lg:col-span-7",children:o.jsxs("div",{className:"mock-window p-6 relative min-h-[400px] border border-white/[0.08] shadow-[0_0_50px_rgba(99,102,241,0.12)] flex flex-col justify-between",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.06] pb-4 mb-4",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500"}),o.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-yellow-500"}),o.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-green-500"}),o.jsx("span",{className:"text-gray-400 text-[10px] ml-2 font-mono",children:"checkout-gateway.test"})]}),o.jsxs("span",{className:"text-[9px] text-gray-400 bg-white/[0.04] border border-white/[0.08] px-2.5 py-0.5 rounded uppercase font-semibold font-mono",children:["Step: ",r.toUpperCase()]})]}),r==="cart"&&o.jsxs("div",{className:"flex-1 flex flex-col justify-between animate-slide-up",children:[o.jsxs("div",{className:"space-y-4",children:[o.jsxs("h4",{className:"font-bold text-white text-sm font-outfit flex items-center gap-2",children:[o.jsx("i",{className:"fa-solid fa-cart-shopping text-indigo-400","aria-hidden":"true"})," Your Shopping Cart"]}),e.length===0?o.jsxs("div",{className:"text-center py-12 text-gray-400",children:[o.jsx("i",{className:"fa-solid fa-basket-shopping text-3xl mb-3 block text-gray-400","aria-hidden":"true"}),o.jsx("p",{className:"text-xs font-medium",children:"Your cart is empty. Please add products from the left column."})]}):o.jsx("div",{className:"space-y-2.5 max-h-[220px] overflow-y-auto pr-1",children:e.map(I=>o.jsxs("div",{className:"flex items-center justify-between p-2.5 bg-white/[0.02] border border-white/[0.05] rounded-xl text-xs",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"text-xl",children:I.image}),o.jsxs("div",{children:[o.jsx("span",{className:"font-bold text-white block text-xs",children:I.name}),o.jsxs("span",{className:"text-[10px] text-gray-400",children:["Rp ",I.price.toLocaleString("id-ID")]})]})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("button",{type:"button",onClick:()=>w(I.id,-1),className:"w-5 h-5 bg-white/5 border border-white/10 rounded flex items-center justify-center font-bold text-gray-300 hover:bg-white/10","aria-label":`Decrease quantity of ${I.name}`,children:"-"}),o.jsx("span",{className:"font-bold text-white w-4 text-center",children:I.quantity}),o.jsx("button",{type:"button",onClick:()=>w(I.id,1),className:"w-5 h-5 bg-white/5 border border-white/10 rounded flex items-center justify-center font-bold text-gray-300 hover:bg-white/10","aria-label":`Increase quantity of ${I.name}`,children:"+"})]})]},I.id))})]}),o.jsxs("div",{className:"border-t border-white/[0.06] pt-4 mt-4 space-y-3",children:[o.jsxs("div",{className:"flex justify-between items-center text-xs font-bold text-white",children:[o.jsx("span",{children:"Subtotal:"}),o.jsxs("span",{children:["Rp ",C().toLocaleString("id-ID")]})]}),o.jsxs("button",{type:"button",onClick:_,disabled:e.length===0,className:`w-full py-3 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 ${e.length>0?"bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white shadow-lg shadow-indigo-600/20 cursor-pointer":"bg-white/5 border border-white/10 text-gray-500 cursor-not-allowed"}`,children:["Proceed to Checkout ",o.jsx("i",{className:"fa-solid fa-arrow-right text-[10px]","aria-hidden":"true"})]})]})]}),r==="checkout"&&o.jsxs("form",{onSubmit:T,className:"flex-1 flex flex-col justify-between animate-slide-up",children:[o.jsxs("div",{className:"space-y-4",children:[o.jsxs("h4",{className:"font-bold text-white text-sm font-outfit flex items-center gap-2",children:[o.jsx("i",{className:"fa-solid fa-address-card text-cyan-400","aria-hidden":"true"})," Formulir Pengiriman & Pembayaran"]}),o.jsxs("div",{className:"space-y-3",children:[o.jsxs("div",{children:[o.jsx("label",{htmlFor:"sim-name",className:"text-[10px] text-gray-400 block mb-1 font-bold",children:"NAMA PELANGGAN"}),o.jsx("input",{id:"sim-name",name:"simName",type:"text",required:!0,autoComplete:"name",spellCheck:!1,placeholder:"Masukkan nama Anda (misal: Budi)…",value:a,onChange:I=>l(I.target.value),className:"w-full bg-white/[0.03] border border-white/[0.08] text-white rounded-lg px-3 py-2.5 text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors placeholder:text-gray-400"})]}),o.jsxs("div",{children:[o.jsx("label",{htmlFor:"sim-phone",className:"text-[10px] text-gray-400 block mb-1 font-bold",children:"WHATSAPP NUMBER (Simulation Invoice)"}),o.jsx("input",{id:"sim-phone",name:"simPhone",type:"tel",required:!0,autoComplete:"tel",inputMode:"numeric",spellCheck:!1,placeholder:"misal: 08123456789…",value:d,onChange:I=>c(I.target.value),className:"w-full bg-white/[0.03] border border-white/[0.08] text-white rounded-lg px-3 py-2.5 text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors placeholder:text-gray-400"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-[10px] text-gray-400 block mb-1 font-bold",children:"PAYMENT METHOD"}),o.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[o.jsxs("button",{type:"button",onClick:()=>f("qris"),className:`p-2.5 rounded-lg border text-left flex items-center justify-between text-[11px] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${h==="qris"?"bg-indigo-600/10 border-indigo-500 text-indigo-300":"bg-white/[0.02] border-white/[0.05] text-gray-400 hover:border-white/10"}`,children:[o.jsx("span",{className:"font-bold",children:"QRIS (Automated)"}),o.jsx("i",{className:"fa-solid fa-qrcode text-xs","aria-hidden":"true"})]}),o.jsxs("button",{type:"button",onClick:()=>f("va"),className:`p-2.5 rounded-lg border text-left flex items-center justify-between text-[11px] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${h==="va"?"bg-indigo-600/10 border-indigo-500 text-indigo-300":"bg-white/[0.02] border-white/[0.05] text-gray-400 hover:border-white/10"}`,children:[o.jsx("span",{className:"font-bold",children:"Virtual Account"}),o.jsx("i",{className:"fa-solid fa-building-columns text-xs","aria-hidden":"true"})]})]})]})]})]}),o.jsxs("div",{className:"border-t border-white/[0.06] pt-4 mt-4 space-y-3",children:[o.jsxs("div",{className:"flex justify-between items-center text-xs font-bold text-white",children:[o.jsx("span",{children:"Total Invoice:"}),o.jsxs("span",{children:["Rp ",C().toLocaleString("id-ID")]})]}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("button",{type:"button",onClick:()=>s("cart"),className:"w-1/3 py-2.5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] text-gray-300 font-bold rounded-xl text-xs transition-colors",children:"Back"}),o.jsx("button",{type:"submit",disabled:u,className:"w-2/3 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20",children:u?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"w-3.5 h-3.5 border-2 border-t-transparent border-white rounded-full animate-spin"}),"Generating token…"]}):o.jsxs(o.Fragment,{children:["Generate Payment Invoice ",o.jsx("i",{className:"fa-solid fa-credit-card text-[10px]","aria-hidden":"true"})]})})]})]})]}),r==="qris"&&o.jsxs("div",{className:"flex-1 flex flex-col justify-between items-center text-center animate-slide-up py-3 font-outfit",children:[o.jsxs("div",{className:"space-y-3 w-full max-w-[280px]",children:[o.jsx("h4",{className:"font-bold text-white text-sm font-outfit",children:"Simulated Midtrans Payment"}),o.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-xs font-mono font-bold text-pink-500 animate-pulse pb-1",children:[o.jsx("i",{className:"fa-solid fa-clock","aria-hidden":"true"}),o.jsxs("span",{children:["Time Limit: ",M(A)]})]}),h==="qris"?o.jsxs("div",{className:"p-4 bg-white rounded-2xl flex flex-col items-center justify-center border border-indigo-200/50 shadow-lg relative overflow-hidden w-full",children:[o.jsxs("div",{className:"w-36 h-36 border border-gray-200 rounded-lg flex items-center justify-center bg-gray-50 relative p-1.5 pt-3",children:[o.jsx("span",{className:"absolute top-1 text-[9px] font-black text-blue-900 tracking-wider",children:"QRIS"}),o.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=110x110&color=030712&data=${encodeURIComponent("https://www.abner.my.id/")}`,alt:"QRIS Code",className:"w-28 h-28 border border-gray-300 rounded"})]}),o.jsxs("span",{className:"text-[10px] text-gray-700 font-bold mt-2 font-mono",children:["ORDER-ID: DN-",m]})]}):o.jsxs("div",{className:"p-4 bg-[#090d16] border border-white/[0.06] rounded-2xl flex flex-col items-stretch text-left w-full space-y-3 shadow-md",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.06] pb-2",children:[o.jsx("span",{className:"font-bold text-white text-xs",children:"Simulated Virtual Account"}),o.jsx("span",{className:"text-[10px] text-indigo-400 font-extrabold",children:"BANK MANDIRI"})]}),o.jsxs("div",{className:"space-y-1.5",children:[o.jsx("label",{className:"text-[9px] text-gray-400 block font-semibold",children:"VIRTUAL ACCOUNT NUMBER"}),o.jsxs("div",{className:"flex items-center justify-between bg-white/[0.04] border border-white/[0.06] rounded-lg p-2.5",children:[o.jsxs("span",{className:"font-mono text-xs text-white tracking-widest font-bold",children:["88012",d.replace(/\D/g,"").slice(-10).padStart(10,"0")]}),o.jsx("button",{type:"button",onClick:()=>{const I=`88012${d.replace(/\D/g,"").slice(-10).padStart(10,"0")}`;navigator.clipboard.writeText(I),S("Virtual Account copied!"),setTimeout(()=>S(null),2e3)},className:"text-[9px] font-bold text-indigo-400 hover:text-indigo-300 px-2 py-1 bg-indigo-500/10 rounded border border-indigo-500/20 transition-colors",children:"Copy"})]})]}),o.jsx("p",{className:"text-[9px] text-gray-400 leading-normal",children:"Copy the Virtual Account number above and simulate a paid VA transfer by clicking the green button below."})]}),o.jsxs("p",{className:"text-[10px] text-gray-400 leading-tight font-mono",children:["Total Invoice:"," ",o.jsxs("span",{className:"font-bold text-indigo-400",children:["Rp ",C().toLocaleString("id-ID")]})]})]}),o.jsxs("div",{className:"w-full mt-4 space-y-2",children:[o.jsx("button",{type:"button",onClick:P,disabled:u,className:"w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 glow-payment-success active:scale-[0.98]",children:u?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"w-3.5 h-3.5 border-2 border-t-transparent border-white rounded-full animate-spin"}),"Verifying Payment…"]}):o.jsxs(o.Fragment,{children:[o.jsx("i",{className:"fa-solid fa-circle-check","aria-hidden":"true"})," ",h==="qris"?"Simulate Successful Scan & Pay":"Simulate Paid VA Transfer"]})}),o.jsx("button",{type:"button",onClick:()=>s("checkout"),className:"w-full py-2 bg-white/[0.01] hover:bg-white/[0.04] border border-white/[0.06] text-gray-400 hover:text-gray-200 rounded-xl text-[10px] transition-colors",children:"Cancel Payment"})]})]}),r==="paid"&&o.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center text-center animate-slide-up space-y-4",children:[o.jsx("div",{className:"w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-3xl text-green-400 animate-bounce shadow-lg shadow-green-500/10",children:o.jsx("i",{className:"fa-solid fa-check","aria-hidden":"true"})}),o.jsxs("div",{className:"space-y-1",children:[o.jsx("h4",{className:"font-extrabold text-white text-lg font-outfit",children:"Payment Successful!"}),o.jsx("p",{className:"text-xs text-gray-400 max-w-[280px] leading-relaxed",children:"Midtrans Gateway has successfully forwarded the payment webhook to the backend system."})]}),o.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/5 border border-indigo-500/20 text-indigo-300 text-[10px] animate-pulse",children:[o.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping"}),"Sending Automated Invoice via WhatsApp…"]})]}),r==="notified"&&o.jsxs("div",{className:"flex-1 flex flex-col justify-between animate-slide-up",children:[o.jsxs("div",{className:"space-y-3.5",children:[o.jsxs("div",{className:"flex items-center gap-2.5 bg-green-950/20 border border-green-500/20 p-2.5 rounded-2xl",children:[o.jsx("div",{className:"w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-sm",children:o.jsx("i",{className:"fab fa-whatsapp","aria-hidden":"true"})}),o.jsxs("div",{children:[o.jsx("span",{className:"font-bold text-white block text-xs",children:"WhatsApp Notification Dispatch"}),o.jsxs("span",{className:"text-[9px] text-green-400 font-mono",children:["Invoice successfully sent to +",d.replace(/\D/g,"").startsWith("0")?"62"+d.replace(/\D/g,"").slice(1):d.replace(/\D/g,"")]})]})]}),o.jsxs("div",{className:"bg-[#0b141a] border border-[#202c33] rounded-2xl p-4 text-xs font-mono text-gray-200 relative shadow-2xl",children:[o.jsx("div",{className:"absolute top-4 -left-2 w-0 h-0 border-t-[8px] border-t-transparent border-r-[10px] border-r-[#0b141a] border-b-[8px] border-b-transparent"}),o.jsxs("div",{className:"flex justify-between items-center text-[10px] text-green-400 font-bold mb-2",children:[o.jsx("span",{children:"💬 Don Neto Store - INVOICE"}),o.jsx("span",{children:new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})})]}),o.jsxs("div",{className:"border-b border-gray-800 pb-2 mb-2 text-[10px] text-gray-400",children:["Transaction ID: ",o.jsxs("span",{className:"text-white font-bold",children:["#DN-",m]})]}),o.jsxs("div",{className:"space-y-1 text-[11px] leading-relaxed",children:[o.jsxs("p",{children:["Hello ",o.jsx("span",{className:"text-white font-bold",children:a}),"!"]}),o.jsxs("p",{children:["We have received your payment of"," ",o.jsxs("span",{className:"text-green-400 font-bold",children:["Rp ",C().toLocaleString("id-ID")]}),"."]}),o.jsx("p",{className:"pt-1.5 text-gray-400",children:"Purchase Details:"}),o.jsx("ul",{className:"list-disc pl-4 text-gray-300",children:e.map(I=>o.jsxs("li",{children:[I.name," (x",I.quantity,")"]},I.id))}),o.jsxs("p",{className:"pt-2 text-[10px] text-gray-400 font-medium",children:["Status:"," ",o.jsx("span",{className:"bg-green-500/10 text-green-400 px-1.5 py-0.5 rounded font-bold border border-green-500/20 uppercase text-[9px]",children:"Paid via QRIS"})]})]})]})]}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 mt-4",children:[o.jsxs("button",{type:"button",onClick:k,className:"w-full sm:w-2/3 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-green-600/10 hover:shadow-green-600/20 active:scale-95",children:[o.jsx("i",{className:"fab fa-whatsapp","aria-hidden":"true"})," Send to Real WhatsApp"]}),o.jsxs("button",{type:"button",onClick:N,className:"w-full sm:w-1/3 py-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] text-gray-300 font-bold rounded-xl text-xs transition-all duration-300 flex items-center justify-center gap-2",children:[o.jsx("i",{className:"fa-solid fa-rotate-left","aria-hidden":"true"})," Reset"]})]})]})]})})]})]})})}const Qp=Co.lazy(()=>wl(()=>import("./index.B-g_RpYn.js").then(i=>i.i),__vite__mapDeps([0,1])).then(i=>({default:i.GitHubCalendar}))),Ro=()=>{const i=Fe.useRef(null);return Fe.useEffect(()=>{const e=i.current;if(!e)return;const t=e.getContext("2d");if(!t)return;e.width=window.innerWidth,e.height=window.innerHeight;const n=Math.floor(e.width/20),r=Array(n).fill(0);let s;const a=()=>{t.fillStyle="rgba(3, 7, 18, 0.15)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#22c55e",t.font="15px monospace",r.forEach((c,h)=>{const f=String.fromCharCode(Math.floor(Math.random()*96)+33),u=h*20;t.fillText(f,u,c),c>100+Math.random()*1e4?r[h]=0:r[h]=c+20})},l=()=>{a(),s=requestAnimationFrame(l)};l();const d=()=>{e.width=window.innerWidth,e.height=window.innerHeight};return window.addEventListener("resize",d),()=>{cancelAnimationFrame(s),window.removeEventListener("resize",d)}},[]),o.jsx("canvas",{ref:i,className:"fixed inset-0 z-[100] w-full h-full pointer-events-none"})};function tm(){const[i,e]=Fe.useState("home"),[t,n]=Fe.useState(!1),[r,s]=Fe.useState(!0),[a,l]=Fe.useState(0),[d,c]=Fe.useState("> BOOT: INITIATING SECURE ARCHITECTURE PROTOCOLS..."),[h,f]=Fe.useState(!1),[u,x]=Fe.useState({x:0,y:0}),[v,S]=Fe.useState([]),[m,p]=Fe.useState(null),[A,R]=Fe.useState(!1),M=Fe.useRef(!1),[E,w]=Fe.useState(()=>{if(typeof window<"u"){const F=localStorage.getItem("theme");return F==="light"?!0:F==="dark"?!1:window.matchMedia("(prefers-color-scheme: light)").matches}return!1}),[C,_]=Fe.useState(0),[T,P]=Fe.useState(!1),[N,k]=Fe.useState(!1),[I,X]=Fe.useState([]);Fe.useEffect(()=>{if(typeof window<"u"){const F=document.documentElement.classList.contains("light");F!==E&&w(F)}},[]),Fe.useEffect(()=>{document.documentElement.classList.toggle("light",E),typeof window<"u"&&localStorage.setItem("theme",E?"light":"dark")},[E]);const[B]=Fe.useState(null),j=Fe.useRef(null),H=[{id:5,title:"E-Logbook Radiology UNHAS",category:"Academic & Medical Platform",description:"A web-based academic monitoring and digital logbook system developed for the Radiology Specialist Medical Education Program at Hasanuddin University.",longDescription:"A comprehensive web-based academic monitoring and digital logbook platform developed for the Radiology Specialist Medical Education Program at Hasanuddin University (UNHAS). The system enables residents to log clinical procedures, track curriculum milestones, manage academic portfolios, and receive supervisor approvals and feedback seamlessly.",technologies:["Laravel","PHP","MySQL","JavaScript","HTML","CSS","Bootstrap","REST API","PWA"],github:null,demo:"https://radiologiunhas.cloud/",image:"fa-solid fa-notes-medical",color:"from-cyan-600 via-blue-600 to-indigo-600",features:["Digital clinical activity and learning logbook","Resident academic progress monitoring & milestones","Supervisor approval and feedback system","Clinical case and supporting document management","Study plan and course management pipelines","Role-based access control for residents, supervisors, and admins","Integrated dashboard analytics and reporting system","Progressive Web App (PWA) installation support"],status:"Completed"},{id:4,title:"Topcell CRM",category:"Enterprise Web Application",description:"Comprehensive CRM system with Qontak WhatsApp API integration, custom follow-up pipelines (H1, H7, 1-Month), role privilege management, and advanced sales analytics.",longDescription:"An enterprise CRM platform built on Laravel, MySQL, and Tailwind CSS. The application automates customer follow-ups by integrating the Qontak WhatsApp Business API. It provides automatic checkpoint tracking engines, role privileges, transaction ledger filter reports, and marketing message templates.",technologies:["Laravel","PHP","Tailwind CSS","MySQL","Qontak API","Axios","Vite"],github:"https://github.com/reynaldabnerrr/CRM_TOPCELL.git",demo:null,image:"fa-solid fa-comments",color:"from-indigo-600 via-purple-600 to-cyan-500",features:["Dynamic follow-up checkpoints tracker (H+1, H+7, 1-Month)","Qontak WhatsApp Business API template syncing & broadcasting","Role privilege management toggles for Sales and Aftercare staff","Multi-column date range filters on massive transaction ledgers","Automatic token refresh cycles for uninterrupted API communications","Fully responsive modern admin dashboard layout"],status:"Completed"},{id:1,title:"ANTEKHUB (Mobile App)",category:"Mobile Application",description:"Flutter-based mobile application frontend for alumni, students, and professional networking. Supports job searches and mentorship.",longDescription:"Developed the frontend of ANTEKHUB, a Flutter app to facilitate networking among alumni, students, and professionals. Designed responsive UI for user comfort, directory features, mentorship portal, job listings, and RESTful API integration.",technologies:["Flutter","Dart","Firebase","RESTful API","Git"],github:"https://github.com/reynaldabnerrr/AntekHub.git",demo:null,image:"fa-solid fa-mobile-screen-button",color:"from-blue-600 to-purple-600",features:["Responsive and user-friendly UI for professional networking","Alumni and student directories integration","Mentorship portal and opportunity sharing features","Job listings and event management pipelines","Seamless integration with RESTful backend endpoints"],status:"Completed"},{id:2,title:"Jokka Web",category:"Web Application",description:"Tourism platform introducing Makassar's culture, tourist destinations, and local culinary experiences. Equipped with an interactive itinerary planner.",longDescription:"A Makassar culture and travel explorer application. Provides detailed destination data, local tourism event calendars, local culinary guides, interactive maps, and a database-driven user review system.",technologies:["Next.js","React","TypeScript","Tailwind CSS","Vercel","API Integration"],github:"https://github.com/reynaldabnerrr/Jokka.git",demo:"https://jokka-1d960.firebaseapp.com",image:"fa-solid fa-globe",color:"from-emerald-500 to-teal-600",features:["Interactive destination explorer","Event calendar and booking system","Cultural heritage showcase","Culinary guide and recommendations","Travel itinerary planner","User reviews and ratings"],status:"Completed"},{id:3,title:"Topcell Company Profile",category:"Corporate Website",description:"Modern corporate profile website for Topcell, presenting services, vision, and digital solutions interactively and elegantly.",longDescription:"Professional corporate profile website designed to display Topcell's services, vision, mission, and brand identity. Built using Next.js and Tailwind CSS with smooth animations and a modern layout on both desktop and mobile.",technologies:["Next.js","React","TypeScript","Tailwind CSS","Vercel"],github:"https://github.com/reynaldabnerrr",demo:"https://topcell.topgroup.asia/",image:"fa-solid fa-building",color:"from-orange-500 to-red-500",features:["Professional company profile presentation","Responsive and modern landing page","Service and portfolio showcase","Clear call-to-action sections","Optimized experience for desktop and mobile"],status:"Completed"}],Z=[{title:"GEMASTIK XVIII",category:"Finalist — Cyber Security Division",date:"Oct 2025",icon:"fa-solid fa-trophy text-yellow-400",details:"National student technology competition organized by Balai Pengembangan Talenta Indonesia."},{title:"Pragyan CTF 2025",category:"1st Place (Student Category)",date:"Feb 2025",icon:"fa-solid fa-award text-yellow-500",details:"International Capture The Flag competition organized by NIT Trichy, India."},{title:"Interfest CTF",category:"Top 6 (Telkom University)",date:"Dec 2024",icon:"fa-solid fa-crosshairs text-red-500",details:"National cybersecurity competition with hands-on penetration testing scenarios."},{title:"Cyber Jawara International",category:"Top 11",date:"Oct 2024",icon:"fa-solid fa-globe text-blue-400",details:"Prestigious national/regional CTF competition for professional and student teams."},{title:"HOLOGY 7.0 CTF",category:"Top 20 (Brawijaya University)",date:"Oct 2024",icon:"fa-solid fa-shield-halved text-cyan-400",details:"Cyber incident analysis and national CTF challenge-solving competition."},{title:"COMPFEST 16 CTF",category:"Finalist (Universitas Indonesia)",date:"Sep 2024",icon:"fa-solid fa-lightbulb text-amber-400",details:"One of the most rigorous and challenging student CTF competitions in Indonesia."},{title:"GEMASTIK XVII",category:"Finalist — Cyber Security Division",date:"Sep 2024",icon:"fa-solid fa-lock text-purple-400",details:"Finalist in the Cyber Security division at the XVII National GEMASTIK competition."}],ie=[{role:"Software Engineer (Intern)",org:"RS UNHAS",period:"May 2025 – September 2025",points:["Developed and maintained backend systems for a web-based E-Logbook Information System.","Built RESTful APIs using Laravel and managed MySQL databases with high performance.","Implemented authentication and role-based access control for system security.","Collaborated with frontend developers for seamless interface integration.","Conducted API testing, debugging, and prepared technical documentation."]},{role:"Teaching Assistant – Mobile App Programming",org:"Universitas Hasanuddin (UNHAS)",period:"August 2025 – December 2025",points:["Assisted lecturing professors in delivering mobile application programming courses for undergraduate classes.","Guided students through Flutter laboratory sessions, from basic OOP concepts to deployment.","Provided technical support in debugging, UI/UX design concepts, and state management optimization.","Transferred understanding of clean code, folder structures, and error-solving best practices.","Evaluated weekly assignments and assisted in standardizing undergraduate laboratory grading."]},{role:"Freelance Frontend Developer",org:"ANTEKHUB (Mobile App)",period:"July 2024 – September 2024",points:["Developed the frontend of the ANTEKHUB application using Flutter for alumni and students.","Built responsive and fluid UI for comfortable networking navigation.","Integrated directory features, job listings, mentorship programs, and event schedulers.","Collaborated closely with the backend team for optimal consumption of RESTful API data."]}],ae=[{role:"Head of Digital Forensics",org:"ICC UH (IT Computer Club Universitas Hasanuddin)",period:"January 2025 – June 2025",points:["Led regular training sessions on Digital Forensics, OSINT, and digital investigation techniques.","Transferred skills in disk forensics, memory analysis, and cyber CTF challenge solving.","Participated in external CTF competitions representing the university IT computer club.","Developed the club's cybersecurity curriculum to be relevant with current industry trends."]},{role:"Coordinator – Mobile App Development",org:"Coder Institute",period:"March 2024 – February 2025",points:["Designed curriculum and compiled structured learning modules for mobile application development.","Delivered training materials and facilitated hands-on mentoring in Flutter & Android frameworks.","Guided members in creating real-world mobile application projects from ideation to presentation.","Evaluated members' learning progress periodically for curriculum effectiveness."]},{role:"Core Team – Technical",org:"Google Developer Student Clubs (GDSC)",period:"September 2023 – October 2024",points:["Delivered periodic technical sessions and compiled technology introduction module assets.","Mentored members in basic Flutter implementation and API connectivity.","Supported the growth ecosystem of the developer community at the university level."]}];Fe.useEffect(()=>{const F=setInterval(()=>{l(Le=>{if(Le>=100)return clearInterval(F),100;const ye=Math.floor(Math.random()*12)+6,Y=Math.min(Le+ye,100);return Y<25?c("> BOOT: INITIATING SECURE ARCHITECTURE PROTOCOLS..."):Y<50?c("> NET: ESTABLISHING INTEGRATED CRM ENDPOINTS..."):Y<75?c("> RENDER: SHADING DYNAMIC CYBER GRAPHICS GRID..."):Y<95?c("> CORE: SPINNING DECORATIVE BACKGROUND PARTICLES..."):c("> SYSTEM: COGNITIVE WORKSPACE ONLINE."),Y})},35),re=setTimeout(()=>{l(100)},1500);return()=>{clearInterval(F),clearTimeout(re)}},[]),Fe.useEffect(()=>{if(a>=100){const F=setTimeout(()=>{f(!0)},300),re=setTimeout(()=>{s(!1)},700);return()=>{clearTimeout(F),clearTimeout(re)}}},[a]),Fe.useEffect(()=>{const F=()=>{const ye=[],Y=typeof window<"u"&&window.innerWidth<768?25:55;for(let J=0;J<Y;J++)ye.push({id:J,x:Math.random()*(typeof window<"u"?window.innerWidth:1200),y:Math.random()*(typeof window<"u"?window.innerHeight:800),vx:(Math.random()-.5)*1.2,vy:(Math.random()-.5)*1.2,size:Math.random()*2+1.2});S(ye)},re=ye=>{x({x:ye.clientX,y:ye.clientY})},Le=()=>{if(n(window.scrollY>40),M.current)return;const ye=["home","about","services","simulator","skills","projects","achievements","github","contact"],Y=window.scrollY+160;ye.forEach(J=>{const te=document.getElementById(J);if(te){const le=te.getBoundingClientRect(),Se=le.top+window.scrollY,ve=le.height;Y>=Se&&Y<Se+ve&&e(J)}})};return F(),window.addEventListener("scroll",Le),window.addEventListener("mousemove",re),()=>{window.removeEventListener("scroll",Le),window.removeEventListener("mousemove",re)}},[]),Fe.useEffect(()=>{const F=j.current;if(!F)return;const re=F.getContext("2d");if(!re)return;let Le;const ye=()=>{F.width=window.innerWidth,F.height=window.innerHeight},Y=()=>{re.clearRect(0,0,F.width,F.height),v.forEach(J=>{const te=u.x-J.x,le=u.y-J.y,Se=Math.sqrt(te*te+le*le);if(Se<160){const ve=(160-Se)/160;J.x-=te*ve*.025,J.y-=le*ve*.025}J.x+=J.vx,J.y+=J.vy,J.x<0?(J.x=0,J.vx*=-1):J.x>F.width&&(J.x=F.width,J.vx*=-1),J.y<0?(J.y=0,J.vy*=-1):J.y>F.height&&(J.y=F.height,J.vy*=-1),re.beginPath(),re.arc(J.x,J.y,J.size,0,Math.PI*2),re.fillStyle="rgba(99, 102, 241, 0.35)",re.fill(),v.forEach(ve=>{if(J.id!==ve.id){const $e=J.x-ve.x,Ie=J.y-ve.y,Ke=Math.sqrt($e*$e+Ie*Ie);Ke<95&&(re.beginPath(),re.strokeStyle=`rgba(6, 182, 212, ${.12*(1-Ke/95)})`,re.lineWidth=.5,re.moveTo(J.x,J.y),re.lineTo(ve.x,ve.y),re.stroke())}})}),Le=requestAnimationFrame(Y)};return ye(),Y(),window.addEventListener("resize",ye),()=>{window.removeEventListener("resize",ye),cancelAnimationFrame(Le)}},[v,u]);const oe=F=>{const re=document.getElementById(F);if(re){const ye=document.body.getBoundingClientRect().top,te=re.getBoundingClientRect().top-ye-80;M.current=!0,e(F),window.scrollTo({top:te,behavior:"smooth"}),setTimeout(()=>{M.current=!1},800)}};return o.jsxs("div",{className:"min-h-screen w-full bg-[var(--background)] text-[var(--foreground)] selection:bg-indigo-500/30 selection:text-indigo-200 relative overflow-hidden",children:[r&&o.jsxs("div",{className:`workspace-loader fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-500 overflow-hidden ${E?"bg-slate-50 text-slate-900":"bg-[#030712] text-white"} ${h?"opacity-0 scale-95 pointer-events-none":"opacity-100 scale-100"}`,children:[o.jsx("div",{className:"cyber-grid absolute inset-0 opacity-30 pointer-events-none"}),o.jsx("div",{className:"absolute w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[100px] -top-20 -left-20 pointer-events-none animate-pulse"}),o.jsx("div",{className:"absolute w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[100px] -bottom-20 -right-20 pointer-events-none animate-pulse",style:{animationDelay:"1s"}}),o.jsxs("div",{className:"relative flex flex-col items-center justify-center p-6 max-w-md w-full z-10 text-center space-y-8 select-none",children:[o.jsxs("div",{className:"relative flex items-center justify-center w-48 h-48",children:[o.jsx("div",{className:"absolute inset-0 rounded-full border border-indigo-500/20 blur-[1px] animate-ping",style:{animationDuration:"3s"}}),o.jsx("div",{className:"absolute w-44 h-44 border-2 border-dashed border-indigo-500/40 rounded-full animate-spin",style:{animationDuration:"14s"}}),o.jsx("div",{className:"absolute w-48 h-48 border-2 border-t-indigo-500 border-b-cyan-400 border-r-transparent border-l-transparent rounded-full animate-spin",style:{animationDuration:"5s"}}),o.jsx("div",{className:"absolute w-36 h-36 border-2 border-r-pink-500 border-l-indigo-400 border-t-transparent border-b-transparent rounded-full animate-spin",style:{animationDuration:"3s",animationDirection:"reverse"}}),o.jsx("div",{className:"absolute w-28 h-28 bg-gradient-to-tr from-indigo-600/20 via-cyan-500/20 to-pink-500/20 rounded-full blur-lg animate-pulse"}),o.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center space-y-1",children:[o.jsxs("span",{className:"text-4xl font-extrabold tracking-tighter font-outfit text-gradient bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 bg-clip-text text-transparent drop-shadow-md",children:[a,"%"]}),o.jsx("span",{className:"text-[10px] uppercase font-mono font-bold tracking-widest text-indigo-500 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20",children:"SYSTEM INITIALIZING"})]})]}),o.jsxs("div",{className:`loader-card p-6 w-full rounded-3xl border backdrop-blur-2xl space-y-4 shadow-2xl relative transition-all duration-300 ${E?"bg-white/85 border-slate-200/80 shadow-[0_20px_60px_rgba(79,70,229,0.12)] text-slate-800":"bg-[#070b13]/80 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] text-white"}`,children:[o.jsxs("div",{className:`flex items-center justify-between border-b pb-3 ${E?"border-slate-200":"border-white/10"}`,children:[o.jsxs("div",{className:"flex items-center gap-1.5",children:[o.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500/80"}),o.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-amber-500/80"}),o.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-emerald-500/80"})]}),o.jsxs("div",{className:"flex items-center gap-1.5",children:[o.jsx("i",{className:"fa-solid fa-terminal text-[10px] text-indigo-500"}),o.jsx("span",{className:`text-[10px] font-mono font-extrabold uppercase tracking-wider ${E?"text-slate-600":"text-gray-300"}`,children:"DON NETO // BOOTSTRAP PROTOCOL"})]})]}),o.jsxs("div",{className:"space-y-1.5",children:[o.jsx("div",{className:`w-full border rounded-full h-2 overflow-hidden p-[1px] ${E?"bg-slate-100 border-slate-200":"bg-white/5 border-white/10"}`,children:o.jsx("div",{className:"bg-gradient-to-r from-indigo-600 via-cyan-400 to-pink-500 h-full rounded-full transition-all duration-300 ease-out shadow-[0_0_15px_rgba(99,102,241,0.6)] relative",style:{width:`${a}%`},children:o.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full animate-pulse"})})}),o.jsxs("div",{className:"flex justify-between items-center text-[9px] font-mono text-gray-400 px-0.5",children:[o.jsx("span",{children:"0%"}),o.jsx("span",{className:"font-bold text-indigo-500",children:"OPTIMIZING ASSETS"}),o.jsx("span",{children:"100%"})]})]}),o.jsx("div",{className:`p-2.5 rounded-xl border font-mono text-[11px] flex items-center justify-center transition-colors ${E?"bg-slate-50 border-slate-200 text-indigo-600":"bg-[#030712]/70 border-white/5 text-cyan-400"}`,children:o.jsx("span",{className:"truncate",children:d})}),o.jsxs("div",{className:"flex items-center justify-center gap-2 pt-1 flex-wrap",children:[o.jsx("span",{className:`text-[9px] font-mono px-2.5 py-1 rounded-full border ${E?"bg-indigo-50 border-indigo-200 text-indigo-700":"bg-indigo-500/10 border-indigo-500/20 text-indigo-300"}`,children:"⚡ ASTRO 5"}),o.jsx("span",{className:`text-[9px] font-mono px-2.5 py-1 rounded-full border ${E?"bg-cyan-50 border-cyan-200 text-cyan-700":"bg-cyan-500/10 border-cyan-500/20 text-cyan-300"}`,children:"⚛️ REACT 19"}),o.jsx("span",{className:`text-[9px] font-mono px-2.5 py-1 rounded-full border ${E?"bg-pink-50 border-pink-200 text-pink-700":"bg-pink-500/10 border-pink-500/20 text-pink-300"}`,children:"🛡️ CYBERSEC"})]})]})]})]}),o.jsx("div",{className:"cyber-grid"}),o.jsx("div",{className:"hero-orb top-[-15%] left-[-10%]"}),o.jsx("div",{className:"hero-orb bottom-[15%] right-[-10%] bg-radial-gradient(circle,rgba(6,182,212,0.12)_0%,transparent_65%)"}),o.jsx("div",{className:"hero-orb top-[40%] left-[35%] w-[550px] h-[550px] bg-radial-gradient(circle,rgba(236,72,153,0.04)_0%,transparent_65%)"}),o.jsx("canvas",{ref:j,className:"fixed inset-0 pointer-events-none z-[2]",style:{opacity:.85}}),o.jsxs("div",{className:`telemetry-bar fixed top-0 left-0 right-0 z-50 text-[10px] font-mono py-1.5 px-4 hidden md:flex items-center justify-between transition-colors duration-300 select-none ${E?"bg-slate-100/90 backdrop-blur-md border-b border-slate-200 text-slate-600":"bg-[#030712]/90 backdrop-blur-md border-b border-white/[0.06] text-gray-400"}`,children:[o.jsxs("div",{className:"flex items-center space-x-4",children:[o.jsxs("div",{className:"flex items-center gap-1.5 text-emerald-500 font-bold",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),o.jsx("span",{children:"DEV_ENV: ONLINE"})]}),o.jsx("span",{className:`telemetry-sep ${E?"text-slate-300":"text-white/20"}`,children:"|"}),o.jsxs("span",{children:["LATENCY: ",o.jsx("span",{className:E?"text-cyan-600 font-bold":"text-cyan-400",children:"12ms"})]}),o.jsx("span",{className:`telemetry-sep ${E?"text-slate-300":"text-white/20"}`,children:"|"}),o.jsxs("span",{children:["STACK: ",o.jsx("span",{className:E?"text-indigo-600 font-bold":"text-indigo-400",children:"LARAVEL / REACT / FLUTTER"})]}),o.jsx("span",{className:`telemetry-sep ${E?"text-slate-300":"text-white/20"}`,children:"|"}),o.jsxs("span",{className:"hidden lg:inline",children:["NODE: ",o.jsx("span",{className:E?"text-purple-600 font-bold":"text-purple-400",children:"IDN-JKT-01"})]})]}),o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsxs("button",{onClick:()=>k(!N),className:`px-2 py-0.5 rounded border transition-all ${N?"bg-emerald-500/20 border-emerald-500/50 text-emerald-600 font-bold":E?"border-slate-300 hover:bg-slate-200/60 text-slate-600 font-medium":"border-white/10 hover:border-white/20 text-gray-400"}`,children:[o.jsx("i",{className:"fa-solid fa-code text-[9px] mr-1"}),N?"MATRIX: ON":"MATRIX: OFF"]}),o.jsxs("button",{onClick:()=>P(!0),className:`px-2 py-0.5 rounded border transition-all ${E?"border-indigo-500/30 bg-indigo-50 text-indigo-700 hover:bg-indigo-100/70 font-semibold":"border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20"}`,children:[o.jsx("i",{className:"fa-solid fa-terminal text-[9px] mr-1"}),"TERMINAL [CTRL+K]"]}),I.length>0&&o.jsxs("button",{onClick:()=>oe("simulator"),className:`px-2 py-0.5 rounded border animate-pulse font-bold ${E?"border-pink-500/40 bg-pink-50 text-pink-700":"border-pink-500/40 bg-pink-500/15 text-pink-300"}`,children:[o.jsx("i",{className:"fa-solid fa-cart-shopping text-[9px] mr-1"}),"CART (",I.reduce((F,re)=>F+re.quantity,0),")"]})]})]}),o.jsx("nav",{className:`fixed top-0 md:top-7 left-0 right-0 z-40 transition-all duration-500 ${t?"bg-[var(--background)]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3":"bg-transparent py-4"}`,children:o.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-3",children:[o.jsx("button",{onClick:()=>oe("home"),className:"text-white font-extrabold text-xl tracking-widest hover:opacity-85 transition-opacity flex items-center gap-2 group",children:o.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 font-outfit font-extrabold text-xl tracking-widest text-glow",children:"DON NETO"})}),o.jsxs("div",{className:"hidden lg:flex items-center space-x-1.5",children:[[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"services",label:"Services"},{id:"simulator",label:"Live Demo"},{id:"skills",label:"Skills"},{id:"projects",label:"Projects"},{id:"achievements",label:"Achievements"},{id:"github",label:"Activity"},{id:"contact",label:"Contact"}].map(F=>o.jsx("button",{onClick:()=>oe(F.id),className:`text-xs px-3.5 py-2 rounded-full font-semibold transition-all duration-300 relative ${i===F.id?"text-white bg-indigo-500/20 border border-indigo-500/40 shadow-[0_0_12px_rgba(99,102,241,0.25)]":"text-gray-400 hover:text-white hover:bg-white/[0.04]"}`,children:F.label},F.id)),o.jsx("button",{onClick:()=>w(!E),className:"text-indigo-400 hover:text-white p-2 rounded-full hover:bg-white/[0.04] border border-transparent hover:border-white/[0.08] transition-all ml-2","aria-label":"Toggle Theme",title:"Toggle Light/Dark Theme",children:o.jsx("i",{className:`fa-solid ${E?"fa-moon":"fa-sun"} text-xs`})}),o.jsx("button",{onClick:()=>P(!0),className:"text-indigo-400 hover:text-white p-2 rounded-full hover:bg-white/[0.04] border border-transparent hover:border-white/[0.08] transition-all ml-1","aria-label":"Developer Console",title:"Open Terminal Console",children:o.jsx("i",{className:"fa-solid fa-terminal text-xs"})})]}),o.jsxs("div",{className:"lg:hidden flex items-center gap-1.5 shrink-0",children:[o.jsx("button",{onClick:()=>w(!E),className:"text-indigo-400 w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] transition-colors","aria-label":"Toggle Theme",children:o.jsx("i",{className:`fa-solid ${E?"fa-moon":"fa-sun"} text-xs`})}),o.jsx("button",{onClick:()=>P(!0),className:"text-indigo-400 w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] transition-colors","aria-label":"Developer Console",children:o.jsx("i",{className:"fa-solid fa-terminal text-xs"})}),o.jsx("button",{onClick:()=>R(!A),className:"text-white w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] transition-colors","aria-label":"Toggle menu",children:o.jsx("svg",{className:`w-4.5 h-4.5 transition-transform duration-300 ${A?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:A?o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]})]})}),A&&o.jsx("div",{className:"lg:hidden fixed inset-0 z-[60]","aria-modal":"true",onClick:()=>R(!1),children:o.jsxs("div",{className:"mobile-drawer-panel absolute top-0 left-0 right-0 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl animate-slide-down",onClick:F=>F.stopPropagation(),children:[o.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b border-white/[0.06]",children:[o.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 font-outfit font-extrabold text-xl tracking-widest",children:"DON NETO"}),o.jsx("button",{onClick:()=>R(!1),className:"text-gray-400 hover:text-white p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] transition-colors","aria-label":"Close menu",children:o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),o.jsx("div",{className:"px-5 py-4 space-y-1",children:[{id:"home",label:"Home",icon:"fa-house"},{id:"about",label:"About",icon:"fa-user"},{id:"services",label:"Services",icon:"fa-briefcase"},{id:"simulator",label:"Live Demo",icon:"fa-play"},{id:"skills",label:"Skills",icon:"fa-code"},{id:"projects",label:"Projects",icon:"fa-folder-open"},{id:"achievements",label:"Achievements",icon:"fa-trophy"},{id:"github",label:"GitHub Activity",icon:"fa-chart-bar"},{id:"contact",label:"Contact",icon:"fa-envelope"}].map(F=>o.jsxs("button",{onClick:()=>{oe(F.id),R(!1)},className:`flex items-center gap-3 w-full text-left px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${i===F.id?"bg-indigo-600/15 border border-indigo-500/30 text-indigo-400":"text-gray-300 hover:text-white hover:bg-white/[0.05]"}`,children:[o.jsx("i",{className:`fa-solid ${F.icon} w-4 text-center text-xs ${i===F.id?"text-indigo-400":"text-gray-500"}`}),F.label,i===F.id&&o.jsx("span",{className:"ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400"})]},F.id))})]})}),o.jsxs("header",{id:"home",className:"relative min-h-screen flex flex-col items-center justify-between text-center px-6 pt-24 pb-12 sm:pt-32 sm:pb-24 z-10 overflow-hidden",children:[o.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.1),transparent_65%)] pointer-events-none"}),o.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mx-auto my-auto gap-8 text-left z-10",children:[o.jsxs("div",{className:"flex flex-col items-start w-full lg:w-7/12 space-y-6",children:[o.jsxs("div",{className:"inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono font-semibold tracking-wide uppercase shadow-[0_0_20px_rgba(0,240,255,0.15)]",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-ping"}),o.jsx("span",{children:"FULL-STACK SOFTWARE ENGINEER & MOBILE DEVELOPER"})]}),o.jsxs("h1",{className:"text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-syne leading-none",children:[o.jsx("span",{className:"block text-gray-400 text-base sm:text-lg font-mono mb-2 tracking-widest uppercase",children:"Reynald Abner Tananda, S.T."}),o.jsx("span",{className:"text-gradient-cyber block font-outfit",children:"Engineering Web Apps, Mobile & Modern Systems"})]}),o.jsx("h2",{className:"text-lg sm:text-2xl font-bold text-gray-300 min-h-[45px] font-outfit",children:o.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-pink-400",children:o.jsx(Rl.Typewriter,{words:["Full-Stack Software Engineer 💻","Web & Mobile Application Developer 📱","Laravel, React & Flutter Specialist ⚙️","Competitive CTF Player (Hobby & Enthusiast) 🛡️"],loop:0,cursor:!0,cursorStyle:"|",typeSpeed:60,deleteSpeed:45,delaySpeed:1800})})}),o.jsx("p",{className:"text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed font-medium",children:"Building high-performance web applications, mobile apps in Flutter, automated CRM systems, and RESTful API backends with clean code and robust software architecture."}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 w-full my-2",children:[o.jsxs("div",{className:"p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-center",children:[o.jsx("div",{className:"text-2xl font-black text-indigo-400 font-mono tracking-tight",children:"3.80"}),o.jsx("div",{className:"text-[10px] text-gray-400 uppercase font-bold tracking-wider mt-0.5",children:"GPA CS UNHAS"})]}),o.jsxs("div",{className:"p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-center",children:[o.jsx("div",{className:"text-2xl font-black text-cyan-400 font-mono tracking-tight",children:"15+ Apps"}),o.jsx("div",{className:"text-[10px] text-gray-400 uppercase font-bold tracking-wider mt-0.5",children:"Built & Deployed"})]}),o.jsxs("div",{className:"p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-center",children:[o.jsx("div",{className:"text-2xl font-black text-emerald-400 font-mono tracking-tight",children:"1st Place"}),o.jsx("div",{className:"text-[10px] text-gray-400 uppercase font-bold tracking-wider mt-0.5",children:"Pragyan CTF '25"})]}),o.jsxs("div",{className:"p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-center",children:[o.jsx("div",{className:"text-2xl font-black text-pink-400 font-mono tracking-tight",children:"Finalist"}),o.jsx("div",{className:"text-[10px] text-gray-400 uppercase font-bold tracking-wider mt-0.5",children:"GEMASTIK XVIII"})]})]}),o.jsxs("div",{className:"flex flex-wrap items-center gap-3 pt-2 w-full",children:[o.jsxs("button",{onClick:()=>oe("projects"),className:"px-7 py-3.5 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 rounded-full text-white font-bold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] flex items-center gap-2 cyber-button",children:["Explore Projects",o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]}),o.jsxs("button",{onClick:()=>P(!0),className:"px-6 py-3.5 bg-white/[0.04] border border-indigo-500/30 hover:bg-indigo-500/10 rounded-full text-indigo-300 font-bold tracking-wide transition-all duration-300 hover:scale-105 flex items-center gap-2 font-mono text-sm",children:[o.jsx("i",{className:"fa-solid fa-terminal text-xs"})," Launch Terminal"]}),o.jsxs("button",{onClick:()=>oe("simulator"),className:"px-6 py-3.5 bg-white/[0.04] border border-pink-500/30 hover:bg-pink-500/10 rounded-full text-pink-300 font-bold tracking-wide transition-all duration-300 hover:scale-105 flex items-center gap-2 text-sm",children:[o.jsx("i",{className:"fa-solid fa-play text-xs"})," Live Demo"]})]})]}),o.jsxs("div",{className:"w-full lg:w-5/12 relative flex flex-col items-center justify-center",children:[o.jsxs("div",{className:`hero-3d-card relative w-full max-w-[310px] sm:max-w-md aspect-square rounded-3xl border transition-all duration-300 ${E?"border-indigo-500/20 bg-white/80 shadow-[0_20px_50px_rgba(79,70,229,0.12)]":"border-cyan-500/30 bg-[#070c18]/80 shadow-[0_0_50px_rgba(0,240,255,0.15)]"} backdrop-blur-2xl p-6 flex flex-col items-center justify-center overflow-hidden group`,children:[o.jsx("div",{className:"absolute inset-0 z-0 opacity-80 group-hover:opacity-100 transition-opacity",children:o.jsx(Yp,{isLightMode:E})}),o.jsxs("div",{className:"relative z-10 flex flex-col items-center space-y-3 pointer-events-none",children:[o.jsxs("div",{className:"relative",children:[o.jsx("div",{className:"absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 opacity-60 blur-md animate-pulse"}),o.jsx("img",{src:"/assets/profile.jpg",alt:"Reynald Abner Tananda",width:130,height:130,className:"rounded-full relative z-10 border-2 border-white/30 shadow-2xl object-cover"})]}),o.jsxs("div",{className:`border rounded-full px-4 py-1.5 backdrop-blur-md flex items-center gap-2 transition-all duration-300 ${E?"bg-white/90 border-indigo-500/30 text-slate-800 shadow-sm":"bg-[#030712]/90 border-cyan-500/40 text-white"}`,children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-ping"}),o.jsx("span",{className:`text-[11px] font-mono font-bold tracking-wider ${E?"text-slate-800":"text-white"}`,children:"AVAILABLE FOR DEV PROJECTS"})]})]})]}),o.jsxs("p",{className:"text-[10px] font-mono text-gray-400 mt-3 text-center tracking-widest uppercase",children:[o.jsx("i",{className:"fa-solid fa-hand-pointer text-cyan-400 mr-1.5 animate-bounce"})," Interactive 3D Matrix — Move Cursor to Rotate"]})]})]}),o.jsxs("div",{className:"flex flex-col items-center opacity-65 mt-8",children:[o.jsx("span",{className:"text-[10px] uppercase tracking-widest text-indigo-400/90 mb-2 font-bold font-outfit",children:"Scroll"}),o.jsx("div",{className:"w-5.5 h-9 border-2 border-white/20 rounded-full flex justify-center p-1",children:o.jsx("div",{className:"w-1.5 h-2 bg-indigo-400 rounded-full animate-bounce"})})]})]}),o.jsxs("main",{className:"relative z-10 max-w-6xl mx-auto px-6 sm:px-8 py-16 space-y-36",children:[o.jsx("section",{id:"about",className:"scroll-mt-24",children:o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[o.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-widest text-indigo-400",children:"[PROFILE_SUMMARY]"}),o.jsx("h2",{className:"text-4xl sm:text-5xl font-black tracking-tight font-outfit text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400",children:"About Me"}),o.jsx("div",{className:"w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"})]}),o.jsxs("div",{className:"space-y-4.5 text-gray-400 text-base leading-relaxed font-medium",children:[o.jsxs("p",{children:["Hi! I'm ",o.jsx("span",{className:"text-indigo-400 font-bold",children:"Reynald Abner Tananda, S.T."}),", a ",o.jsx("span",{className:"text-emerald-400 font-bold",children:"Fresh Graduate in Computer Science"})," from ",o.jsx("span",{className:"text-white font-bold",children:"Universitas Hasanuddin"})," specializing in Software Engineering and Mobile Development with a ",o.jsx("span",{className:"text-cyan-400 font-black",children:"GPA of 3.80/4.00"}),"."]}),o.jsx("p",{children:"I have hands-on experience developing full-stack web platforms and mobile applications, including backend engineering for hospital logbook systems (RS UNHAS) and serving as a Teaching Assistant for Mobile Programming (Flutter)."}),o.jsxs("p",{children:["As an active hobby, I enjoy participating in competitive CTF (Capture The Flag) challenges, leading the Digital Forensics division at ",o.jsx("span",{className:"text-pink-400 font-bold",children:"ICC UNHAS"}),", and sharing cybersecurity learning modules with peers."]})]}),o.jsxs("div",{className:"grid grid-cols-3 gap-4 pt-4",children:[o.jsxs("div",{className:"p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-center shadow-md shadow-black/25",children:[o.jsx("span",{className:"block text-3xl font-black text-indigo-400 tracking-tight font-outfit",children:"3.80"}),o.jsx("span",{className:"text-[10px] uppercase text-gray-400 tracking-wider font-bold block mt-1",children:"GPA Score"})]}),o.jsxs("div",{className:"p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-center shadow-md shadow-black/25",children:[o.jsx("span",{className:"block text-3xl font-black text-cyan-400 tracking-tight font-outfit",children:"15+"}),o.jsx("span",{className:"text-[10px] uppercase text-gray-400 tracking-wider font-bold block mt-1",children:"Apps & Projects"})]}),o.jsxs("div",{className:"p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-center shadow-md shadow-black/25",children:[o.jsx("span",{className:"block text-3xl font-black text-pink-400 tracking-tight font-outfit",children:"3+"}),o.jsx("span",{className:"text-[10px] uppercase text-gray-400 tracking-wider font-bold block mt-1",children:"TA & Interns"})]})]})]}),o.jsx("div",{className:"lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4",children:[{title:"Software Engineer",desc:"Laravel Backend, REST APIs, MySQL databases",icon:"fa-solid fa-laptop-code text-indigo-400",color:"cyber-card-glow-indigo"},{title:"Mobile Specialist",desc:"Flutter UI, Android concepts, TA tutoring",icon:"fa-solid fa-mobile-screen-button text-cyan-400",color:"cyber-card-glow-cyan"},{title:"Web Architecture",desc:"React, Next.js, Astro & PWA solutions",icon:"fa-solid fa-layer-group text-pink-400",color:"cyber-card-glow-pink"},{title:"CTF Enthusiast",desc:"Pragyan CTF winner, Gemastik national finalist",icon:"fa-solid fa-trophy text-emerald-400",color:"cyber-card-glow-green"}].map((F,re)=>o.jsxs("div",{className:`cyber-card p-5 rounded-3xl flex flex-col justify-between h-44 shadow-lg shadow-black/10 ${F.color}`,children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl",children:o.jsx("i",{className:F.icon})}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-bold text-white text-sm font-outfit mb-1 leading-tight",children:F.title}),o.jsx("p",{className:"text-[10px] text-gray-400 leading-normal",children:F.desc})]})]},re))})]})}),o.jsx("section",{id:"services",className:"scroll-mt-24",children:o.jsxs("div",{className:"space-y-12",children:[o.jsxs("div",{className:"text-center space-y-3",children:[o.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 text-glow",children:"[CAPABILITIES]"}),o.jsx("h2",{className:"text-4xl sm:text-5xl font-black tracking-tight font-outfit text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400",children:"Services & Custom Solutions"}),o.jsx("div",{className:"w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto"}),o.jsx("p",{className:"text-gray-400 text-sm sm:text-base max-w-xl mx-auto pt-2 leading-relaxed",children:"Custom software engineering and business digitization solutions to optimize your workflows."})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[{title:"Web & App Development",desc:"Custom website creation, landing pages, and responsive e-commerce systems using Next.js / Laravel with modern SEO optimization.",icon:"fa-solid fa-laptop-code",glow:"cyber-card-glow-indigo"},{title:"API & Payment Integration",desc:"Connecting systems with payment gateways (Midtrans/Xendit) for automated QRIS/VA payments, as well as external RESTful API integration.",icon:"fa-solid fa-credit-card",glow:"cyber-card-glow-cyan"},{title:"Custom Dashboards & POS",desc:"Custom back-office systems for inventory management, analytical dashboards, daily/monthly transaction reports, and admin access control.",icon:"fa-solid fa-chart-line",glow:"cyber-card-glow-pink"},{title:"Automation & Integration",desc:"Automated real-time notifications, OTP delivery, broadcasts, and automated invoices connected directly to the WhatsApp API.",icon:"fa-solid fa-message",glow:"cyber-card-glow-green"}].map((F,re)=>o.jsxs("div",{className:`cyber-card p-6 sm:p-8 rounded-3xl border border-white/[0.05] hover:border-white/10 shadow-lg shadow-black/20 ${F.glow}`,children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-white mb-6",children:o.jsx("i",{className:F.icon})}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-extrabold text-white text-base font-outfit mb-3",children:F.title}),o.jsx("p",{className:"text-xs text-gray-400 leading-relaxed font-medium",children:F.desc})]})]},re))})]})}),o.jsx(Jp,{isLightMode:E,simCart:I,setSimCart:X,scrollToSection:oe}),o.jsx("section",{id:"skills",className:"scroll-mt-24",children:o.jsxs("div",{className:"space-y-12",children:[o.jsxs("div",{className:"text-center space-y-3",children:[o.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 text-glow",children:"[TECHNICAL_STACK]"}),o.jsx("h2",{className:"text-4xl sm:text-5xl font-black tracking-tight font-outfit",children:"Skills & Core Stack"}),o.jsx("div",{className:"w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto"})]}),o.jsxs("div",{className:"cyber-card p-6 sm:p-8 rounded-3xl border border-white/[0.04] bg-[#070b13]/60 backdrop-blur-xl relative overflow-hidden flex flex-col items-center",children:[o.jsx("div",{className:"flex flex-wrap gap-2 justify-center mb-8 w-full border-b border-white/[0.06] pb-4 z-10",children:[{label:"Programming",icon:"fa-solid fa-code"},{label:"Web & Backend",icon:"fa-solid fa-server"},{label:"Mobile & DS",icon:"fa-solid fa-brain"},{label:"Databases & DevOps",icon:"fa-solid fa-database"}].map((F,re)=>o.jsxs("button",{onClick:()=>_(re),className:`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all border ${C===re?"bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20":"bg-white/[0.02] border-white/[0.06] text-gray-400 hover:text-white hover:bg-white/[0.04]"}`,children:[o.jsx("i",{className:F.icon}),F.label]},re))}),o.jsxs("div",{className:"w-full relative h-[250px] flex items-center justify-center",children:[o.jsxs("svg",{className:"absolute inset-0 w-full h-full z-0 pointer-events-none",children:[o.jsxs("defs",{children:[o.jsxs("linearGradient",{id:"laser",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[o.jsx("stop",{offset:"0%",stopColor:"#6366f1",stopOpacity:"0.8"}),o.jsx("stop",{offset:"100%",stopColor:"#06b6d4",stopOpacity:"0.8"})]}),o.jsxs("filter",{id:"glow-laser",children:[o.jsx("feGaussianBlur",{stdDeviation:"3",result:"coloredBlur"}),o.jsxs("feMerge",{children:[o.jsx("feMergeNode",{in:"coloredBlur"}),o.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),o.jsx("line",{x1:"50%",y1:"120",x2:"50%",y2:"35",stroke:"url(#laser)",strokeWidth:"2",filter:"url(#glow-laser)",strokeDasharray:"6,6",className:"animate-[dash_3s_linear_infinite]"}),o.jsx("line",{x1:"50%",y1:"120",x2:"78%",y2:"80",stroke:"url(#laser)",strokeWidth:"2",filter:"url(#glow-laser)",strokeDasharray:"6,6",className:"animate-[dash_3s_linear_infinite]"}),o.jsx("line",{x1:"50%",y1:"120",x2:"70%",y2:"185",stroke:"url(#laser)",strokeWidth:"2",filter:"url(#glow-laser)",strokeDasharray:"6,6",className:"animate-[dash_3s_linear_infinite]"}),o.jsx("line",{x1:"50%",y1:"120",x2:"30%",y2:"185",stroke:"url(#laser)",strokeWidth:"2",filter:"url(#glow-laser)",strokeDasharray:"6,6",className:"animate-[dash_3s_linear_infinite]"}),o.jsx("line",{x1:"50%",y1:"120",x2:"22%",y2:"80",stroke:"url(#laser)",strokeWidth:"2",filter:"url(#glow-laser)",strokeDasharray:"6,6",className:"animate-[dash_3s_linear_infinite]"})]}),o.jsx("div",{className:"absolute left-1/2 top-[120px] -translate-x-1/2 -translate-y-1/2 z-10",children:o.jsx("div",{className:"w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 p-[2px] shadow-lg shadow-indigo-600/30 animate-pulse",children:o.jsxs("div",{className:"w-full h-full rounded-full bg-[#070b13] flex flex-col items-center justify-center text-center p-2",children:[o.jsx("span",{className:"text-[10px] font-black text-indigo-300 uppercase tracking-wider font-mono",children:"Core Hub"}),o.jsx("span",{className:"text-[11px] font-extrabold text-white leading-tight font-outfit mt-0.5",children:["Programming","Web & Backend","Mobile & DS","DevOps & DB"][C]})]})})}),[{x:"left-1/2 top-[35px] -translate-x-1/2 -translate-y-1/2",skill:[["Python","PHP","JavaScript","Kotlin","Dart"],["Laravel","React","Next.js","RESTful API","Nginx"],["Flutter","Machine Learning","Deep Learning","NLP","Data Analysis"],["MySQL","Firebase","Nginx Configs","VPS Deployments","Git"]][C][0]},{x:"left-[78%] top-[80px] -translate-x-1/2 -translate-y-1/2",skill:[["Python","PHP","JavaScript","Kotlin","Dart"],["Laravel","React","Next.js","RESTful API","Nginx"],["Flutter","Machine Learning","Deep Learning","NLP","Data Analysis"],["MySQL","Firebase","Nginx Configs","VPS Deployments","Git"]][C][1]},{x:"left-[70%] top-[185px] -translate-x-1/2 -translate-y-1/2",skill:[["Python","PHP","JavaScript","Kotlin","Dart"],["Laravel","React","Next.js","RESTful API","Nginx"],["Flutter","Machine Learning","Deep Learning","NLP","Data Analysis"],["MySQL","Firebase","Nginx Configs","VPS Deployments","Git"]][C][2]},{x:"left-[30%] top-[185px] -translate-x-1/2 -translate-y-1/2",skill:[["Python","PHP","JavaScript","Kotlin","Dart"],["Laravel","React","Next.js","RESTful API","Nginx"],["Flutter","Machine Learning","Deep Learning","NLP","Data Analysis"],["MySQL","Firebase","Nginx Configs","VPS Deployments","Git"]][C][3]},{x:"left-[22%] top-[80px] -translate-x-1/2 -translate-y-1/2",skill:[["Python","PHP","JavaScript","Kotlin","Dart"],["Laravel","React","Next.js","RESTful API","Nginx"],["Flutter","Machine Learning","Deep Learning","NLP","Data Analysis"],["MySQL","Firebase","Nginx Configs","VPS Deployments","Git"]][C][4]}].map((F,re)=>o.jsx("div",{className:`absolute ${F.x} z-10 group`,children:o.jsx("div",{className:"px-3.5 py-2 rounded-xl bg-[#090e18]/90 border border-white/[0.08] shadow-md group-hover:border-indigo-400 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.25)] transition-all duration-300 flex items-center justify-center min-w-[80px]",children:o.jsx("span",{className:"text-[10px] font-bold text-white group-hover:text-indigo-300 transition-colors font-mono",children:F.skill})})},re))]})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[{title:"Programming",icon:"fa-solid fa-code text-indigo-400",skills:["Python","PHP","JavaScript","Kotlin","Dart"],accent:"text-indigo-400 border-indigo-500/20 bg-indigo-500/5"},{title:"Web & Backend",icon:"fa-solid fa-server text-cyan-400",skills:["Laravel","React","Next.js","RESTful API","Nginx"],accent:"text-cyan-400 border-cyan-500/20 bg-cyan-500/5"},{title:"Mobile & DS",icon:"fa-solid fa-brain text-pink-400",skills:["Flutter","Machine Learning","Deep Learning","NLP","Data Analysis"],accent:"text-pink-400 border-pink-500/20 bg-pink-500/5"},{title:"Databases & DevOps",icon:"fa-solid fa-database text-emerald-400",skills:["MySQL","Firebase","Nginx Configs","VPS Deployments","Git"],accent:"text-emerald-400 border-emerald-500/20 bg-emerald-500/5"}].map((F,re)=>o.jsxs("div",{className:"cyber-card p-6 rounded-3xl border border-white/[0.05] hover:border-white/10 shadow-md",children:[o.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg",children:o.jsx("i",{className:F.icon})}),o.jsx("h3",{className:"font-extrabold text-white text-base font-outfit",children:F.title})]}),o.jsx("ul",{className:"space-y-4",children:F.skills.map((Le,ye)=>o.jsxs("li",{className:"flex flex-col gap-1.5",children:[o.jsxs("div",{className:"flex justify-between text-xs text-gray-300 font-medium",children:[o.jsx("span",{children:Le}),o.jsxs("span",{className:"text-gray-400 font-bold",children:[95-ye*5,"%"]})]}),o.jsx("div",{className:"w-full bg-white/[0.04] rounded-full h-1.5 overflow-hidden",children:o.jsx("div",{className:"bg-gradient-to-r from-indigo-500 to-cyan-400 h-full rounded-full fill-bar-animate animate-pulse",style:{width:`${95-ye*5}%`}})})]},ye))})]},re))}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 pt-6",children:[o.jsxs("div",{className:"cyber-card p-6 sm:p-8 rounded-3xl space-y-4 shadow-md",children:[o.jsxs("h4",{className:"font-bold text-white text-base font-outfit flex items-center gap-3",children:[o.jsx("div",{className:"w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm text-indigo-400",children:o.jsx("i",{className:"fa-solid fa-graduation-cap"})}),"Academic Coursework"]}),o.jsx("div",{className:"flex flex-wrap gap-2",children:["Data Structures & Algorithms","Web Development","Mobile Application Development","Machine Learning","Data Science","Natural Language Processing","Cybersecurity","Software Project Management"].map((F,re)=>o.jsx("span",{className:"px-3.5 py-1.5 text-xs font-semibold bg-white/[0.03] border border-white/[0.06] rounded-xl text-gray-300 hover:border-indigo-500/30 transition-colors duration-300",children:F},re))})]}),o.jsxs("div",{className:"cyber-card p-6 sm:p-8 rounded-3xl space-y-4 shadow-md",children:[o.jsxs("h4",{className:"font-bold text-white text-base font-outfit flex items-center gap-3",children:[o.jsx("div",{className:"w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm text-cyan-400",children:o.jsx("i",{className:"fa-solid fa-handshake"})}),"Professional & Soft Skills"]}),o.jsx("div",{className:"flex flex-wrap gap-2",children:["Leadership","Strategic Planning","Problem Solving","Critical Thinking","Communication","Team Collaboration","B2 English","A2 Chinese"].map((F,re)=>o.jsx("span",{className:"px-3.5 py-1.5 text-xs font-semibold bg-indigo-500/5 border border-indigo-500/25 rounded-xl text-indigo-300 hover:border-indigo-400 transition-colors duration-300",children:F},re))})]})]})]})}),o.jsx("section",{id:"projects",className:"scroll-mt-24",children:o.jsxs("div",{className:"space-y-12",children:[o.jsxs("div",{className:"text-center space-y-3",children:[o.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 text-glow",children:"[FEATURED_PROJECTS]"}),o.jsx("h2",{className:"text-4xl sm:text-5xl font-black tracking-tight font-outfit",children:"Featured Projects"}),o.jsx("div",{className:"w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto"}),o.jsx("p",{className:"text-gray-400 text-sm sm:text-base max-w-xl mx-auto pt-2 leading-relaxed",children:'Click "View Details" to interact with live dashboard mockups and check system architectures.'})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:H.map(F=>o.jsxs("div",{className:"cyber-card rounded-3xl overflow-hidden group flex flex-col justify-between border border-white/[0.04] shadow-lg transition-transform duration-300 ease-out",onMouseMove:re=>{const Le=re.currentTarget,ye=Le.getBoundingClientRect(),Y=re.clientX-ye.left,J=re.clientY-ye.top,te=ye.width/2,le=ye.height/2,Se=(le-J)/le*10,ve=(Y-te)/te*10;Le.style.transform=`perspective(1000px) rotateX(${Se}deg) rotateY(${ve}deg) translateY(-4px)`},onMouseLeave:re=>{const Le=re.currentTarget;Le.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)"},children:[o.jsxs("div",{children:[o.jsxs("div",{className:"relative h-48 bg-gradient-to-br from-indigo-950 via-[#0a0f1d] to-[#030712] flex items-center justify-center border-b border-white/[0.05] overflow-hidden",children:[o.jsx("div",{className:"absolute inset-0 bg-cover bg-center opacity-25 group-hover:scale-110 transition-transform duration-700"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent"}),o.jsx("div",{className:`w-32 h-32 rounded-full absolute bg-gradient-to-tr ${F.color} filter blur-2xl opacity-35 animate-float-slow`}),o.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl text-white relative z-10 shadow-2xl",children:o.jsx("i",{className:F.image})}),o.jsx("div",{className:"absolute top-4 right-4",children:o.jsx("span",{className:"px-3.5 py-1 bg-white/[0.06] border border-white/[0.08] backdrop-blur-md text-indigo-300 rounded-full text-[10px] font-bold uppercase tracking-wider",children:F.status})})]}),o.jsxs("div",{className:"p-8 space-y-4",children:[o.jsx("span",{className:"text-xs font-semibold uppercase text-indigo-400 tracking-wider font-outfit",children:F.category}),o.jsx("h3",{className:"text-2xl font-black text-white group-hover:text-indigo-300 transition-colors font-outfit leading-tight",children:F.title}),o.jsx("p",{className:"text-gray-400 text-sm leading-relaxed font-medium",children:F.description}),o.jsxs("div",{className:"flex flex-wrap gap-2 pt-2",children:[F.technologies.slice(0,4).map(re=>o.jsx("span",{className:"px-3 py-1 rounded-full text-[10px] font-bold bg-white/[0.04] border border-white/[0.06] text-gray-300",children:re},re)),F.technologies.length>4&&o.jsxs("span",{className:"px-3 py-1 rounded-full text-[10px] font-bold bg-indigo-500/10 text-indigo-300",children:["+",F.technologies.length-4," more"]})]})]})]}),o.jsxs("div",{className:"p-8 pt-0 flex flex-wrap gap-3",children:[o.jsxs("button",{onClick:()=>p(F),className:"px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-all duration-300 flex items-center justify-center text-xs font-bold tracking-wide gap-2 shadow-lg shadow-indigo-600/15",children:[o.jsxs("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),"View Details"]}),F.demo&&o.jsxs("a",{href:F.demo,target:"_blank",rel:"noopener noreferrer",className:"px-5 py-2.5 bg-gradient-to-r from-cyan-600/30 to-indigo-600/30 hover:from-cyan-600/50 hover:to-indigo-600/50 text-cyan-300 border border-cyan-500/40 rounded-xl transition-all duration-300 flex items-center justify-center text-xs font-bold gap-2",children:[o.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square text-xs"}),"Live Demo"]}),F.github&&o.jsxs("a",{href:F.github,target:"_blank",rel:"noopener noreferrer",className:"px-5 py-2.5 bg-white/[0.03] hover:bg-white/[0.08] text-gray-200 border border-white/[0.06] rounded-xl transition-all duration-300 flex items-center justify-center text-xs font-bold gap-2",children:[o.jsx("i",{className:"fab fa-github text-sm"}),"GitHub"]})]})]},F.id))})]})}),o.jsx("section",{className:"scroll-mt-24",children:o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12",children:[o.jsxs("div",{className:"lg:col-span-6 space-y-8",children:[o.jsxs("h2",{className:"text-2xl font-black text-white font-outfit border-b border-white/[0.08] pb-3 flex items-center gap-3",children:[o.jsx("div",{className:"w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-base text-indigo-400",children:o.jsx("i",{className:"fa-solid fa-briefcase"})}),"Work Experience"]}),o.jsx("div",{className:"relative border-l border-white/[0.08] ml-4 space-y-10 pt-2",children:ie.map((F,re)=>o.jsxs("div",{className:"relative pl-6 group",children:[o.jsx("div",{className:"absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-glow transition-transform duration-300 group-hover:scale-125"}),o.jsxs("div",{className:"space-y-1.5",children:[o.jsx("span",{className:"text-[10px] font-bold text-indigo-400 uppercase tracking-widest",children:F.period}),o.jsx("h3",{className:"text-lg font-bold text-white font-outfit leading-snug",children:F.role}),o.jsx("span",{className:"text-xs text-gray-400 block font-semibold",children:F.org}),o.jsx("ul",{className:"list-disc list-outside pl-4 text-xs text-gray-300 space-y-2 pt-2.5 font-medium leading-relaxed",children:F.points.map((Le,ye)=>o.jsx("li",{children:Le},ye))})]})]},re))})]}),o.jsxs("div",{className:"lg:col-span-6 space-y-8",children:[o.jsxs("h2",{className:"text-2xl font-black text-white font-outfit border-b border-white/[0.08] pb-3 flex items-center gap-3",children:[o.jsx("div",{className:"w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-base text-cyan-400",children:o.jsx("i",{className:"fa-solid fa-users"})}),"Organization Experience"]}),o.jsx("div",{className:"relative border-l border-white/[0.08] ml-4 space-y-10 pt-2",children:ae.map((F,re)=>o.jsxs("div",{className:"relative pl-6 group",children:[o.jsx("div",{className:"absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-glow transition-transform duration-300 group-hover:scale-125"}),o.jsxs("div",{className:"space-y-1.5",children:[o.jsx("span",{className:"text-[10px] font-bold text-cyan-400 uppercase tracking-widest",children:F.period}),o.jsx("h3",{className:"text-lg font-bold text-white font-outfit leading-snug",children:F.role}),o.jsx("span",{className:"text-xs text-gray-400 block font-semibold",children:F.org}),o.jsx("ul",{className:"list-disc list-outside pl-4 text-xs text-gray-300 space-y-2 pt-2.5 font-medium leading-relaxed",children:F.points.map((Le,ye)=>o.jsx("li",{children:Le},ye))})]})]},re))})]})]})}),o.jsx("section",{id:"achievements",className:"scroll-mt-24",children:o.jsxs("div",{className:"space-y-12",children:[o.jsxs("div",{className:"text-center space-y-3",children:[o.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 text-glow",children:"[ACHIEVEMENTS_INDEX]"}),o.jsx("h2",{className:"text-4xl sm:text-5xl font-black tracking-tight font-outfit",children:"Competitions & Achievements"}),o.jsx("div",{className:"w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto"})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Z.map((F,re)=>o.jsx("div",{className:"cyber-card p-6 rounded-3xl border border-white/[0.04] hover:border-white/10 flex flex-col justify-between space-y-4 shadow-lg",children:o.jsxs("div",{className:"space-y-3",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg",children:o.jsx("i",{className:F.icon})}),o.jsx("span",{className:"text-[10px] font-bold bg-white/[0.05] border border-white/[0.08] text-indigo-300 px-3 py-1 rounded-full",children:F.date})]}),o.jsx("h3",{className:"font-extrabold text-white text-base sm:text-lg font-outfit leading-snug",children:F.title}),o.jsx("span",{className:"text-xs text-cyan-400 font-bold block",children:F.category}),o.jsx("p",{className:"text-gray-400 text-xs leading-relaxed font-medium",children:F.details})]})},re))})]})}),o.jsx("section",{id:"github",className:"scroll-mt-24",children:o.jsxs("div",{className:"space-y-12",children:[o.jsxs("div",{className:"text-center space-y-3",children:[o.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 text-glow",children:"[DEVELOPER_ACTIVITY]"}),o.jsx("h2",{className:"text-4xl sm:text-5xl font-black tracking-tight font-outfit",children:"GitHub Activity"}),o.jsx("div",{className:"w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto"})]}),o.jsx("div",{className:"flex justify-center",children:o.jsx("div",{className:"cyber-card p-6 sm:p-8 rounded-3xl w-full max-w-4xl border border-white/[0.04] overflow-x-auto shadow-xl",children:o.jsx("div",{className:"min-w-[700px] min-h-[160px] flex justify-center items-center py-2",children:o.jsx(Co.Suspense,{fallback:o.jsx("div",{className:"h-[160px] flex items-center justify-center text-xs text-gray-400 font-mono",children:"Loading GitHub activity data..."}),children:o.jsx(Qp,{username:"reynaldabnerrr",colorScheme:"dark",blockSize:12,blockMargin:4,fontSize:13})})})})})]})}),o.jsx("section",{id:"contact",className:"scroll-mt-24",children:o.jsxs("div",{className:"space-y-12",children:[o.jsxs("div",{className:"text-center space-y-3",children:[o.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 text-glow",children:"[GET_IN_TOUCH]"}),o.jsx("h2",{className:"text-4xl sm:text-5xl font-black tracking-tight font-outfit",children:"Get In Touch"}),o.jsx("div",{className:"w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto"}),o.jsx("p",{className:"text-gray-400 text-sm sm:text-base max-w-xl mx-auto pt-2 leading-relaxed",children:"Have an interesting project concept or collaboration offer? Please contact me through the channels below."})]}),o.jsx("div",{className:"cyber-card p-8 rounded-3xl max-w-2xl mx-auto border border-white/[0.04] shadow-xl",children:o.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[o.jsxs("a",{href:"mailto:reynald030685@gmail.com",className:"flex flex-col items-center p-5 rounded-2xl bg-red-500/5 border border-red-500/10 text-red-400 hover:bg-red-500/10 hover:border-red-400 hover:scale-105 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)] transition-all duration-300",target:"_blank",rel:"noopener noreferrer",children:[o.jsx("i",{className:"fas fa-envelope text-3xl mb-3"}),o.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider font-outfit",children:"Email"})]}),o.jsxs("a",{href:"https://www.linkedin.com/in/reynald-abner-tananda-a060b4227/",className:"flex flex-col items-center p-5 rounded-2xl bg-blue-500/5 border border-blue-500/10 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300",target:"_blank",rel:"noopener noreferrer",children:[o.jsx("i",{className:"fab fa-linkedin text-3xl mb-3"}),o.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider font-outfit",children:"LinkedIn"})]}),o.jsxs("a",{href:"https://github.com/reynaldabnerrr",className:"flex flex-col items-center p-5 rounded-2xl bg-gray-500/5 border border-gray-500/10 text-gray-400 hover:bg-gray-500/10 hover:border-gray-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(156,163,175,0.2)] transition-all duration-300",target:"_blank",rel:"noopener noreferrer",children:[o.jsx("i",{className:"fab fa-github text-3xl mb-3"}),o.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider font-outfit",children:"GitHub"})]}),o.jsxs("a",{href:"https://www.instagram.com/reynaldabnerr/",className:"flex flex-col items-center p-5 rounded-2xl bg-pink-500/5 border border-pink-500/10 text-pink-400 hover:bg-pink-500/10 hover:border-pink-400 hover:scale-105 hover:shadow-[0_0_15px_rgba(236,72,153,0.2)] transition-all duration-300",target:"_blank",rel:"noopener noreferrer",children:[o.jsx("i",{className:"fab fa-instagram text-3xl mb-3"}),o.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider font-outfit",children:"Instagram"})]})]})})]})})]}),N&&o.jsx(Ro,{}),m&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"fixed inset-0 z-50 bg-[var(--background)]/80 backdrop-blur-xl transition-all duration-300 pointer-events-auto",onClick:()=>p(null)}),o.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-10 pointer-events-none",children:o.jsxs("div",{className:"cyber-card rounded-3xl max-w-4xl w-full border border-white/[0.08] shadow-2xl my-auto pointer-events-auto animate-slide-up",children:[o.jsxs("div",{className:"relative h-48 sm:h-56 bg-gradient-to-br from-indigo-950 via-[#0d1326] to-[#030712] flex items-center justify-center border-b border-white/[0.08]",children:[o.jsx("button",{onClick:()=>p(null),className:"absolute top-4 right-4 w-10 h-10 bg-white/[0.05] hover:bg-white/[0.1] rounded-full flex items-center justify-center text-white border border-white/[0.08] transition-colors z-20 pointer-events-auto",children:o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),o.jsx("div",{className:`absolute inset-0 bg-gradient-to-tr ${m.color} opacity-20 filter blur-2xl`}),o.jsx("div",{className:"w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl sm:text-5xl text-white relative z-10 shadow-2xl",children:o.jsx("i",{className:m.image})}),o.jsx("div",{className:"absolute bottom-4 left-6",children:o.jsx("span",{className:"px-4 py-1.5 bg-white/[0.05] border border-white/[0.08] text-indigo-300 rounded-full text-xs font-bold uppercase tracking-wider",children:m.category})})]}),o.jsxs("div",{className:"p-6 sm:p-8 space-y-8 max-h-[70vh] overflow-y-auto",children:[o.jsxs("div",{className:"space-y-3",children:[o.jsx("h2",{className:"text-3xl sm:text-4xl font-black text-white font-outfit tracking-tight",children:m.title}),o.jsx("p",{className:"text-gray-300 text-sm sm:text-base leading-relaxed font-medium",children:m.longDescription})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-8",children:[o.jsxs("div",{className:"md:col-span-7 space-y-4",children:[o.jsxs("h3",{className:"text-lg font-bold text-white font-outfit border-b border-white/[0.05] pb-2 flex items-center gap-2",children:[o.jsx("span",{className:"w-2.5 h-2.5 bg-indigo-500 rounded-full"})," Key Features & Architecture"]}),o.jsx("ul",{className:"space-y-3",children:m.features.map((F,re)=>o.jsxs("li",{className:"flex items-start text-xs sm:text-sm text-gray-300",children:[o.jsx("svg",{className:"w-5 h-5 text-indigo-400 mr-2.5 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M5 13l4 4L19 7"})}),o.jsx("span",{children:F})]},re))})]}),o.jsxs("div",{className:"md:col-span-5 space-y-6",children:[o.jsxs("div",{className:"space-y-3",children:[o.jsxs("h3",{className:"text-lg font-bold text-white font-outfit border-b border-white/[0.05] pb-2 flex items-center gap-2",children:[o.jsx("span",{className:"w-2.5 h-2.5 bg-cyan-400 rounded-full"})," Tech Stack"]}),o.jsx("div",{className:"flex flex-wrap gap-2",children:m.technologies.map(F=>o.jsx("span",{className:"px-3 py-1.5 bg-white/[0.04] border border-white/[0.06] text-gray-300 rounded-lg text-xs font-semibold",children:F},F))})]}),o.jsxs("div",{className:"space-y-3",children:[o.jsxs("h3",{className:"text-lg font-bold text-white font-outfit border-b border-white/[0.05] pb-2 flex items-center gap-2",children:[o.jsx("span",{className:"w-2.5 h-2.5 bg-pink-500 rounded-full"})," Project Links"]}),o.jsxs("div",{className:"flex flex-col gap-2.5",children:[m.github&&o.jsxs("a",{href:m.github,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-between p-3 bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/10 rounded-xl text-xs font-bold text-gray-300 transition-colors pointer-events-auto",children:[o.jsx("span",{children:"GitHub Repository"}),o.jsx("i",{className:"fab fa-github text-sm"})]}),m.demo&&o.jsxs("a",{href:m.demo,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-between p-3 bg-indigo-600/10 border border-indigo-500/20 hover:bg-indigo-600 hover:text-white rounded-xl text-xs font-bold text-indigo-300 transition-all duration-300 pointer-events-auto",children:[o.jsx("span",{children:"Live Application Demo"}),o.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square text-xs"})]})]})]})]})]})]}),o.jsx("div",{className:"p-6 border-t border-white/[0.08] flex justify-end pointer-events-auto",children:o.jsx("button",{onClick:()=>p(null),className:"px-6 py-2.5 bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-gray-500 text-white rounded-xl text-xs font-bold transition-colors pointer-events-auto",children:"Close Window"})})]})})]}),N&&o.jsx(Ro,{}),o.jsx($p,{isOpen:T,onClose:()=>P(!1),isHacking:N,setIsHacking:k}),o.jsx(Kp,{isLightMode:E}),B&&o.jsxs("div",{className:"fixed bottom-6 right-6 z-50 p-4 bg-[#0b141a] border border-[#202c33] text-gray-200 rounded-2xl text-xs font-mono max-w-sm shadow-2xl flex items-center gap-3 animate-slide-up",role:"status","aria-live":"polite",children:[o.jsx("div",{className:"w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-[10px]",children:o.jsx("i",{className:"fa-solid fa-bell","aria-hidden":"true"})}),o.jsx("span",{children:B})]}),o.jsx("footer",{className:"border-t border-white/[0.08] bg-[var(--background)] text-[var(--foreground)] py-12 px-6 relative z-10",children:o.jsxs("div",{className:"max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left",children:[o.jsxs("div",{children:[o.jsxs("p",{className:"text-base font-bold font-outfit",children:["© ",new Date().getFullYear()," Reynald Abner Tananda"]}),o.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Crafted beautifully using Astro, React, & Tailwind CSS. Hosted on Vercel."})]}),o.jsxs("div",{className:"flex gap-4 text-xs text-gray-300 font-semibold font-mono",children:[o.jsx("span",{children:"Makassar, ID"}),o.jsx("span",{children:"•"}),o.jsx("span",{children:"Secured Dev"})]})]})})]})}export{tm as P,wl as _,o as j};
