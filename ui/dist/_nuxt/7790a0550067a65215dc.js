(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{381:function(t,e,n){var content=n(385);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("0a18e831",content,!0,{sourceMap:!1})},382:function(t,e,n){var content=n(387);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("20035751",content,!0,{sourceMap:!1})},383:function(t,e,n){"use strict";var r={name:"PageHeaderItem"},o=(n(384),n(18)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"page-header-item"},[this._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},384:function(t,e,n){"use strict";var r=n(381);n.n(r).a},385:function(t,e,n){(e=n(31)(!1)).push([t.i,".page-header-item{flex:0 1 auto;margin-top:4px;margin-bottom:4px;background:#c2cfd6;display:flex;padding-left:.5rem;overflow:visible;height:30px;min-height:30px;max-height:30px;min-width:20px}.page-header-item .btn{height:30px;padding:4px}.page-header-item *{height:30px;max-height:30px;margin-right:4px}.header-button-icon{width:30px;font-size:14px;display:flex}.header-button-icon i{max-height:22px;max-width:22px;margin:0;padding:4px 0 0;flex-shrink:1;flex-grow:1}",""]),t.exports=e},386:function(t,e,n){"use strict";var r=n(382);n.n(r).a},387:function(t,e,n){(e=n(31)(!1)).push([t.i,".page-header{flex-grow:0!important;flex-shrink:0!important;height:38px!important;margin-bottom:0!important;border-bottom:0!important;border-radius:0!important;width:calc(100vw - 120px);display:flex;flex-direction:row;background:#c2cfd6;overflow:visible}",""]),t.exports=e},388:function(t,e,n){var content=n(401);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("cda4275e",content,!0,{sourceMap:!1})},389:function(t,e,n){"use strict";var r={name:"PageHeader",props:{},components:{PageHeaderItem:n(383).a},methods:{}},o=(n(386),n(18)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"page-header"},[this._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},391:function(t,e,n){"use strict";function r(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=new Date(0);return e.setSeconds(t,t%1*1e3),e.toISOString().substr(14,7)}n.d(e,"a",(function(){return r}))},400:function(t,e,n){"use strict";var r=n(388);n.n(r).a},401:function(t,e,n){(e=n(31)(!1)).push([t.i,".vue-slider{padding:4px}.vue-slider-rail{background:#f0f3f5!important}.vue-slider-dot{background:#1985ac;border-radius:50%}.slider-container{display:flex;flex-direction:row;padding-top:4px;padding-left:4px;padding-right:4px}.slider-caption{height:14px;margin-bottom:4px}",""]),t.exports=e},402:function(t,e,n){"use strict";var r=n(11),o=n(25),l=n(391),c=n(432),h=n.n(c),d=n(383),f=n(397),m=n(396),v=n.n(m);n(5).default.use(v.a);var y={name:"PageHeaderSeek",props:{id:{type:String,default:"",required:!0}},components:{VueSlider:h.a,PageHeaderItem:d.a},beforeMount:function(){var t=this;this.resetSeekPosition(),Object(r.x)(this.id).then((function(e){t.totalSeconds=e})),this.$root.$on(o.a.seek.set(this.id),this.handleSeek),this.$root.$on(o.a.seek.reset(this.id),this.resetSeekPosition),this.$root.$on(o.a.seek.step_fw(this.id),this.stepForward),this.$root.$on(o.a.seek.step_bw(this.id),this.stepBackward)},beforeDestroy:function(){this.position=null,clearInterval(this.syncInterval),this.$root.$off(o.a.seek.set(this.id),this.handleSeek),this.$root.$off(o.a.seek.reset(this.id),this.resetSeekPosition),this.$root.$off(o.a.seek.step_fw(this.id),this.stepForward),this.$root.$off(o.a.seek.step_bw(this.id),this.stepBackward)},methods:{setSeekPosition:function(){var t=this;Object(r.D)(this.id,this.position).then((function(e){t.position=e}))},handleSeek:Object(f.b)(100,!0,Object(f.a)(25,!0,(function(){this.setSeekPosition()}))),resetSeekPosition:function(){console.log("PageHeaderSeek(".concat(this.id,".resetSeek()")),this.position=null,this.handleSeek()},stepForward:function(){this.position=this.position+this.step,this.handleSeek()},stepBackward:function(){this.position=this.position-this.step,this.handleSeek()}},computed:{keymap:function(){return{right:this.stepForward,left:this.stepBackward}},currentTime:function(){return Object(l.a)(this.position*this.totalSeconds)},totalTime:function(){return Object(l.a)(this.totalSeconds)}},data:function(){return{position:null,step:.01,options:{dotSize:14,width:120,height:4,contained:!1,direction:"ltr",data:null,min:0,max:1,interval:.01,disabled:!1,clickable:!0,duration:.05,adsorb:!1,lazy:!1,useKeyboard:!0,keydownHook:null,dragOnClick:!1,enableCross:!0,fixed:!1,order:!0,marks:!1,process:!1},syncInterval:null,totalSeconds:0}}},k=(n(400),n(18)),component=Object(k.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("PageHeaderItem",[n("div",{staticClass:"slider-container"},[n("div",{staticClass:"slider-caption"},[t._v(t._s(t.currentTime)+" / "+t._s(t.totalTime))]),t._v(" "),t._v("\n     \n    "),n("vue-slider",t._b({ref:"slider",on:{change:t.handleSeek},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}},"vue-slider",t.options,!1))],1)])}),[],!1,null,null,null);e.a=component.exports},442:function(t,e,n){"use strict";n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return m})),n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return y})),n.d(e,"c",(function(){return k}));n(19),n(14),n(21);var r=n(33),o=n(542),l=n(16),c=n.n(l),h=["BL","TL","TR","BR"],d=["x","y"];function f(t){for(var i=0;i<h.length;i++){if(!t.hasOwnProperty(h[i]))return!1;for(var e=0;e<d.length;e++){if(!t[h[i]].hasOwnProperty(d[e]))return!1;if("number"!=typeof t[h[i]][d[e]])return!1}}return!0}function m(rect,t){try{return c()(!(null===t)),{BL:{x:(rect.pos3[0]-t.left)/t.width,y:(rect.pos3[1]-t.top)/t.height},TL:{x:(rect.pos1[0]-t.left)/t.width,y:(rect.pos1[1]-t.top)/t.height},TR:{x:(rect.pos2[0]-t.left)/t.width,y:(rect.pos2[1]-t.top)/t.height},BR:{x:(rect.pos4[0]-t.left)/t.width,y:(rect.pos4[1]-t.top)/t.height}}}catch(t){return void console.warn("roiRectInfoToCoordinates: frame is null")}}function v(t,e){var n=(t.clientX-e.left)/e.width,r=(t.clientY-e.top)/e.height;return n<0&&(n=0),n>1&&(n=1),r<0&&(r=0),r>1&&(r=1),{x:n,y:r}}function y(t,e,n){var r=v(t,n),o=v(e,n),l=Math.abs(r.x-o.x)*Math.abs(r.y-o.y);if(console.log("Area is ".concat(l)),l>.01){var c=[r.x,o.x].sort(),h=[r.y,o.y].sort();return{BL:{x:c[1],y:h[0]},TL:{x:c[1],y:h[1]},TR:{x:c[0],y:h[1]},BR:{x:c[0],y:h[0]}}}return console.warn("invalid rectangle"),null}function k(t,e,n){try{return function(t){for(var content=[],col=0;col<4;col++)for(var e=0;e<4;e++)content=[].concat(Object(r.a)(content),[t[e][col]]);return"matrix3d(".concat(content.join(","),")")}(function(t,e){for(var n,l,b,c,i,h,d,f,m,v,y,k,x=["BL","TL","TR","BR"],w=[],_=[],$=0;$<x.length;$++)w=[].concat(Object(r.a)(w),[t[x[$]]]),_=[].concat(Object(r.a)(_),[e[x[$]]]);for(console.assert(w.length===(y=_.length)&&4===y),n=[],i=h=0;h<4;i=++h)n.push([w[i].x,w[i].y,1,0,0,0,-w[i].x*_[i].x,-w[i].y*_[i].x]),n.push([0,0,0,w[i].x,w[i].y,1,-w[i].x*_[i].y,-w[i].y*_[i].y]);for(b=[],i=d=0;d<4;i=++d)b.push(_[i].x),b.push(_[i].y);for(l=[[(c=(c=Object(o.a)(n,b)).reduce((function(a,b){return a.concat(b)}),[]))[0],c[1],0,c[2]],[c[3],c[4],0,c[5]],[0,0,1,0],[c[6],c[7],0,1]],i=m=0;m<4;i=++m){f=(v=Object(o.b)(l,[w[i].x,w[i].y,0,1]))[3],k=Object(o.b)(f,[_[i].x,_[i].y,0,1]);var F=Object(o.d)(v,k);console.assert(Object(o.c)(F)<1e-9,"Not equal:",v,k)}return l}({BL:{x:(rect=n).left,y:rect.bottom},TL:{x:rect.left,y:rect.top},TR:{x:rect.right,y:rect.top},BR:{x:rect.right,y:rect.bottom}},function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{x:0,y:0};try{var r={};return Object.keys(t).map((function(o){r[o]={x:t[o].x*e.width-n.x,y:t[o].y*e.height-n.y}})),r}catch(t){console.warn(t)}}(t,e,function(rect){return{x:rect.width/2,y:rect.height/2}}(n))))}catch(r){console.warn(r),console.warn("roi = "),console.warn(t),console.warn("frame = "),console.warn(e),console.warn("overlay = "),console.warn(n)}var rect}},445:function(t,e,n){var content=n(534);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("45a71ca0",content,!0,{sourceMap:!1})},533:function(t,e,n){"use strict";var r=n(445);n.n(r).a},534:function(t,e,n){(e=n(31)(!1)).push([t.i,".filter{z-index:100;margin:0;height:calc(100vh - 38px);width:calc(100vw - 120px);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.filter,.streamed-image-f{position:absolute;float:left;display:block}.streamed-image-f{max-width:calc(100vw - 120px);max-height:calc(100vh - 38px);width:auto;height:auto;pointer-events:none}.overlay{opacity:.25}.overlay,.overlay-state{mix-blend-mode:multiply;pointer-events:none;float:left;max-height:calc(100vh - 38px)}.hidden *{visibility:hidden}",""]),t.exports=e},549:function(t,e,n){"use strict";n.r(e);n(19),n(14),n(21);var r=n(11),o=n(25),l=n(389),c=n(383),h=n(402),d=n(442),f={name:"analyzer-filter",beforeMount:function(){this.handleInit(),window.onresize=this.updateFrame},beforeDestroy:function(){this.handleCleanUp()},components:{PageHeader:l.a,PageHeaderItem:c.a,PageHeaderSeek:h.a},methods:{handleInit:function(){var t=this;console.log("filter: handleInit()"),this.previous_id=this.id,this.opened_at=Date.now(),-1===this.$store.getters["analyzers/getIndex"](this.id)?this.$router.push("/"):(this.$root.$emit(o.a.sidebar.open(this.id)),this.waitUntilHasRect=setInterval(this.updateFrameOnceHasRect,100),this.waitForMasks=setInterval(this.getMasks,100),this.waitForFeatures=setInterval(this.getFeatures,100),Object(r.s)("filter").then((function(e){t.filter_options=e})),console.log("setting this.feature to ".concat(this.feature)),this.$store.dispatch("analyzers/get_config",{id:this.id}).then((function(){t.$root.$emit(o.a.seek.reset(t.id))})))},handleCleanUp:function(){console.log("filter: handleCleanUp()"),Object(r.M)(this.previous_id,r.l.GET_FRAME),Object(r.M)(this.previous_id,r.l.GET_STATE_FRAME),clearInterval(this.waitUntilHasRect),clearInterval(this.waitForFeatures),clearInterval(this.waitForMasks),this.filter={frame:null},this.refs={frame:null}},getRefs:function(){console.log("filter: getRefs()"),console.log("this.ref_frame = "),console.log(this.ref_frame),console.log("this.$refs attrs = "),console.log(Object.keys(this.$refs)),console.log("this.$refs[this.ref_frame] = "),console.log(this.$refs[this.ref_frame]),this.refs.frame=this.$refs[this.ref_frame]},getMasks:function(){console.log("filter: getMasks()"),this.masks=this.$store.getters["analyzers/getMasks"](this.id),this.mask=this.masks[0],this.filter_type=this.$store.getters["analyzers/getMaskFilterType"](this.id,0),0!==this.masks.length&&void 0!==this.masks[0]&&(console.log("filter: getMasks() -- clearing interval"),clearInterval(this.waitForMasks)),console.log(this.masks)},getFeatures:function(){console.log("filter: getFeatures()"),this.features=this.$store.getters["analyzers/getFeatures"](this.id),this.feature=this.features[0],0!==this.features.length&&(console.log("filter: getFeatures() -- clearing interval"),clearInterval(this.waitForFeatures)),console.log(this.features)},updateFrame:function(){console.log("Updating frame...");var t=this.refs.frame.getBoundingClientRect();console.log(t),this.filter.frame=t},updateFrameOnceHasRect:function(){var t=!1;this.getRefs(),void 0!==this.waitUntilHasRect&&this.refs.frame.getBoundingClientRect().width>50&&(console.log("HAS FRAME"),this.updateFrame(),t=!0),t&&clearInterval(this.waitUntilHasRect)},handleClick:function(t){Object(r.H)(this.id,Object(d.a)(t,this.filter.frame)).then((function(t){t&&console.log("//PUT THIS IN A POPUP OR SOMETHING// ".concat(t))}))},handleSetFeature:function(t){var e=this;this.$store.dispatch("analyzers/set_config",{id:this.id,config:{features:[t]}}).then((function(t){console.log("in analyzers/set_config callback");var n=e.$store.getters["analyzers/getFeatures"](e.id);e.feature=n[0]}))},handleSetMask:function(mask,t){this.mask=mask,this.filter_type=this.$store.getters["analyzers/getMaskFilterType"](this.id,t),this.filter_data=this.$store.getters["analyzers/getMaskFilterData"](this.id,t)},handleSetFilter:function(filter){var t=this,e=this.$store.getters["analyzers/getAnalyzerConfig"](this.id);e.masks[this.mask].filter.type=filter,this.$store.dispatch("analyzers/set_config",{id:this.id,config:e}).then((function(){t.filter_type=t.$store.getters["analyzers/getMaskFilterType"](t.id)}))},handleClearFilters:function(){console.warn("NOT IMPLEMENTED YET")},handleUndoFilters:function(){Object(r.N)(this.id,"masks")},handleRedoFilters:function(){Object(r.B)(this.id,"masks")},stepForward:function(){this.$root.$emit(o.a.seek.step_fw(this.id))},stepBackward:function(){this.$root.$emit(o.a.seek.step_bw(this.id))}},watch:{"$route.query.id":function(){console.log("id has changed ".concat(this.id)),this.handleCleanUp(),this.handleInit(),this.updateFrame()}},computed:{id:function(){return this.$route.query.id},state_url:function(){return Object(r.d)(this.$route.query.id,"stream",r.l.GET_STATE_FRAME)},frame_url:function(){return Object(r.d)(this.$route.query.id,"stream",r.l.GET_FRAME)},overlay_url:function(){return Object(r.d)(this.$route.query.id,"call",r.l.GET_OVERLAY_PNG)},ref_frame:function(){return"filter-frame-".concat(this.$route.query.id)},keymap:function(){return{"ctrl+z":this.handleUndoFilters,"ctrl+shift+z":this.handleRedoFilters,right:this.stepForward,left:this.stepBackward}}},data:function(){return{opened_at:0,waitUntilHasRect:null,waitForMasks:null,waitForFeatures:null,filter_type:"",filter_options:void 0,filter_data:{},mask:"",masks:[],feature:"",features:[],filter:{frame:null},refs:{frame:null}}}},m=(n(533),n(18)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fixed-page"},[n("PageHeader",[n("PageHeaderItem",[n("b-button",{staticClass:"header-button-icon",attrs:{"data-toggle":"tooltip",title:"Clear alignment"},on:{click:t.handleClearFilters}},[n("i",{staticClass:"icon-ban"})]),t._v(" "),n("b-button",{directives:[{name:"hotkey",rawName:"v-hotkey",value:t.keymap,expression:"keymap"}],staticClass:"header-button-icon",attrs:{"data-toggle":"tooltip",title:"Undo alignment"},on:{click:t.handleUndoFilters}},[n("i",{staticClass:"icon-action-undo"})]),t._v(" "),n("b-button",{directives:[{name:"hotkey",rawName:"v-hotkey",value:t.keymap,expression:"keymap"}],staticClass:"header-button-icon",attrs:{"data-toggle":"tooltip",title:"Redo alignment"},on:{click:t.handleRedoFilters}},[n("i",{staticClass:"icon-action-redo"})])],1),t._v(" "),n("PageHeaderSeek",{key:t.id,attrs:{id:t.id}}),t._v(" "),n("PageHeaderItem"),t._v(" "),n("PageHeaderItem",[n("b-button-group",[n("b-dropdown",{attrs:{text:""+this.mask,"data-toggle":"tooltip",title:"Mask"}},t._l(t.masks,(function(mask,e){return n("b-dropdown-item",{key:"mask-"+mask,on:{click:function(n){return t.handleSetMask(mask,e)}}},[t._v("\n            "+t._s(mask)+"\n          ")])})),1),t._v(" "),n("b-dropdown",{attrs:{text:""+this.filter_type,"data-toggle":"tooltip",title:"Filter type"}},t._l(t.filter_options,(function(filter){return n("b-dropdown-item",{key:"filter-"+filter,on:{click:function(e){return t.handleSetFilter(filter)}}},[t._v("\n            "+t._s(filter)+"\n          ")])})),1)],1)],1)],1),t._v(" "),n("div",{staticClass:"filter",on:{click:t.handleClick}},[n("img",{ref:t.ref_frame,staticClass:"streamed-image-f",attrs:{src:t.frame_url+"?"+t.opened_at,alt:""}}),t._v(" "),n("img",{staticClass:"streamed-image-f overlay",attrs:{src:t.overlay_url+"?"+t.opened_at,alt:""}}),t._v(" "),n("img",{staticClass:"streamed-image-f overlay-state",attrs:{src:t.state_url+"?"+t.opened_at,alt:""}})])],1)}),[],!1,null,null,null);e.default=component.exports}}]);