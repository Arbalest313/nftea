(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-longlat-longlat"],{"0631":function(t,e,o){"use strict";o.r(e);var n=o("a081"),i=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a},"149d":function(t,e,o){"use strict";o.r(e);var n=o("8a88"),i=o("0631");for(var a in i)"default"!==a&&function(t){o.d(e,t,(function(){return i[t]}))}(a);o("f116");var s,l=o("f0c5"),r=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,"60235ccd",null,!1,n["a"],s);e["default"]=r.exports},"3a73":function(t,e,o){"use strict";var n=o("4ea4");o("4de4"),o("acd8"),o("ac1f"),o("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(o("d4ec")),a=n(o("bee2")),s={KEY_ERR:311,KEY_ERR_MSG:"key格式错误",PARAM_ERR:310,PARAM_ERR_MSG:"请求参数信息有误",SYSTEM_ERR:600,SYSTEM_ERR_MSG:"系统错误",WX_ERR_CODE:1e3,WX_OK_CODE:200},l="https://apis.map.qq.com/ws/",r=l+"place/v1/search",c=l+"place/v1/suggestion",u=l+"geocoder/v1/",d=l+"district/v1/list",f=l+"district/v1/getchildren",p=l+"distance/v1/",g=6378136.49,_={location2query:function(t){if("string"==typeof t)return t;for(var e="",o=0;o<t.length;o++){var n=t[o];e&&(e+=";"),n.location&&(e=e+n.location.lat+","+n.location.lng),n.latitude&&n.longitude&&(e=e+n.latitude+","+n.longitude)}return e},rad:function(t){return t*Math.PI/180},getEndLocation:function(t){for(var e=t.split(";"),o=[],n=0;n<e.length;n++)o.push({lat:parseFloat(e[n].split(",")[0]),lng:parseFloat(e[n].split(",")[1])});return o},getDistance:function(t,e,o,n){var i=this.rad(t),a=this.rad(o),s=i-a,l=this.rad(e)-this.rad(n),r=2*Math.asin(Math.sqrt(Math.pow(Math.sin(s/2),2)+Math.cos(i)*Math.cos(a)*Math.pow(Math.sin(l/2),2)));return r*=g,r=Math.round(1e4*r)/1e4,parseFloat(r.toFixed(0))},getWXLocation:function(t,e,o){wx.getLocation({type:"gcj02",success:t,fail:e,complete:o})},getLocationParam:function(t){if("string"==typeof t){var e=t.split(",");t=2===e.length?{latitude:t.split(",")[0],longitude:t.split(",")[1]}:{}}return t},polyfillParam:function(t){t.success=t.success||function(){},t.fail=t.fail||function(){},t.complete=t.complete||function(){}},checkParamKeyEmpty:function(t,e){if(!t[e]){var o=this.buildErrorConfig(s.PARAM_ERR,s.PARAM_ERR_MSG+e+"参数格式有误");return t.fail(o),t.complete(o),!0}return!1},checkKeyword:function(t){return!this.checkParamKeyEmpty(t,"keyword")},checkLocation:function(t){var e=this.getLocationParam(t.location);if(!e||!e.latitude||!e.longitude){var o=this.buildErrorConfig(s.PARAM_ERR,s.PARAM_ERR_MSG+" location参数格式有误");return t.fail(o),t.complete(o),!1}return!0},buildErrorConfig:function(t,e){return{status:t,message:e}},handleData:function(t,e,o){if("search"===o){for(var n=e.data,i=[],a=0;a<n.length;a++)i.push({id:n[a].id||null,title:n[a].title||null,latitude:n[a].location&&n[a].location.lat||null,longitude:n[a].location&&n[a].location.lng||null,address:n[a].address||null,category:n[a].category||null,tel:n[a].tel||null,adcode:n[a].ad_info&&n[a].ad_info.adcode||null,city:n[a].ad_info&&n[a].ad_info.city||null,district:n[a].ad_info&&n[a].ad_info.district||null,province:n[a].ad_info&&n[a].ad_info.province||null});t.success(e,{searchResult:n,searchSimplify:i})}else if("suggest"===o){var s=e.data,l=[];for(a=0;a<s.length;a++)l.push({adcode:s[a].adcode||null,address:s[a].address||null,category:s[a].category||null,city:s[a].city||null,district:s[a].district||null,id:s[a].id||null,latitude:s[a].location&&s[a].location.lat||null,longitude:s[a].location&&s[a].location.lng||null,province:s[a].province||null,title:s[a].title||null,type:s[a].type||null});t.success(e,{suggestResult:s,suggestSimplify:l})}else if("reverseGeocoder"===o){var r=e.result,c={address:r.address||null,latitude:r.location&&r.location.lat||null,longitude:r.location&&r.location.lng||null,adcode:r.ad_info&&r.ad_info.adcode||null,city:r.address_component&&r.address_component.city||null,district:r.address_component&&r.address_component.district||null,nation:r.address_component&&r.address_component.nation||null,province:r.address_component&&r.address_component.province||null,street:r.address_component&&r.address_component.street||null,street_number:r.address_component&&r.address_component.street_number||null,recommend:r.formatted_addresses&&r.formatted_addresses.recommend||null,rough:r.formatted_addresses&&r.formatted_addresses.rough||null};if(r.pois){var u=r.pois,d=[];for(a=0;a<u.length;a++)d.push({id:u[a].id||null,title:u[a].title||null,latitude:u[a].location&&u[a].location.lat||null,longitude:u[a].location&&u[a].location.lng||null,address:u[a].address||null,category:u[a].category||null,adcode:u[a].ad_info&&u[a].ad_info.adcode||null,city:u[a].ad_info&&u[a].ad_info.city||null,district:u[a].ad_info&&u[a].ad_info.district||null,province:u[a].ad_info&&u[a].ad_info.province||null});t.success(e,{reverseGeocoderResult:r,reverseGeocoderSimplify:c,pois:u,poisSimplify:d})}else t.success(e,{reverseGeocoderResult:r,reverseGeocoderSimplify:c})}else if("geocoder"===o){var f=e.result,p={title:f.title||null,latitude:f.location&&f.location.lat||null,longitude:f.location&&f.location.lng||null,adcode:f.ad_info&&f.ad_info.adcode||null,province:f.address_components&&f.address_components.province||null,city:f.address_components&&f.address_components.city||null,district:f.address_components&&f.address_components.district||null,street:f.address_components&&f.address_components.street||null,street_number:f.address_components&&f.address_components.street_number||null,level:f.level||null};t.success(e,{geocoderResult:f,geocoderSimplify:p})}else if("getCityList"===o){var g=e.result[0],_=e.result[1],v=e.result[2];t.success(e,{provinceResult:g,cityResult:_,districtResult:v})}else if("getDistrictByCityId"===o){var y=e.result[0];t.success(e,y)}else if("calculateDistance"===o){var m=e.result.elements,h=[];for(a=0;a<m.length;a++)h.push(m[a].distance);t.success(e,{calculateDistanceResult:m,distance:h})}else t.success(e)},buildWxRequestConfig:function(t,e,o){var n=this;return e.header={"content-type":"application/json"},e.method="GET",e.success=function(e){var i=e.data;0===i.status?n.handleData(t,i,o):t.fail(i)},e.fail=function(e){e.statusCode=s.WX_ERR_CODE,t.fail(n.buildErrorConfig(s.WX_ERR_CODE,e.errMsg))},e.complete=function(e){var o=+e.statusCode;switch(o){case s.WX_ERR_CODE:t.complete(n.buildErrorConfig(s.WX_ERR_CODE,e.errMsg));break;case s.WX_OK_CODE:var i=e.data;0===i.status?t.complete(i):t.complete(n.buildErrorConfig(i.status,i.message));break;default:t.complete(n.buildErrorConfig(s.SYSTEM_ERR,s.SYSTEM_ERR_MSG))}},e},locationProcess:function(t,e,o,n){var i=this;if(o=o||function(e){e.statusCode=s.WX_ERR_CODE,t.fail(i.buildErrorConfig(s.WX_ERR_CODE,e.errMsg))},n=n||function(e){e.statusCode==s.WX_ERR_CODE&&t.complete(i.buildErrorConfig(s.WX_ERR_CODE,e.errMsg))},t.location){if(i.checkLocation(t)){var a=_.getLocationParam(t.location);e(a)}}else i.getWXLocation(e,o,n)}},v=function(){function t(e){if((0,i.default)(this,t),!e.key)throw Error("key值不能为空");this.key=e.key}return(0,a.default)(t,[{key:"search",value:function(t){var e=this;if(t=t||{},_.polyfillParam(t),_.checkKeyword(t)){var o={keyword:t.keyword,orderby:t.orderby||"_distance",page_size:t.page_size||10,page_index:t.page_index||1,output:"json",key:e.key};t.address_format&&(o.address_format=t.address_format),t.filter&&(o.filter=t.filter);var n=t.distance||"1000",i=t.auto_extend||1,a=null,s=null;t.region&&(a=t.region),t.rectangle&&(s=t.rectangle);var l=function(e){o.boundary=a&&!s?"region("+a+","+i+","+e.latitude+","+e.longitude+")":s&&!a?"rectangle("+s+")":"nearby("+e.latitude+","+e.longitude+","+n+","+i+")",wx.request(_.buildWxRequestConfig(t,{url:r,data:o},"search"))};_.locationProcess(t,l)}}},{key:"getSuggestion",value:function(t){var e=this;if(t=t||{},_.polyfillParam(t),_.checkKeyword(t)){var o={keyword:t.keyword,region:t.region||"全国",region_fix:t.region_fix||0,policy:t.policy||0,page_size:t.page_size||10,page_index:t.page_index||1,get_subpois:t.get_subpois||0,output:"json",key:e.key};if(t.address_format&&(o.address_format=t.address_format),t.filter&&(o.filter=t.filter),t.location){var n=function(e){o.location=e.latitude+","+e.longitude,wx.request(_.buildWxRequestConfig(t,{url:c,data:o},"suggest"))};_.locationProcess(t,n)}else wx.request(_.buildWxRequestConfig(t,{url:c,data:o},"suggest"))}}},{key:"reverseGeocoder",value:function(t){var e=this;t=t||{},_.polyfillParam(t);var o={coord_type:t.coord_type||5,get_poi:t.get_poi||0,output:"json",key:e.key};t.poi_options&&(o.poi_options=t.poi_options);var n=function(e){o.location=e.latitude+","+e.longitude,wx.request(_.buildWxRequestConfig(t,{url:u,data:o},"reverseGeocoder"))};_.locationProcess(t,n)}},{key:"geocoder",value:function(t){var e=this;if(t=t||{},_.polyfillParam(t),!_.checkParamKeyEmpty(t,"address")){var o={address:t.address,output:"json",key:e.key};t.region&&(o.region=t.region),wx.request(_.buildWxRequestConfig(t,{url:u,data:o},"geocoder"))}}},{key:"getCityList",value:function(t){var e=this;t=t||{},_.polyfillParam(t);var o={output:"json",key:e.key};wx.request(_.buildWxRequestConfig(t,{url:d,data:o},"getCityList"))}},{key:"getDistrictByCityId",value:function(t){var e=this;if(t=t||{},_.polyfillParam(t),!_.checkParamKeyEmpty(t,"id")){var o={id:t.id||"",output:"json",key:e.key};wx.request(_.buildWxRequestConfig(t,{url:f,data:o},"getDistrictByCityId"))}}},{key:"calculateDistance",value:function(t){var e=this;if(t=t||{},_.polyfillParam(t),!_.checkParamKeyEmpty(t,"to")){var o={mode:t.mode||"walking",to:_.location2query(t.to),output:"json",key:e.key};if(t.from&&(t.location=t.from),"straight"==o.mode){var n=function(e){for(var n=_.getEndLocation(o.to),i={message:"query ok",result:{elements:[]},status:0},a=0;a<n.length;a++)i.result.elements.push({distance:_.getDistance(e.latitude,e.longitude,n[a].lat,n[a].lng),duration:0,from:{lat:e.latitude,lng:e.longitude},to:{lat:n[a].lat,lng:n[a].lng}});var s=i.result.elements,l=[];for(a=0;a<s.length;a++)l.push(s[a].distance);return t.success(i,{calculateResult:s,distanceResult:l})};_.locationProcess(t,n)}else{n=function(e){o.from=e.latitude+","+e.longitude,wx.request(_.buildWxRequestConfig(t,{url:p,data:o},"calculateDistance"))};_.locationProcess(t,n)}}}}]),t}(),y=v;e.default=y},"8a88":function(t,e,o){"use strict";var n;o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"container"},[o("v-uni-view",{staticClass:"result"},[o("v-uni-view",{staticClass:"city"},[t._v("所选城市："+t._s(t.cityName))]),o("v-uni-view",{staticClass:"city"},[t._v("latitude："+t._s(t.latitude))]),o("v-uni-view",[t._v("longitude："+t._s(t.longitude))])],1),o("v-uni-view",{staticClass:"btn-box"},[o("v-uni-button",{staticClass:"tui-button-primary",attrs:{"hover-class":"tui-button-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectCity.apply(void 0,arguments)}}},[t._v("请选择地址")])],1),o("v-uni-view",{staticClass:"tips"},[t._v("温馨提示：例子为地址转经纬度，经纬度转地址的例子也包含在此代码中，请从GitHub下载源码查看")])],1)},a=[]},a081:function(t,e,o){"use strict";(function(t){var n=o("4ea4");o("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(o("3a73")),a={data:function(){return{cityName:"深圳",latitude:"",longitude:"",qqmapsdk:null,key:"W4WBZ-TUD65-IDAIR-QPM36-HMFQ5-CGBZP"}},onLoad:function(){var t=this;uni.$on("emit",(function(e){t.cityName=e,t.getLonglatByLocation()})),this.qqmapsdk=new i.default({key:this.key}),setTimeout((function(){t.getLonglatByLocation()}),200)},methods:{getLonglatByLocation:function(){var t=this,e="https://apis.map.qq.com/ws/geocoder/v1/?address=".concat(this.cityName,"&key=").concat(this.key,"&callbackName=QQmap&output=jsonp");this.tui.tuiJsonp(e,(function(e){0===e.status&&(t.latitude=e.result.location.lat,t.longitude=e.result.location.lng)}),"QQmap")},getLocationByLonglat:function(e,o){var n="https://apis.map.qq.com/ws/geocoder/v1/?location=".concat(e+","+o,"&key=").concat(this.key,"&callbackName=QQmap&output=jsonp&coord_type=5&get_poi=0");this.tui.tuiJsonp(n,(function(e){0===e.status&&t("log",e.result.address_component," at pages/index/longlat/longlat.vue:72")}),"QQmap")},selectCity:function(){uni.navigateTo({url:"../selectCity/selectCity"})}}};e.default=a}).call(this,o("0de9")["log"])},b8c0:function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,".result[data-v-60235ccd]{padding:%?80?% %?50?% %?80?% %?50?%;background:#fff;color:#333;font-size:%?32?%}.city[data-v-60235ccd]{padding-bottom:%?30?%}.btn-box[data-v-60235ccd]{padding:%?80?% %?32?% %?30?% %?32?%}.tips[data-v-60235ccd]{padding:%?30?%;font-size:%?26?%;color:#666}",""]),t.exports=e},efa3:function(t,e,o){var n=o("b8c0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("913f3a24",n,!0,{sourceMap:!1,shadowMode:!1})},f116:function(t,e,o){"use strict";var n=o("efa3"),i=o.n(n);i.a}}]);