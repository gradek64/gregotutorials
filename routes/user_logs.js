//bring up the model to be built on
var User  = require('../apps/models/user'); //database collection called Beer as object;
var Tutorial  = require('../apps/models/tutorial'); //database collection called Beer as object;


var app = require('../routes/server'); 
var sessions = require('client-sessions');
var routerExport = require("../app");

//uploading files 
var path   = require('path');
var fs 	   = require('fs');
var multer  = require('multer');


//root directory  
var settings = require("web_settings");
// use global set as : settings.PROJECT_DIR;

/*
		above ↑ is set to determine root directory for node and requires addtional set in pacakge.json 

		1- create a file in the project root call it settings.js
		2- inside this file add this code

		module.exports = {
		    POST_MAX_SIZE : 40 , //MB
		    UPLOAD_MAX_FILE_SIZE: 40, //MB
		    PROJECT_DIR : __dirname
		};

		3- inside node_modules create a new module name it "settings" and inside the module index.js write this code:

		module.exports = require("../../settings");

		4- and any time you want your project directory just use

		var settings = require("settings");
		settings.PROJECT_DIR;

*/

// require the image editing file
var image_proccessing = path.resolve(__dirname, '../public/js/image_proccessing.js');//path resolve will find a path you want;
/* process image to get diffrent sizes in seperate file */
function compressAndResize ( imageMetadata ) {
  // We need to spawn a child process so that we do not block 
  // the EventLoop with cpu intensive image manipulation 

  
  /*
			child_process is native node module that will run any other process for you as runing a javascript file or listing staff in terminal;
			it could be started as fork,spawn and exec (example in root folder called node_child_process_exp.js)
  */
 
  var childProcess = require('child_process').fork(image_proccessing);
  childProcess.on('message', function(message) {
    console.log(message);
  });
  childProcess.on('error', function(error) {
    console.error(error.stack)
  });
  childProcess.on('exit', function() {
    console.log('process exited');
  });
  childProcess.send(imageMetadata);//send image metadata to image_prcoccessing.js
}

/***********/

//register cookie session 
app.use(sessions({
	cookieName:"session",
	secret:"gagewrv3tgegvwet35353gege33gbrbrrbr",//random string that server needs to send to browswer for validation;
	duration:30 * 60 * 10000,//30 minutes;
	activeDuration:5 * 60 * 10000 //5 minutes;
	})
);

// Upload files multer module;
// =============================================================================
var storage = multer.diskStorage({
  		destination: function (req, file, cb) {
    		cb(null, settings.PROJECT_DIR+'/public/uploads/'); //set path to store files root is public;
  		}
});
/*  IMPORTANT 
			Each file contains the following information:

			fieldname	===== Field name specified in the form	
			originalname	===== Name of the file on the user's computer	
			encoding	===== Encoding type of the file	
			mimetype =====	Mime type of the file	
			size	===== Size of the file in bytes	
			destination	===== The folder to which the file has been saved	in DiskStorage
			filename =====	The name of the file within the destination	 in DiskStorage
			path	===== The full path to the uploaded file	in DiskStorage
			buffer	===== A Buffer of the entire file	in MemoryStorage

*/
var upload = multer({ storage: storage }).any();  //it takes any upload in return is req.body and req.files 







