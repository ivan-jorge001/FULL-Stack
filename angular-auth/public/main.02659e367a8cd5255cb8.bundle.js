webpackJsonp([1],{"+h1B":function(n,l,u){"use strict";var t=u("/oeL"),o=u("aR8+"),e=u("wQAS"),r=u("q4dy"),i=u("qbdv"),s=u("fc+i"),a=u("bm2B"),_=u("CPp0"),c=u("JQmS");u.d(l,"a",function(){return d});var d=t.b(o.a,[e.a],function(n){return t.c([t.d(512,t.e,t.f,[[8,[r.a]],[3,t.e],t.g]),t.d(5120,t.h,t.i,[[3,t.h]]),t.d(4608,i.a,i.b,[t.h]),t.d(4608,t.j,t.j,[]),t.d(5120,t.k,t.l,[]),t.d(5120,t.m,t.n,[]),t.d(5120,t.o,t.p,[]),t.d(4608,s.b,s.c,[s.d]),t.d(6144,t.q,null,[s.b]),t.d(4608,s.e,s.f,[]),t.d(5120,s.g,function(n,l,u,t){return[new s.h(n),new s.i(l),new s.j(u,t)]},[s.d,s.d,s.d,s.e]),t.d(4608,s.k,s.k,[s.g,t.r]),t.d(135680,s.l,s.l,[s.d]),t.d(4608,s.m,s.m,[s.k,s.l]),t.d(6144,t.s,null,[s.m]),t.d(6144,s.n,null,[s.l]),t.d(4608,t.t,t.t,[t.r]),t.d(4608,s.o,s.o,[s.d]),t.d(4608,s.p,s.p,[s.d]),t.d(4608,a.a,a.a,[]),t.d(4608,_.a,_.a,[]),t.d(4608,_.b,_.c,[]),t.d(5120,_.d,_.e,[]),t.d(4608,_.f,_.f,[_.a,_.b,_.d]),t.d(4608,_.g,_.h,[]),t.d(5120,_.i,_.j,[_.f,_.g]),t.d(4608,c.a,c.a,[_.i]),t.d(512,i.c,i.c,[]),t.d(1024,t.u,s.q,[]),t.d(1024,t.v,function(n,l){return[s.r(n,l)]},[[2,s.s],[2,t.w]]),t.d(512,t.x,t.x,[[2,t.v]]),t.d(131584,t.y,t.y,[t.r,t.z,t.A,t.u,t.e,t.x]),t.d(2048,t.B,null,[t.y]),t.d(512,t.C,t.C,[t.B]),t.d(512,s.t,s.t,[[3,s.t]]),t.d(512,a.b,a.b,[]),t.d(512,a.c,a.c,[]),t.d(512,_.k,_.k,[]),t.d(512,o.a,o.a,[])])})},0:function(n,l,u){n.exports=u("cDNt")},JQmS:function(n,l,u){"use strict";var t=u("CPp0"),o=u("5v8a"),e=(u.n(o),u("xpf9")),r=(u.n(e),u("Dqrr"));u.n(r);u.d(l,"a",function(){return i});var i=function(){function n(n){this.http=n}return n.prototype.handleError=function(n){return r.Observable.throw(n.json().message)},n.prototype.signup=function(n){return this.http.post("/signup",n).map(function(n){return n.json()}).catch(this.handleError)},n.prototype.login=function(n){return this.http.post("/login",n).map(function(n){return n.json()}).catch(this.handleError)},n.prototype.logout=function(){return this.http.post("/logout",{}).map(function(n){return n.json()}).catch(this.handleError)},n.prototype.isLoggedIn=function(){return this.http.get("/loggedin").map(function(n){return n.json()}).catch(this.handleError)},n.prototype.getPrivateData=function(){return this.http.get("/private").map(function(n){return n.json()}).catch(this.handleError)},n.ctorParameters=function(){return[{type:t.i}]},n}()},NhKt:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=[""]},"aR8+":function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){}return n}()},cDNt:function(n,l,u){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=u("/oeL"),o=u("p5Ee"),e=u("+h1B"),r=u("fc+i");o.a.production&&u.i(t.a)(),u.i(r.a)().bootstrapModuleFactory(e.a)},p5Ee:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t={production:!0}},q4dy:function(n,l,u){"use strict";function t(n){return c._16(0,[(n()(),c._17(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),c._18(null,[" Here's some data fetched from a protected API "]))],null,null)}function o(n){return c._16(0,[(n()(),c._17(0,null,null,24,"div",[],null,null,null,null,null)),(n()(),c._18(null,["\n  "])),(n()(),c._17(0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),c._18(null,[" You are now logged in as ","!! "])),(n()(),c._18(null,["\n  "])),(n()(),c._17(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),c._18(null,[" Here's the user object "])),(n()(),c._18(null,["\n  "])),(n()(),c._17(0,null,null,2,"pre",[],null,null,null,null,null)),(n()(),c._18(null,[" "," "])),c._19(0,d.f,[]),(n()(),c._18(null,["\n\n  "])),(n()(),c._20(16777216,null,null,1,null,t)),c._21(16384,null,0,d.g,[c._2,c._3],{ngIf:[0,"ngIf"]},null),(n()(),c._18(null,["\n  "])),(n()(),c._17(0,null,null,2,"pre",[],null,null,null,null,null)),(n()(),c._18(null,[" "," "])),c._19(0,d.f,[]),(n()(),c._18(null,["\n\n  "])),(n()(),c._17(0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,u){var t=!0,o=n.component;if("click"===l){t=!1!==o.logout()&&t}return t},null,null)),(n()(),c._18(null,[" logout "])),(n()(),c._18(null,["\n  "])),(n()(),c._17(0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,u){var t=!0,o=n.component;if("click"===l){t=!1!==o.getPrivateData()&&t}return t},null,null)),(n()(),c._18(null,[" Get private data "])),(n()(),c._18(null,["\n"]))],function(n,l){n(l,13,0,l.component.privateData)},function(n,l){var u=l.component;n(l,3,0,u.user.username),n(l,9,0,c._22(l,9,0,c._23(l,10).transform(u.user))),n(l,16,0,c._22(l,16,0,c._23(l,17).transform(u.privateData)))})}function e(n){return c._16(0,[(n()(),c._17(0,null,null,36,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,u){var t=!0;if("submit"===l){t=!1!==c._23(n,2).onSubmit(u)&&t}if("reset"===l){t=!1!==c._23(n,2).onReset()&&t}return t},null,null)),c._21(16384,null,0,g.d,[],null,null),c._21(16384,null,0,g.e,[[8,null],[8,null]],null,null),c._24(2048,null,g.f,null,[g.e]),c._21(16384,null,0,g.g,[g.f],null,null),(n()(),c._18(null,["\n  "])),(n()(),c._17(0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),c._18(null,[" Login or Signup "])),(n()(),c._18(null,["\n  "])),(n()(),c._17(0,null,null,1,"label",[],null,null,null,null,null)),(n()(),c._18(null,[" Username "])),(n()(),c._18(null,["\n  "])),(n()(),c._17(0,null,null,5,"input",[["name","username"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var t=!0,o=n.component;if("input"===l){t=!1!==c._23(n,13)._handleInput(u.target.value)&&t}if("blur"===l){t=!1!==c._23(n,13).onTouched()&&t}if("compositionstart"===l){t=!1!==c._23(n,13)._compositionStart()&&t}if("compositionend"===l){t=!1!==c._23(n,13)._compositionEnd(u.target.value)&&t}if("ngModelChange"===l){t=!1!==(o.formInfo.username=u)&&t}return t},null,null)),c._21(16384,null,0,g.h,[c._0,c.Z,[2,g.i]],null,null),c._24(1024,null,g.j,function(n){return[n]},[g.h]),c._21(671744,null,0,g.k,[[2,g.f],[8,null],[8,null],[2,g.j]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),c._24(2048,null,g.l,null,[g.k]),c._21(16384,null,0,g.m,[g.l],null,null),(n()(),c._18(null,["\n  "])),(n()(),c._17(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),c._18(null,["\n  "])),(n()(),c._17(0,null,null,1,"label",[],null,null,null,null,null)),(n()(),c._18(null,[" Password "])),(n()(),c._18(null,["\n  "])),(n()(),c._17(0,null,null,5,"input",[["name","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var t=!0,o=n.component;if("input"===l){t=!1!==c._23(n,25)._handleInput(u.target.value)&&t}if("blur"===l){t=!1!==c._23(n,25).onTouched()&&t}if("compositionstart"===l){t=!1!==c._23(n,25)._compositionStart()&&t}if("compositionend"===l){t=!1!==c._23(n,25)._compositionEnd(u.target.value)&&t}if("ngModelChange"===l){t=!1!==(o.formInfo.password=u)&&t}return t},null,null)),c._21(16384,null,0,g.h,[c._0,c.Z,[2,g.i]],null,null),c._24(1024,null,g.j,function(n){return[n]},[g.h]),c._21(671744,null,0,g.k,[[2,g.f],[8,null],[8,null],[2,g.j]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),c._24(2048,null,g.l,null,[g.k]),c._21(16384,null,0,g.m,[g.l],null,null),(n()(),c._18(null,["\n\n  "])),(n()(),c._17(0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,u){var t=!0,o=n.component;if("click"===l){t=!1!==o.login()&&t}return t},null,null)),(n()(),c._18(null,[" login "])),(n()(),c._18(null,["\n  "])),(n()(),c._17(0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,u){var t=!0,o=n.component;if("click"===l){t=!1!==o.signup()&&t}return t},null,null)),(n()(),c._18(null,[" signup "])),(n()(),c._18(null,["\n"]))],function(n,l){var u=l.component;n(l,15,0,"username",u.formInfo.username);n(l,27,0,"password",u.formInfo.password)},function(n,l){n(l,0,0,c._23(l,4).ngClassUntouched,c._23(l,4).ngClassTouched,c._23(l,4).ngClassPristine,c._23(l,4).ngClassDirty,c._23(l,4).ngClassValid,c._23(l,4).ngClassInvalid,c._23(l,4).ngClassPending),n(l,12,0,c._23(l,17).ngClassUntouched,c._23(l,17).ngClassTouched,c._23(l,17).ngClassPristine,c._23(l,17).ngClassDirty,c._23(l,17).ngClassValid,c._23(l,17).ngClassInvalid,c._23(l,17).ngClassPending),n(l,24,0,c._23(l,29).ngClassUntouched,c._23(l,29).ngClassTouched,c._23(l,29).ngClassPristine,c._23(l,29).ngClassDirty,c._23(l,29).ngClassValid,c._23(l,29).ngClassInvalid,c._23(l,29).ngClassPending)})}function r(n){return c._16(0,[(n()(),c._17(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),c._18(null,[" Here's some data fetched from a protected API "]))],null,null)}function i(n){return c._16(0,[(n()(),c._17(0,null,null,24,"div",[],null,null,null,null,null)),(n()(),c._18(null,["\n  "])),(n()(),c._17(0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),c._18(null,[" You are now logged in as ","!! "])),(n()(),c._18(null,["\n  "])),(n()(),c._17(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),c._18(null,[" Here's the user object "])),(n()(),c._18(null,["\n  "])),(n()(),c._17(0,null,null,2,"pre",[],null,null,null,null,null)),(n()(),c._18(null,[" "," "])),c._19(0,d.f,[]),(n()(),c._18(null,["\n\n  "])),(n()(),c._20(16777216,null,null,1,null,r)),c._21(16384,null,0,d.g,[c._2,c._3],{ngIf:[0,"ngIf"]},null),(n()(),c._18(null,["\n  "])),(n()(),c._17(0,null,null,2,"pre",[],null,null,null,null,null)),(n()(),c._18(null,[" "," "])),c._19(0,d.f,[]),(n()(),c._18(null,["\n  "])),(n()(),c._17(0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,u){var t=!0,o=n.component;if("click"===l){t=!1!==o.logout()&&t}return t},null,null)),(n()(),c._18(null,[" logout "])),(n()(),c._18(null,["\n  "])),(n()(),c._17(0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,u){var t=!0,o=n.component;if("click"===l){t=!1!==o.getPrivateData()&&t}return t},null,null)),(n()(),c._18(null,[" Get private data "])),(n()(),c._18(null,["\n"]))],function(n,l){n(l,13,0,l.component.privateData)},function(n,l){var u=l.component;n(l,3,0,u.user.username),n(l,9,0,c._22(l,9,0,c._23(l,10).transform(u.user))),n(l,16,0,c._22(l,16,0,c._23(l,17).transform(u.privateData)))})}function s(n){return c._16(0,[(n()(),c._17(0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),c._18(null,[" Authentication Sample "])),(n()(),c._18(null,["\n"])),(n()(),c._17(0,null,null,36,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,u){var t=!0;if("submit"===l){t=!1!==c._23(n,5).onSubmit(u)&&t}if("reset"===l){t=!1!==c._23(n,5).onReset()&&t}return t},null,null)),c._21(16384,null,0,g.d,[],null,null),c._21(16384,null,0,g.e,[[8,null],[8,null]],null,null),c._24(2048,null,g.f,null,[g.e]),c._21(16384,null,0,g.g,[g.f],null,null),(n()(),c._18(null,["\n  "])),(n()(),c._17(0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),c._18(null,[" Login or Signup "])),(n()(),c._18(null,["\n  "])),(n()(),c._17(0,null,null,1,"label",[],null,null,null,null,null)),(n()(),c._18(null,[" Username "])),(n()(),c._18(null,["\n  "])),(n()(),c._17(0,null,null,5,"input",[["name","username"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var t=!0,o=n.component;if("input"===l){t=!1!==c._23(n,16)._handleInput(u.target.value)&&t}if("blur"===l){t=!1!==c._23(n,16).onTouched()&&t}if("compositionstart"===l){t=!1!==c._23(n,16)._compositionStart()&&t}if("compositionend"===l){t=!1!==c._23(n,16)._compositionEnd(u.target.value)&&t}if("ngModelChange"===l){t=!1!==(o.formInfo.username=u)&&t}return t},null,null)),c._21(16384,null,0,g.h,[c._0,c.Z,[2,g.i]],null,null),c._24(1024,null,g.j,function(n){return[n]},[g.h]),c._21(671744,null,0,g.k,[[2,g.f],[8,null],[8,null],[2,g.j]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),c._24(2048,null,g.l,null,[g.k]),c._21(16384,null,0,g.m,[g.l],null,null),(n()(),c._18(null,["\n  "])),(n()(),c._17(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),c._18(null,["\n  "])),(n()(),c._17(0,null,null,1,"label",[],null,null,null,null,null)),(n()(),c._18(null,[" Password "])),(n()(),c._18(null,["\n  "])),(n()(),c._17(0,null,null,5,"input",[["name","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var t=!0,o=n.component;if("input"===l){t=!1!==c._23(n,28)._handleInput(u.target.value)&&t}if("blur"===l){t=!1!==c._23(n,28).onTouched()&&t}if("compositionstart"===l){t=!1!==c._23(n,28)._compositionStart()&&t}if("compositionend"===l){t=!1!==c._23(n,28)._compositionEnd(u.target.value)&&t}if("ngModelChange"===l){t=!1!==(o.formInfo.password=u)&&t}return t},null,null)),c._21(16384,null,0,g.h,[c._0,c.Z,[2,g.i]],null,null),c._24(1024,null,g.j,function(n){return[n]},[g.h]),c._21(671744,null,0,g.k,[[2,g.f],[8,null],[8,null],[2,g.j]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),c._24(2048,null,g.l,null,[g.k]),c._21(16384,null,0,g.m,[g.l],null,null),(n()(),c._18(null,["\n\n  "])),(n()(),c._17(0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,u){var t=!0,o=n.component;if("click"===l){t=!1!==o.login()&&t}return t},null,null)),(n()(),c._18(null,[" login "])),(n()(),c._18(null,["\n  "])),(n()(),c._17(0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,u){var t=!0,o=n.component;if("click"===l){t=!1!==o.signup()&&t}return t},null,null)),(n()(),c._18(null,[" signup "])),(n()(),c._18(null,["\n"])),(n()(),c._18(null,["\n"])),(n()(),c._17(0,null,null,1,"p",[["class","error"]],null,null,null,null,null)),(n()(),c._18(null,[" "," "])),(n()(),c._18(null,["\n"])),(n()(),c._20(16777216,null,null,1,null,o)),c._21(16384,null,0,d.g,[c._2,c._3],{ngIf:[0,"ngIf"]},null),(n()(),c._18(null,["\n\n"])),(n()(),c._17(0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),c._18(null,[" Authentication Sample "])),(n()(),c._18(null,["\n"])),(n()(),c._20(16777216,null,null,1,null,e)),c._21(16384,null,0,d.g,[c._2,c._3],{ngIf:[0,"ngIf"]},null),(n()(),c._18(null,["\n\n"])),(n()(),c._20(16777216,null,null,1,null,i)),c._21(16384,null,0,d.g,[c._2,c._3],{ngIf:[0,"ngIf"]},null),(n()(),c._18(null,["\n\n"])),(n()(),c._17(0,null,null,1,"p",[["class","error"]],null,null,null,null,null)),(n()(),c._18(null,[" "," "])),(n()(),c._18(null,["\n"]))],function(n,l){var u=l.component;n(l,18,0,"username",u.formInfo.username);n(l,30,0,"password",u.formInfo.password),n(l,45,0,u.user),n(l,51,0,!u.user),n(l,54,0,u.user)},function(n,l){var u=l.component;n(l,3,0,c._23(l,7).ngClassUntouched,c._23(l,7).ngClassTouched,c._23(l,7).ngClassPristine,c._23(l,7).ngClassDirty,c._23(l,7).ngClassValid,c._23(l,7).ngClassInvalid,c._23(l,7).ngClassPending),n(l,15,0,c._23(l,20).ngClassUntouched,c._23(l,20).ngClassTouched,c._23(l,20).ngClassPristine,c._23(l,20).ngClassDirty,c._23(l,20).ngClassValid,c._23(l,20).ngClassInvalid,c._23(l,20).ngClassPending),n(l,27,0,c._23(l,32).ngClassUntouched,c._23(l,32).ngClassTouched,c._23(l,32).ngClassPristine,c._23(l,32).ngClassDirty,c._23(l,32).ngClassValid,c._23(l,32).ngClassInvalid,c._23(l,32).ngClassPending),n(l,42,0,u.error),n(l,57,0,u.error)})}function a(n){return c._16(0,[(n()(),c._17(0,null,null,1,"app-root",[],null,null,null,s,h)),c._21(114688,null,0,f.a,[p.a],null,null)],function(n,l){n(l,1,0)},null)}var _=u("NhKt"),c=u("/oeL"),d=u("qbdv"),g=u("bm2B"),f=u("wQAS"),p=u("JQmS");u.d(l,"a",function(){return v});var m=[_.a],h=c._15({encapsulation:0,styles:m,data:{}}),v=c._25("app-root",f.a,a,{},{},[])},qtrl:function(n,l){function u(n){throw new Error("Cannot find module '"+n+"'.")}u.keys=function(){return[]},u.resolve=u,n.exports=u,u.id="qtrl"},wQAS:function(n,l,u){"use strict";var t=u("JQmS");u.d(l,"a",function(){return o});var o=function(){function n(n){this.session=n,this.formInfo={username:"",password:""},this.privateData=""}return n.prototype.ngOnInit=function(){var n=this;this.session.isLoggedIn().subscribe(function(l){return n.successCb(l)})},n.prototype.login=function(){var n=this;this.session.login(this.formInfo).subscribe(function(l){return n.successCb(l)},function(l){return n.errorCb(l)})},n.prototype.signup=function(){var n=this;this.session.signup(this.formInfo).subscribe(function(l){return n.successCb(l)},function(l){return n.errorCb(l)})},n.prototype.logout=function(){var n=this;this.session.logout().subscribe(function(){return n.successCb(null)},function(l){return n.errorCb(l)})},n.prototype.getPrivateData=function(){var n=this;this.session.getPrivateData().subscribe(function(l){return n.privateData=l},function(l){return n.error=l})},n.prototype.errorCb=function(n){this.error=n,this.user=null},n.prototype.successCb=function(n){this.user=n,this.error=null},n.ctorParameters=function(){return[{type:t.a}]},n}()}},[0]);