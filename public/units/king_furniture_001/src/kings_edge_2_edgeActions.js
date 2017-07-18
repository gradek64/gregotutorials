
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){EdgeAnimation.showSaleImage=function(){$('.sale').fadeIn('fast',function(){var timer=setTimeout(function(){$('.sale').fadeOut('slow');},3000);});}
sofaScroller={jQueryWrapper:$('.sofa_range'),timerObject:'undefined',slidesNumber:2,clickactive:true,arrowUp:true,arrowDown:true,timerOff:false,arrowActive:false,current:0,slideDelay:5000,clickActive:true,slide:function(slideNumber,clickCaller){this.clickactive=false;this.nextSlide=slideNumber;var leftArrow=$('.leftArrow');var rightArrow=$('.rightArrow');this.nextSlide>=this.slidesNumber?this.nextSlide=this.slidesNumber:false;this.nextSlide<0?this.nextSlide=0:false;if(this.nextSlide==2){leftArrow.css('opacity','1');}else{leftArrow.css('opacity','0.5');}
if(this.nextSlide==0){rightArrow.css('opacity','1');}else{rightArrow.css('opacity','0.5');}
var percent;switch(this.nextSlide){case 0:percent=8;this.nextSlide=1;break;case 1:percent=-20;break;case 2:percent=-26;break;}
var movement=this.nextSlide*percent+'%';this.jQueryWrapper.animate({left:movement},{duration:500,complete:function(){sofaScroller.clickactive=true;}});}}
mainScroller={slideContainerJqueryWrapper:$('.mainScrollerContainer'),slide:function(passedNext){var movement=(passedNext)*-100+'%';this.slideContainerJqueryWrapper.animate({top:movement},{duration:500,complete:function(){SlidejQueryAnimater.clickactive=true;}});},}
mainSlideChanger={swapSlides:function(slideNumber,sofaName){$('.slideShows').children().not(" .show"+slideNumber).css({zIndex:"auto"});$(".show"+slideNumber).appendTo($('.slideShows')).fadeIn(1000,function(){$('.slideShows').children().not(" .show"+slideNumber).hide();});var currentButtonTrack=$(this);currentButtonTrack.data('title','main sofa click brings up '+sofaName+' gallery');edgeClick(e,currentButtonTrack,'mousepress');},closeSlides:function(slideNumber,sofaName){$(".show"+slideNumber).fadeOut();$(".show0").appendTo($(".slideShows")).fadeIn();var currentButtonTrack=$(this);currentButtonTrack.data('title','close button closes '+sofaName+' gallery');edgeClick(e,currentButtonTrack,'mousepress');}}
smallThumbClasses=[{thumbParent:'.show1',thumbClass:'.slideShowJasperSmall',imagesLength:2,lastActive:0},{thumbParent:'.show2',thumbClass:'.slideShowDeltaSmall',imagesLength:2,lastActive:0},{thumbParent:'.show3',thumbClass:'.slideShowFelixSmall',imagesLength:2,lastActive:0},{thumbParent:'.show4',thumbClass:'.slideShowCloudSmall',imagesLength:2,lastActive:0},{thumbParent:'.show5',thumbClass:'.slideShowNeoSmall',imagesLength:2,lastActive:0}];var next=0;SlidejQueryAnimater={up:true,timer:true,timerObject:'undefined',slidesNumber:2,clickactive:true,arrowUp:true,arrowDown:true,timerOff:false,arrowActive:false,slideDelay:5000,slide:function(classArrayNumber,slideNumber,whichArrow){this.nextSlide=slideNumber;this.slideCount=smallThumbClasses[classArrayNumber].imagesLength;this.nextSlide>=this.slideCount?this.nextSlide=this.slideCount:false;this.nextSlide<0?this.nextSlide=0:false;switch(smallThumbClasses[classArrayNumber].thumbClass){case smallThumbClasses[0].thumbClass:smallThumbClasses[0].lastActive=this.nextSlide;break;case smallThumbClasses[1].thumbClass:smallThumbClasses[1].lastActive=this.nextSlide;break;case smallThumbClasses[2].thumbClass:smallThumbClasses[2].lastActive=this.nextSlide;break;case smallThumbClasses[3].thumbClass:smallThumbClasses[3].lastActive=this.nextSlide;break;case smallThumbClasses[4].thumbClass:smallThumbClasses[4].lastActive=this.nextSlide;break;};var currentButtonTrack=$(this);currentButtonTrack.data('title','arrow - '+whichArrow+' from gallery: '+smallThumbClasses[classArrayNumber].thumbClass+'.');edgeClick(e,currentButtonTrack,'mousepress');var movement=this.nextSlide*-33.33+'%';$(smallThumbClasses[classArrayNumber].thumbClass).animate({top:movement},{duration:300,complete:function(){var arrowUp=$(smallThumbClasses[classArrayNumber].thumbParent+' .arrowUp');var arrowDown=$(smallThumbClasses[classArrayNumber].thumbParent+' .arrowDown');(SlidejQueryAnimater.nextSlide==SlidejQueryAnimater.slidesNumber)?arrowUp.css({opacity:'0',cursor:'auto'}):arrowUp.css({opacity:'1',cursor:'pointer'});(SlidejQueryAnimater.nextSlide==0)?arrowDown.css({opacity:'0',cursor:'auto'}):arrowDown.css({opacity:'1',cursor:'pointer'})}});},}
qualityImages=[{slideShow:'.slideShowQuality',imagesLength:5,path:'images/quality_images/quality_',lastActive:1,dotcontrollerClass:'.slideShowController'}];sliderContainerClasses=[{slideShow:'.slideShowJasper',imagesLength:5,path:'images/large/jasper/large_jasper_',lastActive:1,slideShowSmall:'.slideShowJasperSmall',pathSmall:'images/small/jasper/small_jasper_'},{slideShow:'.slideShowDelta',imagesLength:5,path:'images/large/delta/large_delta_',lastActive:1,slideShowSmall:'.slideShowDeltaSmall',pathSmall:'images/small/delta/small_delta_'},{slideShow:'.slideShowFelix',imagesLength:5,path:'images/large/felix/large_felix_',lastActive:1,slideShowSmall:'.slideShowFelixSmall',pathSmall:'images/small/felix/small_felix_'},{slideShow:'.slideShowCloud',imagesLength:5,path:'images/large/cloud/large_cloud_',lastActive:1,slideShowSmall:'.slideShowCloudSmall',pathSmall:'images/small/cloud/small_cloud_'},{slideShow:'.slideShowNeo',imagesLength:5,path:'images/large/neo/large_neo_',lastActive:1,slideShowSmall:'.slideShowNeoSmall',pathSmall:'images/small/neo/small_neo_'},{slideShow:'.slideShowQuality',imagesLength:5,path:'images/quality_images/quality_',lastActive:1,dotcontrollerClass:'.slideShowController'}];slideChanger={loadImages:function(){$.each(sliderContainerClasses,function(index,element){for(i=2;i<=element.imagesLength;i++){$newImage=$("<img>").attr("src",sliderContainerClasses[index].path+i+".jpg").addClass("slide"+i).css({position:'absolute',left:'0%',top:'0%',width:'100%',height:'100%',display:'none'}).appendTo($(element.slideShow));}
if($(sliderContainerClasses[index].dotcontrollerClass)){slideChanger.activeDot(1,index)};});this.clickActive=true;},edgeImages:function(){$.each(slideShowContainer.children(),function(index,element){if(index!==(slideChanger.slideCount-1)){var classNumber=slideChanger.slideCount-index;}});slideChanger.clickActive=true;if(this.haveDots){this.activeDot(1)};},activateTimer:function(){if(this.timerActive){this.timerObject=setInterval(function(){++slideChanger.nextSlide;slideChanger.swapSlides(slideChanger.nextSlide,0);},slideChanger.interval)};},activeDot:function(index,classArrayNumber){var currentDot=$(sliderContainerClasses[classArrayNumber].dotcontrollerClass+' .dot'+index);if(sliderContainerClasses[classArrayNumber].previousDot){sliderContainerClasses[classArrayNumber].previousDot.css('backgroundColor','#ffffff')};currentDot.css('backgroundColor','#696969');sliderContainerClasses[classArrayNumber].previousDot=currentDot;},swapSlides:function(slideNumber,classArrayNumber){this.nextSlide=slideNumber;this.slideCount=sliderContainerClasses[classArrayNumber].imagesLength;this.nextSlide>this.slideCount?this.nextSlide=1:false;this.nextSlide<1?this.nextSlide=this.slideCount:false;this.clickActive=false;switch(sliderContainerClasses[classArrayNumber].slideShow){case sliderContainerClasses[0].slideShow:sliderContainerClasses[0].lastActive=this.nextSlide;break;case sliderContainerClasses[1].slideShow:sliderContainerClasses[1].lastActive=this.nextSlide;break;case sliderContainerClasses[2].slideShow:sliderContainerClasses[2].lastActive=this.nextSlide;break;case sliderContainerClasses[3].slideShow:sliderContainerClasses[3].lastActive=this.nextSlide;break;case sliderContainerClasses[4].slideShow:sliderContainerClasses[4].lastActive=this.nextSlide;break;case sliderContainerClasses[5].slideShow:sliderContainerClasses[5].lastActive=this.nextSlide;break;};var currentButtonTrack=$(this);currentButtonTrack.data('title','thumb number - '+this.nextSlide+' from gallery: '+sliderContainerClasses[classArrayNumber].slideShow+'.');edgeClick(e,currentButtonTrack,'mousepress');if($(sliderContainerClasses[classArrayNumber].dotcontrollerClass)){this.activeDot(slideChanger.nextSlide,classArrayNumber)};$(sliderContainerClasses[classArrayNumber].slideShow).children().not(" .slide"+slideChanger.nextSlide).css({zIndex:"auto"});$(sliderContainerClasses[classArrayNumber].slideShow+" .slide"+slideChanger.nextSlide).appendTo($(sliderContainerClasses[classArrayNumber].slideShow)).fadeIn(slideChanger.fadeDuration,function(){$(sliderContainerClasses[classArrayNumber].slideShow).children().not(" .slide"+slideChanger.nextSlide).hide();slideChanger.clickActive=true});}}
slideChanger.clickActive=false;slideChanger.haveDots=true;slideChanger.loadImages();sliderContainerClassesSmall=[{imagesLength:5,lastActive:1,slideShowSmall:'.slideShowJasperSmall',pathSmall:'images/small/jasper/small_jasper_'},{imagesLength:5,lastActive:1,slideShowSmall:'.slideShowDeltaSmall',pathSmall:'images/small/delta/small_delta_'},{imagesLength:5,lastActive:1,slideShowSmall:'.slideShowFelixSmall',pathSmall:'images/small/felix/small_felix_'},{imagesLength:5,lastActive:1,slideShowSmall:'.slideShowCloudSmall',pathSmall:'images/small/cloud/small_cloud_'},{imagesLength:5,lastActive:1,slideShowSmall:'.slideShowNeoSmall',pathSmall:'images/small/neo/small_neo_'}];slideChangerSmall={loadImages:function(){$.each(sliderContainerClassesSmall,function(index,element){for(i=1;i<=element.imagesLength;i++){$newImage=$("<img>").attr("src",sliderContainerClassesSmall[index].pathSmall+i+".jpg").addClass("slide"+i).css({position:'relative',margin:'0',width:'100%',height:'33.3%',cursor:'pointer'}).appendTo($(element.slideShowSmall));if(i==element.imagesLength){slideChangerSmall.assignClick(element.slideShowSmall,index);}}});},assignClick:function(elementSmallClass,classIndex){var thumbs=$(elementSmallClass).find('img');$.each(thumbs,function(index,element){$(this).click(function(){var slideNumber=index+1;slideChanger.swapSlides(slideNumber,classIndex);});});}}
slideChangerSmall.loadImages();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_products_bttn}","click",function(sym,e){mainScroller.slide(0);var currentButtonTrack=sym.$('products_bttn');currentButtonTrack.data('title','products main menu');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_quality_bttn}","click",function(sym,e){mainScroller.slide(1);var currentButtonTrack=sym.$('quality_bttn');currentButtonTrack.data('title','quality main menu');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_findAShowroom_bttn}","click",function(sym,e){slide=sym.$("findAShowroom_bttn");slide.data('title','find a showroom link');slide.data('link',showRooms);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_facebook}","click",function(sym,e){slide=sym.$("facebook");slide.data('title','facebook link');slide.data('link',facebook);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_watch_video}","click",function(sym,e){openVideo('KNG0044-R-30-N-640.mp4','intro',true,'KNG0044-R-30-N-640.jpg');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_logo}","click",function(sym,e){slide=sym.$("logo");slide.data('title','main click logo');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sale_picture}","click",function(sym,e){slide=sym.$("sale_picture");slide.data('title','sale picture click');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'main_slideShow'
(function(symbolName){})("main_slideShow");
//Edge symbol end:'main_slideShow'

