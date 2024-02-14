// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("path")):"function"==typeof define&&define.amd?define(["path"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).smeanors=e(r.require$$0)}(this,(function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function a(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var o=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function s(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=a(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=a(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):o.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function u(r){return"string"==typeof r}var l=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,w=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function E(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,v,"e"),t=g.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),r.alternate&&(t=g.call(t,y,"$1."),t=g.call(t,b,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===p.call(r.specifier)?p.call(t):f.call(t)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function x(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var k=String.fromCharCode,S=isNaN,_=Array.isArray;function F(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function A(r){var e,t,n,i,o,c,l,f,p;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,f=0;f<r.length;f++)if(u(n=r[f]))c+=n;else{if(e=void 0!==n.precision,!(n=F(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,S(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!S(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(o)?String(n.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=E(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=x(n.arg,n.width,n.padRight)),c+=n.arg||"",l+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,i;for(t=[],i=0,n=T.exec(r);n;)(e=r.slice(i,T.lastIndex-n[0].length)).length&&t.push(e),t.push(V(n)),i=T.lastIndex,n=T.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function $(r){return"string"==typeof r}function O(r){var e,t;if(!$(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return A.apply(null,e)}var C,R=Object.prototype,N=R.toString,P=R.__defineGetter__,Z=R.__defineSetter__,L=R.__lookupGetter__,W=R.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(r,e)||W.call(r,e)?(n=r.__proto__,r.__proto__=R,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(r,e,t.get),o&&Z&&Z.call(r,e,t.set),r};var B=C;function G(r,e,t){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var q="function"==typeof Math.fround?Math.fround:null;function M(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var U=M();var X=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var D,J="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof J?J.toStringTag:"";D=U&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return X.call(r);t=r[Y],a=Y,e=null!=(i=r)&&z.call(i,a);try{r[Y]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return X.call(r)};var H=D,K="function"==typeof Float32Array;var Q=Number.POSITIVE_INFINITY,rr="function"==typeof Float32Array?Float32Array:null;var er,tr="function"==typeof Float32Array?Float32Array:void 0;er=function(){var r,e,t;if("function"!=typeof rr)return!1;try{e=new rr([1,3.14,-3.14,5e40]),t=e,r=(K&&t instanceof Float32Array||"[object Float32Array]"===H(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Q}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var nr=new er(1);var ir="function"==typeof q?q:function(r){return nr[0]=r,nr[0]};var ar=Object,or=/./;function cr(r){return"boolean"==typeof r}var sr=M();var ur=Boolean,lr=Boolean.prototype.toString;var fr=sr&&"symbol"==typeof Symbol.toStringTag;function pr(r){return"object"==typeof r&&(r instanceof ur||(fr?function(r){try{return lr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function gr(r){return cr(r)||pr(r)}function dr(r){return"number"==typeof r}function hr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function yr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+hr(i):hr(i)+r,n&&(r="-"+r)),r}G(gr,"isPrimitive",cr),G(gr,"isObject",pr);var br=String.prototype.toLowerCase,wr=String.prototype.toUpperCase;function vr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!dr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=yr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=yr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===wr.call(r.specifier)?wr.call(t):br.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function mr(r){return"string"==typeof r}var Er=Math.abs,jr=String.prototype.toLowerCase,xr=String.prototype.toUpperCase,kr=String.prototype.replace,Sr=/e\+(\d)$/,_r=/e-(\d)$/,Fr=/^(\d+)$/,Ar=/^(\d+)e/,Tr=/\.0$/,Vr=/\.0*e/,Ir=/(\..*[^0])0*e/;function $r(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!dr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Er(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=kr.call(t,Ir,"$1e"),t=kr.call(t,Vr,"e"),t=kr.call(t,Tr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=kr.call(t,Sr,"e+0$1"),t=kr.call(t,_r,"e-0$1"),r.alternate&&(t=kr.call(t,Fr,"$1."),t=kr.call(t,Ar,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===xr.call(r.specifier)?xr.call(t):jr.call(t)}function Or(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Cr(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Or(n):Or(n)+r}var Rr=String.fromCharCode,Nr=isNaN,Pr=Array.isArray;function Zr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Lr(r){var e,t,n,i,a,o,c,s,u;if(!Pr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(mr(n=r[s]))o+=n;else{if(e=void 0!==n.precision,!(n=Zr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Nr(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Nr(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=vr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Nr(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Nr(a)?String(n.arg):Rr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=$r(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=yr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Cr(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var Wr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Br(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Gr(r){var e,t,n,i;for(t=[],i=0,n=Wr.exec(r);n;)(e=r.slice(i,Wr.lastIndex-n[0].length)).length&&t.push(e),t.push(Br(n)),i=Wr.lastIndex,n=Wr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function qr(r){return"string"==typeof r}function Mr(r){var e,t;if(!qr(r))throw new TypeError(Mr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Gr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Lr.apply(null,e)}function Ur(){return new Function("return this;")()}var Xr="object"==typeof self?self:null,zr="object"==typeof window?window:null,Dr="object"==typeof global?global:null,Jr="object"==typeof globalThis?globalThis:null;var Yr=function(r){if(arguments.length){if(!cr(r))throw new TypeError(Mr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Ur()}if(Jr)return Jr;if(Xr)return Xr;if(zr)return zr;if(Dr)return Dr;throw new Error("unexpected error. Unable to resolve global object.")}(),Hr=Yr.document&&Yr.document.childNodes,Kr=Int8Array;function Qr(){return/^\s*function\s*([^(]*)/i}var re,ee=/^\s*function\s*([^(]*)/i;G(Qr,"REGEXP",ee),re=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)};var te=re;function ne(r){return null!==r&&"object"==typeof r}var ie=function(r){if("function"!=typeof r)throw new TypeError(Mr("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!te(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(ne);function ae(r){var e,t,n,i;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ee.exec(n.toString()))return e[1]}return ne(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}G(ne,"isObjectLikeArray",ie);var oe="function"==typeof or||"object"==typeof Kr||"function"==typeof Hr?function(r){return ae(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ae(r).toLowerCase():e};var ce,se,ue=Object.getPrototypeOf;se=Object.getPrototypeOf,ce="function"===oe(se)?ue:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===H(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var le=ce;function fe(r){return null==r?null:(r=ar(r),le(r))}function pe(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===H(r))return!0;r=fe(r)}return!1}function ge(r,e,t){var n,i,a;if(n=0,r<=0)return n;if(1===r||0===t)return e[0];for(i=t<0?(1-r)*t:0,a=0;a<r;a++)n=ir(n+e[i]),i+=t;return n}G(ge,"ndarray",(function(r,e,t,n){var i,a,o;if(i=0,r<=0)return i;if(1===r||0===t)return e[n];for(a=n,o=0;o<r;o++)i=ir(i+e[a]),a+=t;return i}));var de,he=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return pe(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,r.join)(__dirname,"./native.js")),ye=de=pe(he)?ge:he;const{ndarray:be}=de;function we(r,e,t){return r<=0?NaN:1===r||0===t?e[0]:ir(ye(r,e,t)/r)}return G(we,"ndarray",(function(r,e,t,n){return r<=0?NaN:1===r||0===t?e[n]:ir(be(r,e,t,n)/r)})),we}));
//# sourceMappingURL=index.js.map
