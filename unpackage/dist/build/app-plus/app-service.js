if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){const t=this.constructor;return this.then((n=>t.resolve(e()).then((()=>n))),(n=>t.resolve(e()).then((()=>{throw n}))))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){const e=uni.requireGlobal();ArrayBuffer=e.ArrayBuffer,Int8Array=e.Int8Array,Uint8Array=e.Uint8Array,Uint8ClampedArray=e.Uint8ClampedArray,Int16Array=e.Int16Array,Uint16Array=e.Uint16Array,Int32Array=e.Int32Array,Uint32Array=e.Uint32Array,Float32Array=e.Float32Array,Float64Array=e.Float64Array,BigInt64Array=e.BigInt64Array,BigUint64Array=e.BigUint64Array}uni.restoreGlobal&&uni.restoreGlobal(Vue,weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),function(e,t){"use strict";const n=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const r=n({data:()=>({})},[["render",function(t,n,r,a,o,i){return e.openBlock(),e.createElementBlock("view")}]]);const a=n({data:()=>({})},[["render",function(t,n,r,a,o,i){return e.openBlock(),e.createElementBlock("view")}]]);const o=n({data:()=>({})},[["render",function(t,n,r,a,o,i){return e.openBlock(),e.createElementBlock("view")}]]);const i=n({name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick(e){this.$emit("click",e)}}},[["render",function(t,n,r,a,o,i){return e.openBlock(),e.createElementBlock("view",{class:e.normalizeClass(["uni-card",{"uni-card--full":r.isFull,"uni-card--shadow":r.isShadow,"uni-card--border":r.border}]),style:e.normalizeStyle({margin:r.isFull?0:r.margin,padding:r.spacing,"box-shadow":r.isShadow?r.shadow:""})},[e.renderSlot(t.$slots,"cover",{},(()=>[r.cover?(e.openBlock(),e.createElementBlock("view",{key:0,class:"uni-card__cover"},[e.createElementVNode("image",{class:"uni-card__cover-image",mode:"widthFix",onClick:n[0]||(n[0]=e=>i.onClick("cover")),src:r.cover},null,8,["src"])])):e.createCommentVNode("",!0)]),!0),e.renderSlot(t.$slots,"title",{},(()=>[r.title||r.extra?(e.openBlock(),e.createElementBlock("view",{key:0,class:"uni-card__header"},[e.createElementVNode("view",{class:"uni-card__header-box",onClick:n[1]||(n[1]=e=>i.onClick("title"))},[r.thumbnail?(e.openBlock(),e.createElementBlock("view",{key:0,class:"uni-card__header-avatar"},[e.createElementVNode("image",{class:"uni-card__header-avatar-image",src:r.thumbnail,mode:"aspectFit"},null,8,["src"])])):e.createCommentVNode("",!0),e.createElementVNode("view",{class:"uni-card__header-content"},[e.createElementVNode("text",{class:"uni-card__header-content-title uni-ellipsis"},e.toDisplayString(r.title),1),r.title&&r.subTitle?(e.openBlock(),e.createElementBlock("text",{key:0,class:"uni-card__header-content-subtitle uni-ellipsis"},e.toDisplayString(r.subTitle),1)):e.createCommentVNode("",!0)])]),e.createElementVNode("view",{class:"uni-card__header-extra",onClick:n[2]||(n[2]=e=>i.onClick("extra"))},[e.renderSlot(t.$slots,"extra",{},(()=>[e.createElementVNode("text",{class:"uni-card__header-extra-text"},e.toDisplayString(r.extra),1)]),!0)])])):e.createCommentVNode("",!0)]),!0),e.createElementVNode("view",{class:"uni-card__content",style:e.normalizeStyle({padding:r.padding}),onClick:n[3]||(n[3]=e=>i.onClick("content"))},[e.renderSlot(t.$slots,"default",{},void 0,!0)],4),e.createElementVNode("view",{class:"uni-card__actions",onClick:n[4]||(n[4]=e=>i.onClick("actions"))},[e.renderSlot(t.$slots,"actions",{},void 0,!0)])],6)}],["__scopeId","data-v-c01ba7f3"]]);function l(e,t,...n){uni.__log__?uni.__log__(e,t,...n):console[e].apply(console,[...n,t])}const c=n({data:()=>({})},[["render",function(n,r,a,o,l,c){const s=(d=e.resolveDynamicComponent("uni-card"),u=i,t.isString(d)?u:d);var d,u;return e.openBlock(),e.createElementBlock("view",null,[e.createVNode(s),e.createVNode(s)])}]]);__definePage("pages/schedule/schedule",r),__definePage("pages/AIcoach/AIcoach",a),__definePage("pages/social/social",o),__definePage("pages/user/user",c);const s={onLaunch:function(){l("warn","at App.vue:4","当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！"),l("log","at App.vue:5","App Launch")},onShow:function(){l("log","at App.vue:8","App Show")},onHide:function(){l("log","at App.vue:11","App Hide")}};const{app:d,Vuex:u,Pinia:p}={app:e.createVueApp(s)};uni.Vuex=u,uni.Pinia=p,d.provide("__globalStyles",__uniConfig.styles),d._component.mpType="app",d._component.render=()=>{},d.mount("#app")}(Vue,uni.VueShared);