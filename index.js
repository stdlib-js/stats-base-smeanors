// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).smeanors={})}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,e){var n,l,s,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(a.call(r,t)||c.call(r,t)?(n=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),s="get"in e,y="set"in e,l&&(s||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(r,t,e.get),y&&f&&f.call(r,t,e.set),r};var l=e;function s(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var y="function"==typeof Math.fround?Math.fround:null;var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var j,_="function"==typeof Symbol?Symbol.toStringTag:"";j=b()?function(r){var t,e,n,o,u;if(null==r)return v.call(r);e=r[_],u=_,t=null!=(o=r)&&d.call(o,u);try{r[_]=void 0}catch(t){return v.call(r)}return n=v.call(r),t?r[_]=e:delete r[_],n}:function(r){return v.call(r)};var m=j,g="function"==typeof Float32Array;var w=Number.POSITIVE_INFINITY,h="function"==typeof Float32Array?Float32Array:null;var O,A="function"==typeof Float32Array?Float32Array:void 0;O=function(){var r,t,e;if("function"!=typeof h)return!1;try{t=new h([1,3.14,-3.14,5e40]),e=t,r=(g&&e instanceof Float32Array||"[object Float32Array]"===m(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===w}catch(t){r=!1}return r}()?A:function(){throw new Error("not implemented")};var E=new O(1);var S="function"==typeof y?y:function(r){return E[0]=r,E[0]};function F(r){var t=function(r){return"/"===r.charAt(0)}(r),e="/"===T(r,-1);return(r=function(r,t){for(var e=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}(P(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&e&&(r+="/"),(t?"/":"")+r}function P(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}var T="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)},N=/./;function x(r){return"boolean"==typeof r}var B=Boolean.prototype.toString;var I=b();function M(r){return"object"==typeof r&&(r instanceof Boolean||(I?function(r){try{return B.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===m(r)))}function V(r){return x(r)||M(r)}function k(){return new Function("return this;")()}s(V,"isPrimitive",x),s(V,"isObject",M);var C="object"==typeof self?self:null,G="object"==typeof window?window:null,L="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},q="object"==typeof L?L:null;var J=function(r){if(arguments.length){if(!x(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return k()}if(C)return C;if(G)return G;if(q)return q;throw new Error("unexpected error. Unable to resolve global object.")}(),R=J.document&&J.document.childNodes,U=Int8Array;function X(){return/^\s*function\s*([^(]*)/i}var Y,z=/^\s*function\s*([^(]*)/i;s(X,"REGEXP",z),Y=Array.isArray?Array.isArray:function(r){return"[object Array]"===m(r)};var D=Y;function H(r){return null!==r&&"object"==typeof r}var K=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!D(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(H);function Q(r){var t,e,n,o;if(("Object"===(e=m(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=z.exec(n.toString()))return t[1]}return H(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}s(H,"isObjectLikeArray",K);var W="function"==typeof N||"object"==typeof U||"function"==typeof R?function(r){return Q(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Q(r).toLowerCase():t};var Z,$,rr=Object.getPrototypeOf;$=Object.getPrototypeOf,Z="function"===W($)?rr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===m(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var tr,er=Z;function nr(r){return null==r?null:(r=Object(r),er(r))}function or(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===m(r))return!0;r=nr(r)}return!1}function ur(r,t,e){var n,o,u;if(n=0,r<=0)return n;if(1===r||0===e)return t[0];for(o=e<0?(1-r)*e:0,u=0;u<r;u++)n=S(n+t[o]),o+=e;return n}s(ur,"ndarray",(function(r,t,e,n){var o,u,i;if(o=0,r<=0)return o;if(1===r||0===e)return t[n];for(u=n,i=0;i<r;i++)o=S(o+t[u]),u+=e;return o}));var ir=function(r){try{return require(r)}catch(r){return or(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}(function(){var r=Array.prototype.slice.call(arguments,0);return F(P(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}("/home/runner/work/stats-base-smeanors/stats-base-smeanors/node_modules/@stdlib/blas-ext-base-ssumors/lib","./native.js")),fr=tr=or(ir)?ur:ir;const{ndarray:ar}=tr;function cr(r,t,e){return r<=0?NaN:1===r||0===e?t[0]:S(fr(r,t,e)/r)}function lr(r,t,e,n){return r<=0?NaN:1===r||0===e?t[n]:S(ar(r,t,e,n)/r)}s(cr,"ndarray",lr),r.default=cr,r.ndarray=lr,Object.defineProperty(r,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
