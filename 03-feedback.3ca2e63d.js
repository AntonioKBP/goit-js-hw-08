function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,p=Math.min,y=function(){return l.Date.now()};function v(e,t,n){var i,r,o,u,f,a,c=0,l=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(h,t),l?g(e):u}function T(e){var n=e-a;return void 0===a||n>=t||n<0||d&&e-c>=o}function h(){var e=y();if(T(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-a);return d?p(n,o-(e-c)):n}(e))}function w(e){return f=void 0,v&&i?g(e):(i=r=void 0,u)}function x(){var e=y(),n=T(e);if(i=arguments,r=this,a=e,n){if(void 0===f)return j(a);if(d)return f=setTimeout(h,t),g(a)}return void 0===f&&(f=setTimeout(h,t)),u}return t=b(t)||0,m(n)&&(l=!!n.leading,o=(d="maxWait"in n)?s(b(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=a=r=f=void 0},x.flush=function(){return void 0===f?u:w(y())},x}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return m(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:i,maxWait:t,trailing:r})};const g=document.querySelector(".feedback-form");document.querySelector('[type="email"]'),document.querySelector('[name="message"]'),document.querySelector('[type="submit"]');g.addEventListener("submit",(e=>{e.preventDefault()})),g.addEventListener("input",e(t)((function(e){}),500)),populateTextareaOutput();
//# sourceMappingURL=03-feedback.3ca2e63d.js.map
