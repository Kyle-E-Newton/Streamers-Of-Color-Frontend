(this.webpackJsonpstream_promoter=this.webpackJsonpstream_promoter||[]).push([[2],{63:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(0)),o=r(20);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d="https://connect.facebook.net/en_US/sdk.js",h=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(v,e);var t,r,u,a,h=(t=v,function(){var e,r=y(t);if(p()){var n=y(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return s(this,e)});function v(){var e;i(this,v);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return b(f(e=h.call.apply(h,[this].concat(r))),"callPlayer",o.callPlayer),b(f(e),"playerID",e.props.config.playerId||"".concat("facebook-player-").concat((0,o.randomString)())),b(f(e),"mute",(function(){e.callPlayer("mute")})),b(f(e),"unmute",(function(){e.callPlayer("unmute")})),e}return r=v,(u=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e,t){var r=this;t?(0,o.getSDK)(d,"FB","fbAsyncInit").then((function(e){return e.XFBML.parse()})):(0,o.getSDK)(d,"FB","fbAsyncInit").then((function(e){e.init({appId:r.props.config.appId,xfbml:!0,version:r.props.config.version}),e.Event.subscribe("xfbml.render",(function(e){r.props.onLoaded()})),e.Event.subscribe("xfbml.ready",(function(e){"video"===e.type&&e.id===r.playerID&&(r.player=e.instance,r.player.subscribe("startedPlaying",r.props.onPlay),r.player.subscribe("paused",r.props.onPause),r.player.subscribe("finishedPlaying",r.props.onEnded),r.player.subscribe("startedBuffering",r.props.onBuffer),r.player.subscribe("finishedBuffering",r.props.onBufferEnd),r.player.subscribe("error",r.props.onError),r.props.muted||r.callPlayer("unmute"),r.props.onReady(),document.getElementById(r.playerID).querySelector("iframe").style.visibility="visible")}))}))}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){this.callPlayer("seek",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentPosition")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){return n.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID,className:"fb-video","data-href":this.props.url,"data-autoplay":this.props.playing?"true":"false","data-allowfullscreen":"true","data-controls":this.props.controls?"true":"false"})}}])&&l(r.prototype,u),a&&l(r,a),v}(n.Component);t.default=h,b(h,"displayName","Facebook"),b(h,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerFacebook.e430a26b.chunk.js.map