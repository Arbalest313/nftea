(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-log-log"],{"0c6a":function(t,e,i){"use strict";i.r(e);var n=i("5606"),o=i("d2af");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("5022");var r,u=i("f0c5"),s=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"10c6ead6",null,!1,n["a"],r);e["default"]=s.exports},"0f97":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"tuiTimeaxisItem",props:{backgroundColor:{type:String,default:"#fafafa"}},data:function(){return{}}};e.default=n},"1b50":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.container[data-v-2279c9b6]{overflow:hidden}.tui-header[data-v-2279c9b6]{width:100%;padding:0 %?30?%;box-sizing:border-box;font-size:%?24?%;color:#999;height:%?54?%;line-height:%?54?%;background:#fff8d5;display:flex;align-items:center;position:fixed;top:0;\ntop:44px;\nz-index:999999}.tui-version[data-v-2279c9b6]{color:#f54f46;font-weight:700}.tui-log[data-v-2279c9b6]{padding:%?84?% %?80?% %?30?% %?40?%;box-sizing:border-box}.tui-node[data-v-2279c9b6]{padding:3px 0}.tui-content-log[data-v-2279c9b6]{border-radius:%?10?%;position:relative;padding:%?20?% %?26?%;font-size:%?28?%;color:#fff;background:#5c8dff;border:%?1?% solid #5c8dff;display:inline-block;word-break:break-all}\n\n\t/* \n.tui-log-text {\n\tword-break: break-all;\n\tword-wrap: break-word;\n\ttext-align: justify;\n} */.tui-content-log[data-v-2279c9b6]::before{content:"";position:absolute;width:0;height:0;top:%?14?%;border:%?16?% solid;right:100%;border-color:transparent #5c8dff transparent transparent}.tui-log-gray[data-v-2279c9b6]{background:#ededed!important;border:%?1?% solid #ededed!important;color:#999!important}.tui-log-gray[data-v-2279c9b6]::before{border-color:transparent #ededed transparent transparent!important}.tui-version-date[data-v-2279c9b6]{font-size:%?32?%;font-weight:700;padding-bottom:%?20?%}.tui-doc-box[data-v-2279c9b6]{padding-top:%?20?%;word-break:break-all}.tui-link[data-v-2279c9b6]{padding-bottom:%?20?%;color:#06c}',""]),t.exports=e},"22c9":function(t,e,i){"use strict";var n=i("d182"),o=i.n(n);o.a},"3f8cc":function(t,e,i){"use strict";var n=i("f426"),o=i.n(n);o.a},"3f92":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tui-timeaxis-class tui-time-axis"},[t._t("default")],2)},a=[]},"425d":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={tuiTimeAxis:i("6cc6").default,tuiTimeaxisItem:i("0c6a").default,tuiIcon:i("6fa8").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"tui-header"},[t._v("Hi，欢迎使用Thor UI！当前版本："),i("v-uni-text",{staticClass:"tui-version"},[t._v("V"+t._s(t.version))])],1),i("v-uni-view",{staticClass:"tui-log"},[i("tui-time-axis",t._l(t.logList,(function(e,n){return i("tui-timeaxis-item",{key:n,scopedSlots:t._u([{key:"node",fn:function(){return[i("v-uni-view",{staticClass:"tui-node"},[i("tui-icon",{attrs:{name:"explore-fill",color:t.version==e.version?"#5c8dff":"#ddd",size:18}})],1)]},proxy:!0},{key:"content",fn:function(){return[i("v-uni-view",{staticClass:"tui-content-log",class:[t.version==e.version?"":"tui-log-gray"]},[i("v-uni-view",{staticClass:"tui-version-date"},[t._v(t._s(t.logList.length-1==n?e.version:"V"+e.version)+"（"+t._s(e.date)+"）")]),t._l(e.log,(function(e,n){return i("v-uni-view",{key:n,staticClass:"tui-log-text"},[t._v(t._s(e))])})),n===t.logList.length-1?i("v-uni-view",{staticClass:"tui-doc-box"},[i("v-uni-view",[t._v("组件文档地址：")]),i("v-uni-view",{staticClass:"tui-link",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.getLink("https://thorui.cn/doc/")}}},[t._v("https://thorui.cn/doc/")]),i("v-uni-view",{staticClass:"tui-link",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.getLink("http://www.donarui.com")}}},[t._v("http://www.donarui.com")]),i("v-uni-view",[t._v("uni-app版本GitHub地址：")]),i("v-uni-view",{staticClass:"tui-link",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.getLink("https://github.com/dingyong0214/ThorUI-uniapp")}}},[t._v("https://github.com/dingyong0214/ThorUI-uniapp")]),i("v-uni-view",[t._v("uni-app版本插件市场地址：")]),i("v-uni-view",{staticClass:"tui-link",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.getLink("https://ext.dcloud.net.cn/plugin?id=556")}}},[t._v("https://ext.dcloud.net.cn/plugin?id=556")]),i("v-uni-view",[t._v("小程序版本GitHub地址：")]),i("v-uni-view",{staticClass:"tui-link",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.getLink("https://github.com/dingyong0214/ThorUI")}}},[t._v("https://github.com/dingyong0214/ThorUI")]),i("v-uni-view",[t._v("小程序版本插件市场地址：")]),i("v-uni-view",{staticClass:"tui-link",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.getLink("https://ext.dcloud.net.cn/plugin?id=569")}}},[t._v("https://ext.dcloud.net.cn/plugin?id=569")])],1):t._e()],2)]},proxy:!0}],null,!0)})})),1)],1)],1)},a=[]},5022:function(t,e,i){"use strict";var n=i("c0bd"),o=i.n(n);o.a},5606:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tui-timeaxis-item"},[t._t("content"),i("v-uni-view",{staticClass:"tui-timeaxis-node",style:{backgroundColor:t.backgroundColor}},[t._t("node")],2)],2)},a=[]},5745:function(t,e,i){"use strict";var n=i("4ea4");i("4160"),i("d81d"),i("fb6a"),i("d3b7"),i("25f0"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("262e")),a=n(i("2caf")),r=n(i("d4ec")),u=n(i("bee2"));function s(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var i=t.hasAttribute("readonly");i||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),i||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var n=window.getSelection(),o=document.createRange();o.selectNodeContents(t),n.removeAllRanges(),n.addRange(o),e=n.toString()}return e}var c=function(){function t(e){(0,r.default)(this,t),this.resolveOptions(e),this.initSelection()}return(0,u.default)(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top="".concat(i,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=s(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=s(this.target),this.copyText()}},{key:"copyText",value:function(){var t;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!=typeof t||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();function l(){}l.prototype={on:function(t,e,i){var n=this.e||(this.e={});return(n[t]||(n[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var n=this;function o(){n.off(t,o),e.apply(i,arguments)}return o._=e,this.on(t,o,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),n=0,o=i.length;n<o;n++)i[n].fn.apply(i[n].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),n=i[t],o=[];if(n&&e)for(var a=0,r=n.length;a<r;a++)n[a].fn!==e&&n[a].fn._!==e&&o.push(n[a]);return o.length?i[t]=o:delete i[t],this}};var d={node:function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},nodeList:function(t){var i=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===i||"[object HTMLCollection]"===i)&&"length"in t&&(0===t.length||e.node(t[0]))},string:function(t){return"string"==typeof t||t instanceof String},fn:function(t){return"[object Function]"===Object.prototype.toString.call(t)}},f=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var p=Element.prototype;p.matches=p.matchesSelector||p.mozMatchesSelector||p.msMatchesSelector||p.oMatchesSelector||p.webkitMatchesSelector}function v(t,e){for(;t&&t.nodeType!==f;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}function h(t,e,i,n,o){var a=b.apply(this,arguments);return t.addEventListener(i,a,o),{destroy:function(){t.removeEventListener(i,a,o)}}}function g(t,e,i,n,o){return"function"==typeof t.addEventListener?h.apply(null,arguments):"function"==typeof i?h.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return h(t,e,i,n,o)})))}function b(t,e,i,n){return function(i){i.delegateTarget=v(i.target,e),i.delegateTarget&&n.call(t,i)}}function m(t,e,i){if(!t&&!e&&!i)throw new Error("Missing required arguments");if(!d.string(e))throw new TypeError("Second argument must be a String");if(!d.fn(i))throw new TypeError("Third argument must be a Function");if(d.node(t))return y(t,e,i);if(d.nodeList(t))return k(t,e,i);if(d.string(t))return w(t,e,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function y(t,e,i){return t.addEventListener(e,i),{destroy:function(){t.removeEventListener(e,i)}}}function k(t,e,i){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,i)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,i)}))}}}function w(t,e,i){return g(document.body,t,e,i)}var x=function(t){(0,o.default)(i,t);var e=(0,a.default)(i);function i(t,n){var o;return(0,r.default)(this,i),o=e.call(this),o.resolveOptions(n),o.listenClick(t),o}return(0,u.default)(i,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"==typeof t.container?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=m(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new c({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return T("action",t)}},{key:"defaultTarget",value:function(t){var e=T("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return T("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,i=!!document.queryCommandSupported;return e.forEach((function(t){i=i&&!!document.queryCommandSupported(t)})),i}}]),i}(l);function T(t,e){var i="data-clipboard-".concat(t);if(e.hasAttribute(i))return e.getAttribute(i)}var E=x;e.default=E},"6cc6":function(t,e,i){"use strict";i.r(e);var n=i("3f92"),o=i("942c");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("22c9");var r,u=i("f0c5"),s=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"4cb780eb",null,!1,n["a"],r);e["default"]=s.exports},"6d8b":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".tui-timeaxis-item[data-v-10c6ead6]{position:relative;width:100%;display:flex;flex-direction:column;margin-bottom:25px}.tui-timeaxis-node[data-v-10c6ead6]{position:absolute;top:0;left:-20px;-webkit-transform-origin:0;transform-origin:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);display:flex;align-items:center;justify-content:center;z-index:99;background-color:#fafafa;font-size:%?24?%}",""]),t.exports=e},"91b2":function(t,e,i){"use strict";i.r(e);var n=i("425d"),o=i("e2e2");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("3f8cc");var r,u=i("f0c5"),s=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"2279c9b6",null,!1,n["a"],r);e["default"]=s.exports},"942c":function(t,e,i){"use strict";i.r(e);var n=i("fd6c"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},acf9:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("5745")),a={getClipboardData:function(t,e,i){var n=window.event||i||{},a=new o.default("",{text:function(){return t}});a.on("success",(function(t){"function"==typeof e&&e(!0),a.off("success"),a.off("error"),a.destroy()})),a.on("error",(function(t){"function"==typeof e&&e(!1),a.off("success"),a.off("error"),a.destroy()})),a.onClick(n)}},r={getClipboardData:a.getClipboardData};e.default=r},c0bd:function(t,e,i){var n=i("6d8b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("2dd32bda",n,!0,{sourceMap:!1,shadowMode:!1})},c7f7:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.tui-time-axis[data-v-4cb780eb]{padding-left:20px;box-sizing:border-box;position:relative}.tui-time-axis[data-v-4cb780eb]::before{content:" ";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:1px solid #ddd;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleX(.5);transform:scaleX(.5)}',""]),t.exports=e},d182:function(t,e,i){var n=i("c7f7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("3cdde187",n,!0,{sourceMap:!1,shadowMode:!1})},d2af:function(t,e,i){"use strict";i.r(e);var n=i("0f97"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},e2e2:function(t,e,i){"use strict";i.r(e);var n=i("e3fa"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},e3fa:function(t,e,i){"use strict";var n=i("4ea4");i("26e9"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("acf9")),a=i("26cb"),r={computed:(0,a.mapState)(["version"]),data:function(){return{logList:[{version:"preface",date:"2019-06-01",log:["本项目稳定后，会同步更新到支付宝小程序，百度小程序，头条小程序等"]},{version:"0.1.0",date:"2019-06-01",log:["1.Thor UI代码片段整理","2.bug修复，以及部分兼容问题修复，代码优化"]},{version:"0.5.0",date:"2019-06-08",log:["1.Thor UI第一版开始内测","2.已知bug修复，以及部分兼容问题修复","3.代码片段优化，封装部分组件"]},{version:"1.0.0",date:"2019-06-15",log:["1.【地图】新增拖拽定位功能","2.【扩展】新增基础组件，包括：字体图标，按钮，Grid宫格，List列表，Card卡片...","3.【扩展】新增数字键盘","4.【扩展】新增时间轴","5.完善thor(个人中心)功能，包括：关于Thor UI，模拟登录，GitHub地址复制，赞赏，反馈，更新日志等","6.已知bug修复，以及部分功能优化"]},{version:"1.1.0",date:"2019-06-24",log:["1.将基础组件移出扩展，单独出来","2.扩展改为单独tab bar选项extend","3.新增滚动消息（extend=>滚动消息）：包括顶部通告栏，滚动新闻，以及搜索框中出现的热搜产品","4.新增弹层下拉选择（extend=>弹层下拉选择）：包含顶部下拉选择列表、输入框下拉选择以及底部分享弹层","5.新增ActionSheet操作菜单（extend=>ActionSheet）：可加入提示信息，可单独设置字体样式","6.新增新闻模板（extend=>新闻模板）:包含新闻列表，新闻详情，评论等","7.部分功能优化，修复已知bug"]},{version:"1.2.0",date:"2019-07-01",log:["1.新增组件NumberBox数字框:可设置步长，支持浮点数，支持调整样式(可单独设置)","2.新增组件Rate评分:可设置星星数，可设置大小颜色","3.新增聊天模板，包含：消息列表，好友列表，聊天界面等","4.新增商城模板,包含：商城首页，商城列表，商城详情等","5.优化部分体验"]},{version:"1.2.1",date:"2019-07-10",log:["1.修复部分兼容性问题","2.修复部分已知bug"]},{version:"1.2.2",date:"2019-07-11",log:["1.新增组件Modal弹框:可设置按钮数，按钮样式，提示文字样式等，还可自定义弹框内容。","2.修复已知bug","3.ThorUI组件文档地址：http://www.donarui.com/"]},{version:"1.3.0",date:"2019-07-14",log:["1.新增倒计时组件:时分秒倒计时，支持设置大小，颜色等。","2.新增分隔符组件:Divider分隔符，可设置占据高度，线条宽度，颜色等。","3.新增卡片轮播:包含顶部轮播，秒杀商品轮播等。","4.已知问题修复以及优化。"]},{version:"1.3.2",date:"2019-07-22",log:["1.修复H5端发行报错的问题。","2.扩展基础组件(保留了之前版本):alert、tips、button、toast。","3.新增表单验证功能，只需配置相应验证即可。","4.新增返回顶部组件,nvue返回顶部看首页[nvue商品列表]。","5.优化部分页面，修复已知bug。"]},{version:"1.4.0",date:"2019-10-06",log:["1.新增日期时间选择器组件。","2.H5新增复制文本功能。","3.新增悬浮按钮组件。","4.新增Tabbar组件。","5.新增tabs标签页组件。","6.新增折叠面板组件。","7.新增图片上传组件。","8.NumberBox组件优化调整。","9.Modal组件优化调整。","10.sticky组件优化调整。","11.countdown组件优化调整。","12.商城模板新增购物车、我的、提交订单、支付成功、我的订单、地址列表、新增地址、设置、用户信息等页面。","13.修改已知bug。"]},{version:"1.4.1",date:"2019-10-27",log:["1.新增文档相关链接信息。","2.新增骨架屏组件(extend=>骨架屏)。","3.新增网络请求示例。","4.调整sticky组件，支持索引列表吸顶效果。","5.新增吸顶&索引列表，非scroll-view实现(code[首页]=>索引列表=>索引&吸顶效果)。","6.已知问题修复以及优化。"]},{version:"1.4.2",date:"2019-11-17",log:["1.modal组件优化，宽高以及padding值可设置。","2.rate评分组件支持小数，如4星半，4.6星等。","3.tabs组件优化。","4.商城模板新增优惠券页面。","5.商城模板新增订单详情页面。","6.分包，解决小程序预览时包体积超出限制的问题。"]},{version:"1.5.0",date:"2020-05-12",log:["1.新增日历组件 。","2.新增图片裁剪组件。","3.新增头像、图片组合组件。","4.新增顶部NavationBar导航组件。","5.新增圆形进度条组件。","6.新增底部导航组件。","7.新增级联选择组件cascade-selection。","8.新增步骤条组件。","9.新增气泡框组件。","10.countdown倒计时组件优化，可只显示秒数倒计时。","11.回到顶部组件优化，新增回首页，分享按钮，可自定义控制显示。","12.日期时间选择组件优化，新增秒数选择，单位可置顶展示。","13.新增垂直分类菜单左右联动联动案例。","14.地图支持H5。","15.表单验证优化:非必填情况下,如果值为空,则不进行校验，不为空则进行校验。","16.发布H5、QQ小程序以及Android App。H5地址：https://www.thorui.cn/h5/#/ ，QQ小程序搜索ThorUI,apk前往https://www.thorui.cn/下载。","17.针对支付宝小程序做了部分优化调整。","18.nvue支持uni-app编译模式。","19.新增自定义tabbar使用模板，小程序参考：https://github.com/dingyong0214/AfterSale，uni-app参考：https://github.com/dingyong0214/tabbar-uniapp。","20.引入优化uParse。","21.搜索页面新增关键词高亮显示。","22.新增navbar上拉加载下拉刷新案例。","23.v3编译支持。","24.支持easycom组件模式，直接在页面中使用组件，无需引入注册。","25.优化sticky组件，新增普通案例和异步加载案例。","26.整体优化调整，项目重构，部分模板完善。"]},{version:"1.5.1",date:"2020-06-06",log:["1.日历组件支持农历（古历）。","2.sticky吸顶组件新增wxs实现(tui-sticky-wxs)。","3.新增圆形进度条组件renderjs实现(App、H5端)与canvas 2d实现（小程序端）以及nuve版本。","4.图片裁剪组件优化，手势事件改为wxs实现。","5.级联选择器组件优化，支持设置默认选中。","6.新增图片颜色分析器组件，传入图片分析图片色彩。","7.新增中文转拼音组件，可处理多音字。","8.新增update页面(App端资源更新页面)","9.解决H5端异步请求数据后复制文本（clipboard）报错bug。","解决方案：","①.新增参数event，调用方法时传入此参数;","②.异步请求转同步。","10.修复其它已知bug。","--------------------------","--------------------------","注：自1.4.2版本之后，ThorUI只对uni-app版本进行开源，小程序原生版付费会员才可使用（￥120/永久），1.4.2版本之前不受影响。","如若需要，请联系QQ：3168647172。"]},{version:"1.5.2",date:"2020-07-20",log:["1.步骤条组件优化，支持自定义图标，支持设置线条为虚线。","2.修复图片裁剪组件(wxs版)初始化裁剪不正确的问题。","3.按钮（tui-button)组件支持表单提交，详见文档。","4.图片上传组件（tui-upload）新增props：header，formData，修复初始化图片不显示的bug。","5.tabbar组件与自定义导航栏组件(NavBar)背景支持设置高斯模糊(ios端)。","6.uni-app版本骨架屏修复编译到小程序端无法获取到组件节点的bug。","7.日历组件单个日期选择和区间选择支持设置默认选中。","8.新增多语言模板。源码地址：https://github.com/dingyong0214/ThorUI-utag","9.新增拖拽排序组件，wxs实现，详细查看多语言模板示例。","10.新增签到模板（点star获取源码）。获取步骤如下：","1）去GitHub给ThorUI项目点star，项目地址分别为：https://github.com/dingyong0214/ThorUI 和 https://github.com/dingyong0214/ThorUI-uniapp","2）加QQ3039218619，截图发送到该QQ即可获取源码。","--------------------------","--------------------------","注：自1.4.2版本之后，ThorUI只对uni-app版本进行开源，小程序原生版付费会员才可使用（￥120/永久），1.4.2版本之前不受影响。","如若需要，请联系QQ：3168647172。"]},{version:"1.5.5",date:"2020-08-16",log:["1.自定义导航栏组件优化，新增props：maxOpacity（最大不透明度值），dropDownHide（下拉隐藏NavigationBar，主要针对有回弹效果ios端）。","2.上传组件优化，可限制上传图片类型，单张图片大小，sizeType，sourceType。","3.倒计时组件优化，可每秒返回剩余时间，默认不返回。","4.tui-modal弹框组件优化，修复transform导致元素内字体模糊的问题。","5.tui-button按钮组件优化，新增link样式配置，具体查看文档。","6.tui-tabs标签页组件优化，新增props：width（tabs宽度）设置。","7.tui-image-group图片组合组件优化，横向展示支持多行。","8.裁剪组件优化，修复网络图片在小程序端裁剪出现空白的问题。","9.商城模板更新【会员专用】。","1).首页改版，新增秒杀模块","2).选择优惠券（提交订单）","3).开具发票","4).发票详情","5).查看发票，发送至邮箱","6).商品评论","7).评论详情，评论回复","8).评价晒单","9).店铺","10).店铺详情","11).限时秒杀列表","12).秒杀详情","13).商品详情优化，新增视频播放入口","--------------------------","--------------------------","注：会员专用内容加入会员才可使用（￥120/永久)。","如若需要，请联系QQ：3168647172 或 3039218619。"]},{version:"1.5.6",date:"2020-08-18",log:["1.修复tui-tabs组件宽度不正确的bug。","2.修复级联选择组件(tui-cascade-selection)默认数据不生效的bug。","3.优化tui-button按钮组件，新增props：preventClick[是否阻止用户重复点击，设为true则200ms内只执行一次点击事件，默认false]。","--------------------------","--------------------------","注：加入会员享受更多权益（￥120/永久)。","如若需要，请联系QQ：3168647172 或 3039218619。"]},{version:"1.5.8",date:"2020-08-31",log:["1.tui-navigation-bar组件优化，可设置背景透明 【设置该属性，则背景透明，只出现内容，isOpacity和maxOpacity失效】。","2.tui-swipe-action组件优化，背景色改为配置。modal弹框、抽屉、tabbar等组件z-index改为配置，具体查看文档。","3.修复小程序端tui-numberbox组件输入比最小值小的数无法自动重置成最小值的问题。","4.优化索引列表在H5端滑动切换索引会引起页面回弹的问题。","5.tui-bottom-popup组件优化，可设置z-index以及显示时垂直方向移动的距离translateY。","6.nvue版thor-icon组件优化，更换字体base64。","7.商城模板更新【会员专用】。"," 1).首页调整，新增拼团模块"," 2).拼团列表"," 3).拼团商品详情"," 4).正在拼团中列表"," 5).我的拼团"," 6).拼团详情"," 7).退款/售后列表"," 8).退款详情"," 9).申请售后","8.新增简单咖啡点单模板，类似weStoreCafe【该模板为付费模板￥100,会员2折】"," 1).点单"," 2).账单结算"," 3).编辑地址"," 4).地址列表"," 5).我的订单"," 6).订单详情"," 7).微信登录/验证码登录","9.修复部分已知bug。","--------------------------","--------------------------","注：会员专用内容加入会员才可使用（￥120/永久)，付费模板会员可享受折扣。","如若需要，请联系QQ：3168647172 或 3039218619。"]},{version:"1.6.0",date:"2020-11-15",log:["【ThorUI组件库V1.6.0】更新：","1.tui-fab悬浮按钮组件优化，默认按钮支持自定内容，替换自带加号。","2.修复裁剪组件在小程序端设置isBase64为true时裁剪出错的问题。","3.tui-drawer抽屉组件优化，支持left,right,bottom,top方向弹出，可自定义背景色。","4.倒计时组件优化，新增毫秒展示。","5.时间选择器优化，支持header，body等部分背景色修改。","6.宫格组件优化，可去掉宫格边框线条。","7.修复地图周边兴趣点在H5端出错的问题。","8.新增[ThorUI示例]入口。","=====================","=====================","【ThorUI示例V1.0.0】更新：","1.新增scroll-view常用布局案例。","2.新增swiper指示点组件及使用案例。","3.新增长形进度条组件以及使用案例。","4.新增checkbox常用布局案例。","5.新增input常用布局案例。","6.新增radio常用布局案例。","7.新增地图选点示例。","8.地图周边兴趣点布局调整以及可分页加载数据。","9.新增生成海报示例。","10.新增类似微信联系人索引列表组件以及示例。","11.新增左滑菜单组件 wxs实现。","12.新增图片预览组件。","13.新增loading样式。","14.新增panel布局案例。","15.新增preview布局案例。","16.新增表单常用布局案例。","17.新增dialog组件以及使用案例。","18.新增msg组件以及使用案例。","19.新增搜索searchbar组件。","20.新增表单按钮组件，可自定义背景色。","21.新增长按复制组件，长按弹出菜单。","22.新增贝赛尔曲线组件，加入购物车效果等。","23.新增tab标签页组件，可超出一屏。","24.新增图片裁剪组件（App端使用组件，使用5+ api裁剪）。","25.新增拖拽排序组件以及使用案例。","26.新增滑动验证码组件以及使用案例。","27.新增类似微信数字键盘组件以及使用案例。","28.新增工具库（常用数据处理）。","29.新增popup弹层动画组件。","30.新增计时器组件以及使用案例。","31.新增table表格组件以及使用案例。","32.新增多端适配组件，以及使用案例。","33.新增咖啡点单模板预览入口。","34.新增签到模板预览入口。","35.新增个人中心页面（内部页面，不对外开放），包含分享，会员介绍，版本介绍，开源地址，帮助中心，反馈建议，我要合作，福利专享等页面。","=====================","=====================","该项目只对会员开放。","注：会员专用内容加入会员才可使用（￥120/永久)，付费模板会员可享受折扣。","如若需要，请联系QQ：3168647172 或 3039218619。"]},{version:"1.6.1",date:"2021-01-18",log:["【ThorUI组件库V1.6.1】更新：","1.商城模板更新：","（1）商城模板拆分成单独模板项目。","（2）个人中心，新增未登录状态。","（3）个人信息页面操作优化。","（4）编辑地址页面优化，新增省市区城市选择。","（5）新增我的钱包页面。","（6）新增充值确认页面。","（7）新增我的银行卡页面。","（8）新增交易记录页面。","（9）商品详情页分享优化，新增生成分享海报。","2.优化滑动菜单组件多个触摸点滑动问题。","3.消息提示组件（tui-tips）优化，支持自定义背景色，字体颜色以及字体大小，参数type废弃。","4.圆形进度条组件优化，修复activeMode=forwards(动画从上次结束点接着播)时且上次进度大于当前进度时进度条不刷新bug。","5.优化日历组件（tui-calendar）滚动穿透问题。","6.优化顶部选项卡示例左右切换过快出现闪动的问题，优化下拉刷新出现动画不关闭的问题。","7.上传图片组件（tui-upload）优化，新增一键上传方法uploadAllImage（当属性serverUrl传空时，父级可调用该方法一次性上传所有图片）。","8.新增富文本渲染示例。","=====================","【ThorUI示例V1.0.1】更新：","1.数字滚轮组件（tui-digital-roller）优化，支持数字中带逗号（,）。","2.拖拽排序组件（tui-drag）优化，修复编译到小程序端不执行change和sortend事件的bug。","3.新增grade评分组件，支持滑动半星。","4.新增图片裁剪组件（tui-cropper），裁剪框可显示为圆形。 ","5.新增短信验证码倒计时组件。","6.新增滑动选择器组件，支持区间选择。","7.新增旋转图片验证组件。","=====================","其中【ThorUI示例】项目只对会员开放，详见文档说明。","注：会员专用内容加入会员才可使用（￥120/永久)，付费模板会员可享受折扣。","如若需要，请联系QQ：3168647172 或 3039218619。"]},{version:"1.6.2",date:"2021-03-21",log:["【ThorUI组件库V1.6.2】更新：","1.tui-actionsheet（操作菜单）组件优化，点击事件返回参数中新增按钮obj对象数据。","2.tui-upload（图片上传）组件优化，可设置展示图片的宽高。","3.圆形进度条组件优化，修复已知问题。","4.tui-validation.js（表单验证）优化，具体查看文档。","5.tui-numberbox（数字框组件优化），修复已知问题。","6.修复productNvue页回到顶部在android端失效的问题。","=====================","【ThorUI示例V1.0.2】更新：","1.ThorUI示例个人中心内容对会员开放（个人中心、分享、会员介绍、版本介绍、开源地址、帮助中心等）。","2.tui-timer（计时器）组件优化，可设置初始时间。","3.tui-poster.js（生成海报）优化，修复已知问题，保存图片到本地相册时新增相册权限判断。","4.新增tui-scale（刻度尺滚动选择器）组件。 ","5.新增tui-waterfall（瀑布流）组件。","6.新增tui-lazyload-img（图片懒加载）组件。","7.新增tui-overflow-hidden（内容超出隐藏）组件。","8.新增tui-org-tree（组织架构树）组件。","=====================","其中【ThorUI示例】项目只对会员开放，详见文档说明。","注：会员专用内容加入会员才可使用（￥120/永久)，付费模板会员可享受折扣。","如若需要，请联系QQ：3168647172 或 3039218619。"]},{version:"1.6.5",date:"2021-05-24",log:["【ThorUI组件库V1.6.5】更新：","1.tui-validation（表单验证）优化，新增validator自定义验证配置项，具体查看文档。","2.tui-round-progress（圆形进度条）组件优化，修复已知问题。","3.tui-cascade-selection（级联选择器）组件优化，修复已知问题。","4.tui-tabs（标签页）组件优化，选项卡可设置数字角标。","=====================","【ThorUI示例V1.1.0】更新：","1.tui-org-tree（组织架构树）组件优化，可控制节点内容排版方式、节点选中状态、展开收起子节点，具体查看文档。","2.新增tui-form（表单）组件，主要用于表单验证。","3.新增tui-input（输入框）组件，原生input组件增强。","4.新增tui-textarea（多行输入框）组件。","5.新增tui-label（标签）组件，用来改进表单组件的可用性。","6.新增tui-radio（单项选择器）组件。","7.新增tui-checkbox（多项选择器）组件。","8.新增tui-switch（开关）组件。","9.新增tui-picker（选择器）组件，支持1~3级数据。","10.新增tui-landscape（压屏窗）组件。","11.新增tui-segmented-control（分段器）组件。","12.新增tui-notice-bar（通告栏）组件。","13.新增tui-alerts（警告框）组件。","14.新增tui-request（数据请求）封装，支持Promise，支持请求拦截和响应拦截,支持请求未结束之前阻止重复请求等。","15.tui-utils（工具类）优化，具体查看文档。","16.新增tui-row组件，配合组件tui-col组件使用（24栅格化布局）。","17.新增tui-tree-view（树型菜单）组件。","18.新增tui-charts-column（柱状图-css版）组件。","19.新增tui-charts-bar（横向柱状图-css版）组件。","20.新增tui-charts-line（折线图表-css版）组件。","21.新增tui-charts-pie（饼状图表-css版）组件。","22.tui-lazyload-img（图片懒加载）组件优化，修复已知问题。","23.新增tui-pagination（分页器）组件。","=====================","其中【ThorUI示例】项目只对会员开放，详见文档说明。","注：会员专用内容加入会员才可使用（￥120/永久)，付费模板会员可享受折扣。","如若需要，请联系QQ：3168647172 或 3039218619。"]},{version:"1.7.0",date:"2021.09.17",log:["【ThorUI组件库V1.7.0】更新：","1.修复tui-bottom-navigation（底部导航菜单）组件编译到小程序点击二级菜单报错的问题。","2.tui-datetime（日期时间选择器）组件优化，可以自定义设置滚动区域高度。","3.tui-datetime（日期时间选择器）组件优化，新增类型type=8，即选择：时分秒+小时。","4.tui-cascade-selection（级联选择器）组件优化，修复编译到小程序端索引错乱问题。","5.uni-app端所有 commonJS 改为 ES6 模块规范，详见文档升级指南。","6.组件兼容vue3调整优化，支持情况与uni-app同步。","7.tui-icon（字体图标组件优化），删除以前播放（play）图标，新增播放（play）、暂停（suspend）图标；删除以前不可见（unseen）图标，新增可见（seen）,不可见（unseen）图标。","8.tui-icon（字体图标组件优化），uni-app版新增支持包含App-Nvue、支付宝/百度/字节/QQ小程序。","9.微信小程序原生版组件属性类型调整，修复高版本调试基础库出现警告提示。","10.tui-swipe-action（滑动菜单）组件优化，修复已知问题。","========================","========================","【ThorUI示例V1.2.0】更新：","1.tui-picker（选择器）组件新增暗黑模式示例。","2.tui-charts-pie（饼状图表-css版）组件优化，修复部分场景可能导致样式错乱的问题。","3.tui-charts-line（折线图表-css版）组件优化，修复部分Android手机显示空白问题。","4.图表组件（所有）优化，修复其它已知问题。","5.tui-form（表单验证）组件优化，部分平台不支持在props中嵌套传入Function函数，model和rules参数由props传入改为校验方法validate中传入。","6.tui-slider（滑动选择器）组件优化，修复已知问题。","7.tui-timer（计时器）组件优化，修复冒号换成文字时显示错误的问题。","8.uni-app端所有 commonJS 改为 ES6 模块规范，详见文档升级指南。","9.组件兼容vue3调整优化，支持情况与uni-app同步。","10.tui-progress（进度条）组件优化。","11.tui-checkbox（多项选择器）组件优化，修复v-model手动修改值视图不更新的问题。","12.tui-radio（单项选择器）组件优化，修复v-model手动修改值视图不更新的问题。","13.微信小程序原生版组件属性类型调整，修复高版本调试基础库出现警告提示。","14.tui-tab（标签页）组件优化，支持设置左右间距，需传入属性leftGap（距离左侧间隙）值。","15.tui-row/tui-col（栅格布局）组件优化，uni-app版新增支持App-Nvue、支付宝/百度/字节/QQ小程序。","16.tui-form-button（按钮）组件优化，uni-app版新增支持App-Nvue、支付宝/百度/字节/QQ小程序。","17.tui-popup（弹层动画）组件优化，uni-app版新增支持App-Nvue、支付宝/百度/字节/QQ小程序。","18.tui-input（输入框） 组件优化，uni-app版新增支持App-Nvue、支付宝/百度/字节/QQ小程序。","19.tui-radio（单项选择器）组件优化，uni-app版新增支持App-Nvue、支付宝/百度/字节/QQ小程序。","20.tui-checkbox（多项选择器）组件优化，uni-app版新增支持App-Nvue、支付宝/百度/字节/QQ小程序。","21.tui-switch（开关选择器）组件优化，uni-app版新增支持App-Nvue、支付宝/百度/字节/QQ小程序。","22.tui-textarea（多行输入框）组件优化，uni-app版新增支持App-Nvue、支付宝/百度/字节/QQ小程序。","23.tui-alerts（警告提示）组件优化，uni-app版新增支持App-Nvue、支付宝/百度/字节/QQ小程序。","24.新增 tui-status-bar（状态栏）组件。","25.tui-pagination（分页器）组件优化，uni-app版新增支持App-Nvue、支付宝/百度/字节/QQ小程序。","26.tui-segmented-control（分段器）组件优化，uni-app版新增支持App-Nvue、支付宝/百度/字节/QQ小程序。","27.tui-notice-bar（通告栏）组件优化，uni-app版新增支持App-Nvue、支付宝/百度/字节/QQ小程序。","28.tui-form（表单验证）组件优化，uni-app版新增支持App-Nvue、支付宝/百度/字节/QQ小程序。","29.其他已知问题优化。"]},{version:"1.7.1",date:"2021.10.01",log:["【ThorUI组件库V1.7.1】更新：","1.微信小程序版wx:key赋值优化，去除警告。","2.tui-icon（图标组件优化），修复同时引入组件和样式文件冲突的问题。","3.tui-calendar（日历）组件优化，选择区间时需选择起始和结束日期才可点击确定按钮。","4.微信小程序版本索引列表（吸顶效果）页面优化，修复索引和吸顶索引不一致的问题。","5.tui-numberbox（数字框）组件优化，当步长step为整数时，value支持传入小数。","========================","========================","【ThorUI示例V1.2.1】更新：","1.tui-searchbar（搜索栏）组件优化，新增属性showLabel、showInput用于控制是否显示占位标签和输入框。","2.tui-rotate-verify (旋转图片验证) 组件优化，新增type类型，当type=2时，返回旋转角度，可传给后端进行验证。","3.tui-input（输入框）、tui-textarea （多行输入框）组件优化，修复v-model赋值Number类型值报错的问题。","4.tui-waterfall（瀑布流）组件优化，修复已知问题。","5.微信小程序版本 tui-table（表格）组件优化，修复数字或英文内容换行显示不正确问题。","6.其他已知问题优化。"]},{version:"1.7.2",date:"2022.02.25",log:["【ThorUI组件库V1.7.2】更新：","1.tui-time-axis（时间轴）组件优化，新增属性来设置节点层级。","2.tui-steps（步骤条）组件优化，字体图标支持设置字体大小。","3.tui-datetime（日期时间选择器）组件优化，新增属性 maskClosable 来设置是否可点击遮罩关闭选择器。","4.tui-datetime（日期时间选择器）组件优化，优化微信小程序端快速滚动点击确定按钮时数据未更新的问题。","5.tui-datetime （日期时间选择器）组件优化，可设置标题","6.优化tui-numberbox组件，修复数据类型问题。","7.优化tui-tabs（标签页）组件，可控制底部滑块是否显示。","8.微信小程序tui-tabbar（标签栏）组件优化，修复页面路径传值错误的问题。","9.tui-calendar（日历）组件优化，选择日期时显示标题内容可配置。",'10.tui-cascade-selection（级联选择器） 默认选中优化，当一次性传入所有数据时默认选项传值可为字符串数组，如：["安徽省","阜阳市","颍上县"]。',"11.tui-skeleton（骨架屏）组件优化，加入背景动画效果。","12.tui-upload（上传组件优化），新增属性控制删除图片时是否弹框确认。","13.已知问题优化。","========================","========================","【ThorUI示例V1.2.2】更新：","1.tui-index-list（索引列表）组件优化，修复App端右侧索引随页面滚动的bug。","2.tui-textarea (多行输入框) 组件优化，修复初始化赋值时计数错误问题。","3.tui-picker（选择器）组件优化，优化微信小程序端快速滚动点击确定按钮时数据未更新的问题。","4.tui-utils.js（工具库）优化，优化日期格式化方法，新增isMs（时间戳精度是否为毫秒）参数。（当 type=2 精度为秒时，参数isMs需要传入false）","5.tui-picker（选择器）组件优化，新增属性 maskClosable 来设置是否可点击遮罩关闭选择器。","6.新增 tui-week-date（周日期选择）组件。","7.新增 tui-vcode（验证码）组件。","8.新增 tui-divide-list（分隔列表组件）。","9.新增 tui-select（选择框）组件。","10.新增 tui-amount-inwords（数字金额转大写）组件。","11.其他已知问题优化。","=====================","其中【ThorUI示例】项目只对会员开放，详见文档说明。","注：会员专用内容加入会员才可使用（￥120/永久)，付费模板会员可享受折扣。","如若需要，请联系QQ：3168647172 或 3039218619。"]}].reverse()}},methods:{getLink:function(t){var e=this;o.default.getClipboardData(t,(function(t){t?e.tui.toast("链接复制成功"):e.tui.toast("链接复制失败")}))}}};e.default=r},f426:function(t,e,i){var n=i("1b50");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("265c2052",n,!0,{sourceMap:!1,shadowMode:!1})},fd6c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"tuiTimeAxis",data:function(){return{}}};e.default=n}}]);