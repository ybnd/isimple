(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{381:function(t,e,r){var content=r(385);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("0a18e831",content,!0,{sourceMap:!1})},382:function(t,e,r){var content=r(387);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("20035751",content,!0,{sourceMap:!1})},383:function(t,e,r){"use strict";var n={name:"PageHeaderItem"},o=(r(384),r(18)),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"page-header-item"},[this._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},384:function(t,e,r){"use strict";var n=r(381);r.n(n).a},385:function(t,e,r){(e=r(31)(!1)).push([t.i,".page-header-item{flex:0 1 auto;margin-top:4px;margin-bottom:4px;background:#c2cfd6;display:flex;padding-left:.5rem;overflow:visible;height:30px;min-height:30px;max-height:30px;min-width:20px}.page-header-item .btn{height:30px;padding:4px}.page-header-item *{height:30px;max-height:30px;margin-right:4px}.header-button-icon{width:30px;font-size:14px;display:flex}.header-button-icon i{max-height:22px;max-width:22px;margin:0;padding:4px 0 0;flex-shrink:1;flex-grow:1}",""]),t.exports=e},386:function(t,e,r){"use strict";var n=r(382);r.n(n).a},387:function(t,e,r){(e=r(31)(!1)).push([t.i,".page-header{flex-grow:0!important;flex-shrink:0!important;height:38px!important;margin-bottom:0!important;border-bottom:0!important;border-radius:0!important;width:calc(100vw - 120px);display:flex;flex-direction:row;background:#c2cfd6;overflow:visible}",""]),t.exports=e},389:function(t,e,r){"use strict";var n={name:"PageHeader",props:{},components:{PageHeaderItem:r(383).a},methods:{}},o=(r(386),r(18)),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"page-header"},[this._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},391:function(t,e,r){"use strict";function n(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=new Date(0);return e.setSeconds(t,t%1*1e3),e.toISOString().substr(14,7)}r.d(e,"a",(function(){return n}))},446:function(t,e,r){var content=r(537);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("7d11b8c8",content,!0,{sourceMap:!1})},447:function(t,e,r){var content=r(539);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("bdf478ac",content,!0,{sourceMap:!1})},536:function(t,e,r){"use strict";var n=r(446);r.n(n).a},537:function(t,e,r){(e=r(31)(!1)).push([t.i,".result-container{display:flex;flex-direction:column;overflow:hidden;padding-top:8px}.result{position:relative;flex-shrink:1;display:flex}",""]),t.exports=e},538:function(t,e,r){"use strict";var n=r(447);r.n(n).a},539:function(t,e,r){(e=r(31)(!1)).push([t.i,".fullpage-result-container{width:calc(100vw - 120px);height:calc(100vh - 38px);display:flex;flex-direction:column;overflow:hidden}.fullpage-result{position:relative;flex-shrink:1;flex-basis:100vh;max-height:100vh;min-height:200px;display:flex}.fullpage-result,.fullpage-result canvas{width:calc(100vw - 120px)}",""]),t.exports=e},543:function(t,e,r){"use strict";r.r(e);r(22),r(20);var n=r(2),o=(r(53),r(4)),l=r(33),c=(r(19),r(14),r(21),r(5)),f=r(166),d=r(11),h=r(540),m=r(391);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={name:"ResultChart",extends:h.a,mixins:[h.b.reactiveProp],props:["options"],mounted:function(){this.renderChart(this.chartData,function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.default_options,{},this.options))},data:function(){return{responsive:!0,maintainAspectRatio:!1,tooltips:{show:!1,origin:{x:0,y:0},labels:[]},default_options:{elements:{point:{radius:0,hoverRadius:5,hitRadius:5},line:{fill:!1,borderWidth:2,tension:0}},animation:{duration:0},tooltips:{mode:"nearest",callbacks:{label:function(t,data){var label=data.datasets[t.datasetIndex].label||"";return label&&(label+=": "),label+=Object(m.a)(t.xLabel),label+=" ➔ ",label+=Math.round(100*t.yLabel)/100,label+=" ",label+=data.unit,label}}}}}}},y=r(18),O=Object(y.a)(v,void 0,void 0,!1,null,"2fc04c95",null).exports,w=r(25);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}c.default.use(f.a);var _={name:"ResultChartStack",props:{id:{type:String,required:!0},container_class:{type:String,default:""},result_class:{type:String,default:""},canvas_class:{type:String,default:""}},components:{ResultChart:O},beforeMount:function(){this.updateChartsKey(),window.onresize=this.updateChartsKey,this.$root.$on(w.a.data.update(this.id),this.updateChartsKey)},beforeDestroy:function(){},methods:{is_last:function(t){return t===Object.keys(this.result).length-1},updateChartsKey:function(){this.charts_key=Date.now()},formatTick:function(t){return Object(m.a)(t)}},computed:{name:function(){return this.$store.getters["analyzers/getName"](this.id)},maxX:function(){return Math.max.apply(Math,Object(l.a)(this.result[Object.keys(this.result)[0]][0].data.filter((function(t){return null!==t.x})).map((function(t){return t.x}))))}},asyncComputed:{colors:{get:function(){return Object(d.p)(this.id).then((function(t){return t}))},default:null},result:{get:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===t.colors){e.next=4;break}return e.abrupt("return",Object(d.u)(t.id).then((function(e){console.log("ResultChartStack.result.get() -> results = "),console.log(e);for(var r={},o=0,c=Object.keys(e);o<c.length;o++){var f=c[o];console.log("feature = ".concat(f));var d=[];if(e.hasOwnProperty(f))for(var h=e[f].columns.slice(1),m=0;m<h.length;m++){var data=[];console.log(e[f].data.length);for(var i=0;i<e[f].data.length;i++)data=[].concat(Object(l.a)(data),[{x:e[f].data[i][0],y:e[f].data[i][m+1]}]);d=[].concat(Object(l.a)(d),[{label:h[m],backgroundColor:t.colors[f][m],borderColor:t.colors[f][m],showLine:!0,data:data}])}r=k({},r,Object(n.a)({},f,d))}return r})));case 4:return e.abrupt("return",{});case 5:case"end":return e.stop()}}),e)})))()},default:{}}},data:function(){return{options:{responsive:!0,maintainAspectRatio:!1},charts_key:""}}},P=(r(536),Object(y.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{key:t.charts_key,ref:"container",staticClass:"result-container",class:t.container_class},[t._l(t.result,(function(e,n){return[r("div",{key:"result-"+t.name+"-"+n,staticClass:"result",class:t.result_class},[r("ResultChart",{attrs:{"chart-data":{datasets:e,unit:t.$store.state.schemas.feature.units[n]},options:Object.assign({},t.options,{legend:{position:"bottom"},scales:{xAxes:[{scaleLabel:{labelString:"Time (s)",fontStyle:"bold",fontSize:14},ticks:{stepSize:60,userCallback:t.formatTick,max:t.maxX}}],yAxes:[{scaleLabel:{display:!0,labelString:t.$store.state.schemas.feature.labels[n]+" ("+t.$store.state.schemas.feature.units[n]+")",fontStyle:"bold",fontSize:14}}]}})}})],1)]}))],2)}),[],!1,null,null,null).exports),S=r(389),C=r(383),R={name:"result",components:{PageHeader:S.a,PageHeaderItem:C.a,ResultChartStack:P},computed:{id:function(){return this.$route.query.id}}},D=(r(538),Object(y.a)(R,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fixed-page"},[e("PageHeader",[e("PageHeaderItem",[e("b-button",[this._v("Export")])],1)],1),this._v(" "),e("ResultChartStack",{key:this.id,attrs:{id:this.id,container_class:"fullpage-result-container",result_class:"fullpage-result"}})],1)}),[],!1,null,null,null));e.default=D.exports}}]);