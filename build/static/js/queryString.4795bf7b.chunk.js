"use strict";(self.webpackChunktodo=self.webpackChunktodo||[]).push([[538],{9045:(r,a,e)=>{function s(r,a){return Object.keys(a).reduce((function(e,s){s.startsWith(r)&&(e[s.substr(r.length)]=a[s]);return e}),{})}e.r(a),e.d(a,{queryString:()=>n});var t=e(7801),i=e(8718);function n(r,a){var e=document.createElement("a");e.href=a;var n=e.search.slice(1).split("&").reduce((function(r,a){var e=a.split("="),s=e[0],i=e[1];return r[s]=(0,t.p)(i),r}),{}),u=[],d=n.ajs_uid,o=n.ajs_event,_=n.ajs_aid,c=(0,i.Qd)(r.options.useQueryString)?r.options.useQueryString:{},j=c.aid,v=void 0===j?/.+/:j,f=c.uid,p=void 0===f?/.+/:f;if(_){var y=Array.isArray(n.ajs_aid)?n.ajs_aid[0]:n.ajs_aid;v.test(y)&&r.setAnonymousId(y)}if(d){var h=Array.isArray(n.ajs_uid)?n.ajs_uid[0]:n.ajs_uid;if(p.test(h)){var l=s("ajs_trait_",n);u.push(r.identify(h,l))}}if(o){var A=Array.isArray(n.ajs_event)?n.ajs_event[0]:n.ajs_event,k=s("ajs_prop_",n);u.push(r.track(A,k))}return Promise.all(u)}}}]);
//# sourceMappingURL=queryString.4795bf7b.chunk.js.map