//=========================================================

//Edge symbol: 'mainSlideShow'
(function(symbolName){})("mainSlideShow");
//Edge symbol end:'mainSlideShow'

//=========================================================

//Edge symbol: 'mainSlideShowContainer'
(function(symbolName){})("mainSlideShowContainer");
//Edge symbol end:'mainSlideShowContainer'

//=========================================================

//Edge symbol: 'mainScrollerGallery'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_arrow_scroller_left}","click",function(sym,e){if(sofaScroller.clickActive){sofaScroller.current++;sofaScroller.slide(sofaScroller.current,e.target);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow_scroller_right}","click",function(sym,e){if(sofaScroller.clickActive){sofaScroller.current--;sofaScroller.slide(sofaScroller.current,e.target);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_left}","click",function(sym,e){if(sofaScroller.clickActive){sofaScroller.current++;sofaScroller.slide(sofaScroller.current,e.target);var currentButtonTrack=sym.$('left');currentButtonTrack.data('title','main slide show left arrow');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_right}","click",function(sym,e){if(sofaScroller.clickActive){sofaScroller.current--;sofaScroller.slide(sofaScroller.current,e.target);var currentButtonTrack=sym.$('right');currentButtonTrack.data('title','main slide show right arrow');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
})("mainScrollerGallery");
//Edge symbol end:'mainScrollerGallery'

