(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{525:function(t,e,n){var content=n(534);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("cda4275e",content,!0,{sourceMap:!1})},531:function(t,e,n){var content=n(546);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("7c440db6",content,!0,{sourceMap:!1})},533:function(t,e,n){"use strict";var r=n(525);n.n(r).a},534:function(t,e,n){(e=n(32)(!1)).push([t.i,".slider-container{display:flex;flex-direction:row;padding-top:5px}.slider-container .slider-caption{height:14px;min-width:100px;max-width:200px;margin-bottom:4px;margin-right:4px}.slider-container .vue-slider .vue-slider-rail{background:#f0f3f5!important;cursor:pointer}.slider-container .vue-slider .vue-slider-rail .vue-slider-dot{background:#1985ac;border-radius:50%;cursor:ew-resize}.slider-container-loading{display:flex;flex-direction:row;padding-top:5px}.slider-container-loading .slider-caption{height:14px;min-width:100px;max-width:200px;margin-bottom:4px;margin-right:4px}.slider-container-loading .vue-slider{cursor:pointer;pointer-events:all}.slider-container-loading .vue-slider .vue-slider-rail{background:#f0f3f5!important}.slider-container-loading .vue-slider .vue-slider-rail .vue-slider-dot{border-radius:50%;cursor:ew-resize;transition:background 1s!important}",""]),t.exports=e},535:function(t,e,n){"use strict";var r=n(15),o=n(22),l=n(172),c=n(538),d=n.n(c),h=n(521),f=n(524),m=n(532),v=n.n(m);n(6).default.use(v.a);var y={name:"PageHeaderSeek",props:{id:{type:String,default:"",required:!0}},components:{VueSlider:d.a,PageHeaderItem:h.a},beforeMount:function(){var t=this;Object(r.H)(this.id).then((function(e){t.setPosition(e)})),Object(r.K)(this.id).then((function(e){t.totalSeconds=e})),this.$root.$on(o.c.seek.set(this.id),this.handleSeek),this.$root.$on(o.c.seek.reset(this.id),this.resetSeek),this.$root.$on(o.c.seek.step_fw(this.id),this.stepForward),this.$root.$on(o.c.seek.step_bw(this.id),this.stepBackward)},beforeDestroy:function(){this.$root.$off(o.c.seek.set(this.id),this.handleSeek),this.$root.$off(o.c.seek.reset(this.id),this.resetSeek),this.$root.$off(o.c.seek.step_fw(this.id),this.stepForward),this.$root.$off(o.c.seek.step_bw(this.id),this.stepBackward)},methods:{setPosition:function(t){var e=this;this.position=t,setTimeout((function(){e.isLoading=!1}),100)},doSeek:function(){var t=this;Object(r.Q)(this.id,this.position).then((function(e){t.position=e}))},handleSeek:Object(f.throttle)(100,!0,Object(f.debounce)(25,!0,(function(){this.doSeek()}))),resetSeek:function(){this.setPosition(null),this.handleSeek()},stepForward:function(){this.position=this.position+this.step,this.handleSeek()},stepBackward:function(){this.position=this.position-this.step,this.handleSeek()},handleDragStart:function(){this.isDragging=!0},handleDragEnd:function(){this.isDragging=!1}},computed:{keymap:function(){return{right:this.stepForward,left:this.stepBackward}},currentTime:function(){return null!==this.position&&null!==this.totalSeconds?Object(l.a)(this.position*this.totalSeconds):""},totalTime:function(){return null!==this.totalSeconds?Object(l.a)(this.totalSeconds):""},dotSize:function(){return this.isLoading?0:14}},data:function(){return{isLoading:!0,isDragging:!1,position:null,step:.01,options:{dotSize:14,width:120,height:4,contained:!0,direction:"ltr",data:null,min:0,max:1,interval:.01,disabled:!1,clickable:!0,duration:.09,adsorb:!1,lazy:!1,useKeyboard:!0,keydownHook:null,dragOnClick:!1,marks:!1,process:!1},totalSeconds:null}}},w=(n(533),n(18)),component=Object(w.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("PageHeaderItem",[n("div",{class:{"slider-container":!t.isLoading,"slider-container-loading":t.isLoading}},[n("span",{staticClass:"header-text slider-caption"},[t._v(t._s(t.currentTime)+" / "+t._s(t.totalTime))]),t._v(" "),n("vue-slider",t._b({on:{change:t.handleSeek,"drag-start":t.handleDragStart,"drag-end":t.handleDragEnd},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}},"vue-slider",t.options,!1))],1)])}),[],!1,null,null,null);e.a=component.exports},544:function(t,e,n){"use strict";n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return m})),n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return y})),n.d(e,"c",(function(){return w}));n(17),n(13),n(20);var r=n(31),o=n(584),l=n(24),c=n.n(l),d=["BL","TL","TR","BR"],h=["x","y"];function f(t){for(var i=0;i<d.length;i++){if(!t.hasOwnProperty(d[i]))return!1;for(var e=0;e<h.length;e++){if(!t[d[i]].hasOwnProperty(h[e]))return!1;if("number"!=typeof t[d[i]][h[e]])return!1}}return!0}function m(rect,t){try{return c()(!(null===t)),{BL:{x:(rect.pos3[0]-t.left)/t.width,y:(rect.pos3[1]-t.top)/t.height},TL:{x:(rect.pos1[0]-t.left)/t.width,y:(rect.pos1[1]-t.top)/t.height},TR:{x:(rect.pos2[0]-t.left)/t.width,y:(rect.pos2[1]-t.top)/t.height},BR:{x:(rect.pos4[0]-t.left)/t.width,y:(rect.pos4[1]-t.top)/t.height}}}catch(t){return void console.warn("roiRectInfoToCoordinates: frame is null")}}function v(t,e){var n=(t.clientX-e.left)/e.width,r=(t.clientY-e.top)/e.height;return n<0&&(n=0),n>1&&(n=1),r<0&&(r=0),r>1&&(r=1),{x:n,y:r}}function y(t,e,n){var r=v(t,n),o=v(e,n);if(Math.abs(r.x-o.x)*Math.abs(r.y-o.y)>.01){var l=[r.x,o.x].sort(),c=[r.y,o.y].sort();return{BL:{x:l[1],y:c[0]},TL:{x:l[1],y:c[1]},TR:{x:l[0],y:c[1]},BR:{x:l[0],y:c[0]}}}return console.warn("invalid rectangle"),null}function w(t,e,n){try{return function(t){for(var content=[],col=0;col<4;col++)for(var e=0;e<4;e++)content=[].concat(Object(r.a)(content),[t[e][col]]);return"matrix3d(".concat(content.join(","),")")}(function(t,e){for(var n,l,b,c,i,d,h,f,m,v,y,w,x=["BL","TL","TR","BR"],k=[],_=[],C=0;C<x.length;C++)k=[].concat(Object(r.a)(k),[t[x[C]]]),_=[].concat(Object(r.a)(_),[e[x[C]]]);for(console.assert(k.length===(y=_.length)&&4===y),n=[],i=d=0;d<4;i=++d)n.push([k[i].x,k[i].y,1,0,0,0,-k[i].x*_[i].x,-k[i].y*_[i].x]),n.push([0,0,0,k[i].x,k[i].y,1,-k[i].x*_[i].y,-k[i].y*_[i].y]);for(b=[],i=h=0;h<4;i=++h)b.push(_[i].x),b.push(_[i].y);for(l=[[(c=(c=Object(o.a)(n,b)).reduce((function(a,b){return a.concat(b)}),[]))[0],c[1],0,c[2]],[c[3],c[4],0,c[5]],[0,0,1,0],[c[6],c[7],0,1]],i=m=0;m<4;i=++m){f=(v=Object(o.b)(l,[k[i].x,k[i].y,0,1]))[3],w=Object(o.b)(f,[_[i].x,_[i].y,0,1]);var F=Object(o.d)(v,w);console.assert(Object(o.c)(F)<1e-9,"Not equal:",v,w)}return l}({BL:{x:(rect=n).left,y:rect.bottom},TL:{x:rect.left,y:rect.top},TR:{x:rect.right,y:rect.top},BR:{x:rect.right,y:rect.bottom}},function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{x:0,y:0};try{var r={};return Object.keys(t).map((function(o){r[o]={x:t[o].x*e.width-n.x,y:t[o].y*e.height-n.y}})),r}catch(t){console.warn(t)}}(t,e,function(rect){return{x:rect.width/2,y:rect.height/2}}(n))))}catch(r){console.warn(r),console.warn("roi = "),console.warn(t),console.warn("frame = "),console.warn(e),console.warn("overlay = "),console.warn(n)}var rect}},545:function(t,e,n){"use strict";var r=n(531);n.n(r).a},546:function(t,e,n){(e=n(32)(!1)).push([t.i,".config-sidebar[data-v-65dc2cbb]{background:#fff;width:300px;max-width:300px;min-width:300px;float:right;height:calc(100vh - 38px);overflow-y:scroll;overflow-x:hidden;-ms-overflow-style:none;scrollbar-width:none}.config-sidebar[data-v-65dc2cbb]::-webkit-scrollbar{display:none}.sidebar-form-container[data-v-65dc2cbb]{margin-top:-30px;width:300px}.config-spinner[data-v-65dc2cbb]{position:relative;bottom:0;left:270px;font-size:18px;color:#3e515b;width:30px!important;height:30px!important}",""]),t.exports=e},549:function(t,e,n){var content=n(575);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("45a71ca0",content,!0,{sourceMap:!1})},553:function(t,e,n){"use strict";var r=n(536),o=(n(65),n(524)),l=(n(22),{name:"ConfigSidebar",components:{SchemaForm:r.a},props:{hidden:{type:Boolean,required:!0},id:{type:String,required:!0},skip:{type:Array,required:!1,default:function(){return["frame_interval_setting","Nf","dt","video_path","design_path","features","parameters","name","description","transform"]}}},beforeMount:function(){this.handleInit()},beforeDestroy:function(){this.handleCleanUp()},methods:{handleInit:function(){this.handleGetConfig()},handleCleanUp:function(){},handleGetConfig:function(){this.config=this.$store.getters["analyzers/getAnalyzerConfigCopy"](this.id),this.waiting=!1},handleSetConfig:function(){var t=this;this.waiting=!0,this.$store.dispatch("analyzers/set_config",{id:this.id,config:this.config}).then((function(){t.handleGetConfig()}))},handleUpdate:Object(o.throttle)(250,!1,Object(o.debounce)(250,!1,(function(){this.handleSetConfig()})))},computed:{schema:function(){return this.$store.getters["schemas/getConfigSchema"]},store_config:function(){return this.$store.getters["analyzers/getAnalyzerConfig"](this.id)}},watch:{store_config:function(){this.handleGetConfig()}},data:function(){return{config:{},ui_schema:[],waiting:!0}}}),c=(n(545),n(18)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"config-sidebar"},[n("div",{staticClass:"header-button-icon config-spinner"},[n("i",{class:{"fa fa-spinner fa-spin":t.waiting}})]),t._v(" "),n("div",{staticClass:"sidebar-form-container"},[t.config?n("SchemaForm",{staticClass:"config-form-container",attrs:{data:t.config,schema:t.schema,skip:t.skip,property_as_title:!0},on:{commit:t.handleUpdate}}):t._e()],1)])}),[],!1,null,"65dc2cbb",null);e.a=component.exports},574:function(t,e,n){"use strict";var r=n(549);n.n(r).a},575:function(t,e,n){(e=n(32)(!1)).push([t.i,".filter{z-index:100;margin:0;height:calc(100vh - 38px);width:calc(100vw - 120px);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.with-cs{max-width:calc(100vw - 420px)!important}.overlay,.streamed-image-f{display:inline;max-width:calc(100vw - 120px);max-height:calc(100vh - 38px);float:left;position:absolute;pointer-events:none}.overlay{opacity:.15}.overlay-state{mix-blend-mode:multiply;display:inline;max-width:calc(100vw - 120px);max-height:calc(100vh - 38px);float:left;position:absolute;pointer-events:none}.hidden *{visibility:hidden}.button-hidden{background:#f86c6b!important;color:#f0f3f5!important;font-weight:700}.filter-content{display:flex;flex-direction:row}.filter-placeholder{flex-grow:1;height:calc(100vh - 38px)}",""]),t.exports=e},590:function(t,e,n){"use strict";n.r(e);n(40);var r=n(15),o=n(22),l=n(526),c=n(521),d=n(535),h=n(553),f=n(544),m=(n(65),n(6)),v=n(205);m.default.use(v.a);var y={name:"analyzer-filter",beforeMount:function(){this.handleInit(),window.addEventListener("resize",this.updateFrame)},beforeDestroy:function(){this.handleCleanUp(),window.removeEventListener("resize",this.updateFrame)},components:{PageHeader:l.a,PageHeaderItem:c.a,PageHeaderSeek:d.a,ConfigSidebar:h.a},methods:{handleInit:function(){this.previous_id=this.id,this.$store.dispatch("analyzers/refresh",{id:this.id}),this.opened_at=Date.now(),-1===this.$store.getters["analyzers/getIndex"](this.id)?this.$router.push("/"):(this.$root.$emit(o.c.sidebar.open(this.id)),this.$store.dispatch("analyzers/get_config",{id:this.id}),this.waitUntilHasRect=setInterval(this.updateFrameOnceHasRect,100),this.waitForMasks=setInterval(this.getMasks,100),this.waitForFeatures=setInterval(this.getFeatures,100))},handleCleanUp:function(){Object(r.Y)(this.previous_id,r.q.GET_FRAME),Object(r.Y)(this.previous_id,r.q.GET_STATE_FRAME),clearInterval(this.waitUntilHasRect),clearInterval(this.waitForFeatures),clearInterval(this.waitForMasks),this.filter={frame:null},this.refs={frame:null}},getRefs:function(){this.refs.frame=this.$refs[this.ref_frame]},getFeatures:function(){this.features=this.$store.getters["analyzers/getFeatures"](this.id),this.feature=this.features[0],0!==this.features.length&&clearInterval(this.waitForFeatures)},updateFrame:function(){try{var t=this.refs.frame.getBoundingClientRect();this.filter.frame=t}catch(t){}},updateFrameOnChange:function(){for(var t=this.refs.frame.getBoundingClientRect().width;this.refs.frame.getBoundingClientRect().width===t;);this.updateFrame()},updateFrameOnceHasRect:function(){var t=!1;this.getRefs(),void 0!==this.waitUntilHasRect&&this.refs.frame.getBoundingClientRect().width>50&&(this.updateFrame(),t=!0),t&&clearInterval(this.waitUntilHasRect)},handleClick:function(t){Object(r.U)(this.id,Object(f.a)(t,this.filter.frame)).then((function(data){data.message}))},handleClearFilters:function(){Object(r.l)(this.id)},handleUndoFilters:function(){Object(r.bb)(this.id,"masks")},handleRedoFilters:function(){Object(r.P)(this.id,"masks")},stepForward:function(){this.$root.$emit(o.c.seek.step_fw(this.id))},stepBackward:function(){this.$root.$emit(o.c.seek.step_bw(this.id))},handleHideConfigSidebar:function(){this.hideConfigSidebar=!this.hideConfigSidebar,this.waitUntilHasRect=setInterval(this.updateFrameOnceHasRect,100)}},watch:{"$route.query.id":function(){this.handleCleanUp(),this.handleInit(),this.updateFrame()},"refs.frame.class":function(){}},asyncComputed:{},computed:{id:function(){return this.$route.query.id},state_url:function(){return Object(r.f)("stream",this.$route.query.id,r.q.GET_STATE_FRAME)},frame_url:function(){return Object(r.f)("stream",this.$route.query.id,r.q.GET_FRAME)},overlay_url:function(){return Object(r.f)(this.$route.query.id,"call",r.q.GET_OVERLAY_PNG)},ref_frame:function(){return"filter-frame-".concat(this.$route.query.id)},keymap:function(){return{"ctrl+z":this.handleUndoFilters,"ctrl+shift+z":this.handleRedoFilters,right:this.stepForward,left:this.stepBackward}},config:function(){return this.$store.getters["analyzers/getAnalyzerConfig"](this.$route.query.id)},masks:function(){return void 0!==this.config?this.config.masks.map((function(t){return t.name})):[]},filter_options:function(){return this.$store.getters["schemas/getFilterOptions"]},filter_type:function(){return void 0!==this.config?this.config.masks[this.mask].filter.type:void 0}},data:function(){return{opened_at:0,waitUntilHasRect:null,waitForMasks:null,waitForFeatures:null,mask:0,filter:{frame:null},refs:{frame:null},hideConfigSidebar:!0,hideVideoFrame:!1,hideStateFrame:!1,hideOverlay:!1}}},w=(n(574),n(18)),component=Object(w.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fixed-page"},[n("PageHeader",[n("PageHeaderItem",[n("b-button",{staticClass:"header-button-icon",attrs:{"data-toggle":"tooltip",title:"Clear filters"},on:{click:t.handleClearFilters}},[n("i",{staticClass:"icon-ban"})]),t._v(" "),n("b-button",{directives:[{name:"hotkey",rawName:"v-hotkey",value:t.keymap,expression:"keymap"}],staticClass:"header-button-icon",attrs:{"data-toggle":"tooltip",title:"Undo alignment"},on:{click:t.handleUndoFilters}},[n("i",{staticClass:"icon-action-undo"})]),t._v(" "),n("b-button",{directives:[{name:"hotkey",rawName:"v-hotkey",value:t.keymap,expression:"keymap"}],staticClass:"header-button-icon",attrs:{"data-toggle":"tooltip",title:"Redo alignment"},on:{click:t.handleRedoFilters}},[n("i",{staticClass:"icon-action-redo"})])],1),t._v(" "),n("PageHeaderSeek",{key:t.id,attrs:{id:t.id}}),t._v(" "),n("PageHeaderItem",[n("b-button",{staticClass:"header-button-icon",attrs:{"data-toggle":"tooltip",title:"Toggle configuration sidebar"},on:{click:t.handleHideConfigSidebar}},[n("i",{staticClass:"icon-menu"})]),t._v(" "),n("b-button",{staticClass:"header-button-icon",attrs:{variant:t.hideVideoFrame?"danger":null,"data-toggle":"tooltip",title:t.hideVideoFrame?"Show video frame":"Hide video frame",disabled:t.hideStateFrame&&t.hideOverlay},on:{click:function(e){t.hideVideoFrame=!t.hideVideoFrame}}},[n("i",{staticClass:"icon-film"})]),t._v(" "),n("b-button",{staticClass:"header-button-icon",attrs:{variant:t.hideStateFrame?"danger":null,"data-toggle":"tooltip",title:t.hideStateFrame?"Show state frame":"Hide state frame",disabled:t.hideVideoFrame&&t.hideOverlay},on:{click:function(e){t.hideStateFrame=!t.hideStateFrame}}},[n("i",{staticClass:"icon-layers"})]),t._v(" "),n("b-button",{staticClass:"header-button-icon",attrs:{variant:t.hideOverlay?"danger":null,"data-toggle":"tooltip",title:t.hideStateFrame?"Show overlay":"Hide overlay",disabled:t.hideVideoFrame&&t.hideStateFrame},on:{click:function(e){t.hideOverlay=!t.hideOverlay}}},[n("i",{staticClass:"icon-frame"})])],1)],1),t._v(" "),n("div",{staticClass:"filter-content"},[t.hideConfigSidebar?t._e():n("ConfigSidebar",{key:this.id,attrs:{id:this.id,hidden:!0,skip:["frame_interval_setting","Nf","dt","video_path","design_path","design","features","feature_parameters","name","description","transform"]}}),t._v(" "),n("div",{staticClass:"filter filter-placeholder",on:{click:t.handleClick}},[t.hideVideoFrame?t._e():n("img",{ref:t.ref_frame,class:t.hideConfigSidebar?"streamed-image-f":"streamed-image-f with-cs",attrs:{src:t.frame_url+"?"+t.opened_at,alt:""}}),t._v(" "),t.hideOverlay?t._e():n("img",{staticClass:"overlay",class:t.hideConfigSidebar?"overlay":"overlay with-cs",attrs:{src:t.overlay_url+"?"+t.opened_at,alt:""}}),t._v(" "),t.hideStateFrame?t._e():n("img",{staticClass:"overlay-state",class:t.hideConfigSidebar?"overlay-state":"overlay-state with-cs",attrs:{src:t.state_url+"?"+t.opened_at,alt:""}})])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);