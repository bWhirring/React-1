parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mStY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./jreact"));function e(t){return t&&t.__esModule?t:{default:t}}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){if(console.log(t),t){if("string"==typeof t)return document.createTextNode(t);if(Array.isArray(t)){var e=document.createDocumentFragment();return t.forEach(function(t){var n=r(t);e.appendChild(n)}),e}if("object"===n(t)){if("function"==typeof t.tag){var c=a(t.tag,t.attrs);return u(c),c.$root}var f=document.createElement(t.tag);return i(f,t.attrs),t.children.forEach(function(t){return o(t,f)}),f}}}function o(t,e){if(t){var n=r(t);return e.appendChild(n)}}function a(e,n){var r;return e.prototype instanceof t.default.Component?r=new e(n):((r=new t.default.Component(n)).constructor=e,r.render=function(){return this.constructor(n)}),r}function u(t){var e=t.render(),n=d(t.$root,e);t.$root=n,t.$root._component=t}function c(t,e){return f(null,t,e)}function i(t,e,n){e.startsWith("on")?t[e.toLocaleLowerCase()]=n:"style"===e?Object.assign(t.style,n):t[e]=n}function f(t,e,n){var r=d(t,e);return n&&r&&r.parentNode!==n&&n.appendChild(r),r}function d(t,e){if(!e)return m(t);var r=t;return"string"==typeof e||"number"==typeof e?(r&&3===r.nodeType?r.textContent!==e&&(r.textContent=e):r=document.createTextNode(e),r):"object"===n(e)&&"function"==typeof e.tag?r=l(t,e):(t||(r=document.createElement(e.tag)),t&&t.nodeName.toLowerCase()!==e.tag.toLowerCase()&&(r=document.createElement(e.tag),t.childNodes.forEach(function(t){return r.appendChild(t)}),v(r,t)),y(r,e),p(r,e.children),r)}function l(t,e){var n=t?t._component:null;return n&&n.constructor===e.tag?s(n,e.attrs):s(n=a(e.tag,e.attrs),e.attrs),n.$root}function s(t,e){t.props=e,u(t)}function p(t,e){var n,r,o=t.childNodes,a={},u=!0,c=!1,i=void 0;try{for(var f,l=o[Symbol.iterator]();!(u=(f=l.next()).done);u=!0){var s=f.value;s.key&&(a[s.key]=s)}}catch(m){c=!0,i=m}finally{try{u||null==l.return||l.return()}finally{if(c)throw i}}for(var p=Math.max(o.length,e.length),y=0;y<p;y++)(r=(n=e[y]).key&&a[n.key]?d(a[n.key],n):d(o[y],n)).parentNode!==t&&t.appendChild(r),h(t,r,y)}function y(t,e){for(var n={},r=e.attrs,o=0;o<t.attributes.length;o++){var a=t.attributes[o];n[a.name]=a.value}for(var u in n)u in r||i(t,u,void 0);for(var u in r)console.log(u),n[u]!==r[u]&&i(t,u,r[u])}function m(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function v(t,e){dom&&dom.parentNode&&dom.parentNode.replaceChild(t,e)}function h(t,e,n){t.childNodes[n]!==e&&t.childNodes[n].insertAdjacentElement("beforebegin",e)}var g={render:c,setAttribute:i,renderComponent:u};exports.default=g;
},{"./jreact":"AbXW"}],"AbXW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./jreact-dom"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function o(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return{tag:e,attrs:t,children:r,key:t&&t.key?t.key:null}}var u=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n(this,t),this.state={},this.props=e}return a(t,[{key:"setState",value:function(t){Object.assign(this.state,t),e.default.renderComponent(this)}}]),t}(),i={createElement:o,Component:u};exports.default=i;
},{"./jreact-dom":"mStY"}],"Focm":[function(require,module,exports) {
"use strict";var e=n(require("./lib/jreact.js")),t=n(require("./lib/jreact-dom.js"));function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function l(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?i(e):t}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(t){function n(e){var t;return o(this,n),(t=l(this,c(n).call(this,e))).state={name:"小讲堂",courses:["数学","语文","英语"],styleObj:{color:"red",fontWeight:"bold"}},t}return f(n,e.default.Component),a(n,[{key:"render",value:function(){return e.default.createElement("div",{className:"container"},e.default.createElement("h1",null,"欢迎到",e.default.createElement("span",{className:"name",style:this.state.styleObj},this.state.name),"来学习"),e.default.createElement("p",null,"aaa"),e.default.createElement("p",null,"bbb"),e.default.createElement("div",{className:"action"},e.default.createElement("button",{onClick:this.modifyName.bind(this)},"修改名字"),e.default.createElement("button",{onClick:this.setStyle.bind(this)},"样式")))}},{key:"modifyName",value:function(){var e=window.prompt("输入标题","小讲堂");this.setState({name:e})}},{key:"setStyle",value:function(){this.setState({styleObj:{color:"blue"}})}}]),n}();window.JreactDOM=t.default,t.default.render(e.default.createElement(y,null),document.querySelector("#app"));
},{"./lib/jreact.js":"AbXW","./lib/jreact-dom.js":"mStY"}]},{},["Focm"], null)
//# sourceMappingURL=/chapter-3.1fd996f3.js.map