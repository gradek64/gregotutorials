
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_menu-tab}","click",function(sym,e){SlideChanger.swapSlides('menuContent','stage',true);var currentButtonTrack=sym.$('menu-tab');currentButtonTrack.data('title','main manu tab');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){(function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(jQuery)})(function(e){"use strict";function o(e){return"string"==typeof e?parseInt(e,10):~~e}var t={wheelSpeed:1,wheelPropagation:!1,minScrollbarLength:null,maxScrollbarLength:null,useBothWheelAxes:!1,useKeyboard:!0,suppressScrollX:!1,suppressScrollY:!1,scrollXMarginOffset:0,scrollYMarginOffset:0,includePadding:!1},n=function(){var e=0;return function(){var o=e;return e+=1,".perfect-scrollbar-"+o}}();e.fn.perfectScrollbar=function(r,l){return this.each(function(){function i(e,t){var n=e+t,r=P-k;C=0>n?0:n>r?r:n;var l=o(C*(x-P)/(P-k));L.scrollTop(l)}function a(e,t){var n=e+t,r=S-E;X=0>n?0:n>r?r:n;var l=o(X*(D-S)/(S-E));L.scrollLeft(l)}function s(e){return y.minScrollbarLength&&(e=Math.max(e,y.minScrollbarLength)),y.maxScrollbarLength&&(e=Math.min(e,y.maxScrollbarLength)),e}function c(){var e={width:S,display:M?"inherit":"none"};e.left=W?L.scrollLeft()+S-D:L.scrollLeft(),B?e.bottom=q-L.scrollTop():e.top=R+L.scrollTop(),K.css(e);var o={top:L.scrollTop(),height:P,display:Y?"inherit":"none"};z?o.right=W?D-L.scrollLeft()-Q-U.outerWidth():Q-L.scrollLeft():o.left=W?L.scrollLeft()+2*S-D-F-U.outerWidth():F+L.scrollLeft(),H.css(o),O.css({left:X,width:E-A}),U.css({top:C,height:k-G})}function d(){K.hide(),H.hide(),S=y.includePadding?L.innerWidth():L.width(),P=y.includePadding?L.innerHeight():L.height(),D=L.prop("scrollWidth"),x=L.prop("scrollHeight"),!y.suppressScrollX&&D>S+y.scrollXMarginOffset?(M=!0,E=s(o(S*S/D)),X=o(L.scrollLeft()*(S-E)/(D-S))):(M=!1,E=0,X=0,L.scrollLeft(0)),!y.suppressScrollY&&x>P+y.scrollYMarginOffset?(Y=!0,k=s(o(P*P/x)),C=o(L.scrollTop()*(P-k)/(x-P))):(Y=!1,k=0,C=0,L.scrollTop(0)),X>=S-E&&(X=S-E),C>=P-k&&(C=P-k),c(),M?L.addClass("ps-active-x"):L.removeClass("ps-active-x"),Y?L.addClass("ps-active-y"):L.removeClass("ps-active-y"),y.suppressScrollX||K.show(),y.suppressScrollY||H.show()}function p(){var o,t;O.bind("mousedown"+j,function(e){t=e.pageX,o=O.position().left,K.addClass("in-scrolling"),e.stopPropagation(),e.preventDefault()}),e(I).bind("mousemove"+j,function(e){K.hasClass("in-scrolling")&&(a(o,e.pageX-t),d(),e.stopPropagation(),e.preventDefault())}),e(I).bind("mouseup"+j,function(){K.hasClass("in-scrolling")&&K.removeClass("in-scrolling")}),o=t=null}function u(){var o,t;U.bind("mousedown"+j,function(e){t=e.pageY,o=U.position().top,H.addClass("in-scrolling"),e.stopPropagation(),e.preventDefault()}),e(I).bind("mousemove"+j,function(e){H.hasClass("in-scrolling")&&(i(o,e.pageY-t),d(),e.stopPropagation(),e.preventDefault())}),e(I).bind("mouseup"+j,function(){H.hasClass("in-scrolling")&&H.removeClass("in-scrolling")}),o=t=null}function f(e,o){var t=L.scrollTop();if(0===e){if(!Y)return!1;if(0===t&&o>0||t>=x-P&&0>o)return!y.wheelPropagation}var n=L.scrollLeft();if(0===o){if(!M)return!1;if(0===n&&0>e||n>=D-S&&e>0)return!y.wheelPropagation}return!0}function v(){function e(e){var o=e.originalEvent.deltaX,t=-1*e.originalEvent.deltaY;return(o===void 0||t===void 0)&&(o=-1*e.originalEvent.wheelDeltaX/6,t=e.originalEvent.wheelDeltaY/6),e.originalEvent.deltaMode&&1===e.originalEvent.deltaMode&&(o*=10,t*=10),o!==o&&t!==t&&(o=0,t=e.originalEvent.wheelDelta),[o,t]}function o(o){var n=e(o),r=n[0],l=n[1];t=!1,y.useBothWheelAxes?Y&&!M?(l?L.scrollTop(L.scrollTop()-l*y.wheelSpeed):L.scrollTop(L.scrollTop()+r*y.wheelSpeed),t=!0):M&&!Y&&(r?L.scrollLeft(L.scrollLeft()+r*y.wheelSpeed):L.scrollLeft(L.scrollLeft()-l*y.wheelSpeed),t=!0):(L.scrollTop(L.scrollTop()-l*y.wheelSpeed),L.scrollLeft(L.scrollLeft()+r*y.wheelSpeed)),d(),t=t||f(r,l),t&&(o.stopPropagation(),o.preventDefault())}var t=!1;window.onwheel!==void 0?L.bind("wheel"+j,o):window.onmousewheel!==void 0&&L.bind("mousewheel"+j,o)}function h(){var o=!1;L.bind("mouseenter"+j,function(){o=!0}),L.bind("mouseleave"+j,function(){o=!1});var t=!1;e(I).bind("keydown"+j,function(n){if((!n.isDefaultPrevented||!n.isDefaultPrevented())&&o){for(var r=document.activeElement?document.activeElement:I.activeElement;r.shadowRoot;)r=r.shadowRoot.activeElement;if(!e(r).is(":input,[contenteditable]")){var l=0,i=0;switch(n.which){case 37:l=-30;break;case 38:i=30;break;case 39:l=30;break;case 40:i=-30;break;case 33:i=90;break;case 32:case 34:i=-90;break;case 35:i=n.ctrlKey?-x:-P;break;case 36:i=n.ctrlKey?L.scrollTop():P;break;default:return}L.scrollTop(L.scrollTop()-i),L.scrollLeft(L.scrollLeft()+l),t=f(l,i),t&&n.preventDefault()}}})}function b(){function e(e){e.stopPropagation()}U.bind("click"+j,e),H.bind("click"+j,function(e){var t=o(k/2),n=e.pageY-H.offset().top-t,r=P-k,l=n/r;0>l?l=0:l>1&&(l=1),L.scrollTop((x-P)*l)}),O.bind("click"+j,e),K.bind("click"+j,function(e){var t=o(E/2),n=e.pageX-K.offset().left-t,r=S-E,l=n/r;0>l?l=0:l>1&&(l=1),L.scrollLeft((D-S)*l)})}function g(o,t){function n(e,o){L.scrollTop(L.scrollTop()-o),L.scrollLeft(L.scrollLeft()-e),d()}function r(){b=!0}function l(){b=!1}function i(e){return e.originalEvent.targetTouches?e.originalEvent.targetTouches[0]:e.originalEvent}function a(e){var o=e.originalEvent;return o.targetTouches&&1===o.targetTouches.length?!0:o.pointerType&&"mouse"!==o.pointerType?!0:!1}function s(e){if(a(e)){g=!0;var o=i(e);u.pageX=o.pageX,u.pageY=o.pageY,f=(new Date).getTime(),null!==h&&clearInterval(h),e.stopPropagation(),e.preventDefault()}}function c(e){if(!b&&g&&a(e)){var o=i(e),t={pageX:o.pageX,pageY:o.pageY},r=t.pageX-u.pageX,l=t.pageY-u.pageY;n(r,l),u=t;var s=(new Date).getTime(),c=s-f;c>0&&(v.x=r/c,v.y=l/c,f=s),e.stopPropagation(),e.preventDefault()}}function p(){!b&&g&&(g=!1,clearInterval(h),h=setInterval(function(){return.01>Math.abs(v.x)&&.01>Math.abs(v.y)?(clearInterval(h),void 0):(n(30*v.x,30*v.y),v.x*=.8,v.y*=.8,void 0)},10))}var u={},f=0,v={},h=null,b=!1,g=!1;o&&(e(window).bind("touchstart"+j,r),e(window).bind("touchend"+j,l),L.bind("touchstart"+j,s),L.bind("touchmove"+j,c),L.bind("touchend"+j,p)),t&&(window.PointerEvent?(e(window).bind("pointerdown"+j,r),e(window).bind("pointerup"+j,l),L.bind("pointerdown"+j,s),L.bind("pointermove"+j,c),L.bind("pointerup"+j,p)):window.MSPointerEvent&&(e(window).bind("MSPointerDown"+j,r),e(window).bind("MSPointerUp"+j,l),L.bind("MSPointerDown"+j,s),L.bind("MSPointerMove"+j,c),L.bind("MSPointerUp"+j,p)))}function w(){L.bind("scroll"+j,function(){d()})}function m(){L.unbind(j),e(window).unbind(j),e(I).unbind(j),L.data("perfect-scrollbar",null),L.data("perfect-scrollbar-update",null),L.data("perfect-scrollbar-destroy",null),O.remove(),U.remove(),K.remove(),H.remove(),K=H=O=U=M=Y=S=P=D=x=E=X=q=B=R=k=C=Q=z=F=W=j=null}function T(){d(),w(),p(),u(),b(),v(),(J||N)&&g(J,N),y.useKeyboard&&h(),L.data("perfect-scrollbar",L),L.data("perfect-scrollbar-update",d),L.data("perfect-scrollbar-destroy",m)}var y=e.extend(!0,{},t),L=e(this);if("object"==typeof r?e.extend(!0,y,r):l=r,"update"===l)return L.data("perfect-scrollbar-update")&&L.data("perfect-scrollbar-update")(),L;if("destroy"===l)return L.data("perfect-scrollbar-destroy")&&L.data("perfect-scrollbar-destroy")(),L;if(L.data("perfect-scrollbar"))return L.data("perfect-scrollbar");L.addClass("ps-container");var S,P,D,x,M,E,X,Y,k,C,W="rtl"===L.css("direction"),j=n(),I=this.ownerDocument||document,K=e("<div class='ps-scrollbar-x-rail'>").appendTo(L),O=e("<div class='ps-scrollbar-x'>").appendTo(K),q=o(K.css("bottom")),B=q===q,R=B?null:o(K.css("top")),A=o(K.css("borderLeftWidth"))+o(K.css("borderRightWidth")),H=e("<div class='ps-scrollbar-y-rail'>").appendTo(L),U=e("<div class='ps-scrollbar-y'>").appendTo(H),Q=o(H.css("right")),z=Q===Q,F=z?null:o(H.css("left")),G=o(H.css("borderTopWidth"))+o(H.css("borderBottomWidth")),J="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,N=null!==window.navigator.msMaxTouchPoints;return T(),L})}});var stage=$('#Stage');SlideChanger={swapSlides:function(slideClass,parentClass,menuTab){$("."+slideClass).css({display:'none'});$('.side_menu').css('left','105%');if(parentClass=="stage"){if(!menuTab){$('.laserEffect').css('zIndex','10');$('.laserEffect').animate({left:"110%",},300,function(){$(this).css('left','-10%');});}
$("."+slideClass).appendTo(stage).fadeIn(300,function(){$('.side_menu').animate({left:"57%",},300,function(){});});if(slideClass=='trailer'){if($('.bgVideo').has("video").length){videoSource[0].play(0);}}else{if($('.bgVideo').has("video").length){videoSource[0].pause();}}
if(slideClass=='takenArticle'){$('.takenArticle .taken_article_cont').perfectScrollbar('update');}}}}
var videoSource;edgeStartAnimation={playBG_video:function(){videoSource=$('<video id="hero-bg-video" style="width:110%;height:auto;top:-10%;left:-10%;overflow:hidden" class="hero-bg-video" muted="muted" loop="" preload="" > <source src="http://files.adspdbl.com/destiny_dynamic_006/assets/DTG_TK_cinemagraph_1_720_sized-640.webm" type="video/webm"> <source src="http://files.adspdbl.com/destiny_dynamic_006/assets/DTG_TK_cinemagraph_1_720_sized-640.mp4" type="video/mp4"> </video>');$('.bgVideo').append(videoSource);},closeVideoExternal:function(){MyVideo.play('out');}}
MyVideo={play:function(state){if(state=='in'){if($('.bgVideo').has("video").length){videoSource[0].pause();}
$('.videoContainer').hide();sym.getSymbol("trailer").getSymbol("animate_vid_container").play('playVideo');$('.videoContainer').fadeIn('slow');}
if(state=='out'){if($('.bgVideo').has("video").length){videoSource[0].play(0);}
sym.getSymbol("trailer").getSymbol("animate_vid_container").playReverse();$('.videoContainer').fadeOut('slow');}}};$('#Stage div').css('overflowX','hidden');$(document).ready(function(){$('.takenArticle .taken_article_cont').perfectScrollbar();$('.takenArticle .taken_article_cont').perfectScrollbar('update');});$(window).resize(function(){$('.takenArticle .taken_article_cont').perfectScrollbar('update');});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pre-order}","click",function(sym,e){slide=sym.$("pre-order");slide.data('title','pre order main link');slide.data('link',PreOrder);slide.addClass('campaign-link');edgeClick(e,slide,'click');SlideChanger.swapSlides('pre_order','stage');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_main-menu}","click",function(sym,e){slide=sym.$("main-menu");slide.data('title','top bar main menu');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_guardians}","click",function(sym,e){slide=$(".guardians_slide");slide.data('title','guradians slide');slide.data('link',PreOrder);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'side_menu'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_home}","click",function(sym,e){SlideChanger.swapSlides('home','stage');$(".menuContent").fadeOut('slow');var currentButtonTrack=sym.$('home');currentButtonTrack.data('title','home tab');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_close_menuCopy}","click",function(sym,e){$(".menuContent").fadeOut();var currentButtonTrack=sym.$('close_menuCopy');currentButtonTrack.data('title','close side Menu bttn');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_guardians_bttn}","click",function(sym,e){SlideChanger.swapSlides('guardians_slide','stage');$(".menuContent").fadeOut('slow');var currentButtonTrack=sym.$('guardians_bttn');currentButtonTrack.data('title','guardians  tab');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_trailer_bttn}","click",function(sym,e){SlideChanger.swapSlides('trailer','stage');$(".menuContent").fadeOut('slow');var currentButtonTrack=sym.$('trailer_bttn');currentButtonTrack.data('title','trailer tab');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pre_order_bttn}","click",function(sym,e){SlideChanger.swapSlides('pre_order','stage');$(".menuContent").fadeOut('slow');var currentButtonTrack=sym.$('pre_order_bttn');currentButtonTrack.data('title','pre order tab');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
})("side_menu");
//Edge symbol end:'side_menu'

