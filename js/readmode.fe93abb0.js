(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["readmode"],{"0da0":function(t,e,n){},"43d8":function(t,e,n){},"5b9e":function(t,e,n){"use strict";var r=n("0da0"),i=n.n(r);i.a},7703:function(t,e,n){"use strict";var r=n("43d8"),i=n.n(r);i.a},e80d:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("section",[r("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[r("a",{attrs:{href:"/"}},[r("img",{attrs:{src:n("cf05"),alt:"more just media",height:"200"}})]),r("p",[r("a",{attrs:{href:t.url}},[t._v(t._s(t.url))])]),t.isLoading?r("h1",[t._v("Loading...")]):t._e(),t.error?r("h2",{attrs:{red:""}},[t._v(t._s(t.error))]):r("Article",{attrs:{article:t.article}})],1)],1)])},i=[],a=n("a34a"),o=n.n(a),s=n("19f6"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[t.isShowingTip?n("Tip",{staticClass:"tip",attrs:{text:t.tip}}):t._e(),n("article",{staticClass:"reading-mode simple-container"},[n("h1",[t._v("\n      "+t._s(t.article.title)+"\n    ")]),n("v-layout",{attrs:{"justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:""}},[n("v-img",{attrs:{src:t.article.image,"max-width":"600px"}})],1)],1),n("p"),t.isHTMLReady?n("v-container",[n("InteractiveText",{attrs:{html:t.rawHtml,callback:t.onHighlight}}),n("p",[t._v("\n        Source: "),n("a",{attrs:{href:t.article.url,target:"_blank"}},[t._v(t._s(t.article.url))])])],1):n("p",[t._v("\n      Markup is getting ready...\n      "),n("br"),n("br"),t._v("\n      "+t._s(t.article.text)+"\n    ")])],1)],1)},l=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"fixed popover"},[n("v-flex",{attrs:{xs12:"",sm4:"","offset-sm8":""}},[n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[t._v("\n          "+t._s(t.text)+"\n        ")])])],1)],1)],1)},h=[],f={props:["text"]},p=f,g=(n("5b9e"),n("2877")),d=n("6544"),v=n.n(d),m=n("b0af"),y=n("12b2"),w=n("0e8f"),x=n("a722"),_=Object(g["a"])(p,u,h,!1,null,null,null);_.options.__file="Tip.vue";var b=_.exports;v()(_,{VCard:m["a"],VCardTitle:y["a"],VFlex:w["a"],VLayout:x["a"]});var k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{domProps:{innerHTML:t._s(t.html)},on:{mouseover:t.doHighlight,click:t.onClick}})},A=[],T={props:["html","callback","highlightClass"],data:function(t){t.html,t.callback;var e=t.highlightClass;return{highlight:e||"highlight",focus:null}},methods:{onClick:function(t){var e=t.target;e===this.focus?this.undoHighlight():this.doHighlight({target:e})},doHighlight:function(t){var e=t.target,n=e.className.split(" ").includes(this.highlight);n?(this.callback(e),this.focus=e):this.undoHighlight()},undoHighlight:function(){this.callback(!1),this.focus=null}}},H=T,j=Object(g["a"])(H,k,A,!1,null,null,null);j.options.__file="InteractiveText.vue";var L=j.exports;function C(t){return M(t)||E(t)||I()}function I(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function E(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function M(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function S(t,e){return O(t)||P(t,e)||V()}function V(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function P(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done);r=!0)if(n.push(o.value),e&&n.length===e)break}catch(t){i=!0,a=t}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw a}}return n}function O(t){if(Array.isArray(t))return t}var R=function(t,e,n){return"hsla(".concat(t,", ").concat((100*e).toFixed(0),"%, 50%, ").concat((100*n).toFixed(0),")")},F=function(t){var e=t.sentiment,n=t.magnitude,r=t.offset,i=t.content,a=R(e>0?118:360,Math.abs(e)+.5,n),o="background-color: ".concat(a);return'<span\n      style="'.concat(o,'"\n      class="highlight highlight-sentiment-').concat(r,'"\n      data-type="sentiment"\n      data-content="').concat(i,'"\n      data-offset="').concat(r,'"\n      data-magnitude=').concat(n,"\n      data-sentiment=").concat(e,"\n      >").concat(i,"</span>")},$=function(t,e){return e.map(function(t){var e=t.offset,n=t.content,r=F(t);return{type:"sentiment",offset:e,html:r,content:n}})},B=function(t,e){return e.map(function(t){var e=S(t,2),n=e[0],r=e[1];return{type:"html",offset:n,html:r,content:""}})},J=function(t,e){var n=function(t,e){return t.offset-e.offset||("begin"===t.type?-1:0)||("begin"===e.type?1:0)||("end"===t.type?1:0)||("end"===e.type?-1:0)||("html"===t.type?-1:0)||("html"===e.type?1:0)||("text"===t.type?-1:0)||("text"===e.type?1:0)};e.push({type:"begin",offset:0,content:""}),e.push({type:"end",offset:t.length,content:""});var r=e.sort(n),i=r.reduce(function(e,n){var r=e.text_tokens,i=e.current_offset,a=n.offset,o=n.content,s=t.slice(i,a);return r.push({type:"text",offset:i,content:s}),console.log(i),console.log(s),console.log(n),i+=s.length+o.length,{text_tokens:r,current_offset:i}},{text_tokens:[],current_offset:0}),a=i.text_tokens;return C(e).concat(C(a)).sort(n)};function N(t){return q(t)||U(t)||G()}function G(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function U(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function q(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function z(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var a=t.apply(e,n);function o(t,e){try{var n=a[t](e),o=n.value}catch(t){return void i(t)}n.done?r(o):Promise.resolve(o).then(s,c)}function s(t){o("next",t)}function c(t){o("throw",t)}s()})}}var D={name:"Article",props:["article"],created:function(){var t=z(o.a.mark(function t(){return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),watch:{article:function(t){console.log("new value",t),t&&(this.isHTMLReady=!1,this.highlight())}},components:{InteractiveText:L,Tip:b},methods:{onHighlight:function(t){t?(this.isShowingTip=!0,this.showTip(t.dataset)):this.isShowingTip=!1},showTip:function(t){var e=t.offset,n=t.type,r=t.content,i=t.sentiment,a=t.magnitude;console.log("highlight",{offset:e,type:n,content:r,sentiment:i}),this.tip='\n        "'.concat(r,'"\n\n        Google API shows sentiment of ').concat(i," with ").concat(a,".\n\n        Pay attention to strong emotional message text sends.\n        Usually, it can be used to manipulate your opinion.\n      ")},highlight:function(){var t=this.article,e=t.title,n=t.text,r=t.html,i=t.entities;if(e){var a=B(n,r),o=i.filter(function(t){return t.salience>.01}).flatMap(function(t){return t.mentions}).filter(function(t){return 0!=t.magnitude}),s=$(n,o);console.log(n),this.highlights=N(s).concat(N(a));var c=J(n,this.highlights);console.log(c);var l=c.map(function(t){return t.html||t.content}).join("");console.log(l),l&&(this.rawHtml=l,this.isHTMLReady=!0)}}},data:function(t){var e=t.article,n=e.url,r=e.title,i=e.text,a=e.html,o=e.entities;return{url:n,title:r,text:i,html:a,entities:o,isShowingTip:!1,tip:"",isHTMLReady:!1,isAIReady:!1,rawHtml:"",highlights:[]}}},K=D,Q=(n("7703"),n("a523")),W=n("adda"),X=Object(g["a"])(K,c,l,!1,null,null,null);X.options.__file="Article.vue";var Y=X.exports;function Z(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var a=t.apply(e,n);function o(t,e){try{var n=a[t](e),o=n.value}catch(t){return void i(t)}n.done?r(o):Promise.resolve(o).then(s,c)}function s(t){o("next",t)}function c(t){o("throw",t)}s()})}}v()(X,{VContainer:Q["a"],VFlex:w["a"],VImg:W["a"],VLayout:x["a"]});var tt={name:"ReadMode",props:["url"],created:function(){var t=Z(o.a.mark(function t(){var e;return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=this.url,this.loadArticle(e);case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),data:function(t){t.url;return{isLoading:!0,error:"",article:{}}},watch:{url:function(t){this.isLoading=!0,this.error=!1,this.loadArticle(t)}},methods:{loadArticle:function(){var t=Z(o.a.mark(function t(e){var n,r,i,a,c,l,u;return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s["a"].analyse(e);case 3:if(n=t.sent,console.log(n),r=n.post,i=n.html,a=n.entities,r){t.next=8;break}throw new Error("Bad API response: No post data");case 8:if(c=r.title,l=r.text,u=r.image,l){t.next=11;break}throw new Error("Bad API response: Empty text");case 11:this.article={url:e,title:c,text:l,html:i,image:u,entities:a},console.log("this.article",this.article),t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](0),this.error=t.t0.message,console.log("err",t.t0.message);case 19:return t.prev=19,this.isLoading=!1,t.finish(19);case 22:case"end":return t.stop()}},t,this,[[0,15,19,22]])}));return function(e){return t.apply(this,arguments)}}()},components:{Article:Y}},et=tt,nt=n("549c"),rt=Object(g["a"])(et,r,i,!1,null,null,null);rt.options.__file="ReadMode.vue";e["default"]=rt.exports;v()(rt,{VContent:nt["a"],VLayout:x["a"]})}}]);
//# sourceMappingURL=readmode.fe93abb0.js.map