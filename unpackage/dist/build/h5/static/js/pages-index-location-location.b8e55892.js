(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-location-location"],{"03dd":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,"uni-page-body[data-v-1eed06aa]{height:100%;display:flex;justify-content:center}.container[data-v-1eed06aa]{width:100%;height:100%;position:relative}.tui-maps[data-v-1eed06aa]{width:100%;height:100%}.cover-image[data-v-1eed06aa]{height:%?68?%;width:%?68?%;position:fixed;\n\ntop:50%;left:50%;margin-top:%?-30?%;margin-left:%?-30?%}.header-box[data-v-1eed06aa]{width:100%;padding-top:%?8?%;box-sizing:border-box;border-radius:%?24?%}.result-box[data-v-1eed06aa]{width:100%;padding:%?12?% %?30?%;box-sizing:border-box;color:#555;font-size:%?28?%;display:flex;flex-direction:column;justify-content:space-between;background:#fff;border-radius:%?24?%}.list-item[data-v-1eed06aa]::after{left:0}.badge[data-v-1eed06aa]{height:%?16?%;width:%?16?%;border-radius:%?8?%;background:#5677fc;margin-right:%?20?%;flex-shrink:0}.orange[data-v-1eed06aa]{background:#ff7900!important}.info[data-v-1eed06aa]{display:flex;align-items:center;padding:%?20?% 0}.ellipsis[data-v-1eed06aa]{width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tui-current__img[data-v-1eed06aa]{position:fixed;\n\nheight:%?80?%;width:%?80?%;bottom:%?80?%;right:%?60?%;z-index:9999}",""]),e.exports=t},"0f57":function(e,t,i){"use strict";var a=i("4ea4");i("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(i("3a73")),n={data:function(){return{address:"正在获取地址...",longitude:114.010857,latitude:22.63137,current_long:114.010857,current_lat:22.63137,key:"W4WBZ-TUD65-IDAIR-QPM36-HMFQ5-CGBZP",mapCtx:null,location:!1,qqmapsdk:null,mapObj:null,winHeight:"100%"}},onLoad:function(){var e=this;setTimeout((function(){e.qqmapsdk=new o.default({key:e.key}),e.currentLocation()}),100)},onReady:function(){},methods:{regionchange:function(e){var t=this,i="end"==e.type;i&&(this.address="正在获取地址...",this.mapCtx||(this.mapCtx=uni.createMapContext("maps")),this.mapCtx.getCenterLocation({type:"gcj02",success:function(e){t.latitude=e.latitude,t.longitude=e.longitude,t.current_long=e.latitude,t.current_lat=e.longitude,t.getAddressH5(e.longitude,e.latitude)}}))},getAddress:function(e,t){var i=this;this.qqmapsdk.reverseGeocoder({location:{latitude:t,longitude:e},success:function(e){i.address=e.result.formatted_addresses.recommend},fail:function(e){i.address="获取位置信息失败"}})},getAddressH5:function(e,t){var i=this,a="https://apis.map.qq.com/ws/geocoder/v1/?location=".concat(t+","+e,"&key=").concat(this.key,"&get_poi=0&callbackName=QQmap&output=jsonp&coord_type=5");this.tui.tuiJsonp(a,(function(e){0===e.status&&(i.address=e.result.formatted_addresses.recommend)}),"QQmap")},currentLocation:function(){var e=this;uni.getLocation({success:function(t){e.latitude=t.latitude,e.longitude=t.longitude,e.getAddressH5(t.longitude,t.latitude)},fail:function(t){e.getAddressH5(e.longitude,e.latitude)}})}}};t.default=n},1215:function(e,t,i){var a=i("03dd");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=i("4f06").default;o("9ece35fa",a,!0,{sourceMap:!1,shadowMode:!1})},"365f":function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return a}));var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"header-box"},[i("v-uni-view",{staticClass:"result-box"},[i("v-uni-view",{staticClass:"info list-item"},[i("v-uni-view",{staticClass:"badge"}),i("v-uni-view",{staticClass:"ellipsis"},[e._v(e._s(e.address))])],1),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"badge orange"}),i("v-uni-view",{staticClass:"ellipsis"},[e._v(e._s(e.current_long+","+e.current_lat))])],1)],1)],1),i("v-uni-map",{staticClass:"tui-maps",style:{height:e.winHeight},attrs:{id:"maps",longitude:e.longitude,latitude:e.latitude,scale:16,"show-location":!0},on:{regionchange:function(t){arguments[0]=t=e.$handleEvent(t),e.regionchange.apply(void 0,arguments)}}},[i("v-uni-cover-image",{staticClass:"cover-image",attrs:{src:"/static/images/maps/location.png"}}),i("v-uni-cover-image",{staticClass:"tui-current__img",attrs:{src:"/static/images/maps/current.png?v=1"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.currentLocation.apply(void 0,arguments)}}})],1)],1)},n=[]},"3a73":function(e,t,i){"use strict";var a=i("4ea4");i("4de4"),i("acd8"),i("ac1f"),i("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(i("d4ec")),n=a(i("bee2")),s={KEY_ERR:311,KEY_ERR_MSG:"key格式错误",PARAM_ERR:310,PARAM_ERR_MSG:"请求参数信息有误",SYSTEM_ERR:600,SYSTEM_ERR_MSG:"系统错误",WX_ERR_CODE:1e3,WX_OK_CODE:200},r="https://apis.map.qq.com/ws/",l=r+"place/v1/search",d=r+"place/v1/suggestion",c=r+"geocoder/v1/",u=r+"district/v1/list",f=r+"district/v1/getchildren",g=r+"distance/v1/",p=6378136.49,v={location2query:function(e){if("string"==typeof e)return e;for(var t="",i=0;i<e.length;i++){var a=e[i];t&&(t+=";"),a.location&&(t=t+a.location.lat+","+a.location.lng),a.latitude&&a.longitude&&(t=t+a.latitude+","+a.longitude)}return t},rad:function(e){return e*Math.PI/180},getEndLocation:function(e){for(var t=e.split(";"),i=[],a=0;a<t.length;a++)i.push({lat:parseFloat(t[a].split(",")[0]),lng:parseFloat(t[a].split(",")[1])});return i},getDistance:function(e,t,i,a){var o=this.rad(e),n=this.rad(i),s=o-n,r=this.rad(t)-this.rad(a),l=2*Math.asin(Math.sqrt(Math.pow(Math.sin(s/2),2)+Math.cos(o)*Math.cos(n)*Math.pow(Math.sin(r/2),2)));return l*=p,l=Math.round(1e4*l)/1e4,parseFloat(l.toFixed(0))},getWXLocation:function(e,t,i){wx.getLocation({type:"gcj02",success:e,fail:t,complete:i})},getLocationParam:function(e){if("string"==typeof e){var t=e.split(",");e=2===t.length?{latitude:e.split(",")[0],longitude:e.split(",")[1]}:{}}return e},polyfillParam:function(e){e.success=e.success||function(){},e.fail=e.fail||function(){},e.complete=e.complete||function(){}},checkParamKeyEmpty:function(e,t){if(!e[t]){var i=this.buildErrorConfig(s.PARAM_ERR,s.PARAM_ERR_MSG+t+"参数格式有误");return e.fail(i),e.complete(i),!0}return!1},checkKeyword:function(e){return!this.checkParamKeyEmpty(e,"keyword")},checkLocation:function(e){var t=this.getLocationParam(e.location);if(!t||!t.latitude||!t.longitude){var i=this.buildErrorConfig(s.PARAM_ERR,s.PARAM_ERR_MSG+" location参数格式有误");return e.fail(i),e.complete(i),!1}return!0},buildErrorConfig:function(e,t){return{status:e,message:t}},handleData:function(e,t,i){if("search"===i){for(var a=t.data,o=[],n=0;n<a.length;n++)o.push({id:a[n].id||null,title:a[n].title||null,latitude:a[n].location&&a[n].location.lat||null,longitude:a[n].location&&a[n].location.lng||null,address:a[n].address||null,category:a[n].category||null,tel:a[n].tel||null,adcode:a[n].ad_info&&a[n].ad_info.adcode||null,city:a[n].ad_info&&a[n].ad_info.city||null,district:a[n].ad_info&&a[n].ad_info.district||null,province:a[n].ad_info&&a[n].ad_info.province||null});e.success(t,{searchResult:a,searchSimplify:o})}else if("suggest"===i){var s=t.data,r=[];for(n=0;n<s.length;n++)r.push({adcode:s[n].adcode||null,address:s[n].address||null,category:s[n].category||null,city:s[n].city||null,district:s[n].district||null,id:s[n].id||null,latitude:s[n].location&&s[n].location.lat||null,longitude:s[n].location&&s[n].location.lng||null,province:s[n].province||null,title:s[n].title||null,type:s[n].type||null});e.success(t,{suggestResult:s,suggestSimplify:r})}else if("reverseGeocoder"===i){var l=t.result,d={address:l.address||null,latitude:l.location&&l.location.lat||null,longitude:l.location&&l.location.lng||null,adcode:l.ad_info&&l.ad_info.adcode||null,city:l.address_component&&l.address_component.city||null,district:l.address_component&&l.address_component.district||null,nation:l.address_component&&l.address_component.nation||null,province:l.address_component&&l.address_component.province||null,street:l.address_component&&l.address_component.street||null,street_number:l.address_component&&l.address_component.street_number||null,recommend:l.formatted_addresses&&l.formatted_addresses.recommend||null,rough:l.formatted_addresses&&l.formatted_addresses.rough||null};if(l.pois){var c=l.pois,u=[];for(n=0;n<c.length;n++)u.push({id:c[n].id||null,title:c[n].title||null,latitude:c[n].location&&c[n].location.lat||null,longitude:c[n].location&&c[n].location.lng||null,address:c[n].address||null,category:c[n].category||null,adcode:c[n].ad_info&&c[n].ad_info.adcode||null,city:c[n].ad_info&&c[n].ad_info.city||null,district:c[n].ad_info&&c[n].ad_info.district||null,province:c[n].ad_info&&c[n].ad_info.province||null});e.success(t,{reverseGeocoderResult:l,reverseGeocoderSimplify:d,pois:c,poisSimplify:u})}else e.success(t,{reverseGeocoderResult:l,reverseGeocoderSimplify:d})}else if("geocoder"===i){var f=t.result,g={title:f.title||null,latitude:f.location&&f.location.lat||null,longitude:f.location&&f.location.lng||null,adcode:f.ad_info&&f.ad_info.adcode||null,province:f.address_components&&f.address_components.province||null,city:f.address_components&&f.address_components.city||null,district:f.address_components&&f.address_components.district||null,street:f.address_components&&f.address_components.street||null,street_number:f.address_components&&f.address_components.street_number||null,level:f.level||null};e.success(t,{geocoderResult:f,geocoderSimplify:g})}else if("getCityList"===i){var p=t.result[0],v=t.result[1],m=t.result[2];e.success(t,{provinceResult:p,cityResult:v,districtResult:m})}else if("getDistrictByCityId"===i){var _=t.result[0];e.success(t,_)}else if("calculateDistance"===i){var h=t.result.elements,y=[];for(n=0;n<h.length;n++)y.push(h[n].distance);e.success(t,{calculateDistanceResult:h,distance:y})}else e.success(t)},buildWxRequestConfig:function(e,t,i){var a=this;return t.header={"content-type":"application/json"},t.method="GET",t.success=function(t){var o=t.data;0===o.status?a.handleData(e,o,i):e.fail(o)},t.fail=function(t){t.statusCode=s.WX_ERR_CODE,e.fail(a.buildErrorConfig(s.WX_ERR_CODE,t.errMsg))},t.complete=function(t){var i=+t.statusCode;switch(i){case s.WX_ERR_CODE:e.complete(a.buildErrorConfig(s.WX_ERR_CODE,t.errMsg));break;case s.WX_OK_CODE:var o=t.data;0===o.status?e.complete(o):e.complete(a.buildErrorConfig(o.status,o.message));break;default:e.complete(a.buildErrorConfig(s.SYSTEM_ERR,s.SYSTEM_ERR_MSG))}},t},locationProcess:function(e,t,i,a){var o=this;if(i=i||function(t){t.statusCode=s.WX_ERR_CODE,e.fail(o.buildErrorConfig(s.WX_ERR_CODE,t.errMsg))},a=a||function(t){t.statusCode==s.WX_ERR_CODE&&e.complete(o.buildErrorConfig(s.WX_ERR_CODE,t.errMsg))},e.location){if(o.checkLocation(e)){var n=v.getLocationParam(e.location);t(n)}}else o.getWXLocation(t,i,a)}},m=function(){function e(t){if((0,o.default)(this,e),!t.key)throw Error("key值不能为空");this.key=t.key}return(0,n.default)(e,[{key:"search",value:function(e){var t=this;if(e=e||{},v.polyfillParam(e),v.checkKeyword(e)){var i={keyword:e.keyword,orderby:e.orderby||"_distance",page_size:e.page_size||10,page_index:e.page_index||1,output:"json",key:t.key};e.address_format&&(i.address_format=e.address_format),e.filter&&(i.filter=e.filter);var a=e.distance||"1000",o=e.auto_extend||1,n=null,s=null;e.region&&(n=e.region),e.rectangle&&(s=e.rectangle);var r=function(t){i.boundary=n&&!s?"region("+n+","+o+","+t.latitude+","+t.longitude+")":s&&!n?"rectangle("+s+")":"nearby("+t.latitude+","+t.longitude+","+a+","+o+")",wx.request(v.buildWxRequestConfig(e,{url:l,data:i},"search"))};v.locationProcess(e,r)}}},{key:"getSuggestion",value:function(e){var t=this;if(e=e||{},v.polyfillParam(e),v.checkKeyword(e)){var i={keyword:e.keyword,region:e.region||"全国",region_fix:e.region_fix||0,policy:e.policy||0,page_size:e.page_size||10,page_index:e.page_index||1,get_subpois:e.get_subpois||0,output:"json",key:t.key};if(e.address_format&&(i.address_format=e.address_format),e.filter&&(i.filter=e.filter),e.location){var a=function(t){i.location=t.latitude+","+t.longitude,wx.request(v.buildWxRequestConfig(e,{url:d,data:i},"suggest"))};v.locationProcess(e,a)}else wx.request(v.buildWxRequestConfig(e,{url:d,data:i},"suggest"))}}},{key:"reverseGeocoder",value:function(e){var t=this;e=e||{},v.polyfillParam(e);var i={coord_type:e.coord_type||5,get_poi:e.get_poi||0,output:"json",key:t.key};e.poi_options&&(i.poi_options=e.poi_options);var a=function(t){i.location=t.latitude+","+t.longitude,wx.request(v.buildWxRequestConfig(e,{url:c,data:i},"reverseGeocoder"))};v.locationProcess(e,a)}},{key:"geocoder",value:function(e){var t=this;if(e=e||{},v.polyfillParam(e),!v.checkParamKeyEmpty(e,"address")){var i={address:e.address,output:"json",key:t.key};e.region&&(i.region=e.region),wx.request(v.buildWxRequestConfig(e,{url:c,data:i},"geocoder"))}}},{key:"getCityList",value:function(e){var t=this;e=e||{},v.polyfillParam(e);var i={output:"json",key:t.key};wx.request(v.buildWxRequestConfig(e,{url:u,data:i},"getCityList"))}},{key:"getDistrictByCityId",value:function(e){var t=this;if(e=e||{},v.polyfillParam(e),!v.checkParamKeyEmpty(e,"id")){var i={id:e.id||"",output:"json",key:t.key};wx.request(v.buildWxRequestConfig(e,{url:f,data:i},"getDistrictByCityId"))}}},{key:"calculateDistance",value:function(e){var t=this;if(e=e||{},v.polyfillParam(e),!v.checkParamKeyEmpty(e,"to")){var i={mode:e.mode||"walking",to:v.location2query(e.to),output:"json",key:t.key};if(e.from&&(e.location=e.from),"straight"==i.mode){var a=function(t){for(var a=v.getEndLocation(i.to),o={message:"query ok",result:{elements:[]},status:0},n=0;n<a.length;n++)o.result.elements.push({distance:v.getDistance(t.latitude,t.longitude,a[n].lat,a[n].lng),duration:0,from:{lat:t.latitude,lng:t.longitude},to:{lat:a[n].lat,lng:a[n].lng}});var s=o.result.elements,r=[];for(n=0;n<s.length;n++)r.push(s[n].distance);return e.success(o,{calculateResult:s,distanceResult:r})};v.locationProcess(e,a)}else{a=function(t){i.from=t.latitude+","+t.longitude,wx.request(v.buildWxRequestConfig(e,{url:g,data:i},"calculateDistance"))};v.locationProcess(e,a)}}}}]),e}(),_=m;t.default=_},"9f9d":function(e,t,i){"use strict";i.r(t);var a=i("365f"),o=i("fe9b");for(var n in o)"default"!==n&&function(e){i.d(t,e,(function(){return o[e]}))}(n);i("c1a2");var s,r=i("f0c5"),l=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"1eed06aa",null,!1,a["a"],s);t["default"]=l.exports},c1a2:function(e,t,i){"use strict";var a=i("1215"),o=i.n(a);o.a},fe9b:function(e,t,i){"use strict";i.r(t);var a=i("0f57"),o=i.n(a);for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);t["default"]=o.a}}]);