//=========================================================

//Edge symbol: 'pop_up_menu'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_bg}","click",function(sym,e){$(".menuContent").fadeOut();});
//Edge binding end
})("pop_up_menu");
//Edge symbol end:'pop_up_menu'

//=========================================================

//Edge symbol: 'startSlide'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_traveler_article}","click",function(sym,e){SlideChanger.swapSlides('takenArticle','stage');var currentButtonTrack=sym.$('traveler_article');currentButtonTrack.data('title','traveler article');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_game_modes_article}","click",function(sym,e){SlideChanger.swapSlides('masive_hive_art','stage');var currentButtonTrack=sym.$('game_modes_article');currentButtonTrack.data('title','masive hive article');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_guardians_article}","click",function(sym,e){SlideChanger.swapSlides('powerful_abilities','stage');var currentButtonTrack=sym.$('guardians_article');currentButtonTrack.data('title','powerful abilities article');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
})("startSlide");
//Edge symbol end:'startSlide'

//=========================================================

//Edge symbol: 'the_taken_article'
(function(symbolName){})("the_taken_article");
//Edge symbol end:'the_taken_article'

//=========================================================

//Edge symbol: 'article_container'
(function(symbolName){})("article_container");
//Edge symbol end:'article_container'

//=========================================================

//Edge symbol: 'guardians'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_gurdian_1}","mouseenter",function(sym,e){var thisOne=$('.guardian1');var discription=thisOne.find('.guardian_info');discription.animate({top:'32%'},300);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_gurdian_1}","mouseleave",function(sym,e){var thisOne=$('.guardian1');var discription=thisOne.find('.guardian_info');discription.animate({top:'83%'},300);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_guardian_22}","mouseenter",function(sym,e){var thisOne=$('.guardian2');var discription=thisOne.find('.guardian_info');discription.animate({top:'32%'},300);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_guardian_22}","mouseleave",function(sym,e){var thisOne=$('.guardian2');var discription=thisOne.find('.guardian_info');discription.animate({top:'83%'},300);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_guardian_32}","mouseleave",function(sym,e){var thisOne=$('.guardian3');var discription=thisOne.find('.guardian_info');discription.animate({top:'83%'},300);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_guardian_32}","mouseenter",function(sym,e){var thisOne=$('.guardian3');var discription=thisOne.find('.guardian_info');discription.animate({top:'32%'},300);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_gurdian_1}","click",function(sym,e){slide=$(".guardian1");slide.data('title',' guardian 1 link');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_guardian_22}","click",function(sym,e){slide=$(".guardian2");slide.data('title',' guardian 2 link');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_guardian_32}","click",function(sym,e){slide=$(".guardian3");slide.data('title',' guardian 3 link');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("guardians");
//Edge symbol end:'guardians'

