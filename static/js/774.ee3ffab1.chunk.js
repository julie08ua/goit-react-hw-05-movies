"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[774],{368:function(n,t,r){r.d(t,{O:function(){return c}});var e=r(689),a=r(87),u=r(184),c=function(n){var t=n.movies,r=(0,e.TH)(),c=function(n){return"/movies"===r.pathname?"".concat(n):"movies/".concat(n)};return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{children:t.map((function(n){var t=n.id,e=n.title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:c(t),state:{from:r},children:e})},t)}))})})}},774:function(n,t,r){r.r(t),r.d(t,{default:function(){return P}});var e,a,u,c,i=r(861),o=r(439),s=r(757),p=r.n(s),f=r(483),v=r(368),x=r(87),d=r(168),h=r(444),l=r(128),m=h.ZP.form(e||(e=(0,d.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),Z=h.ZP.input(a||(a=(0,d.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n"]))),g=(0,h.ZP)(l.G4C)(u||(u=(0,d.Z)(["\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n"]))),b=h.ZP.button(c||(c=(0,d.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 16px;\n  border: 0;\n  background-color:transparent;\n"]))),w=r(184),k=function(){var n=(0,x.lr)(),t=(0,o.Z)(n,2)[1];return(0,w.jsxs)(m,{onSubmit:function(n){n.preventDefault();var r=n.currentTarget;t({name:r.elements.query.value.trim()}),r.reset()},children:[(0,w.jsx)(b,{type:"submit",children:(0,w.jsx)(g,{})}),(0,w.jsx)(Z,{type:"text",name:"query"})]})},y=r(791),j=r(635),P=function(){var n=(0,y.useState)([]),t=(0,o.Z)(n,2),r=t[0],e=t[1],a=(0,x.lr)(),u=(0,o.Z)(a,1)[0],c=(0,y.useState)(!1),s=(0,o.Z)(c,2),d=s[0],h=s[1],l=u.get("name");return(0,y.useEffect)((function(){function n(){return(n=(0,i.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(!0),n.next=4,(0,j.Pt)(l);case 4:t=n.sent,e(t.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:return n.prev=11,h(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}l&&function(){n.apply(this,arguments)}()}),[l]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(k,{}),d&&(0,w.jsx)(f.a,{}),(0,w.jsx)(v.O,{movies:r})]})}},635:function(n,t,r){r.d(t,{Df:function(){return o},M1:function(){return f},Pt:function(){return s},TP:function(){return p},tx:function(){return v}});var e=r(861),a=r(757),u=r.n(a),c=r(243),i="https://api.themoviedb.org/3/";c.Z.defaults.params={api_key:"10e9185665d086f70239d7bfb45d8306"};var o=function(){var n=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"trending/movie/day?"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"search/movie?query=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"movie/").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"movie/").concat(t,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"movie/").concat(t,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=774.ee3ffab1.chunk.js.map