
(function($,Edge,compId){var activeButton;var classNumber;var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){activeButton=null;classNumber=0;var slideContainerJquery=sym.getSymbol("slideShow").getSymbolElement();var slideContainerJqueryWrapper=sym.getSymbol("slideShow").getSymbol("slideShowContainer").getSymbolElement();slideAccesser={edge_composition_ready:true,clickactive:true,currentSlideEdge:0,EdgetimeOut:'undefined',value:1,}
SlidejQueryAnimater={slide:function(value){var movement=value*(-100)+'%';slideAccesser.currentSlideEdge=value;slideContainerJqueryWrapper.animate({left:movement},{duration:100,complete:function(){slideAccesser.clickactive=true;}});}}
var selfieHover=sym.getSymbol("button_swap_sym").getSymbolElement();var textRed=sym.getSymbol("button_swap_sym").$("selfie_text_red");var textWhite=sym.getSymbol("button_swap_sym").$("selfie_text_white");var bgWhite=sym.getSymbol("button_swap_sym").$("button_swap_white_bg");var bgRed=sym.getSymbol("button_swap_sym").$("button_swap_red_bg");selfieHover.hover(function(){textRed.fadeIn('fast');bgWhite.slideDown();},function(){textRed.fadeOut('fast');bgWhite.slideUp();});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selfie1_sym}","mouseover",function(sym,e){var currentButton=$('.selfie1')[0];if(activeButton!=currentButton){$('.selfie1 .hover_state').animate({'opacity':1},100,function(){});var not1=sym.$('not1');not1.fadeIn(200);}
SlidejQueryAnimater.slide(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selfie2_sym}","mouseover",function(sym,e){var currentButton=$('.selfie2')[0];if(activeButton!==currentButton){$('.selfie2 .hover_state').animate({'opacity':1},100,function(){});var not2=sym.$('not2');not2.fadeIn(400);}
SlidejQueryAnimater.slide(1);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selfie1_sym}","mouseout",function(sym,e){var currentButton=$('.selfie1')[0];if(activeButton!=currentButton){$('.selfie1 .hover_state').animate({'opacity':0},100,function(){});var not1=sym.$('not1');not1.fadeOut(200);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selfie2_sym}","mouseout",function(sym,e){var currentButton=$('.selfie2')[0];if(activeButton!=currentButton){$('.selfie2 .hover_state').animate({'opacity':0},100,function(){});var not2=sym.$('not2');not2.fadeOut(400);}
console.log(activeButton);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selfie1_sym}","click",function(sym,e){if(activeButton!==null){console.log(classNumber);var lastActive=$(activeButton);lastActive.find('.hover_state').animate({'opacity':0},100,function(){});var not=sym.$('not'+classNumber);not.fadeOut(200);}
activeButton=$('.selfie1')[0];classNumber=1;});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selfie2_sym}","click",function(sym,e){if(activeButton!==null){console.log(classNumber);var lastActive=$(activeButton);lastActive.find('.hover_state').animate({'opacity':0},100,function(){});var not=sym.$('not'+classNumber);not.fadeOut(200);}
activeButton=$('.selfie2')[0];classNumber=2;});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selfie3_sym}","mouseout",function(sym,e){var currentButton=$('.selfie3')[0];if(activeButton!=currentButton){$('.selfie3 .hover_state').animate({'opacity':0},100,function(){});var not3=sym.$('not3');not3.fadeOut(400);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selfie3_sym}","mouseover",function(sym,e){var currentButton=$('.selfie3')[0];if(activeButton!==currentButton){$('.selfie3 .hover_state').animate({'opacity':1},100,function(){});var not3=sym.$('not3');not3.fadeIn(400);}
SlidejQueryAnimater.slide(2);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selfie3_sym}","click",function(sym,e){if(activeButton!==null){console.log(classNumber);var lastActive=$(activeButton);lastActive.find('.hover_state').animate({'opacity':0},100,function(){});var not=sym.$('not'+classNumber);not.fadeOut(200);}
activeButton=$('.selfie3')[0];classNumber=3;});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selfie4_sym}","click",function(sym,e){if(activeButton!==null){console.log(classNumber);var lastActive=$(activeButton);lastActive.find('.hover_state').animate({'opacity':0},100,function(){});var not=sym.$('not'+classNumber);not.fadeOut(200);}
activeButton=$('.selfie4')[0];classNumber=4;});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selfie4_sym}","mouseover",function(sym,e){var currentButton=$('.selfie4')[0];if(activeButton!==currentButton){$('.selfie4 .hover_state').animate({'opacity':1},100,function(){});var not4=sym.$('not4');not4.fadeIn(400);}
SlidejQueryAnimater.slide(3);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selfie4_sym}","mouseout",function(sym,e){var currentButton=$('.selfie4')[0];if(activeButton!=currentButton){$('.selfie4 .hover_state').animate({'opacity':0},100,function(){});var not4=sym.$('not4');not4.fadeOut(400);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_selfie_swap}","click",function(sym,e){slide=sym.$("bg");slide.data('title','main page link');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button_swap_sym}","click",function(sym,e){slide=sym.$("bg");slide.data('title','main page link');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
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

//Edge symbol: 'not1'
(function(symbolName){})("not1");
//Edge symbol end:'not1'

//=========================================================

//Edge symbol: 'selfie1_sym'
(function(symbolName){})("selfie1_sym");
//Edge symbol end:'selfie1_sym'

//=========================================================

//Edge symbol: 'not1_1'
(function(symbolName){})("not2");
//Edge symbol end:'not2'

//=========================================================

//Edge symbol: 'not2_1'
(function(symbolName){})("not3");
//Edge symbol end:'not3'

//=========================================================

//Edge symbol: 'not3_1'
(function(symbolName){})("not4");
//Edge symbol end:'not4'

//=========================================================

//Edge symbol: 'selfie2_sym'
(function(symbolName){})("selfie2_sym");
//Edge symbol end:'selfie2_sym'

//=========================================================

//Edge symbol: 'selfie3_sym'
(function(symbolName){})("selfie3_sym");
//Edge symbol end:'selfie3_sym'

//=========================================================

//Edge symbol: 'selfie4_sym'
(function(symbolName){})("selfie4_sym");
//Edge symbol end:'selfie4_sym'

//=========================================================

//Edge symbol: 'button_swap_sym'
(function(symbolName){})("button_swap_sym");
//Edge symbol end:'button_swap_sym'
})(jQuery,AdobeEdge,"EDGE-4102592");