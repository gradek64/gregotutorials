
var activeSlide=null;(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){(function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(jQuery)})(function(e){"use strict";function o(e){return"string"==typeof e?parseInt(e,10):~~e}var t={wheelSpeed:1,wheelPropagation:!1,minScrollbarLength:null,maxScrollbarLength:null,useBothWheelAxes:!1,useKeyboard:!0,suppressScrollX:!1,suppressScrollY:!1,scrollXMarginOffset:0,scrollYMarginOffset:0,includePadding:!1},n=function(){var e=0;return function(){var o=e;return e+=1,".perfect-scrollbar-"+o}}();e.fn.perfectScrollbar=function(r,l){return this.each(function(){function i(e,t){var n=e+t,r=P-k;C=0>n?0:n>r?r:n;var l=o(C*(x-P)/(P-k));L.scrollTop(l)}function a(e,t){var n=e+t,r=S-E;X=0>n?0:n>r?r:n;var l=o(X*(D-S)/(S-E));L.scrollLeft(l)}function s(e){return y.minScrollbarLength&&(e=Math.max(e,y.minScrollbarLength)),y.maxScrollbarLength&&(e=Math.min(e,y.maxScrollbarLength)),e}function c(){var e={width:S,display:M?"inherit":"none"};e.left=W?L.scrollLeft()+S-D:L.scrollLeft(),B?e.bottom=q-L.scrollTop():e.top=R+L.scrollTop(),K.css(e);var o={top:L.scrollTop(),height:P,display:Y?"inherit":"none"};z?o.right=W?D-L.scrollLeft()-Q-U.outerWidth():Q-L.scrollLeft():o.left=W?L.scrollLeft()+2*S-D-F-U.outerWidth():F+L.scrollLeft(),H.css(o),O.css({left:X,width:E-A}),U.css({top:C,height:k-G})}function d(){K.hide(),H.hide(),S=y.includePadding?L.innerWidth():L.width(),P=y.includePadding?L.innerHeight():L.height(),D=L.prop("scrollWidth"),x=L.prop("scrollHeight"),!y.suppressScrollX&&D>S+y.scrollXMarginOffset?(M=!0,E=s(o(S*S/D)),X=o(L.scrollLeft()*(S-E)/(D-S))):(M=!1,E=0,X=0,L.scrollLeft(0)),!y.suppressScrollY&&x>P+y.scrollYMarginOffset?(Y=!0,k=s(o(P*P/x)),C=o(L.scrollTop()*(P-k)/(x-P))):(Y=!1,k=0,C=0,L.scrollTop(0)),X>=S-E&&(X=S-E),C>=P-k&&(C=P-k),c(),M?L.addClass("ps-active-x"):L.removeClass("ps-active-x"),Y?L.addClass("ps-active-y"):L.removeClass("ps-active-y"),y.suppressScrollX||K.show(),y.suppressScrollY||H.show()}function p(){var o,t;O.bind("mousedown"+j,function(e){t=e.pageX,o=O.position().left,K.addClass("in-scrolling"),e.stopPropagation(),e.preventDefault()}),e(I).bind("mousemove"+j,function(e){K.hasClass("in-scrolling")&&(a(o,e.pageX-t),d(),e.stopPropagation(),e.preventDefault())}),e(I).bind("mouseup"+j,function(){K.hasClass("in-scrolling")&&K.removeClass("in-scrolling")}),o=t=null}function u(){var o,t;U.bind("mousedown"+j,function(e){t=e.pageY,o=U.position().top,H.addClass("in-scrolling"),e.stopPropagation(),e.preventDefault()}),e(I).bind("mousemove"+j,function(e){H.hasClass("in-scrolling")&&(i(o,e.pageY-t),d(),e.stopPropagation(),e.preventDefault())}),e(I).bind("mouseup"+j,function(){H.hasClass("in-scrolling")&&H.removeClass("in-scrolling")}),o=t=null}function f(e,o){var t=L.scrollTop();if(0===e){if(!Y)return!1;if(0===t&&o>0||t>=x-P&&0>o)return!y.wheelPropagation}var n=L.scrollLeft();if(0===o){if(!M)return!1;if(0===n&&0>e||n>=D-S&&e>0)return!y.wheelPropagation}return!0}function v(){function e(e){var o=e.originalEvent.deltaX,t=-1*e.originalEvent.deltaY;return(o===void 0||t===void 0)&&(o=-1*e.originalEvent.wheelDeltaX/6,t=e.originalEvent.wheelDeltaY/6),e.originalEvent.deltaMode&&1===e.originalEvent.deltaMode&&(o*=10,t*=10),o!==o&&t!==t&&(o=0,t=e.originalEvent.wheelDelta),[o,t]}function o(o){var n=e(o),r=n[0],l=n[1];t=!1,y.useBothWheelAxes?Y&&!M?(l?L.scrollTop(L.scrollTop()-l*y.wheelSpeed):L.scrollTop(L.scrollTop()+r*y.wheelSpeed),t=!0):M&&!Y&&(r?L.scrollLeft(L.scrollLeft()+r*y.wheelSpeed):L.scrollLeft(L.scrollLeft()-l*y.wheelSpeed),t=!0):(L.scrollTop(L.scrollTop()-l*y.wheelSpeed),L.scrollLeft(L.scrollLeft()+r*y.wheelSpeed)),d(),t=t||f(r,l),t&&(o.stopPropagation(),o.preventDefault())}var t=!1;window.onwheel!==void 0?L.bind("wheel"+j,o):window.onmousewheel!==void 0&&L.bind("mousewheel"+j,o)}function h(){var o=!1;L.bind("mouseenter"+j,function(){o=!0}),L.bind("mouseleave"+j,function(){o=!1});var t=!1;e(I).bind("keydown"+j,function(n){if((!n.isDefaultPrevented||!n.isDefaultPrevented())&&o){for(var r=document.activeElement?document.activeElement:I.activeElement;r.shadowRoot;)r=r.shadowRoot.activeElement;if(!e(r).is(":input,[contenteditable]")){var l=0,i=0;switch(n.which){case 37:l=-30;break;case 38:i=30;break;case 39:l=30;break;case 40:i=-30;break;case 33:i=90;break;case 32:case 34:i=-90;break;case 35:i=n.ctrlKey?-x:-P;break;case 36:i=n.ctrlKey?L.scrollTop():P;break;default:return}L.scrollTop(L.scrollTop()-i),L.scrollLeft(L.scrollLeft()+l),t=f(l,i),t&&n.preventDefault()}}})}function b(){function e(e){e.stopPropagation()}U.bind("click"+j,e),H.bind("click"+j,function(e){var t=o(k/2),n=e.pageY-H.offset().top-t,r=P-k,l=n/r;0>l?l=0:l>1&&(l=1),L.scrollTop((x-P)*l)}),O.bind("click"+j,e),K.bind("click"+j,function(e){var t=o(E/2),n=e.pageX-K.offset().left-t,r=S-E,l=n/r;0>l?l=0:l>1&&(l=1),L.scrollLeft((D-S)*l)})}function g(o,t){function n(e,o){L.scrollTop(L.scrollTop()-o),L.scrollLeft(L.scrollLeft()-e),d()}function r(){b=!0}function l(){b=!1}function i(e){return e.originalEvent.targetTouches?e.originalEvent.targetTouches[0]:e.originalEvent}function a(e){var o=e.originalEvent;return o.targetTouches&&1===o.targetTouches.length?!0:o.pointerType&&"mouse"!==o.pointerType?!0:!1}function s(e){if(a(e)){g=!0;var o=i(e);u.pageX=o.pageX,u.pageY=o.pageY,f=(new Date).getTime(),null!==h&&clearInterval(h),e.stopPropagation(),e.preventDefault()}}function c(e){if(!b&&g&&a(e)){var o=i(e),t={pageX:o.pageX,pageY:o.pageY},r=t.pageX-u.pageX,l=t.pageY-u.pageY;n(r,l),u=t;var s=(new Date).getTime(),c=s-f;c>0&&(v.x=r/c,v.y=l/c,f=s),e.stopPropagation(),e.preventDefault()}}function p(){!b&&g&&(g=!1,clearInterval(h),h=setInterval(function(){return.01>Math.abs(v.x)&&.01>Math.abs(v.y)?(clearInterval(h),void 0):(n(30*v.x,30*v.y),v.x*=.8,v.y*=.8,void 0)},10))}var u={},f=0,v={},h=null,b=!1,g=!1;o&&(e(window).bind("touchstart"+j,r),e(window).bind("touchend"+j,l),L.bind("touchstart"+j,s),L.bind("touchmove"+j,c),L.bind("touchend"+j,p)),t&&(window.PointerEvent?(e(window).bind("pointerdown"+j,r),e(window).bind("pointerup"+j,l),L.bind("pointerdown"+j,s),L.bind("pointermove"+j,c),L.bind("pointerup"+j,p)):window.MSPointerEvent&&(e(window).bind("MSPointerDown"+j,r),e(window).bind("MSPointerUp"+j,l),L.bind("MSPointerDown"+j,s),L.bind("MSPointerMove"+j,c),L.bind("MSPointerUp"+j,p)))}function w(){L.bind("scroll"+j,function(){d()})}function m(){L.unbind(j),e(window).unbind(j),e(I).unbind(j),L.data("perfect-scrollbar",null),L.data("perfect-scrollbar-update",null),L.data("perfect-scrollbar-destroy",null),O.remove(),U.remove(),K.remove(),H.remove(),K=H=O=U=M=Y=S=P=D=x=E=X=q=B=R=k=C=Q=z=F=W=j=null}function T(){d(),w(),p(),u(),b(),v(),(J||N)&&g(J,N),y.useKeyboard&&h(),L.data("perfect-scrollbar",L),L.data("perfect-scrollbar-update",d),L.data("perfect-scrollbar-destroy",m)}var y=e.extend(!0,{},t),L=e(this);if("object"==typeof r?e.extend(!0,y,r):l=r,"update"===l)return L.data("perfect-scrollbar-update")&&L.data("perfect-scrollbar-update")(),L;if("destroy"===l)return L.data("perfect-scrollbar-destroy")&&L.data("perfect-scrollbar-destroy")(),L;if(L.data("perfect-scrollbar"))return L.data("perfect-scrollbar");L.addClass("ps-container");var S,P,D,x,M,E,X,Y,k,C,W="rtl"===L.css("direction"),j=n(),I=this.ownerDocument||document,K=e("<div class='ps-scrollbar-x-rail'>").appendTo(L),O=e("<div class='ps-scrollbar-x'>").appendTo(K),q=o(K.css("bottom")),B=q===q,R=B?null:o(K.css("top")),A=o(K.css("borderLeftWidth"))+o(K.css("borderRightWidth")),H=e("<div class='ps-scrollbar-y-rail'>").appendTo(L),U=e("<div class='ps-scrollbar-y'>").appendTo(H),Q=o(H.css("right")),z=Q===Q,F=z?null:o(H.css("left")),G=o(H.css("borderTopWidth"))+o(H.css("borderBottomWidth")),J="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,N=null!==window.navigator.msMaxTouchPoints;return T(),L})}});jQuery.easing.def='easeInOutQuint';var slideContainerJquery=sym.getSymbol("slideShow").getSymbolElement();var slideContainerJqueryWrapper=sym.getSymbol("slideShow").getSymbol("SlideShowContainer").getSymbolElement();slideAccesser={edge_composition_ready:true,clickactive:true,currentSlideEdge:0,EdgetimeOut:'undefined',value:0,timer:'undefined',timerTime:7000,arrowUP:sym.$('arrow-up'),arrowDOWN:sym.$('arrow-down')}
var next=0;SlidejQueryAnimater={up:true,timer:true,timerObject:'undefined',slidesNumber:3,clickactive:true,arrowUp:true,arrowDown:true,timerOff:false,arrowActive:false,slideDelay:5000,slideCounter:function(){if(!this.arrowActive){if(this.up){next<this.slidesNumber?next++:next=this.slidesNumber;next==this.slidesNumber?this.up=false:this.up=true;}else{next<=this.slidesNumber&&next>0?next--:next=0;next==0?this.up=true:this.up=false;}}
else{if(this.arrowUp){next<this.slidesNumber?next++:next=this.slidesNumber;};if(this.arrowDown){next<=this.slidesNumber&&next>0?--next:next=0;};};this.slide(next);MenuEdge.activeButton(next);SlideShowFader.recipeIndex=0;},slide:function(passedNext){next=passedNext;var movement=(passedNext)*-100+'%';slideAccesser.currentSlideEdge=passedNext;slideContainerJqueryWrapper.animate({top:movement},{duration:500,complete:function(){SlidejQueryAnimater.clickactive=true;if(!SlidejQueryAnimater.timerOff){if(SlidejQueryAnimater.timer){SlidejQueryAnimater.startTimer();}}
SlidejQueryAnimater.arrowActive=false;}});},startTimer:function(){if(this.timer){this.timerObject=setTimeout(function(){clearTimeout(this.timerObject);SlidejQueryAnimater.slideCounter();},this.slideDelay);}}}
var link=$('<a href="img/Oliving-by-Hans-Recipe_booklet.pdf" target="_blank" download></a>');$('.download').wrap(link);$('.download').click(function(e){var currentButtonTrack=$('.download');currentButtonTrack.data('title','download brochure link');edgeClick(e,currentButtonTrack,'mousepress');var downloadImageImpression=new Image();downloadImageImpression.src=downloadLink;});edgeStartAnimation={startAnimation:function(){SlidejQueryAnimater.startTimer();}}
var productsContainerClasses=['.benefitsInfo','.productContainer','.rangeContainer'];SlideShowFader={currentSlide:0,selectionURLObject:{backon:[clickTag,clickTag,clickTag,clickTag],continentals:[clickTag,clickTag,clickTag,clickTag,clickTag,clickTag],ham:[clickTag,clickTag,clickTag,clickTag],kabana:[clickTag,clickTag],poultry:[clickTag,clickTag,clickTag,clickTag],salami:[clickTag,clickTag,clickTag,clickTag,clickTag],franks:[clickTag,clickTag,clickTag,clickTag],snacks:[clickTag,clickTag]},selectionURLInfo:{backon:['Hans Rindless Pan-Sized Bacon','Hans Rindless Middle Bacon','Rindless Pan-Sized Bacon 300g','Hans Rindless Middle Bacon 500g'],continentals:['Hans Devon','Hans Strassburg 500g','Hans Polish 500g','Hans Chorizo 250g','Hans Cheese Kransky 250g','Hans Kransky 250g'],ham:['Hans Traditional Ham','Hans Sliced Gypsy Ham 100g','Hans Sliced Naturally Smoked Ham 100g','Hans Sliced Traditional Ham 100g'],kabana:['Hans Kabana','Hans Kabana 300g'],poultry:['Hans Roast Turkey Breast','Hans Smoked Chicken Breast','Hans Sliced Turkey Breast 100g','Hans Sliced Chicken Breast 100g'],salami:['Hans Peperilli Salami','Hans White Hungarian Salami','Hans Sliced Pizza Salami 100g','Hans Sliced Peperilli Salami 100g','Hans Sliced Hungarian Salami 100g'],franks:['Hans Thin Franks','Hans Cocktail Franks','Hans Thin Franks 300g','Hans Cocktail Franks 300g'],snacks:['Hans Mild Twiggy Sticks','Hans Mild Twiggy Sticks 200g']},recipeIndex:0,recipeURLObject:{url:['http://oliving-by-hans.com.au/','http://oliving-by-hans.com.au/','http://oliving-by-hans.com.au/','http://oliving-by-hans.com.au/','http://oliving-by-hans.com.au/','http://oliving-by-hans.com.au/','http://oliving-by-hans.com.au/','http://oliving-by-hans.com.au/'],urlInfo:['Hot Dog Made With Oliving by Hans Frankfurters, Onion & Pickles','Mediterranean Parcels (with Oliving by Hans Kabana or Hans Sliced Peperilli Salami)','Pizza With Mozzarella Cheese And OLIVING BY HANS Traditional Ham','Breadsticks Wrapped With Oliving By Hans Turkey And Dip','Roasted Asparagus Wrapped With OLIVING BY HANS Turkey','Spaghetti with Oliving by Hans Roasted Turkey','Kids Pizza (with Oliving by Hans Polish, thinly sliced and cut into wedges & Oliving by Hans Sliced Hungarian Salami)','Broccoli Salad With Nuts, Orange And Oliving by Hans Hungarian Salami']},clickActive:true,prepare:function(){$.each(productsContainerClasses,function(index,element){$(element).children().each(function(index){$(this).not(".product"+SlideShowFader.currentSlide).css({display:'none'});});});},changeSlide:function(slideNumber,containerClass){$(productsContainerClasses[containerClass]).append($(productsContainerClasses[containerClass]+' .product'+slideNumber));$(productsContainerClasses[containerClass]+' .product'+slideNumber).fadeIn('slow',function(){SlideShowFader.recipeIndex=slideNumber;SlideShowFader.clickActive=true;$(productsContainerClasses[containerClass]).children().each(function(index){$(this).not($(productsContainerClasses[containerClass]+' .product'+slideNumber)).css({display:'none'});});});}}
SlideShowFader.prepare();$('.button0').css('backgroundImage','url("images/button0.jpg"),url("images/button0_active.jpg")');$('.button1').css('backgroundImage','url("images/button1.jpg"),url("images/button1_active.jpg")');$('.button2').css('backgroundImage','url("images/button2.jpg"),url("images/button2_active.jpg")');$('.button3').css('backgroundImage','url("images/button3.jpg"),url("images/button3_active.jpg")');MenuEdge={previousIndex:0,activeButton:function(buttonNumber){$('.button'+MenuEdge.previousIndex).css('backgroundImage','url("images/button'+MenuEdge.previousIndex+'.jpg")');$('.button'+buttonNumber).css('backgroundImage','url("images/button'+buttonNumber+'_active.jpg")');MenuEdge.previousIndex=buttonNumber;},buttonFade:function(button){$('.button'+MenuEdge.previousIndex).css('backgroundImage','url("images/button'+MenuEdge.previousIndex+'.jpg")');$('.button'+buttonNumber).css('backgroundImage','url("images/button'+buttonNumber+'_active.jpg")');MenuEdge.previousIndex=buttonNumber;}}
var slideContainerRecipes=$('.recipies');var slideContainerRecipesWrapper=$('.recipiesContainer');var nextR=0;SlidejQueryAnimaterRecipe={up:true,timer:true,timerObject:'undefined',slidesNumber:2,clickactive:true,arrowUp:true,arrowDown:true,arrowUpSymbol:$('.arrowUP'),arrowDownSymbol:$('.arrowDOWN'),arrowDimmed:$('.arrowUP').css({opacity:'0.3',cursor:'auto'}),arrowActive:false,slideDelay:5000,slideCounter:function(){if(this.arrowUp){nextR<=this.slidesNumber&&nextR>0?--nextR:nextR=0;}
if(this.arrowDown){nextR<=this.slidesNumber?nextR++:nextR=this.slidesNumber;}
nextR==0?this.arrowUpSymbol.css({opacity:'0.3',cursor:'auto'}):this.arrowUpSymbol.css({opacity:'1',cursor:'pointer'});nextR==this.slidesNumber?this.arrowDownSymbol.css({opacity:'0.3',cursor:'auto'}):this.arrowDownSymbol.css({opacity:'1',cursor:'pointer'});this.slide(nextR);},slide:function(passedNext){nextR=passedNext;var movement=(passedNext)*-100+'%';slideContainerRecipesWrapper.animate({top:movement},{duration:500,complete:function(){SlidejQueryAnimaterRecipe.clickactive=true;}});}}
$("#Stage div").on("click",function(){if(typeof SlidejQueryAnimater.timerObject!='undefined'){clearTimeout(SlidejQueryAnimater.timerObject)
SlidejQueryAnimater.timerObject='undefined';};SlidejQueryAnimater.timerOff=true;console.log('SlidejQueryAnimater.timerOff: '+SlidejQueryAnimater.timerOff);});$('#Stage_slideShow_slideShowContainer div').css('overflowX','hidden');$(document).ready(function(){$('.rangeContainer .product1').perfectScrollbar();$('.rangeContainer .product5').perfectScrollbar();$('.rangeContainer .product1').perfectScrollbar('update');$('.rangeContainer .product5').perfectScrollbar('update');$('.ps-scrollbar-y').css('height','70%');})
$(window).resize(function(){$('.rangeContainer .product1').perfectScrollbar('update');$('.rangeContainer .product5').perfectScrollbar('update');$('.ps-scrollbar-y').css('height','70%');})});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button1}","click",function(sym,e){if(SlidejQueryAnimater.clickactive){var currentIndex=1;slideAccesser.clickactive=false;MenuEdge.activeButton(currentIndex);SlidejQueryAnimater.arrowActive=true;SlidejQueryAnimater.arrowDown=false;SlidejQueryAnimater.arrowUp=true;SlidejQueryAnimater.clickactive=false;if(SlidejQueryAnimater.timerObject!='undefined'){clearTimeout(SlidejQueryAnimater.timerObject)
SlidejQueryAnimater.timerObject='undefined';};SlidejQueryAnimater.slide(currentIndex);var currentButtonTrack=sym.$('button1');currentButtonTrack.data('title','main menu oliving by hans');edgeClick(e,currentButtonTrack,'mousepress');};});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button2}","click",function(sym,e){if(SlidejQueryAnimater.clickactive){var currentIndex=2;SlidejQueryAnimater.clickactive=false;MenuEdge.activeButton(currentIndex);SlidejQueryAnimater.arrowActive=true;SlidejQueryAnimater.arrowDown=false;SlidejQueryAnimater.arrowUp=true;SlidejQueryAnimater.clickactive=false;if(SlidejQueryAnimater.timerObject!='undefined'){clearTimeout(SlidejQueryAnimater.timerObject)
SlidejQueryAnimater.timerObject='undefined';};SlidejQueryAnimater.slide(currentIndex);var currentButtonTrack=sym.$('button2');currentButtonTrack.data('title','main menu the range');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button3}","click",function(sym,e){if(SlidejQueryAnimater.clickactive){var currentIndex=3;SlidejQueryAnimater.clickactive=false;MenuEdge.activeButton(currentIndex);SlidejQueryAnimater.arrowActive=true;SlidejQueryAnimater.arrowDown=false;SlidejQueryAnimater.arrowUp=true;SlidejQueryAnimater.clickactive=false;if(SlidejQueryAnimater.timerObject!='undefined'){clearTimeout(SlidejQueryAnimater.timerObject)
SlidejQueryAnimater.timerObject='undefined';};SlidejQueryAnimater.slide(currentIndex);var currentButtonTrack=sym.$('button3');currentButtonTrack.data('title','main menu in the kitchen');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_video}","click",function(sym,e){openVideo('oliving-video-640.mp4','intro',true,'oliving-video-640.jpg');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_logo_click}","click",function(sym,e){slide=sym.$("logo_click");slide.data('title','main page link for Logo');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_facebook_icon}","click",function(sym,e){slide=sym.$("facebook_icon");slide.data('title','facebook page link');slide.data('link',facebookLink);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_twitter_icon}","click",function(sym,e){slide=sym.$("twitter_icon");slide.data('title','twitter page link');slide.data('link',twitterLink);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pin_icon}","click",function(sym,e){slide=sym.$("pin_icon");slide.data('title','pin page link');slide.data('link',pinLink);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button0}","click",function(sym,e){if(SlidejQueryAnimater.clickactive){var currentIndex=0;SlidejQueryAnimater.clickactive=false;MenuEdge.activeButton(currentIndex);SlidejQueryAnimater.arrowActive=true;SlidejQueryAnimater.arrowDown=false;SlidejQueryAnimater.arrowUp=true;SlidejQueryAnimater.clickactive=false;if(SlidejQueryAnimater.timerObject!='undefined'){clearTimeout(SlidejQueryAnimater.timerObject)
SlidejQueryAnimater.timerObject='undefined';};SlidejQueryAnimater.slide(currentIndex);var currentButtonTrack=sym.$('button0');currentButtonTrack.data('title','main menu download Booklet');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'slideShow'
(function(symbolName){})("slideShow");
//Edge symbol end:'slideShow'

//=========================================================

//Edge symbol: 'SlideShowContainer'
(function(symbolName){})("SlideShowContainer");
//Edge symbol end:'SlideShowContainer'

//=========================================================

//Edge symbol: 'the_range_slide_symbol'
(function(symbolName){})("the_range_slide_symbol");
//Edge symbol end:'the_range_slide_symbol'

//=========================================================

//Edge symbol: 'the_range_slide_products'
(function(symbolName){})("the_range_slide_products");
//Edge symbol end:'the_range_slide_products'

//=========================================================

//Edge symbol: 'product_range'
(function(symbolName){})("product_range");
//Edge symbol end:'product_range'

//=========================================================

//Edge symbol: 'bacon_product_symbol'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Rectangle3}","click",function(sym,e){if(SlideShowFader.clickActive){SlideShowFader.clickActive=false;SlideShowFader.changeSlide(0,0);}});
//Edge binding end
})("bacon_product_symbol");
//Edge symbol end:'bacon_product_symbol'