//=========================================================

//Edge symbol: 'sofa_range_sym'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_jasper}","click",function(sym,e){mainSlideChanger.swapSlides(1,'Jasper');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_delta}","click",function(sym,e){mainSlideChanger.swapSlides(2,'Delta');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_felix}","click",function(sym,e){mainSlideChanger.swapSlides(3,'Felix');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_king_cloud}","click",function(sym,e){mainSlideChanger.swapSlides(4,'King Cloud');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_neo}","click",function(sym,e){mainSlideChanger.swapSlides(5,'Neo');});
//Edge binding end
})("sofa_range_sym");
//Edge symbol end:'sofa_range_sym'

//=========================================================

//Edge symbol: 'selectedGallery'
(function(symbolName){})("selectedGallery");
//Edge symbol end:'selectedGallery'

//=========================================================

//Edge symbol: 'slideShowDelta'
(function(symbolName){})("slideShowDelta");
//Edge symbol end:'slideShowDelta'

//=========================================================

//Edge symbol: 'Delta_slideShow'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_arrow_up}","click",function(sym,e){smallThumbClasses[1].lastActive++;SlidejQueryAnimater.slide(1,smallThumbClasses[1].lastActive,'up');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow_down}","click",function(sym,e){smallThumbClasses[1].lastActive--;SlidejQueryAnimater.slide(1,smallThumbClasses[1].lastActive,'down');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_gallery_close}","click",function(sym,e){mainSlideChanger.closeSlides(2,'Delta');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_slideShowDelta}","click",function(sym,e){slide=sym.getSymbol("slideShowDelta").getSymbolElement();slide.data('title','slideshow click');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("Delta_slideShow");
//Edge symbol end:'Delta_slideShow'

