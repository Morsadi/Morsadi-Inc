"use strict";var precacheConfig=[["/index.html","65cb5d7c9b607943f130d6108bdf3ddb"],["/static/css/main.a755f879.css","1fc7dce0f0d938bb0fcff99a54b11e05"],["/static/js/main.753ca5a6.js","adf2122e127272bd0ceceb198523056c"],["/static/media/Acoustic.190e7ca1.png","190e7ca1467fe439e091509d932aed64"],["/static/media/FILMS.637b6a40.png","637b6a401e8d8a46174234d8fd0e4b68"],["/static/media/HEADRUSH.9e787aa9.png","9e787aa9cd1b7c8a091cf61aec90ce7c"],["/static/media/LA.d4771951.png","d4771951e9ccb0a6983ed93047ea0f61"],["/static/media/TGS.3de6d247.png","3de6d24790ba27683b0be0853efe5bd0"],["/static/media/UDLA.c5d17653.png","c5d17653acd93a79cefc85e5ff2341db"],["/static/media/slide 3 hover.50baa8cc.png","50baa8ccf3bd3bf4c8609d0a90d8faf0"],["/static/media/slide 3.2af0104b.png","2af0104bc72c18e01777dfa9b7f1c2f1"],["/static/media/slide1 hover.a3eb3866.png","a3eb38663c0d2c0753fa3265cfd5396f"],["/static/media/slide1.ed61006e.png","ed61006eff9376b8e999febb6002714c"],["/static/media/slide2 hover.56ce6213.png","56ce62133fa7e965f4b6a50127eb278a"],["/static/media/slide2.8ec31c43.png","8ec31c4375a1e9199b819aaaa08247a3"],["/static/media/slide4 hover.3ace2bfd.png","3ace2bfde1e6abbe890f19cf40acfe91"],["/static/media/slide4.afb02711.png","afb027114de3e8c72c5c11c726fa6d84"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});