(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extend-swipeAction-swipeAction"],{"0557":function(t,i,n){"use strict";n("4160"),n("a9e3"),n("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"tuiSwipeAction",emits:["click"],props:{actions:{type:Array,default:function(){return[]}},closable:{type:Boolean,default:!0},showMask:{type:Boolean,default:!0},operateWidth:{type:Number,default:80},params:{type:Object,default:function(){return{}}},forbid:{type:Boolean,default:!1},open:{type:Boolean,default:!1},backgroundColor:{type:String,default:"#fff"}},watch:{actions:function(t,i){this.updateButtonSize()},open:function(t){this.manualSwitch(t)}},data:function(){return{tStart:{pageX:0,pageY:0},limitMove:0,position:{pageX:0,pageY:0},isShowBtn:!1,move:!1}},mounted:function(){this.updateButtonSize()},methods:{swipeDirection:function(t,i,n,e){return Math.abs(t-i)>=Math.abs(n-e)?t-i>0?"Left":"Right":n-e>0?"Up":"Down"},loop:function(){},updateButtonSize:function(){var t=this.actions;if(t.length>0){uni.createSelectorQuery().in(this);var i=0;t.forEach((function(t){i+=t.width||0})),this.limitMove=i}else this.limitMove=this.operateWidth},handlerTouchstart:function(t){if(!this.forbid){var i=t.touches;if(!(i&&i.length>1)){this.move=!0,i=i?t.touches[0]:{},(!i||void 0===i.pageX&&void 0===i.pageY)&&(i={pageX:t.pageX,pageY:t.pageY});var n=this.tStart;if(i)for(var e in n)i[e]&&(n[e]=i[e])}}},swipper:function(t){var i=this.tStart,n={pageX:t.pageX-i.pageX,pageY:t.pageY-i.pageY};this.limitMove<Math.abs(n.pageX)&&(n.pageX=-this.limitMove),this.position=n},handlerTouchmove:function(t){if(!this.forbid&&this.move){var i=this.tStart,n=t.touches?t.touches[0]:{};if((!n||void 0===n.pageX&&void 0===n.pageY)&&(n={pageX:t.pageX,pageY:t.pageY}),n){var e=this.swipeDirection(i.pageX,n.pageX,i.pageY,n.pageY);"Left"===e&&Math.abs(this.position.pageX)!==this.limitMove&&this.swipper(n)}}},handlerTouchend:function(t){if(!this.forbid&&this.move){this.move=!1;var i=this.tStart,n=t.changedTouches?t.changedTouches[0]:{};if((!n||void 0===n.pageX&&void 0===n.pageY)&&(n={pageX:t.pageX,pageY:t.pageY}),n){var e=this.swipeDirection(i.pageX,n.pageX,i.pageY,n.pageY),o={pageX:n.pageX-i.pageX,pageY:n.pageY-i.pageY};Math.abs(o.pageX)>=40&&"Left"===e?(o.pageX=o.pageX<0?-this.limitMove:this.limitMove,this.isShowBtn=!0):o.pageX=0,0==o.pageX&&(this.isShowBtn=!1),this.position=o}}},handlerButton:function(t){this.closable&&this.closeButtonGroup();var i=t.currentTarget.dataset;this.$emit("click",{index:Number(i.index),item:this.params})},closeButtonGroup:function(){this.position={pageX:0,pageY:0},this.isShowBtn=!1},handlerParentButton:function(t){this.closable&&this.closeButtonGroup()},manualSwitch:function(t){var i=0;if(t)if(0===this.actions.length)i=this.operateWidth;else{var n=0;this.actions.forEach((function(t){n+=t.width})),i=n}this.position={pageX:-i,pageY:0}},px:function(t){return uni.upx2px(t)+"px"}}};i.default=e},"058d":function(t,i,n){"use strict";n.r(i);var e=n("4ad1"),o=n("d146");for(var a in o)"default"!==a&&function(t){n.d(i,t,(function(){return o[t]}))}(a);n("cb0c");var s,c=n("f0c5"),u=Object(c["a"])(o["default"],e["b"],e["c"],!1,null,"691d6d7c",null,!1,e["a"],s);i["default"]=u.exports},"0f7b":function(t,i,n){"use strict";n.d(i,"b",(function(){return o})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){return e}));var e={tuiSwipeAction:n("058d").default,tuiIcon:n("6fa8").default},o=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"header"},[n("v-uni-view",{staticClass:"title"},[t._v("滑动菜单")]),n("v-uni-view",{staticClass:"sub-title"},[t._v("swipeAction滑动菜单：actions长度为0时，插槽可直接传入操作菜单按钮。")])],1),n("v-uni-view",{staticClass:"tui-title"},[t._v("基本使用")]),n("tui-swipe-action",{attrs:{actions:t.actions},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerButton.apply(void 0,arguments)}},scopedSlots:t._u([{key:"content",fn:function(){return[n("v-uni-view",{staticClass:"tui-list-item"},[t._v("基本使用")])]},proxy:!0}])}),n("v-uni-view",{staticClass:"tui-title"},[t._v("点击按钮时不关闭")]),n("tui-swipe-action",{attrs:{actions:t.actions2,closable:!1},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerButton2.apply(void 0,arguments)}},scopedSlots:t._u([{key:"content",fn:function(){return[n("v-uni-view",{staticClass:"tui-list-item"},[t._v("点击按钮时不关闭")])]},proxy:!0}])}),n("v-uni-view",{staticClass:"tui-title"},[t._v("禁止滑动展示")]),n("tui-swipe-action",{attrs:{actions:t.actions2,closable:!1,forbid:!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerButton2.apply(void 0,arguments)}},scopedSlots:t._u([{key:"content",fn:function(){return[n("v-uni-view",{staticClass:"tui-list-item"},[t._v("禁止滑动展示")])]},proxy:!0}])}),n("v-uni-view",{staticClass:"tui-title"},[t._v("使用变量控制开关"),n("v-uni-switch",{staticClass:"tui-switch",attrs:{color:"#19be6b"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.switchChange.apply(void 0,arguments)}}})],1),n("tui-swipe-action",{attrs:{actions:t.actions2,open:t.open},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerButton2.apply(void 0,arguments)}},scopedSlots:t._u([{key:"content",fn:function(){return[n("v-uni-view",{staticClass:"tui-list-item"},[t._v("使用变量控制开关")])]},proxy:!0}])}),n("v-uni-view",{staticClass:"tui-title"},[t._v("可同时打开多行菜单")]),n("tui-swipe-action",{attrs:{actions:t.actions2,showMask:!1},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerButton2.apply(void 0,arguments)}},scopedSlots:t._u([{key:"content",fn:function(){return[n("v-uni-view",{staticClass:"tui-list-item"},[t._v("打开关闭互不影响")])]},proxy:!0}])}),n("tui-swipe-action",{attrs:{actions:t.actions2,showMask:!1},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerButton2.apply(void 0,arguments)}},scopedSlots:t._u([{key:"content",fn:function(){return[n("v-uni-view",{staticClass:"tui-list-item"},[t._v("打开关闭互不影响")])]},proxy:!0}])}),n("tui-swipe-action",{attrs:{actions:t.actions2,showMask:!1},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerButton2.apply(void 0,arguments)}},scopedSlots:t._u([{key:"content",fn:function(){return[n("v-uni-view",{staticClass:"tui-list-item"},[t._v("打开关闭互不影响")])]},proxy:!0}])}),n("v-uni-view",{staticClass:"tui-title"},[t._v("自定义操作菜单")]),n("tui-swipe-action",{attrs:{operateWidth:140},scopedSlots:t._u([{key:"content",fn:function(){return[n("v-uni-view",{staticClass:"tui-list-item"},[t._v("自定义操作菜单，不传actions")])]},proxy:!0},{key:"button",fn:function(){return[n("v-uni-view",{staticClass:"tui-custom-btn_box"},[n("v-uni-view",{staticClass:"tui-custom-btn tui-custom-mr",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.customBtn(0)}}},[n("tui-icon",{attrs:{name:"star",color:"#333",size:20}})],1),n("v-uni-view",{staticClass:"tui-custom-btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.customBtn(1)}}},[n("tui-icon",{attrs:{name:"delete",color:"#333",size:18}})],1)],1)]},proxy:!0}])})],1)},a=[]},"20d2":function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,".tui-swipeout-wrap[data-v-691d6d7c]{position:relative;overflow:hidden}.swipe-action-show[data-v-691d6d7c]{position:relative;z-index:998}.tui-swipeout-item[data-v-691d6d7c]{width:100%;\n\t/* padding: 15px 20px; */box-sizing:border-box;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease;font-size:14px;cursor:pointer}.tui-swipeout-content[data-v-691d6d7c]{white-space:nowrap;overflow:hidden}.tui-swipeout-button-right-group[data-v-691d6d7c]{position:absolute;right:-100%;top:0;height:100%;z-index:1;width:100%}.tui-swipeout-button-right-item[data-v-691d6d7c]{height:100%;float:left;white-space:nowrap;box-sizing:border-box;display:flex;align-items:center;justify-content:center;text-align:center}.swipe-action_mask[data-v-691d6d7c]{display:block;opacity:0;position:fixed;z-index:997;top:0;left:0;width:100%;height:100%}",""]),t.exports=i},"2db6":function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,".container[data-v-735614bc]{padding-bottom:%?120?%}.header[data-v-735614bc]{padding:%?80?% %?90?% %?60?% %?90?%;box-sizing:border-box}.title[data-v-735614bc]{font-size:%?34?%;color:#333;font-weight:500}.sub-title[data-v-735614bc]{font-size:%?24?%;color:#7a7a7a;padding-top:%?18?%}.tui-list-item[data-v-735614bc]{padding:%?40?% %?30?%;display:flex;align-items:item}.tui-title[data-v-735614bc]{width:100%;padding:%?50?% %?30?% %?30?%;box-sizing:border-box;font-size:%?32?%;font-weight:700;display:flex;align-items:center;justify-content:space-between}.tui-switch[data-v-735614bc]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:100% center;transform-origin:100% center}.tui-custom-btn_box[data-v-735614bc]{width:140px;height:100%;padding:0 %?20?%;box-sizing:border-box;display:flex;align-items:center;justify-content:center;background-color:#fafafa}.tui-custom-btn[data-v-735614bc]{width:%?100?%;height:%?100?%;border-radius:50%;background-color:#fff;color:#333;display:flex;align-items:center;justify-content:center;flex-shrink:0}.tui-custom-mr[data-v-735614bc]{margin-right:%?20?%}",""]),t.exports=i},"3de5":function(t,i,n){"use strict";var e=n("60bb"),o=n.n(e);o.a},"4ad1":function(t,i,n){"use strict";var e;n.d(i,"b",(function(){return o})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){return e}));var o=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"tui-swipeout-wrap",style:{backgroundColor:t.backgroundColor}},[n("v-uni-view",{staticClass:"tui-swipeout-item",class:[t.isShowBtn?"swipe-action-show":""],style:{transform:"translate("+t.position.pageX+"px,0)"}},[n("v-uni-view",{staticClass:"tui-swipeout-content",on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerTouchstart.apply(void 0,arguments)},touchmove:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerTouchmove.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerTouchend.apply(void 0,arguments)},mousedown:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerTouchstart.apply(void 0,arguments)},mousemove:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerTouchmove.apply(void 0,arguments)},mouseup:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerTouchend.apply(void 0,arguments)}}},[t._t("content")],2),t.actions.length>0?n("v-uni-view",{staticClass:"tui-swipeout-button-right-group",on:{touchend:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.loop.apply(void 0,arguments)}}},t._l(t.actions,(function(i,e){return n("v-uni-view",{key:e,staticClass:"tui-swipeout-button-right-item",style:{backgroundColor:i.background||"#f7f7f7",color:i.color,width:i.width+"px"},attrs:{"data-index":e},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerButton.apply(void 0,arguments)}}},[i.icon?n("v-uni-image",{style:{width:t.px(i.imgWidth),height:t.px(i.imgHeight)},attrs:{src:i.icon}}):t._e(),n("v-uni-text",{style:{fontSize:t.px(i.fontsize)}},[t._v(t._s(i.name))])],1)})),1):t._e(),0===t.actions.length?n("v-uni-view",{staticClass:"tui-swipeout-button-right-group",style:{width:t.operateWidth+"px",right:"-"+t.operateWidth+"px"},on:{touchend:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.loop.apply(void 0,arguments)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerParentButton.apply(void 0,arguments)}}},[t._t("button")],2):t._e()],1),t.isShowBtn&&t.showMask?n("v-uni-view",{staticClass:"swipe-action_mask",on:{touchstart:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.closeButtonGroup.apply(void 0,arguments)},click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.closeButtonGroup.apply(void 0,arguments)}}}):t._e()],1)},a=[]},"60bb":function(t,i,n){var e=n("2db6");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=n("4f06").default;o("7f4db542",e,!0,{sourceMap:!1,shadowMode:!1})},"640d":function(t,i,n){var e=n("20d2");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=n("4f06").default;o("0b5fc5bc",e,!0,{sourceMap:!1,shadowMode:!1})},"798e":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{actions:[{name:"删除",color:"#fff",fontsize:30,width:70,background:"#FD3B31"},{name:"修改",color:"#fff",fontsize:30,width:70,background:"#5677fc"},{name:"收藏",width:70,fontsize:30,color:"#fff",background:"#C8C7CD"}],actions2:[{name:"普通",color:"#fff",fontsize:30,width:70,background:"#C8C7CD"},{name:"警示",color:"#fff",fontsize:30,width:70,background:"#FD3B31"}],open:!1}},methods:{handlerButton:function(t){var i=t.index,n=(t.item,["删除","修改","收藏"][i]);this.tui.toast("您点击了【"+n+"】按钮")},handlerButton2:function(t){var i=t.index+1;this.tui.toast("您点击了按钮"+i)},customBtn:function(t){t+=1,this.tui.toast("您点击了按钮"+t)},switchChange:function(t){this.open=t.target.value}}};i.default=e},bf98:function(t,i,n){"use strict";n.r(i);var e=n("0f7b"),o=n("e522");for(var a in o)"default"!==a&&function(t){n.d(i,t,(function(){return o[t]}))}(a);n("3de5");var s,c=n("f0c5"),u=Object(c["a"])(o["default"],e["b"],e["c"],!1,null,"735614bc",null,!1,e["a"],s);i["default"]=u.exports},cb0c:function(t,i,n){"use strict";var e=n("640d"),o=n.n(e);o.a},d146:function(t,i,n){"use strict";n.r(i);var e=n("0557"),o=n.n(e);for(var a in e)"default"!==a&&function(t){n.d(i,t,(function(){return e[t]}))}(a);i["default"]=o.a},e522:function(t,i,n){"use strict";n.r(i);var e=n("798e"),o=n.n(e);for(var a in e)"default"!==a&&function(t){n.d(i,t,(function(){return e[t]}))}(a);i["default"]=o.a}}]);