//=========================================================

//Edge symbol: 'delta_small'
(function(symbolName){})("delta_small");
//Edge symbol end:'delta_small'

//=========================================================

//Edge symbol: 'Delta_slideShow_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_arrow_up}","click",function(sym,e){smallThumbClasses[4].lastActive++;SlidejQueryAnimater.slide(4,smallThumbClasses[4].lastActive,'up');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow_down}","click",function(sym,e){smallThumbClasses[4].lastActive--;SlidejQueryAnimater.slide(4,smallThumbClasses[4].lastActive,'down');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_gallery_close}","click",function(sym,e){mainSlideChanger.closeSlides(5,'Neo');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_slideShowNeo}","click",function(sym,e){slide=sym.getSymbol("slideShowNeo").getSymbolElement();slide.data('title','slideshow click');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("Neo_slideShow");
//Edge symbol end:'Neo_slideShow'

//=========================================================

//Edge symbol: 'slideShowDelta_1'
(function(symbolName){})("slideShowNeo");
//Edge symbol end:'slideShowNeo'

//=========================================================

//Edge symbol: 'all_slideshows'
(function(symbolName){})("all_slideshows");
//Edge symbol end:'all_slideshows'

//=========================================================

//Edge symbol: 'delta_small_container'
(function(symbolName){})("delta_small_container");
//Edge symbol end:'delta_small_container'

