(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{505:function(e,t,n){"use strict";var r={name:"PageHeaderItem"},o=(n(514),n(23)),component=Object(o.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"page-header-item"},[this._t("default")],2)}),[],!1,null,null,null);t.a=component.exports},506:function(e,t,n){var content=n(515);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(33).default)("0a18e831",content,!0,{sourceMap:!1})},507:function(e,t,n){var content=n(517);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(33).default)("20035751",content,!0,{sourceMap:!1})},511:function(e,t,n){"use strict";var r={name:"PageHeader",props:{},components:{PageHeaderItem:n(505).a},methods:{}},o=(n(516),n(23)),component=Object(o.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"page-header"},[this._t("default")],2)}),[],!1,null,null,null);t.a=component.exports},514:function(e,t,n){"use strict";var r=n(506);n.n(r).a},515:function(e,t,n){(t=n(32)(!1)).push([e.i,".page-header-item{flex:0 1 auto;margin-top:4px;margin-bottom:4px;background:#c2cfd6;display:flex;padding-left:.5rem;overflow:visible;height:30px;min-height:30px;max-height:30px;min-width:20px}.page-header-item .btn{height:30px;padding:4px}.page-header-item>*{height:30px;max-height:30px;margin-right:4px}.header-button-icon{width:30px;font-size:14px;display:flex}.header-button-icon i{max-height:22px;max-width:22px;margin:0;padding:4px 0 0;flex-shrink:1;flex-grow:1}",""]),e.exports=t},516:function(e,t,n){"use strict";var r=n(507);n.n(r).a},517:function(e,t,n){(t=n(32)(!1)).push([e.i,".page-header{flex-grow:0!important;flex-shrink:1!important;height:38px!important;margin-bottom:0!important;border-bottom:0!important;border-radius:0!important;width:calc(100vw - 120px);display:flex;flex-direction:row;background:#c2cfd6;overflow:visible}",""]),e.exports=t},521:function(e,t,n){"use strict";n(541),n(542),n(36);var r=n(31),o=(n(50),n(52)),l=(n(80),n(89),n(17),n(14),n(20),n(1));n(21),n(18),n(28);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f,_="enum",d="string",h="integer",y="float",v="number",O="boolean",x={name:"SchemaField",props:{title:{type:String,default:""},type:{type:String,required:!0},value:{required:!0},options:{type:Object,default:function(){return{}}},style_:{default:function(){}},new_row:{type:Boolean,default:function(){return!0}}},mounted:function(){},computed:{type_component:function(){return this.components[this.type]},type_class:function(){return this.classes[this.type]},type_options:function(){return m({},this.default_options[this.type],{},this.options)},type_style:function(){return void 0!==this.style_&&(console.log("SchemaField.type_style() type=".concat(this.type)),console.log("default="),console.log(this.default_style[this.type]),console.log("style="),console.log(this.style_),console.log("=>"),console.log(m({},this.default_style[this.type],{},this.style_))),m({},this.default_style[this.type],{},this.style_)},type_type:function(){return this.types[this.type]},field:{get:function(){return this.parse[this.type](this.value)},set:function(e){this.$emit("input",this.parse[this.type](e))}}},data:function(){var e,t,n,r,o,c;return{components:(e={},Object(l.a)(e,_,"b-form-select"),Object(l.a)(e,d,"b-form-input"),Object(l.a)(e,h,"b-form-input"),Object(l.a)(e,y,"b-form-input"),Object(l.a)(e,v,"b-form-input"),Object(l.a)(e,O,"b-form-checkbox"),e),classes:(t={},Object(l.a)(t,_,"isimple-form-field-auto"),Object(l.a)(t,d,"isimple-form-field-input"),Object(l.a)(t,h,"isimple-form-field-auto isimple-noarrow"),Object(l.a)(t,y,"isimple-form-field-auto isimple-noarrow"),Object(l.a)(t,v,"isimple-form-field-auto isimple-noarrow"),Object(l.a)(t,O,"isimple-form-field-checkbox"),t),types:(n={},Object(l.a)(n,_,""),Object(l.a)(n,d,"text"),Object(l.a)(n,h,"number"),Object(l.a)(n,y,"number"),Object(l.a)(n,v,"number"),Object(l.a)(n,O,""),n),default_options:(r={},Object(l.a)(r,_,{}),Object(l.a)(r,d,{}),Object(l.a)(r,h,{}),Object(l.a)(r,y,{step:.001}),Object(l.a)(r,v,{step:.001}),Object(l.a)(r,O,{}),r),default_style:(o={},Object(l.a)(o,_,{}),Object(l.a)(o,d,{}),Object(l.a)(o,h,{"max-width":"90px"}),Object(l.a)(o,y,{"max-width":"150px"}),Object(l.a)(o,v,{"max-width":"90px"}),Object(l.a)(o,O,{}),o),parse:(c={},Object(l.a)(c,_,(function(e){return e})),Object(l.a)(c,d,(function(e){return e})),Object(l.a)(c,h,(function(e){return parseInt(e)})),Object(l.a)(c,y,(function(e){return parseFloat(e)})),Object(l.a)(c,v,(function(e){return parseFloat(e)})),Object(l.a)(c,O,(function(e){return e})),c)}}},j=n(23),w=Object(j.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.new_row?"b-form-row":"div",{tag:"component",class:e.new_row?"isimple-form-row":""},[""!==e.title?n("label",{staticClass:"mr-sm-2 isimple-form-label"},[e._v("\n    "+e._s(e.title)+"\n  ")]):e._e(),e._v(" "),n(e.type_component,{tag:"component",class:e.type_class,style:e.type_style,attrs:{type:e.type_type,options:e.type_options.hasOwnProperty("enum_options")?e.type_options.enum_options:void 0,step:e.type_options.hasOwnProperty("step")?e.type_options.step:void 0},on:{wheel:function(e){return e.target.blur()}},model:{value:e.field,callback:function(t){e.field=t},expression:"field"}})],1)}),[],!1,null,"d0a93488",null).exports,k=n(526),S=n.n(k),C={COO:"#/definitions/Coo",HSVCOLOR:"#/definitions/HsvColor",FLIPCONFIG:"#/definitions/FlipConfig"},P=(f={},Object(l.a)(f,C.COO,["x","y"]),Object(l.a)(f,C.HSVCOLOR,["h","s","v"]),Object(l.a)(f,C.FLIPCONFIG,["horizontal","vertical"]),f),F={name:"SchemaDefinition",components:{SchemaField:w},def:C,props:{title:{type:String,required:!0},model:{required:!0},definition:{type:String,required:!0},context:{type:String,required:!1}},mounted:function(){},methods:{match:function(e){var t=this;if(this.definition===e){var n=P[this.definition].map((function(e){return t.model.hasOwnProperty(e)})).reduce((function(g,e){return g&&e}));return n||(console.warn("SchemaDefinition.match(): model doesn't include required fields"),console.log(this.model),console.log(P[this.definition])),n}return!1},p_set:function(p,a){S()(this.model,p,a),this.$emit("input")}},data:function(){return{def:C}}},$=Object(j.a)(F,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[void 0===e.model?[n("b-row",{staticClass:"isimple-form-row"},[n("b-input-group",{staticClass:"isimple-form-group"},[n("label",{staticClass:"mr-sm-2 isimple-form-label"},[e._v("\n          "+e._s(e.title)+" (undefined)\n        ")])])],1)]:e.match(e.def.COO)?[n("b-row",{staticClass:"isimple-form-row"},[n("b-input-group",{staticClass:"isimple-form-group"},[n("label",{staticClass:"mr-sm-2 isimple-form-label",style:{width:"60px","margin-right":"-10px !important"}},[e._v("\n          "+e._s(e.title)+" (x,y)\n        ")]),e._v(" "),n("SchemaField",{attrs:{value:e.model.x,type:"float",options:{step:1e-24}},on:{input:function(t){return e.p_set("x",t)}}}),e._v(" "),n("div",{staticClass:"isimple-form-gap"}),e._v(" "),n("SchemaField",{attrs:{value:e.model.y,type:"float",options:{step:1e-24}},on:{input:function(t){return e.p_set("y",t)}}})],1)],1)]:e.match(e.def.HSVCOLOR)?[n("b-row",{staticClass:"isimple-form-row"},[n("b-input-group",{staticClass:"isimple-form-group"},[n("label",{staticClass:"mr-sm-2 isimple-form-label",style:{width:"80px","margin-right":"-8px !important"}},[e._v("\n          "+e._s(e.title)+" (h,s,v)\n        ")]),e._v(" "),n("SchemaField",{attrs:{value:e.model.h,style_:{width:"50px"},type:"integer"},on:{input:function(t){return e.p_set("h",t)}}}),e._v(" "),n("div",{staticClass:"isimple-form-gap"}),e._v(" "),n("SchemaField",{attrs:{value:e.model.s,style_:{width:"50px"},type:"integer"},on:{input:function(t){return e.p_set("s",t)}}}),e._v(" "),n("div",{staticClass:"isimple-form-gap"}),e._v(" "),n("SchemaField",{attrs:{value:e.model.v,style_:{width:"50px"},type:"integer"},on:{input:function(t){return e.p_set("v",t)}}})],1)],1)]:e.match(e.def.FLIPCONFIG)?[n("b-row",{staticClass:"isimple-form-row"},[n("b-input-group",{staticClass:"isimple-form-group"},[n("label",{staticClass:"mr-sm-2 isimple-form-label"},[e._v("\n          "+e._s(e.title)+" horizontally\n        ")]),e._v(" "),n("SchemaField",{attrs:{value:e.model.horizontal,type:"boolean"},on:{input:function(t){return e.p_set("horizontal",t)}}}),e._v(" "),n("label",{staticClass:"mr-sm-2 isimple-form-label"},[e._v("\n          vertically\n        ")]),e._v(" "),n("SchemaField",{attrs:{value:e.model.vertical,type:"boolean"},on:{input:function(t){return e.p_set("vertical",t)}}})],1)],1)]:e._e()],2)}),[],!1,null,"282aabfc",null).exports,I={name:"SchemaImplementation",components:{SchemaForm:J},props:{title:{type:String,required:!0},model:{type:Object,required:!0},type:{type:String,required:!0},implementation:{type:String,required:!0},schema:{type:Object,required:!0},context:{type:String,required:!1},skip:{type:Array,default:function(){return[]}},property_as_title:{type:Boolean,default:function(){return!1}}},computed:{implementation_schema:function(){return console.log("SchemaImplementation.implementation_schema() title=".concat(this.title," type=").concat(this.type)),console.log("this.schema="),console.log(this.schema),console.log("this.model="),console.log(this.model),this.schema.implementations[this.type][this.model.type]}}},E=Object(j.a)(I,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return void 0!==e.type?n("SchemaForm",{attrs:{title:e.title,data:e.model,schema:e.implementation_schema,skip:e.skip,context:e.context,property_as_title:e.property_as_title}}):e._e()}),[],!1,null,"0ece2034",null).exports,D=n(508),B={name:"SchemaCategory",props:{title:{type:String,required:!0},open:{type:Boolean,required:!1,default:!0},emit_toggle:{type:Boolean,required:!1,default:!1},clickable:{type:Boolean,required:!1,default:!0}},methods:{handleToggle:Object(D.a)(100,!0,(function(){this.$emit("toggle")}))}},H=(n(548),Object(j.a)(B,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form-group",[n("details",e._g({staticClass:"isimple-form-section-fit",attrs:{open:e.open}},{toggle:e.emit_toggle?e.handleToggle:function(){}}),[n("summary",{staticClass:"category-title",class:{unclickable:!e.clickable}},[n("b",[e._v(e._s(e.title))])]),e._v(" "),n("div",{staticClass:"isimple-form-indent"},[e._t("default")],2)])])}),[],!1,null,"3bc020fc",null).exports),L=n(543),z=n.n(L),A=n(55),G=n.n(A),M=n(544),N=n.n(M),R={name:"SchemaForm",components:{SchemaImplementation:E,SchemaDefinition:$,SchemaField:w,SchemaCategory:H},props:{data:{type:Object,required:!0},schema:{type:Object,required:!0},implementation:{type:Object,required:!1},skip:{type:Array,default:function(){return[]}},context:{type:String,default:void 0},title:{type:String,default:function(){return""}},property_as_title:{type:Boolean,default:function(){return!1}},container_class:{type:String,default:""},clickable_categories:{type:Boolean,default:!0}},mounted:function(){},computed:{is_loaded:function(){return this.schema.hasOwnProperty("properties")},properties:function(){var e,t,n=this;if(void 0===this.context)e=this.schema.properties;else if(void 0!==this.implementation){e=this.schema.implementations[this.implementation.interface][this.implementation.type].properties}else{var r=this.p_definition();void 0!==r&&(e=r.properties)}if(t=void 0!==e?Object.keys(e).filter((function(p){return!n.skip.includes(p)})):[],0===t.length){var l=this.get_from_data();"object"===Object(o.a)(l)&&null!==l&&(t=Object.keys(l))}return t}},methods:{resolve_context:function(p){if(void 0!==this.context){if(void 0===p)return this.context;p=[this.context,p].join(".")}return p},is_reference:function(e){var t;return t=void 0!==e&&(e.hasOwnProperty("$ref")||e.hasOwnProperty("allOf")&&(e.allOf.hasOwnProperty("$ref")||e.allOf[0].hasOwnProperty("$ref"))||e.hasOwnProperty("items")&&e.items.hasOwnProperty("$ref")),t},get_reference:function(e){return e.hasOwnProperty("$ref")?e.$ref:e.hasOwnProperty("allOf")?e.allOf[0].$ref:e.hasOwnProperty("items")?e.items.$ref:void 0},get_from_schema:function(p){for(var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=this.schema,n=this.resolve_context(p).split("."),i=0;i<n.length;i++){if(this.is_reference(t)){var o=this.get_reference(t);t=void 0!==this.schema.implementations&&this.schema.implementations.hasOwnProperty(o.split("/").slice(-1))?this.schema.implementations[o.split("/").slice(-1)][z()(this.data,[].concat(Object(r.a)(n.slice(0,i-1)),["type"]).join("."))]:N.a.get(this.schema,o.slice(1))}var l=/(.*)\[([0-9]+)]/g.exec(n[i]);if(l){var c=l[1];l[2];t=t.hasOwnProperty("properties")?t.properties[c].items:void 0}else void 0!==t&&(t=t.hasOwnProperty("properties")?t.properties[n[i]]:void 0)}return this.is_reference(t)&&e?N.a.get(this.schema,this.get_reference(t).slice(1)):t},get_from_data:function(p){return z()(this.data,this.resolve_context(p))},p_set:function(p,a){S()(this.data,p,a),this.$emit("input",this.data)},p_change:function(e){this.$emit("input",e)}},data:function(){var e=this;return{p_has_properties:function(p){return"properties"in e.get_from_schema(p)},p_reference:function(p){var t=e.get_from_schema(p,!1);return void 0!==t?e.get_reference(t):void 0},p_type:function(p){var t,n=e.get_from_schema(p,!1);if(void 0!==n){if(void 0===(t=n.enum?"enum":n.type)){var r=e.p_definition(p);void 0!==r&&(t=r.enum?"enum":r.type)}}else t=Object(o.a)(e.get_from_data(p));return t},p_implementation:function(p){return{interface:e.p_reference(p).split("/").slice(-1)[0],type:e.get_from_data("type")}},p_title:function(p){return e.property_as_title?p:e.get_from_schema(p,!1).title},p_options:function(p){var t=e.get_from_schema(p);return void 0!==t?{enum_options:t.enum}:void 0},array_title:function(p,i){if(p.includes("parameters"))return e.data.features[i];var t=e.get_from_data(p)[i],n=null!==t&&t.hasOwnProperty("name")?t.name:void 0;return void 0!==n?n:void 0},array_context:function(p,i){return"".concat(e.resolve_context(p),"[").concat(i,"]")},p_model:function(p){return e.get_from_data(p)},p_definition:function(p){return void 0!==e.p_reference(p)?N.a.get(e.schema,e.p_reference(p).slice(1)):void 0},p_is_hardcoded:function(p){var t=e.p_reference(p);return Object.values($.def).includes(t)},p_is_implementation:function(p){var t=!1;return e.schema.hasOwnProperty("implementations")&&(t=e.p_reference(p).split("/").pop()in e.schema.implementations),t},p_is_implementation_selector:function(p){return"type"===p&&e.p_is_implementation("data")},p_implementation_options:function(p){var t=e.p_reference("data").split("/").pop();return{enum_options:Object.keys(e.schema.implementations[t])}},p_has_parameters:function(){return e.data.feature_parameters.map((function(e){return null!==e&&!G()(e)})).some((function(e){return e}))},p_overridden_parameters:function(p){return!e.get_from_data(p).every((function(e){return null===e}))},p_toggle_override_parameters:function(p){e.p_overridden_parameters(p)?e.p_set(e.resolve_context(p),Array(e.data.features.length).fill(null)):e.p_set(e.resolve_context(p),e.data.feature_parameters)},p_features:function(){return e.data.features}}}},V=Object(j.a)(R,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.properties.length>0?n("div",[e.is_loaded?n(void 0!==e.context?"SchemaCategory":"div",{tag:"component",class:e.container_class,attrs:{title:e.title,clickable:e.clickable_categories}},[e._l(e.properties,(function(t){return e.properties?["parameters"===t?[e.p_has_parameters()?n("SchemaCategory",{key:t,attrs:{title:e.p_overridden_parameters(t)?"parameters (overridden)":"parameters (global)",open:e.p_overridden_parameters(t),emit_toggle:!0,clickable:e.clickable_categories},on:{toggle:function(n){return e.p_toggle_override_parameters(t)}}},[e.p_overridden_parameters(t)?e._l(e.p_model(t),(function(r,o){return n("SchemaForm",{key:o,attrs:{title:e.p_features()[o],data:e.data,schema:e.schema,skip:e.skip,context:e.array_context(t,o),property_as_title:e.property_as_title,clickable_categories:e.clickable_categories},on:{input:e.p_change}})})):e._e()],2):e._e()]:"array"===e.p_type(t)?[n("SchemaCategory",{key:t,attrs:{title:e.p_title(t),clickable:e.clickable_categories}},e._l(e.p_model(t),(function(r,o){return n("SchemaForm",{key:o,attrs:{title:e.array_title(t,o),data:e.data,schema:e.schema,skip:e.skip,context:e.array_context(t,o),property_as_title:e.property_as_title,clickable_categories:e.clickable_categories},on:{input:e.p_change}})})),1)]:"object"===e.p_type(t)&&void 0!==e.p_reference(t)?[e.p_is_hardcoded(t)?n("SchemaDefinition",{key:t,attrs:{title:e.p_title(t),model:e.p_model(t),definition:e.p_reference(t),context:e.resolve_context(t)},on:{input:e.p_change}}):e.p_is_implementation(t)?n("SchemaForm",{key:t,attrs:{title:e.p_title(t),implementation:e.p_implementation(t),data:e.data,schema:e.schema,skip:e.skip,context:e.resolve_context(t),property_as_title:e.property_as_title,clickable_categories:e.clickable_categories},on:{input:e.p_change}}):n("SchemaForm",{key:t,attrs:{title:e.p_title(t),data:e.data,schema:e.schema,skip:e.skip,context:e.resolve_context(t),property_as_title:e.property_as_title,clickable_categories:e.clickable_categories},on:{input:e.p_change}})]:[e.p_is_implementation_selector(t)?n("SchemaField",{key:t,attrs:{title:e.p_title(t),value:e.p_model(t),type:"enum",options:Object.assign({},e.p_options(t),e.p_implementation_options(t))},on:{input:function(n){e.p_set(e.resolve_context(t),n)}}}):n("SchemaField",{key:t,attrs:{title:e.p_title(t),value:e.p_model(t),type:e.p_type(t),options:e.p_options(t)},on:{input:function(n){e.p_set(e.resolve_context(t),n)}}})]]:[n("SchemaField",{attrs:{title:e.p_title(),value:e.p_model(),type:e.p_type(),options:e.p_options()},on:{input:function(t){e.p_set(e.resolve_context(),t)}}})]}))],2):n("div",[n("i",{staticClass:"fa fa-spin fa-spinner",style:{"padding-left":"4px"}})])],1):e._e()}),[],!1,null,"2dd073ac",null),J=t.a=V.exports},528:function(e,t,n){var content=n(549);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(33).default)("35a85ec4",content,!0,{sourceMap:!1})},548:function(e,t,n){"use strict";var r=n(528);n.n(r).a},549:function(e,t,n){(t=n(32)(!1)).push([e.i,".category-title[data-v-3bc020fc]{color:#3e515b}.unclickable[data-v-3bc020fc]{pointer-events:none}",""]),e.exports=t}}]);