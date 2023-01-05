/*! For license information please see home.js.LICENSE.txt */
!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=101)}({0:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a,s,u,c){var l,f="function"==typeof t?t.options:t;if(u){f.components||(f.components={});var p=Object.prototype.hasOwnProperty;for(var d in u)p.call(u,d)&&!p.call(f.components,d)&&(f.components[d]=u[d])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(f.mixins||(f.mixins=[])).push(c)),e&&(f.render=e,f.staticRenderFns=r,f._compiled=!0),n&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},f._ssrRegister=l):o&&(l=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(f.functional){f._injectStyles=l;var h=f.render;f.render=function(t,e){return l.call(e),h(t,e)}}else{var m=f.beforeCreate;f.beforeCreate=m?[].concat(m,l):[l]}return{exports:t,options:f}}r.d(e,"a",(function(){return n}))},1:function(t,e){t.exports={"@VERSION":2}},10:function(t,e,r){var n=r(3).default,o=r(11);t.exports=function(t){var e=o(t,"string");return"symbol"===n(e)?e:String(e)},t.exports.__esModule=!0,t.exports.default=t.exports},101:function(t,e,r){"use strict";r.r(e);r(6),r(8);var n=r(18);n.default.mpType="page",n.default.route="pages/home/home",n.default.el="#root",new Vue(n.default)},11:function(t,e,r){var n=r(3).default;t.exports=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports.default=t.exports},12:function(t,e,r){"use strict";function n(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){return"string"==typeof __channelId__&&__channelId__}function i(t,e){switch(n(e)){case"Function":return"function() { [native code] }";default:return e}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var a=e.shift();if(o())return e.push(e.pop().replace("at ","uni-app:///")),console[a].apply(console,e);var s=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,i)+"---END:JSON---"}catch(r){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var r=n(t).toUpperCase();t="NUMBER"===r||"BOOLEAN"===r?"---BEGIN:"+r+"---"+t+"---END:"+r+"---":String(t)}return t})),u="";if(s.length>1){var c=s.pop();u=s.join("---COMMA---"),0===c.indexOf(" at ")?u+=c:u+="---COMMA---"+c}else u=s[0];console[a](u)},e.log=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];console[t].apply(console,r)}},13:function(t,e){var r="https://api-hmugo-web.itheima.net/api/public/v1";t.exports={getBanner:r+"/home/swiperdata",getCatitems:r+"/home/catitems",getFloordata:r+"/home/floordata",getGoodsDetail:r+"/goods/detail",getCategories:r+"/categories",getGoodsList:r+"/goods/search"}},14:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.request=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json","X-Auth-Token":uni.getStorageSync("cookie")};return new Promise((function(o,i){uni.request({url:t,data:e,method:r,header:n,success:function(t){200==t.statusCode&&o(t)},fail:function(t){i(t)}})}))}},18:function(t,e,r){"use strict";var n=r(57),o=r(48),i=r(0);var a=Object(i.a)(o.default,n.b,n.c,!1,null,"71d9e2b6","70ce8974",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(r(75).default,this.options.style):Object.assign(this.options.style,r(75).default)}).call(a),e.default=a.exports},2:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports},3:function(t,e){function r(e){return t.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},4:function(t,e,r){var n=r(10);t.exports=function(t,e,r){return(e=n(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.__esModule=!0,t.exports.default=t.exports},48:function(t,e,r){"use strict";var n=r(49),o=r.n(n);e.default=o.a},49:function(t,e,r){"use strict";(function(t){var n=r(2);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r(13)),i=n(r(9)),a=r(14),s={mixins:[i.default],data:function(){return{swiperList:[],navList:[],floorList:[]}},onLoad:function(){this.getBanner(),this.getCatitems(),this.getFloordata()},methods:{getBanner:function(){var t=this;(0,a.request)(o.default.getBanner).then((function(e){t.swiperList=e.data.message}))},getCatitems:function(){var t=this;(0,a.request)(o.default.getCatitems).then((function(e){t.navList=e.data.message}))},getFloordata:function(){var t=this;(0,a.request)(o.default.getFloordata).then((function(e){t.floorList=e.data.message}))},handleSwiperClick:function(t){uni.setStorageSync("goods_id",t.goods_id),uni.navigateTo({url:"/pagesSub/goods_detail/goods_detail?goods_id="+t.goods_id})},navClickHandler:function(t){"\u5206\u7c7b"===t.name&&uni.switchTab({url:"/pages/cate/cate"})},handleToGoodsList:function(e){t("log","v: ",e," at pages/home/home.nvue:96");var r=e.navigator_url.split("?")[1];uni.navigateTo({url:"/pagesSub/list/list?"+r})}}};e.default=s}).call(this,r(12).default)},5:function(t,e,r){"use strict";var n=r(2);Object.defineProperty(e,"__esModule",{value:!0}),e.Store=void 0,e.createLogger=$,e.default=e.createNamespacedHelpers=void 0,e.install=w,e.mapState=e.mapMutations=e.mapGetters=e.mapActions=void 0;var o=n(r(3));var i=("undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).__VUE_DEVTOOLS_GLOBAL_HOOK__;function a(t,e){if(void 0===e&&(e=[]),null===t||"object"!==(0,o.default)(t))return t;var r,n=(r=function(e){return e.original===t},e.filter(r)[0]);if(n)return n.copy;var i=Array.isArray(t)?[]:{};return e.push({original:t,copy:i}),Object.keys(t).forEach((function(r){i[r]=a(t[r],e)})),i}function s(t,e){Object.keys(t).forEach((function(r){return e(t[r],r)}))}function u(t){return null!==t&&"object"===(0,o.default)(t)}var c=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var r=t.state;this.state=("function"==typeof r?r():r)||{}},l={namespaced:{configurable:!0}};l.namespaced.get=function(){return!!this._rawModule.namespaced},c.prototype.addChild=function(t,e){this._children[t]=e},c.prototype.removeChild=function(t){delete this._children[t]},c.prototype.getChild=function(t){return this._children[t]},c.prototype.hasChild=function(t){return t in this._children},c.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},c.prototype.forEachChild=function(t){s(this._children,t)},c.prototype.forEachGetter=function(t){this._rawModule.getters&&s(this._rawModule.getters,t)},c.prototype.forEachAction=function(t){this._rawModule.actions&&s(this._rawModule.actions,t)},c.prototype.forEachMutation=function(t){this._rawModule.mutations&&s(this._rawModule.mutations,t)},Object.defineProperties(c.prototype,l);var f=function(t){this.register([],t,!1)};f.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},f.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,r){return t+((e=e.getChild(r)).namespaced?r+"/":"")}),"")},f.prototype.update=function(t){!function t(e,r,n){0;if(r.update(n),n.modules)for(var o in n.modules){if(!r.getChild(o))return void 0;t(e.concat(o),r.getChild(o),n.modules[o])}}([],this.root,t)},f.prototype.register=function(t,e,r){var n=this;void 0===r&&(r=!0);var o=new c(e,r);0===t.length?this.root=o:this.get(t.slice(0,-1)).addChild(t[t.length-1],o);e.modules&&s(e.modules,(function(e,o){n.register(t.concat(o),e,r)}))},f.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),r=t[t.length-1],n=e.getChild(r);n&&n.runtime&&e.removeChild(r)},f.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),r=t[t.length-1];return!!e&&e.hasChild(r)};var p;var d=function(t){var e=this;void 0===t&&(t={}),!p&&"undefined"!=typeof window&&window.Vue&&w(window.Vue);var r=t.plugins;void 0===r&&(r=[]);var n=t.strict;void 0===n&&(n=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new f(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new p,this._makeLocalGettersCache=Object.create(null);var o=this,a=this.dispatch,s=this.commit;this.dispatch=function(t,e){return a.call(o,t,e)},this.commit=function(t,e,r){return s.call(o,t,e,r)},this.strict=n;var u=this._modules.root.state;y(this,u,[],this._modules.root),g(this,u),r.forEach((function(t){return t(e)})),(void 0!==t.devtools?t.devtools:p.config.devtools)&&function(t){i&&(t._devtoolHook=i,i.emit("vuex:init",t),i.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){i.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){i.emit("vuex:action",t,e)}),{prepend:!0}))}(this)};e.Store=d;var h={state:{configurable:!0}};function m(t,e,r){return e.indexOf(t)<0&&(r&&r.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function v(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var r=t.state;y(t,r,[],t._modules.root,!0),g(t,r,e)}function g(t,e,r){var n=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var o=t._wrappedGetters,i={};s(o,(function(e,r){i[r]=function(t,e){return function(){return t(e)}}(e,t),Object.defineProperty(t.getters,r,{get:function(){return t._vm[r]},enumerable:!0})}));var a=p.config.silent;p.config.silent=!0,t._vm=new p({data:{$$state:e},computed:i}),p.config.silent=a,t.strict&&function(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}(t),n&&(r&&t._withCommit((function(){n._data.$$state=null})),p.nextTick((function(){return n.$destroy()})))}function y(t,e,r,n,o){var i=!r.length,a=t._modules.getNamespace(r);if(n.namespaced&&(t._modulesNamespaceMap[a],t._modulesNamespaceMap[a]=n),!i&&!o){var s=_(e,r.slice(0,-1)),u=r[r.length-1];t._withCommit((function(){p.set(s,u,n.state)}))}var c=n.context=function(t,e,r){var n=""===e,o={dispatch:n?t.dispatch:function(r,n,o){var i=b(r,n,o),a=i.payload,s=i.options,u=i.type;return s&&s.root||(u=e+u),t.dispatch(u,a)},commit:n?t.commit:function(r,n,o){var i=b(r,n,o),a=i.payload,s=i.options,u=i.type;s&&s.root||(u=e+u),t.commit(u,a,s)}};return Object.defineProperties(o,{getters:{get:n?function(){return t.getters}:function(){return function(t,e){if(!t._makeLocalGettersCache[e]){var r={},n=e.length;Object.keys(t.getters).forEach((function(o){if(o.slice(0,n)===e){var i=o.slice(n);Object.defineProperty(r,i,{get:function(){return t.getters[o]},enumerable:!0})}})),t._makeLocalGettersCache[e]=r}return t._makeLocalGettersCache[e]}(t,e)}},state:{get:function(){return _(t.state,r)}}}),o}(t,a,r);n.forEachMutation((function(e,r){!function(t,e,r,n){(t._mutations[e]||(t._mutations[e]=[])).push((function(e){r.call(t,n.state,e)}))}(t,a+r,e,c)})),n.forEachAction((function(e,r){var n=e.root?r:a+r,o=e.handler||e;!function(t,e,r,n){(t._actions[e]||(t._actions[e]=[])).push((function(e){var o,i=r.call(t,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:t.getters,rootState:t.state},e);return(o=i)&&"function"==typeof o.then||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}(t,n,o,c)})),n.forEachGetter((function(e,r){!function(t,e,r,n){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return r(n.state,n.getters,t.state,t.getters)}}(t,a+r,e,c)})),n.forEachChild((function(n,i){y(t,e,r.concat(i),n,o)}))}function _(t,e){return e.reduce((function(t,e){return t[e]}),t)}function b(t,e,r){return u(t)&&t.type&&(r=e,e=t,t=t.type),{type:t,payload:e,options:r}}function w(t){p&&t===p||function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:r});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,e.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}(p=t)}h.state.get=function(){return this._vm._data.$$state},h.state.set=function(t){0},d.prototype.commit=function(t,e,r){var n=this,o=b(t,e,r),i=o.type,a=o.payload,s=(o.options,{type:i,payload:a}),u=this._mutations[i];u&&(this._withCommit((function(){u.forEach((function(t){t(a)}))})),this._subscribers.slice().forEach((function(t){return t(s,n.state)})))},d.prototype.dispatch=function(t,e){var r=this,n=b(t,e),o=n.type,i=n.payload,a={type:o,payload:i},s=this._actions[o];if(s){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(a,r.state)}))}catch(t){0}var u=s.length>1?Promise.all(s.map((function(t){return t(i)}))):s[0](i);return new Promise((function(t,e){u.then((function(e){try{r._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(a,r.state)}))}catch(t){0}t(e)}),(function(t){try{r._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(a,r.state,t)}))}catch(t){0}e(t)}))}))}},d.prototype.subscribe=function(t,e){return m(t,this._subscribers,e)},d.prototype.subscribeAction=function(t,e){return m("function"==typeof t?{before:t}:t,this._actionSubscribers,e)},d.prototype.watch=function(t,e,r){var n=this;return this._watcherVM.$watch((function(){return t(n.state,n.getters)}),e,r)},d.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},d.prototype.registerModule=function(t,e,r){void 0===r&&(r={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),y(this,this.state,t,this._modules.get(t),r.preserveState),g(this,this.state)},d.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var r=_(e.state,t.slice(0,-1));p.delete(r,t[t.length-1])})),v(this)},d.prototype.hasModule=function(t){return"string"==typeof t&&(t=[t]),this._modules.isRegistered(t)},d.prototype.hotUpdate=function(t){this._modules.update(t),v(this,!0)},d.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(d.prototype,h);var x=M((function(t,e){var r={};return A(e).forEach((function(e){var n=e.key,o=e.val;r[n]=function(){var e=this.$store.state,r=this.$store.getters;if(t){var n=E(this.$store,"mapState",t);if(!n)return;e=n.context.state,r=n.context.getters}return"function"==typeof o?o.call(this,e,r):e[o]},r[n].vuex=!0})),r}));e.mapState=x;var O=M((function(t,e){var r={};return A(e).forEach((function(e){var n=e.key,o=e.val;r[n]=function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];var n=this.$store.commit;if(t){var i=E(this.$store,"mapMutations",t);if(!i)return;n=i.context.commit}return"function"==typeof o?o.apply(this,[n].concat(e)):n.apply(this.$store,[o].concat(e))}})),r}));e.mapMutations=O;var C=M((function(t,e){var r={};return A(e).forEach((function(e){var n=e.key,o=e.val;o=t+o,r[n]=function(){if(!t||E(this.$store,"mapGetters",t))return this.$store.getters[o]},r[n].vuex=!0})),r}));e.mapGetters=C;var S=M((function(t,e){var r={};return A(e).forEach((function(e){var n=e.key,o=e.val;r[n]=function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];var n=this.$store.dispatch;if(t){var i=E(this.$store,"mapActions",t);if(!i)return;n=i.context.dispatch}return"function"==typeof o?o.apply(this,[n].concat(e)):n.apply(this.$store,[o].concat(e))}})),r}));e.mapActions=S;var j=function(t){return{mapState:x.bind(null,t),mapGetters:C.bind(null,t),mapMutations:O.bind(null,t),mapActions:S.bind(null,t)}};function A(t){return function(t){return Array.isArray(t)||u(t)}(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function M(t){return function(e,r){return"string"!=typeof e?(r=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,r)}}function E(t,e,r){return t._modulesNamespaceMap[r]}function $(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var r=t.filter;void 0===r&&(r=function(t,e,r){return!0});var n=t.transformer;void 0===n&&(n=function(t){return t});var o=t.mutationTransformer;void 0===o&&(o=function(t){return t});var i=t.actionFilter;void 0===i&&(i=function(t,e){return!0});var s=t.actionTransformer;void 0===s&&(s=function(t){return t});var u=t.logMutations;void 0===u&&(u=!0);var c=t.logActions;void 0===c&&(c=!0);var l=t.logger;return void 0===l&&(l=console),function(t){var f=a(t.state);void 0!==l&&(u&&t.subscribe((function(t,i){var s=a(i);if(r(t,f,s)){var u=L(),c=o(t),p="mutation "+t.type+u;k(l,p,e),l.log("%c prev state","color: #9E9E9E; font-weight: bold",n(f)),l.log("%c mutation","color: #03A9F4; font-weight: bold",c),l.log("%c next state","color: #4CAF50; font-weight: bold",n(s)),P(l)}f=s})),c&&t.subscribeAction((function(t,r){if(i(t,r)){var n=L(),o=s(t),a="action "+t.type+n;k(l,a,e),l.log("%c action","color: #03A9F4; font-weight: bold",o),P(l)}})))}}function k(t,e,r){var n=r?t.groupCollapsed:t.group;try{n.call(t,e)}catch(r){t.log(e)}}function P(t){try{t.groupEnd()}catch(e){t.log("\u2014\u2014 log end \u2014\u2014")}}function L(){var t=new Date;return" @ "+G(t.getHours(),2)+":"+G(t.getMinutes(),2)+":"+G(t.getSeconds(),2)+"."+G(t.getMilliseconds(),3)}function G(t,e){return r="0",n=e-t.toString().length,new Array(n+1).join(r)+t;var r,n}e.createNamespacedHelpers=j;var N={Store:d,install:w,version:"3.6.2",mapState:x,mapMutations:O,mapGetters:C,mapActions:S,createNamespacedHelpers:j,createLogger:$};e.default=N},50:function(t,e){t.exports={".nav-list":{"":{display:["flex",0,0,2],justifyContent:["space-around",0,0,2],flexDirection:["row",0,0,2],marginTop:["15",0,0,2],marginRight:[0,0,0,2],marginBottom:["15",0,0,2],marginLeft:[0,0,0,2]}},".nav-img":{".nav-list ":{width:["128rpx",0,1,3],height:["140rpx",0,1,3]}},".floor-list":{"":{width:["750rpx",0,0,4]}},".floor-item":{".floor-list ":{width:["750rpx",0,1,5]}},".floor-title":{".floor-list .floor-item ":{display:["flex",0,2,6],flexDirection:["row",0,2,6],height:["60rpx",0,2,6],width:[100,0,2,6],marginTop:["15rpx",0,2,6]}},".floor-img-box":{"":{display:["flex",0,0,8],flexDirection:["row",0,0,8],width:["750rpx",0,0,8],overflow:["hidden",0,0,8],paddingLeft:["10rpx",0,0,8]}},".left-img-box":{".floor-img-box ":{width:["232rpx",0,1,9]}},".right-img-box":{".floor-img-box ":{display:["flex",0,1,11],flexDirection:["row",0,1,11],flexWrap:["wrap",0,1,11],paddingLeft:["10rpx",0,1,11],width:["500rpx",0,1,11]}},".right-img-item":{".floor-img-box .right-img-box ":{width:["233rpx",0,2,12],height:["190rpx",0,2,12],marginBottom:["10rpx",0,2,12],marginRight:["10rpx",0,2,12]}},"@VERSION":2}},57:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[r("view",[r("swiper",{attrs:{circular:!0,indicatorDots:!0,autoplay:!0,interval:3e3,duration:500}},t._l(t.swiperList,(function(e,n){return r("swiper-item",{key:n,attrs:{itemId:n},on:{click:function(r){t.handleSwiperClick(e)}}},[r("view",{staticClass:["swiper-item"]},[r("u-image",{attrs:{src:e.image_src}})],1)])})),1),r("view",{staticClass:["nav-list"]},t._l(t.navList,(function(e,n){return r("view",{key:n,staticClass:["nav-item"],on:{click:function(r){t.navClickHandler(e)}}},[r("u-image",{staticClass:["nav-img"],attrs:{src:e.image_src}})],1)})),0),r("view",{staticClass:["floor-list"]},t._l(t.floorList,(function(e,n){return r("view",{key:n,staticClass:["floor-item"]},[r("view",{staticClass:["floor-title"]},[r("u-image",{attrs:{src:e.floor_title.image_src}})],1),r("view",{staticClass:["floor-img-box"]},[r("view",{staticClass:["left-img-box"],on:{click:function(r){t.handleToGoodsList(e.product_list[0])}}},[r("u-image",{attrs:{src:e.product_list[0].image_src,mode:"widthFix"}})],1),r("view",{staticClass:["right-img-box"]},t._l(e.product_list,(function(e,n){return 0!==n?r("view",{key:n,staticClass:["right-img-item"],on:{click:function(r){t.handleToGoodsList(e)}}},[r("u-image",{attrs:{src:e.image_src,mode:"widthFix"}})],1):t._e()})),0)])])})),0)],1)])},o=[]},6:function(t,e,r){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(r(7).default,Vue.prototype.__$appStyle__)},7:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e.default=o.a},75:function(t,e,r){"use strict";r.r(e);var n=r(50),o=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e.default=o.a},8:function(t,e){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(r){return e.resolve(t()).then((function(){return r}))}),(function(r){return e.resolve(t()).then((function(){throw r}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var r=uni.requireGlobal();ArrayBuffer=r.ArrayBuffer,Int8Array=r.Int8Array,Uint8Array=r.Uint8Array,Uint8ClampedArray=r.Uint8ClampedArray,Int16Array=r.Int16Array,Uint16Array=r.Uint16Array,Int32Array=r.Int32Array,Uint32Array=r.Uint32Array,Float32Array=r.Float32Array,Float64Array=r.Float64Array,BigInt64Array=r.BigInt64Array,BigUint64Array=r.BigUint64Array}},9:function(t,e,r){"use strict";var n=r(2);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r(4));function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var a={computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){(0,o.default)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},(0,r(5).mapGetters)("m_cart",["total"])),onShow:function(){this.setBadge()},methods:{setBadge:function(){uni.setTabBarBadge({index:2,text:this.total+""})}}};e.default=a}});