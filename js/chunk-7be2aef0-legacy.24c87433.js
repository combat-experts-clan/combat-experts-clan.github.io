(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7be2aef0"],{"20f6":function(t,e,s){},"4b85":function(t,e,s){},a523:function(t,e,s){"use strict";s("20f6"),s("4b85");var a=s("e8f2");
/**
 * @copyright 2017 Alex Regan
 * @license MIT
 * @see https://github.com/alexsasharegan/vue-functional-data-merge
 */
function r(){const t={};let e,s,a=arguments.length;while(a--)for(e of Object.keys(arguments[a]))switch(e){case"class":case"style":case"directives":Array.isArray(t[e])||(t[e]=[]),t[e]=t[e].concat(arguments[a][e]);break;case"staticClass":if(!arguments[a][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[a][e].trim();break;case"on":case"nativeOn":t[e]||(t[e]={});const r=t[e];for(s of Object.keys(arguments[a][e]||{}))r[s]?r[s]=Array().concat(r[s],arguments[a][e][s]):r[s]=arguments[a][e][s];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":t[e]||(t[e]={}),t[e]={...arguments[a][e],...t[e]};break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:t[e]||(t[e]=arguments[a][e])}return t}e["a"]=Object(a["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:s,children:a}){let n;const{attrs:c}=s;return c&&(s.attrs={},n=Object.keys(c).filter(t=>{if("slot"===t)return!1;const e=c[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),t(e.tag,r(s,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),a)}})},e8f2:function(t,e,s){"use strict";s.d(e,"a",function(){return r});var a=s("2b0e");function r(t){return a["a"].extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:s,data:a,children:r}){a.staticClass=`${t} ${a.staticClass||""}`.trim();const{attrs:n}=a;if(n){a.attrs={};const t=Object.keys(n).filter(t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(a.staticClass+=` ${t.join(" ")}`)}return s.id&&(a.domProps=a.domProps||{},a.domProps.id=s.id),e(s.tag,a,r)}})}}}]);
//# sourceMappingURL=chunk-7be2aef0-legacy.24c87433.js.map