(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extend-cropper-old-cropper-old"],{"12a4":function(t,a,e){"use strict";e("c975"),e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r={name:"tuiButton",emits:["click","getuserinfo","contact","getphonenumber","error"],behaviors:["wx://form-field-button"],props:{type:{type:String,default:"primary"},shadow:{type:Boolean,default:!1},width:{type:String,default:"100%"},height:{type:String,default:"96rpx"},size:{type:Number,default:32},bold:{type:Boolean,default:!1},margin:{type:String,default:"0"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},link:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},disabledGray:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},formType:{type:String,default:""},openType:{type:String,default:""},index:{type:[Number,String],default:0},preventClick:{type:Boolean,default:!1}},data:function(){return{time:0}},methods:{handleClick:function(){var t=this;if(!this.disabled){if(this.preventClick){if((new Date).getTime()-this.time<=200)return;this.time=(new Date).getTime(),setTimeout((function(){t.time=0}),200)}this.$emit("click",{index:Number(this.index)})}},bindgetuserinfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.detail,e=void 0===a?{}:a;this.$emit("getuserinfo",e)},bindcontact:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.detail,e=void 0===a?{}:a;this.$emit("contact",e)},bindgetphonenumber:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.detail,e=void 0===a?{}:a;this.$emit("getphonenumber",e)},binderror:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.detail,e=void 0===a?{}:a;this.$emit("error",e)},getShadowClass:function(t,a,e){var r="";return a&&"white"!=t&&!e&&(r="tui-shadow-"+t),r},getDisabledClass:function(t,a,e){var r="";if(t&&"white"!=a&&-1==a.indexOf("-")){var i=this.disabledGray?"tui-gray-disabled":"tui-dark-disabled";r=e?"tui-dark-disabled-outline":i}return r},getShapeClass:function(t,a){var e="";return"circle"==t?e=a?"tui-outline-fillet":"tui-fillet":"rightAngle"==t&&(e=a?"tui-outline-rightAngle":"tui-rightAngle"),e},getHoverClass:function(t,a,e){var r="";return t||(r=e?"tui-outline-hover":"tui-"+(a||"primary")+"-hover"),r}}};a.default=r},"1cb9":function(t,a,e){"use strict";var r=e("a3e6"),i=e.n(r);i.a},"274b":function(t,a,e){var r=e("24fb");a=r(!1),a.push([t.i,'.tui-btn-primary[data-v-2e4b074b]{background:#5677fc!important;color:#fff}.tui-shadow-primary[data-v-2e4b074b]{box-shadow:0 %?10?% %?14?% 0 rgba(86,119,252,.2)}.tui-btn-danger[data-v-2e4b074b]{background:#eb0909!important;color:#fff}.tui-shadow-danger[data-v-2e4b074b]{box-shadow:0 %?10?% %?14?% 0 rgba(235,9,9,.2)}.tui-btn-warning[data-v-2e4b074b]{background:#fc872d!important;color:#fff}.tui-shadow-warning[data-v-2e4b074b]{box-shadow:0 %?10?% %?14?% 0 rgba(252,135,45,.2)}.tui-btn-green[data-v-2e4b074b]{background:#07c160!important;color:#fff}.tui-shadow-green[data-v-2e4b074b]{box-shadow:0 %?10?% %?14?% 0 rgba(7,193,96,.2)}.tui-btn-blue[data-v-2e4b074b]{background:#007aff!important;color:#fff}.tui-shadow-blue[data-v-2e4b074b]{box-shadow:0 %?10?% %?14?% 0 rgba(0,122,255,.2)}.tui-btn-white[data-v-2e4b074b]{background:#fff!important;color:#333!important}.tui-btn-gray[data-v-2e4b074b]{background:#bfbfbf!important;color:#fff!important}.tui-btn-black[data-v-2e4b074b]{background:#333!important;color:#fff!important}.tui-btn-brown[data-v-2e4b074b]{background:#ac9157!important;color:#fff!important}.tui-btn-gray-black[data-v-2e4b074b]{background:#f2f2f2!important;color:#333}.tui-btn-gray-primary[data-v-2e4b074b]{background:#f2f2f2!important;color:#5677fc!important}.tui-gray-primary-hover[data-v-2e4b074b]{background:#d9d9d9!important}.tui-btn-gray-green[data-v-2e4b074b]{background:#f2f2f2!important;color:#07c160!important}.tui-gray-green-hover[data-v-2e4b074b]{background:#d9d9d9!important}.tui-btn-gray-danger[data-v-2e4b074b]{background:#f2f2f2!important;color:#eb0909!important}.tui-gray-danger-hover[data-v-2e4b074b]{background:#d9d9d9!important}.tui-btn-gray-warning[data-v-2e4b074b]{background:#f2f2f2!important;color:#fc872d!important}.tui-gray-warning-hover[data-v-2e4b074b]{background:#d9d9d9!important}.tui-shadow-gray[data-v-2e4b074b]{box-shadow:0 %?10?% %?14?% 0 hsla(0,0%,74.9%,.2)}.tui-hover-gray[data-v-2e4b074b]{background:#f7f7f9!important}.tui-black-hover[data-v-2e4b074b]{background:#555!important;color:#e5e5e5!important}.tui-brown-hover[data-v-2e4b074b]{background:#a37f49!important;color:#e5e5e5!important}\n\n/* button start*/.tui-btn[data-v-2e4b074b]{width:100%;position:relative;border:0!important;border-radius:%?6?%;padding-left:0;padding-right:0;overflow:visible;display:flex;align-items:center;justify-content:center}.tui-btn[data-v-2e4b074b]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5) translateZ(0);transform:scale(.5) translateZ(0);box-sizing:border-box;left:0;top:0;border-radius:%?12?%;border:0}.tui-text-bold[data-v-2e4b074b]{font-weight:700}.tui-btn-white[data-v-2e4b074b]::after{border:1px solid #bfbfbf}.tui-white-hover[data-v-2e4b074b]{background:#e5e5e5!important;color:#2e2e2e!important}.tui-dark-disabled[data-v-2e4b074b]{opacity:.6!important;color:#fafbfc!important}.tui-dark-disabled-outline[data-v-2e4b074b]{opacity:.5!important}.tui-gray-disabled[data-v-2e4b074b]{background:#f3f3f3!important;color:#919191!important;box-shadow:none}.tui-outline-hover[data-v-2e4b074b]{opacity:.5}.tui-primary-hover[data-v-2e4b074b]{background:#4a67d6!important;color:#e5e5e5!important}.tui-primary-outline[data-v-2e4b074b]::after{border:1px solid #5677fc!important}.tui-primary-outline[data-v-2e4b074b]{color:#5677fc!important;background:transparent}.tui-danger-hover[data-v-2e4b074b]{background:#c80808!important;color:#e5e5e5!important}.tui-danger-outline[data-v-2e4b074b]{color:#eb0909!important;background:transparent}.tui-danger-outline[data-v-2e4b074b]::after{border:1px solid #eb0909!important}.tui-warning-hover[data-v-2e4b074b]{background:#d67326!important;color:#e5e5e5!important}.tui-warning-outline[data-v-2e4b074b]{color:#fc872d!important;background:transparent}.tui-warning-outline[data-v-2e4b074b]::after{border:1px solid #fc872d!important}.tui-green-hover[data-v-2e4b074b]{background:#06ad56!important;color:#e5e5e5!important}.tui-green-outline[data-v-2e4b074b]{color:#07c160!important;background:transparent}.tui-green-outline[data-v-2e4b074b]::after{border:1px solid #07c160!important}.tui-blue-hover[data-v-2e4b074b]{background:#0062cc!important;color:#e5e5e5!important}.tui-blue-outline[data-v-2e4b074b]{color:#007aff!important;background:transparent}.tui-blue-outline[data-v-2e4b074b]::after{border:1px solid #007aff!important}\n.tui-btn-gradual[data-v-2e4b074b]{background:linear-gradient(90deg,#ff5926,#f00e2c)!important;color:#fff!important}.tui-shadow-gradual[data-v-2e4b074b]{box-shadow:0 %?10?% %?14?% 0 rgba(235,9,9,.15)}\n.tui-gray-hover[data-v-2e4b074b]{background:#a3a3a3!important;color:#898989}\n.tui-gradual-hover[data-v-2e4b074b]{background:linear-gradient(90deg,#d74620,#cd1225)!important;color:#fff!important}\n.tui-gray-outline[data-v-2e4b074b]{color:#999!important;background:transparent!important}.tui-white-outline[data-v-2e4b074b]{color:#fff!important;background:transparent!important}.tui-black-outline[data-v-2e4b074b]{background:transparent!important;color:#333!important}.tui-gray-outline[data-v-2e4b074b]::after{border:1px solid #ccc!important}.tui-white-outline[data-v-2e4b074b]::after{border:1px solid #fff!important}.tui-black-outline[data-v-2e4b074b]::after{border:1px solid #333!important}.tui-brown-outline[data-v-2e4b074b]{color:#ac9157!important;background:transparent}.tui-brown-outline[data-v-2e4b074b]::after{border:1px solid #ac9157!important}\n\n/*圆角 */.tui-fillet[data-v-2e4b074b]{border-radius:%?50?%}.tui-btn-white.tui-fillet[data-v-2e4b074b]::after{border-radius:%?98?%}.tui-outline-fillet[data-v-2e4b074b]::after{border-radius:%?98?%}\n\n/*平角*/.tui-rightAngle[data-v-2e4b074b]{border-radius:0}.tui-btn-white.tui-rightAngle[data-v-2e4b074b]::after{border-radius:0}.tui-outline-rightAngle[data-v-2e4b074b]::after{border-radius:0}.tui-btn__link[data-v-2e4b074b]::after{border:0!important}',""]),t.exports=a},"3f40":function(t,a,e){"use strict";var r=e("cf95"),i=e.n(r);i.a},6354:function(t,a,e){var r=e("24fb");a=r(!1),a.push([t.i,".container[data-v-198869ef]{padding:%?20?% 0 %?120?% 0;box-sizing:border-box}.header[data-v-198869ef]{padding:%?80?% %?90?% %?60?% %?90?%;box-sizing:border-box}.title[data-v-198869ef]{font-size:%?34?%;color:#333;font-weight:500}.sub-title[data-v-198869ef]{font-size:%?24?%;color:#7a7a7a;padding-top:%?18?%}.tui-btn-box[data-v-198869ef]{width:100%;padding:%?10?% %?40?%;box-sizing:border-box}",""]),t.exports=a},"6bf2":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return r}));var r={tuiButton:e("cdea").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"header"},[e("v-uni-view",{staticClass:"title"},[t._v("Image Cropper")]),e("v-uni-view",{staticClass:"sub-title"},[t._v("图片裁剪：可设置裁剪框宽高，边缘线颜色，锁定裁剪框大小，是否可触摸旋转等")])],1),e("v-uni-view",{staticClass:"tui-btn-box"},[e("tui-button",{attrs:{margin:"36rpx 0 0",type:"white",shape:"circle"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.chooseImage.apply(void 0,arguments)}}},[t._v("组件默认使用")]),e("tui-button",{attrs:{margin:"36rpx 0 0",type:"white",shape:"circle"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.customCropper.apply(void 0,arguments)}}},[t._v("自定义操作栏+详细使用")])],1)],1)},o=[]},"7a3e":function(t,a,e){"use strict";e.r(a);var r=e("6bf2"),i=e("c39c");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("1cb9");var n,d=e("f0c5"),b=Object(d["a"])(i["default"],r["b"],r["c"],!1,null,"198869ef",null,!1,r["a"],n);a["default"]=b.exports},a3e6:function(t,a,e){var r=e("6354");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=e("4f06").default;i("4f417fe4",r,!0,{sourceMap:!1,shadowMode:!1})},b4be:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r={data:function(){return{}},methods:{chooseImage:function(){var t=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){var e=a.tempFilePaths[0];t.tui.href("../cropper-default-old/cropper-default-old?src="+e)}})},customCropper:function(){this.tui.href("../cropper-custom-old/cropper-custom-old")}}};a.default=r},bf95:function(t,a,e){"use strict";e.r(a);var r=e("12a4"),i=e.n(r);for(var o in r)"default"!==o&&function(t){e.d(a,t,(function(){return r[t]}))}(o);a["default"]=i.a},c39c:function(t,a,e){"use strict";e.r(a);var r=e("b4be"),i=e.n(r);for(var o in r)"default"!==o&&function(t){e.d(a,t,(function(){return r[t]}))}(o);a["default"]=i.a},cdea:function(t,a,e){"use strict";e.r(a);var r=e("d32b"),i=e("bf95");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("3f40");var n,d=e("f0c5"),b=Object(d["a"])(i["default"],r["b"],r["c"],!1,null,"2e4b074b",null,!1,r["a"],n);a["default"]=b.exports},cf95:function(t,a,e){var r=e("274b");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=e("4f06").default;i("e1b6fff6",r,!0,{sourceMap:!1,shadowMode:!1})},d32b:function(t,a,e){"use strict";var r;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return r}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-button",{staticClass:"tui-btn",class:[t.plain?"tui-"+t.type+"-outline":"tui-btn-"+(t.type||"primary"),t.getDisabledClass(t.disabled,t.type,t.plain),t.getShapeClass(t.shape,t.plain),t.getShadowClass(t.type,t.shadow,t.plain),t.bold?"tui-text-bold":"",t.link?"tui-btn__link":""],style:{width:t.width,height:t.height,lineHeight:t.height,fontSize:t.size+"rpx",margin:t.margin},attrs:{"hover-class":t.getHoverClass(t.disabled,t.type,t.plain),loading:t.loading,"form-type":t.formType,"open-type":t.openType,disabled:t.disabled},on:{getuserinfo:function(a){arguments[0]=a=t.$handleEvent(a),t.bindgetuserinfo.apply(void 0,arguments)},getphonenumber:function(a){arguments[0]=a=t.$handleEvent(a),t.bindgetphonenumber.apply(void 0,arguments)},contact:function(a){arguments[0]=a=t.$handleEvent(a),t.bindcontact.apply(void 0,arguments)},error:function(a){arguments[0]=a=t.$handleEvent(a),t.binderror.apply(void 0,arguments)},click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},o=[]}}]);