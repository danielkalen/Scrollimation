!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Scrollimation=e()}(this,function(){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function t(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}var n=function(){function r(){e(this,r);this.instances=[]}return t(r,[{key:"initRaf",value:function(){if(!this.initedRaf){this.initedRaf=!0;var i=this.instances,o=r.requestAnimationFrame;o(function t(){var e=r.scrollTop,n=r.scrollLeft;i.forEach(function(t){"requestAnimationFrame"===t.mode&&"play"===t.status&&r.animate(e,n,t)}),o(t)})}}},{key:"initScrollTracker",value:function(t){if(!this.initedScrollTracker){this.initedScrollTracker=!0;var i=this.instances;handler=function(){var e=r.scrollTop,n=r.scrollLeft;i.forEach(function(t){"onscroll"===t.mode&&"play"===t.status&&r.animate(e,n,t)})},t?window.addEventListener("scroll",r.Throttle(handler,1e3/t)):window.addEventListener("scroll",handler)}}},{key:"addInstance",value:function(t,e){this.instances.push(t),"onscroll"===t.mode?this.initScrollTracker(e):this.initRaf()}}],[{key:"animate",value:function(t,e,n){n.scrollTop=t,n.scrollLeft=e,n.step(n);var i="top"===n.direction?t:e;n.from===i&&n.start(n),n.to===i&&n.end(n)}},{key:"Throttle",value:function(e,n){var i,o,r=!1;return function t(){if(r)return i=arguments,void(o=this);e.apply(this,arguments),r=!0,setTimeout(function(){r=!1,i&&(t.apply(o,i),i=o=null)},n)}}},{key:"requestAnimationFrame",get:function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}},{key:"scrollTop",get:function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}},{key:"scrollLeft",get:function(){return window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft}}]),r}(),o=new n,r=function(){function u(t){e(this,u),this.id=Math.random().toString(36).substr(2,9),this.fps=t.fps||0,this.from=t.from||0,this.to=t.to||0,this.direction=t.direction||"top",this.mode=t.mode||"requestAnimationFrame",this.step=t.step||function(){},this.start=t.start||function(){},this.end=t.end||function(){},this.target=window.NodeList.prototype.isPrototypeOf(t.target)?[].slice.call(t.target):t.target,this.target=t.target,window.NodeList.prototype.isPrototypeOf(t.target)&&(this.target=[].slice.call(t.target)),("string"==typeof t.target||t.target instanceof String)&&(this.target=[].slice.call(document.querySelectorAll(t.target))),this.easing=t.easing||"linear",this.scrollTop=n.scrollTop,this.scrollLeft=n.scrollLeft,this.status="play",this.step(this),o.addInstance(this,this.fps)}return t(u,[{key:"calc",value:function(t,e,n){var i=this,o=(2<arguments.length&&void 0!==n||this.easing,/(^#[0-9A-F]{3}$)|(^#[0-9A-F]{4}$)|(^#[0-9A-F]{6}$)|(^#[0-9A-F]{8}$)/i);if(o.test(t)&&o.test(e)){var r=[],a=u.HexToNums(t),s=u.HexToNums(e);return a.forEach(function(t,e){r.push(u.Calculate("top"===i.direction?i.scrollTop:i.scrollLeft,i.from,i.to,t,s[e],"function"==typeof i.easing?i.easing:u.Easing[i.easing]||u.Easing.linear))}),"rgba(".concat(r[0],", ").concat(r[1],", ").concat(r[2],", ").concat(r[3],")")}return u.Calculate("top"===this.direction?this.scrollTop:this.scrollLeft,this.from,this.to,t,e,"function"==typeof this.easing?this.easing:u.Easing[this.easing]||u.Easing.linear)}},{key:"stop",value:function(){this.status="pause"}},{key:"play",value:function(){this.status="play"}},{key:"remove",value:function(){var e=this;this.status="pause",o.instances.filter(function(t){return t.id!==e.id})}}],[{key:"Calculate",value:function(t,e,n,i,o,r){var a=0<arguments.length&&void 0!==t?t:0,s=1<arguments.length&&void 0!==e?e:0,u=2<arguments.length&&void 0!==n?n:0,c=3<arguments.length&&void 0!==i?i:0;return c+((4<arguments.length&&void 0!==o?o:0)-c)*(5<arguments.length&&void 0!==r?r:function(t){return t})(((a=u<(a=a<s?s:a)?u:a)-s)/(u-s))}},{key:"HexToNums",value:function(t){var e;if(4===t.length)e=t.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i).slice(1,4).map(function(t){return 17*parseInt(t,16)});else if(5===t.length){e=t.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])$/i).slice(1,5).map(function(t){return 17*parseInt(t,16)})}else if(7===t.length){e=t.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i).slice(1,4).map(function(t){return parseInt(t,16)})}else if(9===t.length){e=t.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i).slice(1,5).map(function(t){return parseInt(t,16)})}return e[3]=e[3]/255||1,e}},{key:"Easing",get:function(){return{linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}}}]),u}();"undefined"==typeof jQuery&&"undefined"==typeof $||(("undefined"!=typeof jQuery?jQuery:$).fn.scrollimation=function(t){return t.target=this,new r(t)});return function(t){return new r(t)}});