//=========================================================

//Edge symbol: 'in_the_kitchen_slide_symbol'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_sliderArrowUp}","click",function(sym,e){if(SlidejQueryAnimaterRecipe.clickactive){SlidejQueryAnimaterRecipe.clickactive=false;SlidejQueryAnimaterRecipe.arrowActive=false;SlidejQueryAnimaterRecipe.arrowDown=false;SlidejQueryAnimaterRecipe.arrowUp=true;SlidejQueryAnimaterRecipe.slideCounter();var currentButtonTrack=sym.$('sliderArrowUp');currentButtonTrack.data('title','recipes slide up arrow');edgeClick(e,currentButtonTrack,'mousepress');};});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sliderArrowDown}","click",function(sym,e){if(SlidejQueryAnimaterRecipe.clickactive){SlidejQueryAnimaterRecipe.clickactive=false;SlidejQueryAnimaterRecipe.arrowActive=false;SlidejQueryAnimaterRecipe.arrowDown=true;SlidejQueryAnimaterRecipe.arrowUp=false;SlidejQueryAnimaterRecipe.slideCounter();var currentButtonTrack=sym.$('sliderArrowDown');currentButtonTrack.data('title','recipes slide down arrow');edgeClick(e,currentButtonTrack,'mousepress');};});
//Edge binding end
})("in_the_kitchen_slide_symbol");
//Edge symbol end:'in_the_kitchen_slide_symbol'

