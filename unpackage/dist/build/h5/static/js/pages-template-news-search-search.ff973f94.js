(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-news-search-search"],{"0521":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tui-tag",class:[t.originLeft?"tui-origin-left":"",t.originRight?"tui-origin-right":"",t.getClassName(t.shape,t.plain),t.getTypeClass(t.type,t.plain)],style:{transform:"scale("+t.scaleMultiple+")",padding:t.padding,margin:t.margin,fontSize:t.size,lineHeight:t.size},attrs:{"hover-class":t.hover?"tui-tag-opcity":"","hover-stay-time":150},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},o=[]},"07d0":function(t,e,a){"use strict";a("4160"),a("498a"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("e0e6"),n={data:function(){return{history:["美洲杯","D站观点","C罗","早安D站","2019退役球星","女神大会","德利赫特","托雷斯","自热火锅","华为手机","有机酸奶"],hot:["德利赫特","托雷斯","早安D站","D站观点","德利赫特","美洲杯","华为手机","C罗","自热火锅","2019退役球星","女神大会"],key:"",showActionSheet:!1,tips:"确认清空搜索历史吗？",searchResult:["按照展示的列表输入关键词看效果","thorui","2019退役球星","搜索关键词高亮显示","模拟搜索结果集","开源不易，需要鼓励","人人为我，我为人人"],searchList:[]}},methods:{back:function(){uni.navigateBack()},cleanKey:function(){this.key=""},closeActionSheet:function(){this.showActionSheet=!1},openActionSheet:function(){this.showActionSheet=!0},itemClick:function(t){var e=t.index;0==e&&(this.showActionSheet=!1,this.history=[])},inputKey:function(t){var e=this;if(this.key=i.trim(t.detail.value),this.key){var a=[];this.searchResult.forEach((function(t){a.push({key:t,showKey:i.replaceAll(t,e.key,'<label style="color:#E41F19">'.concat(e.key,"</label>"))})})),this.searchList=a}else this.searchList=[]}}};e.default=n},2515:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.tui-actionsheet[data-v-49d26028]{width:100%;position:fixed;left:0;right:0;bottom:0;z-index:9999;visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);-webkit-transform-origin:center;transform-origin:center;transition:all .25s ease-in-out;background-color:#f7f7f7;min-height:%?100?%}.tui-actionsheet-radius[data-v-49d26028]{border-top-left-radius:%?20?%;border-top-right-radius:%?20?%;overflow:hidden}.tui-actionsheet-show[data-v-49d26028]{-webkit-transform:translateZ(0);transform:translateZ(0);visibility:visible}.tui-actionsheet-tips[data-v-49d26028]{width:100%;padding:%?40?% %?60?%;box-sizing:border-box;text-align:center;background-color:#fff;display:flex;align-items:center;justify-content:center}.tui-operate-box[data-v-49d26028]{padding-bottom:%?12?%}.tui-actionsheet-btn[data-v-49d26028]{width:100%;height:%?100?%;background-color:#fff;display:flex;align-items:center;justify-content:center;text-align:center;font-size:%?34?%;position:relative}.tui-btn-last[data-v-49d26028]{padding-bottom:env(safe-area-inset-bottom)}.tui-actionsheet-divider[data-v-49d26028]::before{content:"";width:100%;border-top:%?1?% solid #e7e7e7;position:absolute;top:0;left:0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.tui-actionsheet-cancel[data-v-49d26028]{color:#1a1a1a;padding-bottom:env(safe-area-inset-bottom)}.tui-actionsheet-hover[data-v-49d26028]{background-color:#f7f7f9}.tui-actionsheet-mask[data-v-49d26028]{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.6);z-index:9996;transition:all .3s ease-in-out;opacity:0;visibility:hidden}.tui-mask-show[data-v-49d26028]{opacity:1;visibility:visible}',""]),t.exports=e},"262f":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"tuiTag",emits:["click"],props:{type:{type:String,default:"primary"},padding:{type:String,default:"16rpx 26rpx"},margin:{type:String,default:"0"},size:{type:String,default:"28rpx"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},hover:{type:Boolean,default:!1},scaleMultiple:{type:Number,default:1},originLeft:{type:Boolean,default:!1},originRight:{type:Boolean,default:!1},index:{type:Number,default:0}},methods:{handleClick:function(){this.$emit("click",{index:this.index})},getTypeClass:function(t,e){return e?"tui-"+t+"-outline":"tui-"+t},getClassName:function(t,e){var a=e?"tui-tag-outline ":"";return"square"!=t&&("circle"==t?a+=e?"tui-tag-outline-fillet":"tui-tag-fillet":"circleLeft"==t?a+="tui-tag-fillet-left":"circleRight"==t&&(a+="tui-tag-fillet-right")),a}}};e.default=i},"2b8a":function(t,e,a){var i=a("3a88");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("00482ade",i,!0,{sourceMap:!1,shadowMode:!1})},3380:function(t,e,a){var i=a("2515");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("e7bc9236",i,!0,{sourceMap:!1,shadowMode:!1})},"3a88":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-165a2c8e]{color:#333;background:#fff}.container[data-v-165a2c8e]{padding:0 %?30?% %?30?% %?30?%;box-sizing:border-box}.tui-searchbox[data-v-165a2c8e]{padding:%?30?% 0;box-sizing:border-box;display:flex;align-items:center}.tui-search-input[data-v-165a2c8e]{width:100%;height:%?66?%;border-radius:%?35?%;padding:0 %?30?%;box-sizing:border-box;background:#f2f2f2;display:flex;align-items:center;flex-wrap:nowrap}.tui-input[data-v-165a2c8e]{flex:1;color:#333;padding:0 %?16?%;font-size:%?28?%}.tui-input-plholder[data-v-165a2c8e]{font-size:%?28?%;color:#b2b2b2}.tui-cancle[data-v-165a2c8e]{color:#888;font-size:%?28?%;padding-left:%?30?%;flex-shrink:0}.tui-history-header[data-v-165a2c8e]{display:flex;align-items:center;justify-content:space-between;padding:%?30?% 0}.tui-history-content[data-v-165a2c8e]{display:flex;align-items:center;flex-wrap:wrap}.tui-icon-delete[data-v-165a2c8e]{padding:%?10?%}.tui-search-title[data-v-165a2c8e]{font-size:%?28?%;font-weight:700}.tui-hot-header[data-v-165a2c8e]{padding:%?30?% 0}.tui-header[data-v-165a2c8e]{padding:%?26?% 0;box-sizing:border-box;display:flex;align-items:center;justify-content:space-between}.tui-header-left[data-v-165a2c8e]{font-size:%?30?%;color:#222;border-left:%?4?% solid #eb0909;padding-left:%?10?%;word-break:break-all}.tui-noboredr[data-v-165a2c8e]{border-left:0!important}.tui-result-box[data-v-165a2c8e]{font-size:%?28?%}.tui-result-item[data-v-165a2c8e]{line-height:%?28?%;padding:%?28?% 0}body.?%PAGE?%[data-v-165a2c8e]{background:#fff}",""]),t.exports=e},"3ce4":function(t,e,a){"use strict";a.r(e);var i=a("552e"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"49b5":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={tuiIcon:a("6fa8").default,tuiTag:a("5a5e").default,tuiActionsheet:a("8941").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"tui-searchbox"},[a("v-uni-view",{staticClass:"tui-search-input"},[a("v-uni-icon",{attrs:{type:"search",size:13,color:"#333"}}),a("v-uni-input",{staticClass:"tui-input",attrs:{"confirm-type":"search",placeholder:"大家都在搜：2019退役球星",focus:!0,"auto-focus":!0,"placeholder-class":"tui-input-plholder"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputKey.apply(void 0,arguments)}},model:{value:t.key,callback:function(e){t.key="string"===typeof e?e.trim():e},expression:"key"}}),a("v-uni-icon",{directives:[{name:"show",rawName:"v-show",value:t.key,expression:"key"}],attrs:{type:"clear",size:13,color:"#bcbcbc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cleanKey.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"tui-cancle",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[t._v("取消")])],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.history.length>0&&!t.key,expression:"history.length>0 && !key"}],staticClass:"tui-search-history"},[a("v-uni-view",{staticClass:"tui-history-header"},[a("v-uni-view",{staticClass:"tui-search-title"},[t._v("搜索历史")]),a("tui-icon",{staticClass:"tui-icon-delete",attrs:{name:"delete",size:14,color:"#333"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openActionSheet.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"tui-history-content"},[t._l(t.history,(function(e,i){return[a("tui-tag",{key:i+"_0",attrs:{margin:"0 24rpx 24rpx 0",type:"gray",shape:"circle"}},[t._v(t._s(e))])]}))],2)],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.key,expression:"key"}]},[a("v-uni-view",{staticClass:"tui-header"},[a("v-uni-view",{staticClass:"tui-header-left tui-noboredr"},[t._v("搜索 “"+t._s(t.key)+"”")])],1),a("v-uni-view",{staticClass:"tui-result-box"},[t._l(t.searchList,(function(t,e){return[a("v-uni-view",{key:e+"_0",staticClass:"tui-result-item",attrs:{"hover-class":"tui-opcity","hover-stay-time":150}},[a("v-uni-rich-text",{attrs:{nodes:t.showKey}})],1)]}))],2)],1),a("tui-actionsheet",{attrs:{show:t.showActionSheet,tips:t.tips},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.itemClick.apply(void 0,arguments)},cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.closeActionSheet.apply(void 0,arguments)}}})],1)},o=[]},5377:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e)}}},[a("v-uni-view",{staticClass:"tui-actionsheet",class:{"tui-actionsheet-show":t.show,"tui-actionsheet-radius":t.radius}},[t.tips?a("v-uni-view",{staticClass:"tui-actionsheet-tips",style:{fontSize:t.size+"rpx",color:t.color}},[t._v(t._s(t.tips))]):t._e(),a("v-uni-view",{class:[t.isCancel?"tui-operate-box":""]},[t._l(t.itemList,(function(e,i){return[a("v-uni-view",{key:i+"_0",staticClass:"tui-actionsheet-btn tui-actionsheet-divider",class:{"tui-btn-last":!t.isCancel&&i==t.itemList.length-1},style:{color:e.color||"#2B2B2B"},attrs:{"hover-class":"tui-actionsheet-hover","hover-stay-time":150,"data-index":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClickItem.apply(void 0,arguments)}}},[t._v(t._s(e.text))])]}))],2),t.isCancel?a("v-uni-view",{staticClass:"tui-actionsheet-btn tui-actionsheet-cancel",attrs:{"hover-class":"tui-actionsheet-hover","hover-stay-time":150},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClickCancel.apply(void 0,arguments)}}},[t._v("取消")]):t._e()],1),a("v-uni-view",{staticClass:"tui-actionsheet-mask",class:{"tui-mask-show":t.show},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClickMask.apply(void 0,arguments)}}})],1)},o=[]},"552e":function(t,e,a){"use strict";var i=a("4ea4");a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("5530")),o={name:"tuiActionsheet",emits:["click","cancel"],props:{maskClosable:{type:Boolean,default:!0},show:{type:Boolean,default:!1},itemList:{type:Array,default:function(){return[{text:"确定",color:"#2B2B2B"}]}},tips:{type:String,default:""},color:{type:String,default:"#808080"},size:{type:Number,default:26},radius:{type:Boolean,default:!0},isCancel:{type:Boolean,default:!0}},methods:{handleClickMask:function(){this.maskClosable&&this.handleClickCancel()},handleClickItem:function(t){if(this.show){var e=Number(t.currentTarget.dataset.index);this.$emit("click",(0,n.default)({index:e},this.itemList[e]))}},handleClickCancel:function(){this.$emit("cancel")}}};e.default=o},"5a5e":function(t,e,a){"use strict";a.r(e);var i=a("0521"),n=a("c484");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("ce20");var r,c=a("f0c5"),l=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"45ebf03c",null,!1,i["a"],r);e["default"]=l.exports},6935:function(t,e,a){"use strict";a.r(e);var i=a("07d0"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"73d6":function(t,e,a){var i=a("9628");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("3e64d4b3",i,!0,{sourceMap:!1,shadowMode:!1})},8941:function(t,e,a){"use strict";a.r(e);var i=a("5377"),n=a("3ce4");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("a544");var r,c=a("f0c5"),l=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"49d26028",null,!1,i["a"],r);e["default"]=l.exports},9628:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* color start*/.tui-primary[data-v-45ebf03c]{background-color:#5677fc!important;color:#fff}.tui-light-primary[data-v-45ebf03c]{background-color:#5c8dff!important;color:#fff}.tui-dark-primary[data-v-45ebf03c]{background-color:#4a67d6!important;color:#fff}.tui-dLight-primary[data-v-45ebf03c]{background-color:#4e77d9!important;color:#fff}.tui-danger[data-v-45ebf03c]{background-color:#ed3f14!important;color:#fff}.tui-red[data-v-45ebf03c]{background-color:#ff201f!important;color:#fff}.tui-warning[data-v-45ebf03c]{background-color:#ff7900!important;color:#fff}.tui-green[data-v-45ebf03c]{background-color:#19be6b!important;color:#fff}.tui-high-green[data-v-45ebf03c]{background-color:#52dcae!important;color:#52dcae}.tui-black[data-v-45ebf03c]{background-color:#000!important;color:#fff}.tui-white[data-v-45ebf03c]{background-color:#fff!important;color:#333!important}.tui-translucent[data-v-45ebf03c]{background-color:rgba(0,0,0,.7)}.tui-light-black[data-v-45ebf03c]{background-color:#333!important}.tui-gray[data-v-45ebf03c]{background-color:#ededed!important}.tui-phcolor-gray[data-v-45ebf03c]{background-color:#ccc!important}.tui-divider-gray[data-v-45ebf03c]{background-color:#eaeef1!important}.tui-btn-gray[data-v-45ebf03c]{background-color:#ededed!important;color:#999!important}.tui-hover-gray[data-v-45ebf03c]{background-color:#f7f7f9!important}.tui-bg-gray[data-v-45ebf03c]{background-color:#fafafa!important}.tui-light-blue[data-v-45ebf03c]{background-color:#ecf6fd;color:#4dabeb!important}.tui-light-brownish[data-v-45ebf03c]{background-color:#fcebef;color:#8a5966!important}.tui-light-orange[data-v-45ebf03c]{background-color:#fef5eb;color:#faa851!important}.tui-light-green[data-v-45ebf03c]{background-color:#e8f6e8;color:#44cf85!important}.tui-primary-outline[data-v-45ebf03c]::after{border:1px solid #5677fc!important}.tui-primary-outline[data-v-45ebf03c]{color:#5677fc!important;background-color:none}.tui-danger-outline[data-v-45ebf03c]{color:#ed3f14!important;background-color:none}.tui-danger-outline[data-v-45ebf03c]::after{border:1px solid #ed3f14!important}.tui-red-outline[data-v-45ebf03c]{color:#ff201f!important;background-color:none}.tui-red-outline[data-v-45ebf03c]::after{border:1px solid #ff201f!important}.tui-warning-outline[data-v-45ebf03c]{color:#ff7900!important;background-color:none}.tui-warning-outline[data-v-45ebf03c]::after{border:1px solid #ff7900!important}.tui-green-outline[data-v-45ebf03c]{color:#44cf85!important;background-color:none}.tui-green-outline[data-v-45ebf03c]::after{border:1px solid #44cf85!important}.tui-high-green-outline[data-v-45ebf03c]{color:#52dcae!important;background-color:none}.tui-high-green-outline[data-v-45ebf03c]::after{border:1px solid #52dcae!important}.tui-gray-outline[data-v-45ebf03c]{color:#999!important;background-color:none}.tui-gray-outline[data-v-45ebf03c]::after{border:1px solid #ccc!important}.tui-black-outline[data-v-45ebf03c]{color:#333!important;background-color:none}.tui-black-outline[data-v-45ebf03c]::after{border:1px solid #333!important}.tui-white-outline[data-v-45ebf03c]{color:#fff!important;background-color:none}.tui-white-outline[data-v-45ebf03c]::after{border:1px solid #fff!important}\n\n/* color end*/\n\n/* tag start*/.tui-tag[data-v-45ebf03c]{display:flex;align-items:center;justify-content:center;border-radius:%?6?%;flex-shrink:0}.tui-tag-outline[data-v-45ebf03c]{position:relative;background-color:none;color:#5677fc}.tui-tag-outline[data-v-45ebf03c]::after{content:" ";position:absolute;width:200%;height:200%;-webkit-transform:scale(.5) translateZ(0);transform:scale(.5) translateZ(0);-webkit-transform-origin:0 0;transform-origin:0 0;box-sizing:border-box;left:0;top:0;border-radius:%?12?%}.tui-tag-fillet[data-v-45ebf03c]{border-radius:%?50?%}.tui-white.tui-tag-fillet[data-v-45ebf03c]::after{border-radius:%?80?%}.tui-tag-outline-fillet[data-v-45ebf03c]::after{border-radius:%?80?%}.tui-tag-fillet-left[data-v-45ebf03c]{border-radius:%?50?% 0 0 %?50?%}.tui-tag-fillet-right[data-v-45ebf03c]{border-radius:0 %?50?% %?50?% 0}.tui-tag-fillet-left.tui-tag-outline[data-v-45ebf03c]::after{border-radius:%?100?% 0 0 %?100?%}.tui-tag-fillet-right.tui-tag-outline[data-v-45ebf03c]::after{border-radius:0 %?100?% %?100?% 0}\n\n/* tag end*/.tui-origin-left[data-v-45ebf03c]{-webkit-transform-origin:0 center;transform-origin:0 center}.tui-origin-right[data-v-45ebf03c]{-webkit-transform-origin:100% center;transform-origin:100% center}.tui-tag-opcity[data-v-45ebf03c]{opacity:.5}',""]),t.exports=e},a544:function(t,e,a){"use strict";var i=a("3380"),n=a.n(i);n.a},c484:function(t,e,a){"use strict";a.r(e);var i=a("262f"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},ce20:function(t,e,a){"use strict";var i=a("73d6"),n=a.n(i);n.a},d4eb:function(t,e,a){"use strict";var i=a("2b8a"),n=a.n(i);n.a},da88:function(t,e,a){"use strict";a.r(e);var i=a("49b5"),n=a("6935");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("d4eb");var r,c=a("f0c5"),l=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"165a2c8e",null,!1,i["a"],r);e["default"]=l.exports},e0e6:function(t,e,a){"use strict";a("c975"),a("26e9"),a("d3b7"),a("acd8"),a("e25e"),a("4d63"),a("ac1f"),a("25f0"),a("5319"),a("1276"),a("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={trim:function(t){return t.replace(/(^\s*)|(\s*$)/g,"")},replaceAll:function(t,e,a){return t.replace(new RegExp(e,"gm"),a)},formatNumber:function(t){return 11===t.length?t.replace(/^(\d{3})\d{4}(\d{4})$/,"$1****$2"):t},rmoney:function(t){return parseFloat(t).toFixed(2).toString().split("").reverse().join("").replace(/(\d{3})/g,"$1,").replace(/\,$/,"").split("").reverse().join("")},formatDate:function(t,e){if(e){~e.indexOf(".")&&(e=e.substring(0,e.indexOf("."))),e=e.toString().replace("T"," ").replace(/\-/g,"/");var a,i="ymdhis";t||(t="y-m-d h:i:s"),a=e?new Date(e):new Date;var n=a.getMonth()+1,o=a.getDate(),r=a.getHours(),c=a.getMinutes(),l=a.getSeconds();n=n<10?"0"+n:n,o=o<10?"0"+o:o,r=r<10?"0"+r:r,c=c<10?"0"+c:c,l=l<10?"0"+l:l;for(var u=[a.getFullYear().toString(),n.toString(),o.toString(),r.toString(),c.toString(),l.toString()],s=0;s<u.length;s++)t=t.replace(i.charAt(s),u[s]);return t}return""},rgbToHex:function(t,e,a){return"#"+i.toHex(t)+i.toHex(e)+i.toHex(a)},toHex:function(t){return t=parseInt(t,10),isNaN(t)?"00":(t=Math.max(0,Math.min(t,255)),"0123456789ABCDEF".charAt((t-t%16)/16)+"0123456789ABCDEF".charAt(t%16))},hexToRgb:function(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}},n={trim:i.trim,replaceAll:i.replaceAll,formatNumber:i.formatNumber,rmoney:i.rmoney,formatDate:i.formatDate,rgbToHex:i.rgbToHex,hexToRgb:i.hexToRgb};e.default=n}}]);