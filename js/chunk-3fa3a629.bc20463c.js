(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fa3a629"],{"0789":function(t,e,i){"use strict";var s=i("80d2"),a=function(t="",e=!1){const i=e?"width":"height",a=`offset${Object(s["A"])(i)}`;return{beforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,visibility:t.style.visibility,overflow:t.style.overflow,[i]:t.style[i]}},enter(e){const s=e._initialStyle,n=`${e[a]}px`;e.style.setProperty("transition","none","important"),e.style.visibility="hidden",e.style.visibility=s.visibility,e.style.overflow="hidden",e.style[i]="0",e.offsetHeight,e.style.transition=s.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame(()=>{e.style[i]=n})},afterEnter:r,enterCancelled:r,leave(t){t._initialStyle={transition:"",visibility:"",overflow:t.style.overflow,[i]:t.style[i]},t.style.overflow="hidden",t.style[i]=`${t[a]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[i]="0")},afterLeave:n,leaveCancelled:n};function n(e){t&&e._parent&&e._parent.classList.remove(t),r(e)}function r(t){const e=t._initialStyle[i];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[i]=e),delete t._initialStyle}};i.d(e,"c",function(){return n}),i.d(e,"d",function(){return r}),i.d(e,"a",function(){return o}),i.d(e,"b",function(){return l});Object(s["h"])("carousel-transition"),Object(s["h"])("carousel-reverse-transition"),Object(s["h"])("tab-transition"),Object(s["h"])("tab-reverse-transition"),Object(s["h"])("menu-transition"),Object(s["h"])("fab-transition","center center","out-in"),Object(s["h"])("dialog-transition"),Object(s["h"])("dialog-bottom-transition");const n=Object(s["h"])("fade-transition"),r=(Object(s["h"])("scale-transition"),Object(s["h"])("scroll-x-transition"),Object(s["h"])("scroll-x-reverse-transition"),Object(s["h"])("scroll-y-transition"),Object(s["h"])("scroll-y-reverse-transition"),Object(s["h"])("slide-x-transition")),o=(Object(s["h"])("slide-x-reverse-transition"),Object(s["h"])("slide-y-transition"),Object(s["h"])("slide-y-reverse-transition"),Object(s["f"])("expand-transition",a())),l=Object(s["f"])("expand-x-transition",a("",!0))},"0e8f":function(t,e,i){"use strict";i("20f6");var s=i("e8f2");e["a"]=Object(s["a"])("flex")},"10d2":function(t,e,i){"use strict";var s=i("8dd9");e["a"]=s["a"]},"1c87":function(t,e,i){"use strict";var s=i("2b0e"),a=i("5607"),n=i("80d2");e["a"]=s["a"].extend({name:"routable",directives:{Ripple:a["a"]},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to?t:(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive),t)},computedRipple(){return null!=this.ripple?this.ripple:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},methods:{click(t){this.$emit("click",t)},generateRouteLink(){let t,e=this.exact;const i={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,click:this.click},ref:"link"};if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let s=this.activeClass,a=this.exactActiveClass||s;this.proxyClass&&(s=`${s} ${this.proxyClass}`.trim(),a=`${a} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(i.props,{to:this.to,exact:e,activeClass:s,exactActiveClass:a,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(i.attrs.href=this.href);return this.target&&(i.attrs.target=this.target),{tag:t,data:i}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass} ${this.proxyClass||""}`.trim(),e=`_vnode.data.class.${t}`;this.$nextTick(()=>{Object(n["m"])(this.$refs.link,e)&&this.toggle()})},toggle:()=>{}}})},"24b2":function(t,e,i){"use strict";var s=i("80d2"),a=i("2b0e");e["a"]=a["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=Object(s["e"])(this.height),i=Object(s["e"])(this.minHeight),a=Object(s["e"])(this.minWidth),n=Object(s["e"])(this.maxHeight),r=Object(s["e"])(this.maxWidth),o=Object(s["e"])(this.width);return e&&(t.height=e),i&&(t.minHeight=i),a&&(t.minWidth=a),n&&(t.maxHeight=n),r&&(t.maxWidth=r),o&&(t.width=o),t}}})},"25a8":function(t,e,i){},"297c":function(t,e,i){"use strict";var s=i("2b0e"),a=i("37c6");e["a"]=s["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(a["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"37c6":function(t,e,i){"use strict";i("6ece");var s=i("0789"),a=i("a9ad"),n=i("fe6c"),r=i("a452"),o=i("7560"),l=i("80d2"),c=i("58df");const d=Object(c["a"])(a["a"],Object(n["b"])(["absolute","fixed","top","bottom"]),r["a"],o["a"]);var h=d.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(l["e"])(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(l["e"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,left:Object(l["e"])(this.normalizedValue,"%"),width:Object(l["e"])(this.normalizedBuffer-this.normalizedValue,"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,...this.themeClasses}},computedTransition(){return this.indeterminate?s["c"]:s["d"]},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(l["e"])(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=Object(l["p"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(l["e"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});e["a"]=h},5607:function(t,e,i){"use strict";i("7435");function s(t,e){t.style["transform"]=e,t.style["webkitTransform"]=e}function a(t,e){t.style["opacity"]=e.toString()}function n(t){return"TouchEvent"===t.constructor.name}const r=(t,e,i={})=>{const s=e.getBoundingClientRect(),a=n(t)?t.touches[t.touches.length-1]:t,r=a.clientX-s.left,o=a.clientY-s.top;let l=0,c=.3;e._ripple&&e._ripple.circle?(c=.15,l=e.clientWidth/2,l=i.center?l:l+Math.sqrt((r-l)**2+(o-l)**2)/4):l=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const d=`${(e.clientWidth-2*l)/2}px`,h=`${(e.clientHeight-2*l)/2}px`,u=i.center?d:`${r-l}px`,p=i.center?h:`${o-l}px`;return{radius:l,scale:c,x:u,y:p,centerX:d,centerY:h}},o={show(t,e,i={}){if(!e._ripple||!e._ripple.enabled)return;const n=document.createElement("span"),o=document.createElement("span");n.appendChild(o),n.className="v-ripple__container",i.class&&(n.className+=` ${i.class}`);const{radius:l,scale:c,x:d,y:h,centerX:u,centerY:p}=r(t,e,i),m=`${2*l}px`;o.className="v-ripple__animation",o.style.width=m,o.style.height=m,e.appendChild(n);const v=window.getComputedStyle(e);v&&"static"===v.position&&(e.style.position="relative",e.dataset.previousPosition="static"),o.classList.add("v-ripple__animation--enter"),o.classList.add("v-ripple__animation--visible"),s(o,`translate(${d}, ${h}) scale3d(${c},${c},${c})`),a(o,0),o.dataset.activated=String(performance.now()),setTimeout(()=>{o.classList.remove("v-ripple__animation--enter"),o.classList.add("v-ripple__animation--in"),s(o,`translate(${u}, ${p}) scale3d(1,1,1)`),a(o,.25)},0)},hide(t){if(!t||!t._ripple||!t._ripple.enabled)return;const e=t.getElementsByClassName("v-ripple__animation");if(0===e.length)return;const i=e[e.length-1];if(i.dataset.isHiding)return;i.dataset.isHiding="true";const s=performance.now()-Number(i.dataset.activated),n=Math.max(250-s,0);setTimeout(()=>{i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),a(i,0),setTimeout(()=>{const e=t.getElementsByClassName("v-ripple__animation");1===e.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),i.parentNode&&t.removeChild(i.parentNode)},300)},n)}};function l(t){return"undefined"===typeof t||!!t}function c(t){const e={},i=t.currentTarget;if(i&&i._ripple&&!i._ripple.touched){if(n(t))i._ripple.touched=!0,i._ripple.isTouch=!0;else if(i._ripple.isTouch)return;e.center=i._ripple.centered,i._ripple.class&&(e.class=i._ripple.class),o.show(t,i,e)}}function d(t){const e=t.currentTarget;e&&(window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),o.hide(e))}function h(t,e,i){const s=l(e.value);s||o.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=s;const a=e.value||{};a.center&&(t._ripple.centered=!0),a.class&&(t._ripple.class=e.value.class),a.circle&&(t._ripple.circle=a.circle),s&&!i?(t.addEventListener("touchstart",c,{passive:!0}),t.addEventListener("touchend",d,{passive:!0}),t.addEventListener("touchcancel",d),t.addEventListener("mousedown",c),t.addEventListener("mouseup",d),t.addEventListener("mouseleave",d),t.addEventListener("dragstart",d,{passive:!0})):!s&&i&&u(t)}function u(t){t.removeEventListener("mousedown",c),t.removeEventListener("touchstart",d),t.removeEventListener("touchend",d),t.removeEventListener("touchcancel",d),t.removeEventListener("mouseup",d),t.removeEventListener("mouseleave",d),t.removeEventListener("dragstart",d)}function p(t,e,i){h(t,e,!1)}function m(t){delete t._ripple,u(t)}function v(t,e){if(e.value===e.oldValue)return;const i=l(e.oldValue);h(t,e,i)}const g={bind:p,unbind:m,update:v};e["a"]=g},"615b":function(t,e,i){},"6ece":function(t,e,i){},7435:function(t,e,i){},"75a6":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{"grid-list-lg":""}},[i("v-layout",{attrs:{wrap:""}},t._l(t.cards,function(e,s){return i("v-flex",{key:e.id,class:t.flexSize(s)},[i("v-card",{key:e.id,attrs:{img:e.image,"min-height":"15rem",href:"#"}},[i("v-card-title",[i("h1",{staticClass:"display-2"},[t._v(t._s(e.title))])]),i("v-card-text",[i("p",{staticClass:"subtitle-1"},[t._v(t._s(e.text))])])],1)],1)}),1)],1)},a=[],n={name:"HomeFeed",methods:{flexSize:function(t){return{md6:[0,1].includes(Math.floor(t%5)),md4:[2,3,4].includes(Math.floor(t%5))}}},data(){return{cards:[{id:1,title:"Join Now",text:"Apply now to be among the most deadly of combat experts.",image:"https://i.ytimg.com/vi/g3zXyuFQ-oc/maxresdefault.jpg"},{id:2,title:"Game Night",text:"Capture the Flag, every Friday night at 8:00 PM EST.",image:"https://3.bp.blogspot.com/-cR_4U4RLuGU/UEsQkziAjdI/AAAAAAAAI64/PKIdsz4iKno/s1600/halo4-ctf-pistol-flag.jpg"},{id:3,title:"md4",text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",image:""},{id:4,title:"md4",text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",image:""},{id:5,title:"md4",text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",image:""}]}}},r=n,o=i("2877"),l=i("6544"),c=i.n(l),d=i("b0af"),h=i("99d9"),u=i("a523"),p=i("0e8f"),m=i("a722"),v=Object(o["a"])(r,s,a,!1,null,null,null);e["default"]=v.exports;c()(v,{VCard:d["a"],VCardText:h["b"],VCardTitle:h["c"],VContainer:u["a"],VFlex:p["a"],VLayout:m["a"]})},"8dd9":function(t,e,i){"use strict";i("25a8");var s=i("a9ad"),a=i("2b0e"),n=a["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t?{}:isNaN(parseInt(t))?{}:{[`elevation-${this.elevation}`]:!0}}}}),r=i("24b2"),o=i("7560"),l=i("58df");e["a"]=Object(l["a"])(s["a"],n,r["a"],o["a"]).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes(){return{"v-sheet":!0,"v-sheet--tile":this.tile,...this.themeClasses,...this.elevationClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.$listeners};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},"99d9":function(t,e,i){"use strict";i.d(e,"c",function(){return o}),i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r});var s=i("80d2"),a=i("b0af");const n=Object(s["g"])("v-card__actions"),r=Object(s["g"])("v-card__text"),o=Object(s["g"])("v-card__title");a["a"]},a452:function(t,e,i){"use strict";var s=i("2b0e");function a(t="value",e="change"){return s["a"].extend({name:"proxyable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{internalLazyValue:this[t]}},computed:{internalValue:{get(){return this.internalLazyValue},set(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:{[t](t){this.internalLazyValue=t}}})}const n=a();e["a"]=n},a722:function(t,e,i){"use strict";i("20f6");var s=i("e8f2");e["a"]=Object(s["a"])("layout")},a9ad:function(t,e,i){"use strict";var s=i("2b0e"),a=i("d9bd");function n(t){return!!t&&!!t.match(/^(#|(rgb|hsl)a?\()/)}e["a"]=s["a"].extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?(Object(a["b"])("style must be an object",this),e):"string"===typeof e.class?(Object(a["b"])("class must be an object",this),e):(n(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return Object(a["b"])("style must be an object",this),e;if("string"===typeof e.class)return Object(a["b"])("class must be an object",this),e;if(n(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[i,s]=t.toString().trim().split(" ",2);e.class={...e.class,[i+"--text"]:!0},s&&(e.class["text--"+s]=!0)}return e}}})},b0af:function(t,e,i){"use strict";i("615b");var s=i("10d2"),a=i("297c"),n=i("1c87"),r=i("58df");e["a"]=Object(r["a"])(a["a"],n["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean},computed:{classes(){return{"v-card":!0,...n["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,...s["a"].options.computed.classes.call(this)}},styles(){const t={...s["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=a["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render(t){const{tag:e,data:i}=this.generateRouteLink();return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},fe6c:function(t,e,i){"use strict";i.d(e,"b",function(){return r});var s=i("2b0e"),a=i("80d2");const n={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function r(t=[]){return s["a"].extend({name:"positionable",props:t.length?Object(a["l"])(n,t):n})}e["a"]=r()}}]);
//# sourceMappingURL=chunk-3fa3a629.bc20463c.js.map