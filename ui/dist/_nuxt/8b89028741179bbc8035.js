(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{252:function(t,e,n){var content=n(257);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("abe8dd3e",content,!0,{sourceMap:!1})},253:function(t,e,n){var content=n(259);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("6759f5ab",content,!0,{sourceMap:!1})},256:function(t,e,n){"use strict";var r=n(252);n.n(r).a},257:function(t,e,n){(e=n(23)(!1)).push([t.i,".analysis-card[data-v-1fed360c]{max-width:800px;max-height:400px;min-height:160px;display:flex!important;flex-direction:column!important;flex-wrap:wrap!important;margin:5px 5px 0 0}.column-container[data-v-1fed360c]{margin-top:-15px;margin-left:-16px;padding-right:3px;margin-bottom:-37px;vertical-align:bottom}.card-form-row[data-v-1fed360c]{margin-top:-10px;margin-bottom:-10px}.card-config-form[data-v-1fed360c]{max-width:140px}.frame-interval-selector[data-v-1fed360c]{margin-right:4px}.interval[data-v-1fed360c]{width:86px}.card-name-form[data-v-1fed360c]{margin-left:-3px;max-width:160px}.handle[data-v-1fed360c]{margin-left:-16px;margin-top:-8px;height:26px}.thumbnail[data-v-1fed360c]{min-height:60px;min-width:100px;max-height:100px;max-width:178px}",""]),t.exports=e},258:function(t,e,n){"use strict";var r=n(253);n.n(r).a},259:function(t,e,n){(e=n(23)(!1)).push([t.i,".analysis-card-drag{flex:1;display:flex!important;flex-direction:column!important;flex-wrap:wrap!important;justify-content:flex-start;align-content:flex-start;margin-left:-36px;margin-right:6px;max-height:100vh;max-width:100vw}",""]),t.exports=e},260:function(t,e,n){"use strict";n.r(e);var r=n(148),o=n.n(r),l=(n(9),{props:{name:{type:String,default:""},id:{type:String,default:""},index:{type:Number,default:0},progress:{type:Number,default:0},state:{type:String,enum:["incomplete","ready","running","done","canceled","error"],default:"incomplete"},config:{type:Object,default:function(){return{video_path:"",design_path:"",frame_interval_setting:"",interval:"",height:""}}}},data:function(){return{show:!1,selected:"dt",interval_placeholder:{Nf:"# frames",dt:"interval (s)"}}}}),c=(n(256),n(12)),d=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{staticClass:"analysis-card",attrs:{"show-footer":""}},[n("b-row",[n("b-col",[n("div",{staticClass:"thumbnail column-container"},[n("b-img",{attrs:{"fluid-grow":"",src:"/api/analyzer/thumbnail-design/"+t.id}})],1)]),t._v(" "),n("b-col",[n("div",{staticClass:"thumbnail column-container"},[n("b-img",{attrs:{"fluid-grow":"",src:"/api/analyzer/thumbnail-design/"+t.id}})],1)]),t._v(" "),n("b-col",[n("b-container",{staticClass:"column-container"},[n("b-row",{staticClass:"card-form-row"},[n("b-form-group",[n("b-input-group",{staticClass:"popover-field"},[n("b-input-group-prepend",[n("b-button",[n("i",{staticClass:"fa fa-file-video-o"})])],1),t._v(" "),n("b-form-input",{staticClass:"form-width-setter",attrs:{id:"video_path",type:"text",value:t.config.video_path}})],1)],1)],1),t._v(" "),n("b-row",{staticClass:"card-form-row"},[n("b-form-group",[n("b-input-group",[n("b-input-group-prepend",[n("b-button",[n("i",{staticClass:"fa fa-file-code-o"})])],1),t._v(" "),n("b-form-input",{staticClass:"form-width-setter",attrs:{id:"design_path",type:"text",value:t.config.design_path}})],1)],1)],1),t._v(" "),n("b-row",{staticClass:"card-form-row"},[n("b-form-group",[n("b-input-group",[n("b-input-group-prepend",[n("b-form-select",{staticClass:"frame-interval-selector",attrs:{id:"frame_interval_setting",value:t.config.frame_interval_setting,select:"selectFrameIntervalSetting",plain:!1,options:["Nf","dt"]}}),t._v(" "),n("b-form-input",{staticClass:"interval",attrs:{id:"interval",type:"text",value:t.config.interval}})],1),t._v("\n               \n              "),n("b-form-input",{staticClass:"card-config-form",attrs:{id:"height",type:"text",value:t.config.height}})],1)],1)],1),t._v(" "),n("b-row",{staticClass:"card-form-row"},[n("b-form-group",[n("b-input-group")],1)],1)],1)],1)],1),t._v(" "),n("div",{staticClass:"handle",attrs:{slot:"footer"},slot:"footer"},[n("b-input-group",[n("b-input-group-prepend",[n("b-button",[t._v("#"+t._s(t.index+1))])],1),t._v(" "),n("b-form-input",{staticClass:"card-name-form",attrs:{id:"name",type:"text",value:t.name}})],1)],1)],1)}),[],!1,null,"1fed360c",null).exports,f=n(106),m=n(43),h={name:"dashboard",components:{AnalysisCard:d,draggable:o.a},computed:Object(f.b)({queue:function(t){return t.queue}}),beforeMount:function(){var t=this;window.onload=function(){t.$store.dispatch("analyzers/sync")},window.onunload=m.g,setInterval((function(){t.$store.dispatch("analyzers/sync")}),5e3),setInterval((function(){m.f}),500)}},v=(n(258),Object(c.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fixed-page"},[e("draggable",{staticClass:"analysis-card-drag",attrs:{tag:"ul",list:this.queue,handle:".handle"}},[this._l(this.queue,(function(t,n){return[e("AnalysisCard",{key:t.id,attrs:{name:t.name,index:n,id:t.id,progress:t.progress,state:t.state,config:t.config}})]}))],2)],1)}),[],!1,null,null,null));e.default=v.exports}}]);