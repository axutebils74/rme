!(function(){
    clearInterval(timeO);
    // lzma closure-compiler
var lzma_decompress = (function(){
var l=l||{};
(function(c){c.C=function(){this.G=0};c.C.prototype.create=function(a){this.H&&this.G===a||(this.H=new Uint8Array(a));this.G=a;this.da=this.s=0};c.C.prototype.flush=function(){var a=this.s-this.da;if(0!==a){if(this.v.va)this.v.va(this.H,a);else for(var b=0;b<a;b++)this.v.Sa(this.H[b]);this.s>=this.G&&(this.s=0);this.da=this.s}};c.C.prototype.T=function(){this.flush();this.v=null};c.C.prototype.ea=function(a){this.T();this.v=a};c.C.prototype.h=function(a){a||(this.s=this.da=0)};c.C.prototype.za=function(a,
b){var d=this.s-a-1;for(0>d&&(d+=this.G);b--;)d>=this.G&&(d=0),this.H[this.s++]=this.H[d++],this.s>=this.G&&this.flush()};c.C.prototype.Ka=function(a){this.H[this.s++]=a;this.s>=this.G&&this.flush()};c.C.prototype.qa=function(a){a=this.s-a-1;0>a&&(a+=this.G);return this.H[a]};c.I=function(){};c.I.prototype.ea=function(a){this.v=a};c.I.prototype.T=function(){this.v=null};c.I.prototype.h=function(){var a=5;this.l=0;for(this.i=-1;a--;)this.l=this.l<<8|this.v.g()};c.I.prototype.Aa=function(a){for(var b=
0,d;a--;)this.i>>>=1,d=this.l-this.i>>>31,this.l-=this.i&d-1,b=b<<1|1-d,0===(this.i&4278190080)&&(this.l=this.l<<8|this.v.g(),this.i<<=8);return b};c.I.prototype.m=function(a,b){var d=a[b],e=(this.i>>>11)*d;if((this.l^2147483648)<(e^2147483648))return this.i=e,a[b]+=2048-d>>>5,0===(this.i&4278190080)&&(this.l=this.l<<8|this.v.g(),this.i<<=8),0;this.i-=e;this.l-=e;a[b]-=d>>>5;0===(this.i&4278190080)&&(this.l=this.l<<8|this.v.g(),this.i<<=8);return 1};c.A=function(a,b){for(;b--;)a[b]=1024};c.o=function(a){this.aa=
[];this.S=a};c.o.prototype.h=function(){c.A(this.aa,1<<this.S)};c.o.prototype.decode=function(a){for(var b=1,d=this.S;d--;)b=b<<1|a.m(this.aa,b);return b-(1<<this.S)};c.o.prototype.La=function(a){for(var b=1,d=0,e=0,f;e<this.S;++e)f=a.m(this.aa,b),b=b<<1|f,d|=f<<e;return d};c.Ma=function(a,b,d,e){for(var f=1,h=0,k=0,m;k<e;++k)m=d.m(a,b+f),f=f<<1|m,h|=m<<k;return h};c.K=function(){this.U=[];this.Z=[];this.$=[];this.ga=new c.o(8);this.L=0};c.K.prototype.create=function(a){for(;this.L<a;++this.L)this.Z[this.L]=
new c.o(3),this.$[this.L]=new c.o(3)};c.K.prototype.h=function(){var a=this.L;for(c.A(this.U,2);a--;)this.Z[a].h(),this.$[a].h();this.ga.h()};c.K.prototype.decode=function(a,b){return 0===a.m(this.U,0)?this.Z[b].decode(a):0===a.m(this.U,1)?8+this.$[b].decode(a):16+this.ga.decode(a)};c.N=function(){this.R=[]};c.N.prototype.h=function(){c.A(this.R,768)};c.N.prototype.Ca=function(a){var b=1;do b=b<<1|a.m(this.R,b);while(256>b);return b&255};c.N.prototype.Da=function(a,b){var d=1;do{var e=b>>7&1;b<<=
1;var f=a.m(this.R,(1+e<<8)+d);d=d<<1|f;if(e!==f){for(;256>d;)d=d<<1|a.m(this.R,d);break}}while(256>d);return d&255};c.O=function(){};c.O.prototype.create=function(a,b){var d;if(!this.P||this.M!==b||this.ba!==a)for(this.ba=a,this.wa=(1<<a)-1,this.M=b,this.P=[],d=1<<this.M+this.ba;d--;)this.P[d]=new c.N};c.O.prototype.h=function(){for(var a=1<<this.M+this.ba;a--;)this.P[a].h()};c.O.prototype.Ga=function(a,b){return this.P[((a&this.wa)<<this.M)+((b&255)>>>8-this.M)]};c.B=function(){this.D=new c.C;this.j=
new c.I;this.ha=[];this.ja=[];this.ka=[];this.la=[];this.ma=[];this.ia=[];this.J=[];this.oa=[];this.na=new c.o(4);this.X=new c.K;this.ca=new c.K;this.Y=new c.O;this.W=this.V=-1;this.J[0]=new c.o(6);this.J[1]=new c.o(6);this.J[2]=new c.o(6);this.J[3]=new c.o(6)};c.B.prototype.sa=function(a){if(0>a)return!1;this.V!==a&&(this.V=a,this.W=Math.max(this.V,1),this.D.create(Math.max(this.W,4096)));return!0};c.B.prototype.ta=function(a,b,d){var e=1<<d;if(8<a||4<b||4<d)return!1;this.Y.create(b,a);this.X.create(e);
this.ca.create(e);this.xa=e-1;return!0};c.B.prototype.Oa=function(a){if(!this.ta(a.Ha,a.Ia,a.Ja))throw Error("Incorrect stream properties");if(!this.sa(a.Fa))throw Error("Invalid dictionary size");};c.B.prototype.Ba=function(a){if(13>a.size)return!1;var b=a.g();var d=b%9;b=~~(b/9);var e=b%5;b=~~(b/5);var f=a.g();f|=a.g()<<8;f|=a.g()<<16;f+=16777216*a.g();var h=a.g();h|=a.g()<<8;h|=a.g()<<16;h+=16777216*a.g();a.g();a.g();a.g();a.g();return{Ha:d,Ia:e,Ja:b,Fa:f,Qa:h}};c.B.prototype.h=function(){var a=
4;this.D.h(!1);c.A(this.ha,192);c.A(this.ia,192);c.A(this.ja,12);c.A(this.ka,12);c.A(this.la,12);c.A(this.ma,12);c.A(this.oa,114);for(this.Y.h();a--;)this.J[a].h();this.X.h();this.ca.h();this.na.h();this.j.h()};c.B.prototype.pa=function(a,b,d){var e=0,f=0,h=0,k=0,m=0,n=0,g=0;this.j.ea(a);this.D.ea(b);for(this.h();0>d||n<d;)if(a=n&this.xa,0===this.j.m(this.ha,(e<<4)+a))g=this.Y.Ga(n++,g),g=7<=e?g.Da(this.j,this.D.qa(f)):g.Ca(this.j),this.D.Ka(g),e=4>e?0:e-(10>e?3:6);else{if(1===this.j.m(this.ja,e))g=
0,0===this.j.m(this.ka,e)?0===this.j.m(this.ia,(e<<4)+a)&&(e=7>e?9:11,g=1):(0===this.j.m(this.la,e)?b=h:(0===this.j.m(this.ma,e)?b=k:(b=m,m=k),k=h),h=f,f=b),0===g&&(g=2+this.ca.decode(this.j,a),e=7>e?8:11);else if(m=k,k=h,h=f,g=2+this.X.decode(this.j,a),e=7>e?7:10,a=this.J[5>=g?g-2:3].decode(this.j),4<=a)if(b=(a>>1)-1,f=(2|a&1)<<b,14>a)f+=c.Ma(this.oa,f-a-1,this.j,b);else{if(f+=this.j.Aa(b-4)<<4,f+=this.na.La(this.j),0>f){if(-1===f)break;return!1}}else f=a;if(f>=n||f>=this.W)return!1;this.D.za(f,
g);n+=g;g=this.D.qa(0)}this.D.flush();this.D.T();this.j.T();return!0};c.B.prototype.Na=function(a){if(5>a.size)return!1;var b=a.g();var d=b%9;b=~~(b/9);if(!this.ta(d,b%5,~~(b/5)))return!1;b=a.g();b|=a.g()<<8;b|=a.g()<<16;b+=16777216*a.g();return this.sa(b)};c.Ra=function(a,b,d,e){var f=new c.B;if(!f.Na(a))throw Error("Incorrect lzma stream properties");if(!f.pa(b,d,e))throw Error("Error in lzma data stream");return d};c.Ea=function(a,b){a instanceof ArrayBuffer&&(a=new c.ra(a));!b&&c.F&&(b=new c.F);
var d=new c.B,e=d.Ba(a),f=e.Qa;d.Oa(e);if(!d.pa(a,b,f))throw Error("Error in lzma data stream");return b};c.decode=c.Ea})(l);l=l||{};
(function(c){c.ra=function(a){this.ya=new Uint8Array(a);this.size=a.byteLength;this.offset=0};c.ra.prototype.g=function(){return this.ya[this.offset++]};c.F=function(a){this.size=0;this.u=[];a=a||[];for(var b=0,d=a.length;b<d;b++)if(a[b]instanceof c.F)for(var e=a[b].u,f=0;f<e.length;f++)this.u.push(a[b].u[f]),this.size+=a[b].u[f].length;else this.u.push(a[b]),this.size+=a[b].length};c.F.prototype.va=function(a,b){if(b<=a.byteLength)this.u.push(a.slice(0,b));else throw Error("Buffer too small?");this.size+=
b};c.F.prototype.ua=function(){var a=this.size,b=this.u;if(1==b.length)return b[0];try{for(var d=new Uint8Array(a),e=a=0;a<b.length;a++)d.set(b[a],e),e+=b[a].length;b[0]=d;b.length=1;return d}catch(f){}return null};c.F.prototype.forEach=function(a){for(var b=0;b<this.u.length;b++)a.call(this,this.u[b])};c.F.prototype.Pa=function(){c.fa||this.ua();return c.fa.decode(this.ua())};c.F.prototype.toString=function(){var a=this.u,b="";c.fa&&(a=[this.Pa()]);for(var d=0,e=a.length;d<e;d++)for(var f=0,h=a[d].length;f<
h;f++)b+=String.fromCharCode(a[d][f]);return b}})(l);return(function(c){var a=new l.F;l.decode(c.buffer,a);var b=new Uint8Array(a.size);var z=0;a.u.forEach(function(d){b.set(d,z);z+=d.length});return b});
})();
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
    function check(e){
        return e&&e.indexOf("data:") && e.indexOf("blob:") && hashfilename(e).indexOf("http")
    }
    function decompress(a){
        return lzma_decompress(a);
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
        return decodeURIComponent(r);
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
                if(e == 0){that.ontimeout&&that.ontimeout(a)}
                if(e == 1){that.onabort&&that.onabort(a)}
                if(e == 2){that.onerror&&that.onerror(a)}
            })
        }
	}
    if(typeof fetch === 'function'){
        var _fetch = fetch;
        fetch = function(url,param){
            if(typeof url === 'object') return _fetch(url);
            if(url&&url.indexOf('data:')&&url.indexOf('blob:')&&hashfilename(url).indexOf("http")){
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
            }else{
                return _fetch(url,param);
            }
        }
    }
    function proxyResource(a) {
       var that = this;
        if(check(a)){
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
				return this.getAttribute('src')||""
			},
			set: proxyResource
        }
	})
	Object.defineProperties(Audio.prototype, {
		src: {
			get: function () {
				return this.getAttribute('src')||""
			},
			set: proxyResource
		}
	})
	Object.defineProperties(HTMLScriptElement.prototype, {
		src: {
			get: function () {
                var o = this.getAttribute('src')
                if(scriptcache[o]) return scriptcache[o]
				return o||""
			}
		},
        _src: {
			get: function () {
				return this.getAttribute('src')||""
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
            if(check(scripts[i]._src)){
                scripts[i]._src =  tolink(requestAsyc(scripts[i]._src));
            }
        }
        var img = html.querySelectorAll('img');
        for(var i = 0; i < img.length;i++){
            if(check(img[i].src)){
                img[i].setAttribute('src',tolink(requestAsyc(img[i].src)))
            }
        }
        var audio = html.querySelectorAll('audio');
        for(var i = 0; i < audio.length;i++){
            if(check(audio[i].src)){
                audio[i].setAttribute('src',tolink(requestAsyc(audio[i].src)))
            }
        }
        onerror = null; 
	var __appendChild = Node.prototype.appendChild;
        Node.prototype.appendChild = function (e) {
            if (this === document.body && e && e.nodeName == 'SCRIPT' && check(e._src)) { 
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
                return e;
            }else{
                return __appendChild.call(this, e);
            }
        }
        document.open();
        document.write(html.innerHTML);
        document.close();
    }
})();