//=========================================================

//Edge symbol: 'in_the_kitchen_recipes'
(function(symbolName){})("in_the_kitchen_recipes");
//Edge symbol end:'in_the_kitchen_recipes'

//=========================================================

//Edge symbol: 'recipesContainer'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_rec1}","click",function(sym,e){if(SlideShowFader.clickActive){SlideShowFader.clickActive=false;SlideShowFader.changeSlide(0,1);var currentButtonTrack=sym.$('rec1');currentButtonTrack.data('title','recipe1 click');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_rec2}","click",function(sym,e){if(SlideShowFader.clickActive){SlideShowFader.clickActive=false;SlideShowFader.changeSlide(1,1);var currentButtonTrack=sym.$('rec2');currentButtonTrack.data('title','recipe2 click');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_rec3}","click",function(sym,e){if(SlideShowFader.clickActive){SlideShowFader.clickActive=false;SlideShowFader.changeSlide(2,1);var currentButtonTrack=sym.$('rec3');currentButtonTrack.data('title','recipe3 click');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_rec6}","click",function(sym,e){if(SlideShowFader.clickActive){SlideShowFader.clickActive=false;SlideShowFader.changeSlide(5,1);var currentButtonTrack=sym.$('rec6');currentButtonTrack.data('title','recipe6 click');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_rec5}","click",function(sym,e){if(SlideShowFader.clickActive){SlideShowFader.clickActive=false;SlideShowFader.changeSlide(4,1);var currentButtonTrack=sym.$('rec5');currentButtonTrack.data('title','recipe5 click');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_rec4}","click",function(sym,e){if(SlideShowFader.clickActive){SlideShowFader.clickActive=false;SlideShowFader.changeSlide(3,1);var currentButtonTrack=sym.$('rec4');currentButtonTrack.data('title','recipe4 click');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_rec8}","click",function(sym,e){if(SlideShowFader.clickActive){SlideShowFader.clickActive=false;SlideShowFader.changeSlide(7,1);var currentButtonTrack=sym.$('rec8');currentButtonTrack.data('title','recipe8 click');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_rec7}","click",function(sym,e){if(SlideShowFader.clickActive){SlideShowFader.clickActive=false;SlideShowFader.changeSlide(6,1);var currentButtonTrack=sym.$('rec7');currentButtonTrack.data('title','recipe7 click');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
})("recipesContainer");
//Edge symbol end:'recipesContainer'