//=========================================================

//Edge symbol: 'delta_small_container_1'
(function(symbolName){})("neo_small_container");
//Edge symbol end:'neo_small_container'

//=========================================================

//Edge symbol: 'delta_small_1'
(function(symbolName){})("neo_small");
//Edge symbol end:'neo_small'

//=========================================================

//Edge symbol: 'mainScroller'
(function(symbolName){})("mainScroller");
//Edge symbol end:'mainScroller'

//=========================================================

//Edge symbol: 'mainScrollerContainer'
(function(symbolName){})("mainScrollerContainer");
//Edge symbol end:'mainScrollerContainer'

//=========================================================

//Edge symbol: 'qualityGalleryContainer'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_qualityGalleryContainer}","click",function(sym,e){slide=sym.getSymbol("qualityGalleryContainer").getSymbolElement();slide.data('title','slideshow quality click');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("qualityGallery");
//Edge symbol end:'qualityGallery'

//=========================================================

//Edge symbol: 'qualityGalleryContainer'
(function(symbolName){})("qualityGalleryContainer");
//Edge symbol end:'qualityGalleryContainer'

//=========================================================

//Edge symbol: 'gallery_controller_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_bttn1}","click",function(sym,e){if(slideChanger.clickActive){if(slideChanger.timerObject){clearInterval(slideChanger.timerObject);slideChanger.timerObject='undefined';}
slideChanger.swapSlides(1,5);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bttn2}","click",function(sym,e){if(slideChanger.clickActive){if(slideChanger.timerObject){clearInterval(slideChanger.timerObject);slideChanger.timerObject='undefined';}
slideChanger.swapSlides(2,5);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_gallery_arrow_left}","click",function(sym,e){if(slideChanger.clickActive){if(slideChanger.timerObject){clearInterval(slideChanger.timerObject);slideChanger.timerObject='undefined';};sliderContainerClasses[5].lastActive--;slideChanger.swapSlides(sliderContainerClasses[5].lastActive,5);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_gallery_arrow_right}","click",function(sym,e){if(slideChanger.clickActive){if(slideChanger.timerObject){clearInterval(slideChanger.timerObject);slideChanger.timerObject='undefined';}
sliderContainerClasses[5].lastActive++;slideChanger.swapSlides(sliderContainerClasses[5].lastActive,5);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bttn3}","click",function(sym,e){if(slideChanger.clickActive){if(slideChanger.timerObject){clearInterval(slideChanger.timerObject);slideChanger.timerObject='undefined';}
slideChanger.swapSlides(3,5);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bttn4}","click",function(sym,e){if(slideChanger.clickActive){if(slideChanger.timerObject){clearInterval(slideChanger.timerObject);slideChanger.timerObject='undefined';}
slideChanger.swapSlides(4,5);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bttn5}","click",function(sym,e){if(slideChanger.clickActive){if(slideChanger.timerObject){clearInterval(slideChanger.timerObject);slideChanger.timerObject='undefined';}
slideChanger.swapSlides(5,5);}});
//Edge binding end
})("gallery_controller_1");
//Edge symbol end:'gallery_controller_1'

