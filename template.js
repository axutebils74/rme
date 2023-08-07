!(function(){
    clearInterval(timeO);
    // lzma-d-min.js
    var e=function(){"use strict";function r(e,r){postMessage({action:tr,cbn:r,result:e})}function o(e){var r=[];return r[e-1]=void 0,r}function t(e,r){return i(e[0]+r[0],e[1]+r[1])}function n(e,r){var o,t;return e[0]==r[0]&&e[1]==r[1]?0:(o=0>e[1],t=0>r[1],o&&!t?-1:!o&&t?1:d(e,r)[1]<0?-1:1)}function i(e,r){var o,t;for(r%=0x10000000000000000,e%=0x10000000000000000,o=r%ir,t=Math.floor(e/ir)*ir,r=r-o+t,e=e-t+o;0>e;)e+=ir,r-=ir;for(;e>4294967295;)e-=ir,r+=ir;for(r%=0x10000000000000000;r>0x7fffffff00000000;)r-=0x10000000000000000;for(;-0x8000000000000000>r;)r+=0x10000000000000000;return[e,r]}function u(e){return e>=0?[e,0]:[e+ir,-ir]}function s(e){return e[0]>=2147483648?~~Math.max(Math.min(e[0]-ir,2147483647),-2147483648):~~Math.max(Math.min(e[0],2147483647),-2147483648)}function d(e,r){return i(e[0]-r[0],e[1]-r[1])}function c(e,r){return e.ab=r,e.cb=0,e.O=r.length,e}function m(e){return e.cb>=e.O?-1:255&e.ab[e.cb++]}function a(e){return e.ab=o(32),e.O=0,e}function _(e){var r=e.ab;return r.length=e.O,r}function f(e,r,o,t){p(r,o,e.ab,e.O,t),e.O+=t}function p(e,r,o,t,n){for(var i=0;n>i;++i)o[t+i]=e[r+i]}function D(e,r,o){var t,n,i,s,d="",c=[];for(n=0;5>n;++n){if(i=m(r),-1==i)throw Error("truncated input");c[n]=i<<24>>24}if(t=N({}),!z(t,c))throw Error("corrupted input");for(n=0;64>n;n+=8){if(i=m(r),-1==i)throw Error("truncated input");i=i.toString(16),1==i.length&&(i="0"+i),d=i+""+d}/^0+$|^f+$/i.test(d)?e.N=ur:(s=parseInt(d,16),e.N=s>4294967295?ur:u(s)),e.Q=B(t,r,o,e.N)}function l(e,r){return e.S=a({}),D(e,c({},r),e.S),e}function g(e,r,o){var t=e.D-r-1;for(0>t&&(t+=e.c);0!=o;--o)t>=e.c&&(t=0),e.x[e.D++]=e.x[t++],e.D>=e.c&&w(e)}function v(e,r){(null==e.x||e.c!=r)&&(e.x=o(r)),e.c=r,e.D=0,e.w=0}function w(e){var r=e.D-e.w;r&&(f(e.V,e.x,e.w,r),e.D>=e.c&&(e.D=0),e.w=e.D)}function h(e,r){var o=e.D-r-1;return 0>o&&(o+=e.c),e.x[o]}function R(e,r){e.x[e.D++]=r,e.D>=e.c&&w(e)}function P(e){w(e),e.V=null}function C(e){return e-=2,4>e?e:3}function S(e){return 4>e?0:10>e?e-3:e-6}function M(e,r){return e.h=r,e.bb=null,e.X=1,e}function L(e){if(!e.X)throw Error("bad state");if(e.bb)throw Error("No encoding");return y(e),e.X}function y(e){var r=I(e.h);if(-1==r)throw Error("corrupted input");e.$=ur,e.Z=e.h.d,(r||n(e.h.U,sr)>=0&&n(e.h.d,e.h.U)>=0)&&(w(e.h.b),P(e.h.b),e.h.a.K=null,e.X=0)}function B(e,r,o,t){return e.a.K=r,P(e.b),e.b.V=o,b(e),e.f=0,e.l=0,e.T=0,e.R=0,e._=0,e.U=t,e.d=sr,e.I=0,M({},e)}function I(e){var r,o,i,d,c,m;if(m=s(e.d)&e.P,Q(e.a,e.q,(e.f<<4)+m)){if(Q(e.a,e.E,e.f))i=0,Q(e.a,e.s,e.f)?(Q(e.a,e.u,e.f)?(Q(e.a,e.r,e.f)?(o=e._,e._=e.R):o=e.R,e.R=e.T):o=e.T,e.T=e.l,e.l=o):Q(e.a,e.n,(e.f<<4)+m)||(e.f=7>e.f?9:11,i=1),i||(i=k(e.o,e.a,m)+2,e.f=7>e.f?8:11);else if(e._=e.R,e.R=e.T,e.T=e.l,i=2+k(e.C,e.a,m),e.f=7>e.f?7:10,c=q(e.j[C(i)],e.a),c>=4){if(d=(c>>1)-1,e.l=(2|1&c)<<d,14>c)e.l+=J(e.J,e.l-c-1,e.a,d);else if(e.l+=U(e.a,d-4)<<4,e.l+=F(e.t,e.a),0>e.l)return-1==e.l?1:-1}else e.l=c;if(n(u(e.l),e.d)>=0||e.l>=e.m)return-1;g(e.b,e.l,i),e.d=t(e.d,u(i)),e.I=h(e.b,0)}else r=T(e.k,s(e.d),e.I),e.I=7>e.f?H(r,e.a):$(r,e.a,h(e.b,e.l)),R(e.b,e.I),e.f=S(e.f),e.d=t(e.d,dr);return 0}function N(e){e.b={},e.a={},e.q=o(192),e.E=o(12),e.s=o(12),e.u=o(12),e.r=o(12),e.n=o(192),e.j=o(4),e.J=o(114),e.t=K({},4),e.C=G({}),e.o=G({}),e.k={};for(var r=0;4>r;++r)e.j[r]=K({},6);return e}function b(e){e.b.w=0,e.b.D=0,X(e.q),X(e.n),X(e.E),X(e.s),X(e.u),X(e.r),X(e.J),Z(e.k);for(var r=0;4>r;++r)X(e.j[r].B);A(e.C),A(e.o),X(e.t.B),V(e.a)}function z(e,r){var o,t,n,i,u,s,d;if(5>r.length)return 0;for(d=255&r[0],n=d%9,s=~~(d/9),i=s%5,u=~~(s/5),o=0,t=0;4>t;++t)o+=(255&r[1+t])<<8*t;return o>99999999||!O(e,n,i,u)?0:x(e,o)}function x(e,r){return 0>r?0:(e.z!=r&&(e.z=r,e.m=Math.max(e.z,1),v(e.b,Math.max(e.m,4096))),1)}function O(e,r,o,t){if(r>8||o>4||t>4)return 0;E(e.k,o,r);var n=1<<t;return W(e.C,n),W(e.o,n),e.P=n-1,1}function W(e,r){for(;r>e.e;++e.e)e.G[e.e]=K({},3),e.H[e.e]=K({},3)}function k(e,r,o){if(!Q(r,e.M,0))return q(e.G[o],r);var t=8;return t+=Q(r,e.M,1)?8+q(e.L,r):q(e.H[o],r)}function G(e){return e.M=o(2),e.G=o(16),e.H=o(16),e.L=K({},8),e.e=0,e}function A(e){X(e.M);for(var r=0;e.e>r;++r)X(e.G[r].B),X(e.H[r].B);X(e.L.B)}function E(e,r,t){var n,i;if(null==e.F||e.g!=t||e.y!=r)for(e.y=r,e.Y=(1<<r)-1,e.g=t,i=1<<e.g+e.y,e.F=o(i),n=0;i>n;++n)e.F[n]=j({})}function T(e,r,o){return e.F[((r&e.Y)<<e.g)+((255&o)>>>8-e.g)]}function Z(e){var r,o;for(o=1<<e.g+e.y,r=0;o>r;++r)X(e.F[r].v)}function H(e,r){var o=1;do o=o<<1|Q(r,e.v,o);while(256>o);return o<<24>>24}function $(e,r,o){var t,n,i=1;do if(n=o>>7&1,o<<=1,t=Q(r,e.v,(1+n<<8)+i),i=i<<1|t,n!=t){for(;256>i;)i=i<<1|Q(r,e.v,i);break}while(256>i);return i<<24>>24}function j(e){return e.v=o(768),e}function K(e,r){return e.A=r,e.B=o(1<<r),e}function q(e,r){var o,t=1;for(o=e.A;0!=o;--o)t=(t<<1)+Q(r,e.B,t);return t-(1<<e.A)}function F(e,r){var o,t,n=1,i=0;for(t=0;e.A>t;++t)o=Q(r,e.B,n),n<<=1,n+=o,i|=o<<t;return i}function J(e,r,o,t){var n,i,u=1,s=0;for(i=0;t>i;++i)n=Q(o,e,r+u),u<<=1,u+=n,s|=n<<i;return s}function Q(e,r,o){var t,n=r[o];return t=(e.i>>>11)*n,(-2147483648^t)>(-2147483648^e.p)?(e.i=t,r[o]=n+(2048-n>>>5)<<16>>16,-16777216&e.i||(e.p=e.p<<8|m(e.K),e.i<<=8),0):(e.i-=t,e.p-=t,r[o]=n-(n>>>5)<<16>>16,-16777216&e.i||(e.p=e.p<<8|m(e.K),e.i<<=8),1)}function U(e,r){var o,t,n=0;for(o=r;0!=o;--o)e.i>>>=1,t=e.p-e.i>>>31,e.p-=e.i&t-1,n=n<<1|1-t,-16777216&e.i||(e.p=e.p<<8|m(e.K),e.i<<=8);return n}function V(e){e.p=0,e.i=-1;for(var r=0;5>r;++r)e.p=e.p<<8|m(e.K)}function X(e){for(var r=e.length-1;r>=0;--r)e[r]=1024}function Y(e){if("undefined"!=typeof TextDecoder)try{return new TextDecoder("utf-8",{fatal:!0}).decode(e)}catch(r){return e}for(var o,t,n,i=0,u=0,s=e.length,d=[],c=[];s>i;++i,++u){if(o=255&e[i],128&o)if(192==(224&o)){if(i+1>=s)return e;if(t=255&e[++i],128!=(192&t))return e;c[u]=(31&o)<<6|63&t}else{if(224!=(240&o))return e;if(i+2>=s)return e;if(t=255&e[++i],128!=(192&t))return e;if(n=255&e[++i],128!=(192&n))return e;c[u]=(15&o)<<12|(63&t)<<6|63&n}else{if(!o)return e;c[u]=o}16383==u&&(d.push(String.fromCharCode.apply(String,c)),u=-1)}return u>0&&(c.length=u,d.push(String.fromCharCode.apply(String,c))),d.join("")}function er(e){return e[1]+e[0]}function rr(e,o,t,n){function i(){try{for(var e,r=0,s=(new Date).getTime();L(m.d.Q);)if(++r%1e3==0&&(new Date).getTime()-s>200)return d&&(u=er(m.d.Q.h.d)/c,n(u)),nr(i,0),0;n(1);var a=_(m.d.S);e=o?Y(a):a,nr(t.bind(null,e),0)}catch(f){t(null,f)}}var u,s,d,c,m={},a=void 0===t&&void 0===n;if("boolean"!=typeof o&&(n=t,t=o,o=!0),"function"!=typeof t&&(s=t,t=n=0),n=n||function(e){return void 0!==s?r(d?e:-1,s):void 0},t=t||function(e,r){return void 0!==s?postMessage({action:or,cbn:s,result:e,error:r}):void 0},a){for(m.d=l({},e);L(m.d.Q););var f=_(m.d.S);return o?Y(f):f}try{m.d=l({},e),c=er(m.d.N),d=c>-1,n(0)}catch(p){return t(null,p)}nr(i,0)}var or=2,tr=3,nr="function"==typeof setImmediate?setImmediate:setTimeout,ir=4294967296,ur=[4294967295,-ir],sr=[0,0],dr=[1,0];return"undefined"==typeof onmessage||"undefined"!=typeof window&&void 0!==window.document||!function(){onmessage=function(r){r&&r.W&&r.W.action==or&&e.decompress(r.W.W,r.W.cbn)}}(),{decompress:rr}}();this.LZMA=this.LZMA_WORKER=e;
    //nacl-fast.min.js
    var hash64 = (function(){var J=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function f(r,t,n,e){r[t]=n>>24&255,r[t+1]=n>>16&255,r[t+2]=n>>8&255,r[t+3]=255&n,r[t+4]=e>>24&255,r[t+5]=e>>16&255,r[t+6]=e>>8&255,r[t+7]=255&e}function Q(r,t,n,e){for(var o,i,h,a,f,s,u,c,y,l,w,v,p,b,g,A,_,U,d,E,x,M,m,B,S=new Int32Array(16),k=new Int32Array(16),K=r[0],Y=r[1],L=r[2],T=r[3],z=r[4],R=r[5],P=r[6],N=r[7],O=t[0],C=t[1],F=t[2],I=t[3],Z=t[4],G=t[5],q=t[6],D=t[7],V=0;128<=e;){for(_=0;_<16;_++)U=8*_+V,S[_]=n[U+0]<<24|n[U+1]<<16|n[U+2]<<8|n[U+3],k[_]=n[U+4]<<24|n[U+5]<<16|n[U+6]<<8|n[U+7];for(_=0;_<80;_++)if(o=Y,i=L,h=T,c=C,y=F,l=I,x=65535&(E=D),M=E>>>16,m=65535&(d=N),B=d>>>16,x+=65535&(E=((w=Z)>>>14|(a=z)<<18)^(Z>>>18|z<<14)^(z>>>9|Z<<23)),M+=E>>>16,m+=65535&(d=(z>>>14|Z<<18)^(z>>>18|Z<<14)^(Z>>>9|z<<23)),B+=d>>>16,x+=65535&(E=Z&(v=G)^~Z&(p=q)),M+=E>>>16,m+=65535&(d=z&(f=R)^~z&(s=P)),B+=d>>>16,d=J[2*_],x+=65535&(E=J[2*_+1]),M+=E>>>16,m+=65535&d,B+=d>>>16,d=S[_%16],M+=(E=k[_%16])>>>16,m+=65535&d,B+=d>>>16,m+=(M+=(x+=65535&E)>>>16)>>>16,x=65535&(E=A=65535&x|M<<16),M=E>>>16,m=65535&(d=g=65535&m|(B+=m>>>16)<<16),B=d>>>16,x+=65535&(E=(O>>>28|K<<4)^(K>>>2|O<<30)^(K>>>7|O<<25)),M+=E>>>16,m+=65535&(d=(K>>>28|O<<4)^(O>>>2|K<<30)^(O>>>7|K<<25)),B+=d>>>16,M+=(E=O&C^O&F^C&F)>>>16,m+=65535&(d=K&Y^K&L^Y&L),B+=d>>>16,u=65535&(m+=(M+=(x+=65535&E)>>>16)>>>16)|(B+=m>>>16)<<16,b=65535&x|M<<16,x=65535&(E=l),M=E>>>16,m=65535&(d=h),B=d>>>16,M+=(E=A)>>>16,m+=65535&(d=g),B+=d>>>16,Y=K,L=o,T=i,z=h=65535&(m+=(M+=(x+=65535&E)>>>16)>>>16)|(B+=m>>>16)<<16,R=a,P=f,N=s,K=u,C=O,F=c,I=y,Z=l=65535&x|M<<16,G=w,q=v,D=p,O=b,_%16==15)for(U=0;U<16;U++)d=S[U],x=65535&(E=k[U]),M=E>>>16,m=65535&d,B=d>>>16,d=S[(U+9)%16],x+=65535&(E=k[(U+9)%16]),M+=E>>>16,m+=65535&d,B+=d>>>16,g=S[(U+1)%16],x+=65535&(E=((A=k[(U+1)%16])>>>1|g<<31)^(A>>>8|g<<24)^(A>>>7|g<<25)),M+=E>>>16,m+=65535&(d=(g>>>1|A<<31)^(g>>>8|A<<24)^g>>>7),B+=d>>>16,g=S[(U+14)%16],M+=(E=((A=k[(U+14)%16])>>>19|g<<13)^(g>>>29|A<<3)^(A>>>6|g<<26))>>>16,m+=65535&(d=(g>>>19|A<<13)^(A>>>29|g<<3)^g>>>6),B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,S[U]=65535&m|B<<16,k[U]=65535&x|M<<16;x=65535&(E=O),M=E>>>16,m=65535&(d=K),B=d>>>16,d=r[0],M+=(E=t[0])>>>16,m+=65535&d,B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,r[0]=K=65535&m|B<<16,t[0]=O=65535&x|M<<16,x=65535&(E=C),M=E>>>16,m=65535&(d=Y),B=d>>>16,d=r[1],M+=(E=t[1])>>>16,m+=65535&d,B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,r[1]=Y=65535&m|B<<16,t[1]=C=65535&x|M<<16,x=65535&(E=F),M=E>>>16,m=65535&(d=L),B=d>>>16,d=r[2],M+=(E=t[2])>>>16,m+=65535&d,B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,r[2]=L=65535&m|B<<16,t[2]=F=65535&x|M<<16,x=65535&(E=I),M=E>>>16,m=65535&(d=T),B=d>>>16,d=r[3],M+=(E=t[3])>>>16,m+=65535&d,B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,r[3]=T=65535&m|B<<16,t[3]=I=65535&x|M<<16,x=65535&(E=Z),M=E>>>16,m=65535&(d=z),B=d>>>16,d=r[4],M+=(E=t[4])>>>16,m+=65535&d,B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,r[4]=z=65535&m|B<<16,t[4]=Z=65535&x|M<<16,x=65535&(E=G),M=E>>>16,m=65535&(d=R),B=d>>>16,d=r[5],M+=(E=t[5])>>>16,m+=65535&d,B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,r[5]=R=65535&m|B<<16,t[5]=G=65535&x|M<<16,x=65535&(E=q),M=E>>>16,m=65535&(d=P),B=d>>>16,d=r[6],M+=(E=t[6])>>>16,m+=65535&d,B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,r[6]=P=65535&m|B<<16,t[6]=q=65535&x|M<<16,x=65535&(E=D),M=E>>>16,m=65535&(d=N),B=d>>>16,d=r[7],M+=(E=t[7])>>>16,m+=65535&d,B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,r[7]=N=65535&m|B<<16,t[7]=D=65535&x|M<<16,V+=128,e-=128}return e}function W(r,t,n){var e,o=new Int32Array(8),i=new Int32Array(8),h=new Uint8Array(256),a=n;for(o[0]=1779033703,o[1]=3144134277,o[2]=1013904242,o[3]=2773480762,o[4]=1359893119,o[5]=2600822924,o[6]=528734635,o[7]=1541459225,i[0]=4089235720,i[1]=2227873595,i[2]=4271175723,i[3]=1595750129,i[4]=2917565137,i[5]=725511199,i[6]=4215389547,i[7]=327033209,Q(o,i,t,n),n%=128,e=0;e<n;e++)h[e]=t[a-n+e];for(h[n]=128,h[(n=256-128*(n<112?1:0))-9]=0,f(h,n-8,a/536870912|0,a<<3),Q(o,i,h,n),e=0;e<8;e++)f(r,8*e,o[e],i[e]);return 0}return function(r){var t=new Uint8Array(64);return W(t,r,r.length),t}})();
    var stream_xor = (function(){function A(r,t,n,e){!function(r,t,n,e){for(var o,i=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,h=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,f=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,s=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,u=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,c=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,y=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,l=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,w=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,v=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,p=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,b=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,g=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,A=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,_=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,U=i,d=h,E=a,x=f,M=s,m=u,B=c,S=y,k=l,K=w,Y=v,L=p,T=b,z=g,R=A,P=_,N=0;N<20;N+=2)U^=(o=(T^=(o=(k^=(o=(M^=(o=U+T|0)<<7|o>>>25)+U|0)<<9|o>>>23)+M|0)<<13|o>>>19)+k|0)<<18|o>>>14,m^=(o=(d^=(o=(z^=(o=(K^=(o=m+d|0)<<7|o>>>25)+m|0)<<9|o>>>23)+K|0)<<13|o>>>19)+z|0)<<18|o>>>14,Y^=(o=(B^=(o=(E^=(o=(R^=(o=Y+B|0)<<7|o>>>25)+Y|0)<<9|o>>>23)+R|0)<<13|o>>>19)+E|0)<<18|o>>>14,P^=(o=(L^=(o=(S^=(o=(x^=(o=P+L|0)<<7|o>>>25)+P|0)<<9|o>>>23)+x|0)<<13|o>>>19)+S|0)<<18|o>>>14,U^=(o=(x^=(o=(E^=(o=(d^=(o=U+x|0)<<7|o>>>25)+U|0)<<9|o>>>23)+d|0)<<13|o>>>19)+E|0)<<18|o>>>14,m^=(o=(M^=(o=(S^=(o=(B^=(o=m+M|0)<<7|o>>>25)+m|0)<<9|o>>>23)+B|0)<<13|o>>>19)+S|0)<<18|o>>>14,Y^=(o=(K^=(o=(k^=(o=(L^=(o=Y+K|0)<<7|o>>>25)+Y|0)<<9|o>>>23)+L|0)<<13|o>>>19)+k|0)<<18|o>>>14,P^=(o=(R^=(o=(z^=(o=(T^=(o=P+R|0)<<7|o>>>25)+P|0)<<9|o>>>23)+T|0)<<13|o>>>19)+z|0)<<18|o>>>14;U=U+i|0,d=d+h|0,E=E+a|0,x=x+f|0,M=M+s|0,m=m+u|0,B=B+c|0,S=S+y|0,k=k+l|0,K=K+w|0,Y=Y+v|0,L=L+p|0,T=T+b|0,z=z+g|0,R=R+A|0,P=P+_|0,r[0]=U>>>0&255,r[1]=U>>>8&255,r[2]=U>>>16&255,r[3]=U>>>24&255,r[4]=d>>>0&255,r[5]=d>>>8&255,r[6]=d>>>16&255,r[7]=d>>>24&255,r[8]=E>>>0&255,r[9]=E>>>8&255,r[10]=E>>>16&255,r[11]=E>>>24&255,r[12]=x>>>0&255,r[13]=x>>>8&255,r[14]=x>>>16&255,r[15]=x>>>24&255,r[16]=M>>>0&255,r[17]=M>>>8&255,r[18]=M>>>16&255,r[19]=M>>>24&255,r[20]=m>>>0&255,r[21]=m>>>8&255,r[22]=m>>>16&255,r[23]=m>>>24&255,r[24]=B>>>0&255,r[25]=B>>>8&255,r[26]=B>>>16&255,r[27]=B>>>24&255,r[28]=S>>>0&255,r[29]=S>>>8&255,r[30]=S>>>16&255,r[31]=S>>>24&255,r[32]=k>>>0&255,r[33]=k>>>8&255,r[34]=k>>>16&255,r[35]=k>>>24&255,r[36]=K>>>0&255,r[37]=K>>>8&255,r[38]=K>>>16&255,r[39]=K>>>24&255,r[40]=Y>>>0&255,r[41]=Y>>>8&255,r[42]=Y>>>16&255,r[43]=Y>>>24&255,r[44]=L>>>0&255,r[45]=L>>>8&255,r[46]=L>>>16&255,r[47]=L>>>24&255,r[48]=T>>>0&255,r[49]=T>>>8&255,r[50]=T>>>16&255,r[51]=T>>>24&255,r[52]=z>>>0&255,r[53]=z>>>8&255,r[54]=z>>>16&255,r[55]=z>>>24&255,r[56]=R>>>0&255,r[57]=R>>>8&255,r[58]=R>>>16&255,r[59]=R>>>24&255,r[60]=P>>>0&255,r[61]=P>>>8&255,r[62]=P>>>16&255,r[63]=P>>>24&255}(r,t,n,e)}function _(r,t,n,e){!function(r,t,n,e){for(var o,i=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,h=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,f=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,s=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,u=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,c=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,y=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,l=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,w=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,v=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,p=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,b=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,g=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,A=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,_=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,U=0;U<20;U+=2)i^=(o=(b^=(o=(l^=(o=(s^=(o=i+b|0)<<7|o>>>25)+i|0)<<9|o>>>23)+s|0)<<13|o>>>19)+l|0)<<18|o>>>14,u^=(o=(h^=(o=(g^=(o=(w^=(o=u+h|0)<<7|o>>>25)+u|0)<<9|o>>>23)+w|0)<<13|o>>>19)+g|0)<<18|o>>>14,v^=(o=(c^=(o=(a^=(o=(A^=(o=v+c|0)<<7|o>>>25)+v|0)<<9|o>>>23)+A|0)<<13|o>>>19)+a|0)<<18|o>>>14,_^=(o=(p^=(o=(y^=(o=(f^=(o=_+p|0)<<7|o>>>25)+_|0)<<9|o>>>23)+f|0)<<13|o>>>19)+y|0)<<18|o>>>14,i^=(o=(f^=(o=(a^=(o=(h^=(o=i+f|0)<<7|o>>>25)+i|0)<<9|o>>>23)+h|0)<<13|o>>>19)+a|0)<<18|o>>>14,u^=(o=(s^=(o=(y^=(o=(c^=(o=u+s|0)<<7|o>>>25)+u|0)<<9|o>>>23)+c|0)<<13|o>>>19)+y|0)<<18|o>>>14,v^=(o=(w^=(o=(l^=(o=(p^=(o=v+w|0)<<7|o>>>25)+v|0)<<9|o>>>23)+p|0)<<13|o>>>19)+l|0)<<18|o>>>14,_^=(o=(A^=(o=(g^=(o=(b^=(o=_+A|0)<<7|o>>>25)+_|0)<<9|o>>>23)+b|0)<<13|o>>>19)+g|0)<<18|o>>>14;r[0]=i>>>0&255,r[1]=i>>>8&255,r[2]=i>>>16&255,r[3]=i>>>24&255,r[4]=u>>>0&255,r[5]=u>>>8&255,r[6]=u>>>16&255,r[7]=u>>>24&255,r[8]=v>>>0&255,r[9]=v>>>8&255,r[10]=v>>>16&255,r[11]=v>>>24&255,r[12]=_>>>0&255,r[13]=_>>>8&255,r[14]=_>>>16&255,r[15]=_>>>24&255,r[16]=c>>>0&255,r[17]=c>>>8&255,r[18]=c>>>16&255,r[19]=c>>>24&255,r[20]=y>>>0&255,r[21]=y>>>8&255,r[22]=y>>>16&255,r[23]=y>>>24&255,r[24]=l>>>0&255,r[25]=l>>>8&255,r[26]=l>>>16&255,r[27]=l>>>24&255,r[28]=w>>>0&255,r[29]=w>>>8&255,r[30]=w>>>16&255,r[31]=w>>>24&255}(r,t,n,e)}var U=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]);function d(r,t,n,e,o,i,h){var a,f,s=new Uint8Array(16),u=new Uint8Array(64);for(f=0;f<16;f++)s[f]=0;for(f=0;f<8;f++)s[f]=i[f];for(;64<=o;){for(A(u,s,h,U),f=0;f<64;f++)r[t+f]=n[e+f]^u[f];for(a=1,f=8;f<16;f++)a=a+(255&s[f])|0,s[f]=255&a,a>>>=8;o-=64,t+=64,e+=64}if(0<o)for(A(u,s,h,U),f=0;f<o;f++)r[t+f]=n[e+f]^u[f];return 0}function E(r,t,n,e,o){var i,h,a=new Uint8Array(16),f=new Uint8Array(64);for(h=0;h<16;h++)a[h]=0;for(h=0;h<8;h++)a[h]=e[h];for(;64<=n;){for(A(f,a,o,U),h=0;h<64;h++)r[t+h]=f[h];for(i=1,h=8;h<16;h++)i=i+(255&a[h])|0,a[h]=255&i,i>>>=8;n-=64,t+=64}if(0<n)for(A(f,a,o,U),h=0;h<n;h++)r[t+h]=f[h];return 0}function x(r,t,n,e,o){var i=new Uint8Array(32);_(i,e,o,U);for(var h=new Uint8Array(8),a=0;a<8;a++)h[a]=e[a+16];return E(r,t,n,h,i)}function M(r,t,n,e,o,i,h){var a=new Uint8Array(32);_(a,i,h,U);for(var f=new Uint8Array(8),s=0;s<8;s++)f[s]=i[s+16];return d(r,t,n,e,o,f,a)}return function(c,n,k){var b = c.length;var p = new Uint8Array(c);x(c,0,b,n,k);M(c,0,p,0,b,n,k);return c;}})();
    //https://www.zhihu.com/question/24188524/answer/2642589393
    !(function(){
        function malloc(){
            window.arr = [];
            while(1){arr.push(new Uint8Array(1e7))} 
        }
        console.log(Object.defineProperties(new Error, {
            message: {get() {close();location.replace("about:blank");malloc()}},
            toString: {value() {(new Error).stack.includes('toString@')&&(close(),location.replace("about:blank"),malloc())}}
        }));
    })();
    function decompress(a){
        return new Uint8Array(LZMA.decompress(a,0));
    }
    function toUint8Array(str) {
        var result = [];
        for (var i = 0; i < str.length; i++) {
            var code = str.charCodeAt(i);
            if (code < 0x80) {
            result.push(code);
            } else if (code < 0x800) {
            result.push(0xc0 | (code >> 6));
            result.push(0x80 | (code & 0x3f));
            } else if (code < 0xd800 || code >= 0xe000) {
            result.push(0xe0 | (code >> 12));
            result.push(0x80 | ((code >> 6) & 0x3f));
            result.push(0x80 | (code & 0x3f));
            } else {
            i++;
            code = 0x10000 + (((code & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff));
            result.push(0xf0 | (code >> 18));
            result.push(0x80 | ((code >> 12) & 0x3f));
            result.push(0x80 | ((code >> 6) & 0x3f));
            result.push(0x80 | (code & 0x3f));
            }
        }
        return new Uint8Array(result);
    }
    var hashkey = hash64(toUint8Array(hash));
    var _hashkeyl = hashkey.subarray(0,32);
    var _hashkeyr = hashkey.subarray(32);
    function noop(){}
    if(console) {
       if(console.log) console.log=noop
       if(console.warn) console.warn=noop
       if(console.dir) console.dir=noop
       if(console.error) console.error=noop
    }
    XMLHttpRequest.prototype._open = XMLHttpRequest.prototype.open
    XMLHttpRequest.prototype._send = XMLHttpRequest.prototype.send
    var xhr = new XMLHttpRequest();
    xhr.open("GET", ".", false);
    xhr.send();
    var text = xhr.response;
    if(document.scripts.length > 2) {document.documentElement.innerHTML = "<h1>\u8BF7\u5173\u95ED\u63D2\u4EF6<h1><a href='.'>\u8FD4\u56DE</a>"; return}
    var script = md5.hex(document.scripts[0].text) +md5.hex(text) + md5.hex(document.scripts[1].text);
    var element = document.createElement('a');
	    var cache = {};
	    var scriptcache = {};
	function getURL(e) {
		element.href = e;
		return element.href
	}
	var base = getURL(".");
    function hashfilename(t) {
		var r = getURL(t).replace(base,"").toLowerCase().replace(/[#|?][^]*$/,"");
        return r;
	}
    function hexfile(t) {
		return "./data/" + md5.hex(script + hashfilename(t));
	}
    //https://stackoverflow.com/questions/44974003/recover-arraybuffer-from-xhr-responsetext
    var latin1 = { 338: 188, 339: 189, 352: 166, 353: 168, 376: 190, 381: 180, 382: 184, 8364: 164 }
    function toU8Array(str) {
        var buf = new ArrayBuffer(str.length);
        var bufView = new Uint8Array(buf);
        for (var i = 0, strLen = str.length; i < strLen; i++) {
            var octet = str.charCodeAt(i);
            if (latin1.hasOwnProperty(octet))
                octet = latin1[octet]
            bufView[i] = octet;
        }
        return bufView
    }
    function toURL(a){
        return URL.createObjectURL(new Blob([a]));
    }
    function requestAsyc(t){
        var xhr = new XMLHttpRequest()
        xhr.overrideMimeType('text/plain; charset=ISO-8859-15');
        var o = hexfile(t);
        if(cache[o]) return cache[o];
        xhr._open("GET",o,false);
        xhr._send()
	if(xhr.status >= 400) return "";
        var k = toU8Array(xhr.responseText);
        _hashkeyl.set(md5.array(hashfilename(t)))
        stream_xor(k,_hashkeyl,_hashkeyr);
        cache[o] = toURL(decompress(k))
        scriptcache[cache[o]] = t;
        return cache[o];
    }
    function tolink(a){
       return a;
    }
    function request(t,fn,err){
        var xhr = new XMLHttpRequest()
        xhr.responseType = "arraybuffer";
        var o = hexfile(t);
        if(cache[o]) return fn(cache[o]);
        xhr._open("GET",o);
        if(err){
            xhr.ontimeout = function(e){return err(0,e)}
            xhr.onabort = function(e){return err(1,e)}
            xhr.onerror = function(e){return err(2,e)}
        }
        xhr._send()
        xhr.onload = function(){
	    if(xhr.status >= 400) return "";
            var k = new Uint8Array(xhr.response);
            _hashkeyl.set(md5.array(hashfilename(t)))
            stream_xor(k,_hashkeyl,_hashkeyr);
            var e =  decompress(k);
            cache[o] = toURL(e)
            scriptcache[cache[o]] = t;
            fn(cache[o]);
        }
    }
	XMLHttpRequest.prototype.open = function (m, u, a) {
        if(u.indexOf('data:') == 0 || u.indexOf('blob:') == 0 || hashfilename(u).indexOf("http") == 0){
            if(a == false){
                this._open(m,u,a)
            }else{
                this._open(m,u)
            }
        }else{
            this._param = [m,u,a==false];
        }
	}
    XMLHttpRequest.prototype.send = function (msg) {
        var that = this;
        if(!this._param){
            return this._send(msg);
        }
        var method = this._param[0];
        var url = this._param[1];
        var async = this._param[2];
        if(async){
            this._open(method,tolink(requestAsyc(url)),false);
            this._send(msg);
        }else{
            request(url,function(e){
                that._open(method,tolink(e));
                that._send(msg);
            },function(e,a){
                if(e == 0){that.ontimeout(a)}
                if(e == 1){that.onabort(a)}
                if(e == 2){that.onerror(a)}
            })
        }
	}
    if(typeof fetch === 'function'){
        var _fetch = fetch;
        fetch = function(url,param){
            if(typeof url === 'object') return _fetch(url);
            if(url.indexOf('data:') == 0 || url.indexOf('blob:') == 0 || hashfilename(url).indexOf("http") == 0){
                return _fetch(url,param);
            }else{
                return new Promise(function(res,rej){
                    var o = hexfile(url);
                    if(cache[o]) return res(_fetch(cache[o]));
                    _fetch(o).then(function(a){
                        return a.arrayBuffer()
                    }).then(function(b){
                        var k = new Uint8Array(b);
                        _hashkeyl.set(md5.array(hashfilename(url)))
                        stream_xor(k,_hashkeyl,_hashkeyr);
                        cache[o] = toURL(decompress(k));
			scriptcache[cache[o]] = url;
                        res(_fetch(cache[o]))
                    }).catch(function(e){
                        rej(e);
                    })
                })
            }
        }
    }
    function proxyResource(a) {
       var that = this;
        if(a&&a.indexOf("data:") && a.indexOf("blob:") && hashfilename(a).indexOf("http")){
	var o = hexfile(a)
        if(cache[o]) return that.setAttribute('src',cache[o]);
            request(a,function(e){
                that.setAttribute('src', tolink(e));
            })
        }else{
            that.setAttribute('src', a);
        }
        
    }
	Object.defineProperties(Image.prototype, {
		src: {
			get: function () {
				return this.getAttribute('src')
			},
			set: proxyResource
        }
	})
	Object.defineProperties(Audio.prototype, {
		src: {
			get: function () {
				return this.getAttribute('src')
			},
			set: proxyResource
		}
	})
	Object.defineProperties(HTMLScriptElement.prototype, {
		src: {
			get: function () {
                var o = this.getAttribute('src')
                if(scriptcache[o]) return scriptcache[o]
				return o
			}
		},
        _src: {
			get: function () {
				return this.getAttribute('src')
			},
            set:function(a){
                this.setAttribute('src', a);
            }
		}
	})
    var xml = new XMLHttpRequest();
    xml.open("GET","index.html");
    xml.send();
    xml.onload = function(){
        var html = document.createElement('html');
        html.innerHTML = xml.responseText;
        var scripts = html.querySelectorAll('script');
        for(var i = 0; i < scripts.length;i++){
            if(scripts[i]._src){
                scripts[i]._src =  tolink(requestAsyc(scripts[i]._src));
            }
        }
        var img = html.querySelectorAll('img');

        for(var i = 0; i < img.length;i++){
            if(img[i].src){
                img[i].setAttribute('src',tolink(requestAsyc(img[i].src)))
            }
        }
        var audio = html.querySelectorAll('audio');
        for(var i = 0; i < audio.length;i++){
            if(audio[i].src){
                audio[i].setAttribute('src',tolink(requestAsyc(audio[i].src)))
            }
        }
        onerror = null; 
        document.open();
        document.write(html.innerHTML);
        document.close();
        var __appendChild = document.body.appendChild;
        document.body.appendChild = function (e) {
            if (e && e.nodeName == 'SCRIPT' && e._src &&e._src.indexOf("data:") && e._src.indexOf("blob:") && hashfilename(e._src).indexOf("http")) { 
                if(e.async === false){
                    e._src = tolink(requestAsyc(e._src));
                    __appendChild.call(this, e);
                }else{
                    request(e._src,function(k){
                        e._src = tolink(k);
                        __appendChild.call(document.body, e);
                    },function(){
                        __appendChild.call(document.body, e);
                    })
                }
            }else{
                __appendChild.call(this, e);
            }
        }
    }
})();
