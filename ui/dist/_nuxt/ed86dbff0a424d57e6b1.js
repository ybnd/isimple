(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{282:function(t,e,r){var content=r(290);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("0a18e831",content,!0,{sourceMap:!1})},283:function(t,e,r){var content=r(292);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("20035751",content,!0,{sourceMap:!1})},284:function(t,e,r){"use strict";var o={name:"PageHeaderItem"},n=(r(289),r(16)),component=Object(n.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"page-header-item"},[this._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},289:function(t,e,r){"use strict";var o=r(282);r.n(o).a},290:function(t,e,r){(e=r(29)(!1)).push([t.i,".page-header-item{flex:0 1 auto;margin-bottom:7px;margin-top:8px;background:#c2cfd6;display:block;padding-left:.5rem;overflow:visible;height:34.9333px;min-height:34.9333px;max-height:34.9333px;min-width:20px}.page-header-item .btn{height:34.9333px}.page-header-item *{height:34.9333px;max-height:34.9333px}.header-button-icon{width:34.9333px;font-size:16px;padding:4px}",""]),t.exports=e},291:function(t,e,r){"use strict";var o=r(283);r.n(o).a},292:function(t,e,r){(e=r(29)(!1)).push([t.i,".page-header{flex-grow:0!important;flex-shrink:0!important;height:49.9333px!important;margin-bottom:0!important;border-bottom:0!important;border-radius:0!important;width:calc(100vw - 120px);display:flex;flex-direction:row;background:#c2cfd6;overflow:visible}",""]),t.exports=e},293:function(t,e,r){"use strict";var o={name:"PageHeader",props:{},components:{PageHeaderItem:r(284).a},methods:{}},n=(r(291),r(16)),component=Object(n.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"page-header"},[this._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},328:function(t,e,r){var content=r(613);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("880bb7d0",content,!0,{sourceMap:!1})},612:function(t,e,r){"use strict";var o=r(328);r.n(o).a},613:function(t,e,r){(e=r(29)(!1)).push([t.i,".content{height:calc(100vh - 49.9333px);width:calc(100vw - 120px);display:flex;flex-flow:column}.log-table{flex:1 1 auto;overflow:auto;font-family:monospace;font-size:11px;table-layout:fixed}.log-line{color:#151b1e!important;width:calc(100vw - 120px);white-space:nowrap}tr:nth-child(2n){background-color:#e4e5e6}tr:nth-child(odd){background-color:#d4dde2}",""]),t.exports=e},631:function(t,e,r){"use strict";r.r(e);r(5),r(4),r(2),r(53),r(3),r(42),r(43),r(18),r(24),r(25),r(1);var o=r(0),n=r(15),l=(r(79),r(126),r(13)),c=r(293),f=r(284);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function m(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(t,e)}(t))){var i=0,e=function(){};return{s:e,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,n=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return n=t.done,t},e:function(t){l=!0,o=t},f:function(){try{n||null==r.return||r.return()}finally{if(l)throw o}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var x={name:"log",components:{PageHeader:c.a,PageHeaderItem:f.a},data:function(){return{request:null,log:"",scrolled:!1,filter:"",filtered_log:"",matches:{}}},mounted:function(){this.request=Object(l.r)(),setInterval(this.handleLogText,250)},beforeDestroy:function(){Object(l.K)()},methods:{handleScroll:function(){this.scrolled=this.isScrolled()},handleLogText:function(){this.log=" \n"+this.request.responseText,this.filterLog(),void 0!==this.$refs.log&&(this.scrolled||(this.$refs.log.$el.scrollLeft=0,this.$refs.log.$el.scrollTop=this.$refs.log.$el.scrollTopMax))},handleClipboard:function(){},isScrolled:function(){return void 0!==this.$refs.log&&(this.$refs.log.$el.scrollTop!==this.$refs.log.$el.scrollTopMax||0!==this.$refs.log.$el.scrollLeft)},filterLog:function(){if(this.filter=this.filter.trim(),this.filter){this.filtered_log=[],this.matches={};for(var t=this.log.match(/[^\r\n]+/g),e=[],i=0;i<t.length;i++){var r=[],l=t[i].matchAll(RegExp(this.filter,"g"));for(match in console.log(t[i]),l)console.log("line ".concat(i," match: ").concat(match)),r=[].concat(Object(n.a)(r),[match]);var c,f=m(r);try{for(f.s();!(c=f.n()).done;){var h=c.value;console.log("Found ".concat(h[0]," start=").concat(h.index," end=").concat(h.index+h[0].length,"."))}}catch(t){f.e(t)}finally{f.f()}r.length>0&&(e=[].concat(Object(n.a)(e),[t[i]]),this.matches=d({},this.matches,Object(o.a)({},i,r)))}this.filtered_log=e.join("\r\n")}else this.filtered_log=this.log,this.matches={}}},watch:{filter:function(){this.filterLog()}}},y=(r(612),r(16)),component=Object(y.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fixed-page"},[r("PageHeader",[r("PageHeaderItem",[r("b-button",{staticClass:"header-button-icon",attrs:{"data-toggle":"tooltip",title:"Copy to clipboard"}},[r("i",{staticClass:"fa fa-clipboard"})])],1),t._v(" "),r("PageHeaderItem",[r("b-input-group",[r("b-form-input",{attrs:{placeholder:"Filter log..."},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}},[t._v("\n          "+t._s(t.filter)+"\n        ")])],1)],1)],1),t._v(" "),r("div",{staticClass:"content"},[r("b-tbody",{ref:"log",staticClass:"log-table",on:{scroll:t.handleScroll}},t._l(t.filtered_log.split("\n"),(function(e,o){return r("tr",{key:o,staticClass:"log-row"},[r("td",{staticClass:"log-line"},[t._v(t._s(e))])])})),0)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);