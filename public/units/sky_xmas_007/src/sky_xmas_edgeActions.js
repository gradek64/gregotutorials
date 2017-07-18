
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){StartAnimation={};var applyOnce=true;var startVideoTimer=2000;edgeStartAnimation.startAnimation=function(){if(applyOnce){applyOnce=false;var videostart=setTimeout(function(){clearTimeout(videostart);StartAnimation.videoAppears();},startVideoTimer);StartAnimation.setInitial=function(){var setDealay0=3000;var setDealay1=3000;var delay=setTimeout(function(){clearTimeout(delay);sym.$('treat3').fadeIn(1000,function(){fading();});},setDealay0)
function fading(){var timer1=setTimeout(function(){clearTimeout(timer1);sym.$('treat3').fadeOut(1000);},setDealay1)}}
StartAnimation.setInitial();(function($){var ww=0;var wh=0;var maxw=0;var minw=0;var maxh=0;var textShadowSupport=true;var xv=0;var snowflakes=["*"];var prevTime;var absMax=200;var flakeCount=0;var timer;var timeSet=7000;var snowFade=1000;$(init);function init()
{var detectSize=function()
{ww=$('body').width();wh=$('body').height();maxw=ww+300;minw=-300;maxh=wh+300;};detectSize();$(window).resize(detectSize);if(!$('body').css('textShadow'))
{textShadowSupport=false;}
var i=50;while(i--)
{addFlake(true);}
prevTime=new Date().getTime();timer=setInterval(move,50);}
function addFlake(initial)
{flakeCount++;var sizes=[{r:1.0,css:{fontSize:12+Math.floor(Math.random()*8)+'px',textShadow:'9999px 0 0 rgba(238, 238, 238, 0.5)'},v:2},{r:1.0,css:{fontSize:15+Math.floor(Math.random()*15)+'px',textShadow:'9999px 0 5px #eee'},v:6},{r:0.2,css:{fontSize:90+Math.floor(Math.random()*15)+'px'},v:12},{r:0.1,css:{fontSize:150+Math.floor(Math.random()*40)+'px'},v:20}];var $nowflake=$('<span class="winternetz">'+snowflakes[Math.floor(Math.random()*snowflakes.length)]+'</span>').css({fontFamily:'SnowFont',color:'#eee',display:'block',position:'fixed',background:'transparent',width:'auto',height:'auto',margin:'0',padding:'0',textAlign:'left',zIndex:9999});if(textShadowSupport)
{$nowflake.css('textIndent','-9999px');}
var r=Math.random();var i=sizes.length;var v=0;while(i--)
{if(r<sizes[i].r)
{v=sizes[i].v;$nowflake.css(sizes[i].css);break;}}
var x=(-300+Math.floor(Math.random()*(ww+300)));var y=0;if(typeof initial=='undefined'||!initial)
{y=-300;}
else
{y=(-300+Math.floor(Math.random()*(wh+300)));}
$nowflake.css({left:x+'px',top:y+'px'});$nowflake.data('x',x);$nowflake.data('y',y);$nowflake.data('v',v);$nowflake.data('half_v',Math.round(v*0.5));$('.containerSky').append($nowflake);}
var timeOut=setTimeout(function(){clearTimeout(timeOut);addFlake(false);clearInterval(timer);$('.winternetz').fadeOut(snowFade,function(){StartAnimation.start();$('.containerSky').remove();});},timeSet);function move()
{var newTime=new Date().getTime();var diffTime=newTime-prevTime;seconds=newTime/1000;var y=Math.round(newTime/seconds);prevTime=newTime;if(diffTime<55&&flakeCount<absMax)
{addFlake();}
else if(diffTime>150)
{$('span.winternetz:first').remove();flakeCount--;}
$('span.winternetz').each(function()
{var x=$(this).data('x');var y=$(this).data('y');var v=$(this).data('v');var half_v=$(this).data('half_v');y+=v;x+=-half_v+Math.round(Math.random()*10);if(x>maxw)
{x=-300;}
else if(x<minw)
{x=ww;}
if(y>maxh)
{$(this).remove();flakeCount--;addFlake();}
else
{$(this).data('x',x);$(this).data('y',y);$(this).css({left:x+'px',top:y+'px'});if(v>=6)
{}}});}})(jQuery);}}
var videoContainer=sym.$('videoContainerLarge').append('<div id="video-container" />');StartAnimation.videoAppears=function(){sym.$('lightbox').fadeIn(300);sym.$('close').fadeIn(300).css('cursor','pointer');sym.$('videoContainerLarge').fadeIn("fast",function(){openVideo('XMAS_BLOCKBUSTER_1-640.mp4','intro',true,'main.jpg');});}
sym.$('close').click(function(e){edgeStartAnimation.closeVideofromEdge(e);sym.$('videoContainerLarge').animate({'width':'31.43%','height':'48.39%','top':'23.44%','left':'64.65%'},300);sym.$('lightbox').fadeOut(300);sym.$('close').fadeOut(300);sym.$('ribbon').fadeIn(100);enlargeVideo();});edgeStartAnimation.videoCompleted=function(){sym.$('videoContainerLarge').animate({'width':'31.43%','height':'48.39%','top':'23.44%','left':'64.65%'},300);sym.$('lightbox').fadeOut(300);sym.$('ribbon').fadeIn(100);sym.$('close').fadeOut(300);enlargeVideo();}
function enlargeVideo(){videoContainer.hover(function(){sym.$('lightbox').fadeIn(300);$(this).animate({'width':'80%','height':'90%','top':'5%','left':'10%'},300);},function(){$(this).animate({'width':'31.43%','height':'48.39%','top':'23.44%','left':'64.65%'},300);sym.$('lightbox').fadeOut(300);})}
var legalButton=sym.getSymbol("legals_button_sym").getSymbolElement();var legalButtonOFF=sym.getSymbol("legals_button_sym").$("legalsButton");var legalButtonON=sym.getSymbol("legals_button_sym").$("disclaimer");legalButton.css('position','relative');legalButton.hover(function(){legalButtonOFF.animate({'top':legalButton.height()},200);legalButtonON.animate({'top':'0'},200)},function(){legalButtonOFF.animate({'top':'0'},200)
legalButtonON.animate({'top':legalButton.height()},200);});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bg}","click",function(sym,e){slide=sym.$("bg");slide.data('title','main page link');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sky4}","click",function(sym,e){slide=sym.$("sky4");slide.data('title','main page link');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_skyContainer}","click",function(sym,e){slide=sym.$("bg");slide.data('title','main page link');slide.data('link',clickTag);slide.addClass('campaign-link');edgeClick(e,slide,'click');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'animation'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();var delay=setTimeout(function(){clearTimeout(delay);sym.$('treat').fadeIn(1000,function(){console.log('gaga');fading();});},3000)
function fading(){var timer1=setTimeout(function(){clearTimeout(timer1);sym.$('treat').fadeOut(1000);sym.$('sky').fadeOut(1000);},7000)}
var once=false;StartAnimation.start=function(){if(!once){console.log('startInside');sym.play(1)}
once=true};});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){});
//Edge binding end
})("animation");
//Edge symbol end:'animation'

