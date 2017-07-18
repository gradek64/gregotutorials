
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_menu-tab}","click",function(sym,e){SlideChanger.swapSlides('menuContent','stage',true);var currentButtonTrack=sym.$('menu-tab');currentButtonTrack.data('title','main manu tab');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var stage=$('#Stage');SlideChanger={swapSlides:function(slideClass,parentClass,menuTab){$("."+slideClass).css({display:'none'});$('.side_menu').css('left','105%');if(parentClass=="stage"){if(!menuTab){$('.laserEffect').css('zIndex','10');$('.laserEffect').animate({left:"110%",},300,function(){$(this).css('left','-10%');});}
$("."+slideClass).appendTo(stage).fadeIn(300,function(){$('.side_menu').animate({left:"62.85%",},300,function(){});});if(slideClass=='trailer'){MyVideo.play('in');edgeStartAnimation.closeVideoExternalVar=true;}}}}
var videoSource;edgeStartAnimation={closeVideoExternal:function(){MyVideo.play('out');}}
MyVideo={play:function(state){if(state=='in'){if($('.bgVideo').has("video").length){videoSource[0].pause();}
$('.videoContainer').hide();sym.getSymbol("trailer").getSymbol("animate_vid_container").play('playVideo');$('.videoContainer').fadeIn('slow');}
if(state=='out'){if($('.bgVideo').has("video").length){videoSource[0].play(0);}
sym.getSymbol("trailer").getSymbol("animate_vid_container").playReverse();$('.videoContainer').fadeOut('slow');}}};jQuery.easing.def='easeInOutQuint';var slideContainerJquery=$(".slideShow1");var slideContainerJqueryWrapper=$(".slideShowContainer1");slideAccesser={edge_composition_ready:true,clickactive:true,currentSlideEdge:0,EdgetimeOut:'undefined',value:1,previousSlide:0,totalSlides:3,direction:'left',setTimer:false,timerDelay:4000}
SlidejQueryAnimater={timerObject:'undefined',timer:function(){if(slideAccesser.setTimer){this.timerObject=setInterval(function(){var next=slideAccesser.previousSlide;next++;SlidejQueryAnimater.slide(next,'left');},slideAccesser.timerDelay);}},slide:function(currentSlide,direction){direction=direction||slideAccesser.direction;var movement=0;var value;direction=='left'?value=-1:value=1;if(slideAccesser.previousSlide!=currentSlide){currentSlide==(slideAccesser.totalSlides)?currentSlide=0:false;currentSlide<0?currentSlide=(slideAccesser.totalSlides-1):false;$('.image_'+currentSlide).appendTo(slideContainerJqueryWrapper)
$('.image_'+currentSlide).css('left',value*(-100)+'%');movement=value*(100);slideAccesser.previousSlide=currentSlide;}
slideAccesser.currentSlideEdge=currentSlide;slideContainerJqueryWrapper.animate({left:movement+'%'},{duration:1000,complete:function(){slideAccesser.clickactive=true;$('.image_'+currentSlide).css('left','0');$.each(slideContainerJqueryWrapper.children(),function(index,element){$(element).not('.image_'+currentSlide).css({left:value*(-100)+'%'});});slideContainerJqueryWrapper.css('left','0');}});}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pre-order}","click",function(sym,e){slide=sym.$("pre-order");slide.data('title','ore order link');slide.data('link',pre_order_link);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_main-menu}","click",function(sym,e){slide=sym.$("main-menu");slide.data('title','top bar main menu');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'side_menu'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_close_menuCopy}","click",function(sym,e){$(".menuContent").fadeOut();var currentButtonTrack=sym.$('close_menuCopy');currentButtonTrack.data('title','close side Menu bttn');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_zombie_bttn}","click",function(sym,e){SlideChanger.swapSlides('zombies_slide','stage');$(".menuContent").fadeOut('slow');var currentButtonTrack=sym.$('zombie_bttn');currentButtonTrack.data('title','zombie  tab');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_media_bttn}","click",function(sym,e){SlideChanger.swapSlides('trailer','stage');$(".menuContent").fadeOut('slow');var currentButtonTrack=sym.$('media_bttn');currentButtonTrack.data('title','media tab');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_buy_now_bttn}","click",function(sym,e){slide=sym.$("buy_now_bttn");slide.data('title','ore order link');slide.data('link',pre_order_link);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_overview_bttn}","click",function(sym,e){SlideChanger.swapSlides('home','stage');$(".menuContent").fadeOut('slow');var currentButtonTrack=sym.$('overview_bttn');currentButtonTrack.data('title','overview tab');edgeClick(e,currentButtonTrack,'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_facebook_link}","click",function(sym,e){slide=sym.$("facebook_link");slide.data('title','facebook link');slide.data('link',facebook_link);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_twitter_link}","click",function(sym,e){slide=sym.$("twitter_link");slide.data('title','twitter link');slide.data('link',twitter_link);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
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
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_zombie_link}","click",function(sym,e){slide=sym.$("zombie_link");slide.data('title','zombie link');slide.data('link',zombie_link);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_learn_about_cybercore}","click",function(sym,e){slide=sym.$("learn_about_cybercore");slide.data('title','learn about cybercore link');slide.data('link',learn_about_cybercore_link);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_dive_into_multiplayer}","click",function(sym,e){slide=sym.$("dive_into_multiplayer");slide.data('title','dive into multiplayer link');slide.data('link',dive_into_multiplayer_link);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("startSlide");
//Edge symbol end:'startSlide'

