(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-indexList-indexList"],{"0353":function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={tuiButton:a("cdea").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"page"},[a("v-uni-scroll-view",{staticClass:"scrollList",style:{height:t.winHeight+"px"},attrs:{"scroll-y":!0,"scroll-into-view":t.scrollViewId}},[a("v-uni-view",{staticClass:"search-bar"},[a("v-uni-view",{staticClass:"search-bar-form"},[a("v-uni-view",{staticClass:"search-bar-box"},[a("v-uni-icon",{staticClass:"icon-search-in-box",attrs:{type:"search",size:16}}),a("v-uni-input",{staticClass:"search-bar-input",attrs:{"confirm-type":"search",placeholder:"请输入搜索关键词","placeholder-class":"phcolor",value:t.inputVal},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputTyping.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.searchCity.apply(void 0,arguments)}}}),t.inputShowed?a("v-uni-icon",{attrs:{type:"clear",size:15},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearInput.apply(void 0,arguments)}}}):t._e()],1)],1),a("tui-button",{attrs:{width:"120rpx",height:"58rpx",size:24,shape:"circle"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.searchCity.apply(void 0,arguments)}}},[t._v("搜索")])],1),t.inputShowed?a("v-uni-view",{staticClass:"tui-list search-result"},t._l(t.searchResult,(function(e,i){return a("v-uni-view",{key:i,staticClass:"tui-list-cell",attrs:{"hover-class":"tui-list-cell-hover","data-name":e,"hover-stay-time":150},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectCity.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"tui-list-cell-navigate"},[a("v-uni-image",{staticClass:"img",attrs:{src:"/static/images/news/"+(i%2===0&&0!==i?"avatar_2.jpg":"avatar_1.jpg")}}),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"sub-title"},[t._v(t._s(e.mobile))])],1)],1)],1)})),1):t._e(),t.inputShowed?t._e():a("v-uni-view",[a("v-uni-view",{staticClass:"tui-list city-list"},[t._l(t.lists,(function(e,i){return e.data[0]?[a("v-uni-view",{key:i+"_0",staticClass:"tui-list-cell-divider",attrs:{id:e.letter}},[t._v(t._s(e.letter))]),t._l(e.data,(function(o,n){return a("v-uni-view",{key:n+"_"+i+"_1",staticClass:"tui-list-cell",attrs:{"hover-class":"tui-list-cell-hover","data-name":o.name,"hover-stay-time":150},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectCity.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"tui-list-cell-navigate",class:[e.data.length-1==n?"last":""]},[a("v-uni-image",{staticClass:"img",attrs:{src:"/static/images/news/"+(n%2===0&&0!==n?"avatar_1.jpg":"avatar_2.jpg")}}),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(o.name))]),a("v-uni-view",{staticClass:"sub-title"},[t._v(t._s(o.mobile))])],1)],1)],1)}))]:t._e()}))],2)],1)],1),t.inputShowed?t._e():a("v-uni-view",{staticClass:"tui-indexed-list-bar",style:{height:t.indexBarHeight+"px"},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchStart.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.touchMove.apply(void 0,arguments)},touchend:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.touchEnd.apply(void 0,arguments)},touchcancel:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.touchCancel.apply(void 0,arguments)}}},t._l(t.lists,(function(e,i){return a("v-uni-text",{key:i,staticClass:"tui-indexed-list-text",style:{height:t.indexBarItemHeight+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick(i)}}},[t._v(t._s("well"==e.letter?"#":e.letter))])})),1),t.touchmove&&t.lists[t.touchmoveIndex].letter?a("v-uni-view",{staticClass:"tui-indexed-list-alert"},[t._v(t._s("well"==t.lists[t.touchmoveIndex].letter?"#":t.lists[t.touchmoveIndex].letter))]):t._e()],1)},n=[]},"12a4":function(t,e,a){"use strict";a("c975"),a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"tuiButton",emits:["click","getuserinfo","contact","getphonenumber","error"],behaviors:["wx://form-field-button"],props:{type:{type:String,default:"primary"},shadow:{type:Boolean,default:!1},width:{type:String,default:"100%"},height:{type:String,default:"96rpx"},size:{type:Number,default:32},bold:{type:Boolean,default:!1},margin:{type:String,default:"0"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},link:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},disabledGray:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},formType:{type:String,default:""},openType:{type:String,default:""},index:{type:[Number,String],default:0},preventClick:{type:Boolean,default:!1}},data:function(){return{time:0}},methods:{handleClick:function(){var t=this;if(!this.disabled){if(this.preventClick){if((new Date).getTime()-this.time<=200)return;this.time=(new Date).getTime(),setTimeout((function(){t.time=0}),200)}this.$emit("click",{index:Number(this.index)})}},bindgetuserinfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,a=void 0===e?{}:e;this.$emit("getuserinfo",a)},bindcontact:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,a=void 0===e?{}:e;this.$emit("contact",a)},bindgetphonenumber:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,a=void 0===e?{}:e;this.$emit("getphonenumber",a)},binderror:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,a=void 0===e?{}:e;this.$emit("error",a)},getShadowClass:function(t,e,a){var i="";return e&&"white"!=t&&!a&&(i="tui-shadow-"+t),i},getDisabledClass:function(t,e,a){var i="";if(t&&"white"!=e&&-1==e.indexOf("-")){var o=this.disabledGray?"tui-gray-disabled":"tui-dark-disabled";i=a?"tui-dark-disabled-outline":o}return i},getShapeClass:function(t,e){var a="";return"circle"==t?a=e?"tui-outline-fillet":"tui-fillet":"rightAngle"==t&&(a=e?"tui-outline-rightAngle":"tui-rightAngle"),a},getHoverClass:function(t,e,a){var i="";return t||(i=a?"tui-outline-hover":"tui-"+(e||"primary")+"-hover"),i}}};e.default=i},"274b":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.tui-btn-primary[data-v-2e4b074b]{background:#5677fc!important;color:#fff}.tui-shadow-primary[data-v-2e4b074b]{box-shadow:0 %?10?% %?14?% 0 rgba(86,119,252,.2)}.tui-btn-danger[data-v-2e4b074b]{background:#eb0909!important;color:#fff}.tui-shadow-danger[data-v-2e4b074b]{box-shadow:0 %?10?% %?14?% 0 rgba(235,9,9,.2)}.tui-btn-warning[data-v-2e4b074b]{background:#fc872d!important;color:#fff}.tui-shadow-warning[data-v-2e4b074b]{box-shadow:0 %?10?% %?14?% 0 rgba(252,135,45,.2)}.tui-btn-green[data-v-2e4b074b]{background:#07c160!important;color:#fff}.tui-shadow-green[data-v-2e4b074b]{box-shadow:0 %?10?% %?14?% 0 rgba(7,193,96,.2)}.tui-btn-blue[data-v-2e4b074b]{background:#007aff!important;color:#fff}.tui-shadow-blue[data-v-2e4b074b]{box-shadow:0 %?10?% %?14?% 0 rgba(0,122,255,.2)}.tui-btn-white[data-v-2e4b074b]{background:#fff!important;color:#333!important}.tui-btn-gray[data-v-2e4b074b]{background:#bfbfbf!important;color:#fff!important}.tui-btn-black[data-v-2e4b074b]{background:#333!important;color:#fff!important}.tui-btn-brown[data-v-2e4b074b]{background:#ac9157!important;color:#fff!important}.tui-btn-gray-black[data-v-2e4b074b]{background:#f2f2f2!important;color:#333}.tui-btn-gray-primary[data-v-2e4b074b]{background:#f2f2f2!important;color:#5677fc!important}.tui-gray-primary-hover[data-v-2e4b074b]{background:#d9d9d9!important}.tui-btn-gray-green[data-v-2e4b074b]{background:#f2f2f2!important;color:#07c160!important}.tui-gray-green-hover[data-v-2e4b074b]{background:#d9d9d9!important}.tui-btn-gray-danger[data-v-2e4b074b]{background:#f2f2f2!important;color:#eb0909!important}.tui-gray-danger-hover[data-v-2e4b074b]{background:#d9d9d9!important}.tui-btn-gray-warning[data-v-2e4b074b]{background:#f2f2f2!important;color:#fc872d!important}.tui-gray-warning-hover[data-v-2e4b074b]{background:#d9d9d9!important}.tui-shadow-gray[data-v-2e4b074b]{box-shadow:0 %?10?% %?14?% 0 hsla(0,0%,74.9%,.2)}.tui-hover-gray[data-v-2e4b074b]{background:#f7f7f9!important}.tui-black-hover[data-v-2e4b074b]{background:#555!important;color:#e5e5e5!important}.tui-brown-hover[data-v-2e4b074b]{background:#a37f49!important;color:#e5e5e5!important}\n\n/* button start*/.tui-btn[data-v-2e4b074b]{width:100%;position:relative;border:0!important;border-radius:%?6?%;padding-left:0;padding-right:0;overflow:visible;display:flex;align-items:center;justify-content:center}.tui-btn[data-v-2e4b074b]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5) translateZ(0);transform:scale(.5) translateZ(0);box-sizing:border-box;left:0;top:0;border-radius:%?12?%;border:0}.tui-text-bold[data-v-2e4b074b]{font-weight:700}.tui-btn-white[data-v-2e4b074b]::after{border:1px solid #bfbfbf}.tui-white-hover[data-v-2e4b074b]{background:#e5e5e5!important;color:#2e2e2e!important}.tui-dark-disabled[data-v-2e4b074b]{opacity:.6!important;color:#fafbfc!important}.tui-dark-disabled-outline[data-v-2e4b074b]{opacity:.5!important}.tui-gray-disabled[data-v-2e4b074b]{background:#f3f3f3!important;color:#919191!important;box-shadow:none}.tui-outline-hover[data-v-2e4b074b]{opacity:.5}.tui-primary-hover[data-v-2e4b074b]{background:#4a67d6!important;color:#e5e5e5!important}.tui-primary-outline[data-v-2e4b074b]::after{border:1px solid #5677fc!important}.tui-primary-outline[data-v-2e4b074b]{color:#5677fc!important;background:transparent}.tui-danger-hover[data-v-2e4b074b]{background:#c80808!important;color:#e5e5e5!important}.tui-danger-outline[data-v-2e4b074b]{color:#eb0909!important;background:transparent}.tui-danger-outline[data-v-2e4b074b]::after{border:1px solid #eb0909!important}.tui-warning-hover[data-v-2e4b074b]{background:#d67326!important;color:#e5e5e5!important}.tui-warning-outline[data-v-2e4b074b]{color:#fc872d!important;background:transparent}.tui-warning-outline[data-v-2e4b074b]::after{border:1px solid #fc872d!important}.tui-green-hover[data-v-2e4b074b]{background:#06ad56!important;color:#e5e5e5!important}.tui-green-outline[data-v-2e4b074b]{color:#07c160!important;background:transparent}.tui-green-outline[data-v-2e4b074b]::after{border:1px solid #07c160!important}.tui-blue-hover[data-v-2e4b074b]{background:#0062cc!important;color:#e5e5e5!important}.tui-blue-outline[data-v-2e4b074b]{color:#007aff!important;background:transparent}.tui-blue-outline[data-v-2e4b074b]::after{border:1px solid #007aff!important}\n.tui-btn-gradual[data-v-2e4b074b]{background:linear-gradient(90deg,#ff5926,#f00e2c)!important;color:#fff!important}.tui-shadow-gradual[data-v-2e4b074b]{box-shadow:0 %?10?% %?14?% 0 rgba(235,9,9,.15)}\n.tui-gray-hover[data-v-2e4b074b]{background:#a3a3a3!important;color:#898989}\n.tui-gradual-hover[data-v-2e4b074b]{background:linear-gradient(90deg,#d74620,#cd1225)!important;color:#fff!important}\n.tui-gray-outline[data-v-2e4b074b]{color:#999!important;background:transparent!important}.tui-white-outline[data-v-2e4b074b]{color:#fff!important;background:transparent!important}.tui-black-outline[data-v-2e4b074b]{background:transparent!important;color:#333!important}.tui-gray-outline[data-v-2e4b074b]::after{border:1px solid #ccc!important}.tui-white-outline[data-v-2e4b074b]::after{border:1px solid #fff!important}.tui-black-outline[data-v-2e4b074b]::after{border:1px solid #333!important}.tui-brown-outline[data-v-2e4b074b]{color:#ac9157!important;background:transparent}.tui-brown-outline[data-v-2e4b074b]::after{border:1px solid #ac9157!important}\n\n/*圆角 */.tui-fillet[data-v-2e4b074b]{border-radius:%?50?%}.tui-btn-white.tui-fillet[data-v-2e4b074b]::after{border-radius:%?98?%}.tui-outline-fillet[data-v-2e4b074b]::after{border-radius:%?98?%}\n\n/*平角*/.tui-rightAngle[data-v-2e4b074b]{border-radius:0}.tui-btn-white.tui-rightAngle[data-v-2e4b074b]::after{border-radius:0}.tui-outline-rightAngle[data-v-2e4b074b]::after{border-radius:0}.tui-btn__link[data-v-2e4b074b]::after{border:0!important}',""]),t.exports=e},"27fa":function(t,e,a){"use strict";var i=a("67b5"),o=a.n(i);o.a},"2f7d":function(t,e,a){"use strict";a.r(e);var i=a("0353"),o=a("8fcb");for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("27fa");var r,d=a("f0c5"),l=Object(d["a"])(o["default"],i["b"],i["c"],!1,null,"46bc0f20",null,!1,i["a"],r);e["default"]=l.exports},"3f40":function(t,e,a){"use strict";var i=a("cf95"),o=a.n(i);o.a},"67b5":function(t,e,a){var i=a("9533");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("2564f270",i,!0,{sourceMap:!1,shadowMode:!1})},"850c":function(t,e,a){"use strict";var i=a("4ea4");a("4160"),a("c975"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("a472")),n={data:function(){return{lists:[],touchmove:!1,touchmoveIndex:-1,titleHeight:0,indexBarHeight:0,indexBarItemHeight:0,scrollViewId:"",winHeight:0,inputShowed:!1,inputVal:"",searchResult:[]}},onLoad:function(t){var e=this;setTimeout((function(){uni.getSystemInfo({success:function(t){var a=t.windowHeight,i=a-uni.upx2px(204);e.winHeight=a,e.indexBarHeight=i,e.indexBarItemHeight=i/25,e.titleHeight=uni.upx2px(128),e.lists=o.default.list}})}),50)},methods:{clearInput:function(){this.inputVal="",this.inputShowed=!1,this.searchResult=[],uni.hideKeyboard()},inputTyping:function(t){this.inputVal=t.detail.value},searchCity:function(){var t=this;if(this.inputVal){var e=[];o.default.list.forEach((function(a,i){a.data.forEach((function(a,i){-1!==a.keyword.indexOf(t.inputVal.toLocaleUpperCase())&&e.push({name:a.name,mobile:a.mobile})}))})),this.inputShowed=!0,this.searchResult=e}else this.tui.toast("请输入搜索关键词")},selectCity:function(t){},touchStart:function(t){this.touchmove=!0;var e=t.touches[0].pageY,a=Math.floor((e-this.titleHeight)/this.indexBarItemHeight),i=this.lists[a];i&&(this.scrollViewId=i.letter,this.touchmoveIndex=a)},touchMove:function(t){var e=t.touches[0].pageY,a=Math.floor((e-this.titleHeight)/this.indexBarItemHeight),i=this.lists[a];i&&(this.scrollViewId=i.letter,this.touchmoveIndex=a)},touchEnd:function(){this.touchmove=!1,this.touchmoveIndex=-1},touchCancel:function(){this.touchmove=!1,this.touchmoveIndex=-1},handleClick:function(t){if(void 0!==t&&!this.touchmove){var e=this.lists[t];e&&(this.scrollViewId=e.letter,this.touchmoveIndex=t)}}}};e.default=n},"8fcb":function(t,e,a){"use strict";a.r(e);var i=a("850c"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},9533:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'uni-page-body[data-v-46bc0f20]{height:100%;overflow:hidden}.page[data-v-46bc0f20]{height:100%;overflow:hidden}.scrollList[data-v-46bc0f20]{flex:1}.search-bar[data-v-46bc0f20]{display:flex;align-items:center;position:relative;padding:%?30?% %?30?% %?30?%;background-color:#fff\n\t/* box-shadow: 0 2px 2px #ccc;*/}.search-bar-form[data-v-46bc0f20]{flex:1;position:relative;border-radius:%?32?%;background:#f2f5f7;margin-right:%?20?%}.search-bar-box[data-v-46bc0f20]{display:flex;align-items:center;position:relative;padding-left:%?20?%;padding-right:%?20?%;height:%?64?%;z-index:1}.search-bar-input[data-v-46bc0f20]{line-height:normal;width:100%;padding-left:%?20?%;font-size:%?30?%;color:#333;background:#f2f5f7}.phcolor[data-v-46bc0f20]{font-size:%?30?%}.icon-search[data-v-46bc0f20]{position:relative;height:%?26?%;margin-right:%?20?%;font-size:inherit}.cancel-btn[data-v-46bc0f20]{padding-left:%?30?%}.btn-primary[data-v-46bc0f20]{height:%?62?%;width:%?122?%;font-size:%?30?%;line-height:%?62?%;margin-left:%?30?%}.search-result[data-v-46bc0f20]::before{display:none}.search-result[data-v-46bc0f20]::after{display:none}.tui-list-cell[data-v-46bc0f20]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%}.tui-list-cell-hover[data-v-46bc0f20]{background-color:#eee!important}.tui-list-cell-navigate[data-v-46bc0f20]{width:100%;position:relative;padding:%?25?% 0 %?25?% %?30?%;font-size:%?28?%;color:#333;display:flex;align-items:center}.tui-list-cell-navigate[data-v-46bc0f20]::after{content:"";position:absolute;border-bottom:%?1?% solid #eaeef1;-webkit-transform:scaleY(.5);transform:scaleY(.5);bottom:0;right:0;left:%?150?%}.img[data-v-46bc0f20]{width:%?120?%;height:%?120?%;border-radius:50%}.content[data-v-46bc0f20]{width:80%;padding-left:%?30?%}.title[data-v-46bc0f20]{width:80%;font-size:%?34?%;padding-bottom:%?10?%;color:#333;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.sub-title[data-v-46bc0f20]{width:80%;color:#7a7a7a;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:%?28?%}.tui-list[data-v-46bc0f20]{background-color:#fff;position:relative;width:100%;display:flex;flex-direction:column;padding-bottom:env(safe-area-inset-bottom)}.tui-list-cell-divider[data-v-46bc0f20]{height:%?66?%;padding-left:%?30?%;font-size:%?26?%;color:#999;background:#f2f5f7;padding:0 %?30?%;display:flex;align-items:center}.tui-indexed-list-bar[data-v-46bc0f20]{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;z-index:9999;position:absolute;top:%?132?%;right:0;padding-right:%?10?%;width:%?44?%}.tui-indexed-list-text[data-v-46bc0f20]{font-size:%?22?%}.tui-indexed-list-bar.active[data-v-46bc0f20]{background-color:#c8c8c8}.tui-indexed-list-alert[data-v-46bc0f20]{position:absolute;z-index:20;width:%?120?%;height:%?120?%;right:%?90?%;top:50%;margin-top:%?-60?%;border-radius:%?16?%;text-align:center;line-height:%?120?%;font-size:%?50?%;color:#fff;background-color:rgba(0,0,0,.5)}',""]),t.exports=e},a472:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={list:[{letter:"A",data:[{name:"阿拉斯加",mobile:"13588889999",keyword:"阿拉斯加ABA13588889999"},{name:"阿克苏",mobile:"0551-4386721",keyword:"阿克苏AKESU0551-4386721"},{name:"阿拉善",mobile:"4008009100",keyword:"阿拉善ALASHAN4008009100"},{name:"阿勒泰",mobile:"13588889999",keyword:"阿勒泰ALETAI13588889999"},{name:"阿里",mobile:"13588889999",keyword:"阿里ALI13588889999"},{name:"安阳",mobile:"13588889999",keyword:"13588889999安阳ANYANG"}]},{letter:"B",data:[{name:"白城",mobile:"该主子没有留电话~",keyword:"白城BAICHENG"},{name:"白山",mobile:"13588889999",keyword:"白山BAISHAN13588889999"},{name:"白银",mobile:"13588889999",keyword:"白银BAIYIN13588889999"},{name:"保定",mobile:"13588889999",keyword:"保定BAODING13588889999"}]},{letter:"C",data:[{name:"沧州",mobile:"13588889999",keyword:"沧州CANGZHOU13588889999"},{name:"长春",mobile:"13588889999",keyword:"长春CHANGCHUN13588889999"}]},{letter:"D",data:[{name:"大理",mobile:"13588889999",keyword:"大理DALI13588889999"},{name:"大连",mobile:"13588889999",keyword:"大连DALIAN13588889999"}]},{letter:"E",data:[{name:"鄂尔多斯",mobile:"13588889999",keyword:"鄂尔多斯EERDUOSI13588889999"},{name:"恩施",mobile:"13588889999",keyword:"恩施ENSHI13588889999"},{name:"鄂州",mobile:"13588889999",keyword:"鄂州EZHOU13588889999"}]},{letter:"F",data:[{name:"防城港",mobile:"该主子没有留电话~",keyword:"防城港FANGCHENGGANG"},{name:"抚顺",mobile:"13588889999",keyword:"抚顺FUSHUN13588889999"},{name:"阜新",mobile:"13588889999",keyword:"阜新FUXIN13588889999"},{name:"阜阳",mobile:"13588889999",keyword:"阜阳FUYANG13588889999"},{name:"抚州",mobile:"13588889999",keyword:"抚州FUZHOU13588889999"},{name:"福州",mobile:"13588889999",keyword:"福州FUZHOU13588889999"}]},{letter:"G",data:[{name:"甘南",mobile:"13588889999",keyword:"甘南GANNAN13588889999"},{name:"赣州",mobile:"13588889999",keyword:"赣州GANZHOU13588889999"},{name:"甘孜",mobile:"13588889999",keyword:"甘孜GANZI13588889999"}]},{letter:"H",data:[{name:"哈尔滨",mobile:"13588889999",keyword:"哈尔滨HAERBIN13588889999"},{name:"海北",mobile:"13588889999",keyword:"海北HAIBEI13588889999"},{name:"海东",mobile:"13588889999",keyword:"海东HAIDONG13588889999"},{name:"海口",mobile:"13588889999",keyword:"海口HAIKOU13588889999"}]},{letter:"I",data:[{name:"ice",mobile:"13588889999",keyword:"佳木斯JIAMUSI13588889999"}]},{letter:"J",data:[{name:"佳木斯",mobile:"13588889999",keyword:"佳木斯JIAMUSI13588889999"},{name:"吉安",mobile:"13588889999",keyword:"吉安JIAN13588889999"},{name:"江门",mobile:"13588889999",keyword:"江门JIANGMEN13588889999"}]},{letter:"K",data:[{name:"开封",mobile:"13588889999",keyword:"开封KAIFENG13588889999"},{name:"喀什",mobile:"13588889999",keyword:"喀什KASHI13588889999"},{name:"克拉玛依",mobile:"13588889999",keyword:"克拉玛依KELAMAYI13588889999"}]},{letter:"L",data:[{name:"来宾",mobile:"13588889999",keyword:"来宾LAIBIN13588889999"},{name:"兰州",mobile:"13588889999",keyword:"兰州LANZHOU13588889999"},{name:"拉萨",mobile:"13588889999",keyword:"拉萨LASA13588889999"},{name:"乐山",mobile:"13588889999",keyword:"乐山LESHAN13588889999"},{name:"凉山",mobile:"13588889999",keyword:"凉山LIANGSHAN13588889999"},{name:"连云港",mobile:"13588889999",keyword:"连云港LIANYUNGANG13588889999"},{name:"聊城",mobile:"18322223333",keyword:"聊城LIAOCHENG18322223333"},{name:"辽阳",mobile:"18322223333",keyword:"辽阳LIAOYANG18322223333"},{name:"辽源",mobile:"18322223333",keyword:"辽源LIAOYUAN18322223333"},{name:"丽江",mobile:"18322223333",keyword:"丽江LIJIANG18322223333"},{name:"临沧",mobile:"18322223333",keyword:"临沧LINCANG18322223333"},{name:"临汾",mobile:"18322223333",keyword:"临汾LINFEN18322223333"},{name:"临夏",mobile:"18322223333",keyword:"临夏LINXIA18322223333"},{name:"临沂",mobile:"18322223333",keyword:"临沂LINYI18322223333"},{name:"林芝",mobile:"18322223333",keyword:"林芝LINZHI18322223333"},{name:"丽水",mobile:"18322223333",keyword:"丽水LISHUI18322223333"}]},{letter:"M",data:[{name:"眉山",mobile:"15544448888",keyword:"眉山MEISHAN15544448888"},{name:"梅州",mobile:"15544448888",keyword:"梅州MEIZHOU15544448888"},{name:"绵阳",mobile:"15544448888",keyword:"绵阳MIANYANG15544448888"},{name:"牡丹江",mobile:"15544448888",keyword:"牡丹江MUDANJIANG15544448888"}]},{letter:"N",data:[{name:"南昌",mobile:"15544448888",keyword:"南昌NANCHANG15544448888"},{name:"南充",mobile:"15544448888",keyword:"南充NANCHONG15544448888"},{name:"南京",mobile:"15544448888",keyword:"南京NANJING15544448888"},{name:"南宁",mobile:"15544448888",keyword:"南宁NANNING15544448888"},{name:"南平",mobile:"15544448888",keyword:"南平NANPING15544448888"}]},{letter:"O",data:[{name:"欧阳",mobile:"15544448888",keyword:"欧阳ouyang15544448888"}]},{letter:"P",data:[{name:"盘锦",mobile:"15544448888",keyword:"盘锦PANJIN15544448888"},{name:"攀枝花",mobile:"15544448888",keyword:"攀枝花PANZHIHUA15544448888"},{name:"平顶山",mobile:"15544448888",keyword:"平顶山PINGDINGSHAN15544448888"},{name:"平凉",mobile:"15544448888",keyword:"平凉PINGLIANG15544448888"},{name:"萍乡",mobile:"15544448888",keyword:"萍乡PINGXIANG15544448888"},{name:"普洱",mobile:"15544448888",keyword:"普洱PUER15544448888"},{name:"莆田",mobile:"15544448888",keyword:"莆田PUTIAN15544448888"},{name:"濮阳",mobile:"15544448888",keyword:"濮阳PUYANG15544448888"}]},{letter:"Q",data:[{name:"黔东南",mobile:"15544448888",keyword:"黔东南QIANDONGNAN15544448888"},{name:"黔南",mobile:"15544448888",keyword:"黔南QIANNAN15544448888"},{name:"黔西南",mobile:"15544448888",keyword:"黔西南QIANXINAN15544448888"}]},{letter:"R",data:[{name:"日喀则",mobile:"15544448888",keyword:"日喀则RIKAZE15544448888"},{name:"日照",mobile:"15544448888",keyword:"日照RIZHAO15544448888"}]},{letter:"S",data:[{name:"三门峡",mobile:"15544448888",keyword:"三门峡SANMENXIA15544448888"},{name:"三明",mobile:"15544448888",keyword:"三明SANMING15544448888"},{name:"三沙",mobile:"15544448888",keyword:"三沙SANSHA15544448888"}]},{letter:"T",data:[{name:"塔城",mobile:"15544448888",keyword:"塔城TACHENG15544448888"},{name:"漯河",mobile:"15544448888",keyword:"漯河TAHE15544448888"},{name:"泰安",mobile:"15544448888",keyword:"泰安TAIAN15544448888"}]},{letter:"W",data:[{name:"潍坊",mobile:"15544448888",keyword:"潍坊WEIFANG15544448888"},{name:"威海",mobile:"15544448888",keyword:"威海WEIHAI15544448888"},{name:"渭南",mobile:"15544448888",keyword:"渭南WEINAN15544448888"},{name:"文山",mobile:"15544448888",keyword:"文山WENSHAN15544448888"}]},{letter:"X",data:[{name:"厦门",mobile:"15544448888",keyword:"厦门XIAMEN15544448888"},{name:"西安",mobile:"15544448888",keyword:"西安XIAN15544448888"},{name:"湘潭",mobile:"15544448888",keyword:"湘潭XIANGTAN15544448888"}]},{letter:"Y",data:[{name:"雅安",mobile:"15544448888",keyword:"雅安YAAN15544448888"},{name:"延安",mobile:"15544448888",keyword:"延安YANAN15544448888"},{name:"延边",mobile:"15544448888",keyword:"延边YANBIAN15544448888"},{name:"盐城",mobile:"15544448888",keyword:"盐城YANCHENG15544448888"}]},{letter:"Z",data:[{name:"枣庄",mobile:"15544448888",keyword:"枣庄ZAOZHUANG15544448888"},{name:"张家界",mobile:"15544448888",keyword:"张家界ZHANGJIAJIE15544448888"},{name:"张家口",mobile:"15544448888",keyword:"张家口ZHANGJIAKOU15544448888"}]},{letter:"well",data:[{name:"☆echo.",mobile:"16666666666",keyword:"echo16666666666"}]}]};e.default=i},bf95:function(t,e,a){"use strict";a.r(e);var i=a("12a4"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},cdea:function(t,e,a){"use strict";a.r(e);var i=a("d32b"),o=a("bf95");for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("3f40");var r,d=a("f0c5"),l=Object(d["a"])(o["default"],i["b"],i["c"],!1,null,"2e4b074b",null,!1,i["a"],r);e["default"]=l.exports},cf95:function(t,e,a){var i=a("274b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("e1b6fff6",i,!0,{sourceMap:!1,shadowMode:!1})},d32b:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-button",{staticClass:"tui-btn",class:[t.plain?"tui-"+t.type+"-outline":"tui-btn-"+(t.type||"primary"),t.getDisabledClass(t.disabled,t.type,t.plain),t.getShapeClass(t.shape,t.plain),t.getShadowClass(t.type,t.shadow,t.plain),t.bold?"tui-text-bold":"",t.link?"tui-btn__link":""],style:{width:t.width,height:t.height,lineHeight:t.height,fontSize:t.size+"rpx",margin:t.margin},attrs:{"hover-class":t.getHoverClass(t.disabled,t.type,t.plain),loading:t.loading,"form-type":t.formType,"open-type":t.openType,disabled:t.disabled},on:{getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.bindgetuserinfo.apply(void 0,arguments)},getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.bindgetphonenumber.apply(void 0,arguments)},contact:function(e){arguments[0]=e=t.$handleEvent(e),t.bindcontact.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.binderror.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},n=[]}}]);