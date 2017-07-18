// empty object for external property storage
window.ADSPANDABLE_CONFIG_EXT = {};
window.ADSPANDABLE_CONFIG = {
    // Name of directory/creative
    campaign : 'jus_roll_001',
    width: '700px',
    height: '434px',
    // mobile
    mobileVersion:false,
    mobileWidth:false,
    mobileHeight:false,
    // end mobile
    //text: old "<strong>Stuck for quick and tasty mid-week meal ideas?</strong></br>Here's some rule breaking recipes from Jus-Rol to add to your repertoire.",
    text: "<strong>Struggling for inspiration on how to liven up your mid-week meals?</strong></br>We have put together a number of easy to follow, quick to make recipes to help you create a mid-week master piece. You can even use our 'What's-in-your-fridge' tool, to inspire you and come up with clever, easy to create dishes.",
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
    clickTag: 'http://ad.doubleclick.net/ddm/clk/280226540;106871055;x',
    
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
    cdn :true, // true if you want adspandable to load the campaign from the cdn,
    // set this to true to only appear if keywords in page 
    keywordMatching : false,
    // client actual view expand tracking
    actualViewClientTrack:'http://ad.doubleclick.net/ad/N5532.1124336.AVIDGLOBALMEDIA.CO/B8030243.106871055;sz=1x1;ord='+Math.floor(Math.random()*1000000),
    // client expand tracking
    expandClientTrack: false,
    // client banner tracking
    bannerClientTrack:'http://pixel.adsafeprotected.com/rfw/st/24543/2044243/skeleton.gif',
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
    keywords : ["eating","dining","food","cooking","recipe","Jus Rol","pastry people","pastry brand","ready made pastry","baking product","baking products","puff pastry","shortcrust","sweet shortcrust","butter puff","ready rolled","filo pastry","light puff ","infused pastry","bake it fresh","Jus Rol Tom","Jus Rol Janet","Jus Rol Video","wholesome meals","delicious meals","fresh ingredients","pastry cooks","pastry chef","Anchor ready rolled","Sainsbury's pastry","own brand pastry","Tesco Value pastry","ready made pastry","Orgran All Purpose","McDougalls Puff Pastry","Waitrose Cooks","Pie","pie ideas","savoury pies","pie week","British Pie","Pie lovers","Pie Lover","Pie tips","Pie Hints","Pie Help","Baking pies","Pie Baking","traditional cooking","home baking","home cooking","baking hobby","baking event","cooking event","cinnamon swirls","mushroom pie","pastry recipes","dessert recipes","pie ideas","pastry dishes","pastry tarts","shortcrust flan","savoury pastry","sweet pastries","No Dish Pie","tasty recipes","recipe of the day","dinner inspiration","winter warmers","easy to bake","Diet Ideas","Fruit flans","Fruit pastries","dinner ideas","seasonal meals","seasonal bakes","tartlets","puff slice","quiche","quiche ideas","quiche recipes","Savoury pies","Flavoured pastry","breakfast ideas","lunch ideas","preparation time","occasion recipes","mid week recipes","quick and easy recipes","dessert ideas","occasion recipe ideas","Meal inspiration","Recipe ideas","Quick midweek meal","30min recipes","30 minute recipes","Pastry kit","How to make pastry","Chicken and pesto tart","Chicken pesto tart","Chicken,","leek and lemon puff pie","Chicken pie","leek pie,","lemon pie"],
    customFilterJs:(function(){
        // whatever you place in here gets reg exped pot and is executed independently of this class. It should return true or false as to whether this ad should appear.
        var dd = document.domain;
        var lh = window.location.href;
        var rt = true;
        var head = ADSPDBLjQuery("head").html();
        // iframe head for timeout (because their adtags are inside an iframe)
        var ifrHead =  ADSPDBLjQuery("head",window.parent.document).html();
        var $ = ADSPDBLjQuery;

        // keywords checking
        /*var keywordsArr = ["eating","dining","food","cooking","recipe","Jus Rol","pastry people","pastry brand","ready made pastry","baking product","baking products","puff pastry","shortcrust","sweet shortcrust","butter puff","ready rolled","filo pastry","light puff ","infused pastry","bake it fresh","Jus Rol Tom","Jus Rol Janet","Jus Rol Video","wholesome meals","delicious meals","fresh ingredients","pastry cooks","pastry chef","Anchor ready rolled","Sainsbury's pastry","own brand pastry","Tesco Value pastry","ready made pastry","Orgran All Purpose","McDougalls Puff Pastry","Waitrose Cooks","Pie","pie ideas","savoury pies","pie week","British Pie","Pie lovers","Pie Lover","Pie tips","Pie Hints","Pie Help","Baking pies","Pie Baking","traditional cooking","home baking","home cooking","baking hobby","baking event","cooking event","cinnamon swirls","mushroom pie","pastry recipes","dessert recipes","pie ideas","pastry dishes","pastry tarts","shortcrust flan","savoury pastry","sweet pastries","No Dish Pie","tasty recipes","recipe of the day","dinner inspiration","winter warmers","easy to bake","Diet Ideas","Fruit flans","Fruit pastries","dinner ideas","seasonal meals","seasonal bakes","tartlets","puff slice","quiche","quiche ideas","quiche recipes","Savoury pies","Flavoured pastry","breakfast ideas","lunch ideas","preparation time","occasion recipes","mid week recipes","quick and easy recipes","dessert ideas","occasion recipe ideas","Meal inspiration","Recipe ideas","Quick midweek meal","30min recipes","30 minute recipes","Pastry kit","How to make pastry","Chicken and pesto tart","Chicken pesto tart","Chicken,","leek and lemon puff pie","Chicken pie,","leek pie","lemon pie"];
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
            str = str.replace(/(<([^>]+)>)/ig, " ");*/
            //str = str.replace(/\s\s*/ig, " ");
            /*str = str.replace(/>/ig, "");
            str = str.substr(0,15000);
            for(i=0;i<keywordsArr.length;i++){
                var patt1=keywordsArr[i].toLowerCase();

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
          rt = true;
        }*/

        return rt;
    })(),
    antiKeywordsMatching : false,
    antiKeywords : []

    
};

