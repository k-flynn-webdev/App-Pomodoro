(function(t){function e(e){for(var i,r,a=e[0],c=e[1],l=e[2],h=0,m=[];h<a.length;h++)r=a[h],n[r]&&m.push(n[r][0]),n[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],i=!0,a=1;a<s.length;a++){var c=s[a];0!==n[c]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var i={},n={app:0},o=[];function r(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=i,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"06bc":function(t,e,s){"use strict";var i=s("7668"),n=s.n(i);n.a},"143e":function(t,e,s){},"14c9":function(t,e,s){},"1f8f":function(t,e,s){"use strict";var i=s("9244"),n=s.n(i);n.a},"23a4":function(t,e,s){},"4b07":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var i=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("c-pwa-notify"),s("c-sound"),s("c-colour-switch"),s("c-time-control",{attrs:{play:t.play,pause:t.pause,stop:t.stop,resume:t.resume,reset:t.reset}}),s("c-time-options",{attrs:{setTimer:t.setTimer,attrs:t.attrs.timers}}),s("c-app-version"),s("c-footer"),s("div",{staticClass:"board z-inverse"},[s("div",{staticClass:"container colour-bg-inv"},[s("c-sound-visual"),s("c-time-numbers",{staticClass:"item item-numbers",attrs:{start:t.app.timer,input:t.app.time}}),s("c-time-control-visual",{staticClass:"item item-control"})],1)]),s("c-div-bg-reveal",{staticClass:"board",attrs:{progress:t.app.time,goal:t.app.timer}},[s("div",{staticClass:"container colour-bg-inv",class:{"colour-accent":t.app.finished}},[s("c-sound-visual"),s("c-time-numbers",{staticClass:"item item-numbers",attrs:{start:t.app.timer,input:t.app.time}}),s("c-time-control-visual",{staticClass:"item item-control"})],1)])],1)},o=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{style:t.getHeightStyle},[t._t("default")],2)},a=[],c=(s("c5f6"),{name:"cDivBGReveal",data:function(){return{reveal:{height:0,incrementVar:.01}}},props:{progress:Number,goal:Number},computed:{getProgress:function(){return this.progress_update(),this.reveal.height},getHeightStyle:function(){return{height:100*this.getProgress+"%"}}},methods:{progress_update:function(){var t=this.progress/this.goal*(1+this.reveal.incrementVar),e=Math.abs(t-this.reveal.height);e>=this.reveal.incrementVar&&(this.reveal.height=t),this.reveal.height>1&&(this.reveal.height=1)}},mounted:function(){}}),l=c,u=s("2877"),h=Object(u["a"])(l,r,a,!1,null,null,null),m=h.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pwa-notify-modal colour-bg-inv anim-3",class:t.getClass},[s("button",{staticClass:"close button ic",attrs:{"aria-label":"close button"},on:{click:t.pwa_hide}},[s("svg",{staticClass:"colour-fill-bg",attrs:{height:"100%",viewBox:"0 0 224 224",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve","xmlns:serif":"http://www.serif.com/"}},[s("path",{attrs:{d:"M32.764,191.393c-43.537,-43.537 -43.537,-114.23 0,-157.766c43.537,-43.537 114.229,-43.537 157.766,0c43.537,43.536 43.537,114.229 0,157.766c-43.537,43.537 -114.229,43.537 -157.766,0Zm78.883,-111.427l-42.186,-42.186l-32.544,32.544l42.186,42.186l-42.186,42.186l32.544,32.544l42.186,-42.186l42.186,42.186l32.544,-32.544l-42.186,-42.186l42.186,-42.186l-32.544,-32.544l-42.186,42.186Z"}})])]),s("div",{staticClass:"message anim-3"},[s("p",{staticClass:"text colour-fill-bg"},[t._v("\n\t\t\t "+t._s(t.window.message)+"\n\t\t")]),s("div",{ref:"buttons"},t._l(t.window.buttons,function(e,i){return s("button",{ref:"option",refInFor:!0,staticClass:"button-option colour-bg",attrs:{"aria-label":"{{ item.label }}"},on:{click:function(t){return t.stopPropagation(),e.onClick(t)}}},[s("p",{staticClass:"text1 colour-fill-bg-inv"},[t._v(" "+t._s(e.label))])])}),0)])])},d=[],f=null;window.addEventListener("beforeinstallprompt",function(t){t.preventDefault(),f=t});var v={name:"cPWAMessage",data:function(){return{attrs:{install:{timeToShow:5e3}},window:{display:!1,message:"",buttons:[]},worker:{object:null}}},computed:{getClass:function(){return this.window.display?"show":""}},methods:{pwa_show_install:function(){this.window.display||null!==f&&(this.window.message="Add app to homescreen?",this.window.buttons.push({label:"install",onClick:this.pwa_install,onSetup:null}),this.$nextTick(function(){this.pwa_show()}))},pwa_install:function(){var t=this;f.prompt(),f.userChoice.then(function(e){t.pwa_hide(),f=null})},pwa_show_update:function(){this.window.display||(this.window.message="New version found.",this.window.buttons.push({label:"update",onClick:this.pwa_update,onSetup:null}),console.log(this.window.buttons),this.$nextTick(function(){this.pwa_show()}))},pwa_update:function(){var t=new Event("SW_update_accept");document.dispatchEvent(t),console.log("update button clicked.")},pwa_show:function(){for(var t=0;t<this.window.buttons.length;t++)null!==this.window.buttons[t].onSetup&&this.window.buttons[t].onSetup(this.$refs.option[t]);this.window.display=!0},pwa_hide:function(){var t=this;setTimeout(function(){t.window.display=!1,t.pwa_reset()},100)},pwa_reset:function(){this.window.buttons.splice(0,this.window.buttons.length)},pwa_init_events:function(){document.addEventListener("SW_register",this.pwa_register),document.addEventListener("SW_ready",this.pwa_ready),document.addEventListener("SW_update_found",this.pwa_update_found),document.addEventListener("SW_update_ready",this.pwa_show_update),document.addEventListener("SW_offline",this.pwa_offline);var t=this;setTimeout(function(){t.pwa_show_install()},t.attrs.install.timeToShow)}},mounted:function(){this.pwa_init_events()}},_=v,w=(s("e440"),Object(u["a"])(_,p,d,!1,null,"6d4ce26f",null)),b=w.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"switch-holder"},[s("div",{staticClass:"switch colour-bg-inv",on:{click:t.next_Scheme}},t._l(t.schemes,function(e,i){return s("div",{staticClass:"icon"},[s("svg",{staticClass:"styles colour-fill-bg",attrs:{"data-index":i,height:"100%",viewBox:"0 0 101 168",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve","xmlns:serif":"http://www.serif.com/"}},[t.isSelected(i)?s("path",{attrs:{d:"M100.83,117.219c0,27.583 -22.394,49.977 -49.977,49.977c-27.584,0 -49.978,-22.394 -49.978,-49.977l0,-66.86c0,-27.583 22.394,-49.977 49.978,-49.977c27.583,0 49.977,22.394 49.977,49.977l0,66.86Z"}}):s("circle",{attrs:{cx:"50.196",cy:"50.219",r:"49.977"}})])])}),0)])},y=[],k={name:"cColourSwitch",data:function(){return{scheme:0,flip:!1,schemes:[{base:"hsl(250,50%,15%)",inv:"hsla(35,30%,90%,1)",accent:"hsla(100,50%,50%,1)"},{base:"hsl(350,50%,15%)",inv:"hsla(135,30%,90%,1)",accent:"hsla(100,50%,50%,1)"},{base:"hsla(300,10%,40%,1)",inv:"hsla(187,20%,85%,1)",accent:"hsla(100,50%,50%,1)"}]}},computed:{getNextColour:function(){var t=this.scheme+1;return t%=this.schemes.length,{"background-color":this.schemes[t].base}}},methods:{isSelected:function(t){return t===this.scheme},next_Scheme:function(){this.flip?(this.flip=!1,this.scheme+=1,this.scheme=this.scheme%this.schemes.length):this.flip=!0,this.set_Scheme()},set_Scheme:function(){var t=document.documentElement;this.flip?(t.style.setProperty("--colour",this.schemes[this.scheme].inv),t.style.setProperty("--colour-inv",this.schemes[this.scheme].base),t.style.setProperty("--colour-accent",this.schemes[this.scheme].accent)):(t.style.setProperty("--colour",this.schemes[this.scheme].base),t.style.setProperty("--colour-inv",this.schemes[this.scheme].inv),t.style.setProperty("--colour-accent",this.schemes[this.scheme].accent))}},mounted:function(){}},x=k,$=(s("dbfc"),Object(u["a"])(x,g,y,!1,null,null,null)),C=$.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div")},T=[],M=(s("8dfe"),{name:"cSound",data:function(){return{sound:!0,audio_file:null}},computed:{getSound:function(){return this.sound}},methods:{sound_set:function(t){this.sound=t},sound_play:function(){this.sound&&this.audio_file.play()}},mounted:function(){this.audio_file=new Audio(s("8dfe")),this.$root.$on("sound-set",this.sound_set),this.$root.$on("sound-play",this.sound_play)}}),E=M,j=Object(u["a"])(E,S,T,!1,null,null,null),O=j.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{appear:"",name:"slide-fade"}},[s("div",{staticClass:"sound anim-6"},[s("button",{ref:"soundButton",staticClass:"button sound-icon anim-3",attrs:{"aria-label":"turn sound off"},on:{click:t.sound_toggle}},[s("svg",{staticClass:"sound-ic anim-3 colour-fill-bg",class:{"is-active colour-fill-accent":t.getDisplay},attrs:{viewBox:"0 0 224 224",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve","xmlns:serif":"http://www.serif.com/"}},[s("path",{attrs:{d:"M112.206,0.28c61.57,0 111.557,49.987 111.557,111.557c0,61.571 -49.987,111.558 -111.557,111.558c-61.571,0 -111.558,-49.987 -111.558,-111.558c0,-61.57 49.987,-111.557 111.558,-111.557Zm0,140.131c9.607,0 17.407,7.8 17.407,17.408c0,9.607 -7.8,17.408 -17.407,17.408c-9.608,0 -17.408,-7.801 -17.408,-17.408c0,-9.608 7.8,-17.408 17.408,-17.408Zm27.5,-77.21c-17.436,-19.333 -37.564,-19.333 -55,0c-17.436,19.333 -24.808,69.08 -24.808,69.08l104.615,0c0,0 -7.371,-49.747 -24.807,-69.08Z"}})])])])])},W=[],P={name:"cSound",data:function(){return{display:!0,labels:["turn sound on","turn sound off"]}},computed:{getDisplay:function(){return this.display}},methods:{sound_toggle:function(){this.$root.$emit("sound-set",!this.display)},sound_set:function(t){this.display=t,t?this.$refs.soundButton.setAttribute("aria-label",this.labels[1]):this.$refs.soundButton.setAttribute("aria-label",this.labels[0])}},mounted:function(){this.$root.$on("sound-set",this.sound_set)}},Z=P,D=(s("8945"),Object(u["a"])(Z,F,W,!1,null,"7cbe2acc",null)),B=D.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{appear:"",name:"slide-fade"}},[s("div",{staticClass:"app-version anim-3"},[s("p",{staticClass:"text text-small text-bold colour-minor",attrs:{"aria-label":"version"},on:{click:t.showFooter}},[t._v("\n\t\t\t\tV : "+t._s(t.version)+"\t\n\t\t")])])])},U=[],L={name:"cAppVersion",data:function(){return{version:"0.0"}},methods:{showFooter:function(){this.$root.$emit("footer-show")},getVersion:function(){this.version="0.0.97"}},mounted:function(){this.getVersion()}},N=L,V=(s("cd8f"),Object(u["a"])(N,H,U,!1,null,"1bdf559f",null)),A=V.exports,G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"timer",class:t.getSize},[t.hasHours?s("c-time-number",{attrs:{time_values:t.getHours},scopedSlots:t._u([{key:"default",fn:function(){return[t._v("\n\t\t\tH\n\t\t")]},proxy:!0}],null,!1,3995797462)}):t._e(),t.hasMins?s("c-time-number",{style:t.getMargin,attrs:{time_values:t.getMins},scopedSlots:t._u([{key:"default",fn:function(){return[t._v("\n\t\t\tM\n\t\t")]},proxy:!0}],null,!1,864732147)}):t._e(),t.hasSeconds?s("c-time-number",{attrs:{time_values:t.getSeconds},scopedSlots:t._u([{key:"default",fn:function(){return[t._v("\n\t\t\tS\n\t\t")]},proxy:!0}],null,!1,2147731245)}):t._e()],1)},z=[],J=(s("6b54"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"number",class:{"anim-tick-down":t.animated},on:{animationend:t.anim_off}},[s("p",{staticClass:"value header-number father text-bold colour-minor"},[t._v("\n\n\t\t\t"+t._s(t.time_values[1])+"\n\n\t\t")]),s("p",{staticClass:"value header-number main text-bold colour-fill-bg"},[t._v("\n\n\t\t\t"+t._s(t.time_change)+"\n\n\t\t")]),s("p",{staticClass:"value header-number son text-bold colour-minor"},[t._v("\n\n\t\t\t"+t._s(t.time_values[2])+"\n\n\t\t")]),s("p",{staticClass:"value header-number grandson colour-minor"},[t._v("\n\n\t\t\t"+t._s(t.time_values[3])+"\n\n\t\t")]),s("p",{staticClass:"time-stamp colour-fill-bg"},[t._t("default")],2)])}),q=[],I={name:"cTimeNumber",data:function(){return{animated:!1}},props:{time_values:Array},computed:{time_change:function(){return this.animated=!0,this.time_values[0]}},methods:{anim_off:function(){this.animated=!1}}},R=I,K=(s("1f8f"),Object(u["a"])(R,J,q,!1,null,"cb6e8b86",null)),Q=K.exports,X={name:"cTimeNumbers",data:function(){return{lastUpdate:0,time:{hrs:["00","00","00","00"],mns:["00","00","00","00"],secs:["00","00","00","00"]}}},props:{start:Number,input:Number},computed:{getSize:function(){return this.hasHours?"number-is-large":this.hasMins?"number-is-med":"number-is-small"},getMargin:function(){return this.hasHours?{margin:"0 2rem"}:this.hasMins?{"margin-right":"2rem"}:{margin:"0"}},hasHours:function(){return this.start>3540},hasMins:function(){return this.start>59},hasSeconds:function(){return this.start>0},getHours:function(){var t=Math.floor((this.start-this.input)/3600%60),e=this.pretty_print(t);return this.time.hrs[0]===e?this.time.hrs:(this.$set(this.time.hrs,0,e),this.$set(this.time.hrs,1,this.pretty_print(this.check_min(t-1))),this.$set(this.time.hrs,2,this.pretty_print(this.check_min(t+1))),this.$set(this.time.hrs,3,this.pretty_print(this.check_min(t+2))),this.time.hrs)},getMins:function(){var t=Math.floor((this.start-this.input)/60%60),e=this.pretty_print(t);return this.time.mns[0]===e?this.time.mns:(this.$set(this.time.mns,0,e),this.$set(this.time.mns,1,this.pretty_print(this.check_min(t-1))),this.$set(this.time.mns,2,this.pretty_print(this.check_min(t+1))),this.$set(this.time.mns,3,this.pretty_print(this.check_min(t+2))),this.time.mns)},getSeconds:function(){var t=Math.ceil((this.start-this.input)%60),e=this.pretty_print(t);return this.time.secs[0]===e?this.time.secs:(this.$set(this.time.secs,0,e),this.$set(this.time.secs,1,this.pretty_print(this.check_min(t-1))),this.$set(this.time.secs,2,this.pretty_print(this.check_min(t+1))),this.$set(this.time.secs,3,this.pretty_print(this.check_min(t+2))),this.time.secs)}},methods:{check_min:function(t){return t<0&&(t=Math.abs(t+60)),t%=60,t},pretty_print:function(t){return t=this.check_min(t),Math.abs(t)<10?"0"+t:t.toString()}},components:{"c-time-number":Q}},Y=X,tt=(s("cd06"),Object(u["a"])(Y,G,z,!1,null,"1635cff3",null)),et=tt.exports,st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div")},it=[],nt={name:"cTimeControl",data:function(){return{mode:"",mode_past:""}},props:{play:Function,pause:Function,stop:Function,resume:Function,reset:Function,finished:Function},methods:{init:function(){this.mode_set("stop")},mode_set:function(t,e){switch(this.mode!==t&&(this.mode_past=this.mode,this.mode=t),t){case"play":this.$root.$emit("mode_display","play",this.mode_past),this.play(),this.options_off();break;case"pause":this.$root.$emit("mode_display","pause",this.mode_past),this.pause(),this.options_off();break;case"resume":this.$root.$emit("mode_display","resume",this.mode_past),this.resume(),this.options_off();break;case"stop":this.$root.$emit("mode_display","stop",this.mode_past),this.stop(),this.options_on();break;case"reset":this.$root.$emit("mode_display","reset",this.mode_past),this.reset(),this.options_on();break;case"finished":this.$root.$emit("mode_display","finished",this.mode_past),this.$root.$emit("sound-play");var s=this;setTimeout(function(){s.$root.$emit("mode_set","stop"),s.reset(),s.options_on()},e.time_to_hold);break;default:}},options_on:function(){var t=this;setTimeout(function(){t.$root.$emit("mode_display","options-on",this.mode_past)},500)},options_off:function(){this.$root.$emit("mode_display","options-off",this.mode_past)}},mounted:function(){this.$root.$on("mode_set",this.mode_set);var t=this;setTimeout(t.init,100)}},ot=nt,rt=Object(u["a"])(ot,st,it,!1,null,null,null),at=rt.exports,ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{appear:"",name:"slide-fade"}},[s("div",{staticClass:"controllers anim-3",class:{"is-near":t.display.near}},[s("div",{staticClass:"left"},[s("button",{staticClass:"button ic play",class:{show:t.display.play},attrs:{"aria-label":"start"},on:{click:t.play_control}},[s("svg",{staticClass:"colour-fill-bg",attrs:{height:"100%",viewBox:"0 0 224 224",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve","xmlns:serif":"http://www.serif.com/"}},[s("path",{attrs:{d:"M112.434,0.799c61.571,0 111.558,49.988 111.558,111.558c0,61.57 -49.987,111.558 -111.558,111.558c-61.57,0 -111.557,-49.988 -111.557,-111.558c0,-61.57 49.987,-111.558 111.557,-111.558Zm78.276,111.558l-124.936,81.046l0,-162.092l124.936,81.046Z"}})])]),s("button",{staticClass:"button ic pause",class:{show:t.display.pause},attrs:{"aria-label":"pause"},on:{click:t.pause_control}},[s("svg",{staticClass:"colour-fill-bg",attrs:{height:"100%",viewBox:"0 0 224 224",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve","xmlns:serif":"http://www.serif.com/"}},[s("path",{attrs:{d:"M112.434,0.499c61.571,0 111.558,49.987 111.558,111.558c0,61.57 -49.987,111.557 -111.558,111.557c-61.57,0 -111.557,-49.987 -111.557,-111.557c0,-61.571 49.987,-111.558 111.557,-111.558Zm-10,42.422l-40,0l0,137l40,0l0,-137Zm60,0l-40,0l0,137l40,0l0,-137Z"}})])]),s("button",{staticClass:"button ic resume",class:{show:t.display.resume},attrs:{"aria-label":"resume"},on:{click:t.resume_control}},[s("svg",{staticClass:"colour-fill-bg",attrs:{height:"100%",viewBox:"0 0 224 224",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve","xmlns:serif":"http://www.serif.com/"}},[s("path",{attrs:{d:"M112.434,0.799c61.571,0 111.558,49.988 111.558,111.558c0,61.57 -49.987,111.558 -111.558,111.558c-61.57,0 -111.557,-49.988 -111.557,-111.558c0,-61.57 49.987,-111.558 111.557,-111.558Zm78.276,111.558l-124.936,81.046l0,-162.092l124.936,81.046Z"}})])])]),s("div",{staticClass:"divider"}),s("div",{staticClass:"right"},[s("button",{staticClass:"button ic stop",class:{show:t.display.stop},attrs:{"aria-label":"stop"},on:{click:t.stop_control}},[s("svg",{staticClass:"colour-fill-bg",attrs:{height:"100%",viewBox:"0 0 224 224",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve","xmlns:serif":"http://www.serif.com/"}},[s("path",{attrs:{d:"M112.55,0.799c61.57,0 111.557,49.988 111.557,111.558c0,61.57 -49.987,111.558 -111.557,111.558c-61.571,0 -111.558,-49.988 -111.558,-111.558c0,-61.57 49.987,-111.558 111.558,-111.558Zm52.307,52.922l-104.615,0l0,116l104.615,0l0,-116Zm0,0l0,116l0,-116Z"}})])])])])])},lt=[],ut={name:"cTimeControlVisual",data:function(){return{display:{play:!1,pause:!1,stop:!1,resume:!1,near:!1}}},computed:{},methods:{mode_display:function(t){switch(t){case"play":this.set_controls([!1,!0,!0,!1,!1]);break;case"pause":this.set_controls([!1,!1,!0,!0,!1]);break;case"resume":this.set_controls([!1,!0,!0,!1,!1]);break;case"stop":this.set_controls([!0,!1,!1,!1,!1]);break;case"finished":this.set_controls([!0,!1,!1,!1,!0]);break;case"near":this.display.near=!0;break;default:}},set_controls:function(t){5===t.length&&(this.display.play=t[0],this.display.pause=t[1],this.display.stop=t[2],this.display.resume=t[3],this.display.near=t[4])},play_control:function(){this.$root.$emit("mode_set","play")},pause_control:function(){this.$root.$emit("mode_set","pause")},stop_control:function(){this.$root.$emit("mode_set","stop")},resume_control:function(){this.$root.$emit("mode_set","resume")}},mounted:function(){this.$root.$on("mode_display",this.mode_display)}},ht=ut,mt=(s("06bc"),Object(u["a"])(ht,ct,lt,!1,null,"fb326702",null)),pt=mt.exports,dt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{appear:"",name:"slide-fade"}},[s("div",{staticClass:"item-buttons anim-3"},[s("div",{staticClass:"inner anim-3",class:{"is-active":t.isactive}},[s("button",{staticClass:"button colour-bg-inv anim-3",class:{"colour-accent":t.iswork,border:!t.iswork},attrs:{"aria-label":"Set timer to work."},on:{click:t.button_work}},[s("p",{staticClass:"text colour-fill-bg"},[t._v("\n\t\t\t\t\twork\n\t\t\t\t")])]),s("div",{staticStyle:{width:"1rem",height:"1rem",display:"inline-block"}}),s("button",{staticClass:"button colour-bg-inv anim-3",class:{"colour-accent":t.isbreak,border:!t.isbreak},attrs:{"aria-label":"Set timer to short break."},on:{click:t.button_break}},[s("p",{staticClass:"text colour-fill-bg"},[t._v("\n\t\t\t\t\tbreak\n\t\t\t\t")])])])])])},ft=[],vt=null;function _t(){clearTimeout(vt)}function wt(t){t.current=bt(t.current,t.goal,t.attrs.change),t.toUpdate(t.current,t.goal);var e=Math.abs(t.goal-t.current);0!==e?vt=setTimeout(wt,t.attrs.timeMS,t):_t()}function bt(t,e,s){var i=e-t;return Math.abs(i)<=s?e:i>0?t+s:i<0?t-s:void 0}var gt={name:"cTimeOptions",data:function(){return{active:!1,mode:""}},props:{setTimer:Function,attrs:Object},computed:{isactive:function(){return this.active},isbreak:function(){return"break"===this.mode},iswork:function(){return"work"===this.mode}},methods:{mode_active:function(t){"options-on"===t&&(this.active=!0),"options-off"===t&&(this.active=!1)},button_break:function(){if("break"!==this.mode){_t();var t=bt(this.attrs.break,this.attrs.work,this.attrs.tickChange);this.setTimer(t),this.mode="break";var e={attrs:{timeMS:900,change:1},toUpdate:this.setTimer,goal:this.attrs.break,current:t};wt(e)}},button_work:function(){if("work"!==this.mode){_t();var t=bt(this.attrs.work,this.attrs.break,-this.attrs.tickChange);this.setTimer(t),this.mode="work";var e={attrs:{timeMS:900,change:1},toUpdate:this.setTimer,goal:this.attrs.work,current:t};wt(e)}}},mounted:function(){this.button_work(),this.$root.$on("mode_display",this.mode_active)}},yt=gt,kt=(s("d642"),Object(u["a"])(yt,dt,ft,!1,null,"3f4b1b47",null)),xt=kt.exports,$t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"anim-6 colour-bg-inv",class:{"is-active":t.display}},[s("div",{staticClass:"footer-content center-auto-h width-85 anim-6",class:{"is-active":t.inner}},[s("div",{staticClass:"title text-small text-center"},[s("p",{staticClass:"colour-fill-bg"},[t._v("Made with \n\n\t\t\t\t"),s("span",[s("svg",{staticClass:"icon",attrs:{viewBox:"0 0 907 828",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve","xmlns:serif":"http://www.serif.com/"}},[s("path",{attrs:{d:"M730.084,312.85c4.226,113.133 -40.828,236.381 -79.883,320.702c-29.137,63.033 -92.165,103.467 -161.607,103.675c-58.148,0.184 -129.832,0.398 -188.066,0.573c-68.886,0.206 -131.752,-39.215 -161.569,-101.314c-43.597,-90.793 -96.522,-224.663 -88.059,-325.713"}}),s("path",{attrs:{d:"M710,410.13l137.329,0c0,0 27.947,188.444 -226.001,233.406"}})])]),t._v(" \n\t\t\t\tby \n\n\t\t\t\t"),s("a",{staticClass:"colour-fill-accent",attrs:{target:"_blank",title:"Github",rel:"noopener",href:"https://github.com/k-flynn-webdev"}},[t._v(" k-flynn-webdev ")])])])])])},Ct=[],St={name:"cFooter",data:function(){return{display:!1,inner:!1,times:{in:50,mid:5e3,out:400}}},methods:{showFooter:function(){var t=this;t.display||(setTimeout(function(){t.display=!0},t.times.in),setTimeout(function(){t.inner=!0},t.times.out),setTimeout(function(){t.hideFooter()},t.times.mid))},hideFooter:function(){var t=this;t.display&&(setTimeout(function(){t.inner=!1},t.times.in),setTimeout(function(){t.display=!1},t.times.out))}},mounted:function(){this.$root.$on("footer-show",this.showFooter),this.$root.$on("footer-hide",this.hideFooter)},beforeDestroy:function(){this.$root.$off("footer-show"),this.$root.$off("footer-hide")}},Tt=St,Mt=(s("d5d0"),Object(u["a"])(Tt,$t,Ct,!1,null,"b1fc9e40",null)),Et=Mt.exports,jt=s("67bc"),Ot=s.n(jt);function Ft(t){var e=Wt(t.timeGoal);t.current=t.goal-e,e<=0&&t.toDone(t.current,t.goal),void 0!==t.toUpdate&&t.toUpdate(t.current,t.goal),t.current<t.goal&&(Pt=setTimeout(Ft,Zt.time_ms,t))}function Wt(t){var e=Date.now()/1e3,s=Math.floor(t-e);return s}var Pt=null,Zt={time_ms:995,time_change:1},Dt=null,Bt=!1;window.Worker&&(Bt=!0);var Ht=new Ot.a,Ut={data:function(){return{vars:{timer:{current:0,goal:0,timeGoal:"",toUpdate:Function,toDone:Function}}}},methods:{timer_setup:function(t,e,s,i){this.vars.timer.current=t,this.vars.timer.goal=e,this.vars.timer.toUpdate=s,this.vars.timer.toDone=i},timer_start:function(){if(this.vars.timer.current!==this.vars.timer.goal){this.timer_stop(),Ht.enable();var t=Date.now()/1e3;this.vars.timer.timeGoal=t+this.vars.timer.goal,Ft(this.vars.timer),Bt&&(Dt=new Worker("./web-worker.js"),Dt.postMessage([!0,this.vars.timer.goal]),Dt.onmessage=this.vars.timer.toDone)}},timer_resume:function(){if(this.vars.timer.current!==this.vars.timer.goal){Ht.enable();var t=this.vars.timer.goal-this.vars.timer.current,e=Date.now()/1e3;this.vars.timer.timeGoal=e+t,Ft(this.vars.timer),Bt&&(Dt=new Worker("./web-worker.js"),Dt.postMessage([!0,this.vars.timer.goal]),Dt.onmessage=this.vars.timer.toDone)}},timer_stop:function(){clearTimeout(Pt),Ht.disable(),Bt&&null!==Dt&&(Dt.postMessage([!1]),Dt.terminate(),Dt=null)},timer_clear:function(){this.vars.timer.current=0,this.vars.timer.goal=0,this.vars.timer.toUpdate=null,this.timer_stop()}}};s("23a4"),s("143e"),s("ff4e"),s("a093");var Lt,Nt={name:"home",mixins:[Ut],data:function(){return{app:{time:0,timer:0,finished:!1},attrs:{timers:{break:270,work:1440,tickChange:2},finish:{time_to_hold:1500}}}},methods:{setTimer:function(t){this.app.time=0,this.app.timer=t,this.app.finished=!1},getTimer:function(){return this.app.timer},setTime:function(t){this.app.time=t,this.app.time>=this.app.timer-1&&this.$root.$emit("mode_display","near"),this.app.time>=this.app.timer&&this.finished()},getTime:function(){return this.app.time},play:function(){this.reset(),this.timer_setup(0,this.getTimer(),this.setTime,this.finished),this.timer_start()},pause:function(){this.timer_stop()},resume:function(){this.timer_resume()},stop:function(){this.reset()},reset:function(){this.timer_clear(),this.setTime(0),this.app.finished=!1},finished:function(){var t=this;t.app.time=t.app.timer,setTimeout(function(){t.app.finished=!0,t.$root.$emit("mode_set","finished",t.attrs.finish)},900)}},mounted:function(){},beforeDestroy:function(){this.stop()},components:{"c-div-bg-reveal":m,"c-pwa-notify":b,"c-colour-switch":C,"c-sound":O,"c-sound-visual":B,"c-app-version":A,"c-time-numbers":et,"c-time-options":xt,"c-time-control":at,"c-time-control-visual":pt,"c-footer":Et}},Vt=Nt,At=(s("aa35"),Object(u["a"])(Vt,n,o,!1,null,"9a919fb0",null)),Gt=At.exports,zt=s("9483"),Jt=null,qt=new Event("SW_register"),It=new Event("SW_ready"),Rt=new Event("SW_update_found"),Kt=new Event("SW_update_ready"),Qt=new Event("SW_offline");function Xt(t){Jt=t,navigator.serviceWorker.addEventListener("controllerchange",function(t){Lt||(window.location.reload(),Lt=!0)})}function Yt(){return null!==Jt}Object(zt["a"])("".concat("/","service-worker.js"),{ready:function(t){Xt(t),Yt()&&document.dispatchEvent(It)},registered:function(t){Xt(t),Yt()&&document.dispatchEvent(qt)},cached:function(t){Xt(t)},updatefound:function(t){Xt(t),Yt()&&document.dispatchEvent(Rt)},updated:function(t){Xt(t),Yt()&&(document.dispatchEvent(Kt),document.addEventListener("SW_update_accept",function(){t.waiting.postMessage({action:"skipWaiting"})}))},offline:function(){Yt()&&document.dispatchEvent(Qt)},error:function(t){}}),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(Gt)}}).$mount("#app")},7668:function(t,e,s){},8945:function(t,e,s){"use strict";var i=s("a92a"),n=s.n(i);n.a},"8dfe":function(t,e,s){t.exports=s.p+"media/122682_649468-lq.80ba668b.mp3"},9244:function(t,e,s){},a093:function(t,e,s){},a92a:function(t,e,s){},aa35:function(t,e,s){"use strict";var i=s("fb24"),n=s.n(i);n.a},b326:function(t,e,s){},c6dd:function(t,e,s){},cc50:function(t,e,s){},cd06:function(t,e,s){"use strict";var i=s("f880"),n=s.n(i);n.a},cd8f:function(t,e,s){"use strict";var i=s("c6dd"),n=s.n(i);n.a},d5d0:function(t,e,s){"use strict";var i=s("4b07"),n=s.n(i);n.a},d642:function(t,e,s){"use strict";var i=s("cc50"),n=s.n(i);n.a},dbfc:function(t,e,s){"use strict";var i=s("14c9"),n=s.n(i);n.a},e440:function(t,e,s){"use strict";var i=s("b326"),n=s.n(i);n.a},f880:function(t,e,s){},fb24:function(t,e,s){},ff4e:function(t,e,s){}});
//# sourceMappingURL=app.1c774912.js.map