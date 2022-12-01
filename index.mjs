// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.0.7-esm/index.mjs";import t,{ndarray as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ssumors@v0.0.9-esm/index.mjs";function n(e,r,n){return e<=0?NaN:1===e||0===n?r[0]:s(t(e,r,n)/e)}function d(e,t,n,d){return e<=0?NaN:1===e||0===n?t[d]:s(r(e,t,n,d)/e)}e(n,"ndarray",d);export{n as default,d as ndarray};
//# sourceMappingURL=index.mjs.map
