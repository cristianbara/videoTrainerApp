-function(){"use strict";var f=function(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==a.getAttribute("is")},g=function(a){if(f(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&f(a))return a;return null};var h=function(a,b,d){var c=function(e){a.removeEventListener(b,c);d(e)};a.addEventListener(b,c)};var k=function(a){a||(a="");return/^[\s\xa0]*$/.test(a)},l=function(){};goog.inherits(l,HTMLElement);
l.prototype.createdCallback=function(){for(var a;a=this.firstChild;)this.removeChild(a);this.c="gwd_imagebutton_"+(2147483648*Math.random()|0);this.g="ontouchstart"in window||0<window.navigator.MaxTouchPoints||0<window.navigator.msMaxTouchPoints;this.a=document.createElement("div");this.a.className=this.c;this.appendChild(this.a);this.f=null;this.l=this.b=!1;this.o=document.createElement("img","gwd-image");this.m=document.createElement("img","gwd-image");this.j=document.createElement("img","gwd-image");
this.h=document.createElement("div","gwd-page");this.i=this.s.bind(this);this.v=this.u.bind(this);this.style.display="inline-block";this.style.padding=0;this.a.style.backgroundRepeat="no-repeat";this.a.style.width="100%";this.a.style.height="100%"};
l.prototype.attachedCallback=function(){this.a.addEventListener("click",this.i,!1);if("function"==typeof this.gwdLoad&&"function"==typeof this.gwdIsLoaded&&!this.gwdIsLoaded()){var a=g(this),b=a&&"function"==typeof a.gwdIsLoaded;(!a||b&&a.gwdIsLoaded())&&this.gwdLoad()}};l.prototype.detachedCallback=function(){this.a.removeEventListener("click",this.i,!1)};
l.prototype.attributeChangedCallback=function(a){var b=this.getAttribute(a);switch(a){case "alignment":b?this.a.style.backgroundPosition=b:this.setAttribute(a,"center");break;case "scaling":b?this.a.style.backgroundSize=b:this.setAttribute(a,"auto");break;case "up-image":m(this,this.o,b);break;case "over-image":this.g||m(this,this.m,b);break;case "down-image":m(this,this.j,b);break;case "disabled":this.b=this.hasAttribute("disabled")&&"false"!=this.getAttribute("disabled");n(this);this.a.style.cursor=
this.b?"default":"pointer";break;case "bgcolor":this.a.style.backgroundColor=k(b)?"":b}};var m=function(a,b,d){k(d)?n(a):(b.setAttribute("source",d),p(a))};l.prototype.gwdIsLoaded=function(){return this.l};l.prototype.gwdLoad=function(){for(var a=["bgcolor","alignment","scaling","disabled"],b=0;b<a.length;b++)this.attributeChangedCallback(a[b],null,null);p(this)};
var p=function(a){var b=document.createElement("div","gwd-page");b.style.display="none";b.appendChild(a.o);a.g||b.appendChild(a.m);b.appendChild(a.j);a.h=b;h(b,"attached",b.gwdLoad.bind(b));h(b,"pageload",a.v);a.a.appendChild(a.h)};l.prototype.u=function(a){if(a){if(a.target===this.h){this.l=!0;n(this);var b;b=document.createEvent("Event");b.initEvent("ready",!0,!0);this.dispatchEvent(b)}(b=a.target.parentNode||a.target.parentElement)&&b.removeChild(a.target)}};l.prototype.s=function(a){this.b&&a.stopPropagation()};
var n=function(a){if(a.f){var b=a.f;(b=b.ownerNode||b.owningElement||b)&&b.parentNode&&b.parentNode.removeChild(b);a.f=null}var b=a.getAttribute("up-image"),d=a.getAttribute("over-image"),c=a.getAttribute("down-image"),e="";k(b)||(e+="."+a.c+' { background-image: url("'+b+'"); }');k(d)||a.b||a.g||(e+="."+a.c+':hover { background-image: url("'+d+'"); }');k(c)||a.b||(e+="."+a.c+':active { background-image: url("'+c+'"); }');b=e;c=null;c=document;-1!=navigator.userAgent.indexOf("MSIE")&&c.createStyleSheet?
(c=c.createStyleSheet(),c.innerHTML=b):(d=c.getElementsByTagName("head")[0],d||(e=c.getElementsByTagName("body")[0],d=c.createElement("head"),e.parentNode.insertBefore(d,e)),c=c.createElement("style"),c.innerHTML=b,d.appendChild(c));a.f=c};l.prototype.toggleEnable=function(){(this.b=!this.b)?this.setAttribute("disabled","true"):this.removeAttribute("disabled")};
l.prototype.setImages=function(a,b,d){this.setAttribute("up-image",a);this.g||this.setAttribute("over-image",b||"");this.setAttribute("down-image",d||"")};document.registerElement("gwd-imagebutton",{prototype:l.prototype});}()