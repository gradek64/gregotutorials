
var currentArticle;(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var slideContainerJquery=sym.getSymbol("slideShow").getSymbolElement();var slideContainerJqueryWrapper=sym.getSymbol("slideShow").getSymbol("slideShowContainer").getSymbolElement();window.slideShowAuto=true;slideAccesser={edge_composition_ready:true,clickactive:true,currentSlideEdge:0,EdgetimeOut:'undefined',value:0,timer:'undefined',timerTime:7000,nextSlide:0,arrowUpEnd:false,arrowDownEnd:true,slidesNames:['playsuit','dress','jumper','dungarees']}
var next=0;SlidejQueryAnimater={up:true,timer:true,timerObject:'undefined',slidesNumber:(slideContainerJqueryWrapper.children().length-1),clickactive:true,arrowUp:true,arrowDown:true,arrowActive:false,slideDelay:4000,slideCounter:function(){if(!this.arrowActive){if(this.up){next<this.slidesNumber?next++:next=this.slidesNumber;next==this.slidesNumber?this.up=false:this.up=true;}else{next<=this.slidesNumber&&next>0?next--:next=0;next==0?this.up=true:this.up=false;}}
else{if(this.arrowUp){next<this.slidesNumber?next++:next=this.slidesNumber;};if(this.arrowDown){next<=this.slidesNumber&&next>0?--next:next=0;};};slideAccesser.nextSlide=next;this.slide(next);},slide:function(passedNext){next=passedNext;if(next==0){$('.arrowUp').animate({opacity:.5});slideAccesser.arrowUpEnd=false;slideAccesser.arrowDownEnd=true;}else if(next==this.slidesNumber){$('.arrowDown').animate({opacity:.5});slideAccesser.arrowUpEnd=true;slideAccesser.arrowDownEnd=false;}else{$('.arrowUp, .arrowDown').animate({opacity:1});}
slideAccesser.nextSlide!=this.slidesNumber?slideAccesser.arrowDownEnd=true:slideAccesser.arrowDownEnd=false;slideAccesser.nextSlide!=0?slideAccesser.arrowUpEnd=true:slideAccesser.arrowUpEnd=false;var movement=(passedNext)*-100+'%';slideAccesser.currentSlideEdge=passedNext;if(window.slideShowAuto){slideTimer.start(slideAccesser.slidesNames[slideAccesser.nextSlide]);}
slideContainerJqueryWrapper.animate({top:movement},{duration:500,complete:function(){SlidejQueryAnimater.clickactive=true;SlidejQueryAnimater.arrowActive=false;}});},startTimer:function(){if(this.timer){this.timerObject=setInterval(function(){clearInterval(this.timerObject);SlidejQueryAnimater.slideCounter();},this.slideDelay);}},stopTimer:function(){if(this.timer){clearInterval(this.timerObject);this.timer=false;}}}
var to=setInterval(function(){if(location.hash.indexOf('SEPSLIDE-start')>-1){SlidejQueryAnimater.startTimer();clearInterval(to);}},1000)
jQuery.easing.def='easeInOutQuint';mainArticleWrapper={clickActive:true,next:0,total:8,arrowRightStop:true,arrowLeftStop:false,articlesNames:['what_to_wear','new_neutrals_1','feel_natural','get_in_nude','LDN','hm_debutes','Lara_Stone_1','Lara_Stone_2','new_neutrals_2'],move:function(){mainArticleWrapper.next==mainArticleWrapper.total?$('.arrowLeft').css({opacity:'0.2',cursor:'auto'}):$('.arrowLeft').css({opacity:'1',cursor:'pointer'});mainArticleWrapper.next!=mainArticleWrapper.total?this.arrowRightStop=true:this.arrowRightStop=false;mainArticleWrapper.next>0?$('.arrowRight').css({opacity:'1',cursor:'pointer'}):$('.arrowRight').css({opacity:'0.2',cursor:'auto'});mainArticleWrapper.next!=0?this.arrowLeftStop=true:this.arrowLeftStop=false;if(!window.slideShowAuto){slideTimer.start(this.articlesNames[mainArticleWrapper.next]);}
var moves=(this.next)*-100+'%';$('.mainArticleWrapper').animate({left:moves},{duration:500,complete:function(){mainArticleWrapper.clickActive=true;}});if(this.next!=mainArticleWrapper.total){var moveTop=(this.next)*-50+'%';$('.sideArticleWrapper_scroll').animate({top:moveTop},{duration:500,complete:function(){mainArticleWrapper.clickActive=true;}});}}}
edgeStartAnimation.launchArticles=function(articleNumber){window.slideShowAuto=false;mainArticleWrapper.next=articleNumber;mainArticleWrapper.next==mainArticleWrapper.total?$('.arrowLeft').css({opacity:'0.2',cursor:'auto'}):$('.arrowLeft').css({opacity:'1',cursor:'pointer'});mainArticleWrapper.next>0?$('.arrowRight').css({opacity:'1',cursor:'pointer'}):$('.arrowRight').css({opacity:'0.2',cursor:'auto'});mainArticleWrapper.move();currentArticle=articleNumber;var timerSetOut=setTimeout(function(){clearTimeout(timerSetOut);$('#socialContainer').hide();$('.articleContainer').show();},2000);};});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bottom_bar}","click",function(sym,e){if(SlidejQueryAnimater.clickactive&&slideAccesser.arrowUpEnd){SlidejQueryAnimater.clickactive=false;SlidejQueryAnimater.arrowActive=true;SlidejQueryAnimater.arrowDown=true;SlidejQueryAnimater.arrowUp=false;SlidejQueryAnimater.stopTimer();SlidejQueryAnimater.slideCounter();var currentButtonTrack=sym.$('arrow-up');currentButtonTrack.data('title','slide up arrow from slide '+slideAccesser.nextSlide);edgeClick(e,currentButtonTrack,'mousepress');};});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bottom_barCopy}","click",function(sym,e){if(SlidejQueryAnimater.clickactive&&slideAccesser.arrowDownEnd){SlidejQueryAnimater.arrowActive=true;SlidejQueryAnimater.arrowDown=false;SlidejQueryAnimater.arrowUp=true;SlidejQueryAnimater.clickactive=false;SlidejQueryAnimater.stopTimer();SlidejQueryAnimater.slideCounter();var currentButtonTrack=sym.$('arrow-down');currentButtonTrack.data('title','slide down arrow from slide '+slideAccesser.nextSlide);edgeClick(e,currentButtonTrack,'mousepress');};});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-up}","click",function(sym,e){if(SlidejQueryAnimater.clickactive&&slideAccesser.arrowUpEnd){SlidejQueryAnimater.clickactive=false;SlidejQueryAnimater.arrowActive=true;SlidejQueryAnimater.arrowDown=true;SlidejQueryAnimater.arrowUp=false;SlidejQueryAnimater.stopTimer();SlidejQueryAnimater.slideCounter();var currentButtonTrack=sym.$('arrow-up');currentButtonTrack.data('title','slide up arrow from slide '+slideAccesser.nextSlide);edgeClick(e,currentButtonTrack,'mousepress');};});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-down}","click",function(sym,e){if(SlidejQueryAnimater.clickactive&&slideAccesser.arrowDownEnd){SlidejQueryAnimater.arrowActive=true;SlidejQueryAnimater.arrowDown=false;SlidejQueryAnimater.arrowUp=true;SlidejQueryAnimater.clickactive=false;SlidejQueryAnimater.stopTimer();SlidejQueryAnimater.slideCounter();var currentButtonTrack=sym.$('arrow-down');currentButtonTrack.data('title','slide down arrow from slide '+slideAccesser.nextSlide);edgeClick(e,currentButtonTrack,'mousepress');};});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_share}","click",function(sym,e){var slide=sym.$("share");slide.data('title','goes to landing page "share"');slide.data('link',share);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_slideShow}","click",function(sym,e){var slide=sym.getSymbol("slideShow").getSymbolElement();slide.data('title','hm landing page from slide '+slideAccesser.nextSlide);slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_article_bttn}","click",function(sym,e){$('#socialContainer').hide();$('.articleContainer').show();window.slideShowAuto=false;slideTimer.start(mainArticleWrapper.articlesNames[mainArticleWrapper.next]);var currentButtonTrack=sym.$('article_bttn');currentButtonTrack.data('title','article button pressed');edgeClick(e,currentButtonTrack,'mousepress');});
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