//=========================================================

//Edge symbol: 'recipiesContainer'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_hot_dog_recipe}","click",function(sym,e){slide=sym.$("hot_dog_recipe");slide.data('title',SlideShowFader.recipeURLObject.urlInfo[SlideShowFader.recipeIndex]);slide.data('link',SlideShowFader.recipeURLObject.url[SlideShowFader.recipeIndex]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pizza_mozarella_recipe}","click",function(sym,e){slide=sym.$("pizza_mozarella_recipe");slide.data('title',SlideShowFader.recipeURLObject.urlInfo[SlideShowFader.recipeIndex]);slide.data('link',SlideShowFader.recipeURLObject.url[SlideShowFader.recipeIndex]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_breadsticks_recipe}","click",function(sym,e){slide=sym.$("breadsticks_recipe");slide.data('title',SlideShowFader.recipeURLObject.urlInfo[SlideShowFader.recipeIndex]);slide.data('link',SlideShowFader.recipeURLObject.url[SlideShowFader.recipeIndex]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_medi_parcel_recipe}","click",function(sym,e){slide=sym.$("medi_parcel_recipe");slide.data('title',SlideShowFader.recipeURLObject.urlInfo[SlideShowFader.recipeIndex]);slide.data('link',SlideShowFader.recipeURLObject.url[SlideShowFader.recipeIndex]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_asparagus_recipe}","click",function(sym,e){slide=sym.$("asparagus_recipe");slide.data('title',SlideShowFader.recipeURLObject.urlInfo[SlideShowFader.recipeIndex]);slide.data('link',SlideShowFader.recipeURLObject.url[SlideShowFader.recipeIndex]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_broculi_recipe}","click",function(sym,e){slide=sym.$("broculi_recipe");slide.data('title',SlideShowFader.recipeURLObject.urlInfo[SlideShowFader.recipeIndex]);slide.data('link',SlideShowFader.recipeURLObject.url[SlideShowFader.recipeIndex]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_kids_pizza_recipe}","click",function(sym,e){slide=sym.$("kids_pizza_recipe");slide.data('title',SlideShowFader.recipeURLObject.urlInfo[SlideShowFader.recipeIndex]);slide.data('link',SlideShowFader.recipeURLObject.url[SlideShowFader.recipeIndex]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_spaghetti_recipe}","click",function(sym,e){slide=sym.$("spaghetti_recipe");slide.data('title',SlideShowFader.recipeURLObject.urlInfo[SlideShowFader.recipeIndex]);slide.data('link',SlideShowFader.recipeURLObject.url[SlideShowFader.recipeIndex]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("recipiesContainer");
//Edge symbol end:'recipiesContainer'

