(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{381:function(e,t,o){var content=o(385);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(32).default)("0a18e831",content,!0,{sourceMap:!1})},382:function(e,t,o){var content=o(387);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(32).default)("20035751",content,!0,{sourceMap:!1})},383:function(e,t,o){"use strict";var n={name:"PageHeaderItem"},r=(o(384),o(18)),component=Object(r.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"page-header-item"},[this._t("default")],2)}),[],!1,null,null,null);t.a=component.exports},384:function(e,t,o){"use strict";var n=o(381);o.n(n).a},385:function(e,t,o){(t=o(31)(!1)).push([e.i,".page-header-item{flex:0 1 auto;margin-top:4px;margin-bottom:4px;background:#c2cfd6;display:flex;padding-left:.5rem;overflow:visible;height:30px;min-height:30px;max-height:30px;min-width:20px}.page-header-item .btn{height:30px;padding:4px}.page-header-item *{height:30px;max-height:30px;margin-right:4px}.header-button-icon{width:30px;font-size:14px;display:flex}.header-button-icon i{max-height:22px;max-width:22px;margin:0;padding:4px 0 0;flex-shrink:1;flex-grow:1}",""]),e.exports=t},386:function(e,t,o){"use strict";var n=o(382);o.n(n).a},387:function(e,t,o){(t=o(31)(!1)).push([e.i,".page-header{flex-grow:0!important;flex-shrink:0!important;height:38px!important;margin-bottom:0!important;border-bottom:0!important;border-radius:0!important;width:calc(100vw - 120px);display:flex;flex-direction:row;background:#c2cfd6;overflow:visible}",""]),e.exports=t},389:function(e,t,o){"use strict";var n={name:"PageHeader",props:{},components:{PageHeaderItem:o(383).a},methods:{}},r=(o(386),o(18)),component=Object(r.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"page-header"},[this._t("default")],2)}),[],!1,null,null,null);t.a=component.exports},433:function(e,t,o){"use strict";o.d(t,"a",(function(){return H}));o(22),o(20),o(19),o(14),o(21),o(70),o(77),o(46);var n=o(33),r=o(2),c=o(16),l=o.n(c),f=o(434),d=o.n(f),m=o(403),h=o.n(m),v=o(436),x=o.n(v);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var C={enum:function(e){return{component:"b-form-select",fieldOptions:{on:"input",class:"isimple-form-field-input",attrs:{options:e.enum_options}}}},string:function(){return{component:"b-form-input",fieldOptions:{on:"input",class:["isimple-form-field-input"]}}},integer:function(){return{component:"b-form-input",fieldOptions:{attrs:{type:"number"},on:{input:function(e){return parseFloat(e)}},class:"isimple-form-field-input"}}},float:function(e){return{component:"b-form-input",fieldOptions:{attrs:{type:"number",step:e.step},on:{input:function(e){return parseInt(e)}},class:"isimple-form-field-input"}}},number:function(){return{component:"b-form-input",fieldOptions:{attrs:{type:"number",step:.1},on:{input:function(e){return parseInt(e)}},class:"isimple-form-field-input"}}},boolean:function(){return{component:"b-form-select",fieldOptions:{on:"input",class:"isimple-form-field-checkbox",attrs:{options:[!0,!1]}}}}},w=function(title,e){return{component:"b-card",fieldOptions:{class:"isimple-form-section",props:{header:title}},children:e}},j=function(title,e){return{component:"b-card",fieldOptions:{class:"isimple-form-section-fit",props:{header:title}},children:e}},_=function(title,e,t){return{component:"b-card",fieldOptions:{class:"isimple-form-section-fit",props:{header:title}},children:[{component:"ul",class:"isimple-form-array",children:t}]}},k=function(title,e,t,o){return{component:"b-row",fieldOptions:{class:"isimple-form-row"},children:[{component:"b-input-group",fieldOptions:{class:"isimple-form-group"},children:[{component:"b-input-group-text",fieldOptions:{class:"isimple-form-field-text",domProps:{innerHTML:title}}},O({},C[e](o),{model:t})]}]}},P={"#/definitions/Coo":function(title,e){return{component:"b-row",fieldOptions:{class:"isimple-form-row"},children:[{component:"b-input-group",fieldOptions:{class:"isimple-form-group"},children:[{component:"b-input-group-text",fieldOptions:{class:"isimple-form-field-text",domProps:{innerHTML:"".concat(title," (x,y)")}}},O({},C.float({step:1e-24}),{model:[e,"x"].join(".")}),O({},C.float({step:1e-24}),{model:[e,"y"].join(".")})]}]}},"#/definitions/HsvColor":function(title,e){return{component:"b-row",fieldOptions:{class:"isimple-form-row"},children:[{component:"b-input-group",fieldOptions:{class:"isimple-form-group"},children:[{component:"b-input-group-text",fieldOptions:{class:"isimple-form-field-text",domProps:{innerHTML:"".concat(title," (h,s,v)")}}},O({},C.integer(),{model:[e,"h"].join(".")}),O({},C.integer(),{model:[e,"s"].join(".")}),O({},C.integer(),{model:[e,"v"].join(".")})]}]}},"#/definitions/FlipConfig":function(title,e){return{component:"b-row",fieldOptions:{class:"isimple-form-row"},children:[{component:"b-input-group",fieldOptions:{class:"isimple-form-group"},children:[{component:"b-input-group-text",fieldOptions:{class:"isimple-form-field-text",domProps:{innerHTML:"".concat(title," horizontally/vertically")}}},O({},C.boolean(),{model:[e,"horizontal"].join(".")}),O({},C.boolean(),{model:[e,"vertical"].join(".")})]}]}}},$={"#/definitions/FeatureConfig":function(title,e,t,data,o,n){console.log("FeatureConfig is here"),console.log("title=".concat(title)),console.log("model=".concat(e)),console.log("data="),console.log(data)},"#/definitions/TransformConfig":function(title,e,t,data,o,r){console.log("TransformConfig is here"),console.log("title=".concat(title)),console.log("model=".concat(e)),console.log("data="),console.log(data);var c=[].concat(Object(n.a)(e.split(".").slice(0,-1)),["type"]).join(".");console.log("type_model=".concat(c));var l=h()(data,c);console.log("type=".concat(l));var f=t.implementations.TransformConfig[l];console.log("data_schema="),console.log(f);var d=H(t,data,o,r,e,f);return console.log("ui_schema="),console.log(d),d},"#/definitions/FilterConfig":function(title,e,t,data,o,r){console.log("FilterConfig is here"),console.log("title=".concat(title)),console.log("model=".concat(e)),console.log("data="),console.log(data);var c=[].concat(Object(n.a)(e.split(".").slice(0,-1)),["type"]).join(".");console.log("type_model=".concat(c));var l=h()(data,c);console.log("type=".concat(l));var f=t.implementations.FilterConfig[l];console.log("data_schema="),console.log(f);var d=H(t,data,o,r,e,f);return console.log("ui_schema="),console.log(d),d}};function S(e,t,data,o,r,c,l,f){if(l.properties.hasOwnProperty(e)){var m=c?"".concat(c,".").concat(e):e,v=h()(data,m,void 0);if(o.includes(m));else{var x=(F=l.properties[e]).hasOwnProperty("$ref")?F.$ref:F.hasOwnProperty("allOf")?F.allOf[0].$ref:void 0;if(x){var y=d.a.get(t,x.slice(1));if(P.hasOwnProperty(x))f=[].concat(Object(n.a)(f),[P[x](e,m)]);else if($.hasOwnProperty(x))f=[].concat(Object(n.a)(f),[j(e,$[x](e,m,t,data,o,r))]);else{var O=H(t,data,o+[[m,"name"].join(".")],r,void 0!==c?[c,e].join("."):e,y);O.length>0&&(f=[].concat(Object(n.a)(f),c?[j(e,O)]:[w(e,O)]))}}else{var title=l.properties[e].description||l.properties[e].title.toLowerCase(),C=l.properties[e].enum?"enum":l.properties[e].type;if("array"===C){var S=l.properties[e].items.$ref;if(S){var z=d.a.get(t,S.slice(1));if(void 0!==v)for(var i=0;i<v.length;i++){var I=H(t,data,o,r,"".concat(m,"[").concat(i,"]"),z);I.length>0&&(f=[].concat(Object(n.a)(f),c?[j(title,I)]:[w(title,I)]))}}else{var E=l.properties[e].items,J=[];if(void 0!==v)for(var M=0;M<v.length;M++){var T="".concat(m,".").concat(M);J=[].concat(Object(n.a)(J),[k("",E[M].type,T,{enum_options:E[M].enum,format:E[M].format})])}f=[].concat(Object(n.a)(f),[_(title,E,J)])}}else"object"===C?console.log("THIS IS AN OBJECT I'M CONFUSED"):f=[].concat(Object(n.a)(f),[k(title,C,m,{enum_options:l.properties[e].enum,format:l.properties[e].format})])}}}var F;return f}function H(e,data){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:void 0;try{if(l()(void 0!==e),l()(void 0!==e.properties),void 0!==r){l()(void 0!==c);data[r]}else{c=e}var f=[],d=[];if(o[r]){var m=Object.keys(c.properties);x()(m,o[r]),d=[].concat(Object(n.a)(o[r]),Object(n.a)(m))}else d=Object.keys(c.properties);for(var i=0;i<d.length;i++)f=S(d[i],e,data,t,o,r,c,f);return f}catch(e){console.warn("ui-schema.UiSchema() failed"),console.warn(e)}}},444:function(e,t,o){var content=o(532);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(32).default)("4efa14f6",content,!0,{sourceMap:!1})},531:function(e,t,o){"use strict";var n=o(444);o.n(n).a},532:function(e,t,o){(t=o(31)(!1)).push([e.i,".advanced-config[data-v-7eb47e05],.config-form-container[data-v-7eb47e05]{display:flex;flex-direction:row;flex-wrap:wrap}.config-form-container[data-v-7eb47e05]{padding:0;margin:0;overflow-x:hidden;overflow-y:visible;align-content:flex-start;justify-content:flex-start;max-width:calc(100vw - 120px)}.scrollable[data-v-7eb47e05]{display:flex;flex-direction:column;max-width:calc(100vw - 120px);max-height:calc(100vh - 38px);height:calc(100vh - 38px)}.description-box[data-v-7eb47e05],.description-row[data-v-7eb47e05]{height:64px}.advanced-config-box[data-v-7eb47e05],.advanced-config-card[data-v-7eb47e05]{display:flex;flex-shrink:1;flex-grow:1}.advanced-config-card[data-v-7eb47e05]{flex-direction:column}.advanced-config-collapse[data-v-7eb47e05]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:1;margin:4px}.description-label-row[data-v-7eb47e05]{margin-bottom:-5px}",""]),e.exports=t},548:function(e,t,o){"use strict";o.r(t);var n=o(389),r=o(383),c=o(204),l=o(11),f=(o(433),o(25)),d=o(415),m=o.n(d),h=o(396),v=o.n(h),x=o(5),y=o(166),O=o(530),C=o.n(O);x.default.use(v.a),x.default.use(y.a);var w={name:"dashboard",components:{PageHeader:n.a,PageHeaderItem:r.a,BasicConfig:c.a},beforeMount:function(){this.handleInit()},beforeDestroy:function(){this.handleCleanUp()},methods:{undoConfig:function(){Object(l.N)(this.id).then(this.handleGetConfig())},redoConfig:function(){Object(l.B)(this.id).then(this.handleGetConfig())},handleInit:function(){this.previous_id=this.id,-1===this.$store.getters["analyzers/getIndex"](this.id)?this.$router.push("/"):(this.$root.$emit(f.a.sidebar.open(this.id)),this.edit_json=this.$store.getters["settings/getSettings"].app.edit_json,this.handleGetConfig())},handleCleanUp:function(){},handleGetConfig:function(){var e=this;this.$store.dispatch("analyzers/get_config",{id:this.id}).then((function(){e.config=m()(e.$store.getters["analyzers/getAnalyzerConfig"](e.id)),e.config_json=C()(e.config,null,2,120)}))},handleSetConfig:function(){var e=this;this.$store.dispatch("analyzers/set_config",{id:this.id,config:this.config}).then((function(){e.config=m()(e.$store.getters["analyzers/getAnalyzerConfig"](e.id)),e.config_json=C()(e.config,null,2,120)}))},toggleEditJson:function(){this.edit_json=!this.edit_json},handleChangeJson:function(){var e=this;this.$store.dispatch("analyzers/set_config",{id:this.id,config:JSON.parse(this.config_json)}).then((function(){e.config=m()(e.$store.getters["analyzers/getAnalyzerConfig"](e.id)),e.config_json=C()(e.config,null,2,120)}))}},watch:{"$route.query.id":function(){console.log("id has changed ".concat(this.id)),this.handleCleanUp(),this.handleInit()}},computed:{id:function(){return this.$route.query.id},keymap:function(){return{"ctrl+z":this.undoConfig,"ctrl+shift+z":this.redoConfig}},schema:function(){return this.$store.getters["schemas/getConfigSchema"]}},data:function(){return{config:{},config_json:void 0,edit_json:!1}}},j=(o(531),o(18)),component=Object(j.a)(w,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"fixed-page"},[o("PageHeader",[o("PageHeaderItem",[o("b-button",{staticClass:"header-button-icon",attrs:{"data-toggle":"tooltip",title:"Clear configuration"},on:{click:void 0}},[o("i",{staticClass:"icon-ban"})]),e._v(" "),o("b-button",{directives:[{name:"hotkey",rawName:"v-hotkey",value:e.keymap,expression:"keymap"}],staticClass:"header-button-icon",attrs:{"data-toggle":"tooltip",title:"Undo"},on:{click:e.undoConfig}},[o("i",{staticClass:"icon-action-undo"})]),e._v(" "),o("b-button",{directives:[{name:"hotkey",rawName:"v-hotkey",value:e.keymap,expression:"keymap"}],staticClass:"header-button-icon",attrs:{"data-toggle":"tooltip",title:"Redo"},on:{click:e.redoConfig}},[o("i",{staticClass:"icon-action-redo"})])],1),e._v(" "),o("PageHeaderItem",[o("b-button",{on:{click:e.handleGetConfig}},[e._v("Get configuration")]),e._v(" "),o("b-button",{on:{click:e.handleSetConfig}},[e._v("Set configuration")])],1),e._v(" "),o("PageHeaderItem",[o("b-button",{on:{click:e.toggleEditJson}},[e._v(e._s(e.edit_json?"Hide JSON":"Edit JSON"))])],1)],1),e._v(" "),o("div",{staticClass:"scrollable"},[o("b-card",{staticClass:"name-config isimple-form-section-full"},[o("b-row",{staticClass:"isimple-form-row"},[o("b-input-group",{staticClass:"isimple-form-group"},[o("b-input-group-text",{staticClass:"isimple-form-field-text"},[e._v("name")]),e._v(" "),o("b-form-input",{staticClass:"isimple-form-field-text",on:{change:e.handleSetConfig},model:{value:e.config.name,callback:function(t){e.$set(e.config,"name",t)},expression:"config.name"}})],1)],1),e._v(" "),o("b-row",{staticClass:"isimple-form-row description-label-row"},[o("b-input-group-text",{staticClass:"isimple-form-field-text"},[e._v("description")])],1),e._v(" "),o("b-row",{staticClass:"isimple-form-row description-row"},[o("b-input-group",{staticClass:"isimple-form-group"},[o("b-form-textarea",{staticClass:"isimple-form-field-text description-box",on:{change:e.handleSetConfig},model:{value:e.config.description,callback:function(t){e.$set(e.config,"description",t)},expression:"config.description"}})],1)],1)],1),e._v(" "),o("b-card",{staticClass:"basic-config isimple-form-section-full"},[o("BasicConfig",{ref:"BasicConfig",attrs:{config:e.config,"static-paths":!0},on:{change:e.handleSetConfig}})],1),e._v(" "),e.edit_json?o("b-collapse",{staticClass:"advanced-config-collapse",attrs:{id:"advanced-settings",visible:e.edit_json}},[o("b-form-textarea",{staticClass:"isimple-form-field-text advanced-config-box",staticStyle:{"font-family":"monospace"},attrs:{spellcheck:"false"},on:{change:e.handleChangeJson},model:{value:e.config_json,callback:function(t){e.config_json=t},expression:"config_json"}})],1):e._e()],1)],1)}),[],!1,null,"7eb47e05",null);t.default=component.exports}}]);