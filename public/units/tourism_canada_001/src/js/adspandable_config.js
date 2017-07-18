// empty object for external property storage
avidmedGlobaRand = 0;
window.ADSPANDABLE_CONFIG_EXT = {};
window.ADSPANDABLE_CONFIG = {
    // Name of directory/creative
    campaign : 'tourism_canada_001',
    width: '700px',
    height: '394px',
    // mobile
    mobileVersion:false,
    mobileWidth:false,
    mobileHeight:false,
    contentClick:false,
    // end mobile
    text:(function(){
        var afterQMark = location.href;


        if(afterQMark.indexOf('teaser1')>-1){

                avidmedGlobaRand = 0;
        }
        else if(afterQMark.indexOf('teaser2')>-1){

                avidmedGlobaRand = 1;
        }else {

                avidmedGlobaRand = 2;
        }

        var textArray =  ["<strong>Win a Canadian Holiday</strong></br>Make room in your album and swap a selfie for a chance to win an £8,000 trip to Canada.",
                           "<strong>Swap a selfie for a trip</strong></br>Swap a selfie, or any other photo, for the chance to win a dream holiday to Canada.",
                           "<strong>Lose a selfie, win a trip</strong></br>Send us a selfie and we might send you on an amazing holiday to Canada."];

        return textArray[avidmedGlobaRand];

    })(),
    // put percentage random number calculation below
    addedValue:(function(){
        var rt = false;
        return rt;

    })(),
    additionalData: '',
    teaserImg:(function(){
    var imageTeaserArray = ['img/teaser.png','img/teaser1.png','img/teaser2.png'];
    return imageTeaserArray[avidmedGlobaRand];
    })(),
    teaserImgMaxWidth:'200px',
    randomNumber:(function(){var rn=Math.floor(Math.random() * 10000000);return rn;})(),
    bottomOfTemplate: false,
    frequencyCap: 4,
    // use cookie frequency capping (defaults to using the window.name session variable if not)
    cookieCap : true,
    clickTag: '',
    
    /*  Function will match an array of keywords against the first 4000 characters in the page.

        Only use a maximum of 300 keywords with it to be on the safe side.

        Returns an array with the key 'matches' true or false and a json string under
        the key 'wordsMatched'.

        To use this from with in this conficg file, call this.kwrd(theArray);
        theArray is teh array of words to find
    */
    kwrd: function(iframe, keywordsArr){
        

    },

    // This function is a callback for Adspandable:init. Function MUST return Boolean.
    // if return type is false Adspandable:init will return false;
    customCode: function(){
        var rt = true;
        var lh = location.href;
        // exclude homepage of newstreet
        if (lh==='http://www.newstreet.it/'){
            rt = false;
        }


        return rt;
    },
    // The custom filter javascript is for targetting campaigns by either keywords or section. For example if a campaign should only appear on 'mysite/motoring' then you don't want it in the 
    // list of campaigns that can be served to a page that's not the 'mysite/motoring' section as its a wasted impression. Equally if the campaign is keyword targetted yet none of the words 
    // on the page then the campaign should be removed fron the list of campaigns for that page. The function just needs to contain the logic and return 'true' if the conditions are met and 
    // the campaign can appear on that age. Or 'false' for it should not be on that page.
    cdn : false, // true if you want adspandable to load the campaign from the cdn,
    // set this to true to only appear if keywords in page 
    keywordMatching : false,
    // client actual view expand tracking
    actualViewClientTrack: false,
    // client expand tracking
    expandClientTrack: false,
    // client banner tracking
    bannerClientTrack:false,
    // client teaserinview tracking
    teaserInViewTrack:false,
    // paragraph to insert
    paraToInsert: 2,
    // keyword threshold
    keywordThreshold: 1,
    // does publisher use iframeTags?
    iframeTags : (function(){
        if (document.domain.indexOf('babyexpert')>-1){
            return true;
        }
        else if (document.domain.indexOf('www.timeout.com')>-1){
            return true;
        }
        else if (document.domain.indexOf('madeformums')>-1){
            return true;
        }
        else if (document.domain.indexOf('fanpage.it')>-1){
            return true;
        }
        else if (document.domain.indexOf('worldtravelguide.net')>-1){
            return true;
        }
        else if (document.domain.indexOf('digitalartsonline')>-1){
            return true;
        }
        else if (document.domain.indexOf('techadvisor.co.uk')>-1){
            return true;
        }
        else if (document.domain.indexOf('pcadvisor.co.uk')>-1){
            return true;
        }


        else {
            return false;
        }
    })(),
    keywords : [],
    customFilterJs:(function(){
        // whatever you place in here gets reg exped pot and is executed independently of this class. It should return true or false as to whether this ad should appear.
        var dd = document.domain;
        var lh = window.location.href;
        var rt = true;
        var head = window.ADSPDBLjQuery("head").html();
        // iframe head for timeout (because their adtags are inside an iframe)
        var ifrHead =  window.ADSPDBLjQuery("head",window.parent.document).html();
        var $ = window.ADSPDBLjQuery;

        /*
         // keywords checking - uncomment this and add keywords to array if it needs to be keyword targetted

         var keywordsArr = ["eating","dining","food","cooking","recipe","Jus Rol","pastry people","pastry brand","ready made pastry","baking product","baking products","puff pastry","shortcrust","sweet shortcrust","butter puff","ready rolled","filo pastry","light puff ","infused pastry","bake it fresh","Jus Rol Tom","Jus Rol Janet","Jus Rol Video","wholesome meals","delicious meals","fresh ingredients","pastry cooks","pastry chef","Anchor ready rolled","Sainsbury's pastry","own brand pastry","Tesco Value pastry","ready made pastry","Orgran All Purpose","McDougalls Puff Pastry","Waitrose Cooks","Pie","pie ideas","savoury pies","pie week","British Pie","Pie lovers","Pie Lover","Pie tips","Pie Hints","Pie Help","Baking pies","Pie Baking","traditional cooking","home baking","home cooking","baking hobby","baking event","cooking event","cinnamon swirls","mushroom pie","pastry recipes","dessert recipes","pie ideas","pastry dishes","pastry tarts","shortcrust flan","savoury pastry","sweet pastries","No Dish Pie","tasty recipes","recipe of the day","dinner inspiration","winter warmers","easy to bake","Diet Ideas","Fruit flans","Fruit pastries","dinner ideas","seasonal meals","seasonal bakes","tartlets","puff slice","quiche","quiche ideas","quiche recipes","Savoury pies","Flavoured pastry","breakfast ideas","lunch ideas","preparation time","occasion recipes","mid week recipes","quick and easy recipes","dessert ideas","occasion recipe ideas","Meal inspiration","Recipe ideas","Quick midweek meal","30min recipes","30 minute recipes","Pastry kit","How to make pastry","Chicken and pesto tart","Chicken pesto tart","Chicken,","leek and lemon puff pie","Chicken,","leek,","lemon pie"];
         var keywordData = (function(){
         var str,score = 0;
         str = $('body').html();
         str = str.toLowerCase();
         str = str.replace(/\r/g,' ');
         str = str.replace(/\n/g,' ');
         str = str.replace(/<script.*?>.*?<\/script/gi," ");
         str = str.replace(/<style[^>]*>.*?<\/style>/gi, " ");
         str = str.replace(/<ul[^>]*>.*?<\/ul>/gi, " ");
         str = str.replace(/<a[^>]*>.*?<\/a>/gi, " ");
         str = str.replace(/(<([^>]+)>)/ig, " "); */
         //str = str.replace(/\s\s*/ig, " ");
         /*str = str.replace(/>/ig, "");
         str = str.substr(0,15000);
         for(i=0;i<keywordsArr.length;i++){
            var patt1=keywordsArr[i].toLowerCase();;

            var result = str.match(patt1);
            if (result){
                score += result.length;
            }
         }
         str = "";
         // threshold for keywords

        return score;
            })();
        //no keyword?
        if (keywordData<1){
            rt = false;
        }

        // end keywords checking

         */

        // MOBILE DETECTION
        /*
        var ADSPDBLMobile={};
        (function(e){var t=/iPhone/i,n=/iPod/i,r=/iPad/i,i=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,s=/Android/i,o=/IEMobile/i,u=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,a=/BlackBerry/i,f=/Opera Mini/i,l=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,c=new RegExp("(?:"+"Nexus 7"+"|"+"BNTV250"+"|"+"Kindle Fire"+"|"+"Silk"+"|"+"GT-P1000"+")","i");var h=function(e,t){return e.test(t)};var p=function(e){var p=e||navigator.userAgent;this.apple={phone:h(t,p),ipod:h(n,p),tablet:h(r,p),device:h(t,p)||h(n,p)||h(r,p)};this.android={phone:h(i,p),tablet:!h(i,p)&&h(s,p),device:h(i,p)||h(s,p)};this.windows={phone:h(o,p),tablet:h(u,p),device:h(o,p)||h(u,p)};this.other={blackberry:h(a,p),opera:h(f,p),firefox:h(l,p),device:h(a,p)||h(f,p)||h(l,p)};this.seven_inch=h(c,p);this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch;this.phone=this.apple.phone||this.android.phone||this.windows.phone;this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet};var d=new p;d.Class=p;e.isMobile=d})(ADSPDBLMobile);

        if(ADSPDBLMobile.isMobile.phone)
        if(ADSPDBLMobile.isMobile.any)
        if(ADSPDBLMobile.isMobile.tablet)
        if(ADSPDBLMobile.isMobile.seven_inch)
        */


        return rt;
    })(),
    antiKeywordsMatching : false,
    antiKeywords : []

    
};

