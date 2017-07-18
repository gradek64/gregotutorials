var express    		=       require("express");
var multer     		=       require('multer');
var app        		=       express();
var path 			= 		require('path');
var fs 				= 		require('fs');



//var upload = multer({ dest: './public/uploads/'}).single('userPhoto')






/*********** Uplaod single file with settings ************/


/*var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/')
  },
  filename: function (req, file, cb) {
  			//save file with the extension;
          cb(null, file.fieldname + path.extname(file.originalname))

  }
})*/
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
//var upload = multer({ storage: storage }).single('userPhoto');



/*********** end of Uplaod single file with settings ************/



/*********** Uplaod multiple files (any files extension even video ) with settings ************/


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/');
  }/*,
  filename: function (req, file, cb) {
  			//save file with the extension;
          cb(null, file.originalname + path.extname(file.originalname));

  }*/
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
var upload = multer({ storage: storage }).any();

/*********** end of Uplaod single file with settings ************/





//var upload = multer({ dest: './public/uploads/'}).single('userPhoto')

/*app.use(multer(
	{ dest: './public/uploads/',
	rename: function (fieldname, filename) {
		return filename+Date.now();
	},
	onFileUploadStart: function (file) {
		console.log(file.originalname + ' is starting ...');
	},
	onFileUploadComplete: function (file) {
		console.log(file.fieldname + ' uploaded to  ' + file.path)
	}
}).single('userPhoto'));*/


//app.use(multer({dest:'./public/uploads/'}).single('userPhoto'))

app.get('/',function(req,res){
      res.sendFile(__dirname + "/index.html");
});

app.post('/profile', upload, function (req, res) {  // post request takes extera parameter as multer object upload = multer({ storage: storage }).any();
	console.log(req.body);
	console.log(req.files);

	res.send(req.body);
	var index = 0;

	//change the names for the files 

	req.files.forEach(function(file){

			index++;
			fs.rename(file.path,file.destination+'image-'+index + path.extname(file.originalname),function(err){ //file destination is the path only not part of name;
					if(err) throw err;
					console.log('changed');
			})
	})
			  /*upload(req, res, function (err) {
					    if (err) {
					      // An error occurred when uploading
					      return;
					    }
					    res.send(req.files);
				});*/
});


app.listen(3000,function(){
    console.log("Working on port 3000");
});