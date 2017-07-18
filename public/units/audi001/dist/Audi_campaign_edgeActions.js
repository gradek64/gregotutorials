/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
      
      
         //first frame code 
         var stage = sym.getComposition('EDGE-4241995').getStage();
         var element = sym.$("image_container");
         //hide the overflow 
         element.css({
         				overflow:'hidden'
         				//border:'1px solid yellow'
         				});
         //built content 
         ulContainer = $('<ul></ul>');
         ulContainer.addClass('ulContainer');
         ulContainer.css({
         					position:'absolute',
         					top:'0',
         					left:'0',
         					padding:'0',
         					margin:'0',
         					width:'367%',//(86 + 20margin + 2px border)*11 = 1188px =  386.66%
         					height:'100%',
         					listStyle:'none'
         					//border:'1px solid green'
         					});
         ulContainer.appendTo(element);
      
      	var index;
         //li element with images
         for(var i=0;i<11;i++){
      
         		var li = $('<li></li>');
         		//index in pure javaScript 
         		li[0].index = i;
      
      
      
         		//css properties 
         		li.css({
         		float:'left',
         		marginRight:'1.3%',//20px/1188px = 1.68%
         		width:'7.56%', //(84px)/1188px = 7.07% no border here it is static
         		height:'94%',//67px - 4px border = 63px = 94%
         		border:'2px solid white',
         		opacity:'0.7'
         		});
      
      
      
      
      
      
         		var img =$('<img></img>');
         		var path = 'images/th_image_'+(i+1)+'.jpg';
         						img.attr({
         						 src: path,
         						 alt: 'this is image',
         						 width:'100%',
         						 height:'100%'
         						 });
         			//apennd to ul container
         			li.appendTo(ulContainer);
         			img.appendTo(li);
      
         		//hover and normal state
         		li.hover(
      				function(){
      					$(this).fadeTo('fast',1);
      					},
      					//normal state
      					function(){
      					$(this).fadeTo('fast',0.5);
      					});
      
         		//attach the click event 
      
         		li.click(activateLargeImage);
         		li.bind('tap',activateLargeImage);
      
         		//remove margin-right from last <li>
         		if(i==10){
         		var lastPhoto = ulContainer.children('li:last');
         		lastPhoto.css({
         		marginRight:'0px'
         		});
         		}
      
      			function activateLargeImage()	{
      			var currentIndex = this.index;
      			popUpLargeImage(currentIndex);
      			};		 
      
         		//click and tap event with index
         		function popUpLargeImage(index){
         		this.index = 
         		console.log($(stage));
            	var wrapper = $('<div></div>');
            	wrapper.css({
         						position:'relative',
         						margin:'0 auto',
            					width:'70.43%',
            					height:'92.75%',
            					border:'1px solid white',
            					display:'none'
            				});
      
            	var closeButton = $('<div></div>').hide(); 
            	closeButton.css({
      								 position:'absolute',
      								 left:'1%',
      								 top:'1%',
      								 width:'4%',
      								 height:'6%',
      								 minWidth:'34px',
      								 minHeight:'34px',
      								 background:'url("images/close.png") top left no-repeat',
      								 backgroundSize:'contain',
      								 cursor:'pointer',
      								 zIndex:0
      								 });
      
            	var img = $('<img></img>');
         		var path = 'images/image_'+(index+1)+'.jpg';
         						img.attr({
         						 src: path,
         						 alt: 'this is image',
         						 width:100+'%',
         						 height:100+'%'
         						 });
      
         		img.appendTo(wrapper);
         		closeButton.appendTo(wrapper);
         		wrapper.appendTo($(stage.lookupSelector("stage")));
      
         		//fade in 
         		wrapper.fadeIn(500,function(){closeButton.show()});
      
      
         		//assign click image to closeButton
      			closeButton.click(closeLargeImage);
      
      			function closeLargeImage(){
      			wrapper.fadeOut(500,function(){
      			wrapper.remove();
      			})
      			}//end of closeLargeImage
        		}//end of click and tap 
         }//end of for loop;
      
      
      
      	//default for first nav_btton1 as selected 
      	var bttn1 = $('div#Stage_nav_buttons1').css('backgroundImage','url("images/button_click_state.png")');
      	//make sure is selected as active for other bttns
      	activeBttn = bttn1;
      
      
      }); 
      //Edge binding end
      
      //general vars for nav buttons
      var activeBttn;
      var currentIndex;
      var index = [0,1,2,3];
      
      
      
      
      
      //var bttn1 = sym.$("nav_buttons1");
      //bttn1.css('backgroundImage','url("images/button_click_state.png")');
      
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${_nav_buttons1}", "click", function(sym, e) {
         // sym.$("name") resolves an Edge Animate element name to a DOM
         // element that can be used with jQuery
         var element = sym.$("nav_buttons1");
      
         if(activeBttn){
         		activeBttn.css('backgroundImage','url("images/button_normal_state.png")');
         		}				
         if(element!=activeBttn){
         		activeBttn = element;
         		currentIndex = index;
         		activeBttn.css('backgroundImage','url("images/button_click_state.png")');
      
         		 var movement = 0;
                ulContainer.animate({
                left:movement
                 });
         }//end of if condition
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_nav_buttons2}", "click", function(sym, e) {
         // sym.$("name") resolves an Edge Animate element name to a DOM
         // element that can be used with jQuery
         var element = sym.$("nav_buttons2");
         //if(activeBttn && currentIndex!=index){
         if(activeBttn){
         		activeBttn.css('backgroundImage','url("images/button_normal_state.png")');
         		}				
         if(element!=activeBttn){
         		activeBttn = element;
         		currentIndex = index;
         		activeBttn.css('backgroundImage','url("images/button_click_state.png")');
      
         		 var movement = -100+'%';
                ulContainer.animate({
                left:movement
                 });
         }//end of if condition
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_nav_buttons3}", "click", function(sym, e) {
         // sym.$("name") resolves an Edge Animate element name to a DOM
         // element that can be used with jQuery
         var element = sym.$("nav_buttons3");
         //if(activeBttn && currentIndex!=index){
         if(activeBttn){
         		activeBttn.css('backgroundImage','url("images/button_normal_state.png")');
         		}				
         if(element!=activeBttn){
         		activeBttn = element;
         		currentIndex = index;
         		activeBttn.css('backgroundImage','url("images/button_click_state.png")');
      
         		 var movement = -200+'%';
                ulContainer.animate({
                left:movement
                 });
         }//end of if condition
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_nav_buttons4}", "click", function(sym, e) {
         // sym.$("name") resolves an Edge Animate element name to a DOM
         // element that can be used with jQuery
         var element = sym.$("nav_buttons4");
         //if(activeBttn && currentIndex!=index){
         if(activeBttn){
         		activeBttn.css('backgroundImage','url("images/button_normal_state.png")');
         		}				
         if(element!=activeBttn){
         		activeBttn = element;
         		currentIndex = index;
         		activeBttn.css('backgroundImage','url("images/button_click_state.png")');
      
         		 var movement = -300+'%';
                ulContainer.animate({
                left:movement
                 });
         }//end of if condition
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_nav_buttons4}", "touchstart", function(sym, e) {
         // sym.$("name") resolves an Edge Animate element name to a DOM
         // element that can be used with jQuery
         var element = sym.$("nav_buttons4");
         //if(activeBttn && currentIndex!=index){
         if(activeBttn){
         		activeBttn.css('backgroundImage','url("images/button_normal_state.png")');
         		}				
         if(element!=activeBttn){
         		activeBttn = element;
         		currentIndex = index;
         		activeBttn.css('backgroundImage','url("images/button_click_state.png")');
      
         		 var movement = -300+'%';
                ulContainer.animate({
                left:movement
                 });
         }//end of if condition
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_nav_buttons3}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         // sym.$("name") resolves an Edge Animate element name to a DOM
         // element that can be used with jQuery
         var element = sym.$("nav_buttons3");
         //if(activeBttn && currentIndex!=index){
         if(activeBttn){
         		activeBttn.css('backgroundImage','url("images/button_normal_state.png")');
         		}				
         if(element!=activeBttn){
         		activeBttn = element;
         		currentIndex = index;
         		activeBttn.css('backgroundImage','url("images/button_click_state.png")');
      
         		 var movement = -200+'%';
                ulContainer.animate({
                left:movement
                 });
         }//end of if condition
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_nav_buttons2}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         // sym.$("name") resolves an Edge Animate element name to a DOM
         // element that can be used with jQuery
         var element = sym.$("nav_buttons2");
         //if(activeBttn && currentIndex!=index){
         if(activeBttn){
         		activeBttn.css('backgroundImage','url("images/button_normal_state.png")');
         		}				
         if(element!=activeBttn){
         		activeBttn = element;
         		currentIndex = index;
         		activeBttn.css('backgroundImage','url("images/button_click_state.png")');
      
         		 var movement = -100+'%';
                ulContainer.animate({
                left:movement
                 });
         }//end of if condition
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_nav_buttons1}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         // sym.$("name") resolves an Edge Animate element name to a DOM
         // element that can be used with jQuery
         var element = sym.$("nav_buttons1");
      
         if(activeBttn){
         		activeBttn.css('backgroundImage','url("images/button_normal_state.png")');
         		}				
         if(element!=activeBttn){
         		activeBttn = element;
         		currentIndex = index;
         		activeBttn.css('backgroundImage','url("images/button_click_state.png")');
      
         		 var movement = 0;
                ulContainer.animate({
                left:movement
                 });
         }//end of if condition
      
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'
   
   
   //=========================================================
   
   //Edge symbol: 'image_container'
   (function(symbolName) {   
   
   })("image_container");
   //Edge symbol end:'image_container'

   //=========================================================
   
   //Edge symbol: 'bttn_test'
   (function(symbolName) {   
   
   })("bttn_test");
   //Edge symbol end:'bttn_test'

   //=========================================================
   
   //Edge symbol: 'test'
   (function(symbolName) {   
   
   })("RoundRect");
   //Edge symbol end:'RoundRect'

   //=========================================================
   
   //Edge symbol: 'bttn1'
   (function(symbolName) {   
   
   })("bttn1");
   //Edge symbol end:'bttn1'

   //=========================================================
   
   //Edge symbol: 'bttn2'
   (function(symbolName) {   
   
   })("bttn2");
   //Edge symbol end:'bttn2'

   //=========================================================
   
   //Edge symbol: 'bttn3'
   (function(symbolName) {   
   
   })("bttn3");
   //Edge symbol end:'bttn3'

   //=========================================================
   
   //Edge symbol: 'bttn4'
   (function(symbolName) {   
   
   })("bttn4");
   //Edge symbol end:'bttn4'

   //=========================================================
   
   //Edge symbol: 'nav_bttn1'
   (function(symbolName) {   
   
   })("nav_bttn1");
   //Edge symbol end:'nav_bttn1'

})(jQuery, AdobeEdge, "EDGE-4241995");