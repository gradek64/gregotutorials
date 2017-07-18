/*
 * shared tracking functions
 */


(function(){
    var $ = ADSPDBLjQuery;
    // global video logging timer
    videoLoggerInterval = '';
    var randomnumber=Math.floor(Math.random()*10000000000);


    // get all the domain etc
    // all hash data - global
    completeHash = location.hash;
    // path and domain
    var patt1 = /.*?-ps-(.*?)-pe-.*/gim;
    var patt2 = /.*?-ds-(.*?)-de-.*/gim;
    keywordStrPatt = /.*?-skey-(.*?)-ekey-.*/gim;

    // keywords
    keywordStr = keywordStrPatt.exec(completeHash);
    if (keywordStr !== null && keywordStr[1] !== null){
        keywordStr = keywordStr[1];
    }

    completeUrlformatted = patt1.exec(completeHash);

    if (completeUrlformatted !== null){
        completeUrlformatted = completeUrlformatted[1];
        //completeDomain = patt2.exec(completeHash);
        //completeDomain = completeDomain[1];
    }
    // end all hash data

    // MOBILE SOLUTION to detect at least a 500ms touch

    // set touching to false by default
    touching = false;
    touchCounter=0;
    // touching timer
    var touchTimer = function(){
        tTimer = setTimeout(function(){
            touchCounter+=100;
            if(touching){
                touchTimer();
            }
            else {
                clearTimeout(tTimer);
            }
        },100)
    };


    // -- detect finger lifting off

    // global touch on/off event to detect touching state

    var element = document.getElementsByTagName('body');
    element = element[0];

    var hammertime = Hammer(element).on("touch", function(event) {
        touching = true;
        touchCounter = 0;
        touchTimer();
        //console.log(touching+' there');
    });

    var hammerOff = Hammer(element).on("release", function(event) {
        touching = false;
        //console.log(touching+' there');
    });



    /*mobileClickTimer = function(theSrc){
     clearTimeout(mTmr);
     var trackerV2 = new Image();
     trackerV2.id = "adspdbl_trpx";
     // if finger removed within half a second we can assume they are clicking
     var mTmr = setTimeout(
     function(){
     console.log(touching+' here');
     if(!touching){
     openWin(theSrc);
     console.log('success - not touching');
     }
     else {
     console.log('fail - touching');
     }
     clearTimeout(mTmr);
     },1000
     );

     }*/


    if(isMobile.any){
        videoControls = true;
        // no video
        $('#closer').css('display','none');
        $('#video-section').removeClass('active').fadeOut('fast');
        $('div:last').removeClass('video-active');
        $('#lightbox').fadeOut('fast');

    }
    else {
        videoControls = false;
    }
    // end mobiles




    var videoClickState = false;
    // audience variable set if required
    if (typeof aud === 'undefined'){
        var aud = '';
    }
    // global current video
    currentVideo = "";
    // 3 layer random
    var layerOrder = 1 + Math.floor(Math.random()*3);

    //Timer - all timing events.
    timers = function(that){

        // Timer for duration of expansion till page is left
        expandTimer = 0;
        var st;
        var timeUnitOpen = function(){
            st = setTimeout(function(){expandTimer = expandTimer + 0.5;timeUnitOpen();},500);
        };
        timeUnitOpen();
        // when they leave the window record the time

        // Timer for mouseovers
        var t,
            visited = false,
            seconds = 0,
            points,
            currentX,
            currentY,
            frame = '';
        $(document).mousemove(function(e){
            currentX = e.pageX;
            currentY = e.pageY;
        });
        function mOver(){
            if(!visited){
                t = setTimeout(function(){seconds=seconds+0.5;mOver();if (seconds<5.5){points+='/'+currentX +'-'+ currentY + '-' + frame;}},500);
            }
        }

        $(document).hover(function(){
                mOver();
            },
            function(){
                if(!visited){
                    clearTimeout(t);
                    visited=true;
                    trackingCall('time-on-unit/'+campaign+'/seconds/-tos-'+seconds+'-toe-');
                    trackingCall('mapping/'+campaign+'/coords/-cos-'+points+'-coe-');
                }
            });
    };
    // end Timer

    // Tracking


    // postmessgae tracking
    postMessageTracking = function(tracking){
        //parent.postMessage(tracking,"http://"+completeDomain);
    };

    trackingCall = function(info){

        // all hash data
        var completeHash = location.hash;

        // path and domain
        var patt1 = /.*?-ps-(.*?)-pe-.*/gim;
        var patt2 = /.*?-ds-(.*?)-de-.*/gim;
        var keywordStrPatt = /.*?-skey-(.*?)-ekey-.*/gim;

        var completeUrlformatted = patt1.exec(completeHash);

        if (completeUrlformatted !== null){
            completeUrlformatted = completeUrlformatted[1];
            //var completeDomain = patt2.exec(completeHash);
            //completeDomain = completeDomain[1];
        }

        // end all hash data

        // vars
        var general = '';
        var timeUnit = [];
        var mouseCord = [];
        var videoLength = [];
        var keywordStr = [];
        var clickRedirect = [];
        var timeExp = [];
        var state = '';
        var pattCo = /.*?-cos-(.*?)-coe-.*/gim;
        var clickCord = [];
        var pattTime = /.*?-tos-(.*?)-toe-.*/gim;
        var clickTitlePatt = /.*?-soc-(.*?)-soe-.*/gim;
        var videoLengthPatt = /.*?-vls-(.*?)-vle-.*/gim;
        var expandTimerPatt = /.*?-texs-(.*?)-texe-.*/gim;
        var genericEventPatt = /.*?-events-(.*?)-evente-.*/gim;
        var redirectPatt = /.*?-redirects-(.*?)-redirecte-.*/gim;
        var generic = 'unknown';
        var clickTitle = [];
        var infoTemp = info.toLowerCase();

        // replace src if tracker exists already
        if ($('#adspdbl_trfr').length > 0){
            $('#adspdbl_trfr').remove();
        }
        if ($('#adspdbl_trpx').length > 0){
            $('#adspdbl_trpx').remove();
        }

        // type of event
        if (infoTemp.indexOf('redirects') >- 1){
            state = 'click';
        }


        else if(infoTemp.indexOf('mapping') >- 1){
            state = 'mapping';

        }
        else if(infoTemp.indexOf('time-on-unit') >- 1){
            state = 'time-on-unit';
            timeUnit= pattTime.exec(info);
            if (timeUnit !== null && timeUnit[1] !== null){
                timeUnit = timeUnit[1];
                general = timeUnit;
            }
        }
        else if(infoTemp.indexOf('time-expanded') >- 1){
            state = 'time-expanded';
            timeExp = expandTimerPatt.exec(info);
            if (timeExp !== null && timeExp[1] !== null){
                timeExp = timeExp[1];
                general = timeExp;
            }
        }
        else {
            generic = genericEventPatt.exec(info);
            if (generic !== null && generic[1] !== null){
                generic = generic[1];
                state = generic;
            }
            else {
                state = 'unknown';
            }
        }

        // ANALYTIC DATA TO SEND
        // cordinates
        if (info.indexOf('-cos-')>-1){
            clickCord = pattCo.exec(info);
            if (clickCord !== null && clickCord[1] !== null){
                clickCord = clickCord[1];
                general = clickCord;
            }
        }
        // video play length
        if (info.indexOf('-vls-')>-1){
            videoLength = videoLengthPatt.exec(info);
            if (videoLength !== null && videoLength[1] !== null){
                videoLength = videoLength[1];
                general = videoLength;
                // is video in view
                if(location.hash.indexOf('trueview')>-1){
                    //clickTitle = 'Video not in view';
                }

            }
        }
        // is video still in view?
        if (info.indexOf('- play -')>-1){
            if(location.hash.indexOf('trueview')>-1){
                //general = 'Video not in view';
            }
        }

        // click title
        clickTitle = clickTitlePatt.exec(info);
        if (clickTitle !== null && clickTitle[1] !== null){
            clickTitle = clickTitle[1];
        }
        //redirect link
        if(info.indexOf('-redirects-')>-1){
            clickRedirect = redirectPatt.exec(info);
            if (clickRedirect !== null && clickRedirect[1] !== null){
                clickRedirect = clickRedirect[1];
            }
        }

        keywordStr = keywordStrPatt.exec(completeHash);
        if (keywordStr !== null && keywordStr[1] !== null){
            keywordStr = keywordStr[1];
        }



        var trackerV2 = new Image();
        trackerV2.id = "adspdbl_trpx";
        var ran = Math.floor(Math.random() * 1000);
        var pSrc;
        if (state === 'click'){


                //pSrc = "http://adbreak-1124610337.us-east-1.elb.amazonaws.com/redirectclicks.php?redirectAdsp="+encodeURIComponent(clickRedirect)+"&ran="+ran+"&type=event&state="+state+"&audience="+aud+"&campaign="+campaign+"&general="+general+"&click_title="+clickTitle+"&resolution="+$(window).width()+"x"+$(window).height()+"&keyword_data="+keywordStr+"&domain="+completeDomain+"&path="+completeUrlformatted;

        }
        else{
            //pSrc = "http://adbreak-1124610337.us-east-1.elb.amazonaws.com/analytics.gif?ran="+ran+"&type=event&state="+state+"&audience="+aud+"&campaign="+campaign+"&general="+general+"&click_title="+clickTitle+"&resolution="+$(window).width()+"x"+$(window).height()+"&keyword_data="+keywordStr+"&domain="+completeDomain+"&path="+completeUrlformatted;
        }
        

        if (state === 'click'){
            //openWin(pSrc);
        }
        else{
            //postMessageTracking(pSrc);
            /*if(completeDomain.indexOf('pcwelt')>-1 || completeDomain.indexOf('freeads')>-1){
                postMessageTracking(pSrc);
            }
            else {
                trackerV2.src = pSrc;
            }*/

        }
    };

    // end tracking



    // start/stop slide show
    var startSlideShow = function(t,slideInitYet){
        if (typeof AdobeEdge == 'undefined') {
            setTimeout(function(){startSlideShow();},50);
        }
        else{
            if (typeof AdobeEdge.getComposition == 'undefined') {
                setTimeout(function(){startSlideShow();},50);
            }
            else {
                var comp = AdobeEdge.getComposition("EDGE-1769983");
                if(typeof comp=='undefined'){
                    setTimeout(function(){startSlideShow();},50);
                }
                else{
                    comp.play(0);
                }
            }


        }
        clearTimeout(t);
    };

    // get video file name
    getVideoFileName = function(){
        var nicename;
        if (jwplayer('video-container').renderingMode === "flash"){
            niceName = jwplayer('video-container').getPlaylistItem().file;
        }
        else {
            niceName = jwplayer('video-container').getPlaylistItem().sources[0].file;
        }
        if(niceName.lastIndexOf('/') >- 1){
            var lastSlash = niceName.lastIndexOf('/');
            niceName = niceName.substring(lastSlash + 1);
        }

        return niceName;
    };
    // end get video file name

    // This variable is important as it allows us to stop the slide show before the timer starts it when a user first arrives if for example they hit stop
    var slideInitYet = false;
    function hashChangedCallback(newHash, oldHash) {


        if (newHash.indexOf('-trueview') >- 1){
            // if video not iniaited yet remove lightbox etc
            if(!$('#video-section').hasClass('active') &&  !$('div:last').hasClass('video-active')){
                $('#closer').css('display','none');
                $('#video-section').removeClass('active').fadeOut('fast');
                $('div:last').removeClass('video-active');
                $('#lightbox').fadeOut('fast');

            }
        }

        if (newHash.indexOf('-SEPSLIDE-start') >- 1){
            //$('#tracking-pixel').append('<img src="http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=19&mc=imp&pli=7753055&PluID=0&ord=[timestamp]&rtu=-1" style="height:1px;width:1px;" />');
            // this is where the you append a tracking pixel for tracking expansions


          

                    AdobeEdge.bootstrapCallback(function(compId){
                        edgeStartAnimation.startAnimation();
                    });


            //var t = setTimeout(function(){startSlideShow(t,slideInitYet);},100);
            // the true is for intro video
            var lhash = location.hash;
            // we don't want video to launch
            if(!isMobile.any){

               // openVideo('XMAS_BLOCKBUSTER_1-640.mp4','intro',true,'main.jpg');//it takes forth parameter for video poster image as eg. ('myVideo.mp4','intro',true,'myPosterImage.jpg/png/gif')
            }

        }
        if (newHash.indexOf('-SEPSLIDE-stop') >- 1){
            // clear intro time out
            if (typeof timedTrackerIntro !== 'undefined'){
                clearTimeout(timedTrackerIntro);
            }
            if(typeof closeSlideShow !== 'undefined'){
                closeSlideShow();
            }
            if ($('#video-container').length>0){
                closeVideo();
            }
            trackingCall('-events-unit closed-evente--soc-close-soe-/'+campaign+'/'+getKeywordInfo.info);
        }
    }

    getKeywordInfo = (function(){
        var data = location.hash;
        data = data.replace('#', '');
        if (data.length >= 2){
            var info = data;
        }
        return {
            info: info
        };
    })();

    $(document).ready(function(){


                    AdobeEdge.bootstrapCallback(function(compId){
                        edgeStartAnimation.startAnimation();
                    });

        if(isMobile.any){

            if ($('#video-container').length>0 && $('.mobileLaunchVideo').length>0){
                if($('#video-section, #video-container').css('marginTop')==0+'px'){
                    $('#video-section, #video-container').css({height:'82%',marginTop:'6.2%'});
                };
                $('#closer').css({width:'5%',height:'7%'});
                $('#arrow-down,#videoIcon').css('display','block');

                $('#arrow-down,#videoIcon').click(function(){
                    $('#video-section').show();
                    $('#closer').css('display','block').css('cursor','pointer');
                    $('#lightbox').fadeIn('fast');

                    //change that according to video
                    openVideo('XMAS_BLOCKBUSTER_1-640.mp4','intro',true,'main.jpg');//it takes forth parameter for video poster image as eg. ('myVideo.mp4','intro',true,'myPosterImage.jpg/png/gif')


                    //activate default play button on iphone
                    if(!isMobile.apple.phone){
                        jwplayer('video-container').play();
                    }

                    $('#arrow-down,#videoIcon').remove();

                });
            }

        }

        /* check if a lightbox exists, if not add a tiny one */
        //if($('#lightbox').length<1){
        //$('div:last').append('<div id="lightbox" style="width:1px !important;height:1px !important;opacity:0 !important;" />');
        //}
        /*
         (function(){
         var wsc=document.createElement('script');
         wsc.type='text/javascript';
         wsc.src=document.location.protocol+'//static.woopra.com/js/woopra.js';
         wsc.async=true;
         var ssc = document.getElementsByTagName('script')[0];
         ssc.parentNode.insertBefore(wsc, ssc);
         })();

         var _paq = _paq || [];
         (function(){ var u=(("https:" == document.location.protocol) ? "https://reports.adspdbl.com/piwik/" : "http://reports.adspdbl.com/piwik/");
         _paq.push(['setSiteId', 1]);
         var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0]; g.type='text/javascript'; g.defer=true; g.async=true; g.src=u+'piwik.js';
         s.parentNode.insertBefore(g,s); })();
         */
        // end analytics embed


        // set up function
        $(window).load(function(){

            // end code to determine which layer we are on and therefore which printer and printer category we are on
            // image resize

            // first layer slider

            /*
             $('#layerslider').css('display','none');
             $('#layerslider').layerSlider({
             skin : 'darkskin',
             skinsPath : 'http://files.adspdbl.com/layerslider/skins/',
             slideDelay: 5000,
             animateFirstLayer: false,
             parallaxIn          : .45,
             parallaxOut         : .45,
             durationIn          : 1500,
             durationOut         : 1000,
             easingIn            : 'easeInOutQuint',
             easingOut           : 'easeInOutQuint',
             autoStart           : false,
             navButtons          : false,
             navPrevNext         : false,
             pauseOnHover        : false,
             cbInit          : function(){

             //printerInit(lsdata.g.curLayerIndex);
             },
             cbAnimStop      : function(){
             var lsdata = $('#layerslider').layerSlider('data');
             if(lsdata.g.curLayerIndex==2){
             //var t = setTimeout(function(){$('#screen2').fadeOut('slow');},2000);

             }
             },
             cbAnimStart     : function(){
             }
             });
             $('#layerslider').css('display','block');
             */



        });

        // end window ready
        //end controls
        // hashchange detect

        $(window).on('hashchange',function(){hashChangedCallback(location.hash,'')});

        // video launcher button
        $('#video-launcher-button').css({opacity:0,display:'block',cursor:'pointer'});


        // jw player
        var videoPlayer = function(video,posterImage,videoPrettyName){
            // reset video click
            var str = video;
            var emptyString = '';
            var videoPosterPath = 'img/'+posterImage;
            var videoPosterImage = function(){if(posterImage!='undefined'){return videoPosterPath}else{return emptyString}}();
            videoClickState = false;
            jwplayer('video-container').setup({
                playlist: [{
                    image:videoPosterImage,
                    sources:[
                        {file: "rtmp://flash.adspdbl.com/cfx/st/mp4:"+campaign+'/'+video},
                        //{file: 'assets/' + video.replace("mp4","webm") },
                        // this next line is iphone streaming - need to have mp4 on maxcdn for this
                        //{file: "http://flash2.adspdbl.com/play/_definst_/mp4:vod/avidvideo.avidm/"+campaign+"/"+video+"/playlist.m3u8"},
                        {file: "http://files.adspdbl.com/sky_xmas_007/assets/"+video}
                    ]
                }],
                width: "99%",
                height: "99%",
                controls:videoControls,
                primary:(function(){
                    var rt = 'html5'
                    
                    return rt;
                }()),
                stretching:'exactfit',
                //mute:true,
                volume:20

            });


            var firstQreached = false,
                thirdQreached = false,
                halfReached = false,
                endReached = false;

            jwplayer('video-container').onComplete(function(){
                closeVideo(video,jwplayer('video-container').getDuration());

                edgeStartAnimation.videoCompleted();

                // log completed video
                trackingCall('-events-mousepress-evente--soc-'+videoPrettyName+' - Video end reached-soe--cos--coe-/'+campaign+'/'+getKeywordInfo.info);
            });



            // display click - but not for mobile
            if (!isMobile.any){
                jwplayer('video-container').onDisplayClick(function(){if(!videoClickState && (jwplayer('video-container').getState()=="PAUSED" || jwplayer('video-container').getState()=="PLAYING")){videoClickState = true;trackingCall('-redirects-'+clickTag+'-redirecte--events-Click-evente- -soc-Video-soe-/'+campaign+'/-cos-0-coe-/'+getKeywordInfo.info);}else{}});
            }
            // play if not mobile
            if(!isMobile.any){
                jwplayer('video-container').play();
            }




            // time logging
            var playing = false;
            var playingUnder5 = false;
            var playing30seconds = false;
            jwplayer('video-container').onTime(function(e){


                // track first play
                if(!playingUnder5){
                    if(videoPrettyName.toLowerCase().indexOf('intro')>-1) {
                        trackingCall('-events-Vplay - under 5 seconds -' + videoPrettyName + '-evente-/' + campaign + '/' + getKeywordInfo.info);
                    }
                    else {
                        trackingCall('-events-Video - play -' + videoPrettyName + '-evente-/' + campaign + '/' + getKeywordInfo.info);
                    }
                    playingUnder5 = true;
                }

                //track play on 5th second - only for intro videos
                if(!playing && e.position>4){
                    if(videoPrettyName.toLowerCase().indexOf('intro')>-1) {
                        trackingCall('-events-Video - play -' + videoPrettyName + '-evente-/' + campaign + '/' + getKeywordInfo.info);
                    }
                    playing = true;
                }

                // track 30 second mark if it exists!
                if(!playing30seconds && e.position>=30){
                    trackingCall('-events-Video - 30 seconds reached -' + videoPrettyName + '-evente-/' + campaign + '/' + getKeywordInfo.info);
                    playing30seconds = true;
                }

                var vidLength = e.duration;
                // remove initial actualview 5 seconds
                vidLength = vidLength - 5;
                var pos = e.position;
                var firstQ = (vidLength/4);
                var halfWay = vidLength/2;
                var thirdQ = (vidLength/4) * 3;

                // quartiles and halves
                if (pos>firstQ && !firstQreached){
                    // reached the first quartile
                    firstQreached = true;
                    trackingCall('-events-mousepress-evente--soc-'+videoPrettyName+' - Video first quartile-soe--cos--coe-/'+campaign+'/'+getKeywordInfo.info);
                }


                if (pos>halfWay && !halfReached){
                    // reached the halfway point
                    halfReached = true;
                    trackingCall('-events-mousepress-evente--soc-'+videoPrettyName+' - Video halfway-soe--cos--coe-/'+campaign+'/'+getKeywordInfo.info);
                }

                if (pos>thirdQ && !thirdQreached){
                    // reached the halfway point
                    thirdQreached = true;
                    trackingCall('-events-mousepress-evente--soc-'+videoPrettyName+' - Video third quartile-soe--cos--coe-/'+campaign+'/'+getKeywordInfo.info);
                }



                /*
                 var time = e.position;
                 if(time % 1 === 0 && inView){
                 var videoLogger = new Image();
                 videoLogger.src = "http://analysis.adspdbl.com/video-logging/analytics.gif?campaignName="+campaign+"&videoName="+video+"&time="+time;
                 }
                 */
            });



            var lohh = location.hash;
            jwplayer('video-container').setVolume(0);
            if (lohh.indexOf('bounty')<0 && lohh.indexOf('ibtimes')<0 && lohh.indexOf('techweekeurope.co.uk')<0 && lohh.indexOf('timeout')<0 && lohh.indexOf('carsite')<0 && lohh.indexOf('autovillage')<0 && lohh.indexOf('madeformums')<0 && lohh.indexOf('babyexpert')<0 && lohh.indexOf('newsnow')<0 && lohh.indexOf('avforums')<0 && lohh.indexOf('thelocal')<0){
                jwplayer('video-container').setVolume(20);
            }
            if(!isMobile.any){
                jwplayer('video-container').setControls(true);
            }

        };


        // video close

        var videoUp = true;

        /**
         * Function to close video in ad unit.
         * @return {[type]} [description]
         */
        window.closeVideo = function(file, duration){

            var vidState = jwplayer('video-container').getState();
            if (vidState !== null && typeof vidState !== "undefined" && ($('#video-section').hasClass('active') || $('div:last').hasClass('video-active'))){
                if (vidState.toLowerCase() !== 'idle' && ($('#video-section').hasClass('active') || $('div:last').hasClass('video-active'))){
                    trackingCall('-events-Video length '+currentVideo+'-evente--vls-'+jwplayer('video-container').getPosition()+'-vle-/'+campaign+'/'+getKeywordInfo.info);
                }
                else {
                    trackingCall('-events-Video length '+currentVideo+'-evente--vls-'+duration+'-vle-/'+campaign+'/'+getKeywordInfo.info);
                }
            }

            else if ($('#video-section').hasClass('active') || $('div:last').hasClass('video-active')){
                trackingCall('-events-Video length '+currentVideo+'-evente--vls-'+duration+'-vle-/'+campaign+'/'+getKeywordInfo.info);
            }

            jwplayer('video-container').stop();
            jwplayer('video-container').setMute(true);
            $('#closer').css('display','none');
            $('#video-section').removeClass('active').fadeOut('fast');
            $('div:last').removeClass('video-active');
            $('#lightbox').fadeOut('fast');

        };

        /**
         * Function to open video in an ad unit.
         * Handles tracking
         * @param  {[type]} file         Relative path file name of video
         * @param  {[type]} friendlyName Name to give to the video for tracking
         * @param  {[type]} introVideo   Boolean. True if the video is the intro
         * @return {[type]}              void
         */
        window.openVideo = function(file,friendlyName,introVideo,video_Poster_Image){


            console.log(file);
            console.log(friendlyName);
            console.log(introVideo);
            console.log(video_Poster_Image);
            // stop the slide show
            currentVideo = friendlyName;
            if (typeof trt !== "undefined"){
                clearTimeout(trt);
            }
            if (typeof cvtr !== "undefined"){
                clearTimeout(cvtr);
            }
            $('#lightbox').show();
            $('#video-section').show().addClass('active');
            // and to last div as addclass isn't liked in edge
            $('div:last').addClass('video-active');
            $('#lightbox').fadeIn('fast',function() {
                // Animation complete.
                // start video

                if(isMobile.any){
                    $('#closer').css('display','block').css('cursor','pointer');
                }else {
                    $('#closer').css('display','none');
                }



            });


            videoPlayer(file,video_Poster_Image,friendlyName);

        };




        // end video section


        // open sepslidestart initially
        if(location.hash.indexOf('SEPSLIDE-start')>-1){
            hashChangedCallback(location.hash,'');
        }



        // click new window open
        openWin = function(clickTag){
            $('#openLink').attr('href',clickTag);

            function fireClick(node){
                if ( document.createEvent ) {
                    var evt = document.createEvent('MouseEvents');
                    evt.initEvent('click', true, false);
                    node.dispatchEvent(evt);
                } else if( document.createEventObject ) {
                    node.fireEvent('onclick') ;
                } else if (typeof node.onclick == 'function' ) {
                    node.onclick();
                }

            }
            // different for IE8
            if(window.XDomainRequest && window.msPerformance == undefined){
                window.open(clickTag,'_blank');
            }
            else{
                fireClick(document.getElementById('openLink'));
            }




            //window.open(clickTag,'_blank');
            return false;
        };



        // mousepresses


        $('#next-arrow').on('click',function(e){
            $('#layerslider').layerSlider("next");
            trackingCall('-events-mousepress-evente--soc-next arrow-soe--cos-'+e.pageX+'-'+e.pageY+'-coe-/'+campaign+'/'+getKeywordInfo.info);
        });

        $('#previous-arrow').on('click',function(e){
            $('#layerslider').layerSlider("prev");
            trackingCall('-events-mousepress-evente--soc-previous arrow-soe--cos-'+e.pageX+'-'+e.pageY+'-coe-/'+campaign+'/'+getKeywordInfo.info);
        });


        // clicks
        $('#closer').on('click',function(e){
            trackingCall('-events-mousepress-evente--soc-close video-soe--cos-'+e.pageX+'-'+e.pageY+'-coe-/'+campaign+'/'+getKeywordInfo.info);
            closeVideo();
            e.stopPropagation();
            e.preventDefault();
        });

        edgeStartAnimation.closeVideofromEdge= function(e){
            trackingCall('-events-mousepress-evente--soc-close video-soe--cos-'+e.pageX+'-'+e.pageY+'-coe-/'+campaign+'/'+getKeywordInfo.info);
            closeVideo();
            e.stopPropagation();
            e.preventDefault();
        };




        $('.campaign-link').css('cursor','pointer').click(function(e){
            var frame = '';
            //section user has clicked.
            //var clickTag = $(this).attr('contextmenu');
            if (typeof $(this).attr('data-link')=='undefined'){
                clickTag = window.clickTag;
                var sect = $(this).data('title');
                trackingCall('-redirects-'+clickTag+'-redirecte-events-Click-evente- -soc-'+sect+'-soe-/'+campaign+'/-cos-'+e.pageX+'-'+e.pageY+'-coe-/'+getKeywordInfo.info);
            }
            else {
                var clickTagUnique = $(this).data('link');
                var sect = $(this).data('title');
                trackingCall('-redirects-'+clickTagUnique+'-redirecte-events-Click-evente- -soc-'+sect+'-soe-/'+campaign+'/-cos-'+e.pageX+'-'+e.pageY+'-coe-/'+getKeywordInfo.info);
            }

            // for creatives with > 1 hyperlink. include comment below.
            //openWin($(this).attr('contextmenu'));
            e.stopPropagation();
            e.preventDefault();
        });






        // end video slide show next and previous



// EDGE CLICKS or mousepresses (internal clicks)

// edge video click
        edgeVidClicked = false;
        window.edgeVideoClick = function(url){
            imgOverlay();
            if(!edgeVidClicked){
                myPlayer.pause();
                trackingCall('-redirects-'+videoLinks[0]+'-redirecte--events-Click-evente- -soc-Video-soe-/'+campaign+'/-cos-0-coe-/'+getKeywordInfo.info);
                $('video').attr('controls','true');
            }
            // video clicked once only
            edgeVidClicked = true;
        }

// pass in edge dom event,jquery dom element
        window.edgeClick = function(e,that,type){

            // click

            if (type == "click"){
                var frame = '';
                //section user has clicked.
                var clickTag;
                if (typeof that.data('link')=='undefined'){
                    clickTag = window.clickTag;

                }
                else {
                    clickTag = that.data('link');
                }
                var sect = that.data('title');
                trackingCall('-redirects-'+clickTag+'-redirecte-events-Click-evente- -soc-'+sect+'-soe-/'+campaign+'/-cos-'+e.pageX+'-'+e.pageY+'-coe-/'+getKeywordInfo.info);
                // for creatives with > 1 hyperlink. include comment below.
                //openWin($(this).attr('contextmenu'));
                e.stopPropagation();
                e.preventDefault();
            }
            else if (type=='mousepress'){
                var sect = that.data('title');
                if(sect.indexOf('Dwell')>-1){
                    var mousePressData = that.data('mousedata');
                    trackingCall('-events-mousepress-evente--soc-'+sect+'-soe--cos-'+mousePressData+'-coe-/'+campaign+'/'+getKeywordInfo.info);
                }
                else {
                    trackingCall('-events-mousepress-evente--soc-'+sect+'-soe--cos-'+e.pageX+'-'+e.pageY+'-coe-/'+campaign+'/'+getKeywordInfo.info);
                }


            }
        }

        // end clicks


    });




})();

