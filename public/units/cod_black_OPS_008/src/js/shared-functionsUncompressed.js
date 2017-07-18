/*
 * shared tracking functions
 */


(function () {
    var $ = ADSPDBLjQuery;
    var tubemogul = false;
    var contentplay = false;
    var mobAutoInitPause = false;
    var playAdonPlay = false;
    var vastadPaused = false;
    var contentPlayhostedHasplayed = false;
    var vastAdPausedOnce = false;
    var sound = false;
    var contentPlayNonHostedInit = false;
    var randomnumber = Math.floor(Math.random() * 10000000000);
    var lohh = location.hash;
    var mutedPublisher = (lohh.indexOf('radiotimes') < 0 && lohh.indexOf('bounty') < 0 && lohh.indexOf('ibtimes') < 0 && lohh.indexOf('techweekeurope.co.uk') < 0 && lohh.indexOf('timeout') < 0 && lohh.indexOf('carsite') < 0 && lohh.indexOf('autovillage') < 0 && lohh.indexOf('madeformums') < 0 && lohh.indexOf('babyexpert') < 0 && lohh.indexOf('newsnow') < 0 && lohh.indexOf('avforums') < 0 && lohh.indexOf('thelocal') < 0 && lohh.indexOf('game-debate') < 0 ? false: true);
    var launchesWithVideoMobileAutoplay = true;
    var mobileOverlayOnce = false;
    // This is the adsafe tag boolean
    var sepslideOnce = false;





    // ----- for videos using vast tag
    var hostedVastVideo = false;

    if (campaign.indexOf('-cp') > -1) {
        contentplay = true;
        // if not a collective campaign set below 'type' to false
        if(campaign.indexOf('CLT-') > -1)
        {
            type = 'collective';
            hostedVastVideo = true;
        }
        else {
            type = false;
            hostedVastVideo = false;
        }

    }

    if (campaign.indexOf('-tm') > -1) {
        tubemogul = true;
    }
    // global unit in view
    var currentlyInView = false;
    var currentlyExpanded = false;


    var processMessage = function (event) {
        if (event.data == "is in view") {
            currentlyInView = true;
        }
        else if (event.data == "not in view") {
            currentlyInView = false;
        }
        else if (event.data == "is in view,expanded") {
            currentlyInView = true;
            currentlyExpanded = true;
        }
        else if (event.data == "is in view,not expanded") {
            currentlyInView = true;
            currentlyExpanded = false;
        }

        else if (event.data == "not in view,not expanded") {
            currentlyInView = false;
            currentlyExpanded = false;
        }

        else if (event.data == "not in view,expanded") {
            currentlyInView = false;
            currentlyExpanded = true;
        }
    }

    // message listener
    window.addEventListener("message", processMessage, false);

    // global timer
    window.globalTimer = function () {

        var that = this;
        this.timer = 0;
        this.thingToTrack;
        this.interval;
        this.running = false;
        this.start = function (thingToTrack) {
            if (!currentlyInView) {
                return;
            }
            that.stop();
            that.thingToTrack = thingToTrack;
            that.timer = 0;
            that.running = true;
            that.interval = setInterval(function () {
                if (!window.currentlyInView || that.timer > 500) {
                    that.stop();
                }
                else {
                    that.timer += 0.5;
                }
            }, 500);
        };
        this.stop = function () {

            if (that.running) {
                that.running = false;
                clearInterval(that.interval);
                trackingCall('-events-mousepress-evente--soc-' + that.thingToTrack + ' time in view-soe--cos-' + that.timer + '-coe-/' + campaign + '/' + getKeywordInfo.info);
            }

        };


    }
    // mobile phone - autopay
    var mobilePauseClear = false;

    // Bowser - browser detection
    var bowser = function () {
        function t(t) {
            function n(e) {
                var n = t.match(e);
                return n && n.length > 1 && n[1] || ""
            }

            var r = n(/(ipod|iphone|ipad)/i).toLowerCase(), i = /like android/i.test(t), s = !i && /android/i.test(t), o = n(/version\/(\d+(\.\d+)?)/i), u = /tablet/i.test(t), a = !u && /[^-]mobi/i.test(t), f;
            if (/opera|opr/i.test(t)) {
                f = {name: "Opera", opera: e, version: o || n(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)}
            } else if (/windows phone/i.test(t)) {
                f = {name: "Windows Phone", windowsphone: e, msie: e, version: n(/iemobile\/(\d+(\.\d+)?)/i)}
            } else if (/msie|trident/i.test(t)) {
                f = {name: "Internet Explorer", msie: e, version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)}
            } else if (/chrome|crios|crmo/i.test(t)) {
                f = {name: "Chrome", chrome: e, version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}
            } else if (r) {
                f = {name: r == "iphone" ? "iPhone" : r == "ipad" ? "iPad" : "iPod"};
                if (o) {
                    f.version = o
                }
            } else if (/sailfish/i.test(t)) {
                f = {name: "Sailfish", sailfish: e, version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}
            } else if (/seamonkey\//i.test(t)) {
                f = {name: "SeaMonkey", seamonkey: e, version: n(/seamonkey\/(\d+(\.\d+)?)/i)}
            } else if (/firefox|iceweasel/i.test(t)) {
                f = {name: "Firefox", firefox: e, version: n(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)};
                if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t)) {
                    f.firefoxos = e
                }
            } else if (/silk/i.test(t)) {
                f = {name: "Amazon Silk", silk: e, version: n(/silk\/(\d+(\.\d+)?)/i)}
            } else if (s) {
                f = {name: "Android", version: o}
            } else if (/phantom/i.test(t)) {
                f = {name: "PhantomJS", phantom: e, version: n(/phantomjs\/(\d+(\.\d+)?)/i)}
            } else if (/blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t)) {
                f = {name: "BlackBerry", blackberry: e, version: o || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}
            } else if (/(web|hpw)os/i.test(t)) {
                f = {name: "WebOS", webos: e, version: o || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)};
                /touchpad\//i.test(t) && (f.touchpad = e)
            } else if (/bada/i.test(t)) {
                f = {name: "Bada", bada: e, version: n(/dolfin\/(\d+(\.\d+)?)/i)}
            } else if (/tizen/i.test(t)) {
                f = {name: "Tizen", tizen: e, version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || o}
            } else if (/safari/i.test(t)) {
                f = {name: "Safari", safari: e, version: o}
            } else f = {};
            if (/(apple)?webkit/i.test(t)) {
                f.name = f.name || "Webkit";
                f.webkit = e;
                if (!f.version && o) {
                    f.version = o
                }
            } else if (!f.opera && /gecko\//i.test(t)) {
                f.name = f.name || "Gecko";
                f.gecko = e;
                f.version = f.version || n(/gecko\/(\d+(\.\d+)?)/i)
            }
            if (s || f.silk) {
                f.android = e
            } else if (r) {
                f[r] = e;
                f.ios = e
            }
            var l = "";
            if (r) {
                l = n(/os (\d+([_\s]\d+)*) like mac os x/i);
                l = l.replace(/[_\s]/g, ".")
            } else if (s) {
                l = n(/android[ \/-](\d+(\.\d+)*)/i)
            } else if (f.windowsphone) {
                l = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i)
            } else if (f.webos) {
                l = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i)
            } else if (f.blackberry) {
                l = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i)
            } else if (f.bada) {
                l = n(/bada\/(\d+(\.\d+)*)/i)
            } else if (f.tizen) {
                l = n(/tizen[\/\s](\d+(\.\d+)*)/i)
            }
            if (l) {
                f.osversion = l
            }
            var c = l.split(".")[0];
            if (u || r == "ipad" || s && (c == 3 || c == 4 && !a) || f.silk) {
                f.tablet = e
            } else if (a || r == "iphone" || r == "ipod" || s || f.blackberry || f.webos || f.bada) {
                f.mobile = e
            }
            if (f.msie && f.version >= 10 || f.chrome && f.version >= 20 || f.firefox && f.version >= 20 || f.safari && f.version >= 6 || f.opera && f.version >= 10 || f.ios && f.osversion && f.osversion.split(".")[0] >= 6 || f.blackberry && f.version >= 10.1) {
                f.a = e
            } else if (f.msie && f.version < 10 || f.chrome && f.version < 20 || f.firefox && f.version < 20 || f.safari && f.version < 6 || f.opera && f.version < 10 || f.ios && f.osversion && f.osversion.split(".")[0] < 6) {
                f.c = e
            } else f.x = e;
            return f
        }

        var e = true;
        var n = t(typeof navigator !== "undefined" ? navigator.userAgent : "");
        n._detect = t;
        return n
    }();

    //--- PUT VAST TAGS IN HERE

    // source of vast tag
    var source = "" + Math.floor(Math.random() * 10000000000) + ";dcmt=text/xml";

    // collective safari
    if(contentplay && hostedVastVideo && ((bowser.ios && bowser.name=="iPad") || (bowser.safari))){
        applesource = ""; //apple
    }

    var videoMobileDevices = ((isMobile.apple.tablet && bowser.ios) || (isMobile.android.device && bowser.chrome) ? true : false);




    // global video logging timer
    videoLoggerInterval = '';
    var randomnumber = Math.floor(Math.random() * 10000000000);


    // content play alter index.html so you don't have to!
    if (contentplay || tubemogul) {
        var cpStyles = '<style> #video-section { position:absolute; top:0; left:0%; height:100%; width:100%; z-index:10; margin:auto; } #closer{ position: absolute; top:1.4%; z-index:100; right:1%; cursor:pointer; } #video-expand-bar { display:block; position:absolute; display:none; cursor:pointer; } #video-section #video-container { height: 100% !important; margin: auto; overflow: hidden; /*margin-top:6.2%;*/ width: 100%; } #lightbox { width:100%; height:100%; position:absolute; top:0; left:0; background-color:black; z-index:5; -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)"; filter: alpha(opacity=80); opacity:0.8; }</style>';
        var cpBody = '<div style="width:100%;height:100%;position:absolute;"> <div id="container" style="margin:0;padding:0;height:100%;background: url(img/loader-bar.gif) no-repeat center center;"> <!-- video section--> <div id="video-section"> <!-- end video expand -bar--> <div id="video-container"> </div> </div> <!-- end video section--> <!-- lightbox--> <div id="lightbox"></div> </div> </div>';

        $('body div:eq(1)').remove();

        $('body').prepend(cpBody);
        $('body').prepend(cpStyles);


        // tube mogul tags


        // mobile tag
        if (tubemogul) {
            if (isMobile.any) {
                source = "http://rtb.tubemogul.com/--nt/vast2/3pZMIW3Sdn6tK3isBUkR/?duration=30&app_name=" + encodeURIComponent(document.referrer) + "&app_id=" + encodeURIComponent(document.referrer) + "&rtb_type=instream_mobile_vast_inter&random=" + randomnumber;
                type = "Mobile";
            }
            else {

                var rd = Math.floor((Math.random() * 2) + 1);


                if (rd == 1) {
                    // vast
                    source = "http://rtb.tubemogul.com/--nt/vast2/Csj3RQiUPpRdYNK0gD9l/?duration=30&url=" + encodeURIComponent(document.referrer) + "&vpaid=T";
                    //console.log('vast');
                    type = 'vast';
                }
                else {
                    // vpaid
                    source = "http://rtb.tubemogul.com/--nt/vast2/qu0BHyy015GLuYx5fUH9/?duration=30&url=" + encodeURIComponent(document.referrer) + "&vpaid=T";
                    //console.log('vpaid');
                    type = 'vpaid';
                }


            }


            source = "http://rtb.tubemogul.com/vast2/04FGdj3bENdyl6ydZdoQ/?duration=30&url=" + encodeURIComponent(document.referrer) + "&vpaid=T";

        }

    }
    // end content play
    var playFired = false;

    // get all the domain etc
    // all hash data - global
    completeHash = location.hash;
    // path and domain
    var patt1 = /.*?-ps-(.*?)-pe-.*/gim;
    var patt2 = /.*?-ds-(.*?)-de-.*/gim;
    keywordStrPatt = /.*?-skey-(.*?)-ekey-.*/gim;

    // keywords
    keywordStr = keywordStrPatt.exec(completeHash);
    if (keywordStr !== null && keywordStr[1] !== null) {
        keywordStr = keywordStr[1];
    }

    completeUrlformatted = patt1.exec(completeHash);

    // audience data (random number passed from config file)

    var audPatt = /.*?-auds-(.*?)-aude-.*/gim;

    var tempAudStore = audPatt.exec(completeHash);
    //window.aud = tempAudStore[1];
    window.aud = 1;

    // end audience data

    if (completeUrlformatted !== null) {
        completeUrlformatted = completeUrlformatted[1];
        completeDomain = patt2.exec(completeHash);
        completeDomain = completeDomain[1];
    }
    // end all hash data

    // MOBILE SOLUTION to detect at least a 500ms touch

    // set touching to false by default
    touching = false;
    touchCounter = 0;
    // touching timer
    var touchTimer = function () {
        tTimer = setTimeout(function () {
            touchCounter += 100;
            if (touching) {
                touchTimer();
            }
            else {
                clearTimeout(tTimer);
            }
        }, 100)
    };


    // -- detect finger lifting off

    // global touch on/off event to detect touching state

    var element = document.getElementsByTagName('body');
    element = element[0];

    var hammertime = Hammer(element).on("touch", function (event) {
        touching = true;
        touchCounter = 0;
        touchTimer();
        //console.log(touching+' there');
    });

    var hammerOff = Hammer(element).on("release", function (event) {
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

// mobile video controls
    if (isMobile.any) {
        videoControls = true;
    }
    else {
        videoControls = false;
    }
    // end mobiles


    var videoClickState = false;
    // audience variable set if required
    if (typeof aud === 'undefined') {
        var aud = '';
    }
    // global current video
    currentVideo = "";
    // 3 layer random
    var layerOrder = 1 + Math.floor(Math.random() * 3);


    // Tracking


    // postmessgae tracking
    postMessageTracking = function (tracking) {
        parent.postMessage(tracking, "http://" + completeDomain);

    };

    trackingCall = function (info) {

        // all hash data
        var completeHash = location.hash;

        // path and domain
        var patt1 = /.*?-ps-(.*?)-pe-.*/gim;
        var patt2 = /.*?-ds-(.*?)-de-.*/gim;
        var keywordStrPatt = /.*?-skey-(.*?)-ekey-.*/gim;

        var completeUrlformatted = patt1.exec(completeHash);

        if (completeUrlformatted !== null) {
            completeUrlformatted = completeUrlformatted[1];
            var completeDomain = patt2.exec(completeHash);
            completeDomain = completeDomain[1];
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
        if ($('#adspdbl_trfr').length > 0) {
            $('#adspdbl_trfr').remove();
        }
        if ($('#adspdbl_trpx').length > 0) {
            $('#adspdbl_trpx').remove();
        }

        // type of event
        if (infoTemp.indexOf('redirects') > -1) {
            state = 'click';
        }


        else if (infoTemp.indexOf('mapping') > -1) {
            state = 'mapping';

        }
        else if (infoTemp.indexOf('time-on-unit') > -1) {
            state = 'time-on-unit';
            timeUnit = pattTime.exec(info);
            if (timeUnit !== null && timeUnit[1] !== null) {
                timeUnit = timeUnit[1];
                general = timeUnit;
            }
        }
        else if (infoTemp.indexOf('time-expanded') > -1) {
            state = 'time-expanded';
            timeExp = expandTimerPatt.exec(info);
            if (timeExp !== null && timeExp[1] !== null) {
                timeExp = timeExp[1];
                general = timeExp;
            }
        }
        else {
            generic = genericEventPatt.exec(info);
            if (generic !== null && generic[1] !== null) {
                generic = generic[1];
                state = generic;
            }
            else {
                state = 'unknown';
            }
        }

        // ANALYTIC DATA TO SEND
        // cordinates
        if (info.indexOf('-cos-') > -1) {
            clickCord = pattCo.exec(info);
            if (clickCord !== null && clickCord[1] !== null) {
                clickCord = clickCord[1];
                general = clickCord;
            }
        }
        // video play length
        if (info.indexOf('-vls-') > -1) {
            videoLength = videoLengthPatt.exec(info);
            if (videoLength !== null && videoLength[1] !== null) {
                videoLength = videoLength[1];
                general = videoLength;
                // is video in view
                if (location.hash.indexOf('trueview') > -1) {
                    //clickTitle = 'Video not in view';
                }

            }
        }
        // is video still in view?
        if (info.indexOf('- play -') > -1) {
            if (location.hash.indexOf('trueview') > -1) {
                //general = 'Video not in view';
            }
        }

        // click title
        clickTitle = clickTitlePatt.exec(info);
        if (clickTitle !== null && clickTitle[1] !== null) {
            clickTitle = clickTitle[1];
        }
        //redirect link
        if (info.indexOf('-redirects-') > -1) {
            clickRedirect = redirectPatt.exec(info);
            if (clickRedirect !== null && clickRedirect[1] !== null) {
                clickRedirect = clickRedirect[1];
            }
        }

        keywordStr = keywordStrPatt.exec(completeHash);
        if (keywordStr !== null && keywordStr[1] !== null) {
            keywordStr = keywordStr[1];
        }


        var trackerV2 = new Image();
        trackerV2.id = "adspdbl_trpx";
        var ran = Math.floor(Math.random() * 1000);
        var pSrc;
        if (state === 'click') {

            // start our timer here if its a mobile (are they clicking deliberately)
            if (isMobile.any) {

                // hand over to the mobile click timer and return
                if (touchCounter < 600) {
                    pSrc = "http://adbreak-1124610337.us-east-1.elb.amazonaws.com/redirectclicks.php?redirectAdsp=" + encodeURIComponent(clickRedirect) + "&ran=" + ran + "&type=event&state=" + state + "&audience=" + window.aud + "&campaign=" + campaign + "&general=" + general + "&click_title=" + clickTitle + "&resolution=" + $(window).width() + "x" + $(window).height() + "&keyword_data=" + keywordStr + "&domain=" + completeDomain + "&path=" + completeUrlformatted;

                }
                else {
                    return;
                }
            }
            // not mobile
            else {
                pSrc = "http://adbreak-1124610337.us-east-1.elb.amazonaws.com/redirectclicks.php?redirectAdsp=" + encodeURIComponent(clickRedirect) + "&ran=" + ran + "&type=event&state=" + state + "&audience=" + window.aud + "&campaign=" + campaign + "&general=" + general + "&click_title=" + clickTitle + "&resolution=" + $(window).width() + "x" + $(window).height() + "&keyword_data=" + keywordStr + "&domain=" + completeDomain + "&path=" + completeUrlformatted;
            }
        }
        else {
            pSrc = "http://adbreak-1124610337.us-east-1.elb.amazonaws.com/analytics.gif?ran=" + ran + "&type=event&state=" + state + "&audience=" + window.aud + "&campaign=" + campaign + "&general=" + general + "&click_title=" + clickTitle + "&resolution=" + $(window).width() + "x" + $(window).height() + "&keyword_data=" + keywordStr + "&domain=" + completeDomain + "&path=" + completeUrlformatted;
        }
        if (pSrc.length > 2000) {
            pSrc = pSrc.substr(0, 1999);
        }

        if (state === 'click') {
            openWin(pSrc);
        }
        else {
            //postMessageTracking(pSrc);

            //change
            /*if (completeDomain.indexOf('pcwelt') > -1 || completeDomain.indexOf('freeads') > -1) {
                postMessageTracking(pSrc);
            }
            else {
                trackerV2.src = pSrc;
            }*/

        }
    };

    // end tracking


    // start/stop slide show
    var startSlideShow = function (t, slideInitYet) {
        if (typeof AdobeEdge == 'undefined') {
            setTimeout(function () {
                startSlideShow();
            }, 50);
        }
        else {
            if (typeof AdobeEdge.getComposition == 'undefined') {
                setTimeout(function () {
                    startSlideShow();
                }, 50);
            }
            else {
                var comp = AdobeEdge.getComposition("EDGE-1769983");
                if (typeof comp == 'undefined') {
                    setTimeout(function () {
                        startSlideShow();
                    }, 50);
                }
                else {
                    comp.play(0);
                }
            }


        }
        clearTimeout(t);
    };

    // get video file name
    getVideoFileName = function () {
        var nicename;
        if (jwplayer().renderingMode === "flash") {
            niceName = jwplayer().getPlaylistItem().file;
        }
        else {
            niceName = jwplayer().getPlaylistItem().sources[0].file;
        }
        if (niceName.lastIndexOf('/') > -1) {
            var lastSlash = niceName.lastIndexOf('/');
            niceName = niceName.substring(lastSlash + 1);
        }

        return niceName;
    };
    // end get video file name

    // This variable is important as it allows us to stop the slide show before the timer starts it when a user first arrives if for example they hit stop
    var slideInitYet = false;

    function hashChangedCallback(newHash, oldHash) {

        postMessageTracking('eiv');


        if (newHash.indexOf('-trueview') > -1) {
            // content play or not (pause video if content play)
            if (!contentplay && !tubemogul) {
                // if video not iniaited yet remove lightbox etc
                if (!$('#video-section').hasClass('active') && !$('div:last').hasClass('video-active')) {
                    $('#closer').css('display', 'none');
                    $('#video-section').removeClass('active').fadeOut('fast');
                    $('div:last').removeClass('video-active');
                    $('#lightbox').fadeOut('fast');

                }
                else {
                    jwplayer().setMute(true);
                }

            }
            else {

                if (typeof jwplayer() != 'undefined') {

                    if (contentplay && hostedVastVideo) {
                        var vc = $('#video-container video').get(0);
                        if($('#video-container video').length>0) {
                            //vc.pause();
                        }
                    }
                    else {
                        if (contentplay) {
                            //jwplayer().pause(true);
                        }
                    }
                }
            }


        }


        if (newHash.indexOf('-SEPSLIDE-start') > -1) {
            //$('#tracking-pixel').append('<img src="http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=19&mc=imp&pli=7753055&PluID=0&ord=[timestamp]&rtu=-1" style="height:1px;width:1px;" />');
            // this is where the you append a tracking pixel for tracking expansions


            var defined = false;
            var t = setInterval(function(){

                if(typeof AdobeEdge !== 'undefined'){

                    clearInterval(t);
                    AdobeEdge.bootstrapCallback(function(compId){

                        if(!defined){
                            defined = true;
                            var k = setInterval(function(){

                                if(typeof edgeStartAnimation.playBG_video !== 'undefined'){
                                    clearInterval(k);
                                    if(!isMobile.any){
                                        edgeStartAnimation.playBG_video();
                                    }

                                }
                            },400 );
                        }

                    });
                }
            },400 );


            //var t = setTimeout(function(){startSlideShow(t,slideInitYet);},100);
            // the true is for intro video
            var lhash = location.hash;
            // we don't want video to launch

            // if its a video unit
            if ($('#video-section').length > 0) {

                // remove overlay if its still there
                if (videoMobileDevices && (launchesWithVideoMobileAutoplay || contentplay || tubemogul)) {
                    postMessageTracking('firstClick');
                    $('#mle-oly').remove();
                }

                if (typeof jwplayer() == 'undefined') {
                    console.log('open video');
                    openVideo('UK_30357_COD_BO3_LiveAction_Digital_30s_UK_PostLaunch_buy_now-640.mp4','intro',true,'UK_30357_COD_BO3_LiveAction_Digital_30s_UK_PostLaunch_buy_now-640.jpg');

                }
                else {
                    // loop until video is ready to play
                    tmPlayerReadyTimer = '';
                    tmPlayerReady = function () {
                        if (typeof jwplayer() != 'undefined' && (jwplayer().getState() == "PAUSED" || jwplayer().getState() == "IDLE")) {

                            if (!isMobile.any || videoMobileDevices) {
                                /*if (tubemogul || hostedVastVideo) {
                                 jwplayer().onBeforePlay(function () {
                                 jwplayer().playAd(source);

                                 });
                                 }*/
                                // vast tag replay when back in view
                                if (contentplay && vastadPaused) {
                                    var vc = $('#video-container video').get(0);
                                    postMessageTracking('eiv');
                                    vc.play();
                                    vastadPaused = false;
                                }
                                else {

                                    if (jwplayer().getState() == "IDLE" && videoMobileDevices) {
                                        //jwplayer().play(true);
                                    }
                                    else {
                                        jwplayer().play(true);
                                    }
                                }

                                mobilePauseClear = true;

                            }
                            clearTimeout(tmPlayerReadyTimer);

                        }
                        else if (jwplayer().getState() == "PLAYING" || jwplayer().getState() == "BUFFERING") {

                            clearTimeout(tmPlayerReadyTimer);
                        }
                        else {
                            tmPlayerReadyTimer = setTimeout(function () {
                                tmPlayerReady();
                            }, 100);
                        }

                    }
                    // start video play loop - wait for ready to play
                    /************    exception **************/
                    tmPlayerReady();
                    /************    exception **************/
                }

            }


        }
        if (newHash.indexOf('-SEPSLIDE-stop') > -1) {
            // clear intro time out
            if (typeof timedTrackerIntro !== 'undefined') {
                clearTimeout(timedTrackerIntro);
            }
            if (typeof closeSlideShow !== 'undefined') {
                closeSlideShow();
            }

            //clear tube mogul timeout
            clearTimeout(tmPlayerReadyTimer);


            // content play or not?
            if (!contentplay) {
                if ($('#video-container').length > 0) {
                    closeVideo();
                }
            }
            else {
                // if content play, stop video but don't remove
                if ($('#video-container').length > 0) {
                    // stop timer to see if video ready
                    clearTimeout(tmPlayerReadyTimer);
                    jwplayer().setMute(true);
                    closeVideo();
                }
            }
            // end content play conditional
            trackingCall('-events-unit closed-evente--soc-close-soe-/' + campaign + '/' + getKeywordInfo.info);
        }
    }

    getKeywordInfo = (function () {
        var data = location.hash;
        data = data.replace('#', '');
        if (data.length >= 2) {
            var info = data;
        }
        return {
            info: info
        };
    })();


    // jw player
    var videoPlayer = function (video, posterImage, videoPrettyName, introVideo) {
        // reset video click
        var str = video;
        var emptyString = '';
        var videoPosterPath = 'img/' + posterImage;
        var videoPosterImage = function () {
            if (posterImage != 'undefined') {
                return videoPosterPath
            } else {
                return emptyString
            }
        }();
        videoClickState = false;


        jwplayer.key = "LsFu9dvN3vqUGyQj2fLGovCdzwau2NBj";

        // dev or live?
        var hlsUri = 'files.adspdbl.com';
        if (document.domain.indexOf('campaigns') > -1) {
            hlsUri = 'campaigns.adspdbl.com';
        }

        if (tubemogul) {
            // advertisment version
            jwplayer('video-container').setup({
                advertising: (isMobile.any ? {"client": "vast"} : {"client": "vast", "tag": source}),
                analytics: {"enabled": true},
                aspectratio: "16:9",
                autostart: false,
                controls: true,
                displaytitle: false,
                fallback: false,
                playlist: [{
                    image: videoPosterImage,
                    sources: [
                        {file: "rtmp://flash.adspdbl.com/cfx/st/mp4:tube-mogul-test-2015-tm/new-vid-640.mp4"},
                        {file: "http://files.adspdbl.com/assets/new-vid-640.mp4"}
                    ]
                }],
                //enableVolume: true,
                primary: "html5",
                repeat: false,
                stagevideo: false,
                stretching: "uniform",
                width: "100%",
                mute: true

            });
        }
        else if (hostedVastVideo) {
            jwplayer('video-container').setup({
                advertising: {"client": "vast"},
                playlist: [{
                    image: videoPosterImage,
                    sources: [
                        /*{file: "rtmp://flash.adspdbl.com/cfx/st/mp4:" + campaign + '/' + video},
                         {file: 'assets/' + video.replace("mp4", "webm")},
                         // this next line is iphone streaming - need to have mp4 on maxcdn for this
                         //{file: "http://flash2.adspdbl.com/play/_definst_/mp4:vod/avidvideo.avidm/"+campaign+"/"+video+"/playlist.m3u8"},*/
                        {file: "http://files.adspdbl.com/assets/blank.mp4"},
                        {file: "http://files.adspdbl.com/assets/blank.webm"}


                    ]
                }],
                width: "100%",
                height: "100%",
                controls: videoControls,
                autostart: false,
                //androidhls:true,
                primary: (function () {
                    var rt = 'html5';

                    return rt;
                }()),
                stretching: 'uniform',
                mute: true


            });
        }

        else {
            jwplayer('video-container').setup({
                playlist: [{
                    image: videoPosterImage,
                    sources: [
                        /*{file: "rtmp://flash.adspdbl.com/cfx/st/mp4:" + campaign + '/' + video},
                         {file: 'assets/' + video.replace("mp4", "webm")},
                         // this next line is iphone streaming - need to have mp4 on maxcdn for this
                         //{file: "http://flash2.adspdbl.com/play/_definst_/mp4:vod/avidvideo.avidm/"+campaign+"/"+video+"/playlist.m3u8"},*/

                        {file: "http://files.adspdbl.com/cod_black_OPS_008/assets/" + video.replace('m3u8', 'mp4')},
                        {file: "http://files.adspdbl.com/cod_black_OPS_008/assets/" + video.replace('m3u8', 'webm')}

                        //{file: "http://" + hlsUri + "/" + campaign + "/assets/" + video}
                    ]
                }],
                width: "100%",
                height: "100%",
                controls: videoControls,
                autostart: true,
                //androidhls:true,
                primary: (function () {
                        rt = 'html5';
                    return rt;
                }()),
                stretching: 'uniform',
                mute: true


            });
        }



        var firstQreached = false,
            thirdQreached = false,
            halfReached = false,
            endReached = false,
            isAdPlaying = true;


        jwplayer().onAdError(function (e) {
            // log ad error and mute
            trackingCall('-events-mousepress-evente--soc-AD Error-soe--cos--coe-/' + campaign + '/' + getKeywordInfo.info);
            jwplayer().setMute(true);
        });





        // display click - but not for mobile
        if (!isMobile.any) {
            jwplayer().onDisplayClick(function () {
                if (!videoClickState && (jwplayer().getState() == "PAUSED" || jwplayer().getState() == "PLAYING")) {
                    videoClickState = true;
                    trackingCall('-redirects-' + clickTag + '-redirecte--events-Click-evente- -soc-Video-soe-/' + campaign + '/-cos-0-coe-/' + getKeywordInfo.info);
                } else {
                }
            });
        }
        else if(contentplay) {
            jwplayer().onDisplayClick(function () {
                if (!videoClickState && (jwplayer().getState() == "PAUSED" || jwplayer().getState() == "PLAYING")) {
                    videoClickState = true;
                    trackingCall('-redirects-' + clickTag + '-redirecte--events-Click-evente- -soc-Video-soe-/' + campaign + '/-cos-0-coe-/' + getKeywordInfo.info);
                } else {
                }
            });
        }


        // ad tracking

        if (tubemogul || contentplay) {

            //make sure message to expand unit is only sent once per session
            var adtime = false;

            jwplayer("video-container").onAdImpression(function (e) {

                postMessageTracking('aiv');
                trackingCall('-events-mousepress-evente--soc-Vast ad start ' + type + '-soe--cos--coe-/' + campaign + '/' + getKeywordInfo.info);
                // we have an ad so open the unit
                if (!adtime) {
                    postMessageTracking('tm-adplay');
                    if (!vastAdPausedOnce) {
                        // if ad is in view we want it to play
                        if (!currentlyInView) {
                            var vc = $('#video-container video').get(0);
                            postMessageTracking('eiv');
                            if($('#video-container video').length>0) {
                                //vc.pause();
                            }
                        }
                        vastAdPausedOnce = true;

                    }
                    adtime = true;
                }

            });


            // onadclick
            jwplayer("video-container").onAdClick(function () {
                trackingCall('-events-mousepress-evente--soc-Vast ad click ' + type + '-soe--cos--coe-/' + campaign + '/' + getKeywordInfo.info);
            });

            // on ad fullscreen
            jwplayer("video-container").onFullscreen(function (e) {
                if (!e.fullscreen) {
                    var message;
                    if (isAdPlaying) {
                        message = 'Vast fullscreen ' + type;
                    }
                    else {
                        message = 'Video fullscreen ' + type;
                    }
                    trackingCall('-events-mousepress-evente--soc-' + message + '--soe--cos--coe-/' + campaign + '/' + getKeywordInfo.info);
                }
            });

            // on ad skipped
            jwplayer("video-container").onAdSkipped(function () {
                isAdPlaying = false;
                trackingCall('-events-mousepress-evente--soc-Vast ad skipped ' + type + '-soe--cos--coe-/' + campaign + '/' + getKeywordInfo.info);

            });

            // on ad paused
            jwplayer("video-container").onAdPause(function () {
                isAdPlaying = false;
                vastadPaused = true;
                trackingCall('-events-mousepress-evente--soc-Vast ad paused ' + type + '-soe--cos--coe-/' + campaign + '/' + getKeywordInfo.info);

            });


            // on ad complete
            jwplayer("video-container").onAdComplete(function () {


                isAdPlaying = false;
                trackingCall('-events-mousepress-evente--soc-Vast ad complete ' + type + '-soe--cos--coe-/' + campaign + '/' + getKeywordInfo.info);
                postMessageTracking('closeUnit');

            });




        }
        // autoplay for mobile
        if (videoMobileDevices && !mobileOverlayOnce && (launchesWithVideoMobileAutoplay || tubemogul || contentplay)) {

            // this should only happen once
            mobileOverlayOnce = true;

            $('body').append('<div id="mle-oly" style="position:absolute;top:0;left:0;z-index:50000;background-color:white;width:100%;height:100%;" />');


            $('#mle-oly').on("touchstart", function (event) {

                if (!playFired) {

                    playFired = true;
                    jwplayer().play(true);


                    postMessageTracking('firstClick');
                    $('#mle-oly').remove();
                }
            });

            $('#mle-oly').on("mouseover", function (event) {

                if (!playFired) {

                    playFired = true;
                    jwplayer().play(true);


                    postMessageTracking('firstClick');
                    $('#mle-oly').remove();
                }
            });

            // when video ready trigger overlay in parent publisher page
            var videoStatusTo;
            var videoStatusFunc = function () {
                if (jwplayer().getState() == 'BUFFERING' || jwplayer().getState() == 'IDLE' || jwplayer().getState() == 'PLAYING') {
                    clearTimeout(videoStatusTo);
                    if (location.hash.indexOf('SEPSLIDE-start') < 0) {
                        postMessageTracking('apply detection');
                    }
                }
                else {
                    videoStatusTo = setTimeout(function () {
                        videoStatusFunc();
                    }, 100);
                }
            }
            videoStatusFunc();


        }
        var vidTimerReadyTo;
        var vidTimerReady = function () {
             jwplayer().play(true);
            clearTimeout(vidTimerReadyTo);
            if (jwplayer().getState() == 'IDLE' || jwplayer().getState() == 'BUFFERING') {
                if (location.hash.indexOf('SEPSLIDE-start') < 0 ) {

                    jwplayer().play(true);

                }
                else {
                    jwplayer().play(true);
                    //mobilePauseClear = true;
                }

            }
            else {

                vidTimerReadyTo = setTimeout(function () {
                    vidTimerReady();
                }, 100);

            }
        }

        if (!isMobile.any) {
            // play on desktop
            vidTimerReady();
        }


        // time logging
        var playing = false;
        var playingUnder5 = false;
        var playing30seconds = false;
        var end_reached = false;


        jwplayer().onTime(function (e) {

            // remove video if ad doesn't exist
            if (tubemogul && !adtime) {
                jwplayer().remove();
                adtime = true;
            }
            if (contentplay && !hostedVastVideo && !contentPlayNonHostedInit) {
                postMessageTracking('tm-adplay');

                if (location.hash.indexOf('SEPSLIDE-start') < 0) {
                    //jwplayer().pause();

                }


                contentPlayNonHostedInit = true;
            }

            if (contentplay && !mobAutoInitPause) {
                if (location.hash.indexOf('SEPSLIDE-start') < 0) {
                    mobAutoInitPause = true;
                    jwplayer().pause(true);
                }
            }

            if (!contentplay && !mobAutoInitPause) {
                if (location.hash.indexOf('SEPSLIDE-start') < 0 && location.hash.indexOf('trueview') < 0) {
                    mobAutoInitPause = true;
                    //jwplayer().pause(true);
                }
                else if (!currentlyExpanded) {
                    mobAutoInitPause = true;
                    //jwplayer().pause(true);
                }
                else{
                    mobAutoInitPause = true;
                }
            }



            if (tubemogul || hostedVastVideo) {
                if (location.hash.indexOf('SEPSLIDE-start') > -1 && !playAdonPlay) {

                    playAdonPlay = true;
                    jwplayer().playAd(source);
                }


            }

            if (hostedVastVideo && contentplay && !contentPlayhostedHasplayed && e.position > 2) {
                contentPlayhostedHasplayed = true;
                //jwplayer().pause();
                if (currentlyExpanded) {
                    postMessageTracking('closeUnit');
                }
            }

            // pause if not expanded
            if(campaign.indexOf('-cp')>-1 && campaign.indexOf('CLT-')<0 && !currentlyExpanded){
                //jwplayer().pause();
                return;
            }




            // track first play
            if (!contentplay) {
                if (!playingUnder5 && mobilePauseClear) {

                    // re-set end reached if video played again
                    end_reached = false;

                    if (!tubemogul) {
                        if (videoPrettyName.toLowerCase().indexOf('intro') > -1) {
                            trackingCall('-events-Vplay - under 5 seconds -' + videoPrettyName + '-evente-/' + campaign + '/' + getKeywordInfo.info);
                        }
                        else {
                            trackingCall('-events-Video - play -' + videoPrettyName + '-evente-/' + campaign + '/' + getKeywordInfo.info);
                        }
                    }
                    playingUnder5 = true;
                }

                //track play on 5th second - only for intro videos
                if (!playing && e.position >= 3) {
                    if (videoPrettyName.toLowerCase().indexOf('intro') > -1) {
                        trackingCall('-events-Video - play -' + videoPrettyName + '-evente-/' + campaign + '/' + getKeywordInfo.info);
                    }
                    playing = true;
                }
            }
            else {
                //track from the start - but mobile variable as its paused


                if (!playing && mobilePauseClear && !hostedVastVideo) {
                    if(contentplay && type=='collective'){
                        trackingCall('-events-mousepress-evente--soc-Ad start ' + type + '-soe--cos--coe-/' + campaign + '/' + getKeywordInfo.info);
                    }
                    else {

                        // INTEGRAL (SKELETONJS TRACKING)
                        /*


                         // this is where the you append a tracking pixel for tracking expansions
                         if(!sepslideOnce && currentlyExpanded) {
                         var tag = document.createElement('script');

                         tag.src = '';
                         var firstScriptTag = document.getElementsByTagName('script')[0];
                         if (typeof firstScriptTag !== "undefined") {
                         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                         }
                         sepslideOnce = true;
                         }

                         // END INTEGRAL TRACKING
                         */


                        if (videoPrettyName.toLowerCase().indexOf('intro') > -1) {
                            trackingCall('-events-Video - play -' + videoPrettyName + '-evente-/' + campaign + '/' + getKeywordInfo.info);
                        }
                    }
                    playing = true;
                }


            }

            // track 30 second mark if it exists!
            if (!playing30seconds && e.position >= 30) {
                trackingCall('-events-Video - 30 seconds reached -' + videoPrettyName + '-evente-/' + campaign + '/' + getKeywordInfo.info);
                playing30seconds = true;
            }

            var vidLength = e.duration;
            // remove initial actualview 5 seconds
            //vidLength = vidLength - 4;
            var pos = e.position;
            var firstQ = (vidLength / 4);
            var halfWay = vidLength / 2;
            var thirdQ = (vidLength / 4) * 3;

            // quartiles and halves
            if (pos > firstQ && !firstQreached) {
                // reached the first quartile
                firstQreached = true;
                if (!hostedVastVideo && contentplay && type == 'collective') {
                    trackingCall('-events-mousepress-evente--soc-Ad first quartile ' + type + '-soe--cos--coe-/' + campaign + '/' + getKeywordInfo.info);
                }

                else {
                    trackingCall('-events-mousepress-evente--soc-' + videoPrettyName + ' - Video first quartile-soe--cos--coe-/' + campaign + '/' + getKeywordInfo.info);
                }
            }


            if (pos > halfWay && !halfReached) {
                // reached the halfway point
                halfReached = true;
                if(!hostedVastVideo && contentplay && type=='collective'){
                    trackingCall('-events-mousepress-evente--soc-Ad halfway ' + type + '-soe--cos--coe-/' + campaign + '/' + getKeywordInfo.info);
                }
                else {
                    trackingCall('-events-mousepress-evente--soc-' + videoPrettyName + ' - Video halfway-soe--cos--coe-/' + campaign + '/' + getKeywordInfo.info);
                }
            }

            if (pos > thirdQ && !thirdQreached) {
                // reached the halfway point
                thirdQreached = true;
                if(!hostedVastVideo && contentplay && type=='collective'){
                    trackingCall('-events-mousepress-evente--soc-Ad third quartile ' + type + '-soe--cos--coe-/' + campaign + '/' + getKeywordInfo.info);
                }
                else {
                    trackingCall('-events-mousepress-evente--soc-' + videoPrettyName + ' - Video third quartile-soe--cos--coe-/' + campaign + '/' + getKeywordInfo.info);
                }
            }



            // oncomplete -- this below is the new oncomplete code so put any completed video tracking in here
            if (pos >= vidLength - 0.4 && !end_reached && playing && firstQreached) {


                end_reached = true;

                // stop video here so it goes no further
                //jwplayer().pause(true);
                if($('#video-container video').length>0) {
                    var vc = $('#video-container video').get(0);
                    vc.pause();
                }

                // log completed video
                if(!hostedVastVideo && contentplay && type=='collective'){
                    trackingCall('-events-mousepress-evente--soc-Ad complete ' + type + '-soe--cos--coe-/' + campaign + '/' + getKeywordInfo.info);
                }
                else {

                    trackingCall('-events-mousepress-evente--soc-' + videoPrettyName + ' - Video end reached-soe--cos--coe-/' + campaign + '/' + getKeywordInfo.info);
                }

                closeVideo(video, jwplayer().getDuration());


                // close unit from inside
                // content play
                if (contentplay && !hostedVastVideo) {
                        postMessageTracking('closeUnit');

                }
            }


            /*
             var time = e.position;
             if(time % 1 === 0 && inView){
             var videoLogger = new Image();
             videoLogger.src = "http://analysis.adspdbl.com/video-logging/analytics.gif?campaignName="+campaign+"&videoName="+video+"&time="+time;
             }
             */
        });


        // onadtime
        var one = false, two = false, three = false;
        if (tubemogul || contentplay) {
            jwplayer("video-container").onAdTime(function (e) {


                // this to prevent playing ad behind the scenes at the beginning

                /*if (!currentlyInView && !currentlyExpanded) {
                 var vc = $('#video-container video').get(0);
                 vc.pause();
                 }

                 if (currentlyInView && !currentlyExpanded) {
                 var vc = $('#video-container video').get(0);
                 vc.pause();
                 }*/


                var over90perBool = false,
                    adLength = e.duration,
                    pos = e.position,
                    firstQ = adLength / 4,
                    halfWay = adLength / 2,
                    thirdQ = (adLength / 4) * 3,
                    over90Percent = (adLength / 10) * 9;


                // make sure its in view on 3 occassions (failsafe)
                // ad failsafe
                if (pos < 1 && !one) {
                    postMessageTracking('eiv');
                    one = true;
                }
                if (pos > 1 && pos < 3 && !two) {
                    postMessageTracking('eiv');
                    two = true;
                }
                if (pos > 1 && pos < 4 && !three) {
                    postMessageTracking('eiv');
                    three = true;
                }

                // end ad failsafe

                // for some reason e.position starts of at video length so fix here
                if (pos > over90Percent) {
                    over90perBool = true;
                }


                // quartiles and halves
                if (pos > firstQ && !firstQreached && !over90perBool) {
                    // reached the first quartile
                    firstQreached = true;
                    trackingCall('-events-mousepress-evente--soc-Vast ad first quartile ' + type + '-soe--cos--coe-/' + campaign + '/' + getKeywordInfo.info);
                }


                if (pos > halfWay && !halfReached && !over90perBool) {
                    // reached the halfway point
                    halfReached = true;
                    trackingCall('-events-mousepress-evente--soc-Vast ad halfway ' + type + '-soe--cos--coe-/' + campaign + '/' + getKeywordInfo.info);
                }

                if (pos > thirdQ && !thirdQreached && !over90perBool) {
                    // reached the halfway point
                    thirdQreached = true;
                    trackingCall('-events-mousepress-evente--soc-Vast ad third quartile ' + type + '-soe--cos--coe-/' + campaign + '/' + getKeywordInfo.info);
                }


            });
        }



        jwplayer().setVolume(0);
        if (!mutedPublisher) {
            jwplayer().setVolume(20);
        }

        // content play
        if (contentplay || tubemogul) {
            jwplayer().setMute(true);
            $('body').on('mousemove', function () {
                if (!sound) {
                    trackingCall('-events-mousepress-evente--soc-Content play mouseover play sound-soe--cos--coe-/' + campaign + '/' + getKeywordInfo.info);
                    sound = true;
                }

                jwplayer().setMute(false);
            });
            $('body').on('mouseout', function () {
                jwplayer().setMute(true);
                //trackingCall('-events-mousepress-evente--soc-Content play mouseout mute sound-soe--cos--coe-/' + campaign + '/' + getKeywordInfo.info);
            });
        }

        if (!isMobile.any) {
            jwplayer().setControls(true);
        }

    };


    // video close

    var videoUp = true;

    /**
     * Function to close video in ad unit.
     * @return {[type]} [description]
     */
    window.closeVideo = function (file, duration) {

        /*****  exception ****/
        if(edgeStartAnimation.closeVideoExternalVar){
            edgeStartAnimation.closeVideoExternal();
        }
        /*****  exception ****/


        // record video time played
        var vidState = jwplayer().getState();
        if (vidState !== null && typeof vidState !== "undefined" && ($('#video-section').hasClass('active') || $('div:last').hasClass('video-active'))) {
            if (vidState.toLowerCase() !== 'idle' && ($('#video-section').hasClass('active') || $('div:last').hasClass('video-active'))) {
                trackingCall('-events-Video length ' + currentVideo + '-evente--vls-' + jwplayer().getPosition() + '-vle-/' + campaign + '/' + getKeywordInfo.info);
            }
            else {
                trackingCall('-events-Video length ' + currentVideo + '-evente--vls-' + duration + '-vle-/' + campaign + '/' + getKeywordInfo.info);
            }
        }

        else if ($('#video-section').hasClass('active') || $('div:last').hasClass('video-active')) {
            trackingCall('-events-Video length ' + currentVideo + '-evente--vls-' + duration + '-vle-/' + campaign + '/' + getKeywordInfo.info);
        }

        // not for content play
        if (!contentplay) {
            //jwplayer().pause(true);
            //jwplayer().setMute(true);

            // is unit closed? or has close video button been clicked. if close video clicked remove video alltogther
            if (location.hash.indexOf('SEPSLIDE-stop') < 0) {
                // remove video completely
                jwplayer().stop();
                $('#closer').css('display', 'none');
                $('#video-section').removeClass('active').fadeOut('fast');
                $('div:last').removeClass('video-active');
                $('#lightbox').fadeOut('fast');
            }
        }
        else {
            //jwplayer().pause(true);
            if($('#video-container video').length>0) {
                var vc = $('#video-container video').get(0);
                vc.pause();
            }
        }
    };

    /**
     * Function to open video in an ad unit.
     * Handles tracking
     * @param  {[type]} file         Relative path file name of video
     * @param  {[type]} friendlyName Name to give to the video for tracking
     * @param  {[type]} introVideo   Boolean. True if the video is the intro
     * @return {[type]}              void
     */
    window.openVideo = function (file, friendlyName, introVideo, video_Poster_Image) {

        // stop the slide show
        currentVideo = friendlyName;
        if (typeof trt !== "undefined") {
            clearTimeout(trt);
        }
        if (typeof cvtr !== "undefined") {
            clearTimeout(cvtr);
        }
        $('#lightbox').show();
        $('#video-section').show().addClass('active');
        // and to last div as addclass isn't liked in edge
        $('div:last').addClass('video-active');
        $('#lightbox').fadeIn('fast', function () {
            // Animation complete.
            // start video
            $('#closer').css('display', 'block').css('cursor', 'pointer');


        });


        videoPlayer(file, video_Poster_Image, friendlyName, introVideo);

    };

    // inititial video launch
    // if its a video unit
    if ($('#video-section').length > 0) {
        if (!tubemogul) {
            openVideo('UK_30357_COD_BO3_LiveAction_Digital_30s_UK_PostLaunch_buy_now-640.mp4','intro',true,'UK_30357_COD_BO3_LiveAction_Digital_30s_UK_PostLaunch_buy_now-640.jpg');
        }
        else {
            openVideo('new-vid-640.mp4', 'intro', true);
        }
    }


    $(document).ready(function () {

                //openVideo('30225_Destiny_TTK_Pre_30_UK-640.mp4','intro',true,'30225_Destiny_TTK_Pre_30_UK-640.jpg');
                 // remove video completely
                /*jwplayer().stop();
                $('#closer').css('display', 'none');
                $('#video-section').removeClass('active').hide();
                $('div:last').removeClass('video-active');
                $('#lightbox').hide();*/

                


        if (isMobile.any) {

            if ($('#video-container').length > 0 && $('.mobileLaunchVideo').length > 0) {
                if ($('#video-section, #video-container').css('marginTop') != 0 + 'px') {
                    $('#video-section, #video-container').css({height: '82%', marginTop: '4%'});
                }
                ;
                $('#closer').css({width: '5%', height: '7%'});
                $('#arrow-left,#arrow-right,#videoIconRight,#videoIconLeft').css('display', 'block');

                $('#arrow-left,#arrow-right,#videoIconRight,#videoIconLeft').click(function () {
                    $('#video-section').show();
                    $('#closer').show();
                    $('#lightbox').fadeIn('fast');

                    //change that according to video
                    openVideo('','intro',true);//it takes forth parameter for video poster image as eg. ('myVideo.mp4','intro',true,'myPosterImage.jpg/png/gif')


                    //activate default play button on iphone


                    $('#arrow-left,#arrow-right,#videoIconRight,#videoIconLeft').remove();

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


        // end window ready
        //end controls
        // hashchange detect

        $(window).on('hashchange', function () {
            hashChangedCallback(location.hash, '')
        });

        // video launcher button
        $('#video-launcher-button').css({opacity: 0, display: 'block', cursor: 'pointer'});


        // end video section


        // open sepslidestart initially
        if (location.hash.indexOf('SEPSLIDE-start') > -1) {
            hashChangedCallback(location.hash, '');
        }


        // click new window open
        openWin = function (clickTag) {
            $('#openLink').attr('href', clickTag);

            function fireClick(node) {
                if (document.createEvent) {
                    var evt = document.createEvent('MouseEvents');
                    evt.initEvent('click', true, false);
                    node.dispatchEvent(evt);
                } else if (document.createEventObject) {
                    node.fireEvent('onclick');
                } else if (typeof node.onclick == 'function') {
                    node.onclick();
                }

            }

            // different for IE8
            if (window.XDomainRequest && window.msPerformance == undefined) {
                window.open(clickTag, '_blank');
            }
            else {
                fireClick(document.getElementById('openLink'));
            }


            //window.open(clickTag,'_blank');
            return false;
        };


        // mousepresses


        $('#next-arrow').on('click', function (e) {
            $('#layerslider').layerSlider("next");
            trackingCall('-events-mousepress-evente--soc-next arrow-soe--cos-' + e.pageX + '-' + e.pageY + '-coe-/' + campaign + '/' + getKeywordInfo.info);
        });

        $('#previous-arrow').on('click', function (e) {
            $('#layerslider').layerSlider("prev");
            trackingCall('-events-mousepress-evente--soc-previous arrow-soe--cos-' + e.pageX + '-' + e.pageY + '-coe-/' + campaign + '/' + getKeywordInfo.info);
        });


        // clicks


        $('#closer').on('click', function (e) {
            trackingCall('-events-mousepress-evente--soc-close video-soe--cos-' + e.pageX + '-' + e.pageY + '-coe-/' + campaign + '/' + getKeywordInfo.info);
            closeVideo();
            e.stopPropagation();
            e.preventDefault();




        });

        $('.campaign-link').css('cursor', 'pointer').on('click', function (e) {
            var frame = '';
            //section user has clicked.
            //var clickTag = $(this).attr('contextmenu');
            if (typeof $(this).attr('data-link') == 'undefined') {
                clickTag = window.clickTag;
                var sect = $(this).data('title');
                trackingCall('-redirects-' + clickTag + '-redirecte-events-Click-evente- -soc-' + sect + '-soe-/' + campaign + '/-cos-' + e.pageX + '-' + e.pageY + '-coe-/' + getKeywordInfo.info);
            }
            else {
                var clickTagUnique = $(this).data('link');
                var sect = $(this).data('title');
                trackingCall('-redirects-' + clickTagUnique + '-redirecte-events-Click-evente- -soc-' + sect + '-soe-/' + campaign + '/-cos-' + e.pageX + '-' + e.pageY + '-coe-/' + getKeywordInfo.info);
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
        window.edgeVideoClick = function (url) {
            imgOverlay();
            if (!edgeVidClicked) {
                //myPlayer.pause();
                trackingCall('-redirects-' + videoLinks[0] + '-redirecte--events-Click-evente- -soc-Video-soe-/' + campaign + '/-cos-0-coe-/' + getKeywordInfo.info);
                $('video').attr('controls', 'true');
            }
            // video clicked once only
            edgeVidClicked = true;
        }

// pass in edge dom event,jquery dom element
        window.edgeClick = function (e, that, type) {

            // click

            if (type == "click") {
                var frame = '';
                //section user has clicked.
                var clickTag;
                if (typeof that.data('link') == 'undefined') {
                    clickTag = window.clickTag;

                }
                else {
                    clickTag = that.data('link');
                }
                var sect = that.data('title');
                trackingCall('-redirects-' + clickTag + '-redirecte-events-Click-evente- -soc-' + sect + '-soe-/' + campaign + '/-cos-' + e.pageX + '-' + e.pageY + '-coe-/' + getKeywordInfo.info + "&audience=" + window.aud);
                // for creatives with > 1 hyperlink. include comment below.
                //openWin($(this).attr('contextmenu'));
                e.stopPropagation();
                e.preventDefault();
            }
            else if (type == 'mousepress') {
                var sect = that.data('title');
                if (sect.indexOf('Dwell') > -1) {
                    var mousePressData = that.data('mousedata');
                    trackingCall('-events-mousepress-evente--soc-' + sect + '-soe--cos-' + mousePressData + '-coe-/' + campaign + '/' + getKeywordInfo.info + "&audience=" + window.aud );
                }
                else {
                    trackingCall('-events-mousepress-evente--soc-' + sect + '-soe--cos-' + e.pageX + '-' + e.pageY + '-coe-/' + campaign + '/' + getKeywordInfo.info + "&audience=" + window.aud);
                }


            }
        }

        // end clicks


    });


})();

