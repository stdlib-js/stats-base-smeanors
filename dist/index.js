"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=i(function(g,n){
var y=require('@stdlib/number-float64-base-to-float32/dist'),d=require('@stdlib/blas-ext-base-ssumors/dist').ndarray;function p(r,e,a,u){return r<=0?NaN:r===1||a===0?e[u]:y(d(r,e,a,u)/r)}n.exports=p
});var v=i(function(h,o){
var l=require('@stdlib/strided-base-stride2offset/dist'),j=s();function x(r,e,a){return j(r,e,a,l(r,a))}o.exports=x
});var c=i(function(k,m){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),_=s();R(q,"ndarray",_);m.exports=q
});var E=require("path").join,F=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),T=c(),t,f=F(E(__dirname,"./native.js"));O(f)?t=T:t=f;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