//=========================================================

//Edge symbol: 'gurdian_1'
(function(symbolName){})("gurdian_1");
//Edge symbol end:'gurdian_1'

//=========================================================

//Edge symbol: 'guardian_1_desc'
(function(symbolName){})("guardian_1_desc");
//Edge symbol end:'guardian_1_desc'

//=========================================================

//Edge symbol: 'guardian_1_desc_1'
(function(symbolName){})("guardian_2_desc");
//Edge symbol end:'guardian_2_desc'

//=========================================================

//Edge symbol: 'guardian_2'
(function(symbolName){})("guardian_2");
//Edge symbol end:'guardian_2'

//=========================================================

//Edge symbol: 'trailer'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_playVideoBttn}","click",function(sym,e){MyVideo.play('in');edgeStartAnimation.closeVideoExternalVar=true;});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_playDate}","click",function(sym,e){var slide=sym.$("playDate");slide.data('title','pre order video slide');slide.data('link',PreOrder);slide.addClass('campaign-link');edgeClick(e,slide,'click');SlideChanger.swapSlides('pre_order','stage');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_animate_vid_container}","click",function(sym,e){slide=$(".videoContainer");slide.data('title','video container click');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_video-slide}","click",function(sym,e){var slide=sym.$("video-slide");slide.data('title','video slide link');slide.data('link',PreOrder);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("trailer");
//Edge symbol end:'trailer'

