
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){jQuery.easing.def='easeInOutQuint';var slideContainerJquery=$(".slideShow1");var slideContainerJqueryWrapper=$(".slideShowContainer1");slideAccesser={edge_composition_ready:true,clickactive:true,currentSlideEdge:0,EdgetimeOut:'undefined',value:1,previousSlide:0,totalSlides:3,direction:'left',setTimer:false,timerDelay:4000}
SlidejQueryAnimater={timerObject:'undefined',timer:function(){if(slideAccesser.setTimer){this.timerObject=setInterval(function(){var next=slideAccesser.previousSlide;next++;SlidejQueryAnimater.slide(next,'left');},slideAccesser.timerDelay);}},slide:function(currentSlide,direction){direction=direction||slideAccesser.direction;var movement=0;var value;direction=='left'?value=-1:value=1;if(slideAccesser.previousSlide!=currentSlide){currentSlide==(slideAccesser.totalSlides)?currentSlide=0:false;currentSlide<0?currentSlide=(slideAccesser.totalSlides-1):false;$('.image_'+currentSlide).appendTo(slideContainerJqueryWrapper)
$('.image_'+currentSlide).css('left',value*(-100)+'%');movement=value*(100);slideAccesser.previousSlide=currentSlide;}
$(".slide"+currentSlide).appendTo(".slideShowFade").fadeIn(1000,function(){$(".slideShowFade").children().not(".slide"+currentSlide).css({display:'none'});});slideAccesser.currentSlideEdge=currentSlide;slideContainerJqueryWrapper.animate({left:movement+'%'},{duration:1000,complete:function(){slideAccesser.clickactive=true;$('.image_'+currentSlide).css('left','0');$.each(slideContainerJqueryWrapper.children(),function(index,element){$(element).not('.image_'+currentSlide).css({left:value*(-100)+'%'});});slideContainerJqueryWrapper.css('left','0');}});}}
SlidejQueryAnimater.timer();var mainScrollerContainer=$('.mainScrollerContainer, .instagram_bttn_container');MainScroller={active:false,firstSlide:'gallery',mainSlide:function(movement){mainScrollerContainer.animate({top:movement*100+'%'},{duration:1000,complete:function(){movement==0?MainScroller.firstSlide='instgram':MainScroller.firstSlide='gallery';MainScroller.active=false;}});}}
edgeStartAnimation.openingSlide=function(openingSlideOut){var openingSlide=Number(openingSlideOut);slideAccesser.previousSlide=openingSlide;$(".slide"+openingSlide).appendTo(".slideShowFade").show();$('.image_'+openingSlide).appendTo(slideContainerJqueryWrapper);$('.image_'+openingSlide).css({left:'0',top:'0'});$('.mainScroller').fadeIn(1000);slideAccesser.setTimer=true;SlidejQueryAnimater.timer();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_instagram_bttn}","click",function(sym,e){if(!MainScroller.active){MainScroller.active=true;var value;MainScroller.firstSlide=='gallery'?value=0:value=-1;MainScroller.mainSlide(value);var currentButtonTrack=sym.$('instagram_bttn');currentButtonTrack.data('title','instagram slide');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_store}","click",function(sym,e){var thumb="store";slide=sym.$(thumb);slide.data('title','store link');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'side_gallery'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_side_image_2}","click",function(sym,e){slide=$('.slide0');slide.data('title','majorPremiumBootie click tagside gallery');slide.data('link',majorPremiumBootie);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_side_image_1}","click",function(sym,e){slide=$('.slide1');slide.data('title','tivioliBoote click tag side gallery');slide.data('link',tivioliBoot);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_side_image_3}","click",function(sym,e){slide=$('.slide2');slide.data('title','medinaBlackShoe click tag side gallery');slide.data('link',medinaBlackShoe);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("side_gallery");
//Edge symbol end:'side_gallery'

//=========================================================

//Edge symbol: 'slideShow'
(function(symbolName){})("slideShow");
//Edge symbol end:'slideShow'

//=========================================================

//Edge symbol: 'slideShowContainer'
(function(symbolName){})("slideShowContainer");
//Edge symbol end:'slideShowContainer'

//=========================================================

//Edge symbol: 'gallery_container'
(function(symbolName){})("gallery_container");
//Edge symbol end:'gallery_container'

//=========================================================

//Edge symbol: 'gallery_container_inner'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_gallery_img1}","click",function(sym,e){slide=$('.image_0');slide.data('title','majorPremiumBootie click tag');slide.data('link',majorPremiumBootie);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_gallery_img3}","click",function(sym,e){slide=$('.image_1');slide.data('title','tivioliBoot click tag');slide.data('link',tivioliBoot);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_gallery_img2}","click",function(sym,e){slide=$('.image_2');slide.data('title','medinaBlackShoe click tag');slide.data('link',medinaBlackShoe);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("gallery_container_inner");
//Edge symbol end:'gallery_container_inner'

//=========================================================

//Edge symbol: 'mainScroller'
(function(symbolName){})("mainScroller");
//Edge symbol end:'mainScroller'

//=========================================================

//Edge symbol: 'gallery'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_arrowRight}","click",function(sym,e){if(slideAccesser.clickactive){if(typeof SlidejQueryAnimater.timerObject!='undefined'){clearInterval(SlidejQueryAnimater.timerObject);SlidejQueryAnimater.timerObject='undefined';}
slideAccesser.clickactive=false;var prev=slideAccesser.previousSlide;prev--;SlidejQueryAnimater.slide(prev,'right');var currentButtonTrack=sym.$('arrowRight');currentButtonTrack.data('title','arrow right pressed');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrowLeft}","click",function(sym,e){if(slideAccesser.clickactive){if(typeof SlidejQueryAnimater.timerObject!='undefined'){clearInterval(SlidejQueryAnimater.timerObject);SlidejQueryAnimater.timerObject='undefined';}
slideAccesser.clickactive=false;var next=slideAccesser.previousSlide;next++;SlidejQueryAnimater.slide(next,'left');var currentButtonTrack=sym.$('arrowLeft');currentButtonTrack.data('title','arrow left pressed');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_shop_now2}","click",function(sym,e){var thumb="shop_now2";slide=sym.$(thumb);slide.data('title','shop now link');slide.data('link',shopNow);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_logoCopy2}","click",function(sym,e){var thumb="logo";slide=sym.$(thumb);slide.data('title','logo link');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_side_gallery}","click",function(sym,e){slide=$('.slideShowFade');slide.data('title','side gallery click tag');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("gallery");
//Edge symbol end:'gallery'