//=========================================================

//Edge symbol: 'article_container'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_backButton}","click",function(sym,e){$('.articleContainer').hide();$('#socialContainer').show();window.slideShowAuto=true;slideTimer.stop();var currentButtonTrack=sym.$('backButton');currentButtonTrack.data('title','article back button pressed');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow_right}","click",function(sym,e){if(mainArticleWrapper.arrowLeftStop){mainArticleWrapper.next>0?mainArticleWrapper.next--:mainArticleWrapper.next=0;mainArticleWrapper.move();var currentButtonTrack=sym.$('arrow_right');currentButtonTrack.data('title','arrow right from slide '+mainArticleWrapper.next);edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow_left}","click",function(sym,e){if(mainArticleWrapper.arrowRightStop){mainArticleWrapper.next<mainArticleWrapper.total?mainArticleWrapper.next++:mainArticleWrapper.next=mainArticleWrapper.total;mainArticleWrapper.move();var currentButtonTrack=sym.$('arrow_left');currentButtonTrack.data('title','arrow left from slide '+mainArticleWrapper.next);edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
})("article_container");
//Edge symbol end:'article_container'

//=========================================================

//Edge symbol: 'mainArticle'
(function(symbolName){})("mainArticle");
//Edge symbol end:'mainArticle'