// ----------------------------------------------------
//POST create a new User ( you can not user exports here since you need to have access to express dierect route to pass object )
app.post('/create', upload, function (req, res) {
			//req.files is array req.files[0]

		var newUser = new User();
		//loop throuh form.body name attibutes <input name='name' for example> f.eg
		for (var key in req.body) {
		     newUser[key] = req.body[key];	

		}
		//if there is image - rename and upload;
		var image;
		if(req.files.length>0){

			image = true;
			//add imagePhoto to the database collection
			newUser[req.files[0].fieldname]= '/uploads/' + newUser.name + path.extname(req.files[0].originalname);
		}
		
	  // save a user;
	  newUser.save(function(err) {
				    if (err) {throw err;}
				    else {
			        		//res.json(user); good way of testing 
			           		//req.session.user = newUser; //if you used user callback object values are reseved for some reason ! 

			           		

			           			if(image){
											console.log('image renamed to _original before resizeing later');
											//add additional properties to fom data object files[0]
											req.files[0].userName = newUser.name;
											req.files[0].userNamePath = req.files[0].destination + newUser.name + path.extname(req.files[0].originalname);
											//send image info (metadata);
											compressAndResize(req.files[0]); 
										//})
								}

								//set up cookie sesion for the new user;
								if(req.session && req.session.user){
							 		req.session.reset();
							 	}
						 	   	console.log("new user indentified ");
						        // if user is found and password is right
						        req.session.user = newUser;
						        res.locals.userLocal = req.session.user;
						        //res.json({title: 'Data', 'mydata': req.session.user});
						        res.render('page/index',{userName:req.session.user.name});


						         //res.render('page/index',{userName:'req.session.user.name'});


			        }
     });


        
});


 //POST admin/login  route to authenticate a user (POST http://localhost:8080/login) ;
 exports.loginuser =  function(req, res) {

 	if(req.session && req.session.user){
 		req.session.reset();
 	}

		email = /@/g;//check fi there is @ symbol in the serach string;
		//for now $or is too much srain and takes too much time to look in a database so it slow
		//email.test(req.body.name) ? params = {$or:[{ emailfield: req.body.name}, {pass: req.body.pass } ]} : params = {$or:[{  name: req.body.name}, {pass: req.body.pass} ]};
		email.test(req.body.name) ? params = { emailfield: req.body.name, pass: req.body.pass } : params = {  name: req.body.name, pass: req.body.pass };



		//console.log(params);

		//{ $or: [ { username: username }, { email: { value: username } } ] }		


  	  // find the user by email or userName
	  User.findOne(params,
	  		function(err, user) {

			  		

				    if (err) throw err;

				    if (!user) {
				        res.render('page/login',{error:'either your username or password is wrong...try again'});
				    } 
				    else if (user) {

				    		  if ( params.name && (user.name !== req.body.name)  ){ 
						            res.render('page/login',{error:'sorry..the user has not been found ..'});

						      }

						      if (  params.emailfield && (user.emailfield !== req.body.name) ){
										res.render('page/login',{error:'sorry..the user e-mail has not been found ..'});
							  }
							  
				    		 

						      // check if password matches
						      if (user.pass != req.body.pass) {
						         // res.render('page/login',{error:'sorry..wrong pa ssword ..!!'});

						      } else {

						        
						        console.log("user indentified ");
						        // if user is found and password is right
						        req.session.user = user;
						        res.locals.userLocal = req.session.user;
						        //res.json({title: 'Data', 'mydata': req.session.user});
						        res.render('page/index',{userName:req.session.user.name});

						      }   

				    }
		});
};

// GET resquest -----boostrap warinng lightbox message -------;
 exports.bootstrap_warning =  function(req, res, next) { 
 	var msg = req.params['msgContent'];
 	//res.json({title: 'Data', 'mydata': req.params}); //good way of testing 
 	res.render("page/bootstrap_warning_lightbox", { message:msg });
};


// GET resquest -----login page-------;
 exports.login =  function(req, res, next) { 
 	console.log('login');
 	res.render("page/login");
};

// GET resquest -----create user page-------;
 exports.createuser =  function(req, res, next) { 
 	console.log('createuser');
 	res.render("page/createuser");
 }



 // GET resquest ----- display user info -------;
 exports.userinfo =  function(req, res, next) { 

 	if(req.session && req.session.user){
 		console.log('redirect no user authenticated');
 		 User.find(	{name: req.session.user.name } ,function(err, user) {
            if (err) res.send(err);

            if(!user) {
            	console.log('no user');
            	req.session.reset();
           		 //redirect to login if user doenst exist
           		 res.redirect('page/login');
           	} else {
           		console.log('user set user_logs.js');
           		//keep user infomrmation in app.locals 
           		res.locals.userLocal = req.session.user;

				console.log('gwetw3tw3gwg...........................gwgegwe');
           		console.log(req.session.user);
           		res.render('page/userinfo',{userName:req.session.user.name,userImagePath:req.session.user.userImage});

           	}
            
        });  
 	} else {  //if comming from harcoded link;
           res.redirect('page/login');
 	}
 }

 // GET resquest ----- display user info -------;
 exports.userinfojson =  function(req, res, next) { 

 	if(req.session && req.session.user){
 		console.log('redirect no user authenticated');
 		 User.find(	{name: req.session.user.name } ,function(err, user) {
            if (err) res.send(err);

            if(!user) {
            	console.log('no user');
            	req.session.reset();
           		 //redirect to login if user doenst exist
           		 res.redirect('page/login');
           	} else {
           		console.log('user set');
           		console.log(user);
           		res.json({title: 'Data', 'mydata': user}); //good way of testing 

           	}
            
        });  
 	}
 }

 // POST resquest ----- update user info -------;
  //exports.updateinfo =  function(req, res, next) { 
  app.post('/update', upload, function (req, res) {


  	console.log('.........req.body.............');
  	console.log(req.body);
  	console.log('.........req.files.............');
  	console.log(req.files);

  
  	
  	if(req.session && req.session.user){
  		console.log('user update');
  		 User.findOne(	{name: req.session.user.name } ,function(err, foundUser) {

  		 	if (err) return handleError(err);

  		 	//loop throuh form.body name attibutes <input name='name' for example> f.eg
 			for (var key in req.body) {
 		     	foundUser[key] = req.body[key];
 			}

 			/** uplaod user avatar picture **/
 					var image;
 					if(req.files.length>0){
							image = true;
							//update imge extension in case is difrrent otherwise this part is not needed;
							foundUser[req.files[0].fieldname]= '/uploads/' + req.session.user.name + path.extname(req.files[0].originalname);
							//IMPORTANT you need to update a sesion user variable to get changes on session object!
							req.session.user[req.files[0].fieldname] = '/uploads/' + req.session.user.name + path.extname(req.files[0].originalname);
					}
 			

	           		if(image){

									//update imge extension in case is difrrent otherwise this part is not needed;
									req.files[0].userNamePath = req.files[0].destination + req.session.user.name + path.extname(req.files[0].originalname);
									//send image info (metadata);
									compressAndResize(req.files[0]); 
					}

 			/*******/


  		 	foundUser.save(function (err, updatedObject) {
  		 	    if (err) return handleError(err);
  		 	    	//update user finall
  		 	    						console.log('update user finall');
  		 	    	  		 	    	console.log(foundUser);
  		 	         res.render('page/userinfo',{userName:updatedObject.name});
  		 	});
                         
         });  
  	} else {  //if comming from harcoded link;
            res.redirect('page/login');
  	}

  });
  
//GET ------- logout --------
exports.logout=  function(req, res) {
	 console.log('log out');
	 //abort current user session;
	 req.session.reset();
	 res.redirect('/');
}

//GET ------- create Tutorial --------
exports.createTutorial =  function(req, res) {
	 console.log('creat tutorial');
 	 res.render("page/createTutorial");
}

//GET ------- create Tutorial --------
exports.portfolio =  function(req, res) {
	 console.log('show portfolio');
 	 res.render("page/add_portfolio_thumbs");
}

//GET ------- create Tutorial --------
exports.portfolio_test =  function(req, res) {
	 console.log('show portfolio test');
 	 res.render("page/add_portfolio_test");
}

//POST create a new tutorial
/*exports.createTutorial = function(req, res) {

	var tutorial,currentUser;
	//for the purpose of exercise find user here;
	User.findOne({
			name:"truskawek",//body parser defined in app.js no refference needed
		}, 
		function(err, new_user) {
			currentUser = new_user;

			tutorial = new Tutorial({ 
			    title: req.body.title, //body parser defined in app.js no refference needed
			    content: req.body.content,
			    author: req.body.author,
			    createdBy:currentUser._id
		    });

		    // save the sample user
		  	tutorial.save(function(err,callback_object) {
				    if (err) 	{throw err;}
				    else {  res.json({ message: callback_object }) }
		  	});
		}
	);
      
};*/
console.log('user_logs.js');