//=========================================================

//Edge symbol: 'instagram_symol'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_thumb1}","click",function(sym,e){var thumb="thumb1";slide=sym.$(thumb);slide.data('title','emskicross');slide.data('link','https://instagram.com/p/7YFHPfg1ET/');slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_thumb2}","click",function(sym,e){var thumb="thumb2";slide=sym.$(thumb);slide.data('title',instagramLinks[thumb][1]);slide.data('link',instagramLinks[thumb][0]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_thumb3}","click",function(sym,e){var thumb="thumb3";slide=sym.$(thumb);slide.data('title',instagramLinks[thumb][1]);slide.data('link',instagramLinks[thumb][0]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_thumb4}","click",function(sym,e){var thumb="thumb4";slide=sym.$(thumb);slide.data('title',instagramLinks[thumb][1]);slide.data('link',instagramLinks[thumb][0]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_thumb5}","click",function(sym,e){var thumb="thumb5";slide=sym.$(thumb);slide.data('title',instagramLinks[thumb][1]);slide.data('link',instagramLinks[thumb][0]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_thumb6}","click",function(sym,e){var thumb="thumb6";slide=sym.$(thumb);slide.data('title',instagramLinks[thumb][1]);slide.data('link',instagramLinks[thumb][0]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_thumb7}","click",function(sym,e){var thumb="thumb7";slide=sym.$(thumb);slide.data('title',instagramLinks[thumb][1]);slide.data('link',instagramLinks[thumb][0]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_thumb8}","click",function(sym,e){var thumb="thumb8";slide=sym.$(thumb);slide.data('title',instagramLinks[thumb][1]);slide.data('link',instagramLinks[thumb][0]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_thumb9}","click",function(sym,e){var thumb="thumb9";slide=sym.$(thumb);slide.data('title',instagramLinks[thumb][1]);slide.data('link',instagramLinks[thumb][0]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_thumb10}","click",function(sym,e){var thumb="thumb10";slide=sym.$(thumb);slide.data('title',instagramLinks[thumb][1]);slide.data('link',instagramLinks[thumb][0]);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_follow}","click",function(sym,e){var thumb="follow";slide=sym.$(thumb);slide.data('title','instagram follow');slide.data('link',instagramLink);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("instagram_symbol");
//Edge symbol end:'instagram_symbol'

//=========================================================

//Edge symbol: 'mainScrollerContainer'
(function(symbolName){})("mainScrollerContainer");
//Edge symbol end:'mainScrollerContainer'

//=========================================================

//Edge symbol: 'instagram_bttn'
(function(symbolName){})("instagram_bttn");
//Edge symbol end:'instagram_bttn'

//=========================================================

//Edge symbol: 'instagram_bttn_container'
(function(symbolName){})("instagram_bttn_container");
//Edge symbol end:'instagram_bttn_container'
})(jQuery,AdobeEdge,"EDGE-2154039");