//=========================================================

//Edge symbol: 'sky'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();var delay=setTimeout(function(){clearTimeout(delay);sym.$('treat').fadeIn(1000,function(){console.log('gaga');fading();});},3000)
function fading(){var timer1=setTimeout(function(){clearTimeout(timer1);sym.$('treat').fadeOut(1000);sym.$('sky').fadeOut(1000);},7000)}
var once=false;StartAnimation.start=function(){if(!once){console.log('startInside');}
once=true};});
//Edge binding end
})("sky");
//Edge symbol end:'sky'

//=========================================================

//Edge symbol: 'sky4'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();var once=false;StartAnimation.start=function(){if(!once){sym.$('sky4').fadeOut(100);sym.play(1)}
once=true};});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();var setDealay2=1000;var timer2=setTimeout(function(){clearTimeout(timer2);sym.play();},setDealay2)});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.stop();var setDelay3=3000;sym.$('tree_text').fadeIn(1000,function(){setDelay();});function setDelay(){var delay2=setTimeout(function(){clearTimeout(delay2);sym.$('tree_text').fadeOut(1000);sym.$('download_text').fadeOut(1000,function(){});},setDelay3);}});
//Edge binding end
})("sky4");
//Edge symbol end:'sky4'

//=========================================================

//Edge symbol: 'legas_button_sym'
(function(symbolName){})("legas_button_sym");
//Edge symbol end:'legas_button_sym'

//=========================================================

//Edge symbol: 'skyContainer'
(function(symbolName){})("skyContainer");
//Edge symbol end:'skyContainer'
})(jQuery,AdobeEdge,"EDGE-1063389");