//=========================================================

//Edge symbol: 'mainContainerWrapper'
(function(symbolName){})("mainContainerWrapper");
//Edge symbol end:'mainContainerWrapper'

//=========================================================

//Edge symbol: 'item_wrapper'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_item_wrapper}","click",function(sym,e){var slide=sym.getSymbol("item_wrapper").getSymbolElement();slide.data('title','what to wear article');slide.data('link',what_to_wear);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_item_wrapper_12}","click",function(sym,e){var slide=sym.getSymbol("item_wrapper_12").getSymbolElement();slide.data('title','new neutrals 1 article');slide.data('link',new_neutrals_1);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_item_wrapper_feel_natural}","click",function(sym,e){var slide=sym.getSymbol("item_wrapper_feel_natural").getSymbolElement();slide.data('title','feel natural article');slide.data('link',feel_natural);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_item_wrapper_get_into_nude}","click",function(sym,e){var slide=sym.getSymbol("item_wrapper_get_into_nude").getSymbolElement();slide.data('title','get in nude article');slide.data('link',get_in_nude);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_item_wrapper_LDN}","click",function(sym,e){var slide=sym.getSymbol("item_wrapper_LDN").getSymbolElement();slide.data('title','LDN article');slide.data('link',LDN);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_item_wrapper_hm_debutes}","click",function(sym,e){var slide=sym.getSymbol("item_wrapper_hm_debutes").getSymbolElement();slide.data('title','hm debutes article');slide.data('link',hm_debutes);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_item_wrapper_lara_st_1}","click",function(sym,e){var slide=sym.getSymbol("item_wrapper_lara_st_1").getSymbolElement();slide.data('title','Lara Stone 1 article');slide.data('link',lara_stone_1);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_item_wrapper_lara_st_2}","click",function(sym,e){var slide=sym.getSymbol("item_wrapper_lara_st_2").getSymbolElement();slide.data('title','Lara Stone 2 article');slide.data('link',lara_stone_2);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_item_wrapper_new_nat_2}","click",function(sym,e){var slide=sym.getSymbol("item_wrapper_new_nat_2").getSymbolElement();slide.data('title','New Neutrals 2 article');slide.data('link',new_nautrals_2);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("item_wrapper");
//Edge symbol end:'item_wrapper'

//=========================================================

//Edge symbol: 'sideArticle'
(function(symbolName){})("sideArticle");
//Edge symbol end:'sideArticle'

//=========================================================

//Edge symbol: 'sideArticleWrapper'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_what_to_wear_thumb}","click",function(sym,e){if(slideAccesser1.clickactive){slideAccesser1.clickactive=false;SlidejQueryAnimater1.slide(0)}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_new_naturals_thumb}","click",function(sym,e){if(slideAccesser1.clickactive){slideAccesser1.clickactive=false;SlidejQueryAnimater1.slide(1)}});
//Edge binding end
})("sideArticleWrapper");
//Edge symbol end:'sideArticleWrapper'

//=========================================================

//Edge symbol: 'item_wrapper_inside'
(function(symbolName){})("item_wrapper_inside");
//Edge symbol end:'item_wrapper_inside'

//=========================================================

