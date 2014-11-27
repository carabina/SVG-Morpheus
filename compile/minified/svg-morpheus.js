/*! SVG Morpheus v0.1.5 License: MIT */var SVGMorpheus=function(){"use strict";function t(t,e,r){var a,n={};for(a in t)switch(a){case"fill":case"stroke":n[a]=o(t[a]),n[a].r=t[a].r+(e[a].r-t[a].r)*r,n[a].g=t[a].g+(e[a].g-t[a].g)*r,n[a].b=t[a].b+(e[a].b-t[a].b)*r,n[a].opacity=t[a].opacity+(e[a].opacity-t[a].opacity)*r;break;case"stroke-width":n[a]=t[a]+(e[a]-t[a])*r}return n}function e(t){var e,r={};for(e in t)switch(e){case"fill":case"stroke":r[e]=F(t[e]);break;case"stroke-width":r[e]=t[e]}return r}function r(t,e){var r,a=[{},{}];for(r in t)switch(r){case"fill":case"stroke":a[0][r]=L(t[r]),void 0===e[r]&&(a[1][r]=L(t[r]),a[1][r].opacity=0);break;case"stroke-width":a[0][r]=t[r],void 0===e[r]&&(a[1][r]=1)}for(r in e)switch(r){case"fill":case"stroke":a[1][r]=L(e[r]),void 0===t[r]&&(a[0][r]=L(e[r]),a[0][r].opacity=0);break;case"stroke-width":a[1][r]=e[r],void 0===t[r]&&(a[0][r]=1)}return a}function a(t,e,r){var a={};for(var n in t)switch(n){case"rotate":a[n]=[0,0,0];for(var s=0;3>s;s++)a[n][s]=t[n][s]+(e[n][s]-t[n][s])*r}return a}function n(t){var e="";return t.rotate&&(e+="rotate("+t.rotate.join(" ")+")"),e}function s(t,e,r){for(var a=[],n=0,s=t.length;s>n;n++){a.push([t[n][0]]);for(var o=1,i=t[n].length;i>o;o++)a[n].push(t[n][o]+(e[n][o]-t[n][o])*r)}return a}function o(t){var e;if(t instanceof Array){e=[];for(var r=0,a=t.length;a>r;r++)e[r]=o(t[r]);return e}if(t instanceof Object){e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=o(t[n]));return e}return t}function i(t,e,r){if(!t)throw new Error('SVGMorpheus > "element" is required');if("string"==typeof t&&(t=document.querySelector(t),!t))throw new Error('SVGMorpheus > "element" query is not related to an existing DOM node');if(e&&typeof e!=typeof{})throw new Error('SVGMorpheus > "options" parameter must be an object');if(e=e||{},r&&"function"!=typeof r)throw new Error('SVGMorpheus > "callback" parameter must be a function');var a=this;this._icons={},this._curIconId=e.iconId||"",this._toIconId="",this._curIconItems=[],this._fromIconItems=[],this._toIconItems=[],this._morphNodes=[],this._morphG,this._startTime,this._defDuration=e.duration||750,this._defEasing=e.easing||"quad-in-out",this._defCallback=r||function(){},this._duration=this._defDuration,this._easing=this._defEasing,this._callback=this._defCallback,this._rafid,this._fnTick=function(t){a._startTime||(a._startTime=t);var e=Math.min((t-a._startTime)/a._duration,1);a._updateAnimationProgress(e),1>e?a._rafid=h(a._fnTick):a._animationEnd()},this._svgDoc="SVG"===t.nodeName.toUpperCase()?t:t.getSVGDocument(),this._svgDoc?a._init():t.addEventListener("load",function(){a._svgDoc=t.getSVGDocument(),a._init()},!1)}var c={};c["circ-in"]=function(t){return-1*(Math.sqrt(1-t*t)-1)},c["circ-out"]=function(t){return Math.sqrt(1-(t-=1)*t)},c["circ-in-out"]=function(t){return(t/=.5)<1?-0.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},c["cubic-in"]=function(t){return t*t*t},c["cubic-out"]=function(t){return--t*t*t+1},c["cubic-in-out"]=function(t){return.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},c["elastic-in"]=function(t){var e=1.70158,r=0,a=1;if(0==t)return 0;if(1==t)return 1;if(r||(r=.3),a<Math.abs(1)){a=1;var e=r/4}else var e=r/(2*Math.PI)*Math.asin(1/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin(2*(t-e)*Math.PI/r))},c["elastic-out"]=function(t){var e=1.70158,r=0,a=1;if(0==t)return 0;if(1==t)return 1;if(r||(r=.3),a<Math.abs(1)){a=1;var e=r/4}else var e=r/(2*Math.PI)*Math.asin(1/a);return a*Math.pow(2,-10*t)*Math.sin(2*(t-e)*Math.PI/r)+1},c["elastic-in-out"]=function(t){var e=1.70158,r=0,a=1;if(0==t)return 0;if(2==(t/=.5))return 1;if(r||(r=.3*1.5),a<Math.abs(1)){a=1;var e=r/4}else var e=r/(2*Math.PI)*Math.asin(1/a);return 1>t?-.5*a*Math.pow(2,10*(t-=1))*Math.sin(2*(t-e)*Math.PI/r):a*Math.pow(2,-10*(t-=1))*Math.sin(2*(t-e)*Math.PI/r)*.5+1},c["expo-in"]=function(t){return 0==t?0:Math.pow(2,10*(t-1))},c["expo-out"]=function(t){return 1==t?1:1-Math.pow(2,-10*t)},c["expo-in-out"]=function(t){return 0==t?0:1==t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},c.linear=function(t){return t},c["quad-in"]=function(t){return t*t},c["quad-out"]=function(t){return t*(2-t)},c["quad-in-out"]=function(t){return.5>t?2*t*t:-1+(4-2*t)*t},c["quart-in"]=function(t){return t*t*t*t},c["quart-out"]=function(t){return 1- --t*t*t*t},c["quart-in-out"]=function(t){return.5>t?8*t*t*t*t:1-8*--t*t*t*t},c["quint-in"]=function(t){return t*t*t*t*t},c["quint-out"]=function(t){return 1+--t*t*t*t*t},c["quint-in-out"]=function(t){return.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t},c["sine-in"]=function(t){return 1-Math.cos(t*(Math.PI/2))},c["sine-out"]=function(t){return Math.sin(t*(Math.PI/2))},c["sine-in-out"]=function(t){return.5*(1-Math.cos(Math.PI*t))};var h=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame,u=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.oCancelAnimationFrame,l="	\n\f\r   ᠎             　\u2028\u2029",p=new RegExp("([a-z])["+l+",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?["+l+"]*,?["+l+"]*)+)","ig"),f=new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)["+l+"]*,?["+l+"]*","ig"),m=function(t){if(!t)return null;if(typeof t==typeof[])return t;var e={a:7,c:6,o:2,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,u:3,z:0},r=[];return String(t).replace(p,function(t,a,n){var s=[],o=a.toLowerCase();if(n.replace(f,function(t,e){e&&s.push(+e)}),"m"==o&&s.length>2&&(r.push([a].concat(s.splice(0,2))),o="l",a="m"==a?"l":"L"),"o"==o&&1==s.length&&r.push([a,s[0]]),"r"==o)r.push([a].concat(s));else for(;s.length>=e[o]&&(r.push([a].concat(s.splice(0,e[o]))),e[o]););}),r},d=function(t,e){for(var r=[],a=0,n=t.length;n-2*!e>a;a+=2){var s=[{x:+t[a-2],y:+t[a-1]},{x:+t[a],y:+t[a+1]},{x:+t[a+2],y:+t[a+3]},{x:+t[a+4],y:+t[a+5]}];e?a?n-4==a?s[3]={x:+t[0],y:+t[1]}:n-2==a&&(s[2]={x:+t[0],y:+t[1]},s[3]={x:+t[2],y:+t[3]}):s[0]={x:+t[n-2],y:+t[n-1]}:n-4==a?s[3]=s[2]:a||(s[0]={x:+t[a],y:+t[a+1]}),r.push(["C",(-s[0].x+6*s[1].x+s[2].x)/6,(-s[0].y+6*s[1].y+s[2].y)/6,(s[1].x+6*s[2].x-s[3].x)/6,(s[1].y+6*s[2].y-s[3].y)/6,s[2].x,s[2].y])}return r},I=function(t,e,r,a,n){if(null==n&&null==a&&(a=r),t=+t,e=+e,r=+r,a=+a,null!=n)var s=Math.PI/180,o=t+r*Math.cos(-a*s),i=t+r*Math.cos(-n*s),c=e+r*Math.sin(-a*s),h=e+r*Math.sin(-n*s),u=[["M",o,c],["A",r,r,0,+(n-a>180),0,i,h]];else u=[["M",t,e],["m",0,-a],["a",r,a,0,1,1,0,2*a],["a",r,a,0,1,1,0,-2*a],["z"]];return u},g=function(t){if(t=m(t),!t||!t.length)return[["M",0,0]];var e,r=[],a=0,n=0,s=0,o=0,i=0;"M"==t[0][0]&&(a=+t[0][1],n=+t[0][2],s=a,o=n,i++,r[0]=["M",a,n]);for(var c,h,u=3==t.length&&"M"==t[0][0]&&"R"==t[1][0].toUpperCase()&&"Z"==t[2][0].toUpperCase(),l=i,p=t.length;p>l;l++){if(r.push(c=[]),h=t[l],e=h[0],e!=e.toUpperCase())switch(c[0]=e.toUpperCase(),c[0]){case"A":c[1]=h[1],c[2]=h[2],c[3]=h[3],c[4]=h[4],c[5]=h[5],c[6]=+h[6]+a,c[7]=+h[7]+n;break;case"V":c[1]=+h[1]+n;break;case"H":c[1]=+h[1]+a;break;case"R":for(var f=[a,n].concat(h.slice(1)),g=2,M=f.length;M>g;g++)f[g]=+f[g]+a,f[++g]=+f[g]+n;r.pop(),r=r.concat(d(f,u));break;case"O":r.pop(),f=I(a,n,h[1],h[2]),f.push(f[0]),r=r.concat(f);break;case"U":r.pop(),r=r.concat(I(a,n,h[1],h[2],h[3])),c=["U"].concat(r[r.length-1].slice(-2));break;case"M":s=+h[1]+a,o=+h[2]+n;default:for(g=1,M=h.length;M>g;g++)c[g]=+h[g]+(g%2?a:n)}else if("R"==e)f=[a,n].concat(h.slice(1)),r.pop(),r=r.concat(d(f,u)),c=["R"].concat(h.slice(-2));else if("O"==e)r.pop(),f=I(a,n,h[1],h[2]),f.push(f[0]),r=r.concat(f);else if("U"==e)r.pop(),r=r.concat(I(a,n,h[1],h[2],h[3])),c=["U"].concat(r[r.length-1].slice(-2));else for(var y=0,_=h.length;_>y;y++)c[y]=h[y];if(e=e.toUpperCase(),"O"!=e)switch(c[0]){case"Z":a=+s,n=+o;break;case"H":a=c[1];break;case"V":n=c[1];break;case"M":s=c[c.length-2],o=c[c.length-1];default:a=c[c.length-2],n=c[c.length-1]}}return r},M=function(t,e,r,a){return[t,e,r,a,r,a]},y=function(t,e,r,a,n,s){var o=1/3,i=2/3;return[o*t+i*r,o*e+i*a,o*n+i*r,o*s+i*a,n,s]},_=function(t,e,r,a,n,s,o,i,c,h){var u,l=120*Math.PI/180,p=Math.PI/180*(+n||0),f=[],m=function(t,e,r){var a=t*Math.cos(r)-e*Math.sin(r),n=t*Math.sin(r)+e*Math.cos(r);return{x:a,y:n}};if(h)w=h[0],A=h[1],v=h[2],x=h[3];else{u=m(t,e,-p),t=u.x,e=u.y,u=m(i,c,-p),i=u.x,c=u.y;var d=(Math.cos(Math.PI/180*n),Math.sin(Math.PI/180*n),(t-i)/2),I=(e-c)/2,g=d*d/(r*r)+I*I/(a*a);g>1&&(g=Math.sqrt(g),r=g*r,a=g*a);var M=r*r,y=a*a,b=(s==o?-1:1)*Math.sqrt(Math.abs((M*y-M*I*I-y*d*d)/(M*I*I+y*d*d))),v=b*r*I/a+(t+i)/2,x=b*-a*d/r+(e+c)/2,w=Math.asin(((e-x)/a).toFixed(9)),A=Math.asin(((c-x)/a).toFixed(9));w=v>t?Math.PI-w:w,A=v>i?Math.PI-A:A,0>w&&(w=2*Math.PI+w),0>A&&(A=2*Math.PI+A),o&&w>A&&(w-=2*Math.PI),!o&&A>w&&(A-=2*Math.PI)}var k=A-w;if(Math.abs(k)>l){var C=A,q=i,N=c;A=w+l*(o&&A>w?1:-1),i=v+r*Math.cos(A),c=x+a*Math.sin(A),f=_(i,c,r,a,n,0,o,q,N,[A,C,v,x])}k=A-w;var P=Math.cos(w),F=Math.sin(w),E=Math.cos(A),S=Math.sin(A),G=Math.tan(k/4),D=4/3*r*G,L=4/3*a*G,T=[t,e],V=[t+D*F,e-L*P],U=[i+D*S,c-L*E],z=[i,c];if(V[0]=2*T[0]-V[0],V[1]=2*T[1]-V[1],h)return[V,U,z].concat(f);f=[V,U,z].concat(f).join().split(",");for(var R=[],O=0,j=f.length;j>O;O++)R[O]=O%2?m(f[O-1],f[O],p).y:m(f[O],f[O+1],p).x;return R},b=function(t,e){for(var r=g(t),a=e&&g(e),n={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},s={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o=(function(t,e,r){var a,n;if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in{T:1,Q:1})&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"].concat(_.apply(0,[e.x,e.y].concat(t.slice(1))));break;case"S":"C"==r||"S"==r?(a=2*e.x-e.bx,n=2*e.y-e.by):(a=e.x,n=e.y),t=["C",a,n].concat(t.slice(1));break;case"T":"Q"==r||"T"==r?(e.qx=2*e.x-e.qx,e.qy=2*e.y-e.qy):(e.qx=e.x,e.qy=e.y),t=["C"].concat(y(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"].concat(y(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"].concat(M(e.x,e.y,t[1],t[2]));break;case"H":t=["C"].concat(M(e.x,e.y,t[1],e.y));break;case"V":t=["C"].concat(M(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"].concat(M(e.x,e.y,e.X,e.Y))}return t}),i=function(t,e){if(t[e].length>7){t[e].shift();for(var n=t[e];n.length;)h[e]="A",a&&(u[e]="A"),t.splice(e++,0,["C"].concat(n.splice(0,6)));t.splice(e,1),m=Math.max(r.length,a&&a.length||0)}},c=function(t,e,n,s,o){t&&e&&"M"==t[o][0]&&"M"!=e[o][0]&&(e.splice(o,0,["M",s.x,s.y]),n.bx=0,n.by=0,n.x=t[o][1],n.y=t[o][2],m=Math.max(r.length,a&&a.length||0))},h=[],u=[],l="",p="",f=0,m=Math.max(r.length,a&&a.length||0);m>f;f++){r[f]&&(l=r[f][0]),"C"!=l&&(h[f]=l,f&&(p=h[f-1])),r[f]=o(r[f],n,p),"A"!=h[f]&&"C"==l&&(h[f]="C"),i(r,f),a&&(a[f]&&(l=a[f][0]),"C"!=l&&(u[f]=l,f&&(p=u[f-1])),a[f]=o(a[f],s,p),"A"!=u[f]&&"C"==l&&(u[f]="C"),i(a,f)),c(r,a,n,s,f),c(a,r,s,n,f);var d=r[f],I=a&&a[f],b=d.length,v=a&&I.length;n.x=d[b-2],n.y=d[b-1],n.bx=parseFloat(d[b-4])||n.x,n.by=parseFloat(d[b-3])||n.y,s.bx=a&&(parseFloat(I[v-4])||s.x),s.by=a&&(parseFloat(I[v-3])||s.y),s.x=a&&I[v-2],s.y=a&&I[v-1]}return a?[r,a]:r},v=function(t,e,r,a){return null==t&&(t=e=r=a=0),null==e&&(e=t.y,r=t.width,a=t.height,t=t.x),{x:t,y:e,w:r,h:a,cx:t+r/2,cy:e+a/2}},x=function(t,e,r,a,n,s,o,i){for(var c,h,u,l,p,f,m,d,I=[],g=[[],[]],M=0;2>M;++M)if(0==M?(h=6*t-12*r+6*n,c=-3*t+9*r-9*n+3*o,u=3*r-3*t):(h=6*e-12*a+6*s,c=-3*e+9*a-9*s+3*i,u=3*a-3*e),Math.abs(c)<1e-12){if(Math.abs(h)<1e-12)continue;l=-u/h,l>0&&1>l&&I.push(l)}else m=h*h-4*u*c,d=Math.sqrt(m),0>m||(p=(-h+d)/(2*c),p>0&&1>p&&I.push(p),f=(-h-d)/(2*c),f>0&&1>f&&I.push(f));for(var y,_=I.length,b=_;_--;)l=I[_],y=1-l,g[0][_]=y*y*y*t+3*y*y*l*r+3*y*l*l*n+l*l*l*o,g[1][_]=y*y*y*e+3*y*y*l*a+3*y*l*l*s+l*l*l*i;return g[0][b]=t,g[1][b]=e,g[0][b+1]=o,g[1][b+1]=i,g[0].length=g[1].length=b+2,{min:{x:Math.min.apply(0,g[0]),y:Math.min.apply(0,g[1])},max:{x:Math.max.apply(0,g[0]),y:Math.max.apply(0,g[1])}}},w=function(t){for(var e,r=0,a=0,n=[],s=[],o=0,i=t.length;i>o;o++)if(e=t[o],"M"==e[0])r=e[1],a=e[2],n.push(r),s.push(a);else{var c=x(r,a,e[1],e[2],e[3],e[4],e[5],e[6]);n=n.concat(c.min.x,c.max.x),s=s.concat(c.min.y,c.max.y),r=e[5],a=e[6]}var h=Math.min.apply(0,n),u=Math.min.apply(0,s),l=Math.max.apply(0,n),p=Math.max.apply(0,s),f=v(h,u,l-h,p-u);return f},A=/,?([a-z]),?/gi,k=function(t){return t.join(",").replace(A,"$1")},C={hs:1,rg:1},q="hasOwnProperty",N=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,P=new RegExp("["+l+"]*,["+l+"]*"),F=function(t){var e=Math.round;return"rgba("+[e(t.r),e(t.g),e(t.b),+t.opacity.toFixed(2)]+")"},E=function(t){var e=window.document.getElementsByTagName("head")[0]||window.document.getElementsByTagName("svg")[0],r="rgb(255, 0, 0)";return E=function(t){if("red"==t.toLowerCase())return r;e.style.color=r,e.style.color=t;var a=window.document.defaultView.getComputedStyle(e,"").getPropertyValue("color");return a==r?null:a},E(t)},S=function(t,e,r,a){t=Math.round(255*t),e=Math.round(255*e),r=Math.round(255*r);var n={r:t,g:e,b:r,opacity:isFinite(a)?a:1};return n},G=function(t,e,r,a){typeof t==typeof{}&&"h"in t&&"s"in t&&"b"in t&&(r=t.b,e=t.s,t=t.h,a=t.o),t*=360;var n,s,o,i,c;return t=t%360/60,c=r*e,i=c*(1-Math.abs(t%2-1)),n=s=o=r-c,t=~~t,n+=[c,i,0,0,i,c][t],s+=[i,c,c,i,0,0][t],o+=[0,0,i,c,c,i][t],S(n,s,o,a)},D=function(t,e,r,a){typeof t==typeof{}&&"h"in t&&"s"in t&&"l"in t&&(r=t.l,e=t.s,t=t.h),(t>1||e>1||r>1)&&(t/=360,e/=100,r/=100),t*=360;var n,s,o,i,c;return t=t%360/60,c=2*e*(.5>r?r:1-r),i=c*(1-Math.abs(t%2-1)),n=s=o=r-c/2,t=~~t,n+=[c,i,0,0,i,c][t],s+=[i,c,c,i,0,0][t],o+=[0,0,i,c,c,i][t],S(n,s,o,a)},L=function(t){if(!t||(t=String(t)).indexOf("-")+1)return{r:-1,g:-1,b:-1,opacity:-1,error:1};if("none"==t)return{r:-1,g:-1,b:-1,opacity:-1};if(!(C[q](t.toLowerCase().substring(0,2))||"#"==t.charAt())&&(t=E(t)),!t)return{r:-1,g:-1,b:-1,opacity:-1,error:1};var e,r,a,n,s,o,i=t.match(N);return i?(i[2]&&(a=parseInt(i[2].substring(5),16),r=parseInt(i[2].substring(3,5),16),e=parseInt(i[2].substring(1,3),16)),i[3]&&(a=parseInt((s=i[3].charAt(3))+s,16),r=parseInt((s=i[3].charAt(2))+s,16),e=parseInt((s=i[3].charAt(1))+s,16)),i[4]&&(o=i[4].split(P),e=parseFloat(o[0]),"%"==o[0].slice(-1)&&(e*=2.55),r=parseFloat(o[1]),"%"==o[1].slice(-1)&&(r*=2.55),a=parseFloat(o[2]),"%"==o[2].slice(-1)&&(a*=2.55),"rgba"==i[1].toLowerCase().slice(0,4)&&(n=parseFloat(o[3])),o[3]&&"%"==o[3].slice(-1)&&(n/=100)),i[5]?(o=i[5].split(P),e=parseFloat(o[0]),"%"==o[0].slice(-1)&&(e/=100),r=parseFloat(o[1]),"%"==o[1].slice(-1)&&(r/=100),a=parseFloat(o[2]),"%"==o[2].slice(-1)&&(a/=100),("deg"==o[0].slice(-3)||"°"==o[0].slice(-1))&&(e/=360),"hsba"==i[1].toLowerCase().slice(0,4)&&(n=parseFloat(o[3])),o[3]&&"%"==o[3].slice(-1)&&(n/=100),G(e,r,a,n)):i[6]?(o=i[6].split(P),e=parseFloat(o[0]),"%"==o[0].slice(-1)&&(e/=100),r=parseFloat(o[1]),"%"==o[1].slice(-1)&&(r/=100),a=parseFloat(o[2]),"%"==o[2].slice(-1)&&(a/=100),("deg"==o[0].slice(-3)||"°"==o[0].slice(-1))&&(e/=360),"hsla"==i[1].toLowerCase().slice(0,4)&&(n=parseFloat(o[3])),o[3]&&"%"==o[3].slice(-1)&&(n/=100),D(e,r,a,n)):(e=Math.min(Math.round(e),255),r=Math.min(Math.round(r),255),a=Math.min(Math.round(a),255),n=Math.min(Math.max(n,0),1),i={r:e,g:r,b:a},i.opacity=isFinite(n)?n:1,i)):{r:-1,g:-1,b:-1,opacity:-1,error:1}};return i.prototype._init=function(){if("SVG"!==this._svgDoc.nodeName.toUpperCase()&&(this._svgDoc=this._svgDoc.getElementsByTagName("svg")[0]),this._svgDoc){var t,e,r,a,n,s,o,i,c="";for(t=this._svgDoc.childNodes.length-1;t>=0;t--){var h=this._svgDoc.childNodes[t];if("G"===h.nodeName.toUpperCase()&&(r=h.getAttribute("id"))){for(a=[],s=0,o=h.childNodes.length;o>s;s++){var u=h.childNodes[s];switch(n={path:"",attrs:{}},u.nodeName.toUpperCase()){case"PATH":n.path=u.getAttribute("d");break;case"CIRCLE":var l=1*u.getAttribute("cx"),p=1*u.getAttribute("cy"),f=1*u.getAttribute("r");n.path="M"+(l-f)+","+p+"a"+f+","+f+" 0 1,0 "+2*f+",0a"+f+","+f+" 0 1,0 -"+2*f+",0z";break;case"ELLIPSE":var l=1*u.getAttribute("cx"),p=1*u.getAttribute("cy"),m=1*u.getAttribute("rx"),d=1*u.getAttribute("ry");n.path="M"+(l-m)+","+p+"a"+m+","+d+" 0 1,0 "+2*m+",0a"+m+","+d+" 0 1,0 -"+2*m+",0z";break;case"RECT":var I=1*u.getAttribute("x"),g=1*u.getAttribute("y"),M=1*u.getAttribute("width"),y=1*u.getAttribute("height"),m=1*u.getAttribute("rx"),d=1*u.getAttribute("ry");n.path=m||d?"M"+(I+m)+","+g+"l"+(M-2*m)+",0a"+m+","+d+" 0 0,1 "+m+","+d+"l0,"+(y-2*d)+"a"+m+","+d+" 0 0,1 -"+m+","+d+"l"+(2*m-M)+",0a"+m+","+d+" 0 0,1 -"+m+",-"+d+"l0,"+(2*d-y)+"a"+m+","+d+" 0 0,1 "+m+",-"+d+"z":"M"+I+","+g+"l"+M+",0l0,"+y+"l-"+M+",0z";break;case"POLYGON":for(var _=u.getAttribute("points"),b=_.split(/\s+/),v="",x=0,e=b.length;e>x;x++)v+=(x&&"L"||"M")+b[x];n.path=v+"z";break;case"LINE":var w=1*u.getAttribute("x1"),A=1*u.getAttribute("y1"),k=1*u.getAttribute("x2"),C=1*u.getAttribute("y2");n.path="M"+w+","+A+"L"+k+","+C+"z"}if(""!=n.path){for(var x=0,q=u.attributes.length;q>x;x++){var N=u.attributes[x];if(N.specified){var P=N.name.toLowerCase();switch(P){case"fill":case"stroke":case"stroke-width":n.attrs[P]=N.value}}}a.push(n)}}a.length>0&&(i={id:r,items:a},this._icons[r]=i),this._morphG?this._svgDoc.removeChild(h):(c=r,this._morphG=document.createElementNS("http://www.w3.org/2000/svg","g"),this._svgDoc.replaceChild(this._morphG,h))}}""!==c&&(this._setupAnimation(c),this._updateAnimationProgress(1),this._animationEnd())}},i.prototype._setupAnimation=function(t){if(t&&this._icons[t]){this._toIconId=t,this._startTime=void 0;var a,n;for(this._fromIconItems=o(this._curIconItems),this._toIconItems=o(this._icons[t].items),a=0,n=this._morphNodes.length;n>a;a++){var s=this._morphNodes[a];s.fromIconItemIdx=a,s.toIconItemIdx=a}var i,c=Math.max(this._fromIconItems.length,this._toIconItems.length);for(a=0;c>a;a++)if(this._fromIconItems[a]||(this._toIconItems[a]?(i=w(b(this._toIconItems[a].path)),this._fromIconItems.push({path:"M"+i.cx+","+i.cy+"l0,0",attrs:{},trans:{rotate:[0,i.cx,i.cy]}})):this._fromIconItems.push({path:"M0,0l0,0",attrs:{},trans:{rotate:[0,0,0]}})),this._toIconItems[a]||(this._fromIconItems[a]?(i=w(b(this._fromIconItems[a].path)),this._toIconItems.push({path:"M"+i.cx+","+i.cy+"l0,0",attrs:{},trans:{rotate:[0,i.cx,i.cy]}})):this._toIconItems.push({path:"M0,0l0,0",attrs:{},trans:{rotate:[0,0,0]}})),!this._morphNodes[a]){var h=document.createElementNS("http://www.w3.org/2000/svg","path");this._morphG.appendChild(h),this._morphNodes.push({node:h,fromIconItemIdx:a,toIconItemIdx:a})}for(a=0;c>a;a++){var u=this._fromIconItems[a],l=this._toIconItems[a],p=b(this._fromIconItems[a].path,this._toIconItems[a].path);u.curve=p[0],l.curve=p[1];var f=r(this._fromIconItems[a].attrs,this._toIconItems[a].attrs);if(u.attrsNorm=f[0],l.attrsNorm=f[1],u.attrs=e(u.attrsNorm),l.attrs=e(l.attrsNorm),i=w(l.curve),l.trans={rotate:[0,i.cx,i.cy]},u.trans.rotate){l.trans.rotate[0]=u.trans.rotate[0]+360;var m=u.trans.rotate[0]%360;l.trans.rotate[0]+=180>m?-m:360-m}else l.trans.rotate[0]=360}this._curIconItems=o(this._fromIconItems)}},i.prototype._updateAnimationProgress=function(r){r=c[this._easing](r);var o,i,h;for(o=0,h=this._curIconItems.length;h>o;o++)this._curIconItems[o].curve=s(this._fromIconItems[o].curve,this._toIconItems[o].curve,r),this._curIconItems[o].path=k(this._curIconItems[o].curve),this._curIconItems[o].attrsNorm=t(this._fromIconItems[o].attrsNorm,this._toIconItems[o].attrsNorm,r),this._curIconItems[o].attrs=e(this._curIconItems[o].attrsNorm),this._curIconItems[o].trans=a(this._fromIconItems[o].trans,this._toIconItems[o].trans,r),this._curIconItems[o].transStr=n(this._curIconItems[o].trans);for(o=0,h=this._morphNodes.length;h>o;o++){var u=this._morphNodes[o];u.node.setAttribute("d",this._curIconItems[o].path);var l=this._curIconItems[o].attrs;for(i in l)u.node.setAttribute(i,l[i]);u.node.setAttribute("transform",this._curIconItems[o].transStr)}},i.prototype._animationEnd=function(){for(var t=this._morphNodes.length-1;t>=0;t--){var e=this._morphNodes[t];this._icons[this._toIconId].items[t]?e.node.setAttribute("d",this._icons[this._toIconId].items[t].path):(e.node.parentNode.removeChild(e.node),this._morphNodes.splice(t,1))}this._curIconId=this._toIconId,this._toIconId="",this._callback()},i.prototype.to=function(t,e,r){if(t!==this._toIconId){if(e&&typeof e!=typeof{})throw new Error('SVGMorpheus.to() > "options" parameter must be an object');if(e=e||{},r&&"function"!=typeof r)throw new Error('SVGMorpheus.to() > "callback" parameter must be a function');u(this._rafid),this._duration=e.duration||this._defDuration,this._easing=e.easing||this._defEasing,this._callback=r||this._defCallback,this._setupAnimation(t),this._rafid=h(this._fnTick)}},i}();