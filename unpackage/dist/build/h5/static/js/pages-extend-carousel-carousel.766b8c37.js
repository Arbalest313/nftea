(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extend-carousel-carousel"],{"040d":function(t,e,i){"use strict";i.r(e);var a=i("7426"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"089a":function(t,e,i){"use strict";i.r(e);var a=i("e9f1"),n=i("9231");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("5b6d");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"f81cc500",null,!1,a["a"],s);e["default"]=c.exports},"1b35":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{banner:["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"],classify:[{img:"kongtiao",name:"空调"},{img:"Icewash",name:"冰洗"},{img:"heater",name:"热水器"},{img:"bed",name:"床"},{img:"boutique",name:"精品"}],current:0,headlines:["苹果XR对比华为Mate20你会选择谁","格兰仕暗示拜访拼多多后遭天猫打压，拼多多高层赞其有勇气","耐克没进前十，今年Q1全球受欢迎品牌榜"],productList:[{img:1,name:"欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜 30ml（欧莱雅彩妆 BB霜 粉BB 遮瑕疵 隔离）",sale:599,factory:899,time:2e3},{img:2,name:"德国DMK进口牛奶  欧德堡（Oldenburger）超高温处理全脂纯牛奶1L*12盒",sale:29,factory:69,time:1500},{img:3,name:"【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红",sale:299,factory:699,time:1800},{img:4,name:"百雀羚套装女补水保湿护肤品",sale:1599,factory:2899,time:1e3},{img:5,name:"百草味 肉干肉脯 休闲零食 靖江精制猪肉脯200g/袋",sale:599,factory:899,time:3e3},{img:6,name:"短袖睡衣女夏季薄款休闲家居服短裤套装女可爱韩版清新学生两件套 短袖粉色长颈鹿 M码75-95斤",sale:599,factory:899,time:2400},{img:1,name:"欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜",sale:599,factory:899,time:1600},{img:2,name:"德国DMK进口牛奶",sale:29,factory:69,time:1200},{img:3,name:"【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红",sale:299,factory:699,time:1800},{img:4,name:"百雀羚套装女补水保湿护肤品",sale:1599,factory:2899,time:2600}]}},methods:{change:function(t){this.current=t.detail.current},detail:function(){uni.navigateTo({url:"/pages/template/mall/productDetail/productDetail"})},more:function(t){var e=t.currentTarget.dataset.key||"";uni.navigateTo({url:"/pages/template/mall/productList/productList?searchKey="+e})}}};e.default=a},"213f":function(t,e,i){"use strict";i.r(e);var a=i("ad9c"),n=i("040d");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("4011");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"2aacefe6",null,!1,a["a"],s);e["default"]=c.exports},"39a41":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".tui-countdown-box[data-v-2aacefe6]{display:flex;align-items:center}.tui-countdown-box[data-v-2aacefe6]{display:flex;align-items:center}.tui-countdown-item[data-v-2aacefe6]{border:%?1?% solid;display:flex;align-items:center;justify-content:center;border-radius:%?6?%;white-space:nowrap;-webkit-transform:translateZ(0);transform:translateZ(0)}.tui-countdown-time[data-v-2aacefe6]{margin:0;padding:0}.tui-countdown-colon[data-v-2aacefe6]{display:flex;justify-content:center;padding:0 %?5?%}.tui-colon-pad[data-v-2aacefe6]{padding:0!important}.tui-countdown-scale[data-v-2aacefe6]{-webkit-transform:scale(.9);transform:scale(.9);-webkit-transform-origin:center center;transform-origin:center center}.tui-countdown__ms[data-v-2aacefe6]{border:%?1?% solid;overflow:hidden;border-radius:%?6?%}\r\n\r\n/*ms使用css3代替js频繁更新操作，性能优化*/.tui-ms__list[data-v-2aacefe6]{-webkit-animation:loop-data-v-2aacefe6 1s steps(10) infinite;animation:loop-data-v-2aacefe6 1s steps(10) infinite}@-webkit-keyframes loop-data-v-2aacefe6{from{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@keyframes loop-data-v-2aacefe6{from{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-100%);transform:translateY(-100%)}}.tui-ms__item[data-v-2aacefe6]{display:flex;align-items:center;justify-content:center}",""]),t.exports=e},4011:function(t,e,i){"use strict";var a=i("7deb"),n=i.n(a);n.a},"5b6d":function(t,e,i){"use strict";var a=i("d83b"),n=i.n(a);n.a},7426:function(t,e,i){"use strict";i("a9e3"),i("d3b7"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"tuiCountdown",emits:["end","time"],props:{width:{type:Number,default:32},height:{type:Number,default:32},borderColor:{type:String,default:"#333"},backgroundColor:{type:String,default:"#fff"},size:{type:Number,default:24},color:{type:String,default:"#333"},scale:{type:Boolean,default:!1},colonSize:{type:Number,default:28},colonColor:{type:String,default:"#333"},time:{type:Number,default:0},days:{type:Boolean,default:!1},hours:{type:Boolean,default:!0},minutes:{type:Boolean,default:!0},seconds:{type:Boolean,default:!0},unitEn:{type:Boolean,default:!1},isColon:{type:Boolean,default:!0},returnTime:{type:Boolean,default:!1},isMs:{type:Boolean,default:!1},msWidth:{type:Number,default:32},msSize:{type:Number,default:24},msColor:{type:String,default:"#333"}},watch:{time:function(t){this.clearTimer(),this.doLoop()}},data:function(){return{countdown:null,d:"0",h:"00",i:"00",s:"00",ms:[0,1,2,3,4,5,6,7,8,9],ani:!1}},created:function(){this.clearTimer(),this.doLoop()},beforeDestroy:function(){this.clearTimer()},methods:{getWidth:function(t,e){return t>99?e/2*t.toString().length:e},clearTimer:function(){clearInterval(this.countdown),this.countdown=null},endOfTime:function(){this.ani=!1,this.clearTimer(),this.$emit("end",{})},doLoop:function(){var t=this,e=this.time||0;this.ani=!0,this.countDown(e),this.countdown=setInterval((function(){e--,e<0?t.endOfTime():(t.countDown(e),t.returnTime&&t.$emit("time",{seconds:e}))}),1e3)},countDown:function(t){var e=0,i=0,a=0,n=0;t>0?(e=this.days?Math.floor(t/86400):0,i=this.hours?Math.floor(t/3600)-24*e:0,a=this.minutes?Math.floor(t/60)-60*i-24*e*60:0,n=Math.floor(t)-24*e*60*60-60*i*60-60*a):this.endOfTime(),i=i<10?"0"+i:i,a=a<10?"0"+a:a,n=n<10?"0"+n:n,this.d=e,this.h=i,this.i=a,this.s=n}}};e.default=a},"7deb":function(t,e,i){var a=i("39a41");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("d9cb2f26",a,!0,{sourceMap:!1,shadowMode:!1})},9231:function(t,e,i){"use strict";i.r(e);var a=i("1b35"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},ad7a:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.container[data-v-f81cc500]{padding-bottom:%?100?%;box-sizing:border-box}\n\n/*banner*/.tui-banner-box[data-v-f81cc500]{width:100%;padding-top:%?20?%;box-sizing:border-box;background:#fff}.tui-banner-swiper[data-v-f81cc500]{width:100%;height:%?240?%}.tui-banner-item[data-v-f81cc500]{padding:0 %?16?%;box-sizing:border-box}.tui-slide-image[data-v-f81cc500]{width:100%;height:%?240?%;display:block;border-radius:%?12?%\n\t/* transition: all 0.1s linear; */}.tui-banner-scale[data-v-f81cc500]{-webkit-transform:scaleY(.9);transform:scaleY(.9);-webkit-transform-origin:center center;transform-origin:center center}\n[data-v-f81cc500] .tui-banner-swiper .uni-swiper-dot{width:%?8?%;height:%?8?%;display:inline-flex;background:none;justify-content:space-between}[data-v-f81cc500] .tui-banner-swiper .uni-swiper-dot::before{content:"";flex-grow:1;background:hsla(0,0%,100%,.8);border-radius:%?16?%;overflow:hidden}[data-v-f81cc500] .tui-banner-swiper .uni-swiper-dot-active::before{background:#fff}[data-v-f81cc500] .tui-banner-swiper .uni-swiper-dot.uni-swiper-dot-active{width:%?16?%}\n\n\n\n/*banner*/\n\n/*headlines*/.tui-rolling-news[data-v-f81cc500]{width:100%;padding:0 %?30?%;box-sizing:border-box;display:flex;align-items:center;justify-content:center;flex-wrap:nowrap;background:#fff}.tui-rolling-news[data-v-f81cc500]::after{left:0}.tui-swiper[data-v-f81cc500]{margin-left:%?8?%;font-size:%?28?%;height:%?80?%;flex:1}.tui-swiper-item[data-v-f81cc500]{display:flex;align-items:center}.tui-news-item[data-v-f81cc500]{line-height:%?28?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#555}\n\n/*headlines*/\n\n/*classify*/.tui-classify-box[data-v-f81cc500]{width:100%;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:%?28?% 0;background-color:#fff}.tui-classify-item[data-v-f81cc500]{width:20%;text-align:center}.tui-classify-img[data-v-f81cc500]{width:%?88?%;height:%?88?%;background-color:#ccc;border-radius:50%}.tui-classify-name[data-v-f81cc500]{font-size:%?26?%;line-height:%?26?%;padding-top:%?8?%;color:#555;white-space:nowrap}\n\n/*classify*/\n\n/*spike*/.tui-spike-box[data-v-f81cc500]{background:#fff;margin-top:%?20?%}.tui-spike-title[data-v-f81cc500]{padding:%?20?% %?30?%;box-sizing:border-box;font-size:%?30?%;color:#333;font-weight:700}.tui-spike-title[data-v-f81cc500]::after{left:0}.tui-spike-swiper[data-v-f81cc500]{min-height:%?440?%}.tui-pro-item[data-v-f81cc500]{display:flex;width:100%;background:#fff;box-sizing:border-box;border-radius:%?12?%;position:relative}.tui-pro-item[data-v-f81cc500]::after{left:%?240?%}.tui-pro-img[data-v-f81cc500]{width:%?220?%;height:%?220?%;display:block;flex-shrink:0;border-radius:%?12?%}.tui-pro-content[data-v-f81cc500]{flex:1;display:flex;flex-direction:column;justify-content:space-between;box-sizing:border-box;padding:%?20?%}.tui-pro-tit[data-v-f81cc500]{color:#2e2e2e;font-size:%?26?%;word-break:break-all;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.tui-pro-btmbox[data-v-f81cc500]{width:100%;display:flex;align-items:center;justify-content:space-between}.tui-sale-price[data-v-f81cc500]{font-size:%?34?%;font-weight:500;color:#e41f19}.tui-factory-price[data-v-f81cc500]{font-size:%?24?%;color:#a0a0a0;text-decoration:line-through;padding-left:%?12?%}.tui-countdown[data-v-f81cc500]{display:flex;align-items:center}.tui-countdown-text[data-v-f81cc500]{padding:0 %?8?%;font-size:%?24?%;line-height:%?24?%;color:#555}\n\n/*spike*/',""]),t.exports=e},ad9c:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tui-countdown-box"},[t.days?i("v-uni-view",{staticClass:"tui-countdown-item",style:{background:t.backgroundColor,borderColor:t.borderColor,width:t.getWidth(t.d,t.width)+"rpx",height:t.height+"rpx"}},[i("v-uni-view",{staticClass:"tui-countdown-time",class:[t.scale?"tui-countdown-scale":""],style:{fontSize:t.size+"rpx",color:t.color,lineHeight:t.size+"rpx"}},[t._v(t._s(t.d))])],1):t._e(),t.days?i("v-uni-view",{staticClass:"tui-countdown-colon",class:{"tui-colon-pad":"transparent"==t.borderColor},style:{lineHeight:t.colonSize+"rpx",fontSize:t.colonSize+"rpx",color:t.colonColor}},[t._v(t._s(t.isColon?":":"天"))]):t._e(),t.hours?i("v-uni-view",{staticClass:"tui-countdown-item",style:{background:t.backgroundColor,borderColor:t.borderColor,width:t.getWidth(t.h,t.width)+"rpx",height:t.height+"rpx"}},[i("v-uni-view",{staticClass:"tui-countdown-time",class:[t.scale?"tui-countdown-scale":""],style:{fontSize:t.size+"rpx",color:t.color,lineHeight:t.size+"rpx"}},[t._v(t._s(t.h))])],1):t._e(),t.hours?i("v-uni-view",{staticClass:"tui-countdown-colon",class:{"tui-colon-pad":"transparent"==t.borderColor},style:{lineHeight:t.colonSize+"rpx",fontSize:t.colonSize+"rpx",color:t.colonColor}},[t._v(t._s(t.isColon?":":"时"))]):t._e(),t.minutes?i("v-uni-view",{staticClass:"tui-countdown-item",style:{background:t.backgroundColor,borderColor:t.borderColor,width:t.getWidth(t.i,t.width)+"rpx",height:t.height+"rpx"}},[i("v-uni-view",{staticClass:"tui-countdown-time",class:[t.scale?"tui-countdown-scale":""],style:{fontSize:t.size+"rpx",color:t.color,lineHeight:t.size+"rpx"}},[t._v(t._s(t.i))])],1):t._e(),t.minutes?i("v-uni-view",{staticClass:"tui-countdown-colon",class:{"tui-colon-pad":"transparent"==t.borderColor},style:{lineHeight:t.colonSize+"rpx",fontSize:t.colonSize+"rpx",color:t.colonColor}},[t._v(t._s(t.isColon?":":"分"))]):t._e(),t.seconds?i("v-uni-view",{staticClass:"tui-countdown-item",style:{background:t.backgroundColor,borderColor:t.borderColor,width:t.getWidth(t.s,t.width)+"rpx",height:t.height+"rpx"}},[i("v-uni-view",{staticClass:"tui-countdown-time",class:[t.scale?"tui-countdown-scale":""],style:{fontSize:t.size+"rpx",color:t.color,lineHeight:t.size+"rpx"}},[t._v(t._s(t.s))])],1):t._e(),t.seconds&&!t.isColon?i("v-uni-view",{staticClass:"tui-countdown-colon",class:{"tui-colon-pad":"transparent"==t.borderColor},style:{lineHeight:t.colonSize+"rpx",fontSize:t.colonSize+"rpx",color:t.colonColor}},[t._v(t._s(t.unitEn?"s":"秒"))]):t._e(),t.seconds&&t.isMs&&t.isColon?i("v-uni-view",{staticClass:"tui-countdown-colon",style:{lineHeight:t.colonSize+"rpx",fontSize:t.colonSize+"rpx",color:t.colonColor}},[t._v(".")]):t._e(),t.seconds&&t.isMs?i("v-uni-view",{staticClass:"tui-countdown__ms",style:{background:t.backgroundColor,borderColor:t.borderColor,fontSize:t.msSize+"rpx",color:t.msColor,height:t.height+"rpx",width:t.msWidth>0?t.msWidth+"rpx":"auto"}},[i("v-uni-view",{class:{"tui-ms__list":t.ani}},t._l(t.ms,(function(e,a){return i("v-uni-view",{key:a,staticClass:"tui-ms__item",style:{height:t.height+"rpx"}},[i("v-uni-view",{class:[t.scale?"tui-countdown-scale":""]},[t._v(t._s(e))])],1)})),1)],1):t._e()],1)},o=[]},d83b:function(t,e,i){var a=i("ad7a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("292242ea",a,!0,{sourceMap:!1,shadowMode:!1})},e9f1:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={tuiIcon:i("6fa8").default,tuiCountdown:i("213f").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"tui-banner-box"},[i("v-uni-swiper",{staticClass:"tui-banner-swiper",attrs:{"indicator-dots":!0,autoplay:!0,interval:5e3,duration:150,circular:!0,"previous-margin":"60rpx","next-margin":"60rpx"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},t._l(t.banner,(function(e,a){return i("v-uni-swiper-item",{key:a,staticClass:"tui-banner-item"},[i("v-uni-image",{staticClass:"tui-slide-image",class:[t.current!=a?"tui-banner-scale":""],attrs:{src:"https://thorui.cn/images/mall/banner/"+e,mode:"scaleToFill","lazy-load":!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.detail.apply(void 0,arguments)}}})],1)})),1)],1),i("v-uni-view",{staticClass:"tui-rolling-news list-item"},[i("tui-icon",{attrs:{name:"news",size:22,color:"#555"}}),i("v-uni-swiper",{staticClass:"tui-swiper",attrs:{vertical:!0,autoplay:!0,circular:!0,interval:4e3}},t._l(t.headlines,(function(e,a){return i("v-uni-swiper-item",{key:a,staticClass:"tui-swiper-item"},[i("v-uni-view",{staticClass:"tui-news-item"},[t._v(t._s(e))])],1)})),1)],1),i("v-uni-view",{staticClass:"tui-classify-box"},t._l(t.classify,(function(e,a){return i("v-uni-view",{key:a,staticClass:"tui-classify-item",attrs:{"data-key":e.name},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.more.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"tui-classify-img",attrs:{src:"https://thorui.cn/images/classify/"+e.img+".png","lazy-load":!0}}),i("v-uni-view",{staticClass:"tui-classify-name"},[t._v(t._s(e.name))])],1)})),1),i("v-uni-view",{staticClass:"tui-spike-box"},[i("v-uni-view",{staticClass:"tui-spike-title list-item"},[t._v("限时秒杀")]),i("v-uni-swiper",{staticClass:"tui-spike-swiper",attrs:{"indicator-dots":!1,autoplay:!0,interval:5e3,duration:400,circular:!0,"display-multiple-items":2,vertical:!0}},t._l(t.productList,(function(e,a){return i("v-uni-swiper-item",{key:a},[i("v-uni-view",{staticClass:"tui-pro-item list-item",attrs:{"hover-class":"hover","hover-start-time":150},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.detail.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"tui-pro-img",attrs:{src:"/static/images/mall/product/"+e.img+".jpg",mode:"widthFix"}}),i("v-uni-view",{staticClass:"tui-pro-content"},[i("v-uni-view",{staticClass:"tui-pro-tit"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"tui-pro-btmbox"},[i("v-uni-view",{staticClass:"tui-pro-price"},[i("v-uni-text",{staticClass:"tui-sale-price"},[t._v("￥"+t._s(e.sale))]),i("v-uni-text",{staticClass:"tui-factory-price"},[t._v("￥"+t._s(e.factory))])],1),i("v-uni-view",{staticClass:"tui-countdown"},[i("v-uni-view",{staticClass:"tui-countdown-text"},[t._v("剩余")]),i("tui-countdown",{attrs:{time:e.time,color:"#e41f19",borderColor:"#e41f19",colonColor:"#e41f19",scale:!0}}),i("v-uni-view",{staticClass:"tui-countdown-text"},[t._v("结束")])],1)],1)],1)],1)],1)})),1)],1)],1)},o=[]}}]);