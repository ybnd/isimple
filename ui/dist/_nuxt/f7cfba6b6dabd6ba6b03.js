(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{509:function(t,e,n){var content=n(519);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("cda4275e",content,!0,{sourceMap:!1})},510:function(t,e,n){"use strict";function o(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=new Date(0);return e.setSeconds(t,t%1*1e3),e.toISOString().substr(14,7)}n.d(e,"a",(function(){return o}))},518:function(t,e,n){"use strict";var o=n(509);n.n(o).a},519:function(t,e,n){(e=n(32)(!1)).push([t.i,".vue-slider{padding:4px}.vue-slider-rail{background:#f0f3f5!important}.vue-slider-dot{background:#1985ac;border-radius:50%}.slider-container{display:flex;flex-direction:row;padding-top:4px;padding-left:4px;padding-right:4px}.slider-caption{height:14px;margin-bottom:4px}",""]),t.exports=e},520:function(t,e,n){"use strict";var o=n(12),r=n(28),c=n(510),d=n(523),l=n.n(d),h=n(505),f=n(508),m=n(513),v=n.n(m);n(6).default.use(v.a);var k={name:"PageHeaderSeek",props:{id:{type:String,default:"",required:!0}},components:{VueSlider:l.a,PageHeaderItem:h.a},beforeMount:function(){var t=this;Object(o.C)(this.id).then((function(e){t.position=e})),Object(o.F)(this.id).then((function(e){t.totalSeconds=e})),this.$root.$on(r.a.seek.set(this.id),this.handleSeek),this.$root.$on(r.a.seek.reset(this.id),this.resetSeekPosition),this.$root.$on(r.a.seek.step_fw(this.id),this.stepForward),this.$root.$on(r.a.seek.step_bw(this.id),this.stepBackward)},beforeDestroy:function(){this.position=null,this.$root.$off(r.a.seek.set(this.id),this.handleSeek),this.$root.$off(r.a.seek.reset(this.id),this.resetSeekPosition),this.$root.$off(r.a.seek.step_fw(this.id),this.stepForward),this.$root.$off(r.a.seek.step_bw(this.id),this.stepBackward)},methods:{setSeekPosition:function(){var t=this;Object(o.L)(this.id,this.position).then((function(e){t.position=e}))},handleSeek:Object(f.b)(100,!0,Object(f.a)(25,!0,(function(){console.log("PageHeaderSeek.handleSeek()"),this.setSeekPosition()}))),resetSeekPosition:function(){console.log("PageHeaderSeek.resetSeek()"),this.position=null,this.handleSeek()},stepForward:function(){this.position=this.position+this.step,this.handleSeek()},stepBackward:function(){this.position=this.position-this.step,this.handleSeek()}},computed:{keymap:function(){return{right:this.stepForward,left:this.stepBackward}},currentTime:function(){return Object(c.a)(this.position*this.totalSeconds)},totalTime:function(){return Object(c.a)(this.totalSeconds)}},data:function(){return{position:null,step:.01,options:{dotSize:14,width:120,height:4,contained:!1,direction:"ltr",data:null,min:0,max:1,interval:.01,disabled:!1,clickable:!0,duration:.05,adsorb:!1,lazy:!1,useKeyboard:!0,keydownHook:null,dragOnClick:!1,enableCross:!0,fixed:!1,order:!0,marks:!1,process:!1},totalSeconds:0}}},S=(n(518),n(23)),component=Object(S.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("PageHeaderItem",[n("div",{staticClass:"slider-container"},[n("div",{staticClass:"slider-caption"},[t._v(t._s(t.currentTime)+" / "+t._s(t.totalTime))]),t._v(" "),t._v("\n     \n    "),n("vue-slider",t._b({ref:"slider",on:{change:t.handleSeek},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}},"vue-slider",t.options,!1))],1)])}),[],!1,null,null,null);e.a=component.exports},531:function(t,e,n){var content=n(551);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("43d05d2a",content,!0,{sourceMap:!1})},550:function(t,e,n){"use strict";var o=n(531);n.n(o).a},551:function(t,e,n){(e=n(32)(!1)).push([t.i,".scrollable[data-v-4b99cdc6]{display:flex;flex-direction:column;max-width:calc(100vw - 120px);max-height:calc(100vh - 38px);height:calc(100vh - 38px);flex-grow:0}.isimple-settings-box[data-v-4b99cdc6]{margin-top:2px;margin-bottom:2px;overflow-y:scroll;overflow-x:hidden}.settings-form-container[data-v-4b99cdc6]{margin:4px;padding-bottom:4px}.settings-form-container2[data-v-4b99cdc6]{padding:0;margin:0;display:flex;flex-direction:row;flex-wrap:wrap;overflow-x:scroll;overflow-y:hidden;-ms-overflow-style:none;scrollbar-width:none;align-content:flex-start;justify-content:flex-start;height:calc(100vh - 38px);width:calc(100vw - 120px)}",""]),t.exports=e},552:function(t,e){},578:function(t,e,n){"use strict";n.r(e);var o=n(511),r=n(505),c=n(520),d=n(521),l=(n(97),n(12)),h={name:"dashboard",components:{PageHeader:o.a,PageHeaderItem:r.a,PageHeaderSeek:c.a,SchemaForm:d.a},mounted:function(){var t=this;this.$store.getters["settings/isUndefined"]?this.$store.dispatch("settings/sync").then((function(){t.settings=t.$store.getters["settings/getSettingsCopy"],t.schema=t.$store.getters["settings/getSchemaCopy"]})):(this.settings=this.$store.getters["settings/getSettingsCopy"],this.schema=this.$store.getters["settings/getSchemaCopy"]),this.getDiskSize(),setInterval(this.getDiskSize,1e3)},methods:{setSettings:function(){var t=this;this.$store.dispatch("settings/set",{settings:this.settings}).then((function(){t.settings=t.$store.getters["settings/getSettingsCopy"]}))},clearCache:function(){Object(l.i)().then(this.getDiskSize)},clearDb:function(){Object(l.j)().then(this.getDiskSize)},getDiskSize:function(){var t=this;Object(l.s)().then((function(e){return t.size.cache=e})),Object(l.w)().then((function(e){return t.size.db=e}))}},data:function(){return{settings:{cache:{},db:{},format:{},log:{},render:{}},schema:{},size:{cache:null,db:null}}}},f=(n(550),n(23)),m=n(552),v=n.n(m),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fixed-page"},[n("PageHeader",[n("PageHeaderItem",[n("b-button",{on:{click:t.setSettings}},[t._v("Save settings & restart")])],1),t._v(" "),n("PageHeaderItem",[n("b-button",{on:{click:t.clearDb}},[t._v("Clear database ("+t._s(t.size.db)+")")]),t._v(" "),n("b-button",{on:{click:t.clearCache}},[t._v("Clear cache ("+t._s(t.size.cache)+")")])],1)],1),t._v(" "),n("div",{staticClass:"scrollable"},[n("b-card",{staticClass:"isimple-settings-box isimple-form-section"},[n("SchemaForm",{staticClass:"settings-form-container",attrs:{data:t.settings,schema:t.schema,clickable_categories:!1,container_class:"settings-form-container2"}})],1)],1)],1)}),[],!1,null,"4b99cdc6",null);"function"==typeof v.a&&v()(component);e.default=component.exports}}]);