//=========================================================

//Edge symbol: 'the_taken_article'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_zombie_arrow_left}","click",function(sym,e){if(slideAccesser.clickactive){if(typeof SlidejQueryAnimater.timerObject!='undefined'){clearInterval(SlidejQueryAnimater.timerObject);SlidejQueryAnimater.timerObject='undefined';}
slideAccesser.clickactive=false;var next=slideAccesser.previousSlide;next++;SlidejQueryAnimater.slide(next,'left');var currentButtonTrack=sym.$('zombie_arrow_left');currentButtonTrack.data('title','arrow left pressed');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_zombie_arrow_right}","click",function(sym,e){if(slideAccesser.clickactive){if(typeof SlidejQueryAnimater.timerObject!='undefined'){clearInterval(SlidejQueryAnimater.timerObject);SlidejQueryAnimater.timerObject='undefined';}
slideAccesser.clickactive=false;var prev=slideAccesser.previousSlide;prev--;SlidejQueryAnimater.slide(prev,'right');var currentButtonTrack=sym.$('zombie_arrow_right');currentButtonTrack.data('title','arrow right pressed');edgeClick(e,currentButtonTrack,'mousepress');}});
//Edge binding end
})("the_taken_article");
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
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_animate_vid_container}","click",function(sym,e){slide=$(".videoContainer");slide.data('title','video container click');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_video-slide}","click",function(sym,e){var slide=sym.$("video-slide");slide.data('title','video slide link');slide.data('link',PreOrder);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle}","click",function(sym,e){MyVideo.play('in');edgeStartAnimation.closeVideoExternalVar=true;});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();openVideo('uk_trailer_60s-640.mp4','COD trailer from unit',true,'uk_trailer_60s-640.jpg');});
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
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();openVideo('UK_30357_COD_BO3_LiveAction_Digital_30s_UK_PostLaunch_buy_now-640.mp4','COD trailer PostLaunch',true,'UK_30357_COD_BO3_LiveAction_Digital_30s_UK_PostLaunch_buy_now-640.jpg');});
//Edge binding end
})("home");
//Edge symbol end:'home'

//=========================================================

//Edge symbol: 'zombie_slideShowContainer'
(function(symbolName){})("zombie_slideShowContainer");
//Edge symbol end:'zombie_slideShowContainer'

//=========================================================

//Edge symbol: 'zombie_slideShow'
(function(symbolName){})("zombie_slideShow");
//Edge symbol end:'zombie_slideShow'
})(jQuery,AdobeEdge,"EDGE-14859374");