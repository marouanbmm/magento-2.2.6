// Copyright 2012 Google Inc. All rights reserved.
(function (w, g) {
    w[g] = w[g] || {};
    w[g].e = function (s) {
        return eval(s);
    };
})(window, 'google_tag_manager');
(function () {

    var data = {
        "resource": {
            "version": "19",
            "macros": [{
                "function": "__jsm",
                "vtp_javascript": ["template", "(\"object\"!=typeof JSON\u0026\u0026(JSON={}),function(){function m(a){return 10\u003Ea?\"0\"+a:a}function r(a){return t.lastIndex=0,t.test(a)?'\"'+a.replace(t,function(a){var c=v[a];return\"string\"==typeof c?c:\"\\\\u\"+(\"0000\"+a.charCodeAt(0).toString(16)).slice(-4)})+'\"':'\"'+a+'\"'}function n(a,k){var c,d,e,h,p=f,b=k[a];switch(b\u0026\u0026\"object\"==typeof b\u0026\u0026\"function\"==typeof b.toJSON\u0026\u0026(b=b.toJSON(a)),\"function\"==typeof l\u0026\u0026(b=l.call(k,a,b)),typeof b){case \"string\":return r(b);case \"number\":return isFinite(b)?b+\"\":\"null\";case \"boolean\":case \"null\":return b+\n\"\";case \"object\":if(!b)return\"null\";if(f+=q,h=[],\"[object Array]\"===Object.prototype.toString.apply(b)){var g=b.length;for(c=0;g\u003Ec;c+=1)h[c]=n(c,b)||\"null\";return e=0===h.length?\"[]\":f?\"[\\n\"+f+h.join(\",\\n\"+f)+\"\\n\"+p+\"]\":\"[\"+h.join(\",\")+\"]\",f=p,e}if(l\u0026\u0026\"object\"==typeof l)for(g=l.length,c=0;g\u003Ec;c+=1)\"string\"==typeof l[c]\u0026\u0026(d=l[c],e=n(d,b),e\u0026\u0026h.push(r(d)+(f?\": \":\":\")+e));else for(d in b)Object.prototype.hasOwnProperty.call(b,d)\u0026\u0026(e=n(d,b),e\u0026\u0026h.push(r(d)+(f?\": \":\":\")+e));return e=0===h.length?\"{}\":f?\n\"{\\n\"+f+h.join(\",\\n\"+f)+\"\\n\"+p+\"}\":\"{\"+h.join(\",\")+\"}\",f=p,e}}\"function\"!=typeof Date.prototype.toJSON\u0026\u0026(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+\"-\"+m(this.getUTCMonth()+1)+\"-\"+m(this.getUTCDate())+\"T\"+m(this.getUTCHours())+\":\"+m(this.getUTCMinutes())+\":\"+m(this.getUTCSeconds())+\"Z\":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var u=\/[\\u0000\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]\/g,\nt=\/[\\\\\"\\x00-\\x1f\\x7f-\\x9f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]\/g,f,q,v={\"\\b\":\"\\\\b\",\"\\t\":\"\\\\t\",\"\\n\":\"\\\\n\",\"\\f\":\"\\\\f\",\"\\r\":\"\\\\r\",'\"':'\\\\\"',\"\\\\\":\"\\\\\\\\\"},l;\"function\"!=typeof JSON.stringify\u0026\u0026(JSON.stringify=function(a,k,c){var d;if(f=\"\",q=\"\",\"number\"==typeof c)for(d=0;c\u003Ed;d+=1)q+=\" \";else\"string\"==typeof c\u0026\u0026(q=c);if(l=k,k\u0026\u0026\"function\"!=typeof k\u0026\u0026(\"object\"!=typeof k||\"number\"!=typeof k.length))throw Error(\"JSON.stringify\");return n(\"\",{\"\":a})});\n\"function\"!=typeof JSON.parse\u0026\u0026(JSON.parse=function(a,f){function c(a,d){var e,b,g=a[d];if(g\u0026\u0026\"object\"==typeof g)for(e in g)Object.prototype.hasOwnProperty.call(g,e)\u0026\u0026(b=c(g,e),void 0!==b?g[e]=b:delete g[e]);return f.call(a,d,g)}var d;if(a+=\"\",u.lastIndex=0,u.test(a)\u0026\u0026(a=a.replace(u,function(a){return\"\\\\u\"+(\"0000\"+a.charCodeAt(0).toString(16)).slice(-4)})),\/^[\\],:{}\\s]*$\/.test(a.replace(\/\\\\(?:[\"\\\\\\\/bfnrt]|u[0-9a-fA-F]{4})\/g,\"@\").replace(\/\"[^\"\\\\\\n\\r]*\"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?\/g,\n\"]\").replace(\/(?:^|:|,)(?:\\s*\\[)+\/g,\"\")))return d=eval(\"(\"+a+\")\"),\"function\"==typeof f?c({\"\":d},\"\"):d;throw new SyntaxError(\"JSON.parse\");})})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return function(){C55.scroll={historyStart:function(){void 0===config55.history.scroll?config55.history.scroll={start0:+new Date,counter:1}:(config55.history.scroll[\"start\"+config55.history.scroll.counter]=+new Date,config55.history.scroll.counter+=1)},historyEnd:function(){config55.history.scroll[\"lap\"+(config55.history.scroll.counter-1)]=+new Date-config55.history.scroll[\"start\"+(config55.history.scroll.counter-1)]},CSSMatrix:function(a){var b;if(!a||\"none\"===a){for(a=0;16\u003Ea;a+=1)(b=\na%4===Math.floor(a\/4))?this[\"m\"+(Math.floor(a\/4)+1)+(a%4+1)]=1:this[\"m\"+(Math.floor(a\/40)+1)+(a%4+1)]=0;return this}return this.setMatrixValue(a)},scrollTrack:function(){var a,b,k=C55.utils.DOMUtil.windowHeight(),l=C55.utils.DOMUtil.windowWidth(),f=config55.scrollElementId||window,c=f!==window\u0026\u0026f||null,m=function(){return c\u0026\u0026c.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},n=function(){return c\u0026\u0026c.scrollWidth||Math.max(document.body.scrollWidth,document.documentElement.scrollWidth)},\ng=m(),h=n(),q=function(){var a;try{var b=window.getComputedStyle(f,null);var d=b.getPropertyValue(\"-webkit-transform\")||b.getPropertyValue(\"-moz-transform\")||b.getPropertyValue(\"-ms-transform\")||b.getPropertyValue(\"-o-transform\")||b.getPropertyValue(\"transform\")||\"none\"}catch(u){d=\"none\"}\"none\"!==d\u0026\u0026(a=new this.CSSMatrix(d));switch(config55.scrollDirection){case \"top\":return\"none\"!==d?g-Math.abs(a.d())-k:g-Math.abs(c\u0026\u0026c.scrollTop||document.body.scrollTop||document.documentElement.scrollTop||0);case \"left\":return\"none\"!==\nd?h-Math.abs(a.b())-l:h-Math.abs(c\u0026\u0026c.scrollLeft||document.body.scrollLeft||document.documentElement.scrollLeft||0);case \"right\":return\"none\"!==d?Math.abs(a.b())+l:Math.abs(c\u0026\u0026c.scrollLeft||document.body.scrollLeft||document.documentElement.scrollLeft||0)+l;default:return\"none\"!==d?Math.abs(a.d())+k:Math.abs(c\u0026\u0026c.scrollTop||document.body.scrollTop||document.documentElement.scrollTop||0)+k}},r=function(){g=m();h=n();k=C55.utils.DOMUtil.windowHeight();l=C55.utils.DOMUtil.windowWidth()},p=function(){clearTimeout(a);\na=setTimeout(r,32)};var t=function(){var a;g=m();h=n();var b=q();b=\"top\"===config55.scrollDirection||\"bottom\"===config55.scrollDirection?Math.floor(b\/g*100):Math.floor(b\/h*100);var d=config55.scrollStepsHierarchy;var c=0;for(a=d.length;c\u003Ca;c+=1)b\u003E=d[c].value\u0026\u0026!d[c].reached\u0026\u0026(config55.dataLayer.push({event:\"trackEvent\",eventCategory:\"Scroll\",eventAction:d[c].name,eventLabel:config55.scrollLabel,eventNonInteraction:config55.scrollNonInteractive}),d[c].reached=!0),d[d.length-1].reached\u0026\u0026(C55.utils.DOMUtil.removeEventListener(window,\n\"resize\",p),C55.utils.DOMUtil.removeEventListener(f,\"scroll\",e),C55.utils.DOMUtil.removeEventListener(document,\"mousewheel\",e),C55.utils.DOMUtil.removeEventListener(document,\"DOMMouseScroll\",e))};var e=function(){clearTimeout(b);b=setTimeout(t,32)};return{start:function(){C55.utils.DOMUtil.addEventListener(window,\"resize\",p);C55.utils.DOMUtil.addEventListener(f,\"scroll\",e);C55.utils.DOMUtil.addEventListener(document,\"mousewheel\",e);C55.utils.DOMUtil.addEventListener(document,\"DOMMouseScroll\",e)}}}()};\nC55.scroll.CSSMatrix.prototype={constructor:C55.scroll.CSSMatrix,a:function(a){a\u0026\u0026(this.m11=a);return this.m11},b:function(a){a\u0026\u0026(this.m21=a);return this.m21},c:function(a){a\u0026\u0026(this.m12=a);return this.m12},d:function(a){a\u0026\u0026(this.m22=a);return this.m22},e:function(a){a\u0026\u0026(this.m13=a);return this.m13},f:function(a){a\u0026\u0026(this.m23=a);return this.m23},setMatrixValue:function(a){a=a.match(\/[+\\-]?\\d*[.]?\\d+(?=,|\\))\/g);var b;for(b=0;16\u003Eb;b+=1)this[\"m\"+(Math.floor(b\/4)+1)+(b%4+1)]=Number(a[b]);return this},\ntoString:function(){var a=this.m11.toFixed(6),b;for(b=1;16\u003Eb;b+=1)a+=\",\"+this[\"m\"+(Math.floor(b\/4)+1)+(b%4+1)].toFixed(6);return\"matrix3d(\"+a+\")\"}};C55.scroll.historyStart();C55.scroll.scrollTrack.start();C55.scroll.historyEnd();return\"55scroll\"}})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return function(){\"undefined\"==typeof config55.history.youtube?(config55.history.youtube={start0:+new Date},config55.history.youtube.counter=1):(config55.history.youtube[\"start\"+config55.history.youtube.counter]=+new Date,++config55.history.youtube.counter);config55.versions.youtube=\"1.1.2\";var n=0,q,r=\/youtube\\.com\\\/embed\\\/([^\\?|$]*)\/,t=\/youtube\\.com\\\/v\\\/([^\\?|$]*)\/,C=\/youtube\\.com\\\/v\\\/.*playerapiid=([^\u0026|$]*)\/,u={},k=[],l=[],v=function(){var a=Array.prototype.slice;try{a.call(document.getElementsByTagName(\"body\"))}catch(b){return function(){var a=\n0,b=this.length,d=[];if(!b)return[];for(;a\u003Cb;a++)d.push(this[a]);return d}}return a}(),w=function(){return Array.prototype.indexOf?function(a,b,c){return a.indexOf(b,c)}:function(a,b,c){var e;c=c||0;for(e=a.length;c\u003Ce;c++)if(a[c]===b)return c;return-1}}(),p=function(a,b){a\u0026\u0026config55.dataLayer.push({event:\"trackEvent\",eventCategory:\"Video\",eventAction:a,eventLabel:b})},x=function(){var a={},b=1E3,c=function(a,c){var d=[{name:\"25%\",value:25},{name:\"50%\",value:50},{name:\"75%\",value:75},{name:\"100%\",\nvalue:98}],e=0,m=!1;try{e=c.getDuration()}catch(g){e=c.k.duration}var h=function(){var g=0,f=0,k;try{g=c.getCurrentTime(),f=Math.round(g\/e*100)}catch(F){g=c.k.currentTime,f=Math.round(g\/e*100)}g=0;for(k=d.length;g\u003Ck;g++)f\u003Ed[g].value\u0026\u0026!d[g].reached\u0026\u0026(d[g].reached=!0,p(d[g].name,a));m\u0026\u0026setTimeout(h,b)};return{start:function(){m||(m=!0,h())},stop:function(){m=!1}}};return function(b,d){return a[b]||(a[b]=c(b,d))}}(),y=function(){return function(a){var b=a._videoId;try{switch(a.data){case YT.PlayerState.ENDED:p(\"Watch to End\",\nb);l[b]=\"Ended\";break;case YT.PlayerState.PLAYING:x(b,a.target).start();\"Play\"!==l[b]\u0026\u0026p(\"Play\",b);l[b]=\"Play\";break;case YT.PlayerState.PAUSED:x(b).stop()}}catch(c){throw c;}}}(),D=function(){var a,b;var c=document.getElementsByTagName(\"iframe\");var e=[].concat(v.call(document.getElementsByTagName(\"object\")),v.call(document.getElementsByTagName(\"embed\")));var d=0;for(a=c.length;d\u003Ca;d++)if(b=c[d].src.match(r),b\u0026\u0026!~w(k,c[d])){var f=c[d].id=c[d].id||\"ytvid_\"+ +new Date;new YT.Player(f)}d=0;for(a=e.length;d\u003C\na;d++)if(b=(e[d].data||e[d].src).match(t),b\u0026\u0026!~w(k,e[d]))k.push(e[d]),z(e[d],b[1])},A=function(){var a=window.YT;a._Player=a.Player;a.Player=function(b,c){var e=this;c=c||{};var d=c.events=c.events||{},f=\"function\"==typeof d.onStateChange?d.onStateChange:function(){},h=document.getElementById(b);k.push(h);d.onStateChange=function(a){a._videoId=c.videoId||h.src.match(r)[1];a.lastState=l;y.call(e,a);f\u0026\u0026f.call(e,a)};a._Player.call(this,b,c)};a.Player.prototype=a._Player.prototype;window._onYouTubeIframeAPIReady\u0026\u0026\nwindow._onYouTubeIframeAPIReady();D()},z=function(a,b){var c=\"__YTonstatechange_\"+b;var e=window[c]=function(a){return y({data:a,_videoId:e._videoid})};e._videoid=a.data.match(t)[1];a.addEventListener(\"onStateChange\",c)},E=function(){return function(a){var b;if(a){var c;if(!(c=u[a]))a:{c=a;var e=document.getElementsByTagName(\"object\"),d;var f=0;for(d=e.length;f\u003Cd;f++)if(b=e[f].data.match(C),b\u0026\u0026b[1]===c){c=u[c]=e[f];break a}c=null}if(b=c)k.push(b),z(b,a);window._onYouTubePlayerReady\u0026\u0026window._onYouTubePlayerReady(a)}}}(),\nB=function(){\"complete\"!==document.readyState||n||h()},h=function(){n||\"complete\"!==document.readyState||(++n,q=document.getElementsByTagName(\"head\")[0],document.getElementsByTagName(\"body\"),window._onYouTubePlayerReady=window.onYouTubePlayerReady,window.onYouTubePlayerReady=E,window.YT?function b(){if(!YT.Player)return setTimeout(b,16);A()}():(window._onYouTubeIframeAPIReady=window.onYouTubeIframeAPIReady||null,window.onYouTubeIframeAPIReady=A,function(){var a=document.createElement(\"script\"),b=\nq;a.async=!0;a.src=\"\/\/youtube.com\/iframe_api\";b.appendChild(a)}()))};if(document.readyState){if(\"complete\"===document.readyState)return h()}else setTimeout(h,500);window.addEventListener?(window.addEventListener(\"DOMContentLoaded\",h),window.addEventListener(\"load\",h),document.addEventListener(\"readystatechange\",B)):(window.attachEvent(\"onload\",h),document.attachEvent(\"onreadystatechange\",B));config55.history.youtube[\"lap\"+(config55.history.youtube.counter-1)]=+new Date-config55.history.youtube[\"start\"+\n(config55.history.youtube.counter-1)];return\"55youtube\"}})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return function(){\"undefined\"==typeof config55.history.youtubeParse?(config55.history.youtubeParse={start0:+new Date},config55.history.youtubeParse.counter=1):(config55.history.youtubeParse[\"start\"+config55.history.youtubeParse.counter]=+new Date,++config55.history.youtubeParse.counter);config55.versions.youtubeParse=\"1.1.2\";var n=0,r,t=\/youtube\\.com\\\/embed\\\/([^\\?|$]*)\/,u=\/youtube\\.com\\\/v\\\/([^\\?|$]*)\/,E=\/youtube\\.com\\\/v\\\/.*playerapiid=([^\u0026|$]*)\/,v={},k=[],l=[],p=\"\",w=function(){var a=\nArray.prototype.slice;try{a.call(document.getElementsByTagName(\"body\"))}catch(b){return function(){var a=0,b=this.length,d=[];if(!b)return[];for(;a\u003Cb;a++)d.push(this[a]);return d}}return a}(),x=function(){return Array.prototype.indexOf?function(a,b,c){return a.indexOf(b,c)}:function(a,b,c){var e;c=c||0;for(e=a.length;c\u003Ce;c++)if(a[c]===b)return c;return-1}}(),q=function(a,b){a\u0026\u0026config55.dataLayer.push({event:\"trackEvent\",eventCategory:\"Video\",eventAction:a,eventLabel:b})},y=function(){var a={},b=1E3,\nc=function(a,c){var d=[{name:\"25%\",value:25},{name:\"50%\",value:50},{name:\"75%\",value:75},{name:\"100%\",value:98}],e=0,m=!1;try{e=c.getDuration()}catch(g){e=c.k.duration}var h=function(){var g=0,f=0,k;try{g=c.getCurrentTime(),f=Math.round(g\/e*100)}catch(G){g=c.k.currentTime,f=Math.round(g\/e*100)}g=0;for(k=d.length;g\u003Ck;g++)f\u003Ed[g].value\u0026\u0026!d[g].reached\u0026\u0026(d[g].reached=!0,q(d[g].name,a));m\u0026\u0026setTimeout(h,b)};return{start:function(){m||(m=!0,h())},stop:function(){m=!1}}};return function(b,d){return a[b]||\n(a[b]=c(b,d))}}(),z=function(){return function(a){var b=a._videoId;try{switch(a.data){case YT.PlayerState.ENDED:q(\"Watch to End\",b);l[b]=\"Ended\";break;case YT.PlayerState.PLAYING:y(b,a.target).start();\"Play\"!==l[b]\u0026\u0026q(\"Play\",b);l[b]=\"Play\";break;case YT.PlayerState.PAUSED:y(b).stop()}}catch(c){throw c;}}}(),B=function(){var a,b;var c=document.getElementsByTagName(\"iframe\");var e=[].concat(w.call(document.getElementsByTagName(\"object\")),w.call(document.getElementsByTagName(\"embed\")));var d=0;for(a=\nc.length;d\u003Ca;d++)if(b=c[d].src.match(t),b\u0026\u0026(!~x(k,c[d])||document.location.hash.match(\"videoshow\")\u0026\u0026p!==document.location.hash)){var f=c[d].id=p!==document.location.hash?c[d].id||\"ytvid_\"+ +new Date:\"ytvid_\"+ +new Date;new YT.Player(f);p=document.location.hash}d=0;for(a=e.length;d\u003Ca;d++)if(b=(e[d].data||e[d].src).match(u),b\u0026\u0026!~x(k,e[d]))k.push(e[d]),A(e[d],b[1]);setTimeout(B,500)},C=function(){var a=window.YT;a._Player=a.Player;a.Player=function(b,c){var e=this;c=c||{};var d=c.events=c.events||{},\nf=\"function\"==typeof d.onStateChange?d.onStateChange:function(){},h=document.getElementById(b);k.push(h);d.onStateChange=function(a){a._videoId=c.videoId||h.src.match(t)[1];a.lastState=l;z.call(e,a);f\u0026\u0026f.call(e,a)};a._Player.call(this,b,c)};a.Player.prototype=a._Player.prototype;window._onYouTubeIframeAPIReady\u0026\u0026window._onYouTubeIframeAPIReady();B()},A=function(a,b){var c=\"__YTonstatechange_\"+b;var e=window[c]=function(a){return z({data:a,_videoId:e._videoid})};e._videoid=a.data.match(u)[1];a.addEventListener(\"onStateChange\",\nc)},F=function(){return function(a){var b;if(a){var c;if(!(c=v[a]))a:{c=a;var e=document.getElementsByTagName(\"object\"),d;var f=0;for(d=e.length;f\u003Cd;f++)if(b=e[f].data.match(E),b\u0026\u0026b[1]===c){c=v[c]=e[f];break a}c=null}if(b=c)k.push(b),A(b,a);window._onYouTubePlayerReady\u0026\u0026window._onYouTubePlayerReady(a)}}}(),D=function(){\"complete\"!==document.readyState||n||h()},h=function(){n||\"complete\"!==document.readyState||(++n,r=document.getElementsByTagName(\"head\")[0],document.getElementsByTagName(\"body\"),window._onYouTubePlayerReady=\nwindow.onYouTubePlayerReady,window.onYouTubePlayerReady=F,window.YT?function b(){if(!YT.Player)return setTimeout(b,16);C()}():(window._onYouTubeIframeAPIReady=window.onYouTubeIframeAPIReady||null,window.onYouTubeIframeAPIReady=C,function(){var a=document.createElement(\"script\"),b=r;a.async=!0;a.src=\"\/\/youtube.com\/iframe_api\";b.appendChild(a)}()))};if(document.readyState){if(\"complete\"===document.readyState)return h()}else setTimeout(h,500);window.addEventListener?(window.addEventListener(\"DOMContentLoaded\",\nh),window.addEventListener(\"load\",h),document.addEventListener(\"readystatechange\",D)):(window.attachEvent(\"onload\",h),document.attachEvent(\"onreadystatechange\",D));config55.history.youtubeParse[\"lap\"+(config55.history.youtubeParse.counter-1)]=+new Date-config55.history.youtubeParse[\"start\"+(config55.history.youtubeParse.counter-1)];return\"55youtubeParse\"}})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=\"UA-7297863-1\";document.domain.match(\/cathedral\\.fr|chaumet\\.com\\.lvmh-vip\\.lvmh\\.lbn\\.fr|chaumet-en-rf\\.leadformance\\.com|preprod\\.chaumet\\.com\/i)\u0026\u0026(a=\"UA-7297863-7\");return a})();"]
            }, {
                "function": "__c",
                "vtp_value": "chaumet"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){C55.uaClientID={historyStart:function(){void 0===config55.history.uaClientID?(config55.history.uaClientID={start0:+new Date},config55.history.uaClientID.counter=1):(config55.history.uaClientID[\"start\"+config55.history.uaClientID.counter]=+new Date,config55.history.uaClientID.counter+=1)},historyEnd:function(){config55.history.uaClientID[\"lap\"+(config55.history.uaClientID.counter-1)]=+new Date-config55.history.uaClientID[\"start\"+(config55.history.uaClientID.counter-1)]},init:function(){if(!config55.clientId){var c,\ne,a=document.cookie.split(\";\"),f=function(a){var d=1,c;if(a)for(d=0,c=a.length-1;0\u003C=c;c--){var b=a.charCodeAt(c);d=(d\u003C\u003C6\u0026268435455)+b+(b\u003C\u003C14);b=d\u0026266338304;d=0!=b?d^b\u003E\u003E21:d}return d};for(e in a){var b=a[e].replace(\" \",\"\").split(\"\\x3d\");b[0]==\"__ga\"+", ["escape", ["macro", 5], 8, 16], "\u0026\u0026(c=b[1].split(\".\")[2]+\".\"+b[1].split(\".\")[3])}a=c||\"unknown\";if(\"unknown\"===a){a=window.navigator;a=a.appName+a.version+a.platform+a.userAgent+(document.cookie?document.cookie:\"\")+(document.referrer?document.referrer:\"\");b=a.length;\nfor(c=window.history.length;0\u003Cc;)a+=c--^b++;a=[Math.round(2147483647*Math.random())^f(a)\u00262147483647,Math.round((new Date).getTime()\/1E3)].join(\".\")}window.config55.clientId=a}}};C55.uaClientID.historyStart();C55.uaClientID.init();C55.uaClientID.historyEnd();return config55.clientId})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return function(){C55.utils={_log:[]};C55.utils.log=function(c){c.date=+new Date;c.stack=c.stack.replace(\/^[^\\(]+?[\\n$]\/gm,\"\").replace(\/^\\s+at\\s+\/gm,\"\").replace(\/^Object.\u003Canonymous\u003E\\s*\\(\/gm,\"{anonymous}()@\").split(\"\\n\");this._log.push(c)};C55.utils.isNative=function(c){var a=\/\\s*\\[native code\\]\\s*\/i;try{return!!c.toString().match(a)}catch(b){return!1}};C55.utils.enumerate=function(c){return function(a){var b,d;if(c)try{return d=Object.keys(a)}catch(f){}d=[];a=a?a.callee?a.slice(a):a:{};\nfor(b in a)a.hasOwnProperty(b)\u0026\u0026d.push(b);return d}}(C55.utils.isNative(Object.keys));C55.utils.enumerateIterator=function(c){var a=[],b;for(b in c)c.hasOwnProperty(b)\u0026\u0026a.push([b,c[b]]);return a};C55.utils.serialize=function(c){var a,b=[],d=\"\\x26\",f=\"\\x3d\";var g=1\u003Carguments.length?arguments:void 0!==c?c:{};var h=this.enumerate(g);var e=h.length;for(a=0;a\u003Ce;a+=1){var k=encodeURI(h[a]);g[h[a]]\u0026\u0026(k+=f+encodeURIComponent(g[h[a]]));b.push(k)}return b.join(d).replace(\/%20\/g,\"+\")};C55.utils.objectify=function(c){var a=\n{},b=\/\u0026amp;|\u0026\/g,d=\"\\x3d\",f;-1!==c.search(b)?b=c.split(b):c.length?(b={},b[c]=c.toString()):b=\"Array\"===typeof c?[c]:[];var g=this.enumerate(b);var h=g.length;for(f=0;f\u003Ch;f+=1){var e=decodeURI(b[g[f]].replace(\/\\+\/g,\"%20\"));var k=-1!==e.indexOf(d)?e.indexOf(d):c.length;var l=e.split(d,1);e=e.slice(k+1);a[l]=e}return a};C55.utils.URLparse=function(c){var a=document.createElement(\"a\"),b={};a.href=c;b.hash=a.hash;b.params=C55.utils.objectify(a.search.slice(1));b.pathname=\"\/\"!==a.pathname[0]?\"\/\"+a.pathname:\na.pathname;b.host=a.hostname;b.protocol=a.protocol;b.port=a.port;return b};C55.utils.DOMUtil={addEventListener:function(){return window.addEventListener?function(c,a,b,d){return c.addEventListener(a,b,!!d)}:function(c,a,b){return c.attachEvent(\"on\"+a,function(a){a=a||window.event;a.target=a.target||a.srcElement;a.relatedTarget=a.relatedTarget||a.fromElement||a.toElement;a.isImmediatePropagationStopped=a.isImmediatePropagationStopped||!1;a.preventDefault=a.preventDefault||function(){a.returnValue=\n!1};a.stopPropagation=a.stopPropagation||function(){a.cancelBubble=!0};a.stopImmediatePropagation=a.stopImmediatePropagation||function(){a.stopPropagation();a.isImmediatePropagationStopped=!0};a.isImmediatePropagationStopped||b(a)})}}(),removeEventListener:function(){return window.removeEventListener?function(c,a,b,d){return c.removeEventListener(a,b,!!d)}:function(c,a,b){c.detachEvent(\"on\"+a,b)}}(),windowHeight:function(){return window.innerHeight?window.innerHeight:document.documentElement\u0026\u0026document.documentElement.clientHeight?\ndocument.documentElement.clientHeight:document.body?document.body.clientHeight:0},windowWidth:function(){return window.innerWidth?window.innerWidth:document.documentElement\u0026\u0026document.documentElement.clientWidth?document.documentElement.clientWidth:document.body?document.body.clientWidth:0}};return\"55utils\"}})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){C55.prototype.nodeExplorer=function(a,c,b){var d;if(a\u0026\u0026void 0!==a[c]\u0026\u0026(b\u0026\u0026a[c]===b||!b))return a;if(a instanceof Array)for(d=a.length-1;0\u003C=d;--d){var e=this.nodeExplorer(a[d],c,b);if(void 0!==e)return e}else if(\"object\"===typeof a)for(d in a)if(a.hasOwnProperty(d)\u0026\u0026(e=this.nodeExplorer(a[d],c,b),void 0!==e))return e};C55.prototype.getDataLayerValue=function(a){var c=this.nodeExplorer(this.dataLayer,a);return c?c[a]:\"\"};C55.prototype.inDataLayer=function(a,c){var b=this.nodeExplorer(this.dataLayer,\na,c);return b?!0:!1};C55.prototype.getDataLayerObject=function(a,c){var b=this.nodeExplorer(this.dataLayer,a,c);return b?b:!1};C55.prototype.getDataLayerListById=function(a){var c=function(a,d,e){var b;a\u0026\u0026void 0!==a[d]\u0026\u0026a[d]\u0026\u0026e.push(a);if(a instanceof Array)for(b=a.length-1;0\u003C=b;--b)c(a[b],d,e);else if(\"object\"===typeof a)for(b in a)a.hasOwnProperty(b)\u0026\u0026c(a[b],d,e);return e};return c(this.dataLayer,a,[])};C55.prototype.pushDL=function(a,c,b,d,e,f){var g=-1;a\u0026\u0026(g=this.indexKw(this.insensitiveWords,\na.toLowerCase()));e||(e=0);f||(f=!1);-1\u003Cg\u0026\u0026(a=this.insensitiveWords[g]);switch(a){case \"trackEvent\":this.dataLayer.push({event:a,eventCategory:c,eventAction:b,eventLabel:d,eventValue:e,eventNonInteraction:f});break;case \"trackSocial\":this.dataLayer.push({event:a,socialNetwork:c,socialAction:b,socialTarget:d,page:e});break;case \"virtualPageview\":a={event:a};c\u0026\u0026(a.page=c);this.dataLayer.push(a);break;default:throw Error(\"Unknown argument to push in dataLayer array.\");}}})();"]
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "eventNonInteraction",
                "vtp_dataLayerVersion": 2
            }, {
                "function": "__v",
                "vtp_name": "eventCategory",
                "vtp_dataLayerVersion": 2
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_name": "pageCategory",
                "vtp_dataLayerVersion": 2
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "productCategory"
            }, {
                "function": "__v",
                "vtp_name": "eventAction",
                "vtp_dataLayerVersion": 2
            }, {
                "function": "__v",
                "vtp_name": "eventLabel",
                "vtp_dataLayerVersion": 2
            }, {
                "function": "__v",
                "vtp_name": "eventValue",
                "vtp_dataLayerVersion": 2
            }, {
                "function": "__c",
                "vtp_value": "5.1"
            }, {
                "function": "__cid"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return function(){\"undefined\"==typeof config55.history.configuration?(config55.history.configuration={start0:+new Date},config55.history.configuration.counter=1):(config55.history.configuration[\"start\"+config55.history.configuration.counter]=+new Date,++config55.history.configuration.counter);window.config55.hash=!1;config55.sendEventClassic=!0;window.config55.queryParameters.push(\"accountCreation\");", ["escape", ["macro", 1], 8, 16], "();config55.scrollNonInteractive=!0;config55.history.configuration[\"lap\"+\n(config55.history.configuration.counter-1)]=+new Date-config55.history.configuration[\"start\"+(config55.history.configuration.counter-1)];return\"55configuration\"}})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return function(){if(window.config55)return\"55logic\";Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){if(!this)throw new TypeError('\"this\" is null or not defined');var c=this,e=c.length;var d=+b||0;if(0===e)return-1;Infinity===Math.abs(d)\u0026\u0026(d=0);if(d\u003E=e)return-1;for(d=Math.max(0\u003C=d?d:e-Math.abs(d),0);d\u003Ce;){if(c.hasOwnProperty(d)\u0026\u0026c[d]===a)return d;d+=1}return-1});var a=function(){this.initDataLayer();this.insensitiveWords=[\"trackSocial\",\"trackEvent\",\"virtualPageview\"];this.history=\n{};this.path=\"\/\";this.encodeCookie=!0;this.expires=(new Date(+new Date+15552E6)).toUTCString();this.loadCookie();this.queryParameters=[];this.hash=!0;this.excludeParams=\"email mail address lastName firstName username member[mail] senderEmail NOM PRE_NOM E_MAIL j_username j_password email_user login user_email email1 confEmail1 email2 confEmail2\".split(\" \");this.membership=\"\";this.membershipHierarchy=[\"non-member\",\"member\",\"1stbuyer\",\"buyer\"];this.engagement=\"\";this.engagementHierarchy=[\"regular\",\n\"sympathiser\",\"viewer\",\"subscriber\",\"ambassador\"];this.engagementTopStatus=\"top_\";this.sendEventClassic=!1;this.sporadicPeriod=30;this.frequentPeriod=7;this.visitorFrequencies=[\"new\",\"sporadic\",\"occasional\",\"frequent\"];this.scrollDirection=\"bottom\";this.scrollLabel=this.scrollElementId=\"\";this.scrollNonInteractive=!1;this.scrollStepsHierarchy=[{name:\"fold\",value:0},{name:\"25%\",value:25},{name:\"50%\",value:50},{name:\"75%\",value:75},{name:\"100%\",value:97}];this.youtubeParse=!1;this.youtubeStepsHierarchy=\n[{name:\"25%\",value:25},{name:\"50%\",value:50},{name:\"75%\",value:75},{name:\"100%\",value:98}];this.htmlVideoParse=!1;this.htmlVideoStepsHierarchy=[{name:\"25%\",value:25},{name:\"50%\",value:50},{name:\"75%\",value:75},{name:\"100%\",value:98}];this.trackerName=\"t55\";this.nbPvTpl=1;this.clientId=!1;this.version=", ["escape", ["macro", 17], 8, 16], "};window.C55=a;a.prototype.initDataLayer=function(){for(var a=window.document.getElementsByTagName(\"script\"),b,c=a.length,g=0,d,h=!1,f=this||{};g\u003Cc\u0026\u0026!h;)b=a[g].src,\/www\\.googletagmanager\\.com\\\/gtm\\.js\\?\/.test(b)\u0026\u0026\nb.split(\"id\\x3d\")[1].split(\"\\x26l\\x3d\")[0]===", ["escape", ["macro", 18], 8, 16], "\u0026\u0026(d=b.split(\"\\x26l\\x3d\")[1],h=!0),g+=1;f.dataLayer=d?window[d]||[]:window.dataLayer||[];f._push=f.dataLayer.push;f.dataLayer.push=function(a){var e=(e=a?a.event:null)?f.indexKw(f.insensitiveWords,e.toLowerCase()):-1;-1!==e\u0026\u0026(a.event=f.insensitiveWords[e]);a.socialAction\u0026\u0026!f.engagement\u0026\u0026(f.engagement=\"ambassador\");return f._push.call(f.dataLayer,a)}};", ["escape", ["macro", 0], 8, 16], ";a.prototype.domain=function(){var a,b=\"stld\\x3dcookie\",c=document.location.hostname.split(\".\",\n-1);for(a=c.length-1;0\u003C=a;--a){var g=c.slice(a).join(\".\");document.cookie=b+\";domain\\x3d.\"+g+\";\";if(-1\u003Cdocument.cookie.indexOf(b))return document.cookie=b.split(\"\\x3d\",-1)[0]+\"\\x3d;domain\\x3d.\"+g+\";expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;\",g}}();a.prototype.loadCookie=function(){document.cookie.match(\"__55\\x3d([^;$]*)\")?this.store=this.encodeCookie?JSON.parse(decodeURIComponent(document.cookie.match(\"__55\\x3d([^;$]*)\")[1])):JSON.parse(document.cookie.match(\"__55\\x3d([^;$]*)\")[1]):this.store={}};\na.prototype.saveCookie=function(){window.document.cookie=this.encodeCookie?\"__55\\x3d\"+encodeURIComponent(JSON.stringify(this.store))+\";expires\\x3d\"+this.expires+\";path\\x3d\"+this.path+\";domain\\x3d\"+this.domain+\";\":\"__55\\x3d\"+JSON.stringify(this.store)+\";expires\\x3d\"+this.expires+\";path\\x3d\"+this.path+\";domain\\x3d\"+this.domain+\";\"};a.prototype.addDays=function(a){var b=new Date,c=new Date;c.setDate(b.getDate()+a);return c.toUTCString()};a.prototype.indexKw=function(a,b,c){var e;c=c||0;for(e=a.length;c\u003C\ne;c+=1)if(b\u0026\u0026a[c].toString().toLowerCase()===b.toLowerCase())return c;return-1};", ["escape", ["macro", 7], 8, 16], "();a.prototype.setHierarchy=function(a,b){this[a+\"Hierarchy\"]=b};a.prototype.updateHierarchy=function(a,b,c){var e={},d=this[a+\"Hierarchy\"];var h=\"membership\"===a?\"ms\":\"engagement\"===a?\"st\":a;var f=this.store[h];c=!!c||!1;d\u0026\u0026-1\u003Cd.indexOf(b)\u0026\u0026(c?this.store[h]=b:d.indexOf(f)\u003Cd.indexOf(b)\u0026\u0026(this.store[h]=b),this.saveCookie(),e[a+\"Hierarchy\"]=this.store[h],this.dataLayer.push(e))};", ["escape", ["macro", 8], 8, 16], ";\nwindow.config55=new a;config55.isNative=function(){a.utils.log({stack:Error().stack});return a.utils.isNative.apply(a.utils,arguments)};config55.enumerate=function(){a.utils.log({stack:Error().stack});return a.utils.enumerate.apply(a.utils,arguments)};config55.enumerateIterator=function(){a.utils.log({stack:Error().stack});return a.utils.enumerateIterator.apply(a.utils,arguments)};config55.serialize=function(){a.utils.log({stack:Error().stack});return a.utils.serialize.apply(a.utils,arguments)};config55.objectify=\nfunction(){a.utils.log({stack:Error().stack});return a.utils.objectify.apply(a.utils,arguments)};config55.URL={parse:function(){a.utils.log({stack:Error().stack});return a.utils.URLparse.apply(a.utils,arguments)}};", ["escape", ["macro", 19], 8, 16], "();return\"55logic\"}})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){void 0===window.config55\u0026\u0026", ["escape", ["macro", 20], 8, 16], "();var e=window.location;e=C55.utils.URLparse(e);var g=e.pathname,f=e.hash.slice(1),h=e.params,d=\"\";C55.page={historyStart:function(){void 0===config55.history.pagePath?(config55.history.pagePath={start0:+new Date},config55.history.pagePath.counter=1):(config55.history.pagePath[\"start\"+config55.history.pagePath.counter]=+new Date,config55.history.pagePath.counter+=1)},historyEnd:function(){config55.history.pagePath[\"lap\"+(config55.history.pagePath.counter-\n1)]=+new Date-config55.history.pagePath[\"start\"+(config55.history.pagePath.counter-1)]},pagePosition:function(){var a=config55.dataLayer.length;for(--a;0\u003C=a;--a)if(config55.dataLayer[a].page)return a;return-1},queryParams:function(){var a=config55.dataLayer.length,b={},c;for(--a;0\u003C=a;--a)for(c=0;c\u003Cconfig55.queryParameters.length;c+=1)config55.dataLayer[a][config55.queryParameters[c]]\u0026\u0026!b.hasOwnProperty(config55.queryParameters[c])\u0026\u0026(b[config55.queryParameters[c]]=config55.dataLayer[a][config55.queryParameters[c]]);\nreturn b},getEventName:function(){return config55.dataLayer[config55.dataLayer.length-1]?config55.dataLayer[config55.dataLayer.length-1].event:\"\"},pathname:function(){return-1===C55.page.pagePosition()?g:config55.dataLayer[C55.page.pagePosition()].page},removeQueryParams:function(a){var b,c=config55.excludeParams.length,d;for(b=0;b\u003Cc;b++)a.hasOwnProperty(config55.excludeParams[b])\u0026\u0026delete a[config55.excludeParams[b]];for(d in a)\"string\"===typeof a[d]\u0026\u0026(b=a[d].match(\/@[a-zA-Z_]+?\\.\/))\u0026\u0026b.length\u0026\u0026delete a[d];\nreturn a},getSearch:function(){var a=C55.page.pathname(),b=C55.utils.serialize(C55.page.removeQueryParams(h)),c=C55.utils.serialize(C55.page.removeQueryParams(C55.page.queryParams()));b?(a+=\"?\"+b,c\u0026\u0026(a+=\"\\x26\"+c)):c\u0026\u0026(a+=\"?\"+c);return a},init:function(){\"virtualPageview\"!==C55.page.getEventName()?(d=C55.page.getSearch(),config55.hash\u0026\u0026f\u0026\u0026(d=d!==C55.page.pathname()?d+(\"\\x26\"+f):d+(\"?\"+f)),\"404\"===C55.page.pathname()\u0026\u0026(d=\"\/404.html?page\\x3d\"+g+\"\\x26ref\\x3d\"+window.document.referrer)):d=config55.dataLayer[C55.page.pagePosition()].page;\nC55.page.historyEnd();return d}};C55.page.historyStart();return C55.page.init()})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){void 0===window.config55\u0026\u0026", ["escape", ["macro", 20], 8, 16], "();C55.visitorFrequency={historyStart:function(){void 0===config55.history.visitorFrequency?(config55.history.visitorFrequency={start0:+new Date},config55.history.visitorFrequency.counter=1):(config55.history.visitorFrequency[\"start\"+config55.history.visitorFrequency.counter]=+new Date,config55.history.visitorFrequency.counter+=1)},historyEnd:function(){config55.history.visitorFrequency[\"lap\"+(config55.history.visitorFrequency.counter-1)]=\n+new Date-config55.history.visitorFrequency[\"start\"+(config55.history.visitorFrequency.counter-1)]},isSameDay:function(a,b){var c=new Date(a),d=new Date(b);return c.toDateString()===d.toDateString()?!0:!1},daysBetween:function(a,b){var c=864E5;return Math.round(Math.abs(a-b)\/c)},setVF:function(a){config55.store.vF=config55.visitorFrequencies[a];config55.saveCookie();C55.visitorFrequency.historyEnd();return config55.store.vF},init:function(){var a=+new Date,b=+config55.store.vF0||!1,c=+config55.store.vF1||\n!1,d=+config55.store.vF2||!1;if(C55.visitorFrequency.isSameDay(a,b)||C55.visitorFrequency.isSameDay(a,c)||C55.visitorFrequency.isSameDay(a,d))return C55.visitorFrequency.historyEnd(),config55.store.vF;if(!b)return config55.store.vF0=a,C55.visitorFrequency.setVF(0);if(!c)return config55.store.vF1=a,C55.visitorFrequency.daysBetween(b,a)\u003C=config55.sporadicPeriod?C55.visitorFrequency.setVF(2):C55.visitorFrequency.setVF(1);d\u0026\u0026(config55.store.vF0=b=c,config55.store.vF1=c=d);config55.store.vF2=a;return C55.visitorFrequency.daysBetween(b,\na)\u003C=config55.frequentPeriod?C55.visitorFrequency.setVF(3):C55.visitorFrequency.daysBetween(b,a)\u003Econfig55.sporadicPeriod\u0026\u0026C55.visitorFrequency.daysBetween(c,a)\u003Econfig55.sporadicPeriod?C55.visitorFrequency.setVF(1):C55.visitorFrequency.setVF(2)}};C55.visitorFrequency.historyStart();return C55.visitorFrequency.init()})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "visitLoginState"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "siteLanguage"
            }, {
                "function": "__u",
                "vtp_component": "URL"
            }, {
                "function": "__c",
                "vtp_value": "chaumet.com, boutiques.chaumet.fr"
            }, {
                "function": "__v",
                "vtp_name": "socialTarget",
                "vtp_dataLayerVersion": 2
            }, {
                "function": "__v",
                "vtp_name": "socialAction",
                "vtp_dataLayerVersion": 2
            }, {
                "function": "__v",
                "vtp_name": "socialNetwork",
                "vtp_dataLayerVersion": 2
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "page"
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_name": "productName",
                "vtp_dataLayerVersion": 2
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "productId"
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_name": "videoStep",
                "vtp_dataLayerVersion": 2
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_name": "videoId",
                "vtp_dataLayerVersion": 2
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventaction"
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_name": "storeType",
                "vtp_dataLayerVersion": 2
            }, {
                "function": "__u",
                "vtp_component": "HOST"
            }, {
                "function": "__u",
                "vtp_component": "HOST"
            }, {
                "function": "__c",
                "vtp_value": "c20a567050af4d1a6a44b7fb52eb6454"
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_name": "domainName",
                "vtp_dataLayerVersion": 2
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_name": "virtualPage",
                "vtp_dataLayerVersion": 2
            }, {
                "function": "__v",
                "vtp_setDefaultValue": true,
                "vtp_name": "transactionId",
                "vtp_defaultValue": "",
                "vtp_dataLayerVersion": 2
            }, {
                "function": "__v",
                "vtp_setDefaultValue": true,
                "vtp_name": "transactionTotal",
                "vtp_defaultValue": "",
                "vtp_dataLayerVersion": 2
            }, {
                "function": "__c",
                "vtp_value": ["macro", 18]
            }, {
                "function": "__c",
                "vtp_value": "__55ga"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){\"undefined\"===typeof window.config55\u0026\u0026", ["escape", ["macro", 20], 8, 16], "();\"undefined\"==typeof config55.history.engagement?(config55.history.engagement={start0:+new Date},config55.history.engagement.counter=1):(config55.history.engagement[\"start\"+config55.history.engagement.counter]=+new Date,++config55.history.engagement.counter);config55.versions.engagement=\"1.2.2\";twSubscribed=googleSubcribed=!1;var h=function(){var c=config55.dataLayer.length,b=0;for(--c;0\u003C=c;--c)config55.dataLayer[c].socialAction\u0026\u0026\n++b;return b},k=function(){var c=\"Google\";window._track55GoogleSocial=function(b){var a=\"on\"==b.state?\"+1\":\"-1\";b=b.href;g(c,a,b)}},l=function(){var c=\"facebook\",b;if(window.fbSubscribed)return!1;try{var a=FB.Event.subscribe}catch(p){return!1}window.fbSubscribed=!0;var d=0;var e=config55.enumerateIterator({\"edge.create\":\"like\",\"edge.remove\":\"unlike\",\"message.send\":\"send\"});for(b=e.length;d\u003Cb;d++)(function(b,d){a(b,function(a){g(c,d,a)})})(e[d][0],e[d][1]);return!0},m=function(){var c=\"twitter\",b=\n\"tweet\";if(window.twSubscribed)return!1;try{twttr.events.bind(\"tweet\",function(a){if(!a)return!1;a.target\u0026\u0026\"IFRAME\"==a.target.tagName?(a=a.target.src,a=a.split(\"#\")[0],a=a.split(\"?\")[1]||\"\",a=config55.objectify(a),a=a.url?unescape(a.url):void 0):a=\"\";g(c,b,a)})}catch(a){return!1}return window.twSubscribed=!0},g=function(c,b,a){c=\"string\"==typeof c?c:null;b=\"string\"==typeof b?b:null;a=\"string\"==typeof a?a:\"\";if(c\u0026\u0026b){if(b==window.lastAction)return!1;window.lastAction=b;\"unlike\"!==b\u0026\u0026\"-1\"!==b\u0026\u0026(config55.store.st=\nn());config55.dataLayer.push({event:\"trackSocial\",socialNetwork:c,socialAction:b,socialTarget:a});config55.sendEventClassic\u0026\u0026config55.dataLayer.push({event:\"trackEvent\",eventCategory:\"Social\",eventAction:b,eventLabel:c})}},f=function(c){var b=c.match(new RegExp(config55.engagementTopStatus+\"(.*)\"));c=b?b[1]:c;return config55.engagementHierarchy.indexOf(c)},n=function(){var c=15552E6,b=config55.engagementHierarchy.length-1,a=config55.store.st?f(config55.store.st):0;a=Math.min(Math.max(a,0),b);var d=\nconfig55.engagement||\"\",e=config55.store.st?!!config55.store.st.match(new RegExp(config55.engagementTopStatus+\"(.*)\")):!1,g=e\u0026\u0026config55.store.stts||NaN,h=f(d);if(!e\u0026\u0026+a\u003C+b)return config55.engagementHierarchy[b];if(+a==+b)return e\u0026\u0026+new Date-g\u003Cc||(config55.store.stts=+new Date),config55.engagementTopStatus+config55.engagementHierarchy[a];if(+a\u003E+h||!d)return config55.engagementHierarchy[a]};config55.engagement\u0026\u0026window.nbSI!=h()\u0026\u0026(f(config55.store.st||\"\")\u003Cf(config55.engagement)?config55.store.st=config55.engagement:\nf(config55.store.st)!=config55.engagementHierarchy.length-1||f(config55.engagement)!=config55.engagementHierarchy.length-1||config55.store.st.match(new RegExp(config55.engagementTopStatus+\"(.*)\"))||(config55.store.st=config55.engagementTopStatus+config55.engagementHierarchy[config55.engagementHierarchy.length-1],config55.store.stts=+new Date),window.nbSI=h());k();window.twSubscribed||m();window.fbSubscribed||l();config55.store.st||(config55.store.st=config55.engagementHierarchy[0]);config55.saveCookie();\nconfig55.history.engagement[\"lap\"+(config55.history.engagement.counter-1)]=+new Date-config55.history.engagement[\"start\"+(config55.history.engagement.counter-1)];return config55.store.st})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){\"undefined\"===typeof window.config55\u0026\u0026", ["escape", ["macro", 20], 8, 16], "();\"undefined\"==typeof config55.history.membership?(config55.history.membership={start0:+new Date},config55.history.membership.counter=1):(config55.history.membership[\"start\"+config55.history.membership.counter]=+new Date,++config55.history.membership.counter);config55.versions.membership=\"1.1\";var b=config55.store.ltId||\"\",a=", ["escape", ["macro", 43], 8, 16], "||\"\";if(config55.membership)config55.membershipHierarchy.indexOf(config55.store.ms)\u003C\nconfig55.membershipHierarchy.indexOf(config55.membership)\u0026\u0026(config55.store.ms=config55.membership);else{if(a\u0026\u0026+", ["escape", ["macro", 44], 8, 16], "){if(b===a)return config55.store.ms;config55.membershipHierarchy.indexOf(config55.store.ms)\u003Cconfig55.membershipHierarchy.indexOf(\"1stbuyer\")?config55.store.ms=\"1stbuyer\":config55.membershipHierarchy.indexOf(config55.store.ms)\u003Cconfig55.membershipHierarchy.indexOf(\"buyer\")\u0026\u0026(config55.store.ms=\"buyer\");config55.store.ltId=a}config55.store.ms||(config55.store.ms=config55.membershipHierarchy[0])}config55.saveCookie();\nconfig55.history.membership[\"lap\"+(config55.history.membership.counter-1)]=+new Date-config55.history.membership[\"start\"+(config55.history.membership.counter-1)];return config55.store.ms})();"]
            }, {
                "function": "__c",
                "vtp_value": "2592000000"
            }, {
                "function": "__c",
                "vtp_value": "auto"
            }, {
                "function": "__aev",
                "vtp_varType": "ELEMENT"
            }, {
                "function": "__aev",
                "vtp_varType": "CLASSES"
            }, {
                "function": "__aev",
                "vtp_varType": "ID"
            }, {
                "function": "__aev",
                "vtp_varType": "TARGET"
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__aev",
                "vtp_varType": "URL"
            }, {
                "function": "__aev",
                "vtp_varType": "HISTORY_CHANGE_SOURCE"
            }, {
                "function": "__aev",
                "vtp_varType": "HISTORY_NEW_STATE"
            }, {
                "function": "__aev",
                "vtp_varType": "HISTORY_NEW_URL_FRAGMENT"
            }, {
                "function": "__aev",
                "vtp_varType": "HISTORY_OLD_STATE"
            }, {
                "function": "__aev",
                "vtp_varType": "HISTORY_OLD_URL_FRAGMENT"
            }, {
                "function": "__f"
            }, {
                "function": "__u",
                "vtp_component": "PATH"
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_name": "siteLocation",
                "vtp_dataLayerVersion": 2
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "contactFormType"
            }, {
                "function": "__u",
                "vtp_component": "URL"
            }, {
                "function": "__u",
                "vtp_component": "PATH"
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }, {
                "function": "__ctv"
            }],
            "tags": [{
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": ["macro", 10],
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["macro", 11],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_contentGroup": ["list", ["map", "index", "1", "group", ["macro", 12]], ["map", "index", "2", "group", ["macro", 13]]],
                "vtp_eventAction": ["macro", 14],
                "vtp_eventLabel": ["macro", 15],
                "vtp_setTrackerName": true,
                "vtp_doubleClick": true,
                "vtp_eventValue": ["macro", 16],
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "allowLinker", "value", "true"], ["map", "fieldName", "cookieDomain", "value", "auto"], ["map", "fieldName", "cookieName", "value", ["template", "__ga", ["macro", 5]]], ["map", "fieldName", "page", "value", ["macro", 21]]],
                "vtp_trackerName": ["template", "__ga", ["macro", 5]],
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", "3", "dimension", ["macro", 22]], ["map", "index", "4", "dimension", ["macro", 23]], ["map", "index", "5", "dimension", ["macro", 24]], ["map", "index", "6", "dimension", ["macro", 6]]],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 4],
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 24
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_contentGroup": ["list", ["map", "index", "1", "group", ["macro", 12]], ["map", "index", "2", "group", ["macro", 13]]],
                "vtp_autoLinkDomains": ["macro", 26],
                "vtp_decorateFormsAutoLink": false,
                "vtp_setTrackerName": true,
                "vtp_doubleClick": true,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "allowLinker", "value", "true"], ["map", "fieldName", "cookieDomain", "value", "auto"], ["map", "fieldName", "cookieName", "value", ["template", "__ga", ["macro", 5]]], ["map", "fieldName", "page", "value", ["macro", 21]]],
                "vtp_trackerName": ["template", "__ga", ["macro", 5]],
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", "3", "dimension", ["macro", 22]], ["map", "index", "4", "dimension", ["macro", 23]], ["map", "index", "5", "dimension", ["macro", 24]], ["map", "index", "6", "dimension", ["macro", 6]]],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 4],
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 25
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_useDebugVersion": false,
                "vtp_trackType": "TRACK_SOCIAL",
                "vtp_contentGroup": ["list", ["map", "index", "1", "group", ["macro", 12]], ["map", "index", "2", "group", ["macro", 13]]],
                "vtp_socialActionTarget": ["macro", 27],
                "vtp_setTrackerName": true,
                "vtp_doubleClick": true,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "allowLinker", "value", "false"], ["map", "fieldName", "cookieName", "value", ["template", "__ga", ["macro", 5]]], ["map", "fieldName", "page", "value", ["macro", 21]]],
                "vtp_trackerName": ["template", "__ga", ["macro", 5]],
                "vtp_socialAction": ["macro", 28],
                "vtp_enableLinkId": false,
                "vtp_socialNetwork": ["macro", 29],
                "vtp_dimension": ["list", ["map", "index", "3", "dimension", ["macro", 22]], ["map", "index", "4", "dimension", ["macro", 23]], ["map", "index", "5", "dimension", ["macro", 24]], ["map", "index", "6", "dimension", ["macro", 6]]],
                "vtp_trackingId": ["macro", 4],
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsSocial": true,
                "tag_id": 26
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": "Newsletter Subscription Requests",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_contentGroup": ["list", ["map", "index", "1", "group", ["macro", 12]], ["map", "index", "2", "group", ["macro", 13]]],
                "vtp_eventAction": ["macro", 30],
                "vtp_setTrackerName": true,
                "vtp_doubleClick": true,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "allowLinker", "value", "true"], ["map", "fieldName", "cookieDomain", "value", "auto"], ["map", "fieldName", "cookieName", "value", ["template", "__ga", ["macro", 5]]], ["map", "fieldName", "page", "value", ["macro", 21]]],
                "vtp_trackerName": ["template", "__ga", ["macro", 5]],
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", "3", "dimension", ["macro", 22]], ["map", "index", "4", "dimension", ["macro", 23]], ["map", "index", "5", "dimension", ["macro", 24]], ["map", "index", "6", "dimension", ["macro", 6]]],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 4],
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 41
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"===typeof window.config55\u0026\u0026", ["escape", ["macro", 20], 8, 16], ";\nswitch(", ["escape", ["macro", 31], 8, 16], "){case \"gaEvent\":config55.pushDL(\"trackEvent\",", ["escape", ["macro", 11], 8, 16], ",", ["escape", ["macro", 14], 8, 16], ");break;case \"pageView\":config55.pushDL(\"virtualPageview\",\"pageValue\");break;case \"social\":config55.pushDL(\"trackSocial\",", ["escape", ["macro", 29], 8, 16], ",", ["escape", ["macro", 28], 8, 16], ");break;case \"boutiqueAppointment\":config55.pushDL(\"trackEvent\",\"Product Page\",\"Boutique Appointment\",", ["escape", ["macro", 32], 8, 16], "+\" - \"+", ["escape", ["macro", 33], 8, 16], ");break;case \"callBack\":config55.pushDL(\"trackEvent\",\"Product Page\",\"Call Back Requests\",\n", ["escape", ["macro", 32], 8, 16], "+\" - \"+", ["escape", ["macro", 33], 8, 16], ");break;case \"Order\":config55.pushDL(\"trackEvent\",\"Product Page\",\"Contact Us\",", ["escape", ["macro", 32], 8, 16], "+\" - \"+", ["escape", ["macro", 33], 8, 16], ");break;case \"speakToACounsellor\":config55.pushDL(\"trackEvent\",\"Product Page\",\"Call An Advisor\",", ["escape", ["macro", 32], 8, 16], "+\" - \"+", ["escape", ["macro", 33], 8, 16], ");break;case \"addToMySelection\":config55.pushDL(\"trackEvent\",\"Product Page\",\"Add To My Selection\",", ["escape", ["macro", 32], 8, 16], "+\" - \"+", ["escape", ["macro", 33], 8, 16], ");break;case \"Video\":config55.pushDL(\"trackEvent\",\n\"Video\",", ["escape", ["macro", 34], 8, 16], ",", ["escape", ["macro", 35], 8, 16], ");break;case \"contactForm\":config55.pushDL(\"trackEvent\",\"Contact Form\",", ["escape", ["macro", 36], 8, 16], ")};\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 23
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"===typeof window.config55\u0026\u0026", ["escape", ["macro", 20], 8, 16], "();", ["escape", ["macro", 37], 8, 16], "\u0026\u0026dataLayer.push({event:\"trackEvent\",eventCategory:\"Store Locator\",eventAction:", ["escape", ["macro", 37], 8, 16], ",eventNonInteraction:!0});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 28
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_supportDocumentWrite": false,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._hmt=window._hmt||[];_hmt.push([\"_trackEvent\",", ["escape", ["macro", 11], 8, 16], ",", ["escape", ["macro", 14], 8, 16], ",", ["escape", ["macro", 15], 8, 16], ",", ["escape", ["macro", 16], 8, 16], "]);\u003C\/script\u003E"],
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 38
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript\u003Ewindow._hmt=window._hmt||[];var tongjiConfig55={accountId:", ["escape", ["macro", 40], 8, 16], ",domainName:", ["escape", ["macro", 41], 8, 16], ",source:\"utm_source\",medium:\"utm_medium\",keyword:\"utm_term\",campaign:\"utm_campaign\",creative:\"utm_content\"};\ntry{(function(){function n(a,b){var c=a.match(RegExp(\"(^|\\x26|\\\\?|#)(\"+b+\")\\x3d([^\\x26#]*)(\\x26|$|#)\",\"\"));return c?c[3]:m}function Z(a){return(a=(a=a.match(\/^(https?:\\\/\\\/)?([^\\\/\\?#]*)\/))?a[2].replace(\/.*@\/,\"\"):m)?a.replace(\/:\\d+$\/,\"\"):a}function N(a,b){if(window.sessionStorage)try{window.sessionStorage.setItem(a,b)}catch(c){}}function G(a){return window.sessionStorage?window.sessionStorage.getItem(a):m}function O(a,b,c){var f;c.f\u0026\u0026(f=new Date,f.setTime(f.getTime()+c.f));document.cookie=a+\"\\x3d\"+\nb+(c.domain?\"; domain\\x3d\"+c.domain:\"\")+(c.path?\"; path\\x3d\"+c.path:\"\")+(f?\"; expires\\x3d\"+f.toGMTString():\"\")+(c.r?\"; secure\":\"\")}function aa(a,b){var c=new Image,f=\"mini_tangram_log_\"+Math.floor(2147483648*Math.random()).toString(36);window[f]=c;c.onload=c.onerror=c.onabort=function(){c.onload=c.onerror=c.onabort=m;c=window[f]=m;b\u0026\u0026b(a)};c.src=a}function z(){if(!e)try{e=document.createElement(\"input\"),e.type=\"hidden\",e.style.display=\"none\",e.addBehavior(\"#default#userData\"),document.getElementsByTagName(\"head\")[0].appendChild(e)}catch(a){return g}return k}\nfunction ja(a,b,c){var f=new Date;f.setTime(f.getTime()+c||31536E6);try{window.localStorage?(b=f.getTime()+\"|\"+b,window.localStorage.setItem(a,b)):z()\u0026\u0026(e.expires=f.toUTCString(),e.load(document.location.hostname),e.setAttribute(a,b),e.save(document.location.hostname))}catch(q){}}function ka(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf(\"|\"),c=a.substring(0,b)-0;if(c\u0026\u0026c\u003E(new Date).getTime())return a.substring(b+1)}}else if(z())try{return e.load(document.location.hostname),\ne.getAttribute(a)}catch(f){}return m}function H(a,b,c){a.attachEvent?a.attachEvent(\"on\"+b,function(b){c.call(a,b)}):a.addEventListener\u0026\u0026a.addEventListener(b,c,g)}function r(a,b){return\"[object \"+b+\"]\"==={}.toString.call(a)}function I(){if(\"undefined\"==typeof window[\"_bdhm_loaded_\"+d.id]){window[\"_bdhm_loaded_\"+d.id]=k;var a=this;a.a={};a.q=[];a.p={push:function(){a.k.apply(a,arguments)}};a.c=0;a.h=g;ba(a)}}function ma(){var a=G(\"Hm_unsent_\"+d.id);if(a){a=a.split(\",\");for(var b=0,c=a.length;b\u003Cc;b++)aa(A+\n\"\/\/\"+decodeURIComponent(a[b]).replace(\/^https?:\\\/\\\/\/,\"\"),function(a){ca(a)})}}function ca(a){var b=G(\"Hm_unsent_\"+d.id)||\"\";b\u0026\u0026((b=b.replace(RegExp(encodeURIComponent(a.replace(\/^https?:\\\/\\\/\/,\"\")).replace(\/([\\*\\(\\)])\/g,\"\\\\$1\")+\"(%26u%3D[^,]*)?,?\",\"g\"),\"\").replace(\/,$\/,\"\"))?N(\"Hm_unsent_\"+d.id,b):window.sessionStorage\u0026\u0026window.sessionStorage.removeItem(\"Hm_unsent_\"+d.id))}function na(a,b){var c=G(\"Hm_unsent_\"+d.id)||\"\",f=a.a.u?\"\":\"\\x26u\\x3d\"+encodeURIComponent(document.location.href);c=encodeURIComponent(b.replace(\/^https?:\\\/\\\/\/,\n\"\")+f)+(c?\",\"+c:\"\");N(\"Hm_unsent_\"+d.id,c)}function B(a){a.a.rnd=Math.round(2147483647*Math.random());a.a.api=a.a.api||a.c?a.a.api+\"_\"+a.c:\"\";var b=A+\"\/\/hm.baidu.com\/hm.gif?\"+oa(a);a.a.api=0;a.c=0;na(a,b);aa(b,function(a){ca(a)})}function pa(a){return function(){a.a.nv=0;a.a.st=4;a.a.et=3;a.a.ep=(new Date).getTime()-a.e.j+\",\"+((new Date).getTime()-a.e.d+a.e.i);B(a)}}function ba(a){try{var b;C=a.getData(\"Hm_lpvt_\"+d.id)||0;13==C.length\u0026\u0026(C=Math.round(C\/1E3));a:if(document.referrer){for(var c=0,f=d.se.length;c\u003C\nf;c++)if(RegExp(\"(^|\\\\.)\"+d.se[c][1].replace(\/\\.\/g,\"\\\\.\")).test(Z(document.referrer))){var q=n(document.referrer,d.se[c][2])||\"\";if(q||2==d.se[c][0]||14==d.se[c][0]||17==d.se[c][0]){1==d.se[c][0]\u0026\u0026-1\u003Cdocument.referrer.indexOf(\"cpro.baidu.com\")\u0026\u0026(q=\"\");a.a.se=d.se[c][0];var D=a.a,h=d.se[c],P=0,e=2==h[3]?h[1]+\"\\\\\/\":\"\",m=1==h[3]?\"\\\\.\"+h[1]:\"\",r=h[4].split(\",\");h=0;for(var F=r.length;h\u003CF;h++)if(\"\"!==r[h]\u0026\u0026RegExp(e+r[h]+m).test(document.referrer)){P=h+1;break}D.sse=P;a.a.sw=q;var J=2;break a}}q=g;Q(document.referrer)\u0026\u0026\nQ(document.location.href)?q=k:(P=Z(document.referrer),q=da(P||\"\",document.location.hostname));J=q?t-C\u003Ed.vdur?1:4:3}else J=t-C\u003Ed.vdur?1:4;var p=4!=J?1:0;if(b=a.getData(\"Hm_lvt_\"+d.id)){var l=b.split(\",\");for(var K=l.length-1;0\u003C=K;K--)13==l[K].length\u0026\u0026(l[K]=\"\"+Math.round(l[K]\/1E3));for(;2592E3\u003Ct-l[0];)l.shift();var y=4\u003El.length?2:3;for(1===p\u0026\u0026l.push(t);4\u003Cl.length;)l.shift();b=l.join(\",\");var z=l[l.length-1]}else b=t,z=\"\",y=1;a.setData(\"Hm_lvt_\"+d.id,b,d.age);a.setData(\"Hm_lpvt_\"+d.id,t);var O=t==a.getData(\"Hm_lpvt_\"+\nd.id)?\"1\":\"0\";0==d.nv\u0026\u0026Q(document.location.href)\u0026\u0026(\"\"==document.referrer||Q(document.referrer))\u0026\u0026(p=0,J=4);a.a.nv=p;a.a.st=J;a.a.cc=O;a.a.lt=z;a.a.lv=y;a.a.si=d.id;a.a.su=document.referrer;a.a.ds=qa;a.a.cl=ra+\"-bit\";a.a.ln=sa;a.a.ja=ta?1:0;a.a.ck=ua?1:0;a.a.lo=\"number\"==typeof _bdhm_top?1:0;var R=a.a;p=\"\";if(navigator.plugins\u0026\u0026navigator.mimeTypes.length){var ea=navigator.plugins[\"Shockwave Flash\"];ea\u0026\u0026ea.description\u0026\u0026(p=ea.description.replace(\/^.*\\s+(\\S+)\\s+\\S+$\/,\"$1\"))}else if(window.ActiveXObject)try{var I=\nnew ActiveXObject(\"ShockwaveFlash.ShockwaveFlash\");I\u0026\u0026(p=I.GetVariable(\"$version\"))\u0026\u0026(p=p.replace(\/^.*\\s+(\\d+),(\\d+).*$\/,\"$1.$2\"))}catch(S){}R.fl=p;var T=a.a;R=\"\";try{external.twGetVersion(external.twGetSecurityID(window))\u0026\u0026-1\u003Cexternal.twGetRunPath.toLowerCase().indexOf(\"360se\")\u0026\u0026(R=17)}catch(S){}T.sb=R;a.a.v=\"1.0.57\";a.a.cv=decodeURIComponent(a.getData(\"Hm_cv_\"+d.id)||\"\");1==a.a.nv\u0026\u0026(a.a.tt=document.title||\"\");a.a.api=0;var u=document.location.href;a.a.cm=n(u,tongjiConfig55.medium)||\"\";a.a.cp=n(u,\ntongjiConfig55.campaign)||\"\";a.a.cw=n(u,tongjiConfig55.keyword)||\"\";a.a.ci=n(u,tongjiConfig55.creative)||\"\";a.a.cf=n(u,tongjiConfig55.source)||\"\";0==a.a.nv?ma():ca(\".*\");if(\"\"!=d.icon){var v=d.icon.split(\"|\"),fa=\"http:\/\/tongji.baidu.com\/hm-web\/welcome\/ico?s\\x3d\"+d.id,ha=(\"http:\"==A?\"http:\/\/eiv\":\"https:\/\/bs\")+\".baidu.com\"+v[0]+\".\"+v[1];switch(v[1]){case \"swf\":var L=v[2],M=v[3];T=\"s\\x3d\"+fa;u=\"HolmesIcon\"+t;var x='\\x3cobject classid\\x3d\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" id\\x3d\"'+u+'\" width\\x3d\"'+\nL+'\" height\\x3d\"'+M+'\"\\x3e\\x3cparam name\\x3d\"movie\" value\\x3d\"'+ha+'\" \/\\x3e\\x3cparam name\\x3d\"flashvars\" value\\x3d\"'+(T||\"\")+'\" \/\\x3e\\x3cparam name\\x3d\"allowscriptaccess\" value\\x3d\"always\" \/\\x3e\\x3cembed type\\x3d\"application\/x-shockwave-flash\" name\\x3d\"'+u+'\" width\\x3d\"'+L+'\" height\\x3d\"'+M+'\" src\\x3d\"'+ha+'\" flashvars\\x3d\"'+(T||\"\")+'\" allowscriptaccess\\x3d\"always\" \/\\x3e\\x3c\/object\\x3e';break;case \"gif\":x='\\x3ca href\\x3d\"'+fa+'\" target\\x3d\"_blank\"\\x3e\\x3cimg border\\x3d\"0\" src\\x3d\"'+ha+'\" width\\x3d\"'+\nv[2]+'\" height\\x3d\"'+v[3]+'\"\\x3e\\x3c\/a\\x3e';break;default:x='\\x3ca href\\x3d\"'+fa+'\" target\\x3d\"_blank\"\\x3e'+v[0]+\"\\x3c\/a\\x3e\"}document.write(x)}var U=document.location.hash.substring(1),X=RegExp(d.id),Y=-1\u003Cdocument.referrer.indexOf(\"baidu.com\")?k:g;if(U\u0026\u0026X.test(U)\u0026\u0026Y){var V=document.createElement(\"script\");V.setAttribute(\"type\",\"text\/javascript\");V.setAttribute(\"charset\",\"utf-8\");V.setAttribute(\"src\",A+\"\/\/\"+d.js+n(U,\"jn\")+\".\"+n(U,\"sx\")+\"?\"+a.a.rnd);var la=document.getElementsByTagName(\"script\")[0];\nla.parentNode.insertBefore(V,la)}a.m\u0026\u0026a.m();a.l\u0026\u0026a.l();if(d.rec||d.trust)a.a.nv?(a.g=encodeURIComponent(document.referrer),window.sessionStorage?N(\"Hm_from_\"+d.id,a.g):ja(\"Hm_from_\"+d.id,a.g,864E5)):a.g=(window.sessionStorage?G(\"Hm_from_\"+d.id):ka(\"Hm_from_\"+d.id))||\"\";a.n\u0026\u0026a.n();a.o\u0026\u0026a.o();a.e=new va;H(window,\"beforeunload\",pa(a));var w=window._hmt;if(w\u0026\u0026w.length)for(x=0;x\u003Cw.length;x++){var E=w[x];switch(E[0]){case \"_setAccount\":1\u003CE.length\u0026\u0026\/^[0-9a-z]{32}$\/.test(E[1])\u0026\u0026(a.a.api|=1,window._bdhm_account=\nE[1]);break;case \"_setAutoPageview\":if(1\u003CE.length){var ia=E[1];if(g===ia||k===ia)a.a.api|=2,window._bdhm_autoPageview=ia}}}if(\"undefined\"===typeof window._bdhm_account||window._bdhm_account===d.id){window._bdhm_account=d.id;var W=window._hmt;if(W\u0026\u0026W.length){w=0;for(var ba=W.length;w\u003Cba;w++)a.k(W[w])}window._hmt=a.p}if(\"undefined\"===typeof window._bdhm_autoPageview||window._bdhm_autoPageview===k)a.h=k,a.a.et=0,a.a.ep=\"\",B(a)}catch(S){a=[],a.push(\"si\\x3d\"+d.id),a.push(\"n\\x3d\"+encodeURIComponent(S.name)),\na.push(\"m\\x3d\"+encodeURIComponent(S.message)),a.push(\"r\\x3d\"+encodeURIComponent(document.referrer)),aa(A+\"\/\/hm.baidu.com\/hm.gif?\"+a.join(\"\\x26\"))}}function oa(a){for(var b=[],c=0,f=L.length;c\u003Cf;c++){var d=L[c],D=a.a[d];\"undefined\"!=typeof D\u0026\u0026\"\"!==D\u0026\u0026b.push(d+\"\\x3d\"+encodeURIComponent(D))}return b.join(\"\\x26\")}function wa(){var a=\"Hm_cv_\"+d.id;try{if(O(a,\"\",{domain:M(),path:X(),f:-1}),window.sessionStorage\u0026\u0026window.sessionStorage.removeItem(a),window.localStorage)window.localStorage.removeItem(a);else if(z())try{e.load(document.location.hostname),\ne.removeAttribute(a),e.save(document.location.hostname)}catch(b){}}catch(b){}}function X(){for(var a=0,b=d.dm.length;a\u003Cb;a++){var c=d.dm[a];if(-1\u003Cc.indexOf(\"\/\")\u0026\u0026Y(document.location.href,c))return c.replace(\/^[^\\\/]+(\\\/.*)\/,\"$1\")+\"\/\"}return\"\/\"}function M(){for(var a=document.location.hostname,b=0,c=d.dm.length;b\u003Cc;b++)if(da(a,d.dm[b]))return d.dm[b].replace(\/(:\\d+)?[\\\/\\?#].*\/,\"\");return a}function Q(a){for(var b=0;b\u003Cd.dm.length;b++)if(-1\u003Cd.dm[b].indexOf(\"\/\")){if(Y(a,d.dm[b]))return k}else{var c=Z(a);\nif(c\u0026\u0026da(c,d.dm[b]))return k}return g}function Y(a,b){a=a.replace(\/^https?:\\\/\\\/\/,\"\");return 0==a.indexOf(b)}function da(a,b){a=\".\"+a.replace(\/:\\d+\/,\"\");b=\".\"+b.replace(\/:\\d+\/,\"\");var c=a.indexOf(b);return-1\u003Cc\u0026\u0026c+b.length==a.length}function va(){this.d=this.j=(new Date).getTime();this.i=0;\"object\"==typeof document.onfocusin?(H(document,\"focusin\",F(this)),H(document,\"focusout\",F(this))):(H(window,\"focus\",F(this)),H(window,\"blur\",F(this)))}function F(a){return function(b){if(!b.target||b.target==window){if(\"blur\"==\nb.type||\"focusout\"==b.type)a.i+=(new Date).getTime()-a.d;a.d=(new Date).getTime()}}}var d={id:tongjiConfig55.accountId,dm:[tongjiConfig55.domainName],etrk:[],js:\"tongji.baidu.com\/hm-web\/js\/\",icon:\"\/hmt\/icon\/21|gif|20|20\",br:!1,ctrk:!1,align:-1,nv:-1,vdur:18E5,age:31536E6,rec:0,rp:0,rs:0,trust:0,vcard:0,se:[[1,\"baidu.com\",\"word|wd|w\",1,\"news,tieba,zhidao,,image,video,hi,baike,wenku,opendata,jingyan\"],[2,\"google.com\",\"q\",0,\"tbm\\x3disch,tbm\\x3dvid,tbm\\x3dnws|source\\x3dnewssearch,tbm\\x3dblg,tbm\\x3dfrm\"],\n[4,\"sogou.com\",\"query|keyword\",1,\"news,mp3,pic,v,gouwu,zhishi,blogsearch\"],[6,\"search.yahoo.com\",\"p\",1,\"news,images,video\"],[7,\"yahoo.cn\",\"q\",1,\"news,image,music\"],[8,\"soso.com\",\"w|key\",1,\"image,video,music,sobar,wenwen,news,baike\"],[11,\"youdao.com\",\"q\",1,\"image,news,,mp3,video\"],[12,\"gougou.com\",\"search\",1,\",movie,,,,,video\"],[13,\"bing.com\",\"q\",2,\"images,videos,news\"],[14,\"so.com\",\"q\",1,\"video,news\"],[15,\"jike.com\",\"q\",1,\"news,image,video\"],[16,\"qihoo.com\",\"kw\",0,\"\"],[17,\"etao.com\",\"q\",1,\"s,8\"],\n[18,\"soku.com\",\"keyword\",2,\"a\"],[19,\"easou.com\",\"q\",0,\"\"],[20,\"glb.uc.cn\",\"keyword|word|q\",0,\"\"]]},k=!0,m=null,g=!1,y=function(){function a(a){\/[\"\\\\\\x00-\\x1f]\/.test(a)\u0026\u0026(a=a.replace(\/[\"\\\\\\x00-\\x1f]\/g,function(a){var b=c[a];if(b)return b;b=a.charCodeAt();return\"\\\\u00\"+Math.floor(b\/16).toString(16)+(b%16).toString(16)}));return'\"'+a+'\"'}function b(a){return 10\u003Ea?\"0\"+a:a}var c={\"\\b\":\"\\\\b\",\"\\t\":\"\\\\t\",\"\\n\":\"\\\\n\",\"\\f\":\"\\\\f\",\"\\r\":\"\\\\r\",'\"':'\\\\\"',\"\\\\\":\"\\\\\\\\\"};return function(c){switch(typeof c){case \"undefined\":return\"undefined\";\ncase \"number\":return isFinite(c)?String(c):\"null\";case \"string\":return a(c);case \"boolean\":return String(c);default:if(c===m)return\"null\";if(c instanceof Array){var d=[\"[\"],f=c.length,h,e;for(h=0;h\u003Cf;h++)switch(e=c[h],typeof e){case \"undefined\":case \"function\":case \"unknown\":break;default:g\u0026\u0026d.push(\",\");d.push(y(e));var g=1}d.push(\"]\");return d.join(\"\")}if(c instanceof Date)return'\"'+c.getFullYear()+\"-\"+b(c.getMonth()+1)+\"-\"+b(c.getDate())+\"T\"+b(c.getHours())+\":\"+b(c.getMinutes())+\":\"+b(c.getSeconds())+\n'\"';g=[\"{\"];for(f in c)if(Object.prototype.hasOwnProperty.call(c,f))switch(h=c[f],typeof h){case \"undefined\":case \"unknown\":case \"function\":break;default:d\u0026\u0026g.push(\",\"),d=1,g.push(y(f)+\":\"+y(h))}g.push(\"}\");return g.join(\"\")}}}(),e;(function(){function a(){if(!a.b){a.b=k;for(var b=0,c=d.length;b\u003Cc;b++)d[b]()}}function b(){try{document.documentElement.doScroll(\"left\")}catch(D){setTimeout(b,1);return}a()}var c=g,d=[],e;document.addEventListener?e=function(){document.removeEventListener(\"DOMContentLoaded\",\ne,g);a()}:document.attachEvent\u0026\u0026(e=function(){\"complete\"===document.readyState\u0026\u0026(document.detachEvent(\"onreadystatechange\",e),a())});(function(){if(!c)if(c=k,\"complete\"===document.readyState)a.b=k;else if(document.addEventListener)document.addEventListener(\"DOMContentLoaded\",e,g),window.addEventListener(\"load\",a,g);else if(document.attachEvent){document.attachEvent(\"onreadystatechange\",e);window.attachEvent(\"onload\",a);var d=g;try{d=window.frameElement==m}catch(h){}document.documentElement.doScroll\u0026\u0026\nd\u0026\u0026b()}})();return function(b){a.b?b():d.push(b)}})().b=g;var ua=navigator.cookieEnabled,ta=navigator.javaEnabled(),sa=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||\"\",qa=window.screen.width+\"x\"+window.screen.height,ra=window.screen.colorDepth;d.se.push([14,\"so.360.cn\",\"q\",1,\",news\"]);d.se.push([14,\"v.360.cn\",\"q\",1,\"so\"]);var C=0,t=Math.round(+new Date\/1E3),A=\"https:\"==document.location.protocol?\"https:\":\"http:\",L=\"cc cf ci ck cl cm cp cw ds ep et fl ja ln lo lt nv rnd sb se si st su sw sse v cv lv u api tt\".split(\" \");\nI.prototype={getData:function(a){try{var b=RegExp(\"(^| )\"+a+\"\\x3d([^;]*)(;|$)\").exec(document.cookie);return(b?b[2]:m)||G(a)||ka(a)}catch(c){}},setData:function(a,b,c){try{O(a,b,{domain:M(),path:X(),f:c}),c?ja(a,b,c):N(a,b)}catch(f){}},k:function(a){if(r(a,\"Array\")){var b=function(a){return a.replace?a.replace(\/'\/g,\"'0\").replace(\/\\*\/g,\"'1\").replace(\/!\/g,\"'2\"):a};switch(a[0]){case \"_trackPageview\":if(1\u003Ca.length\u0026\u0026a[1].charAt\u0026\u0026\"\/\"==a[1].charAt(0)){this.a.api|=4;this.a.et=0;this.a.ep=\"\";this.h?(this.a.nv=\n0,this.a.st=4):this.h=k;b=this.a.u;var c=this.a.su;this.a.u=A+\"\/\/\"+document.location.host+a[1];this.a.su=document.location.href;B(this);this.a.u=b;this.a.su=c}break;case \"_trackEvent\":2\u003Ca.length\u0026\u0026(this.a.api|=8,this.a.nv=0,this.a.st=4,this.a.et=4,this.a.ep=b(a[1])+\"*\"+b(a[2])+(a[3]?\"*\"+b(a[3]):\"\")+(a[4]?\"*\"+b(a[4]):\"\"),B(this));break;case \"_setCustomVar\":if(4\u003Ea.length)break;c=a[1];var f=a[4]||3;if(0\u003Cc\u0026\u00266\u003Ec\u0026\u00260\u003Cf\u0026\u00264\u003Ef){this.c++;for(var e=(this.a.cv||\"*\").split(\"!\"),g=e.length;g\u003Cc-1;g++)e.push(\"*\");\ne[c-1]=f+\"*\"+b(a[2])+\"*\"+b(a[3]);this.a.cv=e.join(\"!\");a=this.a.cv.replace(\/[^1](\\*[^!]*){2}\/g,\"*\").replace(\/((^|!)\\*)+$\/g,\"\");\"\"!==a?this.setData(\"Hm_cv_\"+d.id,encodeURIComponent(a),d.age):wa()}break;case \"_trackOrder\":a=a[1];if(r(a,\"Object\")){var h=function(a){for(var b in a)if({}.hasOwnProperty.call(a,b)){var c=a[b];r(c,\"Object\")||r(c,\"Array\")?h(c):a[b]=String(c)}};h(a);this.a.api|=16;this.a.nv=0;this.a.st=4;this.a.et=94;this.a.ep=y(a);B(this)}break;case \"_trackMobConv\":if(a={webim:1,tel:2,map:3,\nsms:4,callback:5,share:6}[a[1]])this.a.api|=32,this.a.et=93,this.a.ep=a,B(this)}}}};new I})()}catch(n){};\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 39
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._hmt=window._hmt||[];(function(){var a=", ["escape", ["macro", 42], 8, 16], ";a\u0026\u0026!a.match(\/^\\\/\/i)\u0026\u0026(a=\"\/\"+a);window._hmt.push([\"_trackPageview\",a])})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 40
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window._uxa=window._uxa||[];try{if(\"undefined\"!==typeof dataLayer)for(var a=0;a\u003CdataLayer.length;a++)window._uxa.push([\"setCustomVariable\",1,\"page\",dataLayer[a].page,3]),window._uxa.push([\"setCustomVariable\",2,\"visitLoginState\",dataLayer[a].visitLoginState,3]),window._uxa.push([\"setCustomVariable\",3,\"pageCategory\",dataLayer[a].pageCategory,3]),window._uxa.push([\"setCustomVariable\",4,\"productCategory\",dataLayer[a].productCategory,3])}catch(b){}\"undefined\"===typeof CS_CONF?(window._uxa.push([\"setPath\",\nwindow.location.pathname+window.location.hash.replace(\"#\",\"?__\")]),a=document.createElement(\"script\"),a.type=\"text\/javascript\",a.async=!0,a.src=\"\/\/t.contentsquare.net\/uxa\/f0b409beb8be0.js\",document.getElementsByTagName(\"head\")[0].appendChild(a)):window._uxa.push([\"trackPageview\",window.location.pathname+window.location.hash.replace(\"#\",\"?__\")])})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 44
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 9],
                "arg1": "trackEvent"
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": ".*"
            }, {
                "function": "_eq",
                "arg0": ["macro", 9],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 9],
                "arg1": "virtualPageview"
            }, {
                "function": "_eq",
                "arg0": ["macro", 9],
                "arg1": "trackSocial"
            }, {
                "function": "_eq",
                "arg0": ["macro", 9],
                "arg1": "newsletterSubscription"
            }, {
                "function": "_re",
                "arg0": ["macro", 9],
                "arg1": "^(?!(gtm\\.(js|dom|load)|trackEvent|trackSocial))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 38],
                "arg1": "chaumet.cn"
            }, {
                "function": "_cn",
                "arg0": ["macro", 39],
                "arg1": "chaumet.cn"
            }],
            "rules": [
                [["if", 0], ["add", 0]],
                [["if", 1, 2], ["add", 1, 9]],
                [["if", 3], ["add", 1]],
                [["if", 4], ["add", 2]],
                [["if", 5], ["add", 3]],
                [["if", 6], ["add", 4]],
                [["if", 2], ["add", 5]],
                [["if", 0, 7], ["add", 6]],
                [["if", 2, 8], ["add", 7]],
                [["if", 3, 7], ["add", 8]]]
        },
        "runtime": [
            [], []
        ]
    };
    var f, aa = this, da = function () {
        if (null === ba) {
            var a;
            a:{
                var b = aa.document, c = b.querySelector && b.querySelector("script[nonce]");
                if (c) {
                    var d = c.nonce || c.getAttribute("nonce");
                    if (d && ca.test(d)) {
                        a = d;
                        break a
                    }
                }
                a = null
            }
            ba = a || ""
        }
        return ba
    }, ca = /^[\w+/_-]+[=]{0,2}$/, ba = null, ea = function (a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }, fa = function (a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.Yg = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Hg = function (a, c, g) {
            for (var d = Array(arguments.length - 2),
                     e = 2; e < arguments.length; e++)d[e - 2] = arguments[e];
            return b.prototype[c].apply(a, d)
        }
    };
    var ja = function (a, b) {
        this.C = a;
        this.$e = b
    };
    ja.prototype.rf = function () {
        return this.C
    };
    ja.prototype.getData = function () {
        return this.$e
    };
    ja.prototype.getData = ja.prototype.getData;
    ja.prototype.getType = ja.prototype.rf;
    var ka = function (a) {
        return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
    }, ma = function () {
        this.za = {};
        this.Sa = !1
    };
    ma.prototype.get = function (a) {
        return this.za["dust." + a]
    };
    ma.prototype.set = function (a, b) {
        !this.Sa && (this.za["dust." + a] = b)
    };
    ma.prototype.has = function (a) {
        return this.za.hasOwnProperty("dust." + a)
    };
    var na = function (a) {
        var b = [], c;
        for (c in a.za)a.za.hasOwnProperty(c) && b.push(c.substr(5));
        return b
    };
    ma.prototype.remove = function (a) {
        !this.Sa && delete this.za["dust." + a]
    };
    ma.prototype.N = function () {
        this.Sa = !0
    };
    var n = function (a) {
        this.Da = new ma;
        this.i = [];
        a = a || [];
        for (var b in a)a.hasOwnProperty(b) && (ka(b) ? this.i[Number(b)] = a[Number(b)] : this.Da.set(b, a[b]))
    };
    f = n.prototype;
    f.toString = function () {
        for (var a = [], b = 0; b < this.i.length; b++) {
            var c = this.i[b];
            null === c || void 0 === c ? a.push("") : a.push(c.toString())
        }
        return a.join(",")
    };
    f.set = function (a, b) {
        if ("length" == a) {
            if (!ka(b))throw Error("RangeError: Length property must be a valid integer.");
            this.i.length = Number(b)
        } else ka(a) ? this.i[Number(a)] = b : this.Da.set(a, b)
    };
    f.get = function (a) {
        return "length" == a ? this.length() : ka(a) ? this.i[Number(a)] : this.Da.get(a)
    };
    f.length = function () {
        return this.i.length
    };
    f.ca = function () {
        for (var a = na(this.Da), b = 0; b < this.i.length; b++)a.push(b + "");
        return new n(a)
    };
    f.remove = function (a) {
        ka(a) ? delete this.i[Number(a)] : this.Da.remove(a)
    };
    f.pop = function () {
        return this.i.pop()
    };
    f.push = function (a) {
        return this.i.push.apply(this.i, Array.prototype.slice.call(arguments))
    };
    f.shift = function () {
        return this.i.shift()
    };
    f.splice = function (a, b, c) {
        return new n(this.i.splice.apply(this.i, arguments))
    };
    f.unshift = function (a) {
        return this.i.unshift.apply(this.i, Array.prototype.slice.call(arguments))
    };
    f.has = function (a) {
        return ka(a) && this.i.hasOwnProperty(a) || this.Da.has(a)
    };
    n.prototype.unshift = n.prototype.unshift;
    n.prototype.splice = n.prototype.splice;
    n.prototype.shift = n.prototype.shift;
    n.prototype.push = n.prototype.push;
    n.prototype.pop = n.prototype.pop;
    n.prototype.remove = n.prototype.remove;
    n.prototype.getKeys = n.prototype.ca;
    n.prototype.get = n.prototype.get;
    n.prototype.set = n.prototype.set;
    var oa = function () {
        function a(a, b) {
            c[a] = b
        }

        function b() {
            c = {};
            h = !1
        }

        var c = {}, d, e, g = {}, h = !1, k = {
            add: a, dd: function (a, b, c) {
                g[a] || (g[a] = {});
                g[a][b] = c
            }, create: function (g) {
                var k = {
                    add: a, assert: function (a, b) {
                        if (!h) {
                            var k = c[a] || d;
                            k && k.apply(g, Array.prototype.slice.call(arguments, 0));
                            e && e.apply(g, Array.prototype.slice.call(arguments, 0))
                        }
                    }, reset: b
                };
                k.add = k.add;
                k.assert = k.assert;
                k.reset = k.reset;
                return k
            }, Bd: function (a) {
                return g[a] ? (b(), c = g[a], !0) : !1
            }, Ea: function (a) {
                d = a
            }, Fa: function (a) {
                e = a
            }, reset: b, Md: function (a) {
                h =
                    a
            }
        };
        k.add = k.add;
        k.addToCache = k.dd;
        k.loadFromCache = k.Bd;
        k.registerDefaultPermission = k.Ea;
        k.registerGlobalPermission = k.Fa;
        k.reset = k.reset;
        k.setPermitAllAsserts = k.Md;
        return k
    };
    var pa = function () {
        function a(a, c) {
            if (b[a]) {
                if (b[a].sb + c > b[a].max)throw Error("Quota exceeded");
                b[a].sb += c
            }
        }

        var b = {}, c = void 0, d = void 0, e = {
            Tf: function (a) {
                c = a
            }, ed: function () {
                c && a(c, 1)
            }, Uf: function (a) {
                d = a
            }, aa: function (b) {
                d && a(d, b)
            }, og: function (a, c) {
                b[a] = b[a] || {sb: 0};
                b[a].max = c
            }, qf: function (a) {
                return b[a] && b[a].sb || 0
            }, reset: function () {
                b = {}
            }, Ue: a
        };
        e.onFnConsume = e.Tf;
        e.consumeFn = e.ed;
        e.onStorageConsume = e.Uf;
        e.consumeStorage = e.aa;
        e.setMax = e.og;
        e.getConsumed = e.qf;
        e.reset = e.reset;
        e.consume = e.Ue;
        return e
    };
    var qa = function (a, b, c) {
        this.O = a;
        this.I = b;
        this.ia = c;
        this.i = new ma
    };
    f = qa.prototype;
    f.add = function (a, b) {
        this.i.Sa || (this.O.aa(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.i.set(a, b))
    };
    f.set = function (a, b) {
        this.i.Sa || (this.ia && this.ia.has(a) ? this.ia.set(a, b) : (this.O.aa(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.i.set(a, b)))
    };
    f.get = function (a) {
        return this.i.has(a) ? this.i.get(a) : this.ia ? this.ia.get(a) : void 0
    };
    f.has = function (a) {
        return !!this.i.has(a) || !(!this.ia || !this.ia.has(a))
    };
    f.L = function () {
        return this.O
    };
    f.N = function () {
        this.i.N()
    };
    qa.prototype.has = qa.prototype.has;
    qa.prototype.get = qa.prototype.get;
    qa.prototype.set = qa.prototype.set;
    qa.prototype.add = qa.prototype.add;
    var ra = function () {
    }, sa = function (a) {
        return "function" == typeof a
    }, ta = function (a) {
        return "string" == typeof a
    }, ua = function (a) {
        return "number" == typeof a && !isNaN(a)
    }, va = function (a) {
        return "[object Array]" == Object.prototype.toString.call(Object(a))
    }, xa = function (a, b) {
        if (Array.prototype.indexOf) {
            var c = a.indexOf(b);
            return "number" == typeof c ? c : -1
        }
        for (var d = 0; d < a.length; d++)if (a[d] === b)return d;
        return -1
    }, ya = function (a, b) {
        if (a && va(a))for (var c = 0; c < a.length; c++)if (a[c] && b(a[c]))return a[c]
    }, za = function (a, b) {
        if (!ua(a) || !ua(b) || a > b)a = 0, b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }, Ba = function (a) {
        return Math.round(Number(a)) || 0
    }, Da = function (a) {
        return "false" == String(a).toLowerCase() ? !1 : !!a
    }, Ea = function (a) {
        var b = [];
        if (va(a))for (var c = 0; c < a.length; c++)b.push(String(a[c]));
        return b
    }, Fa = function (a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }, Ga = function () {
        return (new Date).getTime()
    }, Ha = function () {
        this.prefix = "gtm.";
        this.values = {}
    };
    Ha.prototype.set = function (a, b) {
        this.values[this.prefix + a] = b
    };
    Ha.prototype.get = function (a) {
        return this.values[this.prefix + a]
    };
    Ha.prototype.contains = function (a) {
        return void 0 !== this.get(a)
    };
    var Ia = function (a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }, Ja = function (a) {
        var b = !1;
        return function () {
            if (!b)try {
                a()
            } catch (c) {
            }
            b = !0
        }
    }, Ka = function (a, b) {
        for (var c in b)b.hasOwnProperty(c) && (a[c] = b[c])
    }, La = function (a) {
        for (var b in a)if (a.hasOwnProperty(b))return !0;
        return !1
    }, Ma = function (a, b) {
        for (var c = [], d = 0; d < a.length; d++)c.push(a[d]), c.push.apply(c, b[a[d]] || []);
        return c
    };
    var r = function (a, b) {
        ma.call(this);
        this.Cd = a;
        this.lf = b
    };
    fa(r, ma);
    var Oa = function (a, b) {
        for (var c, d = 0; d < b.length && !(c = Na(a, b[d]), c instanceof ja); d++);
        return c
    }, Na = function (a, b) {
        var c = a.get(String(b[0]));
        if (!(c && c instanceof r))throw Error("Attempting to execute non-function " + b[0] + ".");
        return c.o.apply(c, [a].concat(b.slice(1)))
    };
    r.prototype.toString = function () {
        return this.Cd
    };
    r.prototype.getName = function () {
        return this.Cd
    };
    r.prototype.getName = r.prototype.getName;
    r.prototype.ca = function () {
        return new n(na(this))
    };
    r.prototype.getKeys = r.prototype.ca;
    r.prototype.o = function (a, b) {
        var c, d = {
            H: function () {
                return a
            }, evaluate: function (b) {
                var c = a;
                return va(b) ? Na(c, b) : b
            }, Pa: function (b) {
                return Oa(a, b)
            }, L: function () {
                return a.L()
            }, J: function () {
                c || (c = a.I.create(d));
                return c
            }
        };
        a.L().ed();
        return this.lf.apply(d, Array.prototype.slice.call(arguments, 1))
    };
    r.prototype.invoke = r.prototype.o;
    var Pa = function () {
        ma.call(this)
    };
    fa(Pa, ma);
    Pa.prototype.ca = function () {
        return new n(na(this))
    };
    Pa.prototype.getKeys = Pa.prototype.ca;
    var Qa = /^([a-z]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i, Ra = {
        Fn: "function",
        Map: "Object",
        List: "Array"
    }, Ta = function (a, b) {
        for (var c = 0; c < a.length; c++) {
            var d = Qa.exec(a[c]);
            if (!d)throw Error("Internal Error");
            var e = d[1], g = "!" === d[2], h = d[3], k = b[c], l = typeof k;
            if (null === k || "undefined" === l) {
                if (g)throw Error("Required argument " + e + " not supplied.");
            } else if ("*" !== h) {
                var m = typeof k;
                k instanceof r ? m = "Fn" : k instanceof n ? m = "List" : k instanceof Pa && (m = "Map");
                if (m != h)throw Error("Argument " + e + " does not match required type " +
                (Ra[h] || h) + ".");
            }
        }
    };
    /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Ua = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/, Va = function (a) {
        if (null == a)return String(a);
        var b = Ua.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }, Wa = function (a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }, Xa = function (a) {
        if (!a || "object" != Va(a) || a.nodeType || a == a.window)return !1;
        try {
            if (a.constructor && !Wa(a, "constructor") && !Wa(a.constructor.prototype, "isPrototypeOf"))return !1
        } catch (c) {
            return !1
        }
        for (var b in a);
        return void 0 ===
            b || Wa(a, b)
    }, x = function (a, b) {
        var c = b || ("array" == Va(a) ? [] : {}), d;
        for (d in a)if (Wa(a, d)) {
            var e = a[d];
            "array" == Va(e) ? ("array" != Va(c[d]) && (c[d] = []), c[d] = x(e, c[d])) : Xa(e) ? (Xa(c[d]) || (c[d] = {}), c[d] = x(e, c[d])) : c[d] = e
        }
        return c
    };
    var Ya = function (a) {
        if (a instanceof n) {
            for (var b = [], c = a.length(), d = 0; d < c; d++)a.has(d) && (b[d] = Ya(a.get(d)));
            return b
        }
        if (a instanceof Pa) {
            for (var e = {}, g = a.ca(), h = g.length(), k = 0; k < h; k++)e[g.get(k)] = Ya(a.get(g.get(k)));
            return e
        }
        return a instanceof r ? function () {
            for (var b = Array.prototype.slice.call(arguments, 0), c = 0; c < b.length; c++)b[c] = Za(b[c]);
            var d = new qa(pa(), oa());
            return Ya(a.o.apply(a, [d].concat(b)))
        } : a
    }, Za = function (a) {
        if (va(a)) {
            for (var b = [], c = 0; c < a.length; c++)a.hasOwnProperty(c) && (b[c] = Za(a[c]));
            return new n(b)
        }
        if (Xa(a)) {
            var d =
                new Pa, e;
            for (e in a)a.hasOwnProperty(e) && d.set(e, Za(a[e]));
            return d
        }
        if ("function" === typeof a)return new r("", function (b) {
            for (var c = Array.prototype.slice.call(arguments, 0), d = 0; d < c.length; d++)c[d] = Ya(this.evaluate(c[d]));
            return Za(a.apply(a, c))
        });
        var g = typeof a;
        if (null === a || "string" === g || "number" === g || "boolean" === g)return a
    };
    var ab = {
        control: function (a, b) {
            return new ja(a, this.evaluate(b))
        }, fn: function (a, b, c) {
            var d = this.H(), e = this.evaluate(b);
            if (!(e instanceof n))throw Error("Error: non-List value given for Fn argument names.");
            var g = Array.prototype.slice.call(arguments, 2);
            this.L().aa(a.length + g.length);
            return new r(a, function () {
                return function (a) {
                    for (var b = new qa(d.O, d.I, d), c = Array.prototype.slice.call(arguments, 0), h = 0; h < c.length; h++)if (c[h] = this.evaluate(c[h]), c[h]instanceof ja)return c[h];
                    for (var p = e.get("length"), q =
                        0; q < p; q++)q < c.length ? b.set(e.get(q), c[q]) : b.set(e.get(q), void 0);
                    b.set("arguments", new n(c));
                    var t = Oa(b, g);
                    if (t instanceof ja)return "return" === t.C ? t.getData() : t
                }
            }())
        }, list: function (a) {
            var b = this.L();
            b.aa(arguments.length);
            for (var c = new n, d = 0; d < arguments.length; d++) {
                var e = this.evaluate(arguments[d]);
                "string" === typeof e && b.aa(e.length ? e.length - 1 : 0);
                c.push(e)
            }
            return c
        }, map: function (a) {
            for (var b = this.L(), c = new Pa, d = 0; d < arguments.length - 1; d += 2) {
                var e = this.evaluate(arguments[d]) + "", g = this.evaluate(arguments[d +
                1]), h = e.length;
                h += "string" === typeof g ? g.length : 1;
                b.aa(h);
                c.set(e, g)
            }
            return c
        }, undefined: function () {
        }
    };
    var bb = function () {
        this.O = pa();
        this.I = oa();
        this.Qa = new qa(this.O, this.I)
    };
    f = bb.prototype;
    f.Z = function (a, b) {
        var c = new r(a, b);
        c.N();
        this.Qa.set(a, c)
    };
    f.cd = function (a, b) {
        ab.hasOwnProperty(a) && this.Z(b || a, ab[a])
    };
    f.L = function () {
        return this.O
    };
    f.zb = function () {
        this.O = pa();
        this.Qa.O = this.O
    };
    f.lg = function () {
        this.I = oa();
        this.Qa.I = this.I
    };
    f.M = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.uc(c)
    };
    f.uc = function (a) {
        for (var b, c = 0; c < arguments.length; c++) {
            var d = Na(this.Qa, arguments[c]);
            b = d instanceof ja || d instanceof r || d instanceof n || d instanceof Pa || null === d || void 0 === d || "string" === typeof d || "number" === typeof d || "boolean" === typeof d ? d : void 0
        }
        return b
    };
    f.N = function () {
        this.Qa.N()
    };
    bb.prototype.makeImmutable = bb.prototype.N;
    bb.prototype.run = bb.prototype.uc;
    bb.prototype.execute = bb.prototype.M;
    bb.prototype.resetPermissions = bb.prototype.lg;
    bb.prototype.resetQuota = bb.prototype.zb;
    bb.prototype.getQuota = bb.prototype.L;
    bb.prototype.addNativeInstruction = bb.prototype.cd;
    bb.prototype.addInstruction = bb.prototype.Z;
    var cb = function (a) {
        for (var b = [], c = 0; c < a.length(); c++)a.has(c) && (b[c] = a.get(c));
        return b
    };
    var db = {
        sg: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function (a, b) {
            for (var c = [], d = 0; d < this.length(); d++)c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++)if (arguments[e]instanceof n)for (var g = arguments[e], h = 0; h < g.length(); h++)c.push(g.get(h)); else c.push(arguments[e]);
            return new n(c)
        },
        every: function (a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)if (this.has(d) && !b.o(a, this.get(d), d, this))return !1;
            return !0
        },
        filter: function (a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)this.has(e) && b.o(a, this.get(e), e, this) && d.push(this.get(e));
            return new n(d)
        },
        forEach: function (a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)this.has(d) && b.o(a, this.get(d), d, this)
        },
        hasOwnProperty: function (a, b) {
            return this.has(b)
        },
        indexOf: function (a, b, c) {
            var d = this.length(), e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var g = e; g < d; g++)if (this.has(g) && this.get(g) ===
                b)return g;
            return -1
        },
        join: function (a, b) {
            for (var c = [], d = 0; d < this.length(); d++)c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function (a, b, c) {
            var d = this.length(), e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var g = e; 0 <= g; g--)if (this.has(g) && this.get(g) === b)return g;
            return -1
        },
        map: function (a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)this.has(e) && (d[e] = b.o(a, this.get(e), e, this));
            return new n(d)
        },
        pop: function () {
            return this.pop()
        },
        push: function (a, b) {
            return this.push.apply(this, Array.prototype.slice.call(arguments,
                1))
        },
        reduce: function (a, b, c) {
            var d = this.length(), e, g;
            if (void 0 !== c)e = c, g = 0; else {
                if (0 == d)throw Error("TypeError: Reduce on List with no elements.");
                var h;
                for (h = 0; h < d; h++)if (this.has(h)) {
                    e = this.get(h);
                    g = h + 1;
                    break
                }
                if (h == d)throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var k = g; k < d; k++)this.has(k) && (e = b.o(a, e, this.get(k), k, this));
            return e
        },
        reduceRight: function (a, b, c) {
            var d = this.length(), e, g;
            if (void 0 !== c)e = c, g = d - 1; else {
                if (0 == d)throw Error("TypeError: ReduceRight on List with no elements.");
                var h;
                for (h = 1; h <= d; h++)if (this.has(d - h)) {
                    e = this.get(d - h);
                    g = d - (h + 1);
                    break
                }
                if (h > d)throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var k = g; 0 <= k; k--)this.has(k) && (e = b.o(a, e, this.get(k), k, this));
            return e
        },
        reverse: function () {
            for (var a = cb(this), b = a.length - 1, c = 0; 0 <= b; b--, c++)a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
            return this
        },
        shift: function () {
            return this.shift()
        },
        slice: function (a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ?
                d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], g = b; g < c; g++)e.push(this.get(g));
            return new n(e)
        },
        some: function (a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)if (this.has(d) && b.o(a, this.get(d), d, this))return !0;
            return !1
        },
        sort: function (a, b) {
            var c = cb(this);
            void 0 === b ? c.sort() : c.sort(function (c, d) {
                return Number(b.o(a, c, d))
            });
            for (var d = 0; d < c.length; d++)c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d)
        },
        splice: function (a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments,
                1, arguments.length - 1))
        },
        toString: function () {
            return this.toString()
        },
        unshift: function (a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var y = {
        vd: {
            ADD: 0,
            AND: 1,
            APPLY: 2,
            ASSIGN: 3,
            BREAK: 4,
            CASE: 5,
            CONTINUE: 6,
            CONTROL: 49,
            CREATE_ARRAY: 7,
            CREATE_OBJECT: 8,
            DEFAULT: 9,
            DEFN: 50,
            DIVIDE: 10,
            DO: 11,
            EQUALS: 12,
            EXPRESSION_LIST: 13,
            FN: 51,
            FOR: 14,
            FOR_IN: 47,
            GET: 15,
            GET_CONTAINER_VARIABLE: 48,
            GET_INDEX: 16,
            GET_PROPERTY: 17,
            GREATER_THAN: 18,
            GREATER_THAN_EQUALS: 19,
            IDENTITY_EQUALS: 20,
            IDENTITY_NOT_EQUALS: 21,
            IF: 22,
            LESS_THAN: 23,
            LESS_THAN_EQUALS: 24,
            MODULUS: 25,
            MULTIPLY: 26,
            NEGATE: 27,
            NOT: 28,
            NOT_EQUALS: 29,
            NULL: 45,
            OR: 30,
            PLUS_EQUALS: 31,
            POST_DECREMENT: 32,
            POST_INCREMENT: 33,
            PRE_DECREMENT: 34,
            PRE_INCREMENT: 35,
            QUOTE: 46,
            RETURN: 36,
            SET_PROPERTY: 43,
            SUBTRACT: 37,
            SWITCH: 38,
            TERNARY: 39,
            TYPEOF: 40,
            UNDEFINED: 44,
            VAR: 41,
            WHILE: 42
        }
    }, eb = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "), fb = new ja("break"), gb = new ja("continue");
    y.add = function (a, b) {
        return this.evaluate(a) + this.evaluate(b)
    };
    y.and = function (a, b) {
        return this.evaluate(a) && this.evaluate(b)
    };
    y.apply = function (a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (!(c instanceof n))throw Error("Error: Non-List argument given to Apply instruction.");
        if (null === a || void 0 === a)throw Error("TypeError: Can't read property " + b + " of " + a + ".");
        if ("boolean" == typeof a || "number" == typeof a) {
            if ("toString" == b)return a.toString();
            throw Error("TypeError: " + a + "." + b + " is not a function.");
        }
        if ("string" == typeof a) {
            if (0 <= xa(eb, b))return Za(a[b].apply(a, cb(c)));
            throw Error("TypeError: " + b + " is not a function");
        }
        if (a instanceof n) {
            if (a.has(b)) {
                var d = a.get(b);
                if (d instanceof r) {
                    var e = cb(c);
                    e.unshift(this.H());
                    return d.o.apply(d, e)
                }
                throw Error("TypeError: " + b + " is not a function");
            }
            if (0 <= xa(db.sg, b)) {
                var g = cb(c);
                g.unshift(this.H());
                return db[b].apply(a, g)
            }
        }
        if (a instanceof r || a instanceof Pa) {
            if (a.has(b)) {
                var h = a.get(b);
                if (h instanceof r) {
                    var k = cb(c);
                    k.unshift(this.H());
                    return h.o.apply(h, k)
                }
                throw Error("TypeError: " + b + " is not a function");
            }
            if ("toString" == b)return a instanceof r ? a.getName() : a.toString();
            if ("hasOwnProperty" ==
                b)return a.has.apply(a, cb(c))
        }
        throw Error("TypeError: Object has no '" + b + "' property.");
    };
    y.assign = function (a, b) {
        a = this.evaluate(a);
        if ("string" != typeof a)throw Error("Invalid key name given for assignment.");
        var c = this.H();
        if (!c.has(a))throw Error("Attempting to assign to undefined value " + b);
        var d = this.evaluate(b);
        c.set(a, d);
        return d
    };
    y["break"] = function () {
        return fb
    };
    y["case"] = function (a) {
        for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
            var d = this.evaluate(b[c]);
            if (d instanceof ja)return d
        }
    };
    y["continue"] = function () {
        return gb
    };
    y.af = function (a, b, c) {
        var d = new n;
        b = this.evaluate(b);
        for (var e = 0; e < b.length; e++)d.push(b[e]);
        var g = [y.vd.FN, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
        this.H().set(a, this.evaluate(g))
    };
    y.df = function (a, b) {
        return this.evaluate(a) / this.evaluate(b)
    };
    y.hf = function (a, b) {
        return this.evaluate(a) == this.evaluate(b)
    };
    y.jf = function (a) {
        for (var b, c = 0; c < arguments.length; c++)b = this.evaluate(arguments[c]);
        return b
    };
    y.nf = function (a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.H();
        if ("string" == typeof b)for (var e = 0; e < b.length; e++) {
            d.set(a, e);
            var g = this.Pa(c);
            if (g instanceof ja) {
                if ("break" == g.C)break;
                if ("return" == g.C)return g
            }
        } else if (b instanceof Pa || b instanceof n || b instanceof r)for (var h = b.ca(), k = h.length(), l = 0; l < k; l++) {
            d.set(a, h.get(l));
            var m = this.Pa(c);
            if (m instanceof ja) {
                if ("break" == m.C)break;
                if ("return" == m.C)return m
            }
        }
    };
    y.get = function (a) {
        return this.H().get(this.evaluate(a))
    };
    y.pd = function (a, b) {
        var c;
        a = this.evaluate(a);
        b = this.evaluate(b);
        if (void 0 === a || null === a)throw Error("TypeError: cannot access property of " + a + ".");
        a instanceof Pa || a instanceof n || a instanceof r ? c = a.get(b) : "string" == typeof a && ("length" == b ? c = a.length : ka(b) && (c = a[b]));
        return c
    };
    y.sf = function (a, b) {
        return this.evaluate(a) > this.evaluate(b)
    };
    y.tf = function (a, b) {
        return this.evaluate(a) >= this.evaluate(b)
    };
    y.Af = function (a, b) {
        return this.evaluate(a) === this.evaluate(b)
    };
    y.Bf = function (a, b) {
        return this.evaluate(a) !== this.evaluate(b)
    };
    y["if"] = function (a, b, c) {
        var d = [];
        this.evaluate(a) ? d = this.evaluate(b) : c && (d = this.evaluate(c));
        var e = this.Pa(d);
        if (e instanceof ja)return e
    };
    y.Jf = function (a, b) {
        return this.evaluate(a) < this.evaluate(b)
    };
    y.Kf = function (a, b) {
        return this.evaluate(a) <= this.evaluate(b)
    };
    y.Of = function (a, b) {
        return this.evaluate(a) % this.evaluate(b)
    };
    y.multiply = function (a, b) {
        return this.evaluate(a) * this.evaluate(b)
    };
    y.Pf = function (a) {
        return -this.evaluate(a)
    };
    y.Qf = function (a) {
        return !this.evaluate(a)
    };
    y.Rf = function (a, b) {
        return this.evaluate(a) != this.evaluate(b)
    };
    y["null"] = function () {
        return null
    };
    y.or = function (a, b) {
        return this.evaluate(a) || this.evaluate(b)
    };
    y.Id = function (a, b) {
        var c = this.evaluate(a);
        this.evaluate(b);
        return c
    };
    y.Jd = function (a) {
        return this.evaluate(a)
    };
    y.quote = function (a) {
        return Array.prototype.slice.apply(arguments)
    };
    y["return"] = function (a) {
        return new ja("return", this.evaluate(a))
    };
    y.setProperty = function (a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (null === a || void 0 === a)throw Error("TypeError: Can't set property " + b + " of " + a + ".");
        (a instanceof r || a instanceof n || a instanceof Pa) && a.set(b, c);
        return c
    };
    y.rg = function (a, b) {
        return this.evaluate(a) - this.evaluate(b)
    };
    y["switch"] = function (a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (!va(b) || !va(c))throw Error("Error: Malformed switch instruction.");
        for (var d, e = !1, g = 0; g < b.length; g++)if (e || a === this.evaluate(b[g]))if (d = this.evaluate(c[g]), d instanceof ja) {
            var h = d.C;
            if ("break" == h)return;
            if ("return" == h || "continue" == h)return d
        } else e = !0;
        if (c.length == b.length + 1 && (d = this.evaluate(c[c.length - 1]), d instanceof ja && ("return" == d.C || "continue" == d.C)))return d
    };
    y.ug = function (a, b, c) {
        return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c)
    };
    y["typeof"] = function (a) {
        a = this.evaluate(a);
        return a instanceof r ? "function" : typeof a
    };
    y.undefined = function () {
    };
    y["var"] = function (a) {
        for (var b = this.H(), c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            "string" != typeof d || b.add(d, void 0)
        }
    };
    y["while"] = function (a, b, c, d) {
        var e, g = this.evaluate(d);
        if (this.evaluate(c) && (e = this.Pa(g), e instanceof ja)) {
            if ("break" == e.C)return;
            if ("return" == e.C)return e
        }
        for (; this.evaluate(a);) {
            e = this.Pa(g);
            if (e instanceof ja) {
                if ("break" == e.C)break;
                if ("return" == e.C)return e
            }
            this.evaluate(b)
        }
    };
    var ib = function () {
        this.ud = !1;
        this.F = new bb;
        hb(this);
        this.ud = !0
    };
    ib.prototype.Gf = function () {
        return this.ud
    };
    ib.prototype.isInitialized = ib.prototype.Gf;
    ib.prototype.M = function (a) {
        this.F.I.Bd(String(a[0])) || (this.F.I.reset(), this.F.I.Md(!0));
        return this.F.uc(a)
    };
    ib.prototype.execute = ib.prototype.M;
    ib.prototype.N = function () {
        this.F.N()
    };
    ib.prototype.makeImmutable = ib.prototype.N;
    var hb = function (a) {
        function b(a, b) {
            e.F.cd(a, String(b))
        }

        function c(a, b) {
            e.F.Z(String(d[a]), b)
        }

        var d = y.vd, e = a;
        b("control", d.CONTROL);
        b("fn", d.FN);
        b("list", d.CREATE_ARRAY);
        b("map", d.CREATE_OBJECT);
        b("undefined", d.UNDEFINED);
        c("ADD", y.add);
        c("AND", y.and);
        c("APPLY", y.apply);
        c("ASSIGN", y.assign);
        c("BREAK", y["break"]);
        c("CASE", y["case"]);
        c("CONTINUE", y["continue"]);
        c("DEFAULT", y["case"]);
        c("DEFN", y.af);
        c("DIVIDE", y.df);
        c("EQUALS", y.hf);
        c("EXPRESSION_LIST", y.jf);
        c("FOR_IN", y.nf);
        c("GET", y.get);
        c("GET_INDEX",
            y.pd);
        c("GET_PROPERTY", y.pd);
        c("GREATER_THAN", y.sf);
        c("GREATER_THAN_EQUALS", y.tf);
        c("IDENTITY_EQUALS", y.Af);
        c("IDENTITY_NOT_EQUALS", y.Bf);
        c("IF", y["if"]);
        c("LESS_THAN", y.Jf);
        c("LESS_THAN_EQUALS", y.Kf);
        c("MODULUS", y.Of);
        c("MULTIPLY", y.multiply);
        c("NEGATE", y.Pf);
        c("NOT", y.Qf);
        c("NOT_EQUALS", y.Rf);
        c("NULL", y["null"]);
        c("OR", y.or);
        c("POST_DECREMENT", y.Id);
        c("POST_INCREMENT", y.Id);
        c("PRE_DECREMENT", y.Jd);
        c("PRE_INCREMENT", y.Jd);
        c("QUOTE", y.quote);
        c("RETURN", y["return"]);
        c("SET_PROPERTY", y.setProperty);
        c("SUBTRACT", y.rg);
        c("SWITCH", y["switch"]);
        c("TERNARY", y.ug);
        c("TYPEOF", y["typeof"]);
        c("VAR", y["var"]);
        c("WHILE", y["while"])
    };
    ib.prototype.Z = function (a, b) {
        this.F.Z(a, b)
    };
    ib.prototype.addInstruction = ib.prototype.Z;
    ib.prototype.L = function () {
        return this.F.L()
    };
    ib.prototype.getQuota = ib.prototype.L;
    ib.prototype.zb = function () {
        this.F.zb()
    };
    ib.prototype.resetQuota = ib.prototype.zb;
    ib.prototype.Ea = function (a) {
        this.F.I.Ea(a)
    };
    ib.prototype.Fa = function (a) {
        this.F.I.Fa(a)
    };
    ib.prototype.qb = function (a, b, c) {
        this.F.I.dd(a, b, c)
    };
    var jb = function () {
        this.wb = {}
    };
    jb.prototype.get = function (a) {
        return this.wb.hasOwnProperty(a) ? this.wb[a] : void 0
    };
    jb.prototype.add = function (a, b) {
        if (this.wb.hasOwnProperty(a))throw"Attempting to add a function which already exists: " + a + ".";
        if (!b)throw"Attempting to add an undefined function: " + a + ".";
        var c = new r(a, function () {
            for (var a = Array.prototype.slice.call(arguments, 0), c = 0; c < a.length; c++)a[c] = this.evaluate(a[c]);
            return b.apply(this, a)
        });
        c.N();
        this.wb[a] = c
    };
    jb.prototype.addAll = function (a) {
        for (var b in a)a.hasOwnProperty(b) && this.add(b, a[b])
    };
    var z = window, A = document, kb = navigator, lb = A.currentScript && A.currentScript.src, mb = function (a, b) {
        var c = z[a];
        z[a] = void 0 === c ? b : c;
        return z[a]
    }, nb = function (a, b) {
        b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
            a.readyState in{loaded: 1, complete: 1} && (a.onreadystatechange = null, b())
        })
    }, ob = function (a, b, c) {
        var d = A.createElement("script");
        d.type = "text/javascript";
        d.async = !0;
        d.src = a;
        nb(d, b);
        c && (d.onerror = c);
        da() && d.setAttribute("nonce", da());
        var e = A.getElementsByTagName("script")[0] || A.body || A.head;
        e.parentNode.insertBefore(d, e);
        return d
    }, pb = function () {
        if (lb) {
            var a = lb.toLowerCase();
            if (0 === a.indexOf("https://"))return 2;
            if (0 === a.indexOf("http://"))return 3
        }
        return 1
    }, qb = function (a, b) {
        var c = A.createElement("iframe");
        c.height = "0";
        c.width = "0";
        c.style.display = "none";
        c.style.visibility = "hidden";
        var d = A.body && A.body.lastChild || A.body || A.head;
        d.parentNode.insertBefore(c, d);
        nb(c, b);
        void 0 !== a && (c.src = a);
        return c
    }, rb = function (a, b, c) {
        var d = new Image(1, 1);
        d.onload = function () {
            d.onload = null;
            b && b()
        };
        d.onerror =
            function () {
                d.onerror = null;
                c && c()
            };
        d.src = a
    }, sb = function (a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, tb = function (a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }, B = function (a) {
        z.setTimeout(a, 0)
    }, vb = function (a) {
        var b = A.getElementById(a);
        if (b && ub(b, "id") != a)for (var c = 1; c < document.all[a].length; c++)if (ub(document.all[a][c], "id") == a)return document.all[a][c];
        return b
    }, ub = function (a, b) {
        return a && b && a.attributes &&
        a.attributes[b] ? a.attributes[b].value : null
    }, wb = function (a) {
        var b = a.innerText || a.textContent || "";
        b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }, yb = function (a) {
        var b = A.createElement("div");
        b.innerHTML = "A<div>" + a + "</div>";
        b = b.lastChild;
        for (var c = []; b.firstChild;)c.push(b.removeChild(b.firstChild));
        return c
    }, zb = function (a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++)d[b[e]] = !0;
        for (var g = a, h = 0; g && h <= c; h++) {
            if (d[String(g.tagName).toLowerCase()])return g;
            g = g.parentElement
        }
        return null
    }, Ab = function (a) {
        kb.sendBeacon && kb.sendBeacon(a) || rb(a)
    };
    var Bb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var Cb = /:[0-9]+$/, Db = function (a, b, c) {
        for (var d = a.split("&"), e = 0; e < d.length; e++) {
            var g = d[e].split("=");
            if (decodeURIComponent(g[0]).replace(/\+/g, " ") == b) {
                var h = g.slice(1).join("=");
                return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
            }
        }
    }, Fb = function (a, b, c, d, e) {
        var g, h = function (a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        }, k = h(a.protocol) || h(z.location.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
            case "url_no_fragment":
                g = Eb(a);
                break;
            case "protocol":
                g = k;
                break;
            case "host":
                g = (a.hostname || z.location.hostname).replace(Cb,
                    "").toLowerCase();
                if (c) {
                    var l = /^www\d*\./.exec(g);
                    l && l[0] && (g = g.substr(l[0].length))
                }
                break;
            case "port":
                g = String(Number(a.hostname ? a.port : z.location.port) || ("http" == k ? 80 : "https" == k ? 443 : ""));
                break;
            case "path":
                g = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                var m = g.split("/");
                0 <= xa(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
                g = m.join("/");
                break;
            case "query":
                g = a.search.replace("?", "");
                e && (g = Db(g, e));
                break;
            case "extension":
                var p = a.pathname.split(".");
                g = 1 < p.length ? p[p.length - 1] : "";
                g = g.split("/")[0];
                break;
            case "fragment":
                g = a.hash.replace("#", "");
                break;
            default:
                g = a && a.href
        }
        return g
    }, Eb = function (a) {
        var b = "";
        a && a.href && (b = a.hash ? a.href.replace(a.hash, "") : a.href);
        return b
    }, E = function (a) {
        var b = document.createElement("a");
        a && (Bb.test(a), b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (c = "/" + c);
        var d = b.hostname.replace(Cb, "");
        return {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: d,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        }
    };
    var Ib = function () {
        this.Ua = new ib;
        var a = new jb;
        a.addAll(Gb());
        Hb(this, function (b) {
            return a.get(b)
        })
    }, Gb = function () {
        return {
            callInWindow: Jb,
            callLater: Kb,
            copyFromWindow: Lb,
            createQueue: Nb,
            createArgumentsQueue: Ob,
            encodeURI: Pb,
            encodeURIComponent: Qb,
            getReferrer: Rb,
            getUrl: Sb,
            getUrlFragment: Tb,
            isPlainObject: Ub,
            injectHiddenIframe: Vb,
            injectScript: Wb,
            logToConsole: Xb,
            queryPermission: Yb,
            removeUrlFragment: Zb,
            replaceAll: $b,
            sendPixel: ac,
            setInWindow: bc
        }
    };
    Ib.prototype.M = function (a) {
        return this.Ua.M(a)
    };
    Ib.prototype.execute = Ib.prototype.M;
    var Hb = function (a, b) {
        a.Ua.Z("require", b)
    };
    Ib.prototype.Ea = function (a) {
        this.Ua.Ea(a)
    };
    Ib.prototype.Fa = function (a) {
        this.Ua.Fa(a)
    };
    Ib.prototype.qb = function (a, b, c) {
        this.Ua.qb(a, b, c)
    };
    function Jb(a, b) {
        Ta(["path:!string"], [a]);
        for (var c = a.split("."), d = z, e = d[c[0]], g = 1; e && g < c.length; g++)d = e, e = e[c[g]];
        if ("function" == Va(e)) {
            for (var h = [], k = 1; k < arguments.length; k++)h.push(Ya(arguments[k]));
            e.apply(d, h)
        }
    }

    function Kb(a) {
        Ta(["fn:!Fn"], arguments);
        var b = this.H();
        B(function () {
            a instanceof r && a.o(b)
        })
    }

    function Lb(a) {
        Ta(["path:!string"], arguments);
        this.J().assert("access_globals", "read", a);
        var b = a.split("."), c = z, d;
        for (d = 0; d < b.length - 1; d++)if (c = c[b[d]], void 0 === c || null === c)return;
        return Za(c[b[d]])
    }

    function Rb() {
        return A.referrer
    }

    function Sb(a, b, c, d) {
        Ta(["component:!string", "stripWww:?boolean", "defaultPages:?List", "queryKey:?string"], arguments);
        this.J().assert("get_url", a, d);
        var e = z.location.href, g;
        if (c) {
            g = [];
            for (var h = 0; h < c.length(); h++) {
                var k = c.get(h);
                "string" == typeof k && g.push(k)
            }
        }
        return Fb(E(e), a, b, g, d)
    }

    function Tb(a) {
        Ta(["url:!string"], arguments);
        return Fb(E(a), "fragment")
    }

    function Ub(a) {
        return a instanceof Pa
    }

    function Vb(a, b) {
        Ta(["url:!string", "onSuccess:?Fn"], arguments);
        this.J().assert("inject_hidden_iframe", a);
        var c = this.H();
        qb(a, function () {
            b instanceof r && b.o(c)
        })
    }

    var cc = {};

    function Wb(a, b, c, d) {
        Ta(["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"], arguments);
        this.J().assert("inject_script", a);
        var e = this.H(), g = function () {
            b instanceof r && b.o(e)
        }, h = function () {
            c instanceof r && c.o(e)
        };
        if (d) {
            var k = d;
            cc[k] ? (cc[k].onSuccess.push(g), cc[k].onFailure.push(h)) : (cc[k] = {
                onSuccess: [g],
                onFailure: [h]
            }, g = function () {
                for (var a = cc[k].onSuccess, b = 0; b < a.length; b++)B(a[b]);
                a.push = function (a) {
                    B(a);
                    return 0
                }
            }, h = function () {
                for (var a = cc[k].onFailure, b = 0; b < a.length; b++)B(a[b]);
                cc[k] = null
            }, ob(a, g, h))
        } else ob(a, g, h)
    }

    function Xb() {
        try {
            this.J().assert("logging")
        } catch (c) {
            return
        }
        for (var a = Array.prototype.slice.call(arguments, 0), b = 0; b < a.length; b++)a[b] = Ya(a[b]);
        console.log.apply(console, a)
    }

    function Zb(a) {
        return Eb(E(a))
    }

    function $b(a, b, c) {
        Ta(["string:!string", "regex:!string", "replacement:!string"], arguments);
        return a.replace(new RegExp(b, "g"), c)
    }

    function ac(a, b, c) {
        Ta(["url:!string", "onSuccess:?Fn", "onFailure:?Fn"], arguments);
        this.J().assert("send_pixel", a);
        var d = this.H();
        rb(a, function () {
            b instanceof r && b.o(d)
        }, function () {
            c instanceof r && c.o(d)
        })
    }

    function bc(a, b, c) {
        Ta(["path:!string", "value:?*", "overrideExisting:?boolean"], arguments);
        this.J().assert("access_globals", "readwrite", a);
        var d = a.split("."), e = z, g;
        for (g = 0; g < d.length - 1; g++)if (e = e[d[g]], void 0 === e)return !1;
        return void 0 === e[d[g]] || c ? (e[d[g]] = Ya(b), !0) : !1
    }

    function Nb(a) {
        Ta(["path:!string"], arguments);
        this.J().assert("access_globals", "readwrite", a);
        var b = dc(a), c = a.split(".").pop(), d = b[c];
        void 0 === d && (d = [], b[c] = d);
        return Za(function () {
            if (!sa(d.push))throw Error("Object at " + a + " in window is not an array.");
            fc(arguments);
            d.push.apply(d, Array.prototype.slice.call(arguments, 0))
        })
    }

    function Ob(a, b) {
        Ta(["functionPath:!string", "arrayPath:!string"], arguments);
        this.J().assert("access_globals", "readwrite", a);
        this.J().assert("access_globals", "readwrite", b);
        var c = dc(a), d = a.split(".").pop(), e = c[d];
        if (e && !sa(e))return null;
        if (e) {
            var g = e;
            e = function () {
                fc(arguments);
                g.apply(g, Array.prototype.slice.call(arguments, 0))
            };
            return Za(e)
        }
        var h;
        e = function () {
            if (!sa(h.push))throw Error("Object at " + b + " in window is not an array.");
            h.push.call(h, arguments)
        };
        c[d] = e;
        var k = dc(b), l = b.split(".").pop();
        h = k[l];
        void 0 === h && (h = [], k[l] = h);
        return Za(function () {
            fc(arguments);
            e.apply(e, Array.prototype.slice.call(arguments, 0))
        })
    }

    function fc(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            c && ea(c) && Object.defineProperty(c, "gtm", {value: {fromContainer: !0}})
        }
    }

    function dc(a) {
        for (var b = a.split("."), c = z, d = 0; d < b.length - 1; d++)if (c = c[b[d]], void 0 === c)throw Error("Path " + a + " does not exist.");
        return c
    }

    function Yb(a, b) {
        Ta(["permission:!string"], [a]);
        try {
            return this.J().assert.apply(null, Array.prototype.slice.call(arguments, 0)), !0
        } catch (c) {
            return !1
        }
    }

    function Pb(a) {
        Ta(["uri:!string"], arguments);
        return encodeURI(a)
    }

    function Qb(a) {
        Ta(["uri:!string"], arguments);
        return encodeURIComponent(a)
    };
    var gc = [], hc = {
        "\x00": "&#0;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "<": "&lt;",
        ">": "&gt;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        "-": "&#45;",
        "/": "&#47;",
        "=": "&#61;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    }, ic = function (a) {
        return hc[a]
    }, jc = /[\x00\x22\x26\x27\x3c\x3e]/g;
    var nc = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g, oc = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\x0B": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        "&": "\\x26",
        "'": "\\x27",
        "/": "\\/",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "\\": "\\\\",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029",
        $: "\\x24",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        ":": "\\x3a",
        "?": "\\x3f",
        "[": "\\x5b",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d"
    }, pc = function (a) {
        return oc[a]
    };
    gc[8] = function (a) {
        if (null == a)return " null ";
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(nc, pc) + "'"
        }
    };
    var xc = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g, yc = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\x0B": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    }, zc = function (a) {
        return yc[a]
    };
    gc[16] = function (a) {
        return a
    };
    var Bc, Cc = [], Dc = [], Ec = [], Fc = [], Hc = [], Ic = {}, Jc, Kc, Lc, Mc = function (a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b)b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        }, Nc = function (a) {
            var b = a["function"];
            if (!b)throw"Error: No function name given for function call.";
            var c = !!Ic[b], d = {}, e;
            for (e in a)a.hasOwnProperty(e) && 0 === e.indexOf("vtp_") && (d[c ? e : e.substr(4)] = a[e]);
            return c ? Ic[b](d) : Bc(b, d)
        }, Pc = function (a, b, c, d) {
            c = c || [];
            d = d || ra;
            var e = {}, g;
            for (g in a)a.hasOwnProperty(g) && (e[g] = Oc(a[g], b, c, d));
            return e
        },
        Qc = function (a) {
            var b = a["function"];
            if (!b)throw"Error: No function name given for function call.";
            var c = Ic[b];
            return c ? c.b || 0 : 0
        }, Oc = function (a, b, c, d) {
            if (va(a)) {
                var e;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        e = [];
                        for (var g = 1; g < a.length; g++)e.push(Oc(a[g], b, c, d));
                        return e;
                    case "macro":
                        var h = a[1];
                        if (c[h])return;
                        var k = Cc[h];
                        if (!k || b(k))return;
                        c[h] = !0;
                        try {
                            var l = Pc(k, b, c, d);
                            e = Nc(l);
                            Lc && (e = Lc.We(e, l))
                        } catch (D) {
                            d(h, D), e = !1
                        }
                        c[h] = !1;
                        return e;
                    case "map":
                        e = {};
                        for (var m = 1; m < a.length; m += 2)e[Oc(a[m],
                            b, c, d)] = Oc(a[m + 1], b, c, d);
                        return e;
                    case "template":
                        e = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var t = Oc(a[q], b, c, d);
                            Kc && (p = p || t === Kc.kb);
                            e.push(t)
                        }
                        return Kc && p ? Kc.Xe(e) : e.join("");
                    case "escape":
                        e = Oc(a[1], b, c, d);
                        if (Kc && va(a[1]) && "macro" === a[1][0] && Kc.Hf(a))return Kc.$f(e);
                        e = String(e);
                        for (var u = 2; u < a.length; u++)gc[a[u]] && (e = gc[a[u]](e));
                        return e;
                    case "tag":
                        var v = a[1];
                        if (!Fc[v])throw Error("Unable to resolve tag reference " + v + ".");
                        return e = {kd: a[2], index: v};
                    case "zb":
                        var w = {arg0: a[2], arg1: a[3], ignore_case: a[5]};
                        w["function"] = a[1];
                        var C = Rc(w, b, c, d);
                        a[4] && (C = !C);
                        return C;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        }, Rc = function (a, b, c, d) {
            try {
                return Jc(Pc(a, b, c, d))
            } catch (e) {
                JSON.stringify(a)
            }
            return null
        };
    var Sc = null, Wc = function (a) {
        function b(a) {
            for (var b = 0; b < a.length; b++)d[a[b]] = !0
        }

        var c = [], d = [];
        Sc = Tc(a, Uc() || function () {
        });
        for (var e = 0; e < Dc.length; e++) {
            var g = Dc[e], h = Vc(g);
            if (h) {
                for (var k = g.add || [], l = 0; l < k.length; l++)c[k[l]] = !0;
                b(g.block || [])
            } else null === h && b(g.block || [])
        }
        var m = [];
        for (e = 0; e < Fc.length; e++)c[e] && !d[e] && (m[e] = !0);
        return m
    }, Vc = function (a) {
        for (var b = a["if"] || [], c = 0; c < b.length; c++) {
            var d = Sc(b[c]);
            if (!d)return null === d ? null : !1
        }
        var e = a.unless || [];
        for (c = 0; c < e.length; c++) {
            d = Sc(e[c]);
            if (null ===
                d)return null;
            if (d)return !1
        }
        return !0
    };
    var Tc = function (a, b) {
        var c = [];
        return function (d) {
            void 0 === c[d] && (c[d] = Rc(Ec[d], a, void 0, b));
            return c[d]
        }
    };
    /*
     Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

    var Xc, Yc = function () {
    };
    (function () {
        function a(a, h) {
            a = a || "";
            h = h || {};
            for (var k in b)b.hasOwnProperty(k) && (h.Ge && (h["fix_" + k] = !0), h.ld = h.ld || h["fix_" + k]);
            var l = {
                comment: /^\x3c!--/,
                endTag: /^<\//,
                atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                startTag: /^</,
                chars: /^[^<]/
            }, q = {
                comment: function () {
                    var b = a.indexOf("--\x3e");
                    if (0 <= b)return {content: a.substr(4, b), length: b + 3}
                }, endTag: function () {
                    var b = a.match(d);
                    if (b)return {tagName: b[1], length: b[0].length}
                }, atomicTag: function () {
                    var b = q.startTag();
                    if (b) {
                        var c = a.slice(b.length);
                        if (c.match(new RegExp("</\\s*" + b.tagName + "\\s*>", "i"))) {
                            var d = c.match(new RegExp("([\\s\\S]*?)</\\s*" + b.tagName + "\\s*>", "i"));
                            if (d)return {tagName: b.tagName, D: b.D, content: d[1], length: d[0].length + b.length}
                        }
                    }
                }, startTag: function () {
                    var b = a.match(c);
                    if (b) {
                        var d = {};
                        b[2].replace(e, function (a, b, c, e, h) {
                            var k = c || e || h || g.test(b) && b || null, l = document.createElement("div");
                            l.innerHTML = k;
                            d[b] = l.textContent || l.innerText || k
                        });
                        return {tagName: b[1], D: d, Za: !!b[3], length: b[0].length}
                    }
                }, chars: function () {
                    var b =
                        a.indexOf("<");
                    return {length: 0 <= b ? b : a.length}
                }
            }, t = function () {
                for (var b in l)if (l[b].test(a)) {
                    var c = q[b]();
                    return c ? (c.type = c.type || b, c.text = a.substr(0, c.length), a = a.slice(c.length), c) : null
                }
            };
            h.ld && function () {
                var b = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i, c = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i, d = [];
                d.zd = function () {
                    return this[this.length - 1]
                };
                d.ic = function (a) {
                    var b = this.zd();
                    return b && b.tagName && b.tagName.toUpperCase() === a.toUpperCase()
                };
                d.Ve =
                    function (a) {
                        for (var b = 0, c; c = this[b]; b++)if (c.tagName === a)return !0;
                        return !1
                    };
                var e = function (a) {
                    a && "startTag" === a.type && (a.Za = b.test(a.tagName) || a.Za);
                    return a
                }, g = t, k = function () {
                    a = "</" + d.pop().tagName + ">" + a
                }, l = {
                    startTag: function (b) {
                        var e = b.tagName;
                        "TR" === e.toUpperCase() && d.ic("TABLE") ? (a = "<TBODY>" + a, m()) : h.Mg && c.test(e) && d.Ve(e) ? d.ic(e) ? k() : (a = "</" + b.tagName + ">" + a, m()) : b.Za || d.push(b)
                    }, endTag: function (a) {
                        d.zd() ? h.kf && !d.ic(a.tagName) ? k() : d.pop() : h.kf && (g(), m())
                    }
                }, m = function () {
                    var b = a, c = e(g());
                    a = b;
                    if (c &&
                        l[c.type])l[c.type](c)
                };
                t = function () {
                    m();
                    return e(g())
                }
            }();
            return {
                append: function (b) {
                    a += b
                }, eg: t, Sg: function (a) {
                    for (var b; (b = t()) && (!a[b.type] || !1 !== a[b.type](b)););
                }, clear: function () {
                    var b = a;
                    a = "";
                    return b
                }, Tg: function () {
                    return a
                }, stack: []
            }
        }

        var b = function () {
                var a = {}, b = this.document.createElement("div");
                b.innerHTML = "<P><I></P></I>";
                a.Zg = "<P><I></P></I>" !== b.innerHTML;
                b.innerHTML = "<P><i><P></P></i></P>";
                a.Vg = 2 === b.childNodes.length;
                return a
            }(), c = /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
            d = /^<\/([\-A-Za-z0-9_]+)[^>]*>/, e = /([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g, g = /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;
        a.supports = b;
        a.$g = function (a) {
            var b = {
                comment: function (a) {
                    return "<--" + a.content + "--\x3e"
                }, endTag: function (a) {
                    return "</" + a.tagName + ">"
                }, atomicTag: function (a) {
                    return b.startTag(a) + a.content + b.endTag(a)
                }, startTag: function (a) {
                    var b = "<" + a.tagName, c;
                    for (c in a.D) {
                        var d = a.D[c];
                        b += " " + c + '="' + (d ? d.replace(/(^|[^\\])"/g, '$1\\"') : "") + '"'
                    }
                    return b + (a.Za ? "/>" : ">")
                }, chars: function (a) {
                    return a.text
                }
            };
            return b[a.type](a)
        };
        a.Lg = function (a) {
            var b = {}, c;
            for (c in a) {
                var d = a[c];
                b[c] = d && d.replace(/(^|[^\\])"/g, '$1\\"')
            }
            return b
        };
        for (var h in b)a.Le = a.Le || !b[h] && h;
        Xc = a
    })();
    (function () {
        function a() {
        }

        function b(a) {
            return void 0 !== a && null !== a
        }

        function c(a, b, c) {
            var d, e = a && a.length || 0;
            for (d = 0; d < e; d++)b.call(c, a[d], d)
        }

        function d(a, b, c) {
            for (var d in a)a.hasOwnProperty(d) && b.call(c, d, a[d])
        }

        function e(a,
                   b) {
            d(b, function (b, c) {
                a[b] = c
            });
            return a
        }

        function g(a, c) {
            a = a || {};
            d(c, function (c, d) {
                b(a[c]) || (a[c] = d)
            });
            return a
        }

        function h(a) {
            try {
                return m.call(a)
            } catch (u) {
                var b = [];
                c(a, function (a) {
                    b.push(a)
                });
                return b
            }
        }

        var k = {
            xe: a, ye: a, ze: a, Ae: a, He: a, Ie: function (a) {
                return a
            }, done: a, error: function (a) {
                throw a;
            }, ig: !1
        }, l = this;
        if (!l.postscribe) {
            var m = Array.prototype.slice, p = function () {
                function a(a, c, d) {
                    var e = "data-ps-" + c;
                    if (2 === arguments.length) {
                        var g = a.getAttribute(e);
                        return b(g) ? String(g) : g
                    }
                    b(d) && "" !== d ? a.setAttribute(e,
                        d) : a.removeAttribute(e)
                }

                function g(b, c) {
                    var d = b.ownerDocument;
                    e(this, {
                        root: b,
                        options: c,
                        $a: d.defaultView || d.parentWindow,
                        ya: d,
                        yb: Xc("", {Ge: !0}),
                        Xb: [b],
                        qc: "",
                        sc: d.createElement(b.nodeName),
                        Xa: [],
                        la: []
                    });
                    a(this.sc, "proxyof", 0)
                }

                g.prototype.write = function () {
                    [].push.apply(this.la, arguments);
                    for (var a; !this.tb && this.la.length;)a = this.la.shift(), "function" === typeof a ? this.Pe(a) : this.Cc(a)
                };
                g.prototype.Pe = function (a) {
                    var b = {type: "function", value: a.name || a.toString()};
                    this.mc(b);
                    a.call(this.$a, this.ya);
                    this.Fd(b)
                };
                g.prototype.Cc = function (a) {
                    this.yb.append(a);
                    for (var b, c = [], d, e; (b = this.yb.eg()) && !(d = b && "tagName"in b ? !!~b.tagName.toLowerCase().indexOf("script") : !1) && !(e = b && "tagName"in b ? !!~b.tagName.toLowerCase().indexOf("style") : !1);)c.push(b);
                    this.Ag(c);
                    d && this.uf(b);
                    e && this.vf(b)
                };
                g.prototype.Ag = function (a) {
                    var b = this.Me(a);
                    b.bd && (b.cc = this.qc + b.bd, this.qc += b.dg, this.sc.innerHTML = b.cc, this.xg())
                };
                g.prototype.Me = function (a) {
                    var b = this.Xb.length, d = [], e = [], g = [];
                    c(a, function (a) {
                        d.push(a.text);
                        if (a.D) {
                            if (!/^noscript$/i.test(a.tagName)) {
                                var c =
                                    b++;
                                e.push(a.text.replace(/(\/?>)/, " data-ps-id=" + c + " $1"));
                                "ps-script" !== a.D.id && "ps-style" !== a.D.id && g.push("atomicTag" === a.type ? "" : "<" + a.tagName + " data-ps-proxyof=" + c + (a.Za ? " />" : ">"))
                            }
                        } else e.push(a.text), g.push("endTag" === a.type ? a.text : "")
                    });
                    return {ah: a, raw: d.join(""), bd: e.join(""), dg: g.join("")}
                };
                g.prototype.xg = function () {
                    for (var c, d = [this.sc]; b(c = d.shift());) {
                        var e = 1 === c.nodeType;
                        if (!e || !a(c, "proxyof")) {
                            e && (this.Xb[a(c, "id")] = c, a(c, "id", null));
                            var g = c.parentNode && a(c.parentNode, "proxyof");
                            g && this.Xb[g].appendChild(c)
                        }
                        d.unshift.apply(d, h(c.childNodes))
                    }
                };
                g.prototype.uf = function (a) {
                    var b = this.yb.clear();
                    b && this.la.unshift(b);
                    a.src = a.D.src || a.D.Eg;
                    a.src && this.Xa.length ? this.tb = a : this.mc(a);
                    var c = this;
                    this.zg(a, function () {
                        c.Fd(a)
                    })
                };
                g.prototype.vf = function (a) {
                    var b = this.yb.clear();
                    b && this.la.unshift(b);
                    a.type = a.D.type || a.D.Fg || "text/css";
                    this.Bg(a);
                    b && this.write()
                };
                g.prototype.Bg = function (a) {
                    var b = this.Oe(a);
                    this.Ff(b);
                    a.content && (b.styleSheet && !b.sheet ? b.styleSheet.cssText = a.content :
                        b.appendChild(this.ya.createTextNode(a.content)))
                };
                g.prototype.Oe = function (a) {
                    var b = this.ya.createElement(a.tagName);
                    b.setAttribute("type", a.type);
                    d(a.D, function (a, c) {
                        b.setAttribute(a, c)
                    });
                    return b
                };
                g.prototype.Ff = function (a) {
                    this.Cc('<span id="ps-style"/>');
                    var b = this.ya.getElementById("ps-style");
                    b.parentNode.replaceChild(a, b)
                };
                g.prototype.mc = function (a) {
                    a.Vf = this.la;
                    this.la = [];
                    this.Xa.unshift(a)
                };
                g.prototype.Fd = function (a) {
                    a !== this.Xa[0] ? this.options.error({message: "Bad script nesting or script finished twice"}) :
                        (this.Xa.shift(), this.write.apply(this, a.Vf), !this.Xa.length && this.tb && (this.mc(this.tb), this.tb = null))
                };
                g.prototype.zg = function (a, b) {
                    var c = this.Ne(a), d = this.pg(c), e = this.options.xe;
                    a.src && (c.src = a.src, this.ng(c, d ? e : function () {
                        b();
                        e()
                    }));
                    try {
                        this.Ef(c), a.src && !d || b()
                    } catch (F) {
                        this.options.error(F), b()
                    }
                };
                g.prototype.Ne = function (a) {
                    var b = this.ya.createElement(a.tagName);
                    d(a.D, function (a, c) {
                        b.setAttribute(a, c)
                    });
                    a.content && (b.text = a.content);
                    return b
                };
                g.prototype.Ef = function (a) {
                    this.Cc('<span id="ps-script"/>');
                    var b = this.ya.getElementById("ps-script");
                    b.parentNode.replaceChild(a, b)
                };
                g.prototype.ng = function (a, b) {
                    function c() {
                        a = a.onload = a.onreadystatechange = a.onerror = null
                    }

                    var d = this.options.error;
                    e(a, {
                        onload: function () {
                            c();
                            b()
                        }, onreadystatechange: function () {
                            /^(loaded|complete)$/.test(a.readyState) && (c(), b())
                        }, onerror: function () {
                            var e = {message: "remote script failed " + a.src};
                            c();
                            d(e);
                            b()
                        }
                    })
                };
                g.prototype.pg = function (a) {
                    return !/^script$/i.test(a.nodeName) || !!(this.options.ig && a.src && a.hasAttribute("async"))
                };
                return g
            }();
            l.postscribe = function () {
                function b() {
                    var a = m.shift(), b;
                    a && (b = a[a.length - 1], b.ye(), a.stream = c.apply(null, a), b.ze())
                }

                function c(c, g, k) {
                    function l(a) {
                        a = k.Ie(a);
                        w.write(a);
                        k.Ae(a)
                    }

                    w = new p(c, k);
                    w.id = d++;
                    w.name = k.name || w.id;
                    var m = c.ownerDocument, q = {close: m.close, open: m.open, write: m.write, writeln: m.writeln};
                    e(m, {
                        close: a, open: a, write: function () {
                            return l(h(arguments).join(""))
                        }, writeln: function () {
                            return l(h(arguments).join("") + "\n")
                        }
                    });
                    var t = w.$a.onerror || a;
                    w.$a.onerror = function (a, b, c) {
                        k.error({
                            Pg: a +
                            " - " + b + ":" + c
                        });
                        t.apply(w.$a, arguments)
                    };
                    w.write(g, function () {
                        e(m, q);
                        w.$a.onerror = t;
                        k.done();
                        w = null;
                        b()
                    });
                    return w
                }

                var d = 0, m = [], w = null;
                return e(function (c, d, e) {
                    "function" === typeof e && (e = {done: e});
                    e = g(e, k);
                    c = /^#/.test(c) ? l.document.getElementById(c.substr(1)) : c.Ng ? c[0] : c;
                    var h = [c, d, e];
                    c.Zf = {
                        cancel: function () {
                            h.stream ? h.stream.abort() : h[1] = a
                        }
                    };
                    e.He(h);
                    m.push(h);
                    w || b();
                    return c.Zf
                }, {streams: {}, Rg: m, Gg: p})
            }();
            Yc = l.postscribe
        }
    })();
    var Zc = {}, $c = null;
    Zc.s = "GTM-MH5FM5";
    Zc.ob = "as3";
    var ad = "www.googletagmanager.com/gtm.js";
    var bd = ad, cd = null, dd = null, ed = "//www.googletagmanager.com/a?id=" + Zc.s + "&cv=19", fd = {}, gd = {}, hd = function () {
        var a = $c.sequence || 0;
        $c.sequence = a + 1;
        return a
    };
    var H = function (a, b, c, d) {
        return (2 === id() || d || "http:" != z.location.protocol ? a : b) + c
    }, id = function () {
        var a = pb(), b;
        if (1 === a)a:{
            var c = bd;
            c = c.toLowerCase();
            for (var d = "https://" + c, e = "http://" + c, g = 1, h = A.getElementsByTagName("script"), k = 0; k < h.length && 100 > k; k++) {
                var l = h[k].src;
                if (l) {
                    l = l.toLowerCase();
                    if (0 === l.indexOf(e)) {
                        b = 3;
                        break a
                    }
                    1 === g && 0 === l.indexOf(d) && (g = 2)
                }
            }
            b = g
        } else b = a;
        return b
    };
    var jd = !1;
    var J = function () {
        var a = function (a) {
            return {
                toString: function () {
                    return a
                }
            }
        };
        return {
            Gc: a("convert_case_to"),
            Hc: a("convert_false_to"),
            Ic: a("convert_null_to"),
            Jc: a("convert_true_to"),
            Kc: a("convert_undefined_to"),
            sa: a("function"),
            ne: a("instance_name"),
            oe: a("live_only"),
            pe: a("malware_disabled"),
            qe: a("once_per_event"),
            Yc: a("once_per_load"),
            Zc: a("setup_tags"),
            se: a("tag_id"),
            $c: a("teardown_tags")
        }
    }();
    var ld = new Ha, md = {}, pd = {
        set: function (a, b) {
            x(nd(a, b), md)
        }, get: function (a) {
            return od(a, 2)
        }, reset: function () {
            ld = new Ha;
            md = {}
        }
    }, od = function (a, b) {
        return 2 != b ? ld.get(a) : qd(a)
    }, qd = function (a, b, c) {
        var d = a.split(".");
        return sd(d)
    }, sd = function (a) {
        for (var b = md, c = 0; c < a.length; c++) {
            if (null ===
                b)return !1;
            if (void 0 === b)break;
            b = b[a[c]]
        }
        return b
    };
    var vd = function (a, b) {
        ld.set(a, b);
        x(nd(a, b), md)
    }, nd = function (a, b) {
        for (var c = {}, d = c, e = a.split("."), g = 0; g < e.length - 1; g++)d = d[e[g]] = {};
        d[e[e.length - 1]] = b;
        return c
    };
    var wd = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/), xd = {
        cl: ["ecl"],
        customPixels: ["nonGooglePixels"],
        ecl: ["cl"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }, yd = {
        cl: ["ecl"],
        customPixels: ["customScripts", "html"],
        ecl: ["cl"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    };
    var zd = function (a) {
        var b = od("gtm.whitelist");
        var c = b && Ma(Ea(b), xd), d = od("gtm.blacklist") || od("tagTypeBlacklist") || [];
        wd.test(z.location && z.location.hostname) && (d = Ea(d), d.push("nonGooglePixels", "nonGoogleScripts"));
        var e = d && Ma(Ea(d), yd), g = {};
        return function (h) {
            var k = h && h[J.sa];
            if (!k || "string" != typeof k)return !0;
            k = k.replace(/^_*/, "");
            if (void 0 !== g[k])return g[k];
            var l = gd[k] || [], m = a(k);
            if (b) {
                var p;
                if (p = m)a:{
                    if (0 > xa(c, k))if (l && 0 < l.length)for (var q = 0; q < l.length; q++) {
                        if (0 > xa(c, l[q])) {
                            p = !1;
                            break a
                        }
                    } else {
                        p = !1;
                        break a
                    }
                    p = !0
                }
                m = p
            }
            var t = !1;
            if (d) {
                var u;
                if (!(u = 0 <= xa(e, k)))a:{
                    for (var v = l || [], w = new Ha, C = 0; C < e.length; C++)w.set(e[C], !0);
                    for (var D = 0; D < v.length; D++)if (w.get(v[D])) {
                        u = !0;
                        break a
                    }
                    u = !1
                }
                t = u
            }
            return g[k] = !m || t
        }
    };
    var Cd = {
        We: function (a, b) {
            b[J.Gc] && "string" === typeof a && (a = 1 == b[J.Gc] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(J.Ic) && null === a && (a = b[J.Ic]);
            b.hasOwnProperty(J.Kc) && void 0 === a && (a = b[J.Kc]);
            b.hasOwnProperty(J.Jc) && !0 === a && (a = b[J.Jc]);
            b.hasOwnProperty(J.Hc) && !1 === a && (a = b[J.Hc]);
            return a
        }
    };
    var Dd = function (a, b, c) {
        this.Yf = a;
        this.Wf = b;
        this.Nf = c
    };
    fa(Dd, Error);
    Dd.prototype.getParameters = function () {
        return this.Wf
    };
    var Ed = function (a) {
        var b = $c.zones;
        !b && a && (b = $c.zones = a());
        return b
    }, Fd = {
        active: !0, isWhitelisted: function () {
            return !0
        }
    };
    var Gd = !1, Hd = 0, Id = [];

    function Jd(a) {
        if (!Gd) {
            var b = A.createEventObject, c = "complete" == A.readyState, d = "interactive" == A.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Gd = !0;
                for (var e = 0; e < Id.length; e++)B(Id[e])
            }
            Id.push = function () {
                for (var a = 0; a < arguments.length; a++)B(arguments[a]);
                return 0
            }
        }
    }

    function Kd() {
        if (!Gd && 140 > Hd) {
            Hd++;
            try {
                A.documentElement.doScroll("left"), Jd()
            } catch (a) {
                z.setTimeout(Kd, 50)
            }
        }
    }

    var Ld = function (a) {
        Gd ? a() : Id.push(a)
    };
    var Md = function () {
        function a(a) {
            return !ua(a) || 0 > a ? 0 : a
        }

        if (!$c._li && z.performance && z.performance.timing) {
            var b = z.performance.timing.navigationStart, c = ua(pd.get("gtm.start")) ? pd.get("gtm.start") : 0;
            $c._li = {cst: a(c - b), cbt: a(cd - b)}
        }
    };
    var Nd = !1, Od = function () {
        return z.GoogleAnalyticsObject && z[z.GoogleAnalyticsObject]
    };
    var Pd = function (a) {
        z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
        var b = z.GoogleAnalyticsObject;
        if (!z[b]) {
            var c = function () {
                c.q = c.q || [];
                c.q.push(arguments)
            };
            c.l = Number(new Date);
            z[b] = c
        }
        Md();
        return z[b]
    }, Qd = function (a, b, c, d) {
        b = String(b).replace(/\s+/g, "").split(",");
        var e = Od();
        e(a + "require", "linker");
        e(a + "linker:autoLink", b, c, d)
    };
    var Rd = !1;
    var Xd = function (a) {
    };

    function Wd(a, b) {
        b.containerId = Zc.s;
        return {type: a, value: b}
    };
    var Yd = function () {
        return "&tc=" + Fc.filter(function (a) {
                return a
            }).length
    }, Zd = "0.005000" > Math.random(), $d = function () {
        var a = 0, b = 0;
        return {
            If: function () {
                if (2 > a)return !1;
                1E3 <= Ga() - b && (a = 0);
                return 2 <= a
            }, gg: function () {
                1E3 <= Ga() - b && (a = 0);
                a++;
                b = Ga()
            }
        }
    }, ae = "", be = function () {
        ae = [ed, "&v=3&t=t", "&pid=" + za(), "&rv=" + Zc.ob].join("")
    }, ce = {}, de = "", ee = void 0, fe = {}, ge = {}, he = void 0, ie = null, je = 1E3, ke = function () {
        var a = ee;
        return void 0 === a ? "" : [ae, ce[a] ? "" : "&es=1", fe[a], Yd(), de, "&z=0"].join("")
    }, le = function () {
        he &&
        (z.clearTimeout(he), he = void 0);
        void 0 === ee || ce[ee] && !de || (ge[ee] || ie.If() || 0 >= je-- ? ge[ee] = !0 : (ie.gg(), rb(ke()), ce[ee] = !0, de = ""))
    }, me = function (a, b, c) {
        if (Zd && !ge[a] && b) {
            a !== ee && (le(), ee = a);
            var d = c + String(b[J.sa] || "").replace(/_/g, "");
            de = de ? de + "." + d : "&tr=" + d;
            he || (he = z.setTimeout(le, 500));
            2022 <= ke().length && le()
        }
    };

    function ne(a, b, c, d, e, g) {
        var h = Fc[a], k = oe(a, b, c, d, e, g);
        if (!k)return null;
        var l = Oc(h[J.Zc], g.fa, [], pe());
        if (l && l.length) {
            var m = l[0];
            k = ne(m.index, b, k, 1 === m.kd ? e : k, e, g)
        }
        return k
    }

    function oe(a, b, c, d, e, g) {
        function h() {
            if (k[J.pe])d(); else {
                var b = Pc(k, g.fa, [], l), e = !1;
                b.vtp_gtmOnSuccess = function () {
                    if (!e) {
                        e = !0;
                        me(g.id, Fc[a], "5");
                        c()
                    }
                };
                b.vtp_gtmOnFailure = function () {
                    if (!e) {
                        e = !0;
                        me(g.id, Fc[a], "6");
                        d()
                    }
                };
                b.vtp_gtmTagId = k.tag_id;
                me(g.id, k, "1");
                try {
                    Nc(b)
                } catch (F) {
                    Xd(F);
                    me(g.id, k, "7");
                    e || (e = !0, d())
                }
            }
        }

        var k = Fc[a];
        if (g.fa(k))return null;
        var l = pe(), m = Oc(k[J.$c], g.fa, [], l);
        if (m && m.length) {
            var p = m[0], q = ne(p.index, b, c, d, e, g);
            if (!q)return null;
            c = q;
            d = 2 === p.kd ? e : q
        }
        if (k[J.Yc] || k[J.qe]) {
            var t = k[J.Yc] ? Hc : b, u = c, v = d;
            if (!t[a]) {
                h = Ja(h);
                var w = qe(a, t, h);
                c = w.V;
                d = w.Aa
            }
            return function () {
                t[a](u, v)
            }
        }
        return h
    }

    function qe(a, b, c) {
        var d = [], e = [];
        b[a] = re(d, e, c);
        return {
            V: function () {
                b[a] = se;
                for (var c = 0; c < d.length; c++)d[c]()
            }, Aa: function () {
                b[a] = te;
                for (var c = 0; c < e.length; c++)e[c]()
            }
        }
    }

    function re(a, b, c) {
        return function (d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function se(a) {
        a()
    }

    function te(a, b) {
        b()
    }

    function pe() {
        return function (a, b) {
            Xd(b)
        }
    };
    function ue(a) {
        var b = 0, c = 0, d = !1;
        return {
            add: function () {
                c++;
                return Ja(function () {
                    b++;
                    d && b >= c && a()
                })
            }, Ee: function () {
                d = !0;
                b >= c && a()
            }
        }
    }

    function ve(a, b) {
        var c, d = b.b, e = a.b;
        c = d > e ? 1 : d < e ? -1 : 0;
        var g;
        if (0 !== c)g = c; else {
            var h = a.Od, k = b.Od;
            g = h > k ? 1 : h < k ? -1 : 0
        }
        return g
    }

    function we(a, b) {
        if (!Zd)return;
        var c = function (a) {
            var d = b.fa(Fc[a]) ? "3" : "4", g = Oc(Fc[a][J.Zc], b.fa, [], ra);
            g && g.length && c(g[0].index);
            me(b.id, Fc[a], d);
            var h = Oc(Fc[a][J.$c], b.fa, [], ra);
            h && h.length && c(h[0].index)
        };
        c(a);
    }

    var xe = !1;

    function Uc() {
        return function (a, b) {
            Xd(b)
        }
    };
    var ye = function (a, b) {
        var c = Mc(a, b), d;
        for (d in void 0)(void 0).hasOwnProperty(d) && (c[d] = (void 0)[d]);
        Fc.push(c);
        return Fc.length - 1
    };
    var O = {Hb: "event_callback", Ib: "event_timeout"};
    var ze = {}, Be = function (a) {
        var b = Zc.s;
        return function () {
            var c = arguments[0];
            if (c && (ze[c] || ze.all)) {
                var d = a.apply(void 0, Array.prototype.slice.call(arguments, 0));
                ze[c] && Ae(b, c, ze[c], d);
                ze.all && Ae(b, c, ze.all, d)
            }
        }
    };

    function Ae(a, b, c, d) {
        for (var e = 0; e < c.length; e++) {
            var g = void 0, h = "An in-page policy denied the permission request";
            try {
                g = c[e].call(void 0, a, b, d), h += "."
            } catch (k) {
                h = "string" === typeof k ? h + (": " + k) : k instanceof Error ? h + (": " + k.message) : h + "."
            }
            if (!g)throw new Dd(b, {}, h);
        }
    };
    var Ce = /[A-Z]+/, De = /\s/, Ee = function (a) {
        if (ta(a) && (a = a.trim(), !De.test(a))) {
            var b = a.indexOf("-");
            if (!(0 > b)) {
                var c = a.substring(0, b);
                if (Ce.test(c)) {
                    for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)if (!d[e])return;
                    return {id: a, prefix: c, containerId: c + "-" + d[0], da: d}
                }
            }
        }
    };
    var Fe = null, Ge = {}, He = {}, Ie;

    function Je() {
        Fe = Fe || !$c.gtagRegistered;
        $c.gtagRegistered = !0;
        return Fe
    }

    var Ke = function (a, b) {
        var c = {event: a};
        b && (c.eventModel = x(b), b[O.Hb] && (c.eventCallback = b[O.Hb]), b[O.Ib] && (c.eventTimeout = b[O.Ib]));
        return c
    };

    function Le(a) {
        if (void 0 === He[a.id]) {
            var b;
            switch (a.prefix) {
                case "UA":
                    b = ye("gtagua", {trackingId: a.id});
                    break;
                case "AW":
                    b = ye("gtagaw", {conversionId: a});
                    break;
                case "DC":
                    b = ye("gtagfl", {targetId: a.id});
                    break;
                case "GF":
                    b = ye("gtaggf", {conversionId: a});
                    break;
                case "G":
                    b = ye("get", {trackingId: a.id, isAutoTag: !0});
                    break;
                case "HA":
                    b = ye("gtagha", {conversionId: a});
                    break;
                default:
                    return
            }
            if (!Ie) {
                var c = Mc("v", {name: "send_to", dataLayerVersion: 2});
                Cc.push(c);
                Ie = ["macro", Cc.length - 1]
            }
            var d = {arg0: Ie, arg1: a.id, ignore_case: !1};
            d[J.sa] = "_lc";
            Ec.push(d);
            var e = {"if": [Ec.length - 1], add: [b]};
            e["if"] && (e.add || e.block) && Dc.push(e);
            He[a.id] = b
        }
    }

    var Ne = {
        config: function (a) {
        },
        event: function (a) {
            var b = a[1];
            if (ta(b) && !(3 < a.length)) {
                var c;
                if (2 < a.length) {
                    if (!Xa(a[2]))return;
                    c = a[2]
                }
                var d = Ke(b, c);
                return d
            }
        }, js: function (a) {
            if (2 == a.length && a[1].getTime)return {
                event: "gtm.js",
                "gtm.start": a[1].getTime()
            }
        }, policy: function (a) {
            if (3 === a.length) {
                var b = a[1], c = a[2];
                c && ea(c) && c.gtm && c.gtm.fromContainer || (ze[b] || (ze[b] = []), ze[b].push(c))
            }
        }, set: function (a) {
            var b;
            2 == a.length && Xa(a[1]) ? b = x(a[1]) : 3 == a.length && ta(a[1]) && (b = {}, b[a[1]] = a[2]);
            if (b)return b.eventModel = x(b), b.event = "gtag.set", b._clear = !0, b
        }
    }, Me = Ja(function () {
    });
    var Oe = !1, Pe = [];

    function Qe() {
        if (!Oe) {
            Oe = !0;
            for (var a = 0; a < Pe.length; a++)B(Pe[a])
        }
    };
    var Re = [], Se = !1, Ye = function (a) {
        var b = a.eventCallback, c = Ja(function () {
            sa(b) && B(function () {
                b(Zc.s)
            })
        }), d = a.eventTimeout;
        d && z.setTimeout(c, Number(d));
        return c
    }, Ze = function () {
        for (var a = !1; !Se && 0 < Re.length;) {
            Se = !0;
            delete md.eventModel;
            var b = Re.shift();
            if (sa(b))try {
                b.call(pd)
            } catch (Te) {
            } else if (va(b)) {
                var c = b;
                if (ta(c[0])) {
                    var d = c[0].split("."), e = d.pop(), g = c.slice(1), h = od(d.join("."), 2);
                    if (void 0 !== h && null !== h)try {
                        h[e].apply(h, g)
                    } catch (Te) {
                    }
                }
            } else {
                var k = b;
                if (k && ("[object Arguments]" == Object.prototype.toString.call(k) ||
                    Object.prototype.hasOwnProperty.call(k, "callee"))) {
                    a:{
                        if (b.length && ta(b[0])) {
                            var l = Ne[b[0]];
                            if (l) {
                                b = l(b);
                                break a
                            }
                        }
                        b = void 0
                    }
                    if (!b) {
                        Se = !1;
                        continue
                    }
                }
                var m;
                var p = void 0, q = b, t = q._clear;
                for (p in q)q.hasOwnProperty(p) && "_clear" !== p && (t && vd(p, void 0), vd(p, q[p]));
                var u = q.event;
                if (u) {
                    var v = q["gtm.uniqueEventId"];
                    v || (v = hd(), q["gtm.uniqueEventId"] = v, vd("gtm.uniqueEventId", v));
                    dd = u;
                    var w;
                    var C, D, F = q, I = F.event, P = F["gtm.uniqueEventId"], X = $c.zones;
                    D = X ? X.checkState(Zc.s, P) : Fd;
                    if (D.active) {
                        var G = Ye(F);
                        c:{
                            var S = D.isWhitelisted;
                            if ("gtm.js" == I) {
                                if (xe) {
                                    C = !1;
                                    break c
                                }
                                xe = !0
                            }
                            var Q = P, M = I;
                            if (Zd && !ge[Q] && ee !== Q) {
                                le();
                                ee = Q;
                                de = "";
                                var K = fe, ha = Q, L, U = M;
                                L = 0 === U.indexOf("gtm.") ? encodeURIComponent(U) : "*";
                                K[ha] = "&e=" + L + "&eid=" + Q;
                                he || (he = z.setTimeout(le, 500))
                            }
                            var ia = zd(S), V = {id: P, name: I, callback: G || ra, fa: ia, Wa: []};
                            V.Wa = Wc(ia);
                            for (var Ca, Sa = V, $a = ue(Sa.callback), Ad = [], Mb = [], xb = 0; xb < Fc.length; xb++)if (Sa.Wa[xb]) {
                                var Ue = Fc[xb];
                                var ec = $a.add();
                                try {
                                    var Ve = ne(xb, Ad, ec, ec, ec, Sa);
                                    Ve ? Mb.push({Od: xb, b: Qc(Ue), M: Ve}) : (we(xb, Sa), ec())
                                } catch (Te) {
                                    ec()
                                }
                            }
                            $a.Ee();
                            Mb.sort(ve);
                            for (var Bd = 0; Bd < Mb.length; Bd++)Mb[Bd].M();
                            Ca = 0 < Mb.length;
                            if ("gtm.js" === I || "gtm.sync" === I)d:{
                            }
                            if (Ca) {
                                for (var ih = {
                                    __cl: !0,
                                    __ecl: !0,
                                    __evl: !0,
                                    __fsl: !0,
                                    __hl: !0,
                                    __jel: !0,
                                    __lcl: !0,
                                    __sdl: !0,
                                    __tl: !0,
                                    __ytl: !0
                                }, Gc = 0; Gc < V.Wa.length; Gc++)if (V.Wa[Gc]) {
                                    var Xe = Fc[Gc];
                                    if (Xe && !ih[Xe[J.sa]]) {
                                        C = !0;
                                        break c
                                    }
                                }
                                C = !1
                            } else C = Ca
                        }
                        w = C ? !0 : !1
                    } else w = !1;
                    dd = null;
                    m = w
                } else m = !1;
                a = m || a
            }
            Se = !1
        }
        return !a
    }, $e = function () {
        var a = Ze();
        try {
            var b = z["dataLayer"].hide;
            if (b && void 0 !== b[Zc.s] && b.end) {
                b[Zc.s] = !1;
                var c = !0, d;
                for (d in b)if (b.hasOwnProperty(d) &&
                    !0 === b[d]) {
                    c = !1;
                    break
                }
                c && (b.end(), b.end = null)
            }
        } catch (e) {
        }
        return a
    }, af = function () {
        var a = mb("dataLayer", []), b = mb("google_tag_manager", {});
        b = b["dataLayer"] = b["dataLayer"] || {};
        Id.push(function () {
            b.gtmDom || (b.gtmDom = !0, a.push({event: "gtm.dom"}))
        });
        Pe.push(function () {
            b.gtmLoad || (b.gtmLoad = !0, a.push({event: "gtm.load"}))
        });
        var c = a.push;
        a.push = function () {
            var b = [].slice.call(arguments, 0);
            c.apply(a, b);
            for (Re.push.apply(Re, b); 300 < this.length;)this.shift();
            return Ze()
        };
        Re.push.apply(Re, a.slice(0));
        B($e)
    };
    var bf = {};
    bf.kb = new String("undefined");
    var cf = function (a) {
        this.resolve = function (b) {
            for (var c = [], d = 0; d < a.length; d++)c.push(a[d] === bf.kb ? b : a[d]);
            return c.join("")
        }
    };
    cf.prototype.toString = function () {
        return this.resolve("undefined")
    };
    cf.prototype.valueOf = cf.prototype.toString;
    bf.te = cf;
    bf.Vb = {};
    bf.Xe = function (a) {
        return new cf(a)
    };
    var df = {};
    bf.hg = function (a, b) {
        var c = hd();
        df[c] = [a, b];
        return c
    };
    bf.fd = function (a) {
        var b = a ? 0 : 1;
        return function (a) {
            var c = df[a];
            if (c && "function" === typeof c[b])c[b]();
            df[a] = void 0
        }
    };
    bf.Hf = function (a) {
        for (var b = !1, c = !1,
                 d = 2; d < a.length; d++)b = b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    bf.$f = function (a) {
        if (a === bf.kb)return a;
        var b = hd();
        bf.Vb[b] = a;
        return 'google_tag_manager["' + Zc.s + '"].macro(' + b + ")"
    };
    bf.Mf = function (a, b, c) {
        a instanceof bf.te && (a = a.resolve(bf.hg(b, c)), b = ra);
        return {cc: a, V: b}
    };
    var ef = new Ha, ff = function (a, b) {
        function c(a) {
            var b = E(a), c = Fb(b, "protocol"), d = Fb(b, "host", !0), e = Fb(b, "port"), g = Fb(b, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === c || "http" == c && "80" == e || "https" == c && "443" == e)c = "web", e = "default";
            return [c, d, e, g]
        }

        for (var d = c(String(a)), e = c(String(b)), g = 0; g < d.length; g++)if (d[g] !== e[g])return !1;
        return !0
    };

    function gf(a) {
        var b = a.arg0, c = a.arg1;
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var d;
                a:{
                    if (b) {
                        var e = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                        try {
                            for (var g = 0; g < e.length; g++)if (b[e[g]]) {
                                d = b[e[g]](c);
                                break a
                            }
                        } catch (v) {
                        }
                    }
                    d = !1
                }
                return d;
            case "_ew":
                var h, k;
                h = String(b);
                k = String(c);
                var l = h.length - k.length;
                return 0 <= l && h.indexOf(k, l) == l;
            case "_eq":
                return String(b) == String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                var m;
                m = String(b).split(",");
                return 0 <= xa(m, String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                var p;
                var q = a.ignore_case ? "i" : void 0;
                try {
                    var t = String(c) + q, u = ef.get(t);
                    u || (u = new RegExp(c, q), ef.set(t, u));
                    p = u.test(b)
                } catch (v) {
                    p = !1
                }
                return p;
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return ff(b, c)
        }
        return !1
    };
    var hf = function () {
        return !1
    };

    function jf(a, b) {
        Ta(["key:!string", "dataLayerVersion:?number"], arguments);
        this.J().assert("read_data_layer", a);
        return Za(od(a, b || 2))
    }

    function kf() {
        return (new Date).getTime()
    }

    function lf(a) {
        return Ba(Ya(a))
    }

    function mf(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    }

    function nf(a, b) {
        Ta(["min:!number", "max:!number"], arguments);
        return za(a, b)
    }

    function of(a, b, c) {
        Ta(["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"], arguments);
        for (var d = new Pa, e = !1, g = 0; g < a.length(); g++) {
            var h = a.get(g);
            h instanceof Pa && h.has(b) && h.has(c) && (d.set(h.get(b), h.get(c)), e = !0)
        }
        return e ? d : null
    }

    var pf = function () {
        var a = new jb, b = Gb();
        hf() && (b.injectScript = ra, b.injectHiddenIframe = ra);
        a.addAll({
            callLater: b.callLater,
            copyFromDataLayer: jf,
            copyFromWindow: b.copyFromWindow,
            createQueue: b.createQueue,
            createArgumentsQueue: b.createArgumentsQueue,
            encodeUri: b.encodeURI,
            encodeUriComponent: b.encodeURIComponent,
            generateRandom: nf,
            getTimestamp: kf,
            getUrl: b.getUrl,
            injectHiddenIframe: b.injectHiddenIframe,
            injectScript: b.injectScript,
            logToConsole: b.logToConsole,
            makeInteger: lf,
            makeString: mf,
            makeTableMap: of,
            queryPermission: b.queryPermission,
            sendPixel: b.sendPixel,
            setInWindow: b.setInWindow
        });
        return function (b) {
            return a.get(b)
        }
    };
    var qf;

    function rf() {
        var a = data.runtime || [];
        qf = new Ib;
        Bc = function (a, b) {
            sf(b);
            var c = new Pa, d;
            for (d in b)b.hasOwnProperty(d) && c.set(d, Za(b[d]));
            var e = qf.M([a, c]);
            e instanceof ja && "return" === e.C && (e = e.getData());
            return Ya(e)
        };
        Jc = gf;
        Hb(qf, pf());
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (!va(c) || 3 > c.length) {
                if (0 === c.length)continue;
                break
            }
            qf.M(c)
        }
    }

    function sf(a) {
        var b = a.gtmOnSuccess, c = a.gtmOnFailure;
        sa(b) && (a.gtmOnSuccess = function () {
            B(b)
        });
        sa(c) && (a.gtmOnFailure = function () {
            B(c)
        })
    }

    function tf(a) {
        var b = {}, c = function (a) {
            throw uf(a, {}, "The requested permission is not configured.");
        };
        qf.Ea(c);
        qf.Fa(Be(function () {
            var a = arguments[0];
            return a && b[a] ? b[a].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
        }));
        for (var d in a)if (a.hasOwnProperty(d)) {
            var e = a[d], g = !1, h;
            for (h in e)if (e.hasOwnProperty(h)) {
                g = !0;
                var k = vf(h, e[h]);
                qf.qb(d, h, k.assert);
                b[h] || (b[h] = k.ba)
            }
            g || qf.qb(d, "default", c)
        }
    }

    function vf(a, b) {
        var c = Mc(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = uf;
        return Nc(c)
    }

    function uf(a, b, c) {
        return new Dd(a, b, c)
    };
    var wf = function (a, b) {
        var c = function () {
        };
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var xf = encodeURI, R = encodeURIComponent, yf = function (a, b) {
        if (!a)return !1;
        var c = Fb(E(a), "host");
        if (!c)return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var g = c.length - e.length;
                0 < g && "." != e.charAt(0) && (g--, e = "." + e);
                if (0 <= g && c.indexOf(e, g) == g)return !0
            }
        }
        return !1
    };
    var zf = function (a, b, c) {
        for (var d = {}, e = !1, g = 0; a && g < a.length; g++)a[g] && a[g].hasOwnProperty(b) && a[g].hasOwnProperty(c) && (d[a[g][b]] = a[g][c], e = !0);
        return e ? d : null
    }, Af = function () {
        return !1
    };
    var Bf = function (a) {
        var b = {
            "gtm.element": a,
            "gtm.elementClasses": a.className,
            "gtm.elementId": a["for"] || ub(a, "id") || "",
            "gtm.elementTarget": a.formTarget || a.target || ""
        };
        b["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || a.href || a.src || a.code || a.codebase || "";
        return b
    }, Cf = function (a) {
        $c.hasOwnProperty("autoEventsSettings") || ($c.autoEventsSettings = {});
        var b = $c.autoEventsSettings;
        b.hasOwnProperty(a) || (b[a] = {});
        return b[a]
    }, Df = function (a, b, c, d) {
        var e = Cf(a), g = Ia(e, b, d);
        e[b] =
            c(g)
    }, Ef = function (a, b, c) {
        var d = Cf(a);
        return Ia(d, b, c)
    };
    var Gf = function (a, b) {
        if (!Ff)return null;
        if (Element.prototype.closest)try {
            return a.closest(b)
        } catch (e) {
            return null
        }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector, d = a;
        if (!A.documentElement.contains(d))return null;
        do {
            try {
                if (c.call(d, b))return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (null !== d && 1 === d.nodeType);
        return null
    }, Hf = !1;
    if (A.querySelectorAll)try {
        var If = A.querySelectorAll(":root");
        If && 1 == If.length && If[0] == A.documentElement && (Hf = !0)
    } catch (a) {
    }
    var Ff = Hf;
    var Jf = function (a, b, c) {
        for (var d = [], e = String(b || document.cookie).split(";"), g = 0; g < e.length; g++) {
            var h = e[g].split("="), k = h[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l)
            }
        }
        return d
    }, Mf = function (a, b, c, d) {
        var e = Kf(a, d);
        if (1 === e.length)return e[0].id;
        if (0 !== e.length) {
            e = Lf(e, function (a) {
                return a.ef
            }, b);
            if (1 === e.length)return e[0].id;
            e = Lf(e, function (a) {
                return a.Xf
            }, c);
            return e[0] ? e[0].id : void 0
        }
    }, Pf = function (a, b, c, d, e,
                      g) {
        c = c || "/";
        var h = d = d || "auto", k = c;
        if (Nf.test(document.location.hostname) || "/" === k && Of.test(h))return !1;
        g && (b = encodeURIComponent(b));
        var l = b;
        l && 1200 < l.length && (l = l.substring(0, 1200));
        b = l;
        var m = a + "=" + b + "; path=" + c + "; ";
        void 0 !== e && (m += "expires=" + e.toUTCString() + "; ");
        if ("auto" === d) {
            var p = !1, q;
            a:{
                var t = [], u = document.location.hostname.split(".");
                if (4 === u.length) {
                    var v = u[u.length - 1];
                    if (parseInt(v, 10).toString() === v) {
                        q = ["none"];
                        break a
                    }
                }
                for (var w = u.length - 2; 0 <= w; w--)t.push(u.slice(w).join("."));
                t.push("none");
                q = t
            }
            for (var C = q, D = 0; D < C.length && !p; D++)p = Pf(a, b, c, C[D], e);
            return p
        }
        d && "none" !== d && (m += "domain=" + d + ";");
        var F = document.cookie;
        document.cookie = m;
        return F != document.cookie || 0 <= Jf(a).indexOf(b)
    };

    function Lf(a, b, c) {
        for (var d = [], e = [], g, h = 0; h < a.length; h++) {
            var k = a[h], l = b(k);
            l === c ? d.push(k) : void 0 === g || l < g ? (e = [k], g = l) : l === g && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function Kf(a, b) {
        for (var c = [], d = Jf(a), e = 0; e < d.length; e++) {
            var g = d[e].split("."), h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var k = g.shift();
                k && (k = k.split("-"), c.push({id: g.join("."), ef: 1 * k[0] || 1, Xf: 1 * k[1] || 1}))
            }
        }
        return c
    }

    var Of = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, Nf = /(^|\.)doubleclick\.net$/i;
    var Qf = function () {
        for (var a = kb.userAgent + (A.cookie || "") + (A.referrer || ""), b = a.length, c = z.history.length; 0 < c;)a += c-- ^ b++;
        var d = 1, e, g, h;
        if (a)for (d = 0, g = a.length - 1; 0 <= g; g--)h = a.charCodeAt(g), d = (d << 6 & 268435455) + h + (h << 14), e = d & 266338304, d = 0 != e ? d ^ e >> 21 : d;
        return [Math.round(2147483647 * Math.random()) ^ d & 2147483647, Math.round(Ga() / 1E3)].join(".")
    }, Tf = function (a, b, c, d) {
        var e = Rf(b);
        return Mf(a, e, Sf(c), d)
    }, Uf = function (a, b, c, d) {
        var e = "" + Rf(c), g = Sf(d);
        1 < g && (e += "-" + g);
        return [b, e, a].join(".")
    };

    function Rf(a) {
        if (!a)return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length
    }

    function Sf(a) {
        if (!a || "/" === a)return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length - 1
    };
    var Vf = ["1"], Wf = {}, Zf = function (a, b, c) {
        var d = Xf(a);
        if (!Wf[d] && !Yf(d, b, c)) {
            var e = Qf(), g = Uf(e, "1", b, c);
            Pf(d, g, c, b, new Date(Ga() + 7776E6));
            Yf(d, b, c)
        }
    };

    function Yf(a, b, c) {
        var d = Tf(a, b, c, Vf);
        d && (Wf[a] = d);
        return d
    }

    function Xf(a) {
        return (a || "_gcl") + "_au"
    };
    function $f() {
        for (var a = ag, b = {}, c = 0; c < a.length; ++c)b[a[c]] = c;
        return b
    }

    function bg() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }

    var ag, cg, dg = function (a) {
        ag = ag || bg();
        cg = cg || $f();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length, e = c + 2 < a.length, g = a.charCodeAt(c), h = d ? a.charCodeAt(c + 1) : 0, k = e ? a.charCodeAt(c + 2) : 0, l = g >> 2, m = (g & 3) << 4 | h >> 4, p = (h & 15) << 2 | k >> 6, q = k & 63;
            e || (q = 64, d || (p = 64));
            b.push(ag[l], ag[m], ag[p], ag[q])
        }
        return b.join("")
    }, eg = function (a) {
        function b(b) {
            for (; d < a.length;) {
                var c = a.charAt(d++), e = cg[c];
                if (null != e)return e;
                if (!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: " + c);
            }
            return b
        }

        ag = ag || bg();
        cg = cg ||
        $f();
        for (var c = "", d = 0; ;) {
            var e = b(-1), g = b(0), h = b(64), k = b(64);
            if (64 === k && -1 === e)return c;
            c += String.fromCharCode(e << 2 | g >> 4);
            64 != h && (c += String.fromCharCode(g << 4 & 240 | h >> 2), 64 != k && (c += String.fromCharCode(h << 6 & 192 | k)))
        }
    };
    var fg;

    function gg(a, b) {
        if (!a || b === A.location.hostname)return !1;
        for (var c = 0; c < a.length; c++)if (a[c]instanceof RegExp) {
            if (a[c].test(b))return !0
        } else if (0 <= b.indexOf(a[c]))return !0;
        return !1
    }

    var hg = function () {
        var a = mb("google_tag_data", {}), b = a.gl;
        b && b.decorators || (b = {decorators: []}, a.gl = b);
        return b
    };
    var ig = /(.*?)\*(.*?)\*(.*)/, jg = /^https?:\/\/[^/]*cdn\.ampproject\.org\//, kg = /^(?:www\.|m\.|amp\.)+/, lg = /([^?#]+)(\?[^#]*)?(#.*)?/, mg = /(.*?)(^|&)_gl=([^&]*)&?(.*)/, og = function (a) {
        var b = [], c;
        for (c in a)if (a.hasOwnProperty(c)) {
            var d = a[c];
            void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(dg(String(d))))
        }
        var e = b.join("*");
        return ["1", ng(e), e].join("*")
    }, ng = function (a, b) {
        var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage || window.navigator.language,
            Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"), d;
        if (!(d = fg)) {
            for (var e = Array(256), g = 0; 256 > g; g++) {
                for (var h = g, k = 0; 8 > k; k++)h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                e[g] = h
            }
            d = e
        }
        fg = d;
        for (var l = 4294967295, m = 0; m < c.length; m++)l = l >>> 8 ^ fg[(l ^ c.charCodeAt(m)) & 255];
        return ((l ^ -1) >>> 0).toString(36)
    }, qg = function () {
        return function (a) {
            var b = E(z.location.href), c = b.search.replace("?", ""), d = Db(c, "_gl", !0) || "";
            a.query = pg(d) || {};
            var e = Fb(b, "fragment").match(mg);
            a.fragment = pg(e && e[3] || "") || {}
        }
    }, pg = function (a) {
        var b;
        b = void 0 === b ? 3 : b;
        try {
            if (a) {
                var c = ig.exec(a);
                if (c && "1" === c[1]) {
                    var d = c[3], e;
                    a:{
                        for (var g = c[2], h = 0; h < b; ++h)if (g === ng(d, h)) {
                            e = !0;
                            break a
                        }
                        e = !1
                    }
                    if (e) {
                        for (var k = {}, l = d ? d.split("*") : [], m = 0; m < l.length; m += 2)k[l[m]] = eg(l[m + 1]);
                        return k
                    }
                }
            }
        } catch (p) {
        }
    };

    function rg(a, b, c) {
        function d(a) {
            var b = a, c = mg.exec(b), d = b;
            if (c) {
                var e = c[2], g = c[4];
                d = c[1];
                g && (d = d + e + g)
            }
            a = d;
            var h = a.charAt(a.length - 1);
            a && "&" !== h && (a += "&");
            return a + l
        }

        c = void 0 === c ? !1 : c;
        var e = lg.exec(b);
        if (!e)return "";
        var g = e[1], h = e[2] || "", k = e[3] || "", l = "_gl=" + a;
        c ? k = "#" + d(k.substring(1)) : h = "?" + d(h.substring(1));
        return "" + g + h + k
    }

    function sg(a, b, c) {
        for (var d = {}, e = {}, g = hg().decorators, h = 0; h < g.length; ++h) {
            var k = g[h];
            (!c || k.forms) && gg(k.domains, b) && (k.fragment ? Ka(e, k.callback()) : Ka(d, k.callback()))
        }
        if (La(d)) {
            var l = og(d);
            if (c) {
                if (a && a.action) {
                    var m = (a.method || "").toLowerCase();
                    if ("get" === m) {
                        for (var p = a.childNodes || [], q = !1, t = 0; t < p.length; t++) {
                            var u = p[t];
                            if ("_gl" === u.name) {
                                u.setAttribute("value", l);
                                q = !0;
                                break
                            }
                        }
                        if (!q) {
                            var v = A.createElement("input");
                            v.setAttribute("type", "hidden");
                            v.setAttribute("name", "_gl");
                            v.setAttribute("value",
                                l);
                            a.appendChild(v)
                        }
                    } else if ("post" === m) {
                        var w = rg(l, a.action);
                        Bb.test(w) && (a.action = w)
                    }
                }
            } else tg(l, a, !1)
        }
        if (!c && La(e)) {
            var C = og(e);
            tg(C, a, !0)
        }
    }

    function tg(a, b, c) {
        if (b.href) {
            var d = rg(a, b.href, void 0 === c ? !1 : c);
            Bb.test(d) && (b.href = d)
        }
    }

    var ug = function (a) {
        try {
            var b;
            a:{
                for (var c = a.target || a.srcElement || {}, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var g = e.protocol;
                "http:" !== g && "https:" !== g || sg(e, e.hostname, !1)
            }
        } catch (h) {
        }
    }, vg = function (a) {
        try {
            var b = a.target || a.srcElement || {};
            if (b.action) {
                var c = Fb(E(b.action), "host");
                sg(b, c, !0)
            }
        } catch (d) {
        }
    }, wg = function (a, b, c, d) {
        var e = hg();
        e.init || (sb(A, "mousedown", ug), sb(A, "keyup", ug), sb(A, "submit", vg), e.init = !0);
        var g = {
            callback: a,
            domains: b, fragment: "fragment" === c, forms: !!d
        };
        hg().decorators.push(g)
    }, xg = function () {
        var a = A.referrer;
        if (!jg.test(a))return !1;
        var b = A.location.hostname, c = a.replace(jg, "").split("/"), d = c[1], e = "s" === d ? decodeURIComponent(c[2]) : decodeURIComponent(d);
        return b.replace(kg, "") === e.replace(kg, "")
    }, yg = function (a, b) {
        return !1 === a ? !1 : a || b || xg()
    };
    var zg = /^\w+$/, Ag = /^[\w-]+$/, Bg = /^~?[\w-]+$/, Cg = {
        aw: "_aw",
        dc: "_dc",
        gf: "_gf",
        ha: "_ha"
    }, Eg = function (a) {
        var b = Jf(a, A.cookie), c = [];
        if (!b || 0 == b.length)return c;
        for (var d = 0; d < b.length; d++) {
            var e = b[d].split(".");
            3 == e.length && "GCL" == e[0] && e[1] && c.push(e[2])
        }
        return Dg(c)
    };

    function Fg(a) {
        return a && "string" == typeof a && a.match(zg) ? a : "_gcl"
    }

    var Gg = function (a) {
        if (a) {
            if ("string" == typeof a) {
                var b = Fg(a);
                return {dc: b, aw: b, gf: b, ha: b}
            }
            if (a && "object" == typeof a)return {dc: Fg(a.dc), aw: Fg(a.aw), gf: Fg(a.gf), ha: Fg(a.ha)}
        }
        return {dc: "_gcl", aw: "_gcl", gf: "_gcl", ha: "_gcl"}
    }, Ig = function () {
        var a = E(z.location.href), b = Fb(a, "query", !1, void 0, "gclid"), c = Fb(a, "query", !1, void 0, "gclsrc"), d = Fb(a, "query", !1, void 0, "dclid");
        if (!b || !c) {
            var e = a.hash.replace("#", "");
            b = b || Db(e, "gclid");
            c = c || Db(e, "gclsrc")
        }
        return Hg(b, c, d)
    };

    function Hg(a, b, c) {
        var d = {}, e = function (a, b) {
            d[b] || (d[b] = []);
            d[b].push(a)
        };
        if (void 0 !== a && a.match(Ag))switch (b) {
            case void 0:
                e(a, "aw");
                break;
            case "aw.ds":
                e(a, "aw");
                e(a, "dc");
                break;
            case "ds":
                e(a, "dc");
                break;
            case "gf":
                e(a, "gf");
                break;
            case "ha":
                e(a, "ha")
        }
        c && e(c, "dc");
        return d
    }

    function Jg(a, b) {
        function c(a, b) {
            var c = Kg(a, d);
            c && Pf(c, b, g, e, k, !0)
        }

        b = b || {};
        var d = Gg(b.prefix), e = b.domain || "auto", g = b.path || "/", h = Ga(), k = new Date(h + 7776E6), l = Math.round(h / 1E3), m = function (a) {
            return ["GCL", l, a].join(".")
        };
        a.aw && (!0 === b.dh ? c("aw", m("~" + a.aw[0])) : c("aw", m(a.aw[0])));
        a.dc && c("dc", m(a.dc[0]));
        a.gf && c("gf", m(a.gf[0]));
        a.ha && c("ha", m(a.ha[0]))
    }

    var Kg = function (a, b) {
        var c = Cg[a];
        if (void 0 !== c) {
            var d = b[a];
            if (void 0 !== d)return d + c
        }
    }, Lg = function (a) {
        var b = a.split(".");
        return 3 !== b.length || "GCL" !== b[0] ? 0 : 1E3 * (Number(b[1]) || 0)
    }, Mg = function (a, b, c, d, e) {
        if (va(b)) {
            var g = Gg(e);
            wg(function () {
                for (var b = {}, c = 0; c < a.length; ++c) {
                    var d = Kg(a[c], g);
                    if (d) {
                        var e = Jf(d, A.cookie);
                        e.length && (b[d] = e.sort()[e.length - 1])
                    }
                }
                return b
            }, b, c, d)
        }
    }, Dg = function (a) {
        return a.filter(function (a) {
            return Bg.test(a)
        })
    };
    var Ng = /^\d+\.fls\.doubleclick\.net$/;

    function Og(a) {
        var b = E(z.location.href), c = Fb(b, "host", !1);
        if (c && c.match(Ng)) {
            var d = Fb(b, "path").split(a + "=");
            if (1 < d.length)return d[1].split(";")[0].split("?")[0]
        }
    }

    var Pg = function (a) {
        var b = Og("gclaw");
        if (b)return b.split(".");
        var c = Gg(a);
        if ("_gcl" == c.aw) {
            var d = Ig().aw || [];
            if (0 < d.length)return d
        }
        var e = Kg("aw", c);
        return e ? Eg(e) : []
    }, Qg = function (a) {
        var b = Og("gcldc");
        if (b)return b.split(".");
        var c = Gg(a);
        if ("_gcl" == c.dc) {
            var d = Ig().dc || [];
            if (0 < d.length)return d
        }
        var e = Kg("dc", c);
        return e ? Eg(e) : []
    }, Rg = function (a) {
        var b = Gg(a);
        if ("_gcl" == b.ha) {
            var c = Ig().ha || [];
            if (0 < c.length)return c
        }
        return Eg(b.ha + "_ha")
    }, Sg = function () {
        var a = Og("gac");
        if (a)return decodeURIComponent(a);
        for (var b = [], c = A.cookie.split(";"), d = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, e = 0; e < c.length; e++) {
            var g = c[e].match(d);
            g && b.push({xc: g[1], value: g[2]})
        }
        var h = {};
        if (b && b.length)for (var k = 0; k < b.length; k++) {
            var l = b[k].value.split(".");
            "1" == l[0] && 3 == l.length && l[1] && (h[b[k].xc] || (h[b[k].xc] = []), h[b[k].xc].push({
                timestamp: l[1],
                pf: l[2]
            }))
        }
        var m = [], p;
        for (p in h)if (h.hasOwnProperty(p)) {
            for (var q = [], t = h[p], u = 0; u < t.length; u++)q.push(t[u].pf);
            q = Dg(q);
            q.length && m.push(p + ":" + q.join(","))
        }
        return m.join(";")
    }, Tg = function (a,
                      b, c) {
        Zf(a, b, c);
        var d = Wf[Xf(a)], e = Ig().dc || [];
        if (d && 0 < e.length) {
            var g = $c.joined_au = $c.joined_au || {}, h = a || "_gcl";
            if (!g[h]) {
                for (var k = !1, l = 0; l < e.length; l++) {
                    var m = "https://adservice.google.com/ddm/regclk";
                    m += "?gclid=" + e[l] + "&auiddc=" + d;
                    Ab(m);
                    k = !0
                }
                if (k) {
                    var p = Xf(a);
                    if (Wf[p]) {
                        var q = Uf(Wf[p], "1", b, c);
                        Pf(p, q, c, b, new Date(Ga() + 7776E6))
                    }
                    g[h] = !0
                }
            }
        }
    };
    var Vg = {"": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", HA: "h", GTM: Ug()};

    function Ug() {
        if (3 === Zc.ob.length)return "g";
        return "G"
    }

    function Wg() {
        return "w"
    }

    var Xg = function (a) {
        var b = Zc.s.split("-"), c = b[0].toUpperCase(), d = Vg[c] || "i", e = a && "GTM" === c ? b[1] : "";
        return (3 === Zc.ob.length ? "2" + Wg() : "") + d + Zc.ob + e
    };
    var dh = !!z.MutationObserver, eh = void 0, fh = function (a) {
        if (!eh) {
            var b = function () {
                var a = A.body;
                if (a)if (dh)(new MutationObserver(function () {
                    for (var a = 0; a < eh.length; a++)B(eh[a])
                })).observe(a, {childList: !0, subtree: !0}); else {
                    var b = !1;
                    sb(a, "DOMNodeInserted", function () {
                        b || (b = !0, B(function () {
                            b = !1;
                            for (var a = 0; a < eh.length; a++)B(eh[a])
                        }))
                    })
                }
            };
            eh = [];
            A.body ? b() : B(b)
        }
        eh.push(a)
    };
    var gh = /\./g, hh = /\*/g;
    var Dh = z.clearTimeout, Eh = z.setTimeout, T = function (a, b, c) {
        if (hf()) {
            b && B(b)
        } else return ob(a, b, c)
    }, Fh = function () {
        return z.location.href
    }, Gh = function (a) {
        return Fb(E(a), "fragment")
    }, W = function (a, b) {
        return od(a, b || 2)
    }, Hh = function (a, b, c) {
        b && (a.eventCallback = b, c && (a.eventTimeout = c));
        return z["dataLayer"].push(a)
    }, Ih = function (a, b) {
        z[a] = b
    }, Y = function (a, b, c) {
        b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
        return z[a]
    }, Jh = function (a,
                      b, c) {
        return Jf(a, b, void 0 === c ? !0 : !!c)
    }, Kh = function (a, b, c) {
        var d = {prefix: a, path: b, domain: c}, e = Ig();
        Jg(e, d)
    }, Lh = function (a, b, c, d) {
        var e = qg(), g = hg();
        g.data || (g.data = {query: {}, fragment: {}}, e(g.data));
        var h = {}, k = g.data;
        k && (Ka(h, k.query), Ka(h, k.fragment));
        for (var l = Gg(b), m = 0; m < a.length; ++m) {
            var p = a[m];
            if (void 0 !== Cg[p]) {
                var q = Kg(p, l), t = h[q];
                if (t) {
                    var u = Math.min(Lg(t), Ga()), v;
                    b:{
                        for (var w = u, C = Jf(q, A.cookie), D = 0; D < C.length; ++D)if (Lg(C[D]) > w) {
                            v = !0;
                            break b
                        }
                        v = !1
                    }
                    v ||
                    Pf(q, t, c, d, new Date(u + 7776E6), !0)
                }
            }
        }
        var F = {prefix: b, path: c, domain: d};
        Jg(Hg(h.gclid, h.gclsrc), F);
    }, Mh = function (a, b, c, d, e) {
        Mg(a, b, c, d, e);
    }, Nh = function (a, b) {
        if (hf()) {
            b && B(b)
        } else qb(a, b)
    }, Oh = function (a) {
        return !!Ef(a, "init", !1)
    }, Ph = function (a) {
        Cf(a).init = !0
    }, Qh = function (a, b, c) {
        var d = (void 0 === c ?
            0 : c) ? "www.googletagmanager.com/gtag/js" : bd;
        d += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
        if (b)for (var e in b)b[e] && b.hasOwnProperty(e) && (d += "&" + e + "=" + encodeURIComponent(b[e]));
        T(H("https://", "http://", d))
    };
    var Sh = bf.Mf;
    var ei = function (a, b, c) {
        this.n = a;
        this.t = b;
        this.p = c
    }, fi = function () {
        this.c = 1;
        this.e = [];
        this.p = null
    };

    function gi(a) {
        var b = $c, c = b.gss = b.gss || {};
        return c[a] = c[a] || new fi
    }

    var hi = function (a, b) {
        gi(a).p = b
    }, ii = function (a, b, c) {
        var d = Math.floor(Ga() / 1E3);
        gi(a).e.push(new ei(b, d, c))
    }, ji = function (a) {
    };
    var ri = window, si = document, ti = function (a) {
        var b = ri._gaUserPrefs;
        if (b && b.ioo && b.ioo() || a && !0 === ri["ga-disable-" + a])return !0;
        try {
            var c = ri.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs)return !0
        } catch (g) {
        }
        for (var d = Jf("AMP_TOKEN", si.cookie, !0), e = 0; e < d.length; e++)if ("$OPT_OUT" == d[e])return !0;
        return !1
    };
    var yi = function (a) {
        if (1 === gi(a).c) {
            gi(a).c = 2;
            var b = encodeURIComponent(a);
            ob(("http:" != z.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com/gtag/js?id=" + b + "&l=dataLayer&cx=c"))
        }
    }, zi = function (a, b) {
    };
    var Z = {a: {}};
    Z.a.ctv = ["google"], function () {
        (function (a) {
            Z.__ctv = a;
            Z.__ctv.g = "ctv";
            Z.__ctv.h = !0;
            Z.__ctv.b = 0
        })(function () {
            return "19"
        })
    }();
    Z.a.jsm = ["customScripts"], function () {
        (function (a) {
            Z.__jsm = a;
            Z.__jsm.g = "jsm";
            Z.__jsm.h = !0;
            Z.__jsm.b = 0
        })(function (a) {
            if (void 0 !== a.vtp_javascript) {
                var b = a.vtp_javascript;
                try {
                    var c = Y("google_tag_manager");
                    return c && c.e && c.e(b)
                } catch (d) {
                }
            }
        })
    }();
    Z.a.c = ["google"], function () {
        (function (a) {
            Z.__c = a;
            Z.__c.g = "c";
            Z.__c.h = !0;
            Z.__c.b = 0
        })(function (a) {
            return a.vtp_value
        })
    }();
    Z.a.e = ["google"], function () {
        (function (a) {
            Z.__e = a;
            Z.__e.g = "e";
            Z.__e.h = !0;
            Z.__e.b = 0
        })(function () {
            return dd
        })
    }();
    Z.a.f = ["google"], function () {
        (function (a) {
            Z.__f = a;
            Z.__f.g = "f";
            Z.__f.h = !0;
            Z.__f.b = 0
        })(function (a) {
            var b = W("gtm.referrer", 1) || A.referrer;
            return b ? a.vtp_component && "URL" != a.vtp_component ? Fb(E(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : Eb(E(String(b))) : String(b)
        })
    }();

    Z.a.u = ["google"], function () {
        var a = function (a) {
            return {
                toString: function () {
                    return a
                }
            }
        };
        (function (a) {
            Z.__u = a;
            Z.__u.g = "u";
            Z.__u.h = !0;
            Z.__u.b = 0
        })(function (b) {
            var c;
            c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : W("gtm.url", 1)) || Fh();
            var d = b[a("vtp_component")];
            return d && "URL" != d ? Fb(E(String(c)), d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0, "QUERY" == d ? b[a("vtp_queryKey")] : void 0) : Eb(E(String(c)))
        })
    }();
    Z.a.v = ["google"], function () {
        (function (a) {
            Z.__v = a;
            Z.__v.g = "v";
            Z.__v.h = !0;
            Z.__v.b = 0
        })(function (a) {
            var b = a.vtp_name;
            if (!b || !b.replace)return !1;
            var c = W(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
            return void 0 !== c ? c : a.vtp_defaultValue
        })
    }();
    Z.a.ua = ["google"], function () {
        var a, b = function (b) {
            var c = {}, e = {}, g = {}, h = {}, k = {};
            if (b.vtp_gaSettings) {
                var l = b.vtp_gaSettings;
                x(zf(l.vtp_fieldsToSet, "fieldName", "value"), e);
                x(zf(l.vtp_contentGroup, "index", "group"), g);
                x(zf(l.vtp_dimension, "index", "dimension"), h);
                x(zf(l.vtp_metric, "index", "metric"), k);
                b.vtp_gaSettings = null;
                l.vtp_fieldsToSet = void 0;
                l.vtp_contentGroup = void 0;
                l.vtp_dimension = void 0;
                l.vtp_metric = void 0;
                var m = x(l);
                b = x(b, m)
            }
            x(zf(b.vtp_fieldsToSet, "fieldName", "value"), e);
            x(zf(b.vtp_contentGroup,
                "index", "group"), g);
            x(zf(b.vtp_dimension, "index", "dimension"), h);
            x(zf(b.vtp_metric, "index", "metric"), k);
            var p = Pd(b.vtp_functionName), q = "", t = "";
            b.vtp_setTrackerName && "string" == typeof b.vtp_trackerName ? "" !== b.vtp_trackerName && (t = b.vtp_trackerName, q = t + ".") : (t = "gtm" + hd(), q = t + ".");
            var u = {
                name: !0,
                clientId: !0,
                sampleRate: !0,
                siteSpeedSampleRate: !0,
                alwaysSendReferrer: !0,
                allowAnchor: !0,
                allowLinker: !0,
                cookieName: !0,
                cookieDomain: !0,
                cookieExpires: !0,
                cookiePath: !0,
                cookieUpdate: !0,
                legacyCookieDomain: !0,
                legacyHistoryImport: !0,
                storage: !0,
                useAmpClientId: !0,
                storeGac: !0
            }, v = {
                allowAnchor: !0,
                allowLinker: !0,
                alwaysSendReferrer: !0,
                anonymizeIp: !0,
                cookieUpdate: !0,
                exFatal: !0,
                forceSSL: !0,
                javaEnabled: !0,
                legacyHistoryImport: !0,
                nonInteraction: !0,
                useAmpClientId: !0,
                useBeacon: !0,
                storeGac: !0,
                allowAdFeatures: !0
            }, w = function (a) {
                var b = [].slice.call(arguments, 0);
                b[0] = q + b[0];
                p.apply(window, b)
            }, C = function (a, b) {
                return void 0 === b ? b : a(b)
            }, D = function (a, b) {
                if (b)for (var c in b)b.hasOwnProperty(c) && w("set", a + c, b[c])
            }, F = function () {
            }, I = function (a, b, c) {
                var d = 0;
                if (a)for (var e in a)if (a.hasOwnProperty(e) && (c && u[e] || !c && void 0 === u[e])) {
                    var g = v[e] ? Da(a[e]) : a[e];
                    "anonymizeIp" != e || g || (g = void 0);
                    b[e] = g;
                    d++
                }
                return d
            }, P = {name: t};
            I(e, P, !0);
            p("create", b.vtp_trackingId ||
            c.trackingId, P);
            w("set", "&gtm", Xg(!0));
            (function (a, c) {
                void 0 !== b[c] && w("set", a, b[c])
            })("nonInteraction", "vtp_nonInteraction");
            D("contentGroup", g);
            D("dimension", h);
            D("metric", k);
            var X = {};
            I(e, X, !1) && w("set", X);
            var G;
            b.vtp_enableLinkId && w("require", "linkid", "linkid.js");
            w("set", "hitCallback", function () {
                var a = e && e.hitCallback;
                sa(a) &&
                a();
                b.vtp_gtmOnSuccess()
            });
            if ("TRACK_EVENT" == b.vtp_trackType) {
                b.vtp_enableEcommerce && (w("require", "ec", "ec.js"), F());
                var S = {
                    hitType: "event",
                    eventCategory: String(b.vtp_eventCategory || c.category),
                    eventAction: String(b.vtp_eventAction || c.action),
                    eventLabel: C(String, b.vtp_eventLabel || c.label),
                    eventValue: C(Ba, b.vtp_eventValue || c.value)
                };
                I(G, S, !1);
                w("send", S);
            } else if ("TRACK_SOCIAL" ==
                b.vtp_trackType) {
                var Q = {
                    hitType: "social",
                    socialNetwork: String(b.vtp_socialNetwork),
                    socialAction: String(b.vtp_socialAction),
                    socialTarget: String(b.vtp_socialActionTarget)
                };
                I(G, Q, !1);
                w("send", Q);
            } else if ("TRACK_TRANSACTION" == b.vtp_trackType) {
            } else if ("TRACK_TIMING" == b.vtp_trackType) {
            } else if ("DECORATE_LINK" == b.vtp_trackType) {
            } else if ("DECORATE_FORM" == b.vtp_trackType) {
            } else if ("TRACK_DATA" ==
                b.vtp_trackType) {
            } else {
                b.vtp_enableEcommerce && (w("require", "ec", "ec.js"), F());
                if (b.vtp_doubleClick || "DISPLAY_FEATURES" == b.vtp_advertisingFeaturesType) {
                    var Aa = "_dc_gtm_" + String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
                    w("require", "displayfeatures", void 0, {cookieName: Aa})
                }
                if ("DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == b.vtp_advertisingFeaturesType) {
                    var N =
                        "_dc_gtm_" + String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
                    w("require", "adfeatures", {cookieName: N})
                }
                G ? w("send", "pageview", G) : w("send", "pageview");
                b.vtp_autoLinkDomains && Qd(q, b.vtp_autoLinkDomains, !!b.vtp_useHashAutoLink, !!b.vtp_decorateFormsAutoLink);
            }
            if (!a) {
                var la = b.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                b.vtp_useInternalVersion && !b.vtp_useDebugVersion &&
                (la = "internal/" + la);
                a = !0;
                T(H("https:", "http:", "//www.google-analytics.com/" + la, e && e.forceSSL), function () {
                    var a = Od();
                    a && a.loaded || b.vtp_gtmOnFailure();
                }, b.vtp_gtmOnFailure)
            }
        };
        Z.__ua = b;
        Z.__ua.g = "ua";
        Z.__ua.h = !0;
        Z.__ua.b = 0
    }();


    Z.a.cid = ["google"], function () {
        (function (a) {
            Z.__cid = a;
            Z.__cid.g = "cid";
            Z.__cid.h = !0;
            Z.__cid.b = 0
        })(function () {
            return Zc.s
        })
    }();

    Z.a.aev = ["google"], function () {
        var a = void 0, b = "", c = 0, d = void 0, e = {
            ATTRIBUTE: "gtm.elementAttribute",
            CLASSES: "gtm.elementClasses",
            ELEMENT: "gtm.element",
            ID: "gtm.elementId",
            HISTORY_CHANGE_SOURCE: "gtm.historyChangeSource",
            HISTORY_NEW_STATE: "gtm.newHistoryState",
            HISTORY_NEW_URL_FRAGMENT: "gtm.newUrlFragment",
            HISTORY_OLD_STATE: "gtm.oldHistoryState",
            HISTORY_OLD_URL_FRAGMENT: "gtm.oldUrlFragment",
            TARGET: "gtm.elementTarget"
        }, g = function (a) {
            var b = W(e[a.vtp_varType], 1);
            return void 0 !== b ? b : a.vtp_defaultValue
        }, h = function (a,
                         b) {
            if (!a)return !1;
            var c = l(Fh()), d;
            d = va(b.vtp_affiliatedDomains) ? b.vtp_affiliatedDomains : String(b.vtp_affiliatedDomains || "").replace(/\s+/g, "").split(",");
            for (var e = [c], g = 0; g < d.length; g++)if (d[g]instanceof RegExp) {
                if (d[g].test(a))return !1
            } else {
                var h = d[g];
                if (0 != h.length) {
                    if (0 <= l(a).indexOf(h))return !1;
                    e.push(l(h))
                }
            }
            return !yf(a, e)
        }, k = /^https?:\/\//i, l = function (a) {
            k.test(a) || (a = "http://" + a);
            return Fb(E(a), "HOST", !0)
        };
        (function (a) {
            Z.__aev = a;
            Z.__aev.g = "aev";
            Z.__aev.h = !0;
            Z.__aev.b = 0
        })(function (e) {
            switch (e.vtp_varType) {
                case "TAG_NAME":
                    return W("gtm.element",
                            1).tagName || e.vtp_defaultValue;
                case "TEXT":
                    var k, l = W("gtm.element", 1), m = W("event", 1), u = Number(new Date);
                    a === l && b === m && c > u - 250 ? k = d : (d = k = l ? wb(l) : "", a = l, b = m);
                    c = u;
                    return k || e.vtp_defaultValue;
                case "URL":
                    var v;
                    a:{
                        var w = String(W("gtm.elementUrl", 1) || e.vtp_defaultValue || ""), C = E(w);
                        switch (e.vtp_component || "URL") {
                            case "URL":
                                v = w;
                                break a;
                            case "IS_OUTBOUND":
                                v = h(w, e);
                                break a;
                            default:
                                v = Fb(C, e.vtp_component, e.vtp_stripWww, e.vtp_defaultPages, e.vtp_queryKey)
                        }
                    }
                    return v;
                case "ATTRIBUTE":
                    var D;
                    if (void 0 === e.vtp_attribute)D =
                        g(e); else {
                        var F = W("gtm.element", 1);
                        D = ub(F, e.vtp_attribute) || e.vtp_defaultValue || ""
                    }
                    return D;
                default:
                    return g(e)
            }
        })
    }();


    Z.a.html = ["customScripts"], function () {
        function a(b, c, g, h) {
            return function () {
                try {
                    if (0 < c.length) {
                        var d = c.shift(), e = a(b, c, g, h);
                        if ("SCRIPT" == String(d.nodeName).toUpperCase() && "text/gtmscript" == d.type) {
                            var m = A.createElement("script");
                            m.async = !1;
                            m.type = "text/javascript";
                            m.id = d.id;
                            m.text = d.text || d.textContent || d.innerHTML || "";
                            d.charset && (m.charset = d.charset);
                            var p = d.getAttribute("data-gtmsrc");
                            p && (m.src = p, nb(m, e));
                            b.insertBefore(m, null);
                            p || e()
                        } else if (d.innerHTML && 0 <= d.innerHTML.toLowerCase().indexOf("<script")) {
                            for (var q =
                                []; d.firstChild;)q.push(d.removeChild(d.firstChild));
                            b.insertBefore(d, null);
                            a(d, q, e, h)()
                        } else b.insertBefore(d, null), e()
                    } else g()
                } catch (t) {
                    B(h)
                }
            }
        }

        var b = function (a, b, c) {
            Ld(function () {
                var d, e = $c;
                e.postscribe || (e.postscribe = Yc);
                d = e.postscribe;
                var g = {done: b}, m = A.createElement("div");
                m.style.display = "none";
                m.style.visibility = "hidden";
                A.body.appendChild(m);
                try {
                    d(m, a, g)
                } catch (p) {
                    B(c)
                }
            })
        };
        var c = function (d) {
            if (A.body) {
                var e =
                    d.vtp_gtmOnFailure, g = Sh(d.vtp_html, d.vtp_gtmOnSuccess, e), h = g.cc, k = g.V;
                if (d.vtp_useIframe) {
                } else d.vtp_supportDocumentWrite ? b(h, k, e) : a(A.body, yb(h), k, e)()
            } else Eh(function () {
                    c(d)
                },
                200)
        };
        Z.__html = c;
        Z.__html.g = "html";
        Z.__html.h = !0;
        Z.__html.b = 0
    }();


    var Ai = {};
    Ai.macro = function (a) {
        if (bf.Vb.hasOwnProperty(a))return bf.Vb[a]
    }, Ai.onHtmlSuccess = bf.fd(!0), Ai.onHtmlFailure = bf.fd(!1);
    Ai.dataLayer = pd;
    Ai.callback = function (a) {
        fd.hasOwnProperty(a) && sa(fd[a]) && fd[a]();
        delete fd[a]
    };
    Ai.Je = function () {
        $c[Zc.s] = Ai;
        gd = Z.a;
        Kc = Kc || bf;
        Lc = Cd
    };
    Ai.Df = function () {
        $c = z.google_tag_manager = z.google_tag_manager || {};
        if ($c[Zc.s]) {
            var a = $c.zones;
            a && a.unregisterChild(Zc.s)
        } else {
            for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++)Cc.push(c[d]);
            for (var e = b.tags || [], g = 0; g < e.length; g++)Fc.push(e[g]);
            for (var h = b.predicates || [], k = 0; k < h.length; k++)Ec.push(h[k]);
            for (var l = b.rules || [], m = 0; m < l.length; m++) {
                for (var p = l[m], q = {}, t = 0; t < p.length; t++)q[p[t][0]] = Array.prototype.slice.call(p[t], 1);
                Dc.push(q)
            }
            Ic = Z;
            var u = data.permissions || {};
            rf();
            tf(u);
            Ai.Je();
            af();
            Gd = !1;
            Hd = 0;
            if ("interactive" == A.readyState && !A.createEventObject || "complete" == A.readyState)Jd(); else {
                sb(A, "DOMContentLoaded", Jd);
                sb(A, "readystatechange", Jd);
                if (A.createEventObject && A.documentElement.doScroll) {
                    var v = !0;
                    try {
                        v = !z.frameElement
                    } catch (C) {
                    }
                    v && Kd()
                }
                sb(z, "load", Jd)
            }
            Oe = !1;
            "complete" === A.readyState ? Qe() : sb(z, "load", Qe);
            a:{
                if (!Zd)break a;
                be();
                ee = void 0;
                fe = {};
                ce = {};
                he = void 0;
                ge = {};
                de = "";
                ie = $d();
                z.setInterval(be, 864E5);
            }
            cd = (new Date).getTime()
        }
    };
    Ai.Df();

})()