//=========================================================

//Edge symbol: 'download_slide'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_download_slide}","click",function(sym,e){slide=sym.$("download_slide");slide.data('title','main page link from Download');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("download_slide");
//Edge symbol end:'download_slide'

//=========================================================

//Edge symbol: 'condiments_selection_sym'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_selection3}","click",function(sym,e){slide=sym.$("selection3");slide.data('title',SlideShowFader.selectionURLInfo.continentals[3]);slide.data('link',SlideShowFader.selectionURLObject.continentals[3]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selection2}","click",function(sym,e){slide=sym.$("selection2");slide.data('title',SlideShowFader.selectionURLInfo.continentals[2]);slide.data('link',SlideShowFader.selectionURLObject.continentals[2]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selection1}","click",function(sym,e){slide=sym.$("selection1");slide.data('title',SlideShowFader.selectionURLInfo.continentals[1]);slide.data('link',SlideShowFader.selectionURLObject.continentals[1]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selection0}","click",function(sym,e){slide=sym.$("selection0");slide.data('title',SlideShowFader.selectionURLInfo.continentals[0]);slide.data('link',SlideShowFader.selectionURLObject.continentals[0]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selection5}","click",function(sym,e){slide=sym.$("selection5");slide.data('title',SlideShowFader.selectionURLInfo.continentals[5]);slide.data('link',SlideShowFader.selectionURLObject.continentals[5]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selection4}","click",function(sym,e){slide=sym.$("selection4");slide.data('title',SlideShowFader.selectionURLInfo.continentals[4]);slide.data('link',SlideShowFader.selectionURLObject.continentals[4]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("condiments_selection_sym");
//Edge symbol end:'condiments_selection_sym'

