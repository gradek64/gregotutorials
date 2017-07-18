
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var delay=4000,current=1;all=3,timer=setInterval(function(){current>all?current=1:current++;$(".review"+current).appendTo($(".reviews")).fadeIn(1000,function(){$(".reviews").children().not(".review"+current).css({display:'none'});});},delay);var container=$('.slideShowContainer'),allImages=13,path='images/sized_images/image';SlidejQueryAnimater={clickActive:true,currentSlide:4,loadImages:function(){for(i=0;i<allImages;++i){$newImage=$("<img>").attr("src",path+(i+1)+".jpg").addClass("image"+(i)+" slides").css('opacity',0).appendTo(container);if(i==allImages-1){console.log(i);$('.image'+SlidejQueryAnimater.currentSlide).prependTo(container).css('opacity',1);}}
this.clickActive=true;this.assignClick();},assignClick:function(){$.each($('.slides'),function(index,element){$(element).click(function(e){});});},changeSlide:function(direction){if(direction=="down")this.currentSlide<=0?this.currentSlide=allImages-1:this.currentSlide--;if(direction=="up")this.currentSlide>=allImages-1?this.currentSlide=0:this.currentSlide++;this.clickActive=false;$(".image"+this.currentSlide).prependTo(container).animate({opacity:'0.99'},1000,function(){container.children().not(".image"+SlidejQueryAnimater.currentSlide).css({opacity:'0.01'});SlidejQueryAnimater.clickActive=true;});}}
SlidejQueryAnimater.loadImages();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_photos}","click",function(sym,e){$('.slideShow').appendTo($('#Stage')).fadeIn(1000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_trailer}","click",function(sym,e){openVideo('StickMan-final-generic-720HD-640.mp4','intro reopened',true,'StickMan-final-generic-720HD-640.jpg');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_content_card}","click",function(sym,e){var thumb="content_card";slide=sym.$(thumb);slide.data('title','content card main link');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_reviews}","click",function(sym,e){var thumb="reviews";slide=sym.$(thumb);slide.data('title','content card main link');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'slideShow'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_arrow_right}","click",function(sym,e){SlidejQueryAnimater.changeSlide('up');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow_left}","click",function(sym,e){SlidejQueryAnimater.changeSlide('down');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_close_bttn}","click",function(sym,e){$('.slideShow').fadeOut('fast');});
//Edge binding end
})("slideShow");
//Edge symbol end:'slideShow'

//=========================================================

//Edge symbol: 'slideShowContainer'
(function(symbolName){})("slideShowContainer");
//Edge symbol end:'slideShowContainer'

//=========================================================

//Edge symbol: 'reviews'
(function(symbolName){})("reviews");
//Edge symbol end:'reviews'
})(jQuery,AdobeEdge,"EDGE-23851788");