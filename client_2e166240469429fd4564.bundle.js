(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return s(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.AuthenticationProvider=t.isAuthed=t.useTokenSetter=t.useToken=void 0;const o=u(n(1)),a=n(37),[l,i]=[o.createContext(null),o.createContext(null)];t.useToken=()=>o.useContext(l),t.useTokenSetter=()=>o.useContext(i),t.isAuthed=()=>Boolean(t.useToken());const c=()=>a.getCookie("token");t.AuthenticationProvider=({children:e})=>{const[t,n]=o.useState(c()||"");return o.useEffect(()=>{t&&c()!==t&&a.setCookie("token",t,{maxAge:3600})},[t]),o.default.createElement(i.Provider,{value:n},o.default.createElement(l.Provider,{value:t},e))}},194:function(e,t,n){e.exports=n(195)},195:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(n(1)),u=n(197);n(201);const o=r(n(204));u.render(s.default.createElement(o.default,null),document.getElementById("main"))},201:function(e,t,n){var r=n(202),s=n(203);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var u={insert:"head",singleton:!1};r(s,u);e.exports=s.locals||{}},203:function(e,t,n){"use strict";n.r(t);var r=n(192),s=n.n(r)()(!0);s.push([e.i,"body{padding-left:calc( 100vw - 100% );background-color:#000;color:#fff;text-align:center}section{max-width:900px}nav ul{list-style:none;margin:0;padding:0}section,table{margin:0 auto}a,a:visited{color:coral;font-weight:bold}a:hover,a:active{color:crimson}table{border:1px solid #fff}table th{border-bottom:2px solid #fff;font-size:1.25em}table tbody tr:nth-child(even){background-color:#383838}table tbody tr td{padding:.2em}table tbody tr:hover{background-color:#5f5f5f}","",{version:3,sources:["webpack://src/css/app.scss"],names:[],mappings:"AAAA,KACE,iCAAA,CAGA,qBAAA,CACA,UAAA,CACA,iBAAA,CAGF,QACE,eAAA,CAGF,OACE,eAAA,CACA,QAAA,CACA,SAAA,CAGF,cAEE,aAAA,CAGF,YAEE,WAAA,CACA,gBAAA,CAGF,iBAEE,aAAA,CAGF,MACE,qBAAA,CAGF,SACE,4BAAA,CACA,gBAAA,CAGF,+BACE,wBAAA,CAGF,kBACE,YAAA,CAGF,qBACE,wBAAA",sourcesContent:["body {\n  padding-left: calc(\n    100vw - 100%\n  ); /* From https://stackoverflow.com/a/30293718 */\n  background-color: black;\n  color: white;\n  text-align: center;\n}\n\nsection {\n  max-width: 900px;\n}\n\nnav ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nsection,\ntable {\n  margin: 0 auto;\n}\n\na,\na:visited {\n  color: coral;\n  font-weight: bold;\n}\n\na:hover,\na:active {\n  color: crimson;\n}\n\ntable {\n  border: 1px solid white;\n}\n\ntable th {\n  border-bottom: 2px solid white;\n  font-size: 1.25em;\n}\n\ntable tbody tr:nth-child(even) {\n  background-color: rgb(56, 56, 56);\n}\n\ntable tbody tr td {\n  padding: 0.2em;\n}\n\ntable tbody tr:hover {\n  background-color: rgb(95, 95, 95);\n}\n"],sourceRoot:""}]),t.default=s},204:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(n(1)),u=n(15),o=n(17),a=r(n(210));t.default=()=>s.default.createElement(o.AuthenticationProvider,null,s.default.createElement(u.HashRouter,null,s.default.createElement(a.default,null)))},210:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return s(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=u(n(1)),l=n(15),i=o(n(211)),c=o(n(272)),d=o(n(273));t.default=()=>a.createElement(l.Switch,null,a.createElement(l.Route,{path:"/",exact:!0,component:i.default}),a.createElement(l.Route,{path:"/login",exact:!0,component:d.default}),a.createElement(l.Route,{path:"/login/callback",exact:!0,component:c.default}),a.createElement(l.Redirect,{to:"/"}))},211:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(n(212));t.default=s.default},212:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(n(1)),u=n(15),o=r(n(213)),a=r(n(38)),l=r(n(215)),i=r(n(216));t.default=()=>s.default.createElement(a.default,null,s.default.createElement(l.default,null,s.default.createElement("p",null,"Please ",s.default.createElement(u.Link,{to:"/login"},"sign in via reddit")," to continue."),s.default.createElement("p",null,s.default.createElement("b",null,"NOTE:")," This application runs entirely in your browser. This means that while your reddit account's tokens are never passed to a third party, it does mean they are stored unsecured in your browser."),s.default.createElement("p",null,"This application will only request ",s.default.createElement("code",null,"wikiread")," permissions from reddit, so the tokens being used have a very limited scope. Regardless, please be mindful of the software and extensions running on your computer.")),s.default.createElement(o.default,null,s.default.createElement(i.default,null)))},213:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(n(1)),u=n(17),o=r(n(23));t.default=({children:e})=>s.default.createElement(o.default,{shouldRender:u.isAuthed()},e)},214:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(n(1)),u=n(15);t.default=()=>s.default.createElement(s.default.Fragment,null,s.default.createElement("h1",null,"Toolbox User Notes Lookup Tool"),s.default.createElement("nav",null,s.default.createElement("ul",null,s.default.createElement("li",null,s.default.createElement(u.Link,{to:"/"},"Home")))))},215:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(n(1)),u=n(17),o=r(n(23));t.default=({children:e})=>s.default.createElement(o.default,{shouldRender:!u.isAuthed()},e)},216:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(n(1)),u=r(n(217));t.default=()=>s.default.createElement(s.default.Fragment,null,s.default.createElement(u.default,null))},217:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return s(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=u(n(1)),l=o(n(218));t.default=()=>{const[e,t]=a.useState(""),[n,r]=a.useState("");return a.default.createElement(a.default.Fragment,null,a.default.createElement("h2",null,"Search"),a.default.createElement("form",{onSubmit:({nativeEvent:t})=>{r(e),t.preventDefault()}},a.default.createElement("label",null,"/u/",a.default.createElement("input",{type:"search",placeholder:"reddit username here",onChange:e=>t(e.target.value),name:"search_username"})),a.default.createElement("input",{type:"submit",value:"Retrieve Notes"})),a.default.createElement(l.default,{username:n}))}},218:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(n(1)),u=r(n(219)),o=n(220),a=n(39),l=r(n(270));t.default=({username:e})=>{const{status:t,errorMessage:n,notes:r}=o.useGetUserNotes(e);return t===a.AppStatus.Loading?s.default.createElement(u.default,null):t===a.AppStatus.ContactingReddit?s.default.createElement(u.default,{message:"Chatting with reddit..."}):n?s.default.createElement("div",null,n):s.default.createElement("div",{id:"searchResults"},r&&s.default.createElement(l.default,{username:e,notes:r}))}},219:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(n(1));t.default=({message:e})=>s.default.createElement("div",{id:"loading"},e||"Loading...")},220:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(s,u){function o(e){try{l(r.next(e))}catch(e){u(e)}}function a(e){try{l(r.throw(e))}catch(e){u(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.useGetUserNotes=void 0;const s=n(1),u=n(39),o=n(221);t.useGetUserNotes=e=>{const[t,n]=s.useState(u.AppStatus.Ready),[a,l]=s.useState(null),[i,c]=s.useState(null);return s.useEffect(()=>{r(void 0,void 0,void 0,(function*(){n(u.AppStatus.Loading);try{if(e){const t=yield o.getUserNotes(e);c(t.notes)}else c(null);l(null)}catch(e){console.error(e),l(e.message)}finally{n(u.AppStatus.Ready)}}))},[e]),{status:t,errorMessage:a,notes:i}}},221:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(s,u){function o(e){try{l(r.next(e))}catch(e){u(e)}}function a(e){try{l(r.throw(e))}catch(e){u(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((r=r.apply(e,t||[])).next())}))},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getUserNotes=void 0;const u=s(n(222)),o=n(25),[a,l]=[6,"usernotes"];t.getUserNotes=e=>r(void 0,void 0,void 0,(function*(){try{const e=o.getRedditClient(),t=(yield e.getSubreddit("PublicFreakout").getWikiPage(l).fetch()).content_md,n=JSON.parse(t);if(n.ver!==a)throw new Error(`Unsupported toolbox usernotes version (${n.ver})`);const r=(e=>{const t=atob(e),n=new u.default.Inflate({to:"string"});return n.push(t),JSON.parse(n.result.toString())})(n.blob),s=Object.assign(Object.assign({},n),{notes:r});return Object.assign(Object.assign({},s),(e=>{const{users:t,warnings:n}=e.constants,r={};return Object.keys(e.notes).forEach(s=>{const u=e.notes[s],o=new Array;u.ns.forEach(e=>{o.push(Object.assign(Object.assign({},e),{m:t[e.m],w:n[e.w]}))}),r[s]={ns:o}}),Object.assign(Object.assign({},e),{mods:t,warnings:n,notes:r})})(s))}catch(e){throw e}}))},23:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(n(1));t.default=({shouldRender:e,falseRender:t,children:n})=>e?s.default.createElement(s.default.Fragment,null,n):void 0!==t?s.default.createElement(s.default.Fragment,null,t):s.default.createElement(s.default.Fragment,null)},234:function(e,t){},241:function(e,t){},248:function(e,t){},25:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getRedditClient=t.getRedditAuthUrl=t.snooOptions=void 0;const s=r(n(45)),u=n(57),o=n(37);t.snooOptions={userAgent:"toolbox-usernotes-lookup by /u/rylekatti",clientId:u.config.reddit.appId,clientSecret:""},t.getRedditAuthUrl=()=>s.default.getAuthUrl(Object.assign(Object.assign({},t.snooOptions),{clientId:u.config.reddit.appId,scope:["wikiread"],redirectUri:u.config.reddit.redirectUrl,permanent:!1})),t.getRedditClient=()=>new s.default(Object.assign(Object.assign({},t.snooOptions),{accessToken:o.getCookie("token")}))},254:function(e,t){},256:function(e,t){},264:function(e,t){},270:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(n(0)),u=r(n(1));t.default=({username:e,notes:t})=>{const n=new Array;return Object.keys(t).map((r,o)=>{if(!e||e.toLowerCase()===r.toLowerCase()){const e=t[r];console.log(e),e.ns.forEach((e,t)=>{const r=s.default.unix(e.t);n.push(u.default.createElement("tr",{key:`${o}_${t}`},u.default.createElement("td",null,u.default.createElement("a",{href:"https://reddit.com/user/"+e.m,target:"_blank"},e.m)),u.default.createElement("td",null,e.n),u.default.createElement("td",null,u.default.createElement("time",{dateTime:r.format("YYYY-MM-DDTHH:mm:ssZ")},r.format()))))})}}),u.default.createElement("table",null,u.default.createElement("thead",null,u.default.createElement("tr",null,u.default.createElement("th",null,"Author"),u.default.createElement("th",null,"Note"),u.default.createElement("th",null,"Date"))),u.default.createElement("tbody",null,n))}},271:function(e,t,n){var r={"./af":59,"./af.js":59,"./ar":60,"./ar-dz":61,"./ar-dz.js":61,"./ar-kw":62,"./ar-kw.js":62,"./ar-ly":63,"./ar-ly.js":63,"./ar-ma":64,"./ar-ma.js":64,"./ar-sa":65,"./ar-sa.js":65,"./ar-tn":66,"./ar-tn.js":66,"./ar.js":60,"./az":67,"./az.js":67,"./be":68,"./be.js":68,"./bg":69,"./bg.js":69,"./bm":70,"./bm.js":70,"./bn":71,"./bn.js":71,"./bo":72,"./bo.js":72,"./br":73,"./br.js":73,"./bs":74,"./bs.js":74,"./ca":75,"./ca.js":75,"./cs":76,"./cs.js":76,"./cv":77,"./cv.js":77,"./cy":78,"./cy.js":78,"./da":79,"./da.js":79,"./de":80,"./de-at":81,"./de-at.js":81,"./de-ch":82,"./de-ch.js":82,"./de.js":80,"./dv":83,"./dv.js":83,"./el":84,"./el.js":84,"./en-au":85,"./en-au.js":85,"./en-ca":86,"./en-ca.js":86,"./en-gb":87,"./en-gb.js":87,"./en-ie":88,"./en-ie.js":88,"./en-il":89,"./en-il.js":89,"./en-in":90,"./en-in.js":90,"./en-nz":91,"./en-nz.js":91,"./en-sg":92,"./en-sg.js":92,"./eo":93,"./eo.js":93,"./es":94,"./es-do":95,"./es-do.js":95,"./es-us":96,"./es-us.js":96,"./es.js":94,"./et":97,"./et.js":97,"./eu":98,"./eu.js":98,"./fa":99,"./fa.js":99,"./fi":100,"./fi.js":100,"./fil":101,"./fil.js":101,"./fo":102,"./fo.js":102,"./fr":103,"./fr-ca":104,"./fr-ca.js":104,"./fr-ch":105,"./fr-ch.js":105,"./fr.js":103,"./fy":106,"./fy.js":106,"./ga":107,"./ga.js":107,"./gd":108,"./gd.js":108,"./gl":109,"./gl.js":109,"./gom-deva":110,"./gom-deva.js":110,"./gom-latn":111,"./gom-latn.js":111,"./gu":112,"./gu.js":112,"./he":113,"./he.js":113,"./hi":114,"./hi.js":114,"./hr":115,"./hr.js":115,"./hu":116,"./hu.js":116,"./hy-am":117,"./hy-am.js":117,"./id":118,"./id.js":118,"./is":119,"./is.js":119,"./it":120,"./it-ch":121,"./it-ch.js":121,"./it.js":120,"./ja":122,"./ja.js":122,"./jv":123,"./jv.js":123,"./ka":124,"./ka.js":124,"./kk":125,"./kk.js":125,"./km":126,"./km.js":126,"./kn":127,"./kn.js":127,"./ko":128,"./ko.js":128,"./ku":129,"./ku.js":129,"./ky":130,"./ky.js":130,"./lb":131,"./lb.js":131,"./lo":132,"./lo.js":132,"./lt":133,"./lt.js":133,"./lv":134,"./lv.js":134,"./me":135,"./me.js":135,"./mi":136,"./mi.js":136,"./mk":137,"./mk.js":137,"./ml":138,"./ml.js":138,"./mn":139,"./mn.js":139,"./mr":140,"./mr.js":140,"./ms":141,"./ms-my":142,"./ms-my.js":142,"./ms.js":141,"./mt":143,"./mt.js":143,"./my":144,"./my.js":144,"./nb":145,"./nb.js":145,"./ne":146,"./ne.js":146,"./nl":147,"./nl-be":148,"./nl-be.js":148,"./nl.js":147,"./nn":149,"./nn.js":149,"./oc-lnc":150,"./oc-lnc.js":150,"./pa-in":151,"./pa-in.js":151,"./pl":152,"./pl.js":152,"./pt":153,"./pt-br":154,"./pt-br.js":154,"./pt.js":153,"./ro":155,"./ro.js":155,"./ru":156,"./ru.js":156,"./sd":157,"./sd.js":157,"./se":158,"./se.js":158,"./si":159,"./si.js":159,"./sk":160,"./sk.js":160,"./sl":161,"./sl.js":161,"./sq":162,"./sq.js":162,"./sr":163,"./sr-cyrl":164,"./sr-cyrl.js":164,"./sr.js":163,"./ss":165,"./ss.js":165,"./sv":166,"./sv.js":166,"./sw":167,"./sw.js":167,"./ta":168,"./ta.js":168,"./te":169,"./te.js":169,"./tet":170,"./tet.js":170,"./tg":171,"./tg.js":171,"./th":172,"./th.js":172,"./tk":173,"./tk.js":173,"./tl-ph":174,"./tl-ph.js":174,"./tlh":175,"./tlh.js":175,"./tr":176,"./tr.js":176,"./tzl":177,"./tzl.js":177,"./tzm":178,"./tzm-latn":179,"./tzm-latn.js":179,"./tzm.js":178,"./ug-cn":180,"./ug-cn.js":180,"./uk":181,"./uk.js":181,"./ur":182,"./ur.js":182,"./uz":183,"./uz-latn":184,"./uz-latn.js":184,"./uz.js":183,"./vi":185,"./vi.js":185,"./x-pseudo":186,"./x-pseudo.js":186,"./yo":187,"./yo.js":187,"./zh-cn":188,"./zh-cn.js":188,"./zh-hk":189,"./zh-hk.js":189,"./zh-mo":190,"./zh-mo.js":190,"./zh-tw":191,"./zh-tw.js":191};function s(e){var t=u(e);return n(t)}function u(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=u,e.exports=s,s.id=271},272:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return s(t,e),t},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(s,u){function o(e){try{l(r.next(e))}catch(e){u(e)}}function a(e){try{l(r.throw(e))}catch(e){u(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((r=r.apply(e,t||[])).next())}))},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=u(n(1)),i=n(15),c=a(n(45)),d=a(n(23)),f=a(n(38)),m=n(57),h=n(17),j=n(25);t.default=e=>{const t=new URLSearchParams(document.location.search).get("code"),n=h.useTokenSetter();return l.useEffect(()=>{o(void 0,void 0,void 0,(function*(){const e=yield c.default.fromAuthCode(Object.assign(Object.assign({},j.snooOptions),{userAgent:"toolbox-usernotes-lookup by /u/rylekatti",clientId:m.config.reddit.appId,clientSecret:"",redirectUri:m.config.reddit.redirectUrl,code:t||"",permanent:!1}));n&&t&&n(e.accessToken)}))},[]),l.default.createElement(d.default,{shouldRender:!h.isAuthed(),falseRender:l.default.createElement(i.Redirect,{to:"/"})},l.default.createElement(f.default,null,"An error occurred trying to sign you in."))}},273:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(n(1)),u=r(n(274)),o=n(25);t.default=()=>s.default.createElement(u.default,{to:o.getRedditAuthUrl()})},274:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(n(1));t.default=({to:e})=>(window.location.href=e,s.default.createElement(s.default.Fragment,null,"Redirecting..."))},37:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.setCookie=t.getCookie=t.parseCookies=void 0;const s=r(n(209));t.parseCookies=()=>s.default.parse(document.cookie),t.getCookie=e=>t.parseCookies()[e],t.setCookie=(e,t,n)=>{document.cookie=s.default.serialize(e,t,n)}},38:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(n(1)),u=r(n(214));t.default=({children:e})=>s.default.createElement(s.default.Fragment,null,s.default.createElement(u.default,null),s.default.createElement("section",null,e))},39:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AppStatus=void 0,function(e){e[e.ContactingReddit=0]="ContactingReddit",e[e.Loading=1]="Loading",e[e.Ready=2]="Ready"}(t.AppStatus||(t.AppStatus={}))},47:function(e,t){},50:function(e,t){},57:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.config=void 0;const s=r(n(269));t.config=s.default({app:{url:{env:"APP_URL",required:!0},urlPath:{env:"APP_URL_PATH",required:!0}},reddit:{appId:{env:"REDDIT_APP_ID",required:!0},redirectUrl:{env:"REDDIT_REDIRECT_URL",required:!0}}})}},[[194,1,2]]]);
//# sourceMappingURL=client_2e166240469429fd4564.bundle.js.map