//=========================================================

//Edge symbol: 'pre_order'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_pre-order-link}","click",function(sym,e){slide=sym.$("pre-order-link");slide.data('title','pre order link');slide.data('link',PreOrder);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("pre_order");
//Edge symbol end:'pre_order'

//=========================================================

//Edge symbol: 'more_ways_article'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_learn_more}","click",function(sym,e){slide=sym.$("learn_more");slide.data('title','learn more masive Hive');slide.data('link',masive_Hive_link);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("masive_hive");
//Edge symbol end:'masive_hive'

//=========================================================

//Edge symbol: 'powerful_abilities_art'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_learn_more2}","click",function(sym,e){slide=sym.$("learn_more2");slide.data('title','learn more powerful new abilities');slide.data('link',powerfull_abilities_link);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("powerful_abilities_art");
//Edge symbol end:'powerful_abilities_art'

//=========================================================

//Edge symbol: 'guardian_2_desc_1'
(function(symbolName){})("guardian_3_desc");
//Edge symbol end:'guardian_3_desc'

//=========================================================

//Edge symbol: 'guardian_3'
(function(symbolName){})("guardian_3");
//Edge symbol end:'guardian_3'

//=========================================================

//Edge symbol: 'home'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_close_video}","click",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();$('.videoContainer').hide();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();openVideo('30225_Destiny_TTK_Pre_30_UK-640.mp4','destiny trailer repeat',true,'30225_Destiny_TTK_Pre_30_UK-640.jpg');});
//Edge binding end
})("home");
//Edge symbol end:'home'
})(jQuery,AdobeEdge,"EDGE-14859374");