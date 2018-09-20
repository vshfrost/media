var Markup=webpackJsonpMarkup([1],{"./src/js/app/CopyCode.js":function(e,s,t){"use strict";var a=t("./node_modules/babel-runtime/helpers/classCallCheck.js"),n=t.n(a),i=t("./node_modules/delegated-events/dist/index.esm.js"),o=t("./node_modules/clipboard/dist/clipboard.js"),r=t.n(o),l=function e(){n()(this,e),document.addEventListener("DOMContentLoaded",function(){var e=new r.a("[data-copy-to-clipboard]",{text:function(e){return e.getAttribute("data-copy-to-clipboard")}});e.on("success",function(e){var s=e.trigger;if(e.clearSelection(),s.matches(".copy-icon")&&s.classList.add("copy-icon_success"),s.hasAttribute("data-copy-to-clipboard-success")){for(var t=s.getAttribute("data-copy-to-clipboard-success"),a=s;!a.matches(".form__item");)a=a.parentElement;a.querySelector(".form__control").value=t}}),e.on("error",function(e){}),Object(i.on)("click","[data-copy-to-clipboard]",function(e){e.preventDefault()})})};s.a=l},"./src/js/app/FormControls.js":function(e,s,t){"use strict";var a=t("./node_modules/babel-runtime/helpers/classCallCheck.js"),n=t.n(a),i=t("./node_modules/inputmask/index.js"),o=t.n(i),r=function e(){n()(this,e),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".mask").forEach(function(e){switch(!0){case e.matches(".mask_tel"):o()({mask:"+7 999999 999 999",placeholder:"_",showMaskOnHover:!1,showMaskOnFocus:!0}).mask(e)}})})};s.a=r},"./src/js/app/Game.js":function(e,s,t){"use strict";var a=t("./node_modules/babel-runtime/helpers/classCallCheck.js"),n=t.n(a),i=t("./node_modules/babel-runtime/helpers/createClass.js"),o=t.n(i),r=t("./node_modules/delegated-events/dist/index.esm.js"),l=function(){function e(){var s=this;n()(this,e),this.gameClass="ninja-top-block__game",document.addEventListener("DOMContentLoaded",function(){Object(r.on)("click","."+s.gameClass+"-start",s.openGame.bind(s)),Object(r.on)("click","."+s.gameClass+"-stop",s.closeGame.bind(s)),s.resize(),window.addEventListener("resize",function(){s.resize()})})}return o()(e,[{key:"resize",value:function(){var e=document.querySelector("."+this.gameClass);if(e){var s=e.offsetWidth/e.offsetHeight,t=e.querySelector("iframe"),a=t.getAttribute("width")/t.getAttribute("height");s>=a?(e.classList.remove(this.gameClass+"_horizontal"),e.classList.add(this.gameClass+"_vertical"),t.width=e.offsetHeight*a,t.height=e.offsetHeight):(e.classList.remove(this.gameClass+"_vertical"),e.classList.add(this.gameClass+"_horizontal"),t.width=e.offsetWidth,t.height=e.offsetWidth/a)}}},{key:"openGame",value:function(e){e&&e.preventDefault();var s=document.querySelector("."+this.gameClass);if(s){var t=s.querySelector("iframe");s.classList.add(this.gameClass+"_active"),t.src=t.getAttribute("data-src")}}},{key:"closeGame",value:function(e){e&&e.preventDefault();var s=document.querySelector("."+this.gameClass);if(s){var t=s.querySelector("iframe");s.classList.remove(this.gameClass+"_active"),t.src=""}}}]),e}();s.a=l},"./src/js/app/Main.js":function(e,s,t){"use strict";var a=t("./node_modules/babel-runtime/helpers/classCallCheck.js"),n=t.n(a),i=t("./node_modules/babel-runtime/helpers/createClass.js"),o=t.n(i),r=t("./node_modules/delegated-events/dist/index.esm.js"),l=function(){function e(){var s=this;n()(this,e),document.addEventListener("DOMContentLoaded",function(){Object(r.on)("click",".header__button",s.menuToggle),Object(r.on)("click",".square__btn",s.squareToggle),Object(r.on)("click","[data-dialog]",s.openDialog),Object(r.on)("click","[data-dialog-dismiss]",s.closeDialog)})}return o()(e,[{key:"menuToggle",value:function(e){e.preventDefault(),document.querySelector(".header").classList.toggle("header_isOpened")}},{key:"squareToggle",value:function(e){e.preventDefault();for(var s=e.target;!s.matches(".square");)s=s.parentElement;s.classList.toggle("square_active")}},{key:"openDialog",value:function(e){var s=document.querySelector(e.target.getAttribute("data-dialog"));s&&(document.querySelectorAll(".dialog").forEach(function(e){return e.classList.remove("dialog_isOpen")}),s.classList.add("dialog_isOpen"))}},{key:"closeDialog",value:function(e){for(var s=e.target;!s.matches(".dialog");)s=s.parentElement;s.classList.remove("dialog_isOpen")}}]),e}();s.a=l},"./src/js/app/Parallax.js":function(e,s,t){"use strict";var a=t("./node_modules/babel-runtime/core-js/map.js"),n=t.n(a),i=t("./node_modules/babel-runtime/helpers/classCallCheck.js"),o=t.n(i),r=t("./node_modules/babel-runtime/helpers/createClass.js"),l=t.n(r),c=t("./node_modules/parallax-js/dist/parallax.js"),d=t.n(c),u=function(){function e(){var s=this;o()(this,e),this.scenes=new n.a,this.sceneClass="scene",document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll("."+s.sceneClass);e&&e.forEach(function(e){s.scenes.set(e,new d.a(e,{selector:".scene__layer",relativeInput:!0,hoverOnly:!0}))})})}return l()(e,[{key:"get",value:function(e){this.scenes.get(e)}}]),e}();s.a=u},"./src/js/app/Sliders.js":function(e,s,t){"use strict";var a=t("./node_modules/babel-runtime/core-js/map.js"),n=t.n(a),i=t("./node_modules/babel-runtime/helpers/classCallCheck.js"),o=t.n(i),r=t("./node_modules/babel-runtime/helpers/createClass.js"),l=t.n(r),c=t("./node_modules/@glidejs/glide/dist/glide.esm.js"),d=function(){function e(){var s=this;o()(this,e),this.sliders=new n.a,this.gC="slider",this.gES="__",this.gMS="_",this.classes={direction:{ltr:""+this.gC+this.gMS+"ltr",rtl:""+this.gC+this.gMS+"rtl"},slider:""+this.gC+this.gMS+"slider",slide:""+this.gC+this.gMS+"slide",carousel:""+this.gC+this.gMS+"carousel",swipeable:""+this.gC+this.gMS+"swipeable",dragging:""+this.gC+this.gMS+"dragging",cloneSlide:""+this.gC+this.gES+"slide"+this.gMS+"clone",activeNav:""+this.gC+this.gES+"bullet"+this.gMS+"active",activeSlide:""+this.gC+this.gES+"slide"+this.gMS+"active",disabledArrow:""+this.gC+this.gES+"arrow"+this.gMS+"disabled"},document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("."+s.gC).forEach(function(e){if(e.querySelectorAll("."+s.classes.slide)){var t=new c.a(e,{type:"carousel",gap:160,startAt:0,perView:1,keyboard:!1,classes:s.classes});t.mount(),s.sliders.set(e,t)}})})}return l()(e,[{key:"get",value:function(e){return this.sliders.get(e)}}]),e}();s.a=d},"./src/js/app/application.js":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),t.d(s,"sliders",function(){return d}),t.d(s,"parallax",function(){return u}),t.d(s,"game",function(){return p});var a=t("./src/js/app/polyfills.js"),n=(t.n(a),t("./src/js/app/Main.js")),i=t("./src/js/app/Sliders.js"),o=t("./src/js/app/Parallax.js"),r=t("./src/js/app/FormControls.js"),l=t("./src/js/app/CopyCode.js"),c=t("./src/js/app/Game.js");new n.a,new r.a,new l.a;var d=new i.a,u=new o.a,p=new c.a;window.namespaces=window.namespaces||{},window.namespaces["app.markup"]={sliders:d,parallax:u,game:p}},"./src/js/app/polyfills.js":function(e,s){},"./src/styles/application.scss":function(e,s){},"./src/styles/vendors.css":function(e,s){},"./src/styles/vendors.scss":function(e,s){},1:function(e,s,t){t("./src/styles/vendors.css"),t("./src/styles/vendors.scss"),t("./src/styles/application.scss"),e.exports=t("./src/js/app/application.js")}},[1]);