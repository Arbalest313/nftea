(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extend-color-analysis-color-analysis"],{"12a4":function(t,e,n){"use strict";n("c975"),n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"tuiButton",emits:["click","getuserinfo","contact","getphonenumber","error"],behaviors:["wx://form-field-button"],props:{type:{type:String,default:"primary"},shadow:{type:Boolean,default:!1},width:{type:String,default:"100%"},height:{type:String,default:"96rpx"},size:{type:Number,default:32},bold:{type:Boolean,default:!1},margin:{type:String,default:"0"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},link:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},disabledGray:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},formType:{type:String,default:""},openType:{type:String,default:""},index:{type:[Number,String],default:0},preventClick:{type:Boolean,default:!1}},data:function(){return{time:0}},methods:{handleClick:function(){var t=this;if(!this.disabled){if(this.preventClick){if((new Date).getTime()-this.time<=200)return;this.time=(new Date).getTime(),setTimeout((function(){t.time=0}),200)}this.$emit("click",{index:Number(this.index)})}},bindgetuserinfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("getuserinfo",n)},bindcontact:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("contact",n)},bindgetphonenumber:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("getphonenumber",n)},binderror:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("error",n)},getShadowClass:function(t,e,n){var r="";return e&&"white"!=t&&!n&&(r="tui-shadow-"+t),r},getDisabledClass:function(t,e,n){var r="";if(t&&"white"!=e&&-1==e.indexOf("-")){var a=this.disabledGray?"tui-gray-disabled":"tui-dark-disabled";r=n?"tui-dark-disabled-outline":a}return r},getShapeClass:function(t,e){var n="";return"circle"==t?n=e?"tui-outline-fillet":"tui-fillet":"rightAngle"==t&&(n=e?"tui-outline-rightAngle":"tui-rightAngle"),n},getHoverClass:function(t,e,n){var r="";return t||(r=n?"tui-outline-hover":"tui-"+(e||"primary")+"-hover"),r}}};e.default=r},"20e8":function(t,e,n){"use strict";n.r(e);var r=n("e80c"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},"274b":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'.tui-btn-primary[data-v-2e4b074b]{background:#5677fc!important;color:#fff}.tui-shadow-primary[data-v-2e4b074b]{box-shadow:0 %?10?% %?14?% 0 rgba(86,119,252,.2)}.tui-btn-danger[data-v-2e4b074b]{background:#eb0909!important;color:#fff}.tui-shadow-danger[data-v-2e4b074b]{box-shadow:0 %?10?% %?14?% 0 rgba(235,9,9,.2)}.tui-btn-warning[data-v-2e4b074b]{background:#fc872d!important;color:#fff}.tui-shadow-warning[data-v-2e4b074b]{box-shadow:0 %?10?% %?14?% 0 rgba(252,135,45,.2)}.tui-btn-green[data-v-2e4b074b]{background:#07c160!important;color:#fff}.tui-shadow-green[data-v-2e4b074b]{box-shadow:0 %?10?% %?14?% 0 rgba(7,193,96,.2)}.tui-btn-blue[data-v-2e4b074b]{background:#007aff!important;color:#fff}.tui-shadow-blue[data-v-2e4b074b]{box-shadow:0 %?10?% %?14?% 0 rgba(0,122,255,.2)}.tui-btn-white[data-v-2e4b074b]{background:#fff!important;color:#333!important}.tui-btn-gray[data-v-2e4b074b]{background:#bfbfbf!important;color:#fff!important}.tui-btn-black[data-v-2e4b074b]{background:#333!important;color:#fff!important}.tui-btn-brown[data-v-2e4b074b]{background:#ac9157!important;color:#fff!important}.tui-btn-gray-black[data-v-2e4b074b]{background:#f2f2f2!important;color:#333}.tui-btn-gray-primary[data-v-2e4b074b]{background:#f2f2f2!important;color:#5677fc!important}.tui-gray-primary-hover[data-v-2e4b074b]{background:#d9d9d9!important}.tui-btn-gray-green[data-v-2e4b074b]{background:#f2f2f2!important;color:#07c160!important}.tui-gray-green-hover[data-v-2e4b074b]{background:#d9d9d9!important}.tui-btn-gray-danger[data-v-2e4b074b]{background:#f2f2f2!important;color:#eb0909!important}.tui-gray-danger-hover[data-v-2e4b074b]{background:#d9d9d9!important}.tui-btn-gray-warning[data-v-2e4b074b]{background:#f2f2f2!important;color:#fc872d!important}.tui-gray-warning-hover[data-v-2e4b074b]{background:#d9d9d9!important}.tui-shadow-gray[data-v-2e4b074b]{box-shadow:0 %?10?% %?14?% 0 hsla(0,0%,74.9%,.2)}.tui-hover-gray[data-v-2e4b074b]{background:#f7f7f9!important}.tui-black-hover[data-v-2e4b074b]{background:#555!important;color:#e5e5e5!important}.tui-brown-hover[data-v-2e4b074b]{background:#a37f49!important;color:#e5e5e5!important}\n\n/* button start*/.tui-btn[data-v-2e4b074b]{width:100%;position:relative;border:0!important;border-radius:%?6?%;padding-left:0;padding-right:0;overflow:visible;display:flex;align-items:center;justify-content:center}.tui-btn[data-v-2e4b074b]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5) translateZ(0);transform:scale(.5) translateZ(0);box-sizing:border-box;left:0;top:0;border-radius:%?12?%;border:0}.tui-text-bold[data-v-2e4b074b]{font-weight:700}.tui-btn-white[data-v-2e4b074b]::after{border:1px solid #bfbfbf}.tui-white-hover[data-v-2e4b074b]{background:#e5e5e5!important;color:#2e2e2e!important}.tui-dark-disabled[data-v-2e4b074b]{opacity:.6!important;color:#fafbfc!important}.tui-dark-disabled-outline[data-v-2e4b074b]{opacity:.5!important}.tui-gray-disabled[data-v-2e4b074b]{background:#f3f3f3!important;color:#919191!important;box-shadow:none}.tui-outline-hover[data-v-2e4b074b]{opacity:.5}.tui-primary-hover[data-v-2e4b074b]{background:#4a67d6!important;color:#e5e5e5!important}.tui-primary-outline[data-v-2e4b074b]::after{border:1px solid #5677fc!important}.tui-primary-outline[data-v-2e4b074b]{color:#5677fc!important;background:transparent}.tui-danger-hover[data-v-2e4b074b]{background:#c80808!important;color:#e5e5e5!important}.tui-danger-outline[data-v-2e4b074b]{color:#eb0909!important;background:transparent}.tui-danger-outline[data-v-2e4b074b]::after{border:1px solid #eb0909!important}.tui-warning-hover[data-v-2e4b074b]{background:#d67326!important;color:#e5e5e5!important}.tui-warning-outline[data-v-2e4b074b]{color:#fc872d!important;background:transparent}.tui-warning-outline[data-v-2e4b074b]::after{border:1px solid #fc872d!important}.tui-green-hover[data-v-2e4b074b]{background:#06ad56!important;color:#e5e5e5!important}.tui-green-outline[data-v-2e4b074b]{color:#07c160!important;background:transparent}.tui-green-outline[data-v-2e4b074b]::after{border:1px solid #07c160!important}.tui-blue-hover[data-v-2e4b074b]{background:#0062cc!important;color:#e5e5e5!important}.tui-blue-outline[data-v-2e4b074b]{color:#007aff!important;background:transparent}.tui-blue-outline[data-v-2e4b074b]::after{border:1px solid #007aff!important}\n.tui-btn-gradual[data-v-2e4b074b]{background:linear-gradient(90deg,#ff5926,#f00e2c)!important;color:#fff!important}.tui-shadow-gradual[data-v-2e4b074b]{box-shadow:0 %?10?% %?14?% 0 rgba(235,9,9,.15)}\n.tui-gray-hover[data-v-2e4b074b]{background:#a3a3a3!important;color:#898989}\n.tui-gradual-hover[data-v-2e4b074b]{background:linear-gradient(90deg,#d74620,#cd1225)!important;color:#fff!important}\n.tui-gray-outline[data-v-2e4b074b]{color:#999!important;background:transparent!important}.tui-white-outline[data-v-2e4b074b]{color:#fff!important;background:transparent!important}.tui-black-outline[data-v-2e4b074b]{background:transparent!important;color:#333!important}.tui-gray-outline[data-v-2e4b074b]::after{border:1px solid #ccc!important}.tui-white-outline[data-v-2e4b074b]::after{border:1px solid #fff!important}.tui-black-outline[data-v-2e4b074b]::after{border:1px solid #333!important}.tui-brown-outline[data-v-2e4b074b]{color:#ac9157!important;background:transparent}.tui-brown-outline[data-v-2e4b074b]::after{border:1px solid #ac9157!important}\n\n/*圆角 */.tui-fillet[data-v-2e4b074b]{border-radius:%?50?%}.tui-btn-white.tui-fillet[data-v-2e4b074b]::after{border-radius:%?98?%}.tui-outline-fillet[data-v-2e4b074b]::after{border-radius:%?98?%}\n\n/*平角*/.tui-rightAngle[data-v-2e4b074b]{border-radius:0}.tui-btn-white.tui-rightAngle[data-v-2e4b074b]::after{border-radius:0}.tui-outline-rightAngle[data-v-2e4b074b]::after{border-radius:0}.tui-btn__link[data-v-2e4b074b]::after{border:0!important}',""]),t.exports=e},"32c6":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={tuiButton:n("cdea").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"header"},[n("v-uni-view",{staticClass:"title"},[t._v("颜色分析器")]),n("v-uni-view",{staticClass:"sub-title"},[t._v("color analysis，图片颜色分析，传入图片获取图片主颜色")])],1),n("v-uni-view",{staticClass:"tui-canvas-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImg.apply(void 0,arguments)}}},[t.imgUrl?t._e():n("v-uni-text",[t._v("+ 点击上传图片")]),t.imgUrl?n("v-uni-image",{staticClass:"tui-image",attrs:{src:t.imgUrl,mode:"aspectFit"}}):t._e()],1),n("v-uni-canvas",{staticClass:"tui-palette-canvas",style:{width:t.canvasWidth+"px",height:t.canvasHeight+"px"},attrs:{id:"tui-color-palette","canvas-id":"tui-color-palette"}}),t.colors.length>0?n("v-uni-view",{staticClass:"tui-colors-container"},t._l(t.colors,(function(e,r){return n("v-uni-view",{key:r,staticClass:"tui-color",style:{backgroundColor:e},attrs:{"data-color":e},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyColor.apply(void 0,arguments)}}},[t._v(t._s(e))])})),1):t._e(),t.rbgColors.length>0?n("v-uni-view",{staticClass:"tui-colors-container",staticStyle:{width:"94%"}},t._l(t.rbgColors,(function(e,r){return n("v-uni-view",{key:r,staticClass:"tui-color",style:{backgroundColor:"rgb("+e+")"},attrs:{"data-color":"rgb("+e+")"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyColor.apply(void 0,arguments)}}},[n("v-uni-view",[t._v("RGB")]),t._v(t._s(e))],1)})),1):t._e(),n("v-uni-view",{staticClass:"tui-btn-box"},[n("tui-button",{attrs:{type:"green",shape:"circle"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setMaxColors.apply(void 0,arguments)}}},[t._v("set maxColors=4")])],1)],1)},o=[]},"35cd":function(t,e,n){"use strict";n("4160"),n("d81d"),n("13d5"),n("fb6a"),n("4e82"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n,r=0;r<e.length;r++)n=e[r],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}if(!o)var o={map:function(t,e){var n={};return e?t.map((function(t,r){return n.index=r,e.call(n,t)})):t.slice()},naturalOrder:function(t,e){return t<e?-1:t>e?1:0},sum:function(t,e){var n={};return t.reduce(e?function(t,r,a){return n.index=a,t+e.call(n,r)}:function(t,e){return t+e},0)},max:function(t,e){return Math.max.apply(null,e?o.map(t,e):t)}};var i=function(){function t(t,e,n){return(t<<10)+(e<<5)+n}function e(t){function e(){n.sort(t),r=!0}var n=[],r=!1;return{push:function(t){n.push(t),r=!1},peek:function(t){return r||e(),void 0===t&&(t=n.length-1),n[t]},pop:function(){return r||e(),n.pop()},size:function(){return n.length},map:function(t){return n.map(t)},debug:function(){return r||e(),n}}}function n(t,e,n,r,a,o,i){var u=this;u.r1=t,u.r2=e,u.g1=n,u.g2=r,u.b1=a,u.b2=o,u.histo=i}function r(){this.vboxes=new e((function(t,e){return o.naturalOrder(t.vbox.count()*t.vbox.volume(),e.vbox.count()*e.vbox.volume())}))}function a(e){var n,r,a,o,i=Array(32768);return e.forEach((function(e){r=e[0]>>3,a=e[1]>>3,o=e[2]>>3,n=t(r,a,o),i[n]=(i[n]||0)+1})),i}function i(t,e){var r,a,o,i=1e6,u=0,c=1e6,l=0,s=1e6,d=0;return t.forEach((function(t){r=t[0]>>3,a=t[1]>>3,o=t[2]>>3,r<i?i=r:r>u&&(u=r),a<c?c=a:a>l&&(l=a),o<s?s=o:o>d&&(d=o)})),new n(i,u,c,l,s,d,e)}function u(e,n){function r(t){var e,r,a,o,i,u=t+"1",c=t+"2",s=0;for(l=n[u];l<=n[c];l++)if(v[l]>p/2){for(a=n.copy(),o=n.copy(),e=l-n[u],r=n[c]-l,i=e<=r?Math.min(n[c]-1,~~(l+r/2)):Math.max(n[u],~~(l-1-e/2));!v[i];)i++;for(s=h[i];!s&&v[i-1];)s=h[--i];return a[c]=i,o[u]=a[c]+1,[a,o]}}if(n.count()){var a=n.r2-n.r1+1,i=n.g2-n.g1+1,u=n.b2-n.b1+1,c=o.max([a,i,u]);if(1==n.count())return[n.copy()];var l,s,d,f,b,p=0,v=[],h=[];if(c==a)for(l=n.r1;l<=n.r2;l++){for(f=0,s=n.g1;s<=n.g2;s++)for(d=n.b1;d<=n.b2;d++)b=t(l,s,d),f+=e[b]||0;p+=f,v[l]=p}else if(c==i)for(l=n.g1;l<=n.g2;l++){for(f=0,s=n.r1;s<=n.r2;s++)for(d=n.b1;d<=n.b2;d++)b=t(s,l,d),f+=e[b]||0;p+=f,v[l]=p}else for(l=n.b1;l<=n.b2;l++){for(f=0,s=n.r1;s<=n.r2;s++)for(d=n.g1;d<=n.g2;d++)b=t(s,d,l),f+=e[b]||0;p+=f,v[l]=p}return v.forEach((function(t,e){h[e]=p-t})),r(c==a?"r":c==i?"g":"b")}}return n.prototype={volume:function(t){var e=this;return(!e._volume||t)&&(e._volume=(e.r2-e.r1+1)*(e.g2-e.g1+1)*(e.b2-e.b1+1)),e._volume},count:function(e){var n=this,r=n.histo;if(!n._count_set||e){var a,o,i,u,c=0;for(o=n.r1;o<=n.r2;o++)for(i=n.g1;i<=n.g2;i++)for(u=n.b1;u<=n.b2;u++)a=t(o,i,u),c+=r[a]||0;n._count=c,n._count_set=!0}return n._count},copy:function(){var t=this;return new n(t.r1,t.r2,t.g1,t.g2,t.b1,t.b2,t.histo)},avg:function(e){var n=this,r=n.histo;if(!n._avg||e){var a,o,i,u,c,l=0,s=0,d=0,f=0;for(o=n.r1;o<=n.r2;o++)for(i=n.g1;i<=n.g2;i++)for(u=n.b1;u<=n.b2;u++)c=t(o,i,u),a=r[c]||0,l+=a,s+=a*(o+.5)*8,d+=a*(i+.5)*8,f+=a*(u+.5)*8;n._avg=l?[~~(s/l),~~(d/l),~~(f/l)]:[~~(8*(n.r1+n.r2+1)/2),~~(8*(n.g1+n.g2+1)/2),~~(8*(n.b1+n.b2+1)/2)]}return n._avg},contains:function(t){var e=this,n=t[0]>>3;return gval=t[1]>>3,bval=t[2]>>3,n>=e.r1&&n<=e.r2&&gval>=e.g1&&gval<=e.g2&&bval>=e.b1&&bval<=e.b2}},r.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map((function(t){return t.color}))},size:function(){return this.vboxes.size()},map:function(t){for(var e=this.vboxes,n=0;n<e.size();n++)if(e.peek(n).vbox.contains(t))return e.peek(n).color;return this.nearest(t)},nearest:function(t){for(var e,n,r,a=Math.pow,o=this.vboxes,i=0;i<o.size();i++)n=Math.sqrt(a(t[0]-o.peek(i).color[0],2)+a(t[1]-o.peek(i).color[1],2)+a(t[2]-o.peek(i).color[2],2)),(n<e||void 0===e)&&(e=n,r=o.peek(i).color);return r},forcebw:function(){var t=this.vboxes;t.sort((function(t,e){return o.naturalOrder(o.sum(t.color),o.sum(e.color))}));var e=t[0].color;5>e[0]&&5>e[1]&&5>e[2]&&(t[0].color=[0,0,0]);var n=t.length-1,r=t[n].color;251<r[0]&&251<r[1]&&251<r[2]&&(t[n].color=[255,255,255])}},{quantize:function(t,n){function c(t,e){for(var n,r=1,a=0;1e3>a;)if(n=t.pop(),n.count()){var o=u(l,n),i=o[0],c=o[1];if(!i)return;if(t.push(i),c&&(t.push(c),r++),r>=e)return;if(1e3<a++)return}else t.push(n),a++}if(!t.length||2>n||256<n)return!1;var l=a(t);l.forEach((function(){0}));var s=i(t,l),d=new e((function(t,e){return o.naturalOrder(t.count(),e.count())}));d.push(s),c(d,.75*n);for(var f=new e((function(t,e){return o.naturalOrder(t.count()*t.volume(),e.count()*e.volume())}));d.size();)f.push(d.pop());c(f,n-f.size());for(var b=new r;f.size();)b.push(f.pop());return b}}}(),u=function(){function t(e){a(this,t),this.canvasId=e}return r(t,[{key:"getPalette",value:function(t,e){var n=this,r=t.width,a=t.height,o=t.imgPath,u=t.maxColors,c=t.step;("undefined"==typeof u||2>u)&&(u=2),256<u&&(u=10),("undefined"==typeof c||1>c)&&(c=10);var l=uni.createCanvasContext(this.canvasId);l.drawImage(o,0,0,r,a),l.draw(!1,(function(){uni.canvasGetImageData({canvasId:n.canvasId,x:0,y:0,width:r,height:a,success:function(t){for(var n,o,l,s,d,f=t.data,b=[],p=0;p<r*a;p+=c)n=4*p,o=f[n+0],l=f[n+1],s=f[n+2],d=f[n+3],125<=d&&!(250<o&&250<l&&250<s)&&b.push([o,l,s]);var v=i.quantize(b,u),h=v?v.palette():null;e&&e(h)}})}))}}]),t}(),c=u;e.default=c},"3f40":function(t,e,n){"use strict";var r=n("cf95"),a=n.n(r);a.a},5745:function(t,e,n){"use strict";var r=n("4ea4");n("4160"),n("d81d"),n("fb6a"),n("d3b7"),n("25f0"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("262e")),o=r(n("2caf")),i=r(n("d4ec")),u=r(n("bee2"));function c(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),a=document.createRange();a.selectNodeContents(t),r.removeAllRanges(),r.addRange(a),e=r.toString()}return e}var l=function(){function t(e){(0,i.default)(this,t),this.resolveOptions(e),this.initSelection()}return(0,u.default)(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top="".concat(n,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=c(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=c(this.target),this.copyText()}},{key:"copyText",value:function(){var t;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!=typeof t||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();function s(){}s.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function a(){r.off(t,a),e.apply(n,arguments)}return a._=e,this.on(t,a,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,a=n.length;r<a;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],a=[];if(r&&e)for(var o=0,i=r.length;o<i;o++)r[o].fn!==e&&r[o].fn._!==e&&a.push(r[o]);return a.length?n[t]=a:delete n[t],this}};var d={node:function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},nodeList:function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},string:function(t){return"string"==typeof t||t instanceof String},fn:function(t){return"[object Function]"===Object.prototype.toString.call(t)}},f=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var b=Element.prototype;b.matches=b.matchesSelector||b.mozMatchesSelector||b.msMatchesSelector||b.oMatchesSelector||b.webkitMatchesSelector}function p(t,e){for(;t&&t.nodeType!==f;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}function v(t,e,n,r,a){var o=g.apply(this,arguments);return t.addEventListener(n,o,a),{destroy:function(){t.removeEventListener(n,o,a)}}}function h(t,e,n,r,a){return"function"==typeof t.addEventListener?v.apply(null,arguments):"function"==typeof n?v.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return v(t,e,n,r,a)})))}function g(t,e,n,r){return function(n){n.delegateTarget=p(n.target,e),n.delegateTarget&&r.call(t,n)}}function m(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!d.string(e))throw new TypeError("Second argument must be a String");if(!d.fn(n))throw new TypeError("Third argument must be a Function");if(d.node(t))return y(t,e,n);if(d.nodeList(t))return x(t,e,n);if(d.string(t))return k(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function y(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function x(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}function k(t,e,n){return h(document.body,t,e,n)}var w=function(t){(0,a.default)(n,t);var e=(0,o.default)(n);function n(t,r){var a;return(0,i.default)(this,n),a=e.call(this),a.resolveOptions(r),a.listenClick(t),a}return(0,u.default)(n,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"==typeof t.container?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=m(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return C("action",t)}},{key:"defaultTarget",value:function(t){var e=C("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return C("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),n}(s);function C(t,e){var n="data-clipboard-".concat(t);if(e.hasAttribute(n))return e.getAttribute(n)}var E=w;e.default=E},a97b:function(t,e,n){"use strict";n.r(e);var r=n("32c6"),a=n("20e8");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("cf4b");var i,u=n("f0c5"),c=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"558f276a",null,!1,r["a"],i);e["default"]=c.exports},acf9:function(t,e,n){"use strict";var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("5745")),o={getClipboardData:function(t,e,n){var r=window.event||n||{},o=new a.default("",{text:function(){return t}});o.on("success",(function(t){"function"==typeof e&&e(!0),o.off("success"),o.off("error"),o.destroy()})),o.on("error",(function(t){"function"==typeof e&&e(!1),o.off("success"),o.off("error"),o.destroy()})),o.onClick(r)}},i={getClipboardData:o.getClipboardData};e.default=i},b4ab:function(t,e,n){var r=n("ba2a");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("3edcfe8d",r,!0,{sourceMap:!1,shadowMode:!1})},ba2a:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".container[data-v-558f276a]{padding:%?20?% 0 %?120?% 0;box-sizing:border-box}.header[data-v-558f276a]{padding:%?80?% %?90?% %?60?% %?90?%;box-sizing:border-box}.title[data-v-558f276a]{font-size:%?34?%;color:#333;font-weight:500}.sub-title[data-v-558f276a]{font-size:%?24?%;color:#7a7a7a;padding-top:%?18?%}.tui-primary[data-v-558f276a]{color:#5677fc}.tui-btn-box[data-v-558f276a]{padding:%?30?% %?40?%;box-sizing:border-box;margin-top:%?40?%}.tui-canvas-box[data-v-558f276a]{width:%?600?%;height:%?600?%;padding:0 %?30?%;box-sizing:border-box;display:flex;align-items:center;justify-content:center;background-color:#fff;margin:0 auto;box-shadow:0 4px 12px rgba(0,0,0,.1);overflow:hidden}.tui-image[data-v-558f276a]{max-width:%?600?%;max-height:%?600?%;display:block}.tui-canvas-box uni-text[data-v-558f276a]{color:#999}.tui-palette-canvas[data-v-558f276a]{position:fixed;z-index:10;left:-2000px;top:-2000px;pointer-events:none}.tui-colors-container[data-v-558f276a]{width:%?600?%;height:80px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,.1);border-radius:6px;overflow:hidden;margin:%?40?% auto 0;box-sizing:border-box}.tui-color[data-v-558f276a]{flex:1;flex-shrink:0;height:100%;font-size:%?24?%;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;word-break:break-all}",""]),t.exports=e},bf95:function(t,e,n){"use strict";n.r(e);var r=n("12a4"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},cdea:function(t,e,n){"use strict";n.r(e);var r=n("d32b"),a=n("bf95");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("3f40");var i,u=n("f0c5"),c=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"2e4b074b",null,!1,r["a"],i);e["default"]=c.exports},cf4b:function(t,e,n){"use strict";var r=n("b4ab"),a=n.n(r);a.a},cf95:function(t,e,n){var r=n("274b");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("e1b6fff6",r,!0,{sourceMap:!1,shadowMode:!1})},d32b:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-button",{staticClass:"tui-btn",class:[t.plain?"tui-"+t.type+"-outline":"tui-btn-"+(t.type||"primary"),t.getDisabledClass(t.disabled,t.type,t.plain),t.getShapeClass(t.shape,t.plain),t.getShadowClass(t.type,t.shadow,t.plain),t.bold?"tui-text-bold":"",t.link?"tui-btn__link":""],style:{width:t.width,height:t.height,lineHeight:t.height,fontSize:t.size+"rpx",margin:t.margin},attrs:{"hover-class":t.getHoverClass(t.disabled,t.type,t.plain),loading:t.loading,"form-type":t.formType,"open-type":t.openType,disabled:t.disabled},on:{getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.bindgetuserinfo.apply(void 0,arguments)},getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.bindgetphonenumber.apply(void 0,arguments)},contact:function(e){arguments[0]=e=t.$handleEvent(e),t.bindcontact.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.binderror.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},o=[]},e0e6:function(t,e,n){"use strict";n("c975"),n("26e9"),n("d3b7"),n("acd8"),n("e25e"),n("4d63"),n("ac1f"),n("25f0"),n("5319"),n("1276"),n("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={trim:function(t){return t.replace(/(^\s*)|(\s*$)/g,"")},replaceAll:function(t,e,n){return t.replace(new RegExp(e,"gm"),n)},formatNumber:function(t){return 11===t.length?t.replace(/^(\d{3})\d{4}(\d{4})$/,"$1****$2"):t},rmoney:function(t){return parseFloat(t).toFixed(2).toString().split("").reverse().join("").replace(/(\d{3})/g,"$1,").replace(/\,$/,"").split("").reverse().join("")},formatDate:function(t,e){if(e){~e.indexOf(".")&&(e=e.substring(0,e.indexOf("."))),e=e.toString().replace("T"," ").replace(/\-/g,"/");var n,r="ymdhis";t||(t="y-m-d h:i:s"),n=e?new Date(e):new Date;var a=n.getMonth()+1,o=n.getDate(),i=n.getHours(),u=n.getMinutes(),c=n.getSeconds();a=a<10?"0"+a:a,o=o<10?"0"+o:o,i=i<10?"0"+i:i,u=u<10?"0"+u:u,c=c<10?"0"+c:c;for(var l=[n.getFullYear().toString(),a.toString(),o.toString(),i.toString(),u.toString(),c.toString()],s=0;s<l.length;s++)t=t.replace(r.charAt(s),l[s]);return t}return""},rgbToHex:function(t,e,n){return"#"+r.toHex(t)+r.toHex(e)+r.toHex(n)},toHex:function(t){return t=parseInt(t,10),isNaN(t)?"00":(t=Math.max(0,Math.min(t,255)),"0123456789ABCDEF".charAt((t-t%16)/16)+"0123456789ABCDEF".charAt(t%16))},hexToRgb:function(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}},a={trim:r.trim,replaceAll:r.replaceAll,formatNumber:r.formatNumber,rmoney:r.rmoney,formatDate:r.formatDate,rgbToHex:r.rgbToHex,hexToRgb:r.hexToRgb};e.default=a},e80c:function(t,e,n){"use strict";(function(t){var r=n("4ea4");n("99af"),n("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("35cd")),o=r(n("acf9")),i=r(n("e0e6")),u={data:function(){return{imgUrl:"",canvasWidth:200,canvasHeight:200,colorAnalysis:null,winWidth:375,maxColors:5,colors:[],rbgColors:[]}},onReady:function(){this.colorAnalysis=new a.default("tui-color-palette"),this.winWidth=uni.getSystemInfoSync().windowWidth},methods:{chooseImg:function(){var e=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(n){e.imgUrl=n.tempFilePaths[0],uni.getImageInfo({src:n.tempFilePaths[0],success:function(r){var a=r.width,o=r.height,u=.6*e.winWidth/Math.max(a,o),c=Math.floor(u*a),l=Math.floor(u*o);e.canvasWidth=c,e.canvasHeight=l,e.colorAnalysis.getPalette({width:c,height:l,imgPath:n.tempFilePaths[0],maxColors:e.maxColors,step:1},(function(n){if(n){var r=[];n=n.map((function(t){return r.push("".concat(t[0],",").concat(t[1],",").concat(t[2])),i.default.rgbToHex(t[0],t[1],t[2])})),t("log",n,r," at pages/extend/color-analysis/color-analysis.vue:89"),e.colors=n,e.rbgColors=r}}))}})}})},setMaxColors:function(){this.maxColors=4,this.tui.toast("设置成功，重新上传图片查看")},copyColor:function(t){var e=this,n=t.currentTarget.dataset.color;o.default.getClipboardData(n,(function(t){e.tui.toast("颜色值已复制")}))}}};e.default=u}).call(this,n("0de9")["log"])}}]);