//=========================================================

//Edge symbol: 'Delta_slideShow_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_arrow_up}","click",function(sym,e){smallThumbClasses[2].lastActive++;SlidejQueryAnimater.slide(2,smallThumbClasses[2].lastActive,'up');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow_down}","click",function(sym,e){smallThumbClasses[2].lastActive--;SlidejQueryAnimater.slide(2,smallThumbClasses[2].lastActive,'down');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_gallery_close}","click",function(sym,e){mainSlideChanger.closeSlides(3,'Felix');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_slideShowFelix}","click",function(sym,e){slide=sym.getSymbol("slideShowFelix").getSymbolElement();slide.data('title','slideshow click');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("Felix_slideShow");
//Edge symbol end:'Felix_slideShow'

//=========================================================

//Edge symbol: 'delta_small_container_1'
(function(symbolName){})("felix_small_container");
//Edge symbol end:'felix_small_container'

//=========================================================

//Edge symbol: 'delta_small_1'
(function(symbolName){})("felix_small");
//Edge symbol end:'felix_small'

//=========================================================

//Edge symbol: 'slideShowDelta_1'
(function(symbolName){})("slideShowFelix");
//Edge symbol end:'slideShowFelix'

//=========================================================

//Edge symbol: 'Delta_slideShow_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_arrow_up}","click",function(sym,e){smallThumbClasses[0].lastActive++;SlidejQueryAnimater.slide(0,smallThumbClasses[0].lastActive,'up');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow_down}","click",function(sym,e){smallThumbClasses[0].lastActive--;SlidejQueryAnimater.slide(0,smallThumbClasses[0].lastActive,'down');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_gallery_close}","click",function(sym,e){mainSlideChanger.closeSlides(1,'Jasper');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_slideShowJasper}","click",function(sym,e){slide=sym.getSymbol("slideShowJasper").getSymbolElement();slide.data('title','slideshow click');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("Jasper_slideShow");
//Edge symbol end:'Jasper_slideShow'

//=========================================================

//Edge symbol: 'delta_small_1'
(function(symbolName){})("jasper_small");
//Edge symbol end:'jasper_small'

//=========================================================

//Edge symbol: 'delta_small_container_1'
(function(symbolName){})("jasper_small_container");
//Edge symbol end:'jasper_small_container'

//=========================================================

//Edge symbol: 'slideShowDelta_1'
(function(symbolName){})("slideShowJasper");
//Edge symbol end:'slideShowJasper'

//=========================================================

//Edge symbol: 'Delta_slideShow_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_gallery_close}","click",function(sym,e){mainSlideChanger.closeSlides(4,'Cloud King');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow_up}","click",function(sym,e){smallThumbClasses[3].lastActive++;SlidejQueryAnimater.slide(3,smallThumbClasses[3].lastActive,'up');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow_down}","click",function(sym,e){smallThumbClasses[3].lastActive--;SlidejQueryAnimater.slide(3,smallThumbClasses[3].lastActive,'down');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_slideShowCloud}","click",function(sym,e){slide=sym.getSymbol("slideShowCloud").getSymbolElement();slide.data('title','slideshow click');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("Cloud_slideShow");
//Edge symbol end:'Cloud_slideShow'

//=========================================================

//Edge symbol: 'delta_small_container_1'
(function(symbolName){})("cloud_small_container");
//Edge symbol end:'cloud_small_container'

//=========================================================

//Edge symbol: 'slideShowDelta_1'
(function(symbolName){})("slideShowCloud");
//Edge symbol end:'slideShowCloud'

//=========================================================

//Edge symbol: 'delta_small_1'
(function(symbolName){})("cloud_small");
//Edge symbol end:'cloud_small'

//=========================================================

//Edge symbol: 'delta_small_1'
(function(symbolName){})("delta_small_1");
//Edge symbol end:'delta_small_1'
})(jQuery,AdobeEdge,"EDGE-18192186");