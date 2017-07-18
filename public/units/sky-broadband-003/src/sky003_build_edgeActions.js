
var slideAccesser;(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var slideContainerJquery=sym.getSymbol("slideShow1").getSymbolElement();var slideContainerJqueryWrapper=sym.getSymbol("slideShow1").getSymbol("slideShowContainer1").getSymbolElement();var animation=sym.getSymbol("slideShow1").getSymbol("slideShowContainer1").getSymbol("slide_1_animation_1");slideAccesser={edge_composition_ready:true,clickactive:true,currentSlideEdge:0,EdgetimeOut:'undefined',value:0,}
SlidejQueryAnimater={slide:function(value){var movement=(value)*-100+'%';slideAccesser.currentSlideEdge=value;slideContainerJqueryWrapper.animate({top:movement},{duration:500,complete:function(){slideAccesser.clickactive=true;if(slideAccesser.currentSlideEdge==0){animation.play();}}});}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_simple_setUp_bttn}","click",function(sym,e){if(slideAccesser.clickactive){slideAccesser.clickactive=false;SlidejQueryAnimater.slide(2);var currentButtonTrack=sym.$('simple_setUp_bttn');currentButtonTrack.data('title','leading to simple set up slide');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_work_on_all_devices_bttn}","click",function(sym,e){if(slideAccesser.clickactive){slideAccesser.clickactive=false;SlidejQueryAnimater.slide(1);var currentButtonTrack=sym.$('work_on_all_devices_bttn');currentButtonTrack.data('title','leading to works on all devices');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sky_bttn}","click",function(sym,e){if(slideAccesser.clickactive){slideAccesser.clickactive=false;SlidejQueryAnimater.slide(3);var currentButtonTrack=sym.$('sky_bttn');currentButtonTrack.data('title','leading to more ways to create the internet experience slide');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sky_bttnCopy}","click",function(sym,e){if(slideAccesser.clickactive){slideAccesser.clickactive=false;SlidejQueryAnimater.slide(0);var currentButtonTrack=sym.$('sky_bttnCopy');currentButtonTrack.data('title','sky Logo clicked leading to first slide');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_slideShow1}","click",function(sym,e){});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'slideShow'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();if(slideAccesser.edge_composition_ready){sym.play();}});
//Edge binding end
})("slideShow");
//Edge symbol end:'slideShow'

//=========================================================

//Edge symbol: 'slideShowContainer'
(function(symbolName){})("slideShowContainer");
//Edge symbol end:'slideShowContainer'

//=========================================================

//Edge symbol: 'slide_1_animation'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();slideAccesser.EdgetimeOut='undefined';if(slideAccesser.edge_composition_ready&&slideAccesser.currentSlideEdge==0){sym.play(0);}else{sym.stop(0);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();if(slideAccesser.currentSlideEdge==0){var time=3000
slideAccesser.EdgetimeOut=setTimeout(function(){clearTimeout(slideAccesser.EdgetimeOut);slideAccesser.EdgetimeOut='undefined';sym.play();},time);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2250,function(sym,e){sym.stop();if(slideAccesser.currentSlideEdge==0){var time=3000
if(slideAccesser.EdgetimeOut!='undefined'){clearTimeout(slideAccesser.EdgetimeOut);slideAccesser.EdgetimeOut='undefined';};slideAccesser.EdgetimeOut=setTimeout(function(){clearTimeout(slideAccesser.EdgetimeOut);slideAccesser.EdgetimeOut='undefined';sym.play();},time);}});
//Edge binding end
})("slide_1_animation");
//Edge symbol end:'slide_1_animation'

//=========================================================

//Edge symbol: 'SlideShow1'
(function(symbolName){})("slideShow1");
//Edge symbol end:'slideShow1'

//=========================================================

//Edge symbol: 'SlideShowContainer1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_main_content_2}","click",function(sym,e){slide=sym.$("main_content_2");slide.data('title','main unit click');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_main_content_3}","click",function(sym,e){slide=sym.$("main_content_3");slide.data('title','main unit click');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_main_content_5}","click",function(sym,e){slide=sym.$("main_content_5");slide.data('title','main unit click');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("slideShowContainer1");
//Edge symbol end:'slideShowContainer1'

//=========================================================

//Edge symbol: 'slide_1_animation_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();if(slideAccesser.currentSlideEdge==0){var time=3000
slideAccesser.EdgetimeOut=setTimeout(function(){clearTimeout(slideAccesser.EdgetimeOut);slideAccesser.EdgetimeOut='undefined';sym.play();},time);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();slideAccesser.EdgetimeOut='undefined';if(slideAccesser.edge_composition_ready&&slideAccesser.currentSlideEdge==0){sym.play(0);}else{sym.stop(0);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2250,function(sym,e){sym.stop();if(slideAccesser.currentSlideEdge==0){var time=3000
if(slideAccesser.EdgetimeOut!='undefined'){clearTimeout(slideAccesser.EdgetimeOut);slideAccesser.EdgetimeOut='undefined';};slideAccesser.EdgetimeOut=setTimeout(function(){clearTimeout(slideAccesser.EdgetimeOut);slideAccesser.EdgetimeOut='undefined';sym.play();},time);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_main_content_1}","click",function(sym,e){slide=sym.$("main_content_1");slide.data('title','main unit click');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("slide_1_animation_1");
//Edge symbol end:'slide_1_animation_1'
})(jQuery,AdobeEdge,"EDGE-7118844");