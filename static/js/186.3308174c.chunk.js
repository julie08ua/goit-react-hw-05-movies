"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(t,r,n){n.r(r);var e=n(861),a=n(439),u=n(757),c=n.n(u),s=n(483),i=n(791),o=n(689),p=n(635),f=n(184);r.default=function(){var t=(0,i.useState)([]),r=(0,a.Z)(t,2),n=r[0],u=r[1],v=(0,i.useState)(null),h=(0,a.Z)(v,2),d=h[0],l=h[1],x=(0,i.useState)(!1),m=(0,a.Z)(x,2),w=m[0],Z=m[1],k=(0,o.UO)().movieId;return(0,i.useEffect)((function(){var t=function(){var t=(0,e.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,Z(!0),t.next=4,(0,p.tx)(k);case 4:r=t.sent,u(r.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),l(t.t0.message);case 11:return t.prev=11,Z(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[k]),(0,f.jsxs)(f.Fragment,{children:[w&&(0,f.jsx)(s.a,{}),d&&!w&&(0,f.jsxs)("p",{children:["Error: ",d]}),(0,f.jsx)("ul",{children:n.length>0?n.map((function(t){var r=t.author,n=t.content,e=t.id;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h4",{children:["Author: ",r]}),(0,f.jsx)("p",{children:n})]},e)})):(0,f.jsx)("p",{children:"This movie has no reviews:("})})]})}},635:function(t,r,n){n.d(r,{Df:function(){return i},M1:function(){return f},Pt:function(){return o},TP:function(){return p},tx:function(){return v}});var e=n(861),a=n(757),u=n.n(a),c=n(243),s="https://api.themoviedb.org/3/";c.Z.defaults.params={api_key:"10e9185665d086f70239d7bfb45d8306"};var i=function(){var t=(0,e.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(s,"trending/movie/day?"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(s,"search/movie?query=").concat(r));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(s,"movie/").concat(r));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(s,"movie/").concat(r,"/credits"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(s,"movie/").concat(r,"/reviews"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.3308174c.chunk.js.map