"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[781],{781:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(861),a=n(439),u=n(757),c=n.n(u),o=n(791),s=n(87),i=n(689),p=n(902),f=n(184),l=function(){var e,t=(0,s.lr)(),n=(0,a.Z)(t,2),u=n[0],l=n[1],v=null!==(e=u.get("query"))&&void 0!==e?e:"",d=(0,o.useState)([]),h=(0,a.Z)(d,2),g=h[0],m=h[1],x=(0,i.TH)();(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.z1)(v);case 3:t=e.sent,m(t.results),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:return e.prev=9,e.finish(9);case 11:case"end":return e.stop()}}),e,null,[[0,7,9,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[v]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.query.value;l({query:t})},children:[(0,f.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,name:"query",placeholder:"Search images and photos"}),(0,f.jsx)("button",{type:"submit",children:"Search"})]}),(0,f.jsx)("ul",{children:g.map((function(e){return(0,f.jsx)("li",{children:(0,f.jsx)(s.rU,{to:"".concat(e.id),state:{from:x},children:e.title})},e.id)}))})]})},v=function(){return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(l,{})})}},902:function(e,t,n){n.d(t,{Hg:function(){return s},TP:function(){return p},tx:function(){return l},z1:function(){return i},zv:function(){return f}});var r=n(861),a=n(757),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="093eced159a193fa46a358712eff484b",s=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(o,"&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,c.Z.get("search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 3:return n=e.sent,console.log(n.data.results),e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=781.d76673a0.chunk.js.map