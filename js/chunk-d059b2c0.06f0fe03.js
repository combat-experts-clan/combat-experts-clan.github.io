(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d059b2c0"],{"0e8f":function(t,e,i){"use strict";i("20f6");var a=i("e8f2");e["a"]=Object(a["a"])("flex")},"12b3":function(t,e,i){"use strict";var a=i("f5a0"),s=i.n(a);s.a},"132d":function(t,e,i){"use strict";i("4804");var a,s=i("a9ad"),o=i("af2b"),r=i("7560"),n=i("80d2"),l=i("2b0e"),u=i("58df");function h(t){return["fas","far","fal","fab"].some(e=>t.includes(e))}function c(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(a||(a={}));const d=Object(u["a"])(s["a"],o["a"],r["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(n["x"])(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(n["v"])(t).find(e=>t[e]);return e&&a[e]||Object(n["e"])(this.size)},getDefaultData(){const t=Boolean(this.$listeners.click||this.$listeners["!click"]),e={staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":t,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!t,role:t?"button":null,...this.$attrs},on:this.$listeners};return e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const i=[],a=this.getDefaultData();let s="material-icons";const o=t.indexOf("-"),r=o<=-1;r?i.push(t):(s=t.slice(0,o),h(s)&&(s="")),a.class[s]=!0,a.class[t]=!r;const n=this.getSize();return n&&(a.style={fontSize:n}),this.applyColors(a),e(this.tag,a,i)},renderSvgIcon(t,e){const i=this.getDefaultData();i.class["v-icon--svg"]=!0,i.attrs={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:"24",width:"24",role:"img","aria-hidden":!this.$attrs["aria-label"],"aria-label":this.$attrs["aria-label"]};const a=this.getSize();return a&&(i.style={fontSize:a,height:a,width:a},i.attrs.height=a,i.attrs.width=a),this.applyColors(i),e("svg",i,[e("path",{attrs:{d:t}})])},renderSvgIconComponent(t,e){const i=this.getDefaultData();i.class["v-icon--is-component"]=!0;const a=this.getSize();a&&(i.style={fontSize:a,height:a}),this.applyColors(i);const s=t.component;return i.props=t.props,i.nativeOn=i.on,e(s,i)}},render(t){const e=this.getIcon();return"string"===typeof e?c(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=l["a"].extend({name:"v-icon",$_wrapperFor:d,functional:!0,render(t,{data:e,children:i}){let a="";return e.domProps&&(a=e.domProps.textContent||e.domProps.innerHTML||a,delete e.domProps.textContent,delete e.domProps.innerHTML),t(d,e,a?[a]:i)}})},1681:function(t,e,i){},"24ae":function(t,e,i){t.exports=i.p+"img/infinite-rings.8af2b95e.jpg"},"2c64":function(t,e,i){},"3d86":function(t,e,i){},4804:function(t,e,i){},"5baa":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","pa-0":""}},[a("header",[a("hero-image",{attrs:{image:i("24ae"),height:250}})],1),a("main",{attrs:{id:"home-feed"}},[a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"mx-5":""}},[a("v-form",[a("h1",{staticClass:"display-1 py-3"},[t._v("About Me")]),a("v-text-field",{staticClass:"my-3",attrs:{label:"Desired Clan Name",prefix:t.tagPrefix,hint:"This is the nickname that you will be using in-game.",filled:""},on:{focus:function(e){t.tagPrefix="=CE="},blur:function(e){t.tagPrefix=""}}}),a("v-text-field",{staticClass:"my-3",attrs:{label:"Discord",placeholder:t.discordPlaceholder,hint:"We communicate primarily via Discord.",filled:""},on:{focus:function(e){t.discordPlaceholder="Discord#1234"},blur:function(e){t.discordPlaceholder=""}}}),a("p",[t._v("\n                If you and your teammate were in a hopeless firefight next to\n                the flag, you would...\n              ")]),a("v-textarea",{attrs:{filled:""}}),a("p",[t._v("\n                Have you ever used a hack or cheat to gain an unfair advantage\n                over others during online play?\n              ")]),a("v-radio-group",{staticClass:"my-3",attrs:{row:""}},[a("v-radio",{attrs:{label:"No"},on:{change:function(e){t.cheatExplain=!1}}}),a("v-radio",{attrs:{label:"Yes"},on:{change:function(e){t.cheatExplain=!0}}})],1),a("transition",{attrs:{name:"fade"}},[a("v-text-field",{directives:[{name:"show",rawName:"v-show",value:t.cheatExplain,expression:"cheatExplain"}],staticClass:"my-3",attrs:{label:"Please explain",hint:"We are an integrity-based clan.",filled:""}})],1),a("p",[t._v("Tell us a little bit about yourself")]),a("v-textarea",{staticClass:"my-3",attrs:{hint:"We look for people that represent themselves well, and we would\n                like to know who's going to be with us. Who are you?",filled:""}})],1)],1)],1),a("v-layout",{attrs:{row:"",wrap:"","justify-end":""}},[a("v-flex",{attrs:{shrink:"","mr-5":""}},[a("v-btn",{attrs:{"justify-end":""}},[t._v("Submit Application")])],1)],1)],1)],1)])},s=[],o={components:{HeroImage:()=>i.e("chunk-9f65831c").then(i.bind(null,"2b4f"))},data(){return{tagPrefix:"",discordPlaceholder:"",cheatExplain:!1}},computed:{headerClasses(){return{"display-1":this.$vuetify.breakpoint.mdAndDown,"display-2":this.$vuetify.breakpoint.lgAndUp}}}},r=o,n=(i("12b3"),i("2877")),l=i("6544"),u=i.n(l),h=i("8336"),c=i("a523"),d=i("0e8f"),p=i("3206"),m=Object(p["b"])("form").extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>{return t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0})},i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",a=>{a&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))}):i.valid=e(t),i},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const i=this.watchers.find(t=>t._uid===e._uid);i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.$attrs},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}}),g=i("a722"),f=(i("2c64"),i("ba87")),v=i("9d26"),b=i("c37a"),y=i("a9ad"),x=i("4e82"),w=i("5607"),C=i("2b0e"),S=C["a"].extend({name:"rippleable",directives:{ripple:w["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange(){}}}),I=i("7560"),$=i("8547"),V=i("58df"),B=Object(V["a"])(b["a"],S,$["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"accent"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=b["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:t=>{t.preventDefault(),this.onChange()}},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur(){this.isFocused=!1},onChange(){if(this.isDisabled)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const i=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===i&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(){this.isFocused=!0},onKeydown(t){}}}),k=i("80d2");const z=Object(V["a"])(y["a"],S,Object(x["a"])("radioGroup"),I["a"]);var j=z.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,label:String,name:String,id:String,onIcon:{type:String,default:"$vuetify.icons.radioOn"},offIcon:{type:String,default:"$vuetify.icons.radioOff"},readonly:Boolean,value:{default:null}},data:()=>({isFocused:!1}),computed:{classes(){return{"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused,...this.themeClasses,...this.groupClasses}},computedColor(){return B.options.computed.computedColor.call(this)},computedIcon(){return this.isActive?this.onIcon:this.offIcon},computedId(){return b["a"].options.computed.computedId.call(this)},hasLabel:b["a"].options.computed.hasLabel,hasState(){return(this.radioGroup||{}).hasState},isDisabled(){return this.disabled||!!(this.radioGroup||{}).disabled},isReadonly(){return this.readonly||!!(this.radioGroup||{}).readonly},computedName(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||`radio-${this.radioGroup._uid}`},validationState(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput(t){return B.options.methods.genInput.call(this,"radio",t)},genLabel(){return this.hasLabel?this.$createElement(f["a"],{on:{click:t=>{t.preventDefault(),this.onChange()}},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(k["p"])(this,"label")||this.label):null},genRadio(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput({name:this.computedName,value:this.value,...this.$attrs}),this.genRipple(this.setTextColor(this.validationState)),this.$createElement(v["a"],this.setTextColor(this.validationState,{}),this.computedIcon)])},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onChange(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:()=>{}},render(t){const e={staticClass:"v-radio",class:this.classes};return t("div",e,[this.genRadio(),this.genLabel()])}}),_=(i("ec29"),i("3d86"),i("604c"));const O=Object(V["a"])($["a"],_["a"],b["a"]);var D=O.extend({name:"v-radio-group",provide(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:{default:null}},computed:{classes(){return{...b["a"].options.computed.classes.call(this),"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row}}},methods:{genDefaultSlot(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},b["a"].options.methods.genDefaultSlot.call(this))},genInputSlot(){const t=b["a"].options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel(){const t=b["a"].options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="div",t):null},onClick:_["a"].options.methods.onClick}}),A=i("8654");i("1681");const E=Object(V["a"])(A["a"]);var F=E.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...A["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"},genInput(){const t=A["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){A["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),L=Object(n["a"])(r,a,s,!1,null,"16ce44c1",null);e["default"]=L.exports;u()(L,{VBtn:h["a"],VContainer:c["a"],VFlex:d["a"],VForm:m,VLayout:g["a"],VRadio:j,VRadioGroup:D,VTextField:A["a"],VTextarea:F})},a722:function(t,e,i){"use strict";i("20f6");var a=i("e8f2");e["a"]=Object(a["a"])("layout")},a9ad:function(t,e,i){"use strict";var a=i("2b0e"),s=i("d9bd");function o(t){return!!t&&!!t.match(/^(#|(rgb|hsl)a?\()/)}e["a"]=a["a"].extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?(Object(s["b"])("style must be an object",this),e):"string"===typeof e.class?(Object(s["b"])("class must be an object",this),e):(o(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return Object(s["b"])("style must be an object",this),e;if("string"===typeof e.class)return Object(s["b"])("class must be an object",this),e;if(o(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[i,a]=t.toString().trim().split(" ",2);e.class={...e.class,[i+"--text"]:!0},a&&(e.class["text--"+a]=!0)}return e}}})},af2b:function(t,e,i){"use strict";var a=i("2b0e");e["a"]=a["a"].extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},ec29:function(t,e,i){},f5a0:function(t,e,i){}}]);
//# sourceMappingURL=chunk-d059b2c0.06f0fe03.js.map