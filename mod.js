// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function s(r){return"string"==typeof r}var u=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var _=String.fromCharCode,x=isNaN,k=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function A(r){var e,t,n,a,o,u,l,f,p;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",l=1,f=0;f<r.length;f++)if(s(n=r[f]))u+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,x(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!x(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(o)?String(n.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),u+=n.arg||"",l+=1}return u}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,n,i;for(t=[],i=0,n=F.exec(r);n;)(e=r.slice(i,F.lastIndex-n[0].length)).length&&t.push(e),t.push(O(n)),i=F.lastIndex,n=F.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function V(r){return"string"==typeof r}function I(r){var e,t;if(!V(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[T(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return A.apply(null,e)}var $,C=Object.prototype,P=C.toString,R=C.__defineGetter__,N=C.__defineSetter__,Z=C.__lookupGetter__,L=C.__lookupSetter__;$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Z.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&R&&R.call(r,e,t.get),o&&N&&N.call(r,e,t.set),r};var M=$;function W(r,e,t){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B="function"==typeof Math.fround?Math.fround:null;function G(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var z=G();var U=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;var q,D="function"==typeof Symbol?Symbol:void 0,J="function"==typeof D?D.toStringTag:"";q=z&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return U.call(r);t=r[J],a=J,e=null!=(i=r)&&X.call(i,a);try{r[J]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[J]=t:delete r[J],n}:function(r){return U.call(r)};var Y=q,H="function"==typeof Float32Array;var K=Number.POSITIVE_INFINITY,Q="function"==typeof Float32Array?Float32Array:null;var rr,er="function"==typeof Float32Array?Float32Array:void 0;rr=function(){var r,e,t;if("function"!=typeof Q)return!1;try{e=new Q([1,3.14,-3.14,5e40]),t=e,r=(H&&t instanceof Float32Array||"[object Float32Array]"===Y(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===K}catch(e){r=!1}return r}()?er:function(){throw new Error("not implemented")};var tr=new rr(1);var nr="function"==typeof B?B:function(r){return tr[0]=r,tr[0]};function ir(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function ar(r,e){for(var t=0,n=r.length-1;n>=0;n--){var i=r[n];"."===i?r.splice(n,1):".."===i?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var or=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,cr=function(r){return or.exec(r).slice(1)};function sr(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,e="/"===n.charAt(0))}return(e?"/":"")+(r=ar(yr(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function ur(r){var e=lr(r),t="/"===vr(r,-1);return(r=ar(yr(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r}function lr(r){return"/"===r.charAt(0)}function fr(){var r=Array.prototype.slice.call(arguments,0);return ur(yr(r,(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function pr(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=sr(r).substr(1),e=sr(e).substr(1);for(var n=t(r.split("/")),i=t(e.split("/")),a=Math.min(n.length,i.length),o=a,c=0;c<a;c++)if(n[c]!==i[c]){o=c;break}var s=[];for(c=o;c<n.length;c++)s.push("..");return(s=s.concat(i.slice(o))).join("/")}function gr(r){var e=cr(r),t=e[0],n=e[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function dr(r,e){var t=cr(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function hr(r){return cr(r)[3]}var br={extname:hr,basename:dr,dirname:gr,sep:"/",delimiter:":",relative:pr,join:fr,isAbsolute:lr,normalize:ur,resolve:sr};function yr(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var vr="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},wr=ir(Object.freeze({__proto__:null,basename:dr,default:br,delimiter:":",dirname:gr,extname:hr,isAbsolute:lr,join:fr,normalize:ur,relative:pr,resolve:sr,sep:"/"}));var mr=Object,jr=/./;function Er(r){return"boolean"==typeof r}var _r=G();var xr=Boolean,kr=Boolean.prototype.toString;var Sr=_r&&"symbol"==typeof Symbol.toStringTag;function Ar(r){return"object"==typeof r&&(r instanceof xr||(Sr?function(r){try{return kr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Y(r)))}function Fr(r){return Er(r)||Ar(r)}function Or(r){return"number"==typeof r}function Tr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Vr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+Tr(i):Tr(i)+r,n&&(r="-"+r)),r}W(Fr,"isPrimitive",Er),W(Fr,"isObject",Ar);var Ir=String.prototype.toLowerCase,$r=String.prototype.toUpperCase;function Cr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!Or(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Vr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Vr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===$r.call(r.specifier)?$r.call(t):Ir.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Pr(r){return"string"==typeof r}var Rr=Math.abs,Nr=String.prototype.toLowerCase,Zr=String.prototype.toUpperCase,Lr=String.prototype.replace,Mr=/e\+(\d)$/,Wr=/e-(\d)$/,Br=/^(\d+)$/,Gr=/^(\d+)e/,zr=/\.0$/,Ur=/\.0*e/,Xr=/(\..*[^0])0*e/;function qr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!Or(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Rr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Lr.call(t,Xr,"$1e"),t=Lr.call(t,Ur,"e"),t=Lr.call(t,zr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Lr.call(t,Mr,"e+0$1"),t=Lr.call(t,Wr,"e-0$1"),r.alternate&&(t=Lr.call(t,Br,"$1."),t=Lr.call(t,Gr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Zr.call(r.specifier)?Zr.call(t):Nr.call(t)}function Dr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Jr(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Dr(n):Dr(n)+r}var Yr=String.fromCharCode,Hr=isNaN,Kr=Array.isArray;function Qr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function re(r){var e,t,n,i,a,o,c,s,u;if(!Kr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(Pr(n=r[s]))o+=n;else{if(e=void 0!==n.precision,!(n=Qr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Hr(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Hr(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Cr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Hr(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Hr(a)?String(n.arg):Yr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=qr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Vr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Jr(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var ee=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function te(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function ne(r){var e,t,n,i;for(t=[],i=0,n=ee.exec(r);n;)(e=r.slice(i,ee.lastIndex-n[0].length)).length&&t.push(e),t.push(te(n)),i=ee.lastIndex,n=ee.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function ie(r){return"string"==typeof r}function ae(r){var e,t;if(!ie(r))throw new TypeError(ae("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[ne(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return re.apply(null,e)}function oe(){return new Function("return this;")()}var ce="object"==typeof self?self:null,se="object"==typeof window?window:null,ue="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},le="object"==typeof ue?ue:null,fe="object"==typeof globalThis?globalThis:null;var pe=function(r){if(arguments.length){if(!Er(r))throw new TypeError(ae("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return oe()}if(fe)return fe;if(ce)return ce;if(se)return se;if(le)return le;throw new Error("unexpected error. Unable to resolve global object.")}(),ge=pe.document&&pe.document.childNodes,de=Int8Array;function he(){return/^\s*function\s*([^(]*)/i}var be,ye=/^\s*function\s*([^(]*)/i;W(he,"REGEXP",ye),be=Array.isArray?Array.isArray:function(r){return"[object Array]"===Y(r)};var ve=be;function we(r){return null!==r&&"object"==typeof r}var me=function(r){if("function"!=typeof r)throw new TypeError(ae("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!ve(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(we);function je(r){var e,t,n,i;if(("Object"===(t=Y(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ye.exec(n.toString()))return e[1]}return we(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}W(we,"isObjectLikeArray",me);var Ee="function"==typeof jr||"object"==typeof de||"function"==typeof ge?function(r){return je(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?je(r).toLowerCase():e};var _e,xe,ke=Object.getPrototypeOf;xe=Object.getPrototypeOf,_e="function"===Ee(xe)?ke:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Y(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Se=_e;function Ae(r){return null==r?null:(r=mr(r),Se(r))}function Fe(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===Y(r))return!0;r=Ae(r)}return!1}function Oe(r,e,t){var n,i,a;if(n=0,r<=0)return n;if(1===r||0===t)return e[0];for(i=t<0?(1-r)*t:0,a=0;a<r;a++)n=nr(n+e[i]),i+=t;return n}W(Oe,"ndarray",(function(r,e,t,n){var i,a,o;if(i=0,r<=0)return i;if(1===r||0===t)return e[n];for(a=n,o=0;o<r;o++)i=nr(i+e[a]),a+=t;return i}));var Te,Ve=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return Fe(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,wr.join)("/home/runner/work/stats-base-smeanors/stats-base-smeanors/node_modules/@stdlib/blas-ext-base-ssumors/lib","./native.js")),Ie=Te=Fe(Ve)?Oe:Ve;const{ndarray:$e}=Te;function Ce(r,e,t){return r<=0?NaN:1===r||0===t?e[0]:nr(Ie(r,e,t)/r)}function Pe(r,e,t,n){return r<=0?NaN:1===r||0===t?e[n]:nr($e(r,e,t,n)/r)}W(Ce,"ndarray",Pe);export{Ce as default,Pe as ndarray};
//# sourceMappingURL=mod.js.map
