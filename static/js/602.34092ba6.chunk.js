"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[602],{154:function(n,e,t){t.d(e,{E2:function(){return h},Fg:function(){return f},MJ:function(){return l},eS:function(){return v},xM:function(){return d}});var r,a,c,u,o,s=t(168),i=t(87),p=t(444),d=p.ZP.div(r||(r=(0,s.Z)(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n\n  height: 50px;\n"]))),f=(0,p.ZP)(i.rU)(a||(a=(0,s.Z)(["\n  color: black;\n  text-decoration: none;\n  padding-top: 10px;\n  padding-bottom: 10px;\n\n  transition: background-color 0.3s ease;\n\n  &:hover,\n  &:focus {\n    background-color: #e2e2e2;\n  }\n"]))),l=p.ZP.div(c||(c=(0,s.Z)(["\n  padding: 0 10px 0 10px;\n"]))),v=p.ZP.div(u||(u=(0,s.Z)(["\n  display: flex;\n"]))),h=p.ZP.button(o||(o=(0,s.Z)(["\n  padding: 5px 10px;\n  border-radius: 5px;\n  background-color: transparent;\n\n  transition: transform 250ms ease-in-out 0s;\n\n  &:hover {\n    box-shadow: rgb(198, 200, 204) 5px 5px 5px 0px;\n  }\n"])))},602:function(n,e,t){t.r(e);var r=t(861),a=t(439),c=t(757),u=t.n(c),o=t(791),s=t(689),i=t(87),p=t(902),d=t(154),f=t(184);e.default=function(){var n,e,t=(0,s.UO)(),c=(0,o.useState)(""),l=(0,a.Z)(c,2),v=l[0],h=l[1],x=(0,o.useState)(""),g=(0,a.Z)(x,2),m=g[0],Z=g[1],w=(0,o.useState)(""),b=(0,a.Z)(w,2),k=b[0],j=b[1],y=(0,o.useState)(""),S=(0,a.Z)(y,2),_=S[0],U=S[1],P=(0,o.useState)([]),F=(0,a.Z)(P,2),M=F[0],T=F[1],C=(0,s.TH)(),E=(0,o.useRef)(null!==(n=null===(e=C.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");console.log(C),console.log(E),(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.TP)(t.movieId);case 3:e=n.sent,h(e.title),Z(e.vote_average),j(e.overview),U(e.poster_path),T(e.genres),n.next=13;break;case 11:n.prev=11,n.t0=n.catch(0);case 13:return n.prev=13,n.finish(13);case 15:case"end":return n.stop()}}),n,null,[[0,11,13,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[t.movieId]);var R=M.map((function(n){return n.name})).join(", ");return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i.rU,{to:E.current,children:(0,f.jsx)(d.E2,{type:"button",children:"\u041d\u0430\u0437\u0430\u0434"})}),(0,f.jsx)("h2",{children:v}),(0,f.jsxs)("p",{children:["User Score: ",m]}),(0,f.jsxs)(d.eS,{children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(_),alt:"",width:"300",height:"400"}),(0,f.jsxs)(d.MJ,{children:[(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:k}),(0,f.jsx)("h4",{children:"Genres"}),(0,f.jsx)("p",{children:R})]})]}),(0,f.jsxs)(d.xM,{children:[(0,f.jsx)(d.Fg,{to:"cast",children:"CasT"}),(0,f.jsx)(d.Fg,{to:"reviews",children:"Reviews"})]}),(0,f.jsx)(o.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading..."}),children:(0,f.jsx)(s.j3,{})})]})}},902:function(n,e,t){t.d(e,{Hg:function(){return s},TP:function(){return p},tx:function(){return f},z1:function(){return i},zv:function(){return d}});var r=t(861),a=t(757),c=t.n(a),u=t(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="093eced159a193fa46a358712eff484b",s=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(o,"&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),n.next=3,u.Z.get("search/movie?api_key=".concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=602.34092ba6.chunk.js.map