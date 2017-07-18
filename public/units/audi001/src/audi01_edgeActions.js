
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){var activeBttn;var currentIndex;var index=[0,1,2,3];Symbol.bindElementAction(compId,symbolName,"${_bttn1}","click",function(sym,e){var element=sym.$("bttn1");if(activeBttn){activeBttn.css('backgroundImage','url("images/button_normal_state.png")');}
if(element!=activeBttn){activeBttn=element;currentIndex=index;activeBttn.css('backgroundImage','url("images/button_click_state.png")');var movement=0;ulContainer.animate({left:movement});}
sym.$("bttn1").data('title','Slide show button 1');edgeClick(e,sym.$("bttn1"),'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bttn2}","click",function(sym,e){var element=sym.$("bttn2");if(activeBttn){activeBttn.css('backgroundImage','url("images/button_normal_state.png")');}
if(element!=activeBttn){activeBttn=element;currentIndex=index;activeBttn.css('backgroundImage','url("images/button_click_state.png")');var movement=-99+'%';ulContainer.animate({left:movement});}
sym.$("bttn2").data('title','Slide show button 2');edgeClick(e,sym.$("bttn2"),'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bttn3}","click",function(sym,e){var element=sym.$("bttn3");if(activeBttn){activeBttn.css('backgroundImage','url("images/button_normal_state.png")');}
if(element!=activeBttn){activeBttn=element;currentIndex=index;activeBttn.css('backgroundImage','url("images/button_click_state.png")');var movement=-199+'%';ulContainer.animate({left:movement});}
sym.$("bttn3").data('title','Slide show button 3');edgeClick(e,sym.$("bttn3"),'mousepress');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bttn4}","click",function(sym,e){var element=sym.$("bttn4");if(activeBttn){activeBttn.css('backgroundImage','url("images/button_normal_state.png")');}
if(element!=activeBttn){activeBttn=element;currentIndex=index;activeBttn.css('backgroundImage','url("images/button_click_state.png")');var movement=-299+'%';ulContainer.animate({left:movement});}
sym.$("bttn4").data('title','Slide show button 4');edgeClick(e,sym.$("bttn4"),'mousepress');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var stage=sym.getComposition('EDGE-1609515').getStage();var element=sym.$("image_container");element.css({overflow:'hidden'});ulContainer=$('<ul></ul>');ulContainer.addClass('ulContainer');ulContainer.css({position:'absolute',top:'0',left:'0',padding:'0',margin:'0',width:'367%',height:'100%',listStyle:'none'});ulContainer.appendTo(element);var index;for(var i=0;i<11;i++){var li=$('<li></li>');li[0].index=i;li.css({float:'left',marginRight:'2%',width:'7.07%',height:'94%',border:'1px solid white',opacity:'0.7',cursor:'pointer'});var img=$('<img></img>');var path='images/th_image_'+(i+1)+'.jpg';img.attr({src:path,width:'100%',height:'100%'});li.appendTo(ulContainer);img.appendTo(li);li.hover(function(){$(this).fadeTo('fast',1);},function(){$(this).fadeTo('fast',0.5);});if(i==10){var lastPhoto=ulContainer.children('li:last');lastPhoto.css({marginRight:'0px'});}
li.on('click',function(){li.data('title','Open large image');edgeClick(e,li,'mousepress');var currentIndex=this.index;popUpLargeImage(currentIndex);});function popUpLargeImage(index){var wrapper=$('<div></div>');wrapper.css({position:'relative',margin:'0 auto',width:'70.43%',height:'92.75%',border:'1px solid white',display:'none'});var closeButton=$('<div></div>').hide();closeButton.css({position:'absolute',left:'1%',top:'1%',width:'4%',height:'6%',minWidth:'34px',minHeight:'34px',background:'url("images/close.png") top left no-repeat',backgroundSize:'contain',cursor:'pointer',zIndex:0});var img=$('<img class="large-image"></img>');var path='images/image_'+(index+1)+'.jpg';img.attr({src:path,alt:'',width:100+'%',height:100+'%'});img.appendTo(wrapper);closeButton.appendTo(wrapper);wrapper.appendTo($(stage.lookupSelector("stage")));var javaScriptImage=img[0];function largeImageLoaded(){if(javaScriptImage.complete){clearInterval(timeOut);wrapper.fadeIn(500,function(){closeButton.show()});};};var timeOut=setInterval(function(){largeImageLoaded()},50);closeButton.click(closeLargeImage);function closeLargeImage(){wrapper.fadeOut(500,function(){wrapper.remove();})}}}
var bttn1=$('div#Stage_nav_buttons1').css('backgroundImage','url("images/button_click_state.png")');activeBttn=bttn1;$('.large-image').on('click',function(){$(this).data('title','Large Image');$(this).addClass('campaign-link');edgeClick(e,$(this),'click');});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_audi_logo}","click",function(sym,e){sym.$("audi_logo").data('title','Audi Logo');sym.$("audi_logo").addClass('campaign-link');edgeClick(e,sym.$("audi_logo"),'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_audi_scorpila}","click",function(sym,e){sym.$("audi_scorpila").data('title','Scorpila Button');sym.$("audi_scorpila").addClass('campaign-link');edgeClick(e,sym.$("audi_scorpila"),'click');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bg}","click",function(sym,e){sym.$("bg").data('title','Background of Adbreak');sym.$("bg").addClass('campaign-link');edgeClick(e,sym.$("bg"),'click');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-1609515");