//=========================================================

//Edge symbol: 'franks_selection_sym'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_selection3}","click",function(sym,e){slide=sym.$("selection3");slide.data('title',SlideShowFader.selectionURLInfo.franks[3]);slide.data('link',SlideShowFader.selectionURLObject.franks[3]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selection2}","click",function(sym,e){slide=sym.$("selection2");slide.data('title',SlideShowFader.selectionURLInfo.franks[2]);slide.data('link',SlideShowFader.selectionURLObject.franks[2]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selection1}","click",function(sym,e){slide=sym.$("selection1");slide.data('title',SlideShowFader.selectionURLInfo.franks[1]);slide.data('link',SlideShowFader.selectionURLObject.franks[1]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selection0}","click",function(sym,e){slide=sym.$("selection0");slide.data('title',SlideShowFader.selectionURLInfo.franks[0]);slide.data('link',SlideShowFader.selectionURLObject.franks[0]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("franks_selection_sym");
//Edge symbol end:'franks_selection_sym'

//=========================================================

//Edge symbol: 'ham_selection_sym'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_selection3}","click",function(sym,e){slide=sym.$("selection3");slide.data('title',SlideShowFader.selectionURLInfo.ham[3]);slide.data('link',SlideShowFader.selectionURLObject.ham[3]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selection2}","click",function(sym,e){slide=sym.$("selection2");slide.data('title',SlideShowFader.selectionURLInfo.ham[2]);slide.data('link',SlideShowFader.selectionURLObject.ham[2]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selection1}","click",function(sym,e){slide=sym.$("selection1");slide.data('title',SlideShowFader.selectionURLInfo.ham[1]);slide.data('link',SlideShowFader.selectionURLObject.ham[1]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selection0}","click",function(sym,e){slide=sym.$("selection0");slide.data('title',SlideShowFader.selectionURLInfo.ham[0]);slide.data('link',SlideShowFader.selectionURLObject.ham[0]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("ham_selection_sym");
//Edge symbol end:'ham_selection_sym'

