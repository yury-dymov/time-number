!function(t,r){for(var n in r)t[n]=r[n]}(exports,function(t){function r(e){if(n[e])return n[e].exports;var o=n[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var n={};return r.m=t,r.c=n,r.p="",r(0)}([function(t,r,n){t.exports=n(1)},function(t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.timeFromInt=function(t){if(0>t)return t;var r=parseInt(t/3600,10).toString(),n=parseInt(t%3600,10).toString(),e="";return 1===r.length&&(e+="0"),e+=r,e+=":",1===n.length&&(e+="0"),e+=n},r.timeToInt=function(t){if(0>t)return t;var r=t.split(":");return 3600*parseInt(r[0],10)+parseInt(r[1],10)}}]));