/*! For license information please see my.js.LICENSE.txt */
!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=66)}({0:function(t,e){t.exports={"@VERSION":2}},1:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a,u,s,c){var f,l="function"==typeof t?t.options:t;if(s){l.components||(l.components={});var p=Object.prototype.hasOwnProperty;for(var d in s)p.call(s,d)&&!p.call(l.components,d)&&(l.components[d]=s[d])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(l.mixins||(l.mixins=[])).push(c)),e&&(l.render=e,l.staticRenderFns=r,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),a?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=f):o&&(f=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(l.functional){l._injectStyles=f;var h=l.render;l.render=function(t,e){return f.call(e),h(t,e)}}else{var v=l.beforeCreate;l.beforeCreate=v?[].concat(v,f):[f]}return{exports:t,options:l}}r.d(e,"a",(function(){return n}))},10:function(t,e,r){var n=r(3).default,o=r(11);t.exports=function(t){var e=o(t,"string");return"symbol"===n(e)?e:String(e)},t.exports.__esModule=!0,t.exports.default=t.exports},11:function(t,e,r){var n=r(3).default;t.exports=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports.default=t.exports},15:function(t,e,r){"use strict";var n=r(48),o=r(20),i=r(1);var a=Object(i.a)(o.default,n.b,n.c,!1,null,null,"5a467126",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style)}).call(a),e.default=a.exports},2:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports},20:function(t,e,r){"use strict";var n=r(21),o=r.n(n);e.default=o.a},21:function(t,e,r){"use strict";var n=r(2);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={mixins:[n(r(9)).default],data:function(){return{}}};e.default=o},3:function(t,e){function r(e){return t.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},4:function(t,e,r){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(r(5).default,Vue.prototype.__$appStyle__)},48:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[e("view",[e("u-text",[this._v("my")])])])},o=[]},5:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e.default=o.a},6:function(t,e){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(r){return e.resolve(t()).then((function(){return r}))}),(function(r){return e.resolve(t()).then((function(){throw r}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var r=uni.requireGlobal();ArrayBuffer=r.ArrayBuffer,Int8Array=r.Int8Array,Uint8Array=r.Uint8Array,Uint8ClampedArray=r.Uint8ClampedArray,Int16Array=r.Int16Array,Uint16Array=r.Uint16Array,Int32Array=r.Int32Array,Uint32Array=r.Uint32Array,Float32Array=r.Float32Array,Float64Array=r.Float64Array,BigInt64Array=r.BigInt64Array,BigUint64Array=r.BigUint64Array}},66:function(t,e,r){"use strict";r.r(e);r(4),r(6);var n=r(15);n.default.mpType="page",n.default.route="pages/my/my",n.default.el="#root",new Vue(n.default)},7:function(t,e,r){var n=r(10);t.exports=function(t,e,r){return(e=n(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.__esModule=!0,t.exports.default=t.exports},8:function(t,e,r){"use strict";var n=r(2);Object.defineProperty(e,"__esModule",{value:!0}),e.Store=void 0,e.createLogger=E,e.default=e.createNamespacedHelpers=void 0,e.install=w,e.mapState=e.mapMutations=e.mapGetters=e.mapActions=void 0;var o=n(r(3));var i=("undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).__VUE_DEVTOOLS_GLOBAL_HOOK__;function a(t,e){if(void 0===e&&(e=[]),null===t||"object"!==(0,o.default)(t))return t;var r,n=(r=function(e){return e.original===t},e.filter(r)[0]);if(n)return n.copy;var i=Array.isArray(t)?[]:{};return e.push({original:t,copy:i}),Object.keys(t).forEach((function(r){i[r]=a(t[r],e)})),i}function u(t,e){Object.keys(t).forEach((function(r){return e(t[r],r)}))}function s(t){return null!==t&&"object"===(0,o.default)(t)}var c=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var r=t.state;this.state=("function"==typeof r?r():r)||{}},f={namespaced:{configurable:!0}};f.namespaced.get=function(){return!!this._rawModule.namespaced},c.prototype.addChild=function(t,e){this._children[t]=e},c.prototype.removeChild=function(t){delete this._children[t]},c.prototype.getChild=function(t){return this._children[t]},c.prototype.hasChild=function(t){return t in this._children},c.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},c.prototype.forEachChild=function(t){u(this._children,t)},c.prototype.forEachGetter=function(t){this._rawModule.getters&&u(this._rawModule.getters,t)},c.prototype.forEachAction=function(t){this._rawModule.actions&&u(this._rawModule.actions,t)},c.prototype.forEachMutation=function(t){this._rawModule.mutations&&u(this._rawModule.mutations,t)},Object.defineProperties(c.prototype,f);var l=function(t){this.register([],t,!1)};l.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},l.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,r){return t+((e=e.getChild(r)).namespaced?r+"/":"")}),"")},l.prototype.update=function(t){!function t(e,r,n){0;if(r.update(n),n.modules)for(var o in n.modules){if(!r.getChild(o))return void 0;t(e.concat(o),r.getChild(o),n.modules[o])}}([],this.root,t)},l.prototype.register=function(t,e,r){var n=this;void 0===r&&(r=!0);var o=new c(e,r);0===t.length?this.root=o:this.get(t.slice(0,-1)).addChild(t[t.length-1],o);e.modules&&u(e.modules,(function(e,o){n.register(t.concat(o),e,r)}))},l.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),r=t[t.length-1],n=e.getChild(r);n&&n.runtime&&e.removeChild(r)},l.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),r=t[t.length-1];return!!e&&e.hasChild(r)};var p;var d=function(t){var e=this;void 0===t&&(t={}),!p&&"undefined"!=typeof window&&window.Vue&&w(window.Vue);var r=t.plugins;void 0===r&&(r=[]);var n=t.strict;void 0===n&&(n=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new l(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new p,this._makeLocalGettersCache=Object.create(null);var o=this,a=this.dispatch,u=this.commit;this.dispatch=function(t,e){return a.call(o,t,e)},this.commit=function(t,e,r){return u.call(o,t,e,r)},this.strict=n;var s=this._modules.root.state;_(this,s,[],this._modules.root),y(this,s),r.forEach((function(t){return t(e)})),(void 0!==t.devtools?t.devtools:p.config.devtools)&&function(t){i&&(t._devtoolHook=i,i.emit("vuex:init",t),i.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){i.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){i.emit("vuex:action",t,e)}),{prepend:!0}))}(this)};e.Store=d;var h={state:{configurable:!0}};function v(t,e,r){return e.indexOf(t)<0&&(r&&r.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function m(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var r=t.state;_(t,r,[],t._modules.root,!0),y(t,r,e)}function y(t,e,r){var n=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var o=t._wrappedGetters,i={};u(o,(function(e,r){i[r]=function(t,e){return function(){return t(e)}}(e,t),Object.defineProperty(t.getters,r,{get:function(){return t._vm[r]},enumerable:!0})}));var a=p.config.silent;p.config.silent=!0,t._vm=new p({data:{$$state:e},computed:i}),p.config.silent=a,t.strict&&function(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}(t),n&&(r&&t._withCommit((function(){n._data.$$state=null})),p.nextTick((function(){return n.$destroy()})))}function _(t,e,r,n,o){var i=!r.length,a=t._modules.getNamespace(r);if(n.namespaced&&(t._modulesNamespaceMap[a],t._modulesNamespaceMap[a]=n),!i&&!o){var u=g(e,r.slice(0,-1)),s=r[r.length-1];t._withCommit((function(){p.set(u,s,n.state)}))}var c=n.context=function(t,e,r){var n=""===e,o={dispatch:n?t.dispatch:function(r,n,o){var i=b(r,n,o),a=i.payload,u=i.options,s=i.type;return u&&u.root||(s=e+s),t.dispatch(s,a)},commit:n?t.commit:function(r,n,o){var i=b(r,n,o),a=i.payload,u=i.options,s=i.type;u&&u.root||(s=e+s),t.commit(s,a,u)}};return Object.defineProperties(o,{getters:{get:n?function(){return t.getters}:function(){return function(t,e){if(!t._makeLocalGettersCache[e]){var r={},n=e.length;Object.keys(t.getters).forEach((function(o){if(o.slice(0,n)===e){var i=o.slice(n);Object.defineProperty(r,i,{get:function(){return t.getters[o]},enumerable:!0})}})),t._makeLocalGettersCache[e]=r}return t._makeLocalGettersCache[e]}(t,e)}},state:{get:function(){return g(t.state,r)}}}),o}(t,a,r);n.forEachMutation((function(e,r){!function(t,e,r,n){(t._mutations[e]||(t._mutations[e]=[])).push((function(e){r.call(t,n.state,e)}))}(t,a+r,e,c)})),n.forEachAction((function(e,r){var n=e.root?r:a+r,o=e.handler||e;!function(t,e,r,n){(t._actions[e]||(t._actions[e]=[])).push((function(e){var o,i=r.call(t,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:t.getters,rootState:t.state},e);return(o=i)&&"function"==typeof o.then||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}(t,n,o,c)})),n.forEachGetter((function(e,r){!function(t,e,r,n){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return r(n.state,n.getters,t.state,t.getters)}}(t,a+r,e,c)})),n.forEachChild((function(n,i){_(t,e,r.concat(i),n,o)}))}function g(t,e){return e.reduce((function(t,e){return t[e]}),t)}function b(t,e,r){return s(t)&&t.type&&(r=e,e=t,t=t.type),{type:t,payload:e,options:r}}function w(t){p&&t===p||function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:r});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,e.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}(p=t)}h.state.get=function(){return this._vm._data.$$state},h.state.set=function(t){0},d.prototype.commit=function(t,e,r){var n=this,o=b(t,e,r),i=o.type,a=o.payload,u=(o.options,{type:i,payload:a}),s=this._mutations[i];s&&(this._withCommit((function(){s.forEach((function(t){t(a)}))})),this._subscribers.slice().forEach((function(t){return t(u,n.state)})))},d.prototype.dispatch=function(t,e){var r=this,n=b(t,e),o=n.type,i=n.payload,a={type:o,payload:i},u=this._actions[o];if(u){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(a,r.state)}))}catch(t){0}var s=u.length>1?Promise.all(u.map((function(t){return t(i)}))):u[0](i);return new Promise((function(t,e){s.then((function(e){try{r._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(a,r.state)}))}catch(t){0}t(e)}),(function(t){try{r._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(a,r.state,t)}))}catch(t){0}e(t)}))}))}},d.prototype.subscribe=function(t,e){return v(t,this._subscribers,e)},d.prototype.subscribeAction=function(t,e){return v("function"==typeof t?{before:t}:t,this._actionSubscribers,e)},d.prototype.watch=function(t,e,r){var n=this;return this._watcherVM.$watch((function(){return t(n.state,n.getters)}),e,r)},d.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},d.prototype.registerModule=function(t,e,r){void 0===r&&(r={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),_(this,this.state,t,this._modules.get(t),r.preserveState),y(this,this.state)},d.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var r=g(e.state,t.slice(0,-1));p.delete(r,t[t.length-1])})),m(this)},d.prototype.hasModule=function(t){return"string"==typeof t&&(t=[t]),this._modules.isRegistered(t)},d.prototype.hotUpdate=function(t){this._modules.update(t),m(this,!0)},d.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(d.prototype,h);var O=C((function(t,e){var r={};return M(e).forEach((function(e){var n=e.key,o=e.val;r[n]=function(){var e=this.$store.state,r=this.$store.getters;if(t){var n=$(this.$store,"mapState",t);if(!n)return;e=n.context.state,r=n.context.getters}return"function"==typeof o?o.call(this,e,r):e[o]},r[n].vuex=!0})),r}));e.mapState=O;var x=C((function(t,e){var r={};return M(e).forEach((function(e){var n=e.key,o=e.val;r[n]=function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];var n=this.$store.commit;if(t){var i=$(this.$store,"mapMutations",t);if(!i)return;n=i.context.commit}return"function"==typeof o?o.apply(this,[n].concat(e)):n.apply(this.$store,[o].concat(e))}})),r}));e.mapMutations=x;var j=C((function(t,e){var r={};return M(e).forEach((function(e){var n=e.key,o=e.val;o=t+o,r[n]=function(){if(!t||$(this.$store,"mapGetters",t))return this.$store.getters[o]},r[n].vuex=!0})),r}));e.mapGetters=j;var S=C((function(t,e){var r={};return M(e).forEach((function(e){var n=e.key,o=e.val;r[n]=function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];var n=this.$store.dispatch;if(t){var i=$(this.$store,"mapActions",t);if(!i)return;n=i.context.dispatch}return"function"==typeof o?o.apply(this,[n].concat(e)):n.apply(this.$store,[o].concat(e))}})),r}));e.mapActions=S;var A=function(t){return{mapState:O.bind(null,t),mapGetters:j.bind(null,t),mapMutations:x.bind(null,t),mapActions:S.bind(null,t)}};function M(t){return function(t){return Array.isArray(t)||s(t)}(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function C(t){return function(e,r){return"string"!=typeof e?(r=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,r)}}function $(t,e,r){return t._modulesNamespaceMap[r]}function E(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var r=t.filter;void 0===r&&(r=function(t,e,r){return!0});var n=t.transformer;void 0===n&&(n=function(t){return t});var o=t.mutationTransformer;void 0===o&&(o=function(t){return t});var i=t.actionFilter;void 0===i&&(i=function(t,e){return!0});var u=t.actionTransformer;void 0===u&&(u=function(t){return t});var s=t.logMutations;void 0===s&&(s=!0);var c=t.logActions;void 0===c&&(c=!0);var f=t.logger;return void 0===f&&(f=console),function(t){var l=a(t.state);void 0!==f&&(s&&t.subscribe((function(t,i){var u=a(i);if(r(t,l,u)){var s=k(),c=o(t),p="mutation "+t.type+s;P(f,p,e),f.log("%c prev state","color: #9E9E9E; font-weight: bold",n(l)),f.log("%c mutation","color: #03A9F4; font-weight: bold",c),f.log("%c next state","color: #4CAF50; font-weight: bold",n(u)),G(f)}l=u})),c&&t.subscribeAction((function(t,r){if(i(t,r)){var n=k(),o=u(t),a="action "+t.type+n;P(f,a,e),f.log("%c action","color: #03A9F4; font-weight: bold",o),G(f)}})))}}function P(t,e,r){var n=r?t.groupCollapsed:t.group;try{n.call(t,e)}catch(r){t.log(e)}}function G(t){try{t.groupEnd()}catch(e){t.log("\u2014\u2014 log end \u2014\u2014")}}function k(){var t=new Date;return" @ "+V(t.getHours(),2)+":"+V(t.getMinutes(),2)+":"+V(t.getSeconds(),2)+"."+V(t.getMilliseconds(),3)}function V(t,e){return r="0",n=e-t.toString().length,new Array(n+1).join(r)+t;var r,n}e.createNamespacedHelpers=A;var N={Store:d,install:w,version:"3.6.2",mapState:O,mapMutations:x,mapGetters:j,mapActions:S,createNamespacedHelpers:A,createLogger:E};e.default=N},9:function(t,e,r){"use strict";var n=r(2);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r(7));function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var a={computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){(0,o.default)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},(0,r(8).mapGetters)("m_cart",["total"])),onShow:function(){this.setBadge()},methods:{setBadge:function(){uni.setTabBarBadge({index:2,text:this.total+""})}}};e.default=a}});