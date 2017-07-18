
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){jQuery.easing.def='easeInOutCubic';var slideContainerJquery=sym.getSymbol("slideShow").getSymbolElement();var slideContainerJqueryWrapper=sym.getSymbol("slideShow").getSymbol("slideShowContainer").getSymbolElement();slideAccesser={edge_composition_ready:true,clickactive:true,currentSlideEdge:0,EdgetimeOut:'undefined',value:1,totalSlides:3,previousSlide:0,direction:'left',setTimer:true,timerDelay:4000,timerActive:false,slidingDuration:800,initial:false}
SlidejQueryAnimater={setup:function(){$.each(slideContainerJqueryWrapper.children(),function(index,element){$(this).addClass('image'+index);});},timerObject:'undefined',timer:function(){if(slideAccesser.setTimer){this.timerObject=setTimeout(function(){clearTimeout(this.timerObject);slideAccesser.timerActive=true;var next=slideAccesser.previousSlide;next++;SlidejQueryAnimater.slide(next,'left');},slideAccesser.timerDelay);}},slide:function(currentSlide,direction){direction=direction||slideAccesser.direction;var movement=0;var value;direction=='left'?value=-1:value=1;slideAccesser.clickactive=false;if(!slideAccesser.initial&&!slideAccesser.timerActive){slideAccesser.initial=true;direction=='left'?slideAccesser.previousSlide=2:slideAccesser.previousSlide=1;}
if(slideAccesser.previousSlide!=currentSlide){currentSlide==slideAccesser.totalSlides?currentSlide=0:false;currentSlide<0?currentSlide=(slideAccesser.totalSlides-1):false;$('.image'+currentSlide).appendTo(slideContainerJqueryWrapper)
$('.image'+currentSlide).css('top',value*(-100)+'%');movement=value*(100);slideAccesser.previousSlide=currentSlide;}
slideAccesser.currentSlideEdge=currentSlide;slideContainerJqueryWrapper.animate({top:movement+'%'},{duration:slideAccesser.slidingDuration,complete:function(){slideAccesser.clickactive=true;$('.image'+currentSlide).css('top','0');$.each(slideContainerJqueryWrapper.children(),function(index,element){$(element).not('.image'+currentSlide).css({top:value*(-100)+'%'});});slideContainerJqueryWrapper.css('top','0');SlidejQueryAnimater.timer();}});}}
SlidejQueryAnimater.setup();SlidejQueryAnimater.timer();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btt1}","click",function(sym,e){if(slideAccesser.clickactive){slideAccesser.clickactive=false;SlidejQueryAnimater.slide(1)}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btt2}","click",function(sym,e){if(slideAccesser.clickactive){slideAccesser.clickactive=false;SlidejQueryAnimater.slide(2)}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btt0}","click",function(sym,e){if(slideAccesser.clickactive){slideAccesser.clickactive=false;SlidejQueryAnimater.slide(0)}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-left}","click",function(sym,e){if(slideAccesser.clickactive){if(typeof SlidejQueryAnimater.timerObject!='undefined'){clearTimeout(SlidejQueryAnimater.timerObject);SlidejQueryAnimater.timerObject='undefined';}
slideAccesser.clickactive=false;var next=slideAccesser.previousSlide;next++;SlidejQueryAnimater.slide(next,'left');var currentButtonTrack=sym.$('arrow-left');currentButtonTrack.data('title','slide up arrow from slideshow')
edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-right}","click",function(sym,e){if(slideAccesser.clickactive){if(typeof SlidejQueryAnimater.timerObject!='undefined'){clearTimeout(SlidejQueryAnimater.timerObject);SlidejQueryAnimater.timerObject='undefined';}
slideAccesser.clickactive=false;var prev=slideAccesser.previousSlide;prev--;SlidejQueryAnimater.slide(prev,'right');var currentButtonTrack=sym.$('arrow-right');currentButtonTrack.data('title','slide bottom arrow from slideshow')
edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_slideShow}","click",function(sym,e){var slide=sym.getSymbol("slideShow").getSymbolElement();slide.data('title','hm landing page from Slideshow');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_twitter_bttn}","click",function(sym,e){var slide=sym.$("twitter_bttn");slide.data('title','twitter link');slide.data('link',twitterLink);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_facebook_bttn}","click",function(sym,e){var slide=sym.$("facebook_bttn");slide.data('title','facebook link');slide.data('link',facebookLink);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_visit}","click",function(sym,e){var slide=sym.$("visit");slide.data('title','visit link');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'slideShow'
(function(symbolName){})("slideShow");
//Edge symbol end:'slideShow'

//=========================================================

//Edge symbol: 'slideShowContainer'
(function(symbolName){})("slideShowContainer");
//Edge symbol end:'slideShowContainer'
})(jQuery,AdobeEdge,"EDGE-21492866");