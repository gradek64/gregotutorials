// empty object for external property storage
window.ADSPANDABLE_CONFIG_EXT = {};
window.ADSPANDABLE_CONFIG = {
    // Name of directory/creative
    campaign : 'sky-broadband-003',
    width: '700px',
    height: '434px',
    // mobile
    mobileVersion:false,
    mobileWidth:false,
    mobileHeight:false,
    // end mobile
    text: "<strong>New Sky Broadband Shield </strong>&ndash; Heroic new internet protection that lets you filter which websites can be seen in your home and block the unwelcome ones. It's free for all Sky Broadband customers, and includes additional security features to help protect your family from sites that collect private information or disrupt your device.",
    // put percentage random number calculation below
    addedValue:(function(){
        var rt = false;
        return rt;

    })(),
    additionalData: '',
    randomNumber:(function(){var rn=Math.floor(Math.random() * 10000000);return rn;})(),
    bottomOfTemplate: false,
    frequencyCap: 4,
    // use cookie frequency capping (defaults to using the window.name session variable if not)
    cookieCap : true,
    clickTag: 'http://ad.doubleclick.net/clk;280736461;106986350;k',
    
    /*  Function will match an array of keywords against the first 4000 characters in the page.

        Only use a maximum of 300 keywords with it to be on the safe side.

        Returns an array with the key 'matches' true or false and a json string under
        the key 'wordsMatched'.

        To use this from with in this conficg file, call this.kwrd(theArray);
        theArray is teh array of words to find
    */
    kwrd: function(iframe, keywordsArr){
        
        var keywordThreshold = 1;
        var keywordScoreStore = [];
        var trackArr = [];
        
        var keywordData = (function(){
            var keywordMatched = false;
            var score = 0;
            
            var str = window.ADSPDBLjQuery('body').html();

            str = str.toLowerCase();
            str = str.replace(/\r/g,' ');
            str = str.replace(/\n/g,' ');
            str = str.replace(/<script.*?>.*?<\/script/gi," ");
            str = str.replace(/<style[^>]*>.*?<\/style>/gi, " ");
            str = str.replace(/<ul[^>]*>.*?<\/ul>/gi, " ");
            str = str.replace(/<a[^>]*>.*?<\/a>/gi, " ");
            str = str.replace(/(<([^>]+)>)/ig, " ");
            str = str.replace(/\s\s*/ig, " ");
            str = str.replace(/>/ig, "");
            str = str.substr(0,4000);

            var l = keywordsArr.length;

            for(var i = 0; i < l; i++){

                var current = keywordsArr[i];
                current = current.toLowerCase();
                var preFlag = '(^|\\s|¿|¡|\\b|\\.|,|;|\'|\\?|"|!)';
                var postFlag = '($|\\s|\\.|,|;|\'|\\?|"|!|\\b)';
                var patt1 = preFlag + current + postFlag;
                var rg = new RegExp(patt1, 'gim');

                var result = str.match(rg);
                if (result){
                    if(keywordScoreStore.length > 0){
                        for(var key in keywordScoreStore){
                            if(key === "current"){
                                keywordScoreStore[key] += 1;
                            }
                            else {
                                keywordScoreStore[current] = 1;
                            }
                        }
                    }
                    else {
                        keywordScoreStore[current] = 1;
                    }
                    
                    // not supported ie 8
                    if(trackArr.indexOf(current)<0){
                        trackArr.push(current);
                        score ++;
                    }
                }
            }

            str = "";
            
            // threshold for keywords
            if (score >= keywordThreshold){
                keywordScoreStore['matches'] = true;
                keywordScoreStore['kwscore'] = score;
                keywordMatched = true;
            }

            else {
                keywordMatched = false;
                keywordScoreStore['matches']=false;
            }

            return keywordScoreStore;
        })();

        return keywordData;
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

        // if the ad doesn't appear due to a condition not being met log it here

        // This function is never used?

        /*var logError = function(reason){
                var img = new Image();
                img.src='http://adbreak-1124610337.us-east-1.elb.amazonaws.com/analytics.gif?ran='+Math.floor(Math.random()*1000000)+'&audience=&type=view&state=noBanner-'+this.campaign+'- '+reason+'&campaign=noBanner&domain='+document.domain+'&path=&texp=&general=&viewed=';

        };*/

        return rt;
    },

    // The custom filter javascript is for targetting campaigns by either keywords or section. For example if a campaign should only appear on 'mysite/motoring' then you don't want it in the 
    // list of campaigns that can be served to a page that's not the 'mysite/motoring' section as its a wasted impression. Equally if the campaign is keyword targetted yet none of the words 
    // on the page then the campaign should be removed fron the list of campaigns for that page. The function just needs to contain the logic and return 'true' if the conditions are met and 
    // the campaign can appear on that age. Or 'false' for it should not be on that page.
    cdn : true, // true if you want adspandable to load the campaign from the cdn,
    // set this to true to only appear if keywords in page 
    keywordMatching : false,
    // client actual view expand tracking
    actualViewClientTrack: false,
    // client expand tracking
    expandClientTrack: 'http://ad.doubleclick.net/jump/N4892.1124336.AVIDGLOBALMEDIA.CO/B8033478.2;sz=1x1;ord='+Math.floor(Math.random()*1000000)+'?',
    // client banner tracking
    bannerClientTrack:false,
    // paragraph to insert
    paraToInsert: 2,
    // keyword threshold
    keywordThreshold: 1,
    // does publisher use iframeTags?
    iframeTags : (function(){
        if (document.domain.indexOf('babyexpert')>-1){
            return true;
        }
        else if (document.domain.indexOf('timeout')>-1){
            return true;
        }
        else if (document.domain.indexOf('madeformums')>-1){
            return true;
        }
        else if (document.domain.indexOf('fanpage.it')>-1){
            return true;
        } 
        else {
            return false;
        }
    })(),
    keywords : ["Sky","Sky Broadband","Sky Broadband Shield","Sky Internet","tablet internet","smartphone internet","mobile broadband","Sky Go","Sky WiFi","broadband package","broadband deal","join sky","buy sky broadband","buy broadband","internet protection","safe internet","sky online","captain america","marvel movie","marvel film","captain america film","captain america movie","the winter soldier","sky marvel","broadband speed","broadband speeds","fast internet","fast broadband ","unlimited broadband","sky customer","sky fibre","fibre internet","fibreoptic","fibreoptics","fibre broadband","Sky cloud","Sky hotspot","Sky Connect","online protection","security","security software","online safety","internet safety","broadband shield","broadband","online security"],
    customFilterJs:(function(){
        // whatever you place in here gets reg exped pot and is executed independently of this class. It should return true or false as to whether this ad should appear.
        var dd = document.domain;
        var lh = window.location.href;
        var rt = true;
        var head = window.ADSPDBLjQuery("head").html();
        var ifrHead =  window.ADSPDBLjQuery("head",window.parent.document).html();
        var $ = window.ADSPDBLjQuery;

        return rt;
    })(),
    antiKeywordsMatching : false,
    antiKeywords : []

    
};

