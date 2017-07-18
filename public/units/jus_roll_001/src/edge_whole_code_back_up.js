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


        Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
            /****************************Change the slide *************************************/
            var slideContainerJquery = sym.getSymbol("slideShow").getSymbolElement();
            var slideContainerJqueryWrapper = sym.getSymbol("slideShow").getSymbol("slideShowContainer").getSymbolElement();

            //slideAccesser is defined outside the stage for accessibilty to avoid globals
            slideAccesser = {
                edge_composition_ready:true,
                clickactive:true,
                currentSlideEdge:0,
                EdgetimeOut:'undefined',
                value:1,
            }





            SlidejQueryAnimater = {
                slide:function(value){
                    var movement = (value) * -100 +'%';//starts from 0;
                    //to prevent items from rollOvers before complets slide
                    //slideInPlace = false;
                    slideAccesser.currentSlideEdge = value;
                    slideContainerJqueryWrapper.animate({
                        top:movement
                    },{duration: 500,
                        complete:function(){

                            slideAccesser.clickactive = true;


                        }
                    });
                }
            }
            /*************************/
            /************* disable all vertical scrollers in the range from slideShowContainer level ************/
            $('#Stage_slideShow_slideShowContainer div').css('overflowX','hidden');

            /************************** Search engine for keywords in form **********************************/

            var recipeList ={ guacamole_and_salsa_filo_tartlets:['filo','pastry','butter','guacamole','avocado','tomato','salsa','coriander','spring onion','chilli'],
                pork_cider_and_apple_pies:['shortcrust','pastry','onions','butter','pork','apples','cider','beer','sage','herbs','mustard','wholegrain mustard'],
                mexican_chicken_tart:['chicken','breast','cooked','shortcrust','pastry','onions','spring onion','pepper','yellow pepper','red pepper','salsa','tomato','egg','avocado','lemon','coriander'],
                chicken_pesto_tart:['chicken','meat','pesto','basil','pine','nuts','cheese','puff pastry','egg','cherry','tomatoes','tomato','spinach','herb'],
                mushroom_no_dish_pie:['shortcrust','pastry','egg','butter','mushroom','chestnut','porcini','mushrooms','button','chestnuts','parsley','herb','soured','cream','salt','pepper','nutmeg'],
                pizza_puffs:['puff','pastry','egg','cheese','grated','chedder','rocket','basil','herb','puree','tomato','green peppers','pepper'],
                leek_bacon_flan:['leek','bacon','diced','flan ','pastry','shortcrust','cheese','emmental','cheese','cheddar','milk ','egg','salt','pepper'],
                lamb_in_herb_pastry_parcels:['olive','oil','red','onion','lamb','fillet','lamb','steak','puff','egg','meat','herb','pastry','parcel'],
                salmon_fillet_in_filo_caper_butter:['pastry','filo','fish','salmon','fillet','fish','butter','capers ','lemon','slice'],
                turkey_ham_and_vegetable_pie:['shortcrust','pastry','onion','carrot','turkey ','diced turkey','ham','turkey','stock','flour','salt','pepper','black pepper','cream','fraiche'],
                beef_mustard_and_creamy_horseradish_tartlets:['beef','fraiche','egg','mascarpone','cheese','horseradish','rare','roast','beef','beef','slice','black pepper','pepper','chive','puff','pastry','ground pepper'],
                feta_spinach_and_tomato_wraps:['rosemary','tyhme','puff','pastry','rosemary','thyme','sprigs','onion','marmalade','feta','cheese','baby','spinach','tomato','sun dried tomato','oil'],
                chocolate_salted_caramel_tart:['shortcrust pastry','sweet shortcrust ','honeycomb','chocolate','dark chocolate','unsalted butter','double cream','light','brown sugar','sea salt','golden syrup','honeycomb','butter'],
                tarte_tartin:['puff','pastry','butter','granulated','sugar','water','dessert','apples','apple','Cox','butter','peeled','cored','apple slices'],
                filo_fruit_hearts:['filo','pastry','butter','demerara','sugar','hazelnut','nuts','crème','fraiche','strawberries','berries','fruit','coulis']
            }

            var recipeImages = {	guacamole_and_salsa_filo_tartlets:['images/guacamole.jpg','http://www.jusrol.co.uk/'],
                pork_cider_and_apple_pies:['images/pork.jpg','http://www.jusrol.co.uk/'],
                mexican_chicken_tart:['images/mexican.jpg','http://www.jusrol.co.uk/'],
                chicken_pesto_tart:['images/chicken_pesto.jpg','http://www.jusrol.co.uk/'],
                mushroom_no_dish_pie:['images/mashroom.jpg','http://www.jusrol.co.uk/'],
                pizza_puffs:['images/pizza_puffs.jpg','http://www.jusrol.co.uk/'],
                leek_bacon_flan:['images/leek_and_bacon.jpg','http://www.jusrol.co.uk/'],
                lamb_in_herb_pastry_parcels:['images/lamb_in_herb.jpg','http://www.jusrol.co.uk/'],
                salmon_fillet_in_filo_caper_butter:['images/salmon_fillet.jpg','http://www.jusrol.co.uk/'],
                turkey_ham_and_vegetable_pie:['images/turkey_ham.jpg','http://www.jusrol.co.uk/'],
                beef_mustard_and_creamy_horseradish_tartlets:['images/beef_mustard.jpg','http://www.jusrol.co.uk/'],
                feta_spinach_and_tomato_wraps:['images/feta_spinach.jpg','http://www.jusrol.co.uk/'],
                chocolate_salted_caramel_tart:['images/chocolate_salted.jpg','http://www.jusrol.co.uk/'],
                tarte_tartin:['images/tarte_tartin.jpg','http://www.jusrol.co.uk/'],
                filo_fruit_hearts:['images/filo_fruit.jpg','http://www.jusrol.co.uk/'],
                noMatch:['images/noMatch.jpg','http://www.jusrol.co.uk/']
            };
            var currentRecipe;
            var pickedRecipes = [];






            //Edge symbols
            var searchSlide = sym.getSymbol("slideShow").getSymbol("slideShowContainer").getSymbol("search_unit");
            var search_button = sym.getSymbol("slideShow").getSymbol("slideShowContainer").getSymbol("search_unit").$('search_button');
            //resulst assets
            var searchResultsJQuery = searchSlide.getSymbol("searchResults").getSymbolElement();


            //search preloader check preloader later
            searchResultsJQuery.css('zIndex','20');
            //.background:'url("images/searchPreloader.GIF") center center no-repeat rbba(0,0,0,0.8)',
            //zIndex:20});


            /*dynamic assets for keyWord serach	*/

            var searchDisplayBoard = $('<div></div>').hide();
            //position board and set width and height
            searchDisplayBoard.css({
                position:'absolute',
                width:'80%',
                height:'80%',
                top:'10%',
                left:'10%',
                backgroundColor:'white',
                overflowX:'hidden',
                overflowY:'auto'
            });
            var closeBttnDisplayBoard = $('<img src="images/close_button.png"/>').appendTo(searchResultsJQuery);
            //position board and set width and height
            closeBttnDisplayBoard.css({
                position:'absolute',
                width:'5%',
                height:'7%',
                top:'3%',
                right:'3%',
                cursor:'pointer',
                zIndex:2
            });

            closeBttnDisplayBoard.click(function(){
                searchResultsJQuery.fadeOut('fast',function(){
                    searchResultsJQuery.css('left','100%');
                    searchDisplayBoard.children().remove();
                    //searchResultsJQuery.children().css('display','none');
                })
            });

            /*start serching for match*/
            search_button.click(function(){
                var wordMatch1 = $('#match1 input').val().toLowerCase();
                var wordMatch2 = $('#match2 input').val().toLowerCase();;
                var wordMatch3 = $('#match3 input').val().toLowerCase();;
                var firstMatch = false;
                var secondMatch = false;
                var thirdMatch = false;
                var matches = 0;
                var noMatchFound = false;
                var currentRun = false;
                var index = 0;
                var flag = '';
                var mousePressObject = $('<div></div>');

                var currentRecipe;
                var firstMatch = false;

                //clear array first
                pickedRecipes = [];

                for(recipe in recipeList){
                    currentRecipe = recipe;
                    for(keyWord in recipeList[recipe]){
                        var currentKeyWord = recipeList[recipe][keyWord];
                        //first check for first word
                        var regularExp = new RegExp(currentKeyWord,'gi');

                        //console.log('currentKeyWord:'+currentKeyWord);


                        if(!firstMatch&&wordMatch1.match(regularExp)){
                            //firstMatch = true;
                            currentRun = true;
                            if(flag!=currentRecipe){
                                //console.log('flag: '+flag);
                                //console.log('first word'+recipeList[recipe][keyWord]);
                                //console.log('keyWords general:'+recipe);
                                matches++;
                                pickedRecipes.push(recipe);
                                flag = currentRecipe;
                            }

                        }

                        else if(!secondMatch&&wordMatch2.match(regularExp)){
                            //secondMatch = true;
                            currentRun = true;
                            if(flag!=currentRecipe){
                                //console.log('second word'+recipeList[recipe][keyWord]);
                                //console.log('keyWords general:'+recipe);
                                //console.log('currentRun2 '+currentRun);
                                matches++;
                                pickedRecipes.push(recipe);
                                flag = currentRecipe;
                            }
                        }
                        else if(!thirdMatch&&wordMatch3.match(regularExp)){
                            //thirdMatch = true;
                            currentRun = true;
                            if(flag!=currentRecipe){
                                //console.log('third word'+recipeList[recipe][keyWord]);
                                //console.log('keyWords general:'+recipe);
                                //console.log('currentRun3'+currentRun);
                                matches++;
                                pickedRecipes.push(recipe);
                                flag = currentRecipe;
                            }
                        }



                        //tracks how many keyword in the objects
                        index++;


                        //when there is no match and all keywords checked
                        if(index >= 201){
                            //console.log('index '+index);
                            if(currentRun==false) {
                                currentRun = true;
                                if(!noMatchFound){
                                    noMatchFound = true;
                                    //console.log('not matcht found');
                                    noMatchFound = true;
                                    matches = 1;
                                    pickedRecipes.push('noMatch');
                                }
                            }
                        }





                    }
                }

                //show results
                showResults(matches,currentRecipe);

            });//end of serchbutton click

            function showResults(matches,currentRecipe) {

                //if user come backs
                searchResultsJQuery.show();
                //start serching recipes
                searchResultsJQuery.css('left','0');

                //fade in the resutls
                searchResultsJQuery.append(searchDisplayBoard);

                //append images correspondign the results
                searchDisplayBoard.fadeIn('slow');

                //add result recipe images
                //console.log('matches: '+matches);

                for(j=0;j<matches;j++){
                    if(matches>1){
                        var boardHeight = matches * 20;
                        (boardHeight>80)?searchDisplayBoard.css('height','80%'):searchDisplayBoard.css('height',boardHeight+'%');
                    }else {
                        var boardHeight = 35;
                        searchDisplayBoard.css('height',boardHeight+'%');
                    }

                    //console.log('fsgfs: '+searchDisplayBoard.css('height'));

                    var pickedRecipieslocal = pickedRecipes[j];
                    //console.log('currentRecipe'+currentRecipe);
                    var recipeImage = $('<img src="'+recipeImages[pickedRecipieslocal][0]+'"/>');
                    recipeImage.css({
                        width:'96%',
                        margin:'3%',
                        cursor:'pointer'
                    });
                    searchDisplayBoard.append(recipeImage);


                    //report what recipes has been picked
                    //tracking
                    mousePressObject.data('selected_recipes',recipeImages[pickedRecipieslocal]);
                    edgeClick(e,mousePressObject,'mousepress');// insert code for mouse click here




                    console.log('pickedRecipieslocal:  '+pickedRecipieslocal);




                    //track clicks of the recipes
                    recipeImage.click(function(){
                        //links
                        var slide = $(this);
                        slide.data('title','click on the recipe called: '+ recipeImages[pickedRecipieslocal]);
                        slide.data('link',clickTag);
                        slide.addClass('campaign-link');
                        edgeClick(e,slide,'click');
                    });
                }
            }


















            /************************** Search engine for keywords in form **********************************/

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${_what_in_your_fridge}", "click", function(sym, e) {
            if(slideAccesser.clickactive){
                slideAccesser.clickactive  = false;
                SlidejQueryAnimater.slide(5);

                //tracking
                var currentButtonTrack = sym.$('what_in_your_fridge');
                currentButtonTrack.data('title','what_in_your_fridge button leading to form');
                edgeClick(e,currentButtonTrack,'mousepress');// insert code for mouse click here
            }

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${_recipe}", "click", function(sym, e) {
            if(slideAccesser.clickactive){
                slideAccesser.clickactive  = false;
                SlidejQueryAnimater.slide(0);


                //tracking
                var currentButtonTrack = sym.$('recipe');
                currentButtonTrack.data('title','recipe button displaying first slide' );
                edgeClick(e,currentButtonTrack,'mousepress');// insert code for mouse click here

            }

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${_buttonBack}", "click", function(sym, e) {
            if(slideAccesser.clickactive){
                slideAccesser.clickactive  = false;
                SlidejQueryAnimater.slide(0);

                //tracking
                var currentButtonTrack = sym.$('buttonBack');
                currentButtonTrack.data('title','buttonBack displaying first slide' );
                edgeClick(e,currentButtonTrack,'mousepress');// insert code for mouse click here
            }

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${_play_video}", "click", function(sym, e) {
            openVideo('How_I_Rol_UK_30sec-540p_MPEG_4_sized.mp4','intro',true);

            //tracking
            var currentButtonTrack = sym.$('play_video');
            currentButtonTrack.data('title','play_video_button pressed' );
            edgeClick(e,currentButtonTrack,'mousepress');// insert code for mouse click here

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${_sidebar}", "click", function(sym, e) {
            //tracking
            slide = sym.$("sidebar");
            slide.data('title','logo has been clicked');
            slide.data('link',clickTag);
            slide.addClass('campaign-link');
            edgeClick(e,slide,'click');


        });
        //Edge binding end

    })("stage");
    //Edge symbol end:'stage'

    //=========================================================

    //Edge symbol: 'slideShow'
    (function(symbolName) {

    })("slideShow");
    //Edge symbol end:'slideShow'

    //=========================================================

    //Edge symbol: 'slideShowContainer'
    (function(symbolName) {

    })("slideShowContainer");
    //Edge symbol end:'slideShowContainer'

    //=========================================================

    //Edge symbol: 'search_unit'
    (function(symbolName) {

    })("search_unit");
    //Edge symbol end:'search_unit'

    //=========================================================

    //Edge symbol: 'searchResults'
    (function(symbolName) {

    })("searchResults");
    //Edge symbol end:'searchResults'

    //=========================================================

    //Edge symbol: 'slide_1'
    (function(symbolName) {

        Symbol.bindElementAction(compId, symbolName, "${_chicken_pesto}", "click", function(sym, e) {
            if(slideAccesser.clickactive){
                slideAccesser.clickactive  = false;
                SlidejQueryAnimater.slide(1);

                //tracking
                var currentButtonTrack = sym.$('chicken_pesto');
                currentButtonTrack.data('title','goes to chicken pesto recipe slide' );
                edgeClick(e,currentButtonTrack,'mousepress');// insert code for mouse click here
            }


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${_creamy_apple}", "click", function(sym, e) {
            if(slideAccesser.clickactive){
                slideAccesser.clickactive  = false;
                SlidejQueryAnimater.slide(2);

                //tracking
                var currentButtonTrack = sym.$('creamy_apple');
                currentButtonTrack.data('title','goes to creamy apple recipe slide' );
                edgeClick(e,currentButtonTrack,'mousepress');// insert code for mouse click here
            }


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${_pizza_puffs}", "click", function(sym, e) {
            if(slideAccesser.clickactive){
                slideAccesser.clickactive  = false;
                SlidejQueryAnimater.slide(3);

                //tracking
                var currentButtonTrack = sym.$('pizza_puffs');
                currentButtonTrack.data('title','goes to pizza puffs recipe slide');
                edgeClick(e,currentButtonTrack,'mousepress');// insert code for mouse click here

            }


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${_mexican_chicken}", "click", function(sym, e) {
            if(slideAccesser.clickactive){
                slideAccesser.clickactive  = false;
                SlidejQueryAnimater.slide(4);

                //tracking
                var currentButtonTrack = sym.$('mexican_chicken');
                currentButtonTrack.data('title','goes to mexican_chicken recipe slide');
                edgeClick(e,currentButtonTrack,'mousepress');// insert code for mouse click here

            }


        });
        //Edge binding end

    })("slide_1");
    //Edge symbol end:'slide_1'

    //=========================================================

    //Edge symbol: 'slide_2'
    (function(symbolName) {

    })("puff_pastry");
    //Edge symbol end:'puff_pastry'

    //=========================================================

    //Edge symbol: 'chicken_pesto'
    (function(symbolName) {

    })("chicken_pesto");
    //Edge symbol end:'chicken_pesto'

    //=========================================================

    //Edge symbol: 'creamy_apple'
    (function(symbolName) {

    })("creamy_apple");
    //Edge symbol end:'creamy_apple'

    //=========================================================

    //Edge symbol: 'mexican'
    (function(symbolName) {

    })("mexican");
    //Edge symbol end:'mexican'

    //=========================================================

    //Edge symbol: 'creamy_apple_slide'
    (function(symbolName) {

        Symbol.bindElementAction(compId, symbolName, "${_creamy_apple_slide}", "click", function(sym, e) {
            //tracking
            slide = sym.$("creamy_apple_slide")
            slide.data('title','creamy_apple_slide link');
            slide.data('link',clickTag);
            slide.addClass('campaign-link');
            edgeClick(e,slide,'click');



        });
        //Edge binding end

    })("creamy_apple_slide");
    //Edge symbol end:'creamy_apple_slide'

    //=========================================================

    //Edge symbol: 'pizza_puff_slide'
    (function(symbolName) {

        Symbol.bindElementAction(compId, symbolName, "${_more}", "click", function(sym, e) {
            //tracking
            slide = sym.$("more");
            slide.data('title','creamy_apple_slide link');
            slide.data('link',clickTag);
            slide.addClass('campaign-link');
            edgeClick(e,slide,'click');



        });
        //Edge binding end

    })("pizza_puff_slide");
    //Edge symbol end:'pizza_puff_slide'

    //=========================================================

    //Edge symbol: 'mexican_chicken_slide'
    (function(symbolName) {

        Symbol.bindElementAction(compId, symbolName, "${_mexican_slide}", "click", function(sym, e) {
            //tracking
            slide = sym.$("mexican_slide")
            slide.data('title','mexican_slide link');
            slide.data('link',clickTag);
            slide.addClass('campaign-link');
            edgeClick(e,slide,'click');



        });
        //Edge binding end

    })("mexican_chicken_slide");
    //Edge symbol end:'mexican_chicken_slide'

    //=========================================================

    //Edge symbol: 'creamy_apple_text_container'
    (function(symbolName) {

        Symbol.bindElementAction(compId, symbolName, "${_more}", "click", function(sym, e) {
            //tracking
            slide = sym.$("more")
            slide.data('title','creamy_apple_slide link');
            slide.data('link',clickTag);
            slide.addClass('campaign-link');
            edgeClick(e,slide,'click');


        });
        //Edge binding end

    })("creamy_apple_text_container");
    //Edge symbol end:'creamy_apple_text_container'

    //=========================================================

    //Edge symbol: 'mexican_chicken_text_container'
    (function(symbolName) {

        Symbol.bindElementAction(compId, symbolName, "${_more}", "click", function(sym, e) {
            //tracking
            slide = sym.$("more");
            slide.data('title','mexican_slide link');
            slide.data('link',clickTag);
            slide.addClass('campaign-link');
            edgeClick(e,slide,'click');



        });
        //Edge binding end

    })("mexican_chicken_text_container");
    //Edge symbol end:'mexican_chicken_text_container'

    //=========================================================

    //Edge symbol: 'chicken_pesto_slide'
    (function(symbolName) {

        Symbol.bindElementAction(compId, symbolName, "${_more}", "click", function(sym, e) {
            //tracking
            slide = sym.$("more");
            slide.data('title','chicken pesto more link');
            slide.data('link',clickTag);
            slide.addClass('campaign-link');
            edgeClick(e,slide,'click');


        });
        //Edge binding end

    })("chicken_pesto_slide");
    //Edge symbol end:'chicken_pesto_slide'

})(jQuery, AdobeEdge, "EDGE-22580547");
