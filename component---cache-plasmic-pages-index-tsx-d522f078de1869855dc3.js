/*! For license information please see component---cache-plasmic-pages-index-tsx-d522f078de1869855dc3.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[964],{7803:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},3099:function(e){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},1223:function(e,t,n){var r=n(5112),o=n(30),a=n(3070),i=r("unscopables"),c=Array.prototype;null==c[i]&&a.f(c,i,{configurable:!0,value:o(null)}),e.exports=function(e){c[i][e]=!0}},9670:function(e,t,n){var r=n(111);e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},1318:function(e,t,n){var r=n(5656),o=n(7466),a=n(1400),i=function(e){return function(t,n,i){var c,l=r(t),u=o(l.length),s=a(i,u);if(e&&n!=n){for(;u>s;)if((c=l[s++])!=c)return!0}else for(;u>s;s++)if((e||s in l)&&l[s]===n)return e||s||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},5417:function(e,t,n){var r=n(111),o=n(3157),a=n(5112)("species");e.exports=function(e,t){var n;return o(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[a])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},4326:function(e){var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},648:function(e,t,n){var r=n(1694),o=n(4326),a=n(5112)("toStringTag"),i="Arguments"==o(function(){return arguments}());e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=Object(e),a))?n:i?o(t):"Object"==(r=o(t))&&"function"==typeof t.callee?"Arguments":r}},9920:function(e,t,n){var r=n(6656),o=n(3887),a=n(1236),i=n(3070);e.exports=function(e,t){for(var n=o(t),c=i.f,l=a.f,u=0;u<n.length;u++){var s=n[u];r(e,s)||c(e,s,l(t,s))}}},8880:function(e,t,n){var r=n(9781),o=n(3070),a=n(9114);e.exports=r?function(e,t,n){return o.f(e,t,a(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},6135:function(e,t,n){"use strict";var r=n(7593),o=n(3070),a=n(9114);e.exports=function(e,t,n){var i=r(t);i in e?o.f(e,i,a(0,n)):e[i]=n}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var r=n(7854),o=n(111),a=r.document,i=o(a)&&o(a.createElement);e.exports=function(e){return i?a.createElement(e):{}}},5268:function(e,t,n){var r=n(4326),o=n(7854);e.exports="process"==r(o.process)},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,o,a=n(7854),i=n(8113),c=a.process,l=c&&c.versions,u=l&&l.v8;u?o=(r=u.split("."))[0]+r[1]:i&&(!(r=i.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/))&&(o=r[1]),e.exports=o&&+o},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,n){var r=n(7854),o=n(1236).f,a=n(8880),i=n(1320),c=n(3505),l=n(9920),u=n(4705);e.exports=function(e,t){var n,s,f,p,d,m=e.target,v=e.global,y=e.stat;if(n=v?r:y?r[m]||c(m,{}):(r[m]||{}).prototype)for(s in t){if(p=t[s],f=e.noTargetGet?(d=o(n,s))&&d.value:n[s],!u(v?s:m+(y?".":"#")+s,e.forced)&&void 0!==f){if(typeof p==typeof f)continue;l(p,f)}(e.sham||f&&f.sham)&&a(p,"sham",!0),i(n,s,p,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},6790:function(e,t,n){"use strict";var r=n(3157),o=n(7466),a=n(9974),i=function(e,t,n,c,l,u,s,f){for(var p,d=l,m=0,v=!!s&&a(s,f,3);m<c;){if(m in n){if(p=v?v(n[m],m,t):n[m],u>0&&r(p))d=i(e,t,p,o(p.length),d,u-1)-1;else{if(d>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[d]=p}d++}m++}return d};e.exports=i},9974:function(e,t,n){var r=n(3099);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},5005:function(e,t,n){var r=n(857),o=n(7854),a=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?a(r[e])||a(o[e]):r[e]&&r[e][t]||o[e]&&o[e][t]}},1246:function(e,t,n){var r=n(648),o=n(7497),a=n(5112)("iterator");e.exports=function(e){if(null!=e)return e[a]||e["@@iterator"]||o[r(e)]}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},6656:function(e,t,n){var r=n(7908),o={}.hasOwnProperty;e.exports=function(e,t){return o.call(r(e),t)}},3501:function(e){e.exports={}},490:function(e,t,n){var r=n(5005);e.exports=r("document","documentElement")},4664:function(e,t,n){var r=n(9781),o=n(7293),a=n(317);e.exports=!r&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(7293),o=n(4326),a="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?a.call(e,""):Object(e)}:Object},2788:function(e,t,n){var r=n(5465),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return o.call(e)}),e.exports=r.inspectSource},9909:function(e,t,n){var r,o,a,i=n(8536),c=n(7854),l=n(111),u=n(8880),s=n(6656),f=n(5465),p=n(6200),d=n(3501),m="Object already initialized",v=c.WeakMap;if(i){var y=f.state||(f.state=new v),g=y.get,h=y.has,b=y.set;r=function(e,t){if(h.call(y,e))throw new TypeError(m);return t.facade=e,b.call(y,e,t),t},o=function(e){return g.call(y,e)||{}},a=function(e){return h.call(y,e)}}else{var w=p("state");d[w]=!0,r=function(e,t){if(s(e,w))throw new TypeError(m);return t.facade=e,u(e,w,t),t},o=function(e){return s(e,w)?e[w]:{}},a=function(e){return s(e,w)}}e.exports={set:r,get:o,has:a,enforce:function(e){return a(e)?o(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!l(t)||(n=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}}},7659:function(e,t,n){var r=n(5112),o=n(7497),a=r("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||i[a]===e)}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},4705:function(e,t,n){var r=n(7293),o=/#|\.prototype\./,a=function(e,t){var n=c[i(e)];return n==u||n!=l&&("function"==typeof t?r(t):!!t)},i=a.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=a.data={},l=a.NATIVE="N",u=a.POLYFILL="P";e.exports=a},111:function(e){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},1913:function(e){e.exports=!1},408:function(e,t,n){var r=n(9670),o=n(7659),a=n(7466),i=n(9974),c=n(1246),l=n(9212),u=function(e,t){this.stopped=e,this.result=t};e.exports=function(e,t,n){var s,f,p,d,m,v,y,g=n&&n.that,h=!(!n||!n.AS_ENTRIES),b=!(!n||!n.IS_ITERATOR),w=!(!n||!n.INTERRUPTED),x=i(t,g,1+h+w),_=function(e){return s&&l(s),new u(!0,e)},E=function(e){return h?(r(e),w?x(e[0],e[1],_):x(e[0],e[1])):w?x(e,_):x(e)};if(b)s=e;else{if("function"!=typeof(f=c(e)))throw TypeError("Target is not iterable");if(o(f)){for(p=0,d=a(e.length);d>p;p++)if((m=E(e[p]))&&m instanceof u)return m;return new u(!1)}s=f.call(e)}for(v=s.next;!(y=v.call(s)).done;){try{m=E(y.value)}catch(j){throw l(s),j}if("object"==typeof m&&m&&m instanceof u)return m}return new u(!1)}},9212:function(e,t,n){var r=n(9670);e.exports=function(e){var t=e.return;if(void 0!==t)return r(t.call(e)).value}},7497:function(e){e.exports={}},133:function(e,t,n){var r=n(5268),o=n(7392),a=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!a((function(){return!Symbol.sham&&(r?38===o:o>37&&o<41)}))},8536:function(e,t,n){var r=n(7854),o=n(2788),a=r.WeakMap;e.exports="function"==typeof a&&/native code/.test(o(a))},30:function(e,t,n){var r,o=n(9670),a=n(6048),i=n(748),c=n(3501),l=n(490),u=n(317),s=n(6200),f=s("IE_PROTO"),p=function(){},d=function(e){return"<script>"+e+"</"+"script>"},m=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(o){}var e,t;m=r?function(e){e.write(d("")),e.close();var t=e.parentWindow.Object;return e=null,t}(r):((t=u("iframe")).style.display="none",l.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(d("document.F=Object")),e.close(),e.F);for(var n=i.length;n--;)delete m.prototype[i[n]];return m()};c[f]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(p.prototype=o(e),n=new p,p.prototype=null,n[f]=e):n=m(),void 0===t?n:a(n,t)}},6048:function(e,t,n){var r=n(9781),o=n(3070),a=n(9670),i=n(1956);e.exports=r?Object.defineProperties:function(e,t){a(e);for(var n,r=i(t),c=r.length,l=0;c>l;)o.f(e,n=r[l++],t[n]);return e}},3070:function(e,t,n){var r=n(9781),o=n(4664),a=n(9670),i=n(7593),c=Object.defineProperty;t.f=r?c:function(e,t,n){if(a(e),t=i(t,!0),a(n),o)try{return c(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),o=n(5296),a=n(9114),i=n(5656),c=n(7593),l=n(6656),u=n(4664),s=Object.getOwnPropertyDescriptor;t.f=r?s:function(e,t){if(e=i(e),t=c(t,!0),u)try{return s(e,t)}catch(n){}if(l(e,t))return a(!o.f.call(e,t),e[t])}},8006:function(e,t,n){var r=n(6324),o=n(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},6324:function(e,t,n){var r=n(6656),o=n(5656),a=n(1318).indexOf,i=n(3501);e.exports=function(e,t){var n,c=o(e),l=0,u=[];for(n in c)!r(i,n)&&r(c,n)&&u.push(n);for(;t.length>l;)r(c,n=t[l++])&&(~a(u,n)||u.push(n));return u}},1956:function(e,t,n){var r=n(6324),o=n(748);e.exports=Object.keys||function(e){return r(e,o)}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);t.f=o?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},3887:function(e,t,n){var r=n(5005),o=n(8006),a=n(5181),i=n(9670);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(i(e)),n=a.f;return n?t.concat(n(e)):t}},857:function(e,t,n){var r=n(7854);e.exports=r},1320:function(e,t,n){var r=n(7854),o=n(8880),a=n(6656),i=n(3505),c=n(2788),l=n(9909),u=l.get,s=l.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var l,u=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,d=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof t||a(n,"name")||o(n,"name",t),(l=s(n)).source||(l.source=f.join("string"==typeof t?t:""))),e!==r?(u?!d&&e[t]&&(p=!0):delete e[t],p?e[t]=n:o(e,t,n)):p?e[t]=n:i(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||c(this)}))},4488:function(e){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},3505:function(e,t,n){var r=n(7854),o=n(8880);e.exports=function(e,t){try{o(r,e,t)}catch(n){r[e]=t}return t}},6200:function(e,t,n){var r=n(2309),o=n(9711),a=r("keys");e.exports=function(e){return a[e]||(a[e]=o(e))}},5465:function(e,t,n){var r=n(7854),o=n(3505),a="__core-js_shared__",i=r[a]||o(a,{});e.exports=i},2309:function(e,t,n){var r=n(1913),o=n(5465);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.11.2",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(e,t,n){var r=n(9958),o=Math.max,a=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):a(n,t)}},5656:function(e,t,n){var r=n(8361),o=n(4488);e.exports=function(e){return r(o(e))}},9958:function(e){var t=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:t)(e)}},7466:function(e,t,n){var r=n(9958),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488);e.exports=function(e){return Object(r(e))}},7593:function(e,t,n){var r=n(111);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},1694:function(e,t,n){var r={};r[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(r)},9711:function(e){var t=0,n=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++t+n).toString(36)}},3307:function(e,t,n){var r=n(133);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(e,t,n){var r=n(7854),o=n(2309),a=n(6656),i=n(9711),c=n(133),l=n(3307),u=o("wks"),s=r.Symbol,f=l?s:s&&s.withoutSetter||i;e.exports=function(e){return a(u,e)&&(c||"string"==typeof u[e])||(c&&a(s,e)?u[e]=s[e]:u[e]=f("Symbol."+e)),u[e]}},6535:function(e,t,n){"use strict";var r=n(2109),o=n(6790),a=n(7908),i=n(7466),c=n(3099),l=n(5417);r({target:"Array",proto:!0},{flatMap:function(e){var t,n=a(this),r=i(n.length);return c(e),(t=l(n,0)).length=o(t,n,n,r,0,1,e,arguments.length>1?arguments[1]:void 0),t}})},9244:function(e,t,n){n(1223)("flatMap")},8559:function(e,t,n){var r=n(2109),o=n(408),a=n(6135);r({target:"Object",stat:!0},{fromEntries:function(e){var t={};return o(e,(function(e,n){a(t,e,n)}),{AS_ENTRIES:!0}),t}})},8122:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return nt}});var r=n(7294),o=n.t(r,2),a=n(7329),i=(n(8559),n(6535),n(9244),n(7803)),c=n.n(i),l=n(3935);n(2961);function u(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}"undefined"!=typeof window&&r.useLayoutEffect,new Map;new Set(["id"]),new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]);var f=new Map,p=new Set;function d(){if("undefined"!=typeof window){var e=function e(t){var n=f.get(t.target);if(n&&(n.delete(t.propertyName),0===n.size&&(t.target.removeEventListener("transitioncancel",e),f.delete(t.target)),0===f.size)){var r,o=u(p);try{for(o.s();!(r=o.n()).done;){(0,r.value)()}}catch(a){o.e(a)}finally{o.f()}p.clear()}};document.body.addEventListener("transitionrun",(function(t){var n=f.get(t.target);n||(n=new Set,f.set(t.target,n),t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)})),document.body.addEventListener("transitionend",e)}}"undefined"!=typeof document&&("loading"!==document.readyState?d():document.addEventListener("DOMContentLoaded",d));"undefined"!=typeof window&&window.visualViewport;new Map;function m(e){return"undefined"!=typeof window&&null!=window.navigator&&e.test(window.navigator.platform)}function v(){return m(/^Mac/)}function y(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e){return!(0!==e.mozInputSource||!e.isTrusted)||0===e.detail&&!e.pointerType}var b=r.createContext(null);b.displayName="PressResponderContext";var w=new Set,x=!1,_=!1;function E(e,t){var n,r=y(w);try{for(r.s();!(n=r.n()).done;){(0,n.value)(e,t)}}catch(o){r.e(o)}finally{r.f()}}function j(e){_=!0,function(e){return!(e.metaKey||!v()&&e.altKey||e.ctrlKey)}(e)&&("keyboard",E("keyboard",e))}function O(e){"pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(_=!0,E("pointer",e))}function S(e){h(e)&&(_=!0,"virtual")}function A(e){e.target!==window&&e.target!==document&&(_||("virtual",E("virtual",e)),_=!1)}function P(){_=!1}function N(){if("undefined"!=typeof window&&!x){var e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){_=!0,e.apply(this,arguments)},document.addEventListener("keydown",j,!0),document.addEventListener("keyup",j,!0),document.addEventListener("click",S,!0),window.addEventListener("focus",A,!0),window.addEventListener("blur",P,!1),"undefined"!=typeof PointerEvent?(document.addEventListener("pointerdown",O,!0),document.addEventListener("pointermove",O,!0),document.addEventListener("pointerup",O,!0)):(document.addEventListener("mousedown",O,!0),document.addEventListener("mousemove",O,!0),document.addEventListener("mouseup",O,!0)),x=!0}}"undefined"!=typeof document&&("loading"!==document.readyState?N():document.addEventListener("DOMContentLoaded",N));new Set;var k=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"];k.join(":not([hidden]),");k.push('[tabindex]:not([tabindex="-1"]):not([disabled])');k.join(':not([hidden]):not([tabindex="-1"]),');function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}var M=Symbol("NONE");function R(e){return null!=e}function H(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=r;a<i.length;a++){var c=i[a];c in e&&(t[c]=e[c])}return t}function D(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=Object.keys(e);a<i.length;a++){var c=i[a];r.includes(c)||(t[c]=e[c])}return t}function F(e){for(var t=I({},e),n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=r;a<i.length;a++)for(var c=i[a],l=0,u=Object.keys(c);l<u.length;l++){var s=u[l];t[s]=z(s,t[s],c[s])}return t}function z(e,t,n){return t===M||n===M?null:null==t?n:null==n?t:typeof t!=typeof n?n:"className"===e?c()(t,n):"style"===e?I({},t,n):e.startsWith("on")&&"function"==typeof t?function(){var e;return"function"==typeof t&&(e=t.apply(void 0,arguments)),"function"==typeof n&&(e=n.apply(void 0,arguments)),e}:n}function G(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0!==t.length)return function(e){for(var n,r=e,o=T(t);!(n=o()).done;){r=(0,n.value)(r)}return r}}var W="undefined"!=typeof window,B=W?r.useLayoutEffect:r.useEffect;function K(e,t,n){return Array.isArray(n)?r.createElement.apply(r,[e,t].concat(n)):n||"children"in t?r.createElement(e,t,n):r.createElement(e,t)}function V(e,t,n,r){var o=t.children,a=L(t,["children"]),i=Y(o,null!=n&&n);return K(e,I({ref:r},a),i)}function U(e,t){var n=e.as,r=e.hasGap;return V(null!=n?n:"div",L(e,["as","hasGap"]),r,t)}var Z=(0,r.forwardRef)(U),$=function(e){return(0,r.forwardRef)((function(t,n){var r=t.hasGap,o=L(t,["hasGap"]);return V(e,o,r,n)}))},q=Object.assign(Z,{div:$("div"),a:$("a"),button:$("button"),h1:$("h1"),h2:$("h2"),h3:$("h3"),h4:$("h4"),h5:$("h5"),h6:$("h6"),label:$("label"),form:$("form"),section:$("section"),head:$("head"),main:$("main"),nav:$("nav")});function Q(e,t,n){if(null==e)return!1;var r=e[t];return null!=r&&(!0===r?n===t:!1!==r&&(Array.isArray(r)?r.includes(n):"string"==typeof r?r===n:void 0!==r[n]&&!1!==r[n]))}function Y(e,t){var n=t?"__wab_flex-container":"__wab_passthrough";return e?Array.isArray(e)?r.createElement.apply(o,["div",{className:n}].concat(e)):(0,r.createElement)("div",{className:n},e):null}function J(e,t,n,o){var a=oe(e),i=re(n,a.props);if("render"===a.type)return a.render(i,t);var c=t;"as"===a.type&&a.as&&(t===q?i.as=a.as:c=a.as);var l=i.children;a.wrapChildren&&(l=a.wrapChildren(function(e){return Array.isArray(e)?r.createElement.apply(r,[r.Fragment,{}].concat(e)):e}(l))),o&&(l=Y(l,!0));var u=K(c,i,l);return a.wrap&&(u=a.wrap(u)),u}var X=new Map;function ee(e,t){null==t&&(t={});var n=t["data-plasmic-name"],r=t["data-plasmic-root"],o=t["data-plasmic-for-node"];delete t["data-plasmic-name"],delete t["data-plasmic-root"],delete t["data-plasmic-for-node"];for(var a=arguments.length,i=new Array(a>2?a-2:0),c=2;c<a;c++)i[c-2]=arguments[c];var l=te.apply(void 0,[e,t].concat(i));if(n&&X.set(n,l),r){var u,s=o?null!=(u=X.get(o))?u:null:l;return X.clear(),s}return l}function te(e,t){var n,r=t["data-plasmic-override"],o=t["data-plasmic-wrap-flex-child"],a=null!=(n=t["data-plasmic-trigger-props"])?n:[];delete t["data-plasmic-override"],delete t["data-plasmic-wrap-flex-child"],delete t["data-plasmic-trigger-props"];for(var i=arguments.length,c=new Array(i>2?i-2:0),l=2;l<i;l++)c[l-2]=arguments[l];return J(r,e,F.apply(void 0,[t,0===c.length?{}:{children:c}].concat(a)),o)}var ne=Symbol("UNSET");function re(e,t){if(!t)return e;for(var n=I({},e),r=0,o=Object.keys(t);r<o.length;r++){var a=o[r],i=e[a],c=t[a];c===ne?delete n[a]:(null!=c||"className"===a||"style"===a||a.startsWith("on")&&"function"==typeof i||(c=M),n[a]=z(a,i,c))}return n}function oe(e){if(!e)return{type:"default",props:{}};if(function(e){return"string"==typeof e||"number"==typeof e||r.isValidElement(e)}(e))return{type:"default",props:{children:e}};if("object"==typeof e)return"as"in e?I({},e,{props:e.props||{},type:"as"}):"render"in e?I({},e,{type:"render"}):"props"in e?I({},e,{props:e.props||{},type:"default"}):(t=Object.keys(e),n=["wrap","wrapChildren"],t.every((function(e){return n.includes(e)}))?I({},e,{props:{},type:"default"}):{type:"default",props:e});if("function"==typeof e)return{type:"render",render:e};var t,n;throw new Error("Unexpected override: "+e)}function ae(e,t){for(var n={},r=0,o=Array.from(new Set([].concat(Object.keys(e),Object.keys(t))));r<o.length;r++){var a=o[r];n[a]=ie(e[a],t[a])}return n}function ie(e,t){var n,r;if(!e)return t;if(!t)return e;var o=oe(e),a=oe(t),i=G.apply(void 0,[o.wrap,a.wrap].filter(R)),c=G.apply(void 0,[o.wrapChildren,a.wrapChildren].filter(R)),l=re(null!=(n=o.props)?n:{},a.props);if("render"===a.type)return{render:a.render,props:l,wrap:i,wrapChildren:c};if("render"===o.type)return{render:o.render,props:l,wrap:i,wrapChildren:c};var u=null!=(r="as"===a.type?a.as:void 0)?r:"as"===o.type?o.as:void 0;return I({props:l,wrap:i,wrapChildren:c},u?{as:u}:{})}function ce(e,t){var n,r,o,a,i,c,l,u,s=t.name,f=t.descendantNames,p=t.internalVariantPropNames,d=t.internalArgPropNames,m=["variants","args","overrides"],v=(a=D.apply(void 0,[H.apply(void 0,[e].concat(p))].concat(m)),i=null!=(n=e.variants)?n:{},I({},a,i)),y=(c=D.apply(void 0,[H.apply(void 0,[e].concat(d))].concat(m)),l=null!=(r=e.args)?r:{},I({},c,l)),g=ae(D.apply(void 0,[H.apply(void 0,[e].concat(f))].concat(d,p,m)),null!=(o=e.overrides)?o:{}),h=D.apply(void 0,[e,"variants","args","overrides"].concat(f,p,d));Object.keys(h).length>0&&(g=ae(g,((u={})[s]={props:h},u)));return{variants:v,args:y,overrides:g}}var le={};function ue(e){if("nextjs"===e.platform&&e.href){var t=["href","replace","scroll","shallow","passHref","prefetch","locale"];return r.createElement(e.component,H.apply(void 0,[e].concat(t)),r.createElement("a",Object.assign({},D.apply(void 0,[e,"component","platform"].concat(t)))))}return"gatsby"===e.platform&&(n=e.href,/^\/(?!\/)/.test(n))?r.createElement(e.component,I({},D(e,"component","platform","href"),{to:e.href})):r.createElement("a",Object.assign({},D(e,"component","platform")));var n}function se(e){var t=e.as,n=e.defaultContents,o=e.value,a=L(e,["as","defaultContents","value"]),i=void 0===o?n:o;if(!i||Array.isArray(i)&&0===i.length)return null;var c=fe(i);return c&&(i=(0,r.createElement)("div",{className:"__wab_slot-string-wrapper"},c)),0===Object.keys(a).filter((function(e){return!!a[e]})).length?(0,r.createElement)(r.Fragment,null,i):(0,r.createElement)(t||"div",F({className:"__wab_slot"},a),i)}function fe(e){return(0,r.isValidElement)(e)&&e.type===r.Fragment?fe(e.props.children):"string"==typeof e?e:Array.isArray(e)&&1===e.length&&"string"==typeof e[0]?e[0]:void 0}var pe=[],de={};function me(){return W?Object.entries(de).filter((function(e){var t=e[1];return window.matchMedia(t).matches})).map((function(e){return e[0]})):[]}var ve=void 0;W&&window.addEventListener("resize",(function(){var e=me();ve&&e.join("")===ve.join("")||(ve=e,l.unstable_batchedUpdates((function(){return pe.forEach((function(e){return e()}))})))}));var ye=c(),ge=n(5444),he="plasmic__default_style-module--all--1UbrG",be="plasmic__default_style-module--__wab_text--2GF2O",we="plasmic_minimalist_about_me_page-module--root_reset--J_bEf",xe=new Array,_e=new Array("children");var Ee={root:["root","img","link"],img:["img"],link:["link"]};function je(e){var t=function(t){var n=ce(t,{name:e,descendantNames:(0,a.Z)(Ee[e]),internalArgPropNames:_e,internalVariantPropNames:xe});return function(e){e.variants;var t=e.args,n=e.overrides,r=e.forNode;return e.dataFetches,ee(q,{as:"div","data-plasmic-name":"root","data-plasmic-override":n.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,hasGap:!0,className:ye(he,we,"PlasmicCopyableLink-module--root--YHLbj")},null,ee(ue,{"data-plasmic-name":"link","data-plasmic-override":n.link,className:ye(he,"PlasmicCopyableLink-module--link--33O8_"),component:ge.Link,href:"mailto:careers@narative.co",platform:"gatsby"},ee("div",{className:ye(he,"PlasmicCopyableLink-module--box__aOf2E--22a25")},se({defaultContents:"careers@narative.co",value:t.children,className:ye("PlasmicCopyableLink-module--slotChildren--2Kqfu")}))),null)}({variants:n.variants,args:n.args,overrides:n.overrides,dataFetches:t.dataFetches,forNode:e})};return t.displayName="root"===e?"PlasmicCopyableLink":"PlasmicCopyableLink."+e,t}var Oe=Object.assign(je("root"),{img:je("img"),link:je("link"),internalVariantProps:xe,internalArgProps:_e}),Se=Oe;var Ae=function(e){return r.createElement(Oe,e)};function Pe(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var Ne=function(e){var t=e.className,n=e.style,o=e.title,a=Pe(e,["className","style","title"]);return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 15 12",height:"1em",width:"1em",style:Object.assign({fill:"currentcolor"},n||{}),className:ye("plasmic-default__svg",t)},a),o&&r.createElement("title",null,o),r.createElement("path",{fill:"currentColor",d:"M12.818 2.238a2.936 2.936 0 001.287-1.62 5.863 5.863 0 01-1.86.71 2.927 2.927 0 00-4.988 2.67A8.31 8.31 0 011.225.94a2.926 2.926 0 00.906 3.908 2.916 2.916 0 01-1.326-.366v.037a2.93 2.93 0 002.348 2.87 2.931 2.931 0 01-1.322.05 2.93 2.93 0 002.734 2.034A5.874 5.874 0 01.23 10.685 8.286 8.286 0 004.718 12c5.384 0 8.329-4.46 8.329-8.329 0-.127-.003-.253-.009-.379A5.95 5.95 0 0014.5 1.777a5.83 5.83 0 01-1.681.46z",clipRule:"evenodd",fillRule:"evenodd"}))},ke=new Array,Ie=new Array("children");var Le={root:["root"]};var Ce,Te,Me=Object.assign(((Te=function(e){var t=ce(e,{name:Ce,descendantNames:(0,a.Z)(Le[Ce]),internalArgPropNames:Ie,internalVariantPropNames:ke});return function(e){e.variants;var t=e.args,n=e.overrides,r=e.forNode;return e.dataFetches,ee(ue,{"data-plasmic-name":"root","data-plasmic-override":n.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,className:ye(he,we,"PlasmicSocialIcon-module--root--3WEj9"),component:ge.Link,href:"/",platform:"gatsby"},se({defaultContents:ee(Ne,{className:ye(he,"PlasmicSocialIcon-module--svg__riJel--RD3In"),role:"img"}),value:t.children}))}({variants:t.variants,args:t.args,overrides:t.overrides,dataFetches:e.dataFetches,forNode:Ce})}).displayName="root"===(Ce="root")?"PlasmicSocialIcon":"PlasmicSocialIcon."+Ce,Te),{internalVariantProps:ke,internalArgProps:Ie}),Re=Me;var He=function(e){return r.createElement(Me,e)};function De(e){return console.warn("DEPRECATED: Plasmic now uses a custom hook for Screen variants, which is automatically included in your components. Please remove this provider from your code."),e.children}var Fe,ze,Ge=(Fe=!0,ze={tabletOrSmaller:"(min-width:0px) and (max-width:800px)",mobileOnly:"(min-width:0px) and (max-width:400px)"},Object.assign(de,ze),function(){var e=(0,r.useState)()[1],t=(0,r.useRef)(ve||[]);return B((function(){var n=function(){ve&&t.current.join("")!==ve.join("")&&(t.current=ve,e({}))};return pe.push(n),void 0===ve&&(ve=me()),n(),function(){pe.splice(pe.indexOf(n),1)}}),[]),Fe?ve||[]:ve?ve[ve.length-1]:void 0});var We=function(e){var t=e.className,n=e.style,o=e.title,a=Pe(e,["className","style","title"]);return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",height:"1em",width:"1em",style:Object.assign({fill:"currentcolor"},n||{}),className:ye("plasmic-default__svg",t)},a),o&&r.createElement("title",null,o),r.createElement("path",{fill:"currentColor",d:"M7 0C3.14 0 0 3.14 0 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm4.562 3.301a5.846 5.846 0 011.31 3.52 9.88 9.88 0 00-3.938-.038c-.21-.493-.429-.962-.649-1.406 1.267-.546 2.37-1.243 3.277-2.076zm-.789-.801c-.9.82-1.942 1.429-3.009 1.877a26.974 26.974 0 00-1.989-3.124A5.849 5.849 0 0110.773 2.5zM4.64 1.62a25.727 25.727 0 012.048 3.157c-2.217.722-4.368.844-5.402.855A5.898 5.898 0 014.64 1.62zM1.13 6.76h.033c.714 0 2.023-.049 3.563-.33.88-.16 1.713-.376 2.495-.643.203.406.406.834.602 1.282a10.59 10.59 0 00-2.75 1.364 12.384 12.384 0 00-2.555 2.36A5.848 5.848 0 011.13 6.76zm2.198 4.823a11.302 11.302 0 012.415-2.247A9.424 9.424 0 018.25 8.104c.5 1.295.926 2.726 1.18 4.244a5.847 5.847 0 01-6.1-.766zm7.135.16a23.296 23.296 0 00-1.105-3.905c1.111-.188 2.26-.149 3.44.116a5.882 5.882 0 01-2.335 3.79z"}))};var Be=function(e){var t=e.className,n=e.style,o=e.title,a=Pe(e,["className","style","title"]);return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 15 14",height:"1em",width:"1em",style:Object.assign({fill:"currentcolor"},n||{}),className:ye("plasmic-default__svg",t)},a),o&&r.createElement("title",null,o),r.createElement("path",{fill:"currentColor",d:"M7.177 0A7.175 7.175 0 000 7.177a7.172 7.172 0 004.907 6.81c.36.062.494-.153.494-.342 0-.17-.01-.735-.01-1.336-1.802.332-2.269-.44-2.413-.844-.08-.206-.43-.843-.735-1.013-.251-.135-.61-.467-.01-.476.566-.009.97.52 1.104.736.646 1.085 1.678.78 2.09.592.063-.467.252-.78.458-.96-1.597-.18-3.265-.799-3.265-3.544 0-.78.278-1.426.735-1.929-.071-.179-.323-.915.072-1.901 0 0 .601-.189 1.974.735a6.66 6.66 0 011.794-.242c.61 0 1.22.08 1.794.242 1.373-.933 1.974-.735 1.974-.735.395.986.144 1.722.072 1.901.457.503.735 1.14.735 1.93 0 2.753-1.677 3.364-3.274 3.543.26.224.484.655.484 1.328 0 .96-.009 1.731-.009 1.973 0 .189.135.413.494.341a7.188 7.188 0 004.89-6.809A7.175 7.175 0 007.176 0z",clipRule:"evenodd",fillRule:"evenodd"}))},Ke=new Array,Ve=new Array;function Ue(e){e.variants,e.args;var t,n=e.overrides,o=e.forNode,a=(e.dataFetches,t={screen:Ge()},Object.entries(t).filter((function(e){return"PLEASE_RENDER_INSIDE_PROVIDER"===e[1]})).forEach((function(e){var n=e[0];t[n]=void 0,le[n]})),t);return ee(r.Fragment,null,ee("style",null,"\n        body {\n          margin: 0;\n        }\n      "),ee("div",{className:"plasmic__default_style-module--plasmic_page_wrapper--vaaM6"},ee("div",{"data-plasmic-name":"root","data-plasmic-override":n.root,"data-plasmic-root":!0,"data-plasmic-for-node":o,className:ye(he,we,"PlasmicHomepage-module--root--1l9Yi")},ee("div",{className:ye(he,"PlasmicHomepage-module--box___6FbCg--SJ6ue")},ee("div",{className:ye(he,"PlasmicHomepage-module--box__mNvbX--1jq_F")}),ee(q,{as:"div",hasGap:!!Q(a,"screen","tabletOrSmaller"),className:ye(he,"PlasmicHomepage-module--box__saD84--Z7I7Q")},ee("div",{className:ye(he,"PlasmicHomepage-module--box__aMq--1pRER")},ee("div",{className:ye(he,"PlasmicHomepage-module--box__oDgC--1fEk0")},ee("div",{className:ye(he,be,"PlasmicHomepage-module--box__xCbLk--2_Uk1")},"Anna Wu"),ee("div",{className:ye(he,"PlasmicHomepage-module--box__eMma--IJBb5")}),ee("div",{className:ye(he,be,"PlasmicHomepage-module--box__krQpa--3qO1O")},"Building things for building things.\nDesign and code at Plasmic."))),ee("div",{className:ye(he,"PlasmicHomepage-module--box__qaLQy--3fktz")},ee("div",{className:ye(he,be,"PlasmicHomepage-module--box__gjYc--3GM6f")}," "),ee("div",{className:ye(he,"PlasmicHomepage-module--box__ukwPd--3Q2l7")},ee(Ae,{"data-plasmic-name":"copyableLink","data-plasmic-override":n.copyableLink,className:ye("__wab_instance","PlasmicHomepage-module--copyableLink--1YaYX")},"aw@gmail.com")),ee(q,{as:"div",hasGap:!0,className:ye(he,"PlasmicHomepage-module--box__mutaK--2aS02")},ee(q,{as:"div",hasGap:!0,className:ye(he,"PlasmicHomepage-module--box__mqAb--nxF6U")},ee(He,{className:ye("__wab_instance","PlasmicHomepage-module--socialIcon__ic20D--2WMTo")},ee(Ne,{className:ye(he,"PlasmicHomepage-module--svg__xgPbu--D8LRA"),role:"img"})),ee(He,{className:ye("__wab_instance","PlasmicHomepage-module--socialIcon__jfO2--2efbQ")},ee(We,{className:ye(he,"PlasmicHomepage-module--svg__xIpH--2rcvK"),role:"img"})),ee(He,{className:ye("__wab_instance","PlasmicHomepage-module--socialIcon__fj5Ud--WIsIb")},ee(Be,{className:ye(he,"PlasmicHomepage-module--svg__xLQsR--2ukWz"),role:"img"})))))),ee("div",{className:ye(he,"PlasmicHomepage-module--box__ozh4D--3c_8-")})))))}var Ze={root:["root","copyableLink"],copyableLink:["copyableLink"]};function $e(e){var t=function(t){var n=ce(t,{name:e,descendantNames:(0,a.Z)(Ze[e]),internalArgPropNames:Ve,internalVariantPropNames:Ke});return Ue({variants:n.variants,args:n.args,overrides:n.overrides,dataFetches:t.dataFetches,forNode:e})};return t.displayName="root"===e?"PlasmicHomepage":"PlasmicHomepage."+e,t}var qe=Object.assign($e("root"),{copyableLink:$e("copyableLink"),internalVariantProps:Ke,internalArgProps:Ve});const Qe={Homepage:qe,CopyableLink:Se,SocialIcon:Re,IconIcon:Ne,Icon2Icon:We,Icon3Icon:Be},Ye={Screen:{component:De,isContext:!Boolean("ScreenVariantProvider")}},Je={Homepage:{"84ZW8vpKjxB4irwRtp6GD5":qe},CopyableLink:{"84ZW8vpKjxB4irwRtp6GD5":Se},SocialIcon:{"84ZW8vpKjxB4irwRtp6GD5":Re},IconIcon:{"84ZW8vpKjxB4irwRtp6GD5":Ne},Icon2Icon:{"84ZW8vpKjxB4irwRtp6GD5":We},Icon3Icon:{"84ZW8vpKjxB4irwRtp6GD5":Be}},Xe={Screen:{"84ZW8vpKjxB4irwRtp6GD5":{component:De,isContext:!Boolean(void 0)}}};function et(e,t,n){const o=Object.entries(n||{}).map((([e,n])=>{if(Ye[e]){const{component:t,isContext:r}=Ye[e];return[r?t.Provider:t,n]}if(!Xe[e])throw new Error(`The provider ${e} could not be found.`);if(!Xe[e][t])throw new Error(`The provider ${e} requires a valid projectId. Passed: ${t}. Options: ${Object.keys(Xe[e])}`);const{component:r,isContext:o}=Xe[e][t];return[o?r.Provider:r,n]}));return o.length?o.reduce(((e,[t,n])=>r.createElement(t,{value:n},e)),e):e}function tt({projectId:e,component:t,componentProps:n={},providerProps:o={}}){const a=function(e,t){if(Qe[t])return Qe[t];if(!Je[t])throw new Error(`The component ${t} could not be found.`);if(!Je[t][e])throw new Error(`The component ${t} requires a valid projectId. Passed: ${e}. Options: ${Object.keys(Je[t])}`);return Je[t][e]}(e,t);return et(r.createElement(a,n),e,o)}function nt(){return r.createElement(tt,{projectId:"84ZW8vpKjxB4irwRtp6GD5",component:"Homepage"})}}}]);
//# sourceMappingURL=component---cache-plasmic-pages-index-tsx-d522f078de1869855dc3.js.map