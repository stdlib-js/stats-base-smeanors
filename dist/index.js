"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=i(function(g,t){
var l=require('@stdlib/number-float64-base-to-float32/dist'),p=require('@stdlib/blas-ext-base-ssumors/dist');function y(r,e,a){return r<=0?NaN:r===1||a===0?e[0]:l(p(r,e,a)/r)}t.exports=y
});var v=i(function(h,o){
var d=require('@stdlib/number-float64-base-to-float32/dist'),j=require('@stdlib/blas-ext-base-ssumors/dist').ndarray;function x(r,e,a,u){return r<=0?NaN:r===1||a===0?e[u]:d(j(r,e,a,u)/r)}o.exports=x
});var f=i(function(k,m){
var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=n(),R=v();F(q,"ndarray",R);m.exports=q
});var T=require("path").join,_=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=f(),s,c=_(T(__dirname,"./native.js"));E(c)?s=O:s=c;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
