"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[389],{389:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r,a=t(861),c=t(439),u=t(757),s=t.n(u),i=t(791),o=t(689),p=t(87),f=t(902),l=t(168),v=t(444).ZP.div(r||(r=(0,l.Z)(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n\n  height: 50px;\n"]))),d=t(184),h=function(){var e,n,t=(0,o.UO)(),r=(0,i.useState)(""),u=(0,c.Z)(r,2),l=u[0],h=u[1],g=(0,i.useState)(""),x=(0,c.Z)(g,2),m=x[0],w=x[1],k=(0,i.useState)(""),Z=(0,c.Z)(k,2),j=Z[0],b=Z[1],y=(0,i.useState)(""),_=(0,c.Z)(y,2),S=_[0],U=_[1],T=(0,i.useState)([]),C=(0,c.Z)(T,2),P=C[0],R=C[1],z=(0,o.TH)(),H=(0,i.useRef)(null!==(e=null===(n=z.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");console.log(z),console.log(H),(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.TP)(t.movieId);case 3:n=e.sent,h(n.title),w(n.vote_average),b(n.overview),U(n.poster_path),R(n.genres),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:return e.prev=13,e.finish(13);case 15:case"end":return e.stop()}}),e,null,[[0,11,13,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[t.movieId]);var I=P.map((function(e){return e.name})).join(", ");return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p.rU,{to:H.current,children:(0,d.jsx)("button",{type:"button",children:"\u041d\u0430\u0437\u0430\u0434"})}),(0,d.jsx)("h2",{children:l}),(0,d.jsxs)("p",{children:["User Score: ",m]}),(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(S),alt:"",width:"300"}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:j}),(0,d.jsx)("h4",{children:"Genres"}),(0,d.jsx)("p",{children:I}),(0,d.jsxs)(v,{children:[(0,d.jsx)(p.rU,{to:"cast",children:"CasT"}),(0,d.jsx)(p.rU,{to:"reviews",children:"Reviews"})]}),(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading..."}),children:(0,d.jsx)(o.j3,{})})]})}},902:function(e,n,t){t.d(n,{Hg:function(){return i},TP:function(){return p},tx:function(){return l},z1:function(){return o},zv:function(){return f}});var r=t(861),a=t(757),c=t.n(a),u=t(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="093eced159a193fa46a358712eff484b",i=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(s,"&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.next=3,u.Z.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 3:return t=e.sent,console.log(t.data.results),e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=389.141964d0.chunk.js.map