//=========================================================

//Edge symbol: 'kabana_selection_sym'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_selection1}","click",function(sym,e){slide=sym.$("selection1");slide.data('title',SlideShowFader.selectionURLInfo.kabana[1]);slide.data('link',SlideShowFader.selectionURLObject.kabana[1]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selection0}","click",function(sym,e){slide=sym.$("selection0");slide.data('title',SlideShowFader.selectionURLInfo.kabana[0]);slide.data('link',SlideShowFader.selectionURLObject.kabana[0]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("kabana_selection_sym");
//Edge symbol end:'kabana_selection_sym'

//=========================================================

//Edge symbol: 'poulry_selection_sym'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_selection0}","click",function(sym,e){slide=sym.$("selection0");slide.data('title',SlideShowFader.selectionURLInfo.poultry[0]);slide.data('link',SlideShowFader.selectionURLObject.poultry[0]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selection1}","click",function(sym,e){slide=sym.$("selection1");slide.data('title',SlideShowFader.selectionURLInfo.poultry[1]);slide.data('link',SlideShowFader.selectionURLObject.poultry[1]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selection2}","click",function(sym,e){slide=sym.$("selection2");slide.data('title',SlideShowFader.selectionURLInfo.poultry[2]);slide.data('link',SlideShowFader.selectionURLObject.poultry[2]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selection3}","click",function(sym,e){slide=sym.$("selection3");slide.data('title',SlideShowFader.selectionURLInfo.poultry[3]);slide.data('link',SlideShowFader.selectionURLObject.poultry[3]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("poulry_selection_sym");
//Edge symbol end:'poulry_selection_sym'

//=========================================================

//Edge symbol: 'salami_selection_sym'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_selection0}","click",function(sym,e){slide=sym.$("selection0");slide.data('title',SlideShowFader.selectionURLInfo.salami[0]);slide.data('link',SlideShowFader.selectionURLObject.salami[0]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selection1}","click",function(sym,e){slide=sym.$("selection1");slide.data('title',SlideShowFader.selectionURLInfo.salami[1]);slide.data('link',SlideShowFader.selectionURLObject.salami[1]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selection2}","click",function(sym,e){slide=sym.$("selection2");slide.data('title',SlideShowFader.selectionURLInfo.salami[2]);slide.data('link',SlideShowFader.selectionURLObject.salami[2]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selection3}","click",function(sym,e){slide=sym.$("selection3");slide.data('title',SlideShowFader.selectionURLInfo.salami[3]);slide.data('link',SlideShowFader.selectionURLObject.salami[3]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selection4}","click",function(sym,e){slide=sym.$("selection4");slide.data('title',SlideShowFader.selectionURLInfo.salami[4]);slide.data('link',SlideShowFader.selectionURLObject.salami[4]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("salami_selection_sym");
//Edge symbol end:'salami_selection_sym'

//=========================================================

//Edge symbol: 'snacks_selection_sym'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_selection1}","click",function(sym,e){slide=sym.$("selection1");slide.data('title',SlideShowFader.selectionURLInfo.snacks[1]);slide.data('link',SlideShowFader.selectionURLObject.snacks[1]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selection0}","click",function(sym,e){slide=sym.$("selection0");slide.data('title',SlideShowFader.selectionURLInfo.snacks[0]);slide.data('link',SlideShowFader.selectionURLObject.snacks[0]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("snacks_selection_sym");
//Edge symbol end:'snacks_selection_sym'

//=========================================================

//Edge symbol: 'bacon_selection_sym'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_selection0}","click",function(sym,e){slide=sym.$("selection0");slide.data('title',SlideShowFader.selectionURLInfo.backon[0]);slide.data('link',SlideShowFader.selectionURLObject.backon[0]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selection1}","click",function(sym,e){slide=sym.$("selection1");slide.data('title',SlideShowFader.selectionURLInfo.backon[1]);slide.data('link',SlideShowFader.selectionURLObject.backon[1]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selection2}","click",function(sym,e){slide=sym.$("selection2");slide.data('title',SlideShowFader.selectionURLInfo.backon[2]);slide.data('link',SlideShowFader.selectionURLObject.backon[2]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selection3}","click",function(sym,e){slide=sym.$("selection3");slide.data('title',SlideShowFader.selectionURLInfo.backon[3]);slide.data('link',SlideShowFader.selectionURLObject.backon[3]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("bacon_selection_sym");
//Edge symbol end:'bacon_selection_sym'

//=========================================================