//Edge symbol: 'item_wrapper_1'
(function(symbolName){})("item_wrapper_1");
//Edge symbol end:'item_wrapper_1'

//=========================================================

//Edge symbol: 'item_wrapper_inside_1'
(function(symbolName){})("item_wrapper_inside_1");
//Edge symbol end:'item_wrapper_inside_1'

//=========================================================

//Edge symbol: 'sideArticle_1'
(function(symbolName){})("sideArticle_1");
//Edge symbol end:'sideArticle_1'

//=========================================================

//Edge symbol: 'sideArticleWrapper_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_new_naturals_thumb}","click",function(sym,e){mainArticleWrapper.next=1;mainArticleWrapper.move();var currentButtonTrack=sym.$('new_naturals_thumb');currentButtonTrack.data('title','new_naturals_thumb pressed');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_what_to_wear_thumb}","click",function(sym,e){mainArticleWrapper.next=0;mainArticleWrapper.move();var currentButtonTrack=sym.$('what_to_wear_thumb');currentButtonTrack.data('title','what_to_wear_thumb pressed');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_feeling_natural}","click",function(sym,e){mainArticleWrapper.next=2;mainArticleWrapper.move();var currentButtonTrack=sym.$('feeling_natural');currentButtonTrack.data('title','feeling_natural_thumb pressed');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_get_into_nude}","click",function(sym,e){mainArticleWrapper.next=3;mainArticleWrapper.move();var currentButtonTrack=sym.$('get_into_nude');currentButtonTrack.data('title','get_into_nude_thumb pressed');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_LDN}","click",function(sym,e){mainArticleWrapper.next=4;mainArticleWrapper.move();var currentButtonTrack=sym.$('LDN');currentButtonTrack.data('title','LDN_thumb pressed');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hm_debuts}","click",function(sym,e){mainArticleWrapper.next=5;mainArticleWrapper.move();var currentButtonTrack=sym.$('hm_debuts');currentButtonTrack.data('title','hm_debuts_thumb pressed');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_lara_stone_1}","click",function(sym,e){mainArticleWrapper.next=6;mainArticleWrapper.move();var currentButtonTrack=sym.$('lara_stone_1');currentButtonTrack.data('title','lara_stone_1_thumb pressed');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_lara_stone_2}","click",function(sym,e){mainArticleWrapper.next=7;mainArticleWrapper.move();var currentButtonTrack=sym.$('lara_stone_2');currentButtonTrack.data('title','lara_stone_2_thumb pressed');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_new_natural_2}","click",function(sym,e){mainArticleWrapper.next=8;mainArticleWrapper.move();var currentButtonTrack=sym.$('new_natural_2');currentButtonTrack.data('title','new_natural_2_thumb pressed');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
})("sideArticleWrapper_1");
//Edge symbol end:'sideArticleWrapper_1'

//=========================================================

//Edge symbol: 'item_wrapper_inside_2'
(function(symbolName){})("item_wrapper_feel_natural");
//Edge symbol end:'item_wrapper_feel_natural'

//=========================================================

//Edge symbol: 'item_wrapper_feel_natural_1'
(function(symbolName){})("item_wrapper_get_into_nude");
//Edge symbol end:'item_wrapper_get_into_nude'

//=========================================================

//Edge symbol: 'item_wrapper_get_into_nude_1'
(function(symbolName){})("item_wrapper_LDN");
//Edge symbol end:'item_wrapper_LDN'

//=========================================================

//Edge symbol: 'item_wrapper_LDN_1'
(function(symbolName){})("item_wrapper_hm_debutes");
//Edge symbol end:'item_wrapper_hm_debutes'

//=========================================================

//Edge symbol: 'item_wrapper_hm_debutes_1'
(function(symbolName){})("item_wrapper_lara_st_1");
//Edge symbol end:'item_wrapper_lara_st_1'

//=========================================================

//Edge symbol: 'item_wrapper_lara_st_2'
(function(symbolName){})("item_wrapper_lara_st_2");
//Edge symbol end:'item_wrapper_lara_st_2'

//=========================================================

//Edge symbol: 'item_wrapper_lara_st_3'
(function(symbolName){})("item_wrapper_new_nat_2");
//Edge symbol end:'item_wrapper_new_nat_2'
})(jQuery,AdobeEdge,"EDGE-14014572");