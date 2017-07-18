// server.js

// BASE SETUP
// =============================================================================


console.log('server.js');
var express    =		 	require('express');        // call express
var favicon    = 			require('serve-favicon');


// call the packages we need
var app = require('./routes/server');              // define our app using express
var bodyParser = require('body-parser');
var path =  require('path');
var morgan   = require('morgan'); //middleware used for logging errors and messages back to console;
app.use(function(req, res, next) { //allow cross origin requests
        
        res.header("Access-Control-Allow-Origin", "*"); // express server to accept cross-origin request from another server. (In this case localhost:80)
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, sid");
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        next();
});



/** Serving from the same express Server
No cors required */
app.use(express.static('../client'));//Alternatively we are asking express to expose client folder as a static path, 
//in this way we can run our AngularJS client code on the same express server 

//favicon icon 
app.use(favicon(__dirname + '/public/images/favicon.ico'));
//var pagePage = app.set('page','./views');

//specify custom static direcotry for pages (otherwise epxress will default it to 'domain/views')
app.set('views/page', path.join(__dirname,'views/page')); 

//specify custom static direcotry for pages (otherwise epxress will default it to 'domain/views')
//app.set('views/admin', path.join(__dirname,'views/admin')); 

//set static directory to  public (which is default one but still has to be defined !IMPORTANT)
app.use(express.static(path.join(__dirname, 'public')));



// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser the form has to have enctype ="application/x-www-form-urlencoded"
var urlencodedParser = bodyParser.urlencoded({ extended: false})

app.use( urlencodedParser );
app.use( jsonParser );


//use ejs as template language
app.set('view engine', 'ejs');

// use morgan to log requests to the console
app.use(morgan('dev'));







// Controlers 
// =============================================================================
//define external routes folder 
var userController = require("./routes/user_logs");




// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});



// ADMIN ROUTES
// =============================================================================
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
/*router.get('/admin',  function(req, res) {
     //res.json({ message: 'hooray! welcome to our api!' });   
    res.render('admin',{error:'no errorr yet'});


})*/



// as expcted start from main domain;
app.use('/', router);
// REGISTER OUR ROUTES -------------------------------
//define external routes folder 
var controller = require("./routes");

// SIGN UP OR LOGIN USER -----------------------
/***** POST user -- create a user  ***/
//router.route('/create',upload).post(userController.create );  //it takes extra parameter so has to be initated from app = express();
/***** GET user info -- create a user  ***/
router.route('/userinfo').get( userController.userinfo );
/***** GET page for  -- create a tutorial  ***/
router.route('/createTutorial').get( userController.createTutorial );

/***** GET page for  -- portfolio test ***/
router.route('/portfolio_test').get( userController.portfolio_test );



/***** GET page for  -- portfolio  ***/
router.route('/portfolio').get( userController.portfolio );
/***** POST user info -- update a user info ***/
//router.route('/update').post( userController.updateinfo );
/***** GET user info json file -- send json to Angular  ***/
router.route('/data.json').get( userController.userinfojson );
/***** GET admin page  ***/
router.route('/login').get( userController.login );
/***** POST login database check -- login a user  ***/
router.route('/loginuser').post( userController.loginuser );
/***** GET admin page  ***/
router.route('/createuser').get( userController.createuser );
/***** GET logout - finish user session  ***/
router.route('/logout').get( userController.logout );
/***** GET login database  -- display logged user  ***/
//router.route('/login').get( userController.loggedUser );



// INDEX ROUTES
// =============================================================================
router.route('/').get( controller.getFrontPage );


/***** POST beers -- create beer  ***/
//router.route('/beers').post( controller.create );
/***** GET beers -- list all beers  ***/
//router.route('/beers').get( controller.displayAll );
/***** GET beer -- get beer with specific name  ***/
//router.route('/beers/:beer_name').get( controller.getItem );
/***** PUT beer -- update beer with specific name  ***/
//router.route('/beers/:beer_name').put( controller.updateItem );
/***** DELETE request beer -- deletes beer with specific name  ***/
//router.route('/beers/:beer_name').delete( controller.deleteItem );


/***** POST tutorial -- create tutorila  ***/
//router.route('/create_tutorial').post( userController.createTutorial );