//Edge symbol: 'range_menu'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_backon}","click",function(sym,e){if(SlideShowFader.clickActive){SlideShowFader.clickActive=false;SlideShowFader.changeSlide(0,2);var currentButtonTrack=sym.$('backon');currentButtonTrack.data('title','bacon range');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_continetals}","click",function(sym,e){if(SlideShowFader.clickActive){SlideShowFader.clickActive=false;SlideShowFader.changeSlide(1,2);var currentButtonTrack=sym.$('continetals');currentButtonTrack.data('title','continentals range');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ham}","click",function(sym,e){if(SlideShowFader.clickActive){SlideShowFader.clickActive=false;SlideShowFader.changeSlide(2,2);var currentButtonTrack=sym.$('ham');currentButtonTrack.data('title','ham range');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_kabana}","click",function(sym,e){if(SlideShowFader.clickActive){SlideShowFader.clickActive=false;SlideShowFader.changeSlide(3,2);var currentButtonTrack=sym.$('kabana');currentButtonTrack.data('title','kabana range');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_poultry}","click",function(sym,e){if(SlideShowFader.clickActive){SlideShowFader.clickActive=false;SlideShowFader.changeSlide(4,2);var currentButtonTrack=sym.$('poultry');currentButtonTrack.data('title','poultry range');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_salami}","click",function(sym,e){if(SlideShowFader.clickActive){SlideShowFader.clickActive=false;SlideShowFader.changeSlide(5,2);var currentButtonTrack=sym.$('salami');currentButtonTrack.data('title','salami range');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_franks}","click",function(sym,e){if(SlideShowFader.clickActive){SlideShowFader.clickActive=false;SlideShowFader.changeSlide(6,2);var currentButtonTrack=sym.$('franks');currentButtonTrack.data('title','franks range');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_snacks}","click",function(sym,e){if(SlideShowFader.clickActive){SlideShowFader.clickActive=false;SlideShowFader.changeSlide(7,2);var currentButtonTrack=sym.$('snacks');currentButtonTrack.data('title','snacks range');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_backon}","mouseover",function(sym,e){var currentButtonTrack=sym.$('backon');currentButtonTrack.css({borderBottom:'2px solid green',opacity:0.7});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_backon}","mouseout",function(sym,e){var currentButtonTrack=sym.$('backon');currentButtonTrack.css({opacity:0});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_continetals}","mouseover",function(sym,e){var currentButtonTrack=sym.$('continetals');currentButtonTrack.css({borderBottom:'2px solid green',opacity:0.7});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_continetals}","mouseout",function(sym,e){var currentButtonTrack=sym.$('continetals');currentButtonTrack.css({opacity:0});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ham}","mouseover",function(sym,e){var currentButtonTrack=sym.$('ham');currentButtonTrack.css({borderBottom:'2px solid green',opacity:0.7});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ham}","mouseout",function(sym,e){var currentButtonTrack=sym.$('ham');currentButtonTrack.css({opacity:0});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_kabana}","mouseover",function(sym,e){var currentButtonTrack=sym.$('kabana');currentButtonTrack.css({borderBottom:'2px solid green',opacity:0.7});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_kabana}","mouseout",function(sym,e){var currentButtonTrack=sym.$('kabana');currentButtonTrack.css({opacity:0});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_poultry}","mouseover",function(sym,e){var currentButtonTrack=sym.$('poultry');currentButtonTrack.css({borderBottom:'2px solid green',opacity:0.7});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_poultry}","mouseout",function(sym,e){var currentButtonTrack=sym.$('poultry');currentButtonTrack.css({opacity:0});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_salami}","mouseover",function(sym,e){var currentButtonTrack=sym.$('salami');currentButtonTrack.css({borderBottom:'2px solid green',opacity:0.7});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_salami}","mouseout",function(sym,e){var currentButtonTrack=sym.$('salami');currentButtonTrack.css({opacity:0});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_franks}","mouseover",function(sym,e){var currentButtonTrack=sym.$('franks');currentButtonTrack.css({borderBottom:'2px solid green',opacity:0.7});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_franks}","mouseout",function(sym,e){var currentButtonTrack=sym.$('franks');currentButtonTrack.css({opacity:0});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_snacks}","mouseover",function(sym,e){var currentButtonTrack=sym.$('snacks');currentButtonTrack.css({borderBottom:'2px solid green',opacity:0.7});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_snacks}","mouseout",function(sym,e){var currentButtonTrack=sym.$('snacks');currentButtonTrack.css({opacity:0});});
//Edge binding end
})("range_menu");
//Edge symbol end:'range_menu'

//=========================================================

//Edge symbol: 'oliving_by_hand_symbol'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_the_concept_button}","click",function(sym,e){if(SlideShowFader.clickActive){SlideShowFader.clickActive=false;SlideShowFader.changeSlide(0,0);var currentButtonTrack=sym.$('the_concept_button');currentButtonTrack.data('title','the_concept_button click');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_the_proccess_button}","click",function(sym,e){if(SlideShowFader.clickActive){SlideShowFader.clickActive=false;SlideShowFader.changeSlide(1,0);var currentButtonTrack=sym.$('the_proccess_button');currentButtonTrack.data('title','the_proccess_button click');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_the_wellness_button}","click",function(sym,e){if(SlideShowFader.clickActive){SlideShowFader.clickActive=false;SlideShowFader.changeSlide(2,0);var currentButtonTrack=sym.$('the_wellness_button');currentButtonTrack.data('title','the_wellness_button click');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_oliving_all_slides}","click",function(sym,e){slide=sym.$("oliving_all_slides");slide.data('title','main page link from info Oliving');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_the_wellness_button}","mouseover",function(sym,e){var currentButtonTrack=sym.$('the_wellness_button');currentButtonTrack.css({borderBottom:'2px solid green',opacity:0.7});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_the_wellness_button}","mouseout",function(sym,e){var currentButtonTrack=sym.$('the_wellness_button');currentButtonTrack.css({opacity:0});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_the_proccess_button}","mouseover",function(sym,e){var currentButtonTrack=sym.$('the_proccess_button');currentButtonTrack.css({borderBottom:'2px solid green',opacity:0.7});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_the_proccess_button}","mouseout",function(sym,e){var currentButtonTrack=sym.$('the_proccess_button');currentButtonTrack.css({opacity:0});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_the_concept_button}","mouseover",function(sym,e){var currentButtonTrack=sym.$('the_concept_button');currentButtonTrack.css({borderBottom:'2px solid green',opacity:0.7});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_the_concept_button}","mouseout",function(sym,e){var currentButtonTrack=sym.$('the_concept_button');currentButtonTrack.css({opacity:0});});
//Edge binding end
})("oliving_by_hand_symbol");
//Edge symbol end:'oliving_by_hand_symbol'

//=========================================================

//Edge symbol: 'the_concept'
(function(symbolName){})("the_concept");
//Edge symbol end:'the_concept'

//=========================================================

//Edge symbol: 'oliving_all_slides'
(function(symbolName){})("oliving_all_slides");
//Edge symbol end:'oliving_all_slides'
})(jQuery,AdobeEdge,"EDGE-8444901");