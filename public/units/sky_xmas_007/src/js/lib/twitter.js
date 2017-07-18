/*
	twitterstream.js
	2013

	This module creates html from a json twitter feed
	and appends it to your page.

	An accompanying style sheet is found under /css/twitterPost.css
	
	Useage

	call :
	ADSPANDABLEtwitterModule(twitterstream,container);
	
	twitterstream is a json response from twitter api.
	container is the container you want to append the tweets to.
	use '.container' or '#container'

*/

// Create a modules object. To store modules under one name.
// If module already exists then use it.
var modules = modules || {};

modules.twitter = (function(){
	
	var l;

	function init(twitterstream, container){
		
		// Get the number of posts
		l = twitterstream.length;

		var twitterContainer = $('<div></div>').attr({
			'id':'twitterContainer'
		});

		for(var i = 0; i<l; i++){
			var twitterObject = twitterstream[i];
			
			// Twitter post variables
			var logo = twitterObject.user.profile_image_url;
			var name = twitterObject.user.name;
			var text = twitterObject.text;
			var screen_name = '@'+twitterObject.user.screen_name;

			// Make dom elements for each variable
			var post = $('<div></div>').attr({
				'class':'postContainer'
			});

			var leftContainer = $('<div></div').attr({
				'class':'twitterPostLeftContainer'
			});

			var rightContainer = $('<div></div').attr({
				'class':'twitterPostRightContainer'
			});

			// Create logo element
			var logoElement = $('<div></div>').attr({
				'class':'twitterPostlogo'
			});
			var logoImage = $('<img />').attr({
				'src':logo
			});
			$(logoElement).append(logoImage);

			// Create name element
			var nameElement = $('<div></div>').attr({
				'class':'twitterPostName'
			});
			var nameText = $('<p></p').attr({
				'class':'twitterPostNameText'
			}).html(name);
			$(nameElement).append(nameText);

			// Create text element
			var textElement = $('<div></div>').attr({
				'class':'twitterPostText'
			});
			var textText = $('<p></p').attr({
				'class':'twitterPostTextText'
			}).html(text);
			$(textElement).append(textText);

			// Create screen_name Element
			var screennameElement = $('<div></div>').attr({
				'class':'twitterPostScreen'
			});
			var screenText = $('<p></p>').attr({
				'class':'twitterPostScreenText'
			}).html(screen_name);
			$(screennameElement).append(screenText);

			// Create top slice div
			$(rightContainer).append(nameText);
			$(rightContainer).append(screenText);

			// Append elements to left and right containers
			$(leftContainer).append(logoElement);
			
			$(rightContainer).append(textElement);		

			// append left and right containers to post
			$(post).append(leftContainer);
			$(post).append(rightContainer);

			$(twitterContainer).append(post);
		}
		$(container).append(twitterContainer);
	}

	return {
		init : init
	};
})();