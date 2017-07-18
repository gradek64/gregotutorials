/*
 *  Copyright (c) 2013 Funny or Die, Inc.
 *  http://www.funnyordie.com
 *  https://github.com/funnyordie/videojs-imageOverlay/blob/master/LICENSE
 */

  function imgOverlay(){
    var videoLinks = videoLinks;
    if ($('#overlayImg').length<1){
      $('video').after('<a id="overlayImg" style="position:absolute;z-index:10000;width:100%;height:80%;top:10%;left:0;" href="#" onclick="edgeVideoClick()"><img src="http://files.adspdbl.com/assets/opaque.png" style="width:100%;height:100%" /></a>');
    }
    else {
      $('#overlayImg').remove();
    }
  }

