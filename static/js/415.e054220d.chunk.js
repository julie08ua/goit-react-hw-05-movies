"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{368:function(t,n,r){r.d(n,{O:function(){return u}});var e=r(689),a=r(87),c=r(184),u=function(t){var n=t.movies,r=(0,e.TH)(),u=function(t){return"/movies"===r.pathname?"".concat(t):"movies/".concat(t)};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("ul",{children:n.map((function(t){var n=t.id,e=t.title;return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:u(n),state:{from:r},children:e})},n)}))})})}},415:function(t,n,r){r.r(n);var e=r(861),a=r(439),c=r(757),u=r.n(c),s=r(791),i=r(368),o=r(483),f=r(635),p=r(184);n.default=function(){var t=(0,s.useState)([]),n=(0,a.Z)(t,2),r=n[0],c=n[1],v=(0,s.useState)(null),d=(0,a.Z)(v,2),h=d[0],l=d[1],m=(0,s.useState)(!1),x=(0,a.Z)(m,2),w=x[0],Z=x[1];return(0,s.useEffect)((function(){function t(){return(t=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,Z(!0),t.next=4,(0,f.Df)();case 4:n=t.sent,c(n.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),l(t.t0.message);case 11:return t.prev=11,Z(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{children:"Trending today"}),w&&(0,p.jsx)(o.a,{}),h&&(0,p.jsxs)("p",{children:["Error: ",h]}),(0,p.jsx)(i.O,{movies:r})]})}},635:function(t,n,r){r.d(n,{Df:function(){return i},M1:function(){return p},Pt:function(){return o},TP:function(){return f},tx:function(){return v}});var e=r(861),a=r(757),c=r.n(a),u=r(243),s="https://api.themoviedb.org/3/";u.Z.defaults.params={api_key:"10e9185665d086f70239d7bfb45d8306"};var i=function(){var t=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"trending/movie/day?"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"search/movie?query=").concat(n));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"movie/").concat(n));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"movie/").concat(n,"/credits"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"movie/").concat(n,"/reviews"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.e054220d.chunk.js.map