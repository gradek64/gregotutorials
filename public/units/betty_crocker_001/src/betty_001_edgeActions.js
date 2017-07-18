
var currentLink;var currentDesc;(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){jQuery.easing.def='easeOutExpo';var slideContainerJquery=$('.slideShowContainer');var viewRecipeButton=sym.$('view_recipe');var recipeImpressions=[cakePopsLinkImp,bunnyLinkImp,nestCakeLinkImp,cupCakeLinkImp];var backButton=sym.$('back');SlidejQueryAnimater={currentSlide:0,slide:function(value){var movement=(value)*-100+'%';this.currentSlide=value;if(value!=0){viewRecipeButton.fadeIn()
backButton.fadeIn();}else{viewRecipeButton.fadeOut();backButton.fadeOut();}
slideContainerJquery.animate({top:movement},{duration:1000,easing:'easeOutExpo',complete:function(){if(value!=0){var randomNumber=Math.floor(Math.random()*100000000);var source=recipeImpressions[value-1];var img=new Image();img.src=source+randomNumber+'?';}}});}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_view_recipe}","click",function(sym,e){var slideLinkVars=[clickTag,cakePopsLink,bunnyLink,nestCakeLink,cupCakeLink];var slideLinkVarName=['main page','cakePops','easter Bunny','nest cake','cup cake'];var currentSlide=SlidejQueryAnimater.currentSlide
switch(currentSlide){case 1:currentLink=slideLinkVars[currentSlide];currentDesc=slideLinkVarName[currentSlide];break;case 2:currentLink=slideLinkVars[currentSlide];currentDesc=slideLinkVarName[currentSlide];break;case 3:currentLink=slideLinkVars[currentSlide];currentDesc=slideLinkVarName[currentSlide];break;case 4:currentLink=slideLinkVars[currentSlide];currentDesc=slideLinkVarName[currentSlide];break;default:currentLink=slideLinkVars[0];currentDesc=slideLinkVarName[0];}
slide=sym.$("view_recipe")
slide.data('title',currentDesc+' landing page from visit page bttn');slide.data('link',currentLink);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_youTube_bttn}","click",function(sym,e){slide=sym.$("youTube_bttn")
slide.data('title','you Tube link');slide.data('link',YouTubeLink);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_twitter_bttn}","click",function(sym,e){slide=sym.$("twitter_bttn")
slide.data('title','twitter link');slide.data('link',twitterLink);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_facebook_bttn}","click",function(sym,e){slide=sym.$("facebook_bttn")
slide.data('title','facebook link');slide.data('link',facebookLink);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_back}","click",function(sym,e){var slideLinkVarName=['main page','cakePops','easter Bunny','nest cake','cup cake'];var currentDesc;var currentSlide=SlidejQueryAnimater.currentSlide;console.log('currentSlide '+currentSlide);switch(currentSlide){case 1:currentDesc=slideLinkVarName[currentSlide];break;case 2:currentDesc=slideLinkVarName[currentSlide];break;case 3:currentDesc=slideLinkVarName[currentSlide];break;case 4:currentDesc=slideLinkVarName[currentSlide];break;default:currentDesc=slideLinkVarName[0];}
var currentButtonTrack=sym.$('back');currentButtonTrack.data('title','back bttn from '+currentDesc+' leading to main slide');edgeClick(e,currentButtonTrack,'mousepress');SlidejQueryAnimater.slide(0);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'SlideShow'
(function(symbolName){})("slideShow");
//Edge symbol end:'slideShow'

//=========================================================

//Edge symbol: 'slieShowContainer'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_cake_pops2}","click",function(sym,e){var slideLinkVars=[clickTag,cakePopsLink,bunnyLink,nestCakeLink,cupCakeLink];var slideLinkVarName=['main page','cakePops','easter Bunny','nest cake','cup cake'];var currentSlide=SlidejQueryAnimater.currentSlide
switch(currentSlide){case 1:currentLink=slideLinkVars[currentSlide];currentDesc=slideLinkVarName[currentSlide];break;case 2:currentLink=slideLinkVars[currentSlide];currentDesc=slideLinkVarName[currentSlide];break;case 3:currentLink=slideLinkVars[currentSlide];currentDesc=slideLinkVarName[currentSlide];break;case 4:currentLink=slideLinkVars[currentSlide];currentDesc=slideLinkVarName[currentSlide];break;default:currentLink=slideLinkVars[0];currentDesc=slideLinkVarName[0];}
var slide=sym.$("cupcakes2")
slide.data('title',currentDesc+' landing page from visit page bttn');slide.data('link',currentLink);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bunny2}","click",function(sym,e){var slideLinkVars=[clickTag,cakePopsLink,bunnyLink,nestCakeLink,cupCakeLink];var slideLinkVarName=['main page','cakePops','easter Bunny','nest cake','cup cake'];var currentSlide=SlidejQueryAnimater.currentSlide
switch(currentSlide){case 1:currentLink=slideLinkVars[currentSlide];currentDesc=slideLinkVarName[currentSlide];break;case 2:currentLink=slideLinkVars[currentSlide];currentDesc=slideLinkVarName[currentSlide];break;case 3:currentLink=slideLinkVars[currentSlide];currentDesc=slideLinkVarName[currentSlide];break;case 4:currentLink=slideLinkVars[currentSlide];currentDesc=slideLinkVarName[currentSlide];break;default:currentLink=slideLinkVars[0];currentDesc=slideLinkVarName[0];}
var slide=sym.$("cupcakes2")
slide.data('title',currentDesc+' landing page from visit page bttn');slide.data('link',currentLink);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nest_cake2}","click",function(sym,e){var slideLinkVars=[clickTag,cakePopsLink,bunnyLink,nestCakeLink,cupCakeLink];var slideLinkVarName=['main page','cakePops','easter Bunny','nest cake','cup cake'];var currentSlide=SlidejQueryAnimater.currentSlide
switch(currentSlide){case 1:currentLink=slideLinkVars[currentSlide];currentDesc=slideLinkVarName[currentSlide];break;case 2:currentLink=slideLinkVars[currentSlide];currentDesc=slideLinkVarName[currentSlide];break;case 3:currentLink=slideLinkVars[currentSlide];currentDesc=slideLinkVarName[currentSlide];break;case 4:currentLink=slideLinkVars[currentSlide];currentDesc=slideLinkVarName[currentSlide];break;default:currentLink=slideLinkVars[0];currentDesc=slideLinkVarName[0];}
var slide=sym.$("cupcakes2")
slide.data('title',currentDesc+' landing page from visit page bttn');slide.data('link',currentLink);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_cupcakes2}","click",function(sym,e){var slideLinkVars=[clickTag,cakePopsLink,bunnyLink,nestCakeLink,cupCakeLink];var slideLinkVarName=['main page','cakePops','easter Bunny','nest cake','cup cake'];var currentSlide=SlidejQueryAnimater.currentSlide
switch(currentSlide){case 1:currentLink=slideLinkVars[currentSlide];currentDesc=slideLinkVarName[currentSlide];break;case 2:currentLink=slideLinkVars[currentSlide];currentDesc=slideLinkVarName[currentSlide];break;case 3:currentLink=slideLinkVars[currentSlide];currentDesc=slideLinkVarName[currentSlide];break;case 4:currentLink=slideLinkVars[currentSlide];currentDesc=slideLinkVarName[currentSlide];break;default:currentLink=slideLinkVars[0];currentDesc=slideLinkVarName[0];}
var slide=sym.$("cupcakes2")
slide.data('title',currentDesc+' landing page from visit page bttn');slide.data('link',currentLink);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("slieShowContainer");
//Edge symbol end:'slieShowContainer'

//=========================================================

//Edge symbol: 'main'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_cake_pops}","click",function(sym,e){SlidejQueryAnimater.slide(1);var currentButtonTrack=sym.$('cake_pops');currentButtonTrack.data('title','bttn leading to cake pops slide');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bunny}","click",function(sym,e){SlidejQueryAnimater.slide(2);var currentButtonTrack=sym.$('bunny');currentButtonTrack.data('title','bttn leading to easter bunny slide');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nest_cake}","click",function(sym,e){SlidejQueryAnimater.slide(3);var currentButtonTrack=sym.$('nest_cake');currentButtonTrack.data('title','bttn leading to nest cake slide');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_cupcakes}","click",function(sym,e){SlidejQueryAnimater.slide(4);var currentButtonTrack=sym.$('cupcakes');currentButtonTrack.data('title','bttn leading to cup cakes slide');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_video}","click",function(sym,e){openVideo('betty_video-640.m3u8','intro',true,'betty_video-640.jpg');});
//Edge binding end
})("main");
//Edge symbol end:'main'
})(jQuery,AdobeEdge,"EDGE-23542921");