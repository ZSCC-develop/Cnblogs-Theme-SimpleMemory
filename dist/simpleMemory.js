!function(){var s,e,t,l,r,o,n={434:function(s,e,t){"use strict";function l(s){let e={init:()=>{s.__event.scroll={},s.__event.scroll.handle=[],s.__event.scroll.temScroll=0,s.__event.scroll.docScroll=$(document).scrollTop(),s.__event.scroll.homeScroll=$("#home").offset().top-40,$(window).scroll((()=>{s.__event.scroll.docScroll=$(document).scrollTop(),s.__event.scroll.homeScroll=$("#home").offset().top-40,e.handle.scroll(),s.__event.scroll.temScroll=s.__event.scroll.docScroll})),s.__event.resize={},s.__event.resize.handle=[],$(window).resize((()=>{e.handle.resize()}))},handle:{scroll:()=>{for(let e=0;e<s.__event.scroll.handle.length;e++)s.__event.scroll.handle[e]()},resize:()=>{for(let e=0;e<s.__event.resize.handle.length;e++)s.__event.resize.handle[e]();s.__tools.setDomHomePosition()}}};return e}t.d(e,{Z:function(){return l}})},1793:function(s,e,t){"use strict";var l=JSON.parse('{"info":{"name":"","startDate":"2021-01-01","avatar":"","blogIcon":""},"sidebar":{"navList":[],"customList":{},"infoBackground":"","titleMsg":"欢迎访问本博客~"},"banner":{"home":{"background":[],"title":[],"titleSource":"jinrishici"},"article":{"background":[]}},"loading":{"rebound":{"tension":16,"friction":5},"spinner":{"id":"spinner","radius":90,"sides":3,"depth":4,"colors":{"background":"#f0f0f0","stroke":"#272633","base":null,"child":"#272633"},"alwaysForward":true,"restAt":0.5,"renderBase":false}},"fontIconExtend":"","progressBar":{"id":"top-progress-bar","color":"#77b6ff","height":"2px","duration":0.2},"title":{"onblur":"(oﾟvﾟ)ノ Hi","onblurTime":500,"focus":"(*´∇｀*) 欢迎回来！","focusTime":1000},"footer":{"text":{"left":"","right":"","iconFont":{"icon":"icon-xl","color":"red","fontSize":"16px"}},"style":2},"links":{"footer":[],"page":[]},"cnzz":"","rtMenu":{"qrCode":"","reward":{"alipay":"","wechatpay":""},"downScrollDom":""},"switchDayNight":{"enable":true,"nightMode":false,"auto":{"enable":false,"dayHour":5,"nightHour":19}},"animate":{"bannerImages":{"enable":false,"options":{"itemNum":5,"current":0,"sort":1,"time":30000}},"homeBanner":{"enable":false,"options":{"radius":15,"density":0.2,"color":"rgba(255,255,255, .2)","clearOffset":0.3}},"articleTitle":{"enable":true},"articleBanner":{"enable":false},"background":{"enable":false,"options":{"colorSaturation":"60%","colorBrightness":"50%","colorAlpha":0.5,"colorCycleSpeed":5,"verticalPosition":"random","horizontalSpeed":200,"ribbonCount":3,"strokeSize":0,"parallaxAmount":-0.2,"animateSections":true}},"backgroundMouse":{"enable":false},"mouse":{"enable":false,"options":{"size":8,"sizeF":36}}},"code":{"type":"","options":{"hljs":{"theme":"atom-one-dark-reasonable","languages":[]},"maxHeight":"","fontSize":14,"line":false,"macStyle":true}},"articleSuffix":{"imgUrl":"","aboutHtml":"","copyrightHtml":"","supportHtml":""},"articleDirectory":{"position":"right","minBodyWeight":900,"autoWidthScroll":false},"consoleList":[],"bookList":[],"hooks":{}}');var r=t(434);$(document).ready((function(){let s={};s.__config=function(){const s=void 0===window.cnblogsConfig?{}:window.cnblogsConfig;return $.extend(!0,l,s)}(),s.__status=function(){let s={};s.url=window.location.href;let e=s.url.split("/");if(s.user=e[3],s.articleId="",s.homeUrl=[e[0],e[1],e[2],e[3]].join("/"),$("#topics").length){$("#bookListFlg").length?s.pageType="books":$("#linkListFlg").length?s.pageType="links":s.pageType="article";let t=e[e.length-1].split(".");s.articleId=t[0]}else s.pageType="home";return s}(),s.__tools={tempReplacement:(s,e,t)=>{let l=new RegExp("##"+e+"##","g");return s.replace(l,t)},batchTempReplacement:(s,e)=>{let t=s;return $.each(e,(function(s){let l=e[s],r=new RegExp("##"+l[0]+"##","g");t=t.replace(r,l[1])})),t},dynamicLoadingCss:s=>{if(!s||0===s.length)throw new Error('argument "path" is required !');let e=document.getElementsByTagName("head")[0],t=document.createElement("link");t.href=s,t.rel="stylesheet",t.type="text/css",e.appendChild(t)},htmlFiltrationScript:s=>{let e=new RegExp("<script.*<\/script>","ig");return s.replace(e,"")},clearIntervalTimeId:s=>{null!=s&&window.clearInterval(s)},actScroll:(s,e)=>{$("html,body").stop().animate({scrollTop:s},e)},getScrollPercent:()=>($(window).scrollTop()/($(document).height()-$(window).height())*100).toFixed(0),randomNum:function(s,e){switch(arguments.length){case 1:return parseInt(Math.random()*s+1);case 2:return parseInt(Math.random()*(e-s+1)+s);default:return 0}},setDomHomePosition:()=>{$("#home").css("margin-top",$(".main-header").outerHeight()+"px")},getNowFormatDate:()=>{let s=new Date,e=s.getFullYear(),t=s.getMonth()+1,l=s.getDate();return t>=1&&t<=9&&(t="0"+t),l>=0&&l<=9&&(l="0"+l),e+"-"+t+"-"+l},getRunDate:s=>{s=s.toString().split("-");let e=new Date;e.setUTCFullYear(s[0],s[1]-1,s[2]),e.setUTCHours(0,0,0,0);let t=e,l=(new Date).getTime()-t.getTime(),r=l/1e3,o=(Math.floor(r),l/864e5),n=Math.floor(o),a=-24*(n-o),i=Math.floor(a),c=-60*(i-a),h=Math.floor(-60*(i-a));return{daysold:n,hrsold:i,minsold:h,seconds:Math.floor(-60*(h-c)).toString()}},setCookie:(s,e,t)=>{let l=new Date;l.setTime(l.getTime()+1e3*t),document.cookie=s+"="+escape(e)+"; expires="+l.toGMTString()+"; path=/"},getCookie:s=>{let e,t=new RegExp("(^| )"+s+"=([^;]*)(;|$)");return e=document.cookie.match(t),e?unescape(e[2]):null},randomString:s=>{s=s||32;let e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",t=e.length,l="";for(let r=0;r<s;r++)l+=e.charAt(Math.floor(Math.random()*t));return l},minToTime:s=>{let e=parseInt(s),t=parseInt(60*(s-e));return t=1===(""+t).length?"0"+t:t,`${e}:${t}`}},s.__timeIds={},s.__event={},""===s.__config.info.name&&(s.__config.info.name=s.__status.user),t(2865)(`./${s.__status.pageType}`).then((e=>{const l=e.default;Promise.all([t.e(9509),t.e(3304)]).then(t.bind(t,9990)).then((e=>{(0,e.default)(s),l(s),t.e(3258).then(t.bind(t,7987)).then((e=>{(0,e.default)(s),s.__tools.setDomHomePosition(),(0,r.Z)(s).handle.scroll(),(0,r.Z)(s).handle.resize()}))}))}))}))},2865:function(s,e,t){var l={"./article":[8277,5169,7361,269],"./article.js":[8277,5169,7361,269],"./books":[5090,5169,7361,4463],"./books.js":[5090,5169,7361,4463],"./common/comArticle":[3784,5169,7361],"./common/comArticle.js":[3784,5169,7361],"./home":[565,9628],"./home.js":[565,9628],"./links":[6893,5169,7361,9583],"./links.js":[6893,5169,7361,9583]};function r(s){if(!t.o(l,s))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=l[s],r=e[0];return Promise.all(e.slice(1).map(t.e)).then((function(){return t(r)}))}r.keys=function(){return Object.keys(l)},r.id=2865,s.exports=r}},a={};function i(s){var e=a[s];if(void 0!==e)return e.exports;var t=a[s]={exports:{}};return n[s].call(t.exports,t,t.exports,i),t.exports}i.m=n,i.n=function(s){var e=s&&s.__esModule?function(){return s.default}:function(){return s};return i.d(e,{a:e}),e},e=Object.getPrototypeOf?function(s){return Object.getPrototypeOf(s)}:function(s){return s.__proto__},i.t=function(t,l){if(1&l&&(t=this(t)),8&l)return t;if("object"==typeof t&&t){if(4&l&&t.__esModule)return t;if(16&l&&"function"==typeof t.then)return t}var r=Object.create(null);i.r(r);var o={};s=s||[null,e({}),e([]),e(e)];for(var n=2&l&&t;"object"==typeof n&&!~s.indexOf(n);n=e(n))Object.getOwnPropertyNames(n).forEach((function(s){o[s]=function(){return t[s]}}));return o.default=function(){return t},i.d(r,o),r},i.d=function(s,e){for(var t in e)i.o(e,t)&&!i.o(s,t)&&Object.defineProperty(s,t,{enumerable:!0,get:e[t]})},i.f={},i.e=function(s){return Promise.all(Object.keys(i.f).reduce((function(e,t){return i.f[t](s,e),e}),[]))},i.u=function(s){return"script/"+({131:"hljs/atelier-savanna-light-css",269:"page-article",336:"hljs/atelier-plateau-dark-css",393:"hljs/darcula-css",604:"hljs/srcery-css",620:"hljs/docco-css",655:"hljs/isbl-editor-light-css",657:"hljs/qtcreator_dark-css",759:"hljs/atelier-estuary-dark-css",1089:"hljs/googlecode-css",1151:"hljs/atelier-cave-light-css",1417:"hljs/atelier-sulphurpool-light-css",1437:"hljs/foundation-css",1480:"dayNight",1504:"hljs/qtcreator_light-css",1589:"hljs/atelier-estuary-light-css",1761:"bannerImages",1936:"hljs/atelier-plateau-light-css",2056:"hljs/stackoverflow-light-css",2080:"hljs/routeros-css",2089:"circleMagic",2122:"hljs/monokai-sublime-css",2144:"hljs/atelier-dune-light-css",2171:"hljs/atom-one-dark-reasonable-css",2251:"hljs/gruvbox-dark-css",2299:"hljs/atelier-savanna-dark-css",2447:"hljs/hybrid-css",2456:"hljs/atelier-seaside-light-css",2519:"hljs/gruvbox-light-css",2565:"hljs/lioshi-css",2600:"hljs/nnfx-css",2785:"hljs/codepen-embed-css",3062:"hljs/gradient-dark-css",3113:"hljs/brown-paper-css",3191:"article-code",3199:"hljs/zenburn-css",3258:"comAfter",3290:"hljs/nord-css",3304:"comBefore",3352:"hljs/atelier-cave-dark-css",3353:"fonticon",3374:"hljs/atom-one-light-css",3429:"hljs/atelier-forest-dark-css",3449:"mouse",3539:"hljs/nnfx-dark-css",3670:"hljs/ascetic-css",3731:"hljs/tomorrow-css",3749:"hljs/color-brewer-css",3774:"hljs/an-old-hope-css",3851:"hljs/tomorrow-night-css",3854:"hljs/atelier-sulphurpool-dark-css",3950:"hljs/gradient-light-css",4033:"hljs/atelier-seaside-dark-css",4104:"hljs/lightfair-css",4149:"hljs/far-css",4168:"hljs/tomorrow-night-blue-css",4321:"hljs/kimbie-light-css",4463:"page-books",4495:"hljs/atelier-forest-light-css",4751:"hljs/xt256-css",4761:"hljs/idea-css",4802:"hljs/mono-blue-css",4824:"hljs/atelier-lakeside-light-css",5064:"hljs/atelier-dune-dark-css",5114:"hljs/magula-css",5191:"hljs/grayscale-css",5206:"hljs/sunburst-css",5360:"hljs/paraiso-dark-css",5518:"hljs/atelier-lakeside-dark-css",5561:"nhBannerAnimation",5706:"hljs/hopscotch-css",5980:"hljs/tomorrow-night-eighties-css",6312:"hljs/ocean-css",6387:"hljs/atelier-heath-light-css",6493:"hljs/isbl-editor-dark-css",6520:"hljs/obsidian-css",6586:"code-hljs",6655:"hljs/a11y-dark-css",6764:"hljs/xcode-css",6865:"hljs/vs-css",7335:"hljs/dracula-css",7361:"page-common-comArticle",7531:"hljs/agate-css",7591:"hljs/tomorrow-night-bright-css",7661:"hljs/github-gist-css",7732:"google-fonts",7898:"hljs/solarized-light-css",8004:"hljs/ir-black-css",8046:"hljs/solarized-dark-css",8132:"particles",8203:"hljs/default-css",8208:"hljs/arta-css",8209:"hljs/monokai-css",8265:"ribbonsEffect",8694:"hljs/school-book-css",8794:"hljs/purebasic-css",8813:"hljs/pojoaque-css",8826:"hljs/atelier-heath-dark-css",8905:"hljs/androidstudio-css",8981:"hljs/kimbie-dark-css",9053:"hljs/stackoverflow-dark-css",9089:"hljs/github-css",9105:"hljs/vs2015-css",9188:"hljs/a11y-light-css",9368:"hljs/night-owl-css",9446:"hljs/arduino-light-css",9550:"hljs/dark-css",9583:"page-links",9624:"hljs/shades-of-purple-css",9628:"page-home",9678:"hljs/railscasts-css",9714:"hljs/gml-css",9769:"hljs/atom-one-dark-css",9914:"hljs/paraiso-light-css",9996:"hljs/rainbow-css"}[s]||s)+"."+i.h().slice(0,8)+".js"},i.miniCssF=function(s){return"style/"+{131:"hljs/atelier-savanna-light-css",269:"page-article",336:"hljs/atelier-plateau-dark-css",393:"hljs/darcula-css",604:"hljs/srcery-css",620:"hljs/docco-css",655:"hljs/isbl-editor-light-css",657:"hljs/qtcreator_dark-css",759:"hljs/atelier-estuary-dark-css",1089:"hljs/googlecode-css",1151:"hljs/atelier-cave-light-css",1417:"hljs/atelier-sulphurpool-light-css",1437:"hljs/foundation-css",1480:"dayNight",1504:"hljs/qtcreator_light-css",1589:"hljs/atelier-estuary-light-css",1936:"hljs/atelier-plateau-light-css",2056:"hljs/stackoverflow-light-css",2080:"hljs/routeros-css",2122:"hljs/monokai-sublime-css",2144:"hljs/atelier-dune-light-css",2171:"hljs/atom-one-dark-reasonable-css",2251:"hljs/gruvbox-dark-css",2299:"hljs/atelier-savanna-dark-css",2447:"hljs/hybrid-css",2456:"hljs/atelier-seaside-light-css",2519:"hljs/gruvbox-light-css",2565:"hljs/lioshi-css",2600:"hljs/nnfx-css",2785:"hljs/codepen-embed-css",3062:"hljs/gradient-dark-css",3113:"hljs/brown-paper-css",3199:"hljs/zenburn-css",3290:"hljs/nord-css",3304:"comBefore",3352:"hljs/atelier-cave-dark-css",3353:"fonticon",3374:"hljs/atom-one-light-css",3429:"hljs/atelier-forest-dark-css",3449:"mouse",3539:"hljs/nnfx-dark-css",3670:"hljs/ascetic-css",3731:"hljs/tomorrow-css",3749:"hljs/color-brewer-css",3774:"hljs/an-old-hope-css",3851:"hljs/tomorrow-night-css",3854:"hljs/atelier-sulphurpool-dark-css",3950:"hljs/gradient-light-css",4033:"hljs/atelier-seaside-dark-css",4104:"hljs/lightfair-css",4149:"hljs/far-css",4168:"hljs/tomorrow-night-blue-css",4321:"hljs/kimbie-light-css",4463:"page-books",4495:"hljs/atelier-forest-light-css",4751:"hljs/xt256-css",4761:"hljs/idea-css",4802:"hljs/mono-blue-css",4824:"hljs/atelier-lakeside-light-css",5064:"hljs/atelier-dune-dark-css",5114:"hljs/magula-css",5191:"hljs/grayscale-css",5206:"hljs/sunburst-css",5360:"hljs/paraiso-dark-css",5518:"hljs/atelier-lakeside-dark-css",5561:"nhBannerAnimation",5706:"hljs/hopscotch-css",5980:"hljs/tomorrow-night-eighties-css",6312:"hljs/ocean-css",6387:"hljs/atelier-heath-light-css",6493:"hljs/isbl-editor-dark-css",6520:"hljs/obsidian-css",6655:"hljs/a11y-dark-css",6764:"hljs/xcode-css",6865:"hljs/vs-css",7335:"hljs/dracula-css",7361:"page-common-comArticle",7531:"hljs/agate-css",7591:"hljs/tomorrow-night-bright-css",7661:"hljs/github-gist-css",7732:"google-fonts",7898:"hljs/solarized-light-css",8004:"hljs/ir-black-css",8046:"hljs/solarized-dark-css",8132:"particles",8203:"hljs/default-css",8208:"hljs/arta-css",8209:"hljs/monokai-css",8694:"hljs/school-book-css",8794:"hljs/purebasic-css",8813:"hljs/pojoaque-css",8826:"hljs/atelier-heath-dark-css",8905:"hljs/androidstudio-css",8981:"hljs/kimbie-dark-css",9053:"hljs/stackoverflow-dark-css",9089:"hljs/github-css",9105:"hljs/vs2015-css",9188:"hljs/a11y-light-css",9368:"hljs/night-owl-css",9446:"hljs/arduino-light-css",9550:"hljs/dark-css",9583:"page-links",9624:"hljs/shades-of-purple-css",9678:"hljs/railscasts-css",9714:"hljs/gml-css",9769:"hljs/atom-one-dark-css",9914:"hljs/paraiso-light-css",9996:"hljs/rainbow-css"}[s]+"."+i.h().slice(0,8)+".css"},i.h=function(){return"0a23590d9c0ad68e84a5"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(s){if("object"==typeof window)return window}}(),i.o=function(s,e){return Object.prototype.hasOwnProperty.call(s,e)},t={},l="Cnblogs-Theme-SimpleMemory:",i.l=function(s,e,r,o){if(t[s])t[s].push(e);else{var n,a;if(void 0!==r)for(var c=document.getElementsByTagName("script"),h=0;h<c.length;h++){var u=c[h];if(u.getAttribute("src")==s||u.getAttribute("data-webpack")==l+r){n=u;break}}n||(a=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,i.nc&&n.setAttribute("nonce",i.nc),n.setAttribute("data-webpack",l+r),n.src=s),t[s]=[e];var d=function(e,l){n.onerror=n.onload=null,clearTimeout(g);var r=t[s];if(delete t[s],n.parentNode&&n.parentNode.removeChild(n),r&&r.forEach((function(s){return s(l)})),e)return e(l)},g=setTimeout(d.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=d.bind(null,n.onerror),n.onload=d.bind(null,n.onload),a&&document.head.appendChild(n)}},i.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},function(){var s;i.g.importScripts&&(s=i.g.location+"");var e=i.g.document;if(!s&&e&&(e.currentScript&&(s=e.currentScript.src),!s)){var t=e.getElementsByTagName("script");t.length&&(s=t[t.length-1].src)}if(!s)throw new Error("Automatic publicPath is not supported in this browser");s=s.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=s}(),r=function(s){return new Promise((function(e,t){var l=i.miniCssF(s),r=i.p+l;if(function(s,e){for(var t=document.getElementsByTagName("link"),l=0;l<t.length;l++){var r=(n=t[l]).getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(r===s||r===e))return n}var o=document.getElementsByTagName("style");for(l=0;l<o.length;l++){var n;if((r=(n=o[l]).getAttribute("data-href"))===s||r===e)return n}}(l,r))return e();!function(s,e,t,l){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",r.onerror=r.onload=function(o){if(r.onerror=r.onload=null,"load"===o.type)t();else{var n=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.href||e,i=new Error("Loading CSS chunk "+s+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=n,i.request=a,r.parentNode.removeChild(r),l(i)}},r.href=e,document.head.appendChild(r)}(s,r,e,t)}))},o={179:0},i.f.miniCss=function(s,e){o[s]?e.push(o[s]):0!==o[s]&&{131:1,269:1,336:1,393:1,604:1,620:1,655:1,657:1,759:1,1089:1,1151:1,1417:1,1437:1,1480:1,1504:1,1589:1,1936:1,2056:1,2080:1,2122:1,2144:1,2171:1,2251:1,2299:1,2447:1,2456:1,2519:1,2565:1,2600:1,2785:1,3062:1,3113:1,3199:1,3290:1,3304:1,3352:1,3353:1,3374:1,3429:1,3449:1,3539:1,3670:1,3731:1,3749:1,3774:1,3851:1,3854:1,3950:1,4033:1,4104:1,4149:1,4168:1,4321:1,4463:1,4495:1,4751:1,4761:1,4802:1,4824:1,5064:1,5114:1,5191:1,5206:1,5360:1,5518:1,5561:1,5706:1,5980:1,6312:1,6387:1,6493:1,6520:1,6655:1,6764:1,6865:1,7335:1,7361:1,7531:1,7591:1,7661:1,7732:1,7898:1,8004:1,8046:1,8132:1,8203:1,8208:1,8209:1,8694:1,8794:1,8813:1,8826:1,8905:1,8981:1,9053:1,9089:1,9105:1,9188:1,9368:1,9446:1,9550:1,9583:1,9624:1,9678:1,9714:1,9769:1,9914:1,9996:1}[s]&&e.push(o[s]=r(s).then((function(){o[s]=0}),(function(e){throw delete o[s],e})))},function(){var s={179:0};i.f.j=function(e,t){var l=i.o(s,e)?s[e]:void 0;if(0!==l)if(l)t.push(l[2]);else{var r=new Promise((function(t,r){l=s[e]=[t,r]}));t.push(l[2]=r);var o=i.p+i.u(e),n=new Error;i.l(o,(function(t){if(i.o(s,e)&&(0!==(l=s[e])&&(s[e]=void 0),l)){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",n.name="ChunkLoadError",n.type=r,n.request=o,l[1](n)}}),"chunk-"+e,e)}};var e=function(e,t){var l,r,o=t[0],n=t[1],a=t[2],c=0;if(o.some((function(e){return 0!==s[e]}))){for(l in n)i.o(n,l)&&(i.m[l]=n[l]);if(a)a(i)}for(e&&e(t);c<o.length;c++)r=o[c],i.o(s,r)&&s[r]&&s[r][0](),s[o[c]]=0},t=self.webpackChunkCnblogs_Theme_SimpleMemory=self.webpackChunkCnblogs_Theme_SimpleMemory